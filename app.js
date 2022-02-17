const d = document
const boton = d.getElementById("btn")
const botonDos = d.getElementById("btnDos")
const contenedor = d.getElementById("container")
const nombre = d.getElementById("nombre");
const edad = d.getElementById("edad");
const estatura = d.getElementById("estatura");
const peso = d.getElementById("peso");
const resultado = d.getElementById("resultado");
const error = "1px solid red";
const valido = "1px solid green";
let validado = false;

nombre.addEventListener("focusout", () => {
    if(nombre.value.length < 3 || nombre.value.length > 20) {
        nombre.style.border = error; 
        validado = false;
    } else {
        nombre.style.border = valido;
        validado = true
    }
})
estatura.addEventListener("focusout", () => {
    if (estatura.value % 1 == 0) {
        estatura.style.border = error;
        validado = false;
    } else {
        estatura.style.border = valido;
        validado = true;
    }
})
edad.addEventListener("focusout", () => {
    if(edad.value < 1 || edad.value > 120) {
        edad.style.border = error;
        validado = false
    } else {
        edad.style.border = valido;
        validado = true;
    }
})
peso.addEventListener("focusout", () => {
    if(peso.value < 1) {
        peso.style.border = error;
        validado = false
    } else {
        peso.style.border = valido;
        validado = true;
    }
})



const calculadora = () => {
    if(!nombre.value || !estatura.value || !edad.value || !peso.value ) {
        alert("Todos los campos tienen que estar llenos");
    } else if(validado) {
        const IMC = peso.value / Math.pow(estatura.value, 2);
    
        IMC < 20 
        ? resultado.textContent = `${nombre.value}, tenés bajo peso.` 
        : IMC > 25 ? resultado.textContent = `${nombre.value}, tenés sobre peso.` 
        : resultado.textContent = `${nombre.value}, tenés peso ideal.`;

        contenedor.style.display = "block";
    }
}

const reinicio = () => {
    let border = "1px solid black";
    contenedor.style.display = "none";
    nombre.value = "";
    nombre.style.border = border;
    edad.value = "";
    edad.style.border = border;
    estatura.value = "";
    estatura.style.border = border;
    peso.value = "";
    peso.style.border = border;
}

boton.addEventListener("click", calculadora);
botonDos.addEventListener("click", reinicio);
