(this["webpackJsonphappy-birthday"]=this["webpackJsonphappy-birthday"]||[]).push([[0],{12:function(e,t,n){e.exports=n.p+"static/media/AvenirNextLTPro-Demi.de28f71e.otf"},15:function(e,t,n){e.exports=n(26)},20:function(e,t,n){},21:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(4),r=n.n(o),s=(n(20),n(21),n(6)),c=n(10),h=n(11),l=n(5),u=n.n(l),p=function(){function e(t,n,i){Object(c.a)(this,e),this.sketch=i,this.position=this.sketch.createVector(this.sketch.random(this.sketch.width),this.sketch.random(this.sketch.height)),this.target=this.sketch.createVector(t,n),this.velocity=u.a.Vector.random2D(),this.acceleration=u.a.Vector.random2D(),this.zeroVector=this.sketch.createVector(0,0),this.radius=8,this.maxSpeed=12,this.maxForce=4,this.maxMagnitude=50}return Object(h.a)(e,[{key:"update",value:function(){this.position.add(this.velocity),this.velocity.add(this.acceleration),this.acceleration.mult(0)}},{key:"show",value:function(){this.sketch.stroke(255),this.sketch.fill(0),this.sketch.ellipse(this.position.x,this.position.y,this.radius,this.radius)}},{key:"applyAllForces",value:function(){this.applyMouseFleeForce(),this.applyArriveForce()}},{key:"applyMouseFleeForce",value:function(){var e=this.sketch.pmouseX,t=this.sketch.pmouseY,n=this.sketch.mouseX,i=this.sketch.mouseY;if(e!==n||t!==i){var a=this.sketch.createVector(n,i),o=this.flee(a);this.applyForce(o)}}},{key:"applyArriveForce",value:function(){var e=this.arrive(this.target);this.applyForce(e)}},{key:"applyForce",value:function(e){this.acceleration.add(e)}},{key:"flee",value:function(e){var t=u.a.Vector.sub(e,this.position);if(t.mag()<this.maxMagnitude){t.setMag(this.maxSpeed),t.mult(-1);var n=u.a.Vector.sub(t,this.velocity);return n.limit(this.maxForce),n.mult(7)}return this.zeroVector}},{key:"arrive",value:function(e){var t=u.a.Vector.sub(e,this.position),n=t.mag(),i=this.maxSpeed;n<this.maxMagnitude&&(i=this.sketch.map(n,0,100,0,this.maxSpeed)),t.setMag(i);var a=u.a.Vector.sub(t,this.velocity);return a.limit(this.maxForce),a}}]),e}(),d=n(12),f=n.n(d),m=function(e,t){return function(n){var i,a,o,r,c=[];n.preload=function(){i=n.loadFont(f.a)};n.setup=function(){var h=e.offsetWidth,l=e.offsetHeight;n.createCanvas(h,l),function(e,h){a=[];var l=t.split(" "),u=Object(s.a)(l,3),d=u[0],f=u[1],m=u[2];e>h?(o=i.textToPoints("".concat(d," ").concat(f),.04*e,.33*h,.12*e),r=i.textToPoints(m,.05*e,.83*h,.3*e)):(o=i.textToPoints(d,.01*e,.3*h,.3*e),r=i.textToPoints(f,.01*e,.5*h,.25*e),c=i.textToPoints(m,.01*e,.7*h,.32*e)),o.forEach((function(e){a.push(new p(e.x,e.y,n))})),r.forEach((function(e){a.push(new p(e.x,e.y,n))})),c.forEach((function(e){a.push(new p(e.x,e.y,n))}))}(h,l),n.frameRate(30)},n.draw=function(){n.clear(),a.forEach((function(e){e.update(),e.applyAllForces(),e.show()}))}}},v=n(14),g=(n(27),function(){var e=a.a.useRef(null);return a.a.useEffect((function(){var t=e.current;new u.a(m(t,"Happy Birthday 9.11"),t)})),a.a.createElement("div",null,a.a.createElement("div",{className:"main"},a.a.createElement("div",{ref:e})),a.a.createElement("div",null,a.a.createElement("h1",null,a.a.createElement(v.a,{key:"secondary",variant:"secondary"},"Nguy\u1ec5n Th\u1ecb Ph\u01b0\u01a1ng Anh")),a.a.createElement("div",{className:"img1"},a.a.createElement("img",{src:"phuong-anhn.jpg",alt:"Phuong-Anh"})),a.a.createElement("div",{className:"img3"},a.a.createElement("img",{className:"img3",src:"phuonganh-3.jpg",alt:"Phuong-Anh"})),a.a.createElement("div",{className:"img2"},a.a.createElement("img",{className:"img2",src:"phuonganh-2.jpg",alt:"Phuong-Anh"}))))}),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(25);r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/happy-birday-my-sister",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/happy-birday-my-sister","/service-worker.js");y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(t,e)}))}}()}},[[15,1,2]]]);
//# sourceMappingURL=main.2f90ea86.chunk.js.map