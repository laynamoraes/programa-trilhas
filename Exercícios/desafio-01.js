// 1. Imagine que você está criando um sistema escolar para obter a média dos alunos da sala. Foram realizadas 3 avaliações com nota máxima de 10 pontos. Aline, tirou na primeira nota o total de 8 pontos, na segunda nota tirou 9 pontos e na terceira nota 7 pontos.

// Escreva um programa que receba as notas, faça o cálculo da média e imprima o resultado final da média.

let primeiraNota = 8
let segundaNota = 9
let terceiraNota = 7

function mediaDasNotas(primeiraNota, segundaNota, terceiraNota ) {
  const media = (primeiraNota + segundaNota + terceiraNota) / 3

  return `A média do aluno é ${media}`
}

console.log(mediaDasNotas(primeiraNota, segundaNota, terceiraNota))

// 2. Tais está participando de um sorteio na Loteria e recebeu uma lista de números aleatórios para poder apostar. Os números foram: 15, 8, 90, 75, 102, 6 e 2. Por ser bastante cautelosa, ela gostaria de saber qual é o menor número e qual é o maior número.

// Ajude Tais e escreva um programa que faça a lógica de programação para organização dos números, receba os números da lista e imprima na tela o menor número digitado e o maior número digitado.

const listaDeNumeros = [15, 8, 90, 75, 102, 6, 2]

function ordernarLista(a, b) {
  return a - b
}

const listOrdenada = listaDeNumeros.sort(ordernarLista)

const menorNumero = listOrdenada.shift()
const maiorNumero = listOrdenada.pop()

console.log(`O menor número é ${menorNumero} e o maior é ${maiorNumero}`)

// 3. Havia uma antiga guilda de alquimistas que guardava seus segredos em uma série de frascos numerados. No entanto, ao longo dos anos, os frascos foram sendo desorganizados e agora os aprendizes alquimistas precisam restaurar a ordem. Os números dos frascos representam a idade dos alquimistas que os criaram. Eles devem ser ordenados em ordem crescente para revelar um segredo alquímico há muito perdido. Mas, para isso, os aprendizes devem usar suas habilidades em algoritmos de ordenação.

// Escreva um programa que faça a ordenação dos frascos: 12, 5, 23, 17, 8, 14, 3, 19.

const listaDosFrascos = [12, 5, 23, 17, 8, 14, 3, 19]

function ordernarFrascos (primeiroFrasco, segundoFrasco) {
  return primeiroFrasco - segundoFrasco
}

const frascosOrdenados = listaDosFrascos.sort(ordernarFrascos)

console.log(`Aqui está os frascos ordenados: ${frascosOrdenados}`)

// 4. Em uma pequena vila, o fazendeiro precisa separar os números primos para determinar quantos novos campos plantar. Ele pede sua ajuda para identificar esses números criando um algoritmos. Os números são: 23, 16, 11, 8, 19, 14, 5, 21.

let minhaLista = [23, 16, 11, 8, 19, 14, 5, 21]

function numerosPrimos(lista) {
  let numerosPrimos = []
  for (let i = 0; i < lista.length; i++) {
    const numeroAtual = lista[i]
    let numeroPrimo = true

    for (let divisor = 2; divisor <= numeroAtual; divisor++) {
      if (numeroAtual % divisor === 0 && numeroAtual !== divisor) {
        numeroPrimo = false
      }
    }

    if (numeroPrimo === true) {
      numerosPrimos.push(numeroAtual)
    }
  }
  return numerosPrimos
}

console.log(numerosPrimos(minhaLista))

// 5. Escreva um programa que conte o número de palavras em uma frase fornecida pelo usuário. A frase é: "What is Lorem Ipsum?"

const frase = "What is Lorem Ipsum?"

let quantidadeDePalavras = 1

function contarPalavras(frase) {
  for (i = 0; i < frase.length; i++) {
    let letraSelecionada = frase.charAt(i)

    if (letraSelecionada == " ") {
      quantidadeDePalavras += 1
    }
  }

  return quantidadeDePalavras
}

