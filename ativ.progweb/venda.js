// Criando o vetor vazio para armazenar os objetos de venda
let vendas = [];
let proximoId = 1; // Contador para o ID automático

// Função para atualizar a tabela na tela (similar ao seu atualizarLista)
function renderizarTabela() {
    const corpoTabela = document.getElementById('tabelaVendas');
    
    // Limpa a tabela atual para reconstruir
    corpoTabela.innerHTML = '';
    
    // Se não houver vendas, você pode opcionalmente mostrar uma mensagem ou deixar vazio
    if (vendas.length === 0) {
        // Aqui apenas limpamos, conforme o layout da imagem
        return;
    }
    
    // Percorre o vetor de objetos e cria uma linha (tr) para cada venda
    // Usando o loop 'for' que você já pratica nas aulas
    for (let i = 0; i < vendas.length; i++) {
        const venda = vendas[i];
        const linha = document.createElement('tr');
        
        // Inserindo as células com os dados do objeto
        linha.innerHTML = `
            <td>${venda.id}</td>
            <td>${venda.vendedor}</td>
            <td>${venda.valor}</td>
            <td>${venda.desconto}</td>
            <td>${venda.valorComDesconto}</td>
            <td>
                <button class="btn-remover" onclick="removerItem(${venda.id})">Remover</button>
            </td>
        `;
        
        corpoTabela.appendChild(linha);
    }
}

// Função para adicionar venda
function cadastrarVenda() {
    const inputVendedor = document.getElementById('vendedor');
    const inputValor = document.getElementById('valor');
    
    const nome = inputVendedor.value;
    const valorOriginal = parseFloat(inputValor.value);
    
    // Validação básica
    if (!nome || isNaN(valorOriginal)) {
        alert('Preencha todos os campos corretamente!');
        return;
    }
    
    // Cálculo automático de 10%
    const calculoDesconto = valorOriginal * 0.10;
    const totalComDesconto = valorOriginal - calculoDesconto;

    // Criando o objeto da venda
    const novaVenda = {
        id: proximoId++,
        vendedor: nome,
        valor: valorOriginal.toFixed(2),
        desconto: "10%",
        valorComDesconto: totalComDesconto.toFixed(2)
    };
    
    // Adiciona ao vetor (push)
    vendas.push(novaVenda);
    
    // Limpa os campos e foca no primeiro
    inputVendedor.value = '';
    inputValor.value = '';
    inputVendedor.focus();
    
    // Atualiza a visualização
    renderizarTabela();
}

// REMOVER ÚLTIMO (Usando SPLICE em vez de POP)
function removerUltimo() {
    if (vendas.length === 0) {
        alert('Não há vendas para remover!');
        return;
    }
    
    // O splice remove a partir de uma posição. 
    // vendas.length - 1 é o índice do último item.
    // o número 1 diz para remover apenas esse item.
    vendas.splice(vendas.length - 1, 1);
    
    renderizarTabela();
}

// Remover item específico pelo ID
function removerItem(id) {
    // Procura o índice do item que tem o ID clicado
    for (let i = 0; i < vendas.length; i++) {
        if (vendas[i].id === id) {
            vendas.splice(i, 1); // Remove o item naquela posição específica
            break; // Para o loop pois já encontrou
        }
    }
    renderizarTabela();
}

// Limpar tudo
function limparTudo() {
    if (vendas.length > 0) {
        if (confirm("Deseja remover todas as vendas?")) {
            vendas = []; // Esvazia o vetor
            proximoId = 1; // Opcional: reseta o contador
            renderizarTabela();
        }
    }
}