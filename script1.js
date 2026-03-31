
const formulario = document.getElementById('numeroForm');
const resultado = document.getElementById('resultado');


formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const numero = document.getElementById('numero').value;

    const quadrado = numero * numero;

    resultado.textContent = `O quadrado de ${numero} é ${quadrado}.`;
});