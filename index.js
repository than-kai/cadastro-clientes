const Endereco = require("./Endereco");
const PessoaJuridica = require("./PessoaJuridica");

const endereco = new Endereco("Av. Brasil", "500", "Campinas", "SP");

// Teste 1: pessoa jurídica válida (CNPJ com pontos, barra e traço)
try {
  const pj = new PessoaJuridica("Tech Peças", endereco, "12.345.678/0001-90", "Tech Peças Ltda");
  pj.exibir();
} catch (erro) {
  console.log("Erro: " + erro.message);
}

// Teste 2: CNPJ inválido
try {
  const pj = new PessoaJuridica("Loja Alfa", endereco, "12.345.678", "Loja Alfa Ltda");
  pj.exibir();
} catch (erro) {
  console.log("Erro: " + erro.message);
}

// Teste 3: razão social vazia
try {
  const pj = new PessoaJuridica("Loja Beta", endereco, "12345678000190", "   ");
  pj.exibir();
} catch (erro) {
  console.log("Erro: " + erro.message);
}

console.log("O programa continuou rodando.");