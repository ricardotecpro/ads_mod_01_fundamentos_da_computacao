# 🔌 Aula 11: Circuitos Lógicos
## Fundamentos da Computação

---

## 🎯 Objetivos de Hoje

- Conhecer os símbolos das portas lógicas universais <!-- .element: class="fragment" -->
- Aprender a desenhar diagramas de circuitos a partir de expressões <!-- .element: class="fragment" -->
- Compreender o funcionamento físico de um Somador <!-- .element: class="fragment" -->
- Entender a relação entre transistores e portas lógicas <!-- .element: class="fragment" -->

---

## 🏗️ O que é uma Porta Lógica?

É um dispositivo físico que implementa uma função booleana.

- Recebe sinais elétricos (bits) como entrada. <!-- .element: class="fragment" -->
- Processa e gera um sinal de saída. <!-- .element: class="fragment" -->
- É o "átomo" de qualquer chip de computador. <!-- .element: class="fragment" -->

---

## 🚫 Porta NOT (Inversora)

Inverte o sinal.

- **Símbolo**: Um triângulo com um pequeno círculo (bolinha) na ponta. <!-- .element: class="fragment" -->
- A bolinha é o símbolo universal para **inversão** em eletrônica. <!-- .element: class="fragment" -->

---

## 🤝 Porta AND (E)

Multiplicação lógica.

- **Símbolo**: Tem o formato da letra **D**. <!-- .element: class="fragment" -->
- Saída 1 apenas se as duas perninhas de entrada forem 1. <!-- .element: class="fragment" -->

---

## ➕ Porta OR (OU)

Soma lógica.

- **Símbolo**: Tem o formato de uma **ponta de flecha** ou foguete. <!-- .element: class="fragment" -->
- Saída 1 se qualquer uma das entradas for 1. <!-- .element: class="fragment" -->

---

## ✨ Portas Universais: NAND e NOR

São as portas mais comuns na indústria.

- **NAND**: Um AND com uma bolinha na ponta. <!-- .element: class="fragment" -->
- **NOR**: Um OR com uma bolinha na ponta. <!-- .element: class="fragment" -->

Curiosidade: O console da Apollo 11 foi construído quase inteiramente usando apenas portas **NOR**! <!-- .element: class="fragment" -->

---

## 🏗️ Combinando Portas

Podemos ligar a saída de uma porta na entrada de outra.

Exemplo: `(A AND B) OR C` <!-- .element: class="fragment" -->
1. Desenhe um gate AND para A e B. <!-- .element: class="fragment" -->
2. Pegue o resultado e ligue em uma das entradas de um gate OR. <!-- .element: class="fragment" -->
3. A outra entrada do OR recebe C. <!-- .element: class="fragment" -->

---

## ⚡ O Meio Somador (Half Adder)

Como o computador soma $1 + 1 = 10$?

- Usa uma porta **XOR** para o resultado da casa (Soma). <!-- .element: class="fragment" -->
- Usa uma porta **AND** para o "Vai-Um" (Carry). <!-- .element: class="fragment" -->

Isso resolve a soma binária básica! <!-- .element: class="fragment" -->

---

## 🏛️ O Somador Completo

Para somar números grandes, precisamos levar em conta o "Vai-Um" da coluna anterior.

O **Full Adder** combina dois Meio Somadores e uma porta OR extra. <!-- .element: class="fragment" -->
Com 8 desses em série, temos um somador de 8 bits! <!-- .element: class="fragment" -->

---

## 🌡️ Níveis Lógicos

Na prática, não há "1" e "0" voando nos fios.

- **1 (HIGH)**: Geralmente +5V ou +3.3V. <!-- .element: class="fragment" -->
- **0 (LOW)**: Geralmente 0V (GND). <!-- .element: class="fragment" -->

Circuitos integrados (chips) garantem que esses níveis sejam estáveis. <!-- .element: class="fragment" -->

---

## 🧪 Circuitos Integrados (ICs)

Antigamente, você comprava chips com poucas portas.
Ex: **74LS08** (Contém 4 portas AND dentro).

Hoje, um processador moderno tem **bilhões** de portas em um único pedaço de silício. <!-- .element: class="fragment" -->

---

## ✍️ Exercício Rápido 1

Qual o formato do símbolo da porta **AND**?

- Resposta: Letra **D**. <!-- .element: class="fragment" -->

---

## ✍️ Exercício Rápido 2

Se ligarmos um sinal `1` em uma porta **NOT** e o resultado em outra **NOT**, qual a saída final?

- 1 -> NOT -> 0
- 0 -> NOT -> 1
- Resposta: **1**. (Duas inversões se anulam!) <!-- .element: class="fragment" -->

---

## 🏗️ Desafio: O Circuito do Alarme

O alarme toca se (Sensor de Janela **AND** Alarme Ativado).

| Sensor | Ativado | Alerta |
| :---: | :---: | :---: |
| 1 | 1 | 1 |
| 1 | 0 | 0 |

Qual porta lógica representa isso? **Porta AND**. <!-- .element: class="fragment" -->

---

## 🔬 Do Transistor à Porta

Cada porta lógica é feita de **transistores** funcionando como interruptores ultrarrápidos.

- Uma porta NAND pode ser feita com apenas 2 transistores. <!-- .element: class="fragment" -->
- Menos transistores = menos calor e mais velocidade. <!-- .element: class="fragment" -->

---

## 📊 Vantagens da Lógica Digital

- **Imunidade a Ruído**: Pequenas variações de voltagem não mudam o bit. <!-- .element: class="fragment" -->
- **Reprodutibilidade**: 1+1 sempre será 2 (ou 10 binário). <!-- .element: class="fragment" -->
- **Escalabilidade**: Podemos empilhar trilhões de portas. <!-- .element: class="fragment" -->

---

## 📝 Resumo da Aula

1. Portas lógicas são a implementação física da álgebra booleana. <!-- .element: class="fragment" -->
2. NOT (Inversão), AND (Produto), OR (Soma). <!-- .element: class="fragment" -->
3. Símbolos ANSI facilitam a leitura de diagramas. <!-- .element: class="fragment" -->
4. Somadores permitem ao hardware realizar cálculos reais. <!-- .element: class="fragment" -->

---

## 🚀 Próxima Aula...

**Arquitetura de Computadores!**

Vamos ver como CPU, Memória e Barramentos trabalham juntos para formar o computador completo. <!-- .element: class="fragment" -->

---

## ❓ Dúvidas?

"O silício é uma areia que aprendeu a pensar através de circuitos lógicos." <!-- .element: class="fragment" -->