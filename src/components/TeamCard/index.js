// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {item} = props
  const {name, id, teamImageUrl} = item
  return (
    <li className="tab-card-container">
      <Link to={`/team-matches/${id}`} className="list-card-con ">
        <img src={teamImageUrl} alt={name} className="team-img" />
        <p className="heading-team">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
