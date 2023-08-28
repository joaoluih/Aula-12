
/**
 * 
 * Crie uma fun��o para cada uma das opera��es b�sicas (soma, subtra��o, multiplica��o e divis�o).
 * 
 * Pe�a para o usu�rio inserir dois n�meros e chame essas 4 fun��es com esses valores inseridos pelo usu�rio sendo o argumento. Por fim, mostre no console o resultado das opera��es:
 * 
 * Exemplo:
 * 
 * N�meros inseridos: 30 e 3
 * Soma: 33
 * Diferen�a: 27
 * Multiplica��o: 90
 * Divis�o: 10
 * 
 * Dica: lembre-se de converter a entrada do usu�rio para n�mero antes de fazer os c�lculos.
 * 
**/
 
/*somar*/
let perguntaSoma1 = Number(prompt("Diga um numero"))
let perguntaSoma2 = Number(prompt("Diga outro numero"))

function soma(){
  let somar  = perguntaSoma1 + perguntaSoma2
  return somar

}
let resposta = soma()
console.log(resposta) 


/*subtrair*/
let perguntaSub1 = Number(prompt("Diga um numero"))
let perguntaSub2 = Number(prompt("Diga outro numero"))

function subtração(){
  let subtrair  = perguntaSub1 - perguntaSub2
  return subtrair

}
let respostaSub = subtração()
console.log(respostaSub)

/*multiplicar*/ 
let perguntaMul1 = Number(prompt("Diga um numero"))
let perguntaMul2 = Number(prompt("Diga outro numero"))


function multiplicao(){
let multiplicar = perguntaMul1 * perguntaMul2
return multiplicar
}
let respostaMul = multiplicao()
console.log(respostaMul)

/*Divisão*/ 
let perguntaDiv1 = Number(prompt("Diga um numero"))
let perguntaDiv2 = Number(prompt("Diga outro numero"))

function divisão(){
  let dividir =  perguntaDiv1 / perguntaDiv2 
  return dividir 
}
let respostaDiv = divisão()
console.log(respostaDiv)