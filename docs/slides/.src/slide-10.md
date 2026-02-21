# 📊 Aula 10: Tabelas Verdade Complexas
## Fundamentos da Computação

---

## 🎯 Objetivos de Hoje

- Aprender a calcular o número de linhas de uma tabela verdade { .fragment }
- Construir tabelas para expressões lógicas compostas { .fragment }
- Conhecer os operadores universais: **NAND** e **NOR** { .fragment }
- Aprender o operador **XOR** (OU Exclusivo) { .fragment }

---

## 🏗️ O que é uma Tabela Verdade?

É um mapa que mostra o resultado de uma lógica para **todas** as combinações de entrada possíveis.

Se uma decisão depende de 3 sensores, a tabela mostra o que acontece em cada um dos 8 cenários possíveis. { .fragment }

---

## 🔢 Regra das Linhas: $2^n$

O número de linhas de uma tabela é $2$ elevado ao número de variáveis de entrada ($n$).

- 2 variáveis ($A, B$) $\rightarrow 2^2 = \mathbf{4}$ linhas { .fragment }
- 3 variáveis ($A, B, C$) $\rightarrow 2^3 = \mathbf{8}$ linhas { .fragment }
- 4 variáveis ($A, B, C, D$) $\rightarrow 2^4 = \mathbf{16}$ linhas { .fragment }

---

## 📝 Passo a Passo da Construção

Para a expressão: `(A AND B) OR (NOT A)`

1. Liste as variáveis ($A, B$) { .fragment }
2. Crie colunas intermediárias para os parênteses { .fragment }
3. Resolva cada coluna passo a passo { .fragment }
4. O resultado final é a última coluna { .fragment }

---

## 🧪 Exemplo: (A ∧ B) ∨ (¬A)

| A | B | A ∧ B | ¬A | **Resultado** |
| :---: | :---: | :---: | :---: | :---: |
| 0 | 0 | 0 | 1 | **1** |
| 0 | 1 | 0 | 1 | **1** |
| 1 | 0 | 0 | 0 | **0** |
| 1 | 1 | 1 | 0 | **1** |

---

## ✨ Operador 4: XOR (OU Exclusivo)

Representado por $\oplus$.
"Ou um, ou outro, mas não ambos."

**Regra**: A saída é **1** se as entradas forem **DIFERENTES**. { .fragment }

--

### Tabela Verdade: XOR

| A | B | A ⊕ B |
| :---: | :---: | :---: |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

---

## 🛠️ Operadores Universais

São a base de todos os chips. Com eles, você constrói qualquer outro operador.

1. **NAND** (NOT AND): O oposto do AND. { .fragment }
2. **NOR** (NOT OR): O oposto do OR. { .fragment }

--

### Tabela: NAND e NOR

| A | B | NAND | NOR |
| :---: | :---: | :---: | :---: |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 |

---

## 💡 Dica de Pro: Preenchimento Rápido

Para não esquecer nenhuma combinação:

- **Última coluna**: Alterne 0, 1, 0, 1... { .fragment }
- **Penúltima**: Alterne 00, 11, 00, 11... { .fragment }
- **Anterior**: Alterne 0000, 1111, 0000... { .fragment }

---

## ✍️ Exercício Rápido 1

Quantas linhas tem uma tabela verdade com as variáveis A, B, C e D?

- Resposta: **16 linhas** ($2^4$) { .fragment }

---

## ✍️ Exercício Rápido 2

Qual a saída do XOR $(\oplus)$ para as entradas $1$ e $1$?

- Resposta: **0** (Iguais resultam em zero no XOR) { .fragment }

---

## 🏗️ Desafio: O Somador

A lógica de uma soma binária de 1 bit ($1+1=10$) usa:

- **XOR** para o resultado (casa atual) { .fragment }
- **AND** para o carry (vai-um) { .fragment }

Viremos isso na próxima aula! { .fragment }

---

## 📊 Propriedades Importantes

- **Identidade**: $A \text{ AND } 1 = A$ { .fragment }
- **Nulo**: $A \text{ AND } 0 = 0$ { .fragment }
- **Inverso**: $A \text{ AND NOT } A = 0$ { .fragment }

Lógica é previsível e elegante. { .fragment }

---

## 📝 Resumo da Aula

1. O número de linhas dobra a cada nova variável. { .fragment }
2. Colunas intermediárias evitam erros em expressões longas. { .fragment }
3. **XOR** detecta diferenças. { .fragment }
4. **NAND** e **NOR** são os blocos de construção dos chips. { .fragment }

---

## 🚀 Próxima Aula...

**Circuitos Lógicos!**

Vamos desenhar os portões lógicos e ver como a eletricidade flui através deles para processar informação. { .fragment }

---

## ❓ Dúvidas?

"Não importa quão complexo seja o software, no fim das contas, tudo se resume a uma tabela verdade gigantesca sendo resolvida a bilhões de vezes por segundo." { .fragment }
