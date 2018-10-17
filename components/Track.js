// @flow

import { tracks, milestones, categoryColorScale } from '../constants'
import React from 'react'
import type { MilestoneMap, TrackId, Milestone } from '../constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  trackId: TrackId,
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void
}

type State = {
  hoveredMilestone: Milestone
}

class Track extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hoveredMilestone: undefined }
  }

  setHoveredMilestone(hoveredMilestone: Milestone) {
    this.setState({ hoveredMilestone })
  }

  unsetHoveredMilestone() {
    this.setState({ hoveredMilestone: undefined })
  }

  render() {
    const track = tracks[this.props.trackId]
    const currentMilestoneId = this.props.milestoneByTrack[this.props.trackId]
    const activeMilestoneId = typeof(this.state.hoveredMilestone) !== 'undefined' ? this.state.hoveredMilestone - 1 : currentMilestoneId - 1
    const activeMilestone = track.milestones[activeMilestoneId]
    return (
      <div className="track">
        <style jsx>{`
          div.track {
            margin: 0 0 20px 0;
            padding-bottom: 20px;
            border-bottom: 2px solid #ccc;
          }
          h2 {
            margin: 0 0 10px 0;
          }
          p.track-description {
            margin-top: 0;
            padding-bottom: 20px;
            border-bottom: 2px solid #ccc;
          }
          table {
            border-spacing: 3px;
          }
          td {
            line-height: 50px;
            width: 50px;
            text-align: center;
            background: #eee;
            font-weight: bold;
            font-size: 24px;
            border-radius: 3px;
            cursor: pointer;
          }
          ul {
            line-height: 1.5em;
          }
        `}</style>
        <h2>{track.displayName}</h2>
        <p className="track-description">{track.description}</p>
        <div style={{display: 'flex'}}>
          <table style={{marginRight: 50}}>
            <tbody>
              {milestones.slice().reverse().map((milestone) => {
                const isMet = milestone <= currentMilestoneId
                return (
                  <tr key={milestone}>
                    <td onMouseEnter={() => this.setHoveredMilestone(milestone)}
                        onMouseLeave={() => this.unsetHoveredMilestone()}
                        onClick={() => this.props.handleTrackMilestoneChangeFn(this.props.trackId, milestone)}
                        style={{border: `4px solid ${milestone === currentMilestoneId ? '#000' : isMet ? categoryColorScale(track.category) : '#eee'}`, background: isMet ? categoryColorScale(track.category) : undefined}}
                    >
                      {milestone}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          {activeMilestone ? (
            <div style={{flex: 1}}>
              <h3>{activeMilestone.summary}</h3>
              <h4>Example behaviors:</h4>
              <ul>
                {activeMilestone.signals.map((signal, i) => (
                  <li key={i}>{signal}</li>
                ))}
              </ul>
              <h4>Example tasks:</h4>
              <ul>
                {activeMilestone.examples.map((example, i) => (
                  <li key={i}>{example}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

export default Track
