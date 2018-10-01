import React from "react"
import Grid from "../../lib/grid"
import ShoutyText from "../../lib/shouty-text"
import Button from "../../lib/button"

import "./style.css"

class CourseOverview extends React.Component {
  render() {
    return (
      <div className="course-overview">
        <Grid>
          <ShoutyText className="title" text="Upcoming boot camp" />

          <p>
            Start learning how to build websites and digital products to reach
            and affect people by the many. Enable digital creativity with tools
            like programming and technology. Change direction and start work
            with web development.
          </p>

          <Button className="button" text="Tell me more" />
        </Grid>
      </div>
    )
  }
}

export default CourseOverview
