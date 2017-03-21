Object.defineProperty(exports,"__esModule",{value:true});exports.NoAnimation=exports.Fade=exports.FloatVertical=exports.SlideVertical=exports.FloatHorizontal=exports.SlideHorizontal=exports.SlideHorizontalFixedNav=exports.SlideHorizontalIOS=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.















setUseNativeDriverExperimental=setUseNativeDriverExperimental;var _reactNative=require('react-native');var _NavigationExperiment=_reactNative.NavigationExperimental.Card;var CardStackStyleInterpolator=_NavigationExperiment.CardStackStyleInterpolator;var CardStackPanResponder=_NavigationExperiment.CardStackPanResponder;var useNativeDriver=false;function setUseNativeDriverExperimental(use){
useNativeDriver=use;
}

var configureTimingTransition=function configureTimingTransition(transitionProps,previousTransitionProps){return{
timing:_reactNative.Animated.timing,
easing:_reactNative.Easing.inOut(_reactNative.Easing.linear),
duration:150,
useNativeDriver:useNativeDriver};};


var configureSpringTransition=function configureSpringTransition(transitionProps,previousTransitionProps){
var speed=15;
var restSpeedThreshold=0.001;
var restDisplacementThreshold=0.001;


if(previousTransitionProps.navigationState.index>=transitionProps.navigationState.index){
speed=40;
restSpeedThreshold=0.2;
restDisplacementThreshold=0.15;
}

return{
timing:_reactNative.Animated.spring,
bounciness:0,
speed:speed,
restSpeedThreshold:restSpeedThreshold,
restDisplacementThreshold:restDisplacementThreshold,
useNativeDriver:useNativeDriver};

};

var configureNoopTransition=function configureNoopTransition(transitionProps,previousTransitionProps){return{
timing:_reactNative.Animated.timing,
duration:1,
useNativeDriver:useNativeDriver};};





function forInitial(props){var

navigationState=

props.navigationState;var scene=props.scene;

var focused=navigationState.index===scene.index;
var opacity=focused?1:0;

var translate=focused?0:1000000;
return{
opacity:opacity,
transform:[
{translateX:translate},
{translateY:translate}]};


}

function customForHorizontal(props){var

layout=


props.layout;var position=props.position;var scene=props.scene;

if(!layout.isMeasured){
return forInitial(props);
}

var index=scene.index;
var inputRange=[index-1,index,index+1];
var width=layout.initWidth;

var outputRange=void 0;
if(_reactNative.I18nManager&&_reactNative.I18nManager.isRTL){
outputRange=[-width,0,100];
}else{
outputRange=[width,0,-100];
}

var opacity=position.interpolate({
inputRange:inputRange,
outputRange:[1,1,0.3]});


var translateY=0;
var translateX=position.interpolate({
inputRange:inputRange,
outputRange:outputRange});


return{
opacity:opacity,
transform:[
{translateX:translateX},
{translateY:translateY}]};


}

var SlideHorizontalIOS=exports.SlideHorizontalIOS={
configureTransition:configureSpringTransition,
sceneAnimations:customForHorizontal,
navigationBarAnimations:{
forContainer:function forContainer(props,delta){var

layout=



props.layout;var position=props.position;var scene=props.scene;var scenes=props.scenes;

var index=scene.index;

var meVisible=barVisibleForSceneIndex(scenes,index);
var offset=layout.initWidth;
if(delta===0){

offset=meVisible?offset:-offset;
}else{

var prevVisible=barVisibleForSceneIndex(scenes,index+(delta>0?-1:1));
if(!prevVisible&&meVisible){

offset=delta>0?offset:-offset;
}else{

offset=delta>0?-offset:offset;
}
}

return{
transform:[
{
translateX:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[
barVisibleForSceneIndex(scenes,index-1)?0:offset,
barVisibleForSceneIndex(scenes,index)?0:offset,
barVisibleForSceneIndex(scenes,index+1)?0:offset]})}]};





},



