const listaAlimentos = document.getElementById("lista-alimentos");
const url = "http://localhost:3000/alimentos";
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
            
            alimentoSelecionado = [alimento.nome, alimento.id];
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
        return alert("Erro HTTP: " + response.status);
    }
}