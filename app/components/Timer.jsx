var React = require('react');

var Clock = require('Clock');
var Controls = require('Controls');


var Timer = React.createClass({
  //Creates initial state which should be stopped.
  getInitialState: function() {
    return {
      count: 0,
      timerStatus: 'stopped'
    }
  },
  //When the status is updated to e.g. started, it will catch this state change
  //and perform a certain behaviour.
  componentDidUpdate: function(prevProps, prevState) {
    if (prevState.timerStatus !== this.state.timerStatus) {
      switch(this.state.timerStatus) {
        case 'started':
          this.startTimer();
        break
        case 'stopped':
          this.setState({
            count: 0
          })
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
        break
      }
    }
  },
  //When the user navigates away from this page, stop the timer.
  componentWillUnmount: function() {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  //When the status changes from the controls component, set this new state.
  handleStatusChange: function(status) {
    this.setState({
      timerStatus: status
    })
  },
  //Starts the timer and resets the state each time, calling render:
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount
      })
    }, 1000);
  },
  //Responds to initial load and timer pings.
  render: function() {
    var {count, timerStatus} = this.state;
    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
      </div>
    )
  }
});

module.exports = Timer;
