// Soma de despesas e receitas

const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];

function calculaSaldo(receitas, despesas) {
  let saldo = receitas - despesas;
  return saldo;
}

function somaNumeros(numeros) {
  let soma = 0;
  for (i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  return soma;
}

for (j = 0; j < usuarios.length; j++) {
  let totalReceitas = somaNumeros(usuarios[j].receitas);
  let totalDespesas = somaNumeros(usuarios[j].despesas);
  let saldoFinal = calculaSaldo(totalReceitas, totalDespesas);
  if (saldoFinal > 0) {
    console.log(`${usuarios[j].nome} possui saldo POSITIVO de ${parseFloat(saldoFinal.toFixed(2))}`);
  }
  else {
    console.log(`${usuarios[j].nome} possui saldo NEGATIVO de ${parseFloat(saldoFinal.toFixed(2))}`);
  }
}