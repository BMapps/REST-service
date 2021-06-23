const uuid = require('uuid');
const mongoose = require('mongoose');

// class User {
//     constructor({
//         id = uuid(),
//         name = 'USER',
//         login = 'user',
//         password = 'P@55w0rd'
//     } = {}) {
//         this.id = id;
//         this.name = name;
//         this.login = login;
//         this.password = password;
//     }

//     static toResponse(user) {
//         const { id, name, login } = user;
//         return { id, name, login };
//     }
// }

const UserSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    name: String,
    login: String,
    password: String
});

UserSchema.statics.toResponse = user => {
    const { _id, name, login } = user;
    return { _id, name, login };
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
