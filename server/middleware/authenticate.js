const jwt = require('jsonwebtoken');
const User = require('../models/user_schema');

const Authenticate = async (req, resp, next) => {
    try{
        // console.log(req.cookies);
        if (!req.cookies || !req.cookies.jwtoken) {
            throw new Error('Authentication token not found');
        }
        
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({_id:verifyToken._id, "tokens.token":token});

        if(!rootUser){throw new Error('User not found')}
        // console.log(`HEY -> ${rootUser}`);
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();
    }
    catch(err){
        resp.status(401).send(`Unauthoruzed User`);
        console.log(err);
    }
}

module.exports = Authenticate;