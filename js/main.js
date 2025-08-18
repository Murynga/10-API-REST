const listaAlimentos = document.getElementById("lista-alimentos");
const url = "/api/alimentos/";
let alimentoSelecionado = null;

preencheLista();

// função para checar se o usuário e senha inseridos são de administrador
function checaAdmin() {
    let formulario = document.getElementById("formulario-login");
    formulario.addEventListener("submit", (login) => {
        login.preventDefault();
        let nomeUsuario = formulario.elements[0].value;
        let senha = formulario.elements[1].value;
        if (nomeUsuario === "Cledivan" && senha === "Calypso99") {
            window.location.href = "/pages/administracao.html";
        } else {
            window.location.href = "/index.html";
        }
    });
}

// função assíncrona para preencher a lista de alimentos
async function preencheLista() {
    const alimentos = await getAlimentos();
    
    for (let alimento of alimentos) {
        let blocoAlimento = document.createElement("div");
        blocoAlimento.classList.add("bloco-alimento");

        let img = document.createElement("img");
        img.src = alimento.imagem;
        img.alt = alimento.nome;
        img.classList.add("imagem-alimento");

        let dados = document.createElement("div");
        dados.classList.add("bloco-dados-alimento");

        let nome = document.createElement("h3");
        nome.textContent = alimento.nome;
        nome.classList.add("dados-alimento");

        let ingredientes = document.createElement("p");
        ingredientes.textContent = `Ingredientes: ${alimento.ingredientes}`;
        ingredientes.classList.add("dados-alimento");

        let preco = document.createElement("p");
        preco.textContent = `Preço: ${alimento.preco}`;
        preco.classList.add("dados-alimento");


        
        dados.appendChild(nome);
        dados.appendChild(ingredientes);
        dados.appendChild(preco);
        
        blocoAlimento.appendChild(img);
        blocoAlimento.appendChild(dados);
        
        blocoAlimento.addEventListener("click", () => {
            
            const todosBlocos = document.querySelectorAll(".bloco-alimento");
            todosBlocos.forEach(b => b.classList.remove("selecionado"));

            blocoAlimento.classList.add("selecionado");
            
            alimentoSelecionado = [alimento.id, alimento.nome, alimento.ingredientes, alimento.preco, alimento.imagem];
        });
        
        listaAlimentos.appendChild(blocoAlimento);

    }
}

// função assíncrona para acessar a API e pegar os alimentos (método GET)
async function getAlimentos() {
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        return data;
        
    } else {
        return console.log("Erro HTTP: " + response.status);
    }
}

// função assíncrona para alterar o(s) dado(s) de um alimento escolhido (método PUT)
async function alteraDados() {
    if (alimentoSelecionado != null) {
        let novosDados = document.getElementById("formulario-dados");
        novosDados.addEventListener("submit", (submit) => {
            submit.preventDefault();
        });

        if (novosDados[0].value == "") {
            novosDados[0].value = alimentoSelecionado[1];

        } if (novosDados[1].value == "") {
            novosDados[1].value = alimentoSelecionado[2];

        } if (novosDados[2].value == "") {
            novosDados[2].value = alimentoSelecionado[3];

        } if (novosDados[3].value == "") {
            novosDados[3].value = alimentoSelecionado[4];
        }
        
        const response = await fetch(url + alimentoSelecionado[0], {
            method: "PUT",
            body: JSON.stringify({
                id: alimentoSelecionado[0],
                nome: novosDados[0].value,
                ingredientes: novosDados[1].value,
                preco: novosDados[2].value,
                imagem: novosDados[3].value,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }); 

        if (response.ok) {
            location.reload();
        } else {
            console.log("Erro ao alterar dados: " + response.status);
        }
    }
}

// função assíncrona para adicionar um novo alimento (método POST)
async function adicionaAlimento() {

    let novosDados = document.getElementById("formulario-dados");
        novosDados.addEventListener("submit", (submit) => {
            submit.preventDefault();
        });

    if (novosDados[0].value == "" || novosDados[1].value == "" ||
        novosDados[2].value == "" || novosDados[3].value == "") {
        window.alert("Você deve preencher todos os campos para adicionar um novo alimento!");
        return;
    }

    const alimentos = await getAlimentos();
    
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            id: alimentos.length + 1,
            nome: novosDados[0].value,
            ingredientes: novosDados[1].value,
            preco: novosDados[2].value,
            imagem: novosDados[3].value,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    }); 

    if (response.ok) {
        location.reload();
    } else {
        console.log("Erro ao alterar dados: " + response.status);
    } 
}