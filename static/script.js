function aplicarAnimacaoResultado(elemento, classeExtra) {
    elemento.className = "resultado";
    void elemento.offsetWidth;
    elemento.classList.add(classeExtra, "resultado-animado");
}

async function calcularIMC() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const resultadoDiv = document.getElementById("resultado");

    if (!peso || !altura) {
        aplicarAnimacaoResultado(resultadoDiv, "resultado-erro");
        resultadoDiv.innerHTML = `<p>Preencha todos os campos.</p>`;
        return;
    }

    if (peso <= 0 || altura <= 0) {
        aplicarAnimacaoResultado(resultadoDiv, "resultado-erro");
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
        aplicarAnimacaoResultado(resultadoDiv, "resultado-erro");
        resultadoDiv.innerHTML = `<p>${dados.erro}</p>`;
        return;
    }

    aplicarAnimacaoResultado(resultadoDiv, "resultado-sucesso");
    resultadoDiv.innerHTML = `
        <p><strong>IMC:</strong> ${dados.imc}</p>
        <p><strong>Classificação:</strong> ${dados.mensagem}</p>
        <p><strong>Peso ideal:</strong> ${dados.peso_ideal} kg</p>
    `;
}