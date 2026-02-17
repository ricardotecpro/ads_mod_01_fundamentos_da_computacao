---
title: Aula 04 – Conversão Decimal ↔ Octal
date: 2026-02-16
quiz: quiz-04
exercicios: exercicio-04
projeto: projeto-04
slides: slides-04.html
---

# Aula 04 – Conversão Decimal ↔ Octal


## 🎯 Objetivos de Aprendizagem

* Entender o sistema Octal (Base 8).
* Realizar conversões entre Decimal e Octal.

## 📘 Conteúdo

### O Sistema Octal
O sistema octal usa 8 dígitos: **0, 1, 2, 3, 4, 5, 6, 7**.
Ele é útil porque cada dígito octal representa exatamente **3 bits** ($2^3 = 8$). Isso facilita a representação compacta de números binários.

### Conversão Decimal para Octal
Similar ao binário, usamos **divisões sucessivas**, mas agora por **8**.

**Exemplo: 100 para Octal**
1. $100 \div 8 = 12$, resto **4**
2. $12 \div 8 = 1$, resto **4**
3. $1 \div 8 = 0$, resto **1**

Lendo de baixo para cima: **144** (em octal)

### Conversão Octal para Decimal
Usamos potências de 8.

**Exemplo: 144 (Octal) para Decimal**
$$ 1 \times 8^2 + 4 \times 8^1 + 4 \times 8^0 $$
$$ 1 \times 64 + 4 \times 8 + 4 \times 1 $$
$$ 64 + 32 + 4 = 100 $$

## 💡 Curiosidade
O sistema octal foi muito usado em computadores antigos (mainframes) com palavras de 12, 24 ou 36 bits, que são divisíveis por 3. Hoje, o Hexadecimal é mais comum.

---
[Próxima Aula](aula-05.md)
