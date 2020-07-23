import React, { Component } from 'react';
import './App.css';

class App extends Component {
 constructor(props) {
   super(props);
   this.state = {
     deadline: 'December 25, 2020'
   }
 }

  render() {
    return (
    <div className="App">
   <div className="App-title">Countdown to december 25, 2020</div>

   <div>
   <div className="clock-days">14 days</div>
   <div className="clock-hours">30 hours</div>
   <div className="clock-minuites">15 minuites</div>
   <div className="clock-seconds">20 seconds</div>
   </div>

   <div>
   <input placeholder="New date" />
   <button>Submit</button>
   </div>

    </div>
  )
  }
}

export default App;
