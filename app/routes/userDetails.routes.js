module.exports = app => {
    const users = require('../controllers/userDetails.controller.js')

    const router = require('express').Router();

    router.post('/signUp', users,create);

    router.get('/:id', users.findOne);

    router.delete('/:id', users.delete);

    router.put('/:id', users.update);

    app.use('/api/users', router);
}