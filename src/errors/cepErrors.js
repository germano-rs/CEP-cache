function ZipCodeException(type, value) {
  const Messages = {
    length: "O CEP deve ter 8 caracteres.",
    isNaN: "O CEP deve ser um número.",
  };

  this.cep = value;
  this.message = Messages[type];
  this.status = 400;
  this.toString = function () {
    return this.cep + this.message + this.status;
  };
}
module.exports = ZipCodeException;
