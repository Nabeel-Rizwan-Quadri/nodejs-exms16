var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mr.nabeelrizwan@gmail.com',
        // user: 'securesally@gmail.com',
        pass: 'your_password'
    }
});

var mailOptions = {
    from: 'mr.nabeelrizwan@gmail.com',
    to: 'nabeel@yopmail.com',
    subject: 'Sending Email using Node.js',
    text: '<div>That was easy!</div>'
};

const express = require('express')
const router = express.Router()

router.use('/todo', require('./todoRoutes'))
router.use('/user', require('./userRoutes'))
router.use('/email', (req, res) => {
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.send({
                status: 500
            })
        } else {
            console.log('Email sent: ' + info.response);
            res.send({
                status: 200
            })
        }
    });
})

module.exports = router
