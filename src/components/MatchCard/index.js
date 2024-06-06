// Write your code here
import './index.css'

const MatchCard = prop => {
  const {item} = prop

  let colorname = ''

  const {competingTeam, competingTeamLogo, result, matchStatus} = item

  if (matchStatus === 'Won') {
    colorname = 'green'
  } else {
    colorname = 'red'
  }
  return (
    <li className="list-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-img"
      />
      <p className="match-hed">{competingTeam}</p>
      <p className="match-para">{result}</p>
      <p className={`match-status ${colorname}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
