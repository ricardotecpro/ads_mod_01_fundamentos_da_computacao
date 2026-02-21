# 📦 Aula 08: Representação de Dados e Sinais
## Fundamentos da Computação

---

## 🎯 Objetivos de Hoje

- Entender como o computador lida com números negativos { .fragment }
- Aprender o método do Complemento de 2 { .fragment }
- Conhecer as codificações de texto (ASCII e UTF-8) { .fragment }
- Compreender a diferença entre dados e tipos de dados { .fragment }

---

## ❓ O Problema do Sinal

Até agora, vimos apenas números positivos ($0, 1, 2...$).
Mas como representar **-5**?

O computador não tem um símbolo "-" físico. { .fragment }
Ele só tem **bits** (0 e 1). { .fragment }

---

## 🛠️ Método 1: Sinal e Magnitude

A ideia mais simples (e ineficiente):
Reservar o bit mais à esquerda (**MSB**) apenas para o sinal.

- **0** = Positivo { .fragment }
- **1** = Negativo { .fragment }

Ex: `0 0000101` (+5) e `1 0000101` (-5). { .fragment }

--

### O Problema: Dois Zeros!

- `00000000` (+0) { .fragment }
- `10000000` (-0) { .fragment }

Isso causa um desperdício de espaço e complica os cálculos matemáticos. { .fragment }

---

## 🚀 O Padrão: Complemento de 2

É a forma como praticamente todos os processadores modernos trabalham.

**Vantagem**: A soma de um número positivo com um negativo funciona automaticamente usando o mesmo circuito de soma! { .fragment }

---

## ⚙️ Passo a Passo: -5 em 8 Bits

1. Escreva o número positivo em binário:
   `0000 0101` (+5) { .fragment }
2. **Inverta** todos os bits (0 vira 1, 1 vira 0):
   `1111 1010` (Chamado de Complemento de 1) { .fragment }
3. **Some 1** ao resultado:
   `1111 1011` (-5) { .fragment }

---

## 🏗️ Por que isso funciona?

Tente somar $5 + (-5)$ em binário de 8 bits:
`00000101` (+5)
`11111011` (-5)
----------------
`100000000` (9 bits) { .fragment }

Como só temos 8 bits, o "1" da esquerda é ignorado. O resultado é **00000000**. MÁGICA! { .fragment }

---

## 🔤 Representando Texto

Além de números, computadores guardam letras, emojis e símbolos.
Mas no fundo, são todos **números**.

Cada letra recebe um "código" numérico. { .fragment }

---

## 🎞️ Tabela ASCII

A primeira codificação padrão (anos 60).
Usa 7 ou 8 bits.

- 'A' = 65 { .fragment }
- 'a' = 97 { .fragment }
- 'space' = 32 { .fragment }

**Limitação**: Apenas 128 (ou 256) caracteres. Sem acentos brasileiros, gregos ou chinês. { .fragment }

---

## 🌎 O Salvador: UTF-8 (Unicode)

O padrão hoje da Internet e de quase todos os sistemas.

- Suporta **MILHÕES** de caracteres. { .fragment }
- É multibyte: caracteres comuns (A, B, C) usam 1 byte, mas emojis podem usar 4 bytes. { .fragment }
- É compatível com o ASCII antigo. { .fragment }

---

## 🧪 Exemplo UTF-8

- 'A' $\rightarrow$ `41` (Hex) { .fragment }
- 'ç' $\rightarrow$ `C3 A7` (Hex) { .fragment }
- '🚀' $\rightarrow$ `F0 9F 9A 80` (Hex) { .fragment }

Um único símbolo pode esconder uma sequência longa de bits! { .fragment }

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
- Resposta: **16** em binário. { .fragment }

---

## ✍️ Exercício Rápido 2

Se 'A' é 65, qual o valor decimal de 'B' na tabela ASCII?

- Resposta: **66** { .fragment }

---

## 🏗️ Desafio

Por que o arquivo `.txt` ocupa menos espaço que um arquivo `.doc`?

- O `.txt` só guarda os bits dos caracteres (ASCII/UTF-8). { .fragment }
- O `.doc` guarda informações de cor, fonte, tamanho e estrutura (Metadados). { .fragment }

---

## 📝 Resumo da Aula

1. Negativos usam Complemento de 2. { .fragment }
2. Complemento de 2 facilitam a vida da CPU (soma e subtração são iguais). { .fragment }
3. ASCII é para texto simples em inglês. { .fragment }
4. UTF-8 é o rei do conteúdo global (inclusive acentos e emojis). { .fragment }

---

## 🚀 Próxima Aula...

**Lógica Booleana!**

Vamos sair da aritmética e entrar no mundo dos valores VERDADEIRO e FALSO. { .fragment }

---

## ❓ Dúvidas?

"No computador, tudo é bit. De uma foto 4K até este ponto final, tudo se resume a 0 e 1." { .fragment }
