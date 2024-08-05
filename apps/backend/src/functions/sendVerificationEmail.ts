const nodemailer = require('nodemailer');

const sendVerificationEmail = (email, verificationCode, firstName) => {
  const verificationLink = `http://localhost:3000/verify?code=${verificationCode}`;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.BUSINESS_EMAIL,
      pass: process.env.BUSINESS_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.BUSINESS_EMAIL,
    to: email,
    subject: 'Email Verification - Amaze Tech',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        
        <h4>Welcome ${firstName}!</h4>
        <h4>Please verify your email by clicking the link below:</h4>
        <a href="${verificationLink}" style="background-color: #5cb85c; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Verify Email</a>

        <p style="margin-top: 60px;">If you did not request this, please ignore this email.</p>
        <p style="margin-bottom: 0;">Best regards,</p>
        <h4 style="color: #5cb85c8c; font-style:italic; margin-top: 0;">AmazeTech</h4>
      </div>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

export default sendVerificationEmail;
