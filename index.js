let vitorias = 40
let derrotas = 15

let resultado = calcularRank(vitorias, derrotas)

function calcularRank(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas
  let nivelRank

  if (vitorias < 10) {
        nivelRank = "Ferro"
  } else if (vitorias >= 11 && vitorias <= 20) {
        nivelRank = "Bronze"
  } else if (vitorias >= 21 && vitorias <= 50) {
        nivelRank = "Prata"
  } else if (vitorias >= 51 && vitorias <= 80) {
        nivelRank = "Ouro"
  } else if (vitorias >= 81 && vitorias <= 90) {
        nivelRank = "Diamante"
  } else if (vitorias >= 91 && vitorias <= 100) {
        nivelRank = "Lendário"
  } else {
        nivelRank = "Imortal"
  }

  return {saldoVitorias, nivelRank}
}

console.log(`O Herói tem saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivelRank}`)
