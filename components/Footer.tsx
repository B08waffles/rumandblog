export default function Footer() {
  return (
    <footer className="footer has-background-warning">
      <div className="content has-text-centered has-text-light">
        <p>
          <strong className="has-text-light">©</strong> Copyleft 2022 | The
          source code is licensed
          <a href="https://opensource.org/licenses/gpl-2.0.php"> GPL2</a> |
          <a className="has-text-primary" href="https://draculatheme.com">
            {" "}
            Dracula Theme
          </a>{" "}
          courtesy of
          <a className="has-text-success" href="https://zenorocha.com/">
            {" "}
            Zeno Rocha
          </a>
        </p>
      </div>
    </footer>
  );
}
