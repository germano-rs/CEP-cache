const axios = require("axios");
const asyncRedis = require("async-redis");
const client = asyncRedis.createClient();
const REDIS_EXPIRES_IN = process.env.REDIS_EXPIRES_IN;

module.exports = {
  async cep(req, res) {
    const cep = req.params.cep;
    try {
      let address = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const stringAddress = JSON.stringify(address.data);
      client.set(cep, stringAddress);
      client.expire(cep, REDIS_EXPIRES_IN);
      res.status(200).send({
        data: address.data,
        message: "Endereço encontrado no viacep.",
        status: "200",
      });
    } catch (error) {
      console.log(error.message);
      res.status(400).send({
        message: error.message,
        status: "400",
      });
    }
  },
};
