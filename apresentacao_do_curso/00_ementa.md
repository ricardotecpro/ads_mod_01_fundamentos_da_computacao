# 📚 Guia Completo do Curso de Desenvolvimento de Software

Bem-vindo ao guia completo do curso de desenvolvimento de software\! Este documento detalha cada módulo do curso, oferecendo uma visão abrangente do conteúdo programático, enriquecido com conceitos complementares e exemplos práticos para facilitar seu aprendizado.

## 🚀 01 Lógica de Programação

**Conteúdo do PDF:** Introdução a programação, entrada, saída, atribuição, condicionais, loops, arrays, funções, projetos. [cite: 2]

**Conceitos Complementares:**

* **Algoritmos:** Sequência finita de passos bem definidos para resolver um problema. Antes de programar, é crucial pensar no algoritmo.
* **Pseudocódigo:** Uma forma de representar algoritmos usando uma linguagem simples e informal, que se assemelha à linguagem de programação, mas não segue uma sintaxe rígida. Facilita a transição do raciocínio lógico para o código.
* **Tipos de Dados:** Representações de diferentes tipos de informação que um programa pode manipular (ex: números inteiros, números de ponto flutuante, texto, booleanos).
* **Operadores:** Símbolos que executam operações sobre operandos (valores ou variáveis). Podem ser aritméticos (+, -, \*, /), relacionais (\>, \<, ==), lógicos (E, OU, NÃO).
* **Fluxogramas:** Representação gráfica de um algoritmo, utilizando símbolos padronizados para indicar diferentes tipos de instruções e o fluxo de controle.

**Exemplo Prático: Cálculo da Média de Notas Escolares**

Imagine que precisamos calcular a média de três notas de um aluno e verificar se ele foi aprovado (média \>= 7.0).

**Pseudocódigo:**

```
INICIO
  LER nota1
  LER nota2
  LER nota3

  media = (nota1 + nota2 + nota3) / 3

  ESCREVER "A média do aluno é: ", media

  SE media >= 7.0 ENTÃO
    ESCREVER "Aluno Aprovado!"
  SENÃO
    ESCREVER "Aluno Reprovado."
  FIM_SE
FIM
```

**Exemplo em Java (com dados modificados e traduções):**

```java
package curso;

import java.util.Locale;
import java.util.Scanner;

public class CalculadoraMedia {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US); // Configura o Locale para entrada de dados com ponto decimal
        Scanner teclado = new Scanner(System.in);

        double notaTrabalho;
        double notaProva;
        double notaParticipacao;

        System.out.println("--- Cálculo de Média Semestral ---");
        System.out.print("Digite a nota do Trabalho (0 a 10): ");
        notaTrabalho = teclado.nextDouble(); // Modificado de nota1 para notaTrabalho

        System.out.print("Digite a nota da Prova (0 a 10): ");
        notaProva = teclado.nextDouble(); // Modificado de nota2 para notaProva

        System.out.print("Digite a nota de Participação (0 a 10): ");
        notaParticipacao = teclado.nextDouble(); // Modificado de nota3 para notaParticipacao

        double mediaFinal = (notaTrabalho * 0.3) + (notaProva * 0.5) + (notaParticipacao * 0.2); // Pesos modificados

        System.out.printf("A média final do aluno é: %.2f%n", mediaFinal);

        if (mediaFinal >= 6.0) { // Critério de aprovação modificado para 6.0
            System.out.println("Parabéns! Aluno Aprovado!");
        } else if (mediaFinal >= 4.0) { // Adicionado critério de recuperação
            System.out.println("Atenção! Aluno em Recuperação.");
        }
        else {
            System.out.println("Infelizmente, Aluno Reprovado.");
        }

        teclado.close();
    }
}
```

**Saída Esperada (Exemplo com notas 7.0, 5.0, 8.0):**

```
--- Cálculo de Média Semestral ---
Digite a nota do Trabalho (0 a 10): 7.0
Digite a nota da Prova (0 a 10): 5.0
Digite a nota de Participação (0 a 10): 8.0
A média final do aluno é: 6.20
Parabéns! Aluno Aprovado!
```

**Configurando o Ambiente de Desenvolvimento (VS Code e IntelliJ IDEA):**

* **VS Code:**
    1.  Instale o [Java Extension Pack](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack) da Microsoft.
    2.  Certifique-se de ter o JDK (Java Development Kit) instalado e configurado nas variáveis de ambiente do seu sistema.
    3.  Crie um arquivo `CalculadoraMedia.java`, cole o código e clique no botão "Run" que aparece acima do método `main`.
* **IntelliJ IDEA:**
    1.  Instale o JDK.
    2.  Ao criar um novo projeto, selecione "Java".
    3.  Crie uma nova classe `CalculadoraMedia` no diretório `src` (dentro do pacote `curso`), cole o código e clique na seta verde ao lado da declaração do método `main` para executar.

## 🔧 02 Git e Github

**Conteúdo do PDF:** Conceitos, criação de projetos e versões, branchs, trabalho em equipe, resolução de problemas. [cite: 3]

**Conceitos Complementares:**

* **Sistema de Controle de Versão (VCS):** Ferramentas que ajudam a gerenciar o histórico de alterações em arquivos. O Git é um VCS distribuído.
* **Repositório (Repository):** Local onde o Git armazena todos os arquivos, histórico de versões e metadados do projeto. Pode ser local (na sua máquina) ou remoto (ex: GitHub, GitLab).
* **Commit:** Um "snapshot" das alterações feitas nos arquivos do projeto em um determinado momento. Cada commit tem uma mensagem descritiva.
* **Branch:** Uma linha de desenvolvimento independente. Permite trabalhar em novas funcionalidades ou correções sem afetar a linha principal (geralmente chamada de `main` ou `master`).
* **Merge:** Processo de combinar o histórico de diferentes branches.
* **Pull Request (ou Merge Request):** Uma forma de propor alterações para um repositório. Facilita a revisão de código e a discussão antes de integrar as mudanças.
* **GitHub:** Plataforma de hospedagem de código-fonte com controle de versão usando Git. Oferece funcionalidades para colaboração, como issues, pull requests, wikis, etc.

**Exemplo Prático: Fluxo Básico de Trabalho com Git e GitHub**

1.  **Criar um repositório no GitHub:**

    * Acesse sua conta no GitHub.
    * Clique em "New repository".
    * Defina um nome (ex: `meu-projeto-java`), descrição, e escolha se será público ou privado.
    * Marque "Add a README file" para iniciar com um arquivo.

2.  **Clonar o repositório para sua máquina local:**

    ```bash
    git clone https://github.com/seu-usuario/meu-projeto-java.git
    cd meu-projeto-java
    ```

3.  **Criar uma nova branch para uma funcionalidade:**

    ```bash
    git checkout -b nova-funcionalidade
    ```

4.  **Adicionar/Modificar arquivos:**

    * Crie ou edite arquivos do seu projeto (ex: o `CalculadoraMedia.java` do exemplo anterior).

5.  **Adicionar as alterações ao "staging area" e commitar:**

    ```bash
    git add CalculadoraMedia.java  # Ou git add . para adicionar todos os arquivos modificados
    git commit -m "Adiciona funcionalidade de cálculo de média ponderada"
    ```

    * *Mensagem de commit modificada para refletir uma alteração específica.*

6.  **Enviar as alterações para o repositório remoto (GitHub):**

    ```bash
    git push origin nova-funcionalidade
    ```

7.  **Abrir um Pull Request no GitHub:**

    * No GitHub, vá para o seu repositório.
    * Você verá uma notificação para criar um Pull Request para a branch `nova-funcionalidade`.
    * Preencha os detalhes e crie o Pull Request.

8.  **Revisar e Mergear (após aprovação):**

    * Outros colaboradores (ou você mesmo) podem revisar o código.
    * Após a aprovação, o Pull Request pode ser "merged" para a branch `main`.

9.  **Atualizar sua branch local `main`:**

    ```bash
    git checkout main
    git pull origin main
    ```

## 🌐 03 HTML e CSS

**Conteúdo do PDF:** Introdução, tags, display, formulários, seletores, box model, flexbox, projetos. [cite: 4]

**Conceitos Complementares:**

* **HTML (HyperText Markup Language):** Linguagem de marcação padrão para criar páginas web e aplicações web. Define a estrutura do conteúdo.
* **CSS (Cascading Style Sheets):** Linguagem usada para descrever a apresentação de um documento escrito em HTML. Controla o layout, cores, fontes, etc.
* **Tags HTML:** Elementos fundamentais do HTML, como `<p>` (parágrafo), `<h1>` (título), `<a>` (link), `<img>` (imagem), `<div>` (divisão), `<span>` (span inline).
* **Semântica HTML5:** Uso de tags HTML que descrevem o significado do conteúdo que elas envolvem (ex: `<article>`, `<aside>`, `<nav>`, `<header>`, `<footer>`). Melhora a acessibilidade e SEO.
* **Seletores CSS:** Padrões usados para selecionar os elementos HTML que você deseja estilizar. Podem ser por tipo (ex: `p`), classe (ex: `.minha-classe`), ID (ex: `#meu-id`), atributos, etc.
* **Box Model:** Modelo que descreve como os elementos HTML são renderizados como "caixas" retangulares, com propriedades como conteúdo, padding (espaçamento interno), border (borda) e margin (espaçamento externo).
* **Flexbox:** Um módulo de layout CSS que oferece uma maneira mais eficiente de alinhar e distribuir espaço entre itens em um container, mesmo quando seus tamanhos são desconhecidos ou dinâmicos.
* **Responsividade:** Capacidade de um site ou aplicação web se adaptar a diferentes tamanhos de tela e dispositivos (desktops, tablets, smartphones).

**Exemplo Prático: Estrutura de uma Página Simples com HTML e CSS**

**`index.html`:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Página de Exemplo</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <header class="cabecalho-principal">
        <h1>Bem-vindo ao Meu Site!</h1>
        <nav>
            <ul>
                <li><a href="#inicio">Início</a></li>
                <li><a href="#sobre">Sobre Nós</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    </header>

    <main id="inicio" class="container-principal">
        <section class="secao-destaque">
            <h2>Artigo em Destaque</h2>
            <article>
                <h3>Como Aprender Desenvolvimento Web</h3>
                <p>Aprender desenvolvimento web requer dedicação. Comece com HTML, CSS e JavaScript, e depois explore frameworks e bibliotecas modernas. Pratique criando projetos variados!</p>
                <p><small>Autor: Carlos Ferreira - Publicado em: 05 de Junho de 2025</small></p>
            </article>
        </section>

        <section id="sobre" class="secao-info">
            <h2>Sobre Nós</h2>
            <p>Somos uma equipe apaixonada por tecnologia e educação, dedicada a fornecer conteúdo de qualidade para futuros desenvolvedores.</p>
        </section>
    </main>

    <footer id="contato" class="rodape-principal">
        <p>Contato: <a href="mailto:contato@meusiteexemplo.com">contato@meusiteexemplo.com</a></p>
        <p>&copy; 2025 Meu Site Exemplo. Todos os direitos reservados.</p>
    </footer>
