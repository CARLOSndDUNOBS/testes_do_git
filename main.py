from flask import Flask, render_template, request, jsonify

app = Flask(__name__)
def mensagem_imc(imc):
    if imc >= 186:
        return "Tu e mais gordo que o Jon Brower Minnoch, meu Deus!"
    if imc < 12:
        return "Caso gravissimo de desnutricao"
    if imc < 18.5:
        return "Baixo peso"
    if imc < 24.9:
        return "Peso normal"
    if imc < 29.9:
        return "Sobrepeso"
    if imc < 34.9:
        return "Obesidade I"
    if imc < 39.9:
        return "Obesidade II"
    return "Obesidade III"

IMC_IDEAL = 24.9

def calcular_peso_ideal (imc_ideal, altura):
    return imc_ideal * (altura * altura)

def calcular_imc (peso, altura):
    imc = peso / (altura * altura)
    return{
        "imc": round(imc, 2),
        "mensagem": mensagem_imc(imc),
        "peso_ideal": round(calcular_peso_ideal(IMC_IDEAL, altura), 2)
    }

# ===== ROTAS =====

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/calcular", methods=["POST"])
def calcular():
    dados = request.json

    peso = float(dados["peso"])
    altura = float(dados["altura"])

    resultado = calcular_imc(peso, altura)

    return jsonify(resultado)

if __name__ == "__main__":
    app.run(debug=True)