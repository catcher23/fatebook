
window.ApiUtil = {
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
      url: "/api/humans",
       headers: {'X-Requested-With': 'XMLHttpRequest'},
      success: function (humans) {
        ApiActions.receiveAllHumans(humans);
      }
    });
  },

  fetchSingleHuman: function (id) {
    $.ajax({
      url: "/api/humans/" + id,
       headers: {'X-Requested-With': 'XMLHttpRequest'},
      success: function (human) {
        ApiActions.receiveSingleHuman(human);
      }
    });
  },

  createHuman: function (human, callback) {
    $.ajax({
      url: "api/humans",
       headers: {'X-Requested-With': 'XMLHttpRequest'},
      method: "POST",
      data: {human: human},
      success: function (human) {
        ApiActions.receiveSingleHuman(human);
        callback && callback(human.id);
      }
    });
  },

  createHumanNote: function(data) {
  $.post('api/notes', { note: data }, function (humans) {
    ApiActions.receiveAllHumans(humans);
  });
},

fetchAllUsers: function () {
  $.ajax({
    url: "/api/users",
     headers: {'X-Requested-With': 'XMLHttpRequest'},
    success: function (users) {
      ApiActions.receiveAllUsers(users);
    }
  });
},

fetchSingleUser: function (id) {
  $.ajax({
    url: "/api/users/" + id,
     headers: {'X-Requested-With': 'XMLHttpRequest'},
    success: function (user) {
      ApiActions.receiveSingleUser(user);
    }
  });
},

createUser: function (user, callback) {
  $.ajax({
    url: "/api/users",
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

createTrack: function(data) {
$.post('/api/tracks', { track: data }, function (humans) {
  ApiActions.receiveAllHumans(humans);
});
},

destroyTrasck: function(data) {
$.destroy('/api/track', { track: data }, function (humans) {
  ApiActions.receiveAllHumans(humans);
});
},

destroyTrack: function(data) {
  $.ajax({
    url: "/api/tracks/" + data.trackee_id,
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    dataType: "json",
    method: "DELETE",
    success: function (humans) {
    ApiActions.receiveAllHumans(humans);
    }
  });
},

};
