import { title } from "@/components/primitives";
import { Button, Input, Textarea } from "@nextui-org/react";

export default function AboutPage() {
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
          <form>
            <Input type="text" label="Your Name" className="pb-4" />
            <Input type="email" label="Your Email" className="pb-4" />
            <Input type="tel" label="Phone Number" className="pb-4" />
            <Textarea label="Enter your message" className="pb-4" />
            <Button type="submit" color="success">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
