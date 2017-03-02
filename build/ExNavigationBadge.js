Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp;



var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

















Badge=(_temp=_class=function(_React$Component){_inherits(Badge,_React$Component);



function Badge(props,context){_classCallCheck(this,Badge);var _this=_possibleConstructorReturn(this,(Badge.__proto__||Object.getPrototypeOf(Badge)).call(this,
props,context));_this.




state={
computedSize:null};_this._handleLayout=_this._handleLayout.bind(_this);return _this;}_createClass(Badge,[{key:'render',value:function render()


{var
computedSize=this.state.computedSize;
var style={};
if(!computedSize){
style.opacity=0;
}else{
style.width=Math.max(computedSize.height,computedSize.width);
style.borderRadius=style.width/2.0;
}

return(
_react2.default.createElement(_reactNative.View,_extends({},
this.props,{
onLayout:this._handleLayout,
style:[styles.container,this.props.style,style]}),
_react2.default.createElement(_reactNative.Text,{
numberOfLines:1,
style:[styles.textStyle,this.props.textStyle]},
this.props.children)));



}},{key:'_handleLayout',value:function _handleLayout(

event){var _event$nativeEvent$la=
event.nativeEvent.layout;var width=_event$nativeEvent$la.width;var height=_event$nativeEvent$la.height;var
computedSize=this.state.computedSize;
if(computedSize&&computedSize.height===height&&
computedSize.width===width){
return;
}

this.setState({
computedSize:{
width:width,height:height}});



if(this.props.onLayout){
this.props.onLayout(event);
}
}}]);return Badge;}(_react2.default.Component),_class.propTypes=_reactNative.Text.propTypes,_temp);exports.default=Badge;


var styles=_reactNative.StyleSheet.create({
container:{
backgroundColor:'rgb(0, 122, 255)',
borderWidth:1+_reactNative.StyleSheet.hairlineWidth,
borderColor:'#fefefe',
borderRadius:17/2,
overflow:'hidden',
alignItems:'center',
justifyContent:'center',
padding:1},

textStyle:{
fontSize:12,
color:'#fff',
textAlign:'center',
lineHeight:15,
marginBottom:2}});