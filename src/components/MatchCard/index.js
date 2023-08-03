import './index.css'

const MatchCard = props => {
  const {recentMatchesDetails} = props

  const {
    result,
    competingTeam,
    competingTeamLogo,
    matchStatus,
  } = recentMatchesDetails

  if (!recentMatchesDetails) {
    return null
  }

  return (
    <div className="match-card-bg">
      <img src={competingTeamLogo} alt="adsf" />
      <h4>{competingTeam}</h4>
      <p>{matchStatus}</p>
      <p>{result}</p>
    </div>
  )
}

export default MatchCard
