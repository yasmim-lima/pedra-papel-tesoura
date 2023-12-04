function palavraAleatoria (palavras) {
    let indice = Math.floor(Math.random() * palavras.length);
    return palavras[indice];
}

function umaRodada (escolhaJogador, escolhaComputador) {
        if (escolhaJogador == "pedra" && escolhaComputador == "tesoura"){
            return "Voce ganhou! Pedra vence tesoura!";
        } else if (escolhaJogador == "pedra" && escolhaComputador == "papel"){
            return "Voce perdeu! Papel vence pedra!";
        } else if (escolhaJogador == "tesoura" && escolhaComputador == "pedra"){
            return "Voce perdeu! Pedra vence tesoura!";
        } else if (escolhaJogador == "tesoura" && escolhaComputador == "papel"){
            return "Voce ganhou! Tesoura vence papel!";
        } else if (escolhaJogador == "papel" && escolhaComputador == "pedra"){
            return "Voce ganhou! Papel vence pedra!";
        } else if (escolhaJogador == "papel" && escolhaComputador == "tesoura"){
            return "Voce perdeu! Tesoura vence papel!";
        } else {
            return "Houve um empate! Jogue novamente"
        }
}


let palavras = ["pedra", "papel", "tesoura"];
let palavraComputador = palavraAleatoria(palavras);
let palavraJogador = "pedra";
palavraJogador = palavraJogador.toLowerCase();
console.log("Sua escolha: " + palavraJogador);
console.log("Escolha do computador: " + palavraComputador);
console.log(umaRodada(palavraJogador, palavraComputador));