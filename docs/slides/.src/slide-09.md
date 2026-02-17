# Roteiro de Slides - Aula 09

---

## Workflows: O Acordo de Cavalheiros

- Git é flexível demais. Isso pode ser perigoso.
- Um Workflow define **COMO** a equipe usa o Git.
- O mais popular hoje: **GitHub Flow**.

---

## As 6 Regras do GitHub Flow

1. **Main é Sagrada**: Nada quebrado entra lá.
2. **Branches**: Tudo acontece em branches novas.
3. **Commits**: Faça commits frequentes na sua branch.
4. **Pull Request**: Abra cedo para feedback.
5. **Review**: Alguém valida seu código.
6. **Deploy**: Mergear na main = Ir para o Ar.

---

## Git Flow (O "Antigo")

- Branches: `master`, `develop`, `feature/*`, `release/*`, `hotfix/*`.
- Complexo demais para a maioria dos projetos web modernos e CI/CD.
- Útil se você lança versões de software (v1.0, v2.0).

---

## Por que GitHub Flow?

- **Simplicidade**: Fácil de entender e ensinar.
- **Velocidade**: Favorece entregas rápidas e contínuas.
- **Foco**: Uma coisa de cada vez.

---

## Ciclo de Vida da Branch

Nasce da `main` -> Cresce com Commits -> Vira PR -> Volta para `main` (Merge) -> Morre (Delete).
