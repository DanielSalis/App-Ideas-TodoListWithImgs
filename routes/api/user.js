const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const db = require('../../config/db');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.get('/getAll', async (request, response) => {
    const { rows } = await db.query("Select * from public.user");
    response.json(rows);
});

// @route    POST api/users
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

        const { first_name, last_name, email, password, last_login } = request.body;

        try {
            let query = '';

            //check if user already exists
            query = `SELECT * from public.user u WHERE u.email = '${email}'`;
            const result = await db.query(query);
            if (result.rows.length > 0) {
                return response.status(400).json({ errors: [{ mdg: 'User already exists' }] });
            }

            //add new user
            query = `
                INSERT INTO public.user(first_name, last_name, email, password, last_login) 
                VALUES ('${first_name}', '${last_name}', '${email}', '${password}', '${last_login}')
            `;
            await db.query(query);
            response.send('Sucess on Register');

        } catch (error) {
            response.status(500).send('Server Error');
        }
    });

module.exports = router;