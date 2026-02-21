# 🔌 Aula 11: Circuitos Lógicos
## Fundamentos da Computação

---

## 🎯 Objetivos de Hoje

- Conhecer os símbolos das portas lógicas universais { .fragment }
- Aprender a desenhar diagramas de circuitos a partir de expressões { .fragment }
- Compreender o funcionamento físico de um Somador { .fragment }
- Entender a relação entre transistores e portas lógicas { .fragment }

---

## 🏗️ O que é uma Porta Lógica?

É um dispositivo físico que implementa uma função booleana.

- Recebe sinais elétricos (bits) como entrada. { .fragment }
- Processa e gera um sinal de saída. { .fragment }
- É o "átomo" de qualquer chip de computador. { .fragment }

---

## 🚫 Porta NOT (Inversora)

Inverte o sinal.

- **Símbolo**: Um triângulo com um pequeno círculo (bolinha) na ponta. { .fragment }
- A bolinha é o símbolo universal para **inversão** em eletrônica. { .fragment }

---

## 🤝 Porta AND (E)

Multiplicação lógica.

- **Símbolo**: Tem o formato da letra **D**. { .fragment }
- Saída 1 apenas se as duas perninhas de entrada forem 1. { .fragment }

---

## ➕ Porta OR (OU)

Soma lógica.

- **Símbolo**: Tem o formato de uma **ponta de flecha** ou foguete. { .fragment }
- Saída 1 se qualquer uma das entradas for 1. { .fragment }

---

## ✨ Portas Universais: NAND e NOR

São as portas mais comuns na indústria.

- **NAND**: Um AND com uma bolinha na ponta. { .fragment }
- **NOR**: Um OR com uma bolinha na ponta. { .fragment }

Curiosidade: O console da Apollo 11 foi construído quase inteiramente usando apenas portas **NOR**! { .fragment }

---

## 🏗️ Combinando Portas

Podemos ligar a saída de uma porta na entrada de outra.

Exemplo: `(A AND B) OR C` { .fragment }
1. Desenhe um gate AND para A e B. { .fragment }
2. Pegue o resultado e ligue em uma das entradas de um gate OR. { .fragment }
3. A outra entrada do OR recebe C. { .fragment }

---

## ⚡ O Meio Somador (Half Adder)

Como o computador soma $1 + 1 = 10$?

- Usa uma porta **XOR** para o resultado da casa (Soma). { .fragment }
- Usa uma porta **AND** para o "Vai-Um" (Carry). { .fragment }

Isso resolve a soma binária básica! { .fragment }

---

## 🏛️ O Somador Completo

Para somar números grandes, precisamos levar em conta o "Vai-Um" da coluna anterior.

O **Full Adder** combina dois Meio Somadores e uma porta OR extra. { .fragment }
Com 8 desses em série, temos um somador de 8 bits! { .fragment }

---

## 🌡️ Níveis Lógicos

Na prática, não há "1" e "0" voando nos fios.

- **1 (HIGH)**: Geralmente +5V ou +3.3V. { .fragment }
- **0 (LOW)**: Geralmente 0V (GND). { .fragment }

Circuitos integrados (chips) garantem que esses níveis sejam estáveis. { .fragment }

---

## 🧪 Circuitos Integrados (ICs)

Antigamente, você comprava chips com poucas portas.
Ex: **74LS08** (Contém 4 portas AND dentro).

Hoje, um processador moderno tem **bilhões** de portas em um único pedaço de silício. { .fragment }

---

## ✍️ Exercício Rápido 1

Qual o formato do símbolo da porta **AND**?

- Resposta: Letra **D**. { .fragment }

---

## ✍️ Exercício Rápido 2

Se ligarmos um sinal `1` em uma porta **NOT** e o resultado em outra **NOT**, qual a saída final?

- 1 -> NOT -> 0
- 0 -> NOT -> 1
- Resposta: **1**. (Duas inversões se anulam!) { .fragment }

---

## 🏗️ Desafio: O Circuito do Alarme

O alarme toca se (Sensor de Janela **AND** Alarme Ativado).

| Sensor | Ativado | Alerta |
| :---: | :---: | :---: |
| 1 | 1 | 1 |
| 1 | 0 | 0 |

Qual porta lógica representa isso? **Porta AND**. { .fragment }

---

## 🔬 Do Transistor à Porta

Cada porta lógica é feita de **transistores** funcionando como interruptores ultrarrápidos.

- Uma porta NAND pode ser feita com apenas 2 transistores. { .fragment }
- Menos transistores = menos calor e mais velocidade. { .fragment }

---

## 📊 Vantagens da Lógica Digital

- **Imunidade a Ruído**: Pequenas variações de voltagem não mudam o bit. { .fragment }
- **Reprodutibilidade**: 1+1 sempre será 2 (ou 10 binário). { .fragment }
- **Escalabilidade**: Podemos empilhar trilhões de portas. { .fragment }

---

## 📝 Resumo da Aula

1. Portas lógicas são a implementação física da álgebra booleana. { .fragment }
2. NOT (Inversão), AND (Produto), OR (Soma). { .fragment }
3. Símbolos ANSI facilitam a leitura de diagramas. { .fragment }
4. Somadores permitem ao hardware realizar cálculos reais. { .fragment }

---

## 🚀 Próxima Aula...

**Arquitetura de Computadores!**

Vamos ver como CPU, Memória e Barramentos trabalham juntos para formar o computador completo. { .fragment }

---

## ❓ Dúvidas?

"O silício é uma areia que aprendeu a pensar através de circuitos lógicos." { .fragment }
