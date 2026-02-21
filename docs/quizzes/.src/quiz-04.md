# 🎱 Quiz 04: Sistema Octal (Base 8)

Avalie seu conhecimento sobre o sistema octal e sua importância para a organização de bits e permissões de arquivos.

1. Qual a base numérica do sistema octal?
    - [ ] 2
    - [x] 8
    - [ ] 10
    - [ ] 16
    *feedback: "Octo" vem do latim para oito. O sistema octal usa 8 símbolos.*

2. Quais são os dígitos válidos no sistema octal?
    - [ ] 0 e 1
    - [ ] 0 a 8
    - [x] 0 a 7
    - [ ] 0 a 9
    *feedback: Em qualquer base $n$, os dígitos vão sempre de 0 até $n-1$.*

3. Qual a relação matemática fundamental entre a Base 2 (Binário) e a Base 8 (Octal)?
    - [ ] $2 \times 4 = 8$
    - [ ] $2^2 = 8$
    - [x] $2^3 = 8$
    - [ ] $8 = 2+2+2+2$
    *feedback: Como $2^3 = 8$, cada dígito octal pode ser representado por exatamente 3 bits.*

4. Para converter um binário longo para octal, devemos agrupar os bits de:
    - [ ] 2 em 2
    - [x] 3 em 3
    - [ ] 4 em 4
    - [ ] 8 em 8
    *feedback: O agrupamento de 3 em 3 simplifica a conversão direta entre essas bases.*

5. O binário `110` corresponde a qual dígito octal?
    - [ ] 4
    - [ ] 5
    - [x] 6
    - [ ] 7
    *feedback: $1 \times 4 + 1 \times 2 + 0 \times 1 = 6$.*

6. Como representamos o número binário `101 011` em octal?
    - [ ] 43
    - [x] 53
    - [ ] 51
    - [ ] 83
    *feedback: $101 = 5$ e $011 = 3$. Portanto, 53.*

7. Em sistemas Linux, o comando `chmod 755` usa o sistema octal. O que o dígito '7' representa em termos de permissões?
    - [ ] Apenas Leitura
    - [ ] Apenas Escrita
    - [x] Leitura, Escrita e Execução (4+2+1)
    - [ ] Nenhuma permissão
    *feedback: 7 é a soma de todos os bits de permissão (111 em binário).*

8. Qual desses números é INVÁLIDO no sistema octal?
    - [ ] 107
    - [ ] 777
    - [x] 192
    - [ ] 50
    *feedback: O dígito '9' não existe na base 8.*

9. Ao separar bits para converter para octal, por onde devemos começar o agrupamento?
    - [ ] Pela esquerda (MSB)
    - [x] Pela direita (LSB)
    - [ ] Pelo meio
    - [ ] Não importa
    *feedback: Começamos sempre pela direita para garantir que os bits de menor peso fiquem no grupo correto.*

10. Se um arquivo tem permissão `6` em octal, quais os bits binários correspondentes?
    - [ ] 101
    - [x] 110
    - [ ] 011
    - [ ] 111
    *feedback: $6 = 4 \text{ (Ler)} + 2 \text{ (Escrever)} + 0 \text{ (Executar)}$, o que dá 110.*
