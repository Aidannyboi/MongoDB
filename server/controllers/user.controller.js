const User = require('../models/user.models');

module.exports.findAllUsers = (req, res) => {
    User.find()
    .then((allDataUsers) => {
        res.json({user: allDataUsers})
    })

    .catch((err) =>{
        res.json({message: 'Somethind went wrong', error: err})
    });
}

module.exports.findOneUser = (req, res) => {
    User.findOne({_id: req.params.id})
    .then(oneUser => {
        res.json({user: oneUser})
    })

    .catch((err) =>{
        res.json({message: 'Somethind went wrong', error: err})
    })
}

module.exports.createUser = (req, res) => {
    User.create(req.body)
    .then(newUser => {
        res.json({user: newUser})
    })
    .catch((err) =>{
        res.json({message: 'Somethind went wrong', error: err})
    })
}

module.exports.updateUser = (req, res) => {
    User.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedUser => {
            res.json({user: updatedUser})
        })
        .catch((err) => {
            res.json({message: 'Somethind went wrong', error: err})
        })
}

module.exports.deleteUser = (req, res) => {
    User.deleteOne({_id: req.params.id})
    .then(result => {
        res.json({result: result})
    })
    .catch((err) => {
        res.json({message: 'Somethind went wrong', error: err})
    });
}