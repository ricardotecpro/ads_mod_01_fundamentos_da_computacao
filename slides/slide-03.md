# 🔢 Aula 03: Conversão Binário para Decimal
## Fundamentos da Computação

---

## 🎯 Objetivos de Hoje

- Compreender o valor posicional dos bits <!-- .element: class="fragment" -->
- Aprender o método dos pesos (soma de potências) <!-- .element: class="fragment" -->
- Praticar a conversão para números decimais <!-- .element: class="fragment" -->
- Memorizar as principais potências de 2 <!-- .element: class="fragment" -->

---

## 🔄 Revisão: Sistemas Posicionais

No sistema decimal, cada posição vale 10, 100, 1000...

No binário, cada posição vale **potências de 2**.

- $2^0, 2^1, 2^2, 2^3...$ <!-- .element: class="fragment" -->

---

## 🏗️ A Lógica da Conversão

Para saber o valor decimal, basta somar o valor de cada bit "ligado" (1) multiplicado pelo seu peso posicional.

- Peso = $2^{\text{posição}}$ <!-- .element: class="fragment" -->
- A posição começa em **0** (da direita para a esquerda). <!-- .element: class="fragment" -->

---

## 📏 Tabela de Pesos (8 Bits)

| Posição | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Peso ($2^n$) | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

---

## 📝 Exemplo 1: Número 101

Bits: `1 0 1`

- $1 \times 2^2 = 4$ <!-- .element: class="fragment" -->
- $0 \times 2^1 = 0$ <!-- .element: class="fragment" -->
- $1 \times 2^0 = 1$ <!-- .element: class="fragment" -->
- **Soma**: $4 + 0 + 1 = 5$ <!-- .element: class="fragment" -->

---

## 📝 Exemplo 2: Número 1101

Bits: `1 1 0 1`

- $1 \times 8 = 8$ <!-- .element: class="fragment" -->
- $1 \times 4 = 4$ <!-- .element: class="fragment" -->
- $0 \times 2 = 0$ <!-- .element: class="fragment" -->
- $1 \times 1 = 1$ <!-- .element: class="fragment" -->
- **Soma**: $8 + 4 + 0 + 1 = 13$ <!-- .element: class="fragment" -->

---

## 💡 Truque: Ignore os Zeros!

Você não precisa multiplicar por zero. Apenas identifique onde estão os **1s** e some os pesos correspondentes. <!-- .element: class="fragment" -->

`1010` -> Somar pesos da pos 3 e pos 1 ($8 + 2 = 10$). <!-- .element: class="fragment" -->

---

## 🚀 Exemplo 3: Número 10110

Posições com 1: **4, 2, 1** <!-- .element: class="fragment" -->

- Peso $2^4 = 16$ <!-- .element: class="fragment" -->
- Peso $2^2 = 4$ <!-- .element: class="fragment" -->
- Peso $2^1 = 2$ <!-- .element: class="fragment" -->
- **Soma**: $16 + 4 + 2 = 22$ <!-- .element: class="fragment" -->

---

## 📦 Desafio: Tudo Ligado!

Quanto vale **11111111** (8 bits)?

- $128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255$ <!-- .element: class="fragment" -->

Este é o valor máximo que um **Byte** pode representar! <!-- .element: class="fragment" -->

---

## 📉 As Potências de Cabeça

Tente memorizar estas:
- $2^0 = 1$
- $2^1 = 2$
- $2^2 = 4$
- $2^3 = 8$
- $2^4 = 16$
- $2^5 = 32$
- $2^6 = 64$
- $2^7 = 128$

---

## ✍️ Exercício Rápido 1

Converta `111` para decimal.

- $4 + 2 + 1 = 7$ <!-- .element: class="fragment" -->

---

## ✍️ Exercício Rápido 2

Converta `1001` para decimal.

- $8 + 1 = 9$ <!-- .element: class="fragment" -->

---

## 🧐 Ordem de Cálculo

Sempre comece da **direita** (bit menos significativo):

- Bit 0 -> Peso 1 <!-- .element: class="fragment" -->
- Bit 1 -> Peso 2 <!-- .element: class="fragment" -->
- Bit 2 -> Peso 4 <!-- .element: class="fragment" -->
- ... e assim por diante. <!-- .element: class="fragment" -->

---

## 🔍 O Padrão de Dobro

Reparou que cada peso é o **dobro** do anterior? <!-- .element: class="fragment" -->

1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024... <!-- .element: class="fragment" -->

---

## 🛠️ Aplicação: Endereços IP

Endereços IPv4 são 4 grupos de 8 bits (Bytes).
`192.168.1.1`

Por trás das câmeras, são apenas binários! <!-- .element: class="fragment" -->

---

## 🏗️ Desafio Hard

Converta `10101010`

- $128 + 32 + 8 + 2$ <!-- .element: class="fragment" -->
- Resposta: **170** <!-- .element: class="fragment" -->

---

## 📊 Tabela de Verificação

| Binário | Soma de Pesos | Decimal |
| :--- | :--- | :--- |
| 0011 | 2 + 1 | 3 |
| 1100 | 8 + 4 | 12 |
| 10101 | 16 + 4 + 1 | 21 |

---

## 📝 Resumo da Aula

1. Cada bit tem um peso baseado na sua posição ($2^n$). <!-- .element: class="fragment" -->
2. Comece a contar as posições da **direita** (index 0). <!-- .element: class="fragment" -->
3. Some apenas os pesos onde o bit é **1**. <!-- .element: class="fragment" -->
4. O valor máximo de 8 bits é 255. <!-- .element: class="fragment" -->

---

## 🚀 Próxima Aula...

**O Sistema Octal (Base 8)!**

Vamos ver como agrupar bits de 3 em 3 para facilitar a leitura. <!-- .element: class="fragment" -->

---

## ❓ Dúvidas?

"Computadores são incrivelmente rápidos, precisos e burros. Homens são incrivelmente lentos, imprecisos e brilhantes."
— *Albert Einstein* (atribuído) <!-- .element: class="fragment" -->