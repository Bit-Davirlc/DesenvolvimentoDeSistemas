let hamburgueria = [];

// =========================
// UTILITÁRIOS
// =========================

const toIndex = (id) => id - 1;

const isValidIndex = (i) =>
  i >= 0 && i < hamburgueria.length;

const pedirHamburguer = () => {
  const nome = prompt("Nome do Hamburguer:").trim();
  const preco = Number(prompt("Preço do Hamburguer:"));

  if (!nome || isNaN(preco) || preco <= 0) {
    alert("Dados inválidos!");
    return null;
  }

  return { nome, preco };
};

// =========================
// CRUD
// =========================

function adicionarHamburguer() {
  const hamburguer = pedirHamburguer();
  if (!hamburguer) return;

  hamburgueria.push(hamburguer);
  alert("Hambúrguer adicionado com sucesso.");

  renderizarLista();
}

function verHamburguer() {
  if (!hamburgueria.length) {
    alert("Nenhum hambúrguer registrado.");
    return;
  }

  const lista = hamburgueria
    .map((h, i) =>
      `ID: ${i + 1}. Nome: ${h.nome} | Preço: ${h.preco}`
    )
    .join("\n");

  alert(lista);
}

function atualizarHamburguer() {
  const id = Number(prompt("ID do hamburguer:"));
  const i = toIndex(id);

  if (!isValidIndex(i)) {
    alert("ID inválido!");
    return;
  }

  const hamburguer = pedirHamburguer();
  if (!hamburguer) return;

  hamburgueria[i] = hamburguer;

  alert(`Hambúrguer ${id} atualizado com sucesso!`);
  renderizarLista();
}

function deletarHamburguer() {
  const id = Number(prompt("ID do hamburguer:"));
  const i = toIndex(id);

  if (!isValidIndex(i)) {
    alert("ID inválido!");
    return;
  }

  hamburgueria.splice(i, 1);

  alert(`Hambúrguer ${id} deletado com sucesso!`);
  renderizarLista();
}

// =========================
// MENU (TERMINAL)
// =========================

function principal() {
  let opcao;

  while (opcao !== "5") {
    opcao = prompt(`
Menu da Hamburgueria

1. Adicionar Hambúrguer
2. Ver todos os Hambúrgueres
3. Atualizar Hambúrguer
4. Deletar Hambúrguer
5. Sair
`);

    const acoes = {
      "1": adicionarHamburguer,
      "2": verHamburguer,
      "3": atualizarHamburguer,
      "4": deletarHamburguer,
    };

    const acao = acoes[opcao];

    if (acao) acao();
    else if (opcao !== "5") alert("Opção inválida!");
  }
}

// =========================
// RENDERIZAÇÃO (DOM)
// =========================

function renderizarLista() {
  const lista = document.querySelector(".listaHamburguer");
  if (!lista) return;

  if (!hamburgueria.length) {
    lista.innerHTML = "<p>Nenhum hambúrguer cadastrado.</p>";
    return;
  }

  lista.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        ${hamburgueria
          .map(
            (h, i) => `
          <tr>
            <td>${i + 1}</td>
            <td>${h.nome}</td>
            <td>R$ ${h.preco.toFixed(2)}</td>
            <td>Del</td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>
  `;
}

// =========================
// INIT
// =========================

renderizarLista();
// principal();