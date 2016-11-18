Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.







unsupportedNativeView=unsupportedNativeView;var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function unsupportedNativeView(name){
return function(_React$Component){_inherits(ExUnsupportedNativeView,_React$Component);function ExUnsupportedNativeView(){_classCallCheck(this,ExUnsupportedNativeView);return _possibleConstructorReturn(this,(ExUnsupportedNativeView.__proto__||Object.getPrototypeOf(ExUnsupportedNativeView)).apply(this,arguments));}_createClass(ExUnsupportedNativeView,[{key:'componentWillMount',value:function componentWillMount()
{
if(__DEV__){
console.log('Attempted to use native '+name+', this isn\'t supported outside of Exponent');
console.log('If you would like to make it work, submit a PR to: https://github.com/exponent/ex-navigation');
console.log('If you are using Exponent, make sure that you have imported the `exponent` module in your app');
}
}},{key:'render',value:function render()

{
return null;
}}]);return ExUnsupportedNativeView;}(_react2.default.Component);

}