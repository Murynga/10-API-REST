// Importando o módulo json-server, criando servidor e roteador para leitura de rotas
const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "../json/db.json"));

// Uso de 'middlewares' padrão
const middlewares = jsonServer.defaults();

server.use(middlewares);

// diz onde procurar os dados da API
server.use(
    jsonServer.rewriter({
        "/*": "/$1"
    })
);

server.use(router);

// Exportar a API do servidor
module.exports = server;