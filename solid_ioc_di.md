# SOLID, Inversão de Controle e Injeção de Dependência


A inversão de controle, a injeção de dependência e os princípios SOLID são conceitos fundamentais na engenharia de software, especialmente em aplicações bem estruturadas e escaláveis.

---

✅ 𝗟𝗜𝗡𝗞𝗦 𝗖𝗜𝗧𝗔𝗗𝗢𝗦 𝗡𝗢 𝗩𝗜𝗗𝗘𝗢 ▸ The S.O.L.I.D Principles in Pictures:   [![](https://www.gstatic.com/youtube/img/watch/social_media/medium_1x.png) / the-s-o-l-i-d-principles-in-pictures](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqazhUWi12RU52SzUzeUxXeHNpS2QyWUh4aGp1UXxBQ3Jtc0tuamdWUm80dC1IMGRDd2JweUh3QjZVWmVIcFBndzN0RXVITEU2UFRhZklPRDNSWDQzWGJ1d1QyZDRQUEs4c3R4ekJfUkl6RzFoYVhZOTYyclFZUWVGM3VkSUN4VWhISHlXcF9McmJIU3FKOTdRRVhVcw&q=https%3A%2F%2Fmedium.com%2Fbackticks-tildes%2Fthe-s-o-l-i-d-principles-in-pictures-b34ce2f1e898&v=6SfrO3D4dHM)

https://youtu.be/6SfrO3D4dHM?si=6qC9_C0yzf37SRZM

https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898



## **Inversão de Controle (IoC)**

A **Inversão de Controle** (IoC - _Inversion of Control_) é um princípio de design de software que altera o fluxo tradicional do controle do programa. Em vez do código principal instanciar e gerenciar diretamente os componentes, esse controle é delegado a um framework ou contêiner.

### **Exemplo sem IoC**

No código abaixo, a classe `PedidoService` cria diretamente uma instância de `EmailNotificador`, gerando um forte acoplamento.

```java
public class PedidoService {
    private EmailNotificador notificador;

    public PedidoService() {
        this.notificador = new EmailNotificador(); // Acoplamento direto
    }

    public void processarPedido() {
        // Lógica do pedido
        notificador.enviar("Pedido processado!");
    }
}
```

### **Exemplo com IoC**

Aqui, a instância do notificador é passada de fora, reduzindo o acoplamento:

```java
public class PedidoService {
    private Notificador notificador;

    public PedidoService(Notificador notificador) {
        this.notificador = notificador;
    }

    public void processarPedido() {
        // Lógica do pedido
        notificador.enviar("Pedido processado!");
    }
}
```

Agora, a classe `PedidoService` não precisa saber qual implementação do notificador será usada. Isso permite maior flexibilidade.

---

## **Injeção de Dependência (DI - Dependency Injection)**

A **Injeção de Dependência** é uma forma de aplicar a inversão de controle. Em vez de a própria classe instanciar suas dependências, elas são fornecidas externamente (por um framework ou via construtor, método ou atributo).

### **Formas de Injeção de Dependência**

1. **Por Construtor (recomendada)**
    
    ```java
    public class PedidoService {
        private Notificador notificador;
    
        public PedidoService(Notificador notificador) {
            this.notificador = notificador;
        }
    }
    ```
    
2. **Por Método Setter**
    
    ```java
    public class PedidoService {
        private Notificador notificador;
    
        public void setNotificador(Notificador notificador) {
            this.notificador = notificador;
        }
    }
    ```
    
3. **Por Injeção Direta com Frameworks (Spring, CDI, etc.)**
    
    ```java
    @Service
    public class PedidoService {
        @Autowired
        private Notificador notificador;
    }
    ```
    

Com a DI, podemos trocar facilmente implementações sem modificar a classe `PedidoService`.

---

## **Princípios SOLID**

Os princípios **SOLID** são um conjunto de boas práticas para tornar o código mais modular, reutilizável e fácil de manter.

### **1. S - Single Responsibility Principle (SRP) - Princípio da Responsabilidade Única**

Uma classe deve ter **apenas um motivo para mudar**, ou seja, apenas uma responsabilidade.  
✅ **Correto:**

```java
public class RelatorioService {
    public void gerarRelatorio() { /* lógica */ }
}

public class EnvioEmailService {
    public void enviarEmail(String mensagem) { /* lógica */ }
}
```

❌ **Errado (classe faz mais de uma coisa)**

```java
public class RelatorioService {
    public void gerarRelatorio() { /* lógica */ }
    public void enviarEmail(String mensagem) { /* lógica */ } // Violação do SRP
}
```

---

### **2. O - Open/Closed Principle (OCP) - Princípio Aberto/Fechado**

Uma classe deve estar **aberta para extensão, mas fechada para modificação**.

✅ **Uso de abstração para permitir extensão sem alterar código existente:**

```java
public interface Desconto {
    double calcular(double valor);
}

public class DescontoNatal implements Desconto {
    public double calcular(double valor) {
        return valor * 0.90;
    }
}
```

❌ **Errado (método precisa ser alterado sempre que adicionamos um novo desconto)**

```java
public class PedidoService {
    public double calcularDesconto(double valor, String tipo) {
        if (tipo.equals("Natal")) return valor * 0.90;
        if (tipo.equals("Aniversário")) return valor * 0.85;
        return valor;
    }
}
```

---

### **3. L - Liskov Substitution Principle (LSP) - Princípio da Substituição de Liskov**

Uma subclasse deve poder substituir a superclasse **sem alterar o comportamento esperado**.

✅ **Exemplo correto:**

```java
public interface Forma {
    double calcularArea();
}

public class Quadrado implements Forma {
    private double lado;
    public double calcularArea() {
        return lado * lado;
    }
}

public class Circulo implements Forma {
    private double raio;
    public double calcularArea() {
        return Math.PI * raio * raio;
    }
}
```

Agora podemos usar qualquer `Forma` sem quebrar o código.

---

### **4. I - Interface Segregation Principle (ISP) - Princípio da Segregação de Interfaces**

Interfaces grandes devem ser divididas em **múltiplas interfaces específicas**.

❌ **Errado (uma interface obriga classes a implementar métodos desnecessários)**

```java
public interface Trabalhador {
    void trabalhar();
    void comer();
}

public class Robo implements Trabalhador {
    public void trabalhar() { /* ok */ }
    public void comer() { throw new UnsupportedOperationException(); } // Violação do ISP
}
```

✅ **Correto (interfaces específicas para cada comportamento)**

```java
public interface Trabalhador {
    void trabalhar();
}

public interface Alimentacao {
    void comer();
}

public class Humano implements Trabalhador, Alimentacao {
    public void trabalhar() { /* ok */ }
    public void comer() { /* ok */ }
}

public class Robo implements Trabalhador {
    public void trabalhar() { /* ok */ }
}
```

---

### **5. D - Dependency Inversion Principle (DIP) - Princípio da Inversão de Dependência**

Módulos de alto nível **não devem depender** de módulos de baixo nível, ambos devem depender de **abstrações**.

❌ **Errado (acoplamento forte entre classes)**

```java
public class PedidoService {
    private EmailNotificador notificador = new EmailNotificador(); // Violação do DIP
}
```

✅ **Correto (uso de abstração para reduzir acoplamento)**

```java
public class PedidoService {
    private Notificador notificador;

    public PedidoService(Notificador notificador) {
        this.notificador = notificador;
    }
}
```

Agora podemos trocar `EmailNotificador` por `SMSNotificador` sem alterar `PedidoService`.

---

## **Conclusão**

- **IoC** muda o fluxo de controle, permitindo maior flexibilidade.
- **DI** permite injetar dependências externas, reduzindo o acoplamento.
- **SOLID** melhora a modularidade, manutenibilidade e reutilização do código.

Esses conceitos são essenciais para criar **aplicações escaláveis, flexíveis e fáceis de manter**! 🚀

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
