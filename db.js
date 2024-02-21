const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://root@localhost:3306/test_mysql');

sequelize
  .authenticate()
  .then(() => {
    console.log("Connexion à la base de données MySQL établie avec succès");
  })
  .catch((error) => {
    console.error(
      "Erreur lors de la connexion à la base de données MySQL :",
      error
    );
  });

module.exports = sequelize;