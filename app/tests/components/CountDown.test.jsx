var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountDown = require('CountDown');

describe("CountDown", () => {
  it("should exist", () => {
    expect(CountDown).toExist();
  });
});

function fetchCountDown(time) {
  var countDown = TestUtils.renderIntoDocument(<CountDown/>);
  countDown.handleSetCountDown(time);
  return countDown;
}

describe("handleSetCountDown", () => {
  it("should set state to started and count down", () => {
    var countDown = fetchCountDown(10);
    expect(countDown.state.count).toBe(10);
    expect(countDown.state.countdownStatus).toBe('started');
  });

  it("should decrement count by 1 per second", (done) => {
    var countDown = fetchCountDown(10);
    setTimeout(() => {
      expect(countDown.state.count).toBe(9)
      done();
    }, 1001);
  });

  it("should never set count less than zero", (done) => {
    var countDown = fetchCountDown(2);
    setTimeout(() => {
      expect(countDown.state.count).toBe(0);
      done();
    }, 3000);
  });
});
