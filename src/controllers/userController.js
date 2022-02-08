require("dotenv").config();

const Users = require("../models/Users");
const bcrypt = require("bcrypt");
const { createAccessToken, validatePassword } = require("../services/access");

module.exports = {
  async createUser(req, res) {
    try {
      const userData = req.body;
      const { userEmail } = userData;
      const userEmailExists = await Users.findOne({ userEmail });
      if (!userEmailExists) {
        const newUser = await Users.create(userData);
        return res.status(201).send({
          user: newUser,
          message: "Usuário criado com sucesso!",
          status: "201",
        });
      } else {
        res
          .status(400)
          .send({ message: "E-mail já cadastrado.", status: "400" });
      }
    } catch (error) {
      res.status(400).send({ message: error, status: "400" });
      console.log(error);
    }
  },

  async userLogin(req, res) {
    try {
      const user = req.body;
      const userEmail = user.userEmail;
      const userPassword = user.userPassword;
      const registeredUser = await Users.findOne({ userEmail });

      if (!registeredUser)
        return res.status(401).send({
          message: "Falha na autenticação!",
          status: "401",
        });

      validatePassword(userPassword, registeredUser.userPassword);
      const accessToken = createAccessToken(user);
      res.status(200).send({
        token: accessToken,
        auth: true,
        message: "Autenticado com sucesso!",
        status: "200",
      });
    } catch (error) {
      console.log(error);
      return res.status(401).send({
        auth: false,
        message: "Falha na autenticação!",
        status: "401",
      });
    }
  },
};
