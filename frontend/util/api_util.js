var ApiActions = require('../actions/api_actions.js');
module.exports = {

  logout: function() {
    $.ajax({
      url: "/session/",
      method: "DELETE",
      success: function() {
        window.location = "/";
      }
    });
  },

  fetchAllHumans: function () {
    $.ajax({
      url: "api/humans",
      success: function (humans) {
        ApiActions.receiveAllHumans(humans);
      }
    });
  },
fetchSingleUser: function (id) {
  $.ajax({
    url: "api/users/" + id,
    success: function (user) {
      ApiActions.receiveSingleUser(user);
    }
  });
},

  fetchSingleHuman: function (id) {
    $.ajax({
      url: "api/humans/" + id,

      success: function (human) {
        ApiActions.receiveSingleHuman(human);
      }
    });
  },

  createHuman: function (human, callback) {
    $.ajax({
      url: "api/humans",

      method: "POST",
      data: {human: human},
      success: function (human) {
        ApiActions.receiveSingleHuman(human);
        callback && callback(human.id);
      }
    });
  },


fetchAllUsers: function () {

  $.ajax({
    url: "api/users/",

    success: function (users) {
    
      ApiActions.receiveAllUsers(users);
    }
  });
},


createUser: function (user, callback) {
  $.ajax({
    url: "/api/users/",
    method: "POST",
    data: {user: user},
    success: function (user) {
      ApiActions.receiveSingleUser(user);
      callback && callback(user.id);
    }
  });
},

  createNote: function(data) {
  $.post('/api/notes', { note: data }, function (humans) {
    ApiActions.receiveAllHumans(humans);
  });
},

  createUserNote: function(data) {
  $.post('api/notes', { note: data }, function (users) {
    ApiActions.receiveAllUsers(users);
  });
},
createTrack: function(data) {
$.post('/api/tracks', { track: data }, function (humans) {
  ApiActions.receiveAllHumans(humans);
  window.trackStatus = 'Untrack';
});
},


destroyTrack: function(data) {
  $.ajax({
    url: "/api/tracks/" + data.trackee_id,

    dataType: "json",
    method: "DELETE",
    success: function (humans) {
    ApiActions.receiveAllHumans(humans);
    window.trackStatus = 'Track';
    }
  });
},

};
