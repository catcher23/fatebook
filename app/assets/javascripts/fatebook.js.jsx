$(function () {
    var Router = ReactRouter.Router;
    var Route = ReactRouter.Route;
    var IndexRoute = ReactRouter.IndexRoute;

    var root = document.getElementById("content");

  React.render((
    <Router>
      <Route path="/" component={Index}>
      <Route path="human/:humanId" component={HumanDetail} />

      </Route>
    </Router>
  ), root);
});
