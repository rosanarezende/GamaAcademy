var elementos = [];
var topo = -1; // pra que o primeiro valor q eu coloque na pilha possa ser índice 0
const TAMANHO_MAXIMO = 10;

function push(num) {
  // antes de qq coisa preciso ver se minha pilha chegou no limite
  if (topo < TAMANHO_MAXIMO) {
    topo += 1;
    elementos[topo] = num;
  } else {
    console.log("Pilha está cheia");
  }
}

function pop() {
  // antes de qq coisa preciso ver se tem algum elemento na minha pilha
  if (topo != -1) {
    let num = elementos[topo];
    topo -= 1;
    return num;
  } else {
    console.log("Pilha está vazia");
  }
}

function estaVazia() {
  return topo == -1;
}

// ------- PARTE DO CÓDIGO QUE USA A PILHA ------- //

var numeroDecimal = 10;
var resto;

// empilhar
while (numeroDecimal != 0) {
  resto = Number.parseInt(numeroDecimal % 2);
  push(resto);
  console.log(resto);
  numeroDecimal = Number.parseInt(numeroDecimal / 2);
}

// enquanto a pilha não estiver estiver vazia, vou tirando
while (topo != -1) {
  console.log(pop());
}
