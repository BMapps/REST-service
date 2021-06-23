const logger = (req, res, next) => {
    console.log(`\nURL: ${req.originalUrl}`);
    console.log(`Parameters: ${Object.values(req.params)}`);
    console.log(req.method);
    console.log('Body:');
    Object.entries(req.body).map(el => log(el));
    next();
};

const log = item => {
    if (Array.isArray(item[1])) {
        console.log(item[0]);
        for (let i = 0; i < item[1].length; i++) {
            console.log(item[1][i]);
        }
    } else {
        console.log(item[0].concat(': ', item[1]));
    }
};

module.exports = logger;
