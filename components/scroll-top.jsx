import { useEffect, useMemo, useState } from "react";
import Lottie from "react-lottie-player";
import scrollEase from "../public/assets/scrolling-easey.json";

const LOTTIE_STAGES = [
  [0, 150],
  [155, 199],
];

export function ScrollTop() {
  const [stage, setStage] = useState(1);
  const [showScroll, setShowScroll] = useState(false);
  const [isComplete, setComplete] = useState(false);
  const elDistanceToTop = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.pageYOffset +
        document?.querySelector("#experience")?.getBoundingClientRect().top,
    []
  );

  useEffect(() => {
    function checkScrollTop() {
      if (!showScroll && window.pageYOffset > elDistanceToTop) {
        setShowScroll(true);
        setStage(1);
      } else if (showScroll && window.pageYOffset <= elDistanceToTop) {
        setShowScroll(false);
        setComplete(false);
      }
    }

    window.addEventListener("scroll", checkScrollTop);
  });

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleClick() {
    setStage(2);
  }

  function handleComplete() {
    if (stage === 2) {
      setComplete(true);
      scrollTop();
    }
  }

  const lottieSegment = LOTTIE_STAGES[stage - 1];
  const display = showScroll && !isComplete;

  return (
    <>
      <div
        className={`fixed z-20 bottom-1 right-1 rounded-full h-14 w-14 p-1 bg-dark shadow-md transition ${
          display ? "opacity-100" : "opacity-0"
        }`}
      >
        {display && (
          <Lottie
            segments={lottieSegment}
            animationData={scrollEase}
            loop={false}
            play
            onClick={handleClick}
            onComplete={handleComplete}
          />
        )}
      </div>
      <style jsx>{`
        .scroll-top {
          transition: all 0.3s ease;
        }
      `}</style>
    </>
  );
}
