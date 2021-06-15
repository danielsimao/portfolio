import BasicReveal from '../utils/reveal';

export default function Highlight({ children, className, revealAnimation = true }) {
  return (
    <>
      <BasicReveal display={revealAnimation} trigger={<div className="text-left" />}>
        <div className={`highlight inline-block font-fira text-light ${className}`}>{children}</div>
      </BasicReveal>
      <style jsx>
        {`
          .highlight {
            position: relative;
            z-index: 0;
            margin-left: 10px;
          }

          .highlight::after {
            content: '';
            width: calc(100% + 20px);
            height: 100%;
            background: var(--color-dark);
            clip-path: polygon(2% 0%, 100% 0%, 98% 100%, 0 100%);
            top: 0;
            left: -10px;
            position: absolute;
            z-index: -1;
          }
        `}
      </style>
    </>
  );
}
