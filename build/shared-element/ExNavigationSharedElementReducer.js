Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}





































var INITIAL_STATE={
elementGroups:{},
transitioningElementGroupFromUid:null,
transitioningElementGroupToUid:null,
progress:null};var


SharedElementReducer=function(){function SharedElementReducer(){_classCallCheck(this,SharedElementReducer);}_createClass(SharedElementReducer,null,[{key:'reduce',value:function reduce()
{var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:INITIAL_STATE;var action=arguments[1];
var reducer=SharedElementReducer;
if(!reducer[action.type]){
return state;
}
var newState=reducer[action.type](state,action);
return newState;
}},{key:'REGISTER_GROUP',value:function REGISTER_GROUP(

state,_ref){var uid=_ref.uid;var config=_objectWithoutProperties(_ref,['uid']);
return _extends({},
state,{
elementGroups:_extends({},
state.elementGroups,_defineProperty({},
uid,_extends({},
state.elementGroups[uid]||{},{
uid:uid},
config)))});



}},{key:'UNREGISTER_GROUP',value:function UNREGISTER_GROUP(

state,_ref2){var uid=_ref2.uid;
var newState=_extends({},state);
delete newState.elementGroups[uid];
return newState;
}},{key:'UPDATE_METRICS_FOR_ELEMENT',value:function UPDATE_METRICS_FOR_ELEMENT(

state,_ref3){var groupUid=_ref3.groupUid;var id=_ref3.id;var metrics=_ref3.metrics;
return _extends({},
state,{
elementGroups:_extends({},
state.elementGroups,_defineProperty({},
groupUid,_extends({},
state.elementGroups[groupUid],{
elementMetrics:_extends({},
(state.elementGroups[groupUid]||{}).elementMetrics,_defineProperty({},
id,metrics))})))});




}},{key:'START_TRANSITION_FOR_ELEMENT_GROUPS',value:function START_TRANSITION_FOR_ELEMENT_GROUPS(

state,_ref4){var fromUid=_ref4.fromUid;var toUid=_ref4.toUid;var progress=_ref4.progress;
return _extends({},
state,{
transitioningElementGroupFromUid:fromUid,
transitioningElementGroupToUid:toUid,
progress:progress});

}},{key:'TRANSITION_TO_VIEW_READY',value:function TRANSITION_TO_VIEW_READY(

state){
return _extends({},
state,{
toViewReady:true});

}},{key:'END_TRANSITION_FOR_ELEMENT_GROUPS',value:function END_TRANSITION_FOR_ELEMENT_GROUPS(

state){
return _extends({},
state,{
transitioningElementGroupFromUid:null,
transitioningElementGroupToUid:null,
toViewReady:false,
progress:null});

}},{key:'SET_OVERLAY_HANDLE',value:function SET_OVERLAY_HANDLE(

state,_ref5){var handle=_ref5.handle;
return _extends({},
state,{
overlayHandle:handle});

}}]);return SharedElementReducer;}();exports.default=


SharedElementReducer.reduce;