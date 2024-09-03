// Técnica:

// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

const verificaSequenciaFibonacci = (num) => {
  if (num < 0) return `${num} não pertence a sequência de Fibonacci.`;

  let a = 0;
  let b = 1;

  while (b < num) {
    let aux = b;
    b = a + b;
    a = aux;
  }

  if (b === num || num === 0) {
    return `${num} pertence a sequência de Fibonacci.`;
  } else {
    return `${num} não pertence a sequência de Fibonacci.`;
  }
};

// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

// IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

const verificaExistenciaA = (string) => {
  let ocorrencias = 0;

  if (string.match(/[aA]/gm)) {
    const arr = string.split("");

    arr.forEach((letra) => {
      if (letra.match(/[aA]/)) {
        ocorrencias += 1;
      }
    });
  }

  return ocorrencias;
};

// 3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

// Ao final do processamento, qual será o valor da variável SOMA?

const imprimeSoma = () => {
  indice = 12;
  soma = 0;
  k = 1;

  while (k < indice) {
    k = k + 1;
    soma = soma + k;
  }
  return soma;

  // Resposta: soma será 77
};

// 4) Descubra a lógica e complete o próximo elemento:
// a) 1, 3, 5, 7, 9
// b) 2, 4, 8, 16, 32, 64, 128
// c) 0, 1, 4, 9, 16, 25, 36, 49
// d) 4, 16, 36, 64, 100
// e) 1, 1, 2, 3, 5, 8, 13
// f) 2, 10, 12, 16, 17, 18, 19, 21

// 5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes.
//Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.
//Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

//Resposta:
//ligo o interruptor do meio e vou pra sala do meio, caso ele esteja ligado é só eu ligar qualquer uma das outras duas e a última
//eu consigo descobrir por exclusão.
//caso eu ligue o interruptor do meio e não seja a lampada do meio, é só eu ligar outra e vai sobrar só a última que também da para descobrir
//por exclusão

//LOGS
console.log(
  `Verifica a quantidade de letras A maiúscula e minúscula: ${verificaExistenciaA(
    "testando exercicio dois letras As"
  )}`
);

console.log(`Imprime SOMA: ${imprimeSoma()}`);

console.log(`Seu número ${verificaSequenciaFibonacci(8)}`);
