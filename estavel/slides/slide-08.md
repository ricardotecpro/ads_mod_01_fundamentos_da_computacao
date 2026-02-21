# 📦 Aula 08: Representação de Dados e Sinais
## Fundamentos da Computação

---

## 🎯 Objetivos de Hoje

- Entender como o computador lida com números negativos <!-- .element: class="fragment" -->
- Aprender o método do Complemento de 2 <!-- .element: class="fragment" -->
- Conhecer as codificações de texto (ASCII e UTF-8) <!-- .element: class="fragment" -->
- Compreender a diferença entre dados e tipos de dados <!-- .element: class="fragment" -->

---

## ❓ O Problema do Sinal

Até agora, vimos apenas números positivos ($0, 1, 2...$).
Mas como representar **-5**?

O computador não tem um símbolo "-" físico. <!-- .element: class="fragment" -->
Ele só tem **bits** (0 e 1). <!-- .element: class="fragment" -->

---

## 🛠️ Método 1: Sinal e Magnitude

A ideia mais simples (e ineficiente):
Reservar o bit mais à esquerda (**MSB**) apenas para o sinal.

- **0** = Positivo <!-- .element: class="fragment" -->
- **1** = Negativo <!-- .element: class="fragment" -->

Ex: `0 0000101` (+5) e `1 0000101` (-5). <!-- .element: class="fragment" -->

--

### O Problema: Dois Zeros!

- `00000000` (+0) <!-- .element: class="fragment" -->
- `10000000` (-0) <!-- .element: class="fragment" -->

Isso causa um desperdício de espaço e complica os cálculos matemáticos. <!-- .element: class="fragment" -->

---

## 🚀 O Padrão: Complemento de 2

É a forma como praticamente todos os processadores modernos trabalham.

**Vantagem**: A soma de um número positivo com um negativo funciona automaticamente usando o mesmo circuito de soma! <!-- .element: class="fragment" -->

---

## ⚙️ Passo a Passo: -5 em 8 Bits

1. Escreva o número positivo em binário:
   `0000 0101` (+5) <!-- .element: class="fragment" -->
2. **Inverta** todos os bits (0 vira 1, 1 vira 0):
   `1111 1010` (Chamado de Complemento de 1) <!-- .element: class="fragment" -->
3. **Some 1** ao resultado:
   `1111 1011` (-5) <!-- .element: class="fragment" -->

---

## 🏗️ Por que isso funciona?

Tente somar $5 + (-5)$ em binário de 8 bits:
`00000101` (+5)
`11111011` (-5)
----------------
`100000000` (9 bits) <!-- .element: class="fragment" -->

Como só temos 8 bits, o "1" da esquerda é ignorado. O resultado é **00000000**. MÁGICA! <!-- .element: class="fragment" -->

---

## 🔤 Representando Texto

Além de números, computadores guardam letras, emojis e símbolos.
Mas no fundo, são todos **números**.

Cada letra recebe um "código" numérico. <!-- .element: class="fragment" -->

---

## 🎞️ Tabela ASCII

A primeira codificação padrão (anos 60).
Usa 7 ou 8 bits.

- 'A' = 65 <!-- .element: class="fragment" -->
- 'a' = 97 <!-- .element: class="fragment" -->
- 'space' = 32 <!-- .element: class="fragment" -->

**Limitação**: Apenas 128 (ou 256) caracteres. Sem acentos brasileiros, gregos ou chinês. <!-- .element: class="fragment" -->

---

## 🌎 O Salvador: UTF-8 (Unicode)

O padrão hoje da Internet e de quase todos os sistemas.

- Suporta **MILHÕES** de caracteres. <!-- .element: class="fragment" -->
- É multibyte: caracteres comuns (A, B, C) usam 1 byte, mas emojis podem usar 4 bytes. <!-- .element: class="fragment" -->
- É compatível com o ASCII antigo. <!-- .element: class="fragment" -->

---

## 🧪 Exemplo UTF-8

- 'A' $\rightarrow$ `41` (Hex) <!-- .element: class="fragment" -->
- 'ç' $\rightarrow$ `C3 A7` (Hex) <!-- .element: class="fragment" -->
- '🚀' $\rightarrow$ `F0 9F 9A 80` (Hex) <!-- .element: class="fragment" -->

Um único símbolo pode esconder uma sequência longa de bits! <!-- .element: class="fragment" -->

---

## 📊 Resumo das Bases de Dados

| Tipo | Método |
| :--- | :--- |
| Inteiros Positivos | Binário Puro |
| Inteiros Negativos | Complemento de 2 |
| Texto Básico | ASCII |
| Texto Global/Emoji | UTF-8 / Unicode |

---

## ✍️ Exercício Rápido 1

Qual o complemento de 2 de `1111 0000`?
*(Dica: Inverta e some 1)*

- Inverta: `0000 1111`
- Some 1: `0001 0000`
- Resposta: **16** em binário. <!-- .element: class="fragment" -->

---

## ✍️ Exercício Rápido 2

Se 'A' é 65, qual o valor decimal de 'B' na tabela ASCII?

- Resposta: **66** <!-- .element: class="fragment" -->

---

## 🏗️ Desafio

Por que o arquivo `.txt` ocupa menos espaço que um arquivo `.doc`?

- O `.txt` só guarda os bits dos caracteres (ASCII/UTF-8). <!-- .element: class="fragment" -->
- O `.doc` guarda informações de cor, fonte, tamanho e estrutura (Metadados). <!-- .element: class="fragment" -->

---

## 📝 Resumo da Aula

1. Negativos usam Complemento de 2. <!-- .element: class="fragment" -->
2. Complemento de 2 facilitam a vida da CPU (soma e subtração são iguais). <!-- .element: class="fragment" -->
3. ASCII é para texto simples em inglês. <!-- .element: class="fragment" -->
4. UTF-8 é o rei do conteúdo global (inclusive acentos e emojis). <!-- .element: class="fragment" -->

---

## 🚀 Próxima Aula...

**Lógica Booleana!**

Vamos sair da aritmética e entrar no mundo dos valores VERDADEIRO e FALSO. <!-- .element: class="fragment" -->

---

## ❓ Dúvidas?

"No computador, tudo é bit. De uma foto 4K até este ponto final, tudo se resume a 0 e 1." <!-- .element: class="fragment" -->