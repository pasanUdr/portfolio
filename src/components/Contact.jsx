import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xanonnaz");

  if (state.succeeded) {
    return (
      <div className="text-green-400 text-2xl text-center my-20 mx-10">
        Thank you! <br /> Your message has been sent successfully.
      </div>
    );
  }

  return (
    <div
      id="Contact"
      className="p-4 lg:p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500 max-md:text-3xl"
      >
        Contact Me
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 lg:w-1/2">
        <div className="lg:flex gap-6">
          <input
            className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500"
            placeholder="Enter Your Name"
            type="text"
            id="name"
            name="name"
            required
          />
          <ValidationError prefix="Text" field="name" errors={state.errors} />

          <input
            className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500"
            placeholder="Enter Your Email"
            type="email"
            id="email"
            name="email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <textarea
          className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500"
          placeholder="Write Your Message..."
          name="message"
          id="message"
          cols={10}
          rows={10}
          required
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          className={`neno-button text-white border-2 border-fuchsia-800 ${
            state.submitting
              ? "bg-slate-700"
              : "bg-fuchsia-800 hover:bg-slate-900"
          } rounded-lg py-4 px-8 uppercase text-xl font-bold my-6`}
          type="submit"
          disabled={state.submitting}
        >
          {state.submitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Contact;
