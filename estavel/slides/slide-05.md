# 🔢 Aula 05: Sistema Hexadecimal (Base 16)
## Fundamentos da Computação

---

## 🎯 Objetivos de Hoje

- Compreender a base 16 e o uso de letras A-F <!-- .element: class="fragment" -->
- Aprender o agrupamento de bits em quartetos (Nibbles) <!-- .element: class="fragment" -->
- Converter entre Decimal, Binário e Hexadecimal <!-- .element: class="fragment" -->
- Ver aplicações reais (Cores CSS, Endereços de Memória) <!-- .element: class="fragment" -->

---

## 🔄 Revisão: Por que mais uma base?

- Binário é muito longo: `11001010` <!-- .element: class="fragment" -->
- Octal agrupa de 3 em 3. <!-- .element: class="fragment" -->
- **Hexadecimal** agrupa de 4 em 4. <!-- .element: class="fragment" -->

Como a maioria dos computadores modernos usa múltiplos de 8 bits (Bytes), o Hexadecimal é perfeito! <!-- .element: class="fragment" -->

---

## 🧩 Os 16 Símbolos

Usamos dígitos e as primeiras letras do alfabeto:

**0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F** <!-- .element: class="fragment" -->

- **A** = 10 <!-- .element: class="fragment" -->
- **B** = 11 <!-- .element: class="fragment" -->
- **C** = 12 <!-- .element: class="fragment" -->
- **D** = 13 <!-- .element: class="fragment" -->
- **E** = 14 <!-- .element: class="fragment" -->
- **F** = 15 <!-- .element: class="fragment" -->

---

## 🤝 A Relação Mágica: 2 e 16

Cada um dígito Hex representa exatamente **4 bits**.

- 4 bits = 1 **Nibble** (Metade de um Byte). <!-- .element: class="fragment" -->
- Isso significa que 2 dígitos Hex representam **1 Byte** inteiro. <!-- .element: class="fragment" -->
- Ex: `1111 1111` binário = `FF` em hex. <!-- .element: class="fragment" -->

---

## 📊 Tabela de Equivalência (0-7)

| Decimal | Binário | Hex |
| :--- | :--- | :--- |
| 0 | 0000 | 0 |
| 1 | 0001 | 1 |
| 2 | 0010 | 2 |
| 3 | 0011 | 3 |
| 4 | 0100 | 4 |
| 5 | 0101 | 5 |
| 6 | 0110 | 6 |
| 7 | 0111 | 7 |

---

## 📊 Tabela de Equivalência (8-F)

| Decimal | Binário | Hex |
| :--- | :--- | :--- |
| 8 | 1000 | 8 |
| 9 | 1001 | 9 |
| 10 | 1010 | A |
| 11 | 1011 | B |
| 12 | 1100 | C |
| 13 | 1101 | D |
| 14 | 1110 | E |
| 15 | 1111 | F |

---

## 🛠️ Método: Binário para Hex

1. Separe o binário em grupos de **4 bits** (da direita para a esquerda). <!-- .element: class="fragment" -->
2. Converta cada quarteto usando a tabela. <!-- .element: class="fragment" -->

Exemplo: `11011010` <!-- .element: class="fragment" -->
- `1101` | `1010` <!-- .element: class="fragment" -->
- $D$ | $A$ <!-- .element: class="fragment" -->
- Resultado: **DA₁₆** <!-- .element: class="fragment" -->

---

## ⚠️ Preenchimento com Zeros

Se sobrar bits à esquerda, complete o quarteto com zeros.

Exemplo: `10111` <!-- .element: class="fragment" -->
- `0001` | `0111` <!-- .element: class="fragment" -->
- $1$ | $7$ <!-- .element: class="fragment" -->
- Resultado: **17₁₆** <!-- .element: class="fragment" -->

---

## 🔄 Método: Hex para Binário

Cada dígito Hex vira exatamente 4 bits. **Nunca menos que 4!**

Exemplo: $B3₁₆$ <!-- .element: class="fragment" -->
- $B \rightarrow 1011$ <!-- .element: class="fragment" -->
- $3 \rightarrow 0011$ (não apenas `11`) <!-- .element: class="fragment" -->
- Resultado: **10110011** <!-- .element: class="fragment" -->

---

## 🔢 Hexadecimal para Decimal

Usamos a soma de potências de **16**.

Exemplo: $1A₁₆$ <!-- .element: class="fragment" -->
- $1 \times 16^1 + A \times 16^0$ <!-- .element: class="fragment" -->
- $16 + 10 = 26_{10}$ <!-- .element: class="fragment" -->

---

## 📏 Pesos da Base 16

| Posição | $16^2$ | $16^1$ | $16^0$ |
| :--- | :--- | :--- | :--- |
| Valor | 256 | 16 | 1 |

$FF₁₆ = 15 \times 16 + 15 = 240 + 15 = 255_{10}$ <!-- .element: class="fragment" -->

---

## ➗ Decimal para Hexadecimal

Divisões sucessivas por **16**.

Exemplo: $157_{10}$ <!-- .element: class="fragment" -->
- $157 \div 16 = 9$ (Resto **13**) <!-- .element: class="fragment" -->
- 13 no Hexadecimal é **D**. <!-- .element: class="fragment" -->
- $9 \div 16 = 0$ (Resto **9**) <!-- .element: class="fragment" -->

Resultado: **9D₁₆** <!-- .element: class="fragment" -->

---

## 🎨 Aplicação Real: Cores CSS

As cores na web são representadas por 3 canais (RGB) em Hexadecimal.
`#FF5733`

- **FF**: Vermelho (Máximo) <!-- .element: class="fragment" -->
- **57**: Verde <!-- .element: class="fragment" -->
- **33**: Azul <!-- .element: class="fragment" -->

Ao todo, são mais de 16 milhões de cores! <!-- .element: class="fragment" -->

---

## 💻 Outras Aplicações

- **Endereços de Memória**: `0x7FFF` <!-- .element: class="fragment" -->
- **Endereços MAC**: `00:1A:2B:3C:4D:5E` <!-- .element: class="fragment" -->
- **IPv6**: `2001:0db8:85a3...` <!-- .element: class="fragment" -->

---

## ✍️ Exercício Rápido 1

Converta `10101111` para Hexadecimal.

- `1010` | `1111` <!-- .element: class="fragment" -->
- Resposta: **AF₁₆** <!-- .element: class="fragment" -->

---

## ✍️ Exercício Rápido 2

Qual o binário de $C₁₆$?

- $C$ é 12 em decimal.
- $12$ em binário é $1100$.
- Resposta: **1100** <!-- .element: class="fragment" -->

---

## 📝 Resumo da Aula

1. Base Hexadecimal usa dígitos **0-9 e A-F**. <!-- .element: class="fragment" -->
2. 1 dígito Hex = 4 bits (Nibble). <!-- .element: class="fragment" -->
3. A conversão de Binário é feita por agrupamento. <!-- .element: class="fragment" -->
4. É a base padrão para cores e endereços de hardware. <!-- .element: class="fragment" -->

---

## 🚀 Próxima Aula...

**Conversão Binário para Hexadecimal Direto!**

Vamos aprofundar a prática de converter strings binárias longas em hex sem passar pelo decimal. <!-- .element: class="fragment" -->

---

## ❓ Dúvidas?

"Linguagens de programação são como as religiões: algumas são baseadas na Bíblia, outras no Hexadecimal."
— *Humor Nerd* <!-- .element: class="fragment" -->