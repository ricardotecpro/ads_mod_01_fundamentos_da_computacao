# 🔢 Quiz 03: Conversão de Binário para Decimal

Teste seu domínio sobre como interpretar números binários e transformá-los em valores decimais usando o método dos pesos.

1. No sistema binário, qual o "peso" (valor) da posição mais à direita (índice 0)?
    - [ ] 0
    - [ ] 2
    - [x] 1 ($2^0$)
    - [ ] 10
    *feedback: Qualquer número elevado a zero é 1. Portanto, o bit da direita sempre vale 1 se for '1'.*

2. Se um número binário tem o bit '1' na terceira posição (da direita para a esquerda, índice 2), quanto esse bit contribui para a soma decimal?
    - [ ] 2
    - [x] 4 ($2^2$)
    - [ ] 8
    - [ ] 10
    *feedback: Os pesos seguem as potências de 2: 1, 2, 4, 8, 16...*

3. Qual o procedimento correto para converter um número binário em decimal?
    - [ ] Somar todos os dígitos (0s e 1s)
    - [ ] Multiplicar o número por 10
    - [x] Somar os pesos das posições onde o bit é igual a 1
    - [ ] Dividir o número por 2 sucessivamente
    *feedback: Ignoramos os pesos onde o bit é 0 e somamos apenas os pesos onde o bit é 1.*

4. Qual o valor decimal do binário `111`?
    - [ ] 3
    - [ ] 5
    - [x] 7
    - [ ] 8
    *feedback: $2^2(4) + 2^1(2) + 2^0(1) = 4 + 2 + 1 = 7$.*

5. O número binário `1010` corresponde a qual valor decimal?
    - [ ] 8
    - [x] 10
    - [ ] 12
    - [ ] 14
    *feedback: $2^3(8) + 2^1(2) = 8 + 2 = 10$.*

6. Qual o valor decimal do binário `10000`?
    - [ ] 1
    - [ ] 8
    - [x] 16
    - [ ] 32
    *feedback: O bit '1' está na quinta posição (índice 4), e $2^4 = 16$.*

7. Qual o maior número decimal que pode ser representado com exatamente 4 bits (`1111`)?
    - [ ] 4
    - [ ] 8
    - [ ] 16
    - [x] 15
    *feedback: $8 + 4 + 2 + 1 = 15$. Uma regra prática é $2^n - 1$.*

8. Se dobrarmos o número de bits (de 4 para 8), o valor máximo representável:
    - [ ] Dobra
    - [ ] Fica igual
    - [x] Aumenta exponencialmente (de 15 para 255)
    - [ ] Aumenta apenas 4 unidades
    *feedback: Cada bit extra dobra a capacidade de representação anterior.*

9. Qual o valor decimal de um byte completo com todos os bits em 1 (`1111 1111`)?
    - [ ] 100
    - [x] 255
    - [ ] 256
    - [ ] 512
    *feedback: $2^8 - 1 = 255$. É o valor máximo de um octeto.*

10. Se um número binário termina em 0 (ex: `10110`), podemos afirmar que ele é:
    - [ ] Ímpar
    - [x] Par
    - [ ] Negativo
    - [ ] Maior que 100
    *feedback: Como o peso da última casa é 1, se ele for 0, a soma de todos os outros pesos (que são pares) resultará sempre em um número par.*
