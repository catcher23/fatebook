(function(root) {
root.ApiUtil = {
  logout: function() {
    $.ajax({
      url: "/session/",
      method: "DELETE",
      success: function(stuff) {
        root.location = "/";
      }
    });
  },

  fetchAllHumans: function () {
    $.ajax({
      url: "api/human",
      success: function (humans) {
        ApiActions.receiveAllHumans(humans);
      }
    });
  },

  fetchSingleHuman: function (id) {
    $.ajax({
      url: "api/human/" + id,
      success: function (human) {
        ApiActions.receiveSingleHuman(human);
      }
    });
  },

  createHuman: function (human, callback) {
    $.ajax({
      url: "api/human",
      method: "POST",
      data: {human: human},
      success: function (human) {
        ApiActions.receiveSingleHuman(human);
        callback && callback(human.id);
      }
    });
  }
};
}(this));
