function verificarIdade() {
    let idade = parseInt(document.getElementById("idade").value);
  
    if (idade < 1 || idade > 120) {
      alert("Idade inválida. Por favor, insira uma idade entre 1 e 120.");
      return;
    }
  
    if (idade >= 18) {
      alert("Você é maior de idade.");
    } else {
      alert("Você é menor de idade.");
    }
  }
  