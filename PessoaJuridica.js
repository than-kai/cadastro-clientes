const Pessoa = require("./Pessoa");

class PessoaJuridica extends Pessoa {
  #cnpj;
  #razaoSocial;

  constructor(nome, endereco, cnpj, razaoSocial) {
    super(nome, endereco);
    this.cnpj = cnpj;
    this.razaoSocial = razaoSocial;
  }

  get cnpj() {
    return this.#cnpj;
  }
  set cnpj(valor) {
    const numeros = String(valor).replace(/\D/g, "");
    if (numeros.length !== 14) {
      throw new Error("CNPJ deve ter 14 dígitos.");
    }
    this.#cnpj = numeros;
  }

  get razaoSocial() {
    return this.#razaoSocial;
  }
  set razaoSocial(valor) {
    if (typeof valor !== "string" || valor.trim().length === 0) {
      throw new Error("Razão social é obrigatória.");
    }
    this.#razaoSocial = valor.trim();
  }

  exibir() {
    super.exibir();
    console.log("CNPJ: " + this.cnpj);
    console.log("Razão social: " + this.razaoSocial);
  }
}

module.exports = PessoaJuridica;