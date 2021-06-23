const DB = {
    Users: [],
    Boards: [],
    Tasks: [],

    getAllUsers: () => DB.Users.slice(0),

    getUser: id => DB.Users.filter(user => user.id === id)[0],

    createUser: user => {
        DB.Users.push(user);
        return DB.getUser(user.id);
    },

    updateUser: user => {
        DB.Users[DB.Users.indexOf(DB.getUser(user.id))] = user;
        return DB.getUser(user.id);
    },

    deleteUser: id => {
        DB.Users.splice(DB.Users.indexOf(DB.getUser(id)), 1);
        DB.Tasks.map(el => {
            if (el.userId === id) {
                el.userId = null;
            }
        });
    },

    getAllBoards: () => DB.Boards.slice(0),

    getBoard: id => {
        return DB.Boards.filter(board => board.id === id)[0];
    },

    createBoard: board => {
        DB.Boards.push(board);
        return DB.getBoard(board.id);
    },

    updateBoard: board => {
        const oldBoard = DB.getBoard(board.id);
        oldBoard.id = board.id;
        oldBoard.title = board.title;
        oldBoard.Columns = board.columns;
        return DB.getBoard(board.id);
    },

    deleteBoard: id => {
        DB.Boards.splice(DB.Boards.indexOf(DB.getBoard(id)), 1);
        DB.Tasks = DB.Tasks.filter(el => el.boardId !== id);
    },

    getAllTasks: boardId => {
        return DB.Tasks.filter(el => el.boardId === boardId);
    },

    getTask: id => {
        return DB.Tasks.filter(el => el.id === id)[0];
    },

    createTask: task => {
        const column = DB.getBoard(task.boardId)
            .exec()
            .columns.filter(el => el.id === task.columnId);
        if (!column) {
            throw new Error(
                'column with submitted id is missing in this board'
            );
        }
        DB.Tasks.push(task);
        return DB.Tasks.filter(el => el.id === task.id)[0];
    },

    updateTask: task => {
        DB.Tasks[DB.Tasks.findIndex(el => el.id === task.id)] = task;
        return DB.getTask(task.id);
    },

    deleteTask: id => {
        return DB.Tasks.splice(DB.Tasks.indexOf(DB.getTask(id)), 1);
    }
};

module.exports = DB;
