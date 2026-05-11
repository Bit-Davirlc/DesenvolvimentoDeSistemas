const prompt = require("readline-sync");
const alert = console.log;

let select = 0;
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

  while (continuar.toLowerCase() === "s") {
    const nome = prompt.question(`Nome do Hamburguer: `);
    const preco = Number(prompt.question(`Preco do Hamburguer: `));
    const hamburguer = {
      nome: nome,
      preco: preco,
    };

    hamburgueria.push(hamburguer);

    alert(`\nHamburguer adicionado com sucesso.`);

    continuar = prompt.question(`Deseja adicionar outro Hamburguer (s/n)?: `);
  }
}

function verHamburguer() {
  if (hamburgueria.length === 0) {
    alert(`\nNenhum hamburguer registrado.`);
  } else {
    for (let i = 0; i < hamburgueria.length; i++) {
      alert(
        `${i + 1}. Nome: ${hamburgueria[i].nome} | Preco: ${hamburgueria[i].preco}`,
      );
    }
  }
}

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
    case "5":
      break;
  }
}
