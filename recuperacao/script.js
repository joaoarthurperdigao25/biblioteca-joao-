// 1. Array de 2 números em ordem crescente (sem sort)
function ordenarDois(arr) {
    return arr[0] > arr[1] ? [arr[1], arr[0]] : [arr[0], arr[1]];
}
console.log("Ex 1 (2 nums):", ordenarDois([9, 4]));

// 2. Array de 3 números em ordem crescente (sem sort)
function ordenarTres(arr) {
    let [a, b, c] = arr;
    if (a > b) [a, b] = [b, a];
    if (b > c) [b, c] = [c, b];
    if (a > b) [a, b] = [b, a];
    return [a, b, c];
}
console.log("Ex 2 (3 nums):", ordenarTres([8, 2, 5]));

// 3 e 4. Script interativo de inversão (quantidade dinâmica via prompt)
function inverterDinamico() {
    let qtd = Number(prompt("Quantos números deseja inserir no array?"));
    let vetor = [];
    for (let i = 0; i < qtd; i++) {
        vetor.push(Number(prompt(`Digite o elemento ${i+1}:`)));
    }
    console.log("Array Original:", vetor);
    console.log("Array Invertido:", [...vetor].reverse());
}
// 5. Função de ordenação manual (Bubble Sort) para qualquer tamanho
function bubbleSort(arr) {
    let copia = [...arr];
    let n = copia.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (copia[j] > copia[j + 1]) {
                let temp = copia[j];
                copia[j] = copia[j + 1];
                copia[j + 1] = temp;
            }
        }
    }
    return copia;
}
console.log("Ex 5 (Bubble Sort):", bubbleSort([12, 3, 50, 1, 8]));

// 6. Mostrar todos os índices onde um número aparece (usando forEach)
function buscarIndices(vetor, num) {
    let indices = [];
    vetor.forEach((val, idx) => {
        if (val === num) indices.push(idx);
    });
    return indices;
}
console.log("Ex 6 (Índices do número 5):", buscarIndices([5, 2, 5, 8, 9, 5], 5));

// 7. Sequência de Fibonacci com array
function fibonacciArray(n) {
    let fib = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) fib.push(0);
        else if (i === 1) fib.push(1);
        else fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}
console.log("Ex 7 (Fibonacci 6 termos):", fibonacciArray(6));

// 8. Fatorial com array
function fatorialArray(n) {
    let fat = [];
    for (let i = 0; i <= n; i++) {
        if (i === 0) fat.push(1);
        else fat.push(i * fat[i - 1]);
    }
    return fat;
}
console.log("Ex 8 (Fatorial até 4):", fatorialArray(4));

// 9 e 10. Soma e Média de um conjunto de números (com reduce)
function somarArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
function mediaArray(arr) {
    return arr.length === 0 ? 0 : somarArray(arr) / arr.length;
}
console.log("Ex 9/10 (Soma e Média):", somarArray([10, 20, 30]), mediaArray([10, 20, 30]));

// 11. Filtrar somente números primos (com filter)
function apenasPrimos(arr) {
    return arr.filter(num => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
}
console.log("Ex 11 (Primos):", apenasPrimos([1, 2, 3, 4, 5, 6, 7, 11, 15, 17]));

// 12. Array frutas em ordem alfabética decrescente
let frutas = ["mamão", "uva", "melancia", "banana"];
frutas.sort().reverse();
console.log("Ex 12 (Frutas Decrescente):", frutas);

// 13. Estados em select (populando via script)
window.addEventListener("DOMContentLoaded", () => {
    let estados = ["GO", "MG", "SP", "RJ", "AM", "PA"];
    estados.sort();
});

// 14. Matriz Agenda 5x2 (Dias úteis e compromissos)
let agenda = [
    ["Segunda-feira", "Reunião de Equipe"],
    ["Terça-feira", "Desenvolvimento Web"],
    ["Quarta-feira", "Consulta Médica"],
    ["Quinta-feira", "Estudo de Algoritmos"],
    ["Sexta-feira", "Entrega de Projeto"]
];
console.log("Ex 14 (Agenda):", agenda);

// 1 e 2. Quadrados Vermelhos com Cor Aleatória no Hover
function getRandomColor() {    
    const letters = "0123456789ABCDEF"; 
    let color = "#";   
    for (let i = 0; i < 6; i++) { 
        color += letters[Math.floor(Math.random() * 16)]; 
    } 
    return color;
}

document.getElementById("btnCriarQuadrado")?.addEventListener("click", () => {
    const div = document.createElement("div");
    div.classList.add("quadrado");
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = getRandomColor();
    });
    document.getElementById("containerQuadrados").appendChild(div);
});

// 3 e 4. Lista de Nomes Dinâmica
let nomes = ["Diego", "Gabriel", "Lucas"];
function renderizarNomes() {
    const ul = document.getElementById("listaNomes");
    if (!ul) return;
    ul.innerHTML = "";
    nomes.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        ul.appendChild(li);
    });
}
renderizarNomes();

function adicionarNomeLista() {
    const input = document.getElementById("inputNome");
    if (input && input.value.trim() !== "") {
        nomes.push(input.value);
        renderizarNomes();
        input.value = "";
    }
}

