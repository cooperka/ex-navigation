Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _ExNavigationActionTypes=require('./ExNavigationActionTypes');var _ExNavigationActionTypes2=_interopRequireDefault(_ExNavigationActionTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

ExNavigationActions=function(){function ExNavigationActions(){_classCallCheck(this,ExNavigationActions);}_createClass(ExNavigationActions,null,[{key:'initialize',value:function initialize()
{
return{type:_ExNavigationActionTypes2.default.INITIALIZE};
}},{key:'setCurrentNavigator',value:function setCurrentNavigator(

navigatorUID,parentNavigatorUID,navigatorType,defaultRouteConfig,routes){var index=arguments.length>5&&arguments[5]!==undefined?arguments[5]:0;
return{
type:_ExNavigationActionTypes2.default.SET_CURRENT_NAVIGATOR,
navigatorUID:navigatorUID,
parentNavigatorUID:parentNavigatorUID,
navigatorType:navigatorType,
defaultRouteConfig:defaultRouteConfig,
routes:routes,
index:index};

}},{key:'removeNavigator',value:function removeNavigator(

navigatorUID){
return{
type:_ExNavigationActionTypes2.default.REMOVE_NAVIGATOR,
navigatorUID:navigatorUID};

}},{key:'push',value:function push(

navigatorUID,child){
return{
type:_ExNavigationActionTypes2.default.PUSH,
navigatorUID:navigatorUID,
child:child};

}},{key:'pop',value:function pop(

navigatorUID){
return{
type:_ExNavigationActionTypes2.default.POP,
navigatorUID:navigatorUID};

}},{key:'popN',value:function popN(

navigatorUID,n){
return{
type:_ExNavigationActionTypes2.default.POP_N,
navigatorUID:navigatorUID,
n:n};

}},{key:'popToTop',value:function popToTop(

navigatorUID){
return{
type:_ExNavigationActionTypes2.default.POP_TO_TOP,
navigatorUID:navigatorUID};

}},{key:'replace',value:function replace(

navigatorUID,child){
return{
type:_ExNavigationActionTypes2.default.REPLACE,
navigatorUID:navigatorUID,
child:child};

}},{key:'immediatelyResetStack',value:function immediatelyResetStack(

navigatorUID,routes,index){
return{
type:_ExNavigationActionTypes2.default.IMMEDIATELY_RESET_STACK,
navigatorUID:navigatorUID,
routes:routes,
index:index};

}},{key:'updateCurrentRouteParams',value:function updateCurrentRouteParams(

navigatorUID,newParams){
return{
type:_ExNavigationActionTypes2.default.UPDATE_CURRENT_ROUTE_PARAMS,
navigatorUID:navigatorUID,
newParams:newParams};

}},{key:'jumpToTab',value:function jumpToTab(

navigatorUID,tab,index){
return{
type:_ExNavigationActionTypes2.default.JUMP_TO_TAB,
navigatorUID:navigatorUID,
tab:tab,
index:index};

}},{key:'jumpToItem',value:function jumpToItem(

navigatorUID,item){
return{
type:_ExNavigationActionTypes2.default.JUMP_TO_ITEM,
navigatorUID:navigatorUID,
item:item};

}},{key:'toggleDrawer',value:function toggleDrawer(

navigatorUID){
return{
type:_ExNavigationActionTypes2.default.TOGGLE_DRAWER,
navigatorUID:navigatorUID};

}},{key:'goBack',value:function goBack()

{
return{
type:_ExNavigationActionTypes2.default.GO_BACK};

}},{key:'showLocalAlert',value:function showLocalAlert(

navigatorUID,message,options){
return{
type:_ExNavigationActionTypes2.default.SHOW_LOCAL_ALERT_BAR,
navigatorUID:navigatorUID,
message:message,
options:options};

}},{key:'hideLocalAlert',value:function hideLocalAlert(

navigatorUID){
return{
type:_ExNavigationActionTypes2.default.HIDE_LOCAL_ALERT_BAR,
navigatorUID:navigatorUID};

}}]);return ExNavigationActions;}();exports.default=ExNavigationActions;