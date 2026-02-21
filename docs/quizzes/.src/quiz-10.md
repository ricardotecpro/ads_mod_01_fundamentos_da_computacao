# 📊 Quiz 10: Tabelas Verdade

Teste sua habilidade em mapear todas as possibilidades lógicas e dominar os operadores compostos.

1. Uma Tabela Verdade serve para:
    - [ ] Listar o preço de peças de computador
    - [x] Mapear todos os valores de saída possíveis para todas as combinações de entrada
    - [ ] Criar gráficos de desempenho da CPU
    - [ ] Armazenar senhas de usuários
    *feedback: Ela é uma ferramenta exaustiva que prova o comportamento de uma expressão lógica.*

2. Quantas linhas terá a tabela verdade de um sistema com 3 variáveis de entrada (A, B e C)?
    - [ ] 3
    - [ ] 6
    - [x] 8
    - [ ] 9
    *feedback: O número de linhas é dado por $2^n$, onde $n$ é o número de variáveis ($2^3 = 8$).*

3. Se um sistema possui 4 sensores (variáveis), qual o total de combinações possíveis em sua tabela verdade?
    - [ ] 8
    - [ ] 12
    - [x] 16
    - [ ] 32
    *feedback: $2^4 = 16$. A cada nova variável, o número de linhas dobra.*

4. Qual o comportamento do operador **XOR** (OU Exclusivo)?
    - [ ] Saída 1 apenas se houver pelo menos um 1
    - [ ] Saída 1 apenas se todos forem 1
    - [x] Saída 1 apenas se as entradas forem DIFERENTES
    - [ ] Saída 1 o tempo todo
    *feedback: O XOR resulta em 1 para (1,0) ou (0,1), e 0 para (0,0) ou (1,1).*

5. Qual o resultado de `1 XOR 1`?
    - [ ] 1
    - [x] 0
    - [ ] Verdadeiro
    - [ ] 2
    *feedback: Como as entradas são iguais, o OU Exclusivo exclui essa possibilidade, resultando em Falso (0).*

6. O operador **NAND** é a negação de qual operação?
    - [ ] OR
    - [x] AND
    - [ ] XOR
    - [ ] NOT
    *feedback: NAND = NOT AND. Ele inverte o resultado de uma porta E.*

7. Qual o comportamento do operador **NOR**?
    - [ ] Resulta em 1 se qualquer entrada for 1
    - [x] Resulta em 1 APENAS se todas as entradas forem 0
    - [ ] Resulta em 1 APENAS se todas as entradas forem 1
    - [ ] É idêntico ao OR
    *feedback: O NOR (Non-OR) é o oposto do OU; ele só aprova quando tudo é falso.*

8. Quando todos os resultados de uma tabela verdade são **Verdadeiro** (1), independentemente das entradas, chamamos isso de:
    - [ ] Contradição
    - [ ] Falácia
    - [x] Tautologia
    - [ ] Bug
    *feedback: Uma tautologia indica que a expressão é sempre verdadeira por definição lógica.*

9. Por que as portas **NAND** e **NOR** são chamadas de "Lógica Universal"?
    - [ ] Porque funcionam em qualquer planeta
    - [ ] Porque são as mais baratas do mercado
    - [x] Porque qualquer outra função lógica (AND, OR, NOT) pode ser construída usando apenas elas
    - [ ] Porque suportam voltagens mais altas
    *feedback: Isso permite que fábricas de chips produzam apenas um tipo de portão lógico para criar CPUs inteiras.*

10. Se em uma expressão temos `NOT (A OR B)`, qual porta lógica substitui essa expressão inteira?
    - [ ] NAND
    - [x] NOR
    - [ ] XOR
    - [ ] AND
    *feedback: A negação de um OU é exatamente a função NOR.*
