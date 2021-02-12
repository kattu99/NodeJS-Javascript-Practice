const nodemailer = require("nodemailer");

let testAccount = nodemailer.createTestAccount();
let transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: testAccount.user, 
    pass: testAccount.pass
 }
});
let info = transporter.sendMail({
  from: '"Fred Foo 👻" <foo@example.com>',
  to: "rk2949@columbia.edu",
  subject: "Hello ✔", 
  text: "Hello world?",
  html: "<b>Hello world?</b>"
});
