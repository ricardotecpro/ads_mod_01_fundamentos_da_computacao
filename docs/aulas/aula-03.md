---
layout: aula
title: Aula 03 – Conversão de Binário para Decimal
date: 2026-02-16
quiz: quiz-03
exercicios: exercicio-03
projeto: projeto-03
slides: slides-03.html
---

## 🎯 Objetivos de Aprendizagem

* Compreender o conceito de notação posicional.
* Converter números binários para decimais usando potências de 2.

## 📘 Conteúdo

### Notação Posicional
Em qualquer base numérica, a posição de um dígito determina seu valor.
No sistema decimal:
$$ 143 = 1 \times 100 + 4 \times 10 + 3 \times 1 $$
$$ 143 = 1 \times 10^2 + 4 \times 10^1 + 3 \times 10^0 $$

No sistema binário, usamos potências de 2:
$$ 1010_2 = 1 \times 2^3 + 0 \times 2^2 + 1 \times 2^1 + 0 \times 2^0 $$
$$ 1010_2 = 8 + 0 + 2 + 0 = 10_{10} $$

### Passo a Passo

1. Escreva o número binário.
2. Identifique a posição de cada bit (da direita para a esquerda, começando em 0).
3. Multiplique cada bit (0 ou 1) por 2 elevado à sua posição.
4. Some os resultados.

### Exemplo: 11001

| Bit | 1 | 1 | 0 | 0 | 1 |
|---|---|---|---|---|---|
| Posição | $2^4$ | $2^3$ | $2^2$ | $2^1$ | $2^0$ |
| Valor | 16 | 8 | 4 | 2 | 1 |
| Produto | $1 \times 16$ | $1 \times 8$ | $0 \times 4$ | $0 \times 2$ | $1 \times 1$ |
| Resultado | 16 | 8 | 0 | 0 | 1 |

Total: $16 + 8 + 1 = 25$

## 💡 Dica
Memorize as primeiras potências de 2:
1, 2, 4, 8, 16, 32, 64, 128, 256...

---
[Próxima Aula]({{ site.baseurl }}/aulas/aula-04)
