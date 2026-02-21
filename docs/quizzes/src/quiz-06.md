# 🚀 Quiz 06: Conversão Binário Hexadecimal

Avalie sua velocidade e precisão na técnica de conversão direta entre as bases mais importantes da computação moderna.

1. Qual a regra fundamental para converter binário em hexadecimal diretamente?
    - [ ] Agrupar os bits de 3 em 3
    - [x] Agrupar os bits de 4 em 4
    - [ ] Somar todos os bits e dividir por 16
    - [ ] Multiplicar cada bit por 16
    *feedback: Como $2^4 = 16$, cada grupo de 4 bits (Nibble) corresponde a um único dígito hexadecimal.*

2. O termo técnico para um grupo de 4 bits é:
    - [ ] Byte
    - [ ] Bitset
    - [x] Nibble
    - [ ] Octeto
    *feedback: Um nibble é a metade de um byte e a unidade básica do hexadecimal.*

3. Ao converter o binário `1101` para hexadecimal, qual o resultado?
    - [ ] A
    - [ ] B
    - [ ] C
    - [x] D
    *feedback: $1101$ em binário é $8+4+1 = 13$, que em hexadecimal é a letra D.*

4. Qual o equivalente hexadecimal para o binário `1010 1111`?
    - [ ] A0
    - [ ] 1015
    - [x] AF
    - [ ] BF
    *feedback: $1010 = 10 (A)$ e $1111 = 15 (F)$. Portanto, AF.*

5. Por qual lado devemos começar o agrupamento de 4 bits ao converter um binário longo?
    - [ ] Pela esquerda (MSB)
    - [x] Pela direita (LSB)
    - [ ] Pelo meio
    - [ ] Tanto faz
    *feedback: Sempre começamos pelo bit de menor peso (direita) para garantir o alinhamento correto das potências.*

6. Se o último grupo de bits à esquerda for incompleto (ex: apenas `10`), o que devemos fazer?
    - [ ] Descartar esses bits
    - [ ] Somar 1 ao resultado
    - [x] Completar com zeros à esquerda até formar 4 bits (`0010`)
    - [ ] Deixar como está
    *feedback: Adicionar zeros à esquerda não altera o valor do número, mas ajuda na conversão correta.*

7. Para converter o dígito hexadecimal `7` para binário usando 4 bits, o resultado é:
    - [ ] 111
    - [x] 0111
    - [ ] 1110
    - [ ] 0007
    *feedback: O zero à esquerda é fundamental para manter a estrutura de 4 bits do nibble.*

8. Qual a representação binária do dígito hexadecimal `E`?
    - [ ] 1100
    - [ ] 1011
    - [x] 1110
    - [ ] 1111
    *feedback: E é 14, que em binário é $8 + 4 + 2 + 0$, ou seja, 1110.*

9. Quantos dígitos hexadecimais são necessários para representar um valor de 16 bits?
    - [ ] 2
    - [x] 4
    - [ ] 8
    - [ ] 16
    *feedback: $16 \text{ bits} / 4 \text{ bits por dígito} = 4$ dígitos hexadecimais.*

10. Qual dessas aplicações utiliza o Hexadecimal para resumir endereços de 128 bits?
    - [ ] IPv4
    - [ ] Endereços de e-mail
    - [x] IPv6
    - [ ] Números de telefone
    *feedback: O IPv6 usa hexadecimal para tornar a leitura de seus 128 bits muito menos cansativa para os humanos.*
