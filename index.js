const Endereco = require("./Endereco");
const PessoaFisica = require("./PessoaFisica");
const PessoaJuridica = require("./PessoaJuridica");

const clientes = [];

console.log("=== Cenário 1: Pessoa física válida ===");
try {
  const endereco = new Endereco("Rua das Flores", "123", "Bragança Paulista", "SP");
  const pf = new PessoaFisica("Maria Silva", endereco, "123.456.789-09", "2000-05-20");
  clientes.push(pf);
  console.log("Cadastro realizado com sucesso.");
} catch (erro) {
  console.log("Erro no cadastro: " + erro.message);
}

console.log("\n=== Cenário 2: Pessoa jurídica válida ===");
try {
  const endereco = new Endereco("Av. Brasil", "500", "Campinas", "SP");
  const pj = new PessoaJuridica("Tech Peças", endereco, "12.345.678/0001-90", "Tech Peças Ltda");
  clientes.push(pj);
  console.log("Cadastro realizado com sucesso.");
} catch (erro) {
  console.log("Erro no cadastro: " + erro.message);
}

console.log("\n=== Cenário 3: Pessoa física inválida (CPF incompleto) ===");
try {
  const endereco = new Endereco("Rua Verde", "45", "Atibaia", "SP");
  const pf = new PessoaFisica("João Souza", endereco, "123.456", "1990-01-15");
  clientes.push(pf);
  console.log("Cadastro realizado com sucesso.");
} catch (erro) {
  console.log("Erro no cadastro: " + erro.message);
}

console.log("\n=== Cenário 4: Pessoa jurídica inválida (razão social vazia) ===");
try {
  const endereco = new Endereco("Rua Azul", "78", "Jundiaí", "SP");
  const pj = new PessoaJuridica("Loja Beta", endereco, "12345678000190", "   ");
  clientes.push(pj);
  console.log("Cadastro realizado com sucesso.");
} catch (erro) {
  console.log("Erro no cadastro: " + erro.message);
}

console.log("\n=== Clientes cadastrados (somente válidos) ===");
for (const cliente of clientes) {
  cliente.exibir();
  console.log("---");
}
console.log("Total de clientes válidos: " + clientes.length);