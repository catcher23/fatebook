$(function () {
  if (window.CURRENT_USER_ID) {
    var root = document.getElementById("content");
    var Router = ReactRouter.Router;
    var Route = ReactRouter.Route;
    var IndexRoute = ReactRouter.IndexRoute;

  React.render((
    <Router>
      <Route path="/" component={Index}>
      <Route path="human/:humanId" component={HumanDetail} />

      </Route>
    </Router>
  ), root);
  }
});
