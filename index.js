const Endereco = require("./Endereco");

const endereco = new Endereco("Rua das Flores", "123", "Bragança Paulista", "SP");

console.log(endereco.logradouro);
console.log(endereco.cidade);

endereco.cidade = "Campinas";
console.log(endereco.cidade);