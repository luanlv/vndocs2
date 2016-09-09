var wsCtrl = {***REMOVED***
wsCtrl.userId = document.body.getAttribute("id");
var userId = wsCtrl.userId;
wsCtrl.userName = document.body.getAttribute("name");
var userName = wsCtrl.userName
wsCtrl.mVersion = parseInt(document.body.getAttribute("mv"));
var mVersion = wsCtrl.mVersion
wsCtrl.mRVersion = parseInt(document.body.getAttribute("mv"));
var mRVersion = wsCtrl.mRVersion

var prevTime;



wsCtrl.ping = 0;
wsCtrl.total = 0;

window.redraw = {
  nav: 0,
  home: 0,
  dashboard: 0,
  right: 0,
  app: 0
***REMOVED***;

wsCtrl.storage = {
  chat: $.localStorage.get('chat:' + wsCtrl.userId) || []
***REMOVED***;



wsCtrl.data = {
  chatrooms: {***REMOVED***,
  chatroom: {***REMOVED***,
  userOnline: [],
  user: {***REMOVED***,
  chat: [],
  notify: {
    n: 0,
    notifyMessage: [],
    init: false,
    display: false
***REMOVED***
***REMOVED***;
var data = wsCtrl.data;

function initChat(){
  wsCtrl.storage.chat.map(function(user){
    data.chat.push({user: user.user, display: true, input: m.prop(''), init: false, hide: user.hide, read: true, chat: []***REMOVED***);
    send(sendData("init_chat", {w: user.user.id, cv: 0***REMOVED***));
***REMOVED***);
***REMOVED***

//var ws = new WebSocket("ws://188.166.254.203:9000/socket?sri=" + sri);
var reconnect;
var delayInitWs;

function initReconnect(setTime){
  var delayReconnect;
  var delayInit;
  if(setTime === undefined) {
    delayReconnect = 8000;
    delayInit = 2000;
***REMOVED*** else {
    delayReconnect = setTime;
    delayInit = 0;
***REMOVED***
  clearTimeout(reconnect);
  reconnect = setTimeout(function(){
    console.log("run reconnect !!")
    clearTimeout(pingSchedule);
    if(ws){
      ws.onerror = $.noop;
      ws.onclose = $.noop;
      ws.onopen = $.noop;
      ws.onmessage = $.noop;
      ws.close();
  ***REMOVED***
    console.log("websocket will reconnect in " + delayInit +" ms !!")
    if(delayInitWs) clearTimeout(delayInitWs);
    delayInitWs = setTimeout(initWs, delayInit);
***REMOVED***, delayReconnect);
***REMOVED***;

var ws;
function initWs(){
  var sri = Math.random().toString(36).substring(2);
  //ws = new WebSocket("ws://" + document.domain + ":9000/socket?sri=" + sri);
  ws = new WebSocket("ws://" + "socket." + document.domain + ":9000/socket?sri=" + sri);
  ws.onopen = function(){
    console.log('WebSocket ok');
    initReconnect();
    //console.log("prev Ping:" + wsCtrl.ping)
    wsCtrl.ping = 0;
    send(pingData());
    prevTime = Date.now();
    wsCtrl.data.userOnline = [];
    send(sendData("get_onlines", ""));
    wsCtrl.ping = 1;

    initChat();

***REMOVED***;

  ws.onmessage = function (e) {
    var m = JSON.parse(e.data);
    ctrl.listen(m)
***REMOVED***;

  ws.onclose = function(){
    console.log("socket closed")
***REMOVED***;
  ws.onerror = function(){
    console.log("socket error")
***REMOVED***;
  initReconnect(4000);
***REMOVED***;
initWs();

//var ws = new WebSocket("ws://localhost:9000/socket?sri=" + sri);
//var ws = new WebSocket("ws://192.168.1.25:9000/socket?sri=" + sri);

var pingData = function() {
  return JSON.stringify({
    t: "p",
    v: mVersion
***REMOVED***);
***REMOVED***;

wsCtrl.arrayObjectIndexOf = function(myArray, searchTerm, property) {
  for(var i = 0, len = myArray.length; i < len; i++) {
    if (myArray[i][property] === searchTerm) return i;
***REMOVED***
  return -1;
***REMOVED***;
var arrayObjectIndexOf = wsCtrl.arrayObjectIndexOf;

wsCtrl.arrayObjectIndexOf2 = function(myArray, searchTerm, property) {
  for(var i = 0, len = myArray.length; i < len; i++) {
    if (myArray[i]['user'][property] === searchTerm) return i;
***REMOVED***
  return -1;
***REMOVED***;
var arrayObjectIndexOf2 = wsCtrl.arrayObjectIndexOf2;

wsCtrl.sendData = function(t, d){
  return JSON.stringify({
    t: t,
    d: d
***REMOVED***)
***REMOVED***;
var sendData = wsCtrl.sendData;

wsCtrl.send = function (message, callback) {
  waitForConnection(function () {
    ws.send(message);
    if (typeof callback !== 'undefined') {
      callback();
  ***REMOVED***
***REMOVED***, 1000);
***REMOVED***;
var send = wsCtrl.send;

var waitForConnection = function (callback, interval) {
  if (ws.readyState === 1) {
    callback();
***REMOVED*** else {
    setTimeout(function () {
      waitForConnection(callback, interval);
  ***REMOVED***, interval);
***REMOVED***
***REMOVED***;

//setInterval(function(){
//  send(pingData());
//***REMOVED***, 1000);





wsCtrl.getPosChat = function(user, mv){
  var cv = (mv == undefined)?0:mv;
  var read = (mv == undefined);
  pos = -1;
  for(var len = 0; len < data.chat.length; len++){
    if(data.chat[len].user.id == user.id) {
      pos = len;
      return pos
  ***REMOVED***
***REMOVED***
  if(pos = -1){
    data.chat.push({user: user, display: true, input: m.prop(''), init: false, hide: false, read: true, chat: []***REMOVED***);
    send(sendData("init_chat", {w: user.id, cv: cv***REMOVED***));
    wsCtrl.storage.chat.push({user: user, hide: false***REMOVED***);
    $.localStorage.set('chat:' + wsCtrl.userId, wsCtrl.storage.chat);
    return (data.chat.length - 1)
***REMOVED***
***REMOVED***;
var getPosChat = wsCtrl.getPosChat;

function calcPing(){
  var now = Date.now();
  wsCtrl.ping = Math.ceil(now - prevTime);
  console.log("run calc: " + wsCtrl.ping);
***REMOVED***

var calcTimeOut;
var pingSchedule;
var inPingSchedule;
function initPingSchedule() {
  pingSchedule = setTimeout(function pingScheduleFn() {
    if (wsCtrl.ping <= 8000) {
      calcPing();
      inPingSchedule = setTimeout(pingScheduleFn, 100);
  ***REMOVED***
***REMOVED***, 1500);
***REMOVED***

var ctrl = {***REMOVED***;
var testInit = false
var test1;
var test2;
var testDelay = 200;
ctrl.listen = function(d){
  if(d.t === "n"){
  clearTimeout(pingSchedule);
  clearTimeout(inPingSchedule);
  initPingSchedule();
  initReconnect();

    var now = Date.now();

    wsCtrl.ping =  Math.ceil(now - prevTime);

    if(wsCtrl.ping <= 1000){
      setTimeout(function(){
        prevTime = Date.now();
        send(pingData());
    ***REMOVED***, 1000 - (wsCtrl.ping))
  ***REMOVED*** else {
      prevTime = Date.now();
      send(pingData());
  ***REMOVED***

    var preNotify = data.notify.n;
    data.notify.n = d.d.n;
    if (preNotify !== data.notify.n) rd.nav(function(){m.redraw()***REMOVED***)
    wsCtrl.total = d.d.d;

***REMOVED***

  else if(d.t === "mes"){

    if(d.d.m.indexOf("Time:") != -1){
      testDelay = parseInt(d.d.m.substring(5))
  ***REMOVED***

    if(d.d.m === 'startTest' && wsCtrl.userId !== 'luan' && !testInit){
      testInit = true
      if(wsCtrl.userId.length > 0) {
        m.route('/chatroom/123');
        setTimeout(function testServer() {
          if(wsCtrl.getRoom("123").initOk) wsCtrl.send(wsCtrl.sendData("chat", {room: "123", d: Math.random().toString(36)***REMOVED***));
          test1 = setTimeout(testServer, Math.ceil(testDelay + Math.random() * 200))
      ***REMOVED***, 200);

        setTimeout(function testServer2(){
          wsCtrl.send(wsCtrl.sendData("m", {to: "luan2", mes: Math.random().toString(36)***REMOVED***));
          wsCtrl.send(wsCtrl.sendData("m", {to: "luan3", mes: Math.random().toString(36)***REMOVED***));
          wsCtrl.send(wsCtrl.sendData("m", {to: "luan4", mes: Math.random().toString(36)***REMOVED***));
          wsCtrl.send(wsCtrl.sendData("m", {to: "luan5", mes: Math.random().toString(36)***REMOVED***));
          test2 = setTimeout(testServer2, Math.ceil(testDelay + Math.random()*200))
      ***REMOVED***, 1000)
    ***REMOVED***
  ***REMOVED***
    if(d.d.m === 'stopTest' && wsCtrl.userId !== 'luan') {
      clearTimeout(test1);
      clearTimeout(test2)
  ***REMOVED***

    if(mVersion >= (d.d.v-1)){
      doMes(d);
      mVersion++;
      mRVersion ++;
  ***REMOVED*** else {
      var sendMes = { f: (mVersion+1), t: (d.d.v -1) ***REMOVED***;
      mVersion = d.d.v;

      setTimeout(function delayDoMes(){
        console.log("delay domess");
        if(mRVersion >= sendMes.t){
          doMes(d);
          mRVersion++;
      ***REMOVED***else{
          setTimeout(delayDoMes, 200);
      ***REMOVED***
    ***REMOVED***, 1500);

      console.log("SEEND REQUEST GET MISSING MESS: " + sendMes.f + "=>" + sendMes.t);
      send(sendData("gmm", sendMes));
      var gmm = setTimeout(function getMissMes(){
        if(mRVersion >= sendMes.t){
          clearTimeout(gmm)
      ***REMOVED*** else {
          console.log("SEEND REQUEST GET MISSING MESS: " + sendMes.f + "=>" + sendMes.t);
          console.log("current mes need:" + sendMes.t);
          send(sendData("gmm", sendMes));
          setTimeout(getMissMes, 1500)
      ***REMOVED***
    ***REMOVED***, 1500)

  ***REMOVED***
***REMOVED***

  else if(d.t === "ul"){
    d.d.map(function(user){
      if(arrayObjectIndexOf(data.userOnline, user.id, "id") < 0) {
        data.userOnline.push(user);
    ***REMOVED***
  ***REMOVED***);
    rd.right(function(){m.redraw()***REMOVED***)
***REMOVED***

  if(d.t === "following_leaves"){
    data.userOnline.splice(arrayObjectIndexOf(data.userOnline, d.d.in, "id"), 1);
    rd.right(function(){m.redraw()***REMOVED***)
***REMOVED***

  if(d.t === "following_enters"){
    if(arrayObjectIndexOf(data.userOnline, d.d.id, "id") < 0) {
      data.userOnline.push(d.d);
      rd.right(function(){m.redraw()***REMOVED***)
  ***REMOVED***
***REMOVED***



  else if(d.t === "init_chat"){
    var listMes = d.d.reverse();
    if(listMes.length > 0){
      var user = (userId == d.d[0].f.id)?d.d[0].t:d.d[0].f;
      var pos = getPosChat(user);
      //console.log("init posssssssss:" + pos);
      if(data.chat[pos].chat.length <= 1) {
        //d.d.map(function (mes) {
        //  //console.log("init_chat: " + mes.mv);
        //  //console.log("push:" + mes.mes);
        //  data.chat[pos].chat.push(mes)
        //***REMOVED***);
      data.chat[pos].chat = d.d.concat(data.chat[pos].chat)
    ***REMOVED*** else {
        //d.d.map(function(mes){
        //  if(mes.mv < data.chat[pos].chat[0].mv) data.chat[pos].chat.push(mes)
        //***REMOVED***)
        data.chat[pos].chat = d.d
    ***REMOVED***
      //data.chat[pos].chat.sort(sortByVer);
      rd.right(function(){m.redraw()***REMOVED***)
  ***REMOVED***
***REMOVED***

  else if(d.t === "smm"){
      d.d.d.map(function(mes){
      var uid = (userId == mes.f)?mes.t:mes.f;
      var pos = getPosChat(uid);
      if(data.chat[pos].chat.length < 1) {
        d.d.d.map(function (mes) {
          data.chat[pos].chat.push(mes)
      ***REMOVED***);
    ***REMOVED*** else {
        d.d.d.map(function (mes) {
          console.log("smm: " + mes.mv + " --- " + data.chat[pos].chat[data.chat[pos].chat.length - 1].mv);
          if (mes.mv > data.chat[pos].chat[data.chat[pos].chat.length - 1].mv) data.chat[pos].chat.push(mes)
      ***REMOVED***)
    ***REMOVED***
      if(mRVersion == d.d.f -1 ) mRVersion = d.d.t;
   ***REMOVED***);

      rd.right(function(){m.redraw()***REMOVED***)
***REMOVED***

  else if(d.t === "init_notify") {
    data.notify.notifyMessage = d.d;
    data.notify.init = true;
    rd.nav(function(){m.redraw();***REMOVED***);
***REMOVED***


  else if(d.t === "chatNotify") {

        var roomId = d.d.room;

        if(d.d.t === "chat") {
          var mes = d.d.d;
          wsCtrl.commentsInRoom(roomId).push(
              {
                avatar: '/assets/avatar/2.jpg',
                user: mes.user,
                time: Date.now(),
                comment: mes.chat
            ***REMOVED***
          )
          if(wsCtrl.commentsInRoom(roomId).length>100){
            wsCtrl.data.chatroom[roomId].comments = []
        ***REMOVED***
      ***REMOVED*** else if(d.d.t == "userEnter"){

          var user = d.d.u;
          if(arrayObjectIndexOf(wsCtrl.userInRoom(roomId), user.name, "name") < 0){
            wsCtrl.userInRoom(roomId).push(user)
        ***REMOVED***
      ***REMOVED*** else if(d.d.t == "userLeaves"){
          var user = d.d.u;
          console.log(user)
          console.log(arrayObjectIndexOf(wsCtrl.userInRoom(roomId), user, "name"))
          wsCtrl.userInRoom(roomId).splice(arrayObjectIndexOf(wsCtrl.userInRoom(roomId), user, "name"), 1);
      ***REMOVED*** else if(d.d.t === "initChat") {
          var users = d.d.lu;
          var listChats = d.d.lc.reverse();
          users.map(function(user){
            if(arrayObjectIndexOf(wsCtrl.userInRoom(roomId), user, "name") < 0){
              var u = {avatar: "/assets/avatar/1.jpg", name: user, role: "user"***REMOVED***
              wsCtrl.userInRoom(roomId).push(u)
          ***REMOVED***
        ***REMOVED***)

          listChats.map(function(chat){
            wsCtrl.commentsInRoom(roomId).push(
                {
                  avatar: '/assets/avatar/' + Math.ceil(Math.random()*3 + 1) + '.jpg',
                  user: chat.user.name,
                  time: chat.time,
                  comment: chat.chat
              ***REMOVED***
            );
        ***REMOVED***);
          wsCtrl.getRoom(roomId).initOk = true;
      ***REMOVED*** else if(d.d.t === "prevChat") {
          var listChats = d.d.lc.reverse();
          var roomId = d.d.room;
          var listComments = listChats.map(function(chat){
            return {
              avatar: '/assets/avatar/' + Math.ceil(Math.random()*3 + 1) + '.jpg',
              user: chat.user.name,
              time: chat.time,
              comment: chat.chat
          ***REMOVED***
        ***REMOVED***);
          wsCtrl.data.chatroom[roomId].comments = listComments.concat(wsCtrl.data.chatroom[roomId].comments)
          //wsCtrl.data.chatroom[roomId].gettingPrev = false;
      ***REMOVED*** else if(d.d.t === "initChatRooms") {
          var listInfos = d.d.v
          listInfos.map(function(room){
            wsCtrl.getRooms(room.id).c = room.c
            wsCtrl.getRooms(room.id).u = room.u
        ***REMOVED***);
          rd.chatroom(function(){m.redraw()***REMOVED***)
      ***REMOVED*** else if(d.d.t === "io") {
          var value = d.d.v;
          if(value.c != undefined) wsCtrl.getRooms(value.rid).c += parseInt(value.c);
          if(value.u != undefined) wsCtrl.getRooms(value.rid).u += parseInt(value.u);
          rd.chatroom(function(){m.redraw()***REMOVED***);
      ***REMOVED***

        rd.room(function(){m.redraw()***REMOVED***)
    ***REMOVED***


***REMOVED***;

function sortByVer(a,b) {
  //console.log("sorting " + a.mv + b.mv)
  if (a.mv < b.mv)
    return -1;
  if (a.mv > b.mv)
    return 1;
  return 0;
***REMOVED***



var doMes = function(d){
    var user = (userId == d.d.f.id)? d.d.t: d.d.f;
    var pos = getPosChat(user, d.d.mv);
    data.chat[pos].chat.push(
        {f: d.d.f, "mv": d.d.mv, "mes": d.d.m, "time": d.d.time***REMOVED***
    );
    //if(data.chat[pos].display != true){
    //  data.chat[pos].display = true;
    //  data.chat[pos].hide = false;
    //***REMOVED***
    if(userId !== d.d.f.id) {
      data.chat[pos].read = false;
  ***REMOVED*** else data.chat[pos].read = true;
  //server test
    if(data.chat[pos].chat.length > 100){
      data.chat[pos].chat = []
  ***REMOVED***
  //end
    rd.right(function(){m.redraw()***REMOVED***)
***REMOVED***;

wsCtrl.getRoom = function(id){
  if(wsCtrl.data.chatroom[id] == undefined) {
    wsCtrl.data.chatroom[id] = {***REMOVED***;
    wsCtrl.data.chatroom[id].initOk = false;
    wsCtrl.data.chatroom[id].gettingPrev = false;
***REMOVED***
  return wsCtrl.data.chatroom[id]
***REMOVED***;
var getRoom = wsCtrl.getRoom;

wsCtrl.userInRoom = function(id){
  if(wsCtrl.getRoom(id).users == undefined) wsCtrl.getRoom(id).users = [];
  return wsCtrl.getRoom(id).users
***REMOVED***;
var userInRoom = wsCtrl.userInRoom;

wsCtrl.commentsInRoom = function(id){
  if(wsCtrl.getRoom(id).comments == undefined) wsCtrl.getRoom(id).comments = []
  return wsCtrl.getRoom(id).comments
***REMOVED***;
var commentsInRoom = wsCtrl.commentsInRoom;

wsCtrl.inputChat = function(id){
  if(wsCtrl.getRoom(id).input == undefined) wsCtrl.getRoom(id).input = m.prop('');
  return wsCtrl.getRoom(id).input
***REMOVED***;

wsCtrl.clearOldRoom = function(id){
  wsCtrl.data.chatroom[id] = undefined
***REMOVED***;


wsCtrl.getRooms = function(id){
  if(wsCtrl.data.chatrooms[id] == undefined) {
    wsCtrl.data.chatrooms[id] = {***REMOVED***;
    wsCtrl.data.chatrooms[id].c = 0;
    wsCtrl.data.chatrooms[id].u = 0;
***REMOVED***
  return wsCtrl.data.chatrooms[id]
***REMOVED***;

$('body').on('click', '.relation_actions a.relation', function() {
  console.log("relation")
  var $a = $(this).addClass('processing');
  $.ajax({
    url: $a.attr('href'),
    type: 'post',
    success: function(html) {
      $a.parent().html(html);
  ***REMOVED***
***REMOVED***);
  return false;
***REMOVED***);


module.exports = wsCtrl;