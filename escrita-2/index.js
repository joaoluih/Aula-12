
/**
 * 
 * Escreva as fun��es explicadas abaixo:
 * 
 * a) Escreva uma fun��o que receba 2 n�meros como par�metros, e, dentro da fun��o, fa�a a soma das duas entradas e retorne o resultado. Invoque a fun��o e imprima no console o resultado.
 * 
 * b) Fa�a uma fun��o que recebe 2 n�meros e retorne um booleano que informa se o primeiro n�mero � maior ou igual ao segundo.
 * 
 * c) Escreva uma fun��o que receba um n�mero e devolva um booleano indicando se ele � par ou n�o.
 * 
 * d) Fa�a uma fun��o que recebe uma mensagem (string) como par�metro e imprima o tamanho dessa mensagem, juntamente com uma vers�o dela em letras mai�sculas.
 * 
**/

/* A */
function verificarSoma(numero1, numero2){
  let soma = numero1 + numero2 
  return soma 
} 
let resultadoSoma = verificarSoma(15, 50)
 
console.log(resultadoSoma) 



/* B */ 
function verificarMaiorOuMenor(numero1, numero2){
  let maiorQue = numero1 >= numero2
  return maiorQue
}
let resultadoMaior = verificarMaiorOuMenor(14, 10)

console.log(resultadoMaior)


/*C*/ 
function verifiarPar(numero1){
  let par = (numero1 % 2 === 0)
  return par

}

let resultadoPar = verifiarPar(4)
console.log(resultadoPar)



/* D */   
function verificarString(texto){
  let verificar = [texto.toLowerCase(), texto.length]
  return verificar 
  
}

let verificar = verificarString("EU SOU O JOAO")
console.log(verificar[0], verificar[1])

