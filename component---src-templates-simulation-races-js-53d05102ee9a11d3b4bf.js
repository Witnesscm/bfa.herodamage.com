webpackJsonp([0x77437dd433af],{345:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.racesInit=void 0;var r=a(100),o=n(r),l=a(54),i=n(l),c=a(99),d=n(c),u=(t.racesInit=function(){var e=(0,d.default)(o.default.mark(function e(t,a,n){var r,l,c=this;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(window.google){e.next=3;break}return e.next=3,new i.default(function(e,t){(0,s.default)("https://www.gstatic.com/charts/loader.js",function(a){a&&t(a),e()})});case 3:r=window.google,l=function(){var e=(0,d.default)(o.default.mark(function e(){var l,i,d,u,s,h,p,m,g,y,w,v,b,x,E,k,S,C,A;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.fetch(t+".json");case 2:return l=e.sent,e.next=5,l.json();case 5:for(i=e.sent,d=new r.visualization.arrayToDataTable(i.results),d.sort({column:1,desc:!0}),d.insertColumn(2,{type:"string",role:"tooltip",p:{html:!0}}),d.insertColumn(3,{type:"string",role:"style"}),u=["Human","Dwarf","Night Elf","Gnome","Worgen","Draenei","Lightforged Draenei","Void Elf"],s=["Orc","Troll","Tauren","Goblin","Undead","Blood Elf","Highmountain Tauren","Nightborne"],h=0;h<d.getNumberOfRows();h++)p="",m=d.getValue(h,0),p=u.includes(m)?"stroke-width: 3; stroke-color: #1144AA; color: #3366CC":s.includes(m)?"stroke-width: 3; stroke-color: #770000; color: #AA0000":"stroke-width: 3; stroke-color: #4d4d4d; color: #808080",g=d.getValue(h,1),y=100*((n+g)/n-1),w='\n      <div class="chart-tooltip">\n          <b>'+m+"</b><br/>\n          <b>Increase:</b> "+(0,f.formatNumber)(y.toFixed(2))+"% ("+(0,f.formatNumber)(g)+" )\n      </div>",d.setValue(h,3,p),d.setValue(h,2,w),d.setValue(h,1,y);v=document.getElementById("google-chart"),b=v.parentElement,x=b.innerWidth-2*window.getComputedStyle(b,null).getPropertyValue("padding-left"),E=document.documentElement.clientWidth>=768?x:700,k="#303030",S="#ffffff",C={title:a,backgroundColor:k,chartArea:{top:50,bottom:100,left:150,right:50},hAxis:{gridlines:{count:20},format:"#.#'%'",textStyle:{color:S},title:"% DPS Gain",titleTextStyle:{color:S},viewWindowMode:"maximized",viewWindow:{min:0}},vAxis:{textStyle:{fontSize:12,color:S},titleTextStyle:{color:S}},annotations:{highContrast:!1,stem:{color:"transparent",length:-12},textStyle:{fontName:'"Roboto", "Helvetica", "Arial", sans-serif',fontSize:"0.875rem",bold:!0,color:k,auraColor:"transparent"}},titleTextStyle:{color:S},tooltip:{isHtml:!0},legend:{position:"none"},isStacked:!0,width:E},A=new r.visualization.BarChart(v),A.draw((0,f.excludeEmptyRows)(d),C),(0,f.removeLoading)(),(0,f.initOverlay)(C.chartArea);case 24:case"end":return e.stop()}},e,c)}));return function(){return e.apply(this,arguments)}}(),r.charts.load("current",{packages:["corechart"]}),r.charts.setOnLoadCallback(l);case 7:case"end":return e.stop()}},e,this)}));return function(t,a,n){return e.apply(this,arguments)}}(),a(118)),s=n(u),f=a(96)},359:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var r=a(20),o=n(r),l=a(25),i=n(l),c=a(24),d=n(c),u=a(3),s=n(u),f=a(4),h=n(f),p=a(40),m=n(p),g=a(34),y=n(g),w=a(41),v=a(89),b=n(v),x=a(90),E=n(x),k=a(345),S=a(53),C=n(S),A=function(e){function t(){return(0,o.default)(this,t),(0,i.default)(this,e.apply(this,arguments))}return(0,d.default)(t,e),t.prototype.componentDidMount=function(){var e=this.props,t=e.data,a=e.pathContext,n=t.site.siteMetadata.reportsPath,r=a.name,o=a.templateDPS;try{(0,k.racesInit)(""+n+r,"Race % DPS Gain",o)}catch(e){console.error(e)}},t.prototype.render=function(){var e=this.props,t=e.data,a=e.i18nPlugin,n=e.location,r=e.pathContext,o=t.site.siteMetadata.reportsPath,l=a.t,i=r.name,c=r.fightStyle;return s.default.createElement("div",null,s.default.createElement(m.default,null,s.default.createElement("link",{rel:"prefetch",href:""+o+i+".json"})),s.default.createElement("h1",null,i.replace(new RegExp("_","g")," ").replace(new RegExp("-","g")," ")),s.default.createElement("p",null,s.default.createElement(w.Trans,{id:"If you are interested in how the different races in World of Warcraft compare for this build, you can check out the following chart. However, keep in mind that race differences are usually rather small and can change with balance and gameplay changes. You can always play the race you want to play and don&apos,t have to feel compelled to choose based on this chart."})),s.default.createElement("div",{style:{textAlign:"center"}},t.allSitePage.edges.map(function(e,t){var a=e.node,n=a.context.fightStyle;return s.default.createElement(b.default,{key:t,variant:"contained",color:"primary",disabled:c===n,component:y.default,to:a.path,style:{margin:8}},l(n))})),s.default.createElement(C.default,{location:n,type:"inarticle"}),s.default.createElement(E.default,{id:"results-loader",color:"secondary"}),s.default.createElement("div",{id:"chart-overlay"}),s.default.createElement("div",{id:"google-chart",style:{height:500,width:"100%"}}))},t}(s.default.Component);A.propTypes={data:h.default.object,i18nPlugin:h.default.object,location:h.default.object,pathContext:h.default.object},t.default=A;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-simulation-races-js-53d05102ee9a11d3b4bf.js.map