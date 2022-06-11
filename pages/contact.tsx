import WorkTogetherForm from "../components/WorkTogetherForm";

export default function Contact() {
  return (
    <>
      <div className="container is-fluid">
        <br />
        <h1 className="title has-text-centered  has-text-primary is-size-2-desktop is-size-3-touch">
          Contact
        </h1>
        <div className="columns">
          <div className="column">
            <div
              className="tile has-background-warning"
              style={{ boxShadow: "10px 10px 5px #23252f" }}
            >
              <div className="container is-fluid">
                <p className="has-text-white is-size-5-desktop is-size-6-touch">
                  If you would like to get in touch, you can fill out this form,
                  otherwise you can email me directly at
                  <a href="mailto:b08waffles@protonmail.com">
                    {" "}
                    b08waffles@protonmail.com
                  </a>
                  . You can send either plain text or HTML via the "Message" box
                  provided here.
                  <br />
                  <br />
                  I usually check my inbox a few times a day and am usually
                  available between 9am - 5pm throughout the week. For
                  reference, the time where I live at is currently:
                  <br />
                  <br />
                  <div className="container has-text-centered">
                    <iframe
                      style={{ boxShadow: "10px 10px 5px #23252f" }}
                      src="https://free.timeanddate.com/clock/i8d8t71e/n47/tlau/fn10/fs20/fcfff/tc282a36/pc282a36/bacbd93d9/pa2/tt0/tm1/ts1/tb4"
                      frameBorder="0"
                      width="233"
                      height="55"
                    ></iframe>{" "}
                    <br />
                    <br />
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className="column is-three-fifths">
            <WorkTogetherForm />
          </div>
          <div className="column"></div>
        </div>

        <br />
      </div>
    </>
  );
}
