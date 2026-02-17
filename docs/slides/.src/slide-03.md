# Roteiro de Slides - Aula 03

---

## O Fluxo de Trabalho do Git

- O Git não salva tudo automaticamente (como o Google Drive).
- Você precisa ser **Intencional**.
- Existem 3 "lugares" onde seu arquivo pode estar.

---

## As 3 Áreas Mágicas

1. **Working Directory**: Onde você trabalha. (Seus arquivos na pasta).
2. **Staging Area**: Onde você prepara. (O palco antes do show).
3. **Repository**: Onde você grava. (O álbum de fotos definitivo).

---

## Comandos: init e status

- `git init`: "Git, comece a olhar para esta pasta agora."
- `git status`: "Git, como estão as coisas?"
  - Vermelho: Modificado/Novo (não preparado).
  - Verde: Preparado (pronto para commit).

---

## Comandos: add e commit

- `git add arquivo.txt`: "Git, põe esse arquivo no palco." (Leva para Staging).
- `git commit -m "mensagem"`: "Git, tira a foto agora!" (Grava no Repositório).
- **Regra de Ouro**: A mensagem deve explicar O QUE foi feito e POR QUE.

---

## O Histórico: git log

- Uma lista cronológica de tudo o que aconteceu.
- Contém:
  - Hash (ID único).
  - Autor.
  - Data.
  - Mensagem.

---

## Resumo Visual

`Arquivo Novo` -> `Git Add` -> `Staging` -> `Git Commit` -> `Repositório`
