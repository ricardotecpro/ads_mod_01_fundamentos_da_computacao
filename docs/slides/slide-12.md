# 🏛️ Aula 12: Arquitetura de Computadores
## Fundamentos da Computação

---

## 🎯 Objetivos de Hoje

- Compreender o Modelo de Von Neumann <!-- .element: class="fragment" -->
- Identificar os componentes fundamentais: CPU, Memória e I/O <!-- .element: class="fragment" -->
- Entender o ciclo de execução de uma instrução <!-- .element: class="fragment" -->
- Diferenciar Barramentos de Dados, Endereço e Controle <!-- .element: class="fragment" -->

---

## 🧩 O que é Arquitetura?

Não é sobre design estético, mas sobre a **organização lógica** dos componentes.

- Como eles se comunicam? <!-- .element: class="fragment" -->
- Qual a ordem das operações? <!-- .element: class="fragment" -->
- Como os dados fluem? <!-- .element: class="fragment" -->

---

## 📜 O Modelo de Von Neumann (1945)

A base de quase todos os computadores modernos.

**Conceito chave**: O programa e os dados são guardados na **mesma memória**. <!-- .element: class="fragment" -->
Antes disso, para mudar o programa era preciso mudar os fios do computador físicos! <!-- .element: class="fragment" -->

---

## 🏗️ Os 4 Pilares

1. **CPU** (Processamento) <!-- .element: class="fragment" -->
2. **Memória Principal** (Armazenamento Temporário) <!-- .element: class="fragment" -->
3. **Entrada/Saída** (Comunicação com o mundo) <!-- .element: class="fragment" -->
4. **Barramentos** (As estradas que ligam tudo) <!-- .element: class="fragment" -->

---

## 🧠 A CPU (Processador)

O "cérebro" do computador.

- **ALU** (Unidade Lógica e Aritmética): Faz os cálculos. <!-- .element: class="fragment" -->
- **UC** (Unidade de Controle): Gerencia o fluxo e dá as ordens. <!-- .element: class="fragment" -->
- **Registradores**: Memórias ultrarrápidas dentro da CPU. <!-- .element: class="fragment" -->

---

## 🔄 O Ciclo de Instrução

A CPU repete isso bilhões de vezes por segundo:

1. **Busca** (Fetch): Pega a instrução na memória. <!-- .element: class="fragment" -->
2. **Decodifica**: Entende o que a instrução pede (Soma? Move?). <!-- .element: class="fragment" -->
3. **Executa**: Realiza a tarefa. <!-- .element: class="fragment" -->

---

## 📂 Memória Principal (RAM)

Um grande armário com gavetas numeradas (Endereços).

- Volátil: Apaga quando acaba a energia. <!-- .element: class="fragment" -->
- Acesso Aleatório: Podemos ler qualquer gaveta na mesma velocidade. <!-- .element: class="fragment" -->

---

## 🛣️ Barramentos (Buses)

- **De Dados**: Leva a informação em si. <!-- .element: class="fragment" -->
- **De Endereço**: Diz à RAM qual gaveta abrir. <!-- .element: class="fragment" -->
- **De Controle**: Diz se queremos Ler ou Escrever. <!-- .element: class="fragment" -->

---

## 📉 Hierarquia de Velocidade

Nem toda memória é igual.

- **Registradores**: Velozes (dentro da CPU). <!-- .element: class="fragment" -->
- **Cache**: Muito rastro (perto da CPU). <!-- .element: class="fragment" -->
- **RAM**: Rápida. <!-- .element: class="fragment" -->
- **SSD/HD**: Lentos (mas permanentes). <!-- .element: class="fragment" -->

---

## 🚥 O Gargalo de Von Neumann

Como a CPU é MUITO mais rápida que a Memória, o processador muitas vezes fica "esperando" os dados chegarem.

É por isso que precisamos de memórias **Cache**! <!-- .element: class="fragment" -->

---

## 🔌 Chipset e Placa-Mãe

A Placa-Mãe é a cidade, os barramentos são as ruas.

O **Chipset** é o centro de controle que decide quem tem prioridade no trânsito de dados entre HD, USB, Placa de Vídeo e CPU. <!-- .element: class="fragment" -->

---

## ✍️ Exercício Rápido 1

Qual componente da CPU é responsável por realizar cálculos binários?

- Resposta: **ALU** (Unidade Lógica e Aritmética). <!-- .element: class="fragment" -->

---

## ✍️ Exercício Rápido 2

O que acontece no estágio de "Decodificação" do ciclo de instrução?

- Resposta: A CPU traduz os bits da instrução em sinais elétricos para os componentes internos. <!-- .element: class="fragment" -->

---

## 🏗️ Desafio: 32 vs 64 Bits

O que significa um processador ser de "64 bits"?

- Significa que seus registradores e barramentos de endereço podem processar números de 64 bits por vez. <!-- .element: class="fragment" -->
- Isso permite endereçar MUITO mais memória RAM (até exabytes!). <!-- .element: class="fragment" -->

---

## 📦 Periféricos (I/O)

O computador não serve pra nada se não puder falar com você.

- **Entrada**: Teclado, Mouse, Microfone. <!-- .element: class="fragment" -->
- **Saída**: Monitor, Impressora, Caixas de Som. <!-- .element: class="fragment" -->

---

## 💾 Firmware e BIOS/UEFI

O "primeiro sopro de vida".
Um pequeno software gravado permanentemente que ensina a CPU a acordar e procurar o Sistema Operacional no disco. <!-- .element: class="fragment" -->

---

## 📝 Resumo da Aula

1. Arquitetura de Von Neumann: dados e programas na mesma memória. <!-- .element: class="fragment" -->
2. CPU faz Busca -> Decodificação -> Execução. <!-- .element: class="fragment" -->
3. Memória RAM é temporária e organizada por endereços. <!-- .element: class="fragment" -->
4. Barramentos são os canais de comunicação. <!-- .element: class="fragment" -->

---

## 🚀 Próxima Aula...

**Memória e Armazenamento!**

Vamos mergulhar nos detalhes de como funcionam os SSDs, HDs, Memória Flash e a gestão do espaço. <!-- .element: class="fragment" -->

---

## ❓ Dúvidas?

"O hardware é o que você chuta; o software é o que você xinga." <!-- .element: class="fragment" -->