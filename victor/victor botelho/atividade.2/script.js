// Pede ao usuário para digitar os três números
let numero1 = parseInt(prompt("Digite o primeiro número:"));
let numero2 = parseInt(prompt("Digite o segundo número:"));
let numero3 = parseInt(prompt("Digite o terceiro número:"));

// Inicializa as variáveis para o maior e menor número
let maior = numero1; // Assume que o primeiro número é o maior
let menor = numero1; // Assume que o primeiro número é o menor

// Compara o segundo número com o maior e menor
if (numero2 > maior) {
  maior = numero2;
}
if (numero2 < menor) {
  menor = numero2;
}

// Compara o terceiro número com o maior e menor
if (numero3 > maior) {
  maior = numero3;
}
if (numero3 < menor) {
  menor = numero3;
}

// Exibe os resultados em alertas
alert("O maior número é: " + maior);
alert("O menor número é: " + menor);