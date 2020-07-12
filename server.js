const express = require('express');

const app = express();

app.use(express.json({ extend: false }));

app.use('/api/users', require('./routes/api/user'));

const PORT = process.env.PORT;
console.log(PORT);

app.listen(PORT, () => { console.log(`Server on port ${PORT}`) });
