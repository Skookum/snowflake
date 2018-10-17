// @flow

import React from 'react'
import { teams } from '../constants'
import type { MilestoneMap } from '../constants'

type Props = {
  currentTeam: String,
  handleTeamChangeFn: (string) => void
}

class TeamSelector extends React.Component {
  render() {
    return <select value={this.props.currentTeam} onChange={e => this.props.handleTeamChangeFn(e.target.value)}>
      <style jsx>{`
        select {
          font-size: 20px;
          line-height: 20px;
          margin-bottom: 20px;
          min-width: 300px;
        }
      `}</style>
      {teams.map(team => (
        <option key={team}>
          {team}
        </option>
      ))}
    </select>
  }
}

export default TeamSelector
