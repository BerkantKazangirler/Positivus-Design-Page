function Nav() {
  return (
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
          <span>Use Cases</span>
        </a>
        <a href="" className="my-auto">
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
  );
}

export default Nav;
