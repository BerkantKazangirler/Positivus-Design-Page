function Services() {
  return (
    <>
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="flex flex-row p-8 border justify-between border-black bg-main-white w-full h-72 rounded-3xl mx-auto md:mx-0">
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
          <img src={"./assets/Card1.png"} className="md:h-44 h-36 my-auto" />
        </div>

        <div className="flex flex-row p-8 border justify-between border-black bg-main-green w-full h-72 rounded-3xl mx-auto md:mx-0">
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
          <img src={"./assets/Card2.png"} className="md:h-44 h-32 my-auto" />
        </div>
      </div>

      <div className="flex flex-col gap-10 md:flex-row">
        <div className="flex flex-row p-8 border justify-between border-black bg-main-gray w-full h-72 rounded-3xl mx-auto md:mx-0">
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
          <img src={"./assets/Card3.png"} className="md:h-44 h-36 my-auto" />
        </div>

        <div className="flex flex-row p-8 border justify-between border-black bg-main-white w-full h-72 rounded-3xl mx-auto md:mx-0">
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
          <img src={"./assets/Card4.png"} className="md:h-44 h-36 my-auto" />
        </div>
      </div>

      <div className="flex flex-col gap-10 md:flex-row">
        <div className="flex flex-row p-8 border justify-between border-black bg-main-green w-full h-72 rounded-3xl mx-auto md:mx-0">
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
          <img src={"./assets/Card5.png"} className="md:h-44 h-36 my-auto" />
        </div>

        <div className="flex flex-row p-8 border justify-between border-black bg-main-gray w-full h-72 rounded-3xl mx-auto md:mx-0">
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
          <img src={"./assets/Card6.png"} className="md:h-44 h-36 my-auto" />
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
    </>
  );
}

export default Services;
