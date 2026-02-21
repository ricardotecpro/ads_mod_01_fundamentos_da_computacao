# 🧮 Aula 07: Aritmética Binária
## Fundamentos da Computação

---

## 🎯 Objetivos de Hoje

- Aprender as regras da soma binária (Vai-Um) { .fragment }
- Aprender as regras da subtração binária (Empréstimo) { .fragment }
- Compreender como a CPU realiza cálculos básicos { .fragment }
- Identificar situações de Overflow { .fragment }

---

## 🔄 Revisão: O que é Aritmética?

É o estudo das operações numéricas.

- Em Decimal, somamos até 9 e "vai um" para a casa das dezenas. { .fragment }
- Em Binário, somamos até 1 e "vai um" para a casa dos pesos de 2. { .fragment }

---

## ➕ Soma Binária: As 4 Regras

Memorize estas combinações:

- $0 + 0 = 0$ { .fragment }
- $0 + 1 = 1$ { .fragment }
- $1 + 0 = 1$ { .fragment }
- $1 + 1 = 0$ (**e "vai um" para a próxima coluna**) { .fragment }

---

## 📝 Exemplo 1: Soma Simples

`10` (dois) + `01` (um)

- Coluna 0 ($2^0$): $0 + 1 = 1$ { .fragment }
- Coluna 1 ($2^1$): $1 + 0 = 1$ { .fragment }
- Resultado: **11** (três) { .fragment }

---

## 🚀 Exemplo 2: O "Vai-Um" (Carry)

`11` (três) + `01` (um)

- Coluna 0: $1 + 1 = 0$ (e leva 1) { .fragment }
- Coluna 1: $1 \text{ (do carry)} + 1 + 0 = 10 \rightarrow 0$ (e leva 1) { .fragment }
- Coluna 2: $1 \text{ (do carry)} \rightarrow 1$ { .fragment }
- Resultado: **100** (quatro) { .fragment }

---

## 🏗️ Soma em Cascata

Quando temos muitos "vai uns" seguidos.

Ex: `1011` + `0111`
- $1+1=10 \rightarrow 0$ (L: 1)
- $1+1+1=11 \rightarrow 1$ (L: 1) { .fragment }
- $1+0+1=10 \rightarrow 0$ (L: 1) { .fragment }
- $1+1+0=10 \rightarrow 0$ (L: 1) { .fragment }
Resultado: **10010** { .fragment }

---

## ➖ Subtração Binária: Regras

- $0 - 0 = 0$
- $1 - 1 = 0$
- $1 - 0 = 1$
- **$0 - 1 = 1$ (Pede emprestado da esquerda)** { .fragment }

*Atenção: O empréstimo em binário vale 2 (pois é a base).* { .fragment }

---

## 📝 Exemplo 3: Subtração Simples

`11` (3) - `01` (1)

- $1 - 1 = 0$
- $1 - 0 = 1$
- Resultado: **10** (2) { .fragment }

---

## 🚨 O "Empréstimo" (Borrow)

`10` (2) - `01` (1)

- Casa 0: $0 - 1 \rightarrow$ pede emprestado. { .fragment }
- O 1 da esquerda some (vira 0) e "desce" valendo 2. { .fragment }
- $2 - 1 = 1$. { .fragment }
- Casa 1: $0 - 0 = 0$. { .fragment }
- Resultado: **01** (1) { .fragment }

---

## 📝 Subtração Complexa

`100` (4) - `001` (1)

- O 1 da casa $2^2$ empresta para a casa $2^1$, que empresta para a $2^0$. { .fragment }
- Casa 0: $2 - 1 = 1$. { .fragment }
- Casa 1: $1 - 0 = 1$. { .fragment }
- Casa 2: $0 - 0 = 0$. { .fragment }
- Resultado: **011** (3) { .fragment }

---

## ✖️ Multiplicação Binária

A mais fácil de todas!

- $0 \times 0 = 0$
- $0 \times 1 = 0$
- $1 \times 0 = 0$
- $1 \times 1 = 1$

Funciona como a multiplicação decimal (deslocando casas). { .fragment }

---

## 🌊 Overflow: O Transbordamento

O que acontece quando o resultado é maior que o espaço disponível?

- Se temos 8 bits, o máximo é 255. { .fragment }
- $255 + 1$ em 8 bits resulta em **00000000** e o "Carry" é perdido! { .fragment }
- Isso pode causar bugs fatais em sistemas reais. { .fragment }

---

## 🧠 Como a CPU faz isso?

Dentro do processador existe a **ALU** (Unidade Lógica e Aritmética).

- Ela usa circuitos chamados **Somadores** (Adders). { .fragment }
- São feitos de milhões de portas lógicas AND, OR e XOR. { .fragment }

---

## ✍️ Exercício Rápido 1

Quanto é `101` + `101`?

- $1+1=10 \rightarrow 0$ (L:1)
- $1+0+0=1$
- $1+1=10 \rightarrow 0$ (L:1)
- Resposta: **1010** { .fragment }

---

## ✍️ Exercício Rápido 2

Quanto é `111` - `101`?

- $1-1=0$
- $1-0=1$
- $1-1=0$
- Resposta: **010** { .fragment }

---

## 🏗️ Desafio de Overflow

Se um sistema de 4 bits somar `1111` (15) + `0001` (1). Qual o resultado final armazenado?

- $1111 + 0001 = 10000$ (5 bits). { .fragment }
- O sistema só guarda 4 bits: **0000**. { .fragment }
- O erro de overflow descartou o 16! { .fragment }

---

## 📝 Resumo da Aula

1. Soma segue as regras do decimal, mas com base 2. { .fragment }
2. "Vai-um" e "Empréstimo" são fundamentais. { .fragment }
3. Multiplicação é feita por somas e deslocamentos. { .fragment }
4. Overflow ocorre quando o resultado não cabe no registrador. { .fragment }

---

## 🚀 Próxima Aula...

**Representação de Dados e Sinais!**

Como o computador diferencia números positivos de negativos? Vamos conhecer o Complemento de 2. { .fragment }

---

## ❓ Dúvidas?

"Existem 10 tipos de pessoas no mundo: as que entendem aritmética binária e as que levam carry." { .fragment }
