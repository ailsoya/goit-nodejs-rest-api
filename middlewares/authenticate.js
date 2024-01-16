const jwt = require('jsonwebtoken')

const User = require('../models/user')
const { RequestError } = require('../helpers')
const { SECRET_KEY } = process.env

const authenticate = async (req, res, next) => {
    try {
        const { authorization } = req.headers
    try {
        const { id } = jwt.verify(authorization, SECRET_KEY)
        const user = await User.findById(id)
        if (!user || !authorization) {
            throw RequestError(401, "Not authorized")
        }

        req.user = user
        next()
    } catch (error) {
        throw RequestError(401, error.message)
    }
        
    } catch (error) {
        next(error)
    }
 }

module.exports = authenticate