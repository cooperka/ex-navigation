Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');







var _reactNativeDrawerLayout=require('react-native-drawer-layout');var _reactNativeDrawerLayout2=_interopRequireDefault(_reactNativeDrawerLayout);
var _reactNativeTouchableNativeFeedbackSafe=require('@exponent/react-native-touchable-native-feedback-safe');var _reactNativeTouchableNativeFeedbackSafe2=_interopRequireDefault(_reactNativeTouchableNativeFeedbackSafe);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var














ExNavigationDrawerLayout=function(_React$Component){_inherits(ExNavigationDrawerLayout,_React$Component);function ExNavigationDrawerLayout(){var _ref;var _temp,_this,_ret;_classCallCheck(this,ExNavigationDrawerLayout);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=ExNavigationDrawerLayout.__proto__||Object.getPrototypeOf(ExNavigationDrawerLayout)).call.apply(_ref,[this].concat(args))),_this),_this.

state={isOpen:false},_this.




























_renderNavigationView=function(){
return(
_react2.default.createElement(_reactNative.View,{style:[styles.navigationViewContainer,_this.props.style]},
_react2.default.createElement(_reactNative.View,null,
_this.props.renderHeader()),


_react2.default.createElement(_reactNative.ScrollView,{contentContainerStyle:styles.navigationViewScrollableContentContainer},
_this._renderDrawerItems())));



},_this.

_renderDrawerItems=function(){
if(!_this.props.items){
return null;
}

return _this.props.items.map(function(item,index){var
renderIcon=item.renderIcon;var renderTitle=item.renderTitle;var renderRight=item.renderRight;
var isSelected=_this.props.selectedItem===item.id;
var icon=renderIcon&&renderIcon(isSelected);
var title=renderTitle&&renderTitle(isSelected);
var rightElement=renderRight&&renderRight(isSelected);

if(item.showsTouches!==false){
return(
_react2.default.createElement(_reactNativeTouchableNativeFeedbackSafe2.default,{
key:index,
onPress:function onPress(){_this._handlePress(item);},
onLongPress:function onLongPress(){_this._handleLongPress(item);},
delayPressIn:0,
style:[isSelected?item.selectedStyle:item.style],
background:item.nativeFeedbackBackground},
_react2.default.createElement(_reactNative.View,{style:styles.buttonContainer},

icon&&_react2.default.createElement(_reactNative.View,{style:[styles.elementContainer]},icon),


title&&_react2.default.createElement(_reactNative.View,{style:[styles.elementContainer]},title),


rightElement&&_react2.default.createElement(_reactNative.View,{style:[styles.elementContainer,styles.rightElementContainer]},rightElement))));




}else{
return(
_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{
key:index,
onPress:function onPress(){_this._handlePress(item);},
onLongPress:function onLongPress(){_this._handleLongPress(item);}},
_react2.default.createElement(_reactNative.View,{style:[styles.buttonContainer,isSelected?item.selectedStyle:item.style]},

icon&&_react2.default.createElement(_reactNative.View,{style:[styles.elementContainer]},icon),


title&&_react2.default.createElement(_reactNative.View,{style:[styles.elementContainer]},title),


rightElement&&_react2.default.createElement(_reactNative.View,{style:[styles.elementContainer,styles.rightElementContainer]},rightElement))));




}
});
},_this.




_handlePress=function(item){
item.onPress();
_this._component.closeDrawer();
},_this.

_handleLongPress=function(item){
if(!item.onLongPress){
return;
}

item.onLongPress();
_this._component.closeDrawer();
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(ExNavigationDrawerLayout,[{key:'render',value:function render(){var _this2=this;var drawerPosition=this.props.drawerPosition;var position=drawerPosition[0].toUpperCase()+drawerPosition.substr(1);return _react2.default.createElement(_reactNativeDrawerLayout2.default,{ref:function ref(component){_this2._component=component;},onDrawerClose:function onDrawerClose(){_this2.setState({isOpen:false});},onDrawerOpen:function onDrawerOpen(){_this2.setState({isOpen:true});},drawerBackgroundColor:this.props.drawerBackgroundColor,drawerWidth:this.props.width,drawerPosition:_reactNativeDrawerLayout2.default.positions[position],renderNavigationView:this.props.renderNavigationView||this._renderNavigationView},this.props.children);}},{key:'toggle',value:function toggle(){if(this.state.isOpen){this._component.closeDrawer();}else{this._component.openDrawer();}}}]);return ExNavigationDrawerLayout;}(_react2.default.Component);exports.default=ExNavigationDrawerLayout;


var styles=_reactNative.StyleSheet.create({
navigationViewContainer:{
flex:1,
backgroundColor:'#fff'},

navigationViewScrollableContentContainer:{
paddingTop:8},

buttonContainer:{
flex:1,
flexDirection:'row',
justifyContent:'flex-start',
alignItems:'center',
paddingVertical:10,
paddingHorizontal:15},

elementContainer:{
flexDirection:'row',
justifyContent:'flex-start',
alignItems:'center'},

rightElementContainer:{
flex:1,
justifyContent:'flex-end'}});