import { useEffect, useState } from 'react';
import useMediaQuery from '../../../utils/media-query';

// https://codepen.io/ahmedhrayyan/pen/EremLG
export default function Menu({ className }) {
  const [isOpen, setOpen] = useState(false);
  const isTabletOrDesktop = useMediaQuery(768);

  function handleToggle() {
    window.scrollTo({ top: 0 });
    setOpen((s) => !s);
  }

  function handleClickAnchor(e) {
    setOpen((s) => !s);
    setTimeout(() => document.getElementById(e.target.title).scrollIntoView(), 500);
  }

  useEffect(() => {
    if (isOpen && !isTabletOrDesktop) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, isTabletOrDesktop]);

  return (
    <>
      <div className={`${className} menu ${isOpen ? 'active' : ''}`}>
        <button type="button" onClick={handleToggle} aria-label="menu" className="nav-tgl">
          <span aria-hidden />
        </button>
        <div className="nav">
          <ul className="text-light font-carrois font-bold">
            <li>
              <button type="button" onClick={handleClickAnchor} title="about-me">
                About Me
              </button>
            </li>
            <li>
              <button type="button" onClick={handleClickAnchor} title="experience">
                Experience
              </button>
            </li>
            <li>
              <button type="button" onClick={handleClickAnchor} title="skills">
                Skills
              </button>
            </li>
            <li>
              <button type="button" href="mailto:rui.daniel.simao@gmail.com">
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .nav-tgl {
            display: inline-block;
            cursor: pointer;
            position: absolute;
            z-index: 100;
            width: 55px;
            height: 55px;
            border: none;
            padding: 0;
            line-height: 0.6;
            text-align: center;
            top: 0;
            right: 0;
          }

          // making the dividers
          .nav-tgl > span {
            // the second divider
            display: inline-block;
            position: relative;
            height: 2px;
            width: 34px;
            border-radius: 1px;
            background: var(--h-nav-btn-color);
            vertical-align: middle;

            // the first & the third dividers
          }
          .nav-tgl > span:before,
          .nav-tgl > span:after {
            display: inline-block;
            position: absolute;
            content: '';
            height: 2px;
            border-radius: 1px;
            background: var(--h-nav-btn-color);
            // for the hover state
            transition: all 200ms;
          }
          .nav-tgl > span:before {
            top: -11px;
            left: 3px;
            width: 28px;
          }
          .nav-tgl > span:after {
            top: 11px;
            left: 6px;
            width: 22px;
          }

          // ofcorse we should find a replacement for the focus state but it's not our topic
          .nav-tgl:focus {
            outline: none;
          }

          .nav-tgl:hover > span:after,
          .nav-tgl:hover > span:before {
            width: 34px;
            left: 0;
          }

          // for the nav background (styling the nav itself is not our topic)
          .nav {
            height: 0;
          }
          .nav:before {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            content: '';
            width: 100vw;
            height: 100vh;
            background: rgb(46, 56, 63);
            background: radial-gradient(
              circle,
              rgba(46, 56, 63, 1) 0%,
              rgba(25, 78, 96, 1) 61%,
              rgba(7, 97, 125, 1) 100%
            );
            transition: all 500ms ease-in-out;

            // that's all the pen about
            clip-path: circle(30px at calc(100% - 30px) 30px);
            // for AT
            visibility: hidden;
            z-index: 99;
          }

          .nav ul {
            display: none;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 99;
          }

          .nav ul li button {
            text-transform: uppercase;
            color: var(--nav-menu-item-color);
            font-size: 13vw;
            outline: none;
          }

          @media (min-width: 530px) {
            .nav ul li button {
              font-size: 10vw;
            }
          }

          @keyframes visibility-animation {
            to {
              visibility: visible;
            }
          }

          .menu.active .nav ul {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100vw;
            height: 100vh;
            gap: 3rem;
            animation: visibility-animation 0s 0.2s forwards;
            visibility: hidden;
          }

          // when it gits activated

          .menu.active .nav:before {
            visibility: visible;

            // that's all the pen about
            clip-path: circle(100%);
          }

          .menu.active .nav-tgl > span {
            height: 0;
          }

          .menu.active .nav-tgl > span:after,
          .menu.active .nav-tgl > span:before {
            top: 0px;
            left: 0;
            width: 34px;
          }

          .menu.active .nav-tgl > span:after,
          .menu.active .nav-tgl > span:before {
            background: var(--nav-btn-color);
          }

          .menu.active .nav-tgl > span:after {
            transform: rotate(-45deg);
          }

          .menu.active .nav-tgl > span:before {
            transform: rotate(45deg);
          }
        `}
      </style>
    </>
  );
}
