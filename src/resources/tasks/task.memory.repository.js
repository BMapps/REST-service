const DB = require('../../common/inMemoryDB');

const getAll = boardId => DB.getAllTasks(boardId);

const get = id => DB.getTask(id);

const create = task => DB.createTask(task);

const update = task => DB.updateTask(task);

const deleteById = id => DB.deleteTask(id);

module.exports = { getAll, get, create, update, deleteById };
