# 🖥️ Aula 14: Sistemas Operacionais
## Fundamentos da Computação

---

## 🎯 Objetivos de Hoje

- Entender o papel do Sistema Operacional como gerente de recursos <!-- .element: class="fragment" -->
- Compreender o conceito de Kernel e Drivers <!-- .element: class="fragment" -->
- Conhecer as principais gerências: Processo, Memória e Arquivos <!-- .element: class="fragment" -->
- Diferenciar Interfaces CLI (Prompt) de GUI (Janelas) <!-- .element: class="fragment" -->

---

## 🧩 O que é um SO?

O Sistema Operacional é o software mais importante de um computador.

É ele quem faz a "ponte" entre o complexo hardware e o usuário/aplicativos. <!-- .element: class="fragment" -->
Sem o SO, você teria que escrever código binário apenas para mexer o mouse. <!-- .element: class="fragment" -->

---

## 🏗️ Camadas do Sistema

1. **Hardware**: A parte física. <!-- .element: class="fragment" -->
2. **Kernel**: O núcleo do SO que fala com o hardware. <!-- .element: class="fragment" -->
3. **Shell/GUI**: A interface que fala com o usuário. <!-- .element: class="fragment" -->
4. **Usuário**: Você. <!-- .element: class="fragment" -->

---

## 🧠 O Kernel (Núcleo)

O coração do sistema. Ele é invisível para você, mas controla tudo.

- Decide qual programa usa a CPU. <!-- .element: class="fragment" -->
- Garante que os arquivos sejam salvos no local correto. <!-- .element: class="fragment" -->
- Gerencia a segurança e permissões. <!-- .element: class="fragment" -->

---

## 🛠️ Drivers: O Google Tradutor

Um Driver é um pequeno software que ensina o SO a falar com um hardware específico (ex: uma impressora nova).

Sem o driver correto, o SO sabe que algo foi plugado, mas "não entende" como usar. <!-- .element: class="fragment" -->

---

## 🔄 Gerência de Processos

Como a CPU (que é uma só) parece fazer 10 coisas ao mesmo tempo?

**Multitarefa**: O SO alterna entre os programas tão rápido que parece que todos rodam juntos. <!-- .element: class="fragment" -->
- Chama-se **Escalonamento**. <!-- .element: class="fragment" -->

---

## 📂 Gerência de Arquivos

O SO organiza o disco em pastas e arquivos.

- **Sistemas de Arquivos**: Como os dados são indexados. <!-- .element: class="fragment" -->
- **NTFS**: Padrão do Windows. <!-- .element: class="fragment" -->
- **EXT4**: Padrão do Linux. <!-- .element: class="fragment" -->
- **APFS**: Padrão do macOS/iPhone. <!-- .element: class="fragment" -->

---

## ⚡ Gerência de Memória

O SO decide quem fica na RAM e quem vai para a **Memória Virtual**.

Ele impede que um programa "invada" o espaço de outro, evitando que erros no Chrome travem o computador inteiro (ou o contrário). <!-- .element: class="fragment" -->

---

## ⌨️ CLI vs GUI

- **GUI (Graphical User Interface)**: Janelas, ícones, mouse. Intuitivo e amigável. <!-- .element: class="fragment" -->
- **CLI (Command Line Interface)**: Terminal, Prompt de Comando. Rápido, poderoso e essencial para desenvolvedores. <!-- .element: class="fragment" -->

---

## 🏠 Famílias de Sistemas

- **Windows**: Foco em Desktop, Gaming e Corporativo. <!-- .element: class="fragment" -->
- **Linux**: Código aberto, ultrasseguro. Domina os Servidores e a Nuvem. <!-- .element: class="fragment" -->
- **macOS/UNIX**: Foco em Design, Estabilidade e Desenvolvimento. <!-- .element: class="fragment" -->

---

## 📱 Sistemas Mobile

Andoid e iOS também são sistemas operacionais completos.

- **Android**: Baseado em Linux. <!-- .element: class="fragment" -->
- **iOS**: Baseado em Unix (parente do macOS). <!-- .element: class="fragment" -->

---

## ✍️ Exercício Rápido 1

Qual o nome do núcleo central de um Sistema Operacional?

- Resposta: **Kernel**. <!-- .element: class="fragment" -->

---

## ✍️ Exercício Rápido 2

Qual interface utiliza apenas comandos de texto: CLI ou GUI?

- Resposta: **CLI** (Interface de Linha de Comando). <!-- .element: class="fragment" -->

---

## 🏗️ Desafio: O Blue Screen of Death

Por que o Windows dá tela azul ou o Linux um "Kernel Panic"?

- Geralmente ocorre quando o **Kernel** encontra um erro fatal de hardware ou driver que ele não consegue resolver. <!-- .element: class="fragment" -->
- O sistema trava por segurança para não corromper seus dados. <!-- .element: class="fragment" -->

---

## 🚥 O Gerenciador de Tarefas

No Windows (Ctrl+Shift+Esc) ou `top` no Linux.

Ali você vê o SO em ação: CPU, Memória e Disco sendo divididos entre seus processos. <!-- .element: class="fragment" -->

---

## 🔒 Segurança e Usuários

O SO atua como um "xerife".

- Só o Admin pode instalar programas. <!-- .element: class="fragment" -->
- Convidados não podem ver seus arquivos. <!-- .element: class="fragment" -->
- Isso protege seus dados contra outros usuários e malware. <!-- .element: class="fragment" -->

---

## 📝 Resumo da Aula

1. O SO gerencia hardware, processos e arquivos. <!-- .element: class="fragment" -->
2. O Kernel é o núcleo invisível e poderoso. <!-- .element: class="fragment" -->
3. Drivers permitem a comunicação com periféricos. <!-- .element: class="fragment" -->
4. CLI e GUI são formas diferentes de dar ordens ao SO. <!-- .element: class="fragment" -->

---

## 🚀 Próxima Aula...

**Algoritmos e Fluxogramas!**

Vamos sair do hardware e entrar na lógica pura de resolver problemas passo a passo. <!-- .element: class="fragment" -->

---

## ❓ Dúvidas?

"O Sistema Operacional é um governo que não produz nada, mas gerencia tudo para que a sociedade (apps) funcione." <!-- .element: class="fragment" -->