var nombreMichi = document.getElementById("input-nombre");
var apellidoMichi = document.getElementById("input-apellido");
var edadMichi = document.getElementById("input-edad");
var nombreDueño = document.getElementById("input-dueño");
var formularioGatito = document.getElementsByClassName("form__cat")[0];
var botonFormulario = document.getElementById("button-form");

var valorNombre, valorApellido, valorEdad, valorDueño;

function chequearCamposObligatorios() {
    console.log(valorApellido);
    if (!valorApellido) {
        alert("El campo apellido es obligatorio")
        return false;
    }
    if (!valorEdad) {
        alert("El campo edad es obligatorio")
        return false;
    }
    if (!valorDueño) {
        alert("El campo dueño del michi es obligatorio")
        return false;
    }

    return true;
}


nombreMichi.addEventListener("change", (event) => {
    valorNombre = event.target.value;
})

apellidoMichi.addEventListener("change", (event) => {
    valorApellido = event.target.value;
})

edadMichi.addEventListener("change", (event) => {
    valorEdad = event.target.value;
})

nombreDueño.addEventListener("change", (event) => {
    valorDueño = event.target.value;
})

botonFormulario.addEventListener("click", (event) => {
    const isValidForm = chequearCamposObligatorios();
    if (isValidForm == false) {
        return false;
    }
    const mensajeFinal = [valorNombre, valorApellido, valorEdad, valorDueño].join(" ");
    alert(mensajeFinal);
})

