const Connection = require('./connection')();
let userModel = {};

userModel.getUsers = callback => {
    Connection.getConnection((error, connection) => {
        const sql = `
        SELECT id, first_name, last_name, username, email,
        created_at, updated_at, CONCAT(first_name, " ",last_name) as name
        FROM system_users ORDER BY id
        `
        connection.query(sql, (error, success) => {
            if (error) {
                callback(new Error(error.message));
            } else {
                callback(success);
            }
            connection.release();
        });
    });
};

userModel.insertUser = (userData, callback) => {
    Connection.getConnection((error, connection) => {
        const sql = 'INSERT INTO system_users SET ?';
        connection.query(sql, userData, (error, success) => {
            if (error) {
                callback(new Error(error.message));
            } else {
                callback(success.insertId);
            }
            connection.release();
        });
    });
};

userModel.updateUser = (userData, callback) => {
    Connection.getConnection((error, connection) => {
        const sql = `
        UPDATE system_users SET
        first_name = ${connection.escape(userData.first_name)},
        last_name = ${connection.escape(userData.last_name)},
        username = ${connection.escape(userData.username)},
        email = ${connection.escape(userData.email)}
        WHERE id = ${connection.escape(userData.id)}
        `;

        connection.query(sql, (error, success) => {
            if (error) {
                callback(new Error(error.message));
            } else {
                callback(success.affectedRows);
            }
            connection.release();
        });
    });
};

userModel.deleteUser = (id, callback) => {
    Connection.getConnection((error, connection) => {
        const sql = `
        DELETE FROM system_users WHERE id = ${connection.escape(id)}
        `;
        connection.query(sql, (error, success) => {
            if (error) {
                callback(new Error(error.message));
            } else {
                callback(success.affectedRows);
            }
        });
    });
}

module.exports = userModel;