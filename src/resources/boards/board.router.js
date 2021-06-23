const router = require('express').Router();
const boardsService = require('./board.service');
const Board = require('../boards/board.model');

router.route('/').get(async (req, res) => {
    const boards = await boardsService.getAll();
    res.json(boards);
});

router.route('/:id').get(async (req, res) => {
    const board = await boardsService.get(req.params.id);
    if (board === undefined || board === null) {
        res.sendStatus(404);
    } else res.json(board);
});

router.route('/').post(async (req, res) => {
    const board = await boardsService.create(
        new Board({ title: req.body.title, columns: req.body.columns })
    );
    res.json(board);
});

router.route('/:id').put(async (req, res) => {
    const board = await boardsService.update(
        new Board({
            _id: req.params.id,
            title: req.body.title,
            columns: req.body.columns
        })
    );
    res.json(board);
});

router.route('/:id').delete(async (req, res) => {
    await boardsService.deleteById(req.params.id);
    res.sendStatus(204);
});
module.exports = router;
