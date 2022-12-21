const User = require('../../models/user')
const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt');



module.exports = {
    create
}

async function create(req, res) {
    try {
    // ^ add the user to the database
    const user = await User.create(req.body)
    // ^ token will be a string
    const token = createJWT(user)
    // ^ Use res.Json to send back a string - client code needs to take this into consideration
    res.json(token)    
    } catch (error) {
    // ^ Client will check for non-2xx status code
    // ^ 400 = Bad Request
    res.status(400).json(error)
    }

}

// ^ Helper Function

function createJWT(user) {
    return jwt.sign(
        // ^ Below is data payload
        {user},
        process.env.SECRET,
        {expiresIn: '24h'}
    )
}