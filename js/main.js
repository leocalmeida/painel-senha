var btnAvanca = document.querySelector("#button_1")
var btnvolta = document.querySelector("#button_2")

btnAvanca.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("apertei o avanca");

  var numero = document.querySelector("#numero")
  var numeral = parseInt(numero.textContent)

  if (numeral < 99) {
    if (numeral < 9) {
      numero.textContent = numeral + 1
      numero.textContent = 0 + numero.textContent
    } else {
      numero.textContent = numeral + 1
    }
  } else {
    numero.textContent = 00
  }

})

btnvolta.addEventListener("click",function(event) {
  event.preventDefault();
  console.log("apertei o voltar");

  var numero = document.querySelector("#numero")
  var numeral = parseInt(numero.textContent)

  if (numeral < 99 && numeral>0) {
    if (numeral <= 10) {
      numero.textContent = numeral - 1
      numero.textContent = 0 + numero.textContent
    } else {
      numero.textContent = numeral - 1
    }
  } else {
    numero.textContent = 00
  }


})
