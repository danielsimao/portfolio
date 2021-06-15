import Layout from '../components/layout';
import ScrollTop from '../components/scroll-top';
import AboutMe from '../components/sections/about-me';
import Experience from '../components/sections/experience';
import Hero from '../components/sections/hero';
import Skills from '../components/sections/skills';

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <AboutMe />
        <Experience />
        <Skills />
        <ScrollTop />
      </Layout>

      <style jsx global>
        {`
          section:not(:last-of-type) {
            margin-bottom: 2.5rem;
          }

          section > .text-left {
            padding-top: 1rem;
          }
        `}
      </style>
    </>
  );
}
