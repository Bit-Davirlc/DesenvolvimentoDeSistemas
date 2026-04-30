const prompt = require("readline-sync");
const alert = console.log;

const verUsuario = "admin";
const verSenha = "1234";

function login(usuario, senha) {
  return usuario === verUsuario && senha === verSenha;
}

while (true) {
  let usuario = prompt.question("Digite o usuario: ");
  let senha = prompt.question("Digite a senha: ", { hideEchoBack: true });

  if (login(usuario, senha)) {
    alert("Login confirmado!");
    break;
  } else {
    alert("Login negado!\nTente novamente.\n");
  }
}
