import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

class Home extends Component {
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
      <div className="bg">
        <div className="logo-h1">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            alt="ipl logo"
          />
          <h1 className="h1-">IPL DashBoard</h1>
        </div>
        {isLoading === true ? (
          <div testid="loader" className="loader">
            <Loader type="TailSpin" />
          </div>
        ) : (
          <ul className="order-lists">
            {matches.map(each => (
              <TeamCard teamDetails={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Home
