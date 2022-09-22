const nodemailer = require('nodemailer')
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
    res.send("sending email from twilio sendgrid")
}

module.exports = sendEmailFunc