Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class;



var _react=require('react');var _react2=_interopRequireDefault(_react);

var _ExNavigationComponents=require('./ExNavigationComponents');
var _ExNavigationBackButtonManager=require('./ExNavigationBackButtonManager');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var













ExNavigationAndroidBackButtonBehavior=(0,_ExNavigationComponents.createFocusAwareComponent)(_class=(0,_ExNavigationComponents.withNavigation)(_class=function(_React$Component){_inherits(ExNavigationAndroidBackButtonBehavior,_React$Component);function ExNavigationAndroidBackButtonBehavior(){var _ref;var _temp,_this,_ret;_classCallCheck(this,ExNavigationAndroidBackButtonBehavior);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=ExNavigationAndroidBackButtonBehavior.__proto__||Object.getPrototypeOf(ExNavigationAndroidBackButtonBehavior)).call.apply(_ref,[this].concat(args))),_this),_this.
state={
enabled:false},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(ExNavigationAndroidBackButtonBehavior,[{key:'componentDidMount',value:function componentDidMount()


{
if(this.props.isFocused){
this.enable();
}
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){
if(nextProps.isFocused&&!this.props.isFocused){
this.enable();
}else if(!nextProps.isFocused&&this.props.isFocused){
this.disable();
}
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this.disable();
}},{key:'render',value:function render()

{
return this.props.children;
}},{key:'enable',value:function enable()

{var _this2=this;
if(this.state.enabled){
return;
}

var buttonManager=(0,_ExNavigationBackButtonManager.getBackButtonManager)();
buttonManager.pushListener(function(){
return _this2.props.onBackButtonPress();
});

this.setState({
enabled:true});

}},{key:'disable',value:function disable()

{
if(!this.state.enabled){
return;
}

var buttonManager=(0,_ExNavigationBackButtonManager.getBackButtonManager)();
buttonManager.ensureGlobalListener();

this.setState({
enabled:false});

}}]);return ExNavigationAndroidBackButtonBehavior;}(_react2.default.Component))||_class)||_class;exports.default=ExNavigationAndroidBackButtonBehavior;