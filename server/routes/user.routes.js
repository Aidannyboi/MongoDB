const UserController = require('../controllers/user.controller');

module.exports = app =>{
    app.get('/api/users', UserController.findAllUsers);
    app.get('/api/users/:id', UserController.findOneUser);
    app.patch('/api/users/:id', UserController.updateUser);
    app.post('/api/users', UserController.createUser);
    app.delete('/api/users/:id', UserController.deleteUser);
}