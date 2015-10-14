(function () {
  var HUMANS_INDEX_CHANGE_EVENT = "humansIndexChange";
  var HUMAN_DETAIL_CHANGE_EVENT = "humanDetailChange";

  var _humans = [];

  var resetHumans = function (humans) {
    _humans = humans;
  };

  var resetHuman = function (human) {
    var switched = false;
    _humans.forEach(function (p) {
      if(p.id === human.id) {
        _humans[_humans.indexOf(p)] = human;
        switched = true;
      }
    });
    if(!switched) { _humans.push(human); }
  };

  window.HumanStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _humans.slice();
    },

    find: function (id) {
      var human;
      _humans.forEach(function(p) {
        if(p.id === id) { human = p; }
      });

      return human;
    },

    addHumanDetailChangeListener: function (callback) {
      this.on(HUMAN_DETAIL_CHANGE_EVENT, callback);
    },

    removeHumanDetailChangeListener: function (callback) {
      this.removeListener(HUMAN_DETAIL_CHANGE_EVENT, callback);
    },

    addHumansIndexChangeListener: function (callback) {
      this.on(HUMANS_INDEX_CHANGE_EVENT, callback);
    },

    removeHumansIndexChangeListener: function (callback) {
      this.removeListener(HUMANS_INDEX_CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case HumanConstants.HUMANS_RECEIVED:
          resetHumans(payload.humans);
          HumanStore.emit(HUMANS_INDEX_CHANGE_EVENT);
          break;
        case HumanConstants.HUMAN_RECEIVED:
          resetHuman(payload.human);
          HumanStore.emit(HUMAN_DETAIL_CHANGE_EVENT);
          break;
      }
    })
  });
 })();
