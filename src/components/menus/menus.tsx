import { useState } from "react";
import cn from "classnames";

function Menus() {
  const [test, setTest] = useState(1);

  const veriler = [
    {
      id: 1,
      header: "Consultation",
      sub: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 2,
      header: "Research and Strategy Development",
      sub: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 3,
      header: "Implementation",
      sub: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 4,
      header: "Monitoring and Optimization",
      sub: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 5,
      header: "Reporting and Communication",
      sub: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 6,
      header: "Continual Improvement",
      sub: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
  ];
  return (
    <>
      <div>
        {veriler.map((item, index) => (
          <div
            id={item.id.toString()}
            className={cn(
              "flex flex-col mt-10 px-12 py-10 rounded-[35px] border-2 border-black shadow-lg shadow-black",
              {
                "bg-main-green": test == item.id,
                "bg-main-white": test != item.id,
              }
            )}
          >
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row gap-5 my-auto">
                <span className="font-bold text-5xl">0{item.id}</span>
                <span className="font-semibold text-3xl my-auto">
                  {item.header}
                </span>
              </div>
              <button
                className="p-3 px-6 rounded-full bg-button-inactive font-bold border-2 text-2xl border-black"
                onClick={() => setTest(Number(index + 1))}
              >
                {(test == item.id && <span>-</span>) || <span>+</span>}
              </button>
            </div>
            {test == item.id && (
              <>
                <hr className="border-black/40 mt-5" />
                <p className="mt-5 text-xl">{item.sub}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Menus;
