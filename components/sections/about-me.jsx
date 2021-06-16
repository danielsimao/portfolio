import Highlight from '../highlight';
import BasicReveal from '../../utils/reveal';

export default function AboutMe() {
  return (
    <>
      <section id="about-me" className="pt-2">
        <Highlight className="text-3xl mb-5">About me</Highlight>
        <BasicReveal trigger={<div className="text-left" />}>
          <div>
            <p className="mb-5 text-light font-carrois text-lg text-bold">
              I&apos;m a Fullstack Developer from Portugal, passionate about building beautiful
              interactive user-friendly experiences. With 4+ years in the game, frontend is my jam,
              but I know my way in the backend suborbs.
            </p>
            <p className="mb-5 text-light font-carrois text-lg text-bold">
              I&apos;m a problem solving enthusiast, apolagistic of working in collaborative manner
              and always looking forward to improve myself and help others.
            </p>
            <p className="text-light font-carrois text-lg text-bold">
              I&apos;m a retired lineman, with the weird tradition of rewatching Lord of the Rings
              every single year. When I&apos;m not coding I like to find myself with a bodyboard in
              the nearest beach.
            </p>
          </div>
        </BasicReveal>
      </section>
      <style jsx>
        {`
          .underline-text {
            position: relative;
          }
          .underline-text ::before {
            content: '';
            position: absolute;
            left: 50%;
            bottom: 0;
            width: 100%;
            height: 10px;
            transform: skew(-12deg) translateX(-50%);
            background: var(--color-dark);
            z-index: -1;
          }
        `}
      </style>
    </>
  );
}
