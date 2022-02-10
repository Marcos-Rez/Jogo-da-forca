var lista = ['SELEÇAO', 'ALURA', 'CAMPEAO', 'FUTEBOL', 'JARDIN', 'BARCO', 'PROGRAMAÇAO', 'SEMANA', 'MOCHILA', 'COLCHAO', 'COMPUTADOR', 'DEFESA', 'VOLEI', 'NATAÇAO', 'MANGA', 'BANANA', 'LAZANHA', 'PARAISO', 'FLORESTA', 'AVIAO', 'EXERCITO', 'SABONETE', 'CHUVEIRO', 'PESCAR', 'SORRISO', 'AMAZONIA', 'TECNOLOGIA', 'SEGURANÇA', 'PESQUISAR', 'CORRER', 'DORMIR', 'CONTROLE', 'JOANINHA', 'FORMIGA', 'REVISTA', 'ROUPAS']
var palavra = Math.floor(Math.random() * 36)//Nao inclue o 36


//console.log(lista[palavra])
var palavra = lista[palavra];
var contador = palavra.length;
console.log(palavra)
console.log("contagem de letras = ", contador)



function linhas(quantidade, x){
    for(var i = 1; i <= quantidade; i++){
        x += 60
        pincel.moveTo(200 + x, 500);
        pincel.lineTo(250 + x, 500);
        pincel.strokeStyle = "blue";
        pincel.lineWidth = "5";
        pincel.stroke();
    }

}


function sorteio(contador, palavra) {
    if(contador == 5) {
        linhas(5, 0)
        //linhas(0); linhas(60); linhas(120); linhas(180); linhas(240);
    }
    else if(contador == 6) {
        linhas(6, 0);
    }
    else if(contador == 7) {
        linhas(7, 0);
        //linhas(0); linhas(60); linhas(120); linhas(180); linhas(240); linhas(300); linhas(360);
    }
    else if(contador == 8) {
        linhas(8, 0);
        //linhas(0); linhas(60); linhas(120); linhas(180); linhas(240); linhas(300); linhas(360); linhas(420);
    }
    else if(contador == 9) {
        linhas(9, 0);
        //linhas(0); linhas(60); linhas(120); linhas(180); linhas(240); linhas(300); linhas(360); linhas(420); linhas(480);
    }
    else if(contador == 10) {
        linhas(10, 0)
        //linhas(0); linhas(60); linhas(120); linhas(180); linhas(240); linhas(300); linhas(360); linhas(420); linhas(480); linhas(540);
    }
    else if(contador == 11) {
        linhas(11, 0)
        //linhas(0); linhas(60); linhas(120); linhas(180); linhas(240); linhas(300); linhas(360); linhas(420); linhas(480); linhas(540); linhas(600);
    }
    else if(contador == 12) {
        linhas(12, 0)
        //linhas(0); linhas(60); linhas(120); linhas(180); linhas(240); linhas(300); linhas(360); linhas(420); linhas(480); linhas(540); linhas(600);
    }
    else if(contador == 13) {
        linhas(13, 0)
        //linhas(0); linhas(60); linhas(120); linhas(180); linhas(240); linhas(300); linhas(360); linhas(420); linhas(480); linhas(540); linhas(600);
    }
    else if(contador == 14) {
        linhas(14, 0)
        //linhas(0); linhas(60); linhas(120); linhas(180); linhas(240); linhas(300); linhas(360); linhas(420); linhas(480); linhas(540); linhas(600);
    }
    return palavra;

}

