const express = require('express');
const router = express.Router();
const userController = require('./src/controllers/userController');

router.get('/users', userController.getUser); // selection des users
router.post('/insert_User',userController.createUser); // insertion des users
router.put('/user_Update/:id',userController.updateUser); // mise à jour du users
router.delete('/delete_User/:id', userController.deleteUser); //effacer utilisateur

module.exports = router;