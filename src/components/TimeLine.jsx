import './TimeLine.css'

const TimeLine = ({ timeLineData }) => {
  return (
    <div className="portfolio_about-timeline">
        {timeLineData.map((time) => (
            <div className="portfolio_about-timeline_event" key={time.year}>
              <div className="point"></div>
              <h3>{time.year}</h3>
              <div className="portfolio_about-timeline_event_text-box">
                <p>{time.event}</p>
              </div>
            </div>
        ))}
        <div className="triangle"></div>
      </div>
  )
}

export default TimeLine