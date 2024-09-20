function calcularMedia() {
    // Obter os valores dos inputs
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);
  
    // Calcular a média
    let media = (num1 + num2 + num3) / 3;
  
    // Exibir o resultado
    document.getElementById("resultado").innerHTML = "A média aritmética é: " + media;
  }
  