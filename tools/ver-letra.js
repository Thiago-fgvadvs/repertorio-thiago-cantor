// Mostra a letra numerada de uma ou mais músicas: node tools/ver-letra.js id1 id2 ...
const fs = require("fs"), path = require("path");
const s = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const SEED = eval("(" + s.slice(s.indexOf("SEED={songs:[") + 5, s.indexOf(",SEED_SONGS=SEED.songs")) + ")");
for (const id of process.argv.slice(2)) { const g = SEED.songs.find(x => x.id === id); console.log("## " + id); (g.letra || "").split("\n").forEach((l, i) => { if (l.trim()) console.log(i + "|" + l); }); }
