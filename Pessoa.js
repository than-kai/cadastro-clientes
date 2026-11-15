class Pessoa {
  #nome;
  #endereco;

  constructor(nome, endereco) {
    this.nome = nome;
    this.endereco = endereco;
  }

  get nome() {
    return this.#nome;
  }
  set nome(valor) {
    if (typeof valor !== "string" || valor.trim().length < 3) {
      throw new Error("Nome deve ter ao menos 3 caracteres.");
    }
    this.#nome = valor.trim();
  }

  get endereco() {
    return this.#endereco;
  }
  set endereco(valor) {
    this.#endereco = valor;
  }

  exibir() {
    console.log("Nome: " + this.nome);
    console.log(
      "Endereço: " +
        this.endereco.logradouro +
        ", " +
        this.endereco.numero +
        " - " +
        this.endereco.cidade +
        "/" +
        this.endereco.uf
    );
  }
}

module.exports = Pessoa;