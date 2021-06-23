const mongoose = require('mongoose');
const { MONGO_CONNECTION_STRING } = require('../common/config');

mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connectToDB = cb => {
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('MongoDB connected');
        cb();
    });
};

module.exports = { connectToDB };
