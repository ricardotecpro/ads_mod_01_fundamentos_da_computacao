# Roteiro de Slides - Aula 15

---

## Todo mundo erra

- Commitar na branch errada? ✅
- Apagar arquivo errado? ✅
- Perder o histórico? ✅
- O Git tem ferramentas para consertar tudo isso.

---

## O Comando Reset

Imagine uma fita cassete rebobinada.
- `--soft`: Rebobina a fita (Commit), mas deixa as roupas no chão (Arquivos modificados).
- `--hard`: Rebobina a fita E limpa o quarto (Apaga modificações). **CUIDADO**.

---

## O Comando Restore

- "Desfazer (CTRL+Z)" do arquivo.
- Se você não deu `add` ainda, `git restore arquivo` traz a versão do último commit.

---

## O Comando Stash

- "Esconder na gaveta".
- Limpa sua mesa (Working Directory) para você atender uma urgência em outra branch.
- Depois `git stash pop` traz tudo da gaveta de volta.

---

## Reflog

- O Diário Secreto do Git.
- Registra cada movimento do HEAD.
- Se você deletou um commit e quer ele de volta, o hash dele estará no `git reflog`.
