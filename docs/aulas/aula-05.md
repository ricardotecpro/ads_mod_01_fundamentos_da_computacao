---
title: Aula 05 – Conversão Decimal ↔ Hexadecimal
date: 2026-02-16
quiz: quiz-05
exercicios: exercicio-05
projeto: projeto-05
slides: slides-05.html
---

# Aula 05 – Conversão Decimal ↔ Hexadecimal


## 🎯 Objetivos de Aprendizagem

* Compreender a Base 16 (Hexadecimal).
* Usar letras (A-F) para representar dígitos acima de 9.
* Realizar conversões envolvendo hexadecimal.

## 📘 Conteúdo

### O Sistema Hexadecimal
O sistema hexadecimal usa 16 dígitos: **0-9 e A-F**.
Ele é extremamente comum na computação para representar endereços de memória, cores (RGB) e agrupamento de bits, pois cada dígito hexadecimal corresponde exatamente a **4 bits** ($2^4 = 16$).

| Decimal | Binário | Hexadecimal |
|---|---|---|
| 0-9 | 0000-1001 | 0-9 |
| 10 | 1010 | A |
| 11 | 1011 | B |
| 12 | 1100 | C |
| 13 | 1101 | D |
| 14 | 1110 | E |
| 15 | 1111 | F |

### Conversão Decimal para Hexadecimal
Divisões sucessivas por **16**. Lembre-se de converter restos maiores que 9 para letras.

**Exemplo: 255 para Hex**
1. $255 \div 16 = 15$, resto **15** (F)
2. $15 \div 16 = 0$, resto **15** (F)

Resultado: **FF**

### Conversão Hexadecimal para Decimal
Soma ponderada por potências de 16.

**Exemplo: 1A (Hex) para Decimal**
$$ 1 \times 16^1 + A \times 16^0 $$
$$ 1 \times 16 + 10 \times 1 $$
$$ 16 + 10 = 26 $$

## 💡 Dica
Sempre que converter grandes números binários, agrupe-os em grupos de 4 bits.
Ex: $11110000_2 \rightarrow F0_{16}$

---
[Próxima Aula](aula-06.md)
