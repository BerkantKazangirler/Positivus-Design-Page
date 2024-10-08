import {
  Nav,
  Header,
  Heading,
  Services,
  Menus,
  Contact,
  Testimonials,
} from "./components";
import Footer from "./components/footer/footer";
import Sponsors from "./components/header/sponsors/sponsors";
import Case from "./components/casestudies/casestudies";
import Team from "./components/team/team";

function App() {
  return (
    <>
      <div className="flex mx-4 my-14 flex-col font-spacegrotesk md:mx-48">
        <Nav />
        <Header />
        <Sponsors />
        <Heading
          children="Services"
          text="At our digital marketing agency, we offer a range of services to help
        businesses grow and succeed online. These services include:"
        />
        <div className="flex flex-col mt-10 gap-10">
          <Services />
        </div>
        <Heading
          children="Case Studies"
          text="Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies"
        />
        <Case
          text1="For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales."
          text2="For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic."
          text3="For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales."
        />
        <Heading
          children="Our Working Process"
          text="Step-by-Step Guide to Achieving Your Business Goals"
        />
        <Menus />
        <Heading
          children="Team"
          text="Meet the skilled and experienced team behind our successful digital
            marketing strategies"
        />
        <Team />
        <Heading
          children="Testimonials"
          text="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
            about Our Digital Marketing Services"
        />
        <Testimonials />

        <Heading
          children="Contact Us"
          text="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
