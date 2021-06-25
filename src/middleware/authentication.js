/* eslint-disable callback-return */
const { JWT_SECRET_KEY } = require('../common/config');
const jwt = require('jsonwebtoken');
const userService = require('../resources/users/user.service');

const authentication = async (req, res, next) => {
    console.log('here');
    if (req.originalUrl === '/login' || req.originalUrl === '/login/') {
        next();
    } else if (
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
        const decoded = jwt.verify(
            req.headers.authorization.split(' ')[1],
            JWT_SECRET_KEY
        );
        try {
            const user = await userService.get(decoded._id);
            if (user.login === decoded.login) {
                console.log(true);
                next();
            } else {
                res.sendStatus('401');
            }
        } catch (err) {
            console.log(err);
            res.sendStatus('401');
        }
    } else {
        res.sendStatus('401');
    }
};

module.exports = authentication;
