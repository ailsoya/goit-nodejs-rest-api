const register = require('./register')
const verify = require('./verify')
const login = require('./login')
const logout = require('./logout')
const currentUser = require('./currentUser')
const updateBySubscription = require('./updateBySubscription')
const updateByAvatar = require('./updateByAvatar')

module.exports = {
    register,
    verify,
    login,
    logout,
    currentUser,
    updateBySubscription,
    updateByAvatar,
}