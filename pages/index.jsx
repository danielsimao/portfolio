import { AboutMe, Experience, Hero, Skills } from "../components";
import { Layout } from "../components/layout";
import { ScrollTop } from "../components/scroll-top";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Experience></Experience>
        <Skills></Skills>
        <ScrollTop></ScrollTop>
      </Layout>

      <style jsx global>{`
        section:not(:last-of-type) {
          margin-bottom: 2.5rem;
        }

        section > .text-left {
          padding-top: 1rem;
        }
      `}</style>
    </>
  );
}
