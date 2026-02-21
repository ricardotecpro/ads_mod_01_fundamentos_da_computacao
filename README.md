# 💻 Fundamentos da Computação - Curso

Curso de Fundamentos da Computação, abordando desde bases numéricas até introdução a algoritmos e lógica.

## 🎯 Sobre o Curso

Este curso oferece uma base sólida para quem está iniciando na área de tecnologia, cobrindo conceitos essenciais de hardware, software e lógica de programação. Através de uma abordagem prática e visual, os alunos aprendem o funcionamento interno dos computadores.

### ✨ Destaques

- ✅ **16 Aulas Completas** - Do bit ao algoritmo.
- ✅ **Slides Modernos** - Apresentações interativas com Reveal.js.
- ✅ **Quizzes Interativos** - Teste seus conhecimentos a cada aula.
- ✅ **Exercícios Práticos** - Fixação de conteúdo com conversões e lógica.
- ✅ **Projetos Semanais** - Aplicação prática dos conceitos.
- ✅ **Design Premium** - Interface moderna com MkDocs Material.

## 🚀 Começando

### Pré-requisitos

- **Python 3.11+**
- **Poetry** (Gerenciador de dependências)

### Instalação

```bash
# Clonar repositório
git clone https://github.com/ricardotecpro/ads_mod_01_fundamentos_da_computacao.git
cd ads_mod_01_fundamentos_da_computacao

# Instalar dependências e ambiente
poetry install
```

## 📚 Comandos Disponíveis

O projeto utiliza **Taskipy** para atalhos de comandos comuns:

```bash
# Iniciar servidor local (MkDocs)
poetry run task docs

# Regenerar slides (Reveal.js)
poetry run task slides

# Converter/Regenerar quizzes
poetry run task quizzes

# Executar testes de integridade
poetry run task test

# Build do site estático
poetry run task build
```

## 📁 Estrutura do Projeto

```
ads_mod_01_fundamentos_da_computacao/
├── docs/                      # Documentação e Conteúdo
│   ├── assets/                # Imagens, CSS, JS customizados
│   ├── aulas/                 # Conteúdo das 16 aulas
│   ├── exercicios/            # Listas de exercícios
│   ├── projetos/              # Projetos práticos
│   ├── quizzes/               # Quizzes interativos (.src e .md)
│   ├── slides/                # Slides Reveal.js (.src, .md e .html)
│   ├── setups/                # Guias de configuração de ambiente
│   └── index.md               # Homepage do site
├── scripts/                   # Scripts de automação (Python)
├── hooks/                     # Hooks customizados para MkDocs
├── pyproject.toml            # Configuração do Poetry e Tasks
└── mkdocs.yml                # Configuração principal do MkDocs
```

## 🎨 Tecnologias

- **MkDocs Material** - Documentação moderna e responsiva.
- **Reveal.js** - Slides baseados em web.
- **MathJax** - Renderização de fórmulas matemáticas.
- **Mermaid.js** - Diagramas e fluxogramas via código.
- **Termynal.js** - Simulação de terminal interativo.

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, siga o fluxo de Pull Request padrão do GitHub.

## 📝 Licença

Este projeto está sob a licença [MIT](LICENSE).

## 👤 Autor

**Ricardo Tec Pro**

- GitHub: [@ricardotecpro](https://github.com/ricardotecpro)
- LinkedIn: [ricardotecpro](https://linkedin.com/in/ricardotecpro)
- Portfólio: [ricardotecpro.github.io](https://ricardotecpro.github.io/)
