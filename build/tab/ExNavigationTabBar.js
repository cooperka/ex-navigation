Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp;var _react=require('react');var _react2=_interopRequireDefault(_react);

var _reactNative=require('react-native');







var _ExUnsupportedNativeView=require('../ExUnsupportedNativeView');










var _ExNavigationBadge=require('../ExNavigationBadge');var _ExNavigationBadge2=_interopRequireDefault(_ExNavigationBadge);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Components=void 0;if(global.__exponent){Components=global.__exponent.Components;}else{Components={BlurView:(0,_ExUnsupportedNativeView.unsupportedNativeView)('BlurView')};}

var DEFAULT_TAB_BAR_HEIGHT=56;var

ExNavigationTabBar=(_temp=_class=function(_React$Component){_inherits(ExNavigationTabBar,_React$Component);function ExNavigationTabBar(){_classCallCheck(this,ExNavigationTabBar);return _possibleConstructorReturn(this,(ExNavigationTabBar.__proto__||Object.getPrototypeOf(ExNavigationTabBar)).apply(this,arguments));}_createClass(ExNavigationTabBar,[{key:'render',value:function render()


{
var height=this.props.height||DEFAULT_TAB_BAR_HEIGHT;
var isTranslucent=this.props.translucent;
var backgroundColor=isTranslucent?'rgba(255,255,255,0.5)':'#fefefe';

return(
_react2.default.createElement(_reactNative.View,{style:[styles.container,{height:height}]},
isTranslucent&&
_react2.default.createElement(Components.BlurView,{style:[styles.translucentUnderlay,{height:height}]}),

_react2.default.createElement(_reactNative.View,{style:[styles.innerContainer,{backgroundColor:backgroundColor},this.props.style]},
_react2.default.createElement(_reactNative.View,{style:styles.itemContainer},
this.renderTabItems()))));




}},{key:'renderTabItems',value:function renderTabItems()

{var _this2=this;
if(!this.props.items){
return null;
}

return this.props.items.map(function(item,index){var
renderIcon=item.renderIcon;var renderTitle=item.renderTitle;
var isSelected=_this2.props.selectedTab===item.id;

var title=null;
if(item.title){
if(renderTitle){
title=renderTitle(isSelected,item.title,index);
}else{
title=_react2.default.createElement(_reactNative.Text,null,item.title);
}
}

var icon=renderIcon&&renderIcon(isSelected,item.title,index);

var badge=null;var

renderBadge=item.renderBadge;var badgeText=item.badgeText;

if(renderBadge){
badge=renderBadge(isSelected,item.title,index);
}else if(badgeText){
badge=
_react2.default.createElement(_ExNavigationBadge2.default,{style:styles.badge},badgeText);

}

if(item.showsTouches){
return(
_react2.default.createElement(_reactNative.TouchableNativeFeedback,{
key:index,
onPress:item.onPress,
onLongPress:item.onLongPress,
delayPressIn:0,
style:[styles.tabItem,isSelected?item.selectedStyle:item.style],
background:item.nativeFeedbackBackground},
title,
icon,
badge));


}else{
return(
_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{
key:index,
onPress:item.onPress,
delayPressIn:0,
onLongPress:item.onLongPress},
_react2.default.createElement(_reactNative.View,{style:[styles.tabItem,isSelected?item.selectedStyle:item.style]},
icon,
badge,
title)));



}
});
}}]);return ExNavigationTabBar;}(_react2.default.Component),_class.defaultHeight=DEFAULT_TAB_BAR_HEIGHT,_temp);exports.default=ExNavigationTabBar;


var styles=_reactNative.StyleSheet.create({
container:{
position:'absolute',
bottom:0,
left:0,
right:0,
backgroundColor:'transparent'},

translucentUnderlay:{
position:'absolute',
top:0,
left:0,
right:0,
bottom:0},

innerContainer:{
position:'absolute',
top:0,
left:0,
right:0,
bottom:0,
borderTopColor:'#b2b2b2',
borderTopWidth:_reactNative.StyleSheet.hairlineWidth},

badge:{
position:'absolute',
top:3,
right:18,
backgroundColor:'black'},

itemContainer:{
flex:1,
flexDirection:'row'},

tabItem:{
flex:1,
alignItems:'center',
justifyContent:'center'}});