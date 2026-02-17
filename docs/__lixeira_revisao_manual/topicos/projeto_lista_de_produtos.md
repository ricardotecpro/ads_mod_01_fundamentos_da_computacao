# Tutorial Atualizado: Configurando Spring Boot e Angular

Configuração de um projeto **Spring Boot (backend)** e **Angular (frontend)** para consumir uma API REST com suporte a CORS e banco de dados H2/MySQL. Além disso, forneceremos um arquivo `docker-compose.yml` para facilitar a execução do projeto.

---

## **1. Criando o Backend - Spring Boot**

### **1.1 Criando o Projeto Spring Boot**

Use o **Spring Initializr** ([start.spring.io](https://start.spring.io)) com as seguintes dependências:

- Spring Web
- Spring Boot DevTools
- Spring Data JPA
- H2 Database (para homologação) / MySQL Driver (para produção)

Baixe o projeto e extraia na sua IDE (IntelliJ, VS Code, Eclipse, etc.).

Se preferir via CLI, execute:

```sh
mvn archetype:generate -DgroupId=com.seu_projeto -DartifactId=backend -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
```

---

### **1.2 Criando a Entidade** `Produto`

Crie a classe `Produto.java` em `src/main/java/com/seu_projeto/model/`:

```java
package com.seu_projeto.model;

import jakarta.persistence.*;

@Entity
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private Double preco;

    // Getters e Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    public Double getPreco() { return preco; }
    public void setPreco(Double preco) { this.preco = preco; }
}
```

---

### **1.3 Criando o Repositório**

Crie a interface `ProdutoRepository.java` em `src/main/java/com/seu_projeto/repository/`:

```java
package com.seu_projeto.repository;

import com.seu_projeto.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
```

---

### **1.4 Criando o Controller**

Crie `ProdutoController.java` em `src/main/java/com/seu_projeto/controller/`:

```java
package com.seu_projeto.controller;

import com.seu_projeto.model.Produto;
import com.seu_projeto.repository.ProdutoRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/produtos")
@CrossOrigin(origins = "http://localhost:4200") // Permitir acesso do Angular
public class ProdutoController {
    private final ProdutoRepository produtoRepository;

    public ProdutoController(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }

    @GetMapping
    public List<Produto> getAllProdutos() {
        return produtoRepository.findAll();
    }
}
```

---

### **1.5 Configurando o Banco de Dados**

No arquivo `src/main/resources/application.properties`, configure:

#### **Para Homologação (H2 Database)**

```properties
spring.datasource.url=jdbc:h2:mem:teste
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.h2.console.enabled=true
```

#### **Para Produção (MySQL)**

```properties
spring.datasource.url=jdbc:mysql://mysql:3306/seu_banco
spring.datasource.username=root
spring.datasource.password=senha
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect
spring.jpa.hibernate.ddl-auto=update
```

---

### **1.6 Configurando o CORS**

Crie `CorsConfig.java` em `src/main/java/com/seu_projeto/config/`:

```java
package com.seu_projeto.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:4200")
                        .allowedMethods("GET", "POST", "PUT", "DELETE")
                        .allowedHeaders("*")
                        .allowCredentials(true);
            }
        };
    }
}
```

Reinicie o Spring Boot:

```sh
./mvnw spring-boot:run
```

---

## **2. Criando Dockerfiles para Backend e Frontend**

Crie um arquivo `Dockerfile` dentro da pasta **backend**:

```dockerfile
FROM openjdk:21-jdk-slim
WORKDIR /app
COPY target/backend.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
```

Crie um arquivo `Dockerfile` dentro da pasta **frontend**:

```dockerfile
FROM node:20
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY ../_analisar/_apresentacao_do_curso/estudos .
RUN npm run build
CMD ["npm", "start"]
```

---

## **3. Criando Docker Compose Separado para Backend, Frontend, Banco de Dados e Nginx**

Crie um arquivo `docker-compose.yml` na raiz do projeto:

```yaml
version: '3.8'

services:
  backend:
    build: ./backend
    ports:
      - "8080:8080"
    environment:
      SPRING_DATASOURCE_URL: jdbc:mysql://mysql:3306/seu_banco
      SPRING_DATASOURCE_USERNAME: root
      SPRING_DATASOURCE_PASSWORD: senha
    depends_on:
      - mysql

  mysql:
    image: mysql:8.0
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: senha
      MYSQL_DATABASE: seu_banco
    ports:
      - "3306:3306"
    volumes:
      - mysql-data:/var/lib/mysql

  frontend:
    build: ./frontend
    ports:
      - "4200:4200"
    depends_on:
      - backend

  nginx:
    image: nginx:latest
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - frontend

volumes:
  mysql-data:
```

Para iniciar o projeto com Docker Compose, execute:

```sh
docker-compose up --build
```

Agora o Angular, o Spring Boot, o MySQL e o Nginx estão configurados corretamente e podem ser executados em containers Docker separados. 🚀

---

### 🚀 [ricardotecpro.github.io](https://ricardotecpro.github.io/)
