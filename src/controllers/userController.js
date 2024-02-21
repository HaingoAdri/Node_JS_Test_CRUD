const User = require('../models/Utilisateur');

// fonction select dans une base mysql
exports.getUser = async (req,res) => {
    try {
        const user = await User.findAll();
        res.json(user);
    } catch (error) {
        res.status(500).json({message: 'Erreur lors de la récupération des utilisateur',error});
    }
};

// fonction insert dans une base mysql
exports.createUser = async (req,res) => {
    const { nom } = req.body;
    try {
        const user = await User.create({nom});
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({message: 'Erreur lors de la création des utilisateur',error});
    }
};

// fonction update dans la base
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { nom } = req.body;
    try {
        const user = await User.findByPk(id);
        if(!user){
            res.status(406).json({message: 'Utilisateur non trouver'});
        }
        user.nom = nom;
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(500).json({message: 'Erreur lors de la update des utilisateur',error});
    }
}

// fonction effacer les users dans la base
exports.deleteUser = async(req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if(!user){
            res.status(406).json({message: 'Utilisateur non trouver'});
        }
        await User.destroy();
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Erreur lors du delete des utilisateur',error});
    }
}