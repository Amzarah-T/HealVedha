import nodemailer from 'nodemailer';

export async function POST(request) {
  const formData = await request.json();
    const {emailTo, subject, message, html} = formData;

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'citytaxi672@gmail.com',
        pass: 'ewtq mtia altg trbm'
      }
    });
  
    var mailOptions = {
      from: 'citytaxi672@gmail.com',
      // to: emailTo,
      to: 'amzarahtstd@gmail.com',
      bcc: emailTo,
      subject: subject,
      text: message,
      html: html
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        form.current.reset();
      }

    });
  
    return new Response(JSON.stringify({ result: formData}), {
      headers: { 'Content-Type': 'application/json' },
    });
  }


// export const dynamic = 'force-dynamic'