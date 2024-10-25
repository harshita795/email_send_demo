require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.Email_User,
    pass: process.env.Email_Password,
  },
});

const mailOptions = {
  from: process.env.Email_User,
  to: process.env.Email_User,
  subject: "Test Email from Node.js",
  text: "Hello, this is a test email sent rom Node.js using Nodemailer",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(`Error occured:`, error);
  }
  console.log(`Email sent successfully:`, info.response);
});
