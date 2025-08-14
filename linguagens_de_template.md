## **O que são Linguagens de Template?**

As **linguagens de template** são ferramentas que facilitam a geração dinâmica de HTML (ou outros tipos de arquivos) combinando **código dinâmico** com **estruturas estáticas**. Elas são amplamente usadas em **desenvolvimento web backend e frontend**, permitindo separar a **lógica de programação** da **apresentação**.

---

## **1. Como Funcionam?**

Uma linguagem de template utiliza **variáveis, loops e condicionais** dentro de um arquivo de modelo (template), que depois é processado para gerar o HTML final.

📌 **Exemplo de funcionamento básico:**

{% raw %}

```
1. O template contém **marcadores dinâmicos** (`{{ }}` ou `{% %}`).
2. Um **motor de template** substitui esses marcadores por valores reais.
3. O resultado final é um **arquivo HTML renderizado** no navegador.
```

---

## **2. Exemplos de Linguagens de Template**

### **2.1 EJS (Node.js)**

O **EJS (Embedded JavaScript Templates)** é um motor de templates para **Node.js**, muito usado com **Express.js**.

📌 **Exemplo de Template EJS (`index.ejs`)**

```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <title>Bem-vindo</title>
</head>
<body>
    <h1>Olá, <%= nome %>!</h1>
</body>
</html>
```

📌 **Código Node.js para renderizar o template**

```javascript
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { nome: 'Carlos' });
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
```

🔹 **O que acontece?**  
O **`<%= nome %>`** será substituído por `"Carlos"`, gerando a página final.

---

### **2.2 Handlebars (Node.js, JavaScript)**

O **Handlebars** é outra linguagem de template muito usada, com uma sintaxe mais estruturada.

📌 **Exemplo de Template Handlebars (`index.hbs`)**

```html
<h1>Olá, {{nome}}!</h1>
```

📌 **Código Node.js com Express e Handlebars**

```javascript
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('index', { nome: 'Ana' });
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
```

🔹 O **`{{nome}}`** será substituído por `"Ana"`.

---

### **2.3 Thymeleaf (Java com Spring Boot)**

No **Java (Spring Boot)**, a linguagem de template mais comum é **Thymeleaf**.

📌 **Exemplo de Template Thymeleaf (`index.html`)**

```html
<h1>Olá, <span th:text="${nome}"></span>!</h1>
```

📌 **Código Java com Spring Boot**

```java
@Controller
public class HomeController {
    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("nome", "Mariana");
        return "index";
    }
}
```

🔹 O **`th:text="${nome}"`** será substituído por `"Mariana"`.

---

### **2.4 Jinja2 (Python com Flask)**

No **Python (Flask, Django)**, a linguagem de template mais usada é **Jinja2**.

📌 **Exemplo de Template Jinja2 (`index.html`)**

```html
<h1>Olá, {{ nome }}!</h1>
```

📌 **Código Python com Flask**

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html', nome='Lucas')

if __name__ == '__main__':
    app.run(debug=True)
```

🔹 O **`{{ nome }}`** será substituído por `"Lucas"`.

{ endraw %}
---

## **3. Benefícios das Linguagens de Template**

✔ **Separam a lógica do backend da interface do usuário**.  
✔ **Evitam repetição de código** com herança de templates.  
✔ **Facilitam a manutenção e escalabilidade do código**.  
✔ **Podem ser combinadas com frameworks populares** como Express, Flask e Spring Boot.

---

## **4. Quando Usar?**

- **Se o projeto é backend renderizado no servidor**, como **Spring Boot, Django, Flask, Express.js**.
- **Se há necessidade de reutilizar componentes de UI**, como em **Handlebars, EJS ou Jinja2**.
- **Se precisa renderizar HTML dinamicamente no servidor**, sem precisar de um frontend SPA.

⚡ **Quer ajuda para escolher a melhor linguagem de template para seu projeto?**

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
