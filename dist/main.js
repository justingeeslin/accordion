!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){var o=n(1);t.exports=function(t){var e=this;$.extend(this,{},t),$.extend(this,new o(this));var n=this.el.find("summary");if(void 0!==n){var i=n.html();i.length>0&&(this.title=i);var r=n.siblings(),s=r.html();s.length>0&&(this.content=s)}else console.log("Could not find summary element.");this.isOpen=function(){return r.is(":visible")};"open"in document.createElement("details")||(this.el.addClass("manual"),n.on("click",function(t){void 0!==t&&void 0!==t.preventDefault&&t.preventDefault(),console.log("Toggling manually... "),e.isOpen()?(console.log("Removing open attr manually.."),e.el[0].removeAttribute("open")):(console.log("Setting open attr manually.."),e.el[0].setAttribute("open",""))}));return this}},function(t,e){t.exports=function(t){var e=this,n="",o={el:$(document.createDocumentFragment()),debug:!1,stateChange:function(t,n){e.log("Changing state from "+t+" to "+n)},preload:function(){},postload:function(){},statePreprocess:function(t){return t},destroy:function(){e.target.empty()},eventNamespace:"sensible"};return this.log=function(t){e.debug&&console.log(t)},Object.defineProperty(this,"state",{get:function(){return n},set:function(t){var e=n;return t=this.statePreprocess(t),n=t,this.stateChange(e,t),!0},enumerable:!0}),$.extend(this,o,t),this.el.attr("sensible-component",!0),t&&t.state&&(this.state=t.state),this.onAttributeChange=function(t,n){var o={attributes:!0,attributeFilter:[t],childList:!1,subtree:!1},i=function(t,e){console.log("The "+t+" attribute was modified to ",e),n(e)};if("undefined"!=typeof MutationObserver){var r=function(n){for(var o in console.log("Attribute Modified!"),n){var r=n[o];if("attributes"==r.type&&r.attributeName==t){var s=e.el.attr(t);i(t,s)}}};new MutationObserver(r).observe(e.el[0],o)}else r=function(e){console.log("Attribute Modified IE10 style"),"attrChange"in e&&e.attrName==t&&i(e.attrName,e.newValue)},console.log("Listening for attribute modified"),e.el[0].addEventListener("DOMAttrModified",r,!1)},this.onClassChange=function(t){this.onAttributeChange("class",t)},this.go=function(t){this.state=t},this}}]);