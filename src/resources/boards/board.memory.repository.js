const DB = require('../../common/inMemoryDB');

const getAll = () => DB.getAllBoards();

const get = id => DB.getBoard(id);

const create = board => DB.createBoard(board);

const update = board => DB.updateBoard(board);

const deleteById = id => DB.deleteBoard(id);

module.exports = { getAll, get, create, update, deleteById };
