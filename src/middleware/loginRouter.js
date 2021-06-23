const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../common/config');
const hash = require('../common/hash');
const userService = require('../resources/users/user.service');

router.route('/').post(async (req, res) => {
    const user = await userService.getByProp({ login: req.body.login });

    if (!user[0] || !hash.compare(req.body.password, user[0].password)) {
        res.status(401).send('incorrect combination of login and password');
    } else {
        const token = await jwt.sign(
            { _id: user[0]._id, login: user[0].login },
            JWT_SECRET_KEY
        );
        res.json(token);
    }
});

module.exports = router;
