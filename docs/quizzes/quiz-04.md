# Quiz 04 - Introdução

--8<-- "assets/quiz.html"

<div class="quiz-container">
  <div class="quiz-question">1. Qual a base numérica do sistema octal?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">2</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 8">8</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">10</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">16
    *feedback: "Octo" vem do latim para oito. O sistema octal usa 8 símbolos.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">2. Quais são os dígitos válidos no sistema octal?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">0 e 1</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">0 a 8</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 0 a 7">0 a 7</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">0 a 9
    *feedback: Em qualquer base $n$, os dígitos vão sempre de 0 até $n-1$.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">3. Qual a relação matemática fundamental entre a Base 2 (Binário) e a Base 8 (Octal)?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">$2 \times 4 = 8$</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">$2^2 = 8$</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! $2^3 = 8$">$2^3 = 8$</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">$8 = 2+2+2+2$
    *feedback: Como $2^3 = 8$, cada dígito octal pode ser representado por exatamente 3 bits.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">4. Para converter um binário longo para octal, devemos agrupar os bits de:</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">2 em 2</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 3 em 3">3 em 3</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">4 em 4</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">8 em 8
    *feedback: O agrupamento de 3 em 3 simplifica a conversão direta entre essas bases.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">5. O binário `110` corresponde a qual dígito octal?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">4</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">5</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 6">6</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">7
    *feedback: $1 \times 4 + 1 \times 2 + 0 \times 1 = 6$.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">6. Como representamos o número binário `101 011` em octal?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">43</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 53">53</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">51</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">83
    *feedback: $101 = 5$ e $011 = 3$. Portanto, 53.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">7. Em sistemas Linux, o comando `chmod 755` usa o sistema octal. O que o dígito '7' representa em termos de permissões?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Apenas Leitura</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Apenas Escrita</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Leitura, Escrita e Execução (4+2+1)">Leitura, Escrita e Execução (4+2+1)</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Nenhuma permissão
    *feedback: 7 é a soma de todos os bits de permissão (111 em binário).*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">8. Qual desses números é INVÁLIDO no sistema octal?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">107</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">777</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 192">192</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">50
    *feedback: O dígito '9' não existe na base 8.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">9. Ao separar bits para converter para octal, por onde devemos começar o agrupamento?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Pela esquerda (MSB)</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Pela direita (LSB)">Pela direita (LSB)</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Pelo meio</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Não importa
    *feedback: Começamos sempre pela direita para garantir que os bits de menor peso fiquem no grupo correto.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">10. Se um arquivo tem permissão `6` em octal, quais os bits binários correspondentes?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">101</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 110">110</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">011</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">111
    *feedback: $6 = 4 \text{ (Ler)} + 2 \text{ (Escrever)} + 0 \text{ (Executar)}$, o que dá 110.*</div>
  <div class="quiz-feedback"></div>
</div>

