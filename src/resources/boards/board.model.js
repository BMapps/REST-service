const mongoose = require('mongoose');
const uuid = require('uuid');

// class Board {
//     constructor({
//         id = uuid(),
//         title = 'BOARD',
//         columns = [new Column(), new Column(), new Column(), new Column()]
//     } = {}) {
//         this.id = id;
//         this.title = title;
//         this.columns = columns;
//     }
// }

const BoardSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    title: String,
    columns: Array
});

const Board = mongoose.model('Board', BoardSchema);

module.exports = Board;
