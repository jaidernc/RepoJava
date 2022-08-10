debugger

let seguimos = true
let operador = 3
while(seguimos){
let nota1 = parseInt(prompt("Ingrese la primera nota."))
let nota2 = parseInt(prompt("Ingrese la segunda nota."))
let nota3 = parseInt(prompt("Ingrese la tercera nota."))
let notaFinal = calcular(nota1,nota2,nota3)

if (calcular >= 10){
    console.log("Felicidades, haz aprobado.",calcular)
}
else if (calcular < 7){
    console.log("Lo sentimos, no haz logrado aprobar.",calcular)
}

}

function calcular(not1,not2,not3, ope){
        return ((not1 + not2) + (not3)) / ope
}


