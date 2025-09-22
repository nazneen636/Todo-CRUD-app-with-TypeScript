const nodemailer = require("nodemailer");
const { customError } = require("../helpers/customError");

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: process.env.NODE_ENV == "development" ? false : true, // true for 465, false for other ports
  auth: {
    user: process.env.HOST_MAIL,
    pass: process.env.APP_PASSWORD,
  },
});

// Wrap in an async IIFE so we can use await.
exports.mailer = async (email, subject = "Confirm your email", template) => {
  try {
    const info = await transporter.sendMail({
      from: "no-reply",
      to: email,
      subject: subject,
      text: "Email verification for registration", // plain‑text body
      html: template, // HTML body
    });

    console.log("Message sent:", info.messageId);
  } catch (error) {
    throw new customError(401, "verification mail not sent");
  }
};
