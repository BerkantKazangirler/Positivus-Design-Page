interface props {
  text: string;
}

function Subheading({ text }: props) {
  return (
    <p className="my-auto max-w-101 text-center md:text-start mx-auto md:mx-0">
      {text}
    </p>
  );
}

export default Subheading;
