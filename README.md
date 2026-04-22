# 🧪 testes_do_git

Meu primeiro projeto usando Git e GitHub.

---

## 🎯 Objetivo
Aprender versionamento com Git e GitHub enquanto desenvolvo projetos reais utilizando Python e tecnologias Web.

---

## 🚀 Projeto Atual: Calculadora de IMC (Web)

Este projeto evoluiu de um código simples no terminal para uma aplicação web completa utilizando Flask, com integração entre frontend e backend e deploy online.

---

## 🌐 Deploy online

A aplicação está disponível em:  
https://testes-do-git.onrender.com

---

## 🧠 O que foi desenvolvido

### ✔️ Versão 1 — Terminal
- Cálculo de IMC via `input()`
- Classificação baseada no resultado
- Cálculo de peso ideal

---

### ✔️ Versão 2 — Refatoração
- Remoção de `input()`
- Criação de funções reutilizáveis:
  - `mensagem_imc()`
  - `calcular_peso_ideal()`
  - `calcular_imc()`
- Uso de dicionário para retorno estruturado

---

### ✔️ Versão 3 — Web com Flask
- Criação de servidor com Flask
- Rota `/` para renderização do HTML
- Rota `/calcular` para processamento dos dados

---

### ✔️ Versão 4 — Integração Front + Back
- HTML com inputs de peso e altura
- JavaScript utilizando `fetch` (requisição POST)
- Backend recebendo dados via `request.json`
- Retorno em JSON com `jsonify`
- Atualização dinâmica da interface

---

## 🚀 Funcionalidades

- Cálculo de IMC em tempo real
- Cálculo de peso ideal
- Classificação automática
- Validação de dados (frontend e backend)
- Suporte a números com vírgula (ex: `1,75`)
- Tratamento de erros
- Interface responsiva
- Animação suave nos resultados
- Botão com estado de loading
- Regra personalizada (altura absurda)

---

## 🧩 Tecnologias utilizadas

- Python
- Flask
- HTML5
- CSS3
- JavaScript
- Git / GitHub
- Render (deploy)

---

## 📁 Estrutura do projeto

```
calculadora-imc/
│
├── main.py
├── templates/
│   └── index.html
├── static/
│   ├── script.js
│   ├── style.css
│   └── reset.css
├── requirements.txt
├── .gitignore
└── README.md
```
---

## ⚙️ Como executar o projeto

### 1. Clonar o repositório

```bash
git clone <https://github.com/CARLOSndDUNOBS/testes_do_git>