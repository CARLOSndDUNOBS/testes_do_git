async function calcularIMC() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;

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

    document.getElementById("resultado").innerHTML = `
        <p><strong>IMC:</strong> ${dados.imc}</p>
        <p><strong>Classificação:</strong> ${dados.mensagem}</p>
        <p><strong>Peso ideal:</strong> ${dados.peso_ideal} kg</p>
    `;
}