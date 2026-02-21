# 🧮 Quiz 07: Aritmética Binária

Teste seus conhecimentos sobre como a CPU realiza operações matemáticas fundamentais usando apenas 0 e 1.

1. Na soma binária, qual o resultado da operação `1 + 1`?
    - [ ] 2
    - [x] 0 (e vai 1 para a próxima coluna)
    - [ ] 1
    - [ ] 11
    *feedback: $1_{2} + 1_{2} = 10_{2}$ (dois em decimal). O 0 fica e o 1 "vai um" (carry).*

2. Qual o resultado da soma de três bits `1 + 1 + 1` (considerando um vai-um da coluna anterior)?
    - [ ] 1
    - [ ] 0 (e vai 1)
    - [x] 1 (e vai 1 para a próxima coluna)
    - [ ] 11
    *feedback: $1+1+1 = 3$ em decimal, que é $11$ em binário. O 1 fica e o 1 "vai um".*

3. O termo técnico para o "vai-um" em operações de soma é:
    - [ ] Borrow
    - [ ] Overflow
    - [x] Carry Out
    - [ ] Bit Shift
    *feedback: Carry Out é o transporte do excesso para a casa de maior peso.*

4. Qual o resultado da soma binária `101 (5)` + `011 (3)`?
    - [ ] 111
    - [x] 1000 (8)
    - [ ] 1011
    - [ ] 1111
    *feedback: $1+1=0(v1)$; $0+1+1=0(v1)$; $1+0+1=0(v1)$; Resultado: 1000.*

5. Ao somar `111` + `001`, qual o resultado binário?
    - [ ] 112
    - [ ] 110
    - [x] 1000
    - [ ] 1001
    *feedback: Sete mais um é oito. 1000 em binário.*

6. O que acontece quando o resultado de uma soma excede o número de bits que o sistema pode armazenar?
    - [ ] O computador desliga
    - [x] Ocorre um Overflow (Transbordamento)
    - [ ] O número é arredondado para cima
    - [ ] O valor se torna negativo automaticamente
    *feedback: Overflow ocorre quando o bit extra de carry não tem onde ser guardado.*

7. Por que um Overflow pode ser perigoso em software?
    - [ ] Ele queima o processador
    - [ ] Ele apaga o disco rígido
    - [x] Ele faz o sistema operar com valores errados, podendo causar falhas graves
    - [ ] Ele diminui a velocidade da internet
    *feedback: Valores incorretos podem causar bugs críticos em sistemas financeiros ou de controle.*

8. Na subtração binária, o que fazemos quando temos a operação `0 - 1`?
    - [ ] O resultado é sempre 0
    - [ ] O resultado é -1
    - [x] Pedimos um "Borrow" (Empréstimo) da casa à esquerda
    - [ ] Invertemos a ordem dos números
    *feedback: O empréstimo (borrow) da casa vizinha vale 2 na base atual.*

9. Qual o resultado de `1010` - `0001`?
    - [ ] 1011
    - [x] 1001
    - [ ] 1000
    - [ ] 0111
    *feedback: 10 - 1 = 9. O correspondente binário de 9 é 1001.*

10. Todo número binário que termina em `0` somado a `1` resultará em um número que termina em:
    - [ ] 0
    - [x] 1
    - [ ] 10
    - [ ] Depende dos outros bits
    *feedback: $0 + 1 = 1$ sem gerar carry na primeira coluna.*
