# **Classificação das Linguagens de Programação**  

As linguagens de programação podem ser classificadas por sua sintaxe, paradigma e finalidade. Aqui estão os principais grupos:

---

## **1️⃣ Linguagens Baseadas na Sintaxe**  

### **1.1 - Linguagens que usam `{}` e `;` (Estilo C-like)**  
Essas linguagens delimitam blocos de código com `{}` e geralmente finalizam comandos com `;`.  

#### **Exemplos e Código**  

✔ **C**  
```c
#include <stdio.h>
int main() {
    printf("Hello, World!\n");
    return 0;
}
```

✔ **C++**  
```cpp
#include <iostream>
int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

✔ **Java**  
```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

✔ **C#**  
```csharp
using System;
class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}
```

✔ **Go**  
```go
package main
import "fmt"
func main() {
    fmt.Println("Hello, World!")
}
```

✔ **Rust**  
```rust
fn main() {
    println!("Hello, World!");
}
```

✔ **Dart**  
```dart
void main() {
    print("Hello, World!");
}
```

✔ **JavaScript**  
```js
console.log("Hello, World!");
```

✔ **TypeScript**  
```ts
let message: string = "Hello, World!";
console.log(message);
```

✔ **Kotlin**  
```kotlin
fun main() {
    println("Hello, World!")
}
```

✔ **Swift** *(permite `;`, mas não é obrigatório)*  
```swift
print("Hello, World!")
```

✔ **PHP**  
```php
<?php
echo "Hello, World!";
?>
```

✔ **Objective-C**  
```objc
#import <stdio.h>
int main() {
    printf("Hello, World!\n");
    return 0;
}
```

✔ **Crystal**  
```crystal
puts "Hello, World!"
```

✔ **Perl**  
```perl
print "Hello, World!\n";
```

---

### **1.2 - Linguagens que usam indentação em vez de `{}`**
Essas linguagens utilizam indentação para definir blocos de código, eliminando `{}` e `;`.  

#### **Exemplos e Código**  

✔ **Python**  
```python
def main():
    print("Hello, World!")
main()
```

✔ **Ruby**  
```ruby
puts "Hello, World!"
```

✔ **Elixir**  
```elixir
IO.puts("Hello, World!")
```

✔ **Haskell**  
```haskell
main = putStrLn "Hello, World!"
```

✔ **F#**  
```fsharp
printfn "Hello, World!"
```

✔ **Prolog**  
```prolog
hello :- write('Hello, World!'), nl.
```

✔ **Erlang**  
```erlang
-module(hello).
-export([start/0]).
start() -> io:format("Hello, World!~n").
```

✔ **R**  
```r
print("Hello, World!")
```

✔ **Lua**  
```lua
print("Hello, World!")
```

✔ **Pascal**  
```pascal
program Hello;
begin
    writeln('Hello, World!');
end.
```

✔ **Shell Script (Bash, Zsh)**  
```sh
echo "Hello, World!"
```

✔ **PowerShell**  
```powershell
Write-Output "Hello, World!"
```

✔ **VisualG**  
```portugol
algoritmo "OlaMundo"
inicio
    escreva("Hello, World!")
fimalgoritmo
```

✔ **Portugol Studio**  
```portugol
escreva("Hello, World!")
```

---

### **1.3 - Linguagens que usam palavras-chave em vez de `{}` ou indentação**
Essas linguagens usam palavras-chave como `begin` e `end` para estruturar blocos de código.  

#### **Exemplos e Código**  

✔ **Basic (Primeiros PCs, com GOTO)**  
```basic
10 PRINT "Hello, World!"
20 GOTO 10
```

✔ **COBOL**  
```cobol
IDENTIFICATION DIVISION.
PROGRAM-ID. HelloWorld.
PROCEDURE DIVISION.
    DISPLAY "Hello, World!".
    STOP RUN.
```

✔ **SQL** *(usada para bancos de dados, baseada em comandos declarativos)*  
```sql
SELECT 'Hello, World!';
```

✔ **Ada**  
```ada
with Ada.Text_IO;
procedure Hello is
begin
    Ada.Text_IO.Put_Line("Hello, World!");
end Hello;
```

✔ **Modula-2**  
```modula2
MODULE Hello;
FROM STextIO IMPORT WriteString, WriteLn;
BEGIN
    WriteString("Hello, World!");
    WriteLn;
END Hello.
```

✔ **XML** *(Linguagem de marcação para estruturação de dados)*  
```xml
<?xml version="1.0" encoding="UTF-8"?>
<message>Hello, World!</message>
```

---

## **2️⃣ Famílias de Linguagens Baseadas no Paradigma**

### **2.1 - Linguagens Imperativas (Procedurais)**
Baseadas em instruções sequenciais e mutação de estado.  
✔ C, Pascal, Fortran, COBOL, Ada  

### **2.2 - Linguagens Orientadas a Objetos (OO)**
Baseadas no conceito de classes e objetos.  
✔ Java, C++, C#, Python, Ruby, Kotlin, Swift, Objective-C, Crystal, Perl  

### **2.3 - Linguagens Funcionais**
Baseadas em funções matemáticas puras e imutabilidade.  
✔ Haskell, Lisp, Clojure, F#, Scala, Elixir, Erlang, OCaml  

### **2.4 - Linguagens Lógicas**
Baseadas em regras e inferência lógica.  
✔ Prolog, Datalog, Mercury  

### **2.5 - Linguagens Declarativas**
O programador define **o que** deve ser feito, e não **como** fazer.  
✔ SQL, HTML, CSS, XML, XSLT  

---

## **3️⃣ Linguagens por Aplicação**

### **3.1 - Desenvolvimento Web**
✔ JavaScript, TypeScript, PHP, Ruby on Rails, HTML, CSS, XML, SQL, Crystal, Perl  

### **3.2 - Desenvolvimento Mobile**
✔ Swift, Kotlin, Dart (Flutter), Java  

### **3.3 - Ciência de Dados e IA**
✔ Python, R, Julia, MATLAB  

### **3.4 - Automação e Scripting**
✔ Shell Script (Bash, Zsh), PowerShell, Lua, Python, Perl  

### **3.5 - Inteligência Artificial**
✔ Python, Lisp, Prolog, Julia, R  

---
🚀

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
