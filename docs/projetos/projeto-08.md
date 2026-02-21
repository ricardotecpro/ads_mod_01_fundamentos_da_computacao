# 🛠️ Projeto 08: Codificador de Mensagens Seguras

Aprofunde-se na alma dos dados e aprenda como o computador diferencia um número negativo de uma letra do alfabeto.

## 📝 Contexto
Tudo na computação é binário, mas o **significado** depende da codificação. Um `1111` pode ser o número 15, o número -1 (em complemento de 2) ou parte de um caractere em uma tabela de texto. Dominar a codificação é essencial para lidar com bancos de dados e sistemas de arquivos.

## 🎯 Objetivo
Representar valores negativos e decodificar uma palavra "escondida" usando as tabelas e técnicas de representação de dados.

## 📋 Requisitos
1. **O Desafio do Negativo**: Converta o número decimal **-7** para binário usando **4 bits** e a técnica do **Complemento de 2** (Inverter bits + somar 1).
2. **Decifrando o ASCII**: Você recebeu três bytes de uma mensagem secreta:
    - Byte 1: `01000001`
    - Byte 2: `01001001`
    - Byte 3: `01000100`
    - *Dica:* Converta cada um para decimal e procure o caractere correspondente na tabela ASCII.
3. **Análise de Caractere**: Pesquise qual seria a principal dificuldade de armazenar nomes com acentos (como "João") usando apenas o padrão ASCII original de 128 posições.

## 🚚 Entrega
Crie um "Mapa de Dados" contendo:
- O cálculo passo a passo do Complemento de 2 para o número -7.
- A tradução dos 3 bytes da mensagem secreta (A palavra resultante).
- Uma breve explicação sobre por que o padrão UTF-8 foi a solução para os problemas do ASCII.

---
[:material-book-open-variant: Ver Aula 08](aula-08.md){ .md-button }
[:material-dumbbell: Praticar Exercícios](exercicio-08){ .md-button }
