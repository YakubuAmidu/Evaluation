import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
 constructor(props) {
   super(props);
   this.state = {
     deadline: 'December 25, 2020',
     newDeadline: ' '
   }
 }

 changeDeadline() {
   this.setState({ deadline: this.state.newDeadline })
 }

  render() {
    return (
    <div className="App">
   <div className="App-title">Countdown to {this.state.deadline}</div>

   <Clock deadline={this.state.deadline} />

   <Form>
   <FormControl
   placeholder="New date"
   onChange={event => this.setState({ newDeadline: event.target.value })}
   />

   <Button
   className="deadline-input"
   onClick={() => this.changeDeadline()}>
   Submit
   </Button>
   </Form>

    </div>
  )
  }
}

export default App;