// Manipulação de Cores de Fundo
function mudarCorFundo(cor) {
    document.body.style.backgroundColor = cor;
}

// Ocultar / Mostrar Parágrafo
function alternarParagrafo() {
    let p = document.getElementById("paragrafoAlternar");
    if (p) {
        p.style.display = p.style.display === "none" ? "block" : "none";
    }
}

// Validação de Cadastro (Senha 6 a 10 caracteres e iguais)
function validarCadastro(event) {
    event.preventDefault();
    let senha = document.getElementById("senhaUser").value;
    let confirma = document.getElementById("confirmaSenhaUser").value;

    if (senha !== confirma) {
        alert("As senhas não coincidem!");
        return;
    }
    if (senha.length < 6 || senha.length > 10) {
        alert("A senha deve possuir entre 6 e 10 caracteres!");
        return;
    }
    alert("Cadastro realizado com sucesso!");
}

// Verificador de Palíndromo
function testarPalindromo() {
    let palavra = document.getElementById("inputPalindromo").value;
    let limpa = palavra.toLowerCase().replace(/\s/g, "");
    let invertida = limpa.split("").reverse().join("");
    let msg = document.getElementById("resultadoPalindromo");
    
    if (limpa && limpa === invertida) {
        msg.textContent = `"${palavra}" é um palíndromo!`;
        msg.style.color = "green";
    } else {
        msg.textContent = `"${palavra}" não é um palíndromo.`;
        msg.style.color = "red";
    }
}

// Inverter 5 nomes de formulário
function inverterCamposNomes() {
    let inputs = document.querySelectorAll(".nomeInverter");
    let valores = Array.from(inputs).map(input => input.value);
    let invertidos = valores.reverse();
    inputs.forEach((input, index) => {
        input.value = invertidos[index];
    });
}

// Formulário de Cadastro (Física / Jurídica)
function controlarCamposPessoa() {
    let tipo = document.querySelector('input[name="tipoPessoa"]:checked')?.value;
    let cpf = document.getElementById("campoCPF");
    let cnpj = document.getElementById("campoCNPJ");
    let data = document.getElementById("campoData");

    if (tipo === "fisica") {
        cpf.disabled = false;
        data.disabled = false;
        cnpj.disabled = true;
        cnpj.value = "";
    } else if (tipo === "juridica") {
        cnpj.disabled = false;
        cpf.disabled = true;
        data.disabled = true;
        cpf.value = "";
        data.value = "";
    }
}

function apenasNumeros(evt) {
    let charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
    return true;
}

// Intercalar Palavras
function intercalarPalavras() {
    let p1 = document.getElementById("palavra1").value;
    let p2 = document.getElementById("palavra2").value;
    let resultado = "";
    let max = Math.max(p1.length, p2.length);

    for (let i = 0; i < max; i++) {
        if (i < p1.length) resultado += p1[i];
        if (i < p2.length) resultado += p2[i];
    }
    document.getElementById("resultadoIntercalado").value = resultado;
}

// Estatísticas de 3 números
function calcularEstatisticas() {
    let n1 = Number(document.getElementById("numEstat1").value);
    let n2 = Number(document.getElementById("numEstat2").value);
    let n3 = Number(document.getElementById("numEstat3").value);
    let arr = [n1, n2, n3];

    let soma = somarArray(arr);
    let media = mediaArray(arr);
    let produto = arr.reduce((acc, curr) => acc * curr, 1);
    let maior = Math.max(...arr);
    let menor = Math.min(...arr);

    let html = `
        <table>
            <tr><th>Números</th><td>${n1}, ${n2}, ${n3}</td></tr>
            <tr><th>Soma</th><td>${soma}</td></tr>
            <tr><th>Média</th><td>${media.toFixed(2)}</td></tr>
            <tr><th>Produto</th><td>${produto}</td></tr>
            <tr><th>Maior</th><td>${maior}</td></tr>
            <tr><th>Menor</th><td>${menor}</td></tr>
        `;
    document.getElementById("tabelaEstatisticas").innerHTML = html;
}

// Pesquisar e Destacar Palavra no Texto
function pesquisarTexto() {
    let termo = document.getElementById("inputBusca").value.trim();
    let bloco = document.getElementById("blocoTexto");
    let msg = document.getElementById("msgBusca");
    let textoOriginal = "A programação de clientes web envolve o desenvolvimento de interfaces interativas utilizando HTML, CSS e JavaScript. O aprendizado de algoritmos e manipulação do DOM é essencial para construir aplicações web robustas e dinâmicas.";

    if (!termo) {
        bloco.innerHTML = textoOriginal;
        msg.textContent = "";
        return;
    }

    let regex = new RegExp(`(${termo})`, "gi");
    if (regex.test(textoOriginal)) {
        let textoModificado = textoOriginal.replace(regex, `<span style="background-color: yellow;">$1</span>`);
        bloco.innerHTML = textoModificado;
        msg.textContent = "";
    } else {
        bloco.innerHTML = textoOriginal;
        msg.textContent = "A busca não retornou nenhum resultado.";
        msg.style.color = "red";
    }
}

// Galeria de Imagens Ampliadas
function ampliarImagem(src) {
    let div = document.getElementById("divAmpliada");
    div.innerHTML = `<img src="${src}" alt="Imagem Ampliada">`;
}