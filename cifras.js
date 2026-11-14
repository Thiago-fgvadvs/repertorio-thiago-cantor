/* Aba "Cifras" (piano) — módulo separado do app.js.
   Usa os globais do app (C = cores) apenas em tempo de execução.
   Grava no mesmo campo "cifra" de cada música (updateSong), nada novo no banco. */
(function () {
  "use strict";
  var h = React.createElement;
  var useState = React.useState, useEffect = React.useEffect, useMemo = React.useMemo, useRef = React.useRef;

  /* ---------- teoria: notas e acordes ---------- */
  var PC = { C: 0, "C#": 1, Db: 1, D: 2, "D#": 3, Eb: 3, E: 4, Fb: 4, "E#": 5, F: 5, "F#": 6, Gb: 6, G: 7, "G#": 8, Ab: 8, A: 9, "A#": 10, Bb: 10, B: 11, Cb: 11, "B#": 0 };
  var N_SHARP = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  var N_FLAT = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
  var N_PT = { C: "Dó", D: "Ré", E: "Mi", F: "Fá", G: "Sol", A: "Lá", B: "Si" };
  var SUF_OK = /^(?:maj|min|sus|add|dim|aug|m|M|°|º|ø|\+|-|\d|\(|\)|b|#|,|\.)*$/;
  var CH = /^([A-G][#b]?)([^\/\s]*)(?:\/([A-G][#b]?))?$/;
  var IGNORE = /^(?:\|+|%|:|-|–|\.{2,}|…|N\.?C\.?|\(?x\d+\)?|\(?\d+x\)?)$/i;

  function splitChord(tok) {
    var t = String(tok || "").replace("6/9", "69");
    var m = t.match(CH);
    if (!m || !SUF_OK.test(m[2] || "")) return null;
    return { root: m[1], suf: m[2] || "", bass: m[3] || "" };
  }
  function isChord(tok) { return !!splitChord(tok); }

  function parseLine(line) {
    var label = "", rest = line;
    var lm = line.match(/^(\s*\[[^\]]*\])(.*)$/);
    if (lm) { label = lm[1]; rest = lm[2]; }
    var toks = rest.trim().split(/\s+/).filter(Boolean).filter(function (t) { return !IGNORE.test(t); });
    var n = toks.filter(isChord).length;
    var chordLine = toks.length > 0 && n / toks.length >= 0.6;
    return { label: label, rest: rest, chordLine: chordLine, onlyLabel: !!label && toks.length === 0 };
  }

  function chordNotes(tok) {
    var c = splitChord(tok);
    if (!c) return null;
    var s = c.suf.replace(/[()\s,]/g, "");
    var third = 4, fifth = 7, seventh = null, ext = [], minor = false;
    function take(re) { if (re.test(s)) { s = s.replace(re, ""); return true; } return false; }
    if (take(/maj7|maj9|7M|M7|M9|maj/)) seventh = 11;
    if (take(/m7b5|ø/)) { third = 3; fifth = 6; seventh = 10; minor = true; }
    if (take(/dim7|°7|º7/)) { third = 3; fifth = 6; seventh = 9; minor = true; }
    if (take(/°|º/)) { third = 3; fifth = 6; seventh = 9; minor = true; }
    if (take(/dim/)) { third = 3; fifth = 6; minor = true; }
    if (take(/^(?:min|m|-)/)) { third = 3; minor = true; }
    if (take(/aug|\+5|5\+|#5|\+/)) fifth = 8;
    if (take(/b5|5-/)) fifth = 6;
    if (take(/sus2/)) third = 2;
    if (take(/sus4|sus|4/)) third = 5;
    if (take(/add9|add2/)) ext.push(14);
    if (take(/b9|9-/)) { ext.push(13); if (seventh === null) seventh = 10; }
    if (take(/#9|9\+/)) { ext.push(15); if (seventh === null) seventh = 10; }
    if (take(/#11|11\+/)) { ext.push(18); if (seventh === null) seventh = 10; }
    if (take(/b13|13-/)) { ext.push(20); if (seventh === null) seventh = 10; }
    if (take(/69/)) { ext.push(9); ext.push(14); }
    if (take(/13/)) { ext.push(21); if (seventh === null) seventh = 10; }
    if (take(/11/)) { ext.push(17); if (seventh === null) seventh = 10; }
    if (take(/9/)) { ext.push(14); if (seventh === null) seventh = 10; }
    if (take(/7/)) { if (seventh === null) seventh = 10; }
    if (take(/6/)) ext.push(9);
    var power = false;
    if (take(/5/)) power = true;
    var iv = [0];
    if (!power) iv.push(third);
    iv.push(fifth);
    if (seventh !== null) iv.push(seventh);
    ext.forEach(function (e) { iv.push(e); });
    var flats = /b/.test(c.root) || c.root === "F" || (minor && /^[DGC]$/.test(c.root));
    return { root: c.root, bass: c.bass, iv: iv, flats: flats };
  }

  function noteName(pc, flats) { return (flats ? N_FLAT : N_SHARP)[((pc % 12) + 12) % 12]; }
  function namePt(n) { return (N_PT[n.charAt(0)] || n.charAt(0)) + (n.charAt(1) === "#" ? "♯" : n.charAt(1) === "b" ? "♭" : ""); }

  /* pitches para desenhar (0 = Dó da 1ª oitava do desenho) */
  function voicing(info, inv) {
    var r = PC[info.root], ps = [];
    info.iv.forEach(function (i) {
      var p = r + i;
      while (p - r > 12 && p > 23) p -= 12;
      if (ps.indexOf(p) < 0) ps.push(p);
    });
    ps.sort(function (a, b) { return a - b; });
    for (var k = 0; k < (inv || 0) && k < ps.length - 1; k++) { ps.push(ps.shift() + 12); }
    while (Math.min.apply(null, ps) >= 12) ps = ps.map(function (p) { return p - 12; });
    return ps;
  }

  /* ---------- transposição (mantém o alinhamento sobre a letra) ---------- */
  var N_MINOR = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "Bb", "B"]; // C#m, F#m, G#m
  var N_MAJOR = ["C", "Db", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"]; // Db, Eb, Ab, Bb
  function pcOf(n, st) { return (((PC[n] + st) % 12) + 12) % 12; }
  function trToken(tok, st) {
    var c = splitChord(tok);
    if (!c) return tok;
    var suf = tok.replace("6/9", "\u0001").slice(c.root.length);
    var minor = /^(?:m(?!aj)|min|-|dim|°|º|ø)/.test(c.suf);
    var out = (minor ? N_MINOR : N_MAJOR)[pcOf(c.root, st)];
    var flats = /b/.test(out) || out === "F";
    if (c.bass) { suf = suf.slice(0, suf.lastIndexOf("/")); }
    out += suf.replace("\u0001", "6/9");
    if (c.bass) out += "/" + (flats ? N_FLAT : N_SHARP)[pcOf(c.bass, st)];
    return out;
  }
  function trLine(line, st) {
    var p = parseLine(line);
    if (!p.chordLine) return line;
    var parts = p.rest.split(/(\s+)/), debt = 0, out = "";
    for (var i = 0; i < parts.length; i++) {
      var t = parts[i];
      if (!t) continue;
      if (/^\s+$/.test(t)) {
        if (debt > 0) { var cut = Math.min(debt, t.length - 1); t = t.slice(cut); debt -= cut; }
        else if (debt < 0) { t = t + new Array(-debt + 1).join(" "); debt = 0; }
        out += t;
      } else {
        var n = isChord(t) ? trToken(t, st) : t;
        debt += n.length - t.length;
        out += n;
      }
    }
    return p.label + out;
  }
  function transpose(text, st) {
    if (!st || !text) return text || "";
    return text.split("\n").map(function (l) { return trLine(l, st); }).join("\n");
  }
  function hasLyrics(text) {
    var n = 0;
    (text || "").split("\n").forEach(function (l) { var p = parseLine(l); if (l.trim() && !p.chordLine && !p.onlyLabel) n++; });
    return n > 3;
  }
  function firstChord(text) {
    var ls = (text || "").split("\n");
    for (var i = 0; i < ls.length; i++) {
      var p = parseLine(ls[i]);
      if (!p.chordLine) continue;
      var t = p.rest.trim().split(/\s+/).filter(isChord)[0];
      if (t) return t;
    }
    return "";
  }

  /* ---------- som ---------- */
  var actx = null;
  function play(ps, bassPc) {
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      if (actx.state === "suspended") actx.resume();
      var t0 = actx.currentTime + 0.03, all = ps.map(function (p) { return 48 + p; });
      if (bassPc != null) all.unshift(36 + bassPc);
      all.forEach(function (midi, i) {
        var o = actx.createOscillator(), g = actx.createGain(), st = t0 + i * 0.07;
        o.type = "triangle"; o.frequency.value = 440 * Math.pow(2, (midi - 69) / 12);
        g.gain.setValueAtTime(0.0001, st);
        g.gain.exponentialRampToValueAtTime(0.16, st + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, st + 1.9);
        o.connect(g); g.connect(actx.destination); o.start(st); o.stop(st + 2);
      });
    } catch (e) { /* sem áudio: segue só o desenho */ }
  }

  /* ---------- desenho do teclado ---------- */
  var WHITE = [0, 2, 4, 5, 7, 9, 11], BLACK = { 1: 0, 3: 1, 6: 3, 8: 4, 10: 5 };
  function Keyboard(props) {
    var ps = props.pitches, flats = props.flats, rootPc = props.rootPc;
    var maxP = Math.max.apply(null, ps), octs = maxP >= 24 ? 3 : 2;
    var W = 24, H = 104, BW = 15, BH = 64, n = octs * 7, els = [];
    var on = {}; ps.forEach(function (p) { on[p] = true; });
    for (var o = 0; o < octs; o++) WHITE.forEach(function (pc, i) {
      var p = o * 12 + pc, x = (o * 7 + i) * W, act = !!on[p], isRoot = act && pc === rootPc;
      els.push(h("rect", { key: "w" + p, x: x + 0.5, y: 0.5, width: W - 1, height: H - 1, rx: 3, fill: act ? (isRoot ? "#ffd24d" : "#ffe9a3") : "#f4f7fb", stroke: "#0c1622", strokeWidth: 1 }));
      if (act) els.push(h("text", { key: "wt" + p, x: x + W / 2, y: H - 9, textAnchor: "middle", fontSize: 10.5, fontWeight: 700, fill: "#2b2100" }, noteName(pc, flats)));
    });
    for (var o2 = 0; o2 < octs; o2++) Object.keys(BLACK).forEach(function (k) {
      var pc = Number(k), p = o2 * 12 + pc, x = (o2 * 7 + BLACK[k] + 1) * W - BW / 2, act = !!on[p], isRoot = act && pc === rootPc;
      els.push(h("rect", { key: "b" + p, x: x, y: 0, width: BW, height: BH, rx: 2.5, fill: act ? (isRoot ? "#ffb300" : "#ffd24d") : "#101c2b", stroke: "#0c1622", strokeWidth: 1 }));
      if (act) els.push(h("text", { key: "bt" + p, x: x + BW / 2, y: BH - 7, textAnchor: "middle", fontSize: 8.5, fontWeight: 700, fill: "#2b2100" }, noteName(pc, flats)));
    });
    return h("svg", { viewBox: "0 0 " + n * W + " " + H, style: { width: "100%", maxWidth: octs === 3 ? 560 : 420, display: "block", margin: "0 auto" }, role: "img", "aria-label": "Teclado com as notas do acorde" }, els);
  }

  /* ---------- folha do acorde (abre ao tocar na cifra) ---------- */
  function ChordSheet(props) {
    var st = useState(props.chord || "C"), chord = st[0], setChord = st[1];
    var si = useState(0), inv = si[0], setInv = si[1];
    var info = chordNotes(chord.trim());
    useEffect(function () { setInv(0); }, [chord]);
    var ps = info ? voicing(info, inv) : [];
    var bassPc = info && info.bass ? PC[info.bass] : null;
    var names = ps.map(function (p) { return noteName(p, info.flats); });
    var invNames = ["Fundamental", "1ª inversão", "2ª inversão", "3ª inversão"];
    var nInv = info ? Math.min(4, voicing(info, 0).length) : 0;
    return h("div", { style: { position: "fixed", inset: 0, zIndex: 95, background: "rgba(0,0,0,0.55)", display: "flex", alignItems: "flex-end", justifyContent: "center" }, onClick: props.onClose },
      h("div", { onClick: function (e) { e.stopPropagation(); }, style: { background: C.card, border: "1px solid " + C.line, borderRadius: "18px 18px 0 0", width: "100%", maxWidth: 620, padding: "14px 14px calc(16px + env(safe-area-inset-bottom))" } },
        h("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 10 } },
          h("input", { value: chord, onChange: function (e) { setChord(e.target.value); }, "aria-label": "Acorde", spellCheck: false, autoCapitalize: "off", autoCorrect: "off",
            style: { background: C.card2, border: "1px solid " + C.line, color: C.gold, fontWeight: 800, fontSize: 24, width: 130, padding: "4px 10px", borderRadius: 10, outline: "none", fontFamily: "ui-monospace, Menlo, monospace" } }),
          h("div", { style: { flex: 1, minWidth: 0, fontSize: 13, color: C.mut, lineHeight: 1.35 } },
            info ? h("div", null, h("b", { style: { color: C.txt } }, names.join(" · ")), h("br"), names.map(namePt).join(" · ")) : "Acorde não reconhecido"),
          h("button", { onClick: props.onClose, "aria-label": "Fechar", style: { background: C.card2, color: C.txt, border: 0, borderRadius: 10, padding: "8px 12px", fontSize: 16 } }, "✕")),
        info ? h(Keyboard, { pitches: ps, flats: info.flats, rootPc: PC[info.root] }) : null,
        info ? h("div", { style: { display: "flex", flexWrap: "wrap", alignItems: "center", gap: 6, marginTop: 12 } },
          invNames.slice(0, nInv).map(function (lb, i) {
            return h("button", { key: i, onClick: function () { setInv(i); }, style: { background: inv === i ? C.gold : C.card2, color: inv === i ? "#2b2100" : C.txt, border: 0, borderRadius: 999, padding: "7px 12px", fontSize: 12.5, fontWeight: 600 } }, lb);
          }),
          h("button", { onClick: function () { play(ps, bassPc); }, style: { marginLeft: "auto", background: C.green, color: "#04261b", border: 0, borderRadius: 999, padding: "7px 14px", fontSize: 12.5, fontWeight: 700 } }, "▶ Ouvir")) : null,
        info ? h("p", { style: { fontSize: 12.5, color: C.mut, margin: "10px 0 0", lineHeight: 1.45 } },
          bassPc != null
            ? ["Mão esquerda (baixo): ", h("b", { key: "b", style: { color: C.blue } }, noteName(bassPc, info.flats) + " (" + namePt(noteName(bassPc, info.flats)) + ")"), " · mão direita: as teclas em destaque."]
            : ["Mão esquerda: ", h("b", { key: "b", style: { color: C.blue } }, info.root + " (" + namePt(info.root) + ")"), " · mão direita: as teclas em destaque. Tônica em dourado forte."]) : null));
  }

  /* ---------- texto da cifra com acordes clicáveis ---------- */
  function CifraText(props) {
    var lines = (props.text || "").split("\n");
    return h("div", { style: { fontFamily: "ui-monospace, Menlo, Consolas, monospace", fontSize: props.font, lineHeight: 1.55, display: "inline-block", minWidth: "100%" } },
      lines.map(function (line, i) {
        var p = parseLine(line);
        if (!p.chordLine) {
          if (p.onlyLabel) return h("div", { key: i, style: { color: C.blue, fontWeight: 700, marginTop: 8, whiteSpace: "pre" } }, line);
          return h("div", { key: i, style: { whiteSpace: "pre" } }, line || " ");
        }
        var grid = !!p.label || p.rest.indexOf("|") >= 0;
        var parts = p.rest.split(/(\s+)/).filter(function (x) { return x !== ""; });
        return h("div", { key: i, style: { whiteSpace: grid ? "pre-wrap" : "pre", color: C.gold, fontWeight: 700, marginTop: p.label ? 8 : 0 } },
          p.label ? h("span", { style: { color: C.blue } }, p.label) : null,
          parts.map(function (t, j) {
            if (/^\s+$/.test(t) || !isChord(t)) return h("span", { key: j, style: isChord(t) ? null : { color: C.mut, fontWeight: 400 } }, t);
            return h("span", { key: j, role: "button", tabIndex: 0, className: "cf-ch", onClick: function () { props.onChord(t); },
              onKeyDown: function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); props.onChord(t); } } }, t);
          }));
      }));
  }

  var btn = function (active) { return { background: active ? C.gold : C.card, color: active ? "#2b2100" : C.txt, border: 0, borderRadius: 9, padding: "7px 10px", fontSize: 12.5, fontWeight: 600, lineHeight: 1 }; };

  /* ---------- editor ---------- */
  var SECOES = ["Intro", "Verso", "Pré-refrão", "Refrão", "Ponte", "Solo", "Final"];
  function CifraEditor(props) {
    var s = useState(props.initial || ""), txt = s[0], setTxt = s[1];
    var ref = useRef(null);
    function insert(str) {
      var el = ref.current, a = el ? el.selectionStart : txt.length, b = el ? el.selectionEnd : txt.length;
      var pre = txt.slice(0, a), nl = pre && pre.charAt(pre.length - 1) !== "\n" ? "\n" : "";
      setTxt(pre + nl + str + txt.slice(b));
      setTimeout(function () { if (el) { el.focus(); var pos = (pre + nl + str).length; el.setSelectionRange(pos, pos); } }, 0);
    }
    function withLyrics() {
      var body = (props.letra || "").split("\n").map(function (l) { return l.trim() ? "\n" + l : ""; }).join("\n");
      setTxt((txt.trim() ? txt.replace(/\s+$/, "") + "\n\n" : "") + body.replace(/^\n/, " \n"));
    }
    return h("div", { style: { position: "fixed", inset: 0, zIndex: 86, background: C.bg, color: C.txt, display: "flex", flexDirection: "column", paddingTop: "env(safe-area-inset-top)" } },
      h("div", { style: { background: C.card, borderBottom: "1px solid " + C.line, padding: "8px 12px", display: "flex", alignItems: "center", gap: 8 } },
        h("button", { onClick: props.onClose, style: btn(false) }, "Cancelar"),
        h("p", { style: { flex: 1, minWidth: 0, fontWeight: 700, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, "Cifra · " + props.title),
        h("button", { onClick: function () { props.onSave(txt.replace(/\s+$/, "")); }, style: { background: C.green, color: "#04261b", border: 0, borderRadius: 9, padding: "8px 14px", fontSize: 13, fontWeight: 700 } }, "Salvar")),
      h("div", { style: { padding: "8px 12px", display: "flex", gap: 6, overflowX: "auto", background: C.card2, borderBottom: "1px solid " + C.line } },
        SECOES.map(function (sec) { return h("button", { key: sec, onClick: function () { insert("[" + sec + "] "); }, style: Object.assign({}, btn(false), { whiteSpace: "nowrap", flexShrink: 0 }) }, "[" + sec + "]"); }),
        props.letra ? h("button", { onClick: withLyrics, style: Object.assign({}, btn(false), { whiteSpace: "nowrap", flexShrink: 0, color: C.gold }) }, "+ Letra com espaço p/ acordes") : null),
      h("textarea", { ref: ref, value: txt, onChange: function (e) { setTxt(e.target.value); }, wrap: "off", spellCheck: false, autoCapitalize: "off", autoCorrect: "off",
        placeholder: "[Intro] C  G  Am  F\n\n[Verso]\nC            G\nprimeira linha da letra\nAm           F\nsegunda linha da letra\n\nDica: escreva os acordes na linha de cima da letra.\nNo modo leitura, toque no acorde para ver no piano.",
        style: { flex: 1, width: "100%", boxSizing: "border-box", background: C.bg, color: C.txt, border: 0, outline: "none", padding: 14, fontFamily: "ui-monospace, Menlo, Consolas, monospace", fontSize: 15, lineHeight: 1.5, whiteSpace: "pre", overflow: "auto", resize: "none" } }),
      h("p", { style: { margin: 0, padding: "6px 12px calc(8px + env(safe-area-inset-bottom))", fontSize: 11.5, color: C.mut, background: C.card } },
        "Linha só com acordes = cifra (vira botão). Use | para separar compassos. Baixo invertido: C/E."));
  }

  /* ---------- leitura da cifra ---------- */
  function CifraView(props) {
    var song = props.song, seed = (window.CIFRAS_SEED || {})[song.id] || "";
    var base = song.cifra || seed, isSeed = !song.cifra && !!seed;
    var sTr = useState(0), tr = sTr[0], setTr = sTr[1];
    var sFont = useState(function () { try { return Number(localStorage.getItem("cf_font")) || 17; } catch (e) { return 17; } }), font = sFont[0], setFontRaw = sFont[1];
    var sRoll = useState(0), roll = sRoll[0], setRoll = sRoll[1];
    var sCh = useState(null), ch = sCh[0], setCh = sCh[1];
    var sEd = useState(!base && props.editor), editing = sEd[0], setEditing = sEd[1];
    var sLet = useState(null), letraOpt = sLet[0], setLetra = sLet[1];
    var box = useRef(null);
    var text = useMemo(function () { return transpose(base, tr); }, [base, tr]);
    var showLetra = letraOpt === null ? (!!base && !hasLyrics(base)) : letraOpt;
    var tom = firstChord(text);
    function setFont(v) { setFontRaw(v); try { localStorage.setItem("cf_font", String(v)); } catch (e) {} }
    useEffect(function () {
      if (!roll || !box.current) return;
      var el = box.current, id = setInterval(function () { el.scrollTop += roll; }, 60);
      return function () { clearInterval(id); };
    }, [roll]);
    function edit() { if (props.editor) setEditing(true); else props.onOpenLock(); }
    return h("div", { style: { position: "fixed", inset: 0, zIndex: 80, background: C.bg, color: C.txt, display: "flex", flexDirection: "column", paddingTop: "env(safe-area-inset-top)" } },
      h("div", { style: { background: C.card, borderBottom: "1px solid " + C.line, padding: "8px 12px", display: "flex", alignItems: "center", gap: 8 } },
        h("button", { onClick: props.onClose, "aria-label": "Fechar", style: { background: C.card2, color: C.txt, border: 0, borderRadius: 9, padding: "8px 12px", fontSize: 15 } }, "✕"),
        h("div", { style: { flex: 1, minWidth: 0 } },
          h("p", { style: { fontWeight: 700, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, song.t),
          h("p", { style: { fontSize: 12, color: C.mut, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, (song.artist ? song.artist + " · " : "") + "piano")),
        h("button", { onClick: edit, style: { background: C.card2, color: C.gold, border: 0, borderRadius: 9, padding: "8px 12px", fontSize: 13, fontWeight: 700 } }, base ? "Editar" : "+ Cifra")),
      h("div", { style: { background: C.card2, borderBottom: "1px solid " + C.line, padding: "8px 12px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, fontSize: 12.5 } },
        h("div", { style: { display: "flex", alignItems: "center", gap: 4 } },
          h("span", { style: { color: C.mut } }, "Aa"),
          h("button", { onClick: function () { setFont(Math.max(12, font - 1)); }, "aria-label": "Diminuir letra", style: btn(false) }, "−"),
          h("button", { onClick: function () { setFont(Math.min(32, font + 1)); }, "aria-label": "Aumentar letra", style: btn(false) }, "+")),
        base ? h("div", { style: { display: "flex", alignItems: "center", gap: 4 } },
          h("span", { style: { color: C.mut } }, "Tom"),
          h("button", { onClick: function () { setTr(tr - 1); }, "aria-label": "Baixar meio tom", style: btn(false) }, "−"),
          h("span", { style: { color: C.gold, fontWeight: 800, minWidth: 34, textAlign: "center" } }, tom || "–"),
          h("button", { onClick: function () { setTr(tr + 1); }, "aria-label": "Subir meio tom", style: btn(false) }, "+"),
          tr ? h("button", { onClick: function () { setTr(0); }, style: Object.assign({}, btn(false), { color: C.mut }) }, (tr > 0 ? "+" : "") + tr + " ↺") : null) : null,
        h("button", { onClick: function () { setRoll(roll ? 0 : 1); }, style: btn(!!roll) }, roll ? "❚❚ rolar" : "▶ rolar"),
        roll ? h("input", { type: "range", min: 1, max: 5, value: roll, onChange: function (e) { setRoll(Number(e.target.value)); }, style: { width: 70 }, "aria-label": "Velocidade" }) : null,
        song.letra && base ? h("button", { onClick: function () { setLetra(!showLetra); }, style: btn(showLetra) }, "Letra") : null,
        h("button", { onClick: function () { setCh(tom || "C"); }, style: Object.assign({}, btn(false), { marginLeft: "auto" }) }, "🎹 Acordes")),
      h("div", { ref: box, style: { flex: 1, overflow: "auto", WebkitOverflowScrolling: "touch", padding: "14px 16px 40px" } },
        isSeed ? h("p", { style: { fontSize: 12, color: C.mut, background: C.card, border: "1px solid " + C.line, borderRadius: 10, padding: "8px 10px", margin: "0 0 12px", lineHeight: 1.45 } },
          "Harmonia-base sugerida (sem a letra alinhada). Confira de ouvido e ajuste em “Editar”. Toque em qualquer acorde para ver no piano.") : null,
        base ? h(CifraText, { text: text, font: font, onChord: setCh })
          : h("div", { style: { textAlign: "center", color: C.mut, padding: "36px 10px" } },
            h("p", { style: { fontSize: 15, margin: "0 0 12px" } }, "Esta música ainda não tem cifra."),
            h("button", { onClick: edit, style: { background: C.gold, color: "#2b2100", border: 0, borderRadius: 12, padding: "11px 18px", fontWeight: 700, fontSize: 14 } }, "+ Escrever a cifra")),
        showLetra && song.letra ? h("div", { style: { borderTop: "1px solid " + C.line, marginTop: 18, paddingTop: 14 } },
          h("p", { style: { color: C.blue, fontWeight: 700, fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", margin: "0 0 8px" } }, "Letra"),
          h("div", { style: { fontSize: font, lineHeight: 1.6, whiteSpace: "pre-wrap", wordBreak: "break-word" } }, song.letra)) : null),
      ch ? h(ChordSheet, { key: ch, chord: ch, onClose: function () { setCh(null); } }) : null,
      editing ? h(CifraEditor, { title: song.t, initial: base, letra: song.letra, onClose: function () { setEditing(false); if (!base) props.onClose(); },
        onSave: function (t) { props.updateSong(song.id, { cifra: t }); setEditing(false); } }) : null);
  }

  /* ---------- aba ---------- */
  function norm(s) { return (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function CifrasTab(props) {
    var seeds = window.CIFRAS_SEED || {};
    var sQ = useState(""), q = sQ[0], setQ = sQ[1];
    var sF = useState("com"), filtro = sF[0], setFiltro = sF[1];
    var sO = useState(null), openId = sO[0], setOpen = sO[1];
    var sD = useState(false), dict = sD[0], setDict = sD[1];
    var songs = props.songs || [];
    var has = function (s) { return !!(s.cifra || seeds[s.id]); };
    var nCom = useMemo(function () { return songs.filter(has).length; }, [songs]);
    var list = useMemo(function () {
      var ws = norm(q).split(/\s+/).filter(Boolean);
      return songs.filter(function (s) {
        if (filtro === "com" && !has(s) && !ws.length) return false;
        if (!ws.length) return true;
        var hay = norm(s.t + " " + (s.artist || ""));
        return ws.every(function (w) { return hay.indexOf(w) >= 0; });
      }).sort(function (a, b) { return a.t.localeCompare(b.t, "pt"); });
    }, [songs, q, filtro]);
    var open = openId ? songs.filter(function (s) { return s.id === openId; })[0] : null;
    var chip = function (k, lb) { return h("button", { key: k, onClick: function () { setFiltro(k); }, style: { background: filtro === k ? C.gold : C.card, color: filtro === k ? "#2b2100" : C.mut, border: "1px solid " + C.line, borderRadius: 999, padding: "6px 12px", fontSize: 12, fontWeight: 600, whiteSpace: "nowrap" } }, lb); };
    return h("div", null,
      h("div", { style: { background: "linear-gradient(135deg," + C.card2 + "," + C.card + ")", border: "1px solid " + C.line, borderRadius: 16, padding: "14px 16px", marginBottom: 12 } },
        h("p", { style: { fontSize: 20, fontWeight: 800, margin: 0 } }, "Cifras · Piano"),
        h("p", { style: { color: C.mut, fontSize: 12.5, margin: "4px 0 0", lineHeight: 1.45 } }, "Abra a música e toque em um acorde (ex.: A) para ver as teclas no piano.")),
      h("input", { value: q, onChange: function (e) { setQ(e.target.value); }, placeholder: "Buscar música para abrir ou cifrar…", "aria-label": "Buscar",
        style: { width: "100%", boxSizing: "border-box", background: C.card, border: "1px solid " + C.line, color: C.txt, borderRadius: 12, padding: "10px 12px", outline: "none", marginBottom: 8, fontSize: 16 } }),
      h("div", { style: { display: "flex", gap: 8, overflowX: "auto", paddingBottom: 8 } },
        chip("com", "Com cifra (" + nCom + ")"), chip("todas", "Todas (" + songs.length + ")"),
        h("button", { onClick: function () { setDict(true); }, style: { background: C.card, color: C.txt, border: "1px solid " + C.line, borderRadius: 999, padding: "6px 12px", fontSize: 12, fontWeight: 600, whiteSpace: "nowrap" } }, "🎹 Dicionário de acordes"),
        props.editor && props.onNew ? h("button", { onClick: props.onNew, style: { background: C.gold, color: "#2b2100", border: 0, borderRadius: 999, padding: "6px 12px", fontSize: 12, fontWeight: 700, whiteSpace: "nowrap" } }, "+ Nova música") : null),
      h("p", { style: { fontSize: 12, color: C.mut, margin: "0 0 8px" } }, list.length + " música(s)"),
      h("div", { style: { display: "flex", flexDirection: "column", gap: 8 } }, list.slice(0, 400).map(function (s) {
        var mine = !!s.cifra, sd = !mine && !!seeds[s.id], tom = firstChord(s.cifra || seeds[s.id] || "");
        return h("button", { key: s.id, onClick: function () { setOpen(s.id); }, style: { background: C.card, border: "1px solid " + C.line, color: C.txt, borderRadius: 12, padding: 12, display: "flex", alignItems: "center", gap: 12, textAlign: "left", width: "100%" } },
          h("div", { style: { background: C.card2, color: tom ? C.gold : C.mut, minWidth: 44, textAlign: "center", borderRadius: 9, padding: "9px 4px", fontWeight: 800, fontSize: 13, fontFamily: "ui-monospace, Menlo, monospace" } }, tom || "+"),
          h("div", { style: { flex: 1, minWidth: 0 } },
            h("p", { style: { fontWeight: 600, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, s.t),
            h("p", { style: { fontSize: 12, color: C.mut, margin: "2px 0 0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
              (s.artist ? s.artist + " · " : "") + (mine ? "cifra" : sd ? "harmonia-base" : "sem cifra — toque para adicionar"))),
          h("span", { style: { color: C.gold, fontSize: 18 } }, "›"));
      })),
      list.length > 400 ? h("p", { style: { fontSize: 12, color: C.mut, textAlign: "center", marginTop: 10 } }, "Mostrando 400 — use a busca para achar as demais.") : null,
      open ? h(CifraView, { key: open.id, song: open, editor: props.editor, onOpenLock: props.onOpenLock, updateSong: props.updateSong, onClose: function () { setOpen(null); } }) : null,
      dict ? h(ChordSheet, { chord: "C", onClose: function () { setDict(false); } }) : null);
  }

  /* ícone da aba (mesma assinatura dos ícones do app) */
  function CifrasIcon(a) {
    a = a || {};
    return h("svg", { width: a.size || 22, height: a.size || 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: a.className, style: a.style, "aria-hidden": "true" },
      h("rect", { x: 3, y: 4, width: 18, height: 16, rx: 2 }), h("path", { d: "M9 4v9M15 4v9M7.5 13v7M12 13v7M16.5 13v7" }));
  }

  var css = document.createElement("style");
  css.textContent = ".cf-ch{cursor:pointer;border-bottom:1px dotted currentColor;border-radius:3px;-webkit-tap-highlight-color:rgba(255,210,77,.3)}.cf-ch:active,.cf-ch:focus-visible{background:rgba(255,210,77,.22);outline:none}";
  document.head.appendChild(css);

  window.CifrasTab = CifrasTab;
  window.CifrasIcon = CifrasIcon;
  window.__cifras = { chordNotes: chordNotes, voicing: voicing, transpose: transpose, parseLine: parseLine };
})();
