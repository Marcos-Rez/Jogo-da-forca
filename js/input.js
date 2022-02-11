palavra = sorteio(contador, palavra)

var erros = 0;
var contador = 0;
var x = "";
var retorno = "";
var acertos = 0;

function desenhar1(contador) {
    if(contador == 1){
        //Linhas vertical
        pincel.beginPath();
        pincel.moveTo(200, 56);
        pincel.lineTo(200, 500);
        pincel.strokeStyle = 'black';
        pincel.lineWidth = 9;
        pincel.stroke();
    }
    if(contador == 2){
        //Linha horizontal
        pincel.beginPath();
        pincel.moveTo(200, 60);
        pincel.lineTo(400, 60);
        pincel.strokeStyle = 'black';
        pincel.lineWidth = 8;
        pincel.stroke();
    }
    if(contador == 3){
        //Linha vertical 2
        pincel.beginPath();
        pincel.moveTo(395, 60);
        pincel.lineTo(395, 100);
        pincel.strokeStyle = 'black';
        pincel.lineWidth = 9.5;
        pincel.stroke();
    }
    if(contador == 4){
        //cabeça
        pincel.fillStyle = "black";
        pincel.beginPath();
        pincel.arc(395, 125, 24, 0, 2 * Math.PI);
        pincel.fill();
    }
    if(contador == 5){
        //corpo
        pincel.beginPath();
        pincel.moveTo(395, 150);
        pincel.lineTo(395, 210);
        pincel.strokeStyle = "black";
        pincel.lineWidth = 23;
        pincel.stroke();
    }
    if(contador == 6){
        //braço esquerdo
        pincel.beginPath();
        pincel.moveTo(380, 150);
        pincel.lineTo(370, 195);
        pincel.strokeStyle = "black";
        pincel.lineWidth = "5";
        pincel.stroke();
    }
    if(contador == 7){
        //braço esquerdo
        pincel.beginPath();
        pincel.moveTo(410, 150);
        pincel.lineTo(420, 195);
        pincel.strokeStyle = "black";
        pincel.lineWidth = "5";
        pincel.stroke();
    }
    if(contador == 8){
        //perna direita
        pincel.beginPath();
        pincel.moveTo(405, 212);
        pincel.lineTo(420, 270);
        pincel.strokeStyle = "black";
        pincel.lineWidth = "8";
        pincel.stroke();
    }
    if(contador == 9){
        //perna esquerda
        pincel.beginPath();
        pincel.moveTo(385, 212);
        pincel.lineTo(370, 270);
        pincel.strokeStyle = "black";
        pincel.lineWidth = "8";
        pincel.stroke();
    }
}

function validar(retorno){
    return retorno;
}

function isLetter2(str) {

    if (str.length === 1 && str.match(/[a-z]/i) || "Ç") { //Função que retorna se é uma letra de "a" - "z".
        var pal = str;
        console.log("Você digitou: ", pal);
        retorno = true;
        return true;
       }
    else if (!str.match(/[a-z]/i)){
        pincel.font = "30px Comic Sans MS";
        pincel.fillStyle = "orange";
        pincel.fillText("ERRO ! Você não é digitou uma letra." ,425 + erros, 100 );
        retorno = false;
        return "ERRO ! Você não é digitou uma letra.";
    } 
}
function Start() {
    pincel.font = "60px Comic Sans MS";
    pincel.fillStyle = "blue";
    pincel.fillText("Escolha uma letra!" ,500, 100 );
}



//keydown aciona apenas quando a tecla é pressionada, <<<pode repetir varias vezes se for segurada.>>>
////keyup aciona apenas quando a tecla retorna para cima <<<Só repete uma vez não adianta segurar a tecla>>>>

var inicio = document.querySelector("#iniciar");
inicio.addEventListener("click", function(event){
    event.preventDefault();
    Start();

    document.addEventListener("keyup", function teclado(event) {
        
        x = event.key.toUpperCase()
        
        if(isLetter2(x) == true){
                //Minha variavel palavra que eu vou usasr para iterar e comparar com o o meu input do teclado x
        var a = 0;
        var numeroErros = 0;
        for(var p in palavra){
            console.log(palavra[p])
            a += 60;
            
            if(palavra[p] == x){
                //console.log("TESTE OK! letra igual.")
                pincel.font = "30px Comic Sans MS";
                pincel.fillStyle = "BLUE";
                pincel.fillText(palavra[p] ,215 + a, 495)
                acertos += 1;
                continue;
            }
            
            if(palavra.length == acertos){
                console.log("You win")
                pincel.font = "155px Comic Sans MS";
                pincel.fillStyle = "blue";
                pincel.fillText("Você venceu !" ,20, 300 );
                pincel.fillText(":)" ,450, 500 );
                setTimeout(function(){
                    location.reload();
                },2000);
            }
        }
    
        if(!palavra.includes(x)){
            pincel.font = "40px Comic Sans MS";
            pincel.fillStyle = "gray";
            pincel.fillText(x ,600 + erros, 300 );
            erros += 30;
            contador += 1;
            desenhar1(contador); 
            console.log(contador)
        }
        if(contador == 9){
            console.log("You lose")
            pincel.font = "155px Comic Sans MS";
            pincel.fillStyle = "RED";
            pincel.fillText("Você perdeu !" ,20, 300 );
            pincel.fillText(":´(" ,450, 500 );
            setTimeout(function(){
                location.reload();
            },2000);
            
            
        }
        }
    })
})


var bto = document.querySelector("#adicionar");
var adicionar = document.querySelector(".class-nome");

bto.addEventListener("click", function (event) {
    event.preventDefault();
    adicionar = adicionar.value;
    lista.push(adicionar.toUpperCase())
    console.log(lista)
})




