// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {isRunning: false, startTime: 0}
  }

  onStoppingTimer = () => {
    clearInterval(this.intervalId)
    this.setState({
      isRunning: false,
    })
  }

  onResetTimer = () => {
    this.setState({
      startTime: 0,
      isRunning: false,
    })
    clearInterval(this.intervalId)
  }

  onStartingTimer = () => {
    this.intervalId = setInterval(this.tick, 1000)
    this.setState({
      isRunning: true,
    })
  }

  tick = () => {
    this.setState(prevState => ({
      startTime: prevState.startTime + 1,
    }))
  }

  render() {
    const {startTime} = this.state
    const timeInMinutes = Math.floor(startTime / 60)
    const timeInSeconds = startTime - timeInMinutes * 60
    const minutesDisplay =
      timeInMinutes > 9 ? timeInMinutes : `0${timeInMinutes}`
    const secondsDisplay =
      timeInSeconds > 9 ? timeInSeconds : `0${timeInSeconds}`

    return (
      <div className="container">
        <h1 className="heading-style">Stopwatch</h1>
        <div className="timer-container">
          <div className="title-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="time-img"
            />
            <p className="timer-style">Timer</p>
          </div>
          <h1 className="timer-display">
            {minutesDisplay}:{secondsDisplay}
          </h1>
          <div className="btn-container">
            <button
              className="start-btn"
              type="button"
              onClick={this.onStartingTimer}
            >
              Start
            </button>
            <button
              className="stop-btn"
              type="button"
              onClick={this.onStoppingTimer}
            >
              Stop
            </button>
            <button
              className="reset-btn"
              type="button"
              onClick={this.onResetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
