Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp2;



var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');



var _invariant=require('invariant');var _invariant2=_interopRequireDefault(_invariant);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var












SharedElement=(_temp2=_class=function(_Component){_inherits(SharedElement,_Component);function SharedElement(){var _ref;var _temp,_this,_ret;_classCallCheck(this,SharedElement);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=SharedElement.__proto__||Object.getPrototypeOf(SharedElement)).call.apply(_ref,[this].concat(args))),_this),_this.






_el=null,_this.


























getAnimationStyle=function(progress,fromMetrics,toMetrics){
var initialScaleX=fromMetrics.width/toMetrics.width;
var initialScaleY=fromMetrics.height/toMetrics.height;

return{
position:'absolute',
top:0,
left:0,
right:null,
bottom:null,
width:toMetrics.width,
height:toMetrics.height,
marginLeft:0,
marginRight:0,
marginTop:0,
marginBottom:0,
transform:[
{translateX:progress.interpolate({
inputRange:[0,1],
outputRange:[
(fromMetrics.width-toMetrics.width)/2+fromMetrics.x,
toMetrics.x]})},


{translateY:progress.interpolate({
inputRange:[0,1],
outputRange:[
(fromMetrics.height-toMetrics.height)/2+fromMetrics.y,
toMetrics.y]})},


{scaleX:progress.interpolate({
inputRange:[0,1],
outputRange:[initialScaleX,1]})},

{scaleY:progress.interpolate({
inputRange:[0,1],
outputRange:[initialScaleY,1]})}]};



},_this.

measure=function(){
return new Promise(function(resolve){


if(!_this.context.elementGroupUid){
resolve();
return;
}

_reactNative.UIManager.measure(
(0,_reactNative.findNodeHandle)(_this._el),
function(origX,origY,width,height,x,y){
var store=_this.context.sharedElementStore;
store.dispatch({
type:'UPDATE_METRICS_FOR_ELEMENT',
groupUid:_this.context.elementGroupUid,
id:_this.props.id,
metrics:{x:x,y:y,width:width,height:height}});

resolve();
});

});
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(SharedElement,[{key:'render',value:function render(){var _this2=this;var childFn=this.props.children;var animationStyle={};if(this.props.transitionProps&&this.props.transitionProps.progress&&this.props.transitionProps.fromMetrics&&this.props.transitionProps.toMetrics){var _props$transitionProp=this.props.transitionProps;var progress=_props$transitionProp.progress;var fromMetrics=_props$transitionProp.fromMetrics;var toMetrics=_props$transitionProp.toMetrics;animationStyle=this.getAnimationStyle(progress,fromMetrics,toMetrics);}(0,_invariant2.default)(childFn,'Must pass a function as a child to `SharedElement`.');var childEl=childFn(animationStyle);return(0,_react.cloneElement)(childEl,{ref:function ref(c){_this2._el=c;},collapsable:false,onLayout:this.measure});}}]);return SharedElement;}(_react.Component),_class.contextTypes={sharedElementStore:_react.PropTypes.any,elementGroupUid:_react.PropTypes.any},_temp2);exports.default=SharedElement;