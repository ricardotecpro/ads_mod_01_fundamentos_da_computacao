# 🛠️ Projeto 04: Auditoria de Permissões Unix

Aplique o sistema Octal na prática real de segurança de servidores e aprenda como o Linux gerencia o acesso a arquivos.

## 📝 Contexto
Em sistemas Linux e Servidores Web, o sistema Octal é a linguagem padrão para definir quem pode Ler (4), Escrever (2) ou Executar (1) um arquivo. Domina essa técnica é essencial para qualquer administrador de sistemas ou desenvolvedor backend.

## 🎯 Objetivo
Configurar e documentar as permissões de três pastas críticas de um servidor fictício usando a notação octal e binária.

## 📋 Requisitos
1. **Cenário de Pastas**: Defina as permissões para:
    - **A) Pasta `config` (Privada)**: Apenas o dono pode tudo; os outros nada.
    - **B) Pasta `public` (Site)**: O dono pode tudo; o grupo e outros podem apenas ler e executar.
    - **C) Pasta `upload` (Colaborativa)**: Todos podem ler e escrever, mas ninguém pode executar.
2. **Documentação Técnica**: Para cada pasta, apresente:
    - O número Octal resultante (ex: 755).
    - A representação Binária (agrupando 3 bits por dígito).
    - O comando Linux correspondente (ex: `chmod 755 nome_da_pasta`).

## 🚚 Entrega
Crie uma "Tabela de Segurança" contendo:
- Nome da pasta.
- Nível de acesso (Dono, Grupo, Outros).
- Código Octal e Binário.
- Comando `chmod` sugerido.

---
[:material-book-open-variant: Ver Aula 04](aula-04.md){ .md-button }
[:material-dumbbell: Praticar Exercícios](exercicio-04){ .md-button }
