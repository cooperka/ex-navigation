Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _class,_class3,_temp2;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');








var _PureComponent5=require('./utils/PureComponent');var _PureComponent6=_interopRequireDefault(_PureComponent5);
var _ExUnsupportedNativeView=require('./ExUnsupportedNativeView');
var _ExNavigationComponents=require('./ExNavigationComponents');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Components=void 0;
if(global.__exponent){
Components=global.__exponent.Components;
}else{
Components={
BlurView:(0,_ExUnsupportedNativeView.unsupportedNativeView)('BlurView')};

}




var STATUSBAR_HEIGHT=_reactNative.Platform.OS==='ios'?20:global.__exponent?24:0;

var APPBAR_HEIGHT=_reactNative.Platform.OS==='ios'?44:55;
var BACKGROUND_COLOR=_reactNative.Platform.OS==='ios'?'#EFEFF2':'#FFF';
var BORDER_BOTTOM_COLOR='rgba(0, 0, 0, .15)';
var BORDER_BOTTOM_WIDTH=_reactNative.Platform.OS==='ios'?_reactNative.StyleSheet.hairlineWidth:0;
var BACK_BUTTON_HIT_SLOP={top:0,bottom:0,left:0,right:30};var

ExNavigationBarTitle=function(_PureComponent){_inherits(ExNavigationBarTitle,_PureComponent);function ExNavigationBarTitle(){_classCallCheck(this,ExNavigationBarTitle);return _possibleConstructorReturn(this,(ExNavigationBarTitle.__proto__||Object.getPrototypeOf(ExNavigationBarTitle)).apply(this,arguments));}_createClass(ExNavigationBarTitle,[{key:'render',value:function render()
{var _props=
this.props;var children=_props.children;var style=_props.style;var textStyle=_props.textStyle;var tintColor=_props.tintColor;

return(
_react2.default.createElement(_reactNative.View,{style:[titleStyles.title,style]},
_react2.default.createElement(_reactNative.Text,{numberOfLines:1,style:[
titleStyles.titleText,
tintColor?{color:tintColor}:null,
textStyle]},

children)));



}}]);return ExNavigationBarTitle;}(_PureComponent6.default);


var titleStyles=_reactNative.StyleSheet.create({
title:{
flex:1,
flexDirection:'row',
alignItems:'center',
marginHorizontal:16},


titleText:_extends({
flex:1,
color:'rgba(0, 0, 0, .9)'},
_reactNative.Platform.select({
ios:{
fontSize:17,
fontWeight:'500',
textAlign:'center'},

android:{
fontSize:20,

textAlign:'left'}}))});var






ExNavigationBarBackButton=(0,_ExNavigationComponents.withNavigation)(_class=function(_PureComponent2){_inherits(ExNavigationBarBackButton,_PureComponent2);function ExNavigationBarBackButton(){var _ref;var _temp,_this2,_ret;_classCallCheck(this,ExNavigationBarBackButton);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this2=_possibleConstructorReturn(this,(_ref=ExNavigationBarBackButton.__proto__||Object.getPrototypeOf(ExNavigationBarBackButton)).call.apply(_ref,[this].concat(args))),_this2),_this2.

















_onPress=function(){return _this2.props.navigator.pop();},_temp),_possibleConstructorReturn(_this2,_ret);}_createClass(ExNavigationBarBackButton,[{key:'render',value:function render(){var tintColor=this.props.tintColor;return _react2.default.createElement(_reactNative.TouchableOpacity,{onPress:this._onPress,hitSlop:BACK_BUTTON_HIT_SLOP,style:buttonStyles.buttonContainer},_react2.default.createElement(_reactNative.Image,{style:[buttonStyles.button,tintColor?{tintColor:tintColor}:null],source:require('./ExNavigationAssets').backIcon}));}}]);return ExNavigationBarBackButton;}(_PureComponent6.default))||_class;var


ExNavigationBarMenuButton=function(_PureComponent3){_inherits(ExNavigationBarMenuButton,_PureComponent3);function ExNavigationBarMenuButton(){_classCallCheck(this,ExNavigationBarMenuButton);return _possibleConstructorReturn(this,(ExNavigationBarMenuButton.__proto__||Object.getPrototypeOf(ExNavigationBarMenuButton)).apply(this,arguments));}_createClass(ExNavigationBarMenuButton,[{key:'render',value:function render()
{var _this4=this;var
tintColor=this.props.tintColor;

return(
_react2.default.createElement(_reactNative.TouchableOpacity,{style:buttonStyles.buttonContainer,onPress:function onPress(){return _this4.props.navigator.toggleDrawer();}},
_react2.default.createElement(_reactNative.Image,{
style:[buttonStyles.menuButton,tintColor?{tintColor:tintColor}:null],
source:require('./ExNavigationAssets').menuIcon})));



}}]);return ExNavigationBarMenuButton;}(_PureComponent6.default);


