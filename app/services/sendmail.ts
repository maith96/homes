import nodemailer from "nodemailer";

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false, // or 'STARTTLS'
  auth: {
    user: "mobilemechhub@gmail.com", // Your Gmail email address
    pass: "ipqxhuxrhtgyqyxl", // Your Gmail password
  },
});

export async function sendmail(to: string, subject: string, text: string) {
  const mailOptions = {
    from: "flextech.dvs@gmail.com", // Sender's email address
    to: to, // Recipient's email address
    subject: subject, // Subject line
    text: text, // Plain text body
  };
  // Send the email
  await new Promise(() => {
    // send mail
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent to: " + to);
      }
    });
  });
}
