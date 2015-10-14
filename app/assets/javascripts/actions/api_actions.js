window.ApiActions = {
  receiveAllHumans: function (humans) {
    AppDispatcher.dispatch({
      actionType: HumanConstants.HUMANS_RECEIVED,
      humans: humans
    });
  },

  receiveSingleHuman: function (human) {
    AppDispatcher.dispatch({
      actionType: HumanConstants.HUMAN_RECEIVED,
      human: human
    });
  }
};
