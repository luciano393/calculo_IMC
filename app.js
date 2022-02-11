const calcular = document.getElementById("btn")

const calculadora = () => {
    const nombre = document.getElementById("nombre").value;
    const estatura = document.getElementById("estatura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");
    
    const IMC = peso / Math.pow(estatura, 2);

    if (IMC < 20) {
        resultado.textContent = `${nombre}, tenés bajo peso.`;
    } else if ( IMC > 25) {
        resultado.textContent = `${nombre}, tenés sobre peso.`;
    } else if ( IMC < 25 && IMC > 20) {
        resultado.textContent = `${nombre}, tenés peso ideal.`;
    }
}

calcular.addEventListener("click", calculadora);