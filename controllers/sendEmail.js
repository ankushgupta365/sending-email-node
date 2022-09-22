const nodemailer = require('nodemailer')
const sgMail = require('@sendgrid/mail')
const sendEmailFuncEtheral = async (req, res) => {
    //creating test smtp service account
    let testAccount = await nodemailer.createTestAccount();
    //creating reusable transporter object using default smtp transport
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'maci.fisher@ethereal.email',
            pass: 'QnhkZPyQdd9Zf7NuG4'
        }
    });

    // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Anukush Gupta" <ankushgupta@gmail.com>', // sender address
    to: "bar@example.com, baz@example.com, ankushgupta365@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    html: "<b>This email is sended from node js</b>", // html body
  });
    res.json(info)
}
const sendEmailFunc = async(req,res)=>{
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: 'ankushguptap999@gmail.com', // Change to your recipient
        from: 'ankushgupta365@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      }
      const response = await sgMail.send(msg)
    res.json(response)
}

module.exports = sendEmailFunc