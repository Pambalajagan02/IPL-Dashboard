// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teammatch: {}, isloading: true}

  componentDidMount() {
    this.getTeamMatches()
  }

  formatedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamMatches = async () => {
    const {match} = this.props

    const {params} = match

    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const dataobj = await response.json()

    console.log(dataobj)

    const updatedobj = {
      latestMatchDetails: this.formatedData(dataobj.latest_match_details),
      recentMatches: dataobj.recent_matches.map(each =>
        this.formatedData(each),
      ),
      teamBannerUrl: dataobj.team_banner_url,
    }
    this.setState({teammatch: updatedobj, isloading: false})
  }

  loaderComponent = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderRecentMatches = () => {
    const {teammatch} = this.state
    const {recentMatches} = teammatch

    return (
      <ul className="ul-container">
        {recentMatches.map(each => (
          <MatchCard item={each} key={each.id} />
        ))}
      </ul>
    )
  }

  getBackgroundcolor = () => {
    const {match} = this.props

    const {params} = match

    const {id} = params

    switch (id) {
      case 'SH':
        return 'srh'
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'RR':
        return 'rr'
      case 'KXP':
        return 'kxp'
      case 'DC':
        return 'dc'
      case 'CSK':
        return 'csk'
      case 'MI':
        return 'mi'
      default:
        return ''
    }
  }

  renderComponent = () => {
    const {teammatch} = this.state

    const {latestMatchDetails, teamBannerUrl} = teammatch
    return (
      <div className={`teammatch-container ${this.getBackgroundcolor()}`}>
        <img src={teamBannerUrl} alt="team banner" className="teamBanner-img" />
        <h1 className="Latest-heading">Latest Matches</h1>
        <div>
          <LatestMatch latestmatch={latestMatchDetails} />
          {this.renderRecentMatches()}
        </div>
      </div>
    )
  }

  render() {
    const {isloading} = this.state

    return isloading ? this.loaderComponent() : this.renderComponent()
  }
}
export default TeamMatches