</body>
</html>
```

**`estilos.css`:**

```css
body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: #f0f2f5; /* Cor de fundo modificada */
    color: #333;
}

.cabecalho-principal {
    background-color: #2c3e50; /* Cor de fundo do cabeçalho modificada */
    color: #ecf0f1; /* Cor do texto do cabeçalho modificada */
    padding: 1.2rem 0; /* Padding modificado */
    text-align: center;
}

.cabecalho-principal h1 {
    margin: 0;
    font-size: 2.2em; /* Tamanho da fonte modificado */
}

.cabecalho-principal nav ul {
    padding: 0;
    list-style: none;
}

.cabecalho-principal nav ul li {
    display: inline;
    margin: 0 12px; /* Margem modificada */
}

.cabecalho-principal nav a {
    color: #ecf0f1;
    text-decoration: none;
    font-weight: bold;
}

.cabecalho-principal nav a:hover {
    color: #3498db; /* Cor do hover modificada */
}

.container-principal {
    width: 85%; /* Largura modificada */
    margin: 25px auto; /* Margem modificada */
    overflow: auto;
    padding: 25px; /* Padding modificado */
    background: #ffffff;
    box-shadow: 0 0 12px rgba(0,0,0,0.15); /* Sombra modificada */
    border-radius: 8px; /* Bordas arredondadas adicionadas */
}

.secao-destaque, .secao-info {
    margin-bottom: 25px; /* Margem inferior modificada */
    padding-bottom: 25px; /* Padding inferior modificado */
    border-bottom: 2px dotted #bdc3c7; /* Estilo da borda modificado */
}

.secao-destaque:last-child, .secao-info:last-child {
    border-bottom: none;
}

.secao-destaque h2, .secao-info h2 {
    color: #2980b9; /* Cor do título da seção modificada */
    margin-bottom: 12px; /* Margem inferior modificada */
}

.rodape-principal {
    text-align: center;
    padding: 25px; /* Padding modificado */
    background: #1abc9c; /* Cor de fundo do rodapé modificada */
    color: #ffffff;
    margin-top: 25px; /* Margem superior modificada */
}

.rodape-principal a {
    color: #ffffff;
}

.rodape-principal a:hover {
    color: #f1c40f; /* Cor do hover do link do rodapé modificada */
}
```

## ✨ 04 Programação Moderna (Java)

**Conteúdo do PDF:** Orientação a objetos, classes, encapsulamento, composição, herança, polimorfismo, interfaces, programação funcional, expressões lambda, imutabilidade, coleções, projetos. Linguagem Java. [cite: 5]

**Conceitos Complementares:**

* **Orientação a Objetos (OO):** Paradigma de programação baseado no conceito de "objetos", que podem conter dados (atributos) e código (métodos).
    * **Abstração:** Focar nos aspectos essenciais de um objeto, ignorando detalhes irrelevantes.
    * **Princípios SOLID:** Um mnemônico para cinco princípios de design que visam tornar os sistemas de software mais compreensíveis, flexíveis e fáceis de manter.
        * **S**ingle Responsibility Principle (Princípio da Responsabilidade Única)
        * **O**pen/Closed Principle (Princípio Aberto/Fechado)
        * **L**iskov Substitution Principle (Princípio da Substituição de Liskov)
        * **I**nterface Segregation Principle (Princípio da Segregação de Interfaces)
        * **D**ependency Inversion Principle (Princípio da Inversão de Dependência)
* **Tratamento de Exceções:** Mecanismo para lidar com erros ou condições inesperadas que podem ocorrer durante a execução de um programa (ex: `try-catch-finally`).
* **Java Collections Framework:** Um conjunto de classes e interfaces que implementam estruturas de dados reutilizáveis, como listas, conjuntos e mapas.

**Exemplos Práticos em Java (com traduções e dados modificados):**

**1. Classe, Objeto e Encapsulamento:**

```java
package curso.oo;

// Classe "ContaBancaria" em vez de "BankAccount"
class ContaBancaria {
    // Atributos privados para encapsulamento
    private String numeroConta; // numeroConta em vez de accountNumber
    private String nomeTitular; // nomeTitular em vez de accountHolderName
    private double saldo;       // saldo em vez de balance

    // Construtor
    public ContaBancaria(String numeroConta, String nomeTitular, double saldoInicial) {
        this.numeroConta = numeroConta;
        this.nomeTitular = nomeTitular;
        this.saldo = saldoInicial;
    }

    // Métodos públicos (getters e setters) para acesso controlado
    public String getNumeroConta() {
        return numeroConta;
    }

    public String getNomeTitular() {
        return nomeTitular;
    }

    public double getSaldo() {
        return saldo;
    }

    // Método para depositar (depositar em vez de deposit)
    public void depositar(double valor) {
        if (valor > 0) {
            saldo += valor;
            System.out.println("Depósito de R$" + valor + " realizado com sucesso para " + nomeTitular + ".");
        } else {
            System.out.println("Valor de depósito inválido.");
        }
    }

    // Método para sacar (sacar em vez de withdraw)
    public boolean sacar(double valor) {
        if (valor > 0 && valor <= saldo) {
            saldo -= valor;
            System.out.println("Saque de R$" + valor + " realizado com sucesso por " + nomeTitular + ".");
            return true;
        } else {
            System.out.println("Saque de R$" + valor + " falhou para " + nomeTitular + ". Saldo insuficiente ou valor inválido.");
            return false;
        }
    }
}

// Classe principal para testar (ProgramaContas em vez de AccountProgram)
public class ProgramaContas {
    public static void main(String[] args) {
        // Nomes e valores modificados
        ContaBancaria conta1 = new ContaBancaria("001-007289-4", "Sofia Albuquerque", 1250.75);
        ContaBancaria conta2 = new ContaBancaria("002-009541-8", "Roberto Silva", 380.50);

        System.out.println("Dados da Conta 1: Titular - " + conta1.getNomeTitular() + ", Saldo - R$" + conta1.getSaldo());
        System.out.println("Dados da Conta 2: Titular - " + conta2.getNomeTitular() + ", Saldo - R$" + conta2.getSaldo());

        conta1.depositar(320.25); // Valor de depósito modificado
        conta2.sacar(150.00);    // Valor de saque modificado
        conta1.sacar(2000.00);   // Tentativa de saque maior que o saldo

        System.out.println("Saldo final da Conta 1 (" + conta1.getNomeTitular() + "): R$" + conta1.getSaldo()); // Saída esperada: R$1421.00
        System.out.println("Saldo final da Conta 2 (" + conta2.getNomeTitular() + "): R$" + conta2.getSaldo()); // Saída esperada: R$230.50
    }
}
```

**Saída Esperada:**

```
Dados da Conta 1: Titular - Sofia Albuquerque, Saldo - R$1250.75
Dados da Conta 2: Titular - Roberto Silva, Saldo - R$380.5
Depósito de R$320.25 realizado com sucesso para Sofia Albuquerque.
Saque de R$150.0 realizado com sucesso por Roberto Silva.
Saque de R$2000.0 falhou para Sofia Albuquerque. Saldo insuficiente ou valor inválido.
Saldo final da Conta 1 (Sofia Albuquerque): R$1571.0
Saldo final da Conta 2 (Roberto Silva): R$230.5
```

**2. Herança e Polimorfismo:**

```java
package curso.oo.heranca;

// Classe base "Veiculo"
class Veiculo {
    protected String marca; // marca em vez de brand
    protected String modelo; // modelo em vez de model
    protected int anoFabricacao; // anoFabricacao em vez de year

    public Veiculo(String marca, String modelo, int anoFabricacao) {
        this.marca = marca;
        this.modelo = modelo;
        this.anoFabricacao = anoFabricacao;
    }

    public void exibirDetalhes() { // exibirDetalhes em vez de displayDetails
        System.out.println("Marca: " + marca + ", Modelo: " + modelo + ", Ano: " + anoFabricacao);
    }

    public void acelerar() { // acelerar em vez de accelerate
        System.out.println("Veículo genérico acelerando.");
    }
}

// Classe derivada "Automovel" (Automovel em vez de Car)
class Automovel extends Veiculo {
    private int numeroPortas; // numeroPortas em vez de numberOfDoors

    public Automovel(String marca, String modelo, int anoFabricacao, int numeroPortas) {
        super(marca, modelo, anoFabricacao);
        this.numeroPortas = numeroPortas;
    }

    @Override // Sobrescrita do método
    public void exibirDetalhes() {
        super.exibirDetalhes();
        System.out.println("Número de Portas: " + numeroPortas);
    }

    @Override
    public void acelerar() {
        System.out.println("Automóvel " + modelo + " acelerando com motor.");
    }
}

// Classe derivada "Motocicleta" (Motocicleta em vez de Motorcycle)
class Motocicleta extends Veiculo {
    private int cilindradas; // cilindradas em vez de engineDisplacement

    public Motocicleta(String marca, String modelo, int anoFabricacao, int cilindradas) {
        super(marca, modelo, anoFabricacao);
        this.cilindradas = cilindradas;
    }

    @Override
    public void exibirDetalhes() {
        super.exibirDetalhes();
        System.out.println("Cilindradas: " + cilindradas + "cc");
    }

    @Override
    public void acelerar() {
        System.out.println("Motocicleta " + modelo + " acelerando com guidão.");
    }
}

// Classe principal (TesteVeiculos em vez de VehicleTest)
public class TesteVeiculos {
    public static void main(String[] args) {
        // Nomes e valores modificados
        Veiculo meuVeiculo1 = new Automovel("Fiat", "Argo", 2023, 4); // Marca e modelo modificados
        Veiculo meuVeiculo2 = new Motocicleta("Honda", "CB 500F", 2024, 471); // Marca, modelo e cilindradas modificados

        meuVeiculo1.exibirDetalhes();
        meuVeiculo1.acelerar(); // Polimorfismo: chama o acelerar() de Automovel

        System.out.println("---");

        meuVeiculo2.exibirDetalhes();
        meuVeiculo2.acelerar(); // Polimorfismo: chama o acelerar() de Motocicleta
    }
}
```

**Saída Esperada:**

```
Marca: Fiat, Modelo: Argo, Ano: 2023
Número de Portas: 4
Automóvel Argo acelerando com motor.
---
Marca: Honda, Modelo: CB 500F, Ano: 2024
Cilindradas: 471cc
Motocicleta CB 500F acelerando com guidão.
```

**3. Expressões Lambda e Coleções:**

```java
package curso.funcional;

import java.util.ArrayList;
import java.util.Arrays; // Importado para Arrays.asList
import java.util.Collections;
import java.util.List;

// Classe "Produto"
class Produto implements Comparable<Produto> { // Implementa Comparable para ordenação padrão
    private String nome;
    private double preco;
    private int estoque; // Adicionado atributo estoque

