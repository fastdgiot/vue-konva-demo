(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2253a6"],{e401:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[e._m(0),r("div",{ref:"container",staticClass:"container",attrs:{id:"container"}}),r("el-row",[r("el-col",[r("el-button",{attrs:{type:"primary"},on:{click:e.removeDom}},[e._v("remove")]),r("el-button",{attrs:{type:"primary"},on:{click:e.destroyDom}},[e._v("destroy")])],1)],1)],1)},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("清除节点（完全删除最好用destroy）")])])}],i=r("1b62"),o=r("362d"),c=r.n(o),s={name:"AvoidMemoryLeaks",mixins:[i["b"]],data:function(){return{circle:null}},created:function(){var e=this;setTimeout((function(){e.addElem()}),20)},methods:{addElem:function(){var e=this.pageLayer[0].layer,t=new c.a.Circle({x:100,y:100,radius:70,fill:"red",stroke:"black",strokeWidth:4}),r=new c.a.Group({x:200,y:100});r.add(t),e.add(r),e.batchDraw(),this.circle=t},removeDom:function(){var e=this.pageLayer[0].layer;this.circle.remove(),e.batchDraw()},destroyDom:function(){var e=this.pageLayer[0].layer;this.circle.destroy(),e.batchDraw()}}},l=s,d=r("2877"),u=Object(d["a"])(l,a,n,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d2253a6.15bb286c.js.map