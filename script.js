let frases = [
    "Que você encontre seu livro nesse lugar - Angela, Library of Ruina",
    "⁠Eu amo esta cidade. A cidade das oportunidades infinitas. As lendas nascem aqui - Stan, Cyberpunk 2077",
    "Sete minutos... sete minutos é tudo o que posso dispensar para brincar com você! - Albert Wesker, Resident Evil",
    "Você já se sentiu como se estivesse morto, mas ninguém te avisou? - Cole, Gear of War",
    "Eu vou curar você, curando-o de toda doença e lesão que você possui - Plague Doctor, Lobotomy Corporation"
];

let cliques = 0; //contador de frases geradas

function gerarFrases(){
    let indice = Math.floor(Math.random() * frases.length);

    let fraseEscolhida = frases[indice];

    cliques = cliques+1;

    document.getElementById("frase").innerText =
    fraseEscolhida;

    document.getElementById("contador").innerText = "Frases geradas: "+cliques;
}