    public Produto(String nome, double preco, int estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    public String getNome() { return nome; }
    public double getPreco() { return preco; }
    public int getEstoque() { return estoque; } // Getter para estoque

    @Override
    public String toString() {
        return "Produto [Nome=" + nome + ", Preço=R$" + String.format("%.2f", preco) + ", Estoque=" + estoque + "]";
    }

    @Override
    public int compareTo(Produto outro) {
        return Double.compare(this.preco, outro.preco); // Ordenação padrão por preço
    }
}

// Classe principal (ExemploColecoesLambda em vez de LambdaCollectionsExample)
public class ExemploColecoesLambda {
    public static void main(String[] args) {
        // Nomes, valores e quantidade de produtos modificados
        List<Produto> listaProdutos = new ArrayList<>(Arrays.asList(
            new Produto("Notebook Gamer X", 7500.90, 15),
            new Produto("Mouse Vertical Ergonômico", 280.00, 40),
            new Produto("Teclado Mecânico Compacto", 450.75, 25),
            new Produto("Monitor Curvo 32\"", 2100.50, 10)
        ));

        System.out.println("--- Lista de Produtos Original ---");
        // Usando forEach com expressão lambda para iterar
        listaProdutos.forEach(p -> System.out.println(p));
        // Alternativa: listaProdutos.forEach(System.out::println);

        // Ordenando produtos por nome usando expressão lambda
        // Collections.sort(listaProdutos, (p1, p2) -> p1.getNome().compareTo(p2.getNome()));
        // Ou usando List.sort
        listaProdutos.sort((p1, p2) -> p1.getNome().compareTo(p2.getNome()));

        System.out.println("\n--- Lista de Produtos Ordenada por Nome ---");
        listaProdutos.forEach(System.out::println);

        // Filtrando produtos com preço abaixo de R$1000.00 e estoque > 20
        System.out.println("\n--- Produtos com Preço < R$1000.00 e Estoque > 20 ---");
        listaProdutos.stream()
                     .filter(p -> p.getPreco() < 1000.00 && p.getEstoque() > 20) // Condição de filtro modificada
                     .forEach(System.out::println);

        // Calculando o valor total do estoque de todos os produtos
        double valorTotalEstoque = listaProdutos.stream()
                                                .mapToDouble(p -> p.getPreco() * p.getEstoque())
                                                .sum();
        System.out.printf("\nValor total do estoque: R$%.2f%n", valorTotalEstoque);
        // Saída esperada para o valor total do estoque:
        // (7500.90*15) + (280.00*40) + (450.75*25) + (2100.50*10) = 112513.5 + 11200 + 11268.75 + 21005 = 155987.25
    }
}
```

**Saída Esperada:**

```
--- Lista de Produtos Original ---
Produto [Nome=Notebook Gamer X, Preço=R$7500.90, Estoque=15]
Produto [Nome=Mouse Vertical Ergonômico, Preço=R$280.00, Estoque=40]
Produto [Nome=Teclado Mecânico Compacto, Preço=R$450.75, Estoque=25]
Produto [Nome=Monitor Curvo 32", Preço=R$2100.50, Estoque=10]

--- Lista de Produtos Ordenada por Nome ---
Produto [Nome=Monitor Curvo 32", Preço=R$2100.50, Estoque=10]
Produto [Nome=Mouse Vertical Ergonômico, Preço=R$280.00, Estoque=40]
Produto [Nome=Notebook Gamer X, Preço=R$7500.90, Estoque=15]
Produto [Nome=Teclado Mecânico Compacto, Preço=R$450.75, Estoque=25]

--- Produtos com Preço < R$1000.00 e Estoque > 20 ---
Produto [Nome=Mouse Vertical Ergonômico, Preço=R$280.00, Estoque=40]
Produto [Nome=Teclado Mecânico Compacto, Preço=R$450.75, Estoque=25]

Valor total do estoque: R$155987.25
```

## 🗄️ 05 Banco de Dados

**Conteúdo do PDF:** Introdução, modelo conceitual, modelo relacional, normalização, SQL, consultas, projetos. SQLITE H2 MySQL PostgreSQL NoSQL Cassandra MongoDB. [cite: 6, 7]

**Conceitos Complementares:**

* **SGBD (Sistema de Gerenciamento de Banco de Dados):** Software que permite criar, acessar e gerenciar bancos de dados.
* **Modelo Conceitual:** Representação de alto nível da estrutura de dados, focada nas entidades e seus relacionamentos (Ex: Diagrama Entidade-Relacionamento - DER).
* **Modelo Relacional:** Modelo de dados baseado em tabelas (relações), onde cada tabela possui linhas (tuplas) e colunas (atributos).
* **Normalização:** Processo de organizar as colunas e tabelas de um banco de dados relacional para minimizar a redundância de dados e melhorar a integridade. As formas normais (1FN, 2FN, 3FN, BCNF, etc.) são diretrizes.
* **SQL (Structured Query Language):** Linguagem padrão para interagir com bancos de dados relacionais. Usada para consultas, inserção, atualização e exclusão de dados, além da definição e modificação da estrutura do banco.
* **Chaves Primárias (Primary Key):** Coluna ou conjunto de colunas que identifica unicamente cada linha em uma tabela.
* **Chaves Estrangeiras (Foreign Key):** Coluna ou conjunto de colunas em uma tabela que estabelece um link com a chave primária de outra tabela, garantindo a integridade referencial.
* **JOINs:** Operação SQL para combinar linhas de duas ou mais tabelas com base em uma coluna relacionada entre elas.
* **NoSQL:** Bancos de dados "não apenas SQL" ou "não relacionais". Ofereem modelos de dados flexíveis e são adequados para grandes volumes de dados e aplicações com alta escalabilidade. Tipos comuns:
    * **Documento (ex: MongoDB):** Armazena dados em documentos (JSON, BSON, XML).
    * **Chave-Valor (ex: Redis, DynamoDB):** Armazena dados como pares de chave e valor.
    * **Colunar (ex: Cassandra, HBase):** Armazena dados em colunas em vez de linhas.
    * **Grafo (ex: Neo4j):** Ideal para representar e consultar relacionamentos complexos.

**Bancos de Dados Mencionados:** [cite: 7]

* **Relacionais (SQL):**
    * **MySQL:** SGBD relacional open-source popular, amplamente utilizado em aplicações web.
    * **PostgreSQL:** SGBD relacional objeto-relacional open-source avançado, conhecido por sua robustez e extensibilidade.
    * **SQLite:** Biblioteca que implementa um SGBD SQL embutido, sem servidor. Os dados são armazenados em um único arquivo. Ótimo para aplicações mobile e desktop.
    * **H2:** SGBD relacional escrito em Java. Pode ser embutido em aplicações Java ou executado no modo cliente-servidor. Muito usado para testes.
* **NoSQL:**
    * **MongoDB:** Banco de dados NoSQL orientado a documentos, popular pela flexibilidade e escalabilidade.
    * **Cassandra:** Banco de dados NoSQL distribuído, colunar, projetado para alta disponibilidade e escalabilidade em grandes volumes de dados.

**Exemplos Básicos de Comandos SQL (considerando tabelas `Alunos` e `Cursos`):**

Vamos supor que temos as seguintes tabelas e desejamos realizar algumas operações.
Nomes de colunas e dados modificados.

**Tabela `Estudantes`:**
| id\_estudante (PK) | nome\_completo      | email\_contato         | data\_nascimento |
|-------------------|--------------------|-----------------------|-----------------|
| 1                 | Ana Beatriz Costa  | ana.costa@email.dev   | 2002-07-15      |
| 2                 | Carlos Eduardo Lima| carlos.lima@email.dev | 2001-03-22      |
| 3                 | Juliana Martins    | juliana.m@email.dev   | 2003-11-05      |

**Tabela `Disciplinas`:**
| id\_disciplina (PK) | nome\_disciplina        | creditos |
|--------------------|------------------------|----------|
| 101                | Algoritmos Avançados   | 6        |
| 102                | Banco de Dados II      | 4        |
| 103                | Desenvolvimento Web Full | 8        |

**Tabela `Matriculas` (Tabela de Junção):**
| id\_matricula (PK) | id\_aluno\_fk (FK -\> Estudantes) | id\_disciplina\_fk (FK -\> Disciplinas) | semestre\_matricula |
|-------------------|--------------------------------|--------------------------------------|--------------------|
| 1                 | 1                              | 101                                  | 2025.1             |
| 2                 | 1                              | 103                                  | 2025.1             |
| 3                 | 2                              | 102                                  | 2025.1             |
| 4                 | 3                              | 103                                  | 2025.2             |

**1. `CREATE TABLE` (Exemplo para `Estudantes`):**

```sql
CREATE TABLE Estudantes (
    id_estudante INT PRIMARY KEY AUTO_INCREMENT, -- Modificado para AUTO_INCREMENT (varia conforme SGBD)
    nome_completo VARCHAR(150) NOT NULL,       -- Tamanho modificado
    email_contato VARCHAR(100) UNIQUE,         -- Adicionado UNIQUE e tamanho modificado
    data_nascimento DATE
);
```

**2. `INSERT INTO` (Exemplo para `Estudantes`):**

```sql
INSERT INTO Estudantes (nome_completo, email_contato, data_nascimento) VALUES
('Pedro Alvares Cabral', 'pedro.cabral@email.nav', '1998-04-22'), -- Dados modificados
('Maria Quiteria de Jesus', 'maria.quiteria@email.hist', '1999-08-10'); -- Dados modificados
```

**3. `SELECT` (Consultar todos os estudantes e seus emails):**

```sql
SELECT nome_completo, email_contato FROM Estudantes;
```

**Saída Esperada (baseada nos inserts acima):**

```
| nome_completo           | email_contato               |
|-------------------------|-----------------------------|
| Pedro Alvares Cabral    | pedro.cabral@email.nav      |
| Maria Quiteria de Jesus | maria.quiteria@email.hist   |
```

**4. `SELECT` com `WHERE` (Consultar estudantes nascidos após 01/01/1999):**

```sql
SELECT nome_completo, data_nascimento FROM Estudantes
WHERE data_nascimento > '1999-01-01'; -- Data modificada
```

**Saída Esperada (baseada nos inserts acima):**

```
| nome_completo           | data_nascimento |
|-------------------------|-----------------|
| Maria Quiteria de Jesus | 1999-08-10      |
```

**5. `UPDATE` (Atualizar o email de um estudante):**

```sql
UPDATE Estudantes
SET email_contato = 'pedro.a.cabral@email.novo' -- Novo email modificado
WHERE nome_completo = 'Pedro Alvares Cabral';
```

**6. `DELETE` (Remover um estudante pelo ID - CUIDADO: esta ação é geralmente irreversível):**

```sql
DELETE FROM Estudantes
WHERE id_estudante = 1; -- Supondo que o ID 1 seja de Pedro Alvares Cabral após o insert
```

**7. `JOIN` (Listar estudantes e as disciplinas em que estão matriculados):**

```sql
SELECT E.nome_completo, D.nome_disciplina, M.semestre_matricula
FROM Estudantes E
JOIN Matriculas M ON E.id_estudante = M.id_aluno_fk
JOIN Disciplinas D ON M.id_disciplina_fk = D.id_disciplina
WHERE E.nome_completo = 'Ana Beatriz Costa'; -- Nome modificado para o exemplo inicial
```

**Saída Esperada (baseada nos dados das tabelas de exemplo):**

```
| nome_completo     | nome_disciplina        | semestre_matricula |
|-------------------|------------------------|--------------------|
| Ana Beatriz Costa | Algoritmos Avançados   | 2025.1             |
| Ana Beatriz Costa | Desenvolvimento Web Full | 2025.1             |
```

## 💻 06 JavaScript

**Conteúdo do PDF:** Introdução, tipos, var/let/const, strings, operadores, funções, objetos, construtores, prototype, classes, módulos, promises, fecth API, async/await, projetos.

**Conceitos Complementares:**

* **JavaScript (JS):** Linguagem de programação de alto nível, interpretada, multiparadigma (suporta programação funcional, orientada a objetos e imperativa). É a principal linguagem para desenvolvimento front-end web e também é amplamente utilizada no back-end (Node.js).
* **Tipos de Dados em JS:**
    * **Primitivos:** `String`, `Number`, `BigInt`, `Boolean`, `undefined`, `Symbol`, `null`.
    * **Objeto:** Estruturas de dados mais complexas, incluindo arrays, funções e objetos literais.
* **`var`, `let`, `const`:** Palavras-chave para declarar variáveis.
    * `var`: Escopo de função, pode ser redeclarada e atualizada. (Uso desencorajado em código moderno).
    * `let`: Escopo de bloco, pode ser atualizada, mas não redeclarada no mesmo escopo.
    * `const`: Escopo de bloco, não pode ser atualizada nem redeclarada. Deve ser inicializada na declaração.
* **Funções:** Blocos de código reutilizáveis. Podem ser declaradas de várias formas (function declaration, function expression, arrow functions).
* **Objetos em JS:** Coleções de pares chave-valor. Chaves são strings (ou Symbols) e valores podem ser de qualquer tipo.
* **Prototype:** Mecanismo pelo qual objetos herdam características uns dos outros em JavaScript.
* **Classes (ES6):** Uma "syntactic sugar" sobre a herança baseada em protótipos, tornando a criação de objetos e a herança mais similar a outras linguagens OO.
* **Módulos (ES6):** Permitem dividir o código em arquivos separados e reutilizáveis. Usam `import` e `export`.
* **Promises:** Objetos que representam a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.
* **Fetch API:** Interface moderna para realizar requisições de rede (HTTP) de forma assíncrona. Retorna uma Promise.
* **Async/Await:** Syntactic sugar sobre Promises, tornando o código assíncrono mais fácil de ler e escrever, fazendo-o parecer síncrono.
* **DOM (Document Object Model):** Representação em árvore de um documento HTML/XML. JavaScript pode manipular o DOM para alterar dinamicamente o conteúdo e a estrutura da página.
* **Event Handling:** Mecanismo para responder a interações do usuário (cliques, teclas pressionadas) ou eventos do navegador (carregamento da página).

**Exemplos Práticos em JavaScript:**

**1. Variáveis, Tipos e Funções (com dados modificados):**

```javascript
// Declarando variáveis com let e const
let nomeUsuario = "Gabriela Oliveira"; // Nome modificado
const anoNascimento = 1995; // Ano modificado
let idadeUsuario = new Date().getFullYear() - anoNascimento;
let temPermissao = true;

// Exibindo informações
console.log(`Usuário: ${nomeUsuario}, Idade: ${idadeUsuario} anos.`);
console.log(`Permissão de acesso: ${temPermissao}`);

// Definindo uma função (Arrow Function)
const calcularAreaRetangulo = (largura, altura) => { // Nomes de parâmetros modificados
    if (largura <= 0 || altura <= 0) {
        return "Dimensões inválidas. Use valores positivos maiores que zero.";
    }
    return largura * altura;
};

let larguraSala = 7.5; // Valor modificado
let alturaSala = 4.2;  // Valor modificado
let areaCalculada = calcularAreaRetangulo(larguraSala, alturaSala);
console.log(`A área da sala de ${larguraSala}m x ${alturaSala}m é: ${areaCalculada}m².`);
// Saída esperada: A área da sala de 7.5m x 4.2m é: 31.5m².

let larguraInvalida = -5;
let alturaInvalida = 10;
console.log(`Tentativa com dimensões ${larguraInvalida}x${alturaInvalida}: ${calcularAreaRetangulo(larguraInvalida, alturaInvalida)}`);
// Saída esperada: Tentativa com dimensões -5x10: Dimensões inválidas. Use valores positivos maiores que zero.
```

**2. Objetos e Classes (ES6) (com dados modificados):**

```javascript
// Objeto Literal
const livroFavorito = {
    titulo: "O Guia do Mochileiro das Galáxias", // Título modificado
    autor: "Douglas Adams",
    anoPublicacao: 1979,
    genero: "Ficção Científica", // Gênero modificado
    detalhes: function() {
        return `${this.titulo} por ${this.autor} (${this.anoPublicacao}), Gênero: ${this.genero}.`;
    }
};
console.log(livroFavorito.detalhes());
// Saída esperada: O Guia do Mochileiro das Galáxias por Douglas Adams (1979), Gênero: Ficção Científica.

// Classe "DispositivoEletronico" (em vez de Device)
class DispositivoEletronico {
    constructor(nome, marca, anoLancamento) { // Parâmetros traduzidos/modificados
        this.nome = nome;
        this.marca = marca;
        this.anoLancamento = anoLancamento;
    }

    ligar() { // Método "ligar" em vez de "powerOn"
        return `${this.nome} (${this.marca}) está ligando...`;
    }

    obterInformacoes() { // Método "obterInformacoes" em vez de "getInfo"
        return `Dispositivo: ${this.nome}, Marca: ${this.marca}, Lançamento: ${this.anoLancamento}.`;
    }
}

// Subclasse "Celular" (em vez de Smartphone)
class Celular extends DispositivoEletronico {
    constructor(nome, marca, anoLancamento, sistemaOperacional) { // Parâmetro traduzido
        super(nome, marca, anoLancamento);
        this.sistemaOperacional = sistemaOperacional;
    }

    fazerChamada(numero) { // Método "fazerChamada" e parâmetro "numero"
        return `Chamando ${numero} usando o ${this.nome}...`;
    }

    @Override // Similar a anotação, mas em JS é apenas um comentário ilustrativo do conceito
    obterInformacoes() {
        return `${super.obterInformacoes()} SO: ${this.sistemaOperacional}.`;
    }
}

const meuCelular = new Celular("Galaxy S25 Ultra", "Samsung", 2025, "Android 15"); // Dados modificados
console.log(meuCelular.obterInformacoes());
// Saída esperada: Dispositivo: Galaxy S25 Ultra, Marca: Samsung, Lançamento: 2025. SO: Android 15.
console.log(meuCelular.ligar());
// Saída esperada: Galaxy S25 Ultra (Samsung) está ligando...
console.log(meuCelular.fazerChamada("98765-4321")); // Número modificado
// Saída esperada: Chamando 98765-4321 usando o Galaxy S25 Ultra...
```

**3. Promises, `fetch` e `async/await` (Exemplo Simulado):**

```javascript
// Função que simula uma busca de dados (retorna uma Promise)
const buscarDadosUsuario = (idUsuario) => { // Nome da função e parâmetro traduzidos
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulando uma busca em um "banco de dados"
            const usuarios = { // Nomes e IDs modificados
                101: { nome: "Fernanda Costa", email: "fernanda.c@exemplo.com", cidade: "Recife" },
                102: { nome: "Lucas Almeida", email: "lucas.a@exemplo.com", cidade: "Salvador" }
            };
            if (usuarios[idUsuario]) {
                resolve(usuarios[idUsuario]);
            } else {
                reject(`Usuário com ID ${idUsuario} não encontrado.`);
            }
        }, 1500); // Tempo de simulação modificado
    });
};

