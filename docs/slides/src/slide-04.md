# 🔢 Aula 04: Sistema Octal (Base 8)
## Fundamentos da Computação

---

## 🎯 Objetivos de Hoje

- Compreender a base 8 e seus dígitos { .fragment }
- Aprender o agrupamento de bits em trios { .fragment }
- Converter entre Binário, Octal e Decimal { .fragment }
- Ver aplicações reais do Octal (Permissões de arquivos) { .fragment }

---

## 🔄 Revisão: O que é a Base?

- Decimal: Base 10 (dedos)
- Binário: Base 2 (eletricidade)
- **Octal**: Base 8 { .fragment }

Por que 8? Porque é $2^3$. { .fragment }
Isso cria uma ponte perfeita com o binário! { .fragment }

---

## 🧩 Dígitos da Base 8

Usamos apenas 8 símbolos:

**0, 1, 2, 3, 4, 5, 6, 7** { .fragment }

⚠️ O número **8** não existe no sistema octal! { .fragment }
Após o 7, vem o **10** (que vale oito em decimal). { .fragment }

---

## 🤝 A Relação Mágica: 2 e 8

Cada um dígito Octal representa exatamente **3 bits** (dígitos binários).

- Isso facilita MUITO a leitura de binários longos. { .fragment }
- Ex: `111` em binário é `7` em octal. { .fragment }

---

## 📊 Tabela de Equivalência

| Octal | Binário |
| :--- | :--- |
| 0 | 000 |
| 1 | 001 |
| 2 | 010 |
| 3 | 011 |
| 4 | 100 |
| 5 | 101 |
| 6 | 110 |
| 7 | 111 |

---

## 🛠️ Método: Binário para Octal

1. Separe o binário em grupos de **3 bits** (da direita para a esquerda). { .fragment }
2. Converta cada trio usando a tabela. { .fragment }

Exemplo: `101011` { .fragment }
- `101` | `011` { .fragment }
- $5$ | $3$ { .fragment }
- Resultado: **53₈** { .fragment }

---

## ⚠️ Preenchimento com Zeros

E se o número de bits não for múltiplo de 3?
Ex: `1101`

- Adicione zeros à **esquerda** até completar 3: { .fragment }
- `001` | `101` { .fragment }
- $1$ | $5$ { .fragment }
- Resultado: **15₈** { .fragment }

---

## 🔄 Método: Octal para Binário

Basta fazer o caminho inverso: cada dígito vira um trio de bits.

Exemplo: $27₈$ { .fragment }
- $2 \rightarrow 010$ { .fragment }
- $7 \rightarrow 111$ { .fragment }
- Resultado: **010111** (ou `10111`) { .fragment }

---

## 🔢 Octal para Decimal

Usamos a soma de potências, mas agora a base é **8**.

Exemplo: $12₈$ { .fragment }
- $1 \times 8^1 + 2 \times 8^0$ { .fragment }
- $8 + 2 = 10_{10}$ { .fragment }

---

## 📏 Pesos da Base 8

| Posição | $8^2$ | $8^1$ | $8^0$ |
| :--- | :--- | :--- | :--- |
| Valor | 64 | 8 | 1 |

$111₈ = 64 + 8 + 1 = 73_{10}$ { .fragment }

---

## ➗ Decimal para Octal

Mesma lógica das divisões sucessivas, agora dividindo por **8**.

Exemplo: $100_{10}$ { .fragment }
- $100 \div 8 = 12$ (Resto **4**) { .fragment }
- $12 \div 8 = 1$ (Resto **4**) { .fragment }
- $1 \div 8 = 0$ (Resto **1**) { .fragment }

Resultado: **144₈** { .fragment }

---

## 🐧 Aplicação Real: Linux CHMOD

No Linux, as permissões de arquivos usam Octal:
`chmod 755 arquivo`

- **7**: `rwx` (111) -> Tudo { .fragment }
- **5**: `r-x` (101) -> Ler/Executar { .fragment }
- **5**: `r-x` (101) -> Ler/Executar { .fragment }

Super prático! { .fragment }

---

## ✍️ Exercício Rápido 1

Converta `110111` para Octal.

- `110` | `111` { .fragment }
- Resposta: **67₈** { .fragment }

---

## ✍️ Exercício Rápido 2

Converta $34₈$ para Binário.

- $3 \rightarrow 011$
- $4 \rightarrow 100$
- Resposta: **011100** { .fragment }

---

## 🏗️ Desafio

Qual o valor decimal de $100₈$?

- $1 \times 8^2 + 0 \times 8^1 + 0 \times 8^0$ { .fragment }
- $1 \times 64$ { .fragment }
- Resposta: **64** { .fragment }

---

## 📝 Resumo da Aula

1. Base Octal usa dígitos **0-7**. { .fragment }
2. Facilita visualização de binários (1 dígito = 3 bits). { .fragment }
3. Conversão rápida por agrupamento. { .fragment }
4. Muito usado em sistemas de arquivos Unix/Linux. { .fragment }

---

## 🚀 Próxima Aula...

**Sistema Hexadecimal!**

O "irmão" mais velho do Octal, que agrupa de 4 em 4 bits e é o padrão da indústria hoje. { .fragment }

---

## ❓ Dúvidas?

"A tecnologia deve ser uma ponte, e não uma barreira."
— *Autor Desconhecido* { .fragment }
