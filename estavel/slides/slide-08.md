# Roteiro de Slides - Aula 08

---

## Chega de trabalhar sozinho!

- Git brilha mesmo em equipes.
- O problema: Se 10 pessoas derem `git push` na `main` ao mesmo tempo, vira o caos.
- A solução: **Pull Requests**.

---

## O Fluxo de Ouro (GitHub Flow)

1. **Branch**: Crie um espaço seguro.
2. **Commit**: Faça suas mudanças.
3. **Push**: Envie para a nuvem.
4. **Pull Request**: "Ei time, vejam o que eu fiz!"
5. **Review**: Discussão, correções, elogios.
6. **Merge**: O Grande Momento. Entra na base oficial.

---

## Code Review: Por que fazer?

- **Qualidade**: 4 olhos veem mais que 2.
- **Conhecimento**: Juniors aprendem com Seniors (e vice-versa).
- **Consistência**: O código fica com "a cara do time", não de uma pessoa só.

---

## O Merge no GitHub

- Não é via linha de comando.
- É um botão verde "Merge pull request".
- Opções:
  - **Merge Commit**: Mantém toda a história (recomendado).
  - **Squash**: Resume tudo em 1 commit (bom para limpeza).
  - **Rebase**: Lineariza a história (avançado).

---

## E depois?

- O GitHub está atualizado.
- Mas seu computador NÂO!
- Sempre lembre de: `git checkout main` e `git pull`.
