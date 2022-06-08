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
    >
      <div className="navbar-brand">
        <div className="navbar-item">
          <Link href="/">
            <a className="title has-text-white is-size-4" id="logo">
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
            <a className="navbar-item has-text-light">Home</a>
          </Link>
          <Link href="/blog">
            <a className="navbar-item has-text-light">Blog</a>
          </Link>
          <Link href="/13">
            <a className="navbar-item has-text-light">Portfolio</a>
          </Link>
          <div className="navbar-item has-dropdown is-hoverable has-background-grey-darker">
            <Link href="/3">
              <a className="navbar-link has-text-light">More</a>
            </Link>
            <div className="navbar-dropdown has-background-grey-darker">
              <Link href="/4">
                <a className="navbar-item has-text-light">Projects</a>
              </Link>
              <a className="navbar-item has-text-light">About</a>
              <Link href="/5">
                <a className="navbar-item has-text-light">Contact</a>
              </Link>
              <hr className="navbar-divider" />
              <Link href="/6">
                <a className="navbar-item has-text-light">Report an issue</a>
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link href="/7">
                <a className="button has-background-success has-text-dark">
                  Hire me
                </a>
              </Link>
              <Link href="/8">
                <a className="button has-background-primary has-text-light">
                  Log in
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
