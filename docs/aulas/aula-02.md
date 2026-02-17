---
title: Aula 02 – Conversão de Decimal para Binário
date: 2026-02-16
quiz: quiz-02
exercicios: exercicio-02
projeto: projeto-02
slides: slides-02.html
---

# Aula 02 – Conversão de Decimal para Binário


## 🎯 Objetivos de Aprendizagem

* Aprender o algoritmo de divisões sucessivas.
* Converter números inteiros positivos de decimal para binário.

## 📘 Conteúdo

### Algoritmo de Divisões Sucessivas
Para converter um número decimal para binário (ou qualquer outra base), dividimos o número sucessivamente pela base de destino (2) até que o quociente seja zero. O resultado é a sequência dos **restos** lidos de trás para frente (do último para o primeiro).

### Passo a Passo: Convertendo 25 para Binário

1. $25 \div 2 = 12$, resto **1** (bit menos significativo - LSB)
2. $12 \div 2 = 6$, resto **0**
3. $6 \div 2 = 3$, resto **0**
4. $3 \div 2 = 1$, resto **1**
5. $1 \div 2 = 0$, resto **1** (bit mais significativo - MSB)

Lendo os restos de baixo para cima (ou do último para o primeiro): **11001**

## 💡 Dica
Números pares em binário sempre terminam em **0**. Números ímpares sempre terminam em **1**.

## ⚠️ Erros Comuns
* Esquecer de ler os restos na ordem inversa (baixo para cima).
* Parar a divisão antes de chegar ao quociente 0.

---
[Próxima Aula](aula-03.md)
