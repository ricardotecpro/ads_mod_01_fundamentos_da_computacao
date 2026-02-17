# Configuração do Ambiente (Windows)

Este guia irá ajudá-lo a instalar e configurar o **Git** no Windows.

## 1. Instalando o Git

O Git é a ferramenta essencial que usaremos durante todo o curso.

### Passo 1: Baixar
1. Acesse o site oficial: [git-scm.com/download/win](https://git-scm.com/download/win).
2. O download deve começar automaticamente. Se não, clique em **Click here to download**.

### Passo 2: Instalar
1. Execute o instalador baixado (`Git-2.x.x-64-bit.exe`).
2. Siga o processo de instalação (clique em **Next** repetidamente).
3. **Opções Importantes**:
   - Quando perguntar sobre o editor padrão, você pode deixar o **Vim** (padrão) ou escolher o **Visual Studio Code** se já tiver instalado.
   - Na opção de "Adjusting your PATH environment", deixe a opção recomendada (**Git from the command line and also from 3rd-party software**).
   - Nas demais telas, pode manter o padrão.
4. Clique em **Install**.
5. Aguarde e clique em **Finish**.

---

## 2. Testando a Instalação

Vamos garantir que o Git está pronto para uso.

1. Abra o menu Iniciar e procure por **Git Bash**.
2. Abra o aplicativo **Git Bash**. Ele é um terminal poderoso que simula comandos Linux no Windows.
3. Digite o seguinte comando e aperte Enter:

   ```bash
   git --version
   ```

4. Se aparecer algo como `git version 2.40.0.windows.1`, parabéns! O Git está instalado.

---

## 3. Configuração Obrigatória (Identidade)

Antes de fazer qualquer commit, você precisa dizer ao Git quem você é.

No **Git Bash**, execute os dois comandos abaixo (substitua pelos seus dados):

```bash
git config --global user.name "Seu Nome Completo"
git config --global user.email "seu.email@exemplo.com"
```

> **Dica**: Use o mesmo email que você usou (ou usará) para criar sua conta no GitHub.

Para verificar se salvou, digite:

```bash
git config --list
```

Procure por `user.name` e `user.email` na lista.

---

## 4. (Opcional) Visual Studio Code

Embora o Git funcione no terminal, recomendamos o **VSCode** para editar os arquivos do curso.

1. Baixe em [code.visualstudio.com](https://code.visualstudio.com/).
2. Instale normalmente.
3. Ele possui integração nativa com o Git!

🎉 **Pronto! Seu ambiente Windows está configurado.**
