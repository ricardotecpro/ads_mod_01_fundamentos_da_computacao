# Roteiro de Slides - Aula 13

---

## Git é Multijogador

- Um jogo cooperativo, não competitivo.
- Objetivo: Construir o software juntos sem quebrar nada.

---

## Papéis no GitHub

- **Owner**: O Deus do repo. Pode deletar, arquivar, transferir.
- **Admin**: Gerencia acessos.
- **Write (Colaborador)**: O desenvolvedor padrão. Lê, escreve, cria branches.
- **Read**: Só pode ver (repos privados).
- **Sem acesso (Público)**: Qualquer um na internet (pode ver e fazer fork).

---

## O Fluxo de Trabalho (Revisão)

1. `git pull` (Café da manhã dos campeões).
2. `git switch -c feature`.
3. Code, Code, Code.
4. `git push`.
5. PR & Review.

---

## O Pesadelo "Rejected"

`! [rejected] main -> main (fetch first)`
- Significa: "Alguém chegou na sua frente".
- O servidor tem commits que você não tem.
- Você não pode sobrescrever o histórico deles.
- Solução: Baixe (`pull`), misture (`merge/rebase`), depois suba (`push`).

---

## Branch Protection

- Trava de segurança no gatilho.
- Impede `git push origin main`.
- Obriga Code Review.
- Essencial em empresas sérias.
