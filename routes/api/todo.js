const express = require('express');
let moment = require('moment');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const db = require('../../config/db');

// @route    POST api/todo/create
// @desc     Create a toDo Item
// @access   Public
router.post('/create',
    [
        check('title', 'Title is required').exists()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { title, description, userId } = req.body;

        try {
            let query = '';
            let result = {};
            let dt_creation = await moment().format('YYYY-MM-DD HH:mm:ss');

            query = `INSERT INTO public.todo(title, description, dt_creation)
                     values ('${title}', '${description}', '${dt_creation}') RETURNING cd_todo
            `;
            result = await db.query(query);

            query = `INSERT INTO public.user_todo(fk_todo, fk_user)
                     values (${result.rows[0].cd_todo}, ${parseInt(userId)})
            `;
            result = await db.query(query);

            return res.status(200).send();

        } catch (err) {
            return res.status(400).send();
        }
    })

// @route    POST api/todo/getAll
// @desc     Get All todos by UserID
// @access   Public
router.get('/getAll/:cd_user', async (req, res) => {
    try {
        let query = '';
        let result = {};

        const { cd_user } = req.params;

        query = `SELECT DISTINCT cd_todo, binary_img, mime_type, title, description, dt_creation  from public.todo
                 INNER JOIN public.user_todo ut ON ut.fk_user = ${parseInt(cd_user)}
        `;
        result = await db.query(query);

        const todos = result.rows;

        return res.status(200).json({ todos });
    }
    catch (err) {
        return res.status(400).send();
    }
});

module.exports = router;