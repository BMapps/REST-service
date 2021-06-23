const Board = require('./board.model');

const getAll = async () => Board.find({}).exec();

const get = async id => Board.findById(id).exec();

const create = async board => Board.create(board);

const update = async board => Board.updateOne({ _id: board.id }, board).exec();

const deleteById = async id => Board.deleteOne({ _id: id }).exec();

module.exports = { getAll, get, create, update, deleteById };