var buttonStyles=_reactNative.StyleSheet.create({
buttonContainer:{
flex:1,
flexDirection:'row',
alignItems:'center',
justifyContent:'center'},

button:_extends({
resizeMode:'contain'},
_reactNative.Platform.select({
ios:{
height:21,
width:13,
marginLeft:8,
marginRight:6},

android:{
height:24,
width:24,
margin:16}})),



menuButton:_extends({
resizeMode:'contain'},
_reactNative.Platform.select({
ios:{
height:26,
width:26,
marginLeft:8,
marginRight:6},

android:{
height:24,
width:24,
margin:16}}))});var





ExNavigationBar=(_temp2=_class3=function(_PureComponent4){_inherits(ExNavigationBar,_PureComponent4);




















function ExNavigationBar(props,context){_classCallCheck(this,ExNavigationBar);var _this5=_possibleConstructorReturn(this,(ExNavigationBar.__proto__||Object.getPrototypeOf(ExNavigationBar)).call(this,
props,context));
_this5.state={
visible:props.visible,
delta:0};return _this5;

}_createClass(ExNavigationBar,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){
if(this.props.visible!==nextProps.visible&&nextProps.visible){
this.setState({
visible:true});

}

if(this.props.navigationState.index!==nextProps.navigationState.index){
this.setState({
delta:nextProps.navigationState.index-this.props.navigationState.index});

}else{
this.setState({
delta:0});

}
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this.props.position.removeListener(this._positionListener);
}},{key:'render',value:function render()

{var _this6=this;
if(!this.state.visible){
return null;
}var _props2=

this.props;var scenes=_props2.scenes;var style=_props2.style;

var scenesProps=scenes.map(function(scene){
var props=extractSceneRendererProps(_this6.props);
props.scene=scene;
return props;
});


var height=this.props.barHeight+this.props.statusBarHeight;

var styleFromRouteConfig=this.props.latestRoute.getBarStyle();
var isTranslucent=!!this.props.latestRoute.getTranslucent();
var translucentTint=this.props.latestRoute.getTranslucentTint();
var backgroundStyle=isTranslucent?styles.appbarTranslucent:styles.appbarSolid;
var containerStyle=[styles.appbar,backgroundStyle,style,{height:height},styleFromRouteConfig];

if(this.props.overrideStyle){
containerStyle=[style];
}

containerStyle.push(this.props.interpolator.forContainer(this.props,this.state.delta));

var leftComponents=scenesProps.map(this._renderLeft,this);
var rightComponents=scenesProps.map(this._renderRight,this);
var titleComponents=scenesProps.map(function(props,i){
return _this6._renderTitle(props,{
hasLeftComponent:leftComponents&&!!leftComponents[i],
hasRightComponent:rightComponents&&!!rightComponents[i]});

});

var backgroundComponents=scenesProps.map(this._renderBackground,this);
var wrapperStyle=[styles.wrapper,{paddingTop:APPBAR_HEIGHT+this.props.statusBarHeight}];

return(
_react2.default.createElement(_reactNative.View,{pointerEvents:this.props.visible?'auto':'none',style:wrapperStyle},
isTranslucent&&
_react2.default.createElement(Components.BlurView,{
tint:translucentTint,
intensity:100,
style:[styles.translucentUnderlay,{height:height}]}),



_react2.default.createElement(_reactNative.Animated.View,{style:containerStyle},
backgroundComponents,
_react2.default.createElement(_reactNative.View,{style:[styles.appbarInnerContainer,{top:this.props.statusBarHeight}]},
titleComponents,
leftComponents,
rightComponents))));




}},{key:'_renderBackground',value:function _renderBackground(

props,options){
return this._renderSubView(
props,
'background',
this.props.renderBackgroundComponent,
options);

}},{key:'_renderLeft',value:function _renderLeft(

props){
return this._renderSubView(
props,
'left',
this.props.renderLeftComponent,
this.props.interpolator.forLeft);

}},{key:'_renderTitle',value:function _renderTitle(

props,options){
return this._renderSubView(
props,
'title',
this.props.renderTitleComponent,
this.props.interpolator.forCenter,
options);

}},{key:'_renderRight',value:function _renderRight(

props){
return this._renderSubView(
props,
'right',
this.props.renderRightComponent,
this.props.interpolator.forRight);

}},{key:'_renderSubView',value:function _renderSubView(


props,
name,
renderer,
styleInterpolator)

{var options=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{};var

scene=

props.scene;var navigationState=props.navigationState;var


index=


scene.index;var isStale=scene.isStale;var key=scene.key;

var offset=navigationState.index-index;

if(Math.abs(offset)>2){


return null;
}

var subView=renderer(props);
if(subView===null){
return null;
}

var layoutStyle=void 0;
if(name==='title'&&_reactNative.Platform.OS==='android'){
layoutStyle={};

if(options.hasLeftComponent){
layoutStyle.left=APPBAR_HEIGHT;
}
if(options.hasRightComponent){
layoutStyle.right=APPBAR_HEIGHT;
}
}

var pointerEvents=offset!==0||isStale?'none':'box-none';

if(name==='background'){
return(
_react2.default.createElement(_reactNative.View,{
pointerEvents:'none',
key:name+'_'+key,
style:[
styles[name],
layoutStyle]},

subView));


}

return(
_react2.default.createElement(_reactNative.Animated.View,{
pointerEvents:pointerEvents,
key:name+'_'+key,
style:[
styles[name],
layoutStyle,
styleInterpolator(props)]},

subView));


}}]);return ExNavigationBar;}(_PureComponent6.default),_class3.defaultProps={renderTitleComponent:function renderTitleComponent(props){var navigationState=props.navigationState;var title=String(navigationState.title||'');return _react2.default.createElement(ExNavigationBarTitle,null,title);},barHeight:APPBAR_HEIGHT,statusBarHeight:STATUSBAR_HEIGHT},_class3.propTypes={renderLeftComponent:_react.PropTypes.func,renderRightComponent:_react.PropTypes.func,renderTitleComponent:_react.PropTypes.func,renderBackgroundComponent:_react.PropTypes.func,barHeight:_react.PropTypes.number.isRequired,statusBarHeight:_react.PropTypes.number.isRequired,style:_reactNative.View.propTypes.style},_temp2);exports.default=ExNavigationBar;


