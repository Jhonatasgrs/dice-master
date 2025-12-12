# Dice-Master
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![HTML5](https://img.shields.io/badge/HTML5-5-orange)
![CSS3](https://img.shields.io/badge/CSS3-3-blue)
![Node.js](https://img.shields.io/badge/Node.js-20+-green)
![Express](https://img.shields.io/badge/Express-5.0-blue)
![API](https://img.shields.io/badge/API-REST-blueviolet)
![Crypto](https://img.shields.io/badge/Crypto-secure%20random-lightgrey)
![Project Type](https://img.shields.io/badge/Type-Fullstack-purple)
![License](https://img.shields.io/badge/License-MIT-orange)

O Dice-Master é uma aplicação web simples e elegante para rolagem de dados de RPG.
Inclui uma API em Node.js/Express e uma interface minimalista em HTML/CSS para enviar expressões como ``1d20+2``, ``2d6``, ``1d100``, etc.

---

## Funcionalidades
* **Rolagem de dados (API) usando expressão completa**: ``XdY + modificadores`` → ``ex: 2d6+3``
* **Dados permitidos**: ``d4``, ``d6``, ``d8``, ``d10``, ``d12``, ``d20``, ``d100``
* **Breakdown detalhado**: mostra cada dado separado (Ex: ``d6: [2, 5] | d8: [7]``)
* **UI minimalista**: feita com HTML e CSS puro
* **Histórico de rolagens no front-end**
* **CORS habilitado** — pode ser usado em apps externas
* **Randomização criptográfica** com crypto.randomInt()

---

## Tecnologias Utilizadas
**Backend**
* Node.js
* Express
* CORS
* Crypto (para RNG confiável)

**Frontend**
* HTML5
* CSS3 (estilo minimalista)
* JavaScript (fetch API)

---

## Como funciona a API

Endpoint principal:
``` bash
GET /api/roll?expr=1d20+2
```
Exemplo de resposta:
``` bash
{
  "expression": "1d20+2",
  "breakdown": [
    { "faces": 20, "rolls": [14] }
  ],
  "total": 16
}
```

---

## Pré-requisitos
* Node.js 18 ou superior
* Navegador web

---

## Como rodar o projeto

``` bash
git clone https://github.com/Jhonatasgrs/dice-master
cd dice-master

npm install
npm start
```

Abra o navegador:
``` bash
http://localhost:3000
