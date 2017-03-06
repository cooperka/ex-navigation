Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp,_initialiseProps;



var _react=require('react');var _react2=_interopRequireDefault(_react);


var _reactNative=require('react-native');



var _PureComponent2=require('../utils/PureComponent');var _PureComponent3=_interopRequireDefault(_PureComponent2);
var _reactStaticContainer=require('react-static-container');var _reactStaticContainer2=_interopRequireDefault(_reactStaticContainer);

var _invariant=require('invariant');var _invariant2=_interopRequireDefault(_invariant);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);

var _ExNavigationActions=require('../ExNavigationActions');var _ExNavigationActions2=_interopRequireDefault(_ExNavigationActions);
var _ExNavigatorContext=require('../ExNavigatorContext');var _ExNavigatorContext2=_interopRequireDefault(_ExNavigatorContext);
var _ExNavigationBar=require('../ExNavigationBar');var _ExNavigationBar2=_interopRequireDefault(_ExNavigationBar);
var _ExNavigationSlidingTabItem=require('./ExNavigationSlidingTabItem');var _ExNavigationSlidingTabItem2=_interopRequireDefault(_ExNavigationSlidingTabItem);
var _ExNavigationTab=require('../tab/ExNavigationTab');
var _reactNativeTabView=require('react-native-tab-view');
var _ExNavigationComponents=require('../ExNavigationComponents');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var









