// Usando Promises com .then() e .catch()
buscarDadosUsuario(101) // ID modificado
    .then(usuario => { // Variável "usuario"
        console.log("Dados do Usuário (Promise.then):", usuario.nome, "-", usuario.cidade); // Saída modificada
        // Saída esperada: Dados do Usuário (Promise.then): Fernanda Costa - Recife
    })
    .catch(erro => { // Variável "erro"
        console.error("Erro (Promise.catch):", erro);
    });

// Usando async/await
const exibirInfoUsuario = async (idUsuario) => { // Nome da função e parâmetro traduzidos
    try {
        console.log(`Buscando dados para ID ${idUsuario} com async/await...`);
        const usuario = await buscarDadosUsuario(idUsuario);
        console.log("Dados do Usuário (async/await):", usuario.nome, "-", usuario.email); // Saída modificada
        // Exemplo com ID 102:
        // Saída esperada: Dados do Usuário (async/await): Lucas Almeida - lucas.a@exemplo.com
        return usuario; // Retorna o usuário para uso posterior, se necessário
    } catch (erro) {
        console.error("Erro (async/await):", erro);
        // Exemplo com ID 103:
        // Saída esperada: Erro (async/await): Usuário com ID 103 não encontrado.
    }
};

exibirInfoUsuario(102); // Chamada com ID modificado
exibirInfoUsuario(103); // Chamada com ID inexistente para testar o erro
```

**Observação sobre `fetch`:** Para usar `fetch` em ambiente Node.js, você pode precisar de um polyfill como `node-fetch`. No navegador, ele está disponível globalmente.

**Exemplo com `fetch` (executar no console do navegador):**

```javascript
// Este exemplo usa a API JSONPlaceholder para simular uma requisição real
async function buscarPostagens() { // Função traduzida
    try {
        // ID do post modificado para 5
        const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/5');
        if (!resposta.ok) {
            throw new Error(`Erro HTTP! status: ${resposta.status}`);
        }
        const postagem = await resposta.json(); // Variável traduzida
        console.log("Título da Postagem (ID 5):", postagem.title); // Mensagem traduzida
        // Saída esperada (o título exato pode variar, mas será o do post com ID 5):
        // Título da Postagem (ID 5): nesciunt quas odio
    } catch (erro) {
        console.error("Falha ao buscar postagem:", erro); // Mensagem traduzida
    }
}

