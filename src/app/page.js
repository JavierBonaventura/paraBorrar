import Nav from "./components/nav";
import Hero from "./components/home/hero";
import Video from "./components/home/video";
import About from "./components/home/about";
import Benefit from "./components/home/benefit";
import Services from "./components/home/services";
import Work from "./components/home/work";
import Testimonials from "./components/home/testimonials";
import Clients from "./components/home/clients";
import Question from "./components/home/question";

export default function Home() {
  return (
    <div className="">
      <Nav />
      <Hero />
      <Video />
      <About />
      <Benefit />
      <Services />
      <Work />
      <Testimonials />
      <Clients />
      <Question />
    </div>
  );
}
