(function(root) {
  'use strict';

  root.NoteForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

    getInitialState: function () {
      return { title: "", body: ""  };
    },

    navigateToHumanShow: function () {
      var humanUrl = "/humans/" + human.id;
      this.history.pushState(null, humanUrl, {});

    },

    handleCancel: function(event){
      event.preventDefault();
      this.navigateToHumanShow();
    },
    handleSubmit: function(event){

      event.preventDefault();
      var note = $.extend({}, this.state, { human_id: human.id, user_id: CURRENT_USER_ID, username: CURRENT_USER_USERNAME, user_image_url: CURRENT_USER_IMG }
      );
      ApiUtil.createNote(note);
      this.navigateToHumanShow();
    },

    render: function () {

      var userImage = "http://www.robohash.com/" + CURRENT_USER_USERNAME;
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
              <span className="button-alternative" onClick={this.handleCancel}>or <strong>Cancel</strong></span>
            </div>
          </fieldset>
        </form>
      );
   }
  });
}(this));
