# 10-API-REST

## Nome: [Walisson Fernandes Dias](https://github.com/Murynga)

## Sumário

- [Sumário](#sumário)
- [Descrição e objetivo do projeto](#descrição-e-objetivo-do-projeto)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Requisições utilizadas](#requisições-utilizadas)
- [Créditos](#créditos)
- [Licença](#licença)

## Descrição e objetivo do projeto

O projeto desenvolvido é o de uma lanchonete de alimentos relacionados ao cantor Ximbinha, que participou da banda Calypso. Os alimentos postos a venda na lanchonete, e seus dados, são provenientes de uma *Fake-API* criada com o auxílio do [json-server](https://github.com/typicode/json-server). O projeto dispõe de uma página inicial, uma página de login e uma página de administração acessada através da página de login.

<details>
  <summary>Como acessar a tela de Administração</summary>
  
  Para acessar a tela de administração, você deve digitar os seguintes nome de  usuário e senha nos respectivos espaços:

  > - Nome de usuário: Cledivan
  > - Senha: Calypso99

  Feito isso, você chegará na seguinte página:

  ![Captura de tela da página de Administração do site](/images/readme-images/pagina-administracao.png)

  Nela, você pode clicar no nome de um dos alimentos na lista de alimentos para selecioná-lo, e logo em seguida, possui duas opções:

  - Clicar em `Alterar informações`, em que será requisitado ao administrador alterar os dados desejados, e pode confirmar a alteração clicando em `OK`;

  - Clicar em `Remover alimento`, em que será perguntado ao administrador se ele tem certeza de que quer remover o alimento escolhido, onde ele pode optar por confirmar ou cancelar a remoção.

  ---
</details>

## Tecnologias utilizadas

Para o desenvolvimento do projeto, foram utilizados arquivos HTML, CSS e JavaScript puros, além de um arquivo JSON, onde ficam os dados utilizados pela API.

A API utilizada foi a [json-server](https://github.com/typicode/json-server), a qual permite a geração de uma API falsa com qualquer tipo de dado, desde que definido no arquivo `db.json` no projeto. Node.js também foi utilizado.

<details>
  <summary>Processo de implementação da API</summary>
  
  Primeiro, foi instalado o *json-server* no projeto, utilizando o seguinte comando no terminal:

  `npm install json-server`

  Depois, foi criado um arquivo *db.json*, o qual foi preenchido com os dados necessários:

  ``` json
  {
    "alimentos": [
        { 
            "id": "1",
            "nome": "Estrela Dourada",
            "ingredientes": "1 salsicha, molho de tomate, cebola, alho, milho verde e o tempero da casa",
            "preco": "R$ 8,00",
            "imagem": "https://cozinhasimples.com.br/wp-content/uploads/cachorro-quente-cozinha-simples.jpg"
        },

        ...
    ]
  }
  ```

  Com os dados da API prontos, deve-se voltar ao terminal e digitar:

  `npx json-server json/db.json`
  
  > [!IMPORTANT]
  > `npx` procura e executa o arquivo pedido, `json-server` inicia o servidor, e `json/db.json` é o caminho para o nosso arquivo JSON.

  Depois disso, nossa API vai estar *visível* na porta *localhost:3000*, onde podemos ve-la funcionando para teste.

  Agora, para que seja possível fazer o *deploy* do site, na Vercel, com a API funcionando, foi necessário criar um arquivo `server.js`, que cria um servidor de onde acessar os dados da API, e um arquivo de configuração, `vercel.json`, para que a Vercel encontre e execute adequadamente o servidor.

  ---
</details>

## Requisições utilizadas

| Página | Tipo de requisição | Endpoint |
| :---: | :---: | :---: |
| [index.html](/index.html) | GET | /alimentos |
| [pages/administracao.html](/pages/administracao.html) | GET | /alimentos |
| [pages/administracao.html](/pages/administracao.html) | PUT | /alimentos |
| [pages/administracao.html](/pages/administracao.html) | DELETE | /alimentos |

## Créditos

### Desenvolvimento geral do projeto



### Desenvolvimento da API



### Referências bibliográficas e imagéticas



## Licença

Este repositório é público e distribuído com a [licença MIT](/LICENSE).