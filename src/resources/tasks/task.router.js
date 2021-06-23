const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
    const tasks = await tasksService.getAll(req.params.boardId);
    res.json(tasks);
});

router.route('/:id').get(async (req, res) => {
    const task = await tasksService.get(req.params.id);
    if (task === undefined || task === null) {
        res.sendStatus(404);
    } else res.json(task);
});

router.route('/').post(async (req, res) => {
    if (req.body.boardId === null || req.params.boardId === req.body.boardId) {
        try {
            const task = await tasksService.create(
                new Task({
                    title: req.body.title,
                    order: req.body.order,
                    description: req.body.description,
                    userId: req.body.userId,
                    boardId: req.params.boardId,
                    columnId: req.body.columnId
                })
            );
            res.json(task);
        } catch (err) {
            console.log(err);
        }
    } else {
        res.status(422).send("boardId in URL doesn't equal boardId in body");
    }
});

router.route('/:id').put(async (req, res) => {
    const task = await tasksService.update(
        new Task({
            _id: req.params.id,
            title: req.body.title,
            order: req.body.order,
            description: req.body.description,
            userId: req.body.userId,
            boardId: req.body.boardId,
            columnId: req.body.columnId
        })
    );
    res.json(task);
});

router.route('/:id').delete(async (req, res) => {
    await tasksService.deleteById(req.params.id);
    res.sendStatus(204);
});

module.exports = router;
