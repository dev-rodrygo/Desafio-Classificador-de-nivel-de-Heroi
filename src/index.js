const prompt = require('prompt-sync')()

for (let i = 0; i < 10; i++) {
    let heroi = prompt('Qual nome do herói?')
    let xp = prompt('Qual xp do heŕoi?')
    i++
    if (xp <= 1000) {
        console.log(`O Herói de nome ${heroi} está no nível de Ferro!`)
    }
    else if (xp > 1001 && xp <= 2000) {
        console.log(`O Herói de nome ${heroi} está no nível de bronze!`)

    }
    else if (xp > 2000 && xp <= 5000) {
        console.log(`O Herói de nome ${heroi} está no nível de Prata!`)

    }
    else if (xp > 5000 && xp <= 7000) {
        console.log(`O Herói de nome ${heroi} está no nível de Ouro!`)

    }
    else if (xp > 7000 && xp <= 8000) {
        console.log(`O Herói de nome ${heroi} está no nível de Platina!`)

    }

    else if (xp > 8000 && xp <= 9000) {
        console.log(`O Herói de nome ${heroi} está no nível de Ascendente!`)

    }

    else if (xp > 9000 && xp < 10000) {
        console.log(`O Herói de nome ${heroi} está no nível de Imortal!`)

    }
    else if (xp > 1000) {
        console.log(`O Herói de nome ${heroi} está no nível de Radiante!`)

    }
}
