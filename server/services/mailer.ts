import nodemailer from 'nodemailer';
import { IUserModel } from '../models/user';

const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASSWORD,
     },
});

/**
 *  Send welcome mail.
 *
 * @param user - This should be the object of new user.
 * @param url -  This should be the instance of URL.
 */
export const sendWelcomeMail = async (user: IUserModel, url: URL): Promise<void> => {
     const { firstname, lastname, code, email, _id } = user;
     const { origin } = url;

     await transporter.sendMail({
          from: '"FAQ" <cenga93@gmail.com>',
          to: email,
          subject: 'FAQ :: Welcome',
          html: `
         <html lang='en'>
              <head>
                   <style>
                         .verify-code{
                              font-weight: bold;
                              color: #ff9900;
                              font-size: 18px;
                         }
                   </style>
                   <title>Account verification</title>
              </head>
              <body>
                   <h2>Hello, ${firstname} ${lastname}</h2>
                   <p>Welcome to FAQ</p>
                   <p>Your verification code is  <span class='verify-code'>${code}</span></p>
                   <p>Enter it on the <a href="${origin}/verification/${_id}">Link</a></p>
              </body>
         </html>`,
     });
};

export const sendResetPasswordMail = async (email: string, url: URL, resetPasswordToken: string): Promise<void> => {
     const { origin } = url;

     await transporter.sendMail({
          from: '"FAQ" <cenga93@gmail.com>',
          to: email,
          subject: 'FAQ :: Reset password',
          html: `
         <html lang='en'>
              <head>
                   <style>
                         .verify-code{
                              font-weight: bold;
                              color: #ff9900;
                              font-size: 18px;
                         }
                   </style>
                   <title>Account verification</title>
              </head>
              <body>
                   <h2>Dear user</h2>
                   <p>To reset your password, click on this link:   <a href="${origin}/reset-password?token=${resetPasswordToken}">Link</a></p>
                   <p>If you did not request any password resets, then ignore this email.</p>
              </body>
         </html>`,
     });
};
