import Lottie from "react-lottie-player";
import scrollDown from "../public/assets/scroll-down.json";

function Hero() {
  return (
    <>
      <section>
        {/* <div className="wave text-3xl">👋</div> */}
        <div className="hero-title font-fira text-light my-16">
          I'm a Fullstack Developer based in Portugal
        </div>
        <Lottie
          className="m-auto"
          loop
          animationData={scrollDown}
          play
          style={{ width: 50, height: 50 }}
        />
      </section>
      <style jsx>{`
        .hero-title {
          font-size: 10vw;
          font-style: oblique;
          line-height: 1.1;
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
      `}</style>
    </>
  );
}

export { Hero };
