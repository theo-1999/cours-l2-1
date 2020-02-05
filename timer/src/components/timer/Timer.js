import React from 'react';
// eslint-disable-next-line
class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter : 0,
      isOn : false,
      start : 0
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.componentWillUnmount = this.componentWillUnmount.bind(this)
    // ...
  }

  componentDidMount() {
    
      
      
      
      this.counter = setInterval(() => this.setState({
      counter :  this.state.start + 1 , 
      isOn : true ,
      start :  this.state.start + 1
      }) ,1000);
      
    
    
    // ...
  }

  componentWillUnmount() {
    this.setState({isOn: false})
    clearInterval(this.counter)
    // ...
  }
  
  render () {
    return (
      <div data-testid="timer">
        {this.state.counter}
      </div>
    );
  }
}

export default Timer;

