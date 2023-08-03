import './index.css'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {teamMatchesData: {}}

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
    const {match} = this.props
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
    })
  }

  render() {
    const {teamMatchesData} = this.state
    const {teamBanner, recentMatches, latestMatch} = teamMatchesData

    return (
      <div className="team-matches-bg">
        <img className="team-banner" src={teamBanner} alt="df" />
        <LatestMatch latestMatchDetails={latestMatch} />
      </div>
    )
  }
}

export default TeamMatches
