let listaDeSorteados = []
let limiteNumerosDaLista = 100
let numeroSecreto = numeroAleatorio();
let tentativas = 1

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});

}
function letreiroInicial(){
exibirTexto('h1', 'Jogo do número secreto!');
exibirTexto('p', 'Escolha um número entre 1 e 100!');
}

letreiroInicial();
function verificarChute(){
    let chute = document.querySelector('input').value
    if ( chute==numeroSecreto){
        exibirTexto('h1','Acertou! :)');
        let palavraTentativa = tentativas > 1? 'tentativas':'tentativa';
        let mensagemTentativas = `Parabéns, você acertou o numero secreto com ${tentativas} ${palavraTentativa}! `
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute> numeroSecreto){
            exibirTexto('p','O número secreto é menor');
        } else{
            exibirTexto('p', 'O número secreto é maior');
        } tentativas++
        limparCampo();
    } 
}

function numeroAleatorio() {
     let numeroEscolhido = parseInt(Math.random()*limiteNumerosDaLista+1);
     let quantidadeElementosLista = listaDeSorteados.length;

     if (quantidadeElementosLista ==limiteNumerosDaLista){
        listaDeSorteados= []
     }
     if (listaDeSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
     } else {
        listaDeSorteados.push(numeroEscolhido);
        console.log(listaDeSorteados)
        return numeroEscolhido
     }
}

function limparCampo(){
     chute = document.querySelector('input');
     chute.value = '';

}
function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    letreiroInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);


}