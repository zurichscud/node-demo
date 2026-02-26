const http = require("http");
const nodemailer = require("nodemailer");
const yaml = require("js-yaml");
const url = require("url");
const fs = require("fs");

const config = yaml.load(fs.readFileSync("config.yaml", "utf8"));

const transporter = nodemailer.createTransport({
  service: "qq",
  auth: {
    user: config.user,
    pass: config.pass,
    host: "smtp.qq.com",
    secure: true,
    port: 465,
  },
});

const server = http
  .createServer((req, res) => {
    const { method, url } = req;
    if (method === "POST" && url === "/send") {
      transporter
        .sendMail({
          from: config.user,
          to: "zurichscud@outlook.com",
          subject: "Test Email",
          text: "This is a test email sent using Node.js and Nodemailer.",
        })
        .then((info) => {
          console.log(info);
          res.end("Email sent successfully");
        })
        .catch((error) => {
          console.log(error);
          res.end("Email sent failed");
        });
    } else {
      res.end("Invalid request");
    }
  })
  .listen(3000, () => {
    console.log("Server is running on port 3000");
  });
