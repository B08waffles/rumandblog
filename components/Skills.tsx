export default function Skills({
  ref1,
  data1,
  ref2,
  data2,
  ref3,
  data3,
  data4,
  ref4,
}) {
  return (
    <div className="tile is-ancestor ">
      {" "}
      <div className="tile is-parent is-vertical">
        {" "}
        <div
          className="tile is-child box has-background-info glow-on-hover"
          style={{ boxShadow: "10px 10px 5px #23252f" }}
        >
          {" "}
          <p className="subtitle has-text-white has-text-centered has-text-weight-semibold is-size-4-desktop is-size-5-tablet is-size-6-touch">
            <a className="has-text-white" href={ref1}>
              {data1}
            </a>{" "}
          </p>
        </div>
      </div>
      <div className="tile is-parent is-vertical">
        <div
          className="tile is-child box has-background-info glow-on-hover"
          style={{ boxShadow: "10px 10px 5px #23252f" }}
        >
          <p className="subtitle has-text-white has-text-centered has-text-weight-semibold is-size-4-desktop is-size-5-tablet is-size-6-touch">
            <a className="has-text-white" href={ref2}>
              {data2}
            </a>
          </p>
        </div>
      </div>
      <div className="tile is-parent is-vertical">
        <div
          className="tile is-child box has-background-info glow-on-hover"
          style={{ boxShadow: "10px 10px 5px #23252f" }}
        >
          <p className="subtitle has-text-white has-text-centered has-text-weight-semibold is-size-4-desktop is-size-5-tablet is-size-6-touch">
            <a className="has-text-white" href={ref3}>
              {data3}
            </a>
          </p>
        </div>
      </div>
      <div className="tile is-parent is-vertical">
        <div
          className="tile is-child box has-background-info glow-on-hover"
          style={{ boxShadow: "10px 10px 5px #23252f" }}
        >
          <p className="subtitle has-text-white has-text-centered has-text-weight-semibold is-size-4-desktop is-size-5-tablet is-size-6-touch">
            <a className="has-text-white" href={ref4}>
              {data4}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