forLeft:function forLeft(props){var
position=props.position;var scene=props.scene;var scenes=props.scenes;var
index=scene.index;
return{
opacity:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[0,barVisibleForSceneIndex(scenes,index)?1:0,0]})};


},



forCenter:function forCenter(props){var
position=props.position;var scene=props.scene;var scenes=props.scenes;var
index=scene.index;
return{
opacity:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[0,barVisibleForSceneIndex(scenes,index)?1:0,0]}),

transform:[
{
translateX:position.interpolate({
inputRange:[index-1,index+1],
outputRange:[200,-200]})}]};




},



forRight:function forRight(props){var
position=props.position;var scene=props.scene;var scenes=props.scenes;var
index=scene.index;
return{
opacity:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[0,barVisibleForSceneIndex(scenes,index)?1:0,0]})};


}},

gestures:CardStackPanResponder.forHorizontal};



var SlideHorizontalFixedNav=exports.SlideHorizontalFixedNav={
configureTransition:configureSpringTransition,
sceneAnimations:customForHorizontal,
navigationBarAnimations:{
forContainer:function forContainer(props,delta){var

layout=



props.layout;var position=props.position;var scene=props.scene;var scenes=props.scenes;

var index=scene.index;

var meVisible=barVisibleForSceneIndex(scenes,index);
var offset=layout.initWidth;
if(delta===0){

offset=meVisible?offset:-offset;
}else{

var prevVisible=barVisibleForSceneIndex(scenes,index+(delta>0?-1:1));
if(!prevVisible&&meVisible){

offset=delta>0?offset:-offset;
}else{

offset=delta>0?-offset:offset;
}
}

return{
transform:[
{
translateX:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[
barVisibleForSceneIndex(scenes,index-1)?0:offset,
barVisibleForSceneIndex(scenes,index)?0:offset,
barVisibleForSceneIndex(scenes,index+1)?0:offset]})}]};





},



forLeft:function forLeft(props){var
position=props.position;var scene=props.scene;var scenes=props.scenes;var
index=scene.index;
return{
opacity:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[0,barVisibleForSceneIndex(scenes,index)?1:0,0]})};


},



forCenter:function forCenter(props){var
position=props.position;var scene=props.scene;var scenes=props.scenes;var
index=scene.index;
return{
opacity:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[0,barVisibleForSceneIndex(scenes,index)?1:0,0]})};


},



forRight:function forRight(props){var
position=props.position;var scene=props.scene;var scenes=props.scenes;var
index=scene.index;
return{
opacity:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[0,barVisibleForSceneIndex(scenes,index)?1:0,0]})};


},
gestures:CardStackPanResponder.forHorizontal}};



var SlideHorizontal=exports.SlideHorizontal={
configureTransition:configureSpringTransition,
sceneAnimations:customForHorizontal,
navigationBarAnimations:{
forContainer:function forContainer(props,delta){var

layout=



props.layout;var position=props.position;var scene=props.scene;var scenes=props.scenes;

var index=scene.index;

var meVisible=barVisibleForSceneIndex(scenes,index);
var offset=layout.initWidth;
if(delta===0){

offset=meVisible?offset:-offset;
}else{

var prevVisible=barVisibleForSceneIndex(scenes,index+(delta>0?-1:1));
if(!prevVisible&&meVisible){

offset=delta>0?offset:-offset;
}else{

offset=delta>0?-offset:offset;
}
}

return{
transform:[
{
translateX:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[
barVisibleForSceneIndex(scenes,index-1)?0:offset,
barVisibleForSceneIndex(scenes,index)?0:offset,
barVisibleForSceneIndex(scenes,index+1)?0:offset]})}]};





},



forLeft:function forLeft(props){var
position=props.position;var scene=props.scene;var scenes=props.scenes;var
index=scene.index;
return{
opacity:position.interpolate({
inputRange:[index-1,index-0.3,index,index+0.3,index+1],
outputRange:[
0,
barVisibleForSceneIndex(scenes,index)?0.05:0,
barVisibleForSceneIndex(scenes,index)?1:0,
barVisibleForSceneIndex(scenes,index)?0.3:0,
0]})};



},



