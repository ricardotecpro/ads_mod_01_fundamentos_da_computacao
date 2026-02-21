# 💾 Aula 13: Memória e Armazenamento
## Fundamentos da Computação

---

## 🎯 Objetivos de Hoje

- Diferenciar Memória Primária de Secundária <!-- .element: class="fragment" -->
- Compreender a diferença entre Volátil e Não-Volátil <!-- .element: class="fragment" -->
- Conhecer as tecnologias: RAM, SSD e HD <!-- .element: class="fragment" -->
- Entender a Hierarquia de Memória e o conceito de Memória Virtual <!-- .element: class="fragment" -->

---

## 🏗️ Duas Formas de "Guardar"

O computador precisa de dois tipos de memória:

1. **Memória de Trabalho** (Rápida, mas esquece quando desliga). <!-- .element: class="fragment" -->
2. **Memória de Arquivo** (Lenta, mas guarda para sempre). <!-- .element: class="fragment" -->

---

## ⚡ Memória Primária (RAM)

**R**andom **A**ccess **M**emory (Memória de Acesso Aleatório).

- É **Volátil**: Os dados somem sem eletricidade. <!-- .element: class="fragment" -->
- É onde os programas ficam enquanto estão rodando. <!-- .element: class="fragment" -->
- Atualmente usamos padrões como DDR4 e DDR5. <!-- .element: class="fragment" -->

---

## 📂 Memória Secundária (HDD / SSD)

Onde guardamos nossos arquivos, fotos e o Sistema Operacional.

- É **Não-Volátil**: Os dados ficam lá mesmo fora da tomada. <!-- .element: class="fragment" -->
- Capacidade muito maior que a RAM, porém muito mais lenta. <!-- .element: class="fragment" -->

---

## 💿 HD (Hard Disk Drive)

A tecnologia magnética clássica.

- Possui discos que giram (comuns: 5400 ou 7200 RPM). <!-- .element: class="fragment" -->
- Uma agulha lê os dados magneticamente. <!-- .element: class="fragment" -->
- **Problema**: É mecânico. Sofre com vibração e é lento. <!-- .element: class="fragment" -->

---

## 🚀 SSD (Solid State Drive)

A revolução do armazenamento.

- Usa chips de memória **Flash NAND** (eletrônico). <!-- .element: class="fragment" -->
- Não tem partes móveis. <!-- .element: class="fragment" -->
- Até 100x mais rápido que um HD comum. <!-- .element: class="fragment" -->

---

## 📉 Hierarquia de Memória

Por que não usar apenas RAM para tudo?
Por causa do **custo** e da **volatilidade**. <!-- .element: class="fragment" -->

1. CPU (Registradores) - Mais rápido / Menor <!-- .element: class="fragment" -->
2. Cache (L1, L2, L3) <!-- .element: class="fragment" -->
3. RAM <!-- .element: class="fragment" -->
4. SSD/HD - Mais lento / Maior <!-- .element: class="fragment" -->

---

## 🧠 Memória Cache

Uma pequena memória ultrarrápida que fica "colada" no processador.

Guarda os dados que a CPU usa com mais frequência para evitar que ela tenha que ir até a RAM o tempo todo. <!-- .element: class="fragment" -->

---

## 🧱 Memória Virtual

O que acontece quando a RAM acaba?

O Sistema Operacional reserva um pedaço do SSD/HD para simular mais RAM. <!-- .element: class="fragment" -->
- Chama-se **Arquivo de Paginação** ou **Swap**. <!-- .element: class="fragment" -->
- É por isso que o PC fica lento quando tem muitas abas abertas! <!-- .element: class="fragment" -->

---

## 📏 KiB vs KB (Os 1024)

Você compra 1 TB, mas o Windows mostra 931 GB. Por quê?

- Fabricantes usam Base 10: $1 \text{ KB} = 1.000$ Bytes. <!-- .element: class="fragment" -->
- Computadores usam Base 2: $1 \text{ KiB} = 1.024$ Bytes. <!-- .element: class="fragment" -->
- Essa diferença de 2.4% vai acumulando até chegar no Tera! <!-- .element: class="fragment" -->

---

## 🧩 Ciclo de Vida do Dado

1. Você clica no ícone (O dado está no **SSD**). <!-- .element: class="fragment" -->
2. O SO carrega o programa para a **RAM**. <!-- .element: class="fragment" -->
3. A CPU pede o dado para a **Cache**. <!-- .element: class="fragment" -->
4. O dado é processado nos **Registradores**. <!-- .element: class="fragment" -->

---

## 🏗️ ROM (Read Only Memory)

A memória que não deixa você apagar (facilmente).

Contém as instruções iniciais para o computador ligar (BIOS / UEFI). <!-- .element: class="fragment" -->

---

## ✍️ Exercício Rápido 1

Qual tipo de memória é volátil: RAM ou SSD?

- Resposta: **RAM**. <!-- .element: class="fragment" -->

---

## ✍️ Exercício Rápido 2

Por que o SSD é mais resistente a quedas que o HD?

- Resposta: Porque não possui partes móveis (discos e agulhas) que possam quebrar com o impacto. <!-- .element: class="fragment" -->

---

## 🏗️ Desafio

Se você tem 8 GB de RAM e abre um jogo que precisa de 12 GB, o que acontece?

- O jogo trava? <!-- .element: class="fragment" -->
- O computador usa a **Memória Virtual** (no disco) para suprir os 4 GB restantes, mas o desempenho cai drasticamente. <!-- .element: class="fragment" -->

---

## 🔒 Proteção de Memória

O Sistema Operacional garante que um programa não possa ler a memória de outro (ex: o navegador lendo sua senha no banco).

Bugs de segurança como *Spectre* e *Meltdown* exploraram falhas nessa área. <!-- .element: class="fragment" -->

---

## 📝 Resumo da Aula

1. RAM: rápida, volátil, cara. <!-- .element: class="fragment" -->
2. SSD/HD: lentos, permanentes, baratos. <!-- .element: class="fragment" -->
3. Cache diminui o gargalo entre CPU e RAM. <!-- .element: class="fragment" -->
4. Memória Virtual salva o PC de travar por falta de RAM. <!-- .element: class="fragment" -->

---

## 🚀 Próxima Aula...

**Sistemas Operacionais!**

Vamos aprender o que é o Kernel, como ele gerencia o hardware e por que precisamos dele. <!-- .element: class="fragment" -->

---

## ❓ Dúvidas?

"Memória é como espaço em cima da mesa; Armazenamento é como o tamanho do arquivo na gaveta." <!-- .element: class="fragment" -->