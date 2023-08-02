import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamCard extends Component {
  state = {matches: [], isLoading: true}

  componentDidMount() {
    this.getMatches()
  }

  getMatches = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formatedData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({matches: formatedData, isLoading: false})
  }

  render() {
    const {matches, isLoading} = this.state
    return (
      <ul className="order-lists">
        {isLoading === true ? (
          <div className="loader">
            <Loader type="TailSpin" />
          </div>
        ) : (
          matches.map(each => (
            <Link to={`/team-matches/${each.id}`}>
              <li>
                <img className="img-team" src={each.teamImageUrl} alt="a" />
                <h1 className="h1">{each.name}</h1>
              </li>
            </Link>
          ))
        )}
      </ul>
    )
  }
}

export default TeamCard
