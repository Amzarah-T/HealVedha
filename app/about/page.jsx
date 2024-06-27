"use client"

import { title } from "@/components/primitives";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useRef, useState } from "react";


export default function AboutPage() {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = () => {
    setLoading(true);

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'citytaxi672@gmail.com',
        pass: 'ewtq mtia altg trbm'
      }
    });
  
    var mailOptions = {
      from: 'citytaxi672@gmail.com',
      to: emailTo,
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

      setLoading(false);
    });
  
    return "Mail Sent"
  }

  return (
    <div className="flex gap-4 text-left">
      <div className="w-full">
        <h1 className="text-foreground text-4xl">About</h1>
        <h1 className="text-2xl pb-10 pt-5">Get In Touch</h1>
        <h3>Our Business Hours: </h3>
        - Tuesday-Saturday: 10:00am to 6:00pm
        - Sunday-Monday: Closed
      </div>
      <div className="flex flex-wrap gap-3">
        <div>
          <p className="py-4">
            Drop us a note in the form below, and we will get back to you within 24 business hours.
            You can also directly email or call the number below.
          </p>
          <p>
            📞 714-730-7919
          </p>

        </div>
        <div className="w-full">
          <form ref={form} action={async (data) => {
            sendEmail(Object.fromEntries(data));
          }}>
            <Input type="text" label="Your Name" className="pb-4" name="yourName"/>
            <Input type="email" label="Your Email" className="pb-4" name="yourEmail"/>
            <Input type="tel" label="Phone Number" className="pb-4" name="phoneNumber" />
            <Textarea label="Enter your message" className="pb-4" name="message" />
            <Button type="submit" color="success" isLoading={loading}>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
