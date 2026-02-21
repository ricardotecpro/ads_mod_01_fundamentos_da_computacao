# Quiz 09 - Introdução

--8<-- "assets/quiz.html"

<div class="quiz-container">
  <div class="quiz-question">1. Quem foi o matemático que criou o sistema de lógica que hoje leva seu nome e é a base da computação?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Alan Turing</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">John von Neumann</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! George Boole">George Boole</div>
  <div class="quiz-option" data-correct="false" data-feedback="George Boole publicou em 1854 as leis do pensamento que hoje regem a lógica digital.*">Blaise Pascal</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">2. No contexto da lógica booleana, o valor binário `0` é equivalente a:</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Verdadeiro</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Falso">Falso</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Positivo</div>
  <div class="quiz-option" data-correct="false" data-feedback="O 0 representa a ausência de sinal, ou o estado logico Falso (False).*">Indefinido</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">3. Qual a função principal do operador **NOT** (NÃO)?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Somar dois bits</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Multiplicar o valor por zero</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Inverter o estado lógico da entrada">Inverter o estado lógico da entrada</div>
  <div class="quiz-option" data-correct="false" data-feedback="Se entra Verdadeiro, sai Falso. Se entra Falso, sai Verdadeiro.*">Comparar se dois valores são iguais</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">4. Qual operador lógico só resulta em **Verdadeiro** se **TODAS** as suas entradas forem verdadeiras?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">OR (OU)</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! AND (E)">AND (E)</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">XOR (OU Exclusivo)</div>
  <div class="quiz-option" data-correct="false" data-feedback="O AND funciona como uma condição acumulativa e obrigatória.*">NOT (NÃO)</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">5. O operador **OR** (OU) resulta em Verdadeiro quando:</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Todas as entradas são falsas</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Apenas a primeira entrada é verdadeira</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Pelo menos uma das entradas é verdadeira">Pelo menos uma das entradas é verdadeira</div>
  <div class="quiz-option" data-correct="false" data-feedback="O OR é inclusivo; basta uma condição ser aceita para o resultado ser positivo.*">As entradas são diferentes</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">6. Qual o resultado da expressão lógica `1 AND 0`?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">1</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 0">0</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">2</div>
  <div class="quiz-option" data-correct="false" data-feedback="Na lógica AND, o zero "anula" o resultado, tornando-o falso.*">Verdadeiro</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">7. Qual o resultado da expressão lógica `1 OR 0`?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">0</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 1">1</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Falso</div>
  <div class="quiz-option" data-correct="false" data-feedback="Como o OR exige apenas uma entrada verdadeira, o 1 garante o resultado 1.*">10</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">8. Na ausência de parênteses, qual a ordem correta de prioridade (hierarquia) dos operadores?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">AND > OR > NOT</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">OR > AND > NOT</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! NOT > AND > OR">NOT > AND > OR</div>
  <div class="quiz-option" data-correct="false" data-feedback="Resolvemos primeiro a inversão, depois a conjunção e por fim a disjunção.*">A ordem não importa em lógica</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">9. Em uma analogia elétrica, qual operador pode ser representado por dois interruptores ligados em **SÉRIE** (um após o outro)?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">OR</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! AND">AND</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">NOT</div>
  <div class="quiz-option" data-correct="false" data-feedback="Para a lâmpada acender, o interruptor A **E** o interruptor B precisam estar fechados.*">XOR</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">10. Qual o resultado final da expressão `NOT (NOT 1)`?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">0</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 1">1</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Falso</div>
  <div class="quiz-option" data-correct="false" data-feedback="A dupla negação anula a si mesma, retornando ao valor original.*">Indefinido</div>
  <div class="quiz-feedback"></div>
</div>