forCenter:function forCenter(props){var
position=props.position;var scene=props.scene;var scenes=props.scenes;var
index=scene.index;

return{
opacity:position.interpolate({
inputRange:[index-1,index-0.3,index,index+0.3,index+1],
outputRange:[
0,
barVisibleForSceneIndex(scenes,index)?0.1:0,
barVisibleForSceneIndex(scenes,index)?1:0,
barVisibleForSceneIndex(scenes,index)?0.3:0,
0]})};



},



forRight:function forRight(props){var
position=props.position;var scene=props.scene;var scenes=props.scenes;var
index=scene.index;
return{
opacity:position.interpolate({
inputRange:[index-1,index-0.3,index,index+0.3,index+1],
outputRange:[
0,
barVisibleForSceneIndex(scenes,index)?0.05:0,
barVisibleForSceneIndex(scenes,index)?1:0,
barVisibleForSceneIndex(scenes,index)?0.3:0,
0]})};



}},

gestures:CardStackPanResponder.forHorizontal};







var FloatHorizontal=exports.FloatHorizontal=SlideHorizontal;

function customForVertical(props){var

layout=


props.layout;var position=props.position;var scene=props.scene;

if(!layout.isMeasured){
return forInitial(props);
}

var index=scene.index;
var inputRange=[index-1,index,index+1];
var height=layout.initHeight;

var translateX=0;
var translateY=position.interpolate({
inputRange:inputRange,
outputRange:[height,0,0]});


return{
transform:[
{translateX:translateX},
{translateY:translateY}]};


}

var SlideVertical=exports.SlideVertical={
configureTransition:configureSpringTransition,
sceneAnimations:customForVertical,
navigationBarAnimations:{
forContainer:function forContainer(props,delta){var

layout=



props.layout;var position=props.position;var scene=props.scene;var scenes=props.scenes;

var index=scene.index;

var meVisible=barVisibleForSceneIndex(scenes,index);

var offset=layout.initHeight;
var fadeOffset=0;
if(delta===0){

offset=meVisible?offset:0;
fadeOffset=meVisible?1:0;
}else{
var prevVisible=barVisibleForSceneIndex(scenes,index+(delta>0?-1:1));
if(!prevVisible&&meVisible){

offset=delta>0?offset:0;
fadeOffset=delta>0?1:0;
}else{

offset=delta>0?0:offset;
fadeOffset=delta>0?0:1;
}
}

return{
opacity:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[
barVisibleForSceneIndex(scenes,index-1)?1:fadeOffset,
barVisibleForSceneIndex(scenes,index)?1:fadeOffset,
barVisibleForSceneIndex(scenes,index+1)?1:fadeOffset]}),


transform:[
{
translateY:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[
barVisibleForSceneIndex(scenes,index-1)?0:offset,
barVisibleForSceneIndex(scenes,index)?0:offset,
barVisibleForSceneIndex(scenes,index+1)?0:offset]})}]};





},



forLeft:function forLeft(props){var
position=props.position;var scene=props.scene;var scenes=props.scenes;var
index=scene.index;
return{
opacity:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[0,barVisibleForSceneIndex(scenes,index)?1:0,0]})};


},



forCenter:function forCenter(props){var
position=props.position;var scene=props.scene;var scenes=props.scenes;var
index=scene.index;
return{
opacity:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[0,barVisibleForSceneIndex(scenes,index)?1:0,0]})};


},



forRight:function forRight(props){var
position=props.position;var scene=props.scene;var scenes=props.scenes;var
index=scene.index;
return{
opacity:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[0,barVisibleForSceneIndex(scenes,index)?1:0,0]})};


}},

gestures:CardStackPanResponder.forVertical};


