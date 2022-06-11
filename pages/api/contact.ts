require("dotenv").config;

const ACCOUNT = process.env.EMAIL_ACCOUNT;
const PASSWORD = process.env.EMAIL_PASSWORD;
export default function contact(req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: ACCOUNT,
      pass: PASSWORD,
    },
  });

  const mailData = {
    from: ACCOUNT,
    to: "b08waffles@protonmail.com",
    subject: `${req.body.subject} From ${req.body.name}`,
    text: req.body.text,
    html: req.body.text,
  };

  transporter.sendMail(mailData, function Sender(err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
      if ((info.rejected = [])) {
        return res.status(200);
      } else {
        return res.status(404);
      }
    }
  });
}
