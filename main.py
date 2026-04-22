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

IMC_Ideal = 24.9
def calcular_peso_ideal(imc_ideal, altura):
    peso_ideal = imc_ideal * (altura * altura)
    return peso_ideal

print("Utilize o ponto em vez da virgula para separar os decimais")
peso = float(input("Digite seu peso: "))
altura = float(input("Digite sua altura: "))

imc = peso / (altura * altura)
pesoIdeal = calcular_peso_ideal(IMC_Ideal, altura)

print(f"Seu IMC e: {imc:.2f}")
print(mensagem_imc(imc))
print(f"Seu peso ideal e: {pesoIdeal:.2f} kg")