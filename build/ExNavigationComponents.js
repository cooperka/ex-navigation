Object.defineProperty(exports,"__esModule",{value:true});exports.createFocusAwareComponent=exports.createFocusableComponent=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.








































createNavigatorComponent=createNavigatorComponent;exports.













































































































withNavigation=withNavigation;var _react=require('react');var _react2=_interopRequireDefault(_react);var _uuidJs=require('uuid-js');var _uuidJs2=_interopRequireDefault(_uuidJs);var _reselect=require('reselect');var _hoistNonReactStatics=require('hoist-non-react-statics');var _hoistNonReactStatics2=_interopRequireDefault(_hoistNonReactStatics);var _PureComponent3=require('./utils/PureComponent');var _PureComponent4=_interopRequireDefault(_PureComponent3);var _shallowEqual=require('fbjs/lib/shallowEqual');var _shallowEqual2=_interopRequireDefault(_shallowEqual);var _ExNavigationContext=require('./ExNavigationContext');var _ExNavigationContext2=_interopRequireDefault(_ExNavigationContext);var _ExNavigationConnect=require('./ExNavigationConnect');var _ExNavigationConnect2=_interopRequireDefault(_ExNavigationConnect);var _ExNavigationPropTypes=require('./ExNavigationPropTypes');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function getDisplayName(WrappedComponent){return WrappedComponent.displayName||WrappedComponent.name||'Component';}var getStateForNavigatorId=function getStateForNavigatorId(state,props){var navigationState=state[props.navigation.navigationStateKey];return navigationState.navigators&&props.navigatorUID&&navigationState.navigators[props.navigatorUID];};var makeNavigatorStateSelector=function makeNavigatorStateSelector(){return(0,_reselect.createSelector)([getStateForNavigatorId],function(navigationState){return navigationState;});};function createNavigatorComponent(WrappedComponent){var _class,_temp;var makeMapStateToProps=function makeMapStateToProps(){var navigatorStateSelector=makeNavigatorStateSelector();return function(iState,iProps){return{navigationState:navigatorStateSelector(iState,iProps)};};};var ConnectedWrappedComponent=(0,_ExNavigationConnect2.default)(makeMapStateToProps,null,null,{withRef:true})(WrappedComponent);var ExNavigatorComponent=(_temp=_class=function(_React$Component){_inherits(ExNavigatorComponent,_React$Component);function ExNavigatorComponent(props,context){_classCallCheck(this,ExNavigatorComponent);var _this=_possibleConstructorReturn(this,(ExNavigatorComponent.__proto__||Object.getPrototypeOf(ExNavigatorComponent)).call(this,props,context));_this._wrappedInstanceRef=function(c){if(c==null){_this._wrappedInstance=null;}else{_this._wrappedInstance=c.refs.wrappedInstance;}};_this._wrappedInstance=null;var navigatorUID=_uuidJs2.default.create(4).toString();_this.state={navigatorUID:navigatorUID};return _this;}_createClass(ExNavigatorComponent,[{key:'shouldComponentUpdate',value:function shouldComponentUpdate(nextProps,nextState,nextContext){return!(0,_shallowEqual2.default)(this.props,nextProps)||!(0,_shallowEqual2.default)(this.state,nextState)||!(0,_shallowEqual2.default)(this.context,nextContext);}},{key:'render',value:function render(){var navigation=this.getNavigationContext();return _react2.default.createElement(ConnectedWrappedComponent,_extends({ref:this._wrappedInstanceRef,navigatorUID:this.state.navigatorUID,navigation:navigation,onRegisterNavigatorContext:navigation.registerNavigatorContext,onUnregisterNavigatorContext:navigation.unregisterNavigatorContext},this.props));}},{key:'getChildContext',value:function getChildContext(){return{navigation:this.getNavigationContext()};}},{key:'getWrappedInstance',value:function getWrappedInstance(){return this._wrappedInstance;}},{key:'getNavigationContext',value:function getNavigationContext(){return this.props.navigation||this.context.navigation;}}]);return ExNavigatorComponent;}(_react2.default.Component),_class.contextTypes={navigation:_react.PropTypes.instanceOf(_ExNavigationContext2.default)},_class.childContextTypes={navigation:_react.PropTypes.instanceOf(_ExNavigationContext2.default)},_temp);ExNavigatorComponent.displayName='ExNavigatorComponent('+getDisplayName(WrappedComponent)+')';return(0,_hoistNonReactStatics2.default)(ExNavigatorComponent,createFocusableComponent(WrappedComponent));}var NavigatorPropType=_react.PropTypes.object;function withNavigation(WrappedComponent){var _class2,_temp2;var
WithNavigation=(_temp2=_class2=function(_PureComponent){_inherits(WithNavigation,_PureComponent);function WithNavigation(){_classCallCheck(this,WithNavigation);return _possibleConstructorReturn(this,(WithNavigation.__proto__||Object.getPrototypeOf(WithNavigation)).apply(this,arguments));}_createClass(WithNavigation,[{key:'render',value:function render()












{var _this3=this;
return(
_react2.default.createElement(WrappedComponent,_extends({
ref:function ref(c){_this3._wrappedInstance=c;},
navigation:this.getNavigationContext(),
navigator:this.getCurrentNavigator()},
this.props)));


}},{key:'getChildContext',value:function getChildContext()

{
return{
navigation:this.getNavigationContext(),
navigator:this.getCurrentNavigator()};

}},{key:'getWrappedInstance',value:function getWrappedInstance()

{
return this._wrappedInstance;
}},{key:'getNavigationContext',value:function getNavigationContext()

{
return this.props.navigation||this.context.navigation;
}},{key:'getCurrentNavigator',value:function getCurrentNavigator()

{
return this.props.navigator||this.context.navigator;
}}]);return WithNavigation;}(_PureComponent4.default),_class2.contextTypes={navigation:_ExNavigationPropTypes.NavigationPropType,navigator:NavigatorPropType},_class2.childContextTypes={navigation:_ExNavigationPropTypes.NavigationPropType,navigator:NavigatorPropType},_temp2);


WithNavigation.displayName='WithNavigation('+getDisplayName(WrappedComponent)+')';

return(0,_hoistNonReactStatics2.default)(WithNavigation,WrappedComponent);
}

