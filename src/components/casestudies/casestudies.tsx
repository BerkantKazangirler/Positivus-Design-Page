interface props {
  text1: string;
  text2: string;
  text3: string;
}
function Case({ text1, text2, text3 }: props) {
  return (
    <>
      <div className="bg-main-gray p-10 text-white mt-20 rounded-3xl hidden flex-row justify-around md:flex">
        <div className="flex flex-col gap-2">
          <p className="max-w-56">{text1}</p>
          <div className="flex flex-row gap-3">
            <span className="text-main-green">Learn more</span>
            <img src={"./assets/Icon3.svg"} className="w-fit" />
          </div>
        </div>
        <div className="border-l h-40">&nbsp;</div>
        <div className="flex flex-col gap-2">
          <p className="max-w-64 my-auto">{text2}</p>
          <div className="flex flex-row gap-3">
            <span className="text-main-green">Learn more</span>
            <img src={"./assets/Icon3.svg"} className="w-fit" />
          </div>
        </div>
        <div className="border-l h-40">&nbsp;</div>
        <div className="flex flex-col gap-2">
          <p className="max-w-56">{text3}</p>
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
    </>
  );
}

export default Case;
