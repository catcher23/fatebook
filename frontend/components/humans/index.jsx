var React = require('react');
var HumanStore = require('../../stores/human.js');
var ApiUtil = require('../../util/api_util.js');
module.exports = React.createClass({
  getInitialState: function () {
    return { humans: HumanStore.all() };
  },

  _onChange: function () {
    this.setState({ humans: HumanStore.all() });

  },

  componentDidMount: function () {
    this.humanListener =HumanStore.addListener(this._onChange);
    ApiUtil.fetchAllHumans();

  },

  compomentWillUnmount: function () {
    this.humanListener.remove();
  },

  render: function () {
    return(
      <ul>

      </ul>
    );
  }
});
