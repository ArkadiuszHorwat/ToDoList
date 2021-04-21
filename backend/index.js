const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todolist'
});

app.get('/item/get/:userId', (req, res) => {
    const userid = req.params.userId;

    db.query(
        `SELECT * FROM item WHERE user_O_id = '${userid}';`,
        (error, response) => {
        res.send(response);
        if(error) console.log(error)
    });
});

app.post('/item/insert', (req, res) => {
    const item = req.body.item;
    const status = req.body.status;
    const userId = req.body.userId;

    db.query(
        `INSERT INTO item (item_id, item_description, item_status, user_O_id) VALUES 
        (NULL, '${item}', '${status}', '${userId}');`,
        (error, response) => {
        console.log(error);
    });
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

            if(response.length > 0){
                res.send(response);
            }
            else{
                console.log(error);
            }

    });
});

app.listen(3001, () => {
    console.log('running on port 3001');
});