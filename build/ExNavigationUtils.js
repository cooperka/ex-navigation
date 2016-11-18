Object.defineProperty(exports,"__esModule",{value:true});exports.







createLogger=createLogger;var _debug=require('debug');var _debug2=_interopRequireDefault(_debug);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}if(__DEV__){_debug2.default.enable('ExNavigation:*');}_debug2.default.useColors=function(){return true;};function createLogger(prefix){
return(0,_debug2.default)('ExNavigation:'+prefix);
}