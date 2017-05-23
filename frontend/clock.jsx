import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props)

    this.state = {time : new Date()}

    this.tick = this.tick.bind(this);
  }

  tick(){
    this.setState({ time : new Date() })
  }

  componentDidMount(){
    this.interval = setInterval(this.tick, 1000)
  }

  componentWillUnmount(){
    this.interval.clearInterval();
  }

  render(){
    let seconds = this.state.time.getSeconds();
    let minutes = this.state.time.getMinutes();
    let hours = this.state.time.getHours();
    let date = this.state.time.toDateString()

    seconds = seconds >= 10 ? seconds : '0' + seconds;
    minutes = minutes >= 10 ? minutes : '0' + minutes;
    hours = hours >= 10 ? hours : '0' + hours;

    
    return (
      <div className="clock">
        <h1 className="clock-date">{date}</h1>
        <h2 className="clock-time">{hours} : {minutes} : {seconds}</h2>
      </div>
    )
  }

}

export default Clock;
