// 1. Dados iniciais

let nome = prompt("Digite seu nome:");

// Função para validar número

function pedirNumero(mensagem) {
  let valor;

  while (true) {
    valor = Number(prompt(mensagem));

    if (!isNaN(valor)) {
      return valor;
    } else {
      alert("Por favor, digite um número válido.");
    }
  }
}

let renda = pedirNumero("Digite sua renda mensal:");

let quantidadeDespesas = pedirNumero("Quantas despesas deseja informar? (1 a 5)");

// Regra de limite

if (quantidadeDespesas < 1) {
  quantidadeDespesas = 1;
} else if (quantidadeDespesas > 5) {
  quantidadeDespesas = 5;
}

// 3. Lançamento de despesas

let totalDespesas = 0;

for (let i = 1; i <= quantidadeDespesas; i++) {
  let despesa = pedirNumero(`Digite o valor da despesa ${i}:`);
  totalDespesas += despesa;
}

// 4. Análise

let mensagem = "";
let sobra = renda - totalDespesas;

if (totalDespesas > renda) {
  mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
  if (sobra >= renda * 0.3) {
    mensagem = "✅ Ótimo: boa margem de sobra.";
  } else {
    mensagem = "🙂 Ok: dá para melhorar a sobra.";
  }
}

// 5. Saída final

let resultado = `
Nome: ${nome}
Renda: R$ ${renda.toFixed(2)}
Despesas: R$ ${totalDespesas.toFixed(2)}
Sobra: R$ ${sobra.toFixed(2)}

${mensagem}
`;

alert(resultado);

console.log("===== RESULTADO DO ORÇAMENTO =====");
console.log(`Nome: ${nome}`);
console.log(`Renda: R$ ${renda.toFixed(2)}`);
console.log(`Despesas: R$ ${totalDespesas.toFixed(2)}`);
console.log(`Sobra: R$ ${sobra.toFixed(2)}`);
console.log(`Status: ${mensagem}`);
console.log("==================================");