window.HumansIndex = React.createClass({
  getInitialState: function () {
    return { humans: HumanStore.all() };
  },

  _onChange: function () {
    this.setState({ humans: HumanStore.all() });
  },

  componentDidMount: function () {
    HumanStore.addHumansIndexChangeListener(this._onChange);
    HumanStore.addHumanDetailChangeListener(this._onChange);
    ApiUtil.fetchAllHumans();
  },

  compomentWillUnmount: function () {
    HumanStore.removeHumansIndexChangeListener(this._onChange);
    HumanStore.removeHumanDetailChangeListener(this._onChange);
  },

  render: function () {
    return(
      <ul>

      </ul>
    );
  }
});
