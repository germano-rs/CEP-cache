module.exports = {
  removeSpecialCharacters(cepRaw) {
    return cepRaw.toString().replace(/\D+/g, "");
  },
};
