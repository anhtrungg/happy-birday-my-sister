(this["webpackJsonphappy-birthday"]=this["webpackJsonphappy-birthday"]||[]).push([[0],{10:function(e,t,i){e.exports=i(17)},17:function(e,t,i){"use strict";i.r(t);var n=i(0),o=i.n(n),a=i(5),r=i.n(a),s=(i(3),i(4),i(9)),c=i(6),h=i(7),l=i(1),u=i.n(l),f=function(){function e(t,i,n){Object(c.a)(this,e),this.sketch=n,this.position=this.sketch.createVector(this.sketch.random(this.sketch.width),this.sketch.random(this.sketch.height)),this.target=this.sketch.createVector(t,i),this.velocity=u.a.Vector.random2D(),this.acceleration=u.a.Vector.random2D(),this.zeroVector=this.sketch.createVector(0,0),this.radius=8,this.maxSpeed=12,this.maxForce=4,this.maxMagnitude=50}return Object(h.a)(e,[{key:"update",value:function(){this.position.add(this.velocity),this.velocity.add(this.acceleration),this.acceleration.mult(0)}},{key:"show",value:function(){this.sketch.stroke(255),this.sketch.fill(0),this.sketch.ellipse(this.position.x,this.position.y,this.radius,this.radius)}},{key:"applyAllForces",value:function(){this.applyMouseFleeForce(),this.applyArriveForce()}},{key:"applyMouseFleeForce",value:function(){var e=this.sketch.pmouseX,t=this.sketch.pmouseY,i=this.sketch.mouseX,n=this.sketch.mouseY;if(e!==i||t!==n){var o=this.sketch.createVector(i,n),a=this.flee(o);this.applyForce(a)}}},{key:"applyArriveForce",value:function(){var e=this.arrive(this.target);this.applyForce(e)}},{key:"applyForce",value:function(e){this.acceleration.add(e)}},{key:"flee",value:function(e){var t=u.a.Vector.sub(e,this.position);if(t.mag()<this.maxMagnitude){t.setMag(this.maxSpeed),t.mult(-1);var i=u.a.Vector.sub(t,this.velocity);return i.limit(this.maxForce),i.mult(7)}return this.zeroVector}},{key:"arrive",value:function(e){var t=u.a.Vector.sub(e,this.position),i=t.mag(),n=this.maxSpeed;i<this.maxMagnitude&&(n=this.sketch.map(i,0,100,0,this.maxSpeed)),t.setMag(n);var o=u.a.Vector.sub(t,this.velocity);return o.limit(this.maxForce),o}}]),e}(),d=i(8),p=i.n(d),v=function(e,t){return function(i){var n,o,a,r,c=[];i.preload=function(){n=i.loadFont(p.a)};i.setup=function(){var h=e.offsetWidth,l=e.offsetHeight;i.createCanvas(h,l),function(e,h){o=[];var l=t.split(" "),u=Object(s.a)(l,3),d=u[0],p=u[1],v=u[2];e>h?(a=n.textToPoints("".concat(d," ").concat(p),.04*e,.33*h,.12*e),r=n.textToPoints(v,.05*e,.83*h,.3*e)):(a=n.textToPoints(d,.01*e,.3*h,.3*e),r=n.textToPoints(p,.01*e,.5*h,.25*e),c=n.textToPoints(v,.01*e,.7*h,.32*e)),a.forEach((function(e){o.push(new f(e.x,e.y,i))})),r.forEach((function(e){o.push(new f(e.x,e.y,i))})),c.forEach((function(e){o.push(new f(e.x,e.y,i))}))}(h,l),i.frameRate(30)},i.draw=function(){i.clear(),o.forEach((function(e){e.update(),e.applyAllForces(),e.show()}))}}},m=function(){var e=o.a.useRef(null);return o.a.useEffect((function(){var t=e.current;new u.a(v(t,"Happy Birthday 9.11"),t)})),o.a.createElement("div",null,o.a.createElement("div",{className:"main"},o.a.createElement("div",{ref:e})),o.a.createElement("div",null,o.a.createElement("h1",null,"Ph\u01b0\u01a1ng Anh")))},y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var i=e.installing;null!=i&&(i.onstatechange=function(){"installed"===i.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i(16);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/happy-birday-my-sister",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/happy-birday-my-sister","/service-worker.js");y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(i){var n=i.headers.get("content-type");404===i.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(t,e)}))}}()},3:function(e,t,i){},4:function(e,t,i){},8:function(e,t,i){e.exports=i.p+"static/media/AvenirNextLTPro-Demi.de28f71e.otf"}},[[10,1,2]]]);
//# sourceMappingURL=main.d20c625b.chunk.js.map