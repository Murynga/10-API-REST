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

  Nela, você pode clicar em um dos alimentos na lista de alimentos para selecioná-lo, e logo em seguida, possui duas opções:

  - Clicar em `Alterar dados`, o que substituirá os dados do alimento selecionado pelos dados inseridos nos respectivos campos;

  - Clicar em `Adicionar novo alimento`, o que adicionará um novo alimento com todos os dados inseridos nos respectivos campos.

  ---
</details>

## Tecnologias utilizadas

Para o desenvolvimento do projeto, foram utilizados arquivos HTML, CSS e JavaScript puros, além de um arquivo JSON, onde ficam os dados utilizados pela API.

A API utilizada foi a [json-server](https://github.com/typicode/json-server), a qual permite a geração de uma API falsa com qualquer tipo de dado, desde que definido no arquivo `db.json` no projeto. Node.js também foi utilizado para a utilização do json-server.

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

  Depois disso, nossa API vai estar *visível* na porta *localhost:3000*, onde podemos vê-la funcionando para teste.

  Agora, para que seja possível fazer o *deploy* do site, na Vercel, com a API funcionando, foi necessário criar um arquivo `server.js`, que cria um servidor de onde acessar os dados da API, e um arquivo de configuração, `vercel.json`, para que a Vercel encontre e execute adequadamente o servidor. Também foi necessário alterar a porta usada no arquivo `main.js`, para uso adequado da Vercel.

  ---
</details>

## Requisições utilizadas

| Página | Tipo de requisição | Endpoint |
| :---: | :---: | :---: |
| [index.html](/index.html) | GET | api/alimentos |
| [pages/administracao.html](/pages/administracao.html) | GET | api/alimentos |
| [pages/administracao.html](/pages/administracao.html) | PUT | api/alimentos |
| [pages/administracao.html](/pages/administracao.html) | POST | api/alimentos |

## Créditos

### Desenvolvimento geral do projeto

https://www.w3schools.com/css/css_form.asp
https://www.w3schools.com/css/css3_flexbox_container.asp
https://github.com/typicode/json-server
https://github.com/orgs/community/discussions/16925
https://www.w3schools.com/jsref/met_document_createelement.asp
https://www.w3schools.com/jsref/prop_element_classlist.asp
https://chatgpt.com/s/t_68a003874b648191a66a40a3ca5e2358

### Desenvolvimento da API

https://github.com/typicode/json-server
https://www.npmjs.com/package/json-server
https://youtu.be/nGB6J4GJ9mw
https://youtu.be/NofcwdmLQ-c
https://youtu.be/3JPY6R0rY_Y
https://chatgpt.com/s/t_689fed0c80e481918c4279b551de9d61
https://chatgpt.com/s/t_68a15b23588081918eeaaab157875410
https://chatgpt.com/s/t_68a15ecfaf488191af02fb27b176e6fe  
https://chatgpt.com/share/68a26f68-0f78-800a-8ab8-0280c3ed8d83

### Referências bibliográficas e imagéticas

https://youtube.com/shorts/BacLTHg6kbk
https://music.apple.com/br/album/os-maiores-sucessos/1628689151
https://cozinhasimples.com.br/lanches/molho-para-cachorro-quente/
https://guiadacozinha.com.br/receitas/peixe-a-parmegiana/
https://padariasantacruz.loji.com.br/produto/120/hamburguer-assado-und
https://guiadacozinha.com.br/receitas/torta-de-abacaxi-sobremesa/
https://casaeculinaria.com/receitas/peixe-cozido/

## Licença

Este repositório é público e distribuído com a [licença MIT](/LICENSE).