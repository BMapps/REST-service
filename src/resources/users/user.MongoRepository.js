const User = require('./user.model');

const getAll = async () => User.find();

const get = async id => {
    const user = User.findById(id).exec();

    if (!user) {
        throw new Error(`The user with id: ${id} was not found`);
    }

    return user;
};

const getByProp = async prop => {
    const users = await User.find(prop).limit(1);
    if (!users) {
        throw new Error('There are missing user with such props');
    }

    return users;
};

const create = async user => {
    return User.create(user);
};

const update = async user => {
    return User.updateOne({ _id: user.id }, user).exec();
    // return User.findOneAndUpdate(
    //     { _id: user.id },
    //     { name: user.name, login: user.login, password: user.password }
    // ).exec();
};

const deleteById = async id => (await User.deleteOne({ _id: id })).deleteCount;

module.exports = { getAll, get, create, update, deleteById, getByProp };
