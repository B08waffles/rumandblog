import { ChangeEvent, useState } from "react";
export default function WorkTogetherForm() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [botCheck, setBotCheck] = useState(0);
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
      document.getElementById("botChecker").innerHTML += "No bots allowed!";
      return;
    } else {
      let data = JSON.stringify({
        email: email,
        name: name,
        subject: subject,
        text: text,
      });
      return console.log(data);
    }
  };
  return (
    <>
      <form onSubmit={sendEmail}>
        <div className="field has-text-white">
          <label className="label has-text-white is-info">Name</label>
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
          <label className="label has-text-white">Email</label>
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
          <label className="label has-text-white">Subject</label>
          <div className="control">
            <div className="select has-background-dark">
              <select
                className="has-background-dark has-text-white"
                value={subject}
                onChange={onChangeSubject}
              >
                <option className="has-background-dark">Select dropdown</option>
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
          <label className="label has-text-white">Message</label>
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
            <label className="checkbox has-text-white" id="botChecker">
              <input type="checkbox" value={botCheck} onChange={onChangeBot} />{" "}
              I am not a bot{" "}
            </label>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-success" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
