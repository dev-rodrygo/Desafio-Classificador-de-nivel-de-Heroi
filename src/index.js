//Adiciona o pacote do prompt-sync
const prompt = require('prompt-sync')()

//// Laço de repetição para obter nome e experiencia do heroi
for (let index = 0; index < 10; index++) {

    const nameHero = prompt('Nome do Herói: ')
    const heroExperience = prompt('Experiencia do Herói:')
    
    // Função para calcular o nível com base na experiência
    function calculeteLevel(xp) {
        // Objeto que mapeia os intervalos de experiência para os níveis correspondentes
        const level = {
            Ferro: { min: 0, max: 1000 },
            Bronze: { min: 1001, max: 2000 },
            Prata: { min: 2001, max: 5000 },
            Ouro: { min: 5001, max: 7000 },
            Platina: { min: 7001, max: 8000 },
            Ascendente: { min: 8001, max: 9000 },
            Imortal: { min: 9001, max: 10000 },
            Radiante: { min: 10001, max: Infinity },
        }
    
        // Itera sobre os níveis e verifica em qual intervalo de experiência o valor se encaixa
        for (let levelHero in level) {
            if (xp >= level[levelHero].min && xp <= level[levelHero].max) {
                return levelHero
            }
        }
    }

    let level = calculeteLevel(heroExperience)
    console.log(`O Herói ${nameHero} está no nível de ${level}!`)
}