ExNavigationSlidingTab=(_temp=_class=function(_PureComponent){_inherits(ExNavigationSlidingTab,_PureComponent);






























function ExNavigationSlidingTab(props,context){_classCallCheck(this,ExNavigationSlidingTab);var _this=_possibleConstructorReturn(this,(ExNavigationSlidingTab.__proto__||Object.getPrototypeOf(ExNavigationSlidingTab)).call(this,
props,context));_initialiseProps.call(_this);

_this.state={
tabItems:[],
id:props.id,
navigatorUID:props.navigatorUID,
parentNavigatorUID:context.parentNavigatorUID};return _this;

}_createClass(ExNavigationSlidingTab,[{key:'getChildContext',value:function getChildContext()

{
return{
navigator:this._getNavigatorContext(),
parentNavigatorUID:this.state.navigatorUID};

}},{key:'componentWillMount',value:function componentWillMount()

{
var tabItems=this._parseTabItems(this.props);

this._registerNavigatorContext();

var routes=tabItems.map(function(_ref){var id=_ref.id;var title=_ref.title;return{title:title,key:id};});
var routeKeys=routes.map(function(r){return r.key;});

this.props.navigation.dispatch(_ExNavigationActions2.default.setCurrentNavigator(
this.state.navigatorUID,
this.state.parentNavigatorUID,
'slidingTab',
{},
routes,
this.props.initialTab?routeKeys.indexOf(this.props.initialTab):0));

}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this.props.navigation.dispatch(_ExNavigationActions2.default.removeNavigator(this.state.navigatorUID));
this.props.onUnregisterNavigatorContext(this.state.navigatorUID);
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){




}},{key:'componentDidUpdate',value:function componentDidUpdate(

prevProps){
if(prevProps.navigation.dispatch!==this.props.navigation.dispatch){
this._registerNavigatorContext();
}



if(prevProps.navigationState!==this.props.navigationState){
var _navigationState=this.props.navigationState;
var currentTabKey=_navigationState.routes[_navigationState.index].key;
var navigatorUIDForTabKey=this._getNavigatorContext().getNavigatorUIDForTabKey(currentTabKey);
if(navigatorUIDForTabKey){
this.props.navigation.dispatch(
_ExNavigationActions2.default.setCurrentNavigator(navigatorUIDForTabKey));

}
}
}},{key:'render',value:function render()


{
if(!this.props.children||!this.state.tabItems){
return null;
}

var navigationState=this._getNavigationState();
if(!navigationState){
return null;
}

if(this.state.tabItems.length!==navigationState.routes.length){
return null;
}

return(
_react2.default.createElement(_reactNativeTabView.TabViewAnimated,{
lazy:this.props.lazy,
style:[styles.container,this.props.style],
navigationState:navigationState,
renderScene:this._renderScene,
renderPager:this._renderPager,
renderHeader:this.props.renderHeader||(this.props.position!=='bottom'?this._renderTabBar:undefined),
renderFooter:this.props.renderFooter||(this.props.position==='bottom'?this._renderTabBar:undefined),
onRequestChangeTab:this._setActiveTab}));


}},{key:'_updateRenderedTabKeys',value:function _updateRenderedTabKeys(









































props,currentRenderedTabKeys){
var navState=this._getNavigationState(props);
var currentTabItems=navState.routes.map(function(c){return c.key;});
var selectedChild=navState.routes[navState.index];

return[].concat(_toConsumableArray(
_lodash2.default.uniq(_lodash2.default.without([].concat(_toConsumableArray(currentRenderedTabKeys),_toConsumableArray(currentTabItems)),selectedChild.key))),[
selectedChild.key]);

}},{key:'_parseTabItems',value:function _parseTabItems(

props){
var tabItems=_react.Children.map(props.children,function(child,index){
(0,_invariant2.default)(
child.type===_ExNavigationSlidingTabItem2.default,
'All children of SlidingTabNavigation must be SlidingTabNavigationItems.');


var tabItemProps=child.props;

var tabItem=_extends({},
_lodash2.default.omit(tabItemProps,['children']));


(0,_invariant2.default)(
!tabItem.renderLabel,
'renderLabel should be passed to SlidingTabNavigation instead of SlidingTabNavigationItem.');


if(_react.Children.count(tabItemProps.children)>0){
tabItem.element=_react.Children.only(tabItemProps.children);
}

return tabItem;
});

this.setState({
tabItems:tabItems});


return tabItems;
}},{key:'_getNavigationState',value:function _getNavigationState(











props){
if(!props){
props=this.props;
}var _props=
props;var navigationState=_props.navigationState;
return navigationState;
}},{key:'_registerNavigatorContext',value:function _registerNavigatorContext()

{
this.props.onRegisterNavigatorContext(
this.state.navigatorUID,
new _ExNavigationTab.ExNavigationTabContext(
this.state.navigatorUID,
this.state.parentNavigatorUID,
this.state.id,
this.props.navigation));


}},{key:'_getNavigatorContext',value:function _getNavigatorContext()

{
var navigatorContext=this.props.navigation.getNavigatorByUID(this.state.navigatorUID);
return navigatorContext;
}}]);return ExNavigationSlidingTab;}(_PureComponent3.default),_class.route={__isNavigator:true},_class.navigationBarStyles={borderBottomWidth:0,elevation:0},_class.defaultProps={barBackgroundColor:_ExNavigationBar2.default.DEFAULT_BACKGROUND_COLOR,indicatorStyle:{},position:'top',pressColor:'rgba(0,0,0,0.2)',tabStyle:{},renderBefore:function renderBefore(){return null;}},_class.contextTypes={parentNavigatorUID:_react2.default.PropTypes.string},_class.childContextTypes={parentNavigatorUID:_react2.default.PropTypes.string,navigator:_react2.default.PropTypes.instanceOf(_ExNavigationTab.ExNavigationTabContext)},_initialiseProps=function _initialiseProps(){var _this2=this;this._renderPager=function(props){return _react2.default.createElement(_reactNativeTabView.TabViewPagerPan,_extends({},props,{swipeEnabled:_this2.props.swipeEnabled}));};this._renderScene=function(_ref2){var route=_ref2.route;var tabItem=_this2.state.tabItems.find(function(i){return i.id===route.key;});if(tabItem){return tabItem.element;}else{return null;}};this._renderTabBar=function(props){var TabBarComponent=_this2.props.position==='top'?_reactNativeTabView.TabBarTop:_reactNativeTabView.TabBar;var tabBarProps={pressColor:_this2.props.pressColor,indicatorStyle:_this2.props.indicatorStyle,tabStyle:_this2.props.tabStyle,labelStyle:_this2.props.labelStyle,renderLabel:_this2.props.renderLabel,style:[{backgroundColor:_this2.props.barBackgroundColor},_this2.props.tabBarStyle]};return _react2.default.createElement(_reactNative.View,null,_this2.props.renderBefore(),_react2.default.createElement(TabBarComponent,_extends({},props,tabBarProps)));};this._setActiveTab=function(i){var tabItem=_this2.state.tabItems[i];var key=tabItem.id;_this2._getNavigatorContext().jumpToTab(key);if(typeof _this2.props.onChangeTab==='function'){_this2.props.onChangeTab(key);}};},_temp);exports.default=


(0,_ExNavigationComponents.createNavigatorComponent)(ExNavigationSlidingTab);

var styles=_reactNative.StyleSheet.create({
container:{
flex:1}});