# 💻 Aula 01: Introdução à Computação e Bases Numéricas
## Fundamentos da Computação

---

## 🎯 Objetivos de Hoje

- Compreender o que é computação { .fragment }
- Diferenciar Dado de Informação { .fragment }
- Entender a necessidade de diferentes bases numéricas { .fragment }
- Conhecer os sistemas: Decimal, Binário, Octal e Hexadecimal { .fragment }

---

## 🧩 O que é Computação?

"O processamento automático de informação..." { .fragment }

- **Não é apenas sobre computadores** { .fragment }
- É sobre **resolver problemas** através de algoritmos { .fragment }
- Envolve hardware (corpo) e software (mente) { .fragment }

--

### Dado vs Informação

- **Dado**: "42" (Cru, isolado) { .fragment }
- **Informação**: "A temperatura hoje é 42°C" (Dado com contexto) { .fragment }
- Computação transforma **dados** em **informação** útil! { .fragment }

---

## ⚡ Como o Computador "Pensa"?

No nível mais físico, tudo é **eletricidade**.

- **Ligado** (Tensão Alta) -> 1 { .fragment }
- **Desligado** (Tensão Baixa) -> 0 { .fragment }

Isso cria o **Sistema Binário**. { .fragment }

---

## 🔢 O Sistema Decimal (Base 10)

O que usamos no dia a dia.

- **Dígitos**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 { .fragment }
- **Posicional**: O valor depende de onde o dígito está. { .fragment }
- Exemplo: 157 { .fragment }
  - $1 \times 100 + 5 \times 10 + 7 \times 1$ { .fragment }

--

### Por que Base 10?

- Simples: temos 10 dedos! 🤚🤚 { .fragment }
- É uma convenção biológica que virou padrão matemático. { .fragment }

---

## 👾 O Sistema Binário (Base 2)

A linguagem nativa das máquinas.

- **Dígitos**: 0 e 1 { .fragment }
- Cada dígito binário é chamado de **BIT** (**B**inary Dig**it**) { .fragment }
- É a menor unidade de informação. { .fragment }

---

## 📦 Bit vs Byte

- **BIT**: 0 ou 1 { .fragment }
- **BYTE**: Grupo de 8 bits { .fragment }
  - Ex: `10101100` { .fragment }
- 1 Byte pode representar **256** valores diferentes (2^8). { .fragment }

--

### Unidades de Medida

- 1 **KB** (Kilobyte) ≈ 1.000 Bytes { .fragment }
- 1 **MB** (Megabyte) ≈ 1.000 KB { .fragment }
- 1 **GB** (Gigabyte) ≈ 1.000 MB { .fragment }
- 1 **TB** (Terabyte) ≈ 1.000 GB { .fragment }

---

## 🔴 O Sistema Octal (Base 8)

Usado historicamente em minicomputadores e permissões de arquivos (Linux).

- **Dígitos**: 0, 1, 2, 3, 4, 5, 6, 7 { .fragment }
- Útil porque **8 é uma potência de 2** ($2^3$). { .fragment }
- 1 dígito Octal representa exatamente **3 bits**. { .fragment }

---

## 🟣 O Sistema Hexadecimal (Base 16)

O preferido dos programadores para representar endereços de memória e cores.

- **Dígitos**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, **A, B, C, D, E, F** { .fragment }
- A = 10, B = 11, C = 12, D = 13, E = 14, F = 15 { .fragment }
- 1 dígito Hexadecimal representa exatamente **4 bits** (1 Nibble). { .fragment }

--

### Por que usar Hex?

- É muito mais "legível" que binário longo. { .fragment }
- Binário: `1111 1111` { .fragment }
- Hexadecimal: `FF` { .fragment }

---

## 📊 Comparação de Bases

| Decimal | Binário | Hex |
| :--- | :--- | :--- |
| 0 | 0000 | 0 |
| 5 | 0101 | 5 |
| 10 | 1010 | A |
| 15 | 1111 | F |

---

## ⚙️ A Lógica das Conversões

Para converter entre bases, usamos divisões sucessivas ou potências.

- **Decimal para Qualquer**: Divisões { .fragment }
- **Qualquer para Decimal**: Multiplicações por potências { .fragment }

---

## 📝 Resumo da Aula

1. Computação = Processamento de Informação { .fragment }
2. Computadores são binários por causa da física (0 e 1) { .fragment }
3. Bits formam Bytes { .fragment }
4. Octal e Hexadecimal facilitam a vida dos humanos { .fragment }

---

## 🚀 Próxima Aula...

**Conversão de Decimal para Binário!**

Vamos aprender o método das divisões sucessivas na prática. { .fragment }

---

## ❓ Dúvidas?

"A ciência da computação não trata de computadores tanto quanto a astronomia trata de telescópios."
— *Edsger W. Dijkstra*
