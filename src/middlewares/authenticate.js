const jwt = require("jsonwebtoken");

exports.checkAccessToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decode = jwt.verify(token, process.env.JWT_KEY);
    req.user = decode;
    return next();
  } catch (error) {
    res.status(401).send({
      erro: error,
      mensagem: "Falha na autenticação access token inválido ou expirado!",
    });
  }
};
