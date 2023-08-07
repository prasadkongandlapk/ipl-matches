import './index.css'

const MatchCard = props => {
  const {recentMatchesDetails} = props
  const {
    result,
    matchStatus,
    competingTeam,
    competingTeamLogo,
  } = recentMatchesDetails

  const statusClassName = matchStatus === 'Won' ? 'green' : 'red'
  return (
    <li className="bg-match">
      <img
        className="fdsadsfj"
        src={competingTeamLogo}
        alt={`{competing team  ${competingTeam}`}
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={statusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
