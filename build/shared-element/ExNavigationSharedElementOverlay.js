Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp;



var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');





var _redux=require('redux');
var _storeShape=require('react-redux/lib/utils/storeShape');var _storeShape2=_interopRequireDefault(_storeShape);

var _ExNavigationSharedElementReducer=require('./ExNavigationSharedElementReducer');var _ExNavigationSharedElementReducer2=_interopRequireDefault(_ExNavigationSharedElementReducer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}













var sharedElementStore=(0,_redux.createStore)(_ExNavigationSharedElementReducer2.default);var

SharedElementOverlay=(_temp=_class=function(_React$Component){_inherits(SharedElementOverlay,_React$Component);_createClass(SharedElementOverlay,null,[{key:'getStore',value:function getStore()
{
return sharedElementStore;
}}]);


















function SharedElementOverlay(props){_classCallCheck(this,SharedElementOverlay);var _this=_possibleConstructorReturn(this,(SharedElementOverlay.__proto__||Object.getPrototypeOf(SharedElementOverlay)).call(this,
props));_this.state={visible:false,elementGroups:{},transitioningElementGroupFromUid:null,transitioningElementGroupToUid:null,progress:null};

_this._store=SharedElementOverlay.getStore();return _this;
}_createClass(SharedElementOverlay,[{key:'getChildContext',value:function getChildContext()

{
return{
sharedElementStore:this._store};

}},{key:'componentDidMount',value:function componentDidMount()

{var _this2=this;
this._unsubscribe=this._store.subscribe(function(){
var state=_this2._store.getState();
_this2.setState(_extends({},
state,{
visible:state.transitioningElementGroupFromUid&&
state.transitioningElementGroupToUid&&state.toViewReady}));

});

this._store.dispatch({
type:'SET_OVERLAY_HANDLE',
handle:(0,_reactNative.findNodeHandle)(this._innerViewRef)});

}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this._unsubscribe&&this._unsubscribe();
}},{key:'render',value:function render()

{var _this3=this;
var overlay=null;

if(this.state.visible){
overlay=this._renderOverlay();
}

return(
_react2.default.createElement(_reactNative.View,{ref:function ref(c){_this3._innerViewRef=c;},style:{flex:1}},
this.props.children,
overlay));


}},{key:'_renderOverlay',value:function _renderOverlay()

{var _this4=this;
var transitioningFromElementGroup=this.state.elementGroups[this.state.transitioningElementGroupFromUid];
var transitioningToElementGroup=this.state.elementGroups[this.state.transitioningElementGroupToUid];


var commonElements=transitioningToElementGroup.elements.filter(function(e1){return(
transitioningFromElementGroup.elements.some(function(e2){return e1.props.id===e2.props.id;}));});


return(
_react2.default.createElement(_reactNative.View,{style:styles.overlay},
commonElements.map(function(e,i){
var fromMetrics=transitioningFromElementGroup.elementMetrics[e.props.id];
var toMetrics=transitioningToElementGroup.elementMetrics[e.props.id];
if(!toMetrics){
throw new Error('Cannot transition element with id \''+e.props.id+'\'. No matching element found in next route.');
}
return(0,_react.cloneElement)(e,{
key:i,
transitionProps:{
progress:_this4.state.progress,
fromMetrics:fromMetrics,
toMetrics:toMetrics}});


})));


}}]);return SharedElementOverlay;}(_react2.default.Component),_class.childContextTypes={sharedElementStore:_storeShape2.default},_temp);exports.default=SharedElementOverlay;


var styles=_reactNative.StyleSheet.create({
overlay:{
position:'absolute',
top:0,
bottom:0,
left:0,
right:0}});