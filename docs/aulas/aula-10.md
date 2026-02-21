# 📊 Aula 10 – Tabelas Verdade

Como podemos garantir que um sistema complexo (com vários sensores e condições) vai se comportar exatamente como esperamos? A resposta está na **Tabela Verdade**. Ela é o mapa completo de todas as possibilidades de um sistema lógico.

---

## 🎯 Objetivos de Aprendizagem

Nesta aula, você vai:
- [x] Aprender a calcular o número de linhas de uma tabela usando a regra $2^n$.
- [x] Conhecer os operadores **XOR** (OU Exclusivo), **NAND** e **NOR**.
- [x] Construir tabelas verdade para expressões lógicas complexas passo a passo.
- [x] Identificar circuitos equivalentes através de tabelas idênticas.

---

## 🔢 A Regra das Linhas: $2^n$

O tamanho de uma tabela verdade depende apenas do número de variáveis de entrada ($n$). A cada nova variável, o número de cenários possíveis **dobra**.

| Variáveis ($n$) | Linhas ($2^n$) | Exemplo de Entradas |
| :---: | :---: | :--- |
| 1 | 2 | A |
| 2 | 4 | A, B |
| 3 | 8 | A, B, C |

---

## ✨ Novos Operadores Poderosos

=== "XOR (OU Exclusivo)"
    **O detector de diferença**: Só resulta em **Verdadeiro** se as entradas forem **Diferentes**. 
    
    | A | B | Saída (A ⊕ B) |
    | :---: | :---: | :---: |
    | 0 | 1 | **1** |
    | 1 | 1 | 0 |
    
    !!! tip "Uso Prático"
        O XOR é a base da criptografia e da detecção de erros em redes de computadores!
=== "NAND e NOR"
    São os operadores **Universais**. Eles são o oposto (NOT) do AND e do OR.
    - **NAND**: `0` apenas se ambos forem 1.
    - **NOR**: `1` apenas se ambos forem 0 (muito usado em alarmes).

---

## 🛠️ Exemplo de Construção

Para resolver `(A AND B) OR NOT A`, divida em colunas lógicas:

| A | B | (A ∧ B) | ¬A | **Resultado Final** |
| :---: | :---: | :---: | :---: | :---: |
| 0 | 0 | 0 | 1 | **1** |
| 0 | 1 | 0 | 1 | **1** |
| 1 | 0 | 0 | 0 | **0** |
| 1 | 1 | 1 | 0 | **1** |

---

## 🚀 Desafio da Semana

Tente construir a tabela verdade para a expressão `NOT (A AND B)`. 
- Compare o resultado com a tabela do operador **NAND**. 
- O que você descobriu sobre a relação entre eles?

---

<div class="grid cards" markdown>

-   :material-presentation: **Slides Interativos**
    ---
    Veja a construção de tabelas dinâmicas e o comportamento do XOR.
    [:octicons-arrow-right-24: Ver Slides](../slides/slide-10.html)

-   :material-school: **Quiz de Prática**
    ---
    10 desafios para preencher saídas de tabelas verdade.
    [:octicons-arrow-right-24: Responder Quiz](../quizzes/quiz-10.md)

-   :material-dumbbell: **Mão na Massa**
    ---
    Exercícios avançados com NAND, NOR e Tautologias.
    [:octicons-arrow-right-24: Praticar](../exercicios/exercicio-10.md)

</div>

---
[« Aula Anterior](aula-09.md) | [Próxima Aula: Portas Lógicas :material-arrow-right:](aula-11.md)
