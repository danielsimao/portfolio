function Highlight({ children, className }) {
  return (
    <>
      <div className={`highlight ${className}`}>{children}</div>
      <style jsx>{`
        .highlight {
          position: relative;
          z-index: 0;
          margin-left: 10px;
        }

        .highlight::after {
          content: "";
          width: calc(100% + 20px);
          height: 100%;
          background: var(--color-dark);
          clip-path: polygon(2% 0%, 100% 0%, 98% 100%, 0 100%);
          top: 0;
          left: -10px;
          position: absolute;
          z-index: -1;
        }
      `}</style>
    </>
  );
}

export { Highlight };
