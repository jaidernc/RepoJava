let cantidad,precio,descuento,comprar,pagar;
precio=parseFloat(prompt("Ingrese precio"))
cantidad = parseFloat(prompt("Ingrese cantidad"))

comprar = precio*cantidad;
descuento = comprar*0.15;
pagar = comprar
console.log("El descuento es:"+descuento);
console.log("El total a pagar es:"+ pagar);
