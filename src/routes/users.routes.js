const User = require('../models/systemUsers');

sendResponse = (data, res, successMessage) => {
    if (data instanceof Error) {
        res.send({
            error: true,
            message: data.message
        });
    } else {
        res.json({
            error: false,
            message: successMessage || '',
            data: data
        });
    }
};

module.exports = (app) => {
    app.get('/system_users', (req, res) => {
        User.getUsers((data) => {
            sendResponse(data, res);
        })
    });

    app.post('/system_users', (req, res) => {
        const userData = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
        User.insertUser(userData, (data) => {
            sendResponse(data, res, 'User created');
        });
    });

    app.put('/system_users', (req, res) => {
        const userData = {
            id: req.body.id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            email: req.body.email
        }
        User.updateUser(userData, (data)=> {
            let msg = data == '1' ? 'User updated' : 'Can\'t update user';
            sendResponse(data, res, msg);
        })
    });

    app.delete('/system_users', (req, res) => {
        const id = req.body.id;
        User.deleteUser(id, (data) => {
            let msg = data == '1' ? 'User deleted' : 'Can\'t delete user';
            sendResponse(data, res, msg);
        });
    });
}