var Dispatcher = require('../dispatcher/dispatcher.js');
var HumanConstants = require('../constants/human_constants.js');
var UserConstants = require('../constants/user_constants.js');
module.exports = {
  receiveAllHumans: function (humans) {
    Dispatcher.dispatch({
      actionType: HumanConstants.HUMANS_RECEIVED,
      humans: humans
    });
  },

    receiveAllUsers: function (users) {
      Dispatcher.dispatch({
        actionType: UserConstants.USERS_RECEIVED,
        users: users
      });
    },

  receiveSingleHuman: function (human) {
    Dispatcher.dispatch({
      actionType: HumanConstants.HUMAN_RECEIVED,
      human: human
    });
  },

  receiveSingleUser: function (user) {
    Dispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },
};
