import { faBlog, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Header() {
  const toggleBurger = () => {
    let burgerIcon = document.getElementById("burger");
    let dropMenu = document.getElementById("navbarBasicExample");
    burgerIcon.classList.toggle("is-active");
    dropMenu.classList.toggle("is-active");
  };
  return (
    <nav
      className="navbar has-background-warning"
      role="navigationn"
      aria-label="main navigation"
      style={{ boxShadow: "10px 10px 5px #23252f" }}
    >
      <div className="navbar-brand">
        <div className="navbar-item">
          <Link href="/">
            <a className="title has-text-white is-size-3" id="logo">
              B08waffles
            </a>
          </Link>
        </div>

        <a
          role="button"
          className="navbar-burger has-background-warning has-text-light"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          id="burger"
          onClick={toggleBurger}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className="navbar-menu has-background-grey-darker"
      >
        <div className="navbar-start" id="navMenu">
          <Link href="/">
            <a className="navbar-item has-text-light is-size-4">
              {" "}
              <FontAwesomeIcon icon={faHome} />
              Home
            </a>
          </Link>
          <Link href="/blog">
            <a className="navbar-item has-text-light is-size-4">
              <FontAwesomeIcon icon={faBlog} /> Blog
            </a>
          </Link>{" "}
          <Link href="/contact">
            <a className="navbar-item has-text-light is-size-4">
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </a>
          </Link>
        </div>

        <div className="navbar-end"></div>
      </div>
    </nav>
  );
}
