(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")***REMOVED***var f=n[o]={exports:{***REMOVED******REMOVED***;t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)***REMOVED***,f,f.exports,e,t,n,r)***REMOVED***return n[o].exports***REMOVED***var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s***REMOVED***)({1:[function(require,module,exports){
var Main = Main || {***REMOVED***;
var fn = require('./core/_fn.msx');
Main.Home = require('./main/home.msx');


// Window.menu = m.prop();
//
// Window.setup = function(){
//   m.redraw();
// ***REMOVED***;

// Window.requestMenu = fn.requestWithFeedback({method: "GET", url: "/setup/menu"***REMOVED***, Window.menu, Window.setup);


m.route(document.querySelector('#app'), "/", {
  "/": Main.Home
***REMOVED***);








module.exports = Main;

***REMOVED***,{"./core/_fn.msx":5,"./main/home.msx":7***REMOVED***],2:[function(require,module,exports){
var Content = function(ctrl){
    return {tag: "div", attrs: {className:"main mh500"***REMOVED***, children: [
        {tag: "div", attrs: {className:"sort roundbox"***REMOVED***, children: [
            {tag: "form", attrs: {name:"news_set_sort", id:"news_set_sort", method:"post", action:"http://englishtips.org/"***REMOVED***, children: ["Sort by: ", 
                /*<img src="Englishtips.org_%20Learning%20English%20Together_files/desc.gif" alt=""/>*/
                    {tag: "a", attrs: {href:"http://englishtips.org/#", onclick:"dle_change_sort('date','asc'); return false;"***REMOVED***, children: ["date"]***REMOVED***, 
                    {tag: "a", attrs: {href:"http://englishtips.org/#", onclick:"dle_change_sort('rating','desc'); return false;"***REMOVED***, children: ["rating"]***REMOVED***, 
                    {tag: "a", attrs: {href:"http://englishtips.org/#", onclick:"dle_change_sort('news_read','desc'); return false;"***REMOVED***, children: ["most visited"]***REMOVED***, 
                    {tag: "a", attrs: {href:"http://englishtips.org/#", onclick:"dle_change_sort('comm_num','desc'); return false;"***REMOVED***, children: ["comments"]***REMOVED***, 
                    {tag: "a", attrs: {href:"http://englishtips.org/#", onclick:"dle_change_sort('title','desc'); return false;"***REMOVED***, children: ["alphabetically"]***REMOVED***
          ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***, 
        
          Window.posts.map(function(el){
          return {tag: "div", attrs: {className:"block main-item"***REMOVED***, children: [
                    {tag: "a", attrs: {href:"#", className:"title"***REMOVED***, children: [el.title]***REMOVED***, 
                    {tag: "div", attrs: {className:"meta-data"***REMOVED***, children: [
                      {tag: "span", attrs: {className:"upload"***REMOVED***, children: [el.upload]***REMOVED***, 
                      {tag: "span", attrs: {className:"category"***REMOVED***, children: [
                      el.categories.map(function(item){
                        return {tag: "span", attrs: {***REMOVED***, children: [item]***REMOVED***
                    ***REMOVED***)
                    ***REMOVED******REMOVED***, 
                      {tag: "span", attrs: {className:"time"***REMOVED***, children: [moment(el.time).format('L')]***REMOVED***
                  ***REMOVED******REMOVED***, 
                    {tag: "div", attrs: {className:"info"***REMOVED***, children: [
                      {tag: "a", attrs: {href:"#"***REMOVED***, children: [{tag: "img", attrs: {src:"/image/get/" + el.cover.id, alt:el.cover.alt***REMOVED******REMOVED***]***REMOVED***, 
                      {tag: "p", attrs: {className:"description"***REMOVED***, children: [
                      (window.isMobile)?el.description.slice(0,250):el.description, " ..."
                    ***REMOVED******REMOVED***
                  ***REMOVED******REMOVED***
                ***REMOVED******REMOVED***
          ***REMOVED***)
        
  ***REMOVED******REMOVED***
***REMOVED***;


var data = [
    {
        "title": "Speakout 2E Upper Intermediate: Listening and Reading Extra",
        "upload": "Anonymous",
        "category" : ["Coursebooks", "Audio"],
        "time" : "today",
        "cover": "http://englishtips.org/uploads/posts/2016-09/thumbs/1473109042_448953.jpg",
        "description": "Discover the new edition of the award-winning course for teaching English as it is spoken. Using content from the BBC, Speakout 2nd Edition builds the skills and knowledge students need to communicate confidently. Speakout is the English language course that includes video content from the BBC to engage students and make teaching easier. It follows a balanced approach to topics, language development and skills work. Speaking activities are prominent, but not at the expense of the other core skills of reading, writing and listening, which are developed systematically throughout."
  ***REMOVED***,
    {
        "title": "Speakout 2E Upper Intermediate: Listening and Reading Extra",
        "upload": "Anonymous",
        "category" : ["Coursebooks", "Audio"],
        "time" : "today",
        "cover": "http://englishtips.org/uploads/posts/2016-09/thumbs/1473108834_extra.jpg",
        "description": "Discover the new edition of the award-winning course for teaching English as it is spoken. Using content from the BBC, Speakout 2nd Edition builds the skills and knowledge students need to communicate confidently. Speakout is the English language course that includes video content from the BBC to engage students and make teaching easier. It follows a balanced approach to topics, language development and skills work. Speaking activities are prominent, but not at the expense of the other core skills of reading, writing and listening, which are developed systematically throughout."
  ***REMOVED***,
    {
        "title": "Speakout 2E Upper Intermediate: Listening and Reading Extra",
        "upload": "Anonymous",
        "category" : ["Coursebooks", "Audio"],
        "time" : "today",
        "cover": "http://englishtips.org/uploads/posts/2016-09/thumbs/1473109042_448953.jpg",
        "description": "Discover the new edition of the award-winning course for teaching English as it is spoken. Using content from the BBC, Speakout 2nd Edition builds the skills and knowledge students need to communicate confidently. Speakout is the English language course that includes video content from the BBC to engage students and make teaching easier. It follows a balanced approach to topics, language development and skills work. Speaking activities are prominent, but not at the expense of the other core skills of reading, writing and listening, which are developed systematically throughout."
  ***REMOVED***,
    {
        "title": "Speakout 2E Upper Intermediate: Listening and Reading Extra",
        "upload": "Anonymous",
        "category" : ["Coursebooks", "Audio"],
        "time" : "today",
        "cover": "http://englishtips.org/uploads/posts/2016-09/thumbs/1473109042_448953.jpg",
        "description": "Discover the new edition of the award-winning course for teaching English as it is spoken. Using content from the BBC, Speakout 2nd Edition builds the skills and knowledge students need to communicate confidently. Speakout is the English language course that includes video content from the BBC to engage students and make teaching easier. It follows a balanced approach to topics, language development and skills work. Speaking activities are prominent, but not at the expense of the other core skills of reading, writing and listening, which are developed systematically throughout."
  ***REMOVED***,{
        "title": "Speakout 2E Upper Intermediate: Listening and Reading Extra",
        "upload": "Anonymous",
        "category" : ["Coursebooks", "Audio"],
        "time" : "today",
        "cover": "http://englishtips.org/uploads/posts/2016-09/thumbs/1473109042_448953.jpg",
        "description": "Discover the new edition of the award-winning course for teaching English as it is spoken. Using content from the BBC, Speakout 2nd Edition builds the skills and knowledge students need to communicate confidently. Speakout is the English language course that includes video content from the BBC to engage students and make teaching easier. It follows a balanced approach to topics, language development and skills work. Speaking activities are prominent, but not at the expense of the other core skills of reading, writing and listening, which are developed systematically throughout."
  ***REMOVED***
];

module.exports = Content;
***REMOVED***,{***REMOVED***],3:[function(require,module,exports){
var fn = require('../core/_fn.msx');

var Menu = function(ctrl){
    return [
        {tag: "div", attrs: {className:"menu"***REMOVED***, children: [
            fn.runCreateMenu(JSON.parse(Window.menu), 1)
      ***REMOVED******REMOVED***
  ***REMOVED***;
***REMOVED***;




module.exports = Menu;
***REMOVED***,{"../core/_fn.msx":5***REMOVED***],4:[function(require,module,exports){
var Side = function(ctrl){
    return {tag: "div", attrs: {className:"side mh1000"***REMOVED***, children: [
        "Side"
  ***REMOVED******REMOVED***
***REMOVED***

module.exports = Side;
***REMOVED***,{***REMOVED***],5:[function(require,module,exports){
var fn ={***REMOVED***;


fn.cache = undefined;
fn.url = m.route();

fn.checkMenu = function(link){
    console.log(m.route());
    var partRoute = m.route().split('/');
    var result = true;
    var partLink = link.replace('https://', '').replace('http://', '').split('/');
    if(!(partLink[1] === "c" || partLink[1] === "p")){
        return false;
  ***REMOVED***
    for(var i = 2; i < partLink.length; i++){
        if(partLink[i] != partRoute[i]){
            result = false;
      ***REMOVED***
  ***REMOVED***
    return result;
***REMOVED***;

fn.createMenu = function(menuJson, level){
    return m('ul.level' + level, [
        menuJson.map(function(child){
            return m('li',  [
                m('a', {title: child.title, href: child.http, config: m.route***REMOVED*** ,m('span', child.title)),
                (level > 1 )?{tag: "sup", attrs: {className:"norm"***REMOVED***, children: ["6431"]***REMOVED***:"",
                (child.children !== undefined)?fn.createMenu(child.children, level + 1):''
          ***REMOVED***)
      ***REMOVED***)
  ***REMOVED***)
***REMOVED***;

fn.runCreateMenu = function(menuJson, level){

    if(fn.cache !== undefined){
        return fn.cache;
  ***REMOVED*** else {
        if(menuJson !== undefined) {
            fn.cache = fn.createMenu(menuJson, level);
            return fn.cache;
      ***REMOVED***
  ***REMOVED***
***REMOVED***;


fn.toggleClass =  function(el, className){
    if(el.classList){
        if(el.classList.contains(className)) {
            el.classList.remove(className);
      ***REMOVED*** else {
            el.classList.add(className);
      ***REMOVED***

  ***REMOVED*** else {
        el.className += ' ' + className;
  ***REMOVED***
***REMOVED***;

fn.requestWithFeedback = function(args, bind, fn) {
    console.log("get menu!");
    var data = m.prop();
    var completed = m.prop(false);
    var complete = function() {
        completed(true)
  ***REMOVED***;
    args.background = true;
    args.config = function(xhr) {
        xhr.timeout = 4000;
        xhr.ontimeout = function() {
            complete();
            m.redraw();
      ***REMOVED***
  ***REMOVED***;
    return {
        request: m.request(args).then(data).then(function(data){
            if(bind !== undefined) bind(data);
            if(fn !== undefined) fn();
            complete();
            m.redraw();
      ***REMOVED***),
        data: data,
        ready: completed
  ***REMOVED***
***REMOVED***;

module.exports = fn;
***REMOVED***,{***REMOVED***],6:[function(require,module,exports){
"use strict";

window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;***REMOVED***)(navigator.userAgent||navigator.vendor||window.opera);
  return check;
***REMOVED***;

window.isMobile = window.mobilecheck();

m.route.mode = "pathname";

//window.Nav = require('./_nav.msx');
window.Main = require('./_main.msx');
//window.Footer = require('./_footer.msx');



//re-route to dashboard
//m.route("/dashboard"); // logs "unloading home component"








***REMOVED***,{"./_main.msx":1***REMOVED***],7:[function(require,module,exports){
var Home = {***REMOVED***;
var Menu = require('../component/_menu.msx');
var fn = require('../core/_fn.msx');
var Content = require('../component/_content.msx');
var Side = require('../component/_side.msx');


Home.controller = function(){
  var ctrl = this;
  ctrl.setup = function(){
    m.redraw();
***REMOVED***;
  // ctrl.post = m.prop([]);
  // ctrl.request = fn.requestWithFeedback({method: "GET", url: "/post/1"***REMOVED***, ctrl.post, ctrl.setup);
***REMOVED***;

Home.view = function(ctrl){
  return [
    {tag: "div", attrs: {className:"container mh1000"***REMOVED***, children: [
            {tag: "span", attrs: {className:"menu-icon", 
                  onclick:function(){
                    var el = document.querySelectorAll('.menu')[0];
                    var el2 = document.querySelectorAll('.content')[0];
                    fn.toggleClass(el, "menu-active");
                    fn.toggleClass(el2, "menu-active");
                ***REMOVED***
          ***REMOVED***, children: ["Menu"]***REMOVED***, 
      {tag: "div", attrs: {className:"headWr "***REMOVED***, children: [
        "head"
    ***REMOVED******REMOVED***, 
      {tag: "div", attrs: {className:"bodyWr"***REMOVED***, children: [
        Menu(ctrl), 
        {tag: "div", attrs: {className:"content mh1000 "***REMOVED***, children: [
          Content(ctrl), 
          Side(ctrl)
      ***REMOVED******REMOVED***
    ***REMOVED******REMOVED***
    
  ***REMOVED******REMOVED***
***REMOVED***
***REMOVED***;

module.exports =  Home;
***REMOVED***,{"../component/_content.msx":2,"../component/_menu.msx":3,"../component/_side.msx":4,"../core/_fn.msx":5***REMOVED***]***REMOVED***,{***REMOVED***,[6])