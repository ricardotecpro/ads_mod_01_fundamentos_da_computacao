# Quiz 07 - Introdução

--8<-- "assets/quiz.html"

<div class="quiz-container">
  <div class="quiz-question">1. 1. Na soma binária, qual o resultado da operação `1 + 1`?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">2</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 0 (e vai 1 para a próxima coluna)">0 (e vai 1 para a próxima coluna)</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">1</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">11
    *feedback: $1_{2} + 1_{2} = 10_{2}$ (dois em decimal). O 0 fica e o 1 "vai um" (carry).*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">2. Qual o resultado da soma de três bits `1 + 1 + 1` (considerando um vai-um da coluna anterior)?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">1</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">0 (e vai 1)</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 1 (e vai 1 para a próxima coluna)">1 (e vai 1 para a próxima coluna)</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">11
    *feedback: $1+1+1 = 3$ em decimal, que é $11$ em binário. O 1 fica e o 1 "vai um".*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">3. O termo técnico para o "vai-um" em operações de soma é:</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Borrow</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Overflow</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Carry Out">Carry Out</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Bit Shift
    *feedback: Carry Out é o transporte do excesso para a casa de maior peso.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">4. Qual o resultado da soma binária `101 (5)` + `011 (3)`?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">111</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 1000 (8)">1000 (8)</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">1011</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">1111
    *feedback: $1+1=0(v1)$; $0+1+1=0(v1)$; $1+0+1=0(v1)$; Resultado: 1000.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">5. Ao somar `111` + `001`, qual o resultado binário?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">112</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">110</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 1000">1000</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">1001
    *feedback: Sete mais um é oito. 1000 em binário.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">6. O que acontece quando o resultado de uma soma excede o número de bits que o sistema pode armazenar?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">O computador desliga</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Ocorre um Overflow (Transbordamento)">Ocorre um Overflow (Transbordamento)</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">O número é arredondado para cima</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">O valor se torna negativo automaticamente
    *feedback: Overflow ocorre quando o bit extra de carry não tem onde ser guardado.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">7. Por que um Overflow pode ser perigoso em software?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Ele queima o processador</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Ele apaga o disco rígido</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Ele faz o sistema operar com valores errados, podendo causar falhas graves">Ele faz o sistema operar com valores errados, podendo causar falhas graves</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Ele diminui a velocidade da internet
    *feedback: Valores incorretos podem causar bugs críticos em sistemas financeiros ou de controle.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">8. Na subtração binária, o que fazemos quando temos a operação `0 - 1`?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">O resultado é sempre 0</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">O resultado é -1</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Pedimos um "Borrow" (Empréstimo) da casa à esquerda">Pedimos um "Borrow" (Empréstimo) da casa à esquerda</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Invertemos a ordem dos números
    *feedback: O empréstimo (borrow) da casa vizinha vale 2 na base atual.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">9. Qual o resultado de `1010` - `0001`?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">1011</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 1001">1001</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">1000</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">0111
    *feedback: 10 - 1 = 9. O correspondente binário de 9 é 1001.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">10. Todo número binário que termina em `0` somado a `1` resultará em um número que termina em:</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">0</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 1">1</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">10</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Depende dos outros bits
    *feedback: $0 + 1 = 1$ sem gerar carry na primeira coluna.*</div>
  <div class="quiz-feedback"></div>
</div>

