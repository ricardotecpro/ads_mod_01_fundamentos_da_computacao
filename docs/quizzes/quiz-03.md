# Quiz 03 - Introdução

--8<-- "assets/quiz.html"

<div class="quiz-container">
  <div class="quiz-question">1. No sistema binário, qual o "peso" (valor) da posição mais à direita (índice 0)?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">0</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">2</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 1 ($2^0$)">1 ($2^0$)</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">10
    *feedback: Qualquer número elevado a zero é 1. Portanto, o bit da direita sempre vale 1 se for '1'.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">2. Se um número binário tem o bit '1' na terceira posição (da direita para a esquerda, índice 2), quanto esse bit contribui para a soma decimal?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">2</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 4 ($2^2$)">4 ($2^2$)</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">8</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">10
    *feedback: Os pesos seguem as potências de 2: 1, 2, 4, 8, 16...*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">3. Qual o procedimento correto para converter um número binário em decimal?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Somar todos os dígitos (0s e 1s)</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Multiplicar o número por 10</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Somar os pesos das posições onde o bit é igual a 1">Somar os pesos das posições onde o bit é igual a 1</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Dividir o número por 2 sucessivamente
    *feedback: Ignoramos os pesos onde o bit é 0 e somamos apenas os pesos onde o bit é 1.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">4. Qual o valor decimal do binário `111`?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">3</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">5</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 7">7</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">8
    *feedback: $2^2(4) + 2^1(2) + 2^0(1) = 4 + 2 + 1 = 7$.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">5. O número binário `1010` corresponde a qual valor decimal?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">8</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 10">10</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">12</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">14
    *feedback: $2^3(8) + 2^1(2) = 8 + 2 = 10$.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">6. Qual o valor decimal do binário `10000`?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">1</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">8</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 16">16</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">32
    *feedback: O bit '1' está na quinta posição (índice 4), e $2^4 = 16$.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">7. Qual o maior número decimal que pode ser representado com exatamente 4 bits (`1111`)?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">4</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">8</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">16</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 15
    *feedback: $8 + 4 + 2 + 1 = 15$. Uma regra prática é $2^n - 1$.*">15
    *feedback: $8 + 4 + 2 + 1 = 15$. Uma regra prática é $2^n - 1$.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">8. Se dobrarmos o número de bits (de 4 para 8), o valor máximo representável:</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Dobra</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Fica igual</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Aumenta exponencialmente (de 15 para 255)">Aumenta exponencialmente (de 15 para 255)</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Aumenta apenas 4 unidades
    *feedback: Cada bit extra dobra a capacidade de representação anterior.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">9. Qual o valor decimal de um byte completo com todos os bits em 1 (`1111 1111`)?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">100</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 255">255</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">256</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">512
    *feedback: $2^8 - 1 = 255$. É o valor máximo de um octeto.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">10. Se um número binário termina em 0 (ex: `10110`), podemos afirmar que ele é:</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Ímpar</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Par">Par</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Negativo</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Maior que 100
    *feedback: Como o peso da última casa é 1, se ele for 0, a soma de todos os outros pesos (que são pares) resultará sempre em um número par.*</div>
  <div class="quiz-feedback"></div>
</div>

