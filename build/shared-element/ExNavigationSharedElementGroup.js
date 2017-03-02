Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp2;



var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');





var _uuidJs=require('uuid-js');var _uuidJs2=_interopRequireDefault(_uuidJs);

var _ExNavigationStyles=require('../ExNavigationStyles');var ExNavigationStyles=_interopRequireWildcard(_ExNavigationStyles);
var _ExNavigationSharedElementOverlay=require('./ExNavigationSharedElementOverlay');var _ExNavigationSharedElementOverlay2=_interopRequireDefault(_ExNavigationSharedElementOverlay);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}







var DEFAULT_TRANSITION={
timing:_reactNative.Animated.timing,
easing:_reactNative.Easing.inOut(_reactNative.Easing.ease),
duration:400};var



























SharedElementGroup=(_temp2=_class=function(_Component){_inherits(SharedElementGroup,_Component);function SharedElementGroup(){var _ref;var _temp,_this,_ret;_classCallCheck(this,SharedElementGroup);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=SharedElementGroup.__proto__||Object.getPrototypeOf(SharedElementGroup)).call.apply(_ref,[this].concat(args))),_this),_this.

















state={
visible:false,
elementStyles:{},
transitioningElementGroupToUid:null,
transitioningElementGroupFromUid:null},_this.


_elements={},_this.
_isMounted=true,_this.
_store=_this.context.sharedElementStore,_this.
_uid=_uuidJs2.default.create(1).toString(),_this.

_sceneIndex=_this.context.scene.index,_this.
















































































































_onTransitionStart=function(
transitionProps,
prevTransitionProps)

{var isTransitionTo=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;
if(!_this._isMounted){
return;
}var

scene=transitionProps.scene;var
prevScene=prevTransitionProps.scene;

if(scene.index!==_this._sceneIndex&&prevScene.index!==_this._sceneIndex){
return;
}

requestAnimationFrame(function(){
var store=_this.context.sharedElementStore;






if(isTransitionTo){

Promise.all(Object.values(_this._elements).map(function(e){return e.measure();})).then(function(){
store.dispatch({
type:'TRANSITION_TO_VIEW_READY'});

});

if(_this.props.onTransitionStart){
_this.props.onTransitionStart(transitionProps,prevTransitionProps);
}
return;
}

var state=store.getState();

var possibleOtherGroups=void 0;
if(scene.index>prevScene.index){
possibleOtherGroups=_lodash2.default.filter(
state.elementGroups,
function(group){return group.routeKey===scene.route.key&&group.sceneIndex===scene.index;});

}else{
possibleOtherGroups=_lodash2.default.filter(
state.elementGroups,
function(group){return group.routeKey===prevScene.route.key&&group.sceneIndex===prevScene.index;});

}
var otherGroup=_lodash2.default.find(possibleOtherGroups,function(group){return group.id===_this.props.id;});
if(!otherGroup){
return;
}

if(_this.props.onTransitionStart){
_this.props.onTransitionStart(transitionProps,prevTransitionProps);
}
if(otherGroup.style.onTransitionStart){
otherGroup.style.onTransitionStart(transitionProps,prevTransitionProps,true);
}


Promise.all(Object.values(_this._elements).map(function(e){return e.measure();})).then(function(){
store.dispatch({
type:'START_TRANSITION_FOR_ELEMENT_GROUPS',
fromUid:scene.index>prevScene.index?_this._uid:otherGroup.uid,
toUid:scene.index>prevScene.index?otherGroup.uid:_this._uid,
progress:transitionProps.progress});

});
});
},_this.

_onTransitionEnd=function(
transitionProps,
prevTransitionProps)

{var isTransitionTo=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var
scene=transitionProps.scene;var
prevScene=prevTransitionProps.scene;

if(scene.index!==_this._sceneIndex&&prevScene.index!==_this._sceneIndex){
return;
}

if(isTransitionTo){
if(_this.props.onTransitionEnd){
_this.props.onTransitionEnd(transitionProps,prevTransitionProps);
}
return;
}

var store=_this.context.sharedElementStore;
var state=store.getState();
var otherUid=scene.index>prevScene.index?
_this.state.transitioningElementGroupToUid:
_this.state.transitioningElementGroupFromUid;
var otherGroup=state.elementGroups[otherUid];
if(!otherGroup){
return;
}

store.dispatch({
type:'END_TRANSITION_FOR_ELEMENT_GROUPS'});


if(_this.props.onTransitionEnd){
_this.props.onTransitionEnd(transitionProps,prevTransitionProps);
}
if(otherGroup.style.onTransitionEnd){
otherGroup.style.onTransitionEnd(transitionProps,prevTransitionProps,true);
}
},_this.