var createFocusableComponent=exports.createFocusableComponent=function createFocusableComponent(WrappedComponent){var _class3,_temp3;var
FocusableComponent=(_temp3=_class3=function(_PureComponent2){_inherits(FocusableComponent,_PureComponent2);_createClass(FocusableComponent,[{key:'getChildContext',value:function getChildContext()






{
return{
isFocused:this.state.isFocused};

}}]);

function FocusableComponent(props,context){_classCallCheck(this,FocusableComponent);var _this4=_possibleConstructorReturn(this,(FocusableComponent.__proto__||Object.getPrototypeOf(FocusableComponent)).call(this,
props,context));

var _prevNavState=null;
_this4._unsubcribeFromStore=_this4.props.navigation.store.subscribe(function(){
try{
var navState=_this4.props.navigation.navigationState;
if(navState===_prevNavState||!navState||!navState.currentNavigatorUID){
return;
}

var focusedRoute=_this4.props.navigation.getFocusedRoute();
var focusedNavigatorUID=_this4.props.navigation.getCurrentNavigatorUID();

var isFocused=false;

var componentIsNavigator=WrappedComponent.navigation&&WrappedComponent.navigation.__isNavigator;
if(componentIsNavigator){
isFocused=focusedNavigatorUID===_this4.props.navigatorUID;
if(isFocused&&isFocused!==_this4.state.isFocused){

}else if(!isFocused&&isFocused!==_this4.state.isFocused){

}
}else if(_this4.props.route){
isFocused=_this4.props.route===focusedRoute;
if(isFocused&&isFocused!==_this4.state.isFocused){

}else if(!isFocused&&isFocused!==_this4.state.isFocused){

}
}

if(isFocused!==_this4.state.isFocused){
_this4.setState({
isFocused:isFocused});

}

_prevNavState=navState;
}catch(e){
throw e;
}
});

_this4.state={
isFocused:false};return _this4;

}_createClass(FocusableComponent,[{key:'componentWillUnmount',value:function componentWillUnmount()

{
this._unsubcribeFromStore&&this._unsubcribeFromStore();
}},{key:'render',value:function render()

{
return(
_react2.default.createElement(WrappedComponent,_extends({},this.props,{isFocused:this.state.isFocused})));

}}]);return FocusableComponent;}(_PureComponent4.default),_class3.childContextTypes={isFocused:_react2.default.PropTypes.bool},_temp3);


return(0,_hoistNonReactStatics2.default)(withNavigation(FocusableComponent),WrappedComponent);
};

var createFocusAwareComponent=exports.createFocusAwareComponent=function createFocusAwareComponent(WrappedComponent){var _class4,_temp5;var
FocusAwareComponent=(_temp5=_class4=function(_React$Component2){_inherits(FocusAwareComponent,_React$Component2);function FocusAwareComponent(){var _ref;var _temp4,_this5,_ret;_classCallCheck(this,FocusAwareComponent);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp4=(_this5=_possibleConstructorReturn(this,(_ref=FocusAwareComponent.__proto__||Object.getPrototypeOf(FocusAwareComponent)).call.apply(_ref,[this].concat(args))),_this5),_this5.




















_getIsFocused=function(){
return _this5.props.isFocused||_this5.context.isFocused;
},_temp4),_possibleConstructorReturn(_this5,_ret);}_createClass(FocusAwareComponent,[{key:'getChildContext',value:function getChildContext(){return{isFocused:this._getIsFocused()};}},{key:'render',value:function render(){return _react2.default.createElement(WrappedComponent,_extends({},this.props,{isFocused:this._getIsFocused()}));}}]);return FocusAwareComponent;}(_react2.default.Component),_class4.contextTypes={isFocused:_react2.default.PropTypes.bool},_class4.childContextTypes={isFocused:_react2.default.PropTypes.bool},_temp5);


return(0,_hoistNonReactStatics2.default)(FocusAwareComponent,WrappedComponent);
};