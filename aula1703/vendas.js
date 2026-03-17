// Criando o vetor vazio
let numeros = [];
let proximoId = 1;

// Função para atualizar a lista na tela
function cadastrarVenda() {
    const nome = document.getElementById('vendedor').value;
    const valorInput = document.getElementById('valor').value;
    
    // Limpa a lista atual
    listaDiv.innerHTML = '';
    
    // Verifica se o vetor está vazio
    if (!nome|| !valorInput) {
        alert("Preencha todos os campos");
        return;
    }

    const valor = parseFloat(valorInput);

    if (valor(valor) || valor <= 0 ) {
        alert("Insira valor de venda valido");
        return;
    }
    
    const desconto = valor * 0.10;
    const valorComDesconto = valor - desconto;
    const dataHora = new Date().toLocaleString('pt-BR');
    
    const novaVenda = {
        id: proximoId++,
        vendedor: nome,
        valor: valor.toFixed(2),
        desconto: "10%",
        total: valorComDesconto.toFixed(2),
        data: dataHora
    };

    cadastrar.push(novaVenda);
    limpar();
    renderizarTabela();
}

function renderizarTabela() {
    const corpoTabela = document.getElementById('tabelaVendas');
    corpoTabela.innerHTML = "";

    vendas.forEach((venda) => {
        const linha = `
            <tr>
                <td>${venda.id}</td>
                <td>${venda.vendedor}</td>
                <td>R$ ${venda.valor}</td>
                <td>${venda.desconto}</td>
                <td><strong>R$ ${venda.total}</strong></td>
                <td>${venda.data}</td>
                <td>
                    <button class="btn-remover" onclick="removerItem(${venda.id})">Remover</button>
                </td>
            </tr>
        `;
        corpoTabela.appendChild(linha);
    });
}

function removerItem(id) {
    vendas = vendas.filter(v => v.id !== id);
    renderizarTabela();
}

function removerUltimo() {
    if (vendedor.length === 0) {
        alert("A lista está vazia!");
        return;
    }
    vendas.pop();
    renderizarTabela();
}

function limparTudo() {
    if (vendedor.length === 0) {
        alert("Não há registros para remover!");
        return;
    }
    if (confirm("Deseja realmente apagar todas as vendas?")) {
        vendedor = [];
        proximoId = 1;
        renderizarTabela();
    }
}

function limparCampos() {
    document.getElementById('vendedor').value = "";
    document.getElementById('valor').value = "";
}