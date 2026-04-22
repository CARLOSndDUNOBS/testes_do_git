async function calcularIMC() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const resultadoDiv = document.getElementById("resultado");

    // 🔴 VALIDAÇÃO 1 — campos vazios
    if (!peso || !altura) {
        resultadoDiv.innerHTML = `<p style="color:red;">Preencha todos os campos.</p>`;
        return;
    }

    // 🔴 VALIDAÇÃO 2 — valores inválidos
    if (peso <= 0 || altura <= 0) {
        resultadoDiv.innerHTML = `<p style="color:red;">Peso e altura devem ser maiores que zero.</p>`;
        return;
    }

    // ✅ Se passou nas validações, faz o envio
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

    // 🔴 TRATAMENTO DE ERRO DO FLASK
    if (dados.erro) {
        resultadoDiv.innerHTML = `<p style="color:red;">${dados.erro}</p>`;
        return;
    }

    // ✅ Resultado normal
    resultadoDiv.innerHTML = `
        <p><strong>IMC:</strong> ${dados.imc}</p>
        <p><strong>Classificação:</strong> ${dados.mensagem}</p>
        <p><strong>Peso ideal:</strong> ${dados.peso_ideal} kg</p>
    `;
}