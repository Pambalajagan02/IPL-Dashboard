// Write your code here
// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestmatch} = props

  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    venue,
    umpires,
    result,
    manOfTheMatch,
    secondInnings,
  } = latestmatch

  return (
    <div className="latest-match-container">
      <div className="col-1">
        <div>
          <p className="competing-h1">{competingTeam}</p>
          <p className="data-para1">{date}</p>
          <p className="data-para">{venue}</p>
          <p className="data-para">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="compiting-img"
        />
      </div>
      <hr className="separate" />
      <div className="col-2">
        <p className="data-para">First Innings</p>
        <p className="data-para">{firstInnings}</p>
        <p className="data-para">Second Innings</p>
        <p className="data-para">{secondInnings}</p>
        <p className="data-para">Man Of The Match</p>
        <p className="data-para">{manOfTheMatch}</p>
        <p className="data-para">Umpires</p>
        <p className="data-para">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
