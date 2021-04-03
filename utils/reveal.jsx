import { Reveal, Tween } from "react-gsap";

export function BasicReveal({ trigger, children, display = true }) {
  if (!display) {
    return children;
  }

  return (
    <Reveal trigger={trigger}>
      <Tween from={{ opacity: 0, transform: "translate3d(0, 20px, 0)" }}>
        {children}
      </Tween>
    </Reveal>
  );
}
