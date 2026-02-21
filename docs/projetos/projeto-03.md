# 🛠️ Projeto 03: Decifrando Códigos de Máquina

Aprenda a ler o que o processador "vê" convertendo sequências de 8 bits (Bytes) em valores decimais compreensíveis para humanos.

## 📝 Contexto
Dentro de um computador, tudo são bytes. Uma letra, um comando de processador ou uma parte de um endereço de rede são representados por um conjunto de 8 bits. Saber ler um byte é o primeiro passo para o "baixo nível".

## 🎯 Objetivo
Traduzir três sequências binárias de 8 bits para decimal, identificando os pesos de cada posição.

## 📋 Requisitos
1. **Tradução de Bytes**: Converta os seguintes códigos binários encontrados em uma "memória fictícia":
    - **A:** `00001111`
    - **B:** `10101010`
    - **C:** `11001100`
2. **Método dos Pesos**: Para cada conversão, monte a tabela de pesos ($2^7, 2^6, 2^5, 2^4, 2^3, 2^2, 2^1, 2^0$) e mostre apenas os que você somou.
3. **Explicação**: Explique o que acontece com o valor decimal quando deslocamos o bit '1' uma posição para a esquerda (ex: de `00000001` para `00000010`).

## 🚚 Entrega
Crie um relatório simples contendo:
- O passo a passo das 3 conversões.
- Os resultados decimais finais.
- A resposta sobre o deslocamento de bits (o efeito de "dobrar" o valor).

---
[:material-book-open-variant: Ver Aula 03](aula-03.md){ .md-button }
[:material-dumbbell: Praticar Exercícios](exercicio-03){ .md-button }
