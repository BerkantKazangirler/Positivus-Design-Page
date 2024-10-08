import Subheading from "./subheading/subheading";

interface props {
  title: string;
  description: string;
}

function Heading({ title, description }: props) {
  return (
    <div className="flex flex-col mt-32 gap-5 md:flex-row">
      <span className="bg-main-green w-fit text-3xl font-semibold p-2 rounded relative mx-auto md:mx-0">
        {title}
      </span>
      <Subheading text={description} />
    </div>
  );
}

export default Heading;
