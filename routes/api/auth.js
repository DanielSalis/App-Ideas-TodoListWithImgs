const express = require('express');
const auth = require('../../middlewares/auth');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const db = require('../../config/db');

// @route    GET api/auth/
// @desc     Get user by token
// @access   Private
router.get('/', auth, async (req, res) => {
    try {
        let query = '';
        let result = {};

        query = `SELECT cd_user, first_name, last_name, email, last_login FROM public.user
                 WHERE cd_user = ${req.user.id}
        `;
        result = await db.query(query);

        const { cd_user, first_name, last_name, email, last_login } = result.rows[0];
        const User = {
            cd_user,
            first_name,
            last_name,
            email,
            last_login
        }
        return res.status(200).json(User);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post('/',
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { email, password } = req.body;

        try {
            let query = '';
            let result = {};

            query = `SELECT * from public.user 
                     WHERE email ='${email}'
            `;
            result = await db.query(query);

            if (!result) {
                return res.status(400).json({ errors: { msg: 'Invalid Credentials' } })
            }

            const userPassword = result.rows[0].password;

            const isMatch = await bcrypt.compare(password, userPassword);

            if (!isMatch) {
                return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
            }

            const userId = result.rows[0].cd_user;

            const payload = {
                user: {
                    id: userId
                }
            };

            jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 36000 }, (err, token) => {
                if (err) {
                    throw err;
                }
                res.json({ token });
            })

        } catch (error) {
            console.error(err.message);
            return res.status(500).send('Server error');
        }
    }
);

module.exports = router;