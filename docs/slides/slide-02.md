# 🔢 Aula 02: Conversão de Decimal para Binário
## Fundamentos da Computação

---

## 🎯 Objetivos de Hoje

- Revisar o conceito de sistema posicional <!-- .element: class="fragment" -->
- Aprender o método das divisões sucessivas <!-- .element: class="fragment" -->
- Aprender o método das potências de 2 <!-- .element: class="fragment" -->
- Praticar conversões de números inteiros <!-- .element: class="fragment" -->

---

## 🔄 Revisão: Base 2

Lembre-se: no binário, só temos **0** e **1**.

- Como representar o número 2? <!-- .element: class="fragment" -->
- Como representar o número 10? <!-- .element: class="fragment" -->
- Para isso, precisamos de um método matemático confiável. <!-- .element: class="fragment" -->

---

## ➗ Método 1: Divisões Sucessivas

É o método mais clássico e infalível.

1. Divida o número decimal por **2**. <!-- .element: class="fragment" -->
2. Anote o **resto** (será 0 ou 1). <!-- .element: class="fragment" -->
3. Pegue o quociente e divida por 2 novamente. <!-- .element: class="fragment" -->
4. Repita até que o quociente seja **0**. <!-- .element: class="fragment" -->

---

## 📝 Exemplo 1: Número 5

Vamos converter 5 para binário:

- 5 ÷ 2 = 2 (Resto **1**) <!-- .element: class="fragment" -->
- 2 ÷ 2 = 1 (Resto **0**) <!-- .element: class="fragment" -->
- 1 ÷ 2 = 0 (Resto **1**) <!-- .element: class="fragment" -->

Lemos os restos **de baixo para cima**: **101** <!-- .element: class="fragment" -->

---

## 📝 Exemplo 2: Número 13

- 13 ÷ 2 = 6 (Resto **1**) <!-- .element: class="fragment" -->
- 6 ÷ 2 = 3 (Resto **0**) <!-- .element: class="fragment" -->
- 3 ÷ 2 = 1 (Resto **1**) <!-- .element: class="fragment" -->
- 1 ÷ 2 = 0 (Resto **1**) <!-- .element: class="fragment" -->

Resultado: **1101** <!-- .element: class="fragment" -->

---

## ⚠️ A Regra de Ouro

"Leia os restos do **último quociente** para o **primeiro resto**." <!-- .element: class="fragment" -->

- O último resto é o bit mais à esquerda (**MSB**). <!-- .element: class="fragment" -->
- O primeiro resto é o bit mais à direita (**LSB**). <!-- .element: class="fragment" -->

---

## 🚀 Praticando com Números Maiores

### Exemplo 3: Número 25

- 25 ÷ 2 = 12 (R: **1**) <!-- .element: class="fragment" -->
- 12 ÷ 2 = 6 (R: **0**) <!-- .element: class="fragment" -->
- 6 ÷ 2 = 3 (R: **0**) <!-- .element: class="fragment" -->
- 3 ÷ 2 = 1 (R: **1**) <!-- .element: class="fragment" -->
- 1 ÷ 2 = 0 (R: **1**) <!-- .element: class="fragment" -->

Resultado: **11001** <!-- .element: class="fragment" -->

---

## 📏 Método 2: Subtração por Potências

Mais rápido se você souber a tabuada de 2 de cabeça.

- $2^0 = 1$ <!-- .element: class="fragment" -->
- $2^1 = 2$ <!-- .element: class="fragment" -->
- $2^2 = 4$ <!-- .element: class="fragment" -->
- $2^3 = 8$ <!-- .element: class="fragment" -->
- $2^4 = 16$ <!-- .element: class="fragment" -->
- $2^5 = 32$ <!-- .element: class="fragment" -->
- $2^6 = 64$ <!-- .element: class="fragment" -->
- $2^7 = 128$ <!-- .element: class="fragment" -->

---

## 💡 Como funciona o Método 2?

Exemplo: Converter **10**

- Cabe 128? Não (0) <!-- .element: class="fragment" -->
- Cabe 16? Não (0) <!-- .element: class="fragment" -->
- Cabe **8**? Sim (1). Sobram $10 - 8 = 2$ <!-- .element: class="fragment" -->
- Cabe 4? Não (0) <!-- .element: class="fragment" -->
- Cabe **2**? Sim (1). Sobram $2 - 2 = 0$ <!-- .element: class="fragment" -->
- Cabe 1? Não (0) <!-- .element: class="fragment" -->

Resultado: **1010** <!-- .element: class="fragment" -->

---

## 🧐 Comparando os Métodos

- **Divisões**: Mais lento, porém mais seguro para números gigantes. <!-- .element: class="fragment" -->
- **Potências**: Mais rápido para cálculos mentais rápidos (até 255). <!-- .element: class="fragment" -->

---

## ✍️ Exercício Rápido 1

Qual o binário de **7**?

- 7 ÷ 2 = 3 (R: 1)
- 3 ÷ 2 = 1 (R: 1)
- 1 ÷ 2 = 0 (R: 1)

Resposta: **111** <!-- .element: class="fragment" -->

---

## ✍️ Exercício Rápido 2

Qual o binário de **16**?

*Dica: 16 é uma potência exata ($2^4$).* <!-- .element: class="fragment" -->

- $16 = 1 \times 2^4 + 0 \times 2^3 + 0 \times 2^2 + 0 \times 2^1 + 0 \times 2^0$ <!-- .element: class="fragment" -->
- Resposta: **10000** <!-- .element: class="fragment" -->

---

## 💡 Truque de Mestre

"Todo número **ímpar** em decimal termina em **1** em binário." <!-- .element: class="fragment" -->

"Todo número **par** em decimal termina em **0** em binário." <!-- .element: class="fragment" -->

Isso ajuda a conferir seus cálculos rapidamente! <!-- .element: class="fragment" -->

---

## 📊 Tabela de Verificação

| Decimal | Binário |
| :--- | :--- |
| 1 | 1 |
| 2 | 10 |
| 4 | 100 |
| 8 | 1000 |
| 16 | 10000 |

Notou o padrão? Adicionamos um 0 a cada potência! <!-- .element: class="fragment" -->

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

Resultado: **10011101** <!-- .element: class="fragment" -->

---

## 📝 Resumo da Aula

1. Para converter Decimal -> Binário: **Divisões sucessivas por 2**. <!-- .element: class="fragment" -->
2. Leia os restos de **baixo para cima**. <!-- .element: class="fragment" -->
3. Potências de 2 são atalhos poderosos. <!-- .element: class="fragment" -->
4. Números pares terminam em 0, ímpares em 1. <!-- .element: class="fragment" -->

---

## 🚀 Próxima Aula...

**Conversão Binário para Decimal!**

Vamos aprender o caminho de volta usando pesos e somas. <!-- .element: class="fragment" -->

---

## ❓ Dúvidas?

"Existem 10 tipos de pessoas no mundo: as que entendem binário e as que não entendem."
*(Piada clássica de programador)* <!-- .element: class="fragment" -->