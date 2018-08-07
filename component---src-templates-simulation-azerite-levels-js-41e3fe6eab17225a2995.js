webpackJsonp([0x5bd40935ecd4],{68:function(e,t,r){"use strict";function o(e){var t,r=e.children,o=e.classes,a=e.className,c=e.color,d=e.disabled,f=e.disableFocusRipple,m=e.fullWidth,y=e.focusVisibleClassName,g=e.mini,v=e.size,b=e.variant,w=(0,l.default)(e,["children","classes","className","color","disabled","disableFocusRipple","fullWidth","focusVisibleClassName","mini","size","variant"]),x="fab"===b||"extendedFab"===b,k="contained"===b||"raised"===b,E="text"===b||"flat"===b||"outlined"===b,S=(0,u.default)(o.root,(t={},(0,i.default)(t,o.fab,x),(0,i.default)(t,o.mini,x&&g),(0,i.default)(t,o.extendedFab,"extendedFab"===b),(0,i.default)(t,o.text,E),(0,i.default)(t,o.textPrimary,E&&"primary"===c),(0,i.default)(t,o.textSecondary,E&&"secondary"===c),(0,i.default)(t,o.flat,"text"===b||"flat"===b),(0,i.default)(t,o.flatPrimary,("text"===b||"flat"===b)&&"primary"===c),(0,i.default)(t,o.flatSecondary,("text"===b||"flat"===b)&&"secondary"===c),(0,i.default)(t,o.contained,k||x),(0,i.default)(t,o.containedPrimary,(k||x)&&"primary"===c),(0,i.default)(t,o.containedSecondary,(k||x)&&"secondary"===c),(0,i.default)(t,o.raised,k||x),(0,i.default)(t,o.raisedPrimary,(k||x)&&"primary"===c),(0,i.default)(t,o.raisedSecondary,(k||x)&&"secondary"===c),(0,i.default)(t,o.outlined,"outlined"===b),(0,i.default)(t,o["size".concat((0,p.capitalize)(v))],"medium"!==v),(0,i.default)(t,o.disabled,d),(0,i.default)(t,o.fullWidth,m),(0,i.default)(t,o.colorInherit,"inherit"===c),t),a);return s.default.createElement(h.default,(0,n.default)({className:S,disabled:d,focusRipple:!f,focusVisibleClassName:(0,u.default)(o.focusVisible,y)},w),s.default.createElement("span",{className:o.label},r))}var a=r(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var n=a(r(8)),i=a(r(6)),l=a(r(5)),c=a(r(11)),s=a(r(2)),u=(a(r(4)),a(r(7))),d=a(r(10)),f=r(59),h=a(r(38)),p=r(29),m=function(e){return{root:(0,c.default)({},e.typography.button,{lineHeight:"1.4em",boxSizing:"border-box",minWidth:64,minHeight:36,padding:"8px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:(0,f.fade)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,f.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,f.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},flat:{},flatPrimary:{},flatSecondary:{},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},raised:{},raisedPrimary:{},raisedSecondary:{},fab:{borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]}},extendedFab:{borderRadius:24,padding:"0 16px",width:"auto",minWidth:48,height:48},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},mini:{width:40,height:40},sizeSmall:{padding:"7px 8px",minWidth:64,minHeight:32,fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:"8px 24px",minWidth:112,minHeight:40,fontSize:e.typography.pxToRem(15)},fullWidth:{width:"100%"}}};t.styles=m,o.propTypes={},o.defaultProps={color:"default",component:"button",disabled:!1,disableFocusRipple:!1,fullWidth:!1,mini:!1,size:"medium",type:"button",variant:"text"};var y=(0,d.default)(m,{name:"MuiButton"})(o);t.default=y},69:function(e,t,r){"use strict";var o=r(3);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var a=o(r(68))},70:function(e,t,r){"use strict";function o(e,t,r){var o=Math.min(Math.max(t,e),r);return(o-t)/(r-t)}function a(e){return e=o(e,0,1),e=(e-=1)*e*e+1}function n(e){return e*e}function i(e){var t,r,o=e.classes,i=e.className,l=e.color,p=e.size,g=e.style,v=e.thickness,b=e.value,w=e.variant,x=(0,d.default)(e,["classes","className","color","size","style","thickness","value","variant"]),k={},E={},S={};if("determinate"===w||"static"===w){var C=2*Math.PI*((y-v)/2);k.strokeDasharray=C.toFixed(3),S["aria-valuenow"]=Math.round(b),"static"===w?(k.strokeDashoffset="".concat(((100-b)/100*C).toFixed(3),"px"),E.transform="rotate(-90deg)"):(k.strokeDashoffset="".concat((n((100-b)/100)*C).toFixed(3),"px"),E.transform="rotate(".concat((270*a(b/70)).toFixed(3),"deg)"))}return f.default.createElement("div",(0,c.default)({className:(0,h.default)(o.root,(t={},(0,u.default)(t,o["color".concat((0,m.capitalize)(l))],"inherit"!==l),(0,u.default)(t,o.indeterminate,"indeterminate"===w),(0,u.default)(t,o.static,"static"===w),t),i),style:(0,s.default)({width:p,height:p},E,g),role:"progressbar"},S,x),f.default.createElement("svg",{className:o.svg,viewBox:"".concat(y/2," ").concat(y/2," ").concat(y," ").concat(y)},f.default.createElement("circle",{className:(0,h.default)(o.circle,(r={},(0,u.default)(r,o.circleIndeterminate,"indeterminate"===w),(0,u.default)(r,o.circleStatic,"static"===w),r)),style:k,cx:y,cy:y,r:(y-v)/2,fill:"none",strokeWidth:v})))}var l=r(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var c=l(r(8)),s=l(r(11)),u=l(r(6)),d=l(r(5)),f=l(r(2)),h=(l(r(4)),l(r(7))),p=l(r(10)),m=r(29),y=44,g=function(e){return{root:{display:"inline-block",lineHeight:1},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"mui-progress-circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"mui-progress-circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes mui-progress-circular-rotate":{"100%":{transform:"rotate(360deg)"}},"@keyframes mui-progress-circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-120px"}}}};t.styles=g,i.propTypes={},i.defaultProps={color:"primary",size:40,thickness:3.6,value:0,variant:"indeterminate"};var v=(0,p.default)(g,{name:"MuiCircularProgress",flip:!1})(i);t.default=v},71:function(e,t,r){"use strict";var o=r(3);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var a=o(r(70))},95:function(e,t,r){!function(){var t={},r=0,o=function(e){var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)},a=function(e,a,n){var i;a&&"function"!=typeof a&&(n=a.context||n,i=a.setup,a=a.callback);var l,c,s=document.createElement("script"),u=!1,d=function(){u||(u=!0,c(),a&&a.call(n,l))},f=function(){l=new Error(e||"EMPTY"),d()};if(!s.readyState||"async"in s)c=function(){s.onload=s.onerror=null},s.onerror=f,s.onload=d,s.async=!0,s.charset="utf-8",i&&i.call(n,s),s.src=e,o(s);else{var h=r++,p={loaded:!0,complete:!0},m=!1;c=function(){s.onreadystatechange=s.onerror=null,t[h]=void 0},s.onreadystatechange=function(){var e=s.readyState;if(!l)return!m&&p[e]&&(m=!0,o(s)),"loaded"===e&&(s.children,"loading"===s.readyState)?f():void("complete"===s.readyState&&d())},s.onerror=f,t[h]=s,i&&i.call(n,s),s.src=e}};e.exports=a}()},212:function(e,t,r){var o=function(){return this}()||Function("return this")(),a=o.regeneratorRuntime&&Object.getOwnPropertyNames(o).indexOf("regeneratorRuntime")>=0,n=a&&o.regeneratorRuntime;if(o.regeneratorRuntime=void 0,e.exports=r(99),a)o.regeneratorRuntime=n;else try{delete o.regeneratorRuntime}catch(e){o.regeneratorRuntime=void 0}},99:function(e,t){!function(t){"use strict";function r(e,t,r,o){var n=t&&t.prototype instanceof a?t:a,i=Object.create(n.prototype),l=new h(o||[]);return i._invoke=s(e,r,l),i}function o(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function a(){}function n(){}function i(){}function l(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function c(e){function t(r,a,n,i){var l=o(e[r],e,a);if("throw"!==l.type){var c=l.arg,s=c.value;return s&&"object"==typeof s&&v.call(s,"__await")?Promise.resolve(s.__await).then(function(e){t("next",e,n,i)},function(e){t("throw",e,n,i)}):Promise.resolve(s).then(function(e){c.value=e,n(c)},i)}i(l.arg)}function r(e,r){function o(){return new Promise(function(o,a){t(e,r,o,a)})}return a=a?a.then(o,o):o()}var a;this._invoke=r}function s(e,t,r){var a=C;return function(n,i){if(a===N)throw new Error("Generator is already running");if(a===P){if("throw"===n)throw i;return m()}for(r.method=n,r.arg=i;;){var l=r.delegate;if(l){var c=u(l,r);if(c){if(c===_)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===C)throw a=P,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=N;var s=o(e,t,r);if("normal"===s.type){if(a=r.done?P:L,s.arg===_)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(a=P,r.method="throw",r.arg=s.arg)}}}function u(e,t){var r=e.iterator[t.method];if(r===y){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=y,u(e,t),"throw"===t.method))return _;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return _}var a=o(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,_;var n=a.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=y),t.delegate=null,_):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,_)}function d(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function f(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function h(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(d,this),this.reset(!0)}function p(e){if(e){var t=e[w];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(v.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=y,t.done=!0,t};return o.next=o}}return{next:m}}function m(){return{value:y,done:!0}}var y,g=Object.prototype,v=g.hasOwnProperty,b="function"==typeof Symbol?Symbol:{},w=b.iterator||"@@iterator",x=b.asyncIterator||"@@asyncIterator",k=b.toStringTag||"@@toStringTag",E="object"==typeof e,S=t.regeneratorRuntime;if(S)return void(E&&(e.exports=S));S=t.regeneratorRuntime=E?e.exports:{},S.wrap=r;var C="suspendedStart",L="suspendedYield",N="executing",P="completed",_={},R={};R[w]=function(){return this};var O=Object.getPrototypeOf,T=O&&O(O(p([])));T&&T!==g&&v.call(T,w)&&(R=T);var j=i.prototype=a.prototype=Object.create(R);n.prototype=j.constructor=i,i.constructor=n,i[k]=n.displayName="GeneratorFunction",S.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===n||"GeneratorFunction"===(t.displayName||t.name))},S.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,i):(e.__proto__=i,k in e||(e[k]="GeneratorFunction")),e.prototype=Object.create(j),e},S.awrap=function(e){return{__await:e}},l(c.prototype),c.prototype[x]=function(){return this},S.AsyncIterator=c,S.async=function(e,t,o,a){var n=new c(r(e,t,o,a));return S.isGeneratorFunction(t)?n:n.next().then(function(e){return e.done?e.value:n.next()})},l(j),j[k]="Generator",j[w]=function(){return this},j.toString=function(){return"[object Generator]"},S.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var o=t.pop();if(o in e)return r.value=o,r.done=!1,r}return r.done=!0,r}},S.values=p,h.prototype={constructor:h,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(f),!e)for(var t in this)"t"===t.charAt(0)&&v.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=y)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,o){return n.type="throw",n.arg=e,r.next=t,o&&(r.method="next",r.arg=y),!!o}if(this.done)throw e;for(var r=this,o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],n=a.completion;if("root"===a.tryLoc)return t("end");if(a.tryLoc<=this.prev){var i=v.call(a,"catchLoc"),l=v.call(a,"finallyLoc");if(i&&l){if(this.prev<a.catchLoc)return t(a.catchLoc,!0);if(this.prev<a.finallyLoc)return t(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return t(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return t(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&v.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var n=a?a.completion:{};return n.type=e,n.arg=t,a?(this.method="next",this.next=a.finallyLoc,_):this.complete(n)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),_},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),f(r),_}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var a=o.arg;f(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:p(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=y),_}}}(function(){return this}()||Function("return this")())},354:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.azeriteLevelsInit=void 0;var a=r(144),n=o(a),i=r(79),l=o(i),c=r(142),s=o(c),u=(t.azeriteLevelsInit=function(){var e=(0,s.default)(n.default.mark(function e(t,r,o){var a,i,c=this;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(window.google){e.next=3;break}return e.next=3,new l.default(function(e,t){(0,d.default)("https://www.gstatic.com/charts/loader.js",function(r){r&&t(r),e()})});case 3:a=window.google,i=function(){var e=(0,s.default)(n.default.mark(function e(){var i,l,s,u,d,h,p,m,y,g,v,b,w,x,k,E,S,C,L,N,P,_,R,O,T;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.fetch(t+".json");case 2:return i=e.sent,e.next=5,i.json();case 5:for(l=e.sent,s=new a.visualization.arrayToDataTable(l.results),u=s.addColumn("number"),d=0;d<s.getNumberOfRows();d++){for(h=0,p=1;p<u;p++)s.getValue(d,p)>h&&(h=s.getValue(d,p));s.setValue(d,u,h)}for(s.sort([{column:u,desc:!0}]),s.removeColumn(u),m=2;m<=s.getNumberOfColumns();m+=2)s.insertColumn(m,{type:"string",role:"tooltip",p:{html:!0}});for(y=0;y<s.getNumberOfRows();y++)for(g=0,v=0,b=1;b<s.getNumberOfColumns();b+=2)w=s.getValue(y,b),x=w-v,k=100*((o+w)/o-1),E=k-g,S='\n        <div class="chart-tooltip">\n          <b>'+s.getValue(y,0)+"<br/> Item Level "+s.getColumnLabel(b)+"</b><br/>\n          <b>Total:</b> "+(0,f.formatNumber)(k.toFixed(2))+" % ("+(0,f.formatNumber)(w.toFixed())+")<br/>\n          <b>Increase:</b> "+(0,f.formatNumber)(E.toFixed(2))+"% ("+(0,f.formatNumber)(x.toFixed())+" )\n        </div>",s.setValue(y,b+1,S),s.setValue(y,b,E),g=k>g?k:g,v=w>v?w:v;C=document.getElementById("google-chart"),L=C.parentElement,N=L.innerWidth-2*window.getComputedStyle(L,null).getPropertyValue("padding-left"),P=document.documentElement.clientWidth>=768?N:700,_="#303030",R="#ffffff",O={title:r,backgroundColor:_,chartArea:{top:50,bottom:100,right:150,left:200},hAxis:{gridlines:{count:20},format:"#.#'%'",textStyle:{color:R},title:"% DPS Gain",titleTextStyle:{color:R},viewWindowMode:"maximized",viewWindow:{min:0}},vAxis:{textStyle:{fontSize:12,color:R},titleTextStyle:{color:R}},legend:{textStyle:{color:R}},titleTextStyle:{color:R},tooltip:{isHtml:!0},isStacked:!0,width:P},T=new a.visualization.BarChart(C),T.draw((0,f.excludeEmptyRows)(s),O),(0,f.removeLoading)(),(0,f.initOverlay)(O.chartArea);case 24:case"end":return e.stop()}},e,c)}));return function(){return e.apply(this,arguments)}}(),a.charts.load("current",{packages:["corechart"]}),a.charts.setOnLoadCallback(i);case 7:case"end":return e.stop()}},e,this)}));return function(t,r,o){return e.apply(this,arguments)}}(),r(95)),d=o(u),f=r(78)},78:function(e,t){"use strict";function r(e){return new Intl.NumberFormat("en-US").format(e)}function o(){var e=document.getElementById("results-loader");e.parentNode.removeChild(e)}function a(e){var t=new window.google.visualization.DataView(e),r=t.getFilteredRows([{column:1,value:null}]);return t.hideRows(r),t.toDataTable()}function n(e,t){var r=void 0,o=void 0,a=void 0;for(r=0;r<t.length;r++)for(a=0;a<e.getNumberOfRows();a++)if(e.getValue(a,0)===t[r]){if(0!==a){for(e.insertRows(0,1),a+=1,e.setRowProperties(0,e.getRowProperties(a)),o=0;o<e.getNumberOfColumns();o++)e.setValue(0,o,e.getValue(a,o));e.removeRow(a)}break}return e}function i(e){var t=document.getElementById("google-chart"),r=document.getElementById("chart-overlay");t.onmousemove=function(o){var a=t.getBoundingClientRect(),n=a.left+e.left+window.scrollX,i=a.right-e.right+window.scrollX,l=a.top+e.top+window.scrollY,c=a.bottom-e.bottom+window.scrollY;o.pageX>=n&&o.pageX<=i&&o.pageY>=l&&o.pageY<=c?(r.style.display="block",r.style.top=l+"px",r.style.left=o.pageX+"px",r.style.height=t.offsetHeight-e.top-e.bottom+"px"):r.style.display="none"}}t.__esModule=!0,t.formatNumber=r,t.removeLoading=o,t.excludeEmptyRows=a,t.putAtTheTop=n,t.initOverlay=i},369:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var a=r(23),n=o(a),i=r(31),l=o(i),c=r(30),s=o(c),u=r(2),d=o(u),f=r(4),h=o(f),p=r(34),m=o(p),y=r(58),g=r(22),v=r(69),b=o(v),w=r(71),x=o(w),k=r(354),E=function(e){return{}},S=function(e){function t(){return(0,n.default)(this,t),(0,l.default)(this,e.apply(this,arguments))}return(0,s.default)(t,e),t.prototype.componentDidMount=function(){var e=this.props,t=e.data,r=e.pathContext,o=t.site.siteMetadata.reportsPath,a=r.name,n=r.templateDPS;(0,k.azeriteLevelsInit)(""+o+a,"Test",n).catch(function(e){console.error(e)})},t.prototype.render=function(){var e=this.props,t=e.data,r=e.pathContext,o=r.name,a=r.fightStyle;return d.default.createElement("div",null,d.default.createElement("h1",null,o.replace(new RegExp("_","g")," ").replace(new RegExp("-","g")," ")),d.default.createElement("p",null,d.default.createElement(y.Trans,{id:"Here, you can compare expected DPS increase from azerite powers."})),d.default.createElement("p",null,d.default.createElement(y.Trans,{id:"In order to compare azerite powers with this chart, look for the end of the bars corresponding to the item level of interest. However, you should <0>simulate your own character</0> to find your best setup. These simulations are based on predefined gear sets instead of your own, after all. This means data shown here <1>depends heavily</1> on the used profile with its talents and is rather giving an outlook. If your character is different from the setup used here, personal simulations are recommended.",components:[d.default.createElement("b",null),d.default.createElement("b",null)]})),d.default.createElement("div",{style:{textAlign:"center"}},t.allSitePage.edges.map(function(e,t){var r=e.node,o=r.context.fightStyle;return d.default.createElement(b.default,{key:t,variant:"contained",color:"primary",disabled:a===o,component:m.default,to:r.path,style:{margin:8}},o)})),d.default.createElement(x.default,{id:"results-loader",color:"secondary"}),d.default.createElement("div",{id:"chart-overlay"}),d.default.createElement("div",{id:"google-chart",style:{height:500,width:"100%"}}))},t}(d.default.Component);S.propTypes={classes:h.default.object,data:h.default.object,pathContext:h.default.object},t.default=(0,y.withI18n)()((0,g.withStyles)(E)(S));t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-simulation-azerite-levels-js-41e3fe6eab17225a2995.js.map