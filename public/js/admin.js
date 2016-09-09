(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")***REMOVED***var f=n[o]={exports:{***REMOVED******REMOVED***;t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)***REMOVED***,f,f.exports,e,t,n,r)***REMOVED***return n[o].exports***REMOVED***var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s***REMOVED***)({1:[function(require,module,exports){

var Main = Main || {***REMOVED***;

Main.Home = require('./main/home.msx');
//Main.Dashboard = require('./main/_dashboard.msx');
// Main.Product = require('./main/_product.msx');
// Main.Category = require('./main/_category.msx');
// Main.Search = require('./main/_search.msx');


m.route(document.querySelector('#app'), "/", {
  "/": Main.Home
***REMOVED***);



module.exports = Main;
***REMOVED***,{"./main/home.msx":7***REMOVED***],2:[function(require,module,exports){
"use strict";


m.route.mode = "hash";

//window.Nav = require('./_nav.msx');
window.Main = require('./_main.msx');
//window.Footer = require('./_footer.msx');



window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;***REMOVED***)(navigator.userAgent||navigator.vendor||window.opera);
  return check;
***REMOVED***;

window.isMobile = window.mobilecheck();
***REMOVED***,{"./_main.msx":1***REMOVED***],3:[function(require,module,exports){
var Content = function(ctrl){
  return [
      {tag: "div", attrs: {className:"content"***REMOVED***, children: [
        {tag: "section", attrs: {***REMOVED***, children: [
          {tag: "div", attrs: {className:"section-body"***REMOVED***, children: [
            {tag: "div", attrs: {class:"row"***REMOVED***, children: [
      
              {tag: "div", attrs: {class:"col-md-3 col-sm-6"***REMOVED***, children: [
                {tag: "div", attrs: {class:"card"***REMOVED***, children: [
                  {tag: "div", attrs: {class:"card-body no-padding"***REMOVED***, children: [
                    {tag: "div", attrs: {class:"alert alert-callout alert-info no-margin"***REMOVED***, children: [
                      {tag: "strong", attrs: {class:"pull-right text-success text-lg"***REMOVED***, children: ["0,38% ", {tag: "i", attrs: {class:"md md-trending-up"***REMOVED******REMOVED***]***REMOVED***, 
                      {tag: "strong", attrs: {class:"text-xl"***REMOVED***, children: ["$ 32,829"]***REMOVED***, {tag: "br", attrs: {***REMOVED******REMOVED***, 
                      {tag: "span", attrs: {class:"opacity-50"***REMOVED***, children: ["Revenue"]***REMOVED***, 
                      {tag: "div", attrs: {class:"stick-bottom-left-right"***REMOVED***, children: [
                        {tag: "div", attrs: {class:"height-2 sparkline-revenue", "data-line-color":"#bdc1c1"***REMOVED******REMOVED***
                    ***REMOVED******REMOVED***
                  ***REMOVED******REMOVED***
                ***REMOVED******REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***, 
              {tag: "div", attrs: {class:"col-md-3 col-sm-6"***REMOVED***, children: [
                {tag: "div", attrs: {class:"card"***REMOVED***, children: [
                  {tag: "div", attrs: {class:"card-body no-padding"***REMOVED***, children: [
                    {tag: "div", attrs: {class:"alert alert-callout alert-warning no-margin"***REMOVED***, children: [
                      {tag: "strong", attrs: {class:"pull-right text-warning text-lg"***REMOVED***, children: ["0,01% ", {tag: "i", attrs: {class:"md md-swap-vert"***REMOVED******REMOVED***]***REMOVED***, 
                      {tag: "strong", attrs: {class:"text-xl"***REMOVED***, children: ["432,901"]***REMOVED***, {tag: "br", attrs: {***REMOVED******REMOVED***, 
                      {tag: "span", attrs: {class:"opacity-50"***REMOVED***, children: ["Visits"]***REMOVED***, 
                      {tag: "div", attrs: {class:"stick-bottom-right"***REMOVED***, children: [
                        {tag: "div", attrs: {class:"height-1 sparkline-visits", "data-bar-color":"#e5e6e6"***REMOVED******REMOVED***
                    ***REMOVED******REMOVED***
                  ***REMOVED******REMOVED***
                ***REMOVED******REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***, 
              {tag: "div", attrs: {class:"col-md-3 col-sm-6"***REMOVED***, children: [
                {tag: "div", attrs: {class:"card"***REMOVED***, children: [
                  {tag: "div", attrs: {class:"card-body no-padding"***REMOVED***, children: [
                    {tag: "div", attrs: {class:"alert alert-callout alert-danger no-margin"***REMOVED***, children: [
                      {tag: "strong", attrs: {class:"pull-right text-danger text-lg"***REMOVED***, children: ["0,18% ", {tag: "i", attrs: {class:"md md-trending-down"***REMOVED******REMOVED***]***REMOVED***, 
                      {tag: "strong", attrs: {class:"text-xl"***REMOVED***, children: ["42.90%"]***REMOVED***, {tag: "br", attrs: {***REMOVED******REMOVED***, 
                      {tag: "span", attrs: {class:"opacity-50"***REMOVED***, children: ["Bounce rate"]***REMOVED***, 
                      {tag: "div", attrs: {class:"stick-bottom-left-right"***REMOVED***, children: [
                        {tag: "div", attrs: {class:"progress progress-hairline no-margin"***REMOVED***, children: [
                          {tag: "div", attrs: {class:"progress-bar progress-bar-danger", style:"width:43%"***REMOVED******REMOVED***
                      ***REMOVED******REMOVED***
                    ***REMOVED******REMOVED***
                  ***REMOVED******REMOVED***
                ***REMOVED******REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***, 
              {tag: "div", attrs: {class:"col-md-3 col-sm-6"***REMOVED***, children: [
                {tag: "div", attrs: {class:"card"***REMOVED***, children: [
                  {tag: "div", attrs: {class:"card-body no-padding"***REMOVED***, children: [
                    {tag: "div", attrs: {class:"alert alert-callout alert-success no-margin"***REMOVED***, children: [
                      {tag: "h1", attrs: {class:"pull-right text-success"***REMOVED***, children: [{tag: "i", attrs: {class:"md md-timer"***REMOVED******REMOVED***]***REMOVED***, 
                      {tag: "strong", attrs: {class:"text-xl"***REMOVED***, children: ["54 sec."]***REMOVED***, {tag: "br", attrs: {***REMOVED******REMOVED***, 
                      {tag: "span", attrs: {class:"opacity-50"***REMOVED***, children: ["Avg. time on site"]***REMOVED***
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


var Header = function(ctrl){
  return [
  {tag: "header", attrs: {id:"header"***REMOVED***, children: [
    {tag: "div", attrs: {className:"headerbar"***REMOVED***, children: [
      
      {tag: "div", attrs: {class:"headerbar-left"***REMOVED***, children: [
        {tag: "ul", attrs: {class:"header-nav header-nav-options"***REMOVED***, children: [
          {tag: "li", attrs: {class:"header-nav-brand"***REMOVED***, children: [
            {tag: "div", attrs: {class:"brand-holder"***REMOVED***, children: [
              {tag: "a", attrs: {href:"../../html/dashboards/dashboard.html"***REMOVED***, children: [
                {tag: "span", attrs: {class:"text-lg text-bold text-primary"***REMOVED***, children: ["MATERIAL ADMIN"]***REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***, 
          {tag: "li", attrs: {***REMOVED***, children: [
            {tag: "a", attrs: {class:"btn btn-icon-toggle menubar-toggle", "data-toggle":"menubar", href:"javascript:void(0);"***REMOVED***, children: [
              {tag: "i", attrs: {class:"fa fa-bars"***REMOVED******REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***
    ***REMOVED******REMOVED***, 
      
      
      {tag: "div", attrs: {className:"headerbar-right"***REMOVED***, children: [
        {tag: "div", attrs: {className:"header-nav header-nav-options"***REMOVED***, children: [
          {tag: "li", attrs: {***REMOVED***, children: [
            {tag: "form", attrs: {class:"navbar-search", role:"search"***REMOVED***, children: [
              {tag: "div", attrs: {class:"form-group"***REMOVED***, children: [
                {tag: "input", attrs: {type:"text", class:"form-control", name:"headerSearch", placeholder:"Enter your keyword"***REMOVED******REMOVED***
            ***REMOVED******REMOVED***, 
              {tag: "button", attrs: {type:"submit", class:"btn btn-icon-toggle ink-reaction"***REMOVED***, children: [{tag: "i", attrs: {class:"fa fa-search"***REMOVED******REMOVED***]***REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***, 
          {tag: "li", attrs: {class:"dropdown hidden-xs"***REMOVED***, children: [
            {tag: "a", attrs: {href:"javascript:void(0);", class:"btn btn-icon-toggle btn-default", "data-toggle":"dropdown"***REMOVED***, children: [
              {tag: "i", attrs: {class:"fa fa-bell"***REMOVED******REMOVED***, {tag: "sup", attrs: {class:"badge style-danger"***REMOVED***, children: ["4"]***REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "ul", attrs: {class:"dropdown-menu animation-expand"***REMOVED***, children: [
              {tag: "li", attrs: {class:"dropdown-header"***REMOVED***, children: ["Today's messages"]***REMOVED***, 
              {tag: "li", attrs: {***REMOVED***, children: [
                {tag: "a", attrs: {class:"alert alert-callout alert-warning", href:"javascript:void(0);"***REMOVED***, children: [
                  {tag: "img", attrs: {class:"pull-right img-circle dropdown-avatar", src:"/assets/admin/img/avatar2.jpg?1404026449", alt:""***REMOVED******REMOVED***, 
                  {tag: "strong", attrs: {***REMOVED***, children: ["Alex Anistor"]***REMOVED***, {tag: "br", attrs: {***REMOVED******REMOVED***, 
                  {tag: "small", attrs: {***REMOVED***, children: ["Testing functionality..."]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***, 
              {tag: "li", attrs: {***REMOVED***, children: [
                {tag: "a", attrs: {class:"alert alert-callout alert-info", href:"javascript:void(0);"***REMOVED***, children: [
                  {tag: "img", attrs: {class:"pull-right img-circle dropdown-avatar", src:"/assets/admin/img/avatar3.jpg?1404026799", alt:""***REMOVED******REMOVED***, 
                  {tag: "strong", attrs: {***REMOVED***, children: ["Alicia Adell"]***REMOVED***, {tag: "br", attrs: {***REMOVED******REMOVED***, 
                  {tag: "small", attrs: {***REMOVED***, children: ["Reviewing last changes..."]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***, 
              {tag: "li", attrs: {class:"dropdown-header"***REMOVED***, children: ["Options"]***REMOVED***, 
              {tag: "li", attrs: {***REMOVED***, children: [{tag: "a", attrs: {href:"../../html/pages/login.html"***REMOVED***, children: ["View all messages ", {tag: "span", attrs: {class:"pull-right"***REMOVED***, children: [{tag: "i", attrs: {class:"fa fa-arrow-right"***REMOVED******REMOVED***]***REMOVED***]***REMOVED***]***REMOVED***, 
              {tag: "li", attrs: {***REMOVED***, children: [{tag: "a", attrs: {href:"../../html/pages/login.html"***REMOVED***, children: ["Mark as read ", {tag: "span", attrs: {class:"pull-right"***REMOVED***, children: [{tag: "i", attrs: {class:"fa fa-arrow-right"***REMOVED******REMOVED***]***REMOVED***]***REMOVED***]***REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***, 
          {tag: "li", attrs: {class:"dropdown hidden-xs"***REMOVED***, children: [
            {tag: "a", attrs: {href:"javascript:void(0);", class:"btn btn-icon-toggle btn-default", "data-toggle":"dropdown"***REMOVED***, children: [
              {tag: "i", attrs: {class:"fa fa-area-chart"***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "ul", attrs: {class:"dropdown-menu animation-expand"***REMOVED***, children: [
              {tag: "li", attrs: {class:"dropdown-header"***REMOVED***, children: ["Server load"]***REMOVED***, 
              {tag: "li", attrs: {class:"dropdown-progress"***REMOVED***, children: [
                {tag: "a", attrs: {href:"javascript:void(0);"***REMOVED***, children: [
                  {tag: "div", attrs: {class:"dropdown-label"***REMOVED***, children: [
                    {tag: "span", attrs: {class:"text-light"***REMOVED***, children: ["Server load ", {tag: "strong", attrs: {***REMOVED***, children: ["Today"]***REMOVED***]***REMOVED***, 
                    {tag: "strong", attrs: {class:"pull-right"***REMOVED***, children: ["93%"]***REMOVED***
                ***REMOVED******REMOVED***, 
                  {tag: "div", attrs: {class:"progress"***REMOVED***, children: [{tag: "div", attrs: {class:"progress-bar progress-bar-danger", style:"width: 93%"***REMOVED******REMOVED***]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***, 
              {tag: "li", attrs: {class:"dropdown-progress"***REMOVED***, children: [
                {tag: "a", attrs: {href:"javascript:void(0);"***REMOVED***, children: [
                  {tag: "div", attrs: {class:"dropdown-label"***REMOVED***, children: [
                    {tag: "span", attrs: {class:"text-light"***REMOVED***, children: ["Server load ", {tag: "strong", attrs: {***REMOVED***, children: ["Yesterday"]***REMOVED***]***REMOVED***, 
                    {tag: "strong", attrs: {class:"pull-right"***REMOVED***, children: ["30%"]***REMOVED***
                ***REMOVED******REMOVED***, 
                  {tag: "div", attrs: {class:"progress"***REMOVED***, children: [{tag: "div", attrs: {class:"progress-bar progress-bar-success", style:"width: 30%"***REMOVED******REMOVED***]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***, 
              {tag: "li", attrs: {class:"dropdown-progress"***REMOVED***, children: [
                {tag: "a", attrs: {href:"javascript:void(0);"***REMOVED***, children: [
                  {tag: "div", attrs: {class:"dropdown-label"***REMOVED***, children: [
                    {tag: "span", attrs: {class:"text-light"***REMOVED***, children: ["Server load ", {tag: "strong", attrs: {***REMOVED***, children: ["Lastweek"]***REMOVED***]***REMOVED***, 
                    {tag: "strong", attrs: {class:"pull-right"***REMOVED***, children: ["74%"]***REMOVED***
                ***REMOVED******REMOVED***, 
                  {tag: "div", attrs: {class:"progress"***REMOVED***, children: [{tag: "div", attrs: {class:"progress-bar progress-bar-warning", style:"width: 74%"***REMOVED******REMOVED***]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***, 
        
        
        {tag: "ul", attrs: {class:"header-nav header-nav-profile"***REMOVED***, children: [
          {tag: "li", attrs: {class:"dropdown"***REMOVED***, children: [
            {tag: "a", attrs: {href:"javascript:void(0);", class:"dropdown-toggle ink-reaction", "data-toggle":"dropdown"***REMOVED***, children: [
              {tag: "img", attrs: {src:"/assets/admin/img/avatar1.jpg?1403934956", alt:""***REMOVED******REMOVED***, 
              {tag: "span", attrs: {class:"profile-info"***REMOVED***, children: [
                  "Daniel Johnson", 
                  {tag: "small", attrs: {***REMOVED***, children: ["Administrator"]***REMOVED***
              ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "ul", attrs: {class:"dropdown-menu animation-dock"***REMOVED***, children: [
              {tag: "li", attrs: {class:"dropdown-header"***REMOVED***, children: ["Config"]***REMOVED***, 
              {tag: "li", attrs: {***REMOVED***, children: [{tag: "a", attrs: {href:"../../html/pages/profile.html"***REMOVED***, children: ["My profile"]***REMOVED***]***REMOVED***, 
              {tag: "li", attrs: {***REMOVED***, children: [{tag: "a", attrs: {href:"../../html/pages/blog/post.html"***REMOVED***, children: ["My blog ", {tag: "span", attrs: {class:"badge style-danger pull-right"***REMOVED***, children: ["16"]***REMOVED***]***REMOVED***]***REMOVED***, 
              {tag: "li", attrs: {***REMOVED***, children: [{tag: "a", attrs: {href:"../../html/pages/calendar.html"***REMOVED***, children: ["My appointments"]***REMOVED***]***REMOVED***, 
              {tag: "li", attrs: {class:"divider"***REMOVED******REMOVED***, 
              {tag: "li", attrs: {***REMOVED***, children: [{tag: "a", attrs: {href:"../../html/pages/locked.html"***REMOVED***, children: [{tag: "i", attrs: {class:"fa fa-fw fa-lock"***REMOVED******REMOVED***, " Lock"]***REMOVED***]***REMOVED***, 
              {tag: "li", attrs: {***REMOVED***, children: [{tag: "a", attrs: {href:"../../html/pages/login.html"***REMOVED***, children: [{tag: "i", attrs: {class:"fa fa-fw fa-power-off text-danger"***REMOVED******REMOVED***, " Logout"]***REMOVED***]***REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***, 
  
  
        {tag: "ul", attrs: {class:"header-nav header-nav-toggle"***REMOVED***, children: [
          {tag: "li", attrs: {***REMOVED***, children: [
            {tag: "a", attrs: {class:"btn btn-icon-toggle btn-default", href:"#offcanvas-search", "data-toggle":"offcanvas", "data-backdrop":"false"***REMOVED***, children: [
              {tag: "i", attrs: {class:"fa fa-ellipsis-v"***REMOVED******REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***
    ***REMOVED******REMOVED***
      
  ***REMOVED******REMOVED***
***REMOVED******REMOVED***
***REMOVED***
***REMOVED*** ;

module.exports = Header;
***REMOVED***,{***REMOVED***],5:[function(require,module,exports){
var Menu = function(ctrl){
  return [
    {tag: "div", attrs: {id:"menubar", class:"menubar-inverse "***REMOVED***, children: [
      {tag: "div", attrs: {class:"menubar-fixed-panel"***REMOVED***, children: [
        {tag: "div", attrs: {***REMOVED***, children: [
          {tag: "a", attrs: {class:"btn btn-icon-toggle btn-default menubar-toggle", "data-toggle":"menubar", href:"javascript:void(0);"***REMOVED***, children: [
            {tag: "i", attrs: {class:"fa fa-bars"***REMOVED******REMOVED***
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***, 
        {tag: "div", attrs: {class:"expanded"***REMOVED***, children: [
          {tag: "a", attrs: {href:"../../html/dashboards/dashboard.html"***REMOVED***, children: [
            {tag: "span", attrs: {class:"text-lg text-bold text-primary "***REMOVED***, children: ["MATERIAL ADMIN"]***REMOVED***
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***
    ***REMOVED******REMOVED***, 
      
      
      
      {tag: "div", attrs: {className:"menubar-scroll-panel"***REMOVED***, children: [
        
        {tag: "div", attrs: {className:"gui-controls", id:"main-menu"***REMOVED***, children: [
          {tag: "li", attrs: {***REMOVED***, children: [
            {tag: "a", attrs: {href:"../../html/dashboards/dashboard.html", class:"active"***REMOVED***, children: [
              {tag: "div", attrs: {class:"gui-icon"***REMOVED***, children: [{tag: "i", attrs: {class:"md md-home"***REMOVED******REMOVED***]***REMOVED***, 
              {tag: "span", attrs: {class:"title"***REMOVED***, children: ["Dashboard"]***REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***, 
          {tag: "li", attrs: {class:"gui-folder"***REMOVED***, children: [
            {tag: "a", attrs: {***REMOVED***, children: [
              {tag: "div", attrs: {class:"gui-icon"***REMOVED***, children: [{tag: "i", attrs: {class:"md md-email"***REMOVED******REMOVED***]***REMOVED***, 
              {tag: "span", attrs: {class:"title"***REMOVED***, children: ["Email"]***REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "ul", attrs: {***REMOVED***, children: [
              {tag: "li", attrs: {***REMOVED***, children: [{tag: "a", attrs: {href:"../../html/mail/inbox.html"***REMOVED***, children: [{tag: "span", attrs: {class:"title"***REMOVED***, children: ["Inbox"]***REMOVED***]***REMOVED***]***REMOVED***, 
              {tag: "li", attrs: {***REMOVED***, children: [{tag: "a", attrs: {href:"../../html/mail/compose.html"***REMOVED***, children: [{tag: "span", attrs: {class:"title"***REMOVED***, children: ["Compose"]***REMOVED***]***REMOVED***]***REMOVED***, 
              {tag: "li", attrs: {***REMOVED***, children: [{tag: "a", attrs: {href:"../../html/mail/reply.html"***REMOVED***, children: [{tag: "span", attrs: {class:"title"***REMOVED***, children: ["Reply"]***REMOVED***]***REMOVED***]***REMOVED***, 
              {tag: "li", attrs: {***REMOVED***, children: [{tag: "a", attrs: {href:"../../html/mail/message.html"***REMOVED***, children: [{tag: "span", attrs: {class:"title"***REMOVED***, children: ["View message"]***REMOVED***]***REMOVED***]***REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***, 
  
          {tag: "li", attrs: {***REMOVED***, children: [
            {tag: "a", attrs: {href:"../../html/layouts/builder.html"***REMOVED***, children: [
              {tag: "div", attrs: {class:"gui-icon"***REMOVED***, children: [{tag: "i", attrs: {class:"md md-web"***REMOVED******REMOVED***]***REMOVED***, 
              {tag: "span", attrs: {class:"title"***REMOVED***, children: ["Layouts"]***REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***
          
          
      ***REMOVED******REMOVED***, 
        
        
        {tag: "div", attrs: {class:"menubar-foot-panel"***REMOVED***, children: [
          {tag: "small", attrs: {class:"no-linebreak hidden-folded"***REMOVED***, children: [
            {tag: "span", attrs: {class:"opacity-75"***REMOVED***, children: ["Copyright © 2014"]***REMOVED***, " ", {tag: "strong", attrs: {***REMOVED***, children: ["CodeCovers"]***REMOVED***
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***
        
    ***REMOVED******REMOVED***
  ***REMOVED******REMOVED***
***REMOVED***
***REMOVED***

module.exports = Menu;
***REMOVED***,{***REMOVED***],6:[function(require,module,exports){
var Right = function(ctrl){
  return [
    {tag: "div", attrs: {class:"offcanvas"***REMOVED***, children: [
    
      {tag: "div", attrs: {id:"offcanvas-search", class:"offcanvas-pane width-8"***REMOVED***, children: [
        {tag: "div", attrs: {class:"offcanvas-head"***REMOVED***, children: [
          {tag: "header", attrs: {class:"text-primary"***REMOVED***, children: ["Search"]***REMOVED***, 
          {tag: "div", attrs: {class:"offcanvas-tools"***REMOVED***, children: [
            {tag: "a", attrs: {class:"btn btn-icon-toggle btn-default-light pull-right", "data-dismiss":"offcanvas"***REMOVED***, children: [
              {tag: "i", attrs: {class:"md md-close"***REMOVED******REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***, 
        {tag: "div", attrs: {class:"offcanvas-body no-padding"***REMOVED***, children: [
          {tag: "ul", attrs: {class:"list "***REMOVED***, children: [
            {tag: "li", attrs: {class:"tile divider-full-bleed"***REMOVED***, children: [
              {tag: "div", attrs: {class:"tile-content"***REMOVED***, children: [
                {tag: "div", attrs: {class:"tile-text"***REMOVED***, children: [{tag: "strong", attrs: {***REMOVED***, children: ["A"]***REMOVED***]***REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {class:"tile"***REMOVED***, children: [
              {tag: "a", attrs: {class:"tile-content ink-reaction", href:"#offcanvas-chat", "data-toggle":"offcanvas", "data-backdrop":"false"***REMOVED***, children: [
                {tag: "div", attrs: {class:"tile-icon"***REMOVED***, children: [
                  {tag: "img", attrs: {src:"/assets/admin/img/avatar4.jpg?1404026791", alt:""***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
                {tag: "div", attrs: {class:"tile-text"***REMOVED***, children: [
                  "Alex Nelson", 
                  {tag: "small", attrs: {***REMOVED***, children: ["123-123-3210"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {class:"tile"***REMOVED***, children: [
              {tag: "a", attrs: {class:"tile-content ink-reaction", href:"#offcanvas-chat", "data-toggle":"offcanvas", "data-backdrop":"false"***REMOVED***, children: [
                {tag: "div", attrs: {class:"tile-icon"***REMOVED***, children: [
                  {tag: "img", attrs: {src:"/assets/admin/img/avatar9.jpg?1404026744", alt:""***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
                {tag: "div", attrs: {class:"tile-text"***REMOVED***, children: [
                  "Ann Laurens", 
                  {tag: "small", attrs: {***REMOVED***, children: ["123-123-3210"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {class:"tile divider-full-bleed"***REMOVED***, children: [
              {tag: "div", attrs: {class:"tile-content"***REMOVED***, children: [
                {tag: "div", attrs: {class:"tile-text"***REMOVED***, children: [{tag: "strong", attrs: {***REMOVED***, children: ["J"]***REMOVED***]***REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {class:"tile"***REMOVED***, children: [
              {tag: "a", attrs: {class:"tile-content ink-reaction", href:"#offcanvas-chat", "data-toggle":"offcanvas", "data-backdrop":"false"***REMOVED***, children: [
                {tag: "div", attrs: {class:"tile-icon"***REMOVED***, children: [
                  {tag: "img", attrs: {src:"/assets/admin/img/avatar2.jpg?1404026449", alt:""***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
                {tag: "div", attrs: {class:"tile-text"***REMOVED***, children: [
                  "Jessica Cruise", 
                  {tag: "small", attrs: {***REMOVED***, children: ["123-123-3210"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {class:"tile"***REMOVED***, children: [
              {tag: "a", attrs: {class:"tile-content ink-reaction", href:"#offcanvas-chat", "data-toggle":"offcanvas", "data-backdrop":"false"***REMOVED***, children: [
                {tag: "div", attrs: {class:"tile-icon"***REMOVED***, children: [
                  {tag: "img", attrs: {src:"/assets/admin/img/avatar8.jpg?1404026729", alt:""***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
                {tag: "div", attrs: {class:"tile-text"***REMOVED***, children: [
                  "Jim Peters", 
                  {tag: "small", attrs: {***REMOVED***, children: ["123-123-3210"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {class:"tile divider-full-bleed"***REMOVED***, children: [
              {tag: "div", attrs: {class:"tile-content"***REMOVED***, children: [
                {tag: "div", attrs: {class:"tile-text"***REMOVED***, children: [{tag: "strong", attrs: {***REMOVED***, children: ["M"]***REMOVED***]***REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {class:"tile"***REMOVED***, children: [
              {tag: "a", attrs: {class:"tile-content ink-reaction", href:"#offcanvas-chat", "data-toggle":"offcanvas", "data-backdrop":"false"***REMOVED***, children: [
                {tag: "div", attrs: {class:"tile-icon"***REMOVED***, children: [
                  {tag: "img", attrs: {src:"/assets/admin/img/avatar5.jpg?1404026513", alt:""***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
                {tag: "div", attrs: {class:"tile-text"***REMOVED***, children: [
                  "Mabel Logan", 
                  {tag: "small", attrs: {***REMOVED***, children: ["123-123-3210"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {class:"tile"***REMOVED***, children: [
              {tag: "a", attrs: {class:"tile-content ink-reaction", href:"#offcanvas-chat", "data-toggle":"offcanvas", "data-backdrop":"false"***REMOVED***, children: [
                {tag: "div", attrs: {class:"tile-icon"***REMOVED***, children: [
                  {tag: "img", attrs: {src:"/assets/admin/img/avatar11.jpg?1404026774", alt:""***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
                {tag: "div", attrs: {class:"tile-text"***REMOVED***, children: [
                  "Mary Peterson", 
                  {tag: "small", attrs: {***REMOVED***, children: ["123-123-3210"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {class:"tile"***REMOVED***, children: [
              {tag: "a", attrs: {class:"tile-content ink-reaction", href:"#offcanvas-chat", "data-toggle":"offcanvas", "data-backdrop":"false"***REMOVED***, children: [
                {tag: "div", attrs: {class:"tile-icon"***REMOVED***, children: [
                  {tag: "img", attrs: {src:"/assets/admin/img/avatar3.jpg?1404026799", alt:""***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
                {tag: "div", attrs: {class:"tile-text"***REMOVED***, children: [
                  "Mike Alba", 
                  {tag: "small", attrs: {***REMOVED***, children: ["123-123-3210"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {class:"tile divider-full-bleed"***REMOVED***, children: [
              {tag: "div", attrs: {class:"tile-content"***REMOVED***, children: [
                {tag: "div", attrs: {class:"tile-text"***REMOVED***, children: [{tag: "strong", attrs: {***REMOVED***, children: ["N"]***REMOVED***]***REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {class:"tile"***REMOVED***, children: [
              {tag: "a", attrs: {class:"tile-content ink-reaction", href:"#offcanvas-chat", "data-toggle":"offcanvas", "data-backdrop":"false"***REMOVED***, children: [
                {tag: "div", attrs: {class:"tile-icon"***REMOVED***, children: [
                  {tag: "img", attrs: {src:"/assets/admin/img/avatar6.jpg?1404026572", alt:""***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
                {tag: "div", attrs: {class:"tile-text"***REMOVED***, children: [
                  "Nathan Peterson", 
                  {tag: "small", attrs: {***REMOVED***, children: ["123-123-3210"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {class:"tile divider-full-bleed"***REMOVED***, children: [
              {tag: "div", attrs: {class:"tile-content"***REMOVED***, children: [
                {tag: "div", attrs: {class:"tile-text"***REMOVED***, children: [{tag: "strong", attrs: {***REMOVED***, children: ["P"]***REMOVED***]***REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {class:"tile"***REMOVED***, children: [
              {tag: "a", attrs: {class:"tile-content ink-reaction", href:"#offcanvas-chat", "data-toggle":"offcanvas", "data-backdrop":"false"***REMOVED***, children: [
                {tag: "div", attrs: {class:"tile-icon"***REMOVED***, children: [
                  {tag: "img", attrs: {src:"/assets/admin/img/avatar7.jpg?1404026721", alt:""***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
                {tag: "div", attrs: {class:"tile-text"***REMOVED***, children: [
                  "Philip Ericsson", 
                  {tag: "small", attrs: {***REMOVED***, children: ["123-123-3210"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {class:"tile divider-full-bleed"***REMOVED***, children: [
              {tag: "div", attrs: {class:"tile-content"***REMOVED***, children: [
                {tag: "div", attrs: {class:"tile-text"***REMOVED***, children: [{tag: "strong", attrs: {***REMOVED***, children: ["S"]***REMOVED***]***REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {class:"tile"***REMOVED***, children: [
              {tag: "a", attrs: {class:"tile-content ink-reaction", href:"#offcanvas-chat", "data-toggle":"offcanvas", "data-backdrop":"false"***REMOVED***, children: [
                {tag: "div", attrs: {class:"tile-icon"***REMOVED***, children: [
                  {tag: "img", attrs: {src:"/assets/admin/img/avatar10.jpg?1404026762", alt:""***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
                {tag: "div", attrs: {class:"tile-text"***REMOVED***, children: [
                  "Samuel Parsons", 
                  {tag: "small", attrs: {***REMOVED***, children: ["123-123-3210"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***
    ***REMOVED******REMOVED***, 
      {tag: "div", attrs: {id:"offcanvas-chat", class:"offcanvas-pane style-default-light width-12"***REMOVED***, children: [
        {tag: "div", attrs: {class:"offcanvas-head style-default-bright"***REMOVED***, children: [
          {tag: "header", attrs: {class:"text-primary"***REMOVED***, children: ["Chat with Ann Laurens"]***REMOVED***, 
          {tag: "div", attrs: {class:"offcanvas-tools"***REMOVED***, children: [
            {tag: "a", attrs: {class:"btn btn-icon-toggle btn-default-light pull-right", "data-dismiss":"offcanvas"***REMOVED***, children: [
              {tag: "i", attrs: {class:"md md-close"***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "a", attrs: {class:"btn btn-icon-toggle btn-default-light pull-right", href:"#offcanvas-search", "data-toggle":"offcanvas", "data-backdrop":"false"***REMOVED***, children: [
              {tag: "i", attrs: {class:"md md-arrow-back"***REMOVED******REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***, 
          {tag: "form", attrs: {class:"form"***REMOVED***, children: [
            {tag: "div", attrs: {class:"form-group floating-label"***REMOVED***, children: [
              {tag: "textarea", attrs: {name:"sidebarChatMessage", id:"sidebarChatMessage", class:"form-control autosize", rows:"1"***REMOVED******REMOVED***, 
              {tag: "label", attrs: {for:"sidebarChatMessage"***REMOVED***, children: ["Leave a message"]***REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***, 
        {tag: "div", attrs: {class:"offcanvas-body"***REMOVED***, children: [
          {tag: "ul", attrs: {class:"list-chats"***REMOVED***, children: [
            {tag: "li", attrs: {***REMOVED***, children: [
              {tag: "div", attrs: {class:"chat"***REMOVED***, children: [
                {tag: "div", attrs: {class:"chat-avatar"***REMOVED***, children: [{tag: "img", attrs: {class:"img-circle", src:"/assets/admin/img/avatar1.jpg?1403934956", alt:""***REMOVED******REMOVED***]***REMOVED***, 
                {tag: "div", attrs: {class:"chat-body"***REMOVED***, children: [
                  "Yes, it is indeed very beautiful.", 
                  {tag: "small", attrs: {***REMOVED***, children: ["10:03 pm"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {class:"chat-left"***REMOVED***, children: [
              {tag: "div", attrs: {class:"chat"***REMOVED***, children: [
                {tag: "div", attrs: {class:"chat-avatar"***REMOVED***, children: [{tag: "img", attrs: {class:"img-circle", src:"/assets/admin/img/avatar9.jpg?1404026744", alt:""***REMOVED******REMOVED***]***REMOVED***, 
                {tag: "div", attrs: {class:"chat-body"***REMOVED***, children: [
                  "Did you see the changes?", 
                  {tag: "small", attrs: {***REMOVED***, children: ["10:02 pm"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {***REMOVED***, children: [
              {tag: "div", attrs: {class:"chat"***REMOVED***, children: [
                {tag: "div", attrs: {class:"chat-avatar"***REMOVED***, children: [{tag: "img", attrs: {class:"img-circle", src:"/assets/admin/img/avatar1.jpg?1403934956", alt:""***REMOVED******REMOVED***]***REMOVED***, 
                {tag: "div", attrs: {class:"chat-body"***REMOVED***, children: [
                  "I just arrived at work, it was quite busy.", 
                  {tag: "small", attrs: {***REMOVED***, children: ["06:44pm"]***REMOVED***
              ***REMOVED******REMOVED***, 
                {tag: "div", attrs: {class:"chat-body"***REMOVED***, children: [
                  "I will take look in a minute.", 
                  {tag: "small", attrs: {***REMOVED***, children: ["06:45pm"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {class:"chat-left"***REMOVED***, children: [
              {tag: "div", attrs: {class:"chat"***REMOVED***, children: [
                {tag: "div", attrs: {class:"chat-avatar"***REMOVED***, children: [{tag: "img", attrs: {class:"img-circle", src:"/assets/admin/img/avatar9.jpg?1404026744", alt:""***REMOVED******REMOVED***]***REMOVED***, 
                {tag: "div", attrs: {class:"chat-body"***REMOVED***, children: [
                  "The colors are much better now."
              ***REMOVED******REMOVED***, 
                {tag: "div", attrs: {class:"chat-body"***REMOVED***, children: [
                  "The colors are brighter than before." + ' ' +
                  "I have already sent an example." + ' ' +
                  "This will make it look sharper.", 
                  {tag: "small", attrs: {***REMOVED***, children: ["Mon"]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "li", attrs: {***REMOVED***, children: [
              {tag: "div", attrs: {class:"chat"***REMOVED***, children: [
                {tag: "div", attrs: {class:"chat-avatar"***REMOVED***, children: [{tag: "img", attrs: {class:"img-circle", src:"/assets/admin/img/avatar1.jpg?1403934956", alt:""***REMOVED******REMOVED***]***REMOVED***, 
                {tag: "div", attrs: {class:"chat-body"***REMOVED***, children: [
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
***REMOVED***,{***REMOVED***],7:[function(require,module,exports){
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
***REMOVED***,{"./_content.msx":3,"./_header.msx":4,"./_menu.msx":5,"./_right.msx":6***REMOVED***]***REMOVED***,{***REMOVED***,[2])