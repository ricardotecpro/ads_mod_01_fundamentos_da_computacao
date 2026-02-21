# 🔢 Quiz 02: Conversão de Decimal para Binário

Teste sua habilidade em transformar números decimais em binário usando os métodos aprendidos na Aula 02.

1. Qual o método universal mais utilizado para converter números decimais em binários manuamente?
    - [ ] Múltiplicação sucessiva por 10
    - [x] Divisões sucessivas pela base 2
    - [ ] Soma de números aleatórios
    - [ ] Extração de raiz quadrada
    *feedback: Dividimos o número por 2 repetidamente até chegarmos ao quociente zero.*

2. Ao realizar a divisão sucessiva, o que constitui os "bits" do número binário resultante?
    - [ ] Os quocientes da divisão
    - [ ] Apenas o último resultado
    - [x] Os restos de cada divisão (0 ou 1)
    - [ ] A soma de todos os quocientes
    *feedback: Cada resto de divisão por 2 será um bit (0 ou 1) do seu número final.*

3. Qual a ordem correta para ler os restos e formar o número binário?
    - [ ] Do primeiro resto para o último (cima para baixo)
    - [x] Do último resto para o primeiro (baixo para cima)
    - [ ] Apenas os restos pares
    - [ ] Em qualquer ordem, não faz diferença
    *feedback: O último resto obtido é o bit mais significativo e deve vir primeiro na representação.*

4. O que significa a sigla LSB?
    - [x] Least Significant Bit (Bit Menos Significativo)
    - [ ] Last System Binary
    - [ ] Logical Super Bit
    - [ ] Low Signal Binary
    *feedback: O LSB é o bit que tem o menor peso ($2^0$) e fica na extrema direita.*

5. Qual o valor binário do número decimal 10?
    - [ ] 1001
    - [ ] 1111
    - [x] 1010
    - [ ] 1100
    *feedback: $10/2=5(0)$, $5/2=2(1)$, $2/2=1(0)$, $1/2=0(1)$. Lendo ao contrário: 1010.*

6. Se um número decimal é ÍMPAR, o que podemos afirmar sobre seu equivalente binário?
    - [ ] Começa com o bit 0
    - [ ] Tem um número ímpar de bits
    - [x] Termina obrigatoriamente com o bit 1 (LSB = 1)
    - [ ] É sempre maior que 100
    *feedback: Números ímpares sempre deixam resto 1 na primeira divisão por 2.*

7. Quantos bits são necessários, no mínimo, para representar o número decimal 7?
    - [ ] 2 bits
    - [x] 3 bits
    - [ ] 4 bits
    - [ ] 7 bits
    *feedback: $7$ em binário é $111$, ocupando 3 bits.*

8. No método das divisões, quando paramos de dividir?
    - [ ] Quando o resto for 1
    - [ ] Quando o resto for 0
    - [x] Quando o quociente da divisão for igual a 0
    - [ ] Após 8 divisões exatas
    *feedback: O quociente zero indica que não há mais unidades para distribuir na base 2.*

9. Qual o binário resultante da conversão do número 13?
    - [ ] 1111
    - [x] 1101
    - [ ] 1011
    - [ ] 1001
    *feedback: $13/2=6(1)$, $6/2=3(0)$, $3/2=1(1)$, $1/2=0(1)$. Resultado: 1101.*

10. O bit MSB (*Most Significant Bit*) de um número binário fica localizado em qual posição?
    - [ ] Sempre no meio
    - [ ] Na extrema direita
    - [x] Na extrema esquerda
    - [ ] Depende do valor do número
    *feedback: O MSB é o bit de maior peso e fica à esquerda do número.*
