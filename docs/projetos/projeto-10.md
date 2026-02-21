# 🛠️ Projeto 10: Auditor de Tabelas Verdade

Aprofunde sua capacidade de análise lógica construindo mapas completos de possibilidades para circuitos eletrônicos e regras de software.

## 📝 Contexto
Antes de um engenheiro construir um chip ou um programador escrever um sistema complexo de filtros, eles usam Tabelas Verdade para garantir que não existam "pontas soltas". Uma tabela verdade é a prova definitiva de como a lógica se comportará em 100% das situações.

## 🎯 Objetivo
Construir a tabela verdade para um sistema de controle de luzes de um estádio, onde a luz só acende sob condições rígidas de economia de energia.

## 📋 Requisitos
1. **O Cenário**: O refletor (S) só deve ligar se:
    - **A:** For noite (1 = Sim).
    - **B:** Houver movimento no campo (1 = Sim).
2. **A Condição Extra**: Para economizar energia, se houver **Sol forte (C)**, o refletor nunca deve ligar, mesmo se houver movimento.
3. **Desenvolvimento**:
    - Calcule quantas linhas sua tabela terá (2 entradas: A e B, ou 3 entradas: A, B e C?).
    - Construa a tabela verdade completa.
    - Identifique se existe alguma combinação onde o resultado seja inesperado ou perigoso.

## 🚚 Entrega
Crie uma "Planilha de Validação Lógica" contendo:
- A definição das variáveis.
- A tabela verdade desenhada (pode usar o formato Markdown ou tabela simples).
- Uma conclusão sobre qual sensor (A, B ou C) tem o maior "poder" de decisão no final do circuito.

---
[:material-book-open-variant: Ver Aula 10](../aulas/aula-10.md){ .md-button }
[:material-dumbbell: Praticar Exercícios](../exercicios/exercicio-10.md){ .md-button }
