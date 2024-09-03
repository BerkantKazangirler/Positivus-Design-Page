import "./App.css";

function App() {
  return (
    <>
      <div className="flex mx-4 my-14 flex-col font-spacegrotesk md:mx-48">
        <div className="flex justify-between gap-36">
          <img src={"./assets/Logo.png"} className="h-7" />
          <div className="gap-10 font-semibold my-auto hidden md:flex">
            <a href="" className="my-auto">
              <span>About Us</span>
            </a>
            <a href="" className="my-auto">
              <span>Services</span>
            </a>
            <a href="" className="my-auto">
              {" "}
              <span>Use Cases</span>
            </a>
            <a href="" className="my-auto">
              {" "}
              <span>Pricing</span>
            </a>
            <a href="" className="my-auto">
              <span>Blog</span>
            </a>
            <button className="border px-7 p-4 my-auto border-black rounded-xl">
              Request a quote
            </button>
          </div>
        </div>
        <div className="font-medium mt-20 flex justify-between flex-col md:flex-row">
          <div className="flex flex-col">
            <span className="max-w-128 text-left text-7xl">
              Navigating the digital landscape for success
            </span>
            <p className="max-w-128 mt-8 text-2xl">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <button className="text-white bg-black mt-10 p-5 rounded-2xl md:w-64 text-lg font-thin w-full">
              Book a consultation
            </button>
          </div>
          <img src={"./assets/Illustration.png"} />
        </div>
        <div className="flex flex-col w-40 justify-between mt-10 grayscale md:flex-row relative mx-auto md:mx-0 md:w-full">
          <img src={"./assets/amazon.png"} />
          <img src={"./assets/dribble.png"} />
          <img src={"./assets/hubspot.png"} />
          <img src={"./assets/netflix.png"} />
          <img src={"./assets/notion.png"} />
          <img src={"./assets/zoom.png"} />
        </div>
        <div className="flex flex-col mt-32 gap-5 md:flex-row">
          <span className="bg-main-green w-fit text-3xl font-semibold p-2 rounded relative mx-auto md:mx-0">
            Services
          </span>
          <p className="my-auto max-w-101 text-center md:text-start mx-auto md:mx-0">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>

        <div className="flex flex-col mt-10 gap-10">
          <div className="flex flex-col gap-10 md:flex-row">
            <div className="flex flex-row p-8 border justify-between border-black bg-main-white w-96 h-72 md:w-140 rounded-3xl mx-auto md:mx-0">
              <div className="max-w-75">
                <span className="bg-main-green text-lg font-semibold px-2 rounded-md md:text-2xl">
                  Search engine optimization
                </span>
                <div className="flex flex-row gap-3 relative top-1/2">
                  <img src={"./assets/Icon.svg"} />
                  <span className="my-auto font-semibold hidden md:flex">
                    Learn More
                  </span>
                </div>
              </div>
              <img
                src={"./assets/Card1.png"}
                className="md:h-44 h-36 my-auto"
              />
            </div>

            <div className="flex flex-row p-8 border justify-between border-black bg-main-green w-96 h-72 md:w-140 rounded-3xl mx-auto md:mx-0">
              <div className="max-w-75">
                <span className="bg-main-white text-lg font-semibold px-2 rounded-md md:text-2xl">
                  Pay-per-click advertising
                </span>
                <div className="flex flex-row gap-3 relative top-1/2">
                  <img src={"./assets/Icon.svg"} />
                  <span className="my-auto font-semibold hidden md:flex">
                    Learn More
                  </span>
                </div>
              </div>
              <img
                src={"./assets/Card2.png"}
                className="md:h-44 h-32 my-auto"
              />
            </div>
          </div>

          <div className="flex flex-col gap-10 md:flex-row">
            <div className="flex flex-row p-8 border justify-between border-black bg-main-gray w-96 h-72 md:w-140 rounded-3xl mx-auto md:mx-0">
              <div className="max-w-48">
                <span className="bg-main-white text-2xl font-semibold pr-4 rounded-md">
                  Social Media Marketing
                </span>
                <div className="flex flex-row gap-3 relative top-1/2">
                  <img src={"./assets/Icon2.svg"} />
                  <span className="my-auto font-semibold hidden text-white md:flex">
                    Learn More
                  </span>
                </div>
              </div>
              <img
                src={"./assets/Card3.png"}
                className="md:h-44 h-36 my-auto"
              />
            </div>

            <div className="flex flex-row p-8 border justify-between border-black bg-main-white w-96 h-72 md:w-140 rounded-3xl mx-auto md:mx-0">
              <div className="max-w-40">
                <span className="bg-main-green text-2xl font-semibold px-2">
                  Email Marketing
                </span>
                <div className="flex flex-row gap-3 relative top-1/2">
                  <img src={"./assets/Icon.svg"} />
                  <span className="my-auto font-semibold hidden md:flex">
                    Learn More
                  </span>
                </div>
              </div>
              <img
                src={"./assets/Card4.png"}
                className="md:h-44 h-36 my-auto"
              />
            </div>
          </div>

          <div className="flex flex-col gap-10 md:flex-row">
            <div className="flex flex-row p-8 border justify-between border-black bg-main-green w-96 h-72 md:w-140 rounded-3xl mx-auto md:mx-0">
              <div className="max-w-40">
                <span className="bg-main-white text-3xl font-semibold px-2 rounded-md">
                  Content Creation
                </span>
                <div className="flex flex-row gap-3 relative top-1/2">
                  <img src={"./assets/Icon.svg"} />
                  <span className="my-auto font-semibold hidden md:flex">
                    Learn More
                  </span>
                </div>
              </div>
              <img
                src={"./assets/Card5.png"}
                className="md:h-44 h-36 my-auto"
              />
            </div>

            <div className="flex flex-row p-8 border justify-between border-black bg-main-gray w-96 h-72 md:w-140 rounded-3xl mx-auto md:mx-0">
              <div className="max-w-48">
                <span className="bg-main-green text-lg font-semibold px-2 rounded-md md:text-2xl">
                  Analytics and Tracking
                </span>
                <div className="flex flex-row gap-3 relative top-1/2">
                  <img src={"./assets/Icon2.svg"} />
                  <span className="my-auto font-semibold hidden md:flex text-white">
                    Learn More
                  </span>
                </div>
              </div>
              <img
                src={"./assets/Card6.png"}
                className="md:h-44 h-36 my-auto"
              />
            </div>
          </div>
        </div>

        <div className="bg-main-white p-10 max-h-96 rounded-3xl mt-24 h-80 flex flex-row justify-between">
          <div className="flex flex-col">
            <span className="text-3xl font-semibold">
              Let’s make things happen
            </span>
            <p className="max-w-100 mt-5 md:mt-0">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <button className="border px-7 p-4 w-full my-auto bg-main-gray text-white rounded-xl md:w-fit">
              Get your free proposal
            </button>
          </div>
          <img
            src={"./assets/frame.png"}
            className="h-96 -top-16 relative hidden md:visible"
          />
        </div>
        <div className="flex flex-col mt-32 gap-5 md:flex-row">
          <span className="bg-main-green w-fit text-3xl font-semibold p-2 rounded relative mx-auto md:mx-0">
            Case Studies
          </span>
          <p className="my-auto max-w-101 text-center md:text-start mx-auto md:mx-0">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>
        <div className="bg-main-gray p-10 text-white mt-20 rounded-3xl hidden flex-row justify-around md:flex">
          <div className="flex flex-col gap-2">
            <p className="max-w-56">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <div className="flex flex-row gap-3">
              <span className="text-main-green">Learn more</span>
              <img src={"./assets/Icon3.svg"} className="w-fit" />
            </div>
          </div>
          <div className="border-l h-40">&nbsp;</div>
          <div className="flex flex-col gap-2">
            <p className="max-w-64 my-auto">
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic.
            </p>
            <div className="flex flex-row gap-3">
              <span className="text-main-green">Learn more</span>
              <img src={"./assets/Icon3.svg"} className="w-fit" />
            </div>
          </div>
          <div className="border-l h-40">&nbsp;</div>
          <div className="flex flex-col gap-2">
            <p className="max-w-56">
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </p>
            <div className="flex flex-row gap-3">
              <span className="text-main-green">Learn more</span>
              <img src={"./assets/Icon3.svg"} className="w-fit" />
            </div>
          </div>
        </div>
        <div className="bg-main-gray p-10 text-white mt-20 rounded-3xl flex flex-col max-w-80 mx-auto md:hidden">
          <p className="text-white">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <div className="flex flex-row gap-3">
            <span className="text-main-green">Learn more</span>
            <img src={"./assets/Icon3.svg"} className="w-fit" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-32 gap-5">
          <span className="bg-main-green w-fit max-w-52 text-center text-3xl font-semibold p-2 rounded relative mx-auto md:mx-0 md:max-w-fit md:text-start">
            Our Working Process
          </span>
          <p className="mx-auto max-w-72 text-center md:mx-0 md:text-start">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>
        <div className="hidden flex-col bg-main-green mt-10 px-12 py-10 rounded-[35px] border-2 border-black shadow-lg shadow-black md:flex">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row gap-5 my-auto">
              <span className="font-bold text-5xl">01</span>
              <span className="font-semibold text-3xl my-auto">
                Consultation
              </span>
            </div>
            <button className="p-3 px-6 rounded-full bg-[#F3F3F3] font-bold border-2 text-2xl border-black">
              -
            </button>
          </div>
          <hr className="border-black/40 mt-5" />
          <p className="mt-5 text-xl">
            During the initial consultation, we will discuss your business goals
            and objectives, target audience, and current marketing efforts. This
            will allow us to understand your needs and tailor our services to
            best fit your requirements.
          </p>
        </div>
        <div className="flex flex-col bg-main-white mt-10 px-12 py-10 rounded-[35px] border-2 border-black shadow-lg shadow-black md:hidden">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row gap-5 my-auto">
              <span className="font-bold text-4xl">01</span>
              <span className="font-semibold text-xl my-auto">
                Consultation
              </span>
            </div>
            <button className="p-3 px-6 rounded-full bg-[#F3F3F3] font-bold border-2 text-2xl border-black">
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-main-white mt-10 px-12 py-10 rounded-[35px] border-2 border-black shadow-lg shadow-black">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row gap-5 my-auto">
              <span className="font-bold text-4xl md:text-5xl">02</span>
              <span className="font-semibold text-xl my-auto md:text-3xl">
                Research and Strategy Development
              </span>
            </div>
            <button className="p-3 px-6 rounded-full bg-[#F3F3F3] font-bold border-2 text-2xl border-black">
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-main-white mt-10 px-12 py-10 rounded-[35px] border-2 border-black shadow-lg shadow-black">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row gap-5 my-auto">
              <span className="font-bold text-4xl md:text-5xl">03</span>
              <span className="font-semibold text-xl my-auto md:text-3xl">
                Implementation
              </span>
            </div>
            <button className="p-3 px-6 rounded-full bg-[#F3F3F3] font-bold border-2 text-2xl border-black">
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-main-white mt-10 px-12 py-10 rounded-[35px] border-2 border-black shadow-lg shadow-black">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row gap-5 my-auto">
              <span className="font-bold text-4xl md:text-5xl">04</span>
              <span className="font-semibold text-xl my-auto md:text-3xl">
                Monitoring and Optimization
              </span>
            </div>
            <button className="p-3 px-6 rounded-full bg-[#F3F3F3] font-bold border-2 text-2xl border-black">
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-main-white mt-10 px-12 py-10 rounded-[35px] border-2 border-black shadow-lg shadow-black">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row gap-5 my-auto">
              <span className="font-bold text-4xl md:text-5xl">05</span>
              <span className="font-semibold text-xl my-auto md:text-3xl">
                Reporting and Communication
              </span>
            </div>
            <button className="p-3 px-6 rounded-full bg-[#F3F3F3] font-bold border-2 text-2xl border-black">
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-main-white mt-10 px-12 py-10 rounded-[35px] border-2 border-black shadow-lg shadow-black">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row gap-5 my-auto">
              <span className="font-bold text-4xl md:text-5xl">06</span>
              <span className="font-semibold text-xl my-auto md:text-3xl">
                Continual Improvement
              </span>
            </div>
            <button className="p-3 px-6 rounded-full bg-[#F3F3F3] font-bold border-2 text-2xl border-black">
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-32 gap-5">
          <span className="bg-main-green w-fit max-w-52 text-center text-3xl font-semibold p-2 rounded relative mx-auto md:mx-0 md:max-w-fit md:text-start">
            Team
          </span>
          <p className="my-auto max-w-98 text-center md:text-start mx-auto md:mx-0">
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </p>
        </div>
        <div className="flex flex-col mt-20 gap-14">
          <div className="flex flex-col gap-14 w-fit justify-center md:flex-row md:w-auto mx-auto md:mx-0">
            <div className="border border-black rounded-3xl flex flex-col px-7 py-5 gap-5">
              <div className="flex flex-row gap-5">
                <img src={"./assets/profile1.png"} className="h-24 w-24" />
                <div className="flex flex-col justify-end">
                  <span className="font-bold">John Smith</span>
                  <span>CEO and Founder</span>
                </div>
                <img src={"./assets/social.png"} className="h-8" />
              </div>
              <div className="flex flex-col mt-3">
                <hr className="border-black" />
                <p className="max-w-64 mt-5">
                  10+ years of experience in digital marketing. Expertise in
                  SEO, PPC, and content strategy
                </p>
              </div>
            </div>
            <div className="border border-black rounded-3xl flex flex-col px-7 py-5 gap-5">
              <div className="flex flex-row gap-5">
                <img src={"./assets/profile1.png"} className="h-24 w-24" />
                <div className="flex flex-col justify-end">
                  <span className="font-bold">Jane Doe</span>
                  <span>Director of Operations</span>
                </div>
                <img src={"./assets/social.png"} className="h-8" />
              </div>
              <div className="flex flex-col mt-3">
                <hr className="border-black" />
                <p className="max-w-64 mt-5">
                  7+ years of experience in project management and team
                  leadership. Strong organizational and communication skills
                </p>
              </div>
            </div>
            <div className="border border-black rounded-3xl flex flex-col px-7 py-5 gap-5">
              <div className="flex flex-row gap-5">
                <img src={"./assets/profile1.png"} className="h-24 w-24" />
                <div className="flex flex-col justify-end">
                  <span className="font-bold">Michael Brown</span>
                  <span>Senior SEO Specialist</span>
                </div>
                <img src={"./assets/social.png"} className="h-8" />
              </div>
              <div className="flex flex-col mt-3">
                <hr className="border-black" />
                <p className="max-w-64 mt-5">
                  5+ years of experience in SEO and content creation. Proficient
                  in keyword research and on-page optimization
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-14 w-fit justify-center md:flex-row md:w-auto mx-auto md:mx-0">
            <div className="border border-black rounded-3xl flex flex-col px-7 py-5 gap-5">
              <div className="flex flex-row gap-5">
                <img src={"./assets/profile1.png"} className="h-24 w-24" />
                <div className="flex flex-col justify-end">
                  <span className="font-bold">John Smith</span>
                  <span>CEO and Founder</span>
                </div>
                <img src={"./assets/social.png"} className="h-8" />
              </div>
              <div className="flex flex-col mt-3">
                <hr className="border-black" />
                <p className="max-w-64 mt-5">
                  10+ years of experience in digital marketing. Expertise in
                  SEO, PPC, and content strategy
                </p>
              </div>
            </div>
            <div className="border border-black rounded-3xl flex flex-col px-7 py-5 gap-5">
              <div className="flex flex-row gap-5">
                <img src={"./assets/profile1.png"} className="h-24 w-24" />
                <div className="flex flex-col justify-end">
                  <span className="font-bold">Jane Doe</span>
                  <span>Director of Operations</span>
                </div>
                <img src={"./assets/social.png"} className="h-8" />
              </div>
              <div className="flex flex-col mt-3">
                <hr className="border-black" />
                <p className="max-w-64 mt-5">
                  7+ years of experience in project management and team
                  leadership. Strong organizational and communication skills
                </p>
              </div>
            </div>
            <div className="border border-black rounded-3xl flex flex-col px-7 py-5 gap-5">
              <div className="flex flex-row gap-5">
                <img src={"./assets/profile1.png"} className="h-24 w-24" />
                <div className="flex flex-col justify-end">
                  <span className="font-bold">Michael Brown</span>
                  <span>Senior SEO Specialist</span>
                </div>
                <img src={"./assets/social.png"} className="h-8" />
              </div>
              <div className="flex flex-col mt-3">
                <hr className="border-black" />
                <p className="max-w-64 mt-5">
                  5+ years of experience in SEO and content creation. Proficient
                  in keyword research and on-page optimization
                </p>
              </div>
            </div>
          </div>
          <div className="flex md:justify-end">
            <button className="border px-7 p-4 w-full my-auto md:w-52 bg-main-gray text-white rounded-xl">
              See all team
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-32 gap-5">
          <span className="bg-main-green w-fit max-w-52 text-center text-3xl font-semibold p-2 rounded relative mx-auto md:mx-0 md:max-w-fit md:text-start">
            Testimonials
          </span>
          <p className="my-auto max-w-100 text-center md:text-start mx-auto md:mx-0">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
            about Our Digital Marketing Services
          </p>
        </div>
        <div className="bg-main-gray flex flex-row mt-32 rounded-2xl w-full">
          <div className="hidden flex-col p-8 -left-20 relative md:flex">
            <p className="relative max-w-128 p-10 rounded-2xl border border-main-green text-white">
              "We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online presence."
              <span className="absolute w-[1rem] h-[1rem] left-10 -bottom-2 rotate-45 border-b border-r border-main-green bg-main-gray"></span>
            </p>
            <div className="flex flex-col mt-5 mx-11">
              <span className="text-main-green">John Smith</span>
              <span className="text-white">Marketing Director at XYZ Corp</span>
            </div>
          </div>
          <div className="flex flex-col p-8 mx-auto">
            <p className="relative max-w-128 p-10 rounded-2xl border border-main-green text-white">
              "We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online presence."
              <span className="absolute w-[1rem] h-[1rem] left-10 -bottom-2 rotate-45 border-b border-r border-main-green bg-main-gray"></span>
            </p>
            <div className="flex flex-col mt-5 mx-11">
              <span className="text-main-green">John Smith</span>
              <span className="text-white">Marketing Director at XYZ Corp</span>
            </div>
          </div>
          <div className="hidden flex-col p-8 left-20 relative md:flex">
            <p className="relative max-w-128 p-10 rounded-2xl border border-main-green text-white">
              "We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online presence."
              <span className="absolute w-[1rem] h-[1rem] left-10 -bottom-2 rotate-45 border-b border-r border-main-green bg-main-gray"></span>
            </p>
            <div className="flex flex-col mt-5 mx-11">
              <span className="text-main-green">John Smith</span>
              <span className="text-white">Marketing Director at XYZ Corp</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-32 gap-5">
          <span className="bg-main-green w-fit max-w-52 text-center text-3xl font-semibold p-2 rounded relative mx-auto md:mx-0 md:max-w-fit md:text-start">
            Contact Us
          </span>
          <p className="my-auto max-w-72 text-center md:text-start mx-auto md:mx-0">
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </p>
        </div>
        <div className="bg-main-white px-8 md:px-16 py-10 mt-10 flex flex-row rounded-2xl mx-auto md:mx-0">
          <div className="flex flex-col w-full">
            <div className="flex flex-row gap-2">
              <input type="radio" name="sayhi" id="contact" />
              <span>Say Hi</span>
              <input type="radio" name="sayhi" id="contact" className="ml-3" />
              <span>Get a Quote</span>
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
            className="h-100 md:flex relative left-75 hidden"
          />
        </div>
        <div className="bg-main-gray mt-48 p-10 rounded-t-3xl relative top-20 hidden md:grid">
          <div className="flex flex-row">
            <svg
              width="180"
              height="30"
              viewBox="0 0 180 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_341_656)">
                <path
                  d="M14.7573 4.95854L29.1886 0.78125L24.9778 15.0001L29.1886 29.1788L14.7573 25.0416L0.285156 29.1788L4.53687 15.0001L0.285156 0.78125L14.7573 4.95854Z"
                  fill="white"
                />
              </g>
              <path
                d="M40.1094 25.4725V2.91699H49.2268C50.6261 2.91699 51.8723 3.19625 52.9655 3.75477C54.0806 4.29181 54.9442 5.06514 55.5564 6.07477C56.1905 7.06292 56.5075 8.25514 56.5075 9.65144V10.0703C56.5075 11.4666 56.1796 12.6696 55.5236 13.6792C54.8896 14.6888 54.0259 15.4622 52.9327 15.9992C51.8395 16.5363 50.6042 16.8048 49.2268 16.8048H43.6514V25.4725H40.1094ZM43.6514 13.647H48.866C50.1123 13.647 51.1071 13.3248 51.8505 12.6803C52.5938 12.0359 52.9655 11.1551 52.9655 10.0381V9.71588C52.9655 8.57736 52.5938 7.68588 51.8505 7.04144C51.1071 6.39699 50.1123 6.07477 48.866 6.07477H43.6514V13.647Z"
                fill="white"
              />
              <path
                d="M67.0964 25.9237C65.4784 25.9237 64.0354 25.6014 62.7673 24.957C61.521 24.2911 60.5371 23.3459 59.8156 22.1214C59.0941 20.897 58.7333 19.447 58.7333 17.7714V17.2881C58.7333 15.6125 59.0941 14.1733 59.8156 12.9703C60.5371 11.7459 61.521 10.8007 62.7673 10.1348C64.0354 9.46884 65.4784 9.13588 67.0964 9.13588C68.7143 9.13588 70.1574 9.46884 71.4255 10.1348C72.6936 10.8007 73.6885 11.7459 74.41 12.9703C75.1315 14.1733 75.4923 15.6125 75.4923 17.2881V17.7714C75.4923 19.447 75.1315 20.897 74.41 22.1214C73.6885 23.3459 72.6936 24.2911 71.4255 24.957C70.1574 25.6014 68.7143 25.9237 67.0964 25.9237ZM67.0964 22.9592C68.5832 22.9592 69.7857 22.4974 70.704 21.5737C71.6441 20.6285 72.1142 19.3288 72.1142 17.6748V17.3848C72.1142 15.7307 71.6551 14.4418 70.7368 13.5181C69.8185 12.5729 68.605 12.1003 67.0964 12.1003C65.6315 12.1003 64.429 12.5729 63.4888 13.5181C62.5705 14.4418 62.1114 15.7307 62.1114 17.3848V17.6748C62.1114 19.3288 62.5705 20.6285 63.4888 21.5737C64.429 22.4974 65.6315 22.9592 67.0964 22.9592Z"
                fill="white"
              />
              <path
                d="M86.3227 25.9237C84.2675 25.9237 82.5621 25.4726 81.2065 24.5703C79.8509 23.6681 79.0201 22.304 78.714 20.4781L81.8624 19.737C82.0373 20.6177 82.3325 21.3159 82.7479 21.8314C83.1633 22.347 83.6772 22.7122 84.2894 22.927C84.9234 23.1418 85.6012 23.2492 86.3227 23.2492C87.3941 23.2492 88.214 23.0451 88.7825 22.637C89.3728 22.2288 89.668 21.7026 89.668 21.0581C89.668 20.4137 89.3946 19.9411 88.848 19.6403C88.3014 19.3396 87.4925 19.0926 86.4211 18.8992L85.306 18.7059C84.2128 18.5126 83.218 18.2333 82.3216 17.8681C81.4251 17.5029 80.7146 16.9981 80.1898 16.3537C79.6651 15.7092 79.4027 14.8822 79.4027 13.8725C79.4027 12.3688 79.9712 11.2088 81.1081 10.3925C82.245 9.55477 83.7537 9.13588 85.634 9.13588C87.4487 9.13588 88.9355 9.54403 90.0943 10.3603C91.275 11.1551 92.0402 12.24 92.3901 13.6148L89.2416 14.4848C89.0448 13.5181 88.6294 12.8414 87.9953 12.4548C87.3613 12.0466 86.5742 11.8425 85.634 11.8425C84.7157 11.8425 83.9942 12.0144 83.4694 12.3581C82.9447 12.6803 82.6823 13.1422 82.6823 13.7437C82.6823 14.3881 82.9338 14.8607 83.4367 15.1614C83.9614 15.4622 84.661 15.6877 85.5356 15.8381L86.6835 16.0314C87.8423 16.2248 88.9027 16.4933 89.8647 16.837C90.8268 17.1807 91.5811 17.6748 92.1277 18.3192C92.6961 18.9637 92.9804 19.8229 92.9804 20.897C92.9804 22.4866 92.3791 23.7218 91.1766 24.6025C89.9741 25.4833 88.3561 25.9237 86.3227 25.9237Z"
                fill="white"
              />
              <path
                d="M96.9288 25.4725V9.58699H100.307V25.4725H96.9288ZM98.6342 7.42811C97.9782 7.42811 97.4207 7.22403 96.9616 6.81588C96.5243 6.38625 96.3056 5.83847 96.3056 5.17255C96.3056 4.50662 96.5243 3.96959 96.9616 3.56144C97.4207 3.13181 97.9782 2.91699 98.6342 2.91699C99.312 2.91699 99.8695 3.13181 100.307 3.56144C100.744 3.96959 100.963 4.50662 100.963 5.17255C100.963 5.83847 100.744 6.38625 100.307 6.81588C99.8695 7.22403 99.312 7.42811 98.6342 7.42811Z"
                fill="white"
              />
              <path
                d="M111.387 25.4725C110.403 25.4725 109.616 25.1825 109.026 24.6025C108.458 24.0225 108.173 23.2492 108.173 22.2826V12.3903H103.713V9.58699H108.173V4.33477H111.551V9.58699H116.372V12.3903H111.551V21.7025C111.551 22.347 111.857 22.6692 112.47 22.6692H115.848V25.4725H111.387Z"
                fill="white"
              />
              <path
                d="M120.341 25.4725V9.58699H123.719V25.4725H120.341ZM122.046 7.42811C121.39 7.42811 120.833 7.22403 120.374 6.81588C119.936 6.38625 119.718 5.83847 119.718 5.17255C119.718 4.50662 119.936 3.96959 120.374 3.56144C120.833 3.13181 121.39 2.91699 122.046 2.91699C122.724 2.91699 123.282 3.13181 123.719 3.56144C124.156 3.96959 124.375 4.50662 124.375 5.17255C124.375 5.83847 124.156 6.38625 123.719 6.81588C123.282 7.22403 122.724 7.42811 122.046 7.42811Z"
                fill="white"
              />
              <path
                d="M132.471 25.4725L127.027 9.58699H130.602L134.898 23.0237H135.423L139.719 9.58699H143.294L137.85 25.4725H132.471Z"
                fill="white"
              />
              <path
                d="M152.77 25.7626C151.546 25.7626 150.453 25.494 149.491 24.957C148.528 24.42 147.774 23.6574 147.228 22.6692C146.681 21.6811 146.408 20.4996 146.408 19.1248V9.58699H149.786V18.8992C149.786 20.274 150.136 21.2944 150.835 21.9603C151.535 22.6048 152.508 22.927 153.754 22.927C155.131 22.927 156.236 22.4759 157.066 21.5737C157.919 20.65 158.346 19.3288 158.346 17.6103V9.58699H161.724V25.4725H158.411V23.0881H157.886C157.58 23.7326 157.034 24.3448 156.247 24.9248C155.459 25.4833 154.301 25.7626 152.77 25.7626Z"
                fill="white"
              />
              <path
                d="M173.342 25.9237C171.287 25.9237 169.581 25.4726 168.226 24.5703C166.87 23.6681 166.039 22.304 165.733 20.4781L168.882 19.737C169.056 20.6177 169.352 21.3159 169.767 21.8314C170.183 22.347 170.696 22.7122 171.309 22.927C171.943 23.1418 172.62 23.2492 173.342 23.2492C174.413 23.2492 175.233 23.0451 175.802 22.637C176.392 22.2288 176.687 21.7026 176.687 21.0581C176.687 20.4137 176.414 19.9411 175.867 19.6403C175.321 19.3396 174.512 19.0926 173.44 18.8992L172.325 18.7059C171.232 18.5126 170.237 18.2333 169.341 17.8681C168.444 17.5029 167.734 16.9981 167.209 16.3537C166.684 15.7092 166.422 14.8822 166.422 13.8725C166.422 12.3688 166.99 11.2088 168.127 10.3925C169.264 9.55477 170.773 9.13588 172.653 9.13588C174.468 9.13588 175.955 9.54403 177.113 10.3603C178.294 11.1551 179.059 12.24 179.409 13.6148L176.261 14.4848C176.064 13.5181 175.649 12.8414 175.014 12.4548C174.38 12.0466 173.593 11.8425 172.653 11.8425C171.735 11.8425 171.013 12.0144 170.489 12.3581C169.964 12.6803 169.702 13.1422 169.702 13.7437C169.702 14.3881 169.953 14.8607 170.456 15.1614C170.981 15.4622 171.68 15.6877 172.555 15.8381L173.703 16.0314C174.861 16.2248 175.922 16.4933 176.884 16.837C177.846 17.1807 178.6 17.6748 179.147 18.3192C179.715 18.9637 180 19.8229 180 20.897C180 22.4866 179.398 23.7218 178.196 24.6025C176.993 25.4833 175.375 25.9237 173.342 25.9237Z"
                fill="white"
              />
            </svg>
            <div className="text-white flex my-auto gap-10 w-full underline justify-end">
              <a href="#">About us</a>
              <a href="#">Services</a>
              <a href="#">Use Cases</a>
              <a href="#">Pricing</a>
              <a href="#">Blog</a>
              <div className="flex flex-row gap-5">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15" cy="15" r="15" fill="white" />
                  <path
                    d="M8.22178 22.0586H11.3059V12.0742H8.22178V22.0586Z"
                    fill="black"
                  />
                  <path
                    d="M7.94141 8.88672C7.94141 9.87109 8.7358 10.668 9.76384 10.668C10.7451 10.668 11.5395 9.87109 11.5395 8.88672C11.5395 7.90234 10.7451 7.05859 9.76384 7.05859C8.7358 7.05859 7.94141 7.90234 7.94141 8.88672Z"
                    fill="black"
                  />
                  <path
                    d="M19.8106 22.0586H22.9414V16.5742C22.9414 13.9023 22.3339 11.793 19.2031 11.793C17.7078 11.793 16.6797 12.6367 16.2592 13.4336H16.2124V12.0742H13.2685V22.0586H16.3526V17.1367C16.3526 15.8242 16.5863 14.5586 18.2218 14.5586C19.8106 14.5586 19.8106 16.0586 19.8106 17.1836V22.0586Z"
                    fill="black"
                  />
                </svg>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30 15.0913C30 6.75456 23.2863 0 15 0C6.71371 0 0 6.75456 0 15.0913C0 22.6369 5.44355 28.9047 12.6411 30V19.4726H8.83064V15.0913H12.6411V11.8053C12.6411 8.03245 14.879 5.90264 18.2661 5.90264C19.9597 5.90264 21.6532 6.2069 21.6532 6.2069V9.91886H19.7782C17.9032 9.91886 17.2984 11.0751 17.2984 12.2921V15.0913H21.4718L20.8065 19.4726H17.2984V30C24.496 28.9047 30 22.6369 30 15.0913Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15" cy="15" r="15" fill="white" />
                  <path
                    d="M21.9961 11.4915C22.6854 10.9745 23.3058 10.3541 23.7884 9.63028C23.168 9.90602 22.4442 10.1128 21.7204 10.1818C22.4786 9.73369 23.0301 9.04435 23.3058 8.18267C22.6165 8.59628 21.8238 8.90648 21.031 9.07881C20.3417 8.35501 19.4111 7.94141 18.3771 7.94141C16.378 7.94141 14.758 9.56135 14.758 11.5604C14.758 11.8362 14.7925 12.1119 14.8614 12.3876C11.8628 12.2153 9.1744 10.7677 7.38212 8.59628C7.07192 9.11328 6.89959 9.73369 6.89959 10.423C6.89959 11.6638 7.51999 12.7668 8.51953 13.4216C7.93359 13.3872 7.34766 13.2493 6.86512 12.9736V13.008C6.86512 14.7659 8.10593 16.2135 9.76034 16.5581C9.48461 16.6271 9.13994 16.696 8.82973 16.696C8.58847 16.696 8.38166 16.6615 8.1404 16.6271C8.58847 18.0747 9.93267 19.1087 11.5182 19.1432C10.2773 20.1082 8.72633 20.6942 7.03745 20.6942C6.72725 20.6942 6.45152 20.6597 6.17578 20.6252C7.76126 21.6592 9.65694 22.2452 11.725 22.2452C18.3771 22.2452 21.9961 16.7649 21.9961 11.974C21.9961 11.8017 21.9961 11.6638 21.9961 11.4915Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex mt-10 flex-col justify-between w-full">
              <span className="bg-main-green font-bold px-2 rounded w-fit">
                Contant us:
              </span>
              <div className="text-white flex flex-col gap-5 mt-5">
                <span>Email: info@positivus.com</span>
                <span>Phone: 555-567-8901</span>
                <div className="flex flex-col">
                  <span>Address: 1234 Main St</span>
                  <span>Moonstone City, Stardust State 12345</span>
                </div>
              </div>
            </div>
            <div className="bg-[#292A32] h-fit w-full flex flex-row mt-10 gap-5 py-5 px-10 rounded-xl">
              <input
                type="text"
                placeholder="Email"
                className="border rounded-2xl p-4 w-96 my-auto h-fit bg-transparent"
              />
              <button className="w-60 h-fit bg-main-green px-10 py-5 rounded-xl">
                Subscribe to news
              </button>
            </div>
          </div>
          <hr className="mt-10" />
          <div className="mt-10 flex gap-10">
            <span className="text-white">
              © 2023 Positivus. All Rights Reserved.
            </span>
            <a href="#" className="text-white underline">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="bg-main-gray mt-48 p-10 rounded-t-3xl top-20 flex flex-col mx-auto md:hidden relative">
          <svg
            width="180"
            height="30"
            viewBox="0 0 180 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <g clip-path="url(#clip0_341_656)">
              <path
                d="M14.7573 4.95854L29.1886 0.78125L24.9778 15.0001L29.1886 29.1788L14.7573 25.0416L0.285156 29.1788L4.53687 15.0001L0.285156 0.78125L14.7573 4.95854Z"
                fill="white"
              />
            </g>
            <path
              d="M40.1094 25.4725V2.91699H49.2268C50.6261 2.91699 51.8723 3.19625 52.9655 3.75477C54.0806 4.29181 54.9442 5.06514 55.5564 6.07477C56.1905 7.06292 56.5075 8.25514 56.5075 9.65144V10.0703C56.5075 11.4666 56.1796 12.6696 55.5236 13.6792C54.8896 14.6888 54.0259 15.4622 52.9327 15.9992C51.8395 16.5363 50.6042 16.8048 49.2268 16.8048H43.6514V25.4725H40.1094ZM43.6514 13.647H48.866C50.1123 13.647 51.1071 13.3248 51.8505 12.6803C52.5938 12.0359 52.9655 11.1551 52.9655 10.0381V9.71588C52.9655 8.57736 52.5938 7.68588 51.8505 7.04144C51.1071 6.39699 50.1123 6.07477 48.866 6.07477H43.6514V13.647Z"
              fill="white"
            />
            <path
              d="M67.0964 25.9237C65.4784 25.9237 64.0354 25.6014 62.7673 24.957C61.521 24.2911 60.5371 23.3459 59.8156 22.1214C59.0941 20.897 58.7333 19.447 58.7333 17.7714V17.2881C58.7333 15.6125 59.0941 14.1733 59.8156 12.9703C60.5371 11.7459 61.521 10.8007 62.7673 10.1348C64.0354 9.46884 65.4784 9.13588 67.0964 9.13588C68.7143 9.13588 70.1574 9.46884 71.4255 10.1348C72.6936 10.8007 73.6885 11.7459 74.41 12.9703C75.1315 14.1733 75.4923 15.6125 75.4923 17.2881V17.7714C75.4923 19.447 75.1315 20.897 74.41 22.1214C73.6885 23.3459 72.6936 24.2911 71.4255 24.957C70.1574 25.6014 68.7143 25.9237 67.0964 25.9237ZM67.0964 22.9592C68.5832 22.9592 69.7857 22.4974 70.704 21.5737C71.6441 20.6285 72.1142 19.3288 72.1142 17.6748V17.3848C72.1142 15.7307 71.6551 14.4418 70.7368 13.5181C69.8185 12.5729 68.605 12.1003 67.0964 12.1003C65.6315 12.1003 64.429 12.5729 63.4888 13.5181C62.5705 14.4418 62.1114 15.7307 62.1114 17.3848V17.6748C62.1114 19.3288 62.5705 20.6285 63.4888 21.5737C64.429 22.4974 65.6315 22.9592 67.0964 22.9592Z"
              fill="white"
            />
            <path
              d="M86.3227 25.9237C84.2675 25.9237 82.5621 25.4726 81.2065 24.5703C79.8509 23.6681 79.0201 22.304 78.714 20.4781L81.8624 19.737C82.0373 20.6177 82.3325 21.3159 82.7479 21.8314C83.1633 22.347 83.6772 22.7122 84.2894 22.927C84.9234 23.1418 85.6012 23.2492 86.3227 23.2492C87.3941 23.2492 88.214 23.0451 88.7825 22.637C89.3728 22.2288 89.668 21.7026 89.668 21.0581C89.668 20.4137 89.3946 19.9411 88.848 19.6403C88.3014 19.3396 87.4925 19.0926 86.4211 18.8992L85.306 18.7059C84.2128 18.5126 83.218 18.2333 82.3216 17.8681C81.4251 17.5029 80.7146 16.9981 80.1898 16.3537C79.6651 15.7092 79.4027 14.8822 79.4027 13.8725C79.4027 12.3688 79.9712 11.2088 81.1081 10.3925C82.245 9.55477 83.7537 9.13588 85.634 9.13588C87.4487 9.13588 88.9355 9.54403 90.0943 10.3603C91.275 11.1551 92.0402 12.24 92.3901 13.6148L89.2416 14.4848C89.0448 13.5181 88.6294 12.8414 87.9953 12.4548C87.3613 12.0466 86.5742 11.8425 85.634 11.8425C84.7157 11.8425 83.9942 12.0144 83.4694 12.3581C82.9447 12.6803 82.6823 13.1422 82.6823 13.7437C82.6823 14.3881 82.9338 14.8607 83.4367 15.1614C83.9614 15.4622 84.661 15.6877 85.5356 15.8381L86.6835 16.0314C87.8423 16.2248 88.9027 16.4933 89.8647 16.837C90.8268 17.1807 91.5811 17.6748 92.1277 18.3192C92.6961 18.9637 92.9804 19.8229 92.9804 20.897C92.9804 22.4866 92.3791 23.7218 91.1766 24.6025C89.9741 25.4833 88.3561 25.9237 86.3227 25.9237Z"
              fill="white"
            />
            <path
              d="M96.9288 25.4725V9.58699H100.307V25.4725H96.9288ZM98.6342 7.42811C97.9782 7.42811 97.4207 7.22403 96.9616 6.81588C96.5243 6.38625 96.3056 5.83847 96.3056 5.17255C96.3056 4.50662 96.5243 3.96959 96.9616 3.56144C97.4207 3.13181 97.9782 2.91699 98.6342 2.91699C99.312 2.91699 99.8695 3.13181 100.307 3.56144C100.744 3.96959 100.963 4.50662 100.963 5.17255C100.963 5.83847 100.744 6.38625 100.307 6.81588C99.8695 7.22403 99.312 7.42811 98.6342 7.42811Z"
              fill="white"
            />
            <path
              d="M111.387 25.4725C110.403 25.4725 109.616 25.1825 109.026 24.6025C108.458 24.0225 108.173 23.2492 108.173 22.2826V12.3903H103.713V9.58699H108.173V4.33477H111.551V9.58699H116.372V12.3903H111.551V21.7025C111.551 22.347 111.857 22.6692 112.47 22.6692H115.848V25.4725H111.387Z"
              fill="white"
            />
            <path
              d="M120.341 25.4725V9.58699H123.719V25.4725H120.341ZM122.046 7.42811C121.39 7.42811 120.833 7.22403 120.374 6.81588C119.936 6.38625 119.718 5.83847 119.718 5.17255C119.718 4.50662 119.936 3.96959 120.374 3.56144C120.833 3.13181 121.39 2.91699 122.046 2.91699C122.724 2.91699 123.282 3.13181 123.719 3.56144C124.156 3.96959 124.375 4.50662 124.375 5.17255C124.375 5.83847 124.156 6.38625 123.719 6.81588C123.282 7.22403 122.724 7.42811 122.046 7.42811Z"
              fill="white"
            />
            <path
              d="M132.471 25.4725L127.027 9.58699H130.602L134.898 23.0237H135.423L139.719 9.58699H143.294L137.85 25.4725H132.471Z"
              fill="white"
            />
            <path
              d="M152.77 25.7626C151.546 25.7626 150.453 25.494 149.491 24.957C148.528 24.42 147.774 23.6574 147.228 22.6692C146.681 21.6811 146.408 20.4996 146.408 19.1248V9.58699H149.786V18.8992C149.786 20.274 150.136 21.2944 150.835 21.9603C151.535 22.6048 152.508 22.927 153.754 22.927C155.131 22.927 156.236 22.4759 157.066 21.5737C157.919 20.65 158.346 19.3288 158.346 17.6103V9.58699H161.724V25.4725H158.411V23.0881H157.886C157.58 23.7326 157.034 24.3448 156.247 24.9248C155.459 25.4833 154.301 25.7626 152.77 25.7626Z"
              fill="white"
            />
            <path
              d="M173.342 25.9237C171.287 25.9237 169.581 25.4726 168.226 24.5703C166.87 23.6681 166.039 22.304 165.733 20.4781L168.882 19.737C169.056 20.6177 169.352 21.3159 169.767 21.8314C170.183 22.347 170.696 22.7122 171.309 22.927C171.943 23.1418 172.62 23.2492 173.342 23.2492C174.413 23.2492 175.233 23.0451 175.802 22.637C176.392 22.2288 176.687 21.7026 176.687 21.0581C176.687 20.4137 176.414 19.9411 175.867 19.6403C175.321 19.3396 174.512 19.0926 173.44 18.8992L172.325 18.7059C171.232 18.5126 170.237 18.2333 169.341 17.8681C168.444 17.5029 167.734 16.9981 167.209 16.3537C166.684 15.7092 166.422 14.8822 166.422 13.8725C166.422 12.3688 166.99 11.2088 168.127 10.3925C169.264 9.55477 170.773 9.13588 172.653 9.13588C174.468 9.13588 175.955 9.54403 177.113 10.3603C178.294 11.1551 179.059 12.24 179.409 13.6148L176.261 14.4848C176.064 13.5181 175.649 12.8414 175.014 12.4548C174.38 12.0466 173.593 11.8425 172.653 11.8425C171.735 11.8425 171.013 12.0144 170.489 12.3581C169.964 12.6803 169.702 13.1422 169.702 13.7437C169.702 14.3881 169.953 14.8607 170.456 15.1614C170.981 15.4622 171.68 15.6877 172.555 15.8381L173.703 16.0314C174.861 16.2248 175.922 16.4933 176.884 16.837C177.846 17.1807 178.6 17.6748 179.147 18.3192C179.715 18.9637 180 19.8229 180 20.897C180 22.4866 179.398 23.7218 178.196 24.6025C176.993 25.4833 175.375 25.9237 173.342 25.9237Z"
              fill="white"
            />
          </svg>
          <div className="flex flex-col text-white mx-auto mt-10 text-center">
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Use Cases</a>
            <a href="#">Pricing</a>
          </div>
          <span className="bg-main-green font-bold px-2 rounded w-fit mx-auto mt-10">
            Contant us:
          </span>
          <div className="text-white flex flex-col gap-5 mx-auto text-center mt-5">
            <span>Email: info@positivus.com</span>
            <span>Phone: 555-567-8901</span>
            <div className="flex flex-col">
              <span>Address: 1234 Main St</span>
              <span>Moonstone City, Stardust State 12345</span>
            </div>
          </div>
          <div className="bg-[#292A32] flex flex-col p-4 mt-10">
            <input
              type="text"
              placeholder="Email"
              className="border border-white rounded-xl bg-transparent w-full p-4"
            />
            <button className="h-fit bg-main-green px-5 py-5 mt-3 rounded-xl">
              Subscribe to news
            </button>
          </div>
          <div className="flex flex-row mx-auto gap-5 mt-5">
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15" cy="15.6133" r="15" fill="white" />
              <path
                d="M8.22178 22.6719H11.3059V12.6875H8.22178V22.6719Z"
                fill="black"
              />
              <path
                d="M7.94141 9.5C7.94141 10.4844 8.7358 11.2813 9.76384 11.2813C10.7451 11.2813 11.5395 10.4844 11.5395 9.5C11.5395 8.51563 10.7451 7.67188 9.76384 7.67188C8.7358 7.67188 7.94141 8.51563 7.94141 9.5Z"
                fill="black"
              />
              <path
                d="M19.8106 22.6719H22.9414V17.1875C22.9414 14.5156 22.3339 12.4062 19.2031 12.4062C17.7078 12.4062 16.6797 13.25 16.2592 14.0469H16.2124V12.6875H13.2685V22.6719H16.3526V17.75C16.3526 16.4375 16.5863 15.1719 18.2218 15.1719C19.8106 15.1719 19.8106 16.6719 19.8106 17.7969V22.6719Z"
                fill="black"
              />
            </svg>
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 15.7046C30 7.36785 23.2863 0.613281 15 0.613281C6.71371 0.613281 0 7.36785 0 15.7046C0 23.2502 5.44355 29.5179 12.6411 30.6133V20.0859H8.83064V15.7046H12.6411V12.4186C12.6411 8.64574 14.879 6.51592 18.2661 6.51592C19.9597 6.51592 21.6532 6.82018 21.6532 6.82018V10.5321H19.7782C17.9032 10.5321 17.2984 11.6883 17.2984 12.9054V15.7046H21.4718L20.8065 20.0859H17.2984V30.6133C24.496 29.5179 30 23.2502 30 15.7046Z"
                fill="white"
              />
            </svg>
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15" cy="15.6133" r="15" fill="white" />
              <path
                d="M21.9961 12.1048C22.6854 11.5878 23.3058 10.9674 23.7884 10.2436C23.168 10.5193 22.4442 10.7261 21.7204 10.795C22.4786 10.347 23.0301 9.65763 23.3058 8.79596C22.6165 9.20956 21.8238 9.51976 21.031 9.6921C20.3417 8.96829 19.4111 8.55469 18.3771 8.55469C16.378 8.55469 14.758 10.1746 14.758 12.1737C14.758 12.4494 14.7925 12.7252 14.8614 13.0009C11.8628 12.8286 9.1744 11.381 7.38212 9.20956C7.07192 9.72656 6.89959 10.347 6.89959 11.0363C6.89959 12.2771 7.51999 13.3801 8.51953 14.0349C7.93359 14.0005 7.34766 13.8626 6.86512 13.5869V13.6213C6.86512 15.3791 8.10593 16.8267 9.76034 17.1714C9.48461 17.2403 9.13994 17.3093 8.82973 17.3093C8.58847 17.3093 8.38166 17.2748 8.1404 17.2403C8.58847 18.688 9.93267 19.722 11.5182 19.7564C10.2773 20.7215 8.72633 21.3074 7.03745 21.3074C6.72725 21.3074 6.45152 21.273 6.17578 21.2385C7.76126 22.2725 9.65694 22.8585 11.725 22.8585C18.3771 22.8585 21.9961 17.3782 21.9961 12.5873C21.9961 12.415 21.9961 12.2771 21.9961 12.1048Z"
                fill="black"
              />
            </svg>
          </div>
          <hr className="border-white mt-5" />
          <div className="flex flex-col text-white mx-auto text-center mt-10">
            <span>© 2023 Positivus. All Rights Reserved.</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
