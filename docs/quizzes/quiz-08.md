# Quiz 08 - Introdução

--8<-- "assets/quiz.html"

<div class="quiz-container">
  <div class="quiz-question">1. No método de "Sinal e Magnitude", o bit mais à esquerda (MSB) indica:</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">O valor decimal</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! O sinal (0 para positivo, 1 para negativo)">O sinal (0 para positivo, 1 para negativo)</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">A paridade da rede</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">O fim do arquivo
    *feedback: É a forma mais simples de sinalização, mas gera o problema do "zero negativo" (-0).*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">2. Qual o padrão moderno mais utilizado para representar números negativos em computadores?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Decimal Simples</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Sinal e Valor</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Complemento de 2">Complemento de 2</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Binário Sem Sinal
    *feedback: O Complemento de 2 permite que a CPU use o mesmo circuito de soma para fazer subtrações.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">3. Qual o primeiro passo para converter um número positivo em seu equivalente negativo no Complemento de 2?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Somar 10</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Multiplicar por -1</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Inverter todos os bits (0 vira 1, 1 vira 0)">Inverter todos os bits (0 vira 1, 1 vira 0)</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Dividir por 2
    *feedback: Esta inversão é chamada de Complemento de 1.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">4. Após inverter os bits no Complemento de 2, qual a operação obrigatória seguinte?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Inverter novamente</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Somar 1 ao resultado">Somar 1 ao resultado</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Subtrair 1</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Deslocar os bits para a direita
    *feedback: Somar 1 corrige o deslocamento e elimina a existência de dois zeros.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">5. Qual a grande vantagem matemática de usar o Complemento de 2 nas CPUs?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">É mais fácil de ler para humanos</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Permite realizar subtrações usando o mesmo circuito da soma">Permite realizar subtrações usando o mesmo circuito da soma</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Usa menos bits que o decimal</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Suporta números muito maiores
    *feedback: Isso simplifica imensamente o hardware do processador.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">6. O padrão ASCII original utilizava quantos bits por caractere?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">1 bit</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 7 ou 8 bits">7 ou 8 bits</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">16 bits</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">32 bits
    *feedback: O ASCII era limitado a 128 (ou 256) caracteres, focado na língua inglesa.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">7. Na tabela ASCII, a letra 'A' maiúscula é representada pelo valor decimal:</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">1</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">10</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 65">65</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">97
    *feedback: 65 é o ponto de partida do alfabeto maiúsculo no padrão ASCII.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">8. Qual o nome do padrão universal que suporta caracteres de todos os idiomas e Emojis?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Extended ASCII</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Latin-1</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Unicode (UTF-8)">Unicode (UTF-8)</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">BCD
    *feedback: Unicode visa mapear todos os símbolos da humanidade para números binários.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">9. Por que o UTF-8 é considerado uma codificação "eficiente"?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Porque só usa 0 e 1</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Porque usa largura variável (1 byte para caracteres comuns, mais para símbolos raros)">Porque usa largura variável (1 byte para caracteres comuns, mais para símbolos raros)</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Porque comprime os arquivos automaticamente</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Porque é proprietário da Microsoft
    *feedback: Ele é compatível com ASCII (1 byte) e expande conforme a necessidade.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">10. Se um número de 8 bits em Complemento de 2 é `1111 1111`, qual seu valor decimal?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">255</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">127</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! -1">-1</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">-127
    *feedback: Em Complemento de 2, todos os bits em 1 representam o valor -1.*</div>
  <div class="quiz-feedback"></div>
</div>

