require("dotenv").config;
import nodemailer from "nodemailer";

const ACCOUNT = process.env.EMAIL_ACCOUNT;
const PASSWORD = process.env.EMAIL_PASSWORD;
export default async function contact(req: any, res: any, err: any, info: any) {
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: ACCOUNT,
      pass: PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: ACCOUNT,
      to: "b08waffles@protonmail.com",
      subject: `${req.body.subject} From ${req.body.name}`,
      text: req.body.text,
      html: req.body.text,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message || err.toString() });
  }
  return res.status(200).json({ err: "" });
}
