# 💪 Exercícios — Aula 10: Tabelas Verdade

Domine a visualização de todas as possibilidades lógicas e aprenda a provar o comportamento de circuitos e softwares.

## 🟢 Nível Básico

### 1. A Regra do Dobro
Quantas linhas (combinações de entrada) terá uma tabela verdade se tivermos:
- a) 2 variáveis (A, B)
- b) 4 variáveis (A, B, C, D)
- c) 5 variáveis (A, B, C, D, E)

### 2. XOR vs OR
Preencha a última coluna comparando o resultado das duas operações:
| A | B | A OR B | A XOR B |
|---|---|---|---|
| 0 | 0 | ? | ? |
| 0 | 1 | ? | ? |
| 1 | 0 | ? | ? |
| 1 | 1 | ? | ? |
*Dica: Onde está a diferença entre elas?*

---

## 🟡 Nível Intermediário

### 3. Construindo Sua Tabela
Monte a tabela verdade completa para a expressão: **S = (A OR B) AND (NOT A)**.
| A | B | (A OR B) | NOT A | S |
|---|---|---|---|---|
| 0 | 0 | | | |
| 0 | 1 | | | |
| 1 | 0 | | | |
| 1 | 1 | | | |

### 4. O Mistério do NAND
O operador NAND é o "NOT do AND". Monte a tabela verdade dele e responda: Em qual única situação o resultado do NAND é **0 (Falso)**?

---

## 🔴 Desafio Master

### 5. Provando uma Tautologia ⚖️
Uma Tautologia é uma expressão que resulta em 1 (Verdadeiro) para **todas** as linhas da tabela.
- Monte a tabela verdade para a expressão: **S = A OR (NOT A)**.
- Explique por que, logicamente, esse resultado faz todo o sentido (Pense: "Ou algo é verdadeiro, ou sua negação é verdadeira").

---
[:material-book-open-variant: Ver Aula 10](../aulas/aula-10.md){ .md-button }
[:material-school: Responder Quiz 10](../quizzes/quiz-10.md){ .md-button }
