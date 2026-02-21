# 💻 Aula 16: Introdução à Programação
## Fundamentos da Computação

---

## 🎯 Objetivos de Hoje

- Compreender o que é uma Linguagem de Programação <!-- .element: class="fragment" -->
- Diferenciar linguagens de Baixa e Alta camada <!-- .element: class="fragment" -->
- Conhecer os conceitos de Compilador e Interpretador <!-- .element: class="fragment" -->
- Entender os blocos básicos: Variáveis, Tipos e Funções <!-- .element: class="fragment" -->

---

## 🧩 O que é Programar?

Programar é o ato de dar instruções precisas a um computador para que ele execute uma tarefa.

É traduzir a lógica humana (Algoritmos) para uma linguagem que a máquina entenda. <!-- .element: class="fragment" -->

---

## 🏗️ Níveis de Linguagem

1. **Baixo Nível**: Próximo do hardware (Binário, Assembly). Difícil para humanos, ultraveloz para a CPU. <!-- .element: class="fragment" -->
2. **Médio Nível**: C e C++. Equilíbrio entre velocidade e legibilidade. <!-- .element: class="fragment" -->
3. **Alto Nível**: Python, JS, Java. Muito parecido com inglês, focado na produtividade. <!-- .element: class="fragment" -->

---

## 🔄 A Jornada do Código

Como o texto que você escreve vira ação?

1. **Código Fonte**: O texto que o programador escreve. <!-- .element: class="fragment" -->
2. **Tradução**: Um software (Compilador ou Interpretador) lê o texto. <!-- .element: class="fragment" -->
3. **Código de Máquina**: O resultado final são os 0s e 1s que a CPU executa. <!-- .element: class="fragment" -->

---

## ⚙️ Compilado vs Interpretado

- **Compilada (Ex: C, Rust)**: O código é traduzido uma única vez em um arquivo `.exe`. Super rápido. <!-- .element: class="fragment" -->
- **Interpretada (Ex: Python, JS)**: O código é lido linha por linha durante a execução. Mais flexível e fácil de testar. <!-- .element: class="fragment" -->

---

## 🧱 Bloco 1: Variáveis

Pense na variável como uma **gaveta** identificada na RAM.

- Você dá um **nome** à gaveta (Ex: `idade`). <!-- .element: class="fragment" -->
- Você guarda um **valor** nela (Ex: `25`). <!-- .element: class="fragment" -->
- Você pode trocar o conteúdo a qualquer momento. <!-- .element: class="fragment" -->

---

## 📦 Bloco 2: Tipos de Dados

O computador precisa saber o que tem na gaveta para calcular certo:

- **int**: Números inteiros (10, -5). <!-- .element: class="fragment" -->
- **float**: Números decimais (1.75). <!-- .element: class="fragment" -->
- **str**: Texto (Strings - "Olá"). <!-- .element: class="fragment" -->
- **bool**: Lógica (True ou False). <!-- .element: class="fragment" -->

---

## 🚦 Bloco 3: Estruturas de Controle

- **IF (Se)**: Desvios Condicionais. <!-- .element: class="fragment" -->
- **FOR / WHILE (Laços)**: Repetições automáticas. <!-- .element: class="fragment" -->
- Sem essas estruturas, o programa seria apenas uma lista linear e burra. <!-- .element: class="fragment" -->

---

## 🛠️ Bloco 4: Funções

Uma função é um bloco de código que você "empacota" para reutilizar depois.

Em vez de escrever 10 linhas para "Enviar E-mail" toda vez, você cria a função `enviar_email()` e a chama pelo nome. <!-- .element: class="fragment" -->

---

## 🌍 Olá Mundo! (Hello World)

A primeira tradição de todo programador.

```python
# Em Python é simples assim:
print("Olá, Mundo!")
```

Parece pouco, mas aqui você já usou: uma função (`print`) e uma String. <!-- .element: class="fragment" -->

---

## 🐛 O Que é um Bug?

O nome vem de um besouro real que travou um computador valvulado nos anos 40.

Hoje, um bug é um erro na lógica ou na sintaxe do código que faz o programa se comportar de forma inesperada. <!-- .element: class="fragment" -->
Depurar (Debug) é o ato de caçar esses erros. <!-- .element: class="fragment" -->

---

## 🎨 Clean Code (Código Limpo)

"Código é feito para humanos lerem, e ocasionalmente para máquinas executarem."

- Use nomes claros: `preco_final` em vez de `pf`. <!-- .element: class="fragment" -->
- Comente o "porquê", não o "quê". <!-- .element: class="fragment" -->
- Organize o código de forma lógica. <!-- .element: class="fragment" -->

---

## ✍️ Exercício Rápido 1

Qual tipo de dado deve ser usado para guardar o preço de um produto: `int` ou `float`?

- Resposta: **float** (pois preços têm centavos/decimais). <!-- .element: class="fragment" -->

---

## ✍️ Exercício Rápido 2

Qual a diferença entre uma linguagem de Alto Nível e uma de Baixo Nível?

- Resposta: Alto nível é mais fácil para humanos; baixo nível é mais próximo do hardware. <!-- .element: class="fragment" -->

---

## 🏗️ Desafio: O Loop Infinito

O que acontece se um algoritmo de repetição (WHILE) nunca encontrar sua condição de parada?

- O programa entra em loop infinito, consumindo 100% da CPU e parando de responder (travando). <!-- .element: class="fragment" -->

---

## 🚀 Onde Começar?

Não existe "melhor" linguagem, existe a ferramenta certa para o trabalho:

- **Web**: JavaScript. <!-- .element: class="fragment" -->
- **Dados/IA**: Python. <!-- .element: class="fragment" -->
- **Sistemas/Games**: C++, C#, Rust. <!-- .element: class="fragment" -->

---

## 🎓 A Grande Revisão (Módulos 1-4)

- Os bits viraram números (Bases). <!-- .element: class="fragment" -->
- Os números viraram lógica (Booleana). <!-- .element: class="fragment" -->
- A lógica virou física (Circuitos). <!-- .element: class="fragment" -->
- A física virou arquitetura (Von Neumann). <!-- .element: class="fragment" -->
- E agora, a arquitetura obedece ao seu código! <!-- .element: class="fragment" -->

---

## 🏆 Parabéns!

Você concluiu os **Fundamentos da Computação**.

A partir daqui, qualquer linguagem de programação que você escolher será muito mais fácil de aprender, pois você entende **como** as coisas funcionam por baixo do capô. <!-- .element: class="fragment" -->

---

## 📝 Resumo da Aula

1. Programar é traduzir lógica em comandos. <!-- .element: class="fragment" -->
2. Linguagens de alto nível priorizam produtividade humana. <!-- .element: class="fragment" -->
3. Variáveis e Tipos organizam os dados na memória. <!-- .element: class="fragment" -->
4. O aprendizado nunca para! <!-- .element: class="fragment" -->

---

## 🏁 Dúvidas Finais?

"O único limite para o que o computador pode fazer é a sua imaginação e a sua paciência para debugar." <!-- .element: class="fragment" -->