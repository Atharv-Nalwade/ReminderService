const sender  = require('../config/emailConfig');

const sendBasicEmail = async (mailTo, mailFrom, mailSubject, mailBody) =>{
   try {
        const response = sender.sendMail({
            from:mailFrom,
            to:mailTo,
            subject:mailSubject,
            text:mailBody
        });
   } catch (error) {
    console.log(error);
   }  
}

module.exports = {
    sendBasicEmail
}