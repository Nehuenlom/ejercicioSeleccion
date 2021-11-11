let monto: number = 10000;
let cantidad: number = 8;
let montoConDescuento: number = 0;
let descuento: number = 0;
let precioTotal: number = 0;
precioTotal = monto * cantidad;
if (precioTotal >= 1000) {
  descuento = (precioTotal * 10) / 100;
  montoConDescuento = precioTotal - descuento;
  console.log("Por gastar nas de 1000 tiene un 10% de descuento");
  console.log("El monto a pagar es:" + montoConDescuento);
} else {
  console.log("No tiene descuento. El monto a pagar es: " + precioTotal);
}
