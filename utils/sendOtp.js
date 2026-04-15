// import { createTransport } from "nodemailer";

// const sendOtp = async ({ email, subject, otp }) => {
//     const transport = createTransport({
//         host: "smtp.gmail.com",
//         port: 465,
//         auth: {
//             user: process.env.Gmail,
//             pass: process.env.Password,
//         },
//     });

//     const html = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>OTP Verification</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             margin: 0;
//             padding: 0;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             height: 100vh;
//         }
//         .container {
//             background-color: #fff;
//             padding: 20px;
//             border-radius: 8px;
//             box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//             text-align: center;
//         }
//         h1 {
//             color: red;
//         }
//         p {
//             margin-bottom: 20px;
//             color: #666;
//         }
//         .otp {
//             font-size: 36px;
//             color: #7b68ee;
//             margin-bottom: 30px;
//         }
//     </style>
// </head>
// <body>
//     <div class="container">
//         <h1>OTP Verification</h1>
//         <p>Hello ${email}, your One-Time Password for account verification is:</p>
//         <p class="otp">${otp}</p>
//     </div>
// </body>
// </html>`;

//     await transport.sendMail({
//         from: process.env.Gmail,
//         to: email,
//         subject,
//         html,
//     });
// };

// export default sendOtp;

// //Hello
// import { Resend } from "resend";
// import dotenv from "dotenv";

// dotenv.config();

// // Check API key (temporary debug)
// // console.log("RESEND KEY:", process.env.RESEND_API_KEY);

// const resend = new Resend(process.env.RESEND_API_KEY);

// const sendOtp = async ({ email, subject, otp }) => {
//     const html = `<!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <title>OTP Verification</title>
// <style>
// body {
// font-family: Arial, sans-serif;
// margin: 0;
// padding: 0;
// }
// .container {
// background-color: #fff;
// padding: 20px;
// border-radius: 8px;
// box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// text-align: center;
// max-width: 400px;
// margin: 40px auto;
// }
// h1 {
// color: red;
// }
// p {
// margin-bottom: 20px;
// color: #666;
// }
// .otp {
// font-size: 36px;
// color: #7b68ee;
// margin-bottom: 30px;
// font-weight: bold;
// }
// </style>
// </head>

// <body>
// <div class="container">
// <h1>OTP Verification</h1>
// <p>Hello ${email}, your One-Time Password is:</p>
// <p class="otp">${otp}</p>
// </div>
// </body>

// </html>`;

//     try {
//         const response = await resend.emails.send({
//             from: "onboarding@resend.dev", // sandbox email
//             to: email, // send to user email
//             subject: subject || "Your OTP Code",
//             html,
//         });

//         console.log("Email Response:", response);
//         console.log("OTP sent successfully");

//     } catch (error) {
//         console.log("Email Error:", error);
//     }
// };

// export default sendOtp;

import nodemailer from "nodemailer";

const sendOtp = async (email, otp) => {
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL,
            pass: process.env.PASSWORD,
        },
    });

    await transport.sendMail({
        from: process.env.GMAIL,
        to: email,
        subject: "OTP Verification",
        html: `<h2>Your OTP: ${otp}</h2>`,
    });
};

export default sendOtp;