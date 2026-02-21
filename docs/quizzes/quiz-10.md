# Quiz 10 - Introdução

--8<-- "assets/quiz.html"

<div class="quiz-container">
  <div class="quiz-question">1. Uma Tabela Verdade serve para:</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Listar o preço de peças de computador</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Mapear todos os valores de saída possíveis para todas as combinações de entrada">Mapear todos os valores de saída possíveis para todas as combinações de entrada</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Criar gráficos de desempenho da CPU</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Armazenar senhas de usuários
    *feedback: Ela é uma ferramenta exaustiva que prova o comportamento de uma expressão lógica.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">2. Quantas linhas terá a tabela verdade de um sistema com 3 variáveis de entrada (A, B e C)?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">3</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">6</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 8">8</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">9
    *feedback: O número de linhas é dado por $2^n$, onde $n$ é o número de variáveis ($2^3 = 8$).*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">3. Se um sistema possui 4 sensores (variáveis), qual o total de combinações possíveis em sua tabela verdade?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">8</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">12</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 16">16</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">32
    *feedback: $2^4 = 16$. A cada nova variável, o número de linhas dobra.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">4. Qual o comportamento do operador **XOR** (OU Exclusivo)?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Saída 1 apenas se houver pelo menos um 1</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Saída 1 apenas se todos forem 1</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Saída 1 apenas se as entradas forem DIFERENTES">Saída 1 apenas se as entradas forem DIFERENTES</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Saída 1 o tempo todo
    *feedback: O XOR resulta em 1 para (1,0) ou (0,1), e 0 para (0,0) ou (1,1).*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">5. Qual o resultado de `1 XOR 1`?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">1</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 0">0</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Verdadeiro</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">2
    *feedback: Como as entradas são iguais, o OU Exclusivo exclui essa possibilidade, resultando em Falso (0).*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">6. O operador **NAND** é a negação de qual operação?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">OR</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! AND">AND</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">XOR</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">NOT
    *feedback: NAND = NOT AND. Ele inverte o resultado de uma porta E.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">7. Qual o comportamento do operador **NOR**?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Resulta em 1 se qualquer entrada for 1</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Resulta em 1 APENAS se todas as entradas forem 0">Resulta em 1 APENAS se todas as entradas forem 0</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Resulta em 1 APENAS se todas as entradas forem 1</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">É idêntico ao OR
    *feedback: O NOR (Non-OR) é o oposto do OU; ele só aprova quando tudo é falso.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">8. Quando todos os resultados de uma tabela verdade são **Verdadeiro** (1), independentemente das entradas, chamamos isso de:</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Contradição</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Falácia</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Tautologia">Tautologia</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Bug
    *feedback: Uma tautologia indica que a expressão é sempre verdadeira por definição lógica.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">9. Por que as portas **NAND** e **NOR** são chamadas de "Lógica Universal"?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Porque funcionam em qualquer planeta</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Porque são as mais baratas do mercado</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Porque qualquer outra função lógica (AND, OR, NOT) pode ser construída usando apenas elas">Porque qualquer outra função lógica (AND, OR, NOT) pode ser construída usando apenas elas</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Porque suportam voltagens mais altas
    *feedback: Isso permite que fábricas de chips produzam apenas um tipo de portão lógico para criar CPUs inteiras.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">10. Se em uma expressão temos `NOT (A OR B)`, qual porta lógica substitui essa expressão inteira?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">NAND</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! NOR">NOR</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">XOR</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">AND
    *feedback: A negação de um OU é exatamente a função NOR.*</div>
  <div class="quiz-feedback"></div>
</div>

