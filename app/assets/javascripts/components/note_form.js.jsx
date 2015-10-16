var NoteForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.history],
  getInitialState: function () {
    return { title: "", body: "" };
  },
  navigateToHumanShow: function () {
    var humanUrl = "/humans/" + this.props.params.humanId;
    this.props.history.pushState(null, humanUrl);
  },
  handleCancel: function(event){
    event.preventDefault();
    this.navigateToHumanShow();
  },
  handleSubmit: function(event){
    event.preventDefault();
    var note = $.extend(
      {},
      this.state,
      { human_id: this.props.params.humanId }
    );
    ApiUtil.createNote(note);
    this.navigateToHumanShow();
  },
  render: function () {
    return (
      <div className="note-form">
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <br/>
          <input type="string" valueLink={this.linkState('title')}/>
          <br/>

          <label>Comment</label>
          <br/>
          <textarea
            cols='30'
            rows='10'
            valueLink={this.linkState('body')}></textarea>
          <br/>
          <input type="submit"/>
        </form>
        <button onClick={this.handleCancel}>Cancel</button>
      </div>
    );
 }
});
