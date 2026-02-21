# 💾 Aula 13: Memória e Armazenamento
## Fundamentos da Computação

---

## 🎯 Objetivos de Hoje

- Diferenciar Memória Primária de Secundária { .fragment }
- Compreender a diferença entre Volátil e Não-Volátil { .fragment }
- Conhecer as tecnologias: RAM, SSD e HD { .fragment }
- Entender a Hierarquia de Memória e o conceito de Memória Virtual { .fragment }

---

## 🏗️ Duas Formas de "Guardar"

O computador precisa de dois tipos de memória:

1. **Memória de Trabalho** (Rápida, mas esquece quando desliga). { .fragment }
2. **Memória de Arquivo** (Lenta, mas guarda para sempre). { .fragment }

---

## ⚡ Memória Primária (RAM)

**R**andom **A**ccess **M**emory (Memória de Acesso Aleatório).

- É **Volátil**: Os dados somem sem eletricidade. { .fragment }
- É onde os programas ficam enquanto estão rodando. { .fragment }
- Atualmente usamos padrões como DDR4 e DDR5. { .fragment }

---

## 📂 Memória Secundária (HDD / SSD)

Onde guardamos nossos arquivos, fotos e o Sistema Operacional.

- É **Não-Volátil**: Os dados ficam lá mesmo fora da tomada. { .fragment }
- Capacidade muito maior que a RAM, porém muito mais lenta. { .fragment }

---

## 💿 HD (Hard Disk Drive)

A tecnologia magnética clássica.

- Possui discos que giram (comuns: 5400 ou 7200 RPM). { .fragment }
- Uma agulha lê os dados magneticamente. { .fragment }
- **Problema**: É mecânico. Sofre com vibração e é lento. { .fragment }

---

## 🚀 SSD (Solid State Drive)

A revolução do armazenamento.

- Usa chips de memória **Flash NAND** (eletrônico). { .fragment }
- Não tem partes móveis. { .fragment }
- Até 100x mais rápido que um HD comum. { .fragment }

---

## 📉 Hierarquia de Memória

Por que não usar apenas RAM para tudo?
Por causa do **custo** e da **volatilidade**. { .fragment }

1. CPU (Registradores) - Mais rápido / Menor { .fragment }
2. Cache (L1, L2, L3) { .fragment }
3. RAM { .fragment }
4. SSD/HD - Mais lento / Maior { .fragment }

---

## 🧠 Memória Cache

Uma pequena memória ultrarrápida que fica "colada" no processador.

Guarda os dados que a CPU usa com mais frequência para evitar que ela tenha que ir até a RAM o tempo todo. { .fragment }

---

## 🧱 Memória Virtual

O que acontece quando a RAM acaba?

O Sistema Operacional reserva um pedaço do SSD/HD para simular mais RAM. { .fragment }
- Chama-se **Arquivo de Paginação** ou **Swap**. { .fragment }
- É por isso que o PC fica lento quando tem muitas abas abertas! { .fragment }

---

## 📏 KiB vs KB (Os 1024)

Você compra 1 TB, mas o Windows mostra 931 GB. Por quê?

- Fabricantes usam Base 10: $1 \text{ KB} = 1.000$ Bytes. { .fragment }
- Computadores usam Base 2: $1 \text{ KiB} = 1.024$ Bytes. { .fragment }
- Essa diferença de 2.4% vai acumulando até chegar no Tera! { .fragment }

---

## 🧩 Ciclo de Vida do Dado

1. Você clica no ícone (O dado está no **SSD**). { .fragment }
2. O SO carrega o programa para a **RAM**. { .fragment }
3. A CPU pede o dado para a **Cache**. { .fragment }
4. O dado é processado nos **Registradores**. { .fragment }

---

## 🏗️ ROM (Read Only Memory)

A memória que não deixa você apagar (facilmente).

Contém as instruções iniciais para o computador ligar (BIOS / UEFI). { .fragment }

---

## ✍️ Exercício Rápido 1

Qual tipo de memória é volátil: RAM ou SSD?

- Resposta: **RAM**. { .fragment }

---

## ✍️ Exercício Rápido 2

Por que o SSD é mais resistente a quedas que o HD?

- Resposta: Porque não possui partes móveis (discos e agulhas) que possam quebrar com o impacto. { .fragment }

---

## 🏗️ Desafio

Se você tem 8 GB de RAM e abre um jogo que precisa de 12 GB, o que acontece?

- O jogo trava? { .fragment }
- O computador usa a **Memória Virtual** (no disco) para suprir os 4 GB restantes, mas o desempenho cai drasticamente. { .fragment }

---

## 🔒 Proteção de Memória

O Sistema Operacional garante que um programa não possa ler a memória de outro (ex: o navegador lendo sua senha no banco).

Bugs de segurança como *Spectre* e *Meltdown* exploraram falhas nessa área. { .fragment }

---

## 📝 Resumo da Aula

1. RAM: rápida, volátil, cara. { .fragment }
2. SSD/HD: lentos, permanentes, baratos. { .fragment }
3. Cache diminui o gargalo entre CPU e RAM. { .fragment }
4. Memória Virtual salva o PC de travar por falta de RAM. { .fragment }

---

## 🚀 Próxima Aula...

**Sistemas Operacionais!**

Vamos aprender o que é o Kernel, como ele gerencia o hardware e por que precisamos dele. { .fragment }

---

## ❓ Dúvidas?

"Memória é como espaço em cima da mesa; Armazenamento é como o tamanho do arquivo na gaveta." { .fragment }
