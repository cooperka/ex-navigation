Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_dec2,_class;

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');









var _reactMixin=require('react-mixin');
var _reactTimerMixin=require('react-timer-mixin');var _reactTimerMixin2=_interopRequireDefault(_reactTimerMixin);
var _ExNavigationConnect=require('./ExNavigationConnect');var _ExNavigationConnect2=_interopRequireDefault(_ExNavigationConnect);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}




















var ALERT_DISPLAY_TIME_MS=6000;
var ALERT_TEXT_VERTICAL_MARGIN=12;
var ALERT_TEXT_HORIZONTAL_MARGIN=8;var



ExNavigationAlertBar=(_dec=(0,_ExNavigationConnect2.default)(function(data,props){return ExNavigationAlertBar.getDataProps(data,props);}),_dec2=(0,_reactMixin.decorate)(_reactTimerMixin2.default),_dec(_class=_dec2(_class=function(_React$Component){_inherits(ExNavigationAlertBar,_React$Component);function ExNavigationAlertBar(){var _ref;var _temp,_this,_ret;_classCallCheck(this,ExNavigationAlertBar);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=ExNavigationAlertBar.__proto__||Object.getPrototypeOf(ExNavigationAlertBar)).call.apply(_ref,[this].concat(args))),_this),_this.















state={
isVisible:false,
yOffset:new _reactNative.Animated.Value(-500),
currentAlertState:null},_this.































































_onLayout=function(e){



},_this.

_show=function(){var
currentAlertState=_this.state.currentAlertState;var
options=currentAlertState.options;
var duration=options.duration||ALERT_DISPLAY_TIME_MS;

_this.setState({isVisible:true},function(){
_this.requestAnimationFrame(function(){
_this._textContainerRef&&_this._textContainerRef.measure(function(l,t,w,height){
_this._animateIn(height);
_this._timeout=_this.setTimeout(_this._dispatchHide,duration);
});
});
});
},_this.

_hide=function(){
if(!_this._textContainerRef||!_this._textContainerRef.measure){
return;
}

if(_this._timeout){
_this.clearTimeout(_this._timeout);
}


_this._textContainerRef.measure(function(l,t,w,height){
_this._animateOut(height);
});
},_this.

_maybeRestartTimeout=function(){
if(_this._timeout){
_this.clearTimeout(_this._timeout);
}

_this._timeout=_this.setTimeout(_this._dispatchHide,ALERT_DISPLAY_TIME_MS);
},_this.

_dispatchHide=function(){
if(_this._textContainerRef){
_this.props.getNavigatorContext().hideLocalAlert();
}
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(ExNavigationAlertBar,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){if(!this.props.alertState&&nextProps.alertState||this.props.alertState&&nextProps.alertState&&this.props.alertState!==nextProps.alertState){this.setState({currentAlertState:nextProps.alertState});}}},{key:'componentDidUpdate',value:function componentDidUpdate(prevProps){if(!prevProps.alertState&&this.props.alertState){this._show();}else if(prevProps.alertState&&!this.props.alertState){this._hide();}else if(prevProps.alertState!==this.props.alertState){this._maybeRestartTimeout();}else{}}},{key:'render',value:function render(){var _this2=this;if(!this.state.isVisible){return _react2.default.createElement(_reactNative.View,null);}var currentAlertState=this.state.currentAlertState;var containerStyleOptions=void 0,textStyleOptions=void 0,message=void 0;if(currentAlertState){var _options=currentAlertState.options;containerStyleOptions=_options.container;textStyleOptions=_options.text;message=currentAlertState.message;}return _react2.default.createElement(_reactNative.View,{style:styles.overflowContainer},_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:this._dispatchHide},_react2.default.createElement(_reactNative.Animated.View,{style:[{transform:[{translateY:this.state.yOffset}]},styles.alertBar,this.props.style,containerStyleOptions]},_react2.default.createElement(_reactNative.View,{style:styles.alertBarInnerContainer,onLayout:this._onLayout,ref:function ref(view){_this2._textContainerRef=view;}},_react2.default.createElement(_reactNative.Text,{style:[styles.alertText,textStyleOptions]},message)))));}},{key:'_animateIn',value:function _animateIn(

textHeight){
textHeight+=ALERT_TEXT_VERTICAL_MARGIN*2;

_reactNative.Animated.timing(this.state.yOffset,{
fromValue:-textHeight,
toValue:0,
easing:_reactNative.Easing.inOut(_reactNative.Easing.linear),
duration:200}).
start();
}},{key:'_animateOut',value:function _animateOut(

textHeight){var _this3=this;
textHeight+=ALERT_TEXT_VERTICAL_MARGIN*2;

_reactNative.Animated.timing(this.state.yOffset,{
toValue:-textHeight,
easing:_reactNative.Easing.inOut(_reactNative.Easing.linear),
duration:150}).
start(function(result){
_this3.setState({isVisible:false});
});
}}],[{key:'getDataProps',value:function getDataProps(data,props){var alerts=data.navigation.alerts;var alertState=alerts[props.navigatorUID];return{alertState:alertState};}}]);return ExNavigationAlertBar;}(_react2.default.Component))||_class)||_class);exports.default=ExNavigationAlertBar;


var WINDOW_WIDTH=_reactNative.Dimensions.get('window').width;

var styles=_reactNative.StyleSheet.create({
overflowContainer:{
overflow:'hidden',
elevation:0},

alertBar:{
backgroundColor:'#000',
justifyContent:'center',
alignItems:'center',
flexDirection:'column'},

alertBarInnerContainer:{
paddingVertical:ALERT_TEXT_VERTICAL_MARGIN},

alertText:{
marginHorizontal:ALERT_TEXT_HORIZONTAL_MARGIN,
width:WINDOW_WIDTH-ALERT_TEXT_HORIZONTAL_MARGIN*2,
color:'#fff',
textAlign:'center'}});