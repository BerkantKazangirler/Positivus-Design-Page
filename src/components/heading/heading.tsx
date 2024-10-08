import Subheading from "./subheading/subheading";

interface props {
  text: string;
  children: string;
}

function Heading({ children, text }: props) {
  return (
    <div className="flex flex-col mt-32 gap-5 md:flex-row">
      <span className="bg-main-green w-fit text-3xl font-semibold p-2 rounded relative mx-auto md:mx-0">
        {children}
      </span>
      <Subheading text={text} />
    </div>
  );
}

export default Heading;
