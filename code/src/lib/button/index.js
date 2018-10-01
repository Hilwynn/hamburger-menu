import React from "react"
import ShoutyText from "../../lib/shouty-text"
import "./style.css"

class Button extends React.Component {
  render() {
    return (
      <button className={`shouty-button ${this.props.className}`}>
        <ShoutyText text={this.props.text} />
      </button>
    )
  }
}

export default Button
