// Importando o módulo json-server, criando servidor e roteador para leitura de rotas
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("json/db.json");

// Uso de 'middlewares' padrão
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use("/api", router);

// Exportar a API do servidor
module.exports = server;