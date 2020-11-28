const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const config = functions.config()
const cors = require('cors')({ origin: true });
admin.initializeApp();

/**
* Here we're using Gmail to send 
*/
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'artifyfi@gmail.com',
    pass: '3MiNa5?!'
  }
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {

    const mailOptions = {
      from: 'Art', // Something like: Jane Doe <janedoe@gmail.com>
      to: 'artifyfi@gmail.com',
      subject: 'Testing',
      text: 'Just text'
    };

    // returning result
    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.send(error.toString());
      }
      return res.send('Sended');
    });
  });
});
