const asyncRedis = require("async-redis");
const client = asyncRedis.createClient();
exports.cacheCep = async (req, res, next) => {
  const cep = req.params.cep;
  const cacheCep = await client.get(cep);
  if (cacheCep) {
    return res.status(200).send({
      data: JSON.parse(cacheCep),
      message: "Endereço encontrado no cache.",
      status: "200",
    });
  } else {
    next();
  }
};
