import React from "react"
import Grid from "../../lib/grid"

import "./style.css"

class Header extends React.Component {

  render() {
    const toggleChange = () => {
      document.getElementById("hamburger-container").classList.toggle("change")
    }

    return (
      <header>
        <Grid className="header-grid">
          <label htmlFor="hamburger-trigger" className="hamburger-label">
            <div id="hamburger-container" className="hamburger-container" onClick={toggleChange} onKeyPress={toggleChange} role="button" tabIndex={0}>
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
