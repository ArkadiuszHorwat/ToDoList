const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todolist'
});

app.post('/register', (req, res) => {

    const username = req.body.username;
    const userlogin = req.body.userlogin;
    const userpasswd = req.body.userpasswd;

    db.query(
        `INSERT INTO user (user_id, user_name, user_login, user_passwd) VALUES 
        (NULL, '${username}', '${userlogin}', '${userpasswd}');`,
        (error, response) => {
        console.log(error);
    });
});

app.post('/login', (req, res) => {

    const userlogin = req.body.userlogin;
    const userpasswd = req.body.userpasswd;

    db.query(
        `SELECT * FROM user WHERE user_login = '${userlogin}' AND user_passwd = '${userpasswd}';`,
        (error, response) => {
            if(error) res.send({error: error});

            if(response.length > 0){
                res.send(response);
            }
            else{
                res.send(false);
            }

    });
});

app.listen(3001, () => {
    console.log('running on port 3001');
});