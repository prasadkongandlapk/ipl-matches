import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  if (!latestMatchDetails) {
    return null
  }
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-bg">
      <div>
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p> {venue}</p>
        <p> {result}</p>
      </div>
      <img
        className="ajkdjf"
        src={competingTeamLogo}
        alt={`{latest match ${competingTeam}`}
      />
      <div className="dsajfkl">
        <h4>First Innings</h4>
        <p>{firstInnings}</p>
        <h4>Second Innings</h4>
        <p>{secondInnings}</p>
        <h4>Man Of The Match</h4>
        <p>{manOfTheMatch}</p>
        <h4>Umpires</h4>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
