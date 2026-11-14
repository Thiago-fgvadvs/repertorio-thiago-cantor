// Gera cifras-align.js a partir de tools/cifras-alinhadas.txt e das letras do app.js.
const fs = require("fs"), path = require("path"), root = path.join(__dirname, "..");
const s = fs.readFileSync(path.join(root, "app.js"), "utf8");
const SEED = eval("(" + s.slice(s.indexOf("SEED={songs:[") + 5, s.indexOf(",SEED_SONGS=SEED.songs")) + ")");
const hash = t => { let h = 5381; for (let i = 0; i < t.length; i++) h = ((h << 5) + h + t.charCodeAt(i)) >>> 0; return h; };
const out = {}; let id = null, song = null, raw = {}, erros = 0;
const err = m => { erros++; console.error("ERRO " + id + ": " + m); };
function cols(line, spec, n) {
  const res = [];
  for (const item of spec.trim().split(/\s+/)) {
    const k = item.indexOf("@"), ch = item.slice(0, k); let an = item.slice(k + 1), occ = 1, col;
    const m = an.match(/^(.*)#(\d+)$/); if (m) { an = m[1]; occ = +m[2]; }
    if (an === "$") col = Math.max(line.length + 1, res.length ? res[res.length - 1][0] + res[res.length - 1][1].length + 1 : 0); else if (an === "^") col = 0;
    else { col = -1; for (let i = 0; i < occ; i++) col = line.indexOf(an, col + 1); if (col < 0) { err(`linha ${n}: âncora "${an}" não achada em "${line}"`); continue; } }
    res.push([col, ch]);
  }
  for (let i = 1; i < res.length; i++) if (res[i][0] <= res[i - 1][0]) err(`linha ${n}: acordes fora de ordem`);
  return res;
}
for (const l of fs.readFileSync(path.join(__dirname, "cifras-alinhadas.txt"), "utf8").split("\n")) {
  if (!l.trim() || l[0] === "#" && l[1] !== "#") continue;
  if (l.startsWith("## ")) {
    id = l.slice(3).trim(); song = SEED.songs.find(x => x.id === id); raw = {};
    if (!song) { err("música não existe"); continue; }
    out[id] = { h: hash(song.letra || ""), l: {} }; continue;
  }
  if (!song) continue;
  const L = song.letra.split("\n"); let m;
  if ((m = l.match(/^(\d+)=(\d+)$/))) { if (!raw[m[2]]) err("cópia de linha sem marcação: " + l); else { raw[m[1]] = raw[m[2]]; out[id].l[m[1]] = cols(L[+m[1]], raw[m[2]], m[1]); } }
  else if ((m = l.match(/^(\d+):\s*(.+)$/))) { if (L[+m[1]] == null) err("linha inexistente " + m[1]); else { raw[m[1]] = m[2]; out[id].l[m[1]] = cols(L[+m[1]], m[2], m[1]); } }
  else err("não entendi: " + l);
}
if (erros) process.exit(1);
fs.writeFileSync(path.join(root, "cifras-align.js"), "/* Gerado por tools/montar-cifras.js — não editar à mão. Posição dos acordes sobre a letra. */\nwindow.CIFRAS_ALIGN = " + JSON.stringify(out) + ";\n");
console.log("ok:", Object.keys(out).length, "músicas");
