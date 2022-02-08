const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const AuthenticationException = require("../errors/authenticationErrors");

exports.createAccessToken = (userPayload) => {
  return jwt.sign(
    {
      email: userPayload.email,
    },
    process.env.JWT_KEY,
    {
      expiresIn: process.env.EXPIRES_IN_ACCESS_TOKEN,
    }
  );
};

exports.validatePassword = (userPassword, registeredUserPassword) => {
  const validated = bcrypt.compareSync(userPassword, registeredUserPassword);
  if (!validated) {
    throw new AuthenticationException("accessKey");
  }
  return true;
};
