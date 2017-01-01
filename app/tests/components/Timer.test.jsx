var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

function fetchTimer() {
  var timer = TestUtils.renderIntoDocument(<Timer/>);
  return timer;
}

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  it('should start timer on started status', (done) => {
    var timer = fetchTimer();
    timer.handleStatusChange('started');
    expect(timer.state.count).toBe(0);
    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('started');
      expect(timer.state.count).toBe(1);
      done();
    }, 1001);
  })

  it('should pause timer on pause status', (done) => {
    var timer = fetchTimer();
    timer.setState({count: 10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('paused');

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('paused');
      expect(timer.state.count).toBe(10);
      done()
    }, 1001);
  });

  it('should stop timer on pause status', (done) => {
    var timer = fetchTimer();
    timer.setState({count: 10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('stopped');

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('stopped');
      expect(timer.state.count).toBe(0);
      done()
    }, 1001);
  });
});
