Object.defineProperty(exports,"__esModule",{value:true});exports.ExNavigationDrawerContext=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _class2,_temp2;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _react=require('react');var _react2=_interopRequireDefault(_react);


var _reactNative=require('react-native');



var _reactNativeDrawerLayout=require('react-native-drawer-layout');var _reactNativeDrawerLayout2=_interopRequireDefault(_reactNativeDrawerLayout);
var _PureComponent2=require('../utils/PureComponent');var _PureComponent3=_interopRequireDefault(_PureComponent2);
var _reactStaticContainer=require('react-static-container');var _reactStaticContainer2=_interopRequireDefault(_reactStaticContainer);

var _invariant=require('invariant');var _invariant2=_interopRequireDefault(_invariant);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);

var _ExNavigationActions=require('../ExNavigationActions');var _ExNavigationActions2=_interopRequireDefault(_ExNavigationActions);
var _ExNavigatorContext2=require('../ExNavigatorContext');var _ExNavigatorContext3=_interopRequireDefault(_ExNavigatorContext2);
var _ExNavigationComponents=require('../ExNavigationComponents');

var _ExNavigationDrawerLayout=require('./ExNavigationDrawerLayout');var _ExNavigationDrawerLayout2=_interopRequireDefault(_ExNavigationDrawerLayout);
var _ExNavigationDrawerItem=require('./ExNavigationDrawerItem');var _ExNavigationDrawerItem2=_interopRequireDefault(_ExNavigationDrawerItem);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


ExNavigationDrawerContext=exports.ExNavigationDrawerContext=function(_ExNavigatorContext){_inherits(ExNavigationDrawerContext,_ExNavigatorContext);function ExNavigationDrawerContext(){var _ref;var _temp,_this,_ret;_classCallCheck(this,ExNavigationDrawerContext);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=ExNavigationDrawerContext.__proto__||Object.getPrototypeOf(ExNavigationDrawerContext)).call.apply(_ref,[this].concat(args))),_this),_this.



_navigatorItemMap={},_this.

type='drawer',_temp),_possibleConstructorReturn(_this,_ret);}_createClass(ExNavigationDrawerContext,[{key:'setNavigatorUIDForCurrentItem',value:function setNavigatorUIDForCurrentItem(

navigatorUID){
var navigatorState=this._getNavigatorState();
if(!navigatorState){
return;
}
var currentItem=navigatorState.routes[navigatorState.index];
this._navigatorItemMap[currentItem.key]=navigatorUID;
}},{key:'getNavigatorUIDForItemKey',value:function getNavigatorUIDForItemKey(

itemKey){
return this._navigatorItemMap[itemKey];
}},{key:'jumpToItem',value:function jumpToItem(

itemKey){var _this2=this;
this.navigationContext.performAction(function(_ref2){var drawer=_ref2.drawer;
drawer(_this2.navigatorUID).jumpToItem(itemKey);
});
}},{key:'toggleDrawer',value:function toggleDrawer()

{
this.options.toggleDrawer();
}}]);return ExNavigationDrawerContext;}(_ExNavigatorContext3.default);var




























