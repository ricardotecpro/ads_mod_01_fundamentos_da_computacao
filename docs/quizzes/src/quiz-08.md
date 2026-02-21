# 📦 Quiz 08: Representação de Dados

Teste seus conhecimentos sobre como o computador representa números negativos, textos, símbolos e emojis internamente.

1. No método de "Sinal e Magnitude", o bit mais à esquerda (MSB) indica:
    - [ ] O valor decimal
    - [x] O sinal (0 para positivo, 1 para negativo)
    - [ ] A paridade da rede
    - [ ] O fim do arquivo
    *feedback: É a forma mais simples de sinalização, mas gera o problema do "zero negativo" (-0).*

2. Qual o padrão moderno mais utilizado para representar números negativos em computadores?
    - [ ] Decimal Simples
    - [ ] Sinal e Valor
    - [x] Complemento de 2
    - [ ] Binário Sem Sinal
    *feedback: O Complemento de 2 permite que a CPU use o mesmo circuito de soma para fazer subtrações.*

3. Qual o primeiro passo para converter um número positivo em seu equivalente negativo no Complemento de 2?
    - [ ] Somar 10
    - [ ] Multiplicar por -1
    - [x] Inverter todos os bits (0 vira 1, 1 vira 0)
    - [ ] Dividir por 2
    *feedback: Esta inversão é chamada de Complemento de 1.*

4. Após inverter os bits no Complemento de 2, qual a operação obrigatória seguinte?
    - [ ] Inverter novamente
    - [x] Somar 1 ao resultado
    - [ ] Subtrair 1
    - [ ] Deslocar os bits para a direita
    *feedback: Somar 1 corrige o deslocamento e elimina a existência de dois zeros.*

5. Qual a grande vantagem matemática de usar o Complemento de 2 nas CPUs?
    - [ ] É mais fácil de ler para humanos
    - [x] Permite realizar subtrações usando o mesmo circuito da soma
    - [ ] Usa menos bits que o decimal
    - [ ] Suporta números muito maiores
    *feedback: Isso simplifica imensamente o hardware do processador.*

6. O padrão ASCII original utilizava quantos bits por caractere?
    - [ ] 1 bit
    - [x] 7 ou 8 bits
    - [ ] 16 bits
    - [ ] 32 bits
    *feedback: O ASCII era limitado a 128 (ou 256) caracteres, focado na língua inglesa.*

7. Na tabela ASCII, a letra 'A' maiúscula é representada pelo valor decimal:
    - [ ] 1
    - [ ] 10
    - [x] 65
    - [ ] 97
    *feedback: 65 é o ponto de partida do alfabeto maiúsculo no padrão ASCII.*

8. Qual o nome do padrão universal que suporta caracteres de todos os idiomas e Emojis?
    - [ ] Extended ASCII
    - [ ] Latin-1
    - [x] Unicode (UTF-8)
    - [ ] BCD
    *feedback: Unicode visa mapear todos os símbolos da humanidade para números binários.*

9. Por que o UTF-8 é considerado uma codificação "eficiente"?
    - [ ] Porque só usa 0 e 1
    - [x] Porque usa largura variável (1 byte para caracteres comuns, mais para símbolos raros)
    - [ ] Porque comprime os arquivos automaticamente
    - [ ] Porque é proprietário da Microsoft
    *feedback: Ele é compatível com ASCII (1 byte) e expande conforme a necessidade.*

10. Se um número de 8 bits em Complemento de 2 é `1111 1111`, qual seu valor decimal?
    - [ ] 255
    - [ ] 127
    - [x] -1
    - [ ] -127
    *feedback: Em Complemento de 2, todos os bits em 1 representam o valor -1.*
