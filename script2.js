const calcularQuadrado = n => n ** 2;
const calcularCubo = n => n ** 3;
const calcularRaiz = n => Math.sqrt(n).toFixed(2);

const formulario = document.getElementById('numeroForm');
const listaHistorico = document.getElementById('historico');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const num = parseFloat(document.getElementById('numero').value);
    const operacao = document.getElementById('operacao').value;
    
    let res;
    let label;

    if (operacao === 'quadrado') {
        res = calcularQuadrado(num);
        label = `O quadrado de ${num} é ${res}`;
    } else if (operacao === 'cubo') {
        res = calcularCubo(num);
        label = `O cubo de ${num} é ${res}`;
    } else {
        res = calcularRaiz(num);
        label = `A raiz quadrada de ${num} é ${res}`;
    }

    const novoItem = document.createElement('li');
    novoItem.className = 'list-group-item animate__animated animate__fadeIn';
    novoItem.textContent = label;
    
    listaHistorico.prepend(novoItem);

    formulario.reset();
});