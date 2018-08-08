webpackJsonp([77738955667165],{141:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.azeriteLevelsInit=void 0;var n=a(101),o=r(n),l=a(55),i=r(l),u=a(100),d=r(u),s=(t.azeriteLevelsInit=function(){var e=(0,d.default)(o.default.mark(function e(t,a,r){var n,l,u=this;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(window.google){e.next=3;break}return e.next=3,new i.default(function(e,t){(0,c.default)("https://www.gstatic.com/charts/loader.js",function(a){a&&t(a),e()})});case 3:n=window.google,l=function(){var e=(0,d.default)(o.default.mark(function e(){var l,i,d,s,c,m,p,h,g,w,y,v,b,x,E,S,C,k,P,T,z,_,j,I,M;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.fetch(t+".json");case 2:return l=e.sent,e.next=5,l.json();case 5:for(i=e.sent,d=new n.visualization.arrayToDataTable(i.results),s=d.addColumn("number"),c=0;c<d.getNumberOfRows();c++){for(m=0,p=1;p<s;p++)d.getValue(c,p)>m&&(m=d.getValue(c,p));d.setValue(c,s,m)}for(d.sort([{column:s,desc:!0}]),d.removeColumn(s),h=2;h<=d.getNumberOfColumns();h+=2)d.insertColumn(h,{type:"string",role:"tooltip",p:{html:!0}});for(g=0;g<d.getNumberOfRows();g++)for(w=0,y=0,v=1;v<d.getNumberOfColumns();v+=2)b=d.getValue(g,v),x=b-y,E=100*((r+b)/r-1),S=E-w,C='\n        <div class="chart-tooltip">\n          <b>'+d.getValue(g,0)+"<br/> Item Level "+d.getColumnLabel(v)+"</b><br/>\n          <b>Total:</b> "+(0,f.formatNumber)(E.toFixed(2))+" % ("+(0,f.formatNumber)(b.toFixed())+")<br/>\n          <b>Increase:</b> "+(0,f.formatNumber)(S.toFixed(2))+"% ("+(0,f.formatNumber)(x.toFixed())+" )\n        </div>",d.setValue(g,v+1,C),d.setValue(g,v,S),w=E>w?E:w,y=b>y?b:y;k=document.getElementById("google-chart"),P=k.parentElement,T=P.innerWidth-2*window.getComputedStyle(P,null).getPropertyValue("padding-left"),z=document.documentElement.clientWidth>=768?T:700,_="#303030",j="#ffffff",I={title:a,backgroundColor:_,chartArea:{top:50,bottom:100,right:150,left:200},hAxis:{gridlines:{count:20},format:"#.#'%'",textStyle:{color:j},title:"% DPS Gain",titleTextStyle:{color:j},viewWindowMode:"maximized",viewWindow:{min:0}},vAxis:{textStyle:{fontSize:12,color:j},titleTextStyle:{color:j}},legend:{textStyle:{color:j}},titleTextStyle:{color:j},tooltip:{isHtml:!0},isStacked:!0,width:z},M=new n.visualization.BarChart(k),M.draw((0,f.excludeEmptyRows)(d),I),(0,f.removeLoading)(),(0,f.initOverlay)(I.chartArea);case 24:case"end":return e.stop()}},e,u)}));return function(){return e.apply(this,arguments)}}(),n.charts.load("current",{packages:["corechart"]}),n.charts.setOnLoadCallback(l);case 7:case"end":return e.stop()}},e,this)}));return function(t,a,r){return e.apply(this,arguments)}}(),a(119)),c=r(s),f=a(97)},359:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var n=a(20),o=r(n),l=a(25),i=r(l),u=a(24),d=r(u),s=a(3),c=r(s),f=a(4),m=r(f),p=a(40),h=r(p),g=a(34),w=r(g),y=a(41),v=a(90),b=r(v),x=a(91),E=r(x),S=a(141),C=a(44),k=r(C),P=function(e){function t(){return(0,o.default)(this,t),(0,i.default)(this,e.apply(this,arguments))}return(0,d.default)(t,e),t.prototype.componentDidMount=function(){var e=this.props,t=e.data,a=e.pathContext,r=t.site.siteMetadata.reportsPath,n=a.name,o=a.templateDPS;(0,S.azeriteLevelsInit)(""+r+n,"Azerite Powers % DPS Gain per Stacks",o).catch(function(e){console.error(e)})},t.prototype.render=function(){var e=this.props,t=e.data,a=e.i18nPlugin,r=e.location,n=e.pathContext,o=t.site.siteMetadata.reportsPath,l=a.t,i=n.name,u=n.fightStyle;return c.default.createElement("div",null,c.default.createElement(h.default,null,c.default.createElement("link",{rel:"prefetch",href:""+o+i+".json"})),c.default.createElement("h1",null,i.replace(new RegExp("_","g")," ").replace(new RegExp("-","g")," ")),c.default.createElement("p",null,c.default.createElement(y.Trans,{id:"Here, you can compare expected DPS increase from azerite powers."})),c.default.createElement("p",null,c.default.createElement(y.Trans,{id:"In order to compare azerite powers with this chart, look for the end of the bars corresponding to the item level of interest. However, you should <0>simulate your own character</0> to find your best setup. These simulations are based on predefined gear sets instead of your own, after all. This means data shown here <1>depends heavily</1> on the used profile with its talents, its gear, etc. and is rather giving an outlook. If your character is different from the setup used here, personal simulations are recommended.",components:[c.default.createElement("b",null),c.default.createElement("b",null)]})),c.default.createElement("div",{style:{textAlign:"center"}},t.allSitePage.edges.map(function(e,t){var a=e.node,r=a.context.fightStyle;return c.default.createElement(b.default,{key:t,variant:"contained",color:"primary",disabled:u===r,component:w.default,to:a.path,style:{margin:8}},l(r))})),c.default.createElement(k.default,{location:r,type:"inarticle"}),c.default.createElement(E.default,{id:"results-loader",color:"secondary"}),c.default.createElement("div",{id:"chart-overlay"}),c.default.createElement("div",{id:"google-chart",style:{height:1200,width:"100%"}}))},t}(c.default.Component);P.propTypes={data:m.default.object,i18nPlugin:m.default.object,location:m.default.object,pathContext:m.default.object},t.default=P;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-simulation-azerite-stacks-js-0dea7f3ec76585a0c918.js.map