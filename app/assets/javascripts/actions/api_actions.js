window.ApiActions = {
  receiveAllHumans: function (humans) {
    AppDispatcher.dispatch({
      actionType: HumanConstants.HUMANS_RECEIVED,
      humans: humans
    });
  },

    receiveAllUsers: function (users) {
      AppDispatcher.dispatch({
        actionType: UserConstants.USERS_RECEIVED,
        users: users
      });
    },

  receiveSingleHuman: function (human) {
    AppDispatcher.dispatch({
      actionType: HumanConstants.HUMAN_RECEIVED,
      human: human
    });
  },

  receiveSingleUser: function (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },
};
