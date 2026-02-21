# 🛠️ Projeto 09: O Enigma da Lógica

Aprenda como o computador toma decisões inteligentes combinando condições simples para resolver problemas complexos.

## 📝 Contexto
Tudo o que um software faz – desde validar uma senha até detectar um rosto – depende da lógica booleana. Os operadores AND, OR e NOT são as ferramentas que permitem ao computador "pensar" e reagir a diferentes entradas de dados.

## 🎯 Objetivo
Projetar as condições lógicas para um sistema de segurança de um banco fictício, garantindo que o cofre só abra sob condições específicas.

## 📋 Requisitos
1. **O Cenário do Cofre**: Imagine que o cofre possui 3 sensores:
    - **A:** Chave física inserida (1 = Sim, 0 = Não)
    - **B:** Senha correta digitada (1 = Sim, 0 = Não)
    - **C:** Digital do gerente (1 = Sim, 0 = Não)
2. **Desenvolvimento da Lógica**: Escreva a expressão lógica (usando AND, OR e NOT) para que o cofre abra APENAS quando:
    - **Regra 1:** A Chave (A) esteja inserida **E** a Senha (B) esteja correta.
    - **Regra 2:** Se o Gerente (C) estiver presente, o cofre pode abrir com a Digital (C) **MESMO SE** a Senha (B) estiver errada (mas a chave A ainda é obrigatória).
3. **Teste de Mesa**: O que acontece se:
    - A=1, B=0, C=1? O cofre abre?
    - A=0, B=1, C=1? O cofre abre?

## 🚚 Entrega
Crie um "Esboço de Sistema Lógico" contendo:
- A expressão lógica final que você criou.
- O resultado dos dois testes de mesa realizados.
- Uma breve reflexão sobre por que a lógica é a base para evitar falhas de segurança.

---
[:material-book-open-variant: Ver Aula 09](../aulas/aula-09.md){ .md-button }
[:material-dumbbell: Praticar Exercícios](../exercicios/exercicio-09.md){ .md-button }
