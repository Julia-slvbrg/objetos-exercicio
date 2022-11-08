// objeto dado no exercício

const pokemon1 = {
    nome: "Bulbasaur",
    tipo: "Grama",
    nivel: 5
}

//a) 

const pokemon2 = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água"
}

//b) 

pokemon1.ataques = []

//c) criando o objeto ataque e colocando dentro de ataques

const ataque1 = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
}

pokemon1.ataques.push(ataque1)

//c.1) colocando ataque dentro de pokemon2 por spread

pokemon2.ataques = [...pokemon1.ataques]

//d) adicionando um novo ataque no pokemon1

const ataque2 = {
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100
}

pokemon1.ataques = [...pokemon1.ataques, ataque2]
//pokemon1.ataques.push(ataque2) -> pode fazer com push também.

//e) ataque Jato de Água para o pokemon2

const ataque3 = {
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100
}

pokemon2.ataques = [...pokemon2.ataques, ataque3]


//f) os dois pokemons no console

console.log(pokemon1)
console.log(pokemon2)