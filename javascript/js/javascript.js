alert ('Olá Mundo');
/* Uma variável com valor booleano */
var amor = true;
/* Uma variável com valor numérico */
var nota = 10;
/* Verificação condicional */
if (amor === true){
	alert( 'Ela me ama! Sou nota: ' + nota );
} 

// O código acima deverá mostrar: 
// Ela me ama! Sou nota: 10
// Na tela do navegador do usuário.

var a = 1; // Valor numérico 1
var b= 2;
 
// Concatenação entre a e c
var c =  a + b; 
  
// Exibe um alerta com o valor de c
alert( c );

/*para acessar uma caracter  de um valor de uma string basta colocar o numero referente a ela
entre colchetes*/
var mensagem = "Qualquer valor!";

/** 
 * Pega o caractere na posição 3 
 * iniciando do 0.
 */
alert( mensagem[3] );

/** 
 *
 * 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14
 * Q  u  a  l  q  u  e  r     v  a  l  o  r  !
 *
 */
 
 /* para verificar o tamanho de uma string use .length*/
 
 // Um valor qualquer

 
// Mostra 15 na tela
 alert( mensagem.length );
 
 /* para converter o valor de uma string para maiusculo ou menosculo
 basta usar toUpperCase e toLowerCase*/
 
 // Mostra QUALQUER VALOR!
 alert( mensagem.toUpperCase() );
 
// Mostra qualquer valor!
 alert( mensagem.toLowerCase() );
 

/*Para substituir o valor de uma variável em Javascript, basta utilizar "replace".*/

 
// Uma nova variável que substitui o ! por .
var mensagem_substituta = mensagem.replace("!", ".");
 
// Mostra "Qualquer valor." ao invés de "Qualquer valor!"
 alert( mensagem_substituta );
