Object.defineProperty(exports,"__esModule",{value:true});exports.ExNavigationStackContext=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_dec2,_dec3,_dec4,_desc,_value,_class,_class3,_temp,_initialiseProps;



var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');







var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _invariant=require('invariant');var _invariant2=_interopRequireDefault(_invariant);
var _reactCloneReferencedElement=require('react-clone-referenced-element');var _reactCloneReferencedElement2=_interopRequireDefault(_reactCloneReferencedElement);
var _PureComponent2=require('./utils/PureComponent');var _PureComponent3=_interopRequireDefault(_PureComponent2);
var _coreDecorators=require('core-decorators');

var _ExNavigationActions=require('./ExNavigationActions');var _ExNavigationActions2=_interopRequireDefault(_ExNavigationActions);
var _ExNavigationBar=require('./ExNavigationBar');var _ExNavigationBar2=_interopRequireDefault(_ExNavigationBar);
var _ExNavigationStackItem=require('./ExNavigationStackItem');var _ExNavigationStackItem2=_interopRequireDefault(_ExNavigationStackItem);

var _ExNavigationBackButtonManager=require('./ExNavigationBackButtonManager');
var _ExNavigationComponents=require('./ExNavigationComponents');
var _ExNavigatorContext2=require('./ExNavigatorContext');var _ExNavigatorContext3=_interopRequireDefault(_ExNavigatorContext2);
var _ExNavigationAlertBar=require('./ExNavigationAlertBar');var _ExNavigationAlertBar2=_interopRequireDefault(_ExNavigationAlertBar);
var _ExNavigationStyles=require('./ExNavigationStyles');var NavigationStyles=_interopRequireWildcard(_ExNavigationStyles);
var _ExNavigationSharedElementGroup=require('./shared-element/ExNavigationSharedElementGroup');var _ExNavigationSharedElementGroup2=_interopRequireDefault(_ExNavigationSharedElementGroup);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}var


NavigationTransitioner=_reactNative.NavigationExperimental.Transitioner;










var DEFAULT_ROUTE_CONFIG={
styles:_reactNative.Platform.OS==='ios'?NavigationStyles.SlideHorizontal:NavigationStyles.Fade};


var DEFAULT_STATUSBAR_HEIGHT=_reactNative.Platform.OS==='ios'?20:25;
var STATUSBAR_HEIGHT=_reactNative.Platform.OS==='ios'?
DEFAULT_STATUSBAR_HEIGHT:
global.__exponent?DEFAULT_STATUSBAR_HEIGHT:0;
















































var ROUTE_LISTENER_INDEX=0;var





