const mailer = require("nodemailer");
const transporter = mailer.createTransport({
  service: "gmail",
  auth: {
    user: "rnonso2005@gmail.com",
    pass: "test1234",
  },
});

const mailOptions = {
  from: "rnonso2005@gmail.com",
  to: "rnonso2005@yahoo.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
  html: "<h1>Welcome</h1><p>That was easy!</p>",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
