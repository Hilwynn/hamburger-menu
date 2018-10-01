import React from "react"
import ShoutyText from "../../lib/shouty-text"
import Grid from "../../lib/grid"
import Button from "../../lib/button"

import "./style.css"

class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <Grid>
          <div className="logo">
            <img src="/logo.svg" alt="Technigo" />
          </div>
          <ShoutyText className="title" text="A popup tech school. Now in sthlm." />
          <Button className="button" text="Keep me updated" />
        </Grid>
      </div>
    )
  }
}

export default Hero
