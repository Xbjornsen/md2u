// app.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


// Middleware to parse request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Define API endpoint for form submission
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Create a transport using nodemailer
  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "api",
      pass: process.env.SERVERPASSWORD
    }
  });

  // Define email options
  const mailOptions = {
    from: 'mailtrap@md2u.vercel.app',
    to: 'xaviertr7@gmail.com', // Replace with your email
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ success: true });
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
