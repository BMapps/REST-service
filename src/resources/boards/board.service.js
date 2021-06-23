const boardsRepo = require('../boards/board.MongoRepository');
const tasksRepo = require('../tasks/task.MongoRepository');

const getAll = () => boardsRepo.getAll();

const get = id => boardsRepo.get(id);

const create = board => boardsRepo.create(board);

const update = board => boardsRepo.update(board);

const deleteById = async id => {
    const tasks = await tasksRepo.getAll(id);
    if (tasks.length > 0) {
        await tasks.map(el => tasksRepo.deleteById(el._id));
    }
    return await boardsRepo.deleteById(id);
};

module.exports = { getAll, get, create, update, deleteById };

// dep inj

// export default class BoardService {
//     constructor (bardsRepo){
//         this.boardsRepo = bardsRepo;
//     }

//     getAll = () => boardsRepo.getAll();

//     get = id => boardsRepo.get(id);

//     create = board => boardsRepo.create(board);

//     update = board => boardsRepo.update(board);

//     deleteById = id => boardsRepo.deleteById(id);

// }
