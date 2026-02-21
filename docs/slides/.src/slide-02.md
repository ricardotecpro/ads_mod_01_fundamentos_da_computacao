# 🔢 Aula 02: Conversão de Decimal para Binário
## Fundamentos da Computação

---

## 🎯 Objetivos de Hoje

- Revisar o conceito de sistema posicional { .fragment }
- Aprender o método das divisões sucessivas { .fragment }
- Aprender o método das potências de 2 { .fragment }
- Praticar conversões de números inteiros { .fragment }

---

## 🔄 Revisão: Base 2

Lembre-se: no binário, só temos **0** e **1**.

- Como representar o número 2? { .fragment }
- Como representar o número 10? { .fragment }
- Para isso, precisamos de um método matemático confiável. { .fragment }

---

## ➗ Método 1: Divisões Sucessivas

É o método mais clássico e infalível.

1. Divida o número decimal por **2**. { .fragment }
2. Anote o **resto** (será 0 ou 1). { .fragment }
3. Pegue o quociente e divida por 2 novamente. { .fragment }
4. Repita até que o quociente seja **0**. { .fragment }

---

## 📝 Exemplo 1: Número 5

Vamos converter 5 para binário:

- 5 ÷ 2 = 2 (Resto **1**) { .fragment }
- 2 ÷ 2 = 1 (Resto **0**) { .fragment }
- 1 ÷ 2 = 0 (Resto **1**) { .fragment }

Lemos os restos **de baixo para cima**: **101** { .fragment }

---

## 📝 Exemplo 2: Número 13

- 13 ÷ 2 = 6 (Resto **1**) { .fragment }
- 6 ÷ 2 = 3 (Resto **0**) { .fragment }
- 3 ÷ 2 = 1 (Resto **1**) { .fragment }
- 1 ÷ 2 = 0 (Resto **1**) { .fragment }

Resultado: **1101** { .fragment }

---

## ⚠️ A Regra de Ouro

"Leia os restos do **último quociente** para o **primeiro resto**." { .fragment }

- O último resto é o bit mais à esquerda (**MSB**). { .fragment }
- O primeiro resto é o bit mais à direita (**LSB**). { .fragment }

---

## 🚀 Praticando com Números Maiores

### Exemplo 3: Número 25

- 25 ÷ 2 = 12 (R: **1**) { .fragment }
- 12 ÷ 2 = 6 (R: **0**) { .fragment }
- 6 ÷ 2 = 3 (R: **0**) { .fragment }
- 3 ÷ 2 = 1 (R: **1**) { .fragment }
- 1 ÷ 2 = 0 (R: **1**) { .fragment }

Resultado: **11001** { .fragment }

---

## 📏 Método 2: Subtração por Potências

Mais rápido se você souber a tabuada de 2 de cabeça.

- $2^0 = 1$ { .fragment }
- $2^1 = 2$ { .fragment }
- $2^2 = 4$ { .fragment }
- $2^3 = 8$ { .fragment }
- $2^4 = 16$ { .fragment }
- $2^5 = 32$ { .fragment }
- $2^6 = 64$ { .fragment }
- $2^7 = 128$ { .fragment }

---

## 💡 Como funciona o Método 2?

Exemplo: Converter **10**

- Cabe 128? Não (0) { .fragment }
- Cabe 16? Não (0) { .fragment }
- Cabe **8**? Sim (1). Sobram $10 - 8 = 2$ { .fragment }
- Cabe 4? Não (0) { .fragment }
- Cabe **2**? Sim (1). Sobram $2 - 2 = 0$ { .fragment }
- Cabe 1? Não (0) { .fragment }

Resultado: **1010** { .fragment }

---

## 🧐 Comparando os Métodos

- **Divisões**: Mais lento, porém mais seguro para números gigantes. { .fragment }
- **Potências**: Mais rápido para cálculos mentais rápidos (até 255). { .fragment }

---

## ✍️ Exercício Rápido 1

Qual o binário de **7**?

- 7 ÷ 2 = 3 (R: 1)
- 3 ÷ 2 = 1 (R: 1)
- 1 ÷ 2 = 0 (R: 1)

Resposta: **111** { .fragment }

---

## ✍️ Exercício Rápido 2

Qual o binário de **16**?

*Dica: 16 é uma potência exata ($2^4$).* { .fragment }

- $16 = 1 \times 2^4 + 0 \times 2^3 + 0 \times 2^2 + 0 \times 2^1 + 0 \times 2^0$ { .fragment }
- Resposta: **10000** { .fragment }

---

## 💡 Truque de Mestre

"Todo número **ímpar** em decimal termina em **1** em binário." { .fragment }

"Todo número **par** em decimal termina em **0** em binário." { .fragment }

Isso ajuda a conferir seus cálculos rapidamente! { .fragment }

---

## 📊 Tabela de Verificação

| Decimal | Binário |
| :--- | :--- |
| 1 | 1 |
| 2 | 10 |
| 4 | 100 |
| 8 | 1000 |
| 16 | 10000 |

Notou o padrão? Adicionamos um 0 a cada potência! { .fragment }

---

## 🏗️ Desafio: Número 157

- 157 ÷ 2 = 78 (R: 1)
- 78 ÷ 2 = 39 (R: 0)
- 39 ÷ 2 = 19 (R: 1)
- 19 ÷ 2 = 9 (R: 1)
- 9 ÷ 2 = 4 (R: 1)
- 4 ÷ 2 = 2 (R: 0)
- 2 ÷ 2 = 1 (R: 0)
- 1 ÷ 2 = 0 (R: 1)

Resultado: **10011101** { .fragment }

---

## 📝 Resumo da Aula

1. Para converter Decimal -> Binário: **Divisões sucessivas por 2**. { .fragment }
2. Leia os restos de **baixo para cima**. { .fragment }
3. Potências de 2 são atalhos poderosos. { .fragment }
4. Números pares terminam em 0, ímpares em 1. { .fragment }

---

## 🚀 Próxima Aula...

**Conversão Binário para Decimal!**

Vamos aprender o caminho de volta usando pesos e somas. { .fragment }

---

## ❓ Dúvidas?

"Existem 10 tipos de pessoas no mundo: as que entendem binário e as que não entendem."
*(Piada clássica de programador)* { .fragment }
