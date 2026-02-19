# Roteiro de Slides - Aula 05

---

## O Temido "Conflict"

- Acontece nas melhores famílias (e equipes).
- Não é um erro grave, é apenas uma **pergunta do Git**:
  - "Ei, vocês dois mexeram na mesma linha. Qual eu devo manter?"

---

## Anatomia do Conflito

```text
<<<<<<< HEAD
Eu gosto de café.
=======
Eu gosto de chá.
>>>>>>> nova-branch
```
- **HEAD (Topo)**: Onde você estava (branch atual).
- **Separator (===)**: A fronteira.
- **Botton (>>>)**: O que está chegando (branch vindo do merge).

---

## Como Resolver?

1. **Mantenha a Calma**.
2. Abra o arquivo em um editor de texto.
3. Escolha: Cafe? Chá? Ou "Eu gosto de café e chá"?
4. **Apague os marcadores**. O arquivo final deve ser código limpo.
5. Salve.
6. `git add arquivo` (Diz que está pronto).
7. `git commit` (Finaliza).

---

## Como Evitar?

- Commits pequenos e frequentes.
- Puxe as mudanças dos colegas (`git pull`) com frequência.
- Evite arquivos gigantes ("God Classes").
- Comunique-se: "Ei, vou mexer no Header, ok?"

---

## Resumo

Conflito não é bug. É o Git protegendo seu código de ser sobrescrito sem querer.
