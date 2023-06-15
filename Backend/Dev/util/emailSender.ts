import nodemailer from "nodemailer";

interface EmailOptions {
  from: string;
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail(
  message: string,
  emailId: string
): Promise<void> {
  try {
    // Create a nodemailer transporter object with your email credentials
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      service: "gmail",
      auth: {
        user: "bidforgood99@gmail.com",
        pass: "xxrqpgmaxesumyyj",
      },
    });

    // Set up the email options
    const options: EmailOptions = {
      from: "bidforgood99@gmail.com",
      to: emailId,
      subject: "Bid For Good",
      html: message,
    };

    // Send the email using nodemailer's sendMail() method
    await transporter.sendMail(options);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
