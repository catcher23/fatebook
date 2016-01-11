var React = require('react');
var HumanStore = require('../../stores/human');
var ApiUtil = require('../../util/api_util');
module.exports = React.createClass({
  getInitialState: function () {
    return { humans: HumanStore.all() };
  },

  _onChange: function () {
    this.setState({ humans: HumanStore.all() });

  },

  componentDidMount: function () {
    ApiUtil.fetchAllHumans();
    this.humanListener = HumanStore.addListener(this._onChange);
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
