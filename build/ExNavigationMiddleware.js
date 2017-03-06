Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _invariant=require('invariant');var _invariant2=_interopRequireDefault(_invariant);

var _ExNavigationActionTypes=require('./ExNavigationActionTypes');var _ExNavigationActionTypes2=_interopRequireDefault(_ExNavigationActionTypes);
var _ExNavigationActions=require('./ExNavigationActions');var _ExNavigationActions2=_interopRequireDefault(_ExNavigationActions);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(navigationStateKey){return[
function(_ref){var getState=_ref.getState;var dispatch=_ref.dispatch;return check(
_ExNavigationActionTypes2.default.GO_BACK,
function(next,action){
var navState=getState()[navigationStateKey];

var currentNavigatorState=navState.navigators[navState.currentNavigatorUID];
if(currentNavigatorState.index===0){var
parentNavigatorUID=currentNavigatorState.parentNavigatorUID;
if(parentNavigatorUID){
dispatch(_ExNavigationActions2.default.pop(parentNavigatorUID));
}
}else{
dispatch(_ExNavigationActions2.default.pop(navState.currentNavigatorUID));
}var _getState=

getState();var newNavState=_getState.navigation;
return navState!==newNavState;
});},

function(_ref2){var getState=_ref2.getState;var dispatch=_ref2.dispatch;return check(
_ExNavigationActionTypes2.default.UPDATE_CURRENT_ROUTE_PARAMS,
function(next,_ref3){var navigatorUID=_ref3.navigatorUID;var newParams=_ref3.newParams;
var navState=getState()[navigationStateKey];

(0,_invariant2.default)(navState.navigators[navigatorUID],'Navigator does not exist.');
var navigatorState=navState.navigators[navigatorUID];

var currentIndex=navigatorState.index;
var currentRouteAtIndex=navigatorState.routes[currentIndex];


if(_lodash2.default.isEqual(newParams,currentRouteAtIndex.params)){
return;
}

var newRoute=currentRouteAtIndex.clone();
newRoute.params=_extends({},
newRoute.params,
newParams);


dispatch({
type:_ExNavigationActionTypes2.default.UPDATE_ROUTE_AT_INDEX,
navigatorUID:navigatorUID,
index:currentIndex,
newRoute:newRoute});


return;
});}];};




var check=function check(actionType,nextFn){return function(next){return function(action){
if(action.type==='EX_NAVIGATION.BATCH'){
action.payload.forEach(function(batchedAction){
if(batchedAction.type===actionType){
nextFn(next,batchedAction);
}
});
return next(action);
}
return action.type!==actionType?next(action):nextFn(next,action);
};};};