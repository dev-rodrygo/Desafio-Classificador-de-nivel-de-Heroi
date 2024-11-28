const prompt = require('prompt-sync')()
let NivelDoHeroi;

for (let i = 0; i < 10; i++) {
    let heroi = prompt('Qual nome do herói?')
    let xp = Number(prompt('Qual Experiencia(XP) do heŕoi?'))
    i++
    if (xp <= 1000) {
        NivelDoHeroi = "Ferro"
    }
    else if (xp > 1001 && xp <= 2000) {
        NivelDoHeroi = "Bronze"

    }
    else if (xp > 2000 && xp <= 5000) {
        NivelDoHeroi = "Prata"

    }
    else if (xp > 5000 && xp <= 7000) {
        NivelDoHeroi = "Ouro"

    }
    else if (xp > 7000 && xp <= 8000) {
        NivelDoHeroi = "Platina"

    }

    else if (xp > 8000 && xp <= 9000) {
        NivelDoHeroi = "Ascendente"

    }

    else if (xp > 9000 && xp < 10000) {
        NivelDoHeroi = "Imortal"
    }
    else if (xp > 1000) {
        NivelDoHeroi = "Radiante"
    }
    console.log(`O Herói de nome ${heroi} está no nível de ${NivelDoHeroi}!`)
   
}



