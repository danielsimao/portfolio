import { Highlight } from "../highlight";
import { BasicReveal } from "../../utils/reveal";

function AboutMe() {
  return (
    <>
      <section id="about-me" className="pt-2">
        <BasicReveal trigger={<div className="text-left" />}>
          <Highlight className="text-3xl mb-5">About me</Highlight>
          <div className="grid">
            <div className="">
              <p className="mb-2 text-light font-carrois text-lg text-bold">
                I&apos;m a{" "}
                <span className="underline-text">Fullstack Developer</span> from
                Portugal, passionate about building beautiful interactive
                user-friendly experinces. With 4+ years in the game, frontend is
                my jam, but I know my way in the backend.
              </p>
            </div>
            <p className="mb-2 text-light font-carrois text-lg text-bold">
              I&apos;m a fast learner, problem solving enthusiast, always
              looking forward to improve myself and helper others.
            </p>
            <p className="mb-2  text-light font-carrois text-lg text-bold">
              I&apos;m a retired lineman, with the weird tradition of rewatching
              Lord of the Rings every single year. I like to find myself with a
              bodyboard in the nearest beach.
            </p>
          </div>
        </BasicReveal>
      </section>
      <style jsx>{`
        .underline-text {
          position: relative;
        }
        .underline-text ::before {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 150px;
          height: 10px;
          transform: skew(-12deg) translateX(-50%);
          background: var(--color-blue);
          z-index: -1;
        }
      `}</style>
    </>
  );
}

export { AboutMe };
