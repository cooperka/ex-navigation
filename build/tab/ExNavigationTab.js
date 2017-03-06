Object.defineProperty(exports,"__esModule",{value:true});exports.ExNavigationTabContext=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _class2,_temp2;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _react=require('react');var _react2=_interopRequireDefault(_react);


var _reactNative=require('react-native');



var _PureComponent2=require('../utils/PureComponent');var _PureComponent3=_interopRequireDefault(_PureComponent2);
var _reactStaticContainer=require('react-static-container');var _reactStaticContainer2=_interopRequireDefault(_reactStaticContainer);

var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _invariant=require('invariant');var _invariant2=_interopRequireDefault(_invariant);
var _reactCloneReferencedElement=require('react-clone-referenced-element');var _reactCloneReferencedElement2=_interopRequireDefault(_reactCloneReferencedElement);

var _ExNavigationActions=require('../ExNavigationActions');var _ExNavigationActions2=_interopRequireDefault(_ExNavigationActions);
var _ExNavigatorContext2=require('../ExNavigatorContext');var _ExNavigatorContext3=_interopRequireDefault(_ExNavigatorContext2);
var _ExNavigationTabBar=require('./ExNavigationTabBar');var _ExNavigationTabBar2=_interopRequireDefault(_ExNavigationTabBar);
var _ExNavigationTabItem=require('./ExNavigationTabItem');var _ExNavigationTabItem2=_interopRequireDefault(_ExNavigationTabItem);
var _ExNavigationComponents=require('../ExNavigationComponents');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var



ExNavigationTabContext=exports.ExNavigationTabContext=function(_ExNavigatorContext){_inherits(ExNavigationTabContext,_ExNavigatorContext);function ExNavigationTabContext(){var _ref;var _temp,_this,_ret;_classCallCheck(this,ExNavigationTabContext);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=ExNavigationTabContext.__proto__||Object.getPrototypeOf(ExNavigationTabContext)).call.apply(_ref,[this].concat(args))),_this),_this.
type='tab',_this.




_navigatorTabMap={},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(ExNavigationTabContext,[{key:'setNavigatorUIDForCurrentTab',value:function setNavigatorUIDForCurrentTab(


navigatorUID){
var navigatorState=this._getNavigatorState();
if(!navigatorState){
return;
}
var currentTab=navigatorState.routes[navigatorState.index];
this._navigatorTabMap[currentTab.key]=navigatorUID;
}},{key:'getNavigatorUIDForTabKey',value:function getNavigatorUIDForTabKey(

tabKey){
return this._navigatorTabMap[tabKey];
}},{key:'jumpToTab',value:function jumpToTab(

tabKey){var _this2=this;
this.navigationContext.performAction(function(_ref2){var tabs=_ref2.tabs;
tabs(_this2.navigatorUID).jumpToTab(tabKey);
});
}}]);return ExNavigationTabContext;}(_ExNavigatorContext3.default);var


































