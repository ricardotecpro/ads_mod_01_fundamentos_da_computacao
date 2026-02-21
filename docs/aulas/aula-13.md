---
tags:
  - Hardware
  - Memoria
  - Armazenamento
---

# 💾 Aula 13 – Memória e Armazenamento

Por que o seu computador "esquece" o que você estava fazendo quando a bateria acaba? E por que um SSD é tão mais rápido que um HD antigo? Vamos desvendar os mistérios da **Memória e Armazenamento**.

---

## 🎯 Objetivos de Aprendizagem

Nesta aula, você vai:
- [x] Diferenciar Memória Primária (Volátil) de Secundária (Não-Volátil).
- [x] Compreender a **Hierarquia de Memória** (Velocidade vs Custo).
- [x] Comparar as tecnologias **RAM**, **SSD** e **HD**.
- [x] Entender o conceito de **Memória Virtual** e **Swap**.
- [x] Aprender as unidades de medida (KB, MB, GB, TB) e o padrão **KiB**.

---

## 🏗️ Hierarquia de Memória

Nem toda memória é igual. Existe um equilíbrio constante entre **Velocidade**, **Capacidade** e **Custo**.

| Tipo | Localização | Velocidade | Volátil? | Capacidade |
| :--- | :--- | :--- | :---: | :--- |
| **Registradores** | Dentro da CPU | Ultra Rápida | Sim | Bytes |
| **Cache (L1/L2)** | Perto da CPU | Muito Rápida | Sim | MegaBytes |
| **RAM** | Placa Mãe | Rápida | **Sim** | GigaBytes |
| **SSD / HD** | Armazenamento | Lenta | **Não** | TeraBytes |

---

## ⚡ Memória RAM vs Armazenamento

=== "A Analogia da Cozinha"
    Imagine que você está cozinhando:
    - A **RAM** é o espaço em cima da sua mesa (onde você coloca os ingredientes que está usando **agora**).
    - O **Armazenamento** é o armário (onde você guarda tudo para usar **outro dia**).
=== "Fluxo de Dados"
    ```mermaid
    graph LR
        A[(💾 SSD/HD: Permanente)] -->|"Carregar"| B("📂 RAM: Trabalho")
        B -->|"Busca"| C{"🧠 CPU"}
        C -.->|"Salvar"| A
        style A fill:#2fa,stroke:#333
        style B fill:#f96,stroke:#333
    ```

---

!!! tip "Upgrade Mestre"
    Trocar um HD antigo por um **SSD** é o upgrade mais eficiente que você pode fazer. Como o SSD é puramente eletrônico (sem peças giratórias), ele aumenta a velocidade do sistema quase instantaneamente.

---

## 📏 Unidades de Medida

Na informática, não usamos múltiplos exatos de 1.000, mas de **1.024** ($2^{10}$).

!!! info "O mistério do espaço perdido"
    Você já notou que um HD de 1 TB parece ter menos espaço quando você liga? É porque os fabricantes usam 1.000 (Kilobytes), mas o sistema usa 1.024 (Kibibytes - **KiB**).

---

## 🚀 Desafio da Semana

Descubra quanto de **RAM** o seu computador possui e quanto espaço está livre no seu **SSD/HD**.
- Tente descobrir também qual a tecnologia do seu disco principal (**SATA** ou **NVMe**).

---

<div class="grid cards" markdown>

-   :material-presentation: **Slides Interativos**
    ---
    Veja a animação da hierarquia de memória e o funcionamento do SSD.
    [:octicons-arrow-right-24: Ver Slides](../slides/slide-13.html)

-   :material-school: **Quiz de Prática**
    ---
    10 desafios sobre Volatilidade e Unidades de Medida.
    [:octicons-arrow-right-24: Responder Quiz](../quizzes/quiz-13.md)

-   :material-dumbbell: **Mão na Massa**
    ---
    Exercícios de conversão de unidades (GB para KiB).
    [:octicons-arrow-right-24: Praticar](../exercicios/exercicio-13.md)

</div>

---
[« Aula Anterior](aula-12.md) | [Próxima Aula: Sistemas Operacionais :material-arrow-right:](aula-14.md)
