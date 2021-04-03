import { Hero, AboutMe, Experience, Skills } from "../components";
import { ScrollTop } from "../components/scroll-top";

import { Layout } from "../components/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Experience></Experience>
        <Skills></Skills>
        <ScrollTop></ScrollTop>
        {/* <div className="panel">
          <h1 className="font-fira text-2xl text-light">
            Daniel Simão <br />{" "}
          </h1>
        </div> */}
      </Layout>

      <style jsx global>{`
        section:not(:last-of-type) {
          margin-bottom: 2.5rem;
        }

        section > .text-left {
          padding-top: 1rem;
        }

         {
          /* .panel {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100vh;
          width: 100vw;
          background-color: var(--color-dark);
          z-index: 1000;
          overflow: hidden;
        } */
        }
      `}</style>
    </>
  );
}
