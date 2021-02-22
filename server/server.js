require('dotenv').config();
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');

var transport = {
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: process.env.ADMIN_EMAIL_USERNAME,
        pass: process.env.ADMIN_EMAIL_PASSWORD
    }
}

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

router.post('/api/contact/mailMe', (req, res, next) => {
    const { name, email, message } = req.body;
    var content = `name: ${name} \n email: ${email} \n message: ${message}`;

    var mail = {
        from: name,
        to: 'collinlanierbusiness@gmail.com',
        subject: 'New Message from Contact Form',
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(3001);