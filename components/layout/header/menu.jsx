import { useState } from "react";
//https://codepen.io/ahmedhrayyan/pen/EremLG
function Menu() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className={`menu ${isOpen ? "active" : ""}`}>
        <button onClick={() => setOpen((s) => !s)} className="nav-tgl">
          <span aria-hidden></span>
        </button>
        <div className="nav">
          <ul className="text-light font-carrois font-bold text-7xl">
            <li className="mb-12">
              <a>About Me</a>
            </li>
            <li className="mb-12">
              <a>Experience</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .nav-tgl {
            display: inline-block;
            cursor: pointer;
            position: fixed;
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
            content: "";
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
            content: "";
            width: 100vw;
            height: 100vh;
            background: var(--nav-background);
            transition: all 500ms ease-in-out;

            // that's all the pen about
            clip-path: circle(30px at calc(100% - 30px) 30px);
            // for AT
            visibility: hidden;
          }

          .nav ul {
            display: none;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .nav ul li {
            text-transform: uppercase;
            color: var(--nav-menu-item-color);
          }

          .menu.active .nav ul {
            display: block;
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

export { Menu };
