var React = require('react');
var NavBar = require('../navbar.jsx');
var HumanContentHeader = require('./content_header.jsx');
var HumanRibbon = require('./human_ribbon.jsx');
var HumanSideBar = require('./sidebar.jsx');
var HumanMap = require('./map.jsx');
var HumanNotes = require('./notes.jsx');
var Footer = require('../footer.jsx');
var HumanStore = require('../../stores/human.js');
var ApiUtil = require('../../util/api_util.js');

module.exports = React.createClass({
    mixins: [ReactRouter.History],

    componentDidMount: function () {
      this.humanListener = HumanStore.addListener(this._onChange);
      ApiUtil.fetchSingleHuman(parseInt(this.props.params.humanId));
    },
    getStateFromStore: function () {

      return {
         human: HumanStore.find(parseInt(this.props.params.humanId)),
         component: <HumanNotes human={HumanStore.find(parseInt(this.props.params.humanId))} />
        };
    },

    _onChange: function () {

      var that = this;
      this.setState({
         human: HumanStore.find(parseInt(this.props.params.humanId)),
         component: <HumanNotes human={HumanStore.find(parseInt(that.props.params.humanId))} />
        });
    },

    getInitialState: function () {

      return {
         human: HumanStore.find(parseInt(this.props.params.humanId)),
         component: <HumanNotes humanId={this.props.params.humanId}/>
        };
    },

    showMap: function () {
      this.setState({ component: <HumanMap human={this.state.human}/>});
    },
    showNotes: function () {
      this.setState({ component: <HumanNotes human={this.state.human} />});
    },

    componentWillReceiveProps: function (newProps) {
      ApiUtil.fetchSingleHuman(parseInt(newProps.params.humanId));
    },


    componentWillUnmount: function () {
      this.humanListener.remove();
    },

    render: function() {
      window.human = this.state.human;
      var human = this.state.human;
     if(this.state.human === undefined) { return <div></div>; }

     return (
       <div>
         <div>
           <title>Fatebook</title>
           <header className="header">
             <NavBar showMap={this.showMap}/>
           </header>
           <main className="content group">
             <HumanContentHeader human={human}/>
             <HumanRibbon showMap={this.showMap} showNotes={this.showNotes}/>
             <HumanSideBar human={human} />
           <section className="content-main">
             {this.state.component}
           </section>
           </main>
           <Footer />
         </div>
       </div>
         );
       }
     });
