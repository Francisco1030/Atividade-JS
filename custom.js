function calcular() {
    var preco, quantidade, total, resutado;

    preco = document.getElementById('preco').value;

    quantidade = document.getElementById('quantidade').value;

    total = preco * quantidade;

    resutado = document.getElementById("total");

    resutado.innerHTML = "Total: " + total;

}

var nota = new Array();
var media, soma, i;

function calcularMedia() {

    var input = document.getElementById('nota').value;
    nota.push(input);
    soma = 0;

    for (i = 0; i < nota.length; i++) {
        soma += parseFloat(nota[i]);
        media = parseFloat(soma) / parseFloat(nota.length);
    }
    document.getElementById("media").innerHTML = "Média: " + media;
    document.getElementById('nota').value = '';
    document.getElementById('nota').focus();
}

var numero = new Array();
var quadrado = new Array();

function calcularQuadrado() {

    var inputN = document.getElementById('numero').value;
    numero.push(inputN);

    for (i = 0; i < numero.length; i++) {
        quadrado[i] = parseFloat(numero[i]) * parseFloat(numero[i]);
        document.getElementById("quadrado").innerHTML = (i + 1) + "º Quadrado: " + quadrado[i];
    }
    document.getElementById('numero').value = '';
    document.getElementById('numero').focus();

}

var maior = 0;
function calcularMaiorNumero() {
    var inputMaior = parseFloat(document.getElementById('numeroM').value);


    if (inputMaior >= parseFloat(maior)) {
        maior = inputMaior;
    }
    document.getElementById("maior").innerHTML = "Maior número: " + maior;
    document.getElementById('numeroM').value = '';
    document.getElementById('numeroM').focus();

}

var idadeMaior = 0;
var idadeMenor = 0;

function calcularIdade() {
    var inputIdade = parseFloat(document.getElementById('idade').value);

    if (inputIdade >= 18) {
        idadeMaior++;
    }else if(inputIdade >= 0 && inputIdade < 18){
        idadeMenor++;
    }
    document.getElementById("maior").innerHTML = "Maior de idade: " + idadeMaior;
    document.getElementById("menor").innerHTML = "Menor de idade: " + idadeMenor;
    document.getElementById('idade').value = '';
    document.getElementById('idade').focus();

}