// Cria um array vazio que vai armazenar os hambúrgueres
let hamburgueria = [];

// Função apenas para pausar o fluxo com um alerta
function pausar() {
  alert(`\nAperte OK para continuar...`);
}

// Função que exibe um menu no alert (versão terminal)
function exibirMenu() {
  alert(`\nMenu da Hamburgueria`);
  alert(`1. Adicionar Hamburguer`);
  alert(`2. Ver todos os Hamburgueres`);
  alert(`3. Atualizar Hamburguer`);
  alert(`4. Deletar Hamburguer`);
  alert(`5. Sair`);
}

// Função para adicionar um novo hambúrguer ao array
function adicionarHamburguer() {
  // Pede o nome e remove espaços extras
  const nome = prompt(`Nome do Hamburguer:`).trim();

  // Converte o preço para número
  const preco = Number(prompt(`Preco do Hamburguer:`));

  // Validação dos dados
  if (nome === "" || isNaN(preco) || preco <= 0) {
    alert(`Dados inválidos!`);
  } else {
    // Cria o objeto hambúrguer
    const hamburguer = {
      nome: nome,
      preco: preco,
    };

    // Adiciona o hambúrguer no array
    hamburgueria.push(hamburguer);

    alert(`\nHamburguer adicionado com sucesso.`);
  }

  // Atualiza a lista na interface
  renderizarLista();
}

// Função que exibe os hambúrgueres em formato de texto (alert)
function verHamburguer() {
  // Se não tiver itens no array
  if (hamburgueria.length === 0) {
    alert(`Nenhum hamburguer registrado.`);
  } else {
    // String que vai armazenar a lista
    let lista = "";

    // Percorre todos os hambúrgueres
    for (let i = 0; i < hamburgueria.length; i++) {
      lista += `ID: ${i + 1}. Nome: ${hamburgueria[i].nome} | Preco: ${hamburgueria[i].preco}\n`;
    }

    // Mostra a lista no alert
    alert(lista);
  }
}

// Função para atualizar um hambúrguer existente
function atualizarHamburguer() {
  // Pede o ID do item a ser atualizado
  let attSelect = Number(
    prompt(`\nDigite o ID do hamburguer que pretende atualizar:`),
  );

  // Converte ID humano (1,2,3) para índice real (0,1,2)
  let indiceReal = attSelect - 1;

  // Verifica se o índice é válido
  if (indiceReal >= 0 && indiceReal < hamburgueria.length) {
    // Pede novos dados
    const nome = prompt(`Nome do Hamburguer:`);
    const preco = Number(prompt(`Preco do Hamburguer:`));

    // Cria novo objeto atualizado
    const hamburguer = {
      nome: nome,
      preco: preco,
    };

    // Substitui o item antigo pelo novo
    hamburgueria[indiceReal] = hamburguer;

    alert(`\nHamburguer ${attSelect} atualizado com sucesso!`);
  } else {
    alert(`\nID invalido!`);
  }

  // Atualiza a interface
  renderizarLista();
}

// Função para deletar um hambúrguer
function deletarHamburguer() {
  // Pede o ID do item
  let attSelect = Number(
    prompt(`\nDigite o ID do hamburguer que pretende deletar:`),
  );

  // Converte para índice real
  let indiceReal = attSelect - 1;

  // Verifica se existe
  if (indiceReal >= 0 && indiceReal < hamburgueria.length) {
    // Remove o item do array
    hamburgueria.splice(indiceReal, 1);

    alert(`\nHamburguer ${attSelect} deletado com sucesso!`);
  } else {
    alert(`\nID invalido!`);
  }

  // Atualiza a interface
  renderizarLista();
}

// Função principal de menu (modo terminal)
function principal() {
  let select = 0;

  // Loop até o usuário escolher sair
  while (select != 5) {
    console.clear();

    // Mostra menu e captura opção
    select = prompt(
      `Menu da Hamburgueria

1. Adicionar Hamburguer
2. Ver todos os Hamburgueres
3. Atualizar Hamburguer
4. Deletar Hamburguer
5. Sair

Qual opcao deseja selecionar:`,
    );

    // Executa ação conforme escolha
    switch (select) {
      case "1":
        adicionarHamburguer();
        break;

      case "2":
        verHamburguer();
        break;

      case "3":
        atualizarHamburguer();
        break;

      case "4":
        deletarHamburguer();
        break;

      case "5":
        break;

      default:
        alert(`Opcao invalida!`);
        break;
    }
  }
}

// Função que renderiza a lista na interface HTML (DOM)
function renderizarLista() {
  // Pega o elemento da lista no HTML
  const lista = document.querySelector(".listaHamburguer");

  // Se não houver hambúrgueres
  if (hamburgueria.length === 0) {
    lista.innerHTML = "<p>Nenhum hambúrguer cadastrado.</p>";
    return;
  }

  // Início da tabela HTML
  let html = `
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Preço</th>
      </tr>
    </thead>
    <tbody>
`;

  // Percorre o array e cria linhas da tabela
  for (let i = 0; i < hamburgueria.length; i++) {
    html += `
    <tr>
      <td>${i + 1}</td>
      <td>${hamburgueria[i].nome}</td>
      <td>R$ ${hamburgueria[i].preco}</td>
    </tr>
  `;
  }

  // Fecha tabela
  html += `
    </tbody>
  </table>
`;

  // Insere HTML na página
  lista.innerHTML = html;
}

// Renderiza a lista ao iniciar o sistema
renderizarLista();

// Inicia o modo terminal (comentado atualmente)
// principal();
