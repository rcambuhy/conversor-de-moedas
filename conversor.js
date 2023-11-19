function calcularConversao() {

var valorEmDolar = document.getElementById('valorEmDolar');
var valorEmReal = document.getElementById('valorEmReal');
var cotaçãoDolar = 5.32;
var valorEmRealResult = valorEmDolar.value * cotaçãoDolar;

valorEmRealResult = valorEmRealResult.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
}).split("R$")[1].trim();

valorEmDolar.value = valorEmDolar.value;

valorEmReal.value = "BRL " + valorEmRealResult;

}