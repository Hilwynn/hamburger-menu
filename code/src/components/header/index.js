import React from "react"
import Grid from "../../lib/grid"

import "./style.css"

class Header extends React.Component {
  state = {
    active: true
  }

  handleToggleClassClick = () => {
    const currentState = this.state.active
    this.setState({
      active: !currentState
    })
  }

  render() {
    return (
      <header>
        <Grid className="header-grid">
          <label htmlFor="hamburger-trigger" className="hamburger-label">
            <div className={this.state.active ? "hamburger-container" : "hamburger-container change"} onClick={this.handleToggleClassClick} onKeyPress={this.handleToggleClassClick} role="button" tabIndex="0">
              <div className="hamburger bar1" />
              <div className="hamburger bar2" />
              <div className="hamburger bar3" />
            </div>
          </label>
          <input id="hamburger-trigger" className="hamburger-checkbox" type="checkbox" />
          <div className="navigation">
            <a href="http://technigo.io">Technigo</a>
            <a href="http://technigo.io">Boot Camp</a>
            <a href="http://technigo.io">Stories</a>
            <a href="http://technigo.io">About</a>
          </div>
        </Grid>
      </header>
    )
  }

}

export default Header
