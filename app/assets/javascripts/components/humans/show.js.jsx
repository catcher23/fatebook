window.HumanShow = React.createClass({
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
       human = this.state.human;
      attrs =    ['id', 'fname', 'lname', 'email', 'birthdate', 'address', 'screenname'].map(function (attr) {
          return <p key={attr}>{this.state.human[attr]}</p>;
        }.bind(this));
    return(
      <div>
        <div className="detail">
          <HumanLayout />
        </div>
      </div>
    );
  }
});