buscarPostagens();
```

## 📐 07 Análise de Sistemas

**Conteúdo do PDF:** Introdução, escopo, requisitos, casos de uso, modelagem conceitual. UML. [cite: 8]

**Conceitos Complementares:**

* **Análise de Sistemas:** Atividade de estudar um sistema ou problema para identificar seus objetivos, componentes e interações, com o intuito de projetar e implementar soluções eficientes.
* **Escopo do Projeto:** Define claramente os limites do projeto – o que será incluído e o que não será. É crucial para evitar o "scope creep" (aumento descontrolado do escopo).
* **Requisitos:** Descrições detalhadas das necessidades e funcionalidades que um sistema deve atender.
    * **Requisitos Funcionais:** O que o sistema deve fazer (ex: "O sistema deve permitir que o usuário cadastre novos clientes").
    * **Requisitos Não Funcionais:** Como o sistema deve ser (ex: "O sistema deve responder a consultas em menos de 2 segundos", "O sistema deve ser seguro contra acessos não autorizados").
* **Casos de Uso (Use Cases):** Descrevem as interações entre um ator (usuário ou outro sistema) e o sistema para alcançar um objetivo específico. São representados por diagramas de caso de uso e especificações textuais.
* **Modelagem Conceitual:** Criação de um modelo abstrato que representa as principais entidades, seus atributos e os relacionamentos entre elas no domínio do problema. Ajuda a entender a estrutura dos dados.
* **UML (Unified Modeling Language):** Linguagem de modelagem visual padrão usada para especificar, visualizar, construir e documentar artefatos de sistemas de software.
    * **Diagramas Estruturais (ex: Diagrama de Classes):** Mostram a estrutura estática do sistema.
    * **Diagramas Comportamentais (ex: Diagrama de Casos de Uso, Diagrama de Sequência, Diagrama de Atividades):** Mostram o comportamento dinâmico do sistema.

**Exemplo Prático: Caso de Uso Simplificado - "Realizar Pedido Online"**

* **Nome do Caso de Uso:** Realizar Pedido Online
* **Atores Principais:** Cliente (usuário registrado)
* **Atores Secundários:** Sistema de Pagamento, Sistema de Estoque
* **Pré-condições:**
    1.  O Cliente deve estar logado no sistema.
    2.  O carrinho de compras não pode estar vazio.
* **Fluxo Principal (Caminho Feliz):**
    1.  O Cliente acessa a página do carrinho de compras.
    2.  O Sistema exibe os itens do carrinho, quantidades e o subtotal (ex: 3 itens, total R$ 275,50).
    3.  O Cliente clica em "Finalizar Compra".
    4.  O Sistema solicita/confirma o endereço de entrega (ex: Rua das Palmeiras, 10, Bairro Flores, Cidade Alegre).
    5.  O Cliente confirma o endereço.
    6.  O Sistema apresenta as opções de pagamento (ex: Cartão de Crédito, Boleto).
    7.  O Cliente seleciona "Cartão de Crédito" e insere os dados do cartão (ex: número, validade, CVV).
    8.  O Sistema envia os dados para o Sistema de Pagamento para autorização.
    9.  O Sistema de Pagamento autoriza a transação.
    10. O Sistema atualiza o Sistema de Estoque para reservar os produtos.
    11. O Sistema registra o pedido com status "Pagamento Aprovado" (ex: Pedido nº 202500789).
    12. O Sistema exibe uma mensagem de confirmação do pedido para o Cliente, incluindo o número do pedido e um prazo estimado de entrega (ex: entrega em até 5 dias úteis).
* **Fluxos Alternativos (Exceções):**
    * **3a. Carrinho Vazio:** Se o cliente tentar finalizar com o carrinho vazio, o sistema exibe "Seu carrinho está vazio." e impede a continuação.
    * **9a. Pagamento Recusado:** Se o Sistema de Pagamento recusar a transação, o Sistema informa ao Cliente e permite que ele tente outra forma de pagamento ou corrija os dados.
    * **10a. Item Fora de Estoque:** Se um item ficar indisponível após o início do processo, o Sistema informa ao Cliente, remove o item do pedido e recalcula o total, solicitando confirmação para prosseguir.

**Diagrama de Caso de Uso UML (descrição textual):**
Imagine uma caixa representando o "Sistema da Loja Virtual". Fora dela, temos um boneco palito chamado "Cliente". Uma elipse dentro da caixa chamada "Realizar Pedido Online" está conectada por uma linha ao "Cliente". Outras elipses como "Efetuar Login", "Selecionar Produtos", "Processar Pagamento" (que pode ser um caso de uso incluído ou estendido por "Realizar Pedido Online") também estariam presentes, mostrando as funcionalidades. "Sistema de Pagamento" e "Sistema de Estoque" seriam outros atores (representados como bonecos palito ou caixas) interagindo com "Processar Pagamento" e "Realizar Pedido Online", respectivamente.

## 🛠️ 08 Ambiente de Desenvolvimento

**Conteúdo do PDF:** Linux, terminal, IDE, Docker file, Composer, instalações, procedimentos. NGINX, K8S, Jenkins, Terraform. [cite: 9, 10]

**Conceitos Complementares:**

* **Ambiente de Desenvolvimento:** Conjunto de ferramentas e processos que os desenvolvedores usam para criar software.
* **Linux:** Sistema operacional open-source popular entre desenvolvedores devido à sua flexibilidade, poder de linha de comando e estabilidade. Muitas ferramentas de desenvolvimento e servidores rodam em Linux.
* **Terminal (Linha de Comando):** Interface baseada em texto para interagir com o sistema operacional. Essencial para Git, gerenciamento de pacotes, execução de scripts, etc.
* **IDE (Integrated Development Environment):** Software que fornece um conjunto abrangente de ferramentas para desenvolvimento, como editor de código, debugger, compilador/interpretador, ferramentas de build.
    * **VS Code (Visual Studio Code):** Editor de código leve, mas poderoso e extensível, com suporte para inúmeras linguagens e frameworks.
    * **IntelliJ IDEA:** IDE robusta, especialmente popular para desenvolvimento Java e Kotlin, com muitas funcionalidades integradas.
* **Docker:** Plataforma para desenvolver, enviar e executar aplicações em contêineres. Contêineres empacotam a aplicação e suas dependências, garantindo que ela rode de forma consistente em diferentes ambientes.
    * **Dockerfile:** Um arquivo de texto com instruções para construir uma imagem Docker.
* **Composer:** Gerenciador de dependências para PHP (mencionado no PDF, embora o curso pareça focar em Java/JS). Para Java, ferramentas equivalentes são **Maven** e **Gradle**. Para JavaScript (Node.js), é o **npm** ou **Yarn**.
* **NGINX:** Servidor web de alto desempenho, também usado como proxy reverso, load balancer e cache HTTP.
* **K8S (Kubernetes):** Plataforma de orquestração de contêineres open-source para automatizar a implantação, escalonamento e gerenciamento de aplicações em contêineres.
* **Jenkins:** Servidor de automação open-source, usado para construir, testar e implantar software (CI/CD - Integração Contínua/Entrega Contínua).
* **Terraform:** Ferramenta de Infraestrutura como Código (IaC) para construir, alterar e versionar infraestrutura de forma segura e eficiente.

**Configuração de IDEs (VS Code e IntelliJ IDEA) para Java:**

* **JDK (Java Development Kit):** Essencial. Faça o download do site da Oracle (OpenJDK ou Oracle JDK) e instale. Configure as variáveis de ambiente `JAVA_HOME` e `PATH`.
    * *Exemplo de nomes e versões modificadas:* Suponha que você instalou o "OpenJDK Temurin 21.0.3".
* **VS Code:**
    1.  Instale o "Extension Pack for Java" da Microsoft.
    2.  Abra o VS Code, vá em `File > Open Folder...` e abra a pasta do seu projeto Java.
    3.  Crie seus arquivos `.java`. O VS Code detectará automaticamente o JDK e oferecerá opções para compilar e executar.
    4.  Para gerenciar dependências com Maven ou Gradle, crie os respectivos arquivos de projeto (`pom.xml` ou `build.gradle`).
* **IntelliJ IDEA (Community ou Ultimate Edition):**
    1.  Ao iniciar, escolha "New Project".
    2.  Selecione "Java" na barra lateral. Escolha o JDK instalado (ex: "Temurin 21.0.3").
    3.  Se for usar Maven ou Gradle, selecione a opção correspondente.
    4.  Defina o nome do projeto (ex: `MeuProjetoEmpresarial`) e a localização (ex: `C:\Desenvolvimento\Java\EmpresaX`).
    5.  Clique em "Create". O IntelliJ IDEA configurará a estrutura do projeto.
    6.  Você pode criar classes clicando com o botão direito na pasta `src/main/java`.

**Exemplo de `Dockerfile` Simples para uma Aplicação Java (Spring Boot):**

Suponha que você tem uma aplicação Spring Boot empacotada como um arquivo JAR (ex: `minha-aplicacao-0.0.2.jar` - versão modificada).

```dockerfile
# Usar uma imagem base oficial do OpenJDK (versão modificada)
FROM openjdk:17-jdk-slim-buster

# Argumento para o nome do JAR (pode ser sobrescrito no build)
ARG JAR_NOME_ARQUIVO=minha-aplicacao-0.0.2.jar

# Variáveis de ambiente (exemplo modificado)
ENV PORTA_APP=8085
ENV PERFIL_SPRING=producao

# Copiar o arquivo JAR da aplicação para dentro do contêiner
COPY target/${JAR_NOME_ARQUIVO} app.jar

# Expor a porta que a aplicação vai rodar (modificada)
EXPOSE ${PORTA_APP}

