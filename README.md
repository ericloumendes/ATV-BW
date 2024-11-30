# Configurações do projeto:
## Configurando e instalando o backend
Navegue até a pasta /backend:
```
cd ./backend
```

então execute o comando:
```
npm install
```

Entre em src/config/connection.ts e edite esse arquivo:
Coloque as informações remetentes ao seu banco de dados mysql
```ts
const sequelize = new Sequelize({
    database: "Sua-Database",
    username: "Usuário",
    password: "Senha", // mudar senha
    host: "ip-da-database", // colocar domínio
    port: 3306, // colocar porta
    dialect: 'mysql',
    models: [Cliente, Produto, ProdutoConsumo, Servico, ServicoConsumo, Telefones, Rgs],
  });
```

## Instalando o frontend
na raiz do projeto, acesse:
```
cd ./frontend
```

e execute o comando:
```
npm install
```

## Inicializar:
Na raiz do repositório
navegue até a pasta /backend
```
cd ./backent
```

execute o backend com o comando:
```
npm start
```

va até a pasta /frontend
```
cd ../frontend
```

inicie o frontend com o comando:
```
npm start
```

acesse a url: http://localhost:3000/