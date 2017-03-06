Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp;var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');




var _PureComponent2=require('./utils/PureComponent');var _PureComponent3=_interopRequireDefault(_PureComponent2);

var _ExNavigationStyles=require('./ExNavigationStyles');var NavigationStyles=_interopRequireWildcard(_ExNavigationStyles);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

SceneView=(_temp=_class=function(_React$Component){_inherits(SceneView,_React$Component);function SceneView(){_classCallCheck(this,SceneView);return _possibleConstructorReturn(this,(SceneView.__proto__||Object.getPrototypeOf(SceneView)).apply(this,arguments));}_createClass(SceneView,[{key:'getChildContext',value:function getChildContext()










{
return{
scene:this.props.sceneRendererProps.scene};

}},{key:'shouldComponentUpdate',value:function shouldComponentUpdate(

nextProps,nextState){
return(
nextProps.sceneRendererProps.scene.route!==
this.props.sceneRendererProps.scene.route);

}},{key:'render',value:function render()

{
return this.props.sceneRenderer(this.props.sceneRendererProps);
}}]);return SceneView;}(_react2.default.Component),_class.propTypes={sceneRenderer:_react.PropTypes.func.isRequired},_class.childContextTypes={scene:_react.PropTypes.object},_temp);var


ExNavigationStackItem=function(_PureComponent){_inherits(ExNavigationStackItem,_PureComponent);function ExNavigationStackItem(){_classCallCheck(this,ExNavigationStackItem);return _possibleConstructorReturn(this,(ExNavigationStackItem.__proto__||Object.getPrototypeOf(ExNavigationStackItem)).apply(this,arguments));}_createClass(ExNavigationStackItem,[{key:'render',value:function render()
{var _props=








this.props;var sceneAnimations=_props.sceneAnimations;var gestures=_props.gestures;var renderScene=_props.renderScene;var style=_props.style;var navigationState=_props.navigationState;var scene=_props.scene;var props=_objectWithoutProperties(_props,['sceneAnimations','gestures','renderScene','style','navigationState','scene']);

if(sceneAnimations===undefined){

sceneAnimations=NavigationStyles.SlideHorizontal.sceneAnimations(this.props);
}else{
sceneAnimations=sceneAnimations(this.props);
}
if(gestures===undefined){

gestures=NavigationStyles.SlideHorizontal.gestures&&NavigationStyles.SlideHorizontal.gestures(this.props);
}else if(typeof gestures==='function'){
gestures=gestures(this.props);
}

var interactive=navigationState.index===scene.index&&!scene.isStale;
var pointerEvents=interactive?'auto':'none';

return(
_react2.default.createElement(_reactNative.Animated.View,_extends({},
gestures,{
needsOffscreenAlphaCompositing:true,
style:[styles.main,style,sceneAnimations],
pointerEvents:pointerEvents}),
_react2.default.createElement(SceneView,{
sceneRenderer:renderScene,
sceneRendererProps:_extends({},props,{scene:scene})})));



}}]);return ExNavigationStackItem;}(_PureComponent3.default);exports.default=ExNavigationStackItem;


var styles=_reactNative.StyleSheet.create({
main:{
backgroundColor:'white',
bottom:0,
left:0,
position:'absolute',
right:0,
shadowColor:'black',
shadowOffset:{width:0,height:0},
shadowOpacity:0.4,
shadowRadius:10,
top:0}});