console.log(contarPalavras(frase))

// 6. Escreva um programa para encontrar o fatorial do número 12.

const numero = 12

function fatorial(numero) {
  if (numero < 0) {
    return -1
  } else if (numero === 0) {
    return 1
  } else {
    return numero * fatorial(numero - 1)
  }
}

console.log(fatorial(numero))

// 7.Em uma loja de conveniência, um cliente comprou três itens e precisa calcular o total da compra. Os preços dos itens são R$ 2,50, R$ 3,75 e R$ 1,99. Crie um algoritmo que retorne o valor total.

const itens = ["R$ 2,50", "R$ 3,75", "R$ 1,99"]
let somatorio = 0

function somaDosItens(itens) {
  for (let i = 0; i < itens.length; i++) {
    const item = itens[i]
    const valorDoItem = Number(item.slice(2).replace(",", "."))

    somatorio += valorDoItem
  }

  return `O total da sua compra é R$ ${String(somatorio).replace(".", ",")}`
}

console.log(somaDosItens(itens))

// 8. Em um sistema de biblioteca, é necessário calcular a multa a ser paga por um usuário que atrasou a devolução de um livro. A multa é de R$ 0,50 por dia de atraso. O usuário atrasou a devolução do livro em 7 dias. Crie um algoritmo que faça o cálculo total que o aluno deverá pagar a biblioteca.

const diasDeAtraso = 7

function calcularMulta(diasDeAtraso) {
  const multa = 0.5

  if (diasDeAtraso === 0) {
    return "Você não está em atraso!"
  }

  return `O valor total da multa é R$ ${String(
    (diasDeAtraso * multa).toFixed(2)
  ).replace(".", ",")}`
}

console.log(calcularMulta(diasDeAtraso))

// 9. Em um jogo de RPG, o personagem do jogador possui pontos de vida (HP) que são reduzidos quando ele sofre danos dos inimigos. Seu personagem começa com 100 pontos de vida e sofre danos de 20 pontos em um ataque. Crie um algoritmo informando quantos pontos de vida restarão após três ataques?

const pontosIniciais = 100
const danos = 20
const quantidadeDeAtaques = 3

const totalDeDanos = danos * quantidadeDeAtaques

function quantidadeDePontos (pontosIniciais) {

  const quantidadeRestante = pontosIniciais - totalDeDanos

  if (quantidadeRestante <= 0) {
    return "Você não possui mais pontos de vida. O jogo acabou!"
  } else {
    return `Você ainda possui ${quantidadeRestante} pontos de vida.`
  }

}

console.log(quantidadeDePontos(pontosIniciais))

// 10. Desenvolver um programa para contar o número de letras maiúsculas da string abaixo: “LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY”

const minhaString =
  "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY"
let letrasMaiusculas = 0

function contarLetrasMaiusculas(string) {
  const stringSemEspacos = string.split(" ").join("")

  for (i = 0; i < stringSemEspacos.length; i++) {
    let letraSelecionada = stringSemEspacos.charAt(i)

    let letraMaiuscula = letraSelecionada.toUpperCase()

    if (letraSelecionada === letraMaiuscula) {
      letrasMaiusculas += 1
    }
  }

  return letrasMaiusculas
}

console.log(contarLetrasMaiusculas(minhaString))

// 11. Crie uma lógica para calcular a idade de uma pessoa. Essa lógica deverá receber um valor de ano de nascimento no formato “yyyy-MM-dd” e deverá retornar o número da idade da pessoa como resultado.

function calcularIdade(dataEmString) {
  const hoje = new Date()
  const dataDeAniversario = new Date(dataEmString)
  let idade = hoje.getFullYear() - dataDeAniversario.getFullYear()
  const mes = hoje.getMonth() - dataDeAniversario.getMonth()

  if (mes < 0 || (mes === 0 && hoje.getDate() < dataDeAniversario.getDate())) {
    idade--
  }

  return idade
}

console.log(calcularIdade("1991/05/02"))
