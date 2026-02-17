---
layout: aula
title: Aula 13 – Imagens Digitais e Compressão
date: 2026-02-16
quiz: quiz-13
exercicios: exercicio-13
projeto: projeto-13
slides: slides-13.html
---

## 🎯 Objetivos de Aprendizagem

* Entender como imagens são representadas (Pixels, RGB).
* Diferenciar imagem Vetorial de Bitmap (Raster).
* Compreender compactação (Lossy vs. Lossless).

## 📘 Conteúdo

### Bitmap vs. Vetorial

* **Bitmap (Raster)**: Formada por uma grade de pixels.
  - Vantagem: Riqueza de detalhes (Fotos).
  - Desvantagem: Perde qualidade ao ampliar (fica "pixelada").
  - Formatos: JPG, PNG, GIF, BMP.

* **Vetorial**: Formada por cálculos matemáticos (linhas, curvas, formas).
  - Vantagem: Não perde qualidade ao ampliar (Infinito zoom). Leve.
  - Desvantagem: Difícil representar fotos realistas.
  - Formatos: SVG, AI, CDR.

### Cores (RGB)
Cada pixel em uma tela é formado por 3 subpixels: **R**ed (Vermelho), **G**reen (Verde) e **B**lue (Azul). Variando a intensidade de cada um (0-255), formamos mais de 16 milhões de cores.

### Compressão

* **Lossless (Sem perda)**: Reduz o tamanho sem perder nenhum dado. (Ex: PNG, ZIP). A imagem original é reconstruída perfeitamente.
* **Lossy (Com perda)**: Descarta dados "menos importantes" que o olho humano não percebe bem, para reduzir muito o tamanho. (Ex: JPG, MP3). A imagem original nunca é recuperada 100%.

---
[Próxima Aula]({{ site.baseurl }}/aulas/aula-14)