var FloatVertical=exports.FloatVertical={
configureTransition:configureSpringTransition,
sceneAnimations:CardStackStyleInterpolator.forVertical,
navigationBarAnimations:{
forContainer:function forContainer(props,delta){var

layout=



props.layout;var position=props.position;var scene=props.scene;var scenes=props.scenes;

var index=scene.index;

var meVisible=barVisibleForSceneIndex(scenes,index);

var offset=layout.initHeight;
var fadeOffset=0;
if(delta===0){

offset=meVisible?offset:0;
fadeOffset=meVisible?1:0;
}else{
var prevVisible=barVisibleForSceneIndex(scenes,index+(delta>0?-1:1));
if(!prevVisible&&meVisible){

offset=delta>0?offset:0;
fadeOffset=delta>0?1:0;
}else{

offset=delta>0?0:offset;
fadeOffset=delta>0?0:1;
}
}

return{
opacity:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[
barVisibleForSceneIndex(scenes,index-1)?1:fadeOffset,
barVisibleForSceneIndex(scenes,index)?1:fadeOffset,
barVisibleForSceneIndex(scenes,index+1)?1:fadeOffset]}),


transform:[
{
translateY:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[
barVisibleForSceneIndex(scenes,index-1)?0:offset,
barVisibleForSceneIndex(scenes,index)?0:offset,
barVisibleForSceneIndex(scenes,index+1)?0:offset]})}]};





},



forLeft:function forLeft(props){var
position=props.position;var scene=props.scene;var scenes=props.scenes;var
index=scene.index;
return{
opacity:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[0,barVisibleForSceneIndex(scenes,index)?1:0,0]})};


},



forCenter:function forCenter(props){var
position=props.position;var scene=props.scene;var scenes=props.scenes;var
index=scene.index;
return{
opacity:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[0,barVisibleForSceneIndex(scenes,index)?1:0,0]})};


},



forRight:function forRight(props){var
position=props.position;var scene=props.scene;var scenes=props.scenes;var
index=scene.index;
return{
opacity:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[0,barVisibleForSceneIndex(scenes,index)?1:0,0]})};


}},

gestures:CardStackPanResponder.forVertical};


var Fade=exports.Fade={
configureTransition:configureTimingTransition,
sceneAnimations:function sceneAnimations(props){var

position=

props.position;var scene=props.scene;

var index=scene.index;
var inputRange=[index-1,index,index+1];

var opacity=position.interpolate({
inputRange:inputRange,
outputRange:[0,1,0]});


return{
opacity:opacity,
transform:[
{translateX:0},
{translateY:0},
{scale:1}]};


},
navigationBarAnimations:{
forContainer:function forContainer(props,delta){var

position=


props.position;var scene=props.scene;var scenes=props.scenes;

var index=scene.index;

return{
opacity:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[
barVisibleForSceneIndex(scenes,index-1)?1:0,
barVisibleForSceneIndex(scenes,index)?1:0,
barVisibleForSceneIndex(scenes,index+1)?1:0]})};



},



forLeft:function forLeft(props){var
position=props.position;var scene=props.scene;var scenes=props.scenes;var
index=scene.index;
return{
opacity:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[0,barVisibleForSceneIndex(scenes,index)?1:0,0]})};


},



forCenter:function forCenter(props){var
position=props.position;var scene=props.scene;var scenes=props.scenes;var
index=scene.index;
return{
opacity:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[0,barVisibleForSceneIndex(scenes,index)?1:0,0]})};


},



forRight:function forRight(props){var
position=props.position;var scene=props.scene;var scenes=props.scenes;var
index=scene.index;
return{
opacity:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[0,barVisibleForSceneIndex(scenes,index)?1:0,0]})};


}},

gestures:null};


var NoAnimation=exports.NoAnimation=_extends({},
Fade,{
configureTransition:configureNoopTransition});






function barVisibleForSceneIndex(scenes,sceneIndex){
var sceneForIndex=scenes[sceneIndex];
if(!sceneForIndex){
return true;
}var
route=sceneForIndex.route;
var navBarState=route.config.navigationBar;
return navBarState&&navBarState.visible!==false;
}