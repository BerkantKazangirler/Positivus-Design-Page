function Team() {
  const veriler = [
    {
      id: 1,
      name: "John Smith",
      position: "CEO and Founder",
      sub: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
    },
    {
      id: 2,
      name: "Jane Doe",
      position: "Director of Operations",
      sub: "7+ years of experience in project management and team leadership. Strong organizational and communication skills.",
    },
    {
      id: 3,
      name: "Michael Brown",
      position: "Senior SEO Specialist",
      sub: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.",
    },
    {
      id: 4,
      name: "John Smith",
      position: "CEO and Founder",
      sub: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
    },
    {
      id: 5,
      name: "Jane Doe",
      position: "Director of Operations",
      sub: "7+ years of experience in project management and team leadership. Strong organizational and communication skills.",
    },
    {
      id: 6,
      name: "Michael Brown",
      position: "Senior SEO Specialist",
      sub: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 flex-col mt-20 gap-14">
        {veriler.map((item) => (
          <div className="flex flex-col gap-14 w-fit justify-center md:flex-row md:w-auto mx-auto md:mx-0">
            <div className="border border-black rounded-3xl flex flex-col px-7 py-5 gap-5">
              <div className="flex flex-row gap-5">
                <img src={"./assets/profile1.png"} className="h-24 w-24" />
                <div className="flex flex-col justify-end">
                  <span className="font-bold">{item.name}</span>
                  <span>{item.position}</span>
                </div>
                <img src={"./assets/social.png"} className="h-8" />
              </div>
              <div className="flex flex-col mt-3">
                <hr className="border-black" />
                <p className="max-w-64 mt-5">{item.sub}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex md:justify-end mt-10">
        <button className="border px-7 p-4 w-full my-auto md:w-52 bg-main-gray text-white rounded-xl">
          See all team
        </button>
      </div>
    </>
  );
}

export default Team;
