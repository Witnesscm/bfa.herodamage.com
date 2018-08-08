webpackJsonp([34748760999281],{347:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.trinketsInit=void 0;var n=r(101),o=a(n),l=r(55),i=a(l),u=r(100),d=a(u),s=(t.trinketsInit=function(){var e=(0,d.default)(o.default.mark(function e(t,r,a){var n,l,u=this;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(window.google){e.next=3;break}return e.next=3,new i.default(function(e,t){(0,c.default)("https://www.gstatic.com/charts/loader.js",function(r){r&&t(r),e()})});case 3:n=window.google,l=function(){var e=(0,d.default)(o.default.mark(function e(){var l,i,d,s,c,m,p,h,g,y,w,b,v,x,E,k,S,C,T,P,I,_,j,M,N;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.fetch(t+".json");case 2:return l=e.sent,e.next=5,l.json();case 5:for(i=e.sent,d=new n.visualization.arrayToDataTable(i.results),s=d.addColumn("number"),c=0;c<d.getNumberOfRows();c++){for(m=0,p=1;p<s;p++)d.getValue(c,p)>m&&(m=d.getValue(c,p));d.setValue(c,s,m)}for(d.sort([{column:s,desc:!0}]),d.removeColumn(s),h=2;h<=d.getNumberOfColumns();h+=2)d.insertColumn(h,{type:"string",role:"tooltip",p:{html:!0}});for(g=0;g<d.getNumberOfRows();g++)for(y=0,w=0,b=1;b<d.getNumberOfColumns();b+=2)v=d.getValue(g,b),x=v-w,E=100*((a+v)/a-1),k=E-y,S='\n        <div class="chart-tooltip">\n          <b>'+d.getValue(g,0)+"<br/> Item Level "+d.getColumnLabel(b)+"</b><br/>\n          <b>Total:</b> "+(0,f.formatNumber)(E.toFixed(2))+" % ("+(0,f.formatNumber)(v.toFixed())+")<br/>\n          <b>Increase:</b> "+(0,f.formatNumber)(k.toFixed(2))+"% ("+(0,f.formatNumber)(x.toFixed())+" )\n        </div>",d.setValue(g,b+1,S),d.setValue(g,b,k),y=E>y?E:y,w=v>w?v:w;C=document.getElementById("google-chart"),T=C.parentElement,P=T.innerWidth-2*window.getComputedStyle(T,null).getPropertyValue("padding-left"),I=document.documentElement.clientWidth>=768?P:700,_="#303030",j="#ffffff",M={title:r,backgroundColor:_,chartArea:{top:50,bottom:100,right:150,left:200},hAxis:{gridlines:{count:20},format:"#.#'%'",textStyle:{color:j},title:"% DPS Gain",titleTextStyle:{color:j},viewWindowMode:"maximized",viewWindow:{min:0}},vAxis:{textStyle:{fontSize:12,color:j},titleTextStyle:{color:j}},legend:{textStyle:{color:j}},titleTextStyle:{color:j},tooltip:{isHtml:!0},isStacked:!0,width:I},N=new n.visualization.BarChart(C),N.draw((0,f.excludeEmptyRows)(d),M),(0,f.removeLoading)(),(0,f.initOverlay)(M.chartArea);case 24:case"end":return e.stop()}},e,u)}));return function(){return e.apply(this,arguments)}}(),n.charts.load("current",{packages:["corechart"]}),n.charts.setOnLoadCallback(l);case 7:case"end":return e.stop()}},e,this)}));return function(t,r,a){return e.apply(this,arguments)}}(),r(119)),c=a(s),f=r(97)},361:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var n=r(20),o=a(n),l=r(25),i=a(l),u=r(24),d=a(u),s=r(3),c=a(s),f=r(4),m=a(f),p=r(40),h=a(p),g=r(34),y=a(g),w=r(41),b=r(90),v=a(b),x=r(91),E=a(x),k=r(347),S=r(54),C=a(S),T=function(e){function t(){return(0,o.default)(this,t),(0,i.default)(this,e.apply(this,arguments))}return(0,d.default)(t,e),t.prototype.componentDidMount=function(){var e=this.props,t=e.data,r=e.pathContext,a=t.site.siteMetadata.reportsPath,n=r.name,o=r.templateDPS;try{(0,k.trinketsInit)(""+a+n,"Trinkets % DPS Gain per Item Levels",o)}catch(e){console.error(e)}},t.prototype.render=function(){var e=this.props,t=e.data,r=e.i18nPlugin,a=e.location,n=e.pathContext,o=t.site.siteMetadata.reportsPath,l=r.t,i=n.name,u=n.fightStyle;return c.default.createElement("div",null,c.default.createElement(h.default,null,c.default.createElement("link",{rel:"prefetch",href:""+o+i+".json"})),c.default.createElement("h1",null,i.replace(new RegExp("_","g")," ").replace(new RegExp("-","g")," ")),c.default.createElement("p",null,c.default.createElement(w.Trans,{id:"Here, you can compare expected DPS increase from trinkets."})),c.default.createElement("p",null,c.default.createElement(w.Trans,{id:"In order to compare trinkets with this chart, look for the end of the bars corresponding to the item level of interest. However, you should <0>simulate your own character</0> to find your best setup. These simulations are based on predefined gear sets instead of your own, after all. This means data shown here <1>depends heavily</1> on the used profile with its talents, its gear, etc. and is rather giving an outlook. If your character is different from the setup used here, personal simulations are recommended.",components:[c.default.createElement("b",null),c.default.createElement("b",null)]})),c.default.createElement("div",{style:{textAlign:"center"}},t.allSitePage.edges.map(function(e,t){var r=e.node,a=r.context.fightStyle;return c.default.createElement(v.default,{key:t,variant:"contained",color:"primary",disabled:u===a,component:y.default,to:r.path,style:{margin:8}},l(a))})),c.default.createElement(C.default,{location:a,type:"inarticle"}),c.default.createElement(E.default,{id:"results-loader",color:"secondary"}),c.default.createElement("div",{id:"chart-overlay"}),c.default.createElement("div",{id:"google-chart",style:{height:750,width:"100%"}}))},t}(c.default.Component);T.propTypes={data:m.default.object,i18nPlugin:m.default.object,location:m.default.object,pathContext:m.default.object},t.default=T;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-simulation-trinkets-js-19d80be7d72b7d799f95.js.map