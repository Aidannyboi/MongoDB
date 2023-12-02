const User = require('../models/user.models');

module.exports = {
    getAllUsers: (req, res) =>{
        User.find()
            .then((allUsers) => {
                console.log(allUsers);
                res.json(allUsers);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    getOneUser: (req, res) => {
        User.findById(req.params.id)
            .then((oneUser) =>{
                console.log(oneUser);
                res.json(oneUser);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    createUser: (req, res) => {
        User.create(req.body)
            .then((newUser) => {
                console.log(newUser);
                res.json(newUser);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    updateUser: (req, res) => {
        User.updateOne(req.params.id, req.body, {new: true, runValidators: true})
            .then((updatededUser) => {
                console.log(updatededUser);
                res.json(updatededUser);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    deleteUser: (req, res) => {
        User.deleteOne(req.params.id)
            .then((deletedUser) =>{
                console.log(deletedUser);
                res.json(deletedUser)
            })
            .then((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    }
}