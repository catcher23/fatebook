var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var HumanConstants = require('../constants/human_constants.js');
var HumanStore = new Store(AppDispatcher);

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

HumanStore.all = function () {
  return _humans.slice();
};

HumanStore.find = function (id) {
  var human;
  _humans.forEach(function(p) {
    if(p.id === id) { human = p; }
  });
  return human;
};

HumanStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case HumanConstants.HUMANS_RECEIVED:
      resetHumans(payload.humans);
      break;
    case HumanConstants.HUMAN_RECEIVED:
      resetHuman(payload.human);
      break;
  }
  HumanStore.__emitChange();
};

HumanStore._maxListeners = 100;
module.exports = HumanStore;