ExNavigationTab=(_temp2=_class2=function(_PureComponent){_inherits(ExNavigationTab,_PureComponent);_createClass(ExNavigationTab,[{key:'getChildContext',value:function getChildContext()






















{
return{

navigator:this._getNavigatorContext(),
parentNavigatorUID:this.state.navigatorUID};

}}]);

function ExNavigationTab(props,context){_classCallCheck(this,ExNavigationTab);var _this3=_possibleConstructorReturn(this,(ExNavigationTab.__proto__||Object.getPrototypeOf(ExNavigationTab)).call(this,
props,context));

_this3.state={
tabItems:[],
id:props.id,
navigatorUID:props.navigatorUID,
parentNavigatorUID:context.parentNavigatorUID,
renderedTabKeys:[]};return _this3;

}_createClass(ExNavigationTab,[{key:'render',value:function render()

{
if(!this.props.children||!this.state.tabItems){
return null;
}

var navigationState=this._getNavigationState();
if(!navigationState){
return null;
}

var tabBarProps={
selectedTab:navigationState.routes[navigationState.index].key,
items:this.state.tabItems,
height:this.props.tabBarHeight,
translucent:this.props.translucent,
style:[
this.props.tabBarStyle,
this.props.tabBarColor?{backgroundColor:this.props.tabBarColor}:{}]};



var tabBar=this.props.renderTabBar(tabBarProps);
var TabBarComponent=tabBar.type;

var tabBarHeight=this.props.tabBarHeight||TabBarComponent.defaultHeight||0;
var isTranslucent=this.props.translucent;

return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.View,{style:{flex:1,marginBottom:isTranslucent?0:tabBarHeight}},
this.renderTabs()),

tabBar));


}},{key:'renderTabs',value:function renderTabs()

{var _this4=this;
var tabs=this.state.renderedTabKeys.map(function(key){return(
_this4.state.tabItems.find(function(i){return i.id===key;}));});

return(
_react2.default.createElement(_reactNative.View,{style:styles.tabContent},
tabs.map(function(tab){return _this4.renderTab(tab);})));


}},{key:'renderTab',value:function renderTab(

tabItem){
if(!tabItem.element){
return null;
}

var navState=this._getNavigationState();
var selectedChild=navState.routes[navState.index];
var isSelected=tabItem.id===selectedChild.key;

return(
_react2.default.createElement(_reactNative.View,{
key:tabItem.id,
removeClippedSubviews:!isSelected,
style:[styles.tabContentInner,{opacity:isSelected?1:0}],
pointerEvents:isSelected?'auto':'none'},
_react2.default.createElement(_reactStaticContainer2.default,{shouldUpdate:isSelected},
tabItem.element)));



}},{key:'componentWillMount',value:function componentWillMount()

{
this._parseTabItems(this.props);

this._registerNavigatorContext();

this.props.navigation.dispatch(_ExNavigationActions2.default.setCurrentNavigator(
this.state.navigatorUID,
this.state.parentNavigatorUID,
'tab',
{},
[{
key:this.props.initialTab}]));


}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this.props.navigation.dispatch(_ExNavigationActions2.default.removeNavigator(this.state.navigatorUID));
this.props.onUnregisterNavigatorContext(this.state.navigatorUID);
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){
if(nextProps.children&&nextProps.children!==this.props.children){
this._parseTabItems(nextProps);
}

if(nextProps.navigationState!==this.props.navigationState){
this.setState({
renderedTabKeys:this._updateRenderedTabKeys(nextProps,this.state.renderedTabKeys)});

}
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
}},{key:'_updateRenderedTabKeys',value:function _updateRenderedTabKeys(

props,currentRenderedTabKeys){
var navState=this._getNavigationState(props);
var currentTabItems=navState.routes.map(function(c){return c.key;});
var selectedChild=navState.routes[navState.index];

return[].concat(_toConsumableArray(
_lodash2.default.uniq(_lodash2.default.without([].concat(_toConsumableArray(currentRenderedTabKeys),_toConsumableArray(currentTabItems)),selectedChild.key))),[
selectedChild.key]);

}},{key:'_parseTabItems',value:function _parseTabItems(

props){var _this5=this;
var tabItems=_react.Children.map(props.children,function(child,index){
(0,_invariant2.default)(
child.type===_ExNavigationTabItem2.default,
'All children of TabNavigation must be TabNavigationItems.');


var tabItemProps=child.props;

var tabItem=_extends({},
_lodash2.default.omit(tabItemProps,['children']));


if(_react.Children.count(tabItemProps.children)>0){
var _child=_react.Children.only(tabItemProps.children);



if(_child.props.initialRoute&&_this5.props.translucent){
var defaultRouteConfig=_child.props.defaultRouteConfig||{};
defaultRouteConfig=_extends({},defaultRouteConfig,{__tabBarInset:_this5.props.tabBarHeight});
tabItem.element=(0,_reactCloneReferencedElement2.default)(_child,_extends({},_child.props,{defaultRouteConfig:defaultRouteConfig}));
}else{
tabItem.element=_child;
}
}

var tabItemOnPress=function tabItemOnPress(){
_this5._setActiveTab(tabItemProps.id,index);
};

if(typeof tabItemProps.onPress==='function'){
tabItem.onPress=tabItem.onPress.bind(_this5,tabItemOnPress);
}else{
tabItem.onPress=tabItemOnPress;
}

if(typeof tabItemProps.onLongPress==='function'){
tabItem.onLongPress=tabItem.onLongPress.bind(_this5,tabItemOnPress);
}else{
tabItem.onLongPress=tabItem.onPress;
}

return tabItem;
});

this.setState({
tabItems:tabItems});

}},{key:'_setActiveTab',value:function _setActiveTab(

id,index){
if(typeof this.props.onWillChangeTab==='function'){
var changeTab=this.props.onWillChangeTab(id);
if(!changeTab){
return;
}
}

this._getNavigatorContext().jumpToTab(id);
if(typeof this.props.onTabPress==='function'){
this.props.onTabPress(id);
}
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
new ExNavigationTabContext(
this.state.navigatorUID,
this.state.parentNavigatorUID,
this.state.id,
this.props.navigation));


}},{key:'_getNavigatorContext',value:function _getNavigatorContext()

{
var navigatorContext=this.props.navigation.getNavigatorByUID(this.state.navigatorUID);
return navigatorContext;
}}]);return ExNavigationTab;}(_PureComponent3.default),_class2.route={__isNavigator:true},_class2.defaultProps={renderTabBar:function renderTabBar(props){return _react2.default.createElement(_ExNavigationTabBar2.default,props);}},_class2.contextTypes={parentNavigatorUID:_react2.default.PropTypes.string},_class2.childContextTypes={parentNavigatorUID:_react2.default.PropTypes.string,navigator:_react2.default.PropTypes.instanceOf(ExNavigationTabContext)},_temp2);exports.default=


(0,_ExNavigationComponents.createNavigatorComponent)(ExNavigationTab);

var styles=_reactNative.StyleSheet.create({
container:{
position:'absolute',
top:0,
left:0,
bottom:0,
right:0},

tabContent:{
position:'absolute',
top:0,
left:0,
right:0,
bottom:0,
backgroundColor:'white'},

tabContentInner:{
position:'absolute',
top:0,
left:0,
right:0,
bottom:0,
backgroundColor:'white'}});