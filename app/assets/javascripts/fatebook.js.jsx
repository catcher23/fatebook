$(function () {

    var root = document.getElementById("content");
    var RouteHandler = ReactRouter.RouteHandler;
    var Router = ReactRouter.Router;
    var Route = ReactRouter.Route;
    var IndexRoute = ReactRouter.IndexRoute;
    var App = React.createClass({
      mixins: [ReactRouter.History],
      componentDidMount: function() {
        this.history.pushState(null, "/users/"+CURRENT_USER_ID);
      },
      render: function(){

        return (
          <div>
            {this.props.children}
          </div>
        );
      }
    });
    var routes = (
        <Route path="/" component={App}>
            <Route path="/users/:userId" component={UserShow}/>
            <Route path="/humans/:humanId" component={HumanShow} />
            <Route path="/humans/:humanId/note" component={HumanShow2} />
            <Route path="/track" components={HumanContentHeader} />
        </Route>
    );
  React.render(<Router>{routes}</Router>, root);

});
