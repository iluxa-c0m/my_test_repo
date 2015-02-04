(function(m,x){var f=".sweet-alert",d=".sweet-overlay",A=["error","warning","info","success"],q={title:"",text:"",type:null,allowOutsideClick:false,showCancelButton:false,closeOnConfirm:true,closeOnCancel:true,confirmButtonText:"OK",confirmButtonColor:"#AEDEF4",cancelButtonText:"Cancel",imageUrl:null,imageSize:null,timer:null};var h=function(){return x.querySelector(f)},c=function(){return x.querySelector(d)},b=function(J,I){return new RegExp(" "+I+" ").test(" "+J.className+" ")},p=function(J,I){if(!b(J,I)){J.className+=" "+I}},s=function(J,I){var K=" "+J.className.replace(/[\t\r\n]/g," ")+" ";if(b(J,I)){while(K.indexOf(" "+I+" ")>=0){K=K.replace(" "+I+" "," ")}J.className=K.replace(/^\s+|\s+$/g,"")}},v=function(I){var J=x.createElement("div");J.appendChild(x.createTextNode(I));return J.innerHTML},r=function(I){I.style.opacity="";I.style.display="block"},F=function(I){if(I&&!I.length){return r(I)}for(var J=0;J<I.length;++J){r(I[J])}},e=function(I){I.style.opacity="";I.style.display="none"},o=function(I){if(I&&!I.length){return e(I)}for(var J=0;J<I.length;++J){e(I[J])}},B=function(I,K){var J=K.parentNode;while(J!==null){if(J===I){return true}J=J.parentNode}return false},g=function(J){J.style.left="-9999px";J.style.display="block";var I=J.clientHeight;var K=parseInt(getComputedStyle(J).getPropertyValue("padding"),10);J.style.left="";J.style.display="none";return("-"+parseInt(I/2+K)+"px")},u=function(L,I){if(+L.style.opacity<1){I=I||16;L.style.opacity=0;L.style.display="block";var K=+new Date();var J=function(){L.style.opacity=+L.style.opacity+(new Date()-K)/100;K=+new Date();if(+L.style.opacity<1){setTimeout(J,I)}};J()}},a=function(L,I){I=I||16;L.style.opacity=1;var K=+new Date();var J=function(){L.style.opacity=+L.style.opacity-(new Date()-K)/100;K=+new Date();if(+L.style.opacity>0){setTimeout(J,I)}else{L.style.display="none"}};J()},G=function(K){if(MouseEvent){var J=new MouseEvent("click",{view:m,bubbles:false,cancelable:true});K.dispatchEvent(J)}else{if(x.createEvent){var I=x.createEvent("MouseEvents");I.initEvent("click",false,false);K.dispatchEvent(I)}else{if(x.createEventObject){K.fireEvent("onclick")}else{if(typeof K.onclick==="function"){K.onclick()}}}}},w=function(I){if(typeof I.stopPropagation==="function"){I.stopPropagation();I.preventDefault()}else{if(m.event&&m.event.hasOwnProperty("cancelBubble")){m.event.cancelBubble=true}}};var n,k,H,D;m.sweetAlertInitialize=function(){var J='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert" tabIndex="-1"><div class="icon error"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="icon warning"> <span class="body"></span> <span class="dot"></span> </div> <div class="icon info"></div> <div class="icon success"> <span class="line tip"></span> <span class="line long"></span> <div class="placeholder"></div> <div class="fix"></div> </div> <div class="icon custom"></div> <h2>Title</h2><p>Text</p><button class="cancel" tabIndex="2">Cancel</button><button class="confirm" tabIndex="1">OK</button></div>',I=x.createElement("div");I.innerHTML=J;x.body.appendChild(I)};m.sweetAlert=m.swal=function(){if(arguments[0]===undefined){m.console.error("sweetAlert expects at least 1 attribute!");return false}var M=C({},q);switch(typeof arguments[0]){case"string":M.title=arguments[0];M.text=arguments[1]||"";M.type=arguments[2]||"";break;case"object":if(arguments[0].title===undefined){m.console.error('Missing "title" argument!');return false}M.title=arguments[0].title;M.text=arguments[0].text||q.text;M.type=arguments[0].type||q.type;M.allowOutsideClick=arguments[0].allowOutsideClick||q.allowOutsideClick;M.showCancelButton=arguments[0].showCancelButton!==undefined?arguments[0].showCancelButton:q.showCancelButton;M.closeOnConfirm=arguments[0].closeOnConfirm!==undefined?arguments[0].closeOnConfirm:q.closeOnConfirm;M.closeOnCancel=arguments[0].closeOnCancel!==undefined?arguments[0].closeOnCancel:q.closeOnCancel;M.timer=arguments[0].timer||q.timer;M.confirmButtonText=(q.showCancelButton)?"Confirm":q.confirmButtonText;M.confirmButtonText=arguments[0].confirmButtonText||q.confirmButtonText;M.confirmButtonColor=arguments[0].confirmButtonColor||q.confirmButtonColor;M.cancelButtonText=arguments[0].cancelButtonText||q.cancelButtonText;M.imageUrl=arguments[0].imageUrl||q.imageUrl;M.imageSize=arguments[0].imageSize||q.imageSize;M.doneFunction=arguments[1]||null;break;default:m.console.error('Unexpected type of argument! Expected "string" or "object", got '+typeof arguments[0]);return false}z(M);y();l();var R=h();var P=function(V){var W=V.target||V.srcElement,X=(W.className==="confirm"),S=b(R,"visible"),U=(M.doneFunction&&R.getAttribute("data-has-done-function")==="true");switch(V.type){case ("mouseover"):if(X){V.target.style.backgroundColor=j(M.confirmButtonColor,-0.04)}break;case ("mouseout"):if(X){V.target.style.backgroundColor=M.confirmButtonColor}break;case ("mousedown"):if(X){V.target.style.backgroundColor=j(M.confirmButtonColor,-0.14)}break;case ("mouseup"):if(X){V.target.style.backgroundColor=j(M.confirmButtonColor,-0.04)}break;case ("focus"):var Z=R.querySelector("button.confirm"),T=R.querySelector("button.cancel");if(X){T.style.boxShadow="none"}else{Z.style.boxShadow="none"}break;case ("click"):if(X&&U&&S){M.doneFunction(true);if(M.closeOnConfirm){i()}}else{if(U&&S){var aa=String(M.doneFunction).replace(/\s/g,"");var Y=aa.substring(0,9)==="function("&&aa.substring(9,10)!==")";if(Y){M.doneFunction(false)}if(M.closeOnCancel){i()}}else{i()}}break}};var K=R.querySelectorAll("button");for(var O=0;O<K.length;O++){K[O].onclick=P;K[O].onmouseover=P;K[O].onmouseout=P;K[O].onmousedown=P;K[O].onfocus=P}k=x.onclick;x.onclick=function(W){var V=W.target||W.srcElement;var X=(R===V),U=B(R,W.target),T=b(R,"visible"),S=R.getAttribute("data-allow-ouside-click")==="true";if(!X&&!U&&T&&S){i()}};var J=R.querySelector("button.confirm"),N=R.querySelector("button.cancel"),L=R.querySelectorAll("button:not([type=hidden])");function I(W){var V=W.keyCode||W.which;if([9,13,32,27].indexOf(V)===-1){return}var U=W.target||W.srcElement;var T=-1;for(var S=0;S<L.length;S++){if(U===L[S]){T=S;break}}if(V===9){if(T===-1){U=J}else{if(T===L.length-1){U=L[0]}else{U=L[T+1]}}w(W);U.focus();t(U,M.confirmButtonColor)}else{if(V===13||V===32){if(T===-1){U=J}else{U=undefined}}else{if(V===27&&!(N.hidden||N.style.display==="none")){U=N}else{U=undefined}}if(U!==undefined){G(U,W)}}}H=m.onkeydown;m.onkeydown=I;function Q(X){var W=X.target||X.srcElement,S=X.relatedTarget,T=b(R,"visible");if(T){var V=-1;if(S!==null){for(var U=0;U<L.length;U++){if(S===L[U]){V=U;break}}if(V===-1){W.focus()}}else{D=W}}}J.onblur=Q;N.onblur=Q;m.onfocus=function(){m.setTimeout(function(){if(D!==undefined){D.focus();D=undefined}},0)}};m.swal.setDefaults=function(I){if(!I){throw new Error("userParams is required")}if(typeof I!=="object"){throw new Error("userParams has to be a object")}C(q,I)};function z(J){var U=h();var Q=U.querySelector("h2"),R=U.querySelector("p"),K=U.querySelector("button.cancel"),W=U.querySelector("button.confirm");Q.innerHTML=v(J.title).split("\n").join("<br>");R.innerHTML=(J.text||"").split("\n").join("<br>");if(J.text){F(R)}o(U.querySelectorAll(".icon"));if(J.type){var S=false;for(var L=0;L<A.length;L++){if(J.type===A[L]){S=true;break}}if(!S){m.console.error("Unknown alert type: "+J.type);return false}var M=U.querySelector(".icon."+J.type);F(M);switch(J.type){case"success":p(M,"animate");p(M.querySelector(".tip"),"animateSuccessTip");p(M.querySelector(".long"),"animateSuccessLong");break;case"error":p(M,"animateErrorIcon");p(M.querySelector(".x-mark"),"animateXMark");break;case"warning":p(M,"pulseWarning");p(M.querySelector(".body"),"pulseWarningIns");p(M.querySelector(".dot"),"pulseWarningIns");break}}if(J.imageUrl){var V=U.querySelector(".icon.custom");V.style.backgroundImage="url("+J.imageUrl+")";F(V);var T=80,N=80;if(J.imageSize){var P=J.imageSize.split("x")[0];var O=J.imageSize.split("x")[1];if(!P||!O){m.console.error("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+J.imageSize)}else{T=P;N=O;V.css({width:P+"px",height:O+"px"})}}V.setAttribute("style",V.getAttribute("style")+"width:"+T+"px; height:"+N+"px")}U.setAttribute("data-has-cancel-button",J.showCancelButton);if(J.showCancelButton){K.style.display="inline-block"}else{o(K)}if(J.cancelButtonText){K.innerHTML=v(J.cancelButtonText)}if(J.confirmButtonText){W.innerHTML=v(J.confirmButtonText)}W.style.backgroundColor=J.confirmButtonColor;t(W,J.confirmButtonColor);U.setAttribute("data-allow-ouside-click",J.allowOutsideClick);var I=(J.doneFunction)?true:false;U.setAttribute("data-has-done-function",I);U.setAttribute("data-timer",J.timer)}function j(L,I){L=String(L).replace(/[^0-9a-f]/gi,"");if(L.length<6){L=L[0]+L[0]+L[1]+L[1]+L[2]+L[2]}I=I||0;var J="#",M,K;for(K=0;K<3;K++){M=parseInt(L.substr(K*2,2),16);M=Math.round(Math.min(Math.max(0,M+(M*I)),255)).toString(16);J+=("00"+M).substr(M.length)}return J}function C(J,I){for(var K in I){if(I.hasOwnProperty(K)){J[K]=I[K]}}return J}function E(J){var I=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(J);return I?parseInt(I[1],16)+", "+parseInt(I[2],16)+", "+parseInt(I[3],16):null}function t(K,J){var I=E(J);K.style.boxShadow="0 0 2px rgba("+I+", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"}function l(){var J=h();u(c(),10);F(J);p(J,"showSweetAlert");s(J,"hideSweetAlert");n=x.activeElement;var I=J.querySelector("button.confirm");I.focus();setTimeout(function(){p(J,"visible")},500);var K=J.getAttribute("data-timer");if(K!=="null"){setTimeout(function(){i()},K)}}function i(){var L=h();a(c(),5);a(L,5);s(L,"showSweetAlert");p(L,"hideSweetAlert");s(L,"visible");var I=L.querySelector(".icon.success");s(I,"animate");s(I.querySelector(".tip"),"animateSuccessTip");s(I.querySelector(".long"),"animateSuccessLong");var J=L.querySelector(".icon.error");s(J,"animateErrorIcon");s(J.querySelector(".x-mark"),"animateXMark");var K=L.querySelector(".icon.warning");s(K,"pulseWarning");s(K.querySelector(".body"),"pulseWarningIns");s(K.querySelector(".dot"),"pulseWarningIns");m.onkeydown=H;x.onclick=k;if(n){n.focus()}D=undefined}function y(){var I=h();I.style.marginTop=g(h())}(function(){if(x.readyState==="complete"||x.readyState==="interactive"&&x.body){sweetAlertInitialize()}else{if(x.addEventListener){x.addEventListener("DOMContentLoaded",function I(){x.removeEventListener("DOMContentLoaded",arguments.callee,false);sweetAlertInitialize()},false)}else{if(x.attachEvent){x.attachEvent("onreadystatechange",function(){if(x.readyState==="complete"){x.detachEvent("onreadystatechange",arguments.callee);sweetAlertInitialize()}})}}}})()})(window,document);
