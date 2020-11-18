const Admin = require('../models/Admin')
const env = require('../DBTwo')
const jwt = require('jsonwebtoken')

exports.register = function (req, res) {
    const { username, email, password, passwordConfirmation } = req.body
    if (!email || !password) {
        return res.status(422).json({ 'error': 'Please provide email or password' })
    }

    if (password != passwordConfirmation) {
        return res.status(422).json({ 'error': 'Password does not match' })
    }
    Admin.findOne({ email }, function (err, existingUser) {
        if (err) {
            return res.status(422).json({ 'error': 'Oops! Something went Wrong' })
        }
        if (existingUser) {
            return res.status(422).json({ 'error': 'User already exists' })
        }
        else {
            const admin = new Admin({
                username, email, password
            })

            admin.save(function (err) {
                if (err) {
                    return res.status(422).json({
                        'error': 'Oops! Something went wrong'
                    })
                }
                return res.status(200).json({ 'registered': true })
            })
        }
    })
}
exports.login = function (req, res) {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(422).json({ 'error': 'Please provide email or password' })
    }
    Admin.findOne({ email }, function (err, user) {
        if (err) {
            return res.status(422).json({
                'error': 'Oops! Something went wrong'
            })
        }

        if (!user) {
            return res.status(422).json({ 'error': 'Invalid user' })
        }

        if (user.hasSamePassword(password)) {
            json_token = jwt.sign(
                {
                    userId: user.id,
                    username: user.username
                },
                env.secret,
                { expiresIn: '1h' })

            return res.json(json_token)
        }
        else {
            return res.status(422).json({ 'error': 'Wrong email or password' })
        }
    })
}

exports.authMiddleware = function (req, res, next) {
    const json_token = req.headers.authorization
    try {
        if (json_token) {
            const user = parseToken(json_token)
            Admin.findById(user.userId, function (err, user) {
                if (err) {
                    return res.status(422).json({
                        'error': 'Oops! Something went wrong'
                    })
                }
                if (user) {
                    res.locals.user = user
                    next()
                }
                else {
                    return res.status(422).json({ 'error': 'Not authorized user' })
                }
            })
        }
        else {
            return res.status(422).json({ 'error': 'Not authorized user' })
        }
    } catch (err) {
        res.status(403).json({
            success: false,
            message: err
        })
    }
}

function parseToken(token) {
    return jwt.verify(token.split('_')[1], env.secret)
}