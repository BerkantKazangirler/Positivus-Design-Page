function Header() {
  return (
    <div className="font-medium mt-20 flex justify-between flex-col md:flex-row ">
      <div className="flex flex-col gap-12 flex-1">
        <span className="max-w-128 text-left text-7xl">
          Navigating the digital landscape for success
        </span>
        <p className="max-w-128  text-2xl">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button className="text-white bg-black  p-5 rounded-2xl md:w-64 text-lg font-thin w-full">
          Book a consultation
        </button>
      </div>
      <img className="flex-1" src={"./assets/Illustration.png"} />
    </div>
  );
}

export default Header;
