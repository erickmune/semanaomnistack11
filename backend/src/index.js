const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() 
 */

app.listen(3333);