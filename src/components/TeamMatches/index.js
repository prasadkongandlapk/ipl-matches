import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamMatchesData: {}, isLoading: true}

  componentDidMount() {
    this.getMatchResult()
  }

  getFormatedData = dat => ({
    umpires: dat.umpires,
    result: dat.result,
    manOfTheMatch: dat.man_of_the_match,
    id: dat.id,
    date: dat.date,
    venue: dat.venue,
    competingTeam: dat.competing_team,
    competingTeamLogo: dat.competing_team_logo,
    firstInnings: dat.first_innings,
    secondInnings: dat.second_innings,
    matchStatus: dat.match_status,
  })

  getMatchResult = async () => {
    const {match, history} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formatedData = {
      teamBanner: data.team_banner_url,
      latestMatch: this.getFormatedData(data.latest_match_details),
      recentMatches: data.recent_matches.map(each =>
        this.getFormatedData(each),
      ),
    }
    this.setState({
      teamMatchesData: formatedData,
      isLoading: false,
    })
  }

  render() {
    const {teamMatchesData, isLoading} = this.state
    const {teamBanner, recentMatches, latestMatch} = teamMatchesData

    return (
      <div className="team-matches-bg">
        {isLoading ? (
          <div testid="loader" className="load">
            <Loader type="TailSpin" />
          </div>
        ) : (
          <div>
            <img className="team-banner" src={teamBanner} alt="team banner" />
            <h2>Latest Matches</h2>
            <LatestMatch latestMatchDetails={latestMatch} />
            <ul className="fdasjllj">
              {recentMatches.map(each => (
                <MatchCard key={each.id} recentMatchesDetails={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
