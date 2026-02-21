# 🔢 Aula 06: Conversão Binário-Hexadecimal Direta
## Fundamentos da Computação

---

## 🎯 Objetivos de Hoje

- Masterizar a conversão direta entre Binário e Hexadecimal <!-- .element: class="fragment" -->
- Aprender a trabalhar com binários longos e zeros à esquerda <!-- .element: class="fragment" -->
- Entender como 2 dígitos Hex representam 1 Byte <!-- .element: class="fragment" -->
- Praticar a leitura de endereços de memória e cores <!-- .element: class="fragment" -->

---

## 🔄 Revisão: O Nibble (4 Bits)

Um **Nibble** é a metade de um Byte.

- 1 dígito Hexadecimal = 1 Nibble <!-- .element: class="fragment" -->
- 0000 até 1111 (Binário) <!-- .element: class="fragment" -->
- 0 até F (Hexadecimal) <!-- .element: class="fragment" -->

Dominar essa relação é o segredo da velocidade! <!-- .element: class="fragment" -->

---

## 🚀 Por que Conversão Direta?

Passar pelo decimal é um desperdício de tempo.

- **Método Lento**: Binário -> Decimal -> Hex <!-- .element: class="fragment" -->
- **Método Profissional**: Agrupar de 4 em 4 e traduzir. <!-- .element: class="fragment" -->

---

## 📏 Passo 1: Agrupamento em Quartetos

Sempre agrupe da **direita para a esquerda**.

Exemplo: `10010110` <!-- .element: class="fragment" -->
- `1001` | `0110` <!-- .element: class="fragment" -->
- $9$ | $6$ <!-- .element: class="fragment" -->
- Resultado: **96₁₆** <!-- .element: class="fragment" -->

---

## 📝 Exemplo 2: Usando Letras

Binário: `11110011` <!-- .element: class="fragment" -->
- `1111` | `0011` <!-- .element: class="fragment" -->
- $F$ | $3$ <!-- .element: class="fragment" -->
- Resultado: **F3₁₆** <!-- .element: class="fragment" -->

---

## ⚠️ O Perigo dos Zeros Ocultos

O que fazer com `10101`?
- Grupos: `1` | `0101` <!-- .element: class="fragment" -->
- Devemos preencher o grupo incompleto com zeros à esquerda: <!-- .element: class="fragment" -->
- `0001` | `0101` <!-- .element: class="fragment" -->
- $1$ | $5$ <!-- .element: class="fragment" -->
- Resultado: **15₁₆** <!-- .element: class="fragment" -->

---

## 🏗️ Desafio: Binário Longo

Converta: `101011011110` <!-- .element: class="fragment" -->
- `1010` | `1101` | `1110` <!-- .element: class="fragment" -->
- $A$ | $D$ | $E$ <!-- .element: class="fragment" -->
- Resultado: **ADE₁₆** <!-- .element: class="fragment" -->

---

## 🔄 O Caminho de Volta: Hex para Binário

Basta expandir cada dígito Hex em exatamente **4 bits**.

Exemplo: `A7₁₆` <!-- .element: class="fragment" -->
- $A \rightarrow 1010$ <!-- .element: class="fragment" -->
- $7 \rightarrow 0111$ <!-- .element: class="fragment" -->
- Resultado: **10100111** <!-- .element: class="fragment" -->

---

## 🚨 Atenção: Não esqueça os zeros!

Ao converter `308₁₆`:
- $3 \rightarrow 0011$
- $0 \rightarrow 0000$ (Obrigatório!) <!-- .element: class="fragment" -->
- $8 \rightarrow 1000$
- Resultado: `001100001000` <!-- .element: class="fragment" -->

Se você ignorar o zero do meio, o número vira `38`! <!-- .element: class="fragment" -->

---

## 📊 Tabela "Decoreba" Útil

As "âncoras" que todo programador sabe:
- `1010` = **A** (Dez) <!-- .element: class="fragment" -->
- `1100` = **C** (Doze) <!-- .element: class="fragment" -->
- `1110` = **E** (Catorze) <!-- .element: class="fragment" -->
- `1111` = **F** (Quinze) <!-- .element: class="fragment" -->

---

## 🌐 Aplicação: Endereços IPv6

O IPv6 usa 128 bits, lidos em blocos de 4 hexadecimais.
`2001:0db8:85a3:0000:0000:8a2e:0370:7334`

A conversão direta é essencial para entender sub-redes. <!-- .element: class="fragment" -->

---

## 🖥️ Aplicação: Dump de Memória

`0x00FF2A4B`

Cada dupla de dígitos (Ex: `FF`) é exatamente UM BYTE na memória do PC. <!-- .element: class="fragment" -->

---

## ✍️ Exercício Rápido 1

Qual o Hex de `11001100`?

- `1100` | `1100`
- Resposta: **CC₁₆** <!-- .element: class="fragment" -->

---

## ✍️ Exercício Rápido 2

Converta `D5₁₆` para Binário.

- $D \rightarrow 1101$
- $5 \rightarrow 0101$
- Resposta: **11010101** <!-- .element: class="fragment" -->

---

## 🏗️ Desafio de Velocidade

Binário: `11110`

- Adicione zeros: `0001` | `1110` <!-- .element: class="fragment" -->
- Resposta: **1E₁₆** <!-- .element: class="fragment" -->

---

## 🏁 Dicas de Performance

1. Memorize o trio: 8, 4, 2, 1 (pesos de um nibble). <!-- .element: class="fragment" -->
2. Para cada quarteto, some os pesos onde há '1'. <!-- .element: class="fragment" -->
3. Se a soma > 9, use as letras (A, B, C...). <!-- .element: class="fragment" -->

---

## 📝 Resumo da Aula

1. Conversão direta = Agrupar em 4 bits. <!-- .element: class="fragment" -->
2. HEX é a "abreviação" profissional do Binário. <!-- .element: class="fragment" -->
3. 2 dígitos HEX = 1 Byte. <!-- .element: class="fragment" -->
4. Cuidado com zeros à esquerda e no meio do número. <!-- .element: class="fragment" -->

---

## 🚀 Próxima Aula...

**Aritmética Binária!**

Vamos aprender como o processador faz somas e subtrações usando apenas 0 e 1. <!-- .element: class="fragment" -->

---

## ❓ Dúvidas?

"Muitas pessoas falam Binário, mas poucas compreendem Hexadecimal fluentemente."
— *Dito Nerd* <!-- .element: class="fragment" -->