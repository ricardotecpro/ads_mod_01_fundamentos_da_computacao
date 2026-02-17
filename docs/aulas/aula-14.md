---
layout: aula
title: Aula 14 – Áudio Digital
date: 2026-02-16
quiz: quiz-14
exercicios: exercicio-14
projeto: projeto-14
slides: slides-14.html
---

## 🎯 Objetivos de Aprendizagem

* Entender como o som analógico vira digital (Amostragem).
* Conhecer formatos de áudio.

## 📘 Conteúdo

### Som: Analógico vs. Digital
O som é uma onda mecânica (analógica). Para o computador entender, precisamos digitalizá-lo.

1. **Amostragem (Sampling)**: Medir a altura da onda sonora milhares de vezes por segundo (Hertz).
   - CD Quality: 44.100 amostras por segundo (44.1 kHz).
2. **Quantização**: Atribuir um valor numérico (bits) para cada amostra.

### Formatos de Arquivo

* **WAV**: Áudio bruto (sem compressão). Qualidade máxima, arquivo gigante.
* **MP3**: Áudio comprimido (com perda - lossy). Remove frequências que o ouvido humano quase não escuta. Arquivo pequeno, boa qualidade.
* **FLAC**: Áudio comprimido (sem perda - lossless). Qualidade de CD, arquivo médio.
* **MIDI**: Não é áudio gravado! São instruções musicais (notas, duração, instrumento) para o computador tocar. Arquivo minúsculo.

---
[Próxima Aula]({{ site.baseurl }}/aulas/aula-15)
