function Contact() {
  return (
    <>
      <div className="bg-main-white px-8 md:px-16 py-10 mt-10 flex flex-row rounded-2xl mx-auto md:mx-0">
        <div className="flex flex-col w-full">
          <div className="flex flex-row gap-2">
            <input type="radio" name="sayhi" id="sayhi" />
            <label htmlFor="sayhi">Say Hi</label>
            <input type="radio" name="sayhi" id="quote" className="ml-3" />
            <label htmlFor="quote">Get a Quote</label>
          </div>
          <div className="flex flex-col mt-5 md:w-full">
            <label htmlFor="name" className="text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-black rounded-xl p-4 md:w-101 w-max mt-2"
              placeholder="Name"
            />
            <label htmlFor="email" className="text-sm mt-5">
              Email*
            </label>
            <input
              type="text"
              id="email"
              className="border border-black rounded-xl p-4 md:w-101 w-max mt-2"
              placeholder="Email"
            />
            <label htmlFor="message" className="text-sm mt-5">
              Message*
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              className="border border-black rounded-xl p-4 md:w-101 w-max h-28 mt-2"
            ></textarea>
            <button className="md:w-101 w-max mx-auto md:mx-0 bg-main-gray text-white mt-10 px-10 py-5 rounded-xl">
              Send Message
            </button>
          </div>
        </div>
        <img
          src={"./assets/frame2.png"}
          className="h-100 md:flex absolute -right-10 hidden"
        />
      </div>
    </>
  );
}

export default Contact;
