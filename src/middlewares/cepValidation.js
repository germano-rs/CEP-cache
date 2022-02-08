const { removeSpecialCharacters } = require("../services/helpers");
const ZipCodeException = require("../errors/cepErrors");

exports.cepValidation = (req, res, next) => {
  try {
    const cep = removeSpecialCharacters(req.params.cep);

    if (isNaN(cep)) {
      throw new ZipCodeException("isNaN", cep);
    }
    if (cep.length !== 8) {
      throw new ZipCodeException("length", cep);
    }
    req.cep = cep;
    return next();
  } catch (error) {
    console.log(error);
    res.status(error.status).send(error);
  }
};
