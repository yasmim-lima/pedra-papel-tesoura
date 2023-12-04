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
        } else if (escolhaJogador === escolhaComputador) {
            return "Houve um empate! Jogue novamente";
        } else {
            return "Escolha inválida";
        }
}

function jogo() {
    for (let i = 0; i < 5; i++){
        const palavraJogador = prompt("Pedra, papel ou tesoura?").toLowerCase();
        const palavraComputador = palavraAleatoria(palavras);
        alert(umaRodada(palavraJogador, palavraComputador));
    }
}


let palavras = ["pedra", "papel", "tesoura"];
jogo ();