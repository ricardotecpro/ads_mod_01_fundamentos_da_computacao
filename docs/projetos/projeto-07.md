# 🛠️ Projeto 07: Simulador de Soma da CPU

Transforme-se em uma Unidade Lógica e Aritmética (ALU) e realize os cálculos fundamentais que ocorrem em cada ciclo de processamento.

## 📝 Contexto
Sempre que o computador faz uma conta simples de "1+1", ele está seguindo regras rígidas da aritmética binária. Entender o transporte (carry) e o limite de bits (overflow) é crucial para entender por que certos erros de sistema acontecem.

## 🎯 Objetivo
Realizar a soma de três pares de números binários, documentando o transporte de bits e prevendo transbordamentos.

## 📋 Requisitos
1. **Operações de Soma**: Realize as seguintes somas binárias:
    - **A:** `1010` (10) + `0101` (5)
    - **B:** `1110` (14) + `0011` (3)
2. **O Desafio do Overflow**: Imagine um sistema limitado a apenas **4 bits**.
    - Tente somar `1100` (12) + `0101` (5).
    - Qual o resultado binário de 5 bits obtido?
    - Se o sistema só guarda 4 bits, qual valor ele realmente exibirá para o usuário?
3. **Documentação**:
    - Mostre os bits de "vai-um" (carry) acima das colunas.
    - Indique claramente em qual operação ocorreu um **Overflow**.

## 🚚 Entrega
Crie uma "Folha de Teste da ALU" contendo:
- O passo a passo visual das 3 somas.
- O resultado decimal esperado vs o resultado binário obtido.
- Uma explicação sobre os perigos do Overflow em sistemas críticos (ex: foguetes ou sistemas financeiros).

---
[:material-book-open-variant: Ver Aula 07](aula-07.md){ .md-button }
[:material-dumbbell: Praticar Exercícios](exercicio-07){ .md-button }
