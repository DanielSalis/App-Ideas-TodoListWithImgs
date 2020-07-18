const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json({ extend: false }));

app.use('/api/users', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT;
console.log(process.env.DB_CONNECTION_STRING);

app.listen(PORT, () => { console.log(`Server on port ${PORT}`) });
