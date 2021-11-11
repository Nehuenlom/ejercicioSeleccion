let btnEnv = document.getElementById("btnEnviar");
let dato = document.getElementById("dato");
let dato2 = document.getElementById("dato2");

btnEnv.addEventListener("click", () => {
  let numeroA: number = Number(dato.value);
  let numeroB: number = Number(dato2.value);
  let resultado: number = numeroA * (1 - numeroB);
  console.log("el precio con descuento es:");
  console.log(resultado);
  let prntRes = document.getElementById("resultado");
  prntRes.innerHTLM = resultado;
});
