(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8db9"],{5756:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[e._m(0),n("div",{ref:"container",staticClass:"container",attrs:{id:"container"}})])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("改变鼠标样式(鼠标移入改变)")])])}],o=n("1b62"),i=n("362d"),s=n.n(i),l={name:"MouseCursorStyles",mixins:[o["b"]],data:function(){return{porpStyle1:{x:100,y:100,sides:5,radius:70,fill:"red",stroke:"black",strokeWidth:4,draggable:!0},porpStyle2:{x:250,y:100,sides:5,radius:70,fill:"green",stroke:"black",strokeWidth:4,draggable:!0},porpStyle3:{x:400,y:100,sides:5,radius:70,fillLinearGradientStartPoint:{x:-50,y:-50},fillLinearGradientEndPoint:{x:50,y:50},fillLinearGradientColorStops:[0,"red",1,"yellow"],stroke:"black",strokeWidth:4,draggable:!0}}},created:function(){var e=this;setTimeout((function(){e.initialize()}),20)},methods:{initialize:function(){var e=this.pageStage,t=this.pageLayer[0].layer,n=new s.a.RegularPolygon(this.porpStyle1);n.on("mouseenter",(function(){e.container().style.cursor="pointer"})),n.on("mouseleave",(function(){e.container().style.cursor="default"}));var r=new s.a.RegularPolygon(this.porpStyle2);r.on("mouseenter",(function(){e.container().style.cursor="move"})),r.on("mouseleave",(function(){e.container().style.cursor="default"}));var a=new s.a.RegularPolygon(this.porpStyle3);a.on("mouseenter",(function(){e.container().style.cursor="crosshair"})),a.on("mouseleave",(function(){e.container().style.cursor="default"})),t.add(n),t.add(r),t.add(a),t.batchDraw()}}},c=l,u=n("2877"),d=Object(u["a"])(c,r,a,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0c8db9.6bdb412e.js.map