ExNavigationStackContext=exports.ExNavigationStackContext=(_dec=


























(0,_coreDecorators.debounce)(500,true),_dec2=























(0,_coreDecorators.debounce)(500,true),_dec3=






(0,_coreDecorators.debounce)(500,true),_dec4=






(0,_coreDecorators.debounce)(500,true),(_class=function(_ExNavigatorContext){_inherits(ExNavigationStackContext,_ExNavigatorContext);function ExNavigationStackContext(navigatorUID,parentNavigatorUID,navigatorId,navigationContext,componentInstance){_classCallCheck(this,ExNavigationStackContext);var _this=_possibleConstructorReturn(this,(ExNavigationStackContext.__proto__||Object.getPrototypeOf(ExNavigationStackContext)).call(this,navigatorUID,parentNavigatorUID,navigatorId,navigationContext));_this.type='stack';_this.






















































showLocalAlert=function(message,options){
_this.navigationContext.performAction(function(_ref){var stacks=_ref.stacks;
stacks(_this.navigatorUID).showLocalAlert(message,options);
});
};_this.

hideLocalAlert=function(){
_this.navigationContext.performAction(function(_ref2){var stacks=_ref2.stacks;
stacks(_this.navigatorUID).hideLocalAlert();
});
};_this.navigatorUID=navigatorUID;_this.parentNavigatorUID=parentNavigatorUID;_this.navigatorId=navigatorId;_this.navigationContext=navigationContext;_this.componentInstance=componentInstance;return _this;}_createClass(ExNavigationStackContext,[{key:'push',value:function push(route,paramsOrOptions,options){var _this2=this;if(typeof route=='string'){route=this.router.getRoute(route,paramsOrOptions);}else{options=paramsOrOptions;}options=options||{};(0,_invariant2.default)(route!==null&&route.key,'Route is null or malformed.');if(options.transitionGroup){route.config.styles=_ExNavigationSharedElementGroup2.default.getRouteStyle(options.transitionGroup);}this.navigationContext.performAction(function(_ref3){var stacks=_ref3.stacks;stacks(_this2.navigatorUID).push(route);});}},{key:'pop',value:function pop(){var _this3=this;var n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;this.navigationContext.performAction(function(_ref4){var stacks=_ref4.stacks;stacks(_this3.navigatorUID).pop(n);});}},{key:'popToTop',value:function popToTop(){var _this4=this;this.navigationContext.performAction(function(_ref5){var stacks=_ref5.stacks;stacks(_this4.navigatorUID).popToTop();});}},{key:'replace',value:function replace(route,params){var _this5=this;if(typeof route=='string'){route=this.router.getRoute(route,params);}(0,_invariant2.default)(route!==null&&route.key,'Route is null or malformed.');this.componentInstance._useAnimation=false;this.navigationContext.performAction(function(_ref6){var stacks=_ref6.stacks;stacks(_this5.navigatorUID).replace(route);});requestAnimationFrame(function(){_this5.componentInstance._useAnimation=true;});}},{key:'getCurrentRoute',value:function getCurrentRoute(){var navigatorState=this._getNavigatorState();if(!navigatorState){throw new Error('Navigation state for this navigator does not exist.');}return navigatorState.routes[navigatorState.index];}},{key:'getCurrentIndex',value:function getCurrentIndex(){var navigatorState=this._getNavigatorState();if(!navigatorState){throw new Error('Navigation state for this navigator does not exist.');}return navigatorState.index;}},{key:'addRouteListener',value:function addRouteListener(listener){var _this6=this;var listenerId=String(ROUTE_LISTENER_INDEX++);this.componentInstance._routeListeners[listenerId]=listener;return{remove:function remove(){delete _this6.componentInstance._routeListeners[listenerId];}};}},{key:'immediatelyResetStack',value:function immediatelyResetStack(routes){var _this7=this;var index=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;this.componentInstance._useAnimation=false;this.navigationContext.performAction(function(_ref7){var stacks=_ref7.stacks;stacks(_this7.navigatorUID).immediatelyResetStack(routes,index);});requestAnimationFrame(function(){_this7.componentInstance._useAnimation=true;});}},{key:'updateCurrentRouteParams',value:function updateCurrentRouteParams(

newParams){var _this8=this;
this.navigationContext.performAction(function(_ref8){var stacks=_ref8.stacks;
stacks(_this8.navigatorUID).updateCurrentRouteParams(newParams);
});
}},{key:'router',get:function get(){return this.navigationContext.router;}}]);return ExNavigationStackContext;}(_ExNavigatorContext3.default),(_applyDecoratedDescriptor(_class.prototype,'push',[_dec],Object.getOwnPropertyDescriptor(_class.prototype,'push'),_class.prototype),_applyDecoratedDescriptor(_class.prototype,'pop',[_dec2],Object.getOwnPropertyDescriptor(_class.prototype,'pop'),_class.prototype),_applyDecoratedDescriptor(_class.prototype,'popToTop',[_dec3],Object.getOwnPropertyDescriptor(_class.prototype,'popToTop'),_class.prototype),_applyDecoratedDescriptor(_class.prototype,'replace',[_dec4],Object.getOwnPropertyDescriptor(_class.prototype,'replace'),_class.prototype)),_class));var


