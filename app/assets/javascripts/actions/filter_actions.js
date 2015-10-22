FilterActions = {
 updateBounds: function (bounds) {
   AppDispatcher.dispatch({
     actionType: FilterConstants.UPDATE_BOUNDS,
     bounds: bounds
   });
 },
 updateMinSeating: function (value){
   AppDispatcher.dispatch({
     actionType: FilterConstants.UPDATE_MIN_SEATING,
     minSeating: value,
   });
 },
 updateMaxSeating: function (value){
   AppDispatcher.dispatch({
     actionType: FilterConstants.UPDATE_MAX_SEATING,
     maxSeating: value,
   });
 }
};
