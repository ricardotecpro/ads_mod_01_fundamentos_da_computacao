# Roteiro de Slides - Aula 07

---

## O Conceito de Remoto

- Até agora, o Git só existia no seu HD (`.git` local).
- Um **Remote** é uma versão do seu repositório hospedada em outro lugar (GitHub, GitLab, Bitbucket).
- O sonho do desenvolvedor: "Codar local, compartilhar global".

---

## Criando o Repositório

- No GitHub: Botão "New".
- Configurações iniciais:
  - **Público**: Todos veem, você controla quem edita. (Bom para Portfólio).
  - **Privado**: Só você vê. (Bom para projetos de clientes/secretos).

---

## O Comando: git remote

- `git remote add origin https://...`
- Tradução: "Git, adicione um servidor remoto, chame-o de 'origin', e o endereço é este URL."
- Por que 'origin'? É apenas uma convenção. Poderia ser 'github', 'nuvem', 'batata'. Mas use 'origin'.

---

## O Comando: git push

- `git push -u origin main`
- Tradução: "Git, empurre (push) minha branch `main` para o servidor `origin`."
- `-u`: Cria o vínculo permanente. Nos próximos, basta `git push`.

---

## O Comando: git clone

- `git clone URL`
- Tradução: "Baixe tudo deste link e crie uma pasta com o mesmo nome aqui."
- Traz arquivos + histórico completo.

---

## O Arquivo .gitignore

- **Essencial** para profissionalismo.
- Lista negra do Git.
- O que colocar?
  - Arquivos de configuração da IDE (`.vscode`).
  - Arquivos compilados (`.exe`, `.pyc`).
  - Dependências gigantes (`node_modules`).
  - Senhas e Tokens (`.env`).
