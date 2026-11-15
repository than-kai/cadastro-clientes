const Pessoa = require("./Pessoa");

class PessoaFisica extends Pessoa {
  #cpf;
  #dataNascimento;

  constructor(nome, endereco, cpf, dataNascimento) {
    super(nome, endereco);
    this.cpf = cpf;
    this.dataNascimento = dataNascimento;
  }

  get cpf() {
    return this.#cpf;
  }
  set cpf(valor) {
    const numeros = String(valor).replace(/\D/g, "");
    if (numeros.length !== 11) {
      throw new Error("CPF deve ter 11 dígitos.");
    }
    this.#cpf = numeros;
  }

  get dataNascimento() {
    return this.#dataNascimento;
  }
  set dataNascimento(valor) {
    const data = new Date(valor);
    if (isNaN(data.getTime())) {
      throw new Error("Data de nascimento inválida.");
    }
    if (data > new Date()) {
      throw new Error("Data de nascimento não pode estar no futuro.");
    }
    this.#dataNascimento = data;
  }

  exibir() {
    super.exibir();
    console.log("CPF: " + this.cpf);
    console.log(
      "Nascimento: " +
        this.dataNascimento.toLocaleDateString("pt-BR", { timeZone: "UTC" })
    );
  }
}

module.exports = PessoaFisica;