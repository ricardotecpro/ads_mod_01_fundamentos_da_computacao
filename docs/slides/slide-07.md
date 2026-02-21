# 🧮 Aula 07: Aritmética Binária
## Fundamentos da Computação

---

## 🎯 Objetivos de Hoje

- Aprender as regras da soma binária (Vai-Um) <!-- .element: class="fragment" -->
- Aprender as regras da subtração binária (Empréstimo) <!-- .element: class="fragment" -->
- Compreender como a CPU realiza cálculos básicos <!-- .element: class="fragment" -->
- Identificar situações de Overflow <!-- .element: class="fragment" -->

---

## 🔄 Revisão: O que é Aritmética?

É o estudo das operações numéricas.

- Em Decimal, somamos até 9 e "vai um" para a casa das dezenas. <!-- .element: class="fragment" -->
- Em Binário, somamos até 1 e "vai um" para a casa dos pesos de 2. <!-- .element: class="fragment" -->

---

## ➕ Soma Binária: As 4 Regras

Memorize estas combinações:

- $0 + 0 = 0$ <!-- .element: class="fragment" -->
- $0 + 1 = 1$ <!-- .element: class="fragment" -->
- $1 + 0 = 1$ <!-- .element: class="fragment" -->
- $1 + 1 = 0$ (**e "vai um" para a próxima coluna**) <!-- .element: class="fragment" -->

---

## 📝 Exemplo 1: Soma Simples

`10` (dois) + `01` (um)

- Coluna 0 ($2^0$): $0 + 1 = 1$ <!-- .element: class="fragment" -->
- Coluna 1 ($2^1$): $1 + 0 = 1$ <!-- .element: class="fragment" -->
- Resultado: **11** (três) <!-- .element: class="fragment" -->

---

## 🚀 Exemplo 2: O "Vai-Um" (Carry)

`11` (três) + `01` (um)

- Coluna 0: $1 + 1 = 0$ (e leva 1) <!-- .element: class="fragment" -->
- Coluna 1: $1 \text{ (do carry)} + 1 + 0 = 10 \rightarrow 0$ (e leva 1) <!-- .element: class="fragment" -->
- Coluna 2: $1 \text{ (do carry)} \rightarrow 1$ <!-- .element: class="fragment" -->
- Resultado: **100** (quatro) <!-- .element: class="fragment" -->

---

## 🏗️ Soma em Cascata

Quando temos muitos "vai uns" seguidos.

Ex: `1011` + `0111`
- $1+1=10 \rightarrow 0$ (L: 1)
- $1+1+1=11 \rightarrow 1$ (L: 1) <!-- .element: class="fragment" -->
- $1+0+1=10 \rightarrow 0$ (L: 1) <!-- .element: class="fragment" -->
- $1+1+0=10 \rightarrow 0$ (L: 1) <!-- .element: class="fragment" -->
Resultado: **10010** <!-- .element: class="fragment" -->

---

## ➖ Subtração Binária: Regras

- $0 - 0 = 0$
- $1 - 1 = 0$
- $1 - 0 = 1$
- **$0 - 1 = 1$ (Pede emprestado da esquerda)** <!-- .element: class="fragment" -->

*Atenção: O empréstimo em binário vale 2 (pois é a base).* <!-- .element: class="fragment" -->

---

## 📝 Exemplo 3: Subtração Simples

`11` (3) - `01` (1)

- $1 - 1 = 0$
- $1 - 0 = 1$
- Resultado: **10** (2) <!-- .element: class="fragment" -->

---

## 🚨 O "Empréstimo" (Borrow)

`10` (2) - `01` (1)

- Casa 0: $0 - 1 \rightarrow$ pede emprestado. <!-- .element: class="fragment" -->
- O 1 da esquerda some (vira 0) e "desce" valendo 2. <!-- .element: class="fragment" -->
- $2 - 1 = 1$. <!-- .element: class="fragment" -->
- Casa 1: $0 - 0 = 0$. <!-- .element: class="fragment" -->
- Resultado: **01** (1) <!-- .element: class="fragment" -->

---

## 📝 Subtração Complexa

`100` (4) - `001` (1)

- O 1 da casa $2^2$ empresta para a casa $2^1$, que empresta para a $2^0$. <!-- .element: class="fragment" -->
- Casa 0: $2 - 1 = 1$. <!-- .element: class="fragment" -->
- Casa 1: $1 - 0 = 1$. <!-- .element: class="fragment" -->
- Casa 2: $0 - 0 = 0$. <!-- .element: class="fragment" -->
- Resultado: **011** (3) <!-- .element: class="fragment" -->

---

## ✖️ Multiplicação Binária

A mais fácil de todas!

- $0 \times 0 = 0$
- $0 \times 1 = 0$
- $1 \times 0 = 0$
- $1 \times 1 = 1$

Funciona como a multiplicação decimal (deslocando casas). <!-- .element: class="fragment" -->

---

## 🌊 Overflow: O Transbordamento

O que acontece quando o resultado é maior que o espaço disponível?

- Se temos 8 bits, o máximo é 255. <!-- .element: class="fragment" -->
- $255 + 1$ em 8 bits resulta em **00000000** e o "Carry" é perdido! <!-- .element: class="fragment" -->
- Isso pode causar bugs fatais em sistemas reais. <!-- .element: class="fragment" -->

---

## 🧠 Como a CPU faz isso?

Dentro do processador existe a **ALU** (Unidade Lógica e Aritmética).

- Ela usa circuitos chamados **Somadores** (Adders). <!-- .element: class="fragment" -->
- São feitos de milhões de portas lógicas AND, OR e XOR. <!-- .element: class="fragment" -->

---

## ✍️ Exercício Rápido 1

Quanto é `101` + `101`?

- $1+1=10 \rightarrow 0$ (L:1)
- $1+0+0=1$
- $1+1=10 \rightarrow 0$ (L:1)
- Resposta: **1010** <!-- .element: class="fragment" -->

---

## ✍️ Exercício Rápido 2

Quanto é `111` - `101`?

- $1-1=0$
- $1-0=1$
- $1-1=0$
- Resposta: **010** <!-- .element: class="fragment" -->

---

## 🏗️ Desafio de Overflow

Se um sistema de 4 bits somar `1111` (15) + `0001` (1). Qual o resultado final armazenado?

- $1111 + 0001 = 10000$ (5 bits). <!-- .element: class="fragment" -->
- O sistema só guarda 4 bits: **0000**. <!-- .element: class="fragment" -->
- O erro de overflow descartou o 16! <!-- .element: class="fragment" -->

---

## 📝 Resumo da Aula

1. Soma segue as regras do decimal, mas com base 2. <!-- .element: class="fragment" -->
2. "Vai-um" e "Empréstimo" são fundamentais. <!-- .element: class="fragment" -->
3. Multiplicação é feita por somas e deslocamentos. <!-- .element: class="fragment" -->
4. Overflow ocorre quando o resultado não cabe no registrador. <!-- .element: class="fragment" -->

---

## 🚀 Próxima Aula...

**Representação de Dados e Sinais!**

Como o computador diferencia números positivos de negativos? Vamos conhecer o Complemento de 2. <!-- .element: class="fragment" -->

---

## ❓ Dúvidas?

"Existem 10 tipos de pessoas no mundo: as que entendem aritmética binária e as que levam carry." <!-- .element: class="fragment" -->