let contadorTransacoes = 0;
let historicoTransacoes = [];

document.getElementById('calcular').addEventListener('click', function() {
    // Captura os valores inseridos pelo usuário
    let valorTransacao = parseFloat(document.getElementById('valor-transacao').value);
    let complexidade = document.getElementById('complexidade').value;
    let moeda = document.getElementById('moeda').value;
    let precoGas;

    // Validação do valor da transação
    if (valorTransacao <= 0) {
        document.getElementById('resultado').innerHTML = '<p style="color:red;">Por favor, insira um valor de transação válido.</p>';
        return;
    }

    // Definição de preço do gas por complexidade
    switch (complexidade) {
        case 'baixa':
            precoGas = 0.01;
            break;
        case 'media':
            precoGas = 0.05;
            break;
        case 'alta':
            precoGas = 0.1;
            break;
    }

    // Calcula o custo total do gas
    let custoGas = valorTransacao * precoGas;

    // Simulação de conversão de moeda (valores fictícios)
    let taxaConversao = 1; // Conversão fictícia para DOT
    if (moeda === 'USD') {
        taxaConversao = 0.5; // 1 DOT = 0.5 USD (exemplo)
    } else if (moeda === 'EUR') {
        taxaConversao = 0.4; // 1 DOT = 0.4 EUR (exemplo)
    }
    let custoGasConvertido = custoGas * taxaConversao;

    // Exibe o resultado
    document.getElementById('resultado').innerHTML = `
        <p>Valor da Transação: ${valorTransacao} DOT</p>
        <p>Complexidade: ${complexidade.charAt(0).toUpperCase() + complexidade.slice(1)}</p>
        <p><strong>Custo Estimado do Gas: ${custoGas.toFixed(2)} DOT (${custoGasConvertido.toFixed(2)} ${moeda})</strong></p>
    `;

    // Incrementa e exibe o contador de transações
    contadorTransacoes++;
    document.getElementById('contador-transacoes').innerText = `Transações Simuladas: ${contadorTransacoes}`;

    // Armazena o histórico de transações
    historicoTransacoes.push({
        valor: valorTransacao,
        complexidade: complexidade,
        custoGas: custoGas,
        moeda: moeda,
        custoGasConvertido: custoGasConvertido
    });
    atualizarHistorico();

    // Reseta o temporizador
    resetarTemporizador();
});

// Função para atualizar o histórico de transações
function atualizarHistorico() {
    let historicoHtml = '<h2>Histórico de Transações</h2><ul>';
    historicoTransacoes.forEach(transacao => {
        historicoHtml += `<li>${transacao.valor} DOT - ${transacao.complexidade} - ${transacao.custoGas.toFixed(2)} DOT (${transacao.custoGasConvertido.toFixed(2)} ${transacao.moeda})</li>`;
    });
    historicoHtml += '</ul>';
    document.getElementById('historico-transacoes').innerHTML = historicoHtml;
}

// Temporizador para limpar o histórico
let temporizador;
function resetarTemporizador() {
    clearTimeout(temporizador);
    temporizador = setTimeout(() => {
        historicoTransacoes = [];
        contadorTransacoes = 0;
        document.getElementById('contador-transacoes').innerText = `Transações Simuladas: ${contadorTransacoes}`;
        document.getElementById('historico-transacoes').innerHTML = '<h2>Histórico de Transações Limpo</h2>';
    }, 10000); // 10 sec
}
