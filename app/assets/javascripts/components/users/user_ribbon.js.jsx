var UserRibbon = React.createClass({
  render: function () {

    return(


          <div className="profile-ribbon">
             <ul className="nav nav-pills">
               <li role="presentation"><UserMapIndexItem user={user}/></li>
               <li role="presentation"><UserNoteIndexItem user={user}/></li>
             </ul>
          </div>

    );
  }
});
