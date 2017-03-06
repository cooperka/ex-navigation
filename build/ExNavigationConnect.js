Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.default=













exNavConnect;var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactRedux=require('react-redux');var _storeShape=require('react-redux/lib/utils/storeShape');var _storeShape2=_interopRequireDefault(_storeShape);var _hoistNonReactStatics=require('hoist-non-react-statics');var _hoistNonReactStatics2=_interopRequireDefault(_hoistNonReactStatics);var _invariant=require('invariant');var _invariant2=_interopRequireDefault(_invariant);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function getDisplayName(WrappedComponent){return WrappedComponent.displayName||WrappedComponent.name||'Component';}function exNavConnect(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}
return function wrap(WrappedComponent){var _class,_temp;
var ConnectedComponent=_reactRedux.connect.apply(undefined,_toConsumableArray(args))(WrappedComponent);
var connectDisplayName='ExNavConnect('+getDisplayName(WrappedComponent)+')';var

ExNavConnect=(_temp=_class=function(_React$Component){_inherits(ExNavConnect,_React$Component);


function ExNavConnect(props,context){_classCallCheck(this,ExNavConnect);var _this=_possibleConstructorReturn(this,(ExNavConnect.__proto__||Object.getPrototypeOf(ExNavConnect)).call(this,
props,context));
_this.navigationStore=props.navigationStore||context.navigationStore;

(0,_invariant2.default)(_this.navigationStore,
'Could not find "navigationStore" in either the context or '+('props of "'+
connectDisplayName+'". ')+'Either wrap the root component in a <Provider>, '+('or explicitly pass "store" as a prop to "'+

connectDisplayName+'".'));return _this;

}_createClass(ExNavConnect,[{key:'render',value:function render()





{
return(
_react2.default.createElement(ConnectedComponent,_extends({store:this.navigationStore},this.props)));

}}]);return ExNavConnect;}(_react2.default.Component),_class.contextTypes={navigationStore:_storeShape2.default},_temp);


return(0,_hoistNonReactStatics2.default)(ExNavConnect,ConnectedComponent);
};
}