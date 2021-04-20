const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.json());

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todolist'
});

app.get('/', (req, res) => {

});

app.listen(3002, () => {
    console.log('running on port 3002');
});