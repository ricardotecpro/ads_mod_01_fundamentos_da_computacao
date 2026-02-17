# Configuração do Ambiente (Linux)

Este guia mostra como instalar e configurar o **Git** no Linux (Ubuntu/Debian e derivados).

---

## 1. Instalando o Git

O Git geralmente está disponível nos repositórios oficiais da maioria das distribuições.

### No Ubuntu / Debian / Mint

Abra seu terminal (`Ctrl+Alt+T`) e execute:

```bash
sudo apt update
sudo apt install git -y
```

### No Fedora

```bash
sudo dnf install git -y
```

### No Arch Linux

```bash
sudo pacman -S git
```

---

## 2. Verificando a Versão

Após a instalação, verifique se tudo deu certo:

```bash
git --version
```

**Saída esperada:**
```
git version 2.34.1 (ou superior)
```

---

## 3. Configuração de Identidade (Obrigatória)

O Git exige que você se identifique para registrar a autoria das mudanças.

Execute no terminal:

```bash
git config --global user.name "Seu Nome Completo"
git config --global user.email "seu.email@exemplo.com"
```

> **Nota**: O email deve ser o mesmo da sua conta GitHub.

Verifique se a configuração foi aplicada:

```bash
git config --list
```

---

## 4. Configurando Chave SSH (Opcional, mas Recomendado)

Para não precisar digitar senha a cada push para o GitHub, configure uma chave SSH.

1. Gerar a chave:
   ```bash
   ssh-keygen -t ed25519 -C "seu.email@exemplo.com"
   ```
   (Pressione Enter para todas as perguntas).

2. Iniciar o agente SSH:
   ```bash
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_ed25519
   ```

3. Exibir a chave pública para copiar:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```

4. Copie o resultado (começa com `ssh-ed25519...`) e adicione no GitHub em **Settings > SSH and GPG keys > New SSH key**.

---

## ✅ Pronto!

Agora você tem um ambiente Git completo no Linux! 🐧

**Próximos passos:**
- Vá para [Aula 01](../aulas/aula-01.md)
- Comece a versionar seus projetos!
