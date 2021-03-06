var React = require('react');

module.exports = React.createClass({
    mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

    getInitialState: function () {

      return { title: "", body: ""  };
    },

    navigateToUserShow: function () {
      var userUrl = "/users/" + user.id + '/note';
      this.history.pushState(null, userUrl, {});

    },

    handleCancel: function(event){
      event.preventDefault();
      this.navigateToUserShow();
    },
    handleSubmit: function(event){

      event.preventDefault();
      var note = $.extend({}, this.state, {  user_id: CURRENT_USER_ID, username: CURRENT_USER_USERNAME, user_image_url: CURRENT_USER_IMG }
      );
      ApiUtil.createUserNote(note);

      this.navigateToUserShow();
    },

    clearBar: function(e){
     this.setState({
       title: '',
       body: ''
     });
    },

    render: function () {

      var userImage = "http://www.robohash.org/" + CURRENT_USER_USERNAME;
      var userUrl = "/#/users/" + CURRENT_USER_ID;
      return (
        <form className="form2 group" onSubmit={this.handleSubmit}>
          <a href={userUrl} className="form-thumb thumb" title={CURRENT_USER_USERNAME}>
            <img src={userImage} />
          </a>
          <fieldset className="form-fieldset">
            <div className="input2">
              <label for="form-title">Title</label>
              <input id="form-title" type="text" valueLink={this.linkState('title')}/>
            </div>
            <div className="input2">
              <label for="form-textarea">Body</label>
              <textarea id="form-textarea" valueLink={this.linkState('body')}></textarea>
            </div>
            <div type="submit" className="submit">
              <button>Leave Note</button>
              <span className="button-alternative" onClick={this.handleSubmit}></span>
            </div>
          </fieldset>
        </form>
      );
   }
  });
