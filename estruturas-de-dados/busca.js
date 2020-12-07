var valores = [5, 8, 10, 22, 45, 38]

// quero buscar a posição de um número dentro do vetor
function busca(num) {
  for(i = 0; i < valores.length; i++) {
    if (num == valores[i]) {
      return i
    }
  }
  return -1
}

console.log(busca(10))

console.log(busca(4))
