// @flow

import React, {
    Component
} from 'react'
import {
    eligibleTitles
} from '../constants'
import type {
    MilestoneMap
} from '../constants'
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'


class Dropdown extends Component {
    constructor() {
        super()
        this.state = {
            headerTitle: 'Select Team',
            showMenu: false,
            listOpen: false,
        }
    }

    handleClickOutside() {
        this.setState({
            listOpen: false
        })
    }

    toggleList() {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }

    dropdownList(listOpen) {
      const { list } = this.props
        console.log(list, '');
      return  listOpen ? (
        <ul style={{ backgroundColor: "#eee", zIndex: "19234912843918239048109234", position: "absolute", width: "100px", paddingLeft: "25px", paddingRight: "20px",
        paddingBottom: "10px", paddingTop: "8px" }} className = "dd-list" > {
          (list || []).map((item) => ( 
            <li className = "dd-list-item"
              key={item.id}
            > 
              {item.title} 
            </li>
          ))
        } </ul>
      ) : null
    }

    render() {
        const { list } = this.props
        const { listOpen, headerTitle } = this.state

        return ( 
          <div className="dd-wrapper">
            <div className="dd-header" onClick={() => this.toggleList()}>
            <div style={{ backgroundColor: "" }} className="dd-header-title">
            <div style={{ backgroundColor: "red" }} className="dd-list"></div>
              {headerTitle}
              { listOpen ? <FontAwesomeIcon name = "angle-up" size = "2x" />  :
                <FontAwesomeIcon name = "angle-down" size = "2x" />
              }
            </div> 
            {this.dropdownList(listOpen)}
            </div>
          </div>
    )
  }
}


export default Dropdown