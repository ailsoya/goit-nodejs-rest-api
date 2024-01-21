const { PORT } = process.env

const createEmail = (email, verificationToken) => {
    const mail = {
        to: email,
        subject: 'Please verify your email',
        html: `<a target="_blank" href="http://localhost:${PORT}/api/users/verify/:${verificationToken}">Verify email</a>`
    }

    return mail
}

module.exports = createEmail