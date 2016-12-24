var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe("Controls", () => {
  it("should exist", () => {
    expect(Controls).toExist();
  });

  describe("render", () => {
    it("started timer shows 'paused' when timer started", () => {
      var control = fetchControls('started');
      var $el = $(ReactDOM.findDOMNode(control));
      var $pauseButton = $el.find('button:contains(Pause)');
      expect($pauseButton.length).toBe(1);
    })

    it("started timer shows 'start' when timer paused", () => {
      var control = fetchControls('paused');
      var $el = $(ReactDOM.findDOMNode(control));
      var $pauseButton = $el.find('button:contains(Start)');
      expect($pauseButton.length).toBe(1);
    })
  })
});

function fetchControls(state) {
  var controls = TestUtils.renderIntoDocument(<Controls countDownStatus={state}/>);
  return controls;
}