# Comando para executar a aplicação quando o contêiner iniciar
# Adicionados argumentos para porta e perfil Spring
ENTRYPOINT ["java", "-jar", "/app.jar", "--server.port=${PORTA_APP}", "--spring.profiles.active=${PERFIL_SPRING}"]
```

**Para construir a imagem:** `docker build -t minha-imagem-app:v2 .` (tag modificada)
**Para rodar o contêiner:** `docker run -p 8085:8085 minha-imagem-app:v2` (porta mapeada modificada)

## 🔩 09 Back End (Spring Boot com Java)

**Conteúdo do PDF:** API REST, criação de projeto, sistema e componentes, injeção de dependência, CRUD e casos de uso, camadas (controladores, serviços, repositories, entidades), ORM, DTO, autenticação e autorização, implantação. Ferramenta: Spring Boot com Java. [cite: 10, 11]

**Conceitos Complementares:**

* **Spring Boot:** Framework que simplifica o desenvolvimento de aplicações Java baseadas no Spring Framework, oferecendo configuração automática, servidores embutidos e um ecossistema robusto.
* **API REST (Representational State Transfer):** Um estilo arquitetural para projetar aplicações em rede. APIs RESTful usam métodos HTTP (GET, POST, PUT, DELETE) para interagir com recursos identificados por URIs.
* **Injeção de Dependência (DI):** Um padrão de design onde as dependências de um objeto são fornecidas por uma entidade externa (container DI do Spring) em vez de serem criadas pelo próprio objeto. Promove baixo acoplamento.
* **CRUD:** Acrônimo para as quatro operações básicas de persistência de dados: Create (Criar), Read (Ler), Update (Atualizar), Delete (Excluir).
* **Camadas da Aplicação:**
    * **Controladores (Controllers):** Recebem as requisições HTTP, interagem com os serviços e retornam as respostas (ex: JSON).
    * **Serviços (Services):** Contêm a lógica de negócios da aplicação. Coordenam as interações com os repositórios.
    * **Repositórios (Repositories):** Responsáveis pela comunicação com o banco de dados (abstração da camada de persistência).
    * **Entidades (Entities):** Objetos que representam os dados do domínio (geralmente mapeados para tabelas do banco de dados).
* **ORM (Object-Relational Mapping):** Técnica que mapeia objetos de uma linguagem de programação para tabelas de um banco de dados relacional.
    * **JPA (Java Persistence API):** Especificação Java para ORM.
    * **Hibernate:** Implementação popular da JPA.
* **DTO (Data Transfer Object):** Objetos simples usados para transferir dados entre camadas, especialmente entre o back-end e o front-end, ou entre serviços. Ajudam a desacoplar as camadas e a enviar apenas os dados necessários.
* **Autenticação:** Processo de verificar a identidade de um usuário (quem você é?).
* **Autorização:** Processo de verificar se um usuário autenticado tem permissão para acessar um recurso específico (o que você pode fazer?).
    * **Spring Security:** Framework poderoso para lidar com autenticação e autorização em aplicações Spring.
* **Implantação (Deployment):** Processo de tornar a aplicação disponível para uso em um ambiente de produção (ex: usando Docker, Kubernetes, servidores de aplicação como Tomcat, ou plataformas de nuvem).

**Exemplos Práticos em Spring Boot com Java (com traduções e dados modificados):**

**1. Entidade (`Produto.java`):**

```java
package com.minhaempresa.gestaoestoque.modelo; // Pacote modificado

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity // Anotação JPA para marcar como entidade
public class Produto { // Classe "Produto"

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomeProduto; // Atributo "nomeProduto" em vez de "productName"
    private String descricao;   // Atributo "descricao"
    private double precoUnitario; // Atributo "precoUnitario" em vez de "unitPrice"
    private int quantidadeEstoque; // Atributo "quantidadeEstoque"

    // Construtores, Getters e Setters (omitidos para brevidade, mas necessários)
    // Exemplo de Getter/Setter traduzido:
    public String getNomeProduto() { return nomeProduto; }
    public void setNomeProduto(String nomeProduto) { this.nomeProduto = nomeProduto; }
    // ... outros getters e setters
}
```

**2. Repositório (`ProdutoRepositorio.java`):**

```java
package com.minhaempresa.gestaoestoque.repositorio; // Pacote modificado

import com.minhaempresa.gestaoestoque.modelo.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List; // Importado para uso no método

// Interface "ProdutoRepositorio" em vez de "ProductRepository"
public interface ProdutoRepositorio extends JpaRepository<Produto, Long> {

    // Método de consulta customizado (traduzido e modificado)
    // Encontrar produtos com estoque abaixo de um certo limite
    List<Produto> findByQuantidadeEstoqueLessThan(int limiteMinimoEstoque); // Nome de método modificado

    // Encontrar produtos por parte do nome, ignorando maiúsculas/minúsculas
    List<Produto> findByNomeProdutoContainingIgnoreCase(String termoBusca); // Nome de método modificado
}
```

**3. DTO (`ProdutoDTO.java`):**

```java
package com.minhaempresa.gestaoestoque.dto; // Pacote modificado

// Classe "ProdutoDTO" para transferência de dados
public class ProdutoDTO {
    private Long id;
    private String nomeProduto;
    private String descricaoDetalhada; // Atributo modificado para "descricaoDetalhada"
    private double precoVenda;      // Atributo modificado para "precoVenda"

    // Construtores, Getters e Setters
    public ProdutoDTO(Long id, String nomeProduto, String descricaoDetalhada, double precoVenda) {
        this.id = id;
        this.nomeProduto = nomeProduto;
        this.descricaoDetalhada = descricaoDetalhada;
        this.precoVenda = precoVenda;
    }
    // ... getters e setters
}
```

**4. Serviço (`GerenciadorProdutoServico.java`):**

```java
package com.minhaempresa.gestaoestoque.servico; // Pacote modificado

import com.minhaempresa.gestaoestoque.modelo.Produto;
import com.minhaempresa.gestaoestoque.repositorio.ProdutoRepositorio;
import com.minhaempresa.gestaoestoque.dto.ProdutoDTO; // Importando o DTO
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service // Anotação Spring para marcar como serviço
// Classe "GerenciadorProdutoServico" em vez de "ProductManagementService"
public class GerenciadorProdutoServico {

    private final ProdutoRepositorio produtoRepositorio; // Traduzido

    @Autowired // Injeção de dependência
    public GerenciadorProdutoServico(ProdutoRepositorio produtoRepositorio) {
        this.produtoRepositorio = produtoRepositorio;
    }

    public ProdutoDTO criarNovoProduto(ProdutoDTO produtoDTO) { // Método e parâmetro traduzidos
        Produto produto = new Produto();
        // Mapeamento de DTO para Entidade (simplificado)
        produto.setNomeProduto(produtoDTO.getNomeProduto());
        // ... outros mapeamentos
        produto = produtoRepositorio.save(produto);
        // Retornar DTO (simplificado)
        return new ProdutoDTO(produto.getId(), produto.getNomeProduto(), produto.getDescricao(), produto.getPrecoUnitario());
    }

    public List<ProdutoDTO> listarTodosProdutos() { // Método traduzido
        return produtoRepositorio.findAll().stream()
                .map(p -> new ProdutoDTO(p.getId(), p.getNomeProduto(), p.getDescricao(), p.getPrecoUnitario())) // Mapeamento modificado
                .collect(Collectors.toList());
    }

    // Outros métodos para CRUD (buscarPorId, atualizarProduto, deletarProduto)
}
```

**5. Controlador (`ProdutoControlador.java`):**

```java
package com.minhaempresa.gestaoestoque.controlador; // Pacote modificado

import com.minhaempresa.gestaoestoque.dto.ProdutoDTO;
import com.minhaempresa.gestaoestoque.servico.GerenciadorProdutoServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController // Anotação Spring para API REST
@RequestMapping("/api/v1/produtos") // Endpoint base modificado para "/api/v1/produtos"
// Classe "ProdutoControlador" em vez de "ProductController"
public class ProdutoControlador {

    private final GerenciadorProdutoServico gerenciadorProdutoServico; // Traduzido

    @Autowired
    public ProdutoControlador(GerenciadorProdutoServico gerenciadorProdutoServico) {
        this.gerenciadorProdutoServico = gerenciadorProdutoServico;
    }

    @PostMapping("/novo") // Endpoint modificado para "/novo"
    public ResponseEntity<ProdutoDTO> adicionarProduto(@RequestBody ProdutoDTO produtoDTO) { // Método e parâmetro traduzidos
        ProdutoDTO novoProduto = gerenciadorProdutoServico.criarNovoProduto(produtoDTO);
        // URL de criação modificada para exemplo
        // URI localizacao = URI.create("/api/v1/produtos/" + novoProduto.getId());
        // return ResponseEntity.created(localizacao).body(novoProduto);
        return new ResponseEntity<>(novoProduto, HttpStatus.CREATED); // Resposta simplificada
    }

    @GetMapping("/listar") // Endpoint modificado para "/listar"
    public ResponseEntity<List<ProdutoDTO>> obterTodosProdutos() { // Método traduzido
        List<ProdutoDTO> produtos = gerenciadorProdutoServico.listarTodosProdutos();
        // Exemplo de retorno de dados modificados (nomes fictícios)
        // ProdutoDTO produtoExemplo1 = new ProdutoDTO(1L, "Smartphone XPTO", "Modelo avançado", 2999.90);
        // ProdutoDTO produtoExemplo2 = new ProdutoDTO(2L, "Fone Bluetooth Z", "Qualidade sonora", 349.50);
        // produtos.clear(); // Limpar para adicionar os exemplos abaixo
        // produtos.add(produtoExemplo1);
        // produtos.add(produtoExemplo2);
        return ResponseEntity.ok(produtos);
    }

    // Outros endpoints para GET (por ID), PUT, DELETE
}
```

**Observações:**

* Nomes de classes, métodos e variáveis foram traduzidos para o português.
* Pacotes foram alterados para `com.minhaempresa.gestaoestoque.*`.
* Endpoints e alguns atributos de DTO foram modificados.
* Este é um exemplo simplificado. Uma aplicação real teria tratamento de exceções, validações, mapeamento mais robusto entre DTOs e Entidades (ex: usando MapStruct), e configuração de segurança.

## 🎨 10 Front End (ReactJS com TypeScript)

**Conteúdo do PDF:** Aplicação web, layout, navegação, rotas, requisições, CRUD e casos de uso, integrações, autenticação e autorização, implantação. Ferramenta: ReactJS com TypeScript. [cite: 11, 12]

**Conceitos Complementares:**

* **ReactJS:** Biblioteca JavaScript para construir interfaces de usuário (UI) interativas e reutilizáveis. Foca na camada de visualização (View) da aplicação.
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática opcional. Ajuda a detectar erros em tempo de desenvolvimento e melhora a manutenibilidade de grandes projetos.
* **Componentes React:** Blocos de construção fundamentais em React. São funções JavaScript ou classes que retornam elementos React (JSX) descrevendo o que deve aparecer na tela.
* **JSX (JavaScript XML):** Extensão de sintaxe para JavaScript que permite escrever HTML dentro do código JavaScript. Facilita a criação de UIs.
* **Estado (State):** Objeto que armazena dados que podem mudar ao longo do tempo e que afetam a renderização de um componente.
* **Props (Properties):** Mecanismo para passar dados de componentes pais para componentes filhos. Props são somente leitura.
* **Hooks:** Funções especiais que permitem "enganchar" em funcionalidades do React, como estado e ciclo de vida, a partir de componentes funcionais (ex: `useState`, `useEffect`, `useContext`).
* **Roteamento (Routing):** Gerenciamento da navegação entre diferentes "páginas" ou visualizações em uma Single-Page Application (SPA). Bibliotecas como `React Router` são comumente usadas.
* **Requisições HTTP:** Interação com APIs back-end para buscar ou enviar dados (ex: usando `fetch` API ou bibliotecas como `axios`).
* **Gerenciamento de Estado Global:** Para aplicações complexas, pode ser necessário gerenciar o estado que é compartilhado por múltiplos componentes. Ferramentas como Redux, Zustand ou a Context API do React podem ser usadas.
* **Build e Implantação:** O código React/TypeScript é transpilado e empacotado (build) em arquivos estáticos (HTML, CSS, JS) que podem ser implantados em um servidor web (ex: NGINX, Netlify, Vercel, AWS S3).

**Exemplos Práticos em ReactJS com TypeScript (com traduções e dados modificados):**

**1. Componente Funcional Simples (`SaudacaoUsuario.tsx`):**

```typescript jsx
// src/componentes/SaudacaoUsuario.tsx - Caminho e nome de arquivo modificados
import React from 'react';

