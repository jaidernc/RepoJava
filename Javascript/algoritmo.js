let seguimos = true
let descuento = 0.20
let iva = 1.19
while(seguimos){
    let primerProducto = parseInt(prompt("Ingrese el primer producto"))
    let segundoProducto = parseInt(prompt("Ingrese el segundo producto"))
    let tercerProducto = parseInt(prompt("Ingrese el tercer Produto"))
    let valorFinalIva = multiplicar(primerProducto,segundoProducto,tercerProducto,iva)
    let valorFinalDescuento = restar(primerProducto,segundoProducto,tercerProducto,descuento)
    
        if(valorFinalIva >= 5000){
            console.log("El precio del producto - el descuento es:", valorFinalDescuento)
        }
   
        else if(valorFinalIva <= 5000){
            console.log("El precio del producto + iva es:", valorFinalIva)
        }
        seguimos = confirm("¿Desea volver a ingresar nuevos precios?")
}  


function multiplicar(pro1,pro2,pro3,iva){
    return (pro1 + pro2 + pro3) * iva
}

function restar(pro1,pro2,pro3,descuento){
    return (pro1 + pro2 + pro3) * descuento
}
