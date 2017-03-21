Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _invariant=require('invariant');var _invariant2=_interopRequireDefault(_invariant);

var _ExNavigationActions=require('./ExNavigationActions');var _ExNavigationActions2=_interopRequireDefault(_ExNavigationActions);
var _ExNavigationStore=require('./ExNavigationStore');var _ExNavigationStore2=_interopRequireDefault(_ExNavigationStore);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

















NavigationContext=function(){









function NavigationContext(_ref){var _this=this;var store=_ref.store;var router=_ref.router;_classCallCheck(this,NavigationContext);this.


























































registerNavigatorContext=function(navigatorUID,navigatorContext){
_this._navigatorContexts[navigatorUID]=navigatorContext;
};this.

unregisterNavigatorContext=function(navigatorUID){
delete _this._navigatorContexts[navigatorUID];
};if(store==null){store=(0,_ExNavigationStore2.default)();}this._store=store;this._router=router;this._navigatorContexts={};}_createClass(NavigationContext,[{key:'getNavigator',value:function getNavigator(navigatorId){var _this2=this;var navigatorContext=void 0;var contextKeys=Object.keys(this._navigatorContexts);contextKeys.forEach(function(contextKey){var c=_this2._navigatorContexts[contextKey];if(c.navigatorId===navigatorId){if(!navigatorContext){navigatorContext=c;}else{throw new Error('More than one navigator exists with id \''+navigatorId+'\'. Please access the navigator context using \'getNavigatorByUID\'.');}}});(0,_invariant2.default)(navigatorContext,'Navigator does not exist.');return navigatorContext;}},{key:'getNavigatorByUID',value:function getNavigatorByUID(navigatorUID){(0,_invariant2.default)(this._navigatorContexts[navigatorUID],'Navigator does not exist.');return this._navigatorContexts[navigatorUID];}},{key:'getCurrentNavigatorUID',value:function getCurrentNavigatorUID(){var state=this.navigationState;if(state){return state.currentNavigatorUID;}return null;}},{key:'getFocusedRoute',value:function getFocusedRoute(){if(!this.navigationState){return null;}var currentNavigator=this.navigationState.navigators[this.navigationState.currentNavigatorUID];if(!currentNavigator){return null;}return currentNavigator.routes[currentNavigator.index];}},{key:'performAction',value:function performAction(





























actionFn){
var actions=[];
var stateUtils={
drawer:function drawer(uid){return{
jumpToItem:function jumpToItem(itemId){
actions.push(
_ExNavigationActions2.default.jumpToItem(uid,{
key:itemId}));


},
toggleDrawer:function toggleDrawer(){
actions.push(
_ExNavigationActions2.default.toggleDrawer(uid));

}};},

tabs:function tabs(uid){return{
jumpToTab:function jumpToTab(tabId){
actions.push(
_ExNavigationActions2.default.jumpToTab(uid,{
key:tabId}));


}};},

stacks:function stacks(uid){return{
push:function push(route){
actions.push(
_ExNavigationActions2.default.push(uid,route));

},
pop:function pop(){var n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;
if(n===1){
actions.push(
_ExNavigationActions2.default.pop(uid));

}else{
actions.push(
_ExNavigationActions2.default.popN(uid,n));

}
},
popToTop:function popToTop(){
actions.push(
_ExNavigationActions2.default.popToTop(uid));

},
replace:function replace(route){
actions.push(
_ExNavigationActions2.default.replace(uid,route));

},
immediatelyResetStack:function immediatelyResetStack(routes,index){
var mappedChildren=routes.map(function(route,i){
(0,_invariant2.default)(route!==null&&route.key,'Route at index '+i+' is null or malformed.');
return route;
});

actions.push(
_ExNavigationActions2.default.immediatelyResetStack(uid,mappedChildren,index));

},
updateCurrentRouteParams:function updateCurrentRouteParams(newParams){
actions.push(
_ExNavigationActions2.default.updateCurrentRouteParams(uid,newParams));

},
showLocalAlert:function showLocalAlert(message,options){
actions.push(
_ExNavigationActions2.default.showLocalAlert(uid,message,options));

},
hideLocalAlert:function hideLocalAlert(){
actions.push(
_ExNavigationActions2.default.hideLocalAlert(uid));

}};}};


actionFn(stateUtils);
this.store.dispatch((0,_ExNavigationStore.batchNavigationActions)(actions));
}},{key:'store',get:function get(){return this._store;}},{key:'navigationStateKey',get:function get(){return this._store.__exNavigationStateKey;}},{key:'dispatch',get:function get(){if(!this._store){throw new Error('Store is not set on navigation context.');}return this._store.dispatch;}},{key:'router',get:function get(){return this._router;}},{key:'navigationState',get:function get(){var state=this._store.getState();if(state==null){return null;}return state[this._store.__exNavigationStateKey];}}]);return NavigationContext;}();exports.default=NavigationContext;