// Interface para as props do componente
interface SaudacaoProps { // Interface "SaudacaoProps"
  nomeUsuario: string; // "nomeUsuario" em vez de "userName"
  cidadeResidencia?: string; // "cidadeResidencia" opcional, em vez de "city"
}

const SaudacaoUsuario: React.FC<SaudacaoProps> = ({ nomeUsuario, cidadeResidencia }) => {
  // Mensagem e lógica modificadas
  let mensagemBoasVindas = `Olá, ${nomeUsuario}! Seja bem-vindo(a) ao nosso sistema.`;
  if (cidadeResidencia) {
    mensagemBoasVindas += ` Vemos que você é de ${cidadeResidencia}.`;
  } else {
    mensagemBoasVindas += ` Esperamos que goste da sua experiência.`;
  }

  return (
    <div>
      <h1>{mensagemBoasVindas}</h1>
      <p>Este é um componente React simples usando TypeScript.</p> {/* Mensagem modificada */}
    </div>
  );
};

export default SaudacaoUsuario;
```

**Uso em outro componente (`App.tsx`):**

```typescript jsx
// src/App.tsx
import React from 'react';
import SaudacaoUsuario from './componentes/SaudacaoUsuario'; // Caminho modificado
import './App.css'; // Supondo um CSS básico

function App() {
  // Nomes e dados modificados
  const usuarioAtual = { nome: "Ana Clara", localidade: "Fortaleza" };
  const outroUsuario = { nome: "Marcos Vinicius" };

  return (
    <div className="App">
      <header className="App-header">
        <SaudacaoUsuario nomeUsuario={usuarioAtual.nome} cidadeResidencia={usuarioAtual.localidade} />
        <hr />
        <SaudacaoUsuario nomeUsuario={outroUsuario.nome} />
      </header>
    </div>
  );
}
export default App;
```

**Saída Esperada (Renderizado no Navegador):**

```html
<div>
  <h1>Olá, Ana Clara! Seja bem-vindo(a) ao nosso sistema. Vemos que você é de Fortaleza.</h1>
  <p>Este é um componente React simples usando TypeScript.</p>
</div>
<hr />
<div>
  <h1>Olá, Marcos Vinicius! Seja bem-vindo(a) ao nosso sistema. Esperamos que goste da sua experiência.</h1>
  <p>Este é um componente React simples usando TypeScript.</p>
</div>
```

**2. Hook `useState` e `useEffect` (`ContadorDinamico.tsx`):**

{% raw %}

```typescript jsx
// src/componentes/ContadorDinamico.tsx - Caminho e nome de arquivo modificados
import React, { useState, useEffect } from 'react';

interface ContadorProps { // Interface "ContadorProps"
  valorInicial?: number; // "valorInicial" em vez de "initialValue"
  incremento?: number;   // "incremento" em vez de "step"
}

const ContadorDinamico: React.FC<ContadorProps> = ({ valorInicial = 0, incremento = 2 }) => { // Valores padrão modificados
  const [contagem, setContagem] = useState<number>(valorInicial); // "contagem", "setContagem"
  const [mensagem, setMensagem] = useState<string>(""); // "mensagem", "setMensagem"

  // useEffect para atualizar o título da página e uma mensagem
  useEffect(() => {
    document.title = `Contagem Atual: ${contagem}`; // "Contagem Atual"
    if (contagem > 10) { // Limite modificado
        setMensagem("A contagem ultrapassou 10! Ótimo progresso!"); // Mensagem modificada
    } else if (contagem < 0) {
        setMensagem("A contagem é negativa. Cuidado!"); // Mensagem modificada
    }
     else {
        setMensagem("Continue contando..."); // Mensagem modificada
    }
    // Função de limpeza (cleanup)
    return () => {
      // Exemplo: document.title = "React App"; // Resetar título ao desmontar
      console.log(`Componente ContadorDinamico (contagem: ${contagem}) está sendo limpo ou atualizado.`);
    };
  }, [contagem]); // Array de dependências: executa quando 'contagem' muda

  const aumentarContagem = () => setContagem(contagemAnterior => contagemAnterior + incremento); // "aumentarContagem", "contagemAnterior"
  const diminuirContagem = () => setContagem(contagemAnterior => contagemAnterior - incremento); // "diminuirContagem"
  const zerarContagem = () => setContagem(0); // "zerarContagem"

  return (
    <div>
      <h2>Contador Dinâmico</h2> {/* Título modificado */}
      <p>Valor Atual da Contagem: <strong>{contagem}</strong></p> {/* Texto modificado */}
      <button onClick={aumentarContagem}>Aumentar em {incremento}</button> {/* Texto modificado */}
      <button onClick={diminuirContagem}>Diminuir em {incremento}</button> {/* Texto modificado */}
      <button onClick={zerarContagem}>Zerar Contagem</button> {/* Texto modificado */}
      {mensagem && <p style={{ color: contagem > 10 ? 'green' : contagem < 0 ? 'red' : 'blue' }}>{mensagem}</p>} {/* Estilo e condição modificados */}
    </div>
  );
};

export default ContadorDinamico;
```



**Uso em `App.tsx`:**

```typescript jsx
// ... (importações anteriores)
import ContadorDinamico from './componentes/ContadorDinamico'; // Caminho modificado

function App() {
  // ...
  return (
    <div className="App">
      {/* ... (SaudacaoUsuario) */}
      <hr />
      <ContadorDinamico valorInicial={5} incremento={3} /> {/* Props modificadas */}
    </div>
  );
}
// ...
```

**Comportamento Esperado:**
Ao carregar, a contagem inicia em 5. Clicar em "Aumentar em 3" muda para 8, depois 11, etc. Clicar em "Diminuir em 3" muda para 2, -1, etc. O título da aba do navegador reflete a contagem. A mensagem muda conforme a contagem (ex: "A contagem ultrapassou 10\! Ótimo progresso\!" quando maior que 10).

**3. Consumindo uma API (Exemplo com `fetch` e `useEffect` - `ListaDeTarefas.tsx`):**

```typescript jsx
// src/componentes/ListaDeTarefas.tsx - Nome e caminho modificados
import React, { useState, useEffect } from 'react';

interface Tarefa { // Interface "Tarefa"
  id: number;
  userId: number; // Mantido como userId por ser comum em APIs
  title: string;
  completed: boolean;
}

