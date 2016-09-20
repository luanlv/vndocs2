(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")***REMOVED***var f=n[o]={exports:{***REMOVED******REMOVED***;t[o][0].call(f.exports,(function(e){var n=t[o][1][e];return s(n?n:e)***REMOVED***),f,f.exports,e,t,n,r)***REMOVED***return n[o].exports***REMOVED***var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s***REMOVED***)({1:[function(require,module,exports){
var Main = Main || {***REMOVED***;
var fn = require('./core/_fn.msx');
var data = require('./core/_data.msx');
Main.Home = require('./main/home.msx');
Main.Category = require('./main/category.msx');
Main.Post = require('./main/post.msx');
Main.Article = require('./main/article.msx');

data.token = $(document.getElementsByName("csrfToken")).val();
// alert($(token).val());
$(document).ajaxSend((function(elm, xhr, s){
  if (s.type == "POST") {
    xhr.setRequestHeader('Csrf-Token', data.token);
***REMOVED***
***REMOVED***));

Array.prototype.getItemByParam = function(paramPair) {
  var key = Object.keys(paramPair)[0];
  return this.find((function(item){return ((item[key] == paramPair[key]) ? true: false)***REMOVED***));
***REMOVED***

m.route(document.querySelector('#app'), "/", {
  "/": Main.Home,
  "/post/:postID": Main.Post,
  "/blog/:slug": Main.Article,
  "/category/:categorySlug": Main.Category
***REMOVED***);


module.exports = Main;

***REMOVED***,{"./core/_data.msx":11,"./core/_fn.msx":12,"./main/article.msx":14,"./main/category.msx":15,"./main/home.msx":16,"./main/post.msx":17***REMOVED***],2:[function(require,module,exports){
var fn = require('../core/_fn.msx');
var data = require('../core/_data.msx');
var Comments = require('./_comment.msx');

var PostView = function(ctrl){
  return {tag: "div", attrs: {className:"main mh500"***REMOVED***, children: [
    ctrl.request.ready()?[
      {tag: "div", attrs: {***REMOVED***, children: [

        {tag: "hr", attrs: {className:"style3"***REMOVED******REMOVED***, 
        {tag: "div", attrs: {className:"postWr"***REMOVED***, children: [
          {tag: "div", attrs: {className:"postTitle"***REMOVED***, children: [
            {tag: "h1", attrs: {***REMOVED***, children: [ctrl.article().article.title]***REMOVED***
        ***REMOVED******REMOVED***, 
          {tag: "hr", attrs: {className:"style3"***REMOVED******REMOVED***, 
          {tag: "div", attrs: {className:"postInfo cf"***REMOVED***, children: [
            {tag: "div", attrs: {className:"meta-data"***REMOVED***, children: [
              
              {tag: "span", attrs: {className:"upload"***REMOVED***, children: [ctrl.article().article.author]***REMOVED***, 
              {tag: "span", attrs: {className:"category"***REMOVED***, children: [
                          ctrl.article().article.tags.map((function(el){
                              return {tag: "a", attrs: {href:"javascript:void(0)"***REMOVED***, children: ["el"]***REMOVED***
                          ***REMOVED***))
                          
                    ***REMOVED******REMOVED***, 
              {tag: "span", attrs: {className:"time"***REMOVED***, children: [moment(ctrl.article().article.time).format('L')]***REMOVED***
          ***REMOVED******REMOVED***, 
            
            {tag: "div", attrs: {className:"t-left"***REMOVED***, children: [
              {tag: "a", attrs: {href:"#"***REMOVED***, children: [{tag: "img", attrs: {src:"/cover/get/" + ctrl.article().article.cover.id, alt:ctrl.article().article.cover.alt***REMOVED******REMOVED***]***REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "div", attrs: {className:"t-right"***REMOVED***, children: [
              {tag: "div", attrs: {className:"rate-nav"***REMOVED***, children: ["RATING"]***REMOVED***, 
              {tag: "div", attrs: {className:"rate-num"***REMOVED***, children: [ctrl.article().article.nLike]***REMOVED***, 
              {tag: "button", attrs: {className:"rate-button", 
                      onclick:function(el){
                        if(Window.user == undefined){
                          data.showSignin = true;
                      ***REMOVED*** else {
                          if (!ctrl.voted) {
                            $.ajax({
                              type: "POST",
                              url: "/blog/vote",
                              data: JSON.stringify({
                                "id": ctrl.slug,
                            ***REMOVED***),
                              contentType: "application/json",
                              dataType: "text",
                              success: function (res) {
                                ctrl.article().article.nLike += 1;
                                m.redraw();
                            ***REMOVED***
                          ***REMOVED***);
                        ***REMOVED***
                          ctrl.voted = true;
                      ***REMOVED***
                    ***REMOVED***
            ***REMOVED***, children: ["+1"]***REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***, 
          {tag: "hr", attrs: {className:"style3"***REMOVED******REMOVED***, 
          {tag: "div", attrs: {className:"postContent"***REMOVED***, children: [
            m.trust(marked(ctrl.article().article.body))
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***
    ***REMOVED******REMOVED***,
      {tag: "hr", attrs: {className:"style3"***REMOVED******REMOVED***,
      Comments(ctrl, ctrl.article(), ctrl.slug, "article")
    
  ***REMOVED***:[
      {tag: "div", attrs: {className:"loading"***REMOVED***, children: [
        {tag: "div", attrs: {class:"loader"***REMOVED***, children: [
          {tag: "div", attrs: {class:"inner one"***REMOVED******REMOVED***, 
          {tag: "div", attrs: {class:"inner two"***REMOVED******REMOVED***, 
          {tag: "div", attrs: {class:"inner three"***REMOVED******REMOVED***
      ***REMOVED******REMOVED***
    ***REMOVED******REMOVED***
  ***REMOVED***
    
***REMOVED******REMOVED***
  
***REMOVED***;



module.exports = PostView;
***REMOVED***,{"../core/_data.msx":11,"../core/_fn.msx":12,"./_comment.msx":3***REMOVED***],3:[function(require,module,exports){
var data = require('../core/_data.msx');
var fn = require('../core/_fn.msx');

var Comments = function(ctrl, content, id, type){
  return [
    {tag: "div", attrs: {id:"comment"***REMOVED***, children: [
    
      {tag: "div", attrs: {className:"commentWr"***REMOVED***, children: [
              {tag: "span", attrs: {class:"poster"***REMOVED***, children: [
                {tag: "img", attrs: {src:(Window.user == undefined)?"/assets/images/silhouette.png":(Window.user.avatarURL), class:"icon"***REMOVED******REMOVED***, 
                {tag: "br", attrs: {***REMOVED******REMOVED***
            ***REMOVED******REMOVED***, 
        {tag: "div", attrs: {class:"comment commentBox"***REMOVED***, children: [
                {tag: "textarea", attrs: {name:"cmt", id:"cmt", 
                          onclick:function(){
                            if(Window.user == undefined){
                              data.showSignin = true;
                          ***REMOVED***
                        ***REMOVED***, 
                          onchange:function(el){
                            ctrl.comment($(el.target).val());
                            console.log(ctrl.comment());
                        ***REMOVED***
              ***REMOVED***, children: [
                  ctrl.comment()
              ***REMOVED******REMOVED***, 
          (Window.user == undefined)?(
            {tag: "span", attrs: {className:"notUser"***REMOVED***, children: [
            "Chưa đăng nhập"
          ***REMOVED******REMOVED***
          ):({tag: "span", attrs: {className:"isUser"***REMOVED***, children: [
            Window.user.fullName
        ***REMOVED******REMOVED***), 
          {tag: "span", attrs: {className:"submit"***REMOVED***, children: [
                  {tag: "a", attrs: {href:"javascript:void(0)", 
                     onclick:function(){
                       $.ajax({
                         type: "POST",
                         url: "/comment/" + id,
                         data: JSON.stringify({
                           "data" : ctrl.comment(),
                           "type" : type
                       ***REMOVED***),
                         contentType: "application/json",
                         dataType: "json",
                         success: function(res){
                           content.comments.unshift(res);
                           ctrl.comment('');
                           m.redraw();
                       ***REMOVED***
                     ***REMOVED***);
                   ***REMOVED***
                ***REMOVED***, children: [" Gửi "]***REMOVED***
              ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***
    ***REMOVED******REMOVED***, 
    
    
    
      content.comments.map((function(el){
        return {tag: "div", attrs: {className:"commentWr"***REMOVED***, children: [
                {tag: "span", attrs: {class:"poster"***REMOVED***, children: [
                  {tag: "img", attrs: {src:el.user.avatarURL, class:"icon"***REMOVED******REMOVED***, 
                  {tag: "br", attrs: {***REMOVED******REMOVED***
              ***REMOVED******REMOVED***, 
          {tag: "div", attrs: {class:"comment"***REMOVED***, children: [
                  {tag: "span", attrs: {class:"info"***REMOVED***, children: [
                    {tag: "span", attrs: {className:"userName"***REMOVED***, children: [el.user.fullName]***REMOVED***, " Posted July 9th 2016, 01:04 AM", 
                    {tag: "span", attrs: {class:"buttons"***REMOVED***
                      
                  ***REMOVED***
                ***REMOVED******REMOVED***, 
            el.comment
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***
    ***REMOVED***))
  
  
  ***REMOVED******REMOVED***
***REMOVED***
***REMOVED***;

module.exports = Comments;
***REMOVED***,{"../core/_data.msx":11,"../core/_fn.msx":12***REMOVED***],4:[function(require,module,exports){
var Content = function(ctrl){
    return {tag: "div", attrs: {className:"main mh500"***REMOVED***, children: [
      ctrl.request.ready()?[
        {tag: "div", attrs: {className:"sort roundbox"***REMOVED***, children: [
          {tag: "form", attrs: {name:"news_set_sort", id:"news_set_sort", method:"post", action:"http://englishtips.org/"***REMOVED***, children: [
              {tag: "span", attrs: {***REMOVED***, children: ["Lọc theo: "]***REMOVED***, 
            {tag: "a", attrs: {href:"http://englishtips.org/#", onclick:"dle_change_sort('date','asc'); return false;"***REMOVED***, children: ["Ngày đăng"]***REMOVED***, 
            {tag: "a", attrs: {href:"http://englishtips.org/#", onclick:"dle_change_sort('rating','desc'); return false;"***REMOVED***, children: ["Rating"]***REMOVED***, 
            {tag: "a", attrs: {href:"http://englishtips.org/#", onclick:"dle_change_sort('news_read','desc'); return false;"***REMOVED***, children: ["Lượt xem"]***REMOVED***, 
            {tag: "a", attrs: {href:"http://englishtips.org/#", onclick:"dle_change_sort('comm_num','desc'); return false;"***REMOVED***, children: ["Bình luận"]***REMOVED***
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***,
          ctrl.posts().map((function(el) {
            return {tag: "div", attrs: {className:"block main-item"***REMOVED***, children: [
              {tag: "div", attrs: {className:"title"***REMOVED***, children: [
                {tag: "div", attrs: {className:"t-left"***REMOVED***, children: [
                  {tag: "a", attrs: {href:"/post/" + el._id, 
                     className:"title", 
                     config:m.route
                ***REMOVED***, children: [el.title]***REMOVED***
              ***REMOVED******REMOVED***, 
                {tag: "div", attrs: {className:"t-right"***REMOVED***, children: [
                  {tag: "div", attrs: {className:"rate-nav"***REMOVED***, children: ["RATING"]***REMOVED***, 
                  {tag: "div", attrs: {className:"rate-num"***REMOVED***, children: [el.nLike]***REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***, 
              {tag: "div", attrs: {className:"meta-data"***REMOVED***, children: [
                {tag: "span", attrs: {className:"upload"***REMOVED***, children: [el.upload]***REMOVED***, 
                {tag: "span", attrs: {className:"category"***REMOVED***, children: [
                      el.categories.map((function (item) {
                        return {tag: "a", attrs: {href:"/category/" + item, 
                            config:m.route
                      ***REMOVED***, children: [{tag: "span", attrs: {***REMOVED***, children: [Window.categories.getItemByParam({slug: item***REMOVED***).name]***REMOVED***]***REMOVED***
                    ***REMOVED***))
                    ***REMOVED******REMOVED***, 
                {tag: "span", attrs: {className:"time"***REMOVED***, children: [moment(el.time).format('L')]***REMOVED***
            ***REMOVED******REMOVED***, 
              {tag: "div", attrs: {className:"info"***REMOVED***, children: [
                {tag: "a", attrs: {href:"#"***REMOVED***, children: [{tag: "img", attrs: {src:"/cover/get/" + el.cover.id, alt:el.cover.alt***REMOVED******REMOVED***]***REMOVED***, 
                {tag: "p", attrs: {className:"description"***REMOVED***, children: [
                  (window.isMobile) ? el.description.slice(0, 250) : el.description, " ..."
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***
        ***REMOVED***))
    ***REMOVED***:[
          {tag: "div", attrs: {className:"loading"***REMOVED***, children: [
              {tag: "div", attrs: {class:"loader"***REMOVED***, children: [
                  {tag: "div", attrs: {class:"inner one"***REMOVED******REMOVED***, 
                  {tag: "div", attrs: {class:"inner two"***REMOVED******REMOVED***, 
                  {tag: "div", attrs: {class:"inner three"***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***
    ***REMOVED***
        
        
  ***REMOVED******REMOVED***
***REMOVED***;



module.exports = Content;
***REMOVED***,{***REMOVED***],5:[function(require,module,exports){
var data = require('../core/_data.msx');
var fn = require('../core/_fn.msx');

var Footer = function(ctrl){
  return [
    {tag: "div", attrs: {className:"footer"***REMOVED***, children: [
      {tag: "div", attrs: {className:"container"***REMOVED***, children: [
        "©2016 VnDocs.com"
    ***REMOVED******REMOVED***
  ***REMOVED******REMOVED***
***REMOVED***
***REMOVED***;

module.exports = Footer;
***REMOVED***,{"../core/_data.msx":11,"../core/_fn.msx":12***REMOVED***],6:[function(require,module,exports){
var data = require('../core/_data.msx');
var fn = require('../core/_fn.msx');

var Head = function(ctrl){
  return [
    {tag: "div", attrs: {className:"container"***REMOVED***, children: [
       {tag: "span", attrs: {className:"menu-icon", 
             onclick:function(elem){
               var el = document.querySelectorAll('.menu')[0];
               var el2 = document.querySelectorAll('.content')[0];
               fn.toggleClass(el, "menu-active");
               fn.toggleClass(el2, "menu-active");
               fn.toggleClass(elem.target, "menu-active");
           ***REMOVED***
     ***REMOVED******REMOVED***, 
      {tag: "a", attrs: {href:"/", config:m.route***REMOVED***, children: [
        {tag: "img", attrs: {className:"logo", src:"/assets/images/logo.png", alt:"logo Vndocs.com"***REMOVED******REMOVED***
    ***REMOVED******REMOVED***, 
      {tag: "span", attrs: {className:"slogan orange", 
        config:function(el, isInited, context){
          if(!isInited){
            setInterval((function(){
              fn.toggleClass(el, 'orange');
          ***REMOVED***), 300)
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***, children: ["Nơi chia sẻ tài liệu hoàn toàn miễn phí !"]***REMOVED***, 
      {tag: "div", attrs: {className:"free-logoWr"***REMOVED***, children: [
        {tag: "img", attrs: {className:"free-logo", src:"/assets/images/100_free.png", alt:""***REMOVED******REMOVED***, 
        {tag: "img", attrs: {className:"lookingfor", src:"/assets/images/lookingfor.png", alt:""***REMOVED******REMOVED***
    ***REMOVED******REMOVED***, 
      
      {tag: "div", attrs: {className:"shareWr"***REMOVED***, children: [
        {tag: "img", attrs: {className:"share", src:"/assets/images/sharing-is-caring.png", alt:""***REMOVED******REMOVED***
    ***REMOVED******REMOVED***
  ***REMOVED******REMOVED***
***REMOVED***
***REMOVED***;

module.exports = Head;
***REMOVED***,{"../core/_data.msx":11,"../core/_fn.msx":12***REMOVED***],7:[function(require,module,exports){
var data = require('../core/_data.msx');


var Login = function(ctrl){
  return [
    {tag: "div", attrs: {className:"login-popup", 
         onclick:function(){
           if ($('.wrapper-content:hover').length == 0) {
             data.showSignin = false;
             data.showSignup = false;
         ***REMOVED***
       ***REMOVED***, 
         style:(!data.showSignin)?"display: none":""***REMOVED***, children: [
      {tag: "div", attrs: {class:"wrapper"***REMOVED***, children: [
        {tag: "div", attrs: {class:"wrapper-content"***REMOVED***, children: [
          {tag: "h3", attrs: {***REMOVED***, children: ["Đăng nhập"]***REMOVED***, 
          {tag: "form", attrs: {action:"/signIn", method:"POST"***REMOVED***, children: [
            {tag: "div", attrs: {***REMOVED***, children: [
              {tag: "div", attrs: {className:"label"***REMOVED***, children: [
                {tag: "label", attrs: {htmlFor:"email"***REMOVED***, children: ["Email : "]***REMOVED***
            ***REMOVED******REMOVED***, 
              {tag: "input", attrs: {type:"email", class:"user-email", id:"email", name:"email"***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "div", attrs: {***REMOVED***, children: [
              {tag: "div", attrs: {className:"label"***REMOVED***, children: [
                {tag: "label", attrs: {htmlFor:"password"***REMOVED***, children: ["Password : "]***REMOVED***
            ***REMOVED******REMOVED***, 
              {tag: "input", attrs: {type:"password", class:"user-password", id:"password", name:"password"***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "div", attrs: {***REMOVED***, children: [
              {tag: "div", attrs: {className:"label"***REMOVED***, children: [
                {tag: "label", attrs: {htmlFor:"rememberMe"***REMOVED***, children: ["Remember me"]***REMOVED***
            ***REMOVED******REMOVED***, 
              {tag: "input", attrs: {type:"checkbox", id:"rememberMe", name:"rememberMe", value:"true", checked:"true"***REMOVED******REMOVED***
          ***REMOVED******REMOVED***, 
            {tag: "input", attrs: {type:"hidden", name:"csrfToken", value:data.token***REMOVED******REMOVED***, 
            {tag: "div", attrs: {class:"logout"***REMOVED***, children: [
              {tag: "div", attrs: {className:"label"***REMOVED***
            ***REMOVED***, 
              {tag: "input", attrs: {type:"submit", value:"Đăng nhập"***REMOVED******REMOVED***, 
  
              {tag: "div", attrs: {style:"width: 40px; float: right; margin: 3px 10px 0 0;"***REMOVED***, children: [
                {tag: "a", attrs: {href:"/authenticate/google" + "?forward=" + m.route(), class:"social-button", id:"google-connect"***REMOVED***, children: [" "]***REMOVED***
            ***REMOVED******REMOVED***, 
              
              {tag: "div", attrs: {style:"width: 40px; float: right; margin: 3px 10px 0 0;"***REMOVED***, children: [
                {tag: "a", attrs: {href:"/authenticate/facebook" + "?forward=" + m.route(), class:"social-button", id:"facebook-connect"***REMOVED***, children: [" "]***REMOVED***
            ***REMOVED******REMOVED***
              
          ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***, 
          {tag: "div", attrs: {className:"label"***REMOVED******REMOVED***, 
          {tag: "span", attrs: {className:"other"***REMOVED***, children: [
            {tag: "a", attrs: {href:"#", class:"forgot-pass", 
              onclick:function(){
                data.showSignin = false;
                data.showSignup = true;
            ***REMOVED***
          ***REMOVED***, children: ["Đăng ký"]***REMOVED***, 
            {tag: "a", attrs: {href:"#", class:"forgot-pass"***REMOVED***, children: ["Quên mật khẩu?"]***REMOVED***
        ***REMOVED******REMOVED***
          
      ***REMOVED******REMOVED***
    ***REMOVED******REMOVED***
  ***REMOVED******REMOVED***,
    {tag: "div", attrs: {className:"login-popup", 
         onclick:function(){
           if ($('.wrapper-content:hover').length == 0) {
             data.showSignin = false;
             data.showSignup = false;
         ***REMOVED***
       ***REMOVED***, 
         style:(!data.showSignup)?"display: none":""***REMOVED***, children: [
      {tag: "div", attrs: {class:"wrapper"***REMOVED***, children: [
        {tag: "div", attrs: {class:"wrapper-content"***REMOVED***, children: [
          {tag: "h3", attrs: {***REMOVED***, children: ["Đăng ký"]***REMOVED***, 
          {tag: "form", attrs: {action:"/signUp", method:"POST"***REMOVED***, children: [
            {tag: "input", attrs: {type:"hidden", name:"csrfToken", value:data.token***REMOVED******REMOVED***, 
              
              {tag: "div", attrs: {class:"form-group  ", id:"firstName_field"***REMOVED***, children: [
                {tag: "div", attrs: {className:"label"***REMOVED***, children: [
                  {tag: "label", attrs: {htmlFor:"firstName"***REMOVED***, children: ["Họ : "]***REMOVED***
              ***REMOVED******REMOVED***, 
                {tag: "input", attrs: {type:"text", id:"firstName", name:"firstName", value:"", required:"true", class:"form-control form-control input-lg", placeholder:"First name"***REMOVED******REMOVED***
            ***REMOVED******REMOVED***, 
              
              {tag: "div", attrs: {class:"form-group  ", id:"lastName_field"***REMOVED***, children: [
                {tag: "div", attrs: {className:"label"***REMOVED***, children: [
                  {tag: "label", attrs: {htmlFor:"lastName"***REMOVED***, children: ["Tên : "]***REMOVED***
              ***REMOVED******REMOVED***, 
                {tag: "input", attrs: {type:"text", id:"lastName", name:"lastName", value:"", required:"true", class:"form-control form-control input-lg", placeholder:"Last name"***REMOVED******REMOVED***
            ***REMOVED******REMOVED***, 
              
              {tag: "div", attrs: {class:"form-group  ", id:"email_field"***REMOVED***, children: [
                {tag: "div", attrs: {className:"label"***REMOVED***, children: [
                  {tag: "label", attrs: {htmlFor:"email"***REMOVED***, children: ["Email : "]***REMOVED***
              ***REMOVED******REMOVED***, 
                {tag: "input", attrs: {type:"text", id:"email", name:"email", value:"", class:"form-control form-control input-lg", placeholder:"Email"***REMOVED******REMOVED***
            ***REMOVED******REMOVED***, 
              
              {tag: "section", attrs: {***REMOVED***, children: [
                {tag: "div", attrs: {class:"form-group  ", id:"password_field"***REMOVED***, children: [
                  {tag: "div", attrs: {className:"label"***REMOVED***, children: [
                    {tag: "label", attrs: {htmlFor:"password"***REMOVED***, children: ["Mật khẩu : "]***REMOVED***
                ***REMOVED******REMOVED***, 
                  {tag: "input", attrs: {type:"password", id:"password", name:"password", value:"", required:"true", class:"form-control form-control input-lg", placeholder:"Password"***REMOVED******REMOVED***
              ***REMOVED******REMOVED***
            ***REMOVED******REMOVED***, 
      
              {tag: "div", attrs: {class:"form-group"***REMOVED***, children: [
                {tag: "div", attrs: {***REMOVED***, children: [
                  {tag: "div", attrs: {className:"label"***REMOVED******REMOVED***, 
                  {tag: "button", attrs: {id:"submit", type:"submit", value:"submit", class:"btn btn-lg btn-primary btn-block"***REMOVED***, children: ["Đăng ký"]***REMOVED***, 
                  {tag: "div", attrs: {style:"width: 40px; float: right; margin: 3px 10px 0 0;"***REMOVED***, children: [
                    {tag: "a", attrs: {href:"/authenticate/google" + "?forward=" + m.route(), class:"social-button", id:"google-connect"***REMOVED***, children: [" "]***REMOVED***
                ***REMOVED******REMOVED***, 
  
                  {tag: "div", attrs: {style:"width: 40px; float: right; margin: 3px 10px 0 0;"***REMOVED***, children: [
                    {tag: "a", attrs: {href:"/authenticate/facebook" + "?forward=" + m.route(), class:"social-button", id:"facebook-connect"***REMOVED***, children: [" "]***REMOVED***
                ***REMOVED******REMOVED***
              ***REMOVED******REMOVED***
                
            ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***, 
          {tag: "div", attrs: {className:"label"***REMOVED******REMOVED***, 
          {tag: "span", attrs: {className:"other"***REMOVED***, children: [
            {tag: "span", attrs: {***REMOVED***, children: ["Đã có tài khoản? "]***REMOVED***, 
            {tag: "a", attrs: {href:"#", class:"forgot-pass", 
              onclick:function(){
                data.showSignin = true;
                data.showSignup = false;
            ***REMOVED***
          ***REMOVED***, children: ["Đăng nhập"]***REMOVED***
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***
    ***REMOVED******REMOVED***
  ***REMOVED******REMOVED***
***REMOVED***
***REMOVED***;

module.exports = Login;
***REMOVED***,{"../core/_data.msx":11***REMOVED***],8:[function(require,module,exports){
var fn = require('../core/_fn.msx');
var data = require('../core/_data.msx');

var Menu = function(ctrl){
    return [
        {tag: "div", attrs: {className:"menu"***REMOVED***, children: [
            {tag: "div", attrs: {className:"menubar"***REMOVED***, children: [
                "Tài khoản"
          ***REMOVED******REMOVED***, 
            {tag: "div", attrs: {className:"login"***REMOVED***, children: [
                (data.user !== undefined)?(
                    {tag: "div", attrs: {className:"userInfo"***REMOVED***, children: [
                        {tag: "div", attrs: {className:"top"***REMOVED***, children: [
                            {tag: "div", attrs: {className:"left"***REMOVED***, children: [
                                {tag: "img", attrs: {src:data.user.avatarURL, alt:"avatar"***REMOVED******REMOVED***
                          ***REMOVED******REMOVED***, 
                                {tag: "div", attrs: {className:"right"***REMOVED***, children: [
                                {tag: "div", attrs: {***REMOVED***, children: ["Xin chào"]***REMOVED***, 
                                {tag: "span", attrs: {***REMOVED***, children: [data.user.fullName]***REMOVED***
                          ***REMOVED******REMOVED***
                      ***REMOVED******REMOVED***, 
                        {tag: "div", attrs: {className:"bot"***REMOVED***, children: [
                            {tag: "a", attrs: {href:"/signOut?forward=" + m.route()***REMOVED***, children: ["Đăng xuất"]***REMOVED***
                      ***REMOVED******REMOVED***
                  ***REMOVED******REMOVED***
                ):(
                    {tag: "div", attrs: {class:"login-box"***REMOVED***, children: [
                        {tag: "div", attrs: {***REMOVED***, children: [{tag: "a", attrs: {href:"#", 
                                onclick:function(){
                                    data.showSignin = true;
                                    data.showSignup = false;
                              ***REMOVED***
                      ***REMOVED***, children: [{tag: "span", attrs: {***REMOVED***, children: ["Đăng nhập"]***REMOVED***]***REMOVED***, " /", 
                            {tag: "a", attrs: {href:"#", 
                               onclick:function(){
                                   data.showSignin = false;
                                   data.showSignup = true;
                             ***REMOVED***
                          ***REMOVED***, children: [{tag: "span", attrs: {***REMOVED***, children: [" Đăng ký"]***REMOVED***]***REMOVED***]***REMOVED***, 
                        {tag: "span", attrs: {style:"width: 20px;"***REMOVED******REMOVED***, 
                        {tag: "a", attrs: {href:"/authenticate/facebook" + "?forward=" + m.route(), class:"social-button", id:"facebook-connect"***REMOVED***, children: [" ", {tag: "span", attrs: {***REMOVED***, children: [" Facebook"]***REMOVED***]***REMOVED***, 
                        {tag: "a", attrs: {href:"/authenticate/google" + "?forward=" + m.route(), class:"social-button", id:"google-connect"***REMOVED***, children: [" ", {tag: "span", attrs: {***REMOVED***, children: [" Google"]***REMOVED***]***REMOVED***
                  ***REMOVED******REMOVED***
                )
    
          ***REMOVED******REMOVED***, 
            {tag: "hr", attrs: {className:"style1"***REMOVED******REMOVED***, 
            {tag: "div", attrs: {className:"menubar"***REMOVED***, children: [
                "Menu"
          ***REMOVED******REMOVED***, 
            {tag: "div", attrs: {className:"list-menu"***REMOVED***, children: [
                fn.runCreateMenu(JSON.parse(Window.menu), 1)
          ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***
  ***REMOVED***;
***REMOVED***;




module.exports = Menu;
***REMOVED***,{"../core/_data.msx":11,"../core/_fn.msx":12***REMOVED***],9:[function(require,module,exports){
var fn = require('../core/_fn.msx');
var data = require('../core/_data.msx');
var Comments = require('./_comment.msx');

var PostView = function(ctrl){
    return {tag: "div", attrs: {className:"main mh500"***REMOVED***, children: [
      ctrl.request.ready()?[
         {tag: "div", attrs: {***REMOVED***, children: [
           {tag: "span", attrs: {className:"breadcrumb"***REMOVED***, children: [
             fn.buildBreadcrumb(Window.urls, Window.categories,ctrl.post().post.categories[0], []), 
             ctrl.post().post.title
         ***REMOVED******REMOVED***, 
           
           {tag: "br", attrs: {***REMOVED******REMOVED***, 
           {tag: "hr", attrs: {className:"style3"***REMOVED******REMOVED***, 
           {tag: "div", attrs: {className:"postWr"***REMOVED***, children: [
             {tag: "div", attrs: {className:"postTitle"***REMOVED***, children: [
               {tag: "h1", attrs: {***REMOVED***, children: [ctrl.post().post.title]***REMOVED***
           ***REMOVED******REMOVED***, 
             {tag: "hr", attrs: {className:"style3"***REMOVED******REMOVED***, 
             {tag: "div", attrs: {className:"postInfo cf"***REMOVED***, children: [
               {tag: "div", attrs: {className:"meta-data"***REMOVED***, children: [
        
                 {tag: "span", attrs: {className:"upload"***REMOVED***, children: [ctrl.post().post.upload]***REMOVED***, 
                 {tag: "span", attrs: {className:"category"***REMOVED***, children: [
                     ctrl.post().post.categories.map((function (item) {
                         return {tag: "a", attrs: {href:"/category/" + item, 
                                   config:m.route
                       ***REMOVED***, children: [{tag: "span", attrs: {***REMOVED***, children: [Window.categories.getItemByParam({slug: item***REMOVED***).name]***REMOVED***]***REMOVED***
                   ***REMOVED***))
                    ***REMOVED******REMOVED***, 
                 {tag: "span", attrs: {className:"time"***REMOVED***, children: [moment(ctrl.post().post.time).format('L')]***REMOVED***
             ***REMOVED******REMOVED***, 
      
               {tag: "div", attrs: {className:"t-left"***REMOVED***, children: [
                 {tag: "a", attrs: {href:"#"***REMOVED***, children: [{tag: "img", attrs: {src:"/cover/get/" + ctrl.post().post.cover.id, alt:ctrl.post().post.cover.alt***REMOVED******REMOVED***]***REMOVED***
             ***REMOVED******REMOVED***, 
               {tag: "div", attrs: {className:"t-right"***REMOVED***, children: [
                 {tag: "div", attrs: {className:"rate-nav"***REMOVED***, children: ["RATING"]***REMOVED***, 
                 {tag: "div", attrs: {className:"rate-num"***REMOVED***, children: [ctrl.post().post.nLike]***REMOVED***, 
                 {tag: "button", attrs: {className:"rate-button", 
                    onclick:function(el){
                        if(Window.user == undefined){
                            data.showSignin = true;
                      ***REMOVED*** else {
                            if(!ctrl.voted) {
                                $.ajax({
                                    type: "POST",
                                    url: "/post/vote",
                                    data: JSON.stringify({
                                        "id": ctrl.postID,
                                  ***REMOVED***),
                                    contentType: "application/json",
                                    dataType: "text",
                                    success: function (res) {
                                        ctrl.post().post.nLike += 1;
                                        m.redraw();
                                  ***REMOVED***
                              ***REMOVED***);
                                ctrl.voted = true;
                          ***REMOVED***
                      ***REMOVED***
                  ***REMOVED***
               ***REMOVED***, children: ["+1"]***REMOVED***
             ***REMOVED******REMOVED***
           ***REMOVED******REMOVED***, 
             {tag: "hr", attrs: {className:"style3"***REMOVED******REMOVED***, 
             {tag: "div", attrs: {className:"postContent"***REMOVED***, children: [
               m.trust(marked(ctrl.post().post.content))
           ***REMOVED******REMOVED***
         ***REMOVED******REMOVED***
       ***REMOVED******REMOVED***,
          {tag: "hr", attrs: {className:"style3"***REMOVED******REMOVED***,
          Comments(ctrl, ctrl.post(), ctrl.postID, "post")
          
    ***REMOVED***:[
          {tag: "div", attrs: {className:"loading"***REMOVED***, children: [
              {tag: "div", attrs: {class:"loader"***REMOVED***, children: [
                  {tag: "div", attrs: {class:"inner one"***REMOVED******REMOVED***, 
                  {tag: "div", attrs: {class:"inner two"***REMOVED******REMOVED***, 
                  {tag: "div", attrs: {class:"inner three"***REMOVED******REMOVED***
            ***REMOVED******REMOVED***
        ***REMOVED******REMOVED***
    ***REMOVED***
      
  ***REMOVED******REMOVED***
      
***REMOVED***;



module.exports = PostView;
***REMOVED***,{"../core/_data.msx":11,"../core/_fn.msx":12,"./_comment.msx":3***REMOVED***],10:[function(require,module,exports){
var data = require('../core/_data.msx');

var Side = function(ctrl){
    return [{tag: "div", attrs: {className:"side mh1000"***REMOVED***, children: [
        {tag: "div", attrs: {className:"menubar"***REMOVED***, children: [
            "Tìm kiếm"
      ***REMOVED******REMOVED***, 
        {tag: "div", attrs: {className:"search cf"***REMOVED***, children: [
            {tag: "form", attrs: {class:"search-form"***REMOVED***, children: [
                {tag: "div", attrs: {class:"search-field-container"***REMOVED***, children: [
                    {tag: "input", attrs: {type:"text", class:"search-field", placeholder:"Tìm kiếm..."***REMOVED******REMOVED***
              ***REMOVED******REMOVED***
          ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***, 
        {tag: "hr", attrs: {className:"style1"***REMOVED******REMOVED***, 
        {tag: "div", attrs: {className:"menubar"***REMOVED***, children: [
            "Fanpage website"
      ***REMOVED******REMOVED***, 
        {tag: "div", attrs: {style:"height: 135px; margin-top: 10px;"***REMOVED***, children: [
            {tag: "iframe", attrs: {src:"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fvndocs&tabs&width=190&height=136&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=695740397243976", width:"190", height:"136", style:"border:none;overflow:hidden", scrolling:"no", frameborder:"0", allowTransparency:"true"***REMOVED******REMOVED***
      ***REMOVED******REMOVED***, 
        {tag: "hr", attrs: {className:"style1"***REMOVED******REMOVED***, 
        {tag: "div", attrs: {className:"menubar"***REMOVED***, children: [
            "Hướng dẫn/Chia sẻ"
      ***REMOVED******REMOVED***, 
        {tag: "ul", attrs: {className:"side-article"***REMOVED***, children: [
            Window.articles.map((function(el){
                return {tag: "li", attrs: {***REMOVED***, children: [
                    {tag: "span", attrs: {***REMOVED***, children: [
                        {tag: "a", attrs: {href:"/blog/" + el._id, 
                            config:m.route
                      ***REMOVED***, children: [
                            el.title
                      ***REMOVED******REMOVED***
                  ***REMOVED******REMOVED***
              ***REMOVED******REMOVED***
          ***REMOVED***))
      ***REMOVED******REMOVED***
  ***REMOVED******REMOVED***,
    
  ***REMOVED***
***REMOVED***;

module.exports = Side;
***REMOVED***,{"../core/_data.msx":11***REMOVED***],11:[function(require,module,exports){
var Data = {***REMOVED***;

Data.showSignin = false;
Data.showSignup = false;
Data.sessionstorage = mx.storage( 'sessionsstorage' , mx.SESSION_STORAGE );

if(Window.user !== undefined) {
  Data.user = Window.user;
  console.log(Data.user)
***REMOVED***

module.exports = Data;
***REMOVED***,{***REMOVED***],12:[function(require,module,exports){
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
        menuJson.map((function(child){
            return m('li',  [
                m('a', {title: child.title, href: child.http, config: m.route***REMOVED*** ,m('span', child.title)),
                (level > 1 )?{tag: "sup", attrs: {className:"norm"***REMOVED***, children: ["6431"]***REMOVED***:"",
                (child.children !== undefined)?fn.createMenu(child.children, level + 1):''
          ***REMOVED***)
      ***REMOVED***))
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
        request: m.request(args).then(data).then((function(data){
            if(bind !== undefined) bind(data);
            if(fn !== undefined) fn();
            complete();
            m.redraw();
      ***REMOVED***)),
        data: data,
        ready: completed
  ***REMOVED***
***REMOVED***;

fn.buildBreadcrumb = function(urls, category, currentCategory, result){
    if(currentCategory === "NONE") {
        result.push(" » " ,{tag: "a", attrs: {href:"/", config:m.route***REMOVED***, children: ["Trang chủ"]***REMOVED*** );
        return result.reverse();
  ***REMOVED***
    var jsonCategory = category.getItemByParam({slug: currentCategory***REMOVED***);
    result.push(" » " ,{tag: "a", attrs: {href:"/category/" + currentCategory, config:m.route***REMOVED***, children: [" ", jsonCategory.name, " "]***REMOVED***);
    return fn.buildBreadcrumb(urls, category, jsonCategory.sku.slug, result);
***REMOVED***;

fn.cookieUrl = function(){
    
***REMOVED***;

module.exports = fn;
***REMOVED***,{***REMOVED***],13:[function(require,module,exports){
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








***REMOVED***,{"./_main.msx":1***REMOVED***],14:[function(require,module,exports){
var Post = {***REMOVED***;
var Menu = require('../component/_menu.msx');
var fn = require('../core/_fn.msx');
var Data = require('../core/_data.msx');
var ArticleView = require('../component/_article.msx');
var Side = require('../component/_side.msx');
var Login = require('../component/_login.msx');
var Head = require('../component/_head.msx');
var Footer = require('../component/_footer.msx');


Post.controller = function(){
  
  if(Window.user == undefined){
    Data.sessionstorage.set( 'url' , m.route() );
***REMOVED*** else {
    Data.sessionstorage.set( 'url' , "/" );
***REMOVED***
  
  var ctrl = this;
  ctrl.setup = function(){
    m.redraw();
***REMOVED***;
  ctrl.slug =  m.route.param("slug");
  ctrl.request = {***REMOVED***;
  ctrl.request.ready = m.prop(false);
  ctrl.article = m.prop({***REMOVED***);
  ctrl.comment = m.prop("");
  ctrl.voted = false;
  
  if(Window.article === undefined) {
    console.log("run request !!!!!!!!!!")
    ctrl.request = fn.requestWithFeedback({method: "GET", url: "/blog/get/" + ctrl.slug***REMOVED***, ctrl.article, ctrl.setup);
***REMOVED*** else {
    // ctrl.request.data = m.prop(Window.post);
    ctrl.article().article = Window.article;
    ctrl.article().comments = Window.comments;
    Window.article = undefined;
    Window.comments = undefined;
    ctrl.request.ready = m.prop(true);
    m.redraw();
***REMOVED***;
  ctrl.setup = function(){
    // ctrl.post(ctrl.request.data());
    console.log(ctrl.article());
    m.redraw();
***REMOVED***;
  
***REMOVED***;

Post.view = function(ctrl){
  return [
    {tag: "div", attrs: {className:"headWr "***REMOVED***, children: [
      Head(ctrl)
  ***REMOVED******REMOVED***,
    {tag: "div", attrs: {className:"container containerBor"***REMOVED***, children: [
          
      {tag: "div", attrs: {className:"bodyWr"***REMOVED***, children: [
        Menu(ctrl), 
        {tag: "div", attrs: {className:"content "***REMOVED***, children: [
          ArticleView(ctrl), 
          Side(ctrl)
      ***REMOVED******REMOVED***
    ***REMOVED******REMOVED***
    
  ***REMOVED******REMOVED***,
    Login(ctrl),
    Footer(ctrl)
***REMOVED***
***REMOVED***;

module.exports =  Post;
***REMOVED***,{"../component/_article.msx":2,"../component/_footer.msx":5,"../component/_head.msx":6,"../component/_login.msx":7,"../component/_menu.msx":8,"../component/_side.msx":10,"../core/_data.msx":11,"../core/_fn.msx":12***REMOVED***],15:[function(require,module,exports){
var Category = {***REMOVED***;
var Menu = require('../component/_menu.msx');
var fn = require('../core/_fn.msx');
var Data = require('../core/_data.msx');
var Content = require('../component/_content.msx');
var Side = require('../component/_side.msx');
var Login = require('../component/_login.msx');
var Head = require('../component/_head.msx');
var Footer = require('../component/_footer.msx');


Category.controller = function(){
  if(Window.user == undefined){
    Data.sessionstorage.set( 'url' , m.route() );
***REMOVED*** else {
    Data.sessionstorage.set( 'url' , "/" );
***REMOVED***
  
  var ctrl = this;
  ctrl.request = {***REMOVED***;
  ctrl.request.ready = m.prop(false);
  ctrl.posts = m.prop();
  ctrl.categorySlug =  m.route.param("categorySlug");
  
  if(Window.posts === undefined) {
    ctrl.request = fn.requestWithFeedback({method: "GET", url: "/category/" + ctrl.categorySlug + "/1"***REMOVED***, ctrl.posts, ctrl.setup);
***REMOVED*** else {
    ctrl.request.data = m.prop(Window.posts);
    ctrl.posts(ctrl.request.data());
    Window.posts = undefined;
    ctrl.request.ready = m.prop(true);
    m.redraw();
***REMOVED***;
  ctrl.setup = function(){
    ctrl.posts(ctrl.request.data());
    m.redraw();
***REMOVED***;
  

***REMOVED***;

Category.view = function(ctrl){
  return [
    {tag: "div", attrs: {className:"headWr "***REMOVED***, children: [
      Head(ctrl)
  ***REMOVED******REMOVED***,
    {tag: "div", attrs: {className:"container containerBor"***REMOVED***, children: [
           
      {tag: "div", attrs: {className:"bodyWr"***REMOVED***, children: [
        Menu(ctrl), 
        {tag: "div", attrs: {className:"content "***REMOVED***, children: [
          Content(ctrl), 
          Side(ctrl)
      ***REMOVED******REMOVED***
    ***REMOVED******REMOVED***
    
  ***REMOVED******REMOVED***,
    Login(ctrl),
    Footer(ctrl)
***REMOVED***
***REMOVED***;

module.exports =  Category;
***REMOVED***,{"../component/_content.msx":4,"../component/_footer.msx":5,"../component/_head.msx":6,"../component/_login.msx":7,"../component/_menu.msx":8,"../component/_side.msx":10,"../core/_data.msx":11,"../core/_fn.msx":12***REMOVED***],16:[function(require,module,exports){
var Home = {***REMOVED***;
var Menu = require('../component/_menu.msx');
var fn = require('../core/_fn.msx');
var Data = require('../core/_data.msx');
var Content = require('../component/_content.msx');
var Side = require('../component/_side.msx');
var Login = require('../component/_login.msx');
var Head = require('../component/_head.msx');
var Footer = require('../component/_footer.msx');


Home.controller = function(){
  if(Window.user == undefined){
    Data.sessionstorage.set( 'url' , m.route() );
***REMOVED*** else {
    if(Data.sessionstorage.get( 'url' ) != "/" ){
      console.log("=================================");
      console.log(Data.sessionstorage.get( 'url' ));
      m.route(Data.sessionstorage.get( 'url' ))
  ***REMOVED***
***REMOVED***
  
  
  var ctrl = this;
  ctrl.request = {***REMOVED***;
  ctrl.request.ready = m.prop(false);
  ctrl.posts = m.prop();
  ctrl.articles = Window.articles;
  
  
  
  if(Window.posts === undefined) {
    ctrl.request = fn.requestWithFeedback({method: "GET", url: "/posts/1"***REMOVED***, ctrl.posts, ctrl.setup);
***REMOVED*** else {
    ctrl.request.data = m.prop(Window.posts);
    ctrl.posts(ctrl.request.data());
    Window.posts = undefined;
    ctrl.request.ready = m.prop(true);
    m.redraw();
***REMOVED***;
  ctrl.setup = function(){
    ctrl.posts(ctrl.request.data());
    m.redraw();
***REMOVED***;
  
***REMOVED***;

Home.view = function(ctrl){
  return [
    {tag: "div", attrs: {className:"headWr "***REMOVED***, children: [
      Head(ctrl)
  ***REMOVED******REMOVED***,
    {tag: "div", attrs: {className:"container containerBor"***REMOVED***, children: [
      
      {tag: "div", attrs: {className:"bodyWr"***REMOVED***, children: [
        Menu(ctrl), 
        {tag: "div", attrs: {className:"content "***REMOVED***, children: [
          Content(ctrl), 
          Side(ctrl)
      ***REMOVED******REMOVED***
    ***REMOVED******REMOVED***
  ***REMOVED******REMOVED***,
    Login(ctrl),
    Footer(ctrl)
***REMOVED***
***REMOVED***;

module.exports =  Home;
***REMOVED***,{"../component/_content.msx":4,"../component/_footer.msx":5,"../component/_head.msx":6,"../component/_login.msx":7,"../component/_menu.msx":8,"../component/_side.msx":10,"../core/_data.msx":11,"../core/_fn.msx":12***REMOVED***],17:[function(require,module,exports){
var Post = {***REMOVED***;
var Menu = require('../component/_menu.msx');
var fn = require('../core/_fn.msx');
var Data = require('../core/_data.msx');
var PostView = require('../component/_post.msx');
var Side = require('../component/_side.msx');
var Login = require('../component/_login.msx');
var Head = require('../component/_head.msx');
var Footer = require('../component/_footer.msx');

Post.controller = function(){
  
  if(Window.user == undefined){
    Data.sessionstorage.set( 'url' , m.route() );
***REMOVED*** else {
    Data.sessionstorage.set( 'url' , "/" );
***REMOVED***
  
  var ctrl = this;
  ctrl.setup = function(){
    m.redraw();
***REMOVED***;
  ctrl.postID =  m.route.param("postID");
  ctrl.request = {***REMOVED***;
  ctrl.request.ready = m.prop(false);
  ctrl.post = m.prop({***REMOVED***);
  ctrl.comment = m.prop("");
  ctrl.voted = false;
  
  if(Window.post === undefined) {
    console.log("run request !!!!!!!!!!")
    ctrl.request = fn.requestWithFeedback({method: "GET", url: "/post/get/" + ctrl.postID***REMOVED***, ctrl.post, ctrl.setup);
***REMOVED*** else {
    // ctrl.request.data = m.prop(Window.post);
    ctrl.post().post = Window.post;
    ctrl.post().comments = Window.comments;
    Window.post = undefined;
    Window.comments = undefined;
    ctrl.request.ready = m.prop(true);
    m.redraw();
***REMOVED***;
  ctrl.setup = function(){
    // ctrl.post(ctrl.request.data());
    console.log(ctrl.post());
    m.redraw();
***REMOVED***;
***REMOVED***;

Post.view = function(ctrl){
  return [
    {tag: "div", attrs: {className:"headWr "***REMOVED***, children: [
      Head(ctrl)
  ***REMOVED******REMOVED***,
    {tag: "div", attrs: {className:"container containerBor"***REMOVED***, children: [
   
      {tag: "div", attrs: {className:"bodyWr"***REMOVED***, children: [
        Menu(ctrl), 
        {tag: "div", attrs: {className:"content "***REMOVED***, children: [
          PostView(ctrl), 
          Side(ctrl)
      ***REMOVED******REMOVED***
    ***REMOVED******REMOVED***
    
  ***REMOVED******REMOVED***,
    Login(ctrl),
    Footer(ctrl)
***REMOVED***
***REMOVED***;

module.exports =  Post;
***REMOVED***,{"../component/_footer.msx":5,"../component/_head.msx":6,"../component/_login.msx":7,"../component/_menu.msx":8,"../component/_post.msx":9,"../component/_side.msx":10,"../core/_data.msx":11,"../core/_fn.msx":12***REMOVED***]***REMOVED***,{***REMOVED***,[13])
