# Roteiro de Slides - Aula 04

---

## O Poder do "E se?"

- E se eu quiser adicionar um botão, mas ele quebrar o site todo?
- E se eu quiser testar uma cor nova sem perder a antiga?
- Solução: **Branches** (Ramificações).

---

## O Conceito de Branches

- Branches são linhas do tempo paralelas.
- `main` (ou `master`): É a linha do tempo oficial, "sagrada". Onde o código sempre funciona.
- `feature`: Linhas do tempo alternativas para experimentos.
- Você pode criar, destruir e fundir essas linhas do tempo.

---

## Comandos Essenciais

1. **Listar**: `git branch` (Onde estou?).
2. **Criar**: `git branch nome-da-branch`.
3. **Trocar**: `git switch nome-da-branch`.
4. **Fundir**: `git merge nome-da-branch`.

---

## Demonstração Visual

1. Estou na `main`. Tenho 2 arquivos.
2. Crio a branch `teste`.
3. Mudo para `teste`. Crio mais 10 arquivos.
4. Volto para `main`.
5. **Mágica**: Os 10 arquivos somem da pasta (mas estão salvos no Git).
6. Faço `merge`.
7. **Mágica 2**: Os 10 arquivos aparecem na `main`.

---

## Boas Práticas

- **Nunca** commite direto na `main` se estiver trabalhando em equipe.
- Crie branches com nomes descritivos:
  - `feature-login`
  - `fix-botao-quebrado`
  - `update-readme`
- Terminou? Faça Merge e apague a branch antiga.
