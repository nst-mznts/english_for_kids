(()=>{"use strict";var t={d:(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{OE:()=>U,cs:()=>C,a7:()=>A,Sk:()=>M,tb:()=>R,uP:()=>T});const e=[["Actions (set A)","Actions (set B)","Animals (set A)","Animals (set B)","Clothes","Emotions","Fairytales","Food"],[{word:"cry",translation:"плакать",image:"./src/assets/img/card-imgs/cry.png",audioSrc:"./src/assets/audio/cry.mp3"},{word:"dance",translation:"танцевать",image:"./src/assets/img/card-imgs/dance.png",audioSrc:"./src/assets/audio/dance.mp3"},{word:"dive",translation:"нырять",image:"./src/assets/img/card-imgs/dive.png",audioSrc:"./src/assets/audio/dive.mp3"},{word:"draw",translation:"рисовать",image:"./src/assets/img/card-imgs/draw.png",audioSrc:"./src/assets/audio/draw.mp3"},{word:"fish",translation:"ловить рыбу",image:"./src/assets/img/card-imgs/fish.png",audioSrc:"./src/assets/audio/fish.mp3"},{word:"fly",translation:"летать",image:"./src/assets/img/card-imgs/fly.png",audioSrc:"./src/assets/audio/fly.mp3"},{word:"hug",translation:"обнимать",image:"./src/assets/img/card-imgs/hug.png",audioSrc:"./src/assets/audio/hug.mp3"},{word:"jump",translation:"прыгать",image:"./src/assets/img/card-imgs/jump.png",audioSrc:"./src/assets/audio/jump.mp3"}],[{word:"open",translation:"открывать",image:"./src/assets/img/card-imgs/open.png",audioSrc:"./src/assets/audio/open.mp3"},{word:"play",translation:"играть",image:"./src/assets/img/card-imgs/play.png",audioSrc:"./src/assets/audio/play.mp3"},{word:"point",translation:"указывать",image:"./src/assets/img/card-imgs/point.png",audioSrc:"./src/assets/audio/point.mp3"},{word:"ride",translation:"ездить",image:"./src/assets/img/card-imgs/ride.png",audioSrc:"./src/assets/audio/ride.mp3"},{word:"run",translation:"бегать",image:"./src/assets/img/card-imgs/run.png",audioSrc:"./src/assets/audio/run.mp3"},{word:"sing",translation:"петь",image:"./src/assets/img/card-imgs/sing.png",audioSrc:"./src/assets/audio/sing.mp3"},{word:"skip",translation:"пропускать, прыгать",image:"./src/assets/img/card-imgs/skip.png",audioSrc:"./src/assets/audio/skip.mp3"},{word:"swim",translation:"плавать",image:"./src/assets/img/card-imgs/swim.png",audioSrc:"./src/assets/audio/swim.mp3"}],[{word:"cat",translation:"кот",image:"./src/assets/img/card-imgs/cat.png",audioSrc:"./src/assets/audio/cat.mp3"},{word:"chick",translation:"цыплёнок",image:"./src/assets/img/card-imgs/chick.png",audioSrc:"./src/assets/audio/chick.mp3"},{word:"chicken",translation:"курица",image:"./src/assets/img/card-imgs/chicken.png",audioSrc:"./src/assets/audio/chicken.mp3"},{word:"dog",translation:"собака",image:"./src/assets/img/card-imgs/dog.png",audioSrc:"./src/assets/audio/dog.mp3"},{word:"horse",translation:"лошадь",image:"./src/assets/img/card-imgs/horse.png",audioSrc:"./src/assets/audio/horse.mp3"},{word:"pig",translation:"свинья",image:"./src/assets/img/card-imgs/pig.png",audioSrc:"./src/assets/audio/pig.mp3"},{word:"rabbit",translation:"кролик",image:"./src/assets/img/card-imgs/rabbit.png",audioSrc:"./src/assets/audio/rabbit.mp3"},{word:"sheep",translation:"овца",image:"./src/assets/img/card-imgs/sheep.png",audioSrc:"./src/assets/audio/sheep.mp3"}],[{word:"bird",translation:"птица",image:"./src/assets/img/card-imgs/bird.png",audioSrc:"./src/assets/audio/bird.mp3"},{word:"fish ",translation:"рыба",image:"./src/assets/img/card-imgs/fish1.png",audioSrc:"./src/assets/audio/fish.mp3"},{word:"frog",translation:"жаба",image:"./src/assets/img/card-imgs/frog.png",audioSrc:"./src/assets/audio/frog.mp3"},{word:"giraffe",translation:"жираф",image:"./src/assets/img/card-imgs/giraffe.png",audioSrc:"./src/assets/audio/giraffe.mp3"},{word:"lion",translation:"лев",image:"./src/assets/img/card-imgs/lion.png",audioSrc:"./src/assets/audio/lion.mp3"},{word:"mouse",translation:"мышь",image:"./src/assets/img/card-imgs/mouse.png",audioSrc:"./src/assets/audio/mouse.mp3"},{word:"turtle",translation:"черепаха",image:"./src/assets/img/card-imgs/turtle.png",audioSrc:"./src/assets/audio/turtle.mp3"},{word:"dolphin",translation:"дельфин",image:"./src/assets/img/card-imgs/dolphin.png",audioSrc:"./src/assets/audio/dolphin.mp3"}],[{word:"skirt",translation:"юбка",image:"./src/assets/img/card-imgs/skirt.png",audioSrc:"./src/assets/audio/skirt.mp3"},{word:"pants",translation:"брюки",image:"./src/assets/img/card-imgs/pants.png",audioSrc:"./src/assets/audio/pants.mp3"},{word:"blouse",translation:"блузка",image:"./src/assets/img/card-imgs/blouse.png",audioSrc:"./src/assets/audio/blouse.mp3"},{word:"dress",translation:"платье",image:"./src/assets/img/card-imgs/dress.png",audioSrc:"./src/assets/audio/dress.mp3"},{word:"boot",translation:"ботинок",image:"./src/assets/img/card-imgs/boot.png",audioSrc:"./src/assets/audio/boot.mp3"},{word:"shirt",translation:"рубашка",image:"./src/assets/img/card-imgs/shirt.png",audioSrc:"./src/assets/audio/shirt.mp3"},{word:"coat",translation:"пальто",image:"./src/assets/img/card-imgs/coat.png",audioSrc:"./src/assets/audio/coat.mp3"},{word:"shoe",translation:"туфли",image:"./src/assets/img/card-imgs/shoe.png",audioSrc:"./src/assets/audio/shoe.mp3"}],[{word:"sad",translation:"грустный",image:"./src/assets/img/card-imgs/sad.png",audioSrc:"./src/assets/audio/sad.mp3"},{word:"angry",translation:"сердитый",image:"./src/assets/img/card-imgs/angry.png",audioSrc:"./src/assets/audio/angry.mp3"},{word:"happy",translation:"счастливый",image:"./src/assets/img/card-imgs/happy.png",audioSrc:"./src/assets/audio/happy.mp3"},{word:"tired",translation:"уставший",image:"./src/assets/img/card-imgs/tired.png",audioSrc:"./src/assets/audio/tired.mp3"},{word:"surprised",translation:"удивлённый",image:"./src/assets/img/card-imgs/surprised.png",audioSrc:"./src/assets/audio/surprised.mp3"},{word:"scared",translation:"испуганный",image:"./src/assets/img/card-imgs/scared.png",audioSrc:"./src/assets/audio/scared.mp3"},{word:"smile",translation:"улыбка",image:"./src/assets/img/card-imgs/smile.png",audioSrc:"./src/assets/audio/smile.mp3"},{word:"laugh",translation:"смех",image:"./src/assets/img/card-imgs/laugh.png",audioSrc:"./src/assets/audio/laugh.mp3"}],[{word:"dragon",translation:"дракон",image:"./src/assets/img/card-imgs/dragon.png",audioSrc:"./src/assets/audio/dragon.mp3"},{word:"fairy",translation:"фея",image:"./src/assets/img/card-imgs/fairy.png",audioSrc:"./src/assets/audio/fairy.mp3"},{word:"king",translation:"король",image:"./src/assets/img/card-imgs/king.png",audioSrc:"./src/assets/audio/king.mp3"},{word:"knight",translation:"рыцарь",image:"./src/assets/img/card-imgs/knight.png",audioSrc:"./src/assets/audio/knight.mp3"},{word:"mermaid",translation:"русалка",image:"./src/assets/img/card-imgs/mermaid.png",audioSrc:"./src/assets/audio/mermaid.mp3"},{word:"princess",translation:"принцесса",image:"./src/assets/img/card-imgs/princess.png",audioSrc:"./src/assets/audio/princess.mp3"},{word:"witch",translation:"ведьма",image:"./src/assets/img/card-imgs/witch.png",audioSrc:"./src/assets/audio/witch.mp3"},{word:"wizard",translation:"волшебник",image:"./src/assets/img/card-imgs/wizard.png",audioSrc:"./src/assets/audio/wizard.mp3"}],[{word:"apple",translation:"яблоко",image:"./src/assets/img/card-imgs/apple.png",audioSrc:"./src/assets/audio/apple.mp3"},{word:"banana",translation:"банан",image:"./src/assets/img/card-imgs/banana.png",audioSrc:"./src/assets/audio/banana.mp3"},{word:"bread",translation:"хлеб",image:"./src/assets/img/card-imgs/bread.png",audioSrc:"./src/assets/audio/bread.mp3"},{word:"cake",translation:"торт",image:"./src/assets/img/card-imgs/cake.png",audioSrc:"./src/assets/audio/cake.mp3"},{word:"cheese",translation:"сыр",image:"./src/assets/img/card-imgs/cheese.png",audioSrc:"./src/assets/audio/cheese.mp3"},{word:"tomato",translation:"помидор",image:"./src/assets/img/card-imgs/tomato.png",audioSrc:"./src/assets/audio/tomato.mp3"},{word:"salad",translation:"салат",image:"./src/assets/img/card-imgs/salad.png",audioSrc:"./src/assets/audio/salad.mp3"},{word:"sausage",translation:"колбаса",image:"./src/assets/img/card-imgs/sausage.png",audioSrc:"./src/assets/audio/sausage.mp3"}]];function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var s=a.call(t,"string");if("object"!==r(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(s.key),"symbol"===r(i)?i:String(i)),s)}var i}var s=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.attribute=e,this.stat=r}var e,r,s;return e=t,r=[{key:"render",value:function(){var t=this,e=document.querySelector(".card-wrapper"),r=1,a=this.createDomNode("table",e,"statistic-table");a.id="table";var s=this.createDomNode("thead",a),i=this.createDomNode("tbody",a),o=this.createDomNode("tr",s);this.attribute.forEach((function(e,r){var a=document.createElement("th");a.id=r,4===r?t.showHeadersWithIcons(a,"train-icon",e):5===r?t.showHeadersWithIcons(a,"correct-icon",e):6===r?t.showHeadersWithIcons(a,"wrong-icon",e):t.createDomNode("p",a,"th-title").innerText=e,o.appendChild(a)}));var n=function(){var e=[r,c,t.stat[c].translation,t.stat[c].category,t.stat[c].trained,t.stat[c].correct,t.stat[c].incorrect,t.stat[c].percent],a=t.createDomNode("tr",i);e.forEach((function(e){var r=t.makeTD(e);a.appendChild(r)})),r+=1};for(var c in this.stat)n()}},{key:"createDomNode",value:function(t,e){for(var r,a=document.createElement(t),s=arguments.length,i=new Array(s>2?s-2:0),o=2;o<s;o++)i[o-2]=arguments[o];return[].concat(i).length>0&&(r=a.classList).add.apply(r,i),e&&e.append(a),a}},{key:"showHeadersWithIcons",value:function(t,e,r){var a=this.createDomNode("div",t,"th-wrapper"),s=this.createDomNode("img",a,"th-icon",e);"train-icon"==e?(s.src="./src/assets/img/icons/train-icon.svg",s.alt="train-icon"):"correct-icon"==e?(s.src="./src/assets/img/icons/correct-icon.svg",s.alt="correct-icon"):"wrong-icon"==e&&(s.src="./src/assets/img/icons/wrong-icon.svg",s.alt="wrong-icon"),this.createDomNode("p",a,"th-title","th-title-hidden").innerText=r}},{key:"makeTD",value:function(t){var e=document.createElement("td");return"number"==typeof t?e.classList.add("number"):"string"==typeof t&&e.classList.add("string"),e.innerHTML=t,e}}],s=[{key:"sortTable",value:function(t){var e,r,a,s,i,o,n,c,d=0;for(e=document.querySelector("#table"),a=!0,c="asc";a;){for(a=!1,r=e.rows,s=1;s<r.length-1;s++)if(n=!1,i=r[s].getElementsByTagName("TD")[t],o=r[s+1].getElementsByTagName("TD")[t],"asc"==c){if(i.classList.contains("number")){if(Number(i.innerHTML)>Number(o.innerHTML)){n=!0;break}}else if(i.classList.contains("string")&&i.innerHTML.toLowerCase()>o.innerHTML.toLowerCase()){n=!0;break}}else if("desc"==c)if(i.classList.contains("number")){if(Number(i.innerHTML)<Number(o.innerHTML)){n=!0;break}}else if(i.classList.contains("string")&&i.innerHTML.toLowerCase()<o.innerHTML.toLowerCase()){n=!0;break}n?(r[s].parentNode.insertBefore(r[s+1],r[s]),a=!0,d++):0==d&&"asc"==c&&(c="desc",a=!0)}}}],r&&a(e.prototype,r),s&&a(e,s),Object.defineProperty(e,"prototype",{writable:!1}),t}();function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,(void 0,s=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,"string");if("object"!==i(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(a.key),"symbol"===i(s)?s:String(s)),a)}var s}var n=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=e,this.data=r}var e,r;return e=t,(r=[{key:"makeCard",value:function(){var t="",e=document.createElement("div");return e.className="card play-card",e.id="card"+this.id,t+="<img id='img".concat(this.id,"' class='card-image play-image' src=").concat(this.data.image," alt='").concat(this.data.word,"'>"),t+="<div class='title-wrapper play-title'>",t+="<h3 class='card-title' id='title".concat(this.id,"' data-translation=").concat(this.data.translation,">").concat(this.data.word.toUpperCase(),"</h3>"),t+="<div id='rotate".concat(this.id,"' class='rotate'>"),t+="<img class='rotate-icon' src='./src/assets/img/icons/rotate.svg' alt='rotate-icon'>",t+="</div>",t+="<audio id='audio".concat(this.id,"' src=").concat(this.data.audioSrc," data-word='").concat(this.data.word,"'></audio>"),t+="</div>",e.innerHTML=t,e}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function d(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,(void 0,s=function(t,e){if("object"!==c(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,"string");if("object"!==c(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(a.key),"symbol"===c(s)?s:String(s)),a)}var s}var m=function(){function t(e,r,a,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=e,this.data=r,this.image=a,this.alt=s}var e,r;return e=t,(r=[{key:"makeCard",value:function(){var t="",e=document.createElement("div");return e.className="card main",e.id="card"+this.id,e.setAttribute("data-about",this.data),t+="<img id='img".concat(this.id,"' class='card-image' src=").concat(this.image," alt='").concat(this.alt,"'>"),t+="<p class='play-mode'>play</p>",t+="<h3 class='card-title main-title' id='title".concat(this.id,"'>").concat(this.data.toUpperCase(),"</h3>"),e.innerHTML=t,e}}])&&d(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),u=0,l=null,g=[];function p(){if(!0===document.querySelector(".toggle").checked){h(!0);var t=v();null===l&&(l=new Audio),l.src=t[w[u]].audio,l.play()}}function f(t){if(!0===document.querySelector(".toggle").checked&&"repeat"===document.querySelector(".start-icon").getAttribute("alt")){var e=v(),r=t.target,a=t.target.getAttribute("alt");!function(){if(document.querySelectorAll(".star").length>9){var t=document.querySelector(".star");t.parentNode.removeChild(t)}}(),a===e[w[u]].word?(T[e[w[u]].word].correct+=1,r.style.opacity="0.5",r.removeEventListener("click",f),S("../src/assets/audio/correct.mp3","../src/assets/img/icons/star-win.svg","star",".stars-wrapper"),++u<e.length?setTimeout(p,2e3):(l=null,setTimeout(y,2e3))):(T[e[u].word].incorrect+=1,g.push(e[w[u]].word),S("../src/assets/audio/error.mp3","../src/assets/img/icons/star.svg","star",".stars-wrapper")),R(),U()}}function y(){document.querySelector(".stars-wrapper").innerHTML="";var t=C();document.querySelector(".category-title").innerText="",h(!1),q(),localStorage.removeItem("theme"),b();var r=document.createElement("div");r.classList.add("result-wrapper"),t.appendChild(r),0===g.length?S("../src/assets/audio/success.mp3","../src/assets/img/icons/success.jpg","result-img",".result-wrapper","YOU WIN!"):S("../src/assets/audio/failure.mp3","../src/assets/img/icons/failure.jpg","result-img",".result-wrapper","KEEP TRYING! NEXT TIME YOU WILL WIN!\nWRONG ANSWERS: "+g.length),setTimeout((function(){A(e[0])}),4e3),u=0,g=[],function(){for(var t in T)if(0!=T[t].incorrect){var e=T[t].incorrect/T[t].correct,r=Math.round(100*e);T[t].percent=r>100?100:r}}(),R()}function h(t){var e=document.querySelector(".start-icon");t?(e.src="../src/assets/img/icons/repeat.svg",e.setAttribute("alt","repeat")):(e.src="../src/assets/img/icons/play.svg",e.setAttribute("alt","start"))}function v(){var t=[];return document.querySelectorAll("audio").forEach((function(e){t.push({audio:e.src,word:e.dataset.word.toLocaleLowerCase()})})),t}function S(t,e,r,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=new Audio;i.src=t,i.play(),s&&(document.querySelector(a).innerHTML=s);var o=document.createElement("img");o.classList.add(r),o.src=e,o.alt=r,document.querySelector(a).append(o)}var w=[];function b(){document.querySelector(".toggle").checked?E(!1,"#ADACAC","#87C159"):E(!0,"#F3C301","#ADACAC")}function E(t,e,r){document.querySelector(".toggle").checked=t,document.querySelector(".play").style.color=e,document.querySelector(".train").style.color=r}function L(){"game"===localStorage.getItem("theme")?(w=function(t){for(var e=[],r=0;r<t;r++)e.push(r);for(var a=e.length-1;a>0;a--){var s=Math.floor(Math.random()*(a+1)),i=[e[s],e[a]];e[a]=i[0],e[s]=i[1]}return e}(document.querySelectorAll(".play-card").length),document.querySelector(".main-link.active")||document.querySelector(".statistic-table")?q():q("60px","flex"),k("none","1px","block")):(q(),k("flex","25px","none"))}function k(t,e,r){document.querySelectorAll(".play-title").forEach((function(e){e.style.display=t})),"none"===t?(document.querySelectorAll(".play-card").forEach((function(t){t.removeEventListener("click",M)})),document.querySelectorAll(".play-image").forEach((function(t){t.addEventListener("click",f)}))):(document.querySelectorAll(".play-card").forEach((function(t){t.addEventListener("click",M)})),document.querySelectorAll(".play-image").forEach((function(t){t.removeEventListener("click",f)}))),document.querySelectorAll(".main-title").forEach((function(t){t.style.marginTop=e})),document.querySelectorAll(".play-mode").forEach((function(t){t.style.display=r}))}function q(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";document.querySelector("footer").style.height=t,document.querySelector(".start").style.display=e}document.querySelector(".toggle").addEventListener("click",(function(){"game"===localStorage.getItem("theme")?localStorage.removeItem("theme"):localStorage.setItem("theme","game"),L()}));var T={};function A(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];document.querySelector(".stars-wrapper").innerHTML="";var r,a=C();0==t.length&&(r=function(){var t;return document.querySelectorAll("a").forEach((function(e){e.classList.contains("active")&&(t=e.id)})),t}(),t=e[r]),function(t){var r,a,s=[],i=0;return t[0]===e[0][0]?t.forEach((function(t){r=e[i+1][6].image,a=e[i+1][6].word,s.push(new m(i,t,r,a)),i+=1})):t.forEach((function(t){s.push(new n(i,t)),i+=1})),s}(t).forEach((function(t){a.append(t.makeCard())})),document.querySelectorAll(".play-card").forEach((function(t){t.addEventListener("click",M),t.addEventListener("mouseleave",H)})),document.querySelectorAll(".rotate").forEach((function(t){t.addEventListener("click",I)})),document.querySelectorAll(".main").forEach((function(t){t.addEventListener("click",N)})),L()}function C(){var t=document.querySelector(".card-wrapper");return t.innerHTML="",t}function N(){var t=this;document.querySelectorAll("a").forEach((function(e){e.classList.remove("active"),e.dataset.about==t.dataset.about&&(e.classList.add("active"),document.querySelector(".category-title").innerText=e.dataset.about)})),A()}function I(){var t=this.id[this.id.length-1];document.getElementById("card"+t).classList.add("card-rotited");var e=document.getElementById("title"+t);e.innerText=e.dataset.translation.toUpperCase(),document.getElementById("rotate"+t).style.opacity="0"}function H(){if(this.classList.contains("card-rotited")){this.classList.remove("card-rotited");var t=this.id[this.id.length-1],e=document.getElementById("img"+t);document.getElementById("title"+t).innerText=e.alt.toUpperCase(),document.getElementById("rotate"+t).style.opacity="1"}}function M(){if(!this.classList.contains("card-rotited")){var t=this.id[this.id.length-1],e=document.getElementById("audio"+t),r=new Audio;r.src=e.src,r.play(),U(),T[e.dataset.word].trained+=1,R()}}function j(){var t=document.querySelector(".burger");t.classList.contains("burger_active")?D():(t.classList.add("burger_active"),document.getElementById("mySidenav").style.width="300px",document.body.style.overflow="hidden",document.querySelector(".sidenav-background").classList.add("active"))}function D(){document.querySelector(".burger").classList.remove("burger_active"),document.getElementById("mySidenav").style.width="0",document.body.style.overflow="",document.querySelector(".sidenav-background").classList.remove("active")}function P(){R(),U(),x(),document.querySelector(".category-title").innerHTML="Score",O("button","Repeat difficult words",".stars-wrapper","statistic-btn","repeat-words").addEventListener("click",B),O("button","Reset",".stars-wrapper","statistic-btn","reset").addEventListener("click",W),new s(["№","Words","Translation","Categories","Trained","Correct","Wrong","%"],T).render(),document.querySelectorAll("a").forEach((function(t){t.classList.remove("active")})),document.querySelectorAll("th").forEach((function(t){t.addEventListener("click",(function(){s.sortTable(this.id)}))})),L()}function B(){x(),document.querySelector(".category-title").innerHTML="Difficult words",U();var t=function(){var t=[];for(var e in T)0!=T[e].incorrect&&t.push({word:e,translation:T[e].translation,image:T[e].img,incorrect:T[e].incorrect,audioSrc:T[e].audioSrc});return t.sort((function(t,e){return t.incorrect<e.incorrect?1:-1})),t}();if(0!==t.length)A(t.slice(0,8),"Difficult words");else{var e=O("div","There is no difficult words",".card-wrapper","result-wrapper"),r=document.createElement("img");r.src="./src/assets/img/icons/emojis_smiling-face-with-sunglasses.svg",r.alt="emojis_smiling-face-with-sunglasses",e.append(r),e.style.marginBottom="400px"}}function O(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2?arguments[2]:void 0,s=document.createElement(t);r&&(s.innerHTML=r);for(var i=arguments.length,o=new Array(i>3?i-3:0),n=3;n<i;n++)o[n-3]=arguments[n];return(e=s.classList).add.apply(e,o),document.querySelector(a).append(s),s}function x(){document.querySelector(".stars-wrapper").innerHTML="",document.querySelector(".card-wrapper").innerHTML=""}function W(){for(var t in T)T[t].trained=0,T[t].correct=0,T[t].incorrect=0,T[t].percent=0;R(),P()}function U(){null!==localStorage.getItem("statistic")&&(T=JSON.parse(localStorage.getItem("statistic")))}function R(){localStorage.setItem("statistic",JSON.stringify(T))}window.onload=function(){U(),function(){for(var t=1;t<e.length;t++){for(var r=e[0][t-1],a=0;a<e[t].length;a++)null==T[e[t][a].word]&&(T[e[t][a].word]={translation:e[t][a].translation,category:r,trained:0,correct:0,incorrect:0,percent:0,img:e[t][a].image,audioSrc:e[t][a].audioSrc});R()}}(),localStorage.removeItem("theme"),document.querySelectorAll(".link").forEach((function(t){t.addEventListener("click",N),t.addEventListener("click",D)})),document.querySelector(".logo").addEventListener("click",N),document.querySelector(".main-icon").addEventListener("click",N),document.querySelector(".burger").addEventListener("click",j),document.addEventListener("click",(function(t){t.target===document.querySelector(".sidenav-background")&&D()})),document.querySelector(".statistic").addEventListener("click",P),document.querySelector(".switch").addEventListener("click",b),document.querySelector(".start").addEventListener("click",p),A(),L()}})();