import separator from "../assets/about-separator.svg";
import Heading from "../components/Heading";
import InputField from "../components/InputField";

const Contact = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-16  flex flex-col items-center gap-4 px-4 py-8"
    >
      <Heading className="text-2xl font-bold mb-4">Contact</Heading>
      <p className="text-sm text-center text-Black/70 ">
        Have a project, idea, or just want to chat? I’m always open to new
        opportunities and collaborations. <br />
        Drop a message — I’ll get back to you soon!
      </p>
      <img src={separator} alt="section separator" className="mx-auto mb-6" />

      <form
        action="https://formspree.io/f/mgvzolzw"
        method="POST"
        className="flex flex-col items-center gap-4   w-full "
      >
        <InputField name="name" placeholder="Enter your name" />
        <InputField name="email" type="email" placeholder="Enter your email" />
        <InputField name="subject" placeholder="Subject" />
        <InputField
          name="message"
          isTextarea
          placeholder="Type your message"
          rows={6}
        />
        <button
          type="submit"
          className="font-bold uppercase tracking-widest border-y-[3px] border-l-[3px] border-r-[3px] border-transparent border-l-black border-r-black px-4 py-2 mt-4 shadow transition-all duration-200 hover:border-black hover:bg-black hover:text-white cursor-pointer"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
