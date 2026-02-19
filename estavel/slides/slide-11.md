# Roteiro de Slides - Aula 11

---

## O Histórico é para Humanos

- O Git não liga para sua mensagem.
- Mas seus colegas (e seu chefe) ligam.
- Mensagens ruins = "Dívida Técnica".

---

## Regra do Imperativo

- O Git usa imperativo automaticamente nos merges (`Merge branch...`).
- Siga o padrão:
  - `Adiciona` (Isso aplica a adição).
  - `Remove` (Isso aplica a remoção).
  - `Corrige` (Isso aplica a correção).

---

## Atomicidade

- 1 Commit = 1 Ideia Lógica.
- Se você demorou 3 dias para commitar, provavelmente tem coisas demais misturadas.
- Commite cedo, commite sempre, commite pouco.

---

## Conventional Commits

- Um padrão global.
- `feat`: Feature nova.
- `fix`: Bug fix.
- `docs`: Documentação.
- `chore`: Tarefas chatas (configuração, build).
- Ferramentas automáticas podem gerar Changelogs (notas de versão) lendo esses prefixos!

---

## O comando Amend

- Errou a mensagem? Esqueceu um arquivo?
- `git commit --amend`
- Refaz o último commit.
- **PERIGO**: Nunca faça isso em commits que já foram para o GitHub (Push).
