import Nav from "../components/nav";
import Hero from "../components/about/hero";
import AboutComponent from "../components/home/about";
import Unnamed from "../components/about/unnamed";
import Numbers from "../components/about/numbers";
import Testimonials from "../components/home/testimonials";
import Clients from "../components/home/clients";
import Question from "../components/home/question";

export default function About() {
  return (
    <div className="">
      <Nav />
      <Hero />
      <AboutComponent />
      <Unnamed />
      <Numbers />
      <Testimonials />
      <Clients />
      <Question />
    </div>
  );
}
