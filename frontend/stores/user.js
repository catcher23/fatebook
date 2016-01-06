(function () {
  var USERS_INDEX_CHANGE_EVENT = "usersIndexChange";
  var USER_DETAIL_CHANGE_EVENT = "userDetailChange";

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

  window.UserStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _users.slice();
    },

    find: function (id) {
      var user;
      _users.forEach(function(p) {
        if(p.id === id) { user = p; }
      });

      return user;
    },

    addUserDetailChangeListener: function (callback) {
      this.on(USER_DETAIL_CHANGE_EVENT, callback);
    },

    removeUserDetailChangeListener: function (callback) {
      this.removeListener(USER_DETAIL_CHANGE_EVENT, callback);
    },

    addUsersIndexChangeListener: function (callback) {
      this.on(USERS_INDEX_CHANGE_EVENT, callback);
    },

    removeUsersIndexChangeListener: function (callback) {
      this.removeListener(USERS_INDEX_CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case UserConstants.USERS_RECEIVED:
          resetUsers(payload.users);
          UserStore.emit(USERS_INDEX_CHANGE_EVENT);
          break;
        case UserConstants.USER_RECEIVED:
          resetUser(payload.user);
          UserStore.emit(USER_DETAIL_CHANGE_EVENT);
          break;
      }
    })
  });
 })();
