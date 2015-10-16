$(function () {
    var root = document.getElementById("content");
    var RouteHandler = ReactRouter.RouteHandler;
    var Router = ReactRouter.Router;
    var Route = ReactRouter.Route;
    var IndexRoute = ReactRouter.IndexRoute;
    var App = React.createClass({
      render: function(){
        return (
          <div>
            <Index />
            {this.props.children}
          </div>
        );
      }
    });
    var routes = (
        <Route path="/" component={App}>
            <Route path="users/:userId" component={UserShow}/>
            <Route path="humans/:humanId" component={HumanShow}>
            <Route path="note" components={NoteForm} />
            </Route>
        </Route>
    );
  React.render(<Router>{routes}</Router>, root);
});