_configureTransition=function(
a,
b)
{
var userTransition=_this.props.configureTransition?
_this.props.configureTransition(a,b):
DEFAULT_TRANSITION;var
userTiming=userTransition.timing;

var timing=function timing(){
var timingFn=userTiming?
userTiming.apply(undefined,arguments):
_reactNative.Animated.timing.apply(_reactNative.Animated,arguments);
return{
start:function start(cb){


setTimeout(function(){return timingFn.start(cb);},100);
},
stop:function stop(){
timingFn.stop();
}};

};

return _extends({},
userTransition,{
timing:timing});

},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(SharedElementGroup,[{key:'getChildContext',value:function getChildContext(){return{elementGroupUid:this._uid};}},{key:'componentWillMount',value:function componentWillMount(){var _this2=this;this._unsubscribe=this._store.subscribe(function(){var storeState=_this2._store.getState();if(storeState.transitioningElementGroupFromUid===_this2.state.transitioningElementGroupFromUid&&storeState.transitioningElementGroupToUid===_this2.state.transitioningElementGroupToUid){return;}if(!_this2._isMounted){return;}_this2.setState({transitioningElementGroupToUid:storeState.transitioningElementGroupToUid,transitioningElementGroupFromUid:storeState.transitioningElementGroupFromUid});});if(this.state.transitioningElementGroupToUid===null){this.setState({visible:true});}}},{key:'componentDidMount',value:function componentDidMount(){var _context=this.context;var store=_context.sharedElementStore;var scene=_context.scene;store.dispatch({type:'REGISTER_GROUP',uid:this._uid,id:this.props.id,routeKey:scene.route.key,sceneIndex:scene.index,style:{configureTransition:this._configureTransition,sceneAnimations:this.props.sceneAnimations||ExNavigationStyles.Fade.sceneAnimations,gestures:null,navigationBarAnimations:this.props.navigationBarAnimations||ExNavigationStyles.Fade.navigationBarAnimations,onTransitionStart:this._onTransitionStart,onTransitionEnd:this._onTransitionEnd},elements:_react.Children.map(this.props.children,function(child){if(__DEV__&&child.type.name!=='SharedElement'){throw new Error('All children of a SharedElementGroup must be SharedElements.');}return child;})});}},{key:'componentWillUpdate',value:function componentWillUpdate(nextProps,nextState){var _this3=this;if(this.state.transitioningElementGroupToUid!==nextState.transitioningElementGroupToUid||this.state.transitioningElementGroupFromUid!==nextState.transitioningElementGroupFromUid){if(this._uid===nextState.transitioningElementGroupToUid||this._uid===nextState.transitioningElementGroupFromUid){setTimeout(function(){_this3.setState({visible:false});},100);}else{this.setState({visible:true});}}}},{key:'componentWillUnmount',value:function componentWillUnmount(){var _this4=this;this._isMounted=false;if(this._unsubscribe){this._unsubscribe();this._unsubscribe=null;}var store=this.context.sharedElementStore;requestAnimationFrame(function(){store.dispatch({type:'UNREGISTER_GROUP',uid:_this4._uid});});}},{key:'render',value:function render(){var _this5=this;var style={opacity:this.state.visible?1:0};return _react2.default.createElement(_reactNative.View,{style:style},_react.Children.map(this.props.children,function(child){return(0,_react.cloneElement)(child,{ref:function ref(c){_this5._elements[child.props.id]=c;}});}));}}],[{key:'getRouteStyle',value:function getRouteStyle(transitionGroupEl){var state=_ExNavigationSharedElementOverlay2.default.getStore().getState();return _extends({},state.elementGroups[transitionGroupEl._uid].style);}}]);return SharedElementGroup;}(_react.Component),_class.contextTypes={sharedElementStore:_react.PropTypes.any,scene:_react.PropTypes.object},_class.childContextTypes={elementGroupUid:_react.PropTypes.string},_temp2);exports.default=SharedElementGroup;