Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp;



var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');




var _storeShape=require('react-redux/lib/utils/storeShape');var _storeShape2=_interopRequireDefault(_storeShape);

var _ExNavigationActions=require('./ExNavigationActions');var _ExNavigationActions2=_interopRequireDefault(_ExNavigationActions);
var _ExNavigationBackButtonManager=require('./ExNavigationBackButtonManager');
var _ExNavigationContext=require('./ExNavigationContext');var _ExNavigationContext2=_interopRequireDefault(_ExNavigationContext);
var _ExNavigationRouter=require('./ExNavigationRouter');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var









ExNavigationProvider=(_temp=_class=function(_React$Component){_inherits(ExNavigationProvider,_React$Component);_createClass(ExNavigationProvider,[{key:'getChildContext',value:function getChildContext()











{
return{
navigationStore:this._navigationContext.store,
navigation:this._navigationContext};

}}]);

function ExNavigationProvider(props){_classCallCheck(this,ExNavigationProvider);var _this=_possibleConstructorReturn(this,(ExNavigationProvider.__proto__||Object.getPrototypeOf(ExNavigationProvider)).call(this,
props));

if(!props.context&&!props.router){
throw new Error('If no custom NavigationContext is passed into NavigationProvider, you must provide a router.');
}

if(!props.context){
_this._navigationContext=new _ExNavigationContext2.default({
router:props.router});

}else{
_this._navigationContext=props.context;
}

_this._backButtonManager=(0,_ExNavigationBackButtonManager.createBackButtonManager)();return _this;
}_createClass(ExNavigationProvider,[{key:'componentWillMount',value:function componentWillMount()

{
this._backButtonManager.setStore(this._navigationContext.store);
this._navigationContext.dispatch(_ExNavigationActions2.default.initialize());
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this._backButtonManager.unsetStore(this._navigationContext.store);
}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
this.props.children));


}}]);return ExNavigationProvider;}(_react2.default.Component),_class.childContextTypes={navigationStore:_storeShape2.default.isRequired,navigation:_react.PropTypes.instanceOf(_ExNavigationContext2.default)},_temp);exports.default=ExNavigationProvider;


var styles=_reactNative.StyleSheet.create({
container:{
position:'absolute',
top:0,
left:0,
right:0,
bottom:0}});