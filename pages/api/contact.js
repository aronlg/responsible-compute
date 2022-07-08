import nodemailer from 'nodemailer'

//eslint-disable import/no-anonymous-default-export

const handler = async (req, res) => {
  const { name, email, message } = req.body

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  })

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: 'arongreen0501@gmail.com',
      subject: `Contact form submission from ${name}`,
      html: `<p>New contact form submission from ${name}</p>
        <p><strong>Name: </strong> ${name}</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Message: </strong> ${message}</p>`,
    })

    console.log('message sent', emailRes.messageId)
  } catch (err) {
    console.log('err', err)
  }

  res.status(200).json(req.body)
}

export default handler
