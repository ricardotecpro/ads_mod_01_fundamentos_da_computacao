# Roteiro de Slides - Aula 02

---

## Onde baixar o Git?

- **Site Oficial**: [git-scm.com](https://git-scm.com)
- É gratuito e Open Source.
- Versões para:
  - Windows
  - macOS
  - Linux / Unix

---

## Processo de Instalação

- **Windows**:
  - Baixar `.exe`
  - Instalar (Next, Next, Next...)
  - **Atenção**: Escolher o editor padrão (Vim é difícil, VS Code é recomendado).
- **Mac/Linux**:
  - Geralmente via linha de comando (`brew install git` ou `apt install git`).

---

## O Git Bash (Windows)

- O Windows não tinha um terminal "estilo Linux" nativo antigamente.
- O Git Bash traz comandos poderosos (`ls`, `cd`, `mkdir`) para o Windows.
- Recomendamos usar o Git Bash para este curso.

---

## Configurando sua Identidade

- O Git exige saber **QUEM** está fazendo as mudanças.
- Comandos obrigatórios:
  ```bash
  git config --global user.name "Seu Nome"
  git config --global user.email "seu@email.com"
  ```
- Isso ficará gravado para sempre no histórico do projeto.

---

## Verificando

- Para conferir se está tudo certo:
  ```bash
  git config --list
  ```
- Se aparecer seu nome e email, você está pronto para começar!
