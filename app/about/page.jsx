"use client"

import { title } from "@/components/primitives";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Popover, PopoverContent, PopoverTrigger, Textarea, useDisclosure } from "@nextui-org/react";
import axios from "axios";
import { useRef, useState } from "react";


export default function AboutPage() {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const sendEmail = async (data) => {
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/api/public/mail/send', {
        emailTo: data.yourEmail,
        subject: 'Customer Support',
        message: `
Name: ${data.yourName}
Telephone: ${data.phoneNumber}
Message: ${data.message}
Email: ${data.yourEmail}
`,
        html: undefined
      })

      onOpen();
      form.current.reset();
    } catch (err) {

    } finally {
      setLoading(false);
    }
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
            <Input type="text" label="Your Name" className="pb-4" name="yourName" required/>
            <Input type="email" label="Your Email" className="pb-4" name="yourEmail" required/>
            <Input type="tel" label="Phone Number" className="pb-4" name="phoneNumber" required/>
            <Textarea label="Enter your message" className="pb-4" name="message" required/>
            <div className="flex">
              <Button type="submit" color="success" isLoading={loading}>Submit</Button>
              <div>

                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">Alert!</ModalHeader>
                        <ModalBody>
                          Your submission processed
                        </ModalBody>
                        <ModalFooter>
                          <Button color="danger" variant="light" onPress={onClose}>
                            Ok
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
