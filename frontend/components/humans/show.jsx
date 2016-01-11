var React = require('react');
var HumansIndex = require('./index.jsx');
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

    getStateFromStore: function () {
      return {
         human: HumanStore.find(parseInt(this.props.params.humanId)),
         component: <HumanMap />
        };
    },

    _onChange: function () {
      this.setState(this.getStateFromStore());
    },

    getInitialState: function () {
      return this.getStateFromStore();
    },

    showMap: function () {
      this.setState({ component: <HumanMap />});
    },
    showNotes: function () {
      this.setState({ component: <HumanNotes />});
    },

    componentWillReceiveProps: function (newProps) {
      ApiUtil.fetchSingleHuman(parseInt(newProps.params.humanId));
    },

    componentDidMount: function () {
      this.humanListener = HumanStore.addListener(this._onChange);
      ApiUtil.fetchSingleHuman(parseInt(this.props.params.humanId));
    },

    componentWillUnmount: function () {
      this.humanListener.remove();
    },

    render: function() {

     if(this.state.human === undefined) { return <div></div>; }

     window.human = this.state.human;

     return (
       <div>
         <div>
           <title>Fatebook</title>
         </div>
           <HumansIndex />
         <div>
           <header className="header">
             <NavBar />
           </header>
           <main className="content group">
             <HumanContentHeader />
             <HumanRibbon showMap={this.showMap} showNotes={this.showNotes}/>
             <HumanSideBar />
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
