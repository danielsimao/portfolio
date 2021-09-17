import Footer from './footer';
import Header from './header';

export default function Layout({ children }) {
  return (
    <>
      <div className="page-wrap">
        <Header className="page-header" />
        <main className="page-main">{children}</main>
        <Footer className="page-footer" />
      </div>
      <style jsx global>
        {`
          .page-wrap {
            height: 100%;
            display: grid;
            grid-template-rows: min-content 1fr min-content;
            background: rgb(7, 97, 125);
            background: linear-gradient(
              0deg,
              rgba(7, 97, 125, 1) 0%,
              rgba(28, 74, 91, 1) 50%,
              rgba(46, 56, 63, 1) 100%
            );
            overflow: hidden;
          }

          .page-wrap > * {
            padding: 1rem;
            text-align: center;
          }

          @media (max-width: 640px) {
            .page-wrap {
              grid-template-columns: 100%;
            }
            .page-wrap > * {
              grid-column: 1 / -1 !important;
              grid-row: auto !important;
            }
          }

          .page-header {
            grid-column: 1 / -1;
          }

          .page-main {
            grid-column: 1 / -1;
            display: grid;
            grid-template-columns:
              1fr
              min(85ch, 100%)
              1fr;
          }

          .page-main > * {
            grid-column: 2;
          }

          .full-bleed {
            width: 100%;
            grid-column: 1 / 4;
          }

          .page-footer {
            grid-column: 1 / -1;
          }
        `}
      </style>
    </>
  );
}
