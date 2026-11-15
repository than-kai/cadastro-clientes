const Endereco = require("./Endereco");
const PessoaFisica = require("./PessoaFisica");

const endereco = new Endereco("Rua das Flores", "123", "Bragança Paulista", "SP");

// Teste 1: pessoa física válida (CPF com pontos e traço)
try {
  const pf = new PessoaFisica("Maria Silva", endereco, "123.456.789-09", "2000-05-20");
  pf.exibir();
} catch (erro) {
  console.log("Erro: " + erro.message);
}

// Teste 2: CPF inválido
try {
  const pf = new PessoaFisica("João Souza", endereco, "123.456", "1990-01-15");
  pf.exibir();
} catch (erro) {
  console.log("Erro: " + erro.message);
}

// Teste 3: data inválida
try {
  const pf = new PessoaFisica("Ana Lima", endereco, "12345678909", "abc");
  pf.exibir();
} catch (erro) {
  console.log("Erro: " + erro.message);
}

// Teste 4: data no futuro
try {
  const pf = new PessoaFisica("Pedro Costa", endereco, "12345678909", "2099-01-01");
  pf.exibir();
} catch (erro) {
  console.log("Erro: " + erro.message);
}

console.log("O programa continuou rodando.");