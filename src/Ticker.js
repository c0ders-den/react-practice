import React from "react"

class Ticker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date().toLocaleString("en-US", {timeZone: this.props.timeZone})
    }
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(), 
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  tick() {
    this.setState({
      time: new Date().toLocaleString("en-US", {timeZone: this.props.timeZone})
    })
  }

  render() {
    return (
      <>
        <h4 className="display-4">{this.props.timeZone}</h4>
        <p>
          {}Current Date Time  {this.state.time}
        </p>
      </>  
    )
  }
}

Ticker.defaultProps = {
  timeZone: "UTC"
}

export default Ticker