
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
      url: "api/humans",
      success: function (humans) {
        ApiActions.receiveAllHumans(humans);
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

  createNote: function(data) {
  $.post('api/notes', { note: data }, function (humans) {
    ApiActions.receiveAllHumans(humans);
  });
}
};
