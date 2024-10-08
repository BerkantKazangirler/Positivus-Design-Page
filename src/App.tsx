import {
  Nav,
  Header,
  Heading,
  Services,
  Menus,
  Contact,
  Testimonials,
  Footer,
} from "./components";
import Case from "./components/casestudies/casestudies";
import Sponsors from "./components/header/sponsors/sponsors";
import Team from "./components/team/team";

function App() {
  return (
    <>
      <div className="flex mx-4 my-14 flex-col font-spacegrotesk md:mx-48">
        <Nav />
        <Header />
        <Sponsors />
        <Heading
          title="Services"
          description="At our digital marketing agency, we offer a range of services to help
        businesses grow and succeed online. These services include:"
        />
        <div className="flex flex-col gap-10">
          <Services />
        </div>
        <Heading
          title="Case Studies"
          description="Explore Real-Life Examples of Our Proven Digital Marketing Success
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
          title="Our Working Process"
          description="Step-by-Step Guide to Achieving Your Business Goals"
        />
        <Menus />
        <Heading
          title="Team"
          description="Meet the skilled and experienced team behind our successful digital
            marketing strategies"
        />
        <Team />
        <Heading
          title="Testimonials"
          description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
            about Our Digital Marketing Services"
        />
        <Testimonials />

        <Heading
          title="Contact Us"
          description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        />
        <Contact />
        <Footer.Footer />
      </div>
    </>
  );
}

export default App;
