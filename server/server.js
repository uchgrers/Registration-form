const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = 8000;
const origin = 3000;

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(cors({
    origin : `http://localhost:${origin}`,
    preflightContinue: true,
    credentials: true,
}))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let users = [];

module.exports = users

const createPostResponse = (statusCode, messages, userData) => {
    return {
        statusCode,
        messages,
        userData
    }
}

const createPutResponse = (statusCode, messages) => {
    return {
        statusCode,
        messages
    }
}

app.post('/users', (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        isAuth: false,
        id: users.length
    }

    if (req.body.type === 'register') {
        if (!users.find(u => u.email === newUser.email)) {
            newUser.isAuth = true;
            users = [...users, newUser];
            res.send(createPostResponse(0, [],
                {
                    id: newUser.id,
                    isAuth: newUser.isAuth
                }))
        } else {
            res.send(createPostResponse(1, ['Email is already taken']))
        }
    } else {
        const user = users.find(u => u.email === newUser.email && u.password === newUser.password)
        if (user) {
            user.isAuth = true;
            res.send(createPostResponse(0, [], {
                id: user.id,
                isAuth: user.isAuth
            }))
        } else {
            res.send(createPostResponse(1, ['Invalid email or password']))
        }
    }
})

app.put('/users', (req, res) => {
    const user = users.find(u => u.id === req.body.id);
    user.isAuth = false;
    res.send(createPutResponse(0, []));

})

app.get('/users', (req, res) => {
    res.send({
        users,
        usersCount: users.length
    });
})

require('./routes/index')(app);

app.listen(port, () => {
    console.log('Server is up and running');
})