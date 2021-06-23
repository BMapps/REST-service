const tasksRepo = require('../tasks/task.MongoRepository');
const usersRepo = require('./user.MongoRepository');
const hash = require('../../common/hash');

const getAll = () => usersRepo.getAll();

const get = id => usersRepo.get(id);
const getByProp = prop => usersRepo.getByProp(prop);

const create = async user => {
    // eslint-disable-next-line require-atomic-updates
    user.password = await hash.hashFunc(user.password);
    return usersRepo.create(user);
};

const update = user => {
    user.password = hash.hashFunc(user.password);
    return usersRepo.update(user);
};

const deleteById = async id => {
    const tasks = await tasksRepo.getByProp({ userId: id });
    if (tasks.length > 0) {
        await tasks.map(el => {
            el.userId = null;
            tasksRepo.update(el);
        });
    }
    return await usersRepo.deleteById(id);
};

module.exports = { getAll, get, create, update, deleteById, getByProp };
