import './index.css'
import {Component} from 'react'

class TeamMatches extends Component {
  state = {recentMatches: [], banner: ''}

  componentDidCatch() {
    this.getMatchResult()
  }

  getMatchResult = async () => {
    const {id} = this.props
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = data.latest_match_details

    const matchesResults = data.recent_matches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      // use value of the key 'competing_team' for alt as `competing team ${competing_team}`
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))
    this.setState({banner: teamBannerUrl, recentMatches: matchesResults})
  }

  render() {
    const {recentMatches, banner} = this.state

    return (
      <div className="team-matches-bg">
        <img src={banner} src="a" />
        <p>{recentMatches.venue}</p>
      </div>
    )
  }
}

export default TeamMatches