ExNavigationStack=(_temp=_class3=function(_PureComponent){_inherits(ExNavigationStack,_PureComponent);_createClass(ExNavigationStack,[{key:'getChildContext',value:function getChildContext()
































{
return{

navigator:this._getNavigatorContext(),
parentNavigatorUID:this.state.navigatorUID,
headerComponent:this.props.headerComponent||this.context.headerComponent,
alertBarComponent:this.props.alertBarComponent||this.context.alertBarComponent};

}}]);

function ExNavigationStack(props,context){_classCallCheck(this,ExNavigationStack);var _this9=_possibleConstructorReturn(this,(ExNavigationStack.__proto__||Object.getPrototypeOf(ExNavigationStack)).call(this,
props,context));_initialiseProps.call(_this9);

_this9.state={
id:props.id,
navigatorUID:props.navigatorUID,
parentNavigatorUID:context.parentNavigatorUID,
navigatingFromIndex:-1,
navigatingToIndex:0};


_this9._routeListeners={};
_this9._useAnimation=true;return _this9;
}_createClass(ExNavigationStack,[{key:'render',value:function render()

{
var navigationState=this.props.navigationState;

if(!navigationState){
return null;
}

return(
_react2.default.createElement(NavigationTransitioner,{
style:styles.container,
navigationState:navigationState,
render:this._renderTransitioner,
configureTransition:this._configureTransition,
onTransitionStart:this._onTransitionStart,
onTransitionEnd:this._onTransitionEnd}));


}},{key:'componentWillMount',value:function componentWillMount()

{
this._registerNavigatorContext();var

initialStack=this.props.initialStack;var
initialRoute=this.props.initialRoute;

(0,_invariant2.default)(
initialRoute||initialStack,'You must specify initialRoute or initialStack to initialize this StackNavigation.');



(0,_invariant2.default)(
initialRoute&&!initialStack||!initialRoute&&initialStack,'Only specify one of \'initialRoute\' or \'initialStack\' when initializing StackNavigation.');



var routes=[];
if(initialStack){
routes=initialStack;
}else if(initialRoute){

if(typeof initialRoute==='string'){
initialRoute=this._getNavigatorContext().router.getRoute(initialRoute,{});
}
routes=[
initialRoute];

}

var stack=routes;

if(this.props.navigationState){
stack=[].concat(_toConsumableArray(
routes),_toConsumableArray(
this.props.navigationState.routes));

}

this.props.navigation.dispatch(_ExNavigationActions2.default.setCurrentNavigator(
this.state.navigatorUID,
this.state.parentNavigatorUID,
'stack',
this._getDefaultRouteConfig(),
stack,
stack.length-1));


if(this.state.parentNavigatorUID){
var parentNavigator=this.props.navigation.getNavigatorByUID(this.state.parentNavigatorUID);
if(parentNavigator.type==='tab'){
parentNavigator.setNavigatorUIDForCurrentTab(this.state.navigatorUID);
}else
if(parentNavigator.type==='drawer'){
parentNavigator.setNavigatorUIDForCurrentItem(this.state.navigatorUID);
}
}


(0,_ExNavigationBackButtonManager.getBackButtonManager)().ensureGlobalListener();
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this.props.navigation.dispatch(_ExNavigationActions2.default.removeNavigator(this.state.navigatorUID));
this.props.onUnregisterNavigatorContext(this.state.navigatorUID);
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){
var prevNavigationState=this.props.navigationState;
var nextNavigationState=nextProps.navigationState;
if(prevNavigationState&&nextNavigationState&&prevNavigationState.index!==nextNavigationState.index){
_lodash2.default.forEach(this._routeListeners,function(listener){
listener(prevNavigationState,nextNavigationState);
});

this.setState({
navigatingFromIndex:prevNavigationState.index,
navigatingToIndex:nextNavigationState.index});

}
}},{key:'_registerNavigatorContext',value:function _registerNavigatorContext()

























{
this.props.onRegisterNavigatorContext(this.state.navigatorUID,
new ExNavigationStackContext(
this.state.navigatorUID,
this.state.parentNavigatorUID,
this.state.id,
this.props.navigation,
this));


}},{key:'_getNavigationBarHeight',value:function _getNavigationBarHeight(


































latestRouteConfig){
var height=_ExNavigationBar2.default.DEFAULT_HEIGHT;

if(latestRouteConfig.navigationBar&&latestRouteConfig.navigationBar.height){
height=latestRouteConfig.navigationBar.height+DEFAULT_STATUSBAR_HEIGHT;
}

if(latestRouteConfig.statusBar){
if(latestRouteConfig.statusBar.height||latestRouteConfig.statusBar.height===0){
height=_ExNavigationBar2.default.DEFAULT_HEIGHT_WITHOUT_STATUS_BAR+latestRouteConfig.statusBar.height;
}else if(latestRouteConfig.statusBar.translucent){
height=_ExNavigationBar2.default.DEFAULT_HEIGHT_WITHOUT_STATUS_BAR+DEFAULT_STATUSBAR_HEIGHT;
}
}

return height;
}},{key:'_getRouteAtIndex',value:function _getRouteAtIndex(











































































































































































































































































































































scenes,index){
var scene=scenes[index];
var latestRoute=scene.route;
return latestRoute;
}},{key:'_getDefaultRouteConfig',value:function _getDefaultRouteConfig(

props){
if(!props){
props=this.props;
}
return _lodash2.default.merge({},DEFAULT_ROUTE_CONFIG,props.defaultRouteConfig);
}}]);return ExNavigationStack;}(_PureComponent3.default),_class3.route={__isNavigator:true},_class3.defaultProps={defaultRouteConfig:DEFAULT_ROUTE_CONFIG,onTransitionEnd:function onTransitionEnd(){},onTransitionStart:function onTransitionStart(){}},_class3.contextTypes={parentNavigatorUID:_react2.default.PropTypes.string,headerComponent:_react2.default.PropTypes.func,alertBarComponent:_react2.default.PropTypes.func},_class3.childContextTypes={parentNavigatorUID:_react2.default.PropTypes.string,navigator:_react2.default.PropTypes.instanceOf(ExNavigationStackContext),headerComponent:_react2.default.PropTypes.func,alertBarComponent:_react2.default.PropTypes.func},_initialiseProps=function _initialiseProps(){var _this10=this;this._configureTransition=function(transitionProps,prevTransitionProps){if(!_this10._useAnimation){return{duration:0};}var navigationState=_this10.props.navigationState;if(!navigationState){return null;}var latestRoute=transitionProps.scenes[transitionProps.scenes.length-1].route;var latestRouteConfig=latestRoute.config;var _ref9=latestRouteConfig.styles||{};var configureTransition=_ref9.configureTransition;if(typeof configureTransition==='function'){return configureTransition(transitionProps,prevTransitionProps);}};this._onNavigateBack=function(){_this10._getNavigatorContext().pop();};this._renderTransitioner=function(props){var header=_this10._renderHeader(_extends({},props,{scene:props.scene}));var alertBar=_this10._renderAlertBar(_extends({},props,{scene:props.scene}));var scenes=props.scenes.map(function(scene){return _this10._renderScene(_extends({},props,{scene:scene}));});return _react2.default.createElement(_reactNative.View,{style:styles.container},_react2.default.createElement(_reactNative.View,{style:styles.scenes},scenes),header,alertBar);};this._renderAlertBar=function(props){var latestRoute=_this10._getRouteAtIndex(props.scenes,props.scenes.length-1);var latestRouteConfig=latestRoute.config;var navigationBarIsVisible=latestRouteConfig.navigationBar&&latestRouteConfig.navigationBar.visible!==false;var AlertBarComponent=_this10.props.alertBarComponent||_this10.context.alertBarComponent||_ExNavigationAlertBar2.default;var alertBarContainerStyle=[styles.alertBarContainer,{top:navigationBarIsVisible?_this10._getNavigationBarHeight(latestRouteConfig):0}];return _react2.default.createElement(_reactNative.View,{style:alertBarContainerStyle},_react2.default.createElement(AlertBarComponent,{style:navigationBarIsVisible?null:{paddingTop:STATUSBAR_HEIGHT},getNavigatorContext:_this10._getNavigatorContext,navigatorUID:_this10.state.navigatorUID}));};this._renderHeader=function(props){var latestRoute=_this10._getRouteAtIndex(props.scenes,props.scenes.length-1);var latestRouteConfig=latestRoute.config;props=_extends({},props,{latestRouteConfig:latestRouteConfig,latestRoute:latestRoute});if(typeof _this10.props.renderOverlay==='function'){return _this10.props.renderOverlay(props);}var interpolator=null;if(latestRouteConfig.styles){interpolator=latestRouteConfig.styles.navigationBarAnimations;if(latestRouteConfig.navigationBar&&latestRouteConfig.navigationBar.styles){interpolator=latestRouteConfig.navigationBar.styles;}}var HeaderComponent=_this10.props.headerComponent||_this10.context.headerComponent||_ExNavigationBar2.default;var navigationBarIsVisible=latestRouteConfig.navigationBar&&latestRouteConfig.navigationBar.visible!==false;var statusBarHeight=STATUSBAR_HEIGHT;if(latestRouteConfig.statusBar){if(latestRouteConfig.statusBar.height||latestRouteConfig.statusBar.height===0){statusBarHeight=latestRouteConfig.statusBar.height;}else if(latestRouteConfig.statusBar.translucent){statusBarHeight=DEFAULT_STATUSBAR_HEIGHT;}}return _react2.default.createElement(HeaderComponent,_extends({},props,{statusBarHeight:statusBarHeight,getNavigatorContext:_this10._getNavigatorContext,navigatorUID:_this10.state.navigatorUID,visible:navigationBarIsVisible,interpolator:interpolator,renderLeftComponent:_this10._renderLeftComponentForHeader,renderTitleComponent:_this10._renderTitleComponentForHeader,renderRightComponent:_this10._renderRightComponentForHeader,renderBackgroundComponent:_this10._renderBackgroundComponentForHeader}));};this._drawerNavigatorParent=function(){var result=void 0;var currentNavigator=_this10._getNavigatorContext();while(currentNavigator){try{currentNavigator=currentNavigator.getParentNavigator();}catch(e){break;}if(currentNavigator&&currentNavigator.type==='drawer'){result=currentNavigator;break;}}return result;};this._renderBackgroundComponentForHeader=function(props){var route=props.scene.route;var routeConfig=route.config;if(routeConfig.navigationBar&&typeof routeConfig.navigationBar.renderBackground==='function'){var maybeBackgroundComponent=routeConfig.navigationBar.renderBackground(route,props);if(maybeBackgroundComponent){return maybeBackgroundComponent;}return null;}};this._renderLeftComponentForHeader=function(props){var route=props.scene.route;var routeConfig=route.config;if(routeConfig.navigationBar&&typeof routeConfig.navigationBar.renderLeft==='function'){var maybeLeftComponent=routeConfig.navigationBar.renderLeft(route,props);if(maybeLeftComponent){return maybeLeftComponent;}return null;}var menuButton=_this10._maybeRenderMenuButton('left',route,props);if(menuButton){return menuButton;}if(props.scene.index>0){return _react2.default.createElement(_ExNavigationBar2.default.BackButton,{tintColor:route.getBarTintColor()});}return null;};this._maybeRenderMenuButton=function(position,route,props){var drawerNavigatorParent=_this10._drawerNavigatorParent();if(props.scene.index===0&&!!drawerNavigatorParent){if(drawerNavigatorParent.options.drawerPosition!==position){return;}return _react2.default.createElement(_ExNavigationBar2.default.MenuButton,{navigator:drawerNavigatorParent,tintColor:route.getBarTintColor()});}};this._renderTitleComponentForHeader=function(props){var route=props.scene.route;var routeConfig=route.config;if(routeConfig.navigationBar&&typeof routeConfig.navigationBar.renderTitle==='function'){return routeConfig.navigationBar.renderTitle(route,props);}return _react2.default.createElement(_ExNavigationBar2.default.Title,{textStyle:route.getTitleStyle(),tintColor:route.getBarTintColor()},route.getTitle());};this._renderRightComponentForHeader=function(props){var route=props.scene.route;var routeConfig=route.config;if(routeConfig.navigationBar&&typeof routeConfig.navigationBar.renderRight==='function'){var maybeRightComponent=routeConfig.navigationBar.renderRight(route,props);if(maybeRightComponent){return maybeRightComponent;}return null;}var menuButton=_this10._maybeRenderMenuButton('right',route,props);if(menuButton){return menuButton;}return null;};this._renderScene=function(props){var latestRoute=_this10._getRouteAtIndex(props.scenes,props.scenes.length-1);var latestRouteConfig=latestRoute.config;var _ref10=latestRouteConfig.styles||{};var sceneAnimations=_ref10.sceneAnimations;var gestures=_ref10.gestures;var scene=props.scene;var routeForScene=scene.route;props=_extends({},props,{latestRouteConfig:latestRouteConfig,latestRoute:latestRoute,onNavigateBack:_this10._onNavigateBack,key:props.scene.key,route:routeForScene,sceneAnimations:sceneAnimations,gestures:gestures,renderScene:_this10._renderRoute});if(typeof _this10.props.renderScene==='function'){return _this10.props.renderScene(props);}return _react2.default.createElement(_ExNavigationStackItem2.default,props);};this._renderRoute=function(props){var route=props.route;var routeElement=route.render();if(_this10.props.augmentScene){routeElement=_this10.props.augmentScene(routeElement,route);}var routeElementProps={};var routeConfig=route.config;routeElementProps={route:route};var style=[styles.routeInnerContainer];if(routeConfig.navigationBar&&routeConfig.navigationBar.visible!==false){var customHeight=0;var hasCustomHeight=false;var isTranslucent=!!routeConfig.navigationBar.translucent;if(_lodash2.default.isNumber(route.getBarHeight())){customHeight+=route.getBarHeight();hasCustomHeight=true;}if(hasCustomHeight){style=[].concat(_toConsumableArray(style),[{marginTop:customHeight}]);}else{style=[].concat(_toConsumableArray(style),[isTranslucent?styles.withNavigationBarTranslucent:{paddingTop:_this10._getNavigationBarHeight(routeConfig)}]);}}else{style=[].concat(_toConsumableArray(style),[styles.withoutNavigationBar]);}if(routeConfig.sceneStyle){style=[].concat(_toConsumableArray(style),[routeConfig.sceneStyle||styles.defaultSceneStyle]);}return _react2.default.createElement(_reactNative.View,{style:styles.routeContainer},_react2.default.createElement(_reactNative.Animated.View,{style:style},_react2.default.createElement(_reactNative.View,{style:{flex:1}},(0,_reactCloneReferencedElement2.default)(routeElement,routeElementProps))));};this._onTransitionStart=function(transitionProps,prevTransitionProps){var nextRoute=transitionProps.scene.route;var nextRouteConfig=nextRoute.config;if(nextRouteConfig.styles&&nextRouteConfig.styles.onTransitionStart){nextRouteConfig.styles.onTransitionStart(transitionProps,prevTransitionProps);}if(prevTransitionProps){var prevRoute=prevTransitionProps.scene.route;var prevRouteConfg=prevRoute.config;if(prevRouteConfg.styles&&prevRouteConfg.styles.onTransitionStart){prevRouteConfg.styles.onTransitionStart(transitionProps,prevTransitionProps);}}if(_this10.props.onTransitionStart){_this10.props.onTransitionStart(transitionProps,prevTransitionProps);}};this._onTransitionEnd=function(transitionProps,prevTransitionProps){var nextRoute=transitionProps.scene.route;var nextRouteConfig=nextRoute.config;if(nextRouteConfig.styles&&nextRouteConfig.styles.onTransitionEnd){nextRouteConfig.styles.onTransitionEnd(transitionProps,prevTransitionProps);}if(prevTransitionProps){var prevRoute=prevTransitionProps.scene.route;var prevRouteConfg=prevRoute.config;if(prevRouteConfg.styles&&prevRouteConfg.styles.onTransitionEnd){prevRouteConfg.styles.onTransitionEnd(transitionProps,prevTransitionProps);}}if(_this10.props.onTransitionEnd){_this10.props.onTransitionEnd(transitionProps,prevTransitionProps);}};this.


_getNavigatorContext=function(){
return _this10.props.navigation.getNavigatorByUID(_this10.state.navigatorUID);
};},_temp);exports.default=


(0,_ExNavigationComponents.createNavigatorComponent)(ExNavigationStack);

var styles=_reactNative.StyleSheet.create({
container:{
flex:1},

scenes:{
flex:1},

defaultSceneStyle:{
backgroundColor:'#fff'},

routeContainer:{
flex:1},

routeInnerContainer:{
flex:1},

withoutNavigationBar:{
marginTop:0},

withNavigationBarTranslucent:{
paddingTop:0},

alertBarContainer:{
position:'absolute',
left:0,
right:0}});