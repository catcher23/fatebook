logic should be inside navbar

App = r.cc
render...
return (
<div>
<navbar /> //use bootstrap navbar
{this.props.children}
)

logout button:
clickhandler on logout button

in ajax success callback : window.location = 'html'

need a before_action
window.location = "/"

<% if current_user %>
  <script>
  window.current_user_id = <%= current_user.id %>
  </script>
  <%end%>

  var NavBar = React.createClass({
        getInitialState: function(){
            return { focused: 0 };
        },
        clicked: function(index){
            this.setState({focused: index});
        },
        render: function() {

            var self = this;
            return (
                <div>
                    <ul>{ ['Home', 'Search', 'Username', 'Logout'].map(function(m, index){
                        var style = '';
                        if(self.state.focused == index){
                            style = 'focused';
                        }
                        return <li className={style} onClick={self.clicked.bind(self, index)}>{m}</li>;
                    }) }
                    </ul>
                    <p>Selected: {['Home', 'Search', 'Username', 'Logout'][this.state.focused]}</p>
                </div>
            );
        }
      });
