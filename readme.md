## Sobre o projeto

Esse projeto é uma forma de obter endereço através do CEP.

## Funcionalidades

[x] Cadastro de usuário e senha em banco MongoDB;
[x] Login com autenticação JWT;
[x] Acesso a endereço através do envio do CEP:

- é necessário que o usuário esteja autenticado (TOKEN JWT);
- CEP pode ser enviado com ou sem "-" mas deve ter exatamente 8 números;
- é necessário que o usuário esteja autenticado (TOKEN JWT);
- caso o CEP tenha sido buscado a, no máximo, o tempo determinado no .env/REDIS_EXPIRES_IN, o endereço será retornado pelo cache Redis. Do contrário é feita conexão com a api VIACEP e o endereço é retornado.

## Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [Redis] (https://redis.io/)
- [MongoDB] (https://www.mongodb.com/)

Além disto é recomendável um editor para trabalhar com o código como o [VSCode](https://code.visualstudio.com/)

#### Rodando o Backend (servidor)

````bash
# Clone este repositório
$ git clone
# Acesse a pasta do projeto no terminal/cmd
$ cd CEP-Cache
# Instale as dependências
$ npm install
# Crie o banco de dados mongo
# Configure as variáveis de ambiente e salve o arquivo .env-example como .env
```
SERVER_PORT=porta do servidor - padrão 3000
JWT_KEY=chave para encriptar a chave de acesso jwt
EXPIRES_IN_ACCESS_TOKEN=tempo de validade da chave de acesso, ex: 1h, 1d, 120s - default milisseconds
DB_CONNECTION=string com a url, a porta e o banco de dados para conexão ao banco via mongoose
REDIS_EXPIRES_IN= numero de segundos para expiração da chave no cache Redis
```

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# Como contribuir para o projeto
1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

````

#### Requisições

# Criar Usuário

```
curl -d '{"userEmail": "email@email.com", "userPassword": "123456"}' -H 'Content-Type: application/json' http://localhost:3000/usuarios
```

# Criar Acesso (Login)

```
curl -d '{"userEmail": "email@email.com", "userPassword": "123456"}' -H 'Content-Type: application/json' http://localhost:3000/login
```

# Pesquisar CEP

```
curl -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDQyODgyNDYsImV4cCI6MTY0NDI5MTg0Nn0.2RL0DjoW6wFPD5RmKDFATzWVSCqioP5Z1XwTCuX5r9w http://localhost:3000/cep/35796-048
```
