const tasksRepo = require('./task.MongoRepository');
// const boardsRepo = require('../boards/board.MongoRepository');

const getAll = async boardId => await tasksRepo.getAll(boardId);

const get = async id => await tasksRepo.get(id);

const create = async task => {
    // let column;
    // if (task.columnId !== null) {
    //     try {
    //         column = await boardsRepo
    //             .get(task.boardId)
    //             .columns.filter(el => el.id === task.columnId);
    //     } catch (error) {
    //         if (!column) {
    //             throw new Error(
    //                 'column with submitted id is missing in this board'
    //             );
    //         }
    //     }
    // }
    return await tasksRepo.create(task);
};

const update = async task => {
    console.log(task);
    const T = await tasksRepo.update(task);
    console.log(T);
    return T;
};

const deleteById = async id => await tasksRepo.deleteById(id);

module.exports = { getAll, get, update, create, deleteById };
