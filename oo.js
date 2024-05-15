function Armas (nome, categoria, calibre) {
    this.nome = nome;
    this.categoria = categoria;
    this.calibre = calibre
}

function Lmg(nome, categoria, calibre, tpm){
    Armas.call(this, nome, categoria, calibre);
    this.tpm = tpm;
}

function Faca(nome, categoria, calibre, material) {
    Armas.call(this, nome, categoria, calibre);
    this.material = material;
}

const mp5 = new Armas ("Heckler & Koch MP5", "Submetralhadora", "9x19mm");
const m60 = new Lmg ("M60", "Metralhadora Leve", "7,62mm", "550 tiros por minuto");
const facaAk47 = new Faca ("Faca Ak47", "Arma Branca", "17cm", "Aço");

console.log(mp5);
console.log(m60);
console.log(facaAk47);