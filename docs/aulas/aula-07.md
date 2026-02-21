# 🧮 Aula 07 – Aritmética Binária

Como o computador consegue somar números se ele só entende 0 e 1? A resposta é simples: ele segue as mesmas regras que nós, mas com uma base muito menor. Vamos dominar o famoso "vai-um" da lógica digital.

---

## 🎯 Objetivos de Aprendizagem

Nesta aula, você vai:
- [x] Aprender as 4 regras básicas da soma binária.
- [x] Dominar o conceito de **Carry Out** (Vai-um) em cálculos complexos.
- [x] Compreender a lógica da subtração binária e do **Borrow** (empréstimo).
- [x] Identificar e entender o que é um **Overflow** (Transbordamento).

---

## ➕ Regras da Soma Binária

A soma binária é quase igual à decimal, mas você "fecha uma casa" (vai-um) muito mais rápido:

| Operação | Resultado | Comentário |
| :---: | :---: | :--- |
| **0 + 0** | **0** | Normal |
| **0 + 1** | **1** | Normal |
| **1 + 0** | **1** | Normal |
| **1 + 1** | **0** | **Vai 1 (Carry)** para a próxima coluna! |

---

## 📝 Prática de Cálculo

=== "Soma Com Carry"
    <div class="termy">
    ```console
    $ bin-math sum 1011 0111
       [1][1][1]  <-- Carry (vai-um)
         1 0 1 1  (11 em decimal)
       + 0 1 1 1  (7 em decimal)
       ---------
       1 0 0 1 0  (18 em decimal)
    ```
    </div>
=== "O Perigo do Overflow"
    !!! warning "Cuidado com o Transbordamento"
        Se um sistema de 8 bits (máximo 255) tentar somar $200 + 100$, o resultado seria $300$. Como $300$ não cabe em 8 bits, o bit extra é "perdido", gerando um resultado errado. Isso é o **Overflow**.

---

!!! info "Subtração e Borrow"
    Na subtração, quando precisamos tirar 1 de 0, "pedimos emprestado" da casa à esquerda. Em binário, esse empréstimo (Borrow) vale **2**.
    $0 - 1 = 1$ (e pede 1 emprestado à esquerda).

---

## 🚀 Desafio da Semana

Tente somar `1111` + `0001`. 
- Observe como o "vai-um" viaja por todas as colunas até o final. 
- Esse efeito é chamado de **Ripple Carry** (Soma em Cascata)!

---

<div class="grid cards" markdown>

-   :material-presentation: **Slides Interativos**
    ---
    Animações passo a passo da soma e do caminho do Carry.
    [:octicons-arrow-right-24: Ver Slides](../slides/slide-07.html)

-   :material-school: **Quiz de Prática**
    ---
    10 somas binárias para você resolver em segundos.
    [:octicons-arrow-right-24: Responder Quiz](../quizzes/quiz-07.md)

-   :material-dumbbell: **Mão na Massa**
    ---
    Exercícios de soma, subtração e detecção de Overflow.
    [:octicons-arrow-right-24: Praticar](../exercicios/exercicio-07.md)

</div>

---
[« Aula Anterior](aula-06.md) | [Próxima Aula: Representação de Dados :material-arrow-right:](aula-08.md)
