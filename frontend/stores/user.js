var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/user_constants.js');
var UserStore = new Store(AppDispatcher);

var _users = [];

var resetUsers = function (users) {
  _users = users;
};

var resetUser = function (user) {
  var switched = false;
  _users.forEach(function (p) {
    if(p.id === user.id) {
      _users[_users.indexOf(p)] = user;
      switched = true;
    }
  });
  if(!switched) { _users.push(user); }
};

UserStore.all = function () {
  return _users.slice();
};

UserStore.find = function (id) {
  var user;
  _users.forEach(function(p) {
    if(p.id === id) { user = p; }
  });
  return user;
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.USERS_RECEIVED:
      resetUsers(payload.users);
      break;
    case UserConstants.USER_RECEIVED:
      resetUser(payload.user);
      break;
  }
  UserStore.__emitChange();
};

UserStore._maxListeners = 100;
module.exports = UserStore;
