(self.webpackChunkgazorpian_invaders=self.webpackChunkgazorpian_invaders||[]).push([[830],{"1bQ8":(e,n,r)=>{"use strict";var t=r("HaE+"),s=(r("ls82"),r("eH3R"));$((function(){var e=(0,s.d9)("new-username"),n=(0,s.d9)("signup-password"),r=(0,s.d9)("confirm-password");(0,t.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==e&&""!==n&&""!==r){t.next=8;break}return e=(0,s.d9)("new-username"),n=(0,s.d9)("signup-password"),r=(0,s.d9)("confirm-password"),t.next=6,new Promise((function(e){setTimeout(e,1e3)}));case 6:t.next=0;break;case 8:return t.abrupt("return",$("#signupBtn").removeAttr("disabled"));case 9:case"end":return t.stop()}}),t)})))(),$("#signupBtn").click(function(){var e=(0,t.Z)(regeneratorRuntime.mark((function e(n){var r,t,a,u,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,(0,s.pK)("signupBtn"),e.next=5,(0,s.Iw)("/auth/signup");case 5:r=e.sent,"success"!==(t=r.data.status)?(0,s.jK)("signupForm",t):(a=r.data,u=a.username,i=a.highScore,(0,s.Sj)("username-card",u,i),$("#signup").prop("hidden",!0),$("#login").prop("hidden",!0),$("#logout").removeAttr("hidden"),$("#closeSignup").click()),(0,s.Of)("signupBtn","Sign Up"),$("#new-username").val(""),$("#signup-password").val(""),$("#confirm-password").val(""),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),(0,s.Of)("signupBtn","Sign Up"),(0,s.tB)("signupForm");case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(n){return e.apply(this,arguments)}}())}))}},e=>{"use strict";e.O(0,[70,612,763],(()=>{return n="1bQ8",e(e.s=n);var n}));e.O()}]);
//# sourceMappingURL=signup.25e89e8627b4697597be.js.map