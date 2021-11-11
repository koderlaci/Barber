const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash')
const flash = require('express-session')

const initializePassport = require('./passport-config.js');
initializePassport(
    passport,
    email => users.find(user => user.email === email)
)

const users = []

app.set('view-engines', 'ejs');
app.use(express.urlencoded({ extended: false}))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET
}))

app.get('/', (req, res) =>{
    res.render('index.ejs');
})

app.post('/Login', (req, res) =>{
    
})

app.post('/Registration', (req, res) =>{
    try{
        const hashedPassword = bcrypt.hash();
        users.push({
            id: Date.now().toString(),
            name: 'req.body.name',
            email: 'req.body.email',
            password: hashedPassword
        })
        res.redirect('/Booking')
    }catch{
        res.redirect('/Registration')
    }
})

app.listen(3000);