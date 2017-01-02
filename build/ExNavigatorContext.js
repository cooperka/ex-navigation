Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _ExNavigationContext=require('./ExNavigationContext');var _ExNavigationContext2=_interopRequireDefault(_ExNavigationContext);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

ExNavigatorContext=function(){








function ExNavigatorContext(
navigatorUID,
parentNavigatorUID,
navigatorId,
navigationContext,
options)
{_classCallCheck(this,ExNavigatorContext);
this.navigatorUID=navigatorUID;
this.navigatorId=navigatorId;
this.navigationContext=navigationContext;
this.options=options||{};
}_createClass(ExNavigatorContext,[{key:'getParentNavigator',value:function getParentNavigator()

{
return this.navigationContext.getNavigatorByUID(this.parentNavigatorUID);
}},{key:'isFocused',value:function isFocused()

{
return this.navigationContext.getCurrentNavigatorUID()===this.navigatorUID;
}},{key:'_getNavigatorState',value:function _getNavigatorState()

{
return this.navigationContext.navigationState&&this.navigationContext.navigationState.navigators[this.navigatorUID];
}}]);return ExNavigatorContext;}();exports.default=ExNavigatorContext;