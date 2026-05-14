const prompt = require("readline-sync");
const alert = console.log;

let hamburgueria = [];

function pausar() {
  prompt.question(`\nAperte enter para continuar...`);
}

function exibirMenu() {
  alert(`\nMenu da Hamburgueria`);
  alert(`1. Adicionar Hamburguer`);
  alert(`2. Ver todos os Hamburgueres`);
  alert(`3. Atualizar Hamburguer`);
  alert(`4. Deletar Hamburguer`);
  alert(`5. Sair`);
}

function adicionarHamburguer() {
  let continuar = "s";

  console.clear();
  alert(`1. Adicionar Hamburguer\n`);

  while (continuar.toLowerCase() === "s") {
    const nome = prompt.question(`Nome do Hamburguer: `).trim();
    const preco = Number(prompt.question(`Preco do Hamburguer: `));

    if (nome === "" || isNaN(preco) || preco <= 0) {
      alert(`Dados inválidos!`);
    } else {
      const hamburguer = {
        nome: nome,
        preco: preco,
      };

      hamburgueria.push(hamburguer);

      alert(`\nHamburguer adicionado com sucesso.`);
    }

    continuar = prompt.question(`Deseja adicionar outro Hamburguer (s/n)?: `);
  }
}

function verHamburguer() {
  console.clear();
  alert(`2. Ver todos os Hamburgueres\n`);

  if (hamburgueria.length === 0) {
    alert(`Nenhum hamburguer registrado.`);
  } else {
    for (let i = 0; i < hamburgueria.length; i++) {
      alert(
        `ID: ${i + 1}. Nome: ${hamburgueria[i].nome} | Preco: ${hamburgueria[i].preco}`,
      );
    }
  }
}

function atualizarHamburguer() {
  console.clear();
  alert(`3. Atualizar Hamburguer\n`);

  verHamburguer();

  let attSelect = Number(
    prompt.question(`\nDigite o ID do hamburguer que pretende atualizar: `),
  );

  let indiceReal = attSelect - 1;

  if (indiceReal >= 0 && indiceReal < hamburgueria.length) {
    const nome = prompt.question(`Nome do Hamburguer: `);
    const preco = Number(prompt.question(`Preco do Hamburguer: `));
    const hamburguer = {
      nome: nome,
      preco: preco,
    };

    hamburgueria[indiceReal] = hamburguer;

    alert(`\nHamburguer ${attSelect} atualizado com sucesso!`);
  } else {
    alert(`\nID invalido!`);
  }
}

function deletarHamburguer() {
  console.clear();

  verHamburguer();

  alert(`\n4. Deletar Hamburguer\n`);

  let attSelect = Number(
    prompt.question(`\nDigite o ID do hamburguer que pretende deletar: `),
  );

  let indiceReal = attSelect - 1;

  if (indiceReal >= 0 && indiceReal < hamburgueria.length) {
    hamburgueria.splice(indiceReal, 1);

    alert(`\nHamburguer ${attSelect} deletado com sucesso!`);
  } else {
    alert(`\nID invalido!`);
  }
}

function principal() {
  let select = 0;

  while (select != 5) {
    console.clear();
    exibirMenu();
    select = prompt.question("\nQual opcao deseja selecionar: ");

    switch (select) {
      case "1":
        adicionarHamburguer();
        pausar();
        break;
      case "2":
        verHamburguer();
        pausar();
        break;
      case "3":
        atualizarHamburguer();
        pausar();
        break;
      case "4":
        deletarHamburguer();
        pausar();
        break;
      case "5":
        break;
      default:
        alert(`Opcao invalida!`);
        pausar();
        break;
    }
  }
}

principal();
