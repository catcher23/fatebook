(function(root) {
  'use strict';

  root.HumanShow= React.createClass({
    mixins: [ReactRouter.History],

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

    render: function() {

     if(this.state.human === undefined) { return <div></div>; }

     window.human = this.state.human;

     return (
       <div>
         <div>
           <title>Facer</title>
         </div>
           <HumansIndex />

         <div>
           <header className="header">
             <NavBar />
           </header>
           <main className="content group">
             <HumanContentHeader />
             <HumanRibbon />
             <HumanSideBar />
           <section className="content-main">
             <HumanMap />
           </section>
           </main>
           <Footer />
         </div>
       </div>
         );
       }
     });
}(this));
