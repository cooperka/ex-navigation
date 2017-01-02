Object.defineProperty(exports,"__esModule",{value:true});exports.







































batchNavigationActions=batchNavigationActions;exports.



enableActionBatching=enableActionBatching;exports.










createNavigationEnabledStore=createNavigationEnabledStore;exports.default=






















createNavigationStore;var _redux=require('redux');var _ExNavigationReducer=require('./ExNavigationReducer');var _ExNavigationReducer2=_interopRequireDefault(_ExNavigationReducer);var _ExNavigationMiddleware=require('./ExNavigationMiddleware');var _ExNavigationMiddleware2=_interopRequireDefault(_ExNavigationMiddleware);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}var BATCH_ACTION='EX_NAVIGATION.BATCH';function batchNavigationActions(actions){return{type:BATCH_ACTION,payload:actions};}function enableActionBatching(reduce){return function batchingReducer(state,action){switch(action.type){case BATCH_ACTION:return action.payload.reduce(batchingReducer,state);default:return reduce(state,action);}};}function createNavigationEnabledStore(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var _ref$createStore=_ref.createStore;var createStoreFn=_ref$createStore===undefined?_redux.createStore:_ref$createStore;var _ref$navigationStateK=_ref.navigationStateKey;var navigationStateKey=_ref$navigationStateK===undefined?'navigation':_ref$navigationStateK;return function(reducer){var initialState=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var enhancer=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var reducerWithNav=enableActionBatching(reducer);var enhancerWithNav=void 0;if(typeof enhancer==='function'){enhancerWithNav=(0,_redux.compose)(_redux.applyMiddleware.apply(undefined,_toConsumableArray((0,_ExNavigationMiddleware2.default)(navigationStateKey))),enhancer);}else{enhancerWithNav=_redux.applyMiddleware.apply(undefined,_toConsumableArray((0,_ExNavigationMiddleware2.default)(navigationStateKey)));}var store=createStoreFn(reducerWithNav,initialState,enhancerWithNav);store.__exNavigationStateKey=navigationStateKey;return store;};}function createNavigationStore(){
var reducers={
navigation:_ExNavigationReducer2.default};

return createNavigationEnabledStore()((0,_redux.combineReducers)(reducers));
}