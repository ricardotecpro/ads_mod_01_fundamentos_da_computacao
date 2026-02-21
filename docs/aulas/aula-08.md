# 📦 Aula 08 – Representação de Dados

Até agora, vimos como o computador lida com números positivos. Mas como ele sabe se um número é negativo? E como ele guarda textos, emojis e símbolos? Hoje vamos descobrir o **Complemento de 2** e o **UTF-8**.

---

## 🎯 Objetivos de Aprendizagem

Nesta aula, você vai:
- [x] Aprender a representar números negativos usando **Complemento de 2**.
- [x] Entender a diferença entre as codificações **ASCII** e **UTF-8**.
- [x] Compreender como os caracteres são mapeados para números binários.
- [x] Descobrir como um único arquivo pode conter diversos tipos de dados.

---

## ➖ Números Negativos: Complemento de 2

O computador não usa o símbolo `-`. Ele usa um truque matemático onde o bit mais à esquerda (**MSB**) indica o sinal: `0` para positivo, `1` para negativo.

=== "Como calcular (-5)"
    Para representar o **-5** (usando 8 bits):
    1. **+5** em binário: `0000 0101`
    2. **Inverta** os bits: `1111 1010`
    3. **Some 1**: `1111 1011`
    
    🏁 **Resultado: 1111 1011**
=== "Por que isso é bom?"
    !!! tip "Vantagem Matemática"
        Com o Complemento de 2, a CPU não precisa de circuitos diferentes para somar e subtrair. Ela pode simplesmente somar um número positivo com um negativo e o resultado será matematicamente correto!

---

## 🔤 Codificação de Texto

Para o computador, a letra "A" não existe; o que existe é o número **65**.

| Padrão | Bits | Uso |
| :--- | :---: | :--- |
| **ASCII** | 7/8 | Apenas caracteres básicos (inglês). |
| **UTF-8** | 8-32 | Padrão da Web: Suporta todos os idiomas e **Emojis** 🚀. |

<div class="termy">
```console
$ hex-dump "Ads"
Texto:       A          d          s
Decimal:     65         100        115
Hexa:        41         64         73
Binário:     01000001   01100100   01110011
```
</div>

---

## 🚀 Desafio da Semana

Pesquise o que é um **BOM** (*Byte Order Mark*) em arquivos de texto. 
- Por que às vezes o Windows "estranha" um arquivo criado no Linux? 
- Dica: Tem a ver com a forma como os bytes são ordenados na memória!

---

<div class="grid cards" markdown>

-   :material-presentation: **Slides Interativos**
    ---
    Veja o processo de inversão de bits e a tabela ASCII.
    [:octicons-arrow-right-24: Ver Slides](../slides/slide-08.html)

-   :material-school: **Quiz de Prática**
    ---
    10 perguntas sobre números negativos e codificação.
    [:octicons-arrow-right-24: Responder Quiz](../quizzes/quiz-08.md)

-   :material-dumbbell: **Mão na Massa**
    ---
    Exercícios de Complemento de 2 e conversão de texto.
    [:octicons-arrow-right-24: Praticar](../exercicios/exercicio-08.md)

</div>

---
[« Aula Anterior](aula-07.md) | [Módulo 3: Lógica Digital :material-arrow-right:](aula-09.md)
