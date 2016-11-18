Object.defineProperty(exports,"__esModule",{value:true});exports.StackNavigatorContextType=exports.NavigationPropType=undefined;var _react=require('react');

var NavigationPropType=exports.NavigationPropType=_react.PropTypes.shape({
getNavigator:_react.PropTypes.func.isRequired});


var StackNavigatorContextType=exports.StackNavigatorContextType=_react.PropTypes.shape({
push:_react.PropTypes.func.isRequired,
pop:_react.PropTypes.func.isRequired,
popToTop:_react.PropTypes.func.isRequired,
replace:_react.PropTypes.func.isRequired});