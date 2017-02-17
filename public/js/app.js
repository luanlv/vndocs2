!(function t(a,e,s){function r(o,i){if(!e[o]){if(!a[o]){var c="function"==typeof require&&require;if(!i&&c)return c(o,!0);if(n)return n(o,!0);throw new Error("Cannot find module '"+o+"'")}var l=e[o]={exports:{}};a[o][0].call(l.exports,(function(t){var e=a[o][1][t];return r(e?e:t)}),l,l.exports,t,a,e,s)}return e[o].exports}for(var n="function"==typeof require&&require,o=0;o<s.length;o++)r(s[o]);return r})({1:[function(t,a,e){function s(t){var a={};for(var e in t)a[e]={controller:o(t[e].controller),view:t[e].view};return a}var r=r||{},n=(t("./core/_fn.msx"),t("./core/_data.msx"));r.Home=t("./main/home.msx"),r.Category=t("./main/category.msx"),r.Post=t("./main/post.msx"),r.Article=t("./main/article.msx"),n.token=$(document.getElementsByName("csrfToken")).val(),$(document).ajaxSend((function(t,a,e){"POST"==e.type&&a.setRequestHeader("Csrf-Token",n.token)})),(function(t,a,e,s,r,n,o){t.GoogleAnalyticsObject=r,t[r]=t[r]||function(){(t[r].q=t[r].q||[]).push(arguments)},t[r].l=1*new Date,n=a.createElement(e),o=a.getElementsByTagName(e)[0],n.async=1,n.src=s,o.parentNode.insertBefore(n,o)})(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-84710092-1","auto");var o=function(t){return function(){return ga("send","pageview",{page:m.route()}),t.apply(this,arguments)}};m.route(document.querySelector("#app"),"/",s({"/":r.Home,"/post/:postID":r.Post,"/blog/:slug":r.Article,"/category/:categorySlug":r.Category})),a.exports=r},{"./core/_data.msx":11,"./core/_fn.msx":12,"./main/article.msx":14,"./main/category.msx":15,"./main/home.msx":16,"./main/post.msx":17}],2:[function(t,a,e){var s=(t("../core/_fn.msx"),t("../core/_data.msx")),r=t("./_comment.msx"),n=function(t){return{tag:"div",attrs:{className:"main mh800"},children:[t.request.ready()?[{tag:"div",attrs:{},children:[{tag:"hr",attrs:{className:"style3"}},{tag:"div",attrs:{className:"postWr"},children:[{tag:"div",attrs:{className:"postTitle"},children:[{tag:"h1",attrs:{},children:[t.article().article.title]}]},{tag:"hr",attrs:{className:"style3"}},{tag:"div",attrs:{className:"postInfo cf"},children:[{tag:"div",attrs:{className:"meta-data"},children:[{tag:"span",attrs:{className:"upload"},children:[t.article().article.author]},{tag:"span",attrs:{className:"category"},children:[t.article().article.tags.map((function(t){return{tag:"a",attrs:{href:"javascript:void(0)"},children:["el"]}}))]},{tag:"span",attrs:{className:"time"},children:[moment(t.article().article.time).format("L")]}]},{tag:"div",attrs:{className:"t-left"},children:[{tag:"a",attrs:{href:"#"},children:[{tag:"img",attrs:{src:s.baseUrl+"/cover/get/"+t.article().article.cover.id,alt:t.article().article.cover.alt}}]}]},{tag:"div",attrs:{className:"t-right"},children:[{tag:"div",attrs:{className:"rate-nav"},children:["RATING"]},{tag:"div",attrs:{className:"rate-num"},children:[t.article().article.nLike]},{tag:"button",attrs:{className:"rate-button",onclick:function(a){void 0==Window.user?s.showSignin=!0:(t.voted||$.ajax({type:"POST",url:"/blog/vote",data:JSON.stringify({id:t.slug}),contentType:"application/json",dataType:"text",success:function(a){t.article().article.nLike+=1,m.redraw()}}),t.voted=!0)}},children:["+1"]}]}]},{tag:"hr",attrs:{className:"style3"}},{tag:"div",attrs:{className:"postContent"},children:[m.trust(marked(t.article().article.body))]}]}]},{tag:"hr",attrs:{className:"style3"}},r(t,t.article(),t.slug,"article")]:[{tag:"div",attrs:{className:"loading"},children:[{tag:"div",attrs:{class:"loader"},children:[{tag:"div",attrs:{class:"inner one"}},{tag:"div",attrs:{class:"inner two"}},{tag:"div",attrs:{class:"inner three"}}]}]}]]}};a.exports=n},{"../core/_data.msx":11,"../core/_fn.msx":12,"./_comment.msx":3}],3:[function(t,a,e){var s=t("../core/_data.msx"),r=(t("../core/_fn.msx"),function(t,a,e,r){return[{tag:"div",attrs:{id:"comment"},children:[{tag:"h2",attrs:{},children:["Bình luận ",void 0==Window.user?"(Bạn phải đăng nhập!)":""]},{tag:"hr",attrs:{className:"style1"}},{tag:"div",attrs:{className:"commentWr"},children:[{tag:"span",attrs:{class:"poster"},children:[{tag:"img",attrs:{src:void 0!=s.user?s.user.avatarURL:"/assets/images/silhouette.png",class:"icon"}},{tag:"br",attrs:{}}]},{tag:"div",attrs:{class:"comment commentBox"},children:[{tag:"textarea",attrs:{name:"cmt",id:"cmt",onclick:function(){void 0==Window.user&&(s.showSignin=!0)},onchange:function(a){t.comment($(a.target).val()),console.log(t.comment())}},children:[t.comment()]},void 0==Window.user?{tag:"span",attrs:{className:"notUser"},children:["Chưa đăng nhập"]}:{tag:"span",attrs:{className:"isUser"},children:[Window.user.fullName]},{tag:"span",attrs:{className:"submit"},children:[{tag:"a",attrs:{href:"javascript:void(0)",onclick:function(){$.ajax({type:"POST",url:"/comment/"+e,data:JSON.stringify({data:t.comment(),type:r}),contentType:"application/json",dataType:"json",success:function(e){a.comments.unshift(e),t.comment(""),m.redraw()}})}},children:[" Gửi "]}]}]}]},a.comments.map((function(t){return{tag:"div",attrs:{className:"commentWr"},children:[{tag:"span",attrs:{class:"poster"},children:[{tag:"img",attrs:{src:t.user.avatarURL,class:"icon"}},{tag:"br",attrs:{}}]},{tag:"div",attrs:{class:"comment"},children:[{tag:"span",attrs:{class:"info"},children:[{tag:"span",attrs:{className:"userName"},children:[t.user.fullName]}," Posted July 9th 2016, 01:04 AM",{tag:"span",attrs:{class:"buttons"}}]},t.comment]}]}}))]}]});a.exports=r},{"../core/_data.msx":11,"../core/_fn.msx":12}],4:[function(t,a,e){var s=t("../core/_fn.msx"),r=t("../core/_data.msx"),n=function(t){return{tag:"div",attrs:{className:"main cf mh800"},children:[t.request.ready()?[{tag:"div",attrs:{className:"sort roundbox",id:"top"},children:[{tag:"form",attrs:{name:"news_set_sort",id:"news_set_sort",method:"post",action:"http://englishtips.org/"},children:[{tag:"span",attrs:{},children:["Lọc theo: "]},{tag:"a",attrs:{href:"javascript:void(0)"},children:["Ngày đăng"]},{tag:"a",attrs:{href:"javascript:void(0)"},children:["Rating"]},{tag:"a",attrs:{href:"javascript:void(0)"},children:["Lượt xem"]},{tag:"a",attrs:{href:"javascript:void(0)"},children:["Bình luận"]}]}]},{tag:"div",attrs:{class:"navigation",align:"center",style:"margin-bottom:10px; margin-top:10px;"},children:[{tag:"button",attrs:{className:"btn btn-1 btn-1a",onclick:function(){t.goPrev(t.page)}},children:["PREV"]},{tag:"input",attrs:{type:"number",id:"page",value:t.page,style:"width: 50px; text-alige: center"}},"/ ",Math.ceil(t.posts().total/5),"  ",{tag:"button",attrs:{className:"btn btn-1 btn-1a",onclick:function(){t.goToPage($("#page").val())}},children:[" Go"]},{tag:"button",attrs:{className:"btn btn-1 btn-1a",onclick:function(){t.goNext(t.page)}},children:["NEXT"]}]},{tag:"hr",attrs:{className:"style3",style:"margin-top: 45px;"}},t.posts().posts.map((function(t){return{tag:"div",attrs:{className:"block main-item"},children:[{tag:"div",attrs:{className:"title"},children:[{tag:"div",attrs:{className:"t-left"},children:[{tag:"a",attrs:{href:r.baseUrl+"/post/"+t._id,className:"title",config:m.route},children:[t.title]}]},{tag:"div",attrs:{className:"t-right"},children:[{tag:"div",attrs:{className:"rate-nav"},children:["RATING"]},{tag:"div",attrs:{className:"rate-num"},children:[t.nLike]}]}]},{tag:"div",attrs:{className:"meta-data"},children:[{tag:"span",attrs:{className:"upload"},children:[t.upload]},{tag:"span",attrs:{className:"category"},children:[t.categories.map((function(t){var a=s.getItemByParam(Window.categories,"slug",t);return{tag:"a",attrs:{href:r.baseUrl+"/category/"+t,config:m.route},children:[{tag:"span",attrs:{},children:[void 0==a?"":a.name]}]}}))]},{tag:"span",attrs:{className:"time"},children:[moment(t.time).format("L")]},{tag:"span",attrs:{className:"nComment"},children:[{tag:"a",attrs:{href:r.baseUrl+"/post/"+t._id+"#comment",config:m.route},children:[t.nComment," bình luận"]}]}]},{tag:"div",attrs:{className:"info"},children:[{tag:"a",attrs:{href:"#"},children:[{tag:"img",attrs:{src:r.baseUrl+"/cover/get/"+t.cover.id,alt:t.cover.alt}}]},{tag:"p",attrs:{className:"description"},children:[window.isMobile?t.description.slice(0,250):t.description," ..."]}]}]}})),{tag:"hr",attrs:{className:"style3"}},{tag:"div",attrs:{class:"navigation",align:"center",style:"margin-bottom:10px; margin-top:10px;"},children:[{tag:"button",attrs:{className:"btn btn-1 btn-1a",onclick:function(){t.goPrev(t.page)}},children:["PREV"]},{tag:"input",attrs:{type:"number",id:"page",value:t.page,style:"width: 50px; text-alige: center"}},"/ ",Math.ceil(t.posts().total/5),"  ",{tag:"button",attrs:{className:"btn btn-1 btn-1a",onclick:function(){t.goToPage($("#page").val())}},children:[" Go"]},{tag:"button",attrs:{className:"btn btn-1 btn-1a",onclick:function(){t.goNext(t.page)}},children:["NEXT"]}]}]:[{tag:"div",attrs:{className:"loading"},children:[{tag:"div",attrs:{class:"loader"},children:[{tag:"div",attrs:{class:"inner one"}},{tag:"div",attrs:{class:"inner two"}},{tag:"div",attrs:{class:"inner three"}}]}]}]]}};a.exports=n},{"../core/_data.msx":11,"../core/_fn.msx":12}],5:[function(t,a,e){var s=(t("../core/_data.msx"),t("../core/_fn.msx"),function(t){return[{tag:"div",attrs:{className:"footer"},children:[{tag:"div",attrs:{className:"container"},children:["©2016 VnDocs.com"]}]}]});a.exports=s},{"../core/_data.msx":11,"../core/_fn.msx":12}],6:[function(t,a,e){var s=t("../core/_data.msx"),r=t("../core/_fn.msx"),n=function(t){return[{tag:"div",attrs:{className:"container"},children:[{tag:"span",attrs:{className:"menu-icon",onclick:function(t){var a=document.querySelectorAll(".menu")[0],e=document.querySelectorAll(".content")[0];r.toggleClass(a,"menu-active"),r.toggleClass(e,"menu-active"),r.toggleClass(t.target,"menu-active")}}},{tag:"a",attrs:{href:s.baseUrl+"/",config:m.route},children:[{tag:"img",attrs:{className:"logo",src:s.logo,alt:"logo Vndocs.com"}}]},{tag:"span",attrs:{className:"slogan orange",config:function(t,a,e){a||setInterval((function(){r.toggleClass(t,"orange")}),300)}},children:["Nơi chia sẻ tài liệu hoàn toàn miễn phí !"]},{tag:"div",attrs:{className:"free-logoWr"},children:[{tag:"img",attrs:{className:"free-logo",src:"/assets/images/100_free.png",alt:""}},{tag:"img",attrs:{className:"lookingfor",src:"/assets/images/lookingfor.png",alt:""}}]},{tag:"div",attrs:{className:"shareWr"},children:[{tag:"img",attrs:{className:"share",src:"/assets/images/sharing-is-caring.png",alt:""}}]}]}]};a.exports=n},{"../core/_data.msx":11,"../core/_fn.msx":12}],7:[function(t,a,e){var s=t("../core/_data.msx"),r=function(t){return[{tag:"div",attrs:{className:"login-popup",onclick:function(){0==$(".wrapper-content:hover").length&&(s.showSignin=!1,s.showSignup=!1)},style:s.showSignin?"":"display: none"},children:[{tag:"div",attrs:{className:"wrapper"},children:[{tag:"div",attrs:{className:"wrapper-content"},children:[{tag:"h3",attrs:{},children:["Đăng nhập"]},{tag:"form",attrs:{action:"/signIn",method:"POST"},children:[{tag:"div",attrs:{},children:[{tag:"div",attrs:{className:"label"},children:[{tag:"label",attrs:{htmlFor:"email"},children:["Email : "]}]},{tag:"input",attrs:{type:"email",className:"user-email",id:"email",name:"email"}}]},{tag:"div",attrs:{},children:[{tag:"div",attrs:{className:"label"},children:[{tag:"label",attrs:{htmlFor:"password"},children:["Password : "]}]},{tag:"input",attrs:{type:"password",className:"user-password",id:"password",name:"password"}}]},{tag:"div",attrs:{},children:[{tag:"div",attrs:{className:"label"},children:[{tag:"label",attrs:{htmlFor:"rememberMe"},children:["Remember me"]}]},{tag:"input",attrs:{type:"checkbox",id:"rememberMe",name:"rememberMe",value:"true",checked:"true"}}]},{tag:"input",attrs:{type:"hidden",name:"csrfToken",value:s.token}},{tag:"div",attrs:{className:"logout"},children:[{tag:"div",attrs:{className:"label"}},{tag:"input",attrs:{type:"submit",value:"Đăng nhập"}},{tag:"div",attrs:{style:"width: 40px; float: right; margin: 3px 10px 0 0;"},children:[{tag:"a",attrs:{href:s.baseUrl+"/authenticate/google?forward="+m.route(),className:"social-button",id:"google-connect"},children:[" "]}]},{tag:"div",attrs:{style:"width: 40px; float: right; margin: 3px 10px 0 0;"},children:[{tag:"a",attrs:{href:s.baseUrl+"/authenticate/facebook?forward="+m.route(),className:"social-button",id:"facebook-connect"},children:[" "]}]}]}]},{tag:"div",attrs:{className:"label"}},{tag:"span",attrs:{className:"other"},children:[{tag:"a",attrs:{href:"#",className:"forgot-pass",onclick:function(){s.showSignin=!1,s.showSignup=!0}},children:["Đăng ký"]},{tag:"a",attrs:{href:"#",className:"forgot-pass"},children:["Quên mật khẩu?"]}]}]}]}]},{tag:"div",attrs:{className:"login-popup",onclick:function(){0==$(".wrapper-content:hover").length&&(s.showSignin=!1,s.showSignup=!1)},style:s.showSignup?"":"display: none"},children:[{tag:"div",attrs:{className:"wrapper"},children:[{tag:"div",attrs:{className:"wrapper-content"},children:[{tag:"h3",attrs:{},children:["Đăng ký"]},{tag:"form",attrs:{action:"/signUp",method:"POST"},children:[{tag:"input",attrs:{type:"hidden",name:"csrfToken",value:s.token}},{tag:"div",attrs:{className:"form-group  ",id:"firstName_field"},children:[{tag:"div",attrs:{className:"label"},children:[{tag:"label",attrs:{htmlFor:"firstName"},children:["Họ : "]}]},{tag:"input",attrs:{type:"text",id:"firstName",name:"firstName",required:"true",className:"form-control form-control input-lg",placeholder:"First name"}}]},{tag:"div",attrs:{className:"form-group  ",id:"lastName_field"},children:[{tag:"div",attrs:{className:"label"},children:[{tag:"label",attrs:{htmlFor:"lastName"},children:["Tên : "]}]},{tag:"input",attrs:{type:"text",id:"lastName",name:"lastName",required:"true",className:"form-control form-control input-lg",placeholder:"Last name"}}]},{tag:"div",attrs:{className:"form-group  ",id:"email_field"},children:[{tag:"div",attrs:{className:"label"},children:[{tag:"label",attrs:{htmlFor:"email"},children:["Email : "]}]},{tag:"input",attrs:{type:"text",id:"email",name:"email",className:"form-control form-control input-lg",placeholder:"Email"}}]},{tag:"section",attrs:{},children:[{tag:"div",attrs:{className:"form-group  ",id:"password_field"},children:[{tag:"div",attrs:{className:"label"},children:[{tag:"label",attrs:{htmlFor:"password"},children:["Mật khẩu : "]}]},{tag:"input",attrs:{type:"password",id:"password",name:"password",required:"true",className:"form-control form-control input-lg",placeholder:"Password"}}]}]},{tag:"div",attrs:{className:"form-group"},children:[{tag:"div",attrs:{},children:[{tag:"div",attrs:{className:"label"}},{tag:"button",attrs:{id:"submit",type:"submit",className:"btn btn-lg btn-primary btn-block"},children:["Đăng ký"]},{tag:"div",attrs:{style:"width: 40px; float: right; margin: 3px 10px 0 0;"},children:[{tag:"a",attrs:{href:s.baseUrl+"/authenticate/google?forward="+m.route(),className:"social-button",id:"google-connect"},children:[" "]}]},{tag:"div",attrs:{style:"width: 40px; float: right; margin: 3px 10px 0 0;"},children:[{tag:"a",attrs:{href:s.baseUrl+"/authenticate/facebook?forward="+m.route(),className:"social-button",id:"facebook-connect"},children:[" "]}]}]}]}]},{tag:"div",attrs:{className:"label"}},{tag:"span",attrs:{className:"other"},children:[{tag:"span",attrs:{},children:["Đã có tài khoản? "]},{tag:"a",attrs:{href:"#",className:"forgot-pass",onclick:function(){s.showSignin=!0,s.showSignup=!1}},children:["Đăng nhập"]}]}]}]}]}]};a.exports=r},{"../core/_data.msx":11}],8:[function(t,a,e){var s=t("../core/_fn.msx"),r=t("../core/_data.msx"),n=function(t){return[{tag:"div",attrs:{className:"menu"},children:[{tag:"div",attrs:{className:"menubar"},children:["Tài khoản"]},{tag:"div",attrs:{className:"login"},children:[void 0!==r.user?{tag:"div",attrs:{className:"userInfo"},children:[{tag:"div",attrs:{className:"top"},children:[{tag:"div",attrs:{className:"left"},children:[{tag:"img",attrs:{src:r.user.avatarURL.length>0?r.user.avatarURL:"/assets/images/silhouette.png",width:"50",height:"50",alt:"avatar"}}]},{tag:"div",attrs:{className:"right"},children:[{tag:"div",attrs:{},children:["Xin chào"]},{tag:"span",attrs:{},children:[r.user.fullName]}]}]},{tag:"div",attrs:{className:"bot"},children:[{tag:"a",attrs:{href:r.baseUrl+"/signOut?forward="+m.route()},children:["Đăng xuất"]}]}]}:{tag:"div",attrs:{class:"login-box"},children:[{tag:"div",attrs:{},children:[{tag:"a",attrs:{href:"#",onclick:function(){r.showSignin=!0,r.showSignup=!1}},children:[{tag:"span",attrs:{},children:["Đăng nhập"]}]}," /",{tag:"a",attrs:{href:"#",onclick:function(){r.showSignin=!1,r.showSignup=!0}},children:[{tag:"span",attrs:{},children:[" Đăng ký"]}]}]},{tag:"span",attrs:{style:"width: 20px;"}},{tag:"a",attrs:{href:r.baseUrl+"/authenticate/facebook?forward="+m.route(),class:"social-button",id:"facebook-connect"},children:[" ",{tag:"span",attrs:{},children:[" Facebook"]}]},{tag:"a",attrs:{href:r.baseUrl+"/authenticate/google?forward="+m.route(),class:"social-button",id:"google-connect"},children:[" ",{tag:"span",attrs:{},children:[" Google"]}]}]}]},{tag:"hr",attrs:{className:"style1"}},{tag:"div",attrs:{className:"menubar"},children:["Menu"]},{tag:"div",attrs:{className:"list-menu"},children:[s.runCreateMenu(Window.menu,1)]}]}]};a.exports=n},{"../core/_data.msx":11,"../core/_fn.msx":12}],9:[function(t,a,e){var s=t("../core/_fn.msx"),r=t("../core/_data.msx"),n=t("./_comment.msx"),o=function(t){return{tag:"div",attrs:{className:"main mh800"},children:[t.request.ready()?[{tag:"div",attrs:{},children:[{tag:"span",attrs:{className:"breadcrumb"},children:[s.buildBreadcrumb(Window.urls,Window.categories,t.post().post.categories[0],[]),t.post().post.title]},{tag:"br",attrs:{}},{tag:"hr",attrs:{className:"style3"}},{tag:"div",attrs:{className:"postWr"},children:[{tag:"div",attrs:{className:"postTitle"},children:[{tag:"h1",attrs:{},children:[t.post().post.title]}]},{tag:"hr",attrs:{className:"style3"}},{tag:"div",attrs:{className:"postInfo cf"},children:[{tag:"div",attrs:{className:"meta-data"},children:[{tag:"span",attrs:{className:"upload"},children:[t.post().post.upload]},{tag:"span",attrs:{className:"category"},children:[t.post().post.categories.map((function(t){var a=s.getItemByParam(Window.categories,"slug",t);return{tag:"a",attrs:{href:r.baseUrl+"/category/"+t,config:m.route},children:[{tag:"span",attrs:{},children:[void 0==a?"":a.name]}]}}))]},{tag:"span",attrs:{className:"time"},children:[moment(t.post().post.time).format("L")]}]},{tag:"div",attrs:{className:"t-left"},children:[{tag:"a",attrs:{href:"#"},children:[{tag:"img",attrs:{src:r.baseUrl+"/cover/get/"+t.post().post.cover.id,alt:t.post().post.cover.alt}}]}]},{tag:"div",attrs:{className:"t-right"},children:[{tag:"div",attrs:{className:"rate-nav"},children:["RATING"]},{tag:"div",attrs:{className:"rate-num"},children:[t.post().post.nLike]},{tag:"button",attrs:{className:"rate-button",onclick:function(a){void 0==Window.user?r.showSignin=!0:t.voted||($.ajax({type:"POST",url:"/post/vote",data:JSON.stringify({id:t.postID}),contentType:"application/json",dataType:"text",success:function(a){t.post().post.nLike+=1,m.redraw()}}),t.voted=!0)}},children:["+1"]}]},{tag:"div",attrs:{className:"t-mid"},children:[{tag:"div",attrs:{className:"go-download"},children:[{tag:"a",attrs:{href:"#download"},children:[{tag:"span",attrs:{},children:["Tải ngay"]}]}]}]}]},{tag:"hr",attrs:{className:"style3"}},{tag:"div",attrs:{className:"postContent"},children:[m.trust(marked(t.post().post.content)),{tag:"div",attrs:{id:"download",className:"down-box "},children:[{tag:"h4",attrs:{style:"color: red; font-style: italic; margin-bottom: 5px;"},children:["Chọn link phía dưới để tải về!"]},{tag:"div",attrs:{className:"inside"},children:[t.post().post.link.map((function(t){return{tag:"span",attrs:{},children:[{tag:"a",attrs:{href:r.baseUrl+"/download/"+t.url,target:"_blank"},children:["Download ",t.filename]}]}}))]}]}]}]}]},{tag:"hr",attrs:{className:"style3"}},n(t,t.post(),t.postID,"post")]:[{tag:"div",attrs:{className:"loading"},children:[{tag:"div",attrs:{class:"loader"},children:[{tag:"div",attrs:{class:"inner one"}},{tag:"div",attrs:{class:"inner two"}},{tag:"div",attrs:{class:"inner three"}}]}]}]]}};a.exports=o},{"../core/_data.msx":11,"../core/_fn.msx":12,"./_comment.msx":3}],10:[function(t,a,e){var s=t("../core/_data.msx"),r=function(t){return[{tag:"div",attrs:{className:"side mh1000"},children:[{tag:"div",attrs:{className:"menubar"},children:["Tìm kiếm"]},{tag:"div",attrs:{className:"search cf"},children:[{tag:"form",attrs:{class:"search-form"},children:[{tag:"div",attrs:{class:"search-field-container"},children:[{tag:"input",attrs:{type:"text",class:"search-field",placeholder:"Tìm kiếm..."}}]}]}]},{tag:"hr",attrs:{className:"style1"}},{tag:"div",attrs:{className:"menubar"},children:["Fanpage website"]},{tag:"div",attrs:{style:"height: 135px; margin-top: 10px;"},children:[{tag:"iframe",attrs:{src:"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fvndocs&tabs&width=190&height=136&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=695740397243976",width:"190",height:"136",style:"border:none;overflow:hidden",scrolling:"no",frameborder:"0",allowTransparency:"true"}}]},{tag:"hr",attrs:{className:"style1"}},{tag:"div",attrs:{className:"menubar"},children:["Hướng dẫn/Chia sẻ"]},{tag:"ul",attrs:{className:"side-article"},children:[Window.articles.map((function(t){return{tag:"li",attrs:{},children:[{tag:"span",attrs:{},children:[{tag:"a",attrs:{href:s.baseUrl+"/blog/"+t._id,config:m.route},children:[t.title]}]}]}}))]}]}]};a.exports=r},{"../core/_data.msx":11}],11:[function(t,a,e){var s={};s.logo="/assets/images/logo"+Math.floor(5*Math.random()+1)+".png",s.showSignin=!1,s.showSignup=!1,s.sessionstorage=mx.storage("sessionsstorage",mx.SESSION_STORAGE),s.baseUrl="http://vndocs.com",void 0!==Window.user&&(s.user=Window.user),a.exports=s},{}],12:[function(t,a,e){function s(t){var a=document.getElementById(t);window.scrollTo(a.offsetLeft,a.offsetTop)}var r={};r.cache=void 0,r.url=m.route(),r.checkMenu=function(t){console.log(m.route());var a=m.route().split("/"),e=!0,s=t.replace("https://","").replace("http://","").split("/");if("c"!==s[1]&&"p"!==s[1])return!1;for(var r=2;r<s.length;r++)s[r]!=a[r]&&(e=!1);return e},r.createMenu=function(t,a){return m("ul.level"+a,[t.map((function(t){return m("li",[m("a",{title:t.title,href:t.http,config:m.route},m("span",t.title)),void 0!==t.children?r.createMenu(t.children,a+1):""])}))])},r.runCreateMenu=function(t,a){return void 0!==r.cache?r.cache:void 0!==t?(r.cache=r.createMenu(t,a),r.cache):void 0},r.toggleClass=function(t,a){t.classList?t.classList.contains(a)?t.classList.remove(a):t.classList.add(a):t.className+=" "+a},r.requestWithFeedback=function(t,a,e){var s=m.prop(),r=m.prop(!1),n=function(){r(!0)};return t.background=!0,t.config=function(t){t.timeout=6e3,t.onTimeout=function(){n(),m.redraw(),window.location.reload()}},{request:m.request(t).then((function(t){return r(!0),t}),(function(t){throw window.location.reload(),r(!0),t})).then((function(t){return void 0!==a&&a(t),void 0!==e&&e(),m.redraw(),t})),data:s,ready:r}},r.buildBreadcrumb=function(t,a,e,s){if("NONE"===e)return s.push(" » ",{tag:"a",attrs:{href:"/",config:m.route},children:["Trang chủ"]}),s.reverse();var n=r.getItemByParam(a,"slug",e);return s.push(" » ",{tag:"a",attrs:{href:"/category/"+e,config:m.route},children:[" ",n.name," "]}),r.buildBreadcrumb(t,a,n.sku.slug,s)},r.changePageUrl=function(t,a,e,r){if(m.route().indexOf("?p=")>=0){var n="?p="+a,o="?p="+e,i=m.route().replace(n,o);if("undefined"!=typeof history.pushState){var c={Title:t,Url:i};history.pushState(c,c.Title,c.Url)}else alert("Browser does not support HTML5.")}else if("undefined"!=typeof history.pushState){var c={Title:t,Url:m.route()+"?p="+e};history.pushState(c,c.Title,c.Url)}else alert("Browser does not support HTML5.");void 0!=r&&s(r)},r.getItemByParam=function(t,a,e){for(var s=void 0,r=t.length,n=0;n<r;n++)if(t[n][a]==e){s=t[n];break}return s};var n=["http://ouo.io/s/jkaTd8hX?s=","http://sh.st/st/e789c1b5ebbd52558715462cbeccf4ca/","http://adf.ly/14693643/"];r.getShortUrl=function(){return n[Math.floor(3*Math.random())]},a.exports=r},{}],13:[function(t,a,e){"use strict";window.mobilecheck=function(){var t=!1;return (function(a){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))&&(t=!0)})(navigator.userAgent||navigator.vendor||window.opera),t},window.isMobile=window.mobilecheck(),m.route.mode="pathname",window.Main=t("./_main.msx")},{"./_main.msx":1}],14:[function(t,a,e){var s={},r=t("../component/_menu.msx"),n=t("../core/_fn.msx"),o=t("../core/_data.msx"),i=t("../component/_article.msx"),c=t("../component/_side.msx"),l=t("../component/_login.msx"),d=t("../component/_head.msx"),g=t("../component/_footer.msx");s.controller=function(){void 0==Window.user?o.sessionstorage.set("url",m.route()):o.sessionstorage.set("url","/");var t=this;t.needUser=m.route.param("needUser"),void 0!=t.needUser&&void 0==Window.user&&(o.showSignin=!0),t.setup=function(){document.title="VnDocs | "+t.article().article.title,m.redraw()},t.slug=m.route.param("slug"),t.request={},t.request.ready=m.prop(!1),t.article=m.prop({}),t.comment=m.prop(""),t.voted=!1,void 0===Window.article?(console.log("run request !!!!!!!!!!"),t.request=n.requestWithFeedback({method:"GET",url:"/blog/get/"+t.slug},t.article,t.setup)):(t.article().article=Window.article,t.article().comments=Window.comments,Window.article=void 0,Window.comments=void 0,t.request.ready=m.prop(!0),m.redraw())},s.view=function(t){return[{tag:"div",attrs:{className:"headWr "},children:[d(t)]},{tag:"div",attrs:{className:"container containerBor"},children:[{tag:"div",attrs:{className:"bodyWr"},children:[r(t),{tag:"div",attrs:{className:"content "},children:[i(t),c(t)]}]}]},l(t),g(t)]},a.exports=s},{"../component/_article.msx":2,"../component/_footer.msx":5,"../component/_head.msx":6,"../component/_login.msx":7,"../component/_menu.msx":8,"../component/_side.msx":10,"../core/_data.msx":11,"../core/_fn.msx":12}],15:[function(t,a,e){var s={},r=t("../component/_menu.msx"),n=t("../core/_fn.msx"),o=t("../core/_data.msx"),i=t("../component/_content.msx"),c=t("../component/_side.msx"),l=t("../component/_login.msx"),d=t("../component/_head.msx"),g=t("../component/_footer.msx");s.controller=function(){void 0==Window.user?o.sessionstorage.set("url",m.route()):o.sessionstorage.set("url","/");var t=this;t.needUser=m.route.param("needUser"),void 0!=t.needUser&&void 0==Window.user&&(o.showSignin=!0),t.request={},t.request.ready=m.prop(!1),t.posts=m.prop({}),t.categorySlug=m.route.param("categorySlug"),t.posts().total=1,t.articles=Window.articles,t.page=void 0==m.route.param("p")?1:parseInt(m.route.param("p")),void 0===Window.posts?t.request=n.requestWithFeedback({method:"GET",url:"/category/"+t.categorySlug+"/"+t.page},t.posts,t.setup):(t.request.data=m.prop(Window.posts),t.posts().posts=t.request.data(),t.posts().total=Window.totalPosts,Window.posts=void 0,t.request.ready=m.prop(!0),m.redraw()),t.setup=function(){m.redraw()},t.goToPage=function(a){a>=1&&a<=Math.ceil(t.posts().total/5)&&(t.request2=n.requestWithFeedback({method:"GET",url:"/category/"+t.categorySlug+"/"+a},t.posts,t.setup),n.changePageUrl("Page "+a,t.page,a,"top"),t.page=a)},t.goPrev=function(a){a>1&&(t.request2=n.requestWithFeedback({method:"GET",url:"/category/"+t.categorySlug+"/"+(a-1)},t.posts,t.setup),n.changePageUrl("Page "+(a-1),a,a-1,"top"),t.page=a-1)},t.goNext=function(a){a<Math.ceil(t.posts().total/5)&&(t.request2=n.requestWithFeedback({method:"GET",url:"/category/"+t.categorySlug+"/"+(a+1)},t.posts,t.setup),n.changePageUrl("Page "+(a+1),a,a+1,"top"),t.page=a+1)}},s.view=function(t){return[{tag:"div",attrs:{className:"headWr "},children:[d(t)]},{tag:"div",attrs:{className:"container containerBor"},children:[{tag:"div",attrs:{className:"bodyWr"},children:[r(t),{tag:"div",attrs:{className:"content "},children:[i(t),c(t)]}]}]},l(t),g(t)]},a.exports=s},{"../component/_content.msx":4,"../component/_footer.msx":5,"../component/_head.msx":6,"../component/_login.msx":7,"../component/_menu.msx":8,"../component/_side.msx":10,"../core/_data.msx":11,"../core/_fn.msx":12}],16:[function(t,a,e){var s={},r=t("../component/_menu.msx"),n=t("../core/_fn.msx"),o=t("../core/_data.msx"),i=t("../component/_content.msx"),c=t("../component/_side.msx"),l=t("../component/_login.msx"),d=t("../component/_head.msx"),g=t("../component/_footer.msx");s.controller=function(){void 0==Window.user?o.sessionstorage.set("url",m.route()):void 0!=o.sessionstorage.get("url")&&"/"!=o.sessionstorage.get("url")&&m.route(o.sessionstorage.get("url"));var t=this;t.needUser=m.route.param("needUser"),void 0!=t.needUser&&void 0==Window.user&&(o.showSignin=!0),t.request={},t.request.ready=m.prop(!1),t.posts=m.prop({}),t.posts().total=1,t.articles=Window.articles,t.page=void 0==m.route.param("p")?1:parseInt(m.route.param("p")),void 0===Window.posts?t.request=n.requestWithFeedback({method:"GET",url:"/posts/"+t.page},t.posts,t.setup):(t.request.data=m.prop(Window.posts),t.posts().posts=t.request.data(),t.posts().total=Window.totalPosts,Window.posts=void 0,t.request.ready=m.prop(!0),m.redraw()),t.setup=function(){m.redraw()},t.goToPage=function(a){a>=1&&a<=Math.ceil(t.posts().total/5)&&(t.request=n.requestWithFeedback({method:"GET",url:"/posts/"+a},t.posts,t.setup),n.changePageUrl("Page "+a,t.page,a,"top"),t.page=a)},t.goPrev=function(a){a>1&&(t.request=n.requestWithFeedback({method:"GET",url:"/posts/"+(a-1)},t.posts,t.setup),n.changePageUrl("Page "+(a-1),a,a-1,"top"),t.page=a-1)},t.goNext=function(a){a<Math.ceil(t.posts().total/5)&&(t.request=n.requestWithFeedback({method:"GET",url:"/posts/"+(a+1)},t.posts,t.setup),n.changePageUrl("Page "+(a+1),a,a+1,"top"),t.page=a+1)}},s.view=function(t){return[{tag:"div",attrs:{className:"headWr "},children:[d(t)]},{tag:"div",attrs:{className:"container containerBor"},children:[{tag:"div",attrs:{className:"bodyWr"},children:[r(t),{tag:"div",attrs:{className:"content "},children:[i(t),c(t)]}]}]},l(t),g(t)]},a.exports=s},{"../component/_content.msx":4,"../component/_footer.msx":5,"../component/_head.msx":6,
"../component/_login.msx":7,"../component/_menu.msx":8,"../component/_side.msx":10,"../core/_data.msx":11,"../core/_fn.msx":12}],17:[function(t,a,e){var s={},r=t("../component/_menu.msx"),n=t("../core/_fn.msx"),o=t("../core/_data.msx"),i=t("../component/_post.msx"),c=t("../component/_side.msx"),l=t("../component/_login.msx"),d=t("../component/_head.msx"),g=t("../component/_footer.msx");s.controller=function(){void 0==Window.user?o.sessionstorage.set("url",m.route()):o.sessionstorage.set("url","/");var t=this;t.needUser=m.route.param("needUser"),void 0!=t.needUser&&void 0==Window.user&&(o.showSignin=!0),t.setup=function(){document.title="VnDocs | "+t.post().post.title,m.redraw()},t.postID=m.route.param("postID"),t.request={},t.request.ready=m.prop(!1),t.post=m.prop({}),t.comment=m.prop(""),t.voted=!1,void 0===Window.post?t.request=n.requestWithFeedback({method:"GET",url:"/post/get/"+t.postID},t.post,t.setup):(t.post().post=Window.post,t.post().comments=Window.comments,Window.post=void 0,Window.comments=void 0,t.request.ready=m.prop(!0),m.redraw())},s.view=function(t){return[{tag:"div",attrs:{className:"headWr "},children:[d(t)]},{tag:"div",attrs:{className:"container containerBor"},children:[{tag:"div",attrs:{className:"bodyWr"},children:[r(t),{tag:"div",attrs:{className:"content "},children:[i(t),c(t)]}]}]},l(t),g(t)]},a.exports=s},{"../component/_footer.msx":5,"../component/_head.msx":6,"../component/_login.msx":7,"../component/_menu.msx":8,"../component/_post.msx":9,"../component/_side.msx":10,"../core/_data.msx":11,"../core/_fn.msx":12}]},{},[13]);
