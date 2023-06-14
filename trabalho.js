/*
Sistema para pedido em uma lanchonete de cachorro quente.

Ele irá pedir dados para entrega, mostrar as opções de lanches e pegar as  
observações sobre o lanche do cliente, após finalizar o pedido irá pegar a forma de
pagamento que o cliente (usuário) irá usar, caso seja dinheiro perguntará se o cliente 
tem o valor trocado, caso precise de troco irá perguntar qual o valor que o cliente tem  
e fará o cálculo, após finalizado o sistema irá mostrar o id do pedido e os dados do cliente 
para entrega.

Autor: Bruno de Abreu Hillesheim. 
Data:13/06/2023
 */

// Variaveis usadas para fazer o cadastro
var nome, endereco, telefone


//Variaveis usadas para o cardapio
var vlr_siples = 18, vlr_prensado = 18, vlr_fango = 21, vlr_calabresa = 21,
  vlr_entrega = 3, valor_pedido = 0


// Variavel para usar while quando perguntar se quer fazer o pedido
var continuar_pedindo = true


// variaveis usadas para fazer o pedido
var pedido, pedidos = []
var observacao, observacoes = []
var cont = 0


// Variaveis usadas para pagamento
var f_pagamento, pagamento
var p_troco, vlr_pg_cliente
var troco


//Número do pedido
var id_pedido = Math.floor(Math.random() * 10000);
//será imprimido um número inteiro de 0 a 10000 para ser o id do pedido


alert(`Seja bem vindo ao PitDog!`)


alert(`Preencha o cadastro a seguir para fazer seu pedido.`)


nome = prompt("Digite seu nome: ")
endereco = prompt("Endereço para entrega: ")
telefone = prompt("Telefone para contato: ")


//Fazer o pedido
while (true) {
  pedido = prompt(`Selecione seu lanche pelos números


  1)Simples: 2 salsichas, queijo, molho da panela, batata palha,
milho, ervilha, vinagrete, maionese, catchup, mostarda. R$18,00.


  2)Prensado: 2 salsichas, Queijo, Molho da panela, Batata palha,
milho, ervilha, vinagrete, maionese, catchup, mostarda. R$18,00.


  3)Frango: 2 salsichas, frango desfiado, queijo, molho da panela, 
batata palha, milho, ervilha, vinagrete, maionese, catchup, mostarda.
R$21,00.


  4)Calabresa: 2 salsichas, calabresa, queijo, molho da panela,
batata palha, milho, ervilha, vinagrete, maionese, catchup, mostarda. 
R$21,00.


  5)Finalizar pedido`)
  switch (pedido) { //laço de repetição para pegar o pedido e a observação 
    case "1":
      pedido = "Cachorro quente simples"
      observacao = prompt("Observação: ")
      if (observacao == "") {
        observacao = "Completo"
      }
      observacoes.push(observacao)
      pedidos.push(pedido)// adiciona pedido e observação na mesma posição dos vetores 
      valor_pedido = valor_pedido + vlr_siples//faz a soma do valor do pedido
      break

    case "2":
      pedido = "Cachorro quente prensado"
      observacao = prompt("Observação: ")
      if (observacao == "") {
        observacao = "Completo"
      }
      observacoes.push(observacao)
      pedidos.push(pedido)// adiciona pedido e observação na mesma posição dos vetores 
      valor_pedido = valor_pedido + vlr_prensado//faz a soma do valor do pedido
      break

    case "3":
      pedido = "Cachorro quente com frango"
      observacao = prompt("Observação: ")
      if (observacao == "") {
        observacao = "Completo"
      }
      observacoes.push(observacao)
      pedidos.push(pedido)// adiciona pedido e observação na mesma posição dos vetores 
      valor_pedido = valor_pedido + vlr_fango//faz a soma do valor do pedido
      break

    case "4":
      pedido = "Cachorro quente com calabresa"
      observacao = prompt("Observação: ")
      if (observacao == "") {
        observacao = "Completo"
      }
      observacoes.push(observacao)
      pedidos.push(pedido)// adiciona pedido e observação na mesma posição dos vetores 
      valor_pedido = valor_pedido + vlr_calabresa//faz a soma do valor do pedido
      break
  }

  if (pedido == 5) {
    break
  } else if (pedido != 1 || pedido != 2 || pedido != 3 || pedido != 4) {
    pedido = true
  }
}

while (cont < pedidos.length) {
  console.log(`${pedidos[cont]}
Observação: ${observacoes[cont]}`)
  cont++
}

alert(`Valor total do pedido é R$:${valor_pedido},00.`)


while (true) {
  f_pagamento = prompt(`Pagamento somente na entrega!

Escolha uma das opções
(1) - Crédito.
(2) - Débito.
(3) - Dinheiro.
(4) - Pix.`)


  switch (f_pagamento) {
    case "1":
      f_pagamento = "Crédito"
      break
    case "2":
      f_pagamento = "Débito"
      break
    case "3":
      f_pagamento = "Dinheiro"
      break
    case "4":
      f_pagamento = "Pix"
      break
    default:
     alert("Selecione uma opção válida")
  }
  if (f_pagamento === "Crédito" || f_pagamento === "Débito" || f_pagamento === "Dinheiro" || f_pagamento === "Pix") {
    break
  } else {
    f_pagamento = true
  }
}
//se a forma de pagamento for dinheiro, perguntar se precisa de troco, se sim perguntar o valor

if (f_pagamento == "Dinheiro") {
  p_troco = prompt("Precisa de troco? s/n")
  if (p_troco == "s") {
    while(true){
    vlr_pg_cliente = prompt("Para qual valor vai precisar de troco?")
    if(vlr_pg_cliente >= valor_pedido){
    troco = vlr_pg_cliente - valor_pedido
    break
  }else{
    alert("Digite um valor válido.")
  }
  }
}
}

console.log(`${nome} o pedido ID do seu pedido é ${id_pedido}
Endereço para entrega: ${endereco}
Telefone para contato: ${telefone}
Forma de pagamento: ${f_pagamento}
Valor total do pedido: R$${valor_pedido},00`)

if (f_pagamento == "Dinheiro" && p_troco == "s") {
  console.log(`Seu troco será R$${troco},00`)
} else {
  console.log(`Não precisará de troco.`)
}