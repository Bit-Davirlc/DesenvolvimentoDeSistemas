const form = document.getElementById("subscriptionForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const dadosFormulario = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    telefone: document.getElementById("telefone").value,
    plano: document.getElementById("plano").value,
  };

  console.log(dadosFormulario);

  const jsonDados = JSON.stringify(dadosFormulario, null, 2);

  console.log(jsonDados);

  alert("Formulário enviado!");
});
