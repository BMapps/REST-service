const Task = require('./task.model');

const getAll = async boardId => await Task.find({ boardId });

const get = async id => await Task.findById(id).exec();

const create = async task => await Task.create(task);

const update = async task => Task.updateOne({ _id: task._id }, task).exec();

const deleteById = async id => Task.deleteOne({ _id: id }).exec();

const getByProp = async prop => Task.find(prop).exec();

module.exports = { getAll, get, create, update, deleteById, getByProp };
