const d = document
const calcular = d.getElementById("btn")

const calculadora = () => {
    const nombre = d.getElementById("nombre").value;
    const estatura = d.getElementById("estatura").value;
    const peso = d.getElementById("peso").value;
    const resultado = d.getElementById("resultado");
    
    const IMC = peso / Math.pow(estatura, 2);

    IMC < 20 
    ? resultado.textContent = `${nombre}, tenés bajo peso.` 
    : IMC > 25 ? resultado.textContent = `${nombre}, tenés sobre peso.` 
    : resultado.textContent = `${nombre}, tenés peso ideal.`;
}

calcular.addEventListener("click", calculadora);