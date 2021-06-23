const DB = require('../../common/inMemoryDB');

const getAll = async () => DB.getAllUsers();

const get = async id => {
    const user = DB.getUser(id);

    if (!user) {
        throw new Error(`The user with id: ${id} was not found`);
    }

    return user;
};

const create = async user => {
    return DB.createUser(user);
};

const update = async user => {
    return DB.updateUser(user);
};

const deleteById = async id => DB.deleteUser(id);

module.exports = { getAll, get, create, update, deleteById };
