# Linguagens que utilizam lógica formal para resolver problemas.

As linguagens de programação podem ser classificadas em **compiladas, interpretadas e híbridas**, dependendo de como o código-fonte é transformado em código executável. Aqui está a divisão:

---

## **1️⃣ Linguagens Compiladas**
🔹 O código-fonte é convertido diretamente em código de máquina antes da execução.  
🔹 Oferecem **melhor desempenho**, mas exigem um processo de compilação antes da execução.  

### **Exemplos de linguagens compiladas:**
✔ **C**  
✔ **C++**  
✔ **Rust**  
✔ **Go**  
✔ **Pascal**  
✔ **Fortran**  
✔ **Ada**  
✔ **Swift** (compilada no iOS, mas pode ter execução Just-in-Time em testes)  
✔ **Objective-C**  

---

## **2️⃣ Linguagens Interpretadas**
🔹 O código é executado linha por linha por um **interpretador**, sem necessidade de compilação prévia.  
🔹 São mais **flexíveis**, mas costumam ser **mais lentas** do que linguagens compiladas.  

### **Exemplos de linguagens interpretadas:**
✔ **Python**  
✔ **JavaScript**  
✔ **Ruby**  
✔ **Lua**  
✔ **R**  
✔ **Prolog**  
✔ **Shell Script (Bash, Zsh, etc.)**  
✔ **SQL**  
✔ **PHP** (na maioria dos casos, mas pode ser pré-compilado em algumas situações)  

---

## **3️⃣ Linguagens Híbridas (Compiladas + Interpretadas)**
🔹 **Têm um processo misto**, onde o código pode ser **compilado para um bytecode** intermediário e depois **interpretado** por uma máquina virtual (VM).  
🔹 Buscam equilibrar **desempenho** e **portabilidade**.  

### **Exemplos de linguagens híbridas:**
✔ **Java** → Compila para bytecode (JVM) e é interpretado ou Just-in-Time compilado.  
✔ **C#** → Compila para bytecode (IL - Intermediate Language) e roda na .NET Runtime.  
✔ **Dart** → Pode ser interpretado (Flutter) ou compilado para código nativo.  
✔ **Kotlin** → Pode ser compilado para JVM, JavaScript ou código nativo (Kotlin/Native).  
✔ **TypeScript** → Transpila para JavaScript antes da execução.  
✔ **PHP (em algumas versões)** → Pode usar caching de bytecode para melhorar o desempenho.  

---

## **Resumo da Classificação**
| Linguagem      | Tipo (Compilada, Interpretada, Híbrida) |
|---------------|--------------------------------|
| **C, C++**    | Compilada |
| **Rust, Go**  | Compilada |
| **Python**    | Interpretada |
| **JavaScript** | Interpretada |
| **Java, C#**  | Híbrida (Compilada para bytecode) |
| **Kotlin**    | Híbrida (JVM, JS ou Native) |
| **Dart**      | Híbrida (Flutter usa interpretação, mas pode ser compilado) |
| **Pascal**    | Compilada |
| **Lua, Ruby** | Interpretada |
| **Swift**     | Compilada (pode usar Just-in-Time) |
| **PHP**       | Interpretada (mas pode ter otimização de bytecode) |


Aqui está a classificação correta dessas linguagens em **compiladas, interpretadas ou híbridas**:

| **Linguagem**   | **Tipo**  |
|---------------|-------------------------------|
| **Haskell**   | Híbrida (compilada para bytecode ou interpretada) |
| **Elixir**    | Interpretada (roda na VM do Erlang - BEAM) |
| **Erlang**    | Interpretada (roda na BEAM VM) |
| **F#**        | Híbrida (compilada para IL - Intermediate Language no .NET) |
| **R**         | Interpretada |
| **Shell Script (Bash, Zsh, etc.)** | Interpretada |
| **Prolog**    | Interpretada (pode ter compilação Just-in-Time em algumas versões) |

### **Explicação detalhada**:
✔ **Haskell** pode ser interpretada (GHCi) ou compilada (GHC gera código otimizado para execução).  
✔ **Elixir e Erlang** rodam na máquina virtual BEAM, funcionando como linguagens interpretadas.  
✔ **F#** segue o modelo do .NET, sendo compilada para um bytecode intermediário e depois executada.  
✔ **R** é tradicionalmente interpretada, o que a torna flexível, mas pode ser otimizada em algumas implementações.  
✔ **Shell Script** (Bash, Zsh) é interpretado linha a linha pelo shell.  
✔ **Prolog** geralmente é interpretada, mas algumas implementações utilizam Just-in-Time Compilation (JIT).  

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
