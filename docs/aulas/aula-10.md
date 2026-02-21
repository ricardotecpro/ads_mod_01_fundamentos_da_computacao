---
title: Aula 10 – Tabelas Verdade
date: 2026-02-16
quiz: quiz-10
exercicios: exercicio-10
projeto: projeto-10
slides: slide-10.html
---

# 📊 Aula 10 – Tabelas Verdade

Como podemos garantir que um sistema complexo (com vários sensores e condições) vai se comportar exatamente como esperamos? A resposta está na **Tabela Verdade**. Ela é o mapa completo de todas as possibilidades de um sistema lógico. Hoje vamos aprender a construir esse mapa e conhecer operadores mais sofisticados como o **XOR**, o **NAND** e o **NOR**.

---

## 🎯 Objetivos de Aprendizagem

Nesta aula, você vai:
-   [x] Aprender a calcular o número de linhas de uma tabela usando a regra $2^n$.
-   [x] Conhecer os operadores **XOR** (OU Exclusivo), **NAND** e **NOR**.
-   [x] Construir tabelas verdade para expressões lógicas complexas passo a passo.
-   [x] Identificar circuitos equivalentes através de tabelas idênticas.

---

## 🔢 A Regra das Linhas: $2^n$

O tamanho de uma tabela verdade depende apenas do número de variáveis de entrada ($n$). A cada nova variável, o número de cenários possíveis **dobra**.

| n (Variáveis) | Linhas ($2^n$) | Exemplo de Entradas |
| :---: | :---: | :--- |
| 1 | 2 | A |
| 2 | 4 | A, B |
| 3 | 8 | A, B, C |
| 4 | 16 | A, B, C, D |

---

## ✨ Novos Operadores Poderosos

### 1. XOR (OU Exclusivo) - $\oplus$
O XOR é o "detector de diferença". Ele só resulta em **Verdadeiro** se as entradas forem **Diferentes**. Se ambas forem iguais (0-0 ou 1-1), o resultado é Falso.

> [!TIP]
> O XOR é a base da criptografia e da paridade (detecção de erro em redes)!

### 2. NAND e NOR (Os Universais)
São simplesmente o oposto (NOT) do AND e do OR.
-   **NAND**: 0 apenas se ambos forem 1.
-   **NOR**: 1 apenas se ambos forem 0.

---

## 🛠️ Construindo o Mapa: Passo a Passo

Para resolver a expressão `(A AND B) OR NOT A`, não tente fazer tudo de cabeça. Divida em colunas:

| A | B | (A ∧ B) | ¬A | **Resultado Final** |
| :---: | :---: | :---: | :---: | :---: |
| 0 | 0 | 0 | 1 | **1** |
| 0 | 1 | 0 | 1 | **1** |
| 1 | 0 | 0 | 0 | **0** |
| 1 | 1 | 1 | 0 | **1** |

<div class="termy">
```console
$ logic-analyzer "(A AND B) OR NOT A"
Analisando 2 variáveis...
Gerando 4 combinações...
Coluna 1: Resolvendo AND... [Concluído]
Coluna 2: Resolvendo NOT... [Concluído]
Saída: Gerando mapa final... [OK]
```
</div>

---

## ✍️ Exercícios Rápidos

1. Quantas linhas teria uma tabela verdade para um sistema com 5 sensores diferentes?
2. Qual a saída de um **XOR** para as entradas `0` e `1`?
3. Se o resultado de uma coluna é `{1, 1, 1, 1}`, como chamamos essa expressão? (Dica: pesquise por *Tautologia*).

---

## 🚀 Desafio da Semana
Tente construir a tabela verdade para a expressão `NOT (A AND B)`. Agora compare o resultado com a tabela do operador **NAND**. O que você descobriu?

---

[:material-presentation: Ver Slides](lesson-10-slides){ .md-button }
[:material-school: Responder Quiz](quiz-10){ .md-button }
[:material-dumbbell: Praticar Exercícios](exercicio-10){ .md-button }

---
[« Aula Anterior](aula-09.md) | [Próxima Aula »](aula-11.md)
