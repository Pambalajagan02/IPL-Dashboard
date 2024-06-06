// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamcards: [], isloading: true}

  componentDidMount() {
    this.gettTeamCards()
  }

  gettTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const upadteddata = teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({teamcards: upadteddata, isloading: false})
  }

  render() {
    const {teamcards, isloading} = this.state
    return (
      <div className="home-container">
        <div className="headiomng-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipllogo"
          />
          <h1 className="heading-ipl">IPL Dashboard</h1>
        </div>
        <ul className="card-container">
          {isloading ? (
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            teamcards.map(each => <TeamCard item={each} key={each.id} />)
          )}
        </ul>
      </div>
    )
  }
}
export default Home
