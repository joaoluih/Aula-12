
// Leia o c�digo

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)





/**
 * 
 * a) Explique o que essa fun��o faz e qual � sua utilidade. Ela esta deixando o texto todo em minusculo e dizer se no texto tem O conjunto de palavras escolhida "cenoura"
 * 
 * b) Determine qual ser� a sa�da no console para cada uma das 3 entradas do usu�rio:
 * - Eu gosto de cenoura. 		- eu gosto de cenoura, true 
 * - CENOURA � bom pra vista.	 - cenoura é  bom para vista, true
 * - Cenouras crescem na terra. - cenouras crescem na terra, true 
 * 
 * 
**/
