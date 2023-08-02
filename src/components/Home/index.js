import './index.css'
import TeamCard from '../TeamCard'

const Home = () => (
  <div className="bg">
    <div className="logo-h1">
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
        alt="ipl logo"
      />
      <h1 className="h1-">IPL Dashboard</h1>
    </div>
    <TeamCard />
  </div>
)
export default Home
