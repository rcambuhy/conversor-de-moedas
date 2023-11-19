function calcularConversao() {

var valorEmDolar = document.getElementById('valorEmDolar');
var valorEmReal = document.getElementById('valorEmReal');
var cotaçãoDolar = 5.32;
var valorEmRealResult = valorEmDolar.value * cotaçãoDolar;

valorEmRealResult = valorEmRealResult.toFixed(2).replace('.', ',');

  // Add the text "USD" to the beginning of the value of the input
valorEmDolar.value = valorEmDolar.value

valorEmReal.value = "BRL " + valorEmRealResult;

}