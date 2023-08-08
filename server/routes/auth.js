const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');
const nodemailer = require('nodemailer');

const router = express.Router();

require('../db/connection');
const User = require('../models/user_schema');


// something for sending mail

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'rafaela.cole@ethereal.email',
        pass: 'X2ucPxN778nB8GUgKU'
    }
});

router.get('/', (req, res) => {
    res.send('Hello World from the server, router.js!');
});

router.get('/signin', (req, res) => {
    res.send('Hello World from the signin, router.js!');
})

router.get('/register', (req, res) => {
    res.send('Hello World from the signup, router.js!');
})

// router.post('/booknow', async (req,res) => {
//     const {name, mail, password, crop, land, yeild, price, } = req.body;
    
//     if(!name || !mail ||  !crop || !land || !yeild || !price){
//         return res.status(422).json({error: "Please fill all the fields"});
//     }

//     try{
//         const userExist = await User.findOne({mail:mail});

//         if(userExist){
//             return res.status(422).json({error: "Email already exists"});
//         }

//         const user = new User({name, mail,password,crop, land, yeild, price, });

//         await user.save();

//         res.status(201).json({message: "Entry successful"});
//     }catch(err){
//         console.log(err);
//     }
// })

//signup route
router.post('/register', async (req,res) => {
    const {name, mail, password} = req.body;

    if(!name || !mail || !password){
        return res.status(422).json({error: "Please fill all the fields"});
    }

    try{
        const userExist = await User.findOne({mail:mail});

        if(userExist){
            return res.status(422).json({error: "Email already exists"});
        }

        // sending mail

        let info = await transporter.sendMail({
            from: '"Admin 👻" <kus@gamil.com>',
            to: mail,
            subject: "Welcome ✔", 
            text: "Welcome to AgroIndia",
            html: "<b>Welcome to AgroIndia</b>",
        })

        console.log("Message sent: %s", info.messageId); 


        const user = new User({name, mail,password});

        await user.save();

        res.status(201).json({message: "Registration successful"});
    }catch(err){
        console.log(err);
    }
})


router.post('/booknowbackend', authenticate, async (req,res) => {
    console.log('Hello from booknowbackend');
    const {crop, land, yeild, price} = req.body;

    // console.log(`crop = ${crop}, land = ${land}, yeild = ${yeild}, price = ${price}`);
    
    if(!crop || !land || !yeild || !price){
        return res.status(422).json({error: "Please fill all the fields"});
    }
    
    try{
        // console.log('BookNow in backend');
        let user = req.rootUser;
        // console.log(`user mail -> ${user.mail}`)

        const newBooking = {crop, land, yeild, price};

        user.bookings.push(newBooking);

        await user.save();

        console.log(user);

        res.status(201).json({message: "Booking successful"});

        await user.save();
    }catch(err){
        console.log(err);
    }
})
// login route

router.post('/signin', async (req,res) => {
    let token;
    console.log('Hello from signin');
    try{

        const {mail, password} = req.body;
        if(!mail || !password){
            return res.status(400).json({error: "Please fill all the fields"});
        }

        const userLogin = await User.findOne({mail:mail});

        // console.log(`userLogin = ${userLogin}`);
        if((userLogin)){
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();

            // console.log(token);

            // res.cookie("jwtoken", token);
            // console.log(cookie);

            res.cookie("jwtoken", token, {
                expires : new Date(Date.now() + 25892000000),
                httpOnly: true,
                path: '/',
            });

            if(!isMatch){
                res.status(400).json({error: "Invalid Credentials"});
            }
            
            res.json({message: "Login successful"});
        }
    }catch(err){
        console.log(err);
    }
})


router.get('/bookingsbackend',authenticate, async (req,res) => {
    // console.log('Hello from booknow');
    res.send(req.rootUser);
})


//  logout page

router.get('/signout', (req,res) => {
    res.clearCookie('jwtoken', {path: '/'});
    res.status(200).send('user logout')
})

router.get('/checkauthentication', authenticate, (req,res) => {
    res.send(req.rootUser);
});

router.post('/contact',authenticate, async (req,res) => {
    console.log(`hello from signin`)
    const {name, email, message} = req.body;
    console.log(req.body);
    if(!name || !email || !message){
        return res.status(422).json({error: "Please fill all the fields"});
    }

    try{
        let user = req.rootUser;

        const new_query = {name, email, message};

        user.queries.push(new_query);

        await user.save();

        res.status(201).json({message: "Message sent"});

        await user.save();

    }
    catch(err){
        console.log(err);
    }

})


module.exports = router; 