const ListaDeTarefas: React.FC = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]); // "tarefas", "setTarefas"
  const [carregando, setCarregando] = useState<boolean>(true); // "carregando", "setCarregando"
  const [erro, setErro] = useState<string | null>(null); // "erro", "setErro"
  const [limiteTarefas, setLimiteTarefas] = useState<number>(3); // Limite de tarefas a serem exibidas, modificado para 3

  useEffect(() => {
    const buscarTarefas = async () => { // "buscarTarefas"
      try {
        setCarregando(true);
        setErro(null);
        // Usando _limit para pegar menos dados da API de exemplo
        const resposta = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limiteTarefas}`);
        if (!resposta.ok) {
          throw new Error(`Falha na requisição: ${resposta.status}`); // Mensagem traduzida
        }
        const dados: Tarefa[] = await resposta.json();
        setTarefas(dados);
      } catch (e: any) {
        setErro(e.message);
      } finally {
        setCarregando(false);
      }
    };

    buscarTarefas();
  }, [limiteTarefas]); // Re-executa se limiteTarefas mudar

  if (carregando) return <p>Carregando tarefas...</p>; // Mensagem traduzida
  if (erro) return <p>Erro ao buscar tarefas: {erro}</p>; // Mensagem traduzida

  return (
    <div>
      <h2>Minha Lista de Tarefas (Primeiras {limiteTarefas})</h2> {/* Título modificado */}
      <label htmlFor="limite">Exibir tarefas: </label> {/* Label traduzida */}
      <select id="limite" value={limiteTarefas} onChange={e => setLimiteTarefas(Number(e.target.value))}>
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={7}>7</option>
      </select>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa.id} style={{ textDecoration: tarefa.completed ? 'line-through' : 'none', color: tarefa.completed ? 'gray' : 'black' }}>
            {tarefa.title} (ID: {tarefa.id}) {/* Texto modificado */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeTarefas;
```

{% endraw %}


**Uso em `App.tsx`:**

```typescript jsx
// ...
import ListaDeTarefas from './componentes/ListaDeTarefas'; // Caminho modificado

function App() {
  // ...
  return (
    <div className="App">
      {/* ... (componentes anteriores) */}
      <hr />
      <ListaDeTarefas />
    </div>
  );
}
// ...
```

**Comportamento Esperado:**
O componente buscará e exibirá os primeiros 3 títulos de tarefas da API JSONPlaceholder. Haverá mensagens de "Carregando..." e de erro, se aplicável. O usuário pode alterar o número de tarefas exibidas através de um select. As tarefas concluídas serão tachadas e em cinza.

## 📱 11 Mobile

**Conteúdo do PDF:** Angular, React native, Flutter, lonic. [cite: 1] (O PDF página 3 lista Angular, React native, Flutter, lonic para o módulo 11 Mobile, mas não fornece descrição detalhada, apenas os nomes).

**Conceitos Complementares:**

O desenvolvimento mobile permite criar aplicações para dispositivos como smartphones e tablets. Existem diferentes abordagens:

* **Desenvolvimento Nativo:**

    * Criação de aplicativos específicos para cada plataforma (iOS ou Android) usando suas linguagens e SDKs nativos.
    * **iOS:** Swift ou Objective-C.
    * **Android:** Kotlin ou Java.
    * **Vantagens:** Melhor desempenho, acesso total a recursos do dispositivo, experiência de usuário otimizada para a plataforma.
    * **Desvantagens:** Requer bases de código separadas, maior custo e tempo de desenvolvimento se o alvo for multiplataforma.

* **Desenvolvimento Cross-Platform (Multiplataforma):**

    * Permite escrever código uma vez (ou a maior parte dele) e compilá-lo ou interpretá-lo para rodar em múltiplas plataformas.
    * **React Native (Facebook/Meta):**
        * Usa JavaScript/TypeScript e React para construir UIs nativas.
        * Componentes React são traduzidos para componentes UI nativos.
        * Boa performance, grande comunidade, reutilização de código web.
        * **Exemplo:** Um componente `<View>` em React Native é renderizado como `UIView` no iOS e `android.view` no Android.
    * **Flutter (Google):**
        * Usa a linguagem Dart e seu próprio motor de renderização (Skia) para desenhar a UI.
        * Oferece widgets customizáveis e compila para código nativo ARM.
        * Excelente performance, UI expressiva e flexível, hot reload rápido.
        * **Exemplo:** Tudo em Flutter é um widget, desde um simples `Text` até a estrutura da aplicação com `MaterialApp`.
    * **Angular (com NativeScript ou Ionic - ver Híbrido):**
        * **NativeScript:** Permite construir aplicações verdadeiramente nativas usando Angular, Vue.js ou JavaScript puro, acessando APIs nativas diretamente.
        * **Exemplo:** `<Button text="Meu Botão Nativo" (tap)="onTap()"></Button>` em Angular com NativeScript.

* **Desenvolvimento Híbrido (Hybrid):**

    * Aplicações construídas com tecnologias web (HTML, CSS, JavaScript) e encapsuladas em um contêiner nativo (WebView).
    * Frameworks fornecem acesso a algumas APIs nativas através de plugins/bridges.
    * **Ionic (baseado em Angular, React ou Vue):**
        * Usa tecnologias web para criar a UI.
        * Empacota a aplicação com Capacitor ou Cordova para rodar como app nativo e acessar funcionalidades do dispositivo.
        * Rápido para prototipar, grande reutilização de código web.
        * Pode ter limitações de performance e acesso a recursos muito específicos em comparação com nativo ou React Native/Flutter.
        * **Exemplo:** `<ion-button (click)="fazerAlgo()">Meu Botão Ionic</ion-button>` em Ionic com Angular.

**Escolhendo a Abordagem:**
A escolha entre nativo, cross-platform ou híbrido depende de fatores como:

* Requisitos de performance.
* Complexidade da UI e acesso a recursos nativos.
* Orçamento e prazo do projeto.
* Conhecimento da equipe de desenvolvimento.

Este curso parece focar em **React Native** e **Flutter** como opções cross-platform, e **Ionic** como uma opção híbrida (frequentemente associada ao Angular, mas também compatível com React e Vue).

## 📊 12 Estrutura de Dados

**Conteúdo do PDF:** Listas, pilhas, filas, conjuntos e dicionários, árvores, grafos. [cite: 1] (O PDF página 3 lista esses tópicos para o módulo 12 Estrutura de Dados).

**Conceitos Complementares:**

* **Estrutura de Dados:** Uma forma particular de organizar e armazenar dados em um computador para que possam ser acessados e modificados eficientemente.
* **Complexidade de Algoritmos (Big O Notation):** Forma de medir a eficiência de um algoritmo em termos de tempo de execução (complexidade de tempo) ou espaço de memória utilizado (complexidade de espaço), conforme o tamanho da entrada aumenta. Ex: $O(1)$ (constante), $O(\\log n)$ (logarítmico), $O(n)$ (linear), $O(n \\log n)$, $O(n^2)$ (quadrático), $O(2^n)$ (exponencial).
* **A Importância da Escolha Correta:** A escolha da estrutura de dados adequada pode impactar significativamente o desempenho de um programa.

**Principais Estruturas de Dados:**

1.  **Listas (Arrays e Listas Ligadas):**

    * **Arrays:** Coleção de elementos do mesmo tipo armazenados em posições de memória contíguas. Acesso rápido por índice ($O(1)$). Inserção/deleção no meio pode ser lenta ($O(n)$). Tamanho geralmente fixo (em algumas implementações) ou dinâmico (com realocação).
        * *Java:* `int[] meuArray = new int[10]; ArrayList<String> minhaLista = new ArrayList<>();`
    * **Listas Ligadas (Linked Lists):** Coleção de elementos (nós) onde cada nó contém dados e uma referência (ponteiro) para o próximo nó (e, opcionalmente, para o anterior em listas duplamente ligadas). Inserção/deleção eficientes ($O(1)$ se o nó é conhecido). Acesso sequencial ($O(n)$). Tamanho dinâmico.
        * *Java:* `LinkedList<String> minhaListaLigada = new LinkedList<>();`

2.  **Pilhas (Stacks):**

    * Coleção que segue o princípio LIFO (Last-In, First-Out) - o último elemento a entrar é o primeiro a sair.
    * Operações principais: `push` (adicionar no topo), `pop` (remover do topo), `peek` (ver o topo).
    * Usos: Histórico de "voltar" em navegadores, chamadas de função (call stack).
    * *Java:* `Stack<Integer> minhaPilha = new Stack<>();` (embora `Deque<Integer> minhaPilha = new ArrayDeque<>();` seja preferível).

3.  **Filas (Queues):**

    * Coleção que segue o princípio FIFO (First-In, First-Out) - o primeiro elemento a entrar é o primeiro a sair.
    * Operações principais: `enqueue` (adicionar no final), `dequeue` (remover do início), `peek` (ver o início).
    * Usos: Gerenciamento de tarefas, buffers.
    * *Java:* `Queue<String> minhaFila = new LinkedList<>();` ou `Queue<String> minhaFila = new ArrayDeque<>();`

4.  **Conjuntos (Sets):**

    * Coleção de elementos únicos, sem ordem específica (em algumas implementações) ou ordenados (ex: `TreeSet`).
    * Operações principais: `add`, `remove`, `contains`. Útil para verificar pertencimento e remover duplicatas.
    * *Java:* `Set<String> meuConjunto = new HashSet<>();` (sem ordem), `Set<String> meuConjuntoOrdenado = new TreeSet<>();` (ordenado).

5.  **Dicionários (Mapas ou Tabelas Hash):**

    * Coleção de pares chave-valor. Cada chave é única e mapeia para um valor.
    * Operações principais: `put` (adicionar/atualizar par), `get` (obter valor pela chave), `remove` (remover par pela chave), `containsKey`.
    * Implementação comum usa tabelas hash para acesso rápido (em média $O(1)$).
    * *Java:* `Map<String, Integer> meuDicionario = new HashMap<>();` (sem ordem), `Map<String, Integer> meuDicionarioOrdenado = new TreeMap<>();` (ordenado pelas chaves).

6.  **Árvores (Trees):**

    * Estrutura de dados hierárquica que consiste em nós conectados por arestas.
    * Tipos comuns:
        * **Árvore Binária:** Cada nó tem no máximo dois filhos (esquerdo e direito).
        * **Árvore Binária de Busca (BST):** Árvore binária onde, para cada nó, todos os valores na subárvore esquerda são menores e todos na subárvore direita são maiores. Permite busca, inserção e deleção eficientes (em média $O(\\log n)$ para árvores balanceadas).
        * **Árvores Balanceadas (AVL, Rubro-Negra):** BSTs que se auto-balanceiam para garantir desempenho logarítmico.
    * Usos: Representar hierarquias (DOM HTML), árvores de decisão, indexação em bancos de dados.
    * *Java:* `TreeSet` e `TreeMap` usam árvores rubro-negras internamente. Não há uma classe `BinarySearchTree` direta na API padrão, mas pode ser implementada.

7.  **Grafos (Graphs):**

    * Conjunto de nós (vértices) conectados por arestas. As arestas podem ser direcionadas ou não direcionadas, e podem ter pesos.
    * Usos: Redes sociais, mapas rodoviários, modelagem de redes de computadores, dependências de tarefas.
    * Algoritmos comuns: Busca em largura (BFS), busca em profundidade (DFS), caminho mínimo (Dijkstra, Bellman-Ford), árvore geradora mínima (Kruskal, Prim).
    * Não há uma implementação direta de grafos na API padrão do Java, geralmente são implementados usando listas de adjacência ou matrizes de adjacência.

**Exemplo Prático em Java: Uso de `HashMap` (Dicionário)**

```java
package curso.estruturas;

import java.util.HashMap;
import java.util.Map;

// Classe "ContatosAgenda" em vez de "PhoneBook"
public class ContatosAgenda {

    public static void main(String[] args) {
        // Nomes e números modificados
        Map<String, String> agendaTelefonica = new HashMap<>(); // "agendaTelefonica"

        // Adicionando contatos (put)
        agendaTelefonica.put("Beatriz Almeida", "(81) 98877-6655"); // Nome e número modificados
        agendaTelefonica.put("Carlos Andrade", "(21) 97766-5544");
        agendaTelefonica.put("Daniela Borges", "(11) 96655-4433"); // Adicionado novo contato
        agendaTelefonica.put("Beatriz Almeida", "(81) 99999-0000"); // Atualiza o número de Beatriz (chaves são únicas)

        // Obtendo um número de telefone (get)
        String numeroBeatriz = agendaTelefonica.get("Beatriz Almeida"); // "numeroBeatriz"
        System.out.println("O novo número de Beatriz Almeida é: " + numeroBeatriz); // Saída esperada: (81) 99999-0000

        // Verificando se um contato existe (containsKey)
        String nomeBusca = "Fernanda Costa"; // "nomeBusca" e nome modificado
        if (agendaTelefonica.containsKey(nomeBusca)) {
            System.out.println(nomeBusca + " está na agenda. Número: " + agendaTelefonica.get(nomeBusca));
        } else {
            System.out.println(nomeBusca + " não foi encontrada na agenda."); // Saída esperada
        }

        // Removendo um contato (remove)
        agendaTelefonica.remove("Carlos Andrade");
        System.out.println("Carlos Andrade foi removido.");

        // Iterando sobre os contatos (keySet e for-each)
        System.out.println("\n--- Lista de Contatos Atualizada ---"); // Título modificado
        for (String nomeContato : agendaTelefonica.keySet()) { // "nomeContato"
            System.out.println("Contato: " + nomeContato + " - Telefone: " + agendaTelefonica.get(nomeContato));
        }
        // Saída Esperada (ordem pode variar no HashMap):
        // Contato: Beatriz Almeida - Telefone: (81) 99999-0000
        // Contato: Daniela Borges - Telefone: (11) 96655-4433

        // Iterando sobre os valores (values)
        System.out.println("\n--- Apenas os Números de Telefone ---"); // Título modificado
        for(String numero : agendaTelefonica.values()){
            System.out.println(numero);
        }

        // Iterando sobre as entradas (entrySet)
        System.out.println("\n--- Entradas (Nome e Número) ---"); // Título modificado
        for(Map.Entry<String, String> entrada : agendaTelefonica.entrySet()){
            System.out.println("Chave: " + entrada.getKey() + ", Valor: " + entrada.getValue());
        }
    }
}
```

**Saída Esperada (a ordem das linhas pode variar para HashMap, exceto a primeira `println`):**

```
O novo número de Beatriz Almeida é: (81) 99999-0000
Fernanda Costa não foi encontrada na agenda.
Carlos Andrade foi removido.

--- Lista de Contatos Atualizada ---
Contato: Beatriz Almeida - Telefone: (81) 99999-0000
Contato: Daniela Borges - Telefone: (11) 96655-4433

--- Apenas os Números de Telefone ---
(81) 99999-0000
(11) 96655-4433

--- Entradas (Nome e Número) ---
Chave: Beatriz Almeida, Valor: (81) 99999-0000
Chave: Daniela Borges, Valor: (11) 96655-4433
```
