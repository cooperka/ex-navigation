Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);

var _reactNative=require('react-native');



var _invariant=require('invariant');var _invariant2=_interopRequireDefault(_invariant);

var _ExNavigationActionTypes=require('./ExNavigationActionTypes');var _ExNavigationActionTypes2=_interopRequireDefault(_ExNavigationActionTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var


NavigationStateUtils=_reactNative.NavigationExperimental.StateUtils;


var INITIAL_STATE={
navigators:{},
alerts:{},
currentNavigatorUID:null};


var navigatorsToRestore=[];var

ExNavigationReducer=function(){function ExNavigationReducer(){_classCallCheck(this,ExNavigationReducer);}_createClass(ExNavigationReducer,null,[{key:'reduce',value:function reduce()
{var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var action=arguments[1];
if(!ExNavigationReducer[action.type]){
return state;
}
var newState=ExNavigationReducer[action.type](state,action);
return newState;
}},{key:

_ExNavigationActionTypes2.default.INITIALIZE,value:function value(state,action){
return INITIAL_STATE;
}},{key:

_ExNavigationActionTypes2.default.SET_CURRENT_NAVIGATOR,value:function value(state,_ref){var navigatorUID=_ref.navigatorUID;var parentNavigatorUID=_ref.parentNavigatorUID;var navigatorType=_ref.navigatorType;var defaultRouteConfig=_ref.defaultRouteConfig;var routes=_ref.routes;var index=_ref.index;
if(!state.navigators[navigatorUID]&&!routes){
return state;
}

var newState={
currentNavigatorUID:navigatorUID};


if(routes){
var navigatorState=state.navigators[navigatorUID];
routes=routes.map(function(child){
if(child.clone){
var newChild=child.clone();
newChild.config=_lodash2.default.merge({},defaultRouteConfig,child.config);
return newChild;
}else{
return child;
}
});
newState=_extends({},
newState,{
navigators:_extends({},
state.navigators,_defineProperty({},
navigatorUID,_extends({
routes:routes,
index:index},
parentNavigatorUID?{parentNavigatorUID:parentNavigatorUID}:null,{
defaultRouteConfig:defaultRouteConfig,
type:navigatorType})))});



}

return _extends({},
state,
newState);

}},{key:

_ExNavigationActionTypes2.default.REMOVE_NAVIGATOR,value:function value(state,_ref2){var navigatorUID=_ref2.navigatorUID;
var currentNavigatorUID=navigatorsToRestore.length&&navigatorsToRestore[navigatorsToRestore.length-1]||
state.navigators[navigatorUID].parentNavigatorUID;
navigatorsToRestore.pop();
return _extends({},
state,{
currentNavigatorUID:currentNavigatorUID,
navigators:_lodash2.default.omit(state.navigators,navigatorUID)});

}},{key:

_ExNavigationActionTypes2.default.PUSH,value:function value(state,_ref3){var navigatorUID=_ref3.navigatorUID;var child=_ref3.child;
var navigatorState=state.navigators[navigatorUID]||{
routes:[],
key:navigatorUID,
index:0,
defaultRouteConfig:{},
type:'stack'};


if(navigatorUID!==state.currentNavigatorUID){
navigatorsToRestore.push(state.currentNavigatorUID);
}

var defaultRouteConfig=navigatorState.defaultRouteConfig;

var newChild=child.clone();
newChild.config=_lodash2.default.merge({},defaultRouteConfig,child.config);

return _extends({},
_updateNavigator(state,navigatorUID,NavigationStateUtils.push(navigatorState,newChild)),{
currentNavigatorUID:navigatorUID});

}},{key:

_ExNavigationActionTypes2.default.REPLACE,value:function value(state,_ref4){var navigatorUID=_ref4.navigatorUID;var child=_ref4.child;
(0,_invariant2.default)(state.navigators[navigatorUID],'Navigator does not exist.');
var navigatorState=state.navigators[navigatorUID];

var index=navigatorState.index;
var defaultRouteConfig=navigatorState.defaultRouteConfig;

var newChild=child.clone();
newChild.config=_lodash2.default.merge({},defaultRouteConfig,child.config);

return _updateNavigator(
state,
navigatorUID,
NavigationStateUtils.replaceAtIndex(navigatorState,index,newChild));

}},{key:

_ExNavigationActionTypes2.default.POP,value:function value(state,_ref5){var navigatorUID=_ref5.navigatorUID;
(0,_invariant2.default)(state.navigators[navigatorUID],'Navigator does not exist.');
var navigatorState=state.navigators[navigatorUID];

if(navigatorState.index===0){
return state;
}

if(navigatorState.type==='slidingTab'){
return _updateNavigator(
state,
navigatorUID,_extends({},
navigatorState,{index:0}));

}

return _updateNavigator(state,navigatorUID,NavigationStateUtils.pop(navigatorState));
}},{key:

_ExNavigationActionTypes2.default.POP_N,value:function value(state,_ref6){var navigatorUID=_ref6.navigatorUID;var n=_ref6.n;
(0,_invariant2.default)(state.navigators[navigatorUID],'Navigator does not exist.');
var navigatorState=state.navigators[navigatorUID];

if(navigatorState.index===0){
return state;
}

if(navigatorState.type==='slidingTab'){
return _updateNavigator(
state,
navigatorUID,_extends({},
navigatorState,{index:0}));

}

var sliceTo=void 0;
if(n>navigatorState.routes.length){
if(__DEV__){
console.warn('Tried to pop '+n+' routes, but only '+navigatorState.routes.length+' routes are available on the stack.');
}
sliceTo=1;
}else{
sliceTo=-n;
}

var routes=navigatorState.routes.slice(0,sliceTo);
var newNavigatorState=_extends({},navigatorState,{index:routes.length-1,routes:routes});
return _updateNavigator(state,navigatorUID,newNavigatorState);
}},{key:

_ExNavigationActionTypes2.default.POP_TO_TOP,value:function value(state,_ref7){var navigatorUID=_ref7.navigatorUID;
(0,_invariant2.default)(state.navigators[navigatorUID],'Navigator does not exist.');
var navigatorState=state.navigators[navigatorUID];

if(navigatorState.index===0){
return state;
}

if(navigatorState.type==='slidingTab'){
return _updateNavigator(
state,
navigatorUID,_extends({},
navigatorState,{index:0}));

}

var routes=navigatorState.routes.slice(0,1);
var newNavigatorState=_extends({},navigatorState,{index:0,routes:routes});
return _updateNavigator(state,navigatorUID,newNavigatorState);
}},{key:

_ExNavigationActionTypes2.default.SHOW_LOCAL_ALERT_BAR,value:function value(state,_ref8){var navigatorUID=_ref8.navigatorUID;var message=_ref8.message;var options=_ref8.options;
var alertState={
message:message,
options:options};


return _extends({},
_updateAlert(state,navigatorUID,alertState));

}},{key:

_ExNavigationActionTypes2.default.HIDE_LOCAL_ALERT_BAR,value:function value(state,_ref9){var navigatorUID=_ref9.navigatorUID;
var alertState=null;

return _extends({},
_updateAlert(state,navigatorUID,alertState));

}},{key:

_ExNavigationActionTypes2.default.TOGGLE_DRAWER,value:function value(state,_ref10){var navigatorUID=_ref10.navigatorUID;
(0,_invariant2.default)(state.navigators[navigatorUID],'Navigator does not exist.');
var navigatorState=state.navigators[navigatorUID];

if(navigatorState.index===0){
return state;
}

return _updateNavigator(state,navigatorUID,NavigationStateUtils.pop(navigatorState));
}},{key:

_ExNavigationActionTypes2.default.IMMEDIATELY_RESET_STACK,value:function value(state,_ref11){var navigatorUID=_ref11.navigatorUID;var routes=_ref11.routes;var index=_ref11.index;
var navigatorState=state.navigators[navigatorUID]||{
routes:[],
index:0,
key:navigatorUID,
defaultRouteConfig:{},
type:'stack'};


var defaultRouteConfig=navigatorState.defaultRouteConfig;

var newChildren=routes.map(function(child){
var newChild=child.clone();
newChild.config=_lodash2.default.merge({},defaultRouteConfig,child.config);
return newChild;
});

return _extends({},
_updateNavigator(state,navigatorUID,NavigationStateUtils.reset(navigatorState,newChildren,index)),{
currentNavigatorUID:navigatorUID});

}},{key:

_ExNavigationActionTypes2.default.UPDATE_ROUTE_AT_INDEX,value:function value(state,_ref12){var navigatorUID=_ref12.navigatorUID;var index=_ref12.index;var newRoute=_ref12.newRoute;
(0,_invariant2.default)(state.navigators[navigatorUID],'Navigator does not exist.');
var navigatorState=state.navigators[navigatorUID];
return _updateNavigator(state,navigatorUID,NavigationStateUtils.replaceAtIndex(navigatorState,index,newRoute));
}},{key:

_ExNavigationActionTypes2.default.JUMP_TO_ITEM,value:function value(state,_ref13){var navigatorUID=_ref13.navigatorUID;var item=_ref13.item;
(0,_invariant2.default)(state.navigators[navigatorUID],'Navigator does not exist.');
(0,_invariant2.default)(state.navigators[navigatorUID].type==='drawer','Navigator is not drawer navigator.');
return _updateSelectedKey(item,state,navigatorUID);
}},{key:

_ExNavigationActionTypes2.default.JUMP_TO_TAB,value:function value(state,_ref14){var navigatorUID=_ref14.navigatorUID;var tab=_ref14.tab;
var navigator=state.navigators[navigatorUID];
(0,_invariant2.default)(navigator,'Navigator does not exist.');var

type=navigator.type;
(0,_invariant2.default)(['slidingTab','tab'].indexOf(type)!==-1,'Navigator is not tab navigator.');

if(type==='tab'){
return _updateSelectedKey(tab,state,navigatorUID);
}else if(type==='slidingTab'){
var route=navigator.routes.find(function(r){return r.key===tab.key;});
var index=navigator.routes.indexOf(route);


return _updateNavigator(
state,
navigatorUID,_extends({},
navigator,{index:index}));

}
}}]);return ExNavigationReducer;}();exports.default=


ExNavigationReducer.reduce;

function _updateSelectedKey(target,state,navigatorUID){
var newNavigatorState=_extends({},state.navigators[navigatorUID]);
var selected=newNavigatorState.routes[newNavigatorState.index];

if(target.key===selected.key){
return state;
}

var targetIndex=NavigationStateUtils.indexOf(newNavigatorState,target.key);
if(targetIndex!==-1){
var old=newNavigatorState.routes[targetIndex];
newNavigatorState.routes.splice(targetIndex,1);
newNavigatorState.routes.push(old);
}else{
newNavigatorState.routes.push(target);
}

newNavigatorState.index=newNavigatorState.routes.length-1;

return _extends({},
_updateNavigator(state,navigatorUID,newNavigatorState),{
currentNavigatorUID:navigatorUID});

}

function _updateAlert(state,navigatorUID,newState){
return _extends({},
state,{
alerts:_extends({},
state.alerts,_defineProperty({},
navigatorUID,newState))});


}

function _updateNavigator(state,navigatorUID,newState){
return _extends({},
state,{
navigators:_extends({},
state.navigators,_defineProperty({},
navigatorUID,newState))});


}