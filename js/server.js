// Importando o módulo json-server, criando servidor e roteador para leitura de rotas
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("/json/db.json");

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

// Escutar a porta
server.listen(3000, () => {
    console.log("Escutando na porta 3000");
});

// Exportar a API do servidor
module.exports = server;