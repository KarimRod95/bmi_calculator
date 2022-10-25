let calculo = true
let decision

function calcularImc(){
    let peso = parseInt (prompt ('Ingrese su peso en kg'))
    let estatura = parseInt (prompt ('Ingrese su estatura en cm'))
    let imc = (peso / ((estatura * estatura) / 10000)).toFixed(2)

    if (imc < 18.6) {
        alert (`Su indice de masa corporal es ${imc}, está por debajo del peso normal`)
    } else if (imc >= 18.6 && imc < 24.9){
        alert (`Su indice de masa corporal es ${imc}, se encuentra saludable!`)
    } else if (imc > 25) {
        alert (`Su indice de masa corporal es ${imc}, está por encima del peso normal`)
    } else {
        alert ('Por favor, ingrese nuevamente los datos en forma numerica, sin comas ni espacios.')
    }
}


while (calculo===true){
    calcularImc()

    decision = parseInt (prompt('Quieres intentarlo nuevamente? 1.Si - 2.No'))
    if(decision===1){
        calcularImc()
    } else {
        calculo = false
    }
}

