const mongoose = require('mongoose');
const uuid = require('uuid');

// class Task {
//     constructor({
//         id = uuid(),
//         title = 'TITLE',
//         order = 0,
//         description = 'desc',
//         userId = null,
//         boardId = null,
//         columnId = null
//     } = {}) {
//         this.id = id;
//         this.title = title;
//         this.order = order;
//         this.description = description;
//         this.userId = userId;
//         this.boardId = boardId;
//         this.columnId = columnId;
//     }
// }

const TaskSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    title: String,
    order: Number,
    description: String,
    userId: String,
    boardId: String,
    columnId: String
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
