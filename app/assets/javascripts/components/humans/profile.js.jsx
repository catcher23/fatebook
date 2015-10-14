window.HumanDetail = React.createClass({
  getStateFromStore: function () {
    return { human: HumanStore.find(parseInt(this.props.params.humanId)) };
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchSingleHuman(parseInt(newProps.params.humanId));
  },

  componentDidMount: function () {
    HumanStore.addHumanDetailChangeListener(this._onChange);
    ApiUtil.fetchSingleHuman(parseInt(this.props.params.humanId));
  },

  componentWillUnmount: function () {
    HumanStore.removeHumanDetailChangeListener(this._onChange);
  },

  render: function () {
    if(this.state.human === undefined) { return <div></div>; }

    return(
      <div>
        <div className="profile">
          {this.state.human.id}
          {this.state.human.image_url}
          <img src={this.state.human.image_url} />
        </div>
      </div>
    );
  }
});
