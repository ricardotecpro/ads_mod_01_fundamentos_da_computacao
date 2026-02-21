---
tags:
  - Logica-Digital
  - Circuitos
  - Hardware
---

# 🔌 Aula 11 – Circuitos Lógicos

Como transformamos matemática booleana (E, OU, NÃO) em algo físico que funciona com eletricidade? Hoje vamos conhecer as **Portas Lógicas** (*Gates*). Elas são os blocos fundamentais de construção de qualquer chip moderno.

---

## 🎯 Objetivos de Aprendizagem

Nesta aula, você vai:
- [x] Identificar os símbolos internacionais das portas lógicas (**NOT, AND, OR, XOR**).
- [x] Entender como sinais elétricos (0V e 5V) representam bits.
- [x] Compreender o funcionamento de um **Somador Binário** (*Half Adder*).
- [x] Visualizar como portas lógicas se combinam para formar circuitos complexos.

---

## 🏗️ Simbologia das Portas Lógicas

Os engenheiros usam símbolos padrões (ANSI/IEEE) para desenhar circuitos. Aprender esses símbolos é como aprender a ler "partituras" da eletrônica digital.

| Porta | Símbolo Visual | Função Lógica |
| :--- | :---: | :--- |
| **NOT** | :material-triangle-outline: | Inverte o sinal (0 vira 1). |
| **AND** | :material-square-rounded-outline: | Saída 1 **apenas** se Ambos forem 1. |
| **OR** | :material-play-outline: | Saída 1 se **pelo menos um** for 1. |
| **XOR** | :material-plus-circle-outline: | Saída 1 se forem **diferentes**. |

---

## ⚡ Como o Computador Soma?

Para somar $1+1$, o computador usa um circuito chamado **Meio Somador** (*Half Adder*). Ele combina duas portas lógicas:

=== "Esquema do Circuito"
    ```mermaid
    graph LR
        A["Entrada A"] --> XOR(("XOR"))
        B["Entrada B"] --> XOR
        A --> AND(("AND"))
        B --> AND
        XOR --> S["Resultado (Soma)"]
        AND --> C["Carry (Vai-um)"]
        style XOR fill:#f96,stroke:#333
        style AND fill:#2fa,stroke:#333
    ```
=== "Explicação"
    1. **Porta XOR**: Calcula o dígito da soma. Se $1+1$, o resultado é **0**.
    2. **Porta AND**: Calcula se houve estouro. Se $1+1$, o Carry é **1**.
    
    🏁 Resultado final: **10** (que é 2 em binário).

---

!!! info "O Silício que Pensa"
    Cada porta lógica é formada por pequenos interruptores chamados **Transistores**. Um processador moderno possui **bilhões** desses componentes em um espaço menor que uma unha.

---

## 🚀 Desafio da Semana

Procure uma imagem de uma placa-mãe antiga (anos 80). 
- Tente encontrar pequenos chips retangulares. 
- Muitos deles continham apenas 4 portas lógicas individuais! Imagine o trabalho que era montar um computador assim.

---

<div class="grid cards" markdown>

-   :material-presentation: **Slides Interativos**
    ---
    Simule o funcionamento do Half Adder e veja os sinais elétricos.
    [:octicons-arrow-right-24: Ver Slides](../slides/slide-11.html)

-   :material-school: **Quiz de Prática**
    ---
    10 circuitos para você identificar a saída correta.
    [:octicons-arrow-right-24: Responder Quiz](../quizzes/quiz-11.md)

-   :material-dumbbell: **Mão na Massa**
    ---
    Desenhe seus próprios diagramas de portas lógicas.
    [:octicons-arrow-right-24: Praticar](../exercicios/exercicio-11.md)

</div>

---
[« Aula Anterior](aula-10.md) | [Próxima Aula: Arquitetura de Computadores :material-arrow-right:](aula-12.md)
