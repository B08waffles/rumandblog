import { ChangeEvent, useState } from "react";
export default function WorkTogetherForm() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [botCheck, setBotCheck] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const onChangeTextBody = (e) => {
    const text = e.target.value;
    setText(text);
  };
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangeSubject = (e) => {
    const subject = e.target.value;

    setSubject(subject);
  };
  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };
  const onChangeBot = (e) => {
    const bot = e.target.value;
    if (botCheck === 0) {
      let bot = 1;
      setBotCheck(bot);
      return;
    } else {
      let bot = 0;
      setBotCheck(bot);
      return;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (botCheck === 0) {
      document.getElementById("botChecker").innerHTML += " No bots allowed!";
      return;
    } else {
      setIsLoading(true);
      let data = JSON.stringify({
        email: email,
        name: name,
        subject: subject,
        text: email + " says " + text,
        html: `<div>${email}${subject}${text}</div>`,
      });
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: data,
      }).then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
          setSubmitted(true);
          setName("");
          setEmail("");
          setText("");
          setSubject("");
          setIsLoading(false);
        } else if (res.status === 404) {
          console.log("Something went wrong");
          setIsLoading(false);
          alert("Sorry, something went wrong");
          return;
        } else {
          alert("There is something fishy in the air...");
          return;
        }
      });
    }
  };
  return (
    <>
      {isLoading ? (
        <>
          <div className="column has-text-centered "></div>

          <progress class="progress is-large is-info" max="100">
            60%
          </progress>
          <p className="has-text-info is-size-4-desktop is-size-5-tablet is-size-6-touch">
            Please wait while your message is being delivered. This usually
            takes anywhere between 5 to 10 seconds on average.
          </p>
        </>
      ) : (
        <form onSubmit={sendEmail}>
          <div className="field has-text-white">
            <label className="label has-text-white is-info is-size-4-desktop is-size-5-touch">
              Name
            </label>
            <div className="control has-background-grey-darker has-text-white">
              <input
                className="input has-background-dark has-text-white"
                type="text"
                maxLength={255}
                minLength={2}
                required
                placeholder="What's your name?"
                value={name}
                onChange={onChangeName}
              />
            </div>
          </div>

          <div className="field">
            <label className="label has-text-white is-size-4-desktop is-size-5-touch">
              Email
            </label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input has-background-dark has-text-white"
                type="email"
                placeholder="Email input"
                value={email}
                onChange={onChangeEmail}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label has-text-white is-size-4-desktop is-size-5-touch">
              Subject
            </label>
            <div className="control">
              <div className="select has-background-dark">
                <select
                  className="has-background-dark has-text-white is-size-5-desktop is-size-6-touch"
                  value={subject}
                  onChange={onChangeSubject}
                >
                  <option className="has-background-dark ">
                    Select dropdown
                  </option>
                  <option className="has-background-dark">
                    Request for quote
                  </option>
                  <option className="has-background-dark">General</option>
                  <option className="has-background-dark">
                    Personal message
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label has-text-white is-size-4-desktop is-size-5-touch">
              Message
            </label>
            <div className="control">
              <textarea
                className="textarea has-background-dark has-text-white"
                value={text}
                onChange={onChangeTextBody}
                placeholder="Textarea"
              ></textarea>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label
                className="checkbox has-text-white is-size-5-desktop is-size-6-touch"
                id="botChecker"
              >
                <input
                  type="checkbox"
                  value={botCheck}
                  onChange={onChangeBot}
                />{" "}
                I am not a bot{" "}
              </label>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button
                className="button is-success is-size-5-desktop is-size-6-touch"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
}
