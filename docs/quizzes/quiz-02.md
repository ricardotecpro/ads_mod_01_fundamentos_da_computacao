# Quiz 02 - Introdução

--8<-- "assets/quiz.html"

<div class="quiz-container">
  <div class="quiz-question">02. 1. Qual o método universal mais utilizado para converter números decimais em binários manuamente?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Múltiplicação sucessiva por 10</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Divisões sucessivas pela base 2">Divisões sucessivas pela base 2</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Soma de números aleatórios</div>
  <div class="quiz-option" data-correct="false" data-feedback="Dividimos o número por 2 repetidamente até chegarmos ao quociente zero.*">Extração de raiz quadrada</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">2. Ao realizar a divisão sucessiva, o que constitui os "bits" do número binário resultante?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Os quocientes da divisão</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Apenas o último resultado</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Os restos de cada divisão (0 ou 1)">Os restos de cada divisão (0 ou 1)</div>
  <div class="quiz-option" data-correct="false" data-feedback="Cada resto de divisão por 2 será um bit (0 ou 1) do seu número final.*">A soma de todos os quocientes</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">3. Qual a ordem correta para ler os restos e formar o número binário?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Do primeiro resto para o último (cima para baixo)</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Do último resto para o primeiro (baixo para cima)">Do último resto para o primeiro (baixo para cima)</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Apenas os restos pares</div>
  <div class="quiz-option" data-correct="false" data-feedback="O último resto obtido é o bit mais significativo e deve vir primeiro na representação.*">Em qualquer ordem, não faz diferença</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">4. O que significa a sigla LSB?</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Least Significant Bit (Bit Menos Significativo)">Least Significant Bit (Bit Menos Significativo)</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Last System Binary</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Logical Super Bit</div>
  <div class="quiz-option" data-correct="false" data-feedback="O LSB é o bit que tem o menor peso ($2^0$) e fica na extrema direita.*">Low Signal Binary</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">5. Qual o valor binário do número decimal 10?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">1001</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">1111</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 1010">1010</div>
  <div class="quiz-option" data-correct="false" data-feedback="$10/2=5(0)$, $5/2=2(1)$, $2/2=1(0)$, $1/2=0(1)$. Lendo ao contrário: 1010.*">1100</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">6. Se um número decimal é ÍMPAR, o que podemos afirmar sobre seu equivalente binário?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Começa com o bit 0</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Tem um número ímpar de bits</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Termina obrigatoriamente com o bit 1 (LSB = 1)">Termina obrigatoriamente com o bit 1 (LSB = 1)</div>
  <div class="quiz-option" data-correct="false" data-feedback="Números ímpares sempre deixam resto 1 na primeira divisão por 2.*">É sempre maior que 100</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">7. Quantos bits são necessários, no mínimo, para representar o número decimal 7?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">2 bits</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 3 bits">3 bits</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">4 bits</div>
  <div class="quiz-option" data-correct="false" data-feedback="$7$ em binário é $111$, ocupando 3 bits.*">7 bits</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">8. No método das divisões, quando paramos de dividir?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Quando o resto for 1</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Quando o resto for 0</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Quando o quociente da divisão for igual a 0">Quando o quociente da divisão for igual a 0</div>
  <div class="quiz-option" data-correct="false" data-feedback="O quociente zero indica que não há mais unidades para distribuir na base 2.*">Após 8 divisões exatas</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">9. Qual o binário resultante da conversão do número 13?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">1111</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 1101">1101</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">1011</div>
  <div class="quiz-option" data-correct="false" data-feedback="$13/2=6(1)$, $6/2=3(0)$, $3/2=1(1)$, $1/2=0(1)$. Resultado: 1101.*">1001</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">10. O bit MSB (*Most Significant Bit*) de um número binário fica localizado em qual posição?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Sempre no meio</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Na extrema direita</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Na extrema esquerda">Na extrema esquerda</div>
  <div class="quiz-option" data-correct="false" data-feedback="O MSB é o bit de maior peso e fica à esquerda do número.*">Depende do valor do número</div>
  <div class="quiz-feedback"></div>
</div>

