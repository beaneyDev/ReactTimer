var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountDownForm = require('CountDownForm');

function testFormWithValue(value) {
  var spy = expect.createSpy();
  var countDownForm = TestUtils.renderIntoDocument(<CountDownForm onSetCountDown={spy}/>);
  var $el = $(ReactDOM.findDOMNode(countDownForm));
  countDownForm.refs.seconds.value = value;
  TestUtils.Simulate.submit($el.find('form')[0]);
  return spy;
}

describe('CountDownForm', () => {
  it('should exist', () => {
    expect(CountDownForm).toExist();
  });

  it('should call onSetCountDown if valid seconds entered', () => {
    var spy = testFormWithValue('109');
    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should not call onSetCountDown if invalid seconds entered', () => {
    var spy = testFormWithValue('109A');
    expect(spy).toNotHaveBeenCalled(109);
  });
})