ExNavigationBar.DEFAULT_HEIGHT=APPBAR_HEIGHT+STATUSBAR_HEIGHT;
ExNavigationBar.DEFAULT_HEIGHT_WITHOUT_STATUS_BAR=APPBAR_HEIGHT;
ExNavigationBar.DEFAULT_BACKGROUND_COLOR=BACKGROUND_COLOR;
ExNavigationBar.DEFAULT_BORDER_BOTTOM_COLOR=BORDER_BOTTOM_COLOR;
ExNavigationBar.DEFAULT_BORDER_BOTTOM_WIDTH=BORDER_BOTTOM_WIDTH;
ExNavigationBar.Title=ExNavigationBarTitle;
ExNavigationBar.BackButton=ExNavigationBarBackButton;
ExNavigationBar.MenuButton=ExNavigationBarMenuButton;

var styles=_reactNative.StyleSheet.create({
wrapper:{
position:'absolute',
top:0,
left:0,
right:0,


paddingBottom:_reactNative.Platform.OS==='android'?16:0},


wrapperWithoutAppbar:{
paddingTop:0},


translucentUnderlay:{
position:'absolute',
top:0,
left:0,
right:0,
bottom:0},


appbar:{
alignItems:'center',
borderBottomColor:ExNavigationBar.DEFAULT_BORDER_BOTTOM_COLOR,
borderBottomWidth:ExNavigationBar.DEFAULT_BORDER_BOTTOM_WIDTH,
elevation:4,
flexDirection:'row',
justifyContent:'flex-start',
left:0,
position:'absolute',
right:0,
top:0},

appbarSolid:{
backgroundColor:ExNavigationBar.DEFAULT_BACKGROUND_COLOR},

appbarTranslucent:{
backgroundColor:'rgba(255,255,255,0.7)'},

appbarInnerContainer:{
position:'absolute',
left:0,
right:0,
bottom:0},

title:{
bottom:0,
position:'absolute',
top:0,

left:0,
right:0,
backgroundColor:'transparent'},


left:{
bottom:0,
left:0,
position:'absolute',
top:0},


right:{
bottom:0,
position:'absolute',
right:0,
top:0},


background:{
top:0,
left:0,
right:0,
bottom:0,
position:'absolute'}});



function extractSceneRendererProps(props){
return{
layout:props.layout,
navigationState:props.navigationState,
onNavigate:props.onNavigate,
position:props.position,
scene:props.scene,
scenes:props.scenes};

}