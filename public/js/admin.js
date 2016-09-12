(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")***REMOVED***var f=n[o]={exports:{***REMOVED******REMOVED***;t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)***REMOVED***,f,f.exports,e,t,n,r)***REMOVED***return n[o].exports***REMOVED***var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s***REMOVED***)({1:[function(require,module,exports){

var Main = Main || {***REMOVED***;

Main.Home = require('./main/home.msx');
Main.NewProduct = require('./main/newproduct.msx');
Main.NewCategory = require('./main/newcategory.msx');
Main.MenuController = require('./main/menucontroller.msx');
//Main.Dashboard = require('./main/_dashboard.msx');
// Main.Product = require('./main/_product.msx');
// Main.Category = require('./main/_category.msx');
// Main.Search = require('./main/_search.msx');


m.route(document.querySelector('#app'), "/", {
  "/": Main.NewProduct,
  "/category/create": Main.NewCategory,
  "/menu": Main.MenuController
***REMOVED***);

m.route('/menu');


module.exports = Main;
***REMOVED***,{"./main/home.msx":11,"./main/menucontroller.msx":12,"./main/newcategory.msx":13,"./main/newproduct.msx":14***REMOVED***],2:[function(require,module,exports){
"use strict";

window.token = $(document.getElementsByName("csrfToken")).val();
// alert($(token).val());
$(document).ajaxSend(function(elm, xhr, s){
  if (s.type == "POST") {
    xhr.setRequestHeader('Csrf-Token', window.token);
***REMOVED***
***REMOVED***);

window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;***REMOVED***)(navigator.userAgent||navigator.vendor||window.opera);
  return check;
***REMOVED***;



window.isMobile = window.mobilecheck();


m.route.mode = "hash";

//window.Nav = require('./_nav.msx');
window.Main = require('./_main.msx');
//window.Footer = require('./_footer.msx');







***REMOVED***,{"./_main.msx":1***REMOVED***],3:[function(require,module,exports){
var Content = function(ctrl){
  return [
    {tag: "hr", attrs: {className:"ruler-xxl"***REMOVED******REMOVED***,
    {tag: "div", attrs: {className:"content"***REMOVED***, children: [
        {tag: "section", attrs: {***REMOVED***, children: [
          {tag: "div", attrs: {className:"section-body"***REMOVED***, children: [
            {tag: "div", attrs: {className:"row"***REMOVED***, children: [
      
              {tag: "div", attrs: {className:"col-md-3 col-sm-6"***REMOVED***, children: [
                {tag: "div", attrs: {className:"card"***REMOVED***, children: [
                  {tag: "div", attrs: {className:"card-body no-padding"***REMOVED***, children: [
                    {tag: "div", attrs: {className:"alert alert-callout alert-info no-margin"***REMOVED***, children: [
                      {tag: "strong", attrs: {className:"pull-right text-success text-lg"***REMOVED***, children: ["0,38% ", {tag: "i", attrs: {className:"md md-trending-up"***REMOVED******REMOVED***]***REMOVED***, 
                      {tag: "strong", attrs: {className:"text-xl"***REMOVED***, children: ["$ 32,829"]***REMOVED***, {tag: "br", attrs: {***REMOVED******REMOVED***, 
                      {tag: "span", attrs: {className:"opacity-50"***REMOVED***, children: ["Revenue"]***REMOVED***, 
                      {tag: "div", attrs: {className:"stick-bottom-left-right"***REMOVED***, children: [
                        {tag: "div", attrs: {className:"height-2 sparkline-revenue", "data-line-color":"#bdc1c1"***REMOVED******REMOVED***
                    ***REMOVED******REMOVED***
                  ***REMOVED******REMOVED***
                ***REMOVED******REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***, 
              {tag: "div", attrs: {className:"col-md-3 col-sm-6"***REMOVED***, children: [
                {tag: "div", attrs: {className:"card"***REMOVED***, children: [
                  {tag: "div", attrs: {className:"card-body no-padding"***REMOVED***, children: [
                    {tag: "div", attrs: {className:"alert alert-callout alert-warning no-margin"***REMOVED***, children: [
                      {tag: "strong", attrs: {className:"pull-right text-warning text-lg"***REMOVED***, children: ["0,01% ", {tag: "i", attrs: {className:"md md-swap-vert"***REMOVED******REMOVED***]***REMOVED***, 
                      {tag: "strong", attrs: {className:"text-xl"***REMOVED***, children: ["432,901"]***REMOVED***, {tag: "br", attrs: {***REMOVED******REMOVED***, 
                      {tag: "span", attrs: {className:"opacity-50"***REMOVED***, children: ["Visits"]***REMOVED***, 
                      {tag: "div", attrs: {className:"stick-bottom-right"***REMOVED***, children: [
                        {tag: "div", attrs: {className:"height-1 sparkline-visits", "data-bar-color":"#e5e6e6"***REMOVED******REMOVED***
                    ***REMOVED******REMOVED***
                  ***REMOVED******REMOVED***
                ***REMOVED******REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***, 
              {tag: "div", attrs: {className:"col-md-3 col-sm-6"***REMOVED***, children: [
                {tag: "div", attrs: {className:"card"***REMOVED***, children: [
                  {tag: "div", attrs: {className:"card-body no-padding"***REMOVED***, children: [
                    {tag: "div", attrs: {className:"alert alert-callout alert-danger no-margin"***REMOVED***, children: [
                      {tag: "strong", attrs: {className:"pull-right text-danger text-lg"***REMOVED***, children: ["0,18% ", {tag: "i", attrs: {className:"md md-trending-down"***REMOVED******REMOVED***]***REMOVED***, 
                      {tag: "strong", attrs: {className:"text-xl"***REMOVED***, children: ["42.90%"]***REMOVED***, {tag: "br", attrs: {***REMOVED******REMOVED***, 
                      {tag: "span", attrs: {className:"opacity-50"***REMOVED***, children: ["Bounce rate"]***REMOVED***, 
                      {tag: "div", attrs: {className:"stick-bottom-left-right"***REMOVED***, children: [
                        {tag: "div", attrs: {className:"progress progress-hairline no-margin"***REMOVED***, children: [
                          {tag: "div", attrs: {className:"progress-bar progress-bar-danger", style:"width:43%"***REMOVED******REMOVED***
                      ***REMOVED******REMOVED***
                    ***REMOVED******REMOVED***
                  ***REMOVED******REMOVED***
                ***REMOVED******REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***, 
              {tag: "div", attrs: {className:"col-md-3 col-sm-6"***REMOVED***, children: [
                {tag: "div", attrs: {className:"card"***REMOVED***, children: [
                  {tag: "div", attrs: {className:"card-body no-padding"***REMOVED***, children: [
                    {tag: "div", attrs: {className:"alert alert-callout alert-success no-margin"***REMOVED***, children: [
                      {tag: "h1", attrs: {className:"pull-right text-success"***REMOVED***, children: [{tag: "i", attrs: {className:"md md-timer"***REMOVED******REMOVED***]***REMOVED***, 
                      {tag: "strong", attrs: {className:"text-xl"***REMOVED***, children: ["54 sec."]***REMOVED***, {tag: "br", attrs: {***REMOVED******REMOVED***, 
                      {tag: "span", attrs: {className:"opacity-50"***REMOVED***, children: ["Avg. time on site"]***REMOVED***
                  ***REMOVED******REMOVED***
                ***REMOVED******REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***
  
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***
    ***REMOVED******REMOVED***
***REMOVED***
***REMOVED***

module.exports = Content;
***REMOVED***,{***REMOVED***],4:[function(require,module,exports){
var fn = require('./fn.msx');

var input = m.prop("");

var data = m.prop({
  "slug": "",
  "name" : "",
  "description": "",
  "sku": {
    "parent_id" : "NONE",
    "name" : "NONE",
    "slug" : "NONE"
***REMOVED***
***REMOVED***);


var CreateMenu = function(ctrl){
  return [
    {tag: "hr", attrs: {className:"ruler-xxl"***REMOVED******REMOVED***,
    {tag: "div", attrs: {className:"content"***REMOVED***, children: [
      {tag: "section", attrs: {***REMOVED***, children: [
        {tag: "div", attrs: {className:"section-body"***REMOVED***, children: [
          {tag: "div", attrs: {className:"card"***REMOVED***, children: [
            {tag: "div", attrs: {className:"card-body"***REMOVED***, children: [
              {tag: "div", attrs: {class:"row"
            ***REMOVED***, children: [
                {tag: "div", attrs: {class:"box box-primary"***REMOVED***, children: [
                  {tag: "div", attrs: {class:"box-body"***REMOVED***, children: [
                    {tag: "div", attrs: {class:"dd", id:"domenu", 
                      config:function(el, isInited){
                        if(!isInited){
                          ctrl.domenu = $('#domenu').domenu({
                            onDomenuInitialized: [function() {
                              console.log('event: onDomenuInitialized', 'arguments:', arguments, 'context:', this);
                          ***REMOVED***],
                            data: JSON.stringify(ctrl.menu)
                        ***REMOVED***).parseJson()
                      ***REMOVED***
                    ***REMOVED***
                  ***REMOVED***, children: [
          
                      {tag: "button", attrs: {id:"domenu-add-item-btn", class:"dd-new-item"***REMOVED***, children: ["+"]***REMOVED***, 
          
                      {tag: "li", attrs: {class:"dd-item-blueprint"***REMOVED***, children: [
                        {tag: "div", attrs: {class:"dd-handle dd3-handle"***REMOVED***, children: ["Drag"]***REMOVED***, 
                        {tag: "div", attrs: {class:"dd3-content"***REMOVED***, children: [
                          {tag: "span", attrs: {***REMOVED***, children: ["[item_name]"]***REMOVED***, 
                          {tag: "div", attrs: {class:"button-container"***REMOVED***, children: [
                            {tag: "button", attrs: {class:"item-add"***REMOVED***, children: ["+"]***REMOVED***, 
                            {tag: "button", attrs: {class:"item-remove", "data-confirm-class":"item-remove-confirm"***REMOVED***, children: ["×"]***REMOVED***
                        ***REMOVED******REMOVED***, 
                          {tag: "div", attrs: {class:"dd-edit-box", style:"display: none;"***REMOVED***, children: [
                            {tag: "input", attrs: {type:"text", name:"title", id:"title", autocomplete:"off", placeholder:"Item", "data-placeholder":"Any nice idea for the title?", "data-default-value":"List Item. {?numeric.increment***REMOVED***"***REMOVED******REMOVED***, 
                            {tag: "input", attrs: {type:"text", name:"http", id:"http", placeholder:"", "data-placeholder":"Link", "data-default-value":"/{?numeric.increment***REMOVED***/{?numeric.increment***REMOVED***"***REMOVED******REMOVED***, 
                            {tag: "i", attrs: {class:"end-edit"***REMOVED***, children: ["✎"]***REMOVED***
                        ***REMOVED******REMOVED***
                      ***REMOVED******REMOVED***
                    ***REMOVED******REMOVED***, 
          
                      {tag: "ol", attrs: {class:"dd-list"***REMOVED******REMOVED***
                  ***REMOVED******REMOVED***, 
        
        
                    {tag: "button", attrs: {id:"update", 
                      onclick:function(el){
                        $(document).on('click', '#update', function(){
                          var json = ctrl.domenu.toJson();
                          console.log(json)
                          var request = $.ajax({
                            type: "POST",
                            url: "",
                            data: json,
                            contentType: "application/json; charset=utf-8",
                            dataType: "text"
                        ***REMOVED***);
                          request.done(function( msg ) {
                            alert( msg );
                        ***REMOVED***).then(function(){
                            location.reload();
                        ***REMOVED***);
                          request.fail(function( jqXHR, textStatus ) {
                            alert( "Request failed: " + textStatus );
                        ***REMOVED***);
                      ***REMOVED***);
                    ***REMOVED***
                  ***REMOVED***, children: ["Update"]***REMOVED***, 
                    {tag: "button", attrs: {id:"preview", 
                            onclick:function(){
                              console.log("click")
                          ***REMOVED***
                  ***REMOVED***, children: ["PreView"]***REMOVED***
                ***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
    
                {tag: "div", attrs: {id:"view"***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***, 
          
          {tag: "div", attrs: {className:"row"***REMOVED***
          
        ***REMOVED***, 
          
          {tag: "div", attrs: {className:"offcanvas"***REMOVED***, children: [
            {tag: "div", attrs: {id:"offcanvas-demo-size4", className:"offcanvas-pane width-12 " + (ctrl.showImgList?"active":""), style:"width: 800px; " + (ctrl.showImgList?"transform: translate(-800px, 0px)":(""))***REMOVED***, children: [
              {tag: "div", attrs: {className:"offcanvas-head"***REMOVED***, children: [
                {tag: "header", attrs: {***REMOVED***, children: ["Images controller "]***REMOVED***, 
                {tag: "div", attrs: {className:"offcanvas-tools"***REMOVED***, children: [
                  {tag: "a", attrs: {className:"btn btn-icon-toggle btn-default-light pull-right", "data-dismiss":"offcanvas", 
                     onclick:function(){
                       {/*ctrl.showImgList = false;*/***REMOVED***
                   ***REMOVED***
                ***REMOVED***, children: [
                    {tag: "i", attrs: {className:"md md-close"***REMOVED******REMOVED***
                ***REMOVED******REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***, 
              {tag: "div", attrs: {className:"nano has-scrollbar", style:"height: 90vh;"***REMOVED***, children: [
                {tag: "div", attrs: {className:"nano-content", tabindex:"0", style:"right: -15px;"***REMOVED***, children: [
                  {tag: "div", attrs: {className:"offcanvas-body"***REMOVED***, children: [
                    {tag: "div", attrs: {className:"card-body"***REMOVED***, children: [
                      "test"
                  ***REMOVED******REMOVED***
                  
                  
                ***REMOVED******REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***
        
        
      ***REMOVED******REMOVED***
    ***REMOVED******REMOVED***
  ***REMOVED******REMOVED***,
    ctrl.showImgList?({tag: "div", attrs: {className:"backdrop", 
                           onclick:function(){
                             ctrl.showImgList = false;
                         ***REMOVED***
  ***REMOVED******REMOVED***):""
***REMOVED***
***REMOVED***;

var categories = [
  {
    "slug": "1",
    "name": "mot",
    "description": "abc",
***REMOVED***,
  {
    "slug": "2",
    "name": "hai",
    "description": "abc",
***REMOVED***,
  {
    "slug": "3",
    "name": "ba",
    "description": "abc",
***REMOVED***
]


module.exports = CreateMenu;
***REMOVED***,{"./fn.msx":10***REMOVED***],5:[function(require,module,exports){


var Header = function(ctrl){
  return [
  {tag: "header", attrs: {id:"header"***REMOVED***, children: [
    {tag: "div", attrs: {className:"headerbar"***REMOVED***, children: [
      
      {tag: "div", attrs: {className:"headerbar-left"***REMOVED***, children: [
        {tag: "ul", attrs: {className:"header-nav header-nav-options"***REMOVED***, children: [
          {tag: "li", attrs: {className:"header-nav-brand"***REMOVED***, children: [
            {tag: "div", attrs: {className:"brand-holder"***REMOVED***, children: [
              {tag: "a", attrs: {href:"../../html/dashboards/dashboard.html"***REMOVED***, children: [
                {tag: "span", attrs: {className:"text-lg text-bold text-primary"***REMOVED***, children: ["MATERIAL ADMIN"]***REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***, 
          {tag: "li", attrs: {***REMOVED***, children: [
            {tag: "a", attrs: {className:"btn btn-icon-toggle menubar-toggle", "data-toggle":"menubar", href:"javascript:void(0);"***REMOVED***, children: [
              {tag: "i", attrs: {className:"fa fa-bars"***REMOVED******REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***
    ***REMOVED******REMOVED***, 
      
      
      {tag: "div", attrs: {className:"headerbar-right"***REMOVED***, children: [
        {tag: "div", attrs: {className:"header-nav header-nav-options"***REMOVED***, children: [
          {tag: "li", attrs: {***REMOVED***, children: [
            {tag: "form", attrs: {className:"navbar-search", role:"search"***REMOVED***, children: [
              {tag: "div", attrs: {className:"form-group"***REMOVED***, children: [
                {tag: "input", attrs: {type:"text", className:"form-control", name:"headerSearch", placeholder:"Enter your keyword"***REMOVED******REMOVED***
            ***REMOVED******REMOVED***, 
              {tag: "button", attrs: {type:"submit", className:"btn btn-icon-toggle ink-reaction"***REMOVED***, children: [{tag: "i", attrs: {className:"fa fa-search"***REMOVED******REMOVED***]***REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***, 
          {tag: "li", attrs: {className:"dropdown hidden-xs"***REMOVED***, children: [
            {tag: "a", attrs: {href:"javascript:void(0);", className:"btn btn-icon-toggle btn-default", "data-toggle":"dropdown"***REMOVED***, children: [
              {tag: "i", attrs: {className:"fa fa-bell"***REMOVED******REMOVED***, {tag: "sup", attrs: {className:"badge style-danger"***REMOVED***, children: ["4"]***REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "ul", attrs: {className:"dropdown-menu animation-expand"***REMOVED***, children: [
              {tag: "li", attrs: {className:"dropdown-header"***REMOVED***, children: ["Today's messages"]***REMOVED***, 
              {tag: "li", attrs: {***REMOVED***, children: [
                {tag: "a", attrs: {className:"alert alert-callout alert-warning", href:"javascript:void(0);"***REMOVED***, children: [
                  {tag: "img", attrs: {className:"pull-right img-circle dropdown-avatar", src:"/assets/admin/img/avatar2.jpg?1404026449", alt:""***REMOVED******REMOVED***, 
                  {tag: "strong", attrs: {***REMOVED***, children: ["Alex Anistor"]***REMOVED***, {tag: "br", attrs: {***REMOVED******REMOVED***, 
                  {tag: "small", attrs: {***REMOVED***, children: ["Testing functionality..."]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***, 
              {tag: "li", attrs: {***REMOVED***, children: [
                {tag: "a", attrs: {className:"alert alert-callout alert-info", href:"javascript:void(0);"***REMOVED***, children: [
                  {tag: "img", attrs: {className:"pull-right img-circle dropdown-avatar", src:"/assets/admin/img/avatar3.jpg?1404026799", alt:""***REMOVED******REMOVED***, 
                  {tag: "strong", attrs: {***REMOVED***, children: ["Alicia Adell"]***REMOVED***, {tag: "br", attrs: {***REMOVED******REMOVED***, 
                  {tag: "small", attrs: {***REMOVED***, children: ["Reviewing last changes..."]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***, 
              {tag: "li", attrs: {className:"dropdown-header"***REMOVED***, children: ["Options"]***REMOVED***, 
              {tag: "li", attrs: {***REMOVED***, children: [{tag: "a", attrs: {href:"../../html/pages/login.html"***REMOVED***, children: ["View all messages ", {tag: "span", attrs: {className:"pull-right"***REMOVED***, children: [{tag: "i", attrs: {className:"fa fa-arrow-right"***REMOVED******REMOVED***]***REMOVED***]***REMOVED***]***REMOVED***, 
              {tag: "li", attrs: {***REMOVED***, children: [{tag: "a", attrs: {href:"../../html/pages/login.html"***REMOVED***, children: ["Mark as read ", {tag: "span", attrs: {className:"pull-right"***REMOVED***, children: [{tag: "i", attrs: {className:"fa fa-arrow-right"***REMOVED******REMOVED***]***REMOVED***]***REMOVED***]***REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***, 
          {tag: "li", attrs: {className:"dropdown hidden-xs"***REMOVED***, children: [
            {tag: "a", attrs: {href:"javascript:void(0);", className:"btn btn-icon-toggle btn-default", "data-toggle":"dropdown"***REMOVED***, children: [
              {tag: "i", attrs: {className:"fa fa-area-chart"***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "ul", attrs: {className:"dropdown-menu animation-expand"***REMOVED***, children: [
              {tag: "li", attrs: {className:"dropdown-header"***REMOVED***, children: ["Server load"]***REMOVED***, 
              {tag: "li", attrs: {className:"dropdown-progress"***REMOVED***, children: [
                {tag: "a", attrs: {href:"javascript:void(0);"***REMOVED***, children: [
                  {tag: "div", attrs: {className:"dropdown-label"***REMOVED***, children: [
                    {tag: "span", attrs: {className:"text-light"***REMOVED***, children: ["Server load ", {tag: "strong", attrs: {***REMOVED***, children: ["Today"]***REMOVED***]***REMOVED***, 
                    {tag: "strong", attrs: {className:"pull-right"***REMOVED***, children: ["93%"]***REMOVED***
                ***REMOVED******REMOVED***, 
                  {tag: "div", attrs: {className:"progress"***REMOVED***, children: [{tag: "div", attrs: {className:"progress-bar progress-bar-danger", style:"width: 93%"***REMOVED******REMOVED***]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***, 
              {tag: "li", attrs: {className:"dropdown-progress"***REMOVED***, children: [
                {tag: "a", attrs: {href:"javascript:void(0);"***REMOVED***, children: [
                  {tag: "div", attrs: {className:"dropdown-label"***REMOVED***, children: [
                    {tag: "span", attrs: {className:"text-light"***REMOVED***, children: ["Server load ", {tag: "strong", attrs: {***REMOVED***, children: ["Yesterday"]***REMOVED***]***REMOVED***, 
                    {tag: "strong", attrs: {className:"pull-right"***REMOVED***, children: ["30%"]***REMOVED***
                ***REMOVED******REMOVED***, 
                  {tag: "div", attrs: {className:"progress"***REMOVED***, children: [{tag: "div", attrs: {className:"progress-bar progress-bar-success", style:"width: 30%"***REMOVED******REMOVED***]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***, 
              {tag: "li", attrs: {className:"dropdown-progress"***REMOVED***, children: [
                {tag: "a", attrs: {href:"javascript:void(0);"***REMOVED***, children: [
                  {tag: "div", attrs: {className:"dropdown-label"***REMOVED***, children: [
                    {tag: "span", attrs: {className:"text-light"***REMOVED***, children: ["Server load ", {tag: "strong", attrs: {***REMOVED***, children: ["Lastweek"]***REMOVED***]***REMOVED***, 
                    {tag: "strong", attrs: {className:"pull-right"***REMOVED***, children: ["74%"]***REMOVED***
                ***REMOVED******REMOVED***, 
                  {tag: "div", attrs: {className:"progress"***REMOVED***, children: [{tag: "div", attrs: {className:"progress-bar progress-bar-warning", style:"width: 74%"***REMOVED******REMOVED***]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***, 
        
        
        {tag: "ul", attrs: {className:"header-nav header-nav-profile"***REMOVED***, children: [
          {tag: "li", attrs: {className:"dropdown"***REMOVED***, children: [
            {tag: "a", attrs: {href:"javascript:void(0);", className:"dropdown-toggle ink-reaction", "data-toggle":"dropdown"***REMOVED***, children: [
              {tag: "img", attrs: {src:"/assets/admin/img/avatar1.jpg?1403934956", alt:""***REMOVED******REMOVED***, 
              {tag: "span", attrs: {className:"profile-info"***REMOVED***, children: [
                  "Daniel Johnson", 
                  {tag: "small", attrs: {***REMOVED***, children: ["Administrator"]***REMOVED***
              ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "ul", attrs: {className:"dropdown-menu animation-dock"***REMOVED***, children: [
              {tag: "li", attrs: {className:"dropdown-header"***REMOVED***, children: ["Config"]***REMOVED***, 
              {tag: "li", attrs: {***REMOVED***, children: [{tag: "a", attrs: {href:"../../html/pages/profile.html"***REMOVED***, children: ["My profile"]***REMOVED***]***REMOVED***, 
              {tag: "li", attrs: {***REMOVED***, children: [{tag: "a", attrs: {href:"../../html/pages/blog/post.html"***REMOVED***, children: ["My blog ", {tag: "span", attrs: {className:"badge style-danger pull-right"***REMOVED***, children: ["16"]***REMOVED***]***REMOVED***]***REMOVED***, 
              {tag: "li", attrs: {***REMOVED***, children: [{tag: "a", attrs: {href:"../../html/pages/calendar.html"***REMOVED***, children: ["My appointments"]***REMOVED***]***REMOVED***, 
              {tag: "li", attrs: {className:"divider"***REMOVED******REMOVED***, 
              {tag: "li", attrs: {***REMOVED***, children: [{tag: "a", attrs: {href:"../../html/pages/locked.html"***REMOVED***, children: [{tag: "i", attrs: {className:"fa fa-fw fa-lock"***REMOVED******REMOVED***, " Lock"]***REMOVED***]***REMOVED***, 
              {tag: "li", attrs: {***REMOVED***, children: [{tag: "a", attrs: {href:"../../html/pages/login.html"***REMOVED***, children: [{tag: "i", attrs: {className:"fa fa-fw fa-power-off text-danger"***REMOVED******REMOVED***, " Logout"]***REMOVED***]***REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***, 
  
  
        {tag: "ul", attrs: {className:"header-nav header-nav-toggle"***REMOVED***, children: [
          {tag: "li", attrs: {***REMOVED***, children: [
            {tag: "a", attrs: {className:"btn btn-icon-toggle btn-default", href:"#offcanvas-search", "data-toggle":"offcanvas", "data-backdrop":"false"***REMOVED***, children: [
              {tag: "i", attrs: {className:"fa fa-ellipsis-v"***REMOVED******REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***
    ***REMOVED******REMOVED***
      
  ***REMOVED******REMOVED***
***REMOVED******REMOVED***
***REMOVED***
***REMOVED*** ;

module.exports = Header;
***REMOVED***,{***REMOVED***],6:[function(require,module,exports){
var Menu = function(ctrl){
  return [
    {tag: "div", attrs: {id:"menubar", className:"menubar-inverse "***REMOVED***, children: [
      {tag: "div", attrs: {className:"menubar-fixed-panel"***REMOVED***, children: [
        {tag: "div", attrs: {***REMOVED***, children: [
          {tag: "a", attrs: {className:"btn btn-icon-toggle btn-default menubar-toggle", "data-toggle":"menubar", href:"javascript:void(0);"***REMOVED***, children: [
            {tag: "i", attrs: {className:"fa fa-bars"***REMOVED******REMOVED***
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***, 
        {tag: "div", attrs: {className:"expanded"***REMOVED***, children: [
          {tag: "a", attrs: {href:"../../html/dashboards/dashboard.html"***REMOVED***, children: [
            {tag: "span", attrs: {className:"text-lg text-bold text-primary "***REMOVED***, children: ["MATERIAL ADMIN"]***REMOVED***
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***
    ***REMOVED******REMOVED***, 
      
      
      
      {tag: "div", attrs: {className:"menubar-scroll-panel", 
        onmouseleave:function(){
          $('body').removeClass('menubar-visible');
      ***REMOVED***, 
       onmouseenter:function(){
         $('body').addClass('menubar-visible');
     ***REMOVED***
    ***REMOVED***, children: [
        
        {tag: "div", attrs: {className:"gui-controls", id:"main-menu"***REMOVED***, children: [
          {tag: "li", attrs: {***REMOVED***, children: [
            {tag: "a", attrs: {href:"../../html/dashboards/dashboard.html", className:"active"***REMOVED***, children: [
              {tag: "div", attrs: {className:"gui-icon"***REMOVED***, children: [{tag: "i", attrs: {className:"md md-home"***REMOVED******REMOVED***]***REMOVED***, 
              {tag: "span", attrs: {className:"title"***REMOVED***, children: ["Dashboard"]***REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***, 
          {tag: "li", attrs: {className:"gui-folder"***REMOVED***, children: [
            {tag: "a", attrs: {***REMOVED***, children: [
              {tag: "div", attrs: {className:"gui-icon"***REMOVED***, children: [{tag: "i", attrs: {className:"md md-email"***REMOVED******REMOVED***]***REMOVED***, 
              {tag: "span", attrs: {className:"title"***REMOVED***, children: ["Email"]***REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "ul", attrs: {***REMOVED***, children: [
              {tag: "li", attrs: {***REMOVED***, children: [{tag: "a", attrs: {href:"../../html/mail/inbox.html"***REMOVED***, children: [{tag: "span", attrs: {className:"title"***REMOVED***, children: ["Inbox"]***REMOVED***]***REMOVED***]***REMOVED***, 
              {tag: "li", attrs: {***REMOVED***, children: [{tag: "a", attrs: {href:"../../html/mail/compose.html"***REMOVED***, children: [{tag: "span", attrs: {className:"title"***REMOVED***, children: ["Compose"]***REMOVED***]***REMOVED***]***REMOVED***, 
              {tag: "li", attrs: {***REMOVED***, children: [{tag: "a", attrs: {href:"../../html/mail/reply.html"***REMOVED***, children: [{tag: "span", attrs: {className:"title"***REMOVED***, children: ["Reply"]***REMOVED***]***REMOVED***]***REMOVED***, 
              {tag: "li", attrs: {***REMOVED***, children: [{tag: "a", attrs: {href:"../../html/mail/message.html"***REMOVED***, children: [{tag: "span", attrs: {className:"title"***REMOVED***, children: ["View message"]***REMOVED***]***REMOVED***]***REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***, 
  
          {tag: "li", attrs: {***REMOVED***, children: [
            {tag: "a", attrs: {href:"../../html/layouts/builder.html"***REMOVED***, children: [
              {tag: "div", attrs: {className:"gui-icon"***REMOVED***, children: [{tag: "i", attrs: {className:"md md-web"***REMOVED******REMOVED***]***REMOVED***, 
              {tag: "span", attrs: {className:"title"***REMOVED***, children: ["Layouts"]***REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***
          
          
      ***REMOVED******REMOVED***, 
        
        
        {tag: "div", attrs: {className:"menubar-foot-panel"***REMOVED***, children: [
          {tag: "small", attrs: {className:"no-linebreak hidden-folded"***REMOVED***, children: [
            {tag: "span", attrs: {className:"opacity-75"***REMOVED***, children: ["Copyright © 2014"]***REMOVED***, " ", {tag: "strong", attrs: {***REMOVED***, children: ["CodeCovers"]***REMOVED***
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***
        
    ***REMOVED******REMOVED***
  ***REMOVED******REMOVED***
***REMOVED***
***REMOVED***

module.exports = Menu;
***REMOVED***,{***REMOVED***],7:[function(require,module,exports){
var fn = require('./fn.msx');

var input = m.prop("");

var data = m.prop({
  "slug": "",
  "name" : "",
  "description": "",
  "sku": {
    "parent_id" : "NONE",
    "name" : "NONE",
    "slug" : "NONE"
***REMOVED***
***REMOVED***);

var NewCategory = function(ctrl){
  return [
    {tag: "hr", attrs: {className:"ruler-xxl"***REMOVED******REMOVED***,
    {tag: "div", attrs: {className:"content"***REMOVED***, children: [
      {tag: "section", attrs: {***REMOVED***, children: [
        {tag: "div", attrs: {className:"section-body"***REMOVED***, children: [
          {tag: "div", attrs: {className:"card"***REMOVED***, children: [
            {tag: "div", attrs: {className:"card-body"***REMOVED***, children: [
              {tag: "form", attrs: {className:"form-horizontal", role:"form"***REMOVED***, children: [
                {tag: "button", attrs: {type:"button", className:"btn ink-reaction btn-raised btn-primary", style:"float: right", 
                  onclick:function(){
                    console.log(data());
                    {/*delete data().time;*/***REMOVED***
                    $.ajax({
                      type: "POST",
                      url: "/admin/newCategory",
                      data: JSON.stringify(data()),
                      contentType: "application/json",
                      dataType: "json",
                      success: function(data){
                    ***REMOVED***
                  ***REMOVED***);
                    
                ***REMOVED***
              ***REMOVED***, children: ["Publish"]***REMOVED***, 
                {tag: "button", attrs: {type:"button", className:"btn ink-reaction btn-raised", style:"float: right; margin-right: 20px;"***REMOVED***, children: ["Save"]***REMOVED***, 
                {tag: "br", attrs: {***REMOVED******REMOVED***, 
                {tag: "br", attrs: {***REMOVED******REMOVED***, 
  
                {tag: "div", attrs: {className:"form-group"***REMOVED***, children: [
                  {tag: "label", attrs: {htmlFor:"url", className:"col-sm-2 control-label"***REMOVED***, children: ["Url"]***REMOVED***, 
                  {tag: "div", attrs: {className:"col-sm-10"***REMOVED***, children: [
                      {tag: "input", attrs: {type:"text", className:"form-control", id:"url", name:"title", 
                             onchange:function(el){
                               data().slug = $(el.target).val()
                           ***REMOVED***, 
                             value:data().slug***REMOVED***
                    ***REMOVED***, 
                  {tag: "div", attrs: {className:"form-control-line"***REMOVED******REMOVED***
                ***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
  
                {tag: "div", attrs: {className:"form-group"***REMOVED***, children: [
                  {tag: "label", attrs: {htmlFor:"url", className:"col-sm-2 control-label"***REMOVED***, children: ["Name"]***REMOVED***, 
                  {tag: "div", attrs: {className:"col-sm-10"***REMOVED***, children: [
                      {tag: "input", attrs: {type:"text", className:"form-control", id:"url", name:"title", 
                             onchange:function(el){
                               data().name = $(el.target).val();
                               data().slug = fn.slug(data().name);
                           ***REMOVED***, 
                             value:(data().name === undefined)?"":(data().name)***REMOVED***
                    ***REMOVED***, 
                    {tag: "div", attrs: {className:"form-control-line"***REMOVED******REMOVED***
                ***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
  
                {tag: "div", attrs: {className:"form-group"***REMOVED***, children: [
                  {tag: "label", attrs: {htmlFor:"textarea", className:"col-sm-2 control-label"***REMOVED***, children: ["Description"]***REMOVED***, 
                  {tag: "div", attrs: {className:"col-sm-10"***REMOVED***, children: [
                    {tag: "textarea", attrs: {name:"textarea", id:"textarea", className:"form-control", rows:"3", placeholder:"", 
                              config:function(el, isInit, ctx){
                                if(!isInit) {
                                  $(el).val(data().description)
                              ***REMOVED***
                            ***REMOVED***, 
                              onkeydown:function(el){
                                data().description = $(el.target).val();
                            ***REMOVED***
                  ***REMOVED******REMOVED***, 
      
                    {tag: "div", attrs: {className:"form-control-line"***REMOVED******REMOVED***
                ***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
  
  
                {tag: "div", attrs: {className:"form-group"***REMOVED***, children: [
                  {tag: "label", attrs: {htmlFor:"categories", className:"col-sm-2 control-label"***REMOVED***, children: ["Category"]***REMOVED***, 
                  {tag: "div", attrs: {className:"col-sm-5 control-label"***REMOVED***, children: [
                    {tag: "select", attrs: {className:"form-control", size:"7", id:"categories", name:"categories", 
                            onchange:function(el){
                              
                          ***REMOVED***
                  ***REMOVED***, children: [
                      
                        ctrl.categories().map(function(el){
                          return {tag: "option", attrs: {
                              value:el._id, 
                              onclick:function(){
                                data().sku = {
                                  "parent_id": el.slug,
                                  "name": el.name,
                                  "slug": el.slug
                              ***REMOVED***;
                            ***REMOVED***
                        ***REMOVED***, children: [" ", el.name, " "]***REMOVED***
                      ***REMOVED***)
                      
                  ***REMOVED******REMOVED***
                ***REMOVED******REMOVED***
                 
              ***REMOVED******REMOVED***
                
                
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***, 
          
          {tag: "div", attrs: {className:"row"***REMOVED***
            
        ***REMOVED***, 
  
          {tag: "div", attrs: {className:"offcanvas"***REMOVED***, children: [
            {tag: "div", attrs: {id:"offcanvas-demo-size4", className:"offcanvas-pane width-12 " + (ctrl.showImgList?"active":""), style:"width: 800px; " + (ctrl.showImgList?"transform: translate(-800px, 0px)":(""))***REMOVED***, children: [
            {tag: "div", attrs: {className:"offcanvas-head"***REMOVED***, children: [
              {tag: "header", attrs: {***REMOVED***, children: ["Images controller "]***REMOVED***, 
              {tag: "div", attrs: {className:"offcanvas-tools"***REMOVED***, children: [
                {tag: "a", attrs: {className:"btn btn-icon-toggle btn-default-light pull-right", "data-dismiss":"offcanvas", 
                  onclick:function(){
                    {/*ctrl.showImgList = false;*/***REMOVED***
                ***REMOVED***
              ***REMOVED***, children: [
                  {tag: "i", attrs: {className:"md md-close"***REMOVED******REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "div", attrs: {className:"nano has-scrollbar", style:"height: 90vh;"***REMOVED***, children: [
              {tag: "div", attrs: {className:"nano-content", tabindex:"0", style:"right: -15px;"***REMOVED***, children: [
                {tag: "div", attrs: {className:"offcanvas-body"***REMOVED***, children: [
                  {tag: "div", attrs: {className:"card-body"***REMOVED***, children: [
                    "test"
                ***REMOVED******REMOVED***
                  
                
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***
        
          
      ***REMOVED******REMOVED***
    ***REMOVED******REMOVED***
  ***REMOVED******REMOVED***,
    ctrl.showImgList?({tag: "div", attrs: {className:"backdrop", 
      onclick:function(){
        ctrl.showImgList = false;
    ***REMOVED***
  ***REMOVED******REMOVED***):""
***REMOVED***
***REMOVED***;

var categories = [
  {
    "slug": "1",
    "name": "mot",
    "description": "abc",
***REMOVED***,
  {
    "slug": "2",
    "name": "hai",
    "description": "abc",
***REMOVED***,
  {
    "slug": "3",
    "name": "ba",
    "description": "abc",
***REMOVED***
]


module.exports = NewCategory;
***REMOVED***,{"./fn.msx":10***REMOVED***],8:[function(require,module,exports){
var fn = require('./fn.msx');

var input = m.prop("");
var data = m.prop({
  "id" : "",
  "title": "new file",
  "categories": ["1", "2"],
  "time": 1464226633054,
  "description" : "abc",
  "link": [
    {
        "url": "",
        "shortUrl": "",
        "filename": "",
        "filesize" : 0
  ***REMOVED***
***REMOVED***,
  "content": "## Noi dung",
  "cover" : {
    "id" : "2658af83-e844-469d-893c-203bf4aa9b83",
    "alt" : "anh dai dien"
***REMOVED***
***REMOVED***);

var NewProduct = function(ctrl){
  return [
    {tag: "hr", attrs: {className:"ruler-xxl"***REMOVED******REMOVED***,
    {tag: "div", attrs: {className:"content"***REMOVED***, children: [
      {tag: "section", attrs: {***REMOVED***, children: [
        {tag: "div", attrs: {className:"section-body"***REMOVED***, children: [
          {tag: "div", attrs: {className:"card"***REMOVED***, children: [
            {tag: "div", attrs: {className:"card-body"***REMOVED***, children: [
              {tag: "form", attrs: {className:"form-horizontal", role:"form"***REMOVED***, children: [
                
                {tag: "button", attrs: {type:"button", className:"btn ink-reaction btn-raised btn-primary", style:"float: right", 
                  onclick:function(){
                    {/*console.log(data());*/***REMOVED***
                    delete data().time;
                    $.ajax({
                      type: "POST",
                      url: "/admin/post",
                      data: JSON.stringify(data()),
                      contentType: "application/json",
                      dataType: "json",
                      success: function(data){
                    ***REMOVED***
                  ***REMOVED***);
                    
                ***REMOVED***
              ***REMOVED***, children: ["Publish"]***REMOVED***, 
                {tag: "button", attrs: {type:"button", className:"btn ink-reaction btn-raised", style:"float: right; margin-right: 20px;"***REMOVED***, children: ["Save"]***REMOVED***, 
                {tag: "br", attrs: {***REMOVED******REMOVED***, 
                {tag: "br", attrs: {***REMOVED******REMOVED***, 
  
                {tag: "div", attrs: {className:"form-group"***REMOVED***, children: [
                  {tag: "label", attrs: {htmlFor:"url", className:"col-sm-2 control-label"***REMOVED***, children: ["Url"]***REMOVED***, 
                  {tag: "div", attrs: {className:"col-sm-10"***REMOVED***, children: [
                    (data().id === undefined)?(
                        {tag: "input", attrs: {type:"text", className:"form-control", id:"url", name:"title"***REMOVED******REMOVED***
                    ):(
                        {tag: "input", attrs: {type:"text", className:"form-control", id:"url", name:"title", 
                               onchange:function(el){
                                 data().id = $(el.target).val()
                             ***REMOVED***, 
                               value:data().id***REMOVED***
                      ***REMOVED***
                    ), 
                    {tag: "div", attrs: {className:"form-control-line"***REMOVED******REMOVED***
                ***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
                
                {tag: "div", attrs: {className:"form-group"***REMOVED***, children: [
                  {tag: "label", attrs: {htmlFor:"title", className:"col-sm-2 control-label"***REMOVED***, children: ["Title"]***REMOVED***, 
                  {tag: "div", attrs: {className:"col-sm-10"***REMOVED***, children: [
                    (data().title === undefined)?(
                        {tag: "input", attrs: {type:"text", className:"form-control", id:"title", name:"title"***REMOVED******REMOVED***
                    ):(
                        {tag: "input", attrs: {type:"text", className:"form-control", id:"title", name:"title", 
                        onchange:function(el){
                          data().title = $(el.target).val();
                          data().id = fn.slug(data().title);
                      ***REMOVED***, 
                        value:data().title***REMOVED***
                      ***REMOVED***
                    ), 
                    {tag: "div", attrs: {className:"form-control-line"***REMOVED******REMOVED***
                ***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
  
                {tag: "div", attrs: {className:"form-group"***REMOVED***, children: [
                  {tag: "label", attrs: {htmlFor:"date", className:"col-sm-2 control-label"***REMOVED***, children: ["Upload Date"]***REMOVED***, 
                  {tag: "div", attrs: {className:"col-sm-2"***REMOVED***, children: [
                    {tag: "input", attrs: {type:"date", className:"form-control", id:"date", disabled:true,
                       value:(data().time !== undefined)?(moment.unix(data().time/1000).format("YYYY-MM-DD")):(moment().format("YYYY-MM-DD"))***REMOVED***
                  ***REMOVED***, 
                    {tag: "div", attrs: {className:"form-control-line"***REMOVED******REMOVED***
                ***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
  
                {tag: "div", attrs: {className:"form-group"***REMOVED***, children: [
                  {tag: "label", attrs: {htmlFor:"categories", className:"col-sm-2 control-label"***REMOVED***, children: ["Category"]***REMOVED***, 
                  {tag: "div", attrs: {className:"col-sm-5 control-label"***REMOVED***, children: [
                    {tag: "select", attrs: {multiple:true,className:"form-control", size:"7", id:"categories", name:"categories", 
                      onchange:function(el){
                        data().categories = $(el.target).val();
                    ***REMOVED***
                  ***REMOVED***, children: [
                      (data().categories === undefined)?[
                          categories.map(function(el){
                            return {tag: "option", attrs: {
                                value:el._id
                          ***REMOVED***, children: [" ", el.name, " "]***REMOVED***
                        ***REMOVED***)
                    ***REMOVED***:[
                        categories.map(function(el){
                          return {tag: "option", attrs: {
                              value:el._id, 
                              selected:
                                (data().categories.indexOf(el._id) >= 0)?"true":""
                              
                        ***REMOVED***, children: [" ", el.name, " "]***REMOVED***
                      ***REMOVED***)
                    ***REMOVED***
                  ***REMOVED******REMOVED***
                ***REMOVED******REMOVED***, 
                  /*<label htmlFor="image" className="col-sm-1 control-label">Cover</label>*/
                  {tag: "div", attrs: {className:"col-sm-2 control-label"***REMOVED***, children: [
                    {tag: "img", attrs: {src:"image/get/" + data().cover.id, alt:data().cover.alt, 
                      style:"cursor: pointer", 
                      onclick:function(){
                        ctrl.request = fn.requestWithFeedback({method: "GET", url: "/image/list/1"***REMOVED***, ctrl.imgList, ctrl.setup);
                        ctrl.showImgList = true;
                        
                    ***REMOVED******REMOVED***
                  ***REMOVED***
                ***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
                
                {tag: "div", attrs: {className:"form-group"***REMOVED***, children: [
                  {tag: "label", attrs: {htmlFor:"textarea", className:"col-sm-2 control-label"***REMOVED***, children: ["Description"]***REMOVED***, 
                  {tag: "div", attrs: {className:"col-sm-10"***REMOVED***, children: [
                    {tag: "textarea", attrs: {name:"textarea", id:"textarea", className:"form-control", rows:"3", placeholder:"", 
                      config:function(el, isInit, ctx){
                        if(!isInit) {
                          $(el).val(data().description)
                      ***REMOVED***
                    ***REMOVED***, 
                      onkeydown:function(el){
                        data().description = $(el.target).val();
                    ***REMOVED***
                  ***REMOVED******REMOVED***, 
                    
                    {tag: "div", attrs: {className:"form-control-line"***REMOVED******REMOVED***
                ***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
  
                (data().link === undefined)?[
                  {tag: "div", attrs: {className:"form-group"***REMOVED***, children: [
                    {tag: "label", attrs: {htmlFor:"url", className:"col-sm-2 control-label"***REMOVED***, children: ["File 1"]***REMOVED***, 
                    {tag: "div", attrs: {className:"col-sm-3"***REMOVED***, children: [
                      {tag: "input", attrs: {type:"text", className:"form-control", id:"url", name:"url", placeholder:"URL"***REMOVED******REMOVED***, {tag: "div", attrs: {className:"form-control-line"***REMOVED******REMOVED***
                  ***REMOVED******REMOVED***, 
                    {tag: "div", attrs: {className:"col-sm-5"***REMOVED***, children: [
                      {tag: "input", attrs: {type:"text", className:"form-control", id:"", placeholder:"File name"***REMOVED******REMOVED***, {tag: "div", attrs: {className:"form-control-line"***REMOVED******REMOVED***
                  ***REMOVED******REMOVED***, 
                    {tag: "div", attrs: {className:"col-sm-2"***REMOVED***, children: [
                      {tag: "input", attrs: {disabled:true,type:"text", className:"form-control", id:"", placeholder:"File size"***REMOVED******REMOVED***, {tag: "div", attrs: {className:"form-control-line"***REMOVED******REMOVED***
                  ***REMOVED******REMOVED***
                ***REMOVED******REMOVED***
              ***REMOVED***:[
                    data().link.map(function(el, index){
                      return (
                          {tag: "div", attrs: {className:"form-group"***REMOVED***, children: [
                            {tag: "label", attrs: {htmlFor:"url" + (index+1), className:"col-sm-2 control-label"***REMOVED***, children: ["File ", index + 1]***REMOVED***, 
                            {tag: "div", attrs: {className:"col-sm-2"***REMOVED***, children: [
                              {tag: "input", attrs: {type:"text", className:"form-control", id:"url" + (index+1), name:"url" + (index+1), placeholder:"URL", 
                                     onchange:function(item){
                                       data().link[index].url = $(item.target).val();
                                       $.ajax({
                                         type: "POST",
                                         url: "/file/getSize",
                                         data: JSON.stringify({"url" : data().link[index].url***REMOVED***),
                                         contentType: "application/json",
                                         dataType: "json",
                                         success: function(res){
                                           data().link[index].filesize = res.size;
                                           console.log(data().link[index])
                                           m.redraw();
                                       ***REMOVED***
                                     ***REMOVED***);
                                   ***REMOVED***, 
                                     value:el.url***REMOVED***
                            ***REMOVED***, {tag: "div", attrs: {className:"form-control-line"***REMOVED******REMOVED***
                          ***REMOVED******REMOVED***, 
                            {tag: "div", attrs: {className:"col-sm-2"***REMOVED***, children: [
                              {tag: "input", attrs: {type:"text", className:"form-control", placeholder:"Short Url", 
                                     onchange:function(item){
                                       data().link[index].shortUrl = $(item.target).val();
                                   ***REMOVED***, 
                                     value:el.shortUrl***REMOVED***
                            ***REMOVED***, {tag: "div", attrs: {className:"form-control-line"***REMOVED******REMOVED***
                          ***REMOVED******REMOVED***, 
                            {tag: "div", attrs: {className:"col-sm-3"***REMOVED***, children: [
                              {tag: "input", attrs: {type:"text", className:"form-control", id:"", placeholder:"File name", 
                                     onchange:function(item){
                                       data().link[index].filename = $(item.target).val();
                                   ***REMOVED***, 
                                     value:el.filename***REMOVED***
                            ***REMOVED***, {tag: "div", attrs: {className:"form-control-line"***REMOVED******REMOVED***
                          ***REMOVED******REMOVED***, 
                            {tag: "div", attrs: {className:"col-sm-2"***REMOVED***, children: [
                              {tag: "input", attrs: {disabled:true,type:"number", className:"form-control", id:"", placeholder:"File size", 
                                     value:(el.filesize>0)?(el.filesize):""***REMOVED***
                            ***REMOVED***, {tag: "div", attrs: {className:"form-control-line"***REMOVED******REMOVED***
                          ***REMOVED******REMOVED***, 
                            {tag: "div", attrs: {className:"col-sm-1"***REMOVED***, children: [
                              {tag: "button", attrs: {type:"button", className:"btn btn-floating-action", 
                                onclick:function(){
                                  data().link.splice(index, 1);
                              ***REMOVED***
                            ***REMOVED***, children: [{tag: "i", attrs: {className:"glyphicon glyphicon-remove"***REMOVED******REMOVED***]***REMOVED***
                          ***REMOVED******REMOVED***
                        ***REMOVED******REMOVED***
                      )
                  ***REMOVED***)
                  
              ***REMOVED***, 
  
                {tag: "button", attrs: {type:"button", className:"btn ink-reaction btn-flat btn-primary btn-loading-state", style:"float: right", 
                  onclick:function(el){
                    data().link.push(
                        {
                          "url": "",
                          "shortUrl": "",
                          "filename": "",
                          "filesize" : 0
                      ***REMOVED***
                    )
                ***REMOVED***
              ***REMOVED***, children: ["Add new file"]***REMOVED***
                
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***, 
          
          {tag: "div", attrs: {className:"row"***REMOVED***, children: [
            {tag: "div", attrs: {className:"col-md-6"***REMOVED***, children: [
              {tag: "div", attrs: {className:"card"***REMOVED***, children: [
                {tag: "div", attrs: {className:"card-body"***REMOVED***, children: [
                  {tag: "div", attrs: {id:"editor", 
                       
                   config:
                     function(el, initOK ){
                         if(!initOK) {
                           var editor = ace.edit("editor");
                           editor.getSession().on('change', function () {
                             data().content = editor.getSession().getValue();
                             m.redraw();
                         ***REMOVED***);
                           {/*input(editor.getSession().getValue());*/***REMOVED***
                           data().content = editor.getSession().getValue()
                           m.redraw();
                           editor.$blockScrolling = Infinity;
                           editor.setOptions({
                             maxLines: Infinity,
                             wrap: true
                         ***REMOVED***);
                           editor.focus();
  
                           document.getElementById('editor').style.fontSize='14px';
                           document.getElementById('editor').style.lineHeight='20px';
  
                           fn.setupAce(editor);
                           
                       ***REMOVED***
                    ***REMOVED***
                    
                       
                ***REMOVED***, children: [
                    data().content
                ***REMOVED******REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
              
          ***REMOVED******REMOVED***, 
  
  
            {tag: "div", attrs: {className:"col-md-6"***REMOVED***, children: [
              {tag: "div", attrs: {className:"card"***REMOVED***, children: [
                {tag: "div", attrs: {id:"render", className:"card-body"***REMOVED***, children: [
                  
                    m("div", m.trust(marked(data().content)))
                  
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
  
          ***REMOVED******REMOVED***
            
        ***REMOVED******REMOVED***, 
          {tag: "div", attrs: {className:"row"***REMOVED***
            
        ***REMOVED***, 
  
          {tag: "div", attrs: {className:"offcanvas"***REMOVED***, children: [
            {tag: "div", attrs: {id:"offcanvas-demo-size4", className:"offcanvas-pane width-12 " + (ctrl.showImgList?"active":""), style:"width: 800px; " + (ctrl.showImgList?"transform: translate(-800px, 0px)":(""))***REMOVED***, children: [
            {tag: "div", attrs: {className:"offcanvas-head"***REMOVED***, children: [
              {tag: "header", attrs: {***REMOVED***, children: ["Images controller "]***REMOVED***, 
              {tag: "div", attrs: {className:"offcanvas-tools"***REMOVED***, children: [
                {tag: "a", attrs: {className:"btn btn-icon-toggle btn-default-light pull-right", "data-dismiss":"offcanvas", 
                  onclick:function(){
                    ctrl.showImgList = false;
                ***REMOVED***
              ***REMOVED***, children: [
                  {tag: "i", attrs: {className:"md md-close"***REMOVED******REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "div", attrs: {className:"nano has-scrollbar", style:"height: 90vh;"***REMOVED***, children: [
              {tag: "div", attrs: {className:"nano-content", tabindex:"0", style:"right: -15px;"***REMOVED***, children: [
                {tag: "div", attrs: {className:"offcanvas-body"***REMOVED***, children: [
                  {tag: "div", attrs: {className:"card-body"***REMOVED***, children: [
                    ctrl.imgList().map(function(el){
                      return {tag: "a", attrs: {href:"#", 
                        onclick:function(){
                          data().cover.id=el.id;
                          data().cover.alt=el.filename;
                      ***REMOVED***
                        
                    ***REMOVED***, children: [{tag: "img", attrs: {src:"image/get/" + el.id, alt:el.filename***REMOVED******REMOVED***]***REMOVED***
                  ***REMOVED***)
                ***REMOVED******REMOVED***, 
                  
                  
                  
                  {tag: "div", attrs: {className:"card-body"***REMOVED***, children: [
                    {tag: "div", attrs: {className:"btn-group"***REMOVED***, children: [
                      {tag: "button", attrs: {type:"button", className:"btn ink-reaction btn-default-bright"***REMOVED***, children: ["1"]***REMOVED***, 
                      {tag: "button", attrs: {type:"button", className:"btn ink-reaction btn-default-bright"***REMOVED***, children: ["2"]***REMOVED***, 
                      {tag: "button", attrs: {type:"button", className:"btn ink-reaction btn-default-bright"***REMOVED***, children: ["3"]***REMOVED***, 
                      {tag: "button", attrs: {type:"button", className:"btn ink-reaction btn-default-bright"***REMOVED***, children: ["4"]***REMOVED***, 
                      {tag: "button", attrs: {type:"button", className:"btn ink-reaction btn-default-bright"***REMOVED***, children: ["5"]***REMOVED***, 
                      {tag: "button", attrs: {type:"button", className:"btn ink-reaction btn-default-bright"***REMOVED***, children: ["6"]***REMOVED***, 
                      {tag: "input", attrs: {className:"btn ink-reaction btn-default-bright", name:"file", id:"file", type:"file", accept:"image/*", 
                        onchange:function(){
                          var file = $('#file').get(0).files[0];
                          var formData = new FormData();
                          formData.append('file', file);
                          $.ajax({
                            url: '/upload/image',
                            data: formData,
                            type: 'POST',
                            contentType: false,
                            processData: false,
                            beforeSend: function (data) {
                              alert('Are you sure you want to upload image?');
                          ***REMOVED***,
                            success: function (data) {
                              ctrl.request = fn.requestWithFeedback({method: "GET", url: "/image/list/1"***REMOVED***, ctrl.imgList, ctrl.setup);
                          ***REMOVED***,
                            error: function (jqXHR, textStatus, errorThrown) {
                              alert(textStatus + ': ' + errorThrown);
                          ***REMOVED***
                        ***REMOVED***);
                      ***REMOVED******REMOVED***
                    ***REMOVED***
                  
                  ***REMOVED******REMOVED***
                ***REMOVED******REMOVED***
                
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***
        
          
      ***REMOVED******REMOVED***
    ***REMOVED******REMOVED***
  ***REMOVED******REMOVED***,
    ctrl.showImgList?({tag: "div", attrs: {className:"backdrop", 
      onclick:function(){
        ctrl.showImgList = false;
    ***REMOVED***
  ***REMOVED******REMOVED***):""
***REMOVED***
***REMOVED***


var categories = [
  {
    "_id" : "1",
    "slug" : "sp-phan-cung",
    "name" : "SẢN PHẨM PHẦN CỨNG",
    "description" : "",
    "sku" : {
      "parent_id" : "NONE",
      "name" : "Category ??",
      "slug" : "NONE"
  ***REMOVED***
***REMOVED***,
  {
    "_id" : "2",
    "slug" : "stmicroelectronics",
    "name" : "STMicroelectronics",
    "description" : "",
    "sku" : {
      "parent_id" : "vi-dieu-khien",
      "name" : "Category ??",
      "slug" : "vi-dieu-khien"
  ***REMOVED***
***REMOVED***,
  {
    "_id" : "3",
    "slug" : "power-supply",
    "name" : "Power Supply",
    "description" : "",
    "sku" : {
      "parent_id" : "module",
      "name" : "Category ??",
      "slug" : "module"
  ***REMOVED***
***REMOVED***
];


var listImgs = [
    "http://englishtips.org/uploads/posts/2016-09/thumbs/1473295259_594549.jpg",
    "http://englishtips.org/uploads/posts/2016-09/thumbs/1473295259_594549.jpg",
    "http://englishtips.org/uploads/posts/2016-09/thumbs/2016090723420691521.jpg",
    "http://englishtips.org/uploads/posts/2016-09/thumbs/2016090723420691521.jpg",
    "http://englishtips.org/uploads/posts/2016-09/thumbs/2016090723420691521.jpg",
  "http://englishtips.org/uploads/posts/2016-09/thumbs/1473295259_594549.jpg",
  "http://englishtips.org/uploads/posts/2016-09/thumbs/1473295259_594549.jpg",
  "http://englishtips.org/uploads/posts/2016-09/thumbs/2016090723420691521.jpg",
  "http://englishtips.org/uploads/posts/2016-09/thumbs/2016090723420691521.jpg",
  "http://englishtips.org/uploads/posts/2016-09/thumbs/2016090723420691521.jpg",
  "http://englishtips.org/uploads/posts/2016-09/thumbs/1473295259_594549.jpg",
  "http://englishtips.org/uploads/posts/2016-09/thumbs/1473295259_594549.jpg",
  "http://englishtips.org/uploads/posts/2016-09/thumbs/2016090723420691521.jpg",
  "http://englishtips.org/uploads/posts/2016-09/thumbs/2016090723420691521.jpg",
  "http://englishtips.org/uploads/posts/2016-09/thumbs/2016090723420691521.jpg",
  "http://englishtips.org/uploads/posts/2016-09/thumbs/1473295259_594549.jpg",
  "http://englishtips.org/uploads/posts/2016-09/thumbs/1473295259_594549.jpg",
  "http://englishtips.org/uploads/posts/2016-09/thumbs/2016090723420691521.jpg",
  "http://englishtips.org/uploads/posts/2016-09/thumbs/2016090723420691521.jpg",
  "http://englishtips.org/uploads/posts/2016-09/thumbs/2016090723420691521.jpg",
]

module.exports = NewProduct;
***REMOVED***,{"./fn.msx":10***REMOVED***],9:[function(require,module,exports){
var Right = function(ctrl){
  return [
    {tag: "div", attrs: {className:"offcanvas"***REMOVED***, children: [
    
      {tag: "div", attrs: {id:"offcanvas-search", className:"offcanvas-pane width-8"***REMOVED***, children: [
        {tag: "div", attrs: {className:"offcanvas-head"***REMOVED***, children: [
          {tag: "header", attrs: {className:"text-primary"***REMOVED***, children: ["Search"]***REMOVED***, 
          {tag: "div", attrs: {className:"offcanvas-tools"***REMOVED***, children: [
            {tag: "a", attrs: {className:"btn btn-icon-toggle btn-default-light pull-right", "data-dismiss":"offcanvas"***REMOVED***, children: [
              {tag: "i", attrs: {className:"md md-close"***REMOVED******REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***, 
        {tag: "div", attrs: {className:"offcanvas-body no-padding"***REMOVED***, children: [
          {tag: "ul", attrs: {className:"list "***REMOVED***, children: [
            {tag: "li", attrs: {className:"tile divider-full-bleed"***REMOVED***, children: [
              {tag: "div", attrs: {className:"tile-content"***REMOVED***, children: [
                {tag: "div", attrs: {className:"tile-text"***REMOVED***, children: [{tag: "strong", attrs: {***REMOVED***, children: ["A"]***REMOVED***]***REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {className:"tile"***REMOVED***, children: [
              {tag: "a", attrs: {className:"tile-content ink-reaction", href:"#offcanvas-chat", "data-toggle":"offcanvas", "data-backdrop":"false"***REMOVED***, children: [
                {tag: "div", attrs: {className:"tile-icon"***REMOVED***, children: [
                  {tag: "img", attrs: {src:"/assets/admin/img/avatar4.jpg?1404026791", alt:""***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
                {tag: "div", attrs: {className:"tile-text"***REMOVED***, children: [
                  "Alex Nelson", 
                  {tag: "small", attrs: {***REMOVED***, children: ["123-123-3210"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {className:"tile"***REMOVED***, children: [
              {tag: "a", attrs: {className:"tile-content ink-reaction", href:"#offcanvas-chat", "data-toggle":"offcanvas", "data-backdrop":"false"***REMOVED***, children: [
                {tag: "div", attrs: {className:"tile-icon"***REMOVED***, children: [
                  {tag: "img", attrs: {src:"/assets/admin/img/avatar9.jpg?1404026744", alt:""***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
                {tag: "div", attrs: {className:"tile-text"***REMOVED***, children: [
                  "Ann Laurens", 
                  {tag: "small", attrs: {***REMOVED***, children: ["123-123-3210"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {className:"tile divider-full-bleed"***REMOVED***, children: [
              {tag: "div", attrs: {className:"tile-content"***REMOVED***, children: [
                {tag: "div", attrs: {className:"tile-text"***REMOVED***, children: [{tag: "strong", attrs: {***REMOVED***, children: ["J"]***REMOVED***]***REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {className:"tile"***REMOVED***, children: [
              {tag: "a", attrs: {className:"tile-content ink-reaction", href:"#offcanvas-chat", "data-toggle":"offcanvas", "data-backdrop":"false"***REMOVED***, children: [
                {tag: "div", attrs: {className:"tile-icon"***REMOVED***, children: [
                  {tag: "img", attrs: {src:"/assets/admin/img/avatar2.jpg?1404026449", alt:""***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
                {tag: "div", attrs: {className:"tile-text"***REMOVED***, children: [
                  "Jessica Cruise", 
                  {tag: "small", attrs: {***REMOVED***, children: ["123-123-3210"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {className:"tile"***REMOVED***, children: [
              {tag: "a", attrs: {className:"tile-content ink-reaction", href:"#offcanvas-chat", "data-toggle":"offcanvas", "data-backdrop":"false"***REMOVED***, children: [
                {tag: "div", attrs: {className:"tile-icon"***REMOVED***, children: [
                  {tag: "img", attrs: {src:"/assets/admin/img/avatar8.jpg?1404026729", alt:""***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
                {tag: "div", attrs: {className:"tile-text"***REMOVED***, children: [
                  "Jim Peters", 
                  {tag: "small", attrs: {***REMOVED***, children: ["123-123-3210"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {className:"tile divider-full-bleed"***REMOVED***, children: [
              {tag: "div", attrs: {className:"tile-content"***REMOVED***, children: [
                {tag: "div", attrs: {className:"tile-text"***REMOVED***, children: [{tag: "strong", attrs: {***REMOVED***, children: ["M"]***REMOVED***]***REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {className:"tile"***REMOVED***, children: [
              {tag: "a", attrs: {className:"tile-content ink-reaction", href:"#offcanvas-chat", "data-toggle":"offcanvas", "data-backdrop":"false"***REMOVED***, children: [
                {tag: "div", attrs: {className:"tile-icon"***REMOVED***, children: [
                  {tag: "img", attrs: {src:"/assets/admin/img/avatar5.jpg?1404026513", alt:""***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
                {tag: "div", attrs: {className:"tile-text"***REMOVED***, children: [
                  "Mabel Logan", 
                  {tag: "small", attrs: {***REMOVED***, children: ["123-123-3210"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {className:"tile"***REMOVED***, children: [
              {tag: "a", attrs: {className:"tile-content ink-reaction", href:"#offcanvas-chat", "data-toggle":"offcanvas", "data-backdrop":"false"***REMOVED***, children: [
                {tag: "div", attrs: {className:"tile-icon"***REMOVED***, children: [
                  {tag: "img", attrs: {src:"/assets/admin/img/avatar11.jpg?1404026774", alt:""***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
                {tag: "div", attrs: {className:"tile-text"***REMOVED***, children: [
                  "Mary Peterson", 
                  {tag: "small", attrs: {***REMOVED***, children: ["123-123-3210"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {className:"tile"***REMOVED***, children: [
              {tag: "a", attrs: {className:"tile-content ink-reaction", href:"#offcanvas-chat", "data-toggle":"offcanvas", "data-backdrop":"false"***REMOVED***, children: [
                {tag: "div", attrs: {className:"tile-icon"***REMOVED***, children: [
                  {tag: "img", attrs: {src:"/assets/admin/img/avatar3.jpg?1404026799", alt:""***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
                {tag: "div", attrs: {className:"tile-text"***REMOVED***, children: [
                  "Mike Alba", 
                  {tag: "small", attrs: {***REMOVED***, children: ["123-123-3210"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {className:"tile divider-full-bleed"***REMOVED***, children: [
              {tag: "div", attrs: {className:"tile-content"***REMOVED***, children: [
                {tag: "div", attrs: {className:"tile-text"***REMOVED***, children: [{tag: "strong", attrs: {***REMOVED***, children: ["N"]***REMOVED***]***REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {className:"tile"***REMOVED***, children: [
              {tag: "a", attrs: {className:"tile-content ink-reaction", href:"#offcanvas-chat", "data-toggle":"offcanvas", "data-backdrop":"false"***REMOVED***, children: [
                {tag: "div", attrs: {className:"tile-icon"***REMOVED***, children: [
                  {tag: "img", attrs: {src:"/assets/admin/img/avatar6.jpg?1404026572", alt:""***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
                {tag: "div", attrs: {className:"tile-text"***REMOVED***, children: [
                  "Nathan Peterson", 
                  {tag: "small", attrs: {***REMOVED***, children: ["123-123-3210"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {className:"tile divider-full-bleed"***REMOVED***, children: [
              {tag: "div", attrs: {className:"tile-content"***REMOVED***, children: [
                {tag: "div", attrs: {className:"tile-text"***REMOVED***, children: [{tag: "strong", attrs: {***REMOVED***, children: ["P"]***REMOVED***]***REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {className:"tile"***REMOVED***, children: [
              {tag: "a", attrs: {className:"tile-content ink-reaction", href:"#offcanvas-chat", "data-toggle":"offcanvas", "data-backdrop":"false"***REMOVED***, children: [
                {tag: "div", attrs: {className:"tile-icon"***REMOVED***, children: [
                  {tag: "img", attrs: {src:"/assets/admin/img/avatar7.jpg?1404026721", alt:""***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
                {tag: "div", attrs: {className:"tile-text"***REMOVED***, children: [
                  "Philip Ericsson", 
                  {tag: "small", attrs: {***REMOVED***, children: ["123-123-3210"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {className:"tile divider-full-bleed"***REMOVED***, children: [
              {tag: "div", attrs: {className:"tile-content"***REMOVED***, children: [
                {tag: "div", attrs: {className:"tile-text"***REMOVED***, children: [{tag: "strong", attrs: {***REMOVED***, children: ["S"]***REMOVED***]***REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {className:"tile"***REMOVED***, children: [
              {tag: "a", attrs: {className:"tile-content ink-reaction", href:"#offcanvas-chat", "data-toggle":"offcanvas", "data-backdrop":"false"***REMOVED***, children: [
                {tag: "div", attrs: {className:"tile-icon"***REMOVED***, children: [
                  {tag: "img", attrs: {src:"/assets/admin/img/avatar10.jpg?1404026762", alt:""***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
                {tag: "div", attrs: {className:"tile-text"***REMOVED***, children: [
                  "Samuel Parsons", 
                  {tag: "small", attrs: {***REMOVED***, children: ["123-123-3210"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***
    ***REMOVED******REMOVED***, 
      {tag: "div", attrs: {id:"offcanvas-chat", className:"offcanvas-pane style-default-light width-12"***REMOVED***, children: [
        {tag: "div", attrs: {className:"offcanvas-head style-default-bright"***REMOVED***, children: [
          {tag: "header", attrs: {className:"text-primary"***REMOVED***, children: ["Chat with Ann Laurens"]***REMOVED***, 
          {tag: "div", attrs: {className:"offcanvas-tools"***REMOVED***, children: [
            {tag: "a", attrs: {className:"btn btn-icon-toggle btn-default-light pull-right", "data-dismiss":"offcanvas"***REMOVED***, children: [
              {tag: "i", attrs: {className:"md md-close"***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "a", attrs: {className:"btn btn-icon-toggle btn-default-light pull-right", href:"#offcanvas-search", "data-toggle":"offcanvas", "data-backdrop":"false"***REMOVED***, children: [
              {tag: "i", attrs: {className:"md md-arrow-back"***REMOVED******REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***, 
          {tag: "form", attrs: {className:"form"***REMOVED***, children: [
            {tag: "div", attrs: {className:"form-group floating-label"***REMOVED***, children: [
              {tag: "textarea", attrs: {name:"sidebarChatMessage", id:"sidebarChatMessage", className:"form-control autosize", rows:"1"***REMOVED******REMOVED***, 
              {tag: "label", attrs: {for:"sidebarChatMessage"***REMOVED***, children: ["Leave a message"]***REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***, 
        {tag: "div", attrs: {className:"offcanvas-body"***REMOVED***, children: [
          {tag: "ul", attrs: {className:"list-chats"***REMOVED***, children: [
            {tag: "li", attrs: {***REMOVED***, children: [
              {tag: "div", attrs: {className:"chat"***REMOVED***, children: [
                {tag: "div", attrs: {className:"chat-avatar"***REMOVED***, children: [{tag: "img", attrs: {className:"img-circle", src:"/assets/admin/img/avatar1.jpg?1403934956", alt:""***REMOVED******REMOVED***]***REMOVED***, 
                {tag: "div", attrs: {className:"chat-body"***REMOVED***, children: [
                  "Yes, it is indeed very beautiful.", 
                  {tag: "small", attrs: {***REMOVED***, children: ["10:03 pm"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {className:"chat-left"***REMOVED***, children: [
              {tag: "div", attrs: {className:"chat"***REMOVED***, children: [
                {tag: "div", attrs: {className:"chat-avatar"***REMOVED***, children: [{tag: "img", attrs: {className:"img-circle", src:"/assets/admin/img/avatar9.jpg?1404026744", alt:""***REMOVED******REMOVED***]***REMOVED***, 
                {tag: "div", attrs: {className:"chat-body"***REMOVED***, children: [
                  "Did you see the changes?", 
                  {tag: "small", attrs: {***REMOVED***, children: ["10:02 pm"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {***REMOVED***, children: [
              {tag: "div", attrs: {className:"chat"***REMOVED***, children: [
                {tag: "div", attrs: {className:"chat-avatar"***REMOVED***, children: [{tag: "img", attrs: {className:"img-circle", src:"/assets/admin/img/avatar1.jpg?1403934956", alt:""***REMOVED******REMOVED***]***REMOVED***, 
                {tag: "div", attrs: {className:"chat-body"***REMOVED***, children: [
                  "I just arrived at work, it was quite busy.", 
                  {tag: "small", attrs: {***REMOVED***, children: ["06:44pm"]***REMOVED***
              ***REMOVED******REMOVED***, 
                {tag: "div", attrs: {className:"chat-body"***REMOVED***, children: [
                  "I will take look in a minute.", 
                  {tag: "small", attrs: {***REMOVED***, children: ["06:45pm"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {className:"chat-left"***REMOVED***, children: [
              {tag: "div", attrs: {className:"chat"***REMOVED***, children: [
                {tag: "div", attrs: {className:"chat-avatar"***REMOVED***, children: [{tag: "img", attrs: {className:"img-circle", src:"/assets/admin/img/avatar9.jpg?1404026744", alt:""***REMOVED******REMOVED***]***REMOVED***, 
                {tag: "div", attrs: {className:"chat-body"***REMOVED***, children: [
                  "The colors are much better now."
              ***REMOVED******REMOVED***, 
                {tag: "div", attrs: {className:"chat-body"***REMOVED***, children: [
                  "The colors are brighter than before." + ' ' +
                  "I have already sent an example." + ' ' +
                  "This will make it look sharper.", 
                  {tag: "small", attrs: {***REMOVED***, children: ["Mon"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {***REMOVED***, children: [
              {tag: "div", attrs: {className:"chat"***REMOVED***, children: [
                {tag: "div", attrs: {className:"chat-avatar"***REMOVED***, children: [{tag: "img", attrs: {className:"img-circle", src:"/assets/admin/img/avatar1.jpg?1403934956", alt:""***REMOVED******REMOVED***]***REMOVED***, 
                {tag: "div", attrs: {className:"chat-body"***REMOVED***, children: [
                  "Are the colors of the logo already adapted?", 
                  {tag: "small", attrs: {***REMOVED***, children: ["Last week"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***
    ***REMOVED******REMOVED***
  ***REMOVED******REMOVED***
***REMOVED***
***REMOVED***;

module.exports = Right;
***REMOVED***,{***REMOVED***],10:[function(require,module,exports){
var Fn = {***REMOVED***;


Fn.setupAce = function(editor){
  editor.renderer.setShowGutter(false);
  editor.setShowPrintMargin(false);
  
  editor.commands.addCommand({
    name: 'Ctrl_B',
    bindKey: {win: 'Ctrl-B',  mac: 'Command-B'***REMOVED***,
    exec: function(editor) {
      var selectedText = editor.getSelectedText() + "";
      var Range = ace.require('ace/range').Range;
      var row = editor.selection.getRange().start.row;
      var column = editor.selection.getRange().start.column;
      var columnEnd = editor.selection.getRange().end.column;
      var rangeBefore = new Range(row, column - 2, row, column);
      var rangeAfter = new Range(row, columnEnd, row, columnEnd + 2);
      var before = editor.getSession().doc.getTextRange(rangeBefore);
      var after = editor.getSession().doc.getTextRange(rangeAfter);
      if(before === "**" && after === '**') {
        editor.session.replace(rangeAfter, "");
        editor.session.replace(rangeBefore, "");
    ***REMOVED*** else {
        var x = "**" + selectedText +"**";
        editor.session.replace(editor.selection.getRange(), x);
        var length = x.length;
        //editor.selection.moveCursorToPosition({row: row, column: column - length***REMOVED***) ;
        var range = new Range(row, column + 2, row, columnEnd + 2);
        editor.selection.setSelectionRange(range, true);
    ***REMOVED***
  ***REMOVED***
***REMOVED***);
  
  editor.commands.addCommand({
    name: 'Ctrl_I',
    bindKey: {win: 'Ctrl-I',  mac: 'Command-I'***REMOVED***,
    exec: function(editor) {
      var selectedText = editor.getSelectedText() + "";
      var Range = ace.require('ace/range').Range;
      var row = editor.selection.getRange().start.row;
      var column = editor.selection.getRange().start.column;
      var columnEnd = editor.selection.getRange().end.column;
      var rangeBefore = new Range(row, column - 1, row, column);
      var rangeAfter = new Range(row, columnEnd, row, columnEnd + 1);
      var before = editor.getSession().doc.getTextRange(rangeBefore);
      var after = editor.getSession().doc.getTextRange(rangeAfter);
      if(before === "*" && after === '*') {
        editor.session.replace(rangeAfter, "");
        editor.session.replace(rangeBefore, "");
    ***REMOVED*** else {
        var x = "*" + selectedText +"*";
        editor.session.replace(editor.selection.getRange(), x);
        var length = x.length;
        //editor.selection.moveCursorToPosition({row: row, column: column - length***REMOVED***) ;
        var range = new Range(row, column + 1, row, columnEnd + 1);
        editor.selection.setSelectionRange(range, true);
    ***REMOVED***
  ***REMOVED***
***REMOVED***);
  
  editor.commands.addCommand({
    name: 'Alt_A',
    bindKey: {win: 'Alt-A',  mac: 'Alt-A'***REMOVED***,
    exec: function(editor) {
      editor.selection.selectWord()
  ***REMOVED***
***REMOVED***);
***REMOVED***;


Fn.requestWithFeedback = function(args, bind, fn) {
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

Fn.slug = function(str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  // remove accents, swap ñ for n, etc
  var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
  var to   = "aaaaaeeeeeiiiiooooouuuunc------";
  for (var i=0, l=from.length ; i<l ; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
***REMOVED***
  
  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes
  
  return str;
***REMOVED***;

Fn.bindOnce = (function() {
  console.log("run bindOnce")
  var cache = {***REMOVED***
  return function(view) {
    if (!cache[view.toString()]) {
      console.log("view")
      cache[view.toString()] = true
      return view()
  ***REMOVED***
    else return {subtree: "retain"***REMOVED***
***REMOVED***
***REMOVED***())

module.exports = Fn;
***REMOVED***,{***REMOVED***],11:[function(require,module,exports){
var Home = {***REMOVED***;
var Header = require('./_header.msx');
var Menu = require('./_menu.msx');
var Content = require('./_content.msx');
var Right = require('./_right.msx');
Home.controller = function(){
  
***REMOVED***;

Home.view = function(ctrl){
  return  [
      Header(ctrl),
      {tag: "div", attrs: {id:"base"***REMOVED***, children: [
        {tag: "div", attrs: {className:"offcanvas"***REMOVED******REMOVED***, 

        Content(ctrl), 
        
        Menu(ctrl), 
  
        Right(ctrl)
        
    ***REMOVED******REMOVED***
***REMOVED***
***REMOVED***;


module.exports = Home;
***REMOVED***,{"./_content.msx":3,"./_header.msx":5,"./_menu.msx":6,"./_right.msx":9***REMOVED***],12:[function(require,module,exports){
var MenuController = {***REMOVED***;
var Header = require('./_header.msx');
var Menu = require('./_menu.msx');
var CreateMenu = require('./_createMenu.msx');
var Right = require('./_right.msx');
var fn = require('./fn.msx');

var postData = {"ok": "data"***REMOVED***;


MenuController.controller = function(){
  var ctrl = this;
  ctrl.showImgList = false;
  ctrl.imgList = m.prop([]);
  ctrl.setup = function(){
    ctrl.categories(ctrl.request.data());
    m.redraw();
***REMOVED***;
  ctrl.categories = m.prop([]);
  ctrl.menu = [{"title":"SẢN PHẨM PHẦN CỨNG","http":"/c/sp-phan-cung","parent":"NONE","children":[{"title":"CBUS","http":"/c/sp-phan-cung/cbus","parent":"sp-phan-cung","children":[{"title":"CBUS HOST","http":"/c/sp-phan-cung/cbus/cbus-host","parent":"CBUS"***REMOVED***,{"title":"cBUS AddOn","http":"/c/sp-phan-cung/cbus/cbus-addon","parent":"cbus"***REMOVED***]***REMOVED***]***REMOVED***,{"title":"Development Board","http":"/c/sp-phan-cung/development-board","parent":"sp-phan-cung","children":[{"title":"Microcontroller","http":"/c/sp-phan-cung/development-board/microcontroller","parent":"development-board"***REMOVED***,{"title":"Arduino","http":"/c/sp-phan-cung/development-board/arduino","parent":"development-board"***REMOVED***,{"title":"ARM","http":"/c/sp-phan-cung/development-board/arm","parent":"development-board"***REMOVED***]***REMOVED***]
  // ctrl.request = fn.requestWithFeedback({method: "GET", url: "/admin/category/listParent"***REMOVED***, ctrl.categories, ctrl.setup);
  
  
***REMOVED***;



MenuController.view = function(ctrl){
  return  [
    Header(ctrl),
    {tag: "div", attrs: {id:"base"***REMOVED***, children: [
      
      CreateMenu(ctrl), 
      
      Menu(ctrl), 
      
      Right(ctrl)
    
  ***REMOVED******REMOVED***
***REMOVED***
***REMOVED***;


module.exports = MenuController;
***REMOVED***,{"./_createMenu.msx":4,"./_header.msx":5,"./_menu.msx":6,"./_right.msx":9,"./fn.msx":10***REMOVED***],13:[function(require,module,exports){
var NewProduct = {***REMOVED***;
var Header = require('./_header.msx');
var Menu = require('./_menu.msx');
var NewCategory = require('./_newcategory.msx');
var Right = require('./_right.msx');
var fn = require('./fn.msx');

var postData = {"ok": "data"***REMOVED***

NewProduct.controller = function(){
  var ctrl = this;
  ctrl.showImgList = false;
  ctrl.imgList = m.prop([]);
  ctrl.setup = function(){
    ctrl.categories(ctrl.request.data());
    // ctrl.showImgList = true;
    m.redraw();
***REMOVED***;
  ctrl.categories = m.prop([]);
  ctrl.request = fn.requestWithFeedback({method: "GET", url: "/admin/category/listParent"***REMOVED***, ctrl.categories, ctrl.setup);
***REMOVED***;



NewProduct.view = function(ctrl){
  return  [
    Header(ctrl),
    {tag: "div", attrs: {id:"base"***REMOVED***, children: [
      
      NewCategory(ctrl), 
      
      Menu(ctrl), 
      
      Right(ctrl)
    
  ***REMOVED******REMOVED***
***REMOVED***
***REMOVED***;


module.exports = NewProduct;
***REMOVED***,{"./_header.msx":5,"./_menu.msx":6,"./_newcategory.msx":7,"./_right.msx":9,"./fn.msx":10***REMOVED***],14:[function(require,module,exports){
var NewProduct = {***REMOVED***;
var Header = require('./_header.msx');
var Menu = require('./_menu.msx');
var NewProduct = require('./_newproduct.msx');
var Right = require('./_right.msx');
var fn = require('./fn.msx');

var postData = {"ok": "data"***REMOVED***

NewProduct.controller = function(){
  var ctrl = this;
  ctrl.showImgList = false;
  ctrl.imgList = m.prop([]);
  ctrl.setup = function(){
    ctrl.imgList(ctrl.request.data());
    ctrl.showImgList = true;
    m.redraw();
***REMOVED***;
***REMOVED***;



NewProduct.view = function(ctrl){
  return  [
    Header(ctrl),
    {tag: "div", attrs: {id:"base"***REMOVED***, children: [
      
      NewProduct(ctrl), 
      
      Menu(ctrl), 
      
      Right(ctrl)
    
  ***REMOVED******REMOVED***
***REMOVED***
***REMOVED***;


module.exports = NewProduct;
***REMOVED***,{"./_header.msx":5,"./_menu.msx":6,"./_newproduct.msx":8,"./_right.msx":9,"./fn.msx":10***REMOVED***]***REMOVED***,{***REMOVED***,[2])