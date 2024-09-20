function isPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function exibirPrimos() {
    const tabela = document.getElementById('tabela-primos');
    
    for (let i = 0; i <= 200; i++) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.textContent = i;

        if (isPrimo(i)) {
            td.classList.add('primo'); // Adiciona a classe para destacar números primos
        }

        tr.appendChild(td);
        tabela.appendChild(tr);
    }
}

// Chama a função para exibir os números primos
exibirPrimos();
