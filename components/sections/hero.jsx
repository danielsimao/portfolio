import Image from 'next/image';
import Lottie from 'react-lottie-player';
import Typewriter from 'typewriter-effect';
import scrollDown from '../../public/assets/scroll-down.json';
import Highlight from '../highlight';
import avatar from '../../public/assets/avatar.jpeg';

export default function Hero() {
  return (
    <>
      <section>
        <div className="w-1/2 m-auto md:w-1/4 md:mt-6">
          <div className="avatar-border">
            <Image
              alt="avatar"
              placeholder="blur"
              height={750}
              width={750}
              layout="responsive"
              className="avatar"
              src={avatar}
            />
          </div>
        </div>
        <div className="text-4xl font-fira text-light mt-10 md:text-5xl">
          Hey!
          <span aria-label="greet" role="img" className="wave text-3xl">
            👋
          </span>
        </div>
        <h1 className="hero-description text-4xl font-fira text-light mt-8 sm:px-32 md:text-5xl md:px-40">
          I&apos;m a <br />
          <Highlight revealAnimation={false} className="inline-block italic">
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('Fullstack')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('Frontend')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('Backend')
                  .pauseFor(2000)
                  .start();
              }}
            />
          </Highlight>
          <br /> Developer from Portugal
        </h1>
        <Lottie
          className="m-auto mt-20"
          loop
          animationData={scrollDown}
          play
          style={{ width: 50, height: 50 }}
        />
      </section>
      <style jsx global>
        {`
          .avatar {
            border-radius: 50%;
          }

          .avatar-border {
            border-radius: 50%;
            padding: 5px;
            overflow: hidden;

            box-shadow: var(--color-orange) 0px 0px 0px 2px, var(--color-orange) 0px 0px 0px 4px;
          }

          @media (min-width: 480px) and (max-width: 640px) {
            .hero-description {
              padding-left: 5rem;
              padding-right: 5rem;
            }
          }

          .wave {
            animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
            animation-duration: 2.5s; /* Change to speed up or slow down */
            animation-iteration-count: infinite; /* Never stop waving :) */
            transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
            display: inline-block;
          }

          @keyframes wave-animation {
            0% {
              transform: rotate(0deg);
            }
            10% {
              transform: rotate(14deg);
            } /* The following five values can be played with to make the waving more or less extreme */
            20% {
              transform: rotate(-8deg);
            }
            30% {
              transform: rotate(14deg);
            }
            40% {
              transform: rotate(-4deg);
            }
            50% {
              transform: rotate(10deg);
            }
            60% {
              transform: rotate(0deg);
            } /* Reset for the last half to pause */
            100% {
              transform: rotate(0deg);
            }
          }
        `}
      </style>
    </>
  );
}
