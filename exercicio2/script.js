const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️

//a) Nome do primeiro ator/atriz

console.log(filme.elenco[0])

//b) Nome do último ator/atriz

console.log(filme.elenco[3])

//c) Todas as transmissões de hoje

console.log(filme.transmissoesHoje)

//d) Horário de transmissão do filme no Canal Brasil

//Para mostrar todo o objeto, canal mais horário
console.log(filme.transmissoesHoje[1])

// Para mostrar só o horário
console.log(filme.transmissoesHoje[1].horario)

