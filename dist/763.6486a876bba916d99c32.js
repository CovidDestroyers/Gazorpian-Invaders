(self.webpackChunkgazorpian_invaders=self.webpackChunkgazorpian_invaders||[]).push([[763],{eH3R:(r,n,e)=>{"use strict";e.d(n,{jK:()=>u,d9:()=>s,Of:()=>i,Iw:()=>o,tB:()=>a,pK:()=>p,xt:()=>c,Sj:()=>d});var t=e("HaE+"),a=(e("ls82"),function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Something failed. Please retry in a few minutes.";return $("#".concat(r)).append('<div class="alert alert-danger alert-rounded">\n                                  <strong> OH NOOOOO! </strong>  '.concat(n,'\n                                  <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div>'))}),s=function(r){return $("#".concat(r)).val()},o=function(){var r=(0,t.Z)(regeneratorRuntime.mark((function r(n){var e,t,o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=s("new-username"),t=s("signup-password"),o=s("confirm-password"),r.prev=3,r.next=6,axios.post(n,{username:e,password:t,confirmPassword:o});case 6:return c=r.sent,r.abrupt("return",c);case 10:return r.prev=10,r.t0=r.catch(3),a("signupForm"),r.abrupt("return",r.t0);case 14:case"end":return r.stop()}}),r,null,[[3,10]])})));return function(n){return r.apply(this,arguments)}}(),c=function(){var r=(0,t.Z)(regeneratorRuntime.mark((function r(n){var e,t,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=s("username"),t=s("password"),r.prev=2,r.next=5,axios.post(n,{username:e,password:t});case 5:return o=r.sent,r.abrupt("return",o);case 9:return r.prev=9,r.t0=r.catch(2),a("loginForm"),r.abrupt("return",r.t0);case 13:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(n){return r.apply(this,arguments)}}(),u=function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Warning!";return $("#".concat(r)).append('<div class="alert alert-warning alert-rounded">\n                                  '.concat(n,'\n                                  <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div>'))},i=function(r,n){return $("#".concat(r)).html("".concat(n))},p=function(r){return $("#".concat(r)).html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Working...')},d=function(r,n,e){return $("#".concat(r)).html('<div id="user-card-body" class="card-body">\n                    <h5 class="card-title">Welcome '.concat(n,'!</h5>\n                    <p class="card-text"> Your most recent score is: <span style="color: darkorange"> ').concat(e," </span> </p>\n                </div>"))}}}]);
//# sourceMappingURL=763.6486a876bba916d99c32.js.map