ExNavigationDrawer=(_temp2=_class2=function(_PureComponent){_inherits(ExNavigationDrawer,_PureComponent);_createClass(ExNavigationDrawer,[{key:'getChildContext',value:function getChildContext()

























{
return{

navigator:this._getNavigatorContext(),
parentNavigatorUID:this.state.navigatorUID};

}}]);

function ExNavigationDrawer(props,context){_classCallCheck(this,ExNavigationDrawer);var _this3=_possibleConstructorReturn(this,(ExNavigationDrawer.__proto__||Object.getPrototypeOf(ExNavigationDrawer)).call(this,
props,context));_this3.











































renderContent=function(){
var items=_this3.state.renderedItemKeys.map(function(key){
return _this3.state.drawerItems.find(function(i){return i.id===key;});
});

return(
_react2.default.createElement(_reactNative.View,{style:styles.itemContentOuter},
items.map(function(item){return _this3.renderItemContent(item);})));


};_this3.






































































































































toggleDrawer=function(){
_this3._drawerLayout&&_this3._drawerLayout.toggle();
};_this3.state={drawerItems:[],id:props.id,navigatorUID:props.navigatorUID,parentNavigatorUID:context.parentNavigatorUID,renderedItemKeys:[]};return _this3;}_createClass(ExNavigationDrawer,[{key:'render',value:function render(){var _this4=this;if(!this.props.children||!this.state.drawerItems){return null;}var navigationState=this._getNavigationState();if(!navigationState){return null;}var drawerLayoutProps={children:this.renderContent(),renderHeader:this.props.renderHeader,selectedItem:navigationState.routes[navigationState.index].key,items:this.state.drawerItems,drawerBackgroundColor:this.props.drawerBackgroundColor,drawerPosition:this.props.drawerPosition,width:this.props.drawerWidth,renderNavigationView:this.props.renderNavigationView,style:[this.props.drawerStyle]};return _react2.default.createElement(_ExNavigationDrawerLayout2.default,_extends({ref:function ref(component){_this4._drawerLayout=component;}},drawerLayoutProps));}},{key:'renderItemContent',value:function renderItemContent(drawerItem){if(!drawerItem.element){return null;}var navState=this._getNavigationState();var selectedChild=navState.routes[navState.index];var isSelected=drawerItem.id===selectedChild.key;return _react2.default.createElement(_reactNative.View,{key:drawerItem.id,removeClippedSubviews:!isSelected,style:[styles.itemContentInner,{opacity:isSelected?1:0}],pointerEvents:isSelected?'auto':'none'},_react2.default.createElement(_reactStaticContainer2.default,{shouldUpdate:isSelected},drawerItem.element));}},{key:'componentWillMount',value:function componentWillMount(){this._parseDrawerItems(this.props);this._registerNavigatorContext();this.props.navigation.dispatch(_ExNavigationActions2.default.setCurrentNavigator(this.state.navigatorUID,this.state.parentNavigatorUID,'drawer',{},[{key:this.props.initialItem}]));}},{key:'componentWillUnmount',value:function componentWillUnmount(){this.props.navigation.dispatch(_ExNavigationActions2.default.removeNavigator(this.state.navigatorUID));this.props.onUnregisterNavigatorContext(this.state.navigatorUID);}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){if(nextProps.children&&nextProps.children!==this.props.children){this._parseDrawerItems(nextProps);}if(nextProps.navigationState!==this.props.navigationState){this.setState({renderedItemKeys:this._updateRenderedItemKeys(nextProps,this.state.renderedItemKeys)});}}},{key:'componentDidUpdate',value:function componentDidUpdate(prevProps){if(prevProps.navigation.dispatch!==this.props.navigation.dispatch){this._registerNavigatorContext();}if(prevProps.navigationState!==this.props.navigationState){var _navigationState=this.props.navigationState;var currentItemKey=_navigationState.routes[_navigationState.index].key;var navigatorUIDForItemKey=this._getNavigatorContext().getNavigatorUIDForItemKey(currentItemKey);if(navigatorUIDForItemKey){this.props.navigation.dispatch(_ExNavigationActions2.default.setCurrentNavigator(navigatorUIDForItemKey));}}}},{key:'_updateRenderedItemKeys',value:function _updateRenderedItemKeys(props,currentRenderedItemKeys){var navState=this._getNavigationState(props);var currentDrawerItems=navState.routes.map(function(c){return c.key;});var selectedChild=navState.routes[navState.index];return[].concat(_toConsumableArray(_lodash2.default.uniq(_lodash2.default.without([].concat(_toConsumableArray(currentRenderedItemKeys),_toConsumableArray(currentDrawerItems)),selectedChild.key))),[selectedChild.key]);}},{key:'_parseDrawerItems',value:function _parseDrawerItems(props){var _this5=this;var drawerItems=_react.Children.map(props.children,function(child,index){if(!child){return null;}(0,_invariant2.default)(child.type===_ExNavigationDrawerItem2.default,'All children of DrawerNavigation must be DrawerNavigationItems.');var drawerItemProps=child.props;var drawerItem=_extends({},_lodash2.default.omit(drawerItemProps,['children']));if(_react.Children.count(drawerItemProps.children)>0){drawerItem.element=_react.Children.only(drawerItemProps.children);}var drawerItemOnPress=function drawerItemOnPress(){_this5._setActiveItem(drawerItemProps.id,index);};if(typeof drawerItemProps.onPress==='function'){drawerItem.onPress=drawerItem.onPress.bind(_this5,drawerItemOnPress);}else{drawerItem.onPress=drawerItemOnPress;}drawerItem.onLongPress=drawerItemProps.onLongPress;return drawerItem;});this.setState({drawerItems:drawerItems});}},{key:'_setActiveItem',value:function _setActiveItem(id,index){this._getNavigatorContext().jumpToItem(id);if(typeof this.props.onPress==='function'){this.props.onPress(id);}}},{key:'_getNavigationState',value:function _getNavigationState(

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
new ExNavigationDrawerContext(
this.state.navigatorUID,
this.state.parentNavigatorUID,
this.state.id,
this.props.navigation,
{
toggleDrawer:this.toggleDrawer,
drawerPosition:this.props.drawerPosition}));



}},{key:'_getNavigatorContext',value:function _getNavigatorContext()


{
return this.props.navigation.getNavigatorByUID(this.state.navigatorUID);
}}]);return ExNavigationDrawer;}(_PureComponent3.default),_class2.route={__isNavigator:true},_class2.defaultProps={drawerPosition:'left',drawerBackgroundColor:'#fff',renderHeader:function renderHeader(){return null;}},_class2.contextTypes={parentNavigatorUID:_react2.default.PropTypes.string},_class2.childContextTypes={parentNavigatorUID:_react2.default.PropTypes.string,navigator:_react2.default.PropTypes.instanceOf(ExNavigationDrawerContext)},_temp2);exports.default=


(0,_ExNavigationComponents.createNavigatorComponent)(ExNavigationDrawer);

var styles=_reactNative.StyleSheet.create({
itemContentOuter:{
flex:1},

itemContentInner:{
position:'absolute',
top:0,
left:0,
right:0,
bottom:0}});