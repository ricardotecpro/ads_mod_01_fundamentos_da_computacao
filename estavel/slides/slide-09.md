# 🧠 Aula 09: Lógica Booleana
## Fundamentos da Computação

---

## 🎯 Objetivos de Hoje

- Compreender o conceito de valores binários como Verdade ou Falso <!-- .element: class="fragment" -->
- Aprender os operadores lógicos fundamentais: **NOT**, **AND** e **OR** <!-- .element: class="fragment" -->
- Aprender a ler e construir Tabelas Verdade básicas <!-- .element: class="fragment" -->
- Entender como a lógica toma decisões no computador <!-- .element: class="fragment" -->

---

## 🧩 O que é Lógica Booleana?

Criada por **George Boole** no século XIX.

É um sistema matemático onde os valores não são "1, 2, 3...", mas sim apenas **dois estados**:
- **1** = Verdadeiro (True / ON) <!-- .element: class="fragment" -->
- **0** = Falso (False / OFF) <!-- .element: class="fragment" -->

---

## ⚙️ A Álgebra da Decisão

Diferente da aritmética (onde $1+1=2$), na lógica booleana as operações combinam estados para criar novos estados.

- Se "está chovendo" E "eu tenho guarda-chuva"... <!-- .element: class="fragment" -->
- Posso sair sem me molhar? <!-- .element: class="fragment" -->

---

## 🚫 Operador 1: NOT (NÃO)

Também conhecido como **Inversor**.

- Ele inverte o estado da entrada. <!-- .element: class="fragment" -->
- **Regra**: Se entra 1, sai 0. Se entra 0, sai 1. <!-- .element: class="fragment" -->

--

### Tabela Verdade: NOT

| Entrada (A) | Saída (¬A) |
| :---: | :---: |
| 0 | 1 |
| 1 | 0 |

---

## 🤝 Operador 2: AND (E)

Também conhecido como **Conjunção**.

- Representa a multiplicação lógica. <!-- .element: class="fragment" -->
- **Regra**: A saída só é **1** se **TODAS** as entradas forem **1**. <!-- .element: class="fragment" -->

--

### Tabela Verdade: AND

| A | B | Saída (A ∧ B) |
| :---: | :---: | :---: |
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

---

## ➕ Operador 3: OR (OU)

Também conhecido como **Disjunção**.

- Representa a soma lógica. <!-- .element: class="fragment" -->
- **Regra**: A saída é **1** se **AO MENOS UMA** das entradas for **1**. <!-- .element: class="fragment" -->

--

### Tabela Verdade: OR

| A | B | Saída (A ∨ B) |
| :---: | :---: | :---: |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

---

## 💡 Lógica na Prática: Alarme

Imagine um sensor de porta (A) e um botão de pânico (B).
O alarme toca se (A **OU** B) forem ativados.

- Porta fechada (0), botão não apertado (0) -> Alarme Desligado (0) <!-- .element: class="fragment" -->
- Porta aberta (1), botão não apertado (0) -> Alarme Ligado (1) <!-- .element: class="fragment" -->

---

## 💡 Lógica na Prática: Login

Você só entra se o usuário (A) **E** a senha (B) forem corretos.

- Usuário OK (1), Senha Errada (0) -> Acesso Negado (0) <!-- .element: class="fragment" -->
- Usuário OK (1), Senha OK (1) -> Acesso Permitido (1) <!-- .element: class="fragment" -->

---

## ✍️ Exercício Rápido 1

Qual o resultado de: `NOT (1 AND 0)`?

- 1 AND 0 = 0 <!-- .element: class="fragment" -->
- NOT (0) = **1** <!-- .element: class="fragment" -->

---

## ✍️ Exercício Rápido 2

Qual o resultado de: `(1 OR 0) AND (0 OR 0)`?

- (1 OR 0) = 1 <!-- .element: class="fragment" -->
- (0 OR 0) = 0 <!-- .element: class="fragment" -->
- 1 AND 0 = **0** <!-- .element: class="fragment" -->

---

## 🛠️ Simbologia Comum

Dependendo da área, os símbolos mudam:

- **E**: `AND`, `&`, `∧`, `.`
- **OU**: `OR`, `|`, `∨`, `+`
- **NÃO**: `NOT`, `!`, `¬`, `~`

---

## 🧐 Prioridade de Operação

Assim como na matemática, existe uma ordem:

1. Parênteses `( )` <!-- .element: class="fragment" -->
2. **NOT** <!-- .element: class="fragment" -->
3. **AND** <!-- .element: class="fragment" -->
4. **OR** <!-- .element: class="fragment" -->

---

## 📊 Tabela de Verificação: AND vs OR

- No **AND**, o zero é "veneno" (basta um para tudo ser zero). <!-- .element: class="fragment" -->
- No **OR**, o um é "salvador" (basta um para tudo ser um). <!-- .element: class="fragment" -->

---

## 🏗️ Desafio Hard

Qual a saída de `NOT (A AND B)` quando A=1 e B=1?

- A AND B = 1
- NOT (1) = 0
- Resposta: **0** <!-- .element: class="fragment" -->

*(Este é o operador NAND, que veremos adiante!)* <!-- .element: class="fragment" -->

---

## 📝 Resumo da Aula

1. Lógica Booleana = 0 ou 1 (V ou F). <!-- .element: class="fragment" -->
2. **NOT** inverte. <!-- .element: class="fragment" -->
3. **AND** exige tudo verdadeiro. <!-- .element: class="fragment" -->
4. **OR** exige pelo menos um verdadeiro. <!-- .element: class="fragment" -->

---

## 🚀 Próxima Aula...

**Tabelas Verdade Complexas!**

Vamos aprender a combinar vários operadores e construir tabelas para expressões maiores. <!-- .element: class="fragment" -->

---

## ❓ Dúvidas?

"O pensamento humano é complexo, mas a base de toda decisão computacional é uma simples porta lógica." <!-- .element: class="fragment" -->