(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{WZNX:function(e,r,n){"use strict";n.r(r);var t=n("yXPU"),o=n.n(t);n("ls82");$(function(){var n,t;o()(regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("yes"!==t)return n=$("#user-score").text(),t=$("#game-over").text(),e.next=5,new Promise(function(e){setTimeout(e,1e3)});e.next=7;break;case 5:e.next=0;break;case 7:return e.prev=7,e.next=10,axios.post("/update/score",{userScore:n,gameOver:t});case 10:r=e.sent,console.log(r),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),console.log(e.t0);case 17:case"end":return e.stop()}},e,null,[[7,14]])}))()})}},[["WZNX",0,1,2]]]);