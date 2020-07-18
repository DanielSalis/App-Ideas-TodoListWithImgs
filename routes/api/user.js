const express = require('express');
let moment = require('moment');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const db = require('../../config/db');

// @route    POST api/users/getAll
// @desc     Register user
// @access   Public
router.get('/getAll', async (request, response) => {
    const { rows } = await db.query("Select * from public.user");
    response.json(rows);
});

// @route    POST api/users/create
// @desc     Register user
// @access   Public
router.post('/create',
    [
        check('first_name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
    ],

    async (request, response) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }

        let { first_name, last_name, email, password } = request.body;
        let last_login = await moment().format('YYYY-MM-DD HH:mm:ss');

        try {
            let query = '';
            let result = {}

            //check if user already exists
            query = `SELECT * from public.user u WHERE u.email = '${email}'`;
            result = await db.query(query);
            if (result.rows.length > 0) {
                return response.status(400).json({ errors: [{ mdg: 'User already exists' }] });
            }

            const salt = await bcrypt.genSalt(5);
            password = await bcrypt.hash(password, salt);

            //add new user
            query = `
                INSERT INTO public.user(first_name, last_name, email, password, last_login) 
                VALUES ('${first_name}', '${last_name}', '${email}', '${password}', '${last_login}')
            `;
            await db.query(query);

            //getUser Id
            query = `SELECT * from public.user u WHERE u.email = '${email}'`;
            result = await db.query(query);

            const payload = {
                user: {
                    id: result.rows[0].cd_user
                }
            };

            jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2 days' }, (err, token) => {
                if (err) {
                    throw err;
                }
                return response.status(200).json({ token });
            });

        } catch (error) {
            console.log(error.message);
            response.status(500).send('Server Error');
        }
    });

module.exports = router;