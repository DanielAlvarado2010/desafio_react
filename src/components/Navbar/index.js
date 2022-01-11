import react from "react";
import styles from "./styles.css";
import elon from "../../images/elonmusk.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let devToLogo = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-sm fixed-top">
        <div className="container">
          <a
            className="hamburguer-menu"
            data-bs-toggle="offcanvas"
            href="#offcanvasMenu"
            role="button"
            aria-controls="offcanvasMenu"
          >
            <div className="hamburguer-menu-container">
              <img
                src="../images/menu.svg"
                alt=""
                className="hamburguer-icon"
              />
            </div>
          </a>
          <a className="navbar-brand" href="#">
            <svg
              width="50"
              height="39"
              viewBox="0 0 50 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="logo"
            >
              <rect
                width="50"
                height="40"
                rx="3"
                style={{ fill: "#000000" }}
              ></rect>
              <path
                d="M19.099 23.508c0 1.31-.423 2.388-1.27 3.234-.838.839-1.942 1.258-3.312 1.258h-4.403V12.277h4.492c1.31 0 2.385.423 3.224 1.27.846.838 1.269 1.912 1.269 3.223v6.738zm-2.808 0V16.77c0-.562-.187-.981-.562-1.258-.374-.285-.748-.427-1.122-.427h-1.685v10.107h1.684c.375 0 .75-.138 1.123-.415.375-.285.562-.708.562-1.27zM28.185 28h-5.896c-.562 0-1.03-.187-1.404-.561-.375-.375-.562-.843-.562-1.404V14.243c0-.562.187-1.03.562-1.404.374-.375.842-.562 1.404-.562h5.896v2.808H23.13v3.65h3.088v2.808h-3.088v3.65h5.054V28zm7.12 0c-.936 0-1.684-.655-2.246-1.965l-3.65-13.758h3.089l2.807 10.804 2.808-10.804H41.2l-3.65 13.758C36.99 27.345 36.241 28 35.305 28z"
                style={{ fill: "#ffffff" }}
              ></path>
            </svg>
          </a>

          <div className="form-container">
            <form
              action="
            "
            >
              <input
                className="form-control search-bar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <a href="#">
                <button className="input-button" type="submit">
                  <img src="../images/iconmonstr-search-thin.svg" alt="" />
                </button>
              </a>
            </form>
          </div>

          <div className="left-nav-elements"></div>

          <div className="rigth-nav-elements">
            <a
              onClick={devToLogo("/")}
              href="../CreatePost/index.js"
              className="create-post-button"
            >
              Create Post{" "}
            </a>

            <div className="search-icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="img"
                aria-labelledby="a1ittjicpjpx3gz550xp8skqdb9cjo4t"
                className="crayons-icon"
              >
                <title id="a1ittjicpjpx3gz550xp8skqdb9cjo4t">Search</title>
                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"></path>
              </svg>
            </div>

            <div className="nav-comments-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                role="img"
                aria-labelledby="a41cvmxi3r1lero45hkubzuujy4jlv0j"
                className="crayons-icon"
              >
                <title id="a41cvmxi3r1lero45hkubzuujy4jlv0j">Connect</title>
                <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2l2.929-2.929A9.969 9.969 0 012 12zm4.828 8H12a8 8 0 10-8-8c0 2.152.851 4.165 2.343 5.657l1.414 1.414-.929.929zM8 13h8a4 4 0 11-8 0z"></path>
              </svg>
              <span
                className="
                  position-absolute
                  top-70
                  start-90
                  translate-middle
                  badge
                  rounded-pill
                  bg-danger
                "
              >
                2
              </span>
            </div>
            <div className="nav-notifications-container">
              <span
                className="
                  position-absolute
                  top-70
                  start-90
                  translate-middle
                  badge
                  rounded-pill
                  bg-danger
                "
              >
                8
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                role="img"
                aria-labelledby="a6d4t764l2b3c64midpz699jmmh662u0"
                className="crayons-icon"
              >
                <title id="a6d4t764l2b3c64midpz699jmmh662u0">
                  Notifications
                </title>
                <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
              </svg>
            </div>
            <div className="dropdown profile-pic-container">
              <img
                src={elon}
                alt=""
                className="profile-picture dropdown-toggle"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <div className="drop-user">
                  <p className="drop-link username">ElonM Musk</p>
                  <p className="drop-link">@ElonMusk</p>
                </div>
                <div className="drop-settings">
                  <p className="drop-link">Dashboard</p>
                  <p className="drop-link">Create Post</p>
                  <p className="drop-link">Reading List</p>
                  <p className="drop-link">Settings</p>
                </div>
                <div className="drop-logout">
                  <p className="drop-link">Sign out</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
