

export default function Skills({ref1, data1, ref2, data2, ref3,  data3}) {
return (<div className="tile is-ancestor">
            <div className="tile is-parent is-vertical">
            <div className="tile is-child box has-background-info">
              <p className="subtitle has-text-white has-text-centered has-text-weight-semibold">
                <a href={ref1}>{data1}</a>
              </p>
            </div>
          </div><div className="tile is-parent is-vertical">
            <div className="tile is-child box has-background-info">
              <p className="subtitle has-text-white has-text-centered has-text-weight-semibold">
                <a href={ref2}>{data2}</a>
              </p>
            </div>
          </div><div className="tile is-parent is-vertical">
            <div className="tile is-child box has-background-info">
              <p className="subtitle has-text-white has-text-centered has-text-weight-semibold">
                <a href={ref3}>{data3}</a>
              </p>
            </div>
          </div>
        </div> 
)
}
