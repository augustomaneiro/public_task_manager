const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeMail = (email, name) =>{
    sgMail.send({
        to: email,
        from: "maneiro.augusto@gmail.com",
        subject: "Thanks for joining in",
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    });
};

const sendGoodbyeMail = (email, name) => {
    sgMail.send({
        to: email,
        from: "maneiro.augusto@gmail.com",
        subject: "Goodbye",
        text: `We are sorry that you are leaving us, ${name}.`
    });
};

module.exports = {
    sendWelcomeMail,
    sendGoodbyeMail
};

