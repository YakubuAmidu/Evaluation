import React, { Component } from 'react';
import './App';

class App extends Component {
  render() {
    return (
    <div>
   <div>Countdown to december 25, 2020</div>

   <div>
   <div>14 days</div>
   <div>30 hours</div>
   <div>15 minuites</div>
   <div>20 seconds</div>
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
