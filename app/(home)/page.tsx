import { Hero } from "./_components/Hero";
import { Verticals } from "./_components/Verticals";
import { About } from "./_components/About";
import { DigitalAI } from "./_components/DigitalAI";
import { CinematicLegacy } from "./_components/CinematicLegacy";
import { VerticalDrama } from "./_components/VerticalDrama";
import { Projects } from "./_components/Projects";
import { Collaborations } from "./_components/Collaborations";
import { Investors } from "./_components/Investors";
import { Streaming } from "./_components/Streaming";
import { Press } from "./_components/Press";
import { Careers } from "./_components/Careers";
import { Community } from "./_components/Community";
import { Contact } from "./_components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Verticals />
      <About />
      <DigitalAI />
      <CinematicLegacy />
      <VerticalDrama />
      <Projects />
      <Collaborations />
      <Investors />
      <Streaming />
      <Press />
      <Careers />
      <Community />
      <Contact />
    </>
  );
}
