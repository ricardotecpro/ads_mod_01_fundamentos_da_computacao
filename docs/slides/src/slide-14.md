# 🖥️ Aula 14: Sistemas Operacionais
## Fundamentos da Computação

---

## 🎯 Objetivos de Hoje

- Entender o papel do Sistema Operacional como gerente de recursos { .fragment }
- Compreender o conceito de Kernel e Drivers { .fragment }
- Conhecer as principais gerências: Processo, Memória e Arquivos { .fragment }
- Diferenciar Interfaces CLI (Prompt) de GUI (Janelas) { .fragment }

---

## 🧩 O que é um SO?

O Sistema Operacional é o software mais importante de um computador.

É ele quem faz a "ponte" entre o complexo hardware e o usuário/aplicativos. { .fragment }
Sem o SO, você teria que escrever código binário apenas para mexer o mouse. { .fragment }

---

## 🏗️ Camadas do Sistema

1. **Hardware**: A parte física. { .fragment }
2. **Kernel**: O núcleo do SO que fala com o hardware. { .fragment }
3. **Shell/GUI**: A interface que fala com o usuário. { .fragment }
4. **Usuário**: Você. { .fragment }

---

## 🧠 O Kernel (Núcleo)

O coração do sistema. Ele é invisível para você, mas controla tudo.

- Decide qual programa usa a CPU. { .fragment }
- Garante que os arquivos sejam salvos no local correto. { .fragment }
- Gerencia a segurança e permissões. { .fragment }

---

## 🛠️ Drivers: O Google Tradutor

Um Driver é um pequeno software que ensina o SO a falar com um hardware específico (ex: uma impressora nova).

Sem o driver correto, o SO sabe que algo foi plugado, mas "não entende" como usar. { .fragment }

---

## 🔄 Gerência de Processos

Como a CPU (que é uma só) parece fazer 10 coisas ao mesmo tempo?

**Multitarefa**: O SO alterna entre os programas tão rápido que parece que todos rodam juntos. { .fragment }
- Chama-se **Escalonamento**. { .fragment }

---

## 📂 Gerência de Arquivos

O SO organiza o disco em pastas e arquivos.

- **Sistemas de Arquivos**: Como os dados são indexados. { .fragment }
- **NTFS**: Padrão do Windows. { .fragment }
- **EXT4**: Padrão do Linux. { .fragment }
- **APFS**: Padrão do macOS/iPhone. { .fragment }

---

## ⚡ Gerência de Memória

O SO decide quem fica na RAM e quem vai para a **Memória Virtual**.

Ele impede que um programa "invada" o espaço de outro, evitando que erros no Chrome travem o computador inteiro (ou o contrário). { .fragment }

---

## ⌨️ CLI vs GUI

- **GUI (Graphical User Interface)**: Janelas, ícones, mouse. Intuitivo e amigável. { .fragment }
- **CLI (Command Line Interface)**: Terminal, Prompt de Comando. Rápido, poderoso e essencial para desenvolvedores. { .fragment }

---

## 🏠 Famílias de Sistemas

- **Windows**: Foco em Desktop, Gaming e Corporativo. { .fragment }
- **Linux**: Código aberto, ultrasseguro. Domina os Servidores e a Nuvem. { .fragment }
- **macOS/UNIX**: Foco em Design, Estabilidade e Desenvolvimento. { .fragment }

---

## 📱 Sistemas Mobile

Andoid e iOS também são sistemas operacionais completos.

- **Android**: Baseado em Linux. { .fragment }
- **iOS**: Baseado em Unix (parente do macOS). { .fragment }

---

## ✍️ Exercício Rápido 1

Qual o nome do núcleo central de um Sistema Operacional?

- Resposta: **Kernel**. { .fragment }

---

## ✍️ Exercício Rápido 2

Qual interface utiliza apenas comandos de texto: CLI ou GUI?

- Resposta: **CLI** (Interface de Linha de Comando). { .fragment }

---

## 🏗️ Desafio: O Blue Screen of Death

Por que o Windows dá tela azul ou o Linux um "Kernel Panic"?

- Geralmente ocorre quando o **Kernel** encontra um erro fatal de hardware ou driver que ele não consegue resolver. { .fragment }
- O sistema trava por segurança para não corromper seus dados. { .fragment }

---

## 🚥 O Gerenciador de Tarefas

No Windows (Ctrl+Shift+Esc) ou `top` no Linux.

Ali você vê o SO em ação: CPU, Memória e Disco sendo divididos entre seus processos. { .fragment }

---

## 🔒 Segurança e Usuários

O SO atua como um "xerife".

- Só o Admin pode instalar programas. { .fragment }
- Convidados não podem ver seus arquivos. { .fragment }
- Isso protege seus dados contra outros usuários e malware. { .fragment }

---

## 📝 Resumo da Aula

1. O SO gerencia hardware, processos e arquivos. { .fragment }
2. O Kernel é o núcleo invisível e poderoso. { .fragment }
3. Drivers permitem a comunicação com periféricos. { .fragment }
4. CLI e GUI são formas diferentes de dar ordens ao SO. { .fragment }

---

## 🚀 Próxima Aula...

**Algoritmos e Fluxogramas!**

Vamos sair do hardware e entrar na lógica pura de resolver problemas passo a passo. { .fragment }

---

## ❓ Dúvidas?

"O Sistema Operacional é um governo que não produz nada, mas gerencia tudo para que a sociedade (apps) funcione." { .fragment }
