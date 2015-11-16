var HumanRibbon = React.createClass({
  render: function () {
    return(
          <div className="profile-ribbon">
             <ul className="nav nav-pills">
               <li role="presentation"><MapIndexItem human={human}/></li>
               <li role="presentation"><NoteIndexItem human={human}/></li>
             </ul>
          </div>
    );
  }
});
