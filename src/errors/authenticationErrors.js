function AuthenticationException(type, value) {
  const Messages = {
    accessKey: "Dados de acesso inválidos.",
  };
  this.user = value;
  this.message = Messages[type];
  this.status = 401;
  this.toString = function () {
    return this.user + this.message + this.status;
  };
}
module.exports = AuthenticationException;
