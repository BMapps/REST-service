const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashFunc = async password => {
    return await bcrypt.hash(password, saltRounds);
};

const compare = async (data, encrypted) => {
    return await bcrypt.compare(data, encrypted);
};

module.exports = { hashFunc, compare };
