import React, { Componenet } from 'react';
import './App.css';

class Clock extends Componenet {
  constructor(props) {
    super(props);
    this.state = {
      days: 0;,
      hours: 0,
      minuites: 0,
      seconds: 0
    }
  }

  render() {
    return (
     <div>
     <div className="clock-days">{this.state.days} days</div>
     <div className="clock-hours">{this.state.hours} hours</div>
     <div className="clock-minuites">{this.state.minuites} minuites</div>
     <div className="clock-seconds">{this.state.seconds} seconds</div>
     </div>
   );
  }
}

export default Clock;
