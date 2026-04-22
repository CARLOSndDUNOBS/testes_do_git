async function calcularIMC() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const resultadoDiv = document.getElementById("resultado");

    // limpa classes anteriores
    resultadoDiv.className = "resultado";

    // validação 1: campos vazios
    if (!peso || !altura) {
        resultadoDiv.classList.add("resultado-erro");
        resultadoDiv.innerHTML = `<p>Preencha todos os campos.</p>`;
        return;
    }

    // validação 2: valores inválidos
    if (peso <= 0 || altura <= 0) {
        resultadoDiv.classList.add("resultado-erro");
        resultadoDiv.innerHTML = `<p>Peso e altura devem ser maiores que zero.</p>`;
        return;
    }

    const resposta = await fetch("/calcular", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            peso: peso,
            altura: altura
        })
    });

    const dados = await resposta.json();

    if (dados.erro) {
        resultadoDiv.classList.add("resultado-erro");
        resultadoDiv.innerHTML = `<p>${dados.erro}</p>`;
        return;
    }

    resultadoDiv.classList.add("resultado-sucesso");
    resultadoDiv.innerHTML = `
        <p><strong>IMC:</strong> ${dados.imc}</p>
        <p><strong>Classificação:</strong> ${dados.mensagem}</p>
        <p><strong>Peso ideal:</strong> ${dados.peso_ideal} kg</p>
    `;
}