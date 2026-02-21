# Quiz 06 - Introdução

--8<-- "assets/quiz.html"

<div class="quiz-container">
  <div class="quiz-question">1. Qual a regra fundamental para converter binário em hexadecimal diretamente?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Agrupar os bits de 3 em 3</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Agrupar os bits de 4 em 4">Agrupar os bits de 4 em 4</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Somar todos os bits e dividir por 16</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Multiplicar cada bit por 16
    *feedback: Como $2^4 = 16$, cada grupo de 4 bits (Nibble) corresponde a um único dígito hexadecimal.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">2. O termo técnico para um grupo de 4 bits é:</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Byte</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Bitset</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Nibble">Nibble</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Octeto
    *feedback: Um nibble é a metade de um byte e a unidade básica do hexadecimal.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">3. Ao converter o binário `1101` para hexadecimal, qual o resultado?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">A</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">B</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">C</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! D
    *feedback: $1101$ em binário é $8+4+1 = 13$, que em hexadecimal é a letra D.*">D
    *feedback: $1101$ em binário é $8+4+1 = 13$, que em hexadecimal é a letra D.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">4. Qual o equivalente hexadecimal para o binário `1010 1111`?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">A0</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">1015</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! AF">AF</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">BF
    *feedback: $1010 = 10 (A)$ e $1111 = 15 (F)$. Portanto, AF.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">5. Por qual lado devemos começar o agrupamento de 4 bits ao converter um binário longo?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Pela esquerda (MSB)</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Pela direita (LSB)">Pela direita (LSB)</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Pelo meio</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Tanto faz
    *feedback: Sempre começamos pelo bit de menor peso (direita) para garantir o alinhamento correto das potências.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">6. Se o último grupo de bits à esquerda for incompleto (ex: apenas `10`), o que devemos fazer?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Descartar esses bits</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Somar 1 ao resultado</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! Completar com zeros à esquerda até formar 4 bits (`0010`)">Completar com zeros à esquerda até formar 4 bits (`0010`)</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Deixar como está
    *feedback: Adicionar zeros à esquerda não altera o valor do número, mas ajuda na conversão correta.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">7. Para converter o dígito hexadecimal `7` para binário usando 4 bits, o resultado é:</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">111</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 0111">0111</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">1110</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">0007
    *feedback: O zero à esquerda é fundamental para manter a estrutura de 4 bits do nibble.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">8. Qual a representação binária do dígito hexadecimal `E`?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">1100</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">1011</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 1110">1110</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">1111
    *feedback: E é 14, que em binário é $8 + 4 + 2 + 0$, ou seja, 1110.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">9. Quantos dígitos hexadecimais são necessários para representar um valor de 16 bits?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">2</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! 4">4</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">8</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">16
    *feedback: $16 \text{ bits} / 4 \text{ bits por dígito} = 4$ dígitos hexadecimais.*</div>
  <div class="quiz-feedback"></div>
</div>

<div class="quiz-container">
  <div class="quiz-question">10. Qual dessas aplicações utiliza o Hexadecimal para resumir endereços de 128 bits?</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">IPv4</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Endereços de e-mail</div>
  <div class="quiz-option" data-correct="true" data-feedback="✅ Correto! IPv6">IPv6</div>
  <div class="quiz-option" data-correct="false" data-feedback="Incorreto. Tente novamente.">Números de telefone
    *feedback: O IPv6 usa hexadecimal para tornar a leitura de seus 128 bits muito menos cansativa para os humanos.*</div>
  <div class="quiz-feedback"></div>
</div>

