function Header() {
  return (
    <div className="font-medium mt-20 flex justify-between flex-col md:flex-row">
      <div className="flex flex-col">
        <span className="max-w-128 text-left text-7xl">
          Navigating the digital landscape for success
        </span>
        <p className="max-w-128 mt-8 text-2xl">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button className="text-white bg-black mt-10 p-5 rounded-2xl md:w-64 text-lg font-thin w-full">
          Book a consultation
        </button>
      </div>
      <img src={"./assets/Illustration.png"} />
    </div>
  );
}

export default Header;
