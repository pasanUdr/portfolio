function Contact() {
  return (
    <div id="Contact" className="p-4 lg:p-20 flex flex-col items-center justify-center">
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500 max-md:text-3xl"
      >
        Contact Me
      </h1>
      <form action="" className="flex flex-col gap-2 lg:w-1/2">
        <div className="lg:flex gap-6">
          <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500" placeholder="Enter Your Name" type="text" />
          <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500" placeholder="Enter Your Email" type="email" />
        </div>
        <textarea className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500" placeholder="Write Your Message..." name="" id="" cols={10} rows={10}></textarea>
        <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 border-fuchsia-800 bg-fuchsia-800 hover:bg-slate-900 rounded-lg py-4 px-8 uppercase relative overflow-hidden bg_glow text-xl font-bold my-6" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
