const Endereco = require("./Endereco");
const Pessoa = require("./Pessoa");

const endereco = new Endereco("Rua das Flores", "123", "Bragança Paulista", "SP");

// Teste 1: nome válido
const pessoa = new Pessoa("Maria", endereco);
pessoa.exibir();

// Teste 2: nome inválido
try {
  const invalida = new Pessoa("Al", endereco);
  invalida.exibir();
} catch (erro) {
  console.log("Erro: " + erro.message);
}

console.log("O programa continuou rodando.");