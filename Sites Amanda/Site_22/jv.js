/* Os operadores são separados em 6 categorias:

1) Operadores Aritméticos (matemáticos) (+,-,*,/)
2) Operadores de Atribuição (=, +=, -=, *=)
3) Operadores de Sequência (,)
4) Operadores de Comparação (==, ===, ! =, ! ==)
5) Operadores Condicional (ternário) (< >, ?, :)
6) Operadores Lógicos (&&, ||, !,) */


//DECLARAÇÃO DE VARIAVEIS
var valor1, valor2, total;

//ATRIBUIÇÃO DOS VALORES
valor1 = 5;
valor2 = 2;

total = ++valor1;

alert(total);
alert('o valor1 ficou: ' + valor1);


//DECLARAÇÃO DE VARIAVEIS
var valor1, valor2, total

//ATRIBUIÇÃO DOS VALORES
valor1 = 8;
valor2 = 10;

total = (valor1 == valor2); //true (verdadeiro) ou false (falso)

alert(total);


//DECLARAÇÃO DE VARIAVEIS
var idade, eleitor;

//ATRIBUIÇÃO DOS VALORES
idade = 18;
eleitor = (idade<18) ? "Não, eleitor":"Sim, eleitor";

alert('A resposta é: ' + eleitor + ' a idade dele é de: ' + idade);


//DECLARAÇÃO DE VARIAVEIS
var idade, eleitor, resultado;

//ATRIBUIÇÃO DOS VALORES
idade = 25;
eleitor = (idade < 18) ? "Não, eleitor" : "Sim, eleitor";

resultado = (idade > 60 && idade < 70); //true //false

alert(resultado);