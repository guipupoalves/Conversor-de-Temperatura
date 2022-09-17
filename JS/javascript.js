//temperatura inicial:
const tempInicial = document.querySelector("#celsiusinicial");
//escolha do usuário:
let escolhadaTemp = document.querySelector("#resptemp");
//botao de conversão:
const botao = document.querySelector("#botaoconvert");
//definição do resultado:
let resultadoFinal = document.querySelector("#resultado");

//Evento de click no botão
botao.addEventListener("click" , converter);

function converter(){
    const numtempInicial = Number(tempInicial.value);
    let temp = escolhadaTemp.value.toUpperCase();
    if(temp == "KELVIN"){
        resultadoFinal.innerHTML = numtempInicial + 273 + "K"
    } else if (temp == "FAHRENHEIT"){
        let n1 = (numtempInicial * 1.8 + 32)
        resultadoFinal.innerHTML = n1.toFixed(2) + "°F"
    }
}


