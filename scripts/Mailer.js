const nodemailer = require('nodemailer');
require('dotenv').config()



class Mailer {

    send() {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.GMAIL_ACCOUNT,
                pass: process.env.GMAIL_PASSWORD,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                accessToken: process.env.ACCESS_TOKEN,
                refreshToken: process.env.REFRESH_TOKEN
            }
        });

        let mailOptions = {
            from: process.env.GMAIL_ACCOUNT,
            to: process.env.EMAIL_ACCOUNT,
            subject: 'Tester email',
            text: 'yo yo yo can you see this?'
        }

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error)
            } else {
                console.log('email sent: ' + info.response)
            }
        })
    }

}
module.exports = Mailer;
