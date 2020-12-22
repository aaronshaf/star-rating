(this["webpackJsonpstar-rating-example"]=this["webpackJsonpstar-rating-example"]||[]).push([[0],[,,,function(e,t,n){e.exports=n(12)},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(4);var a=n(0),r=n.n(a),o=n(2),i=n.n(o),c=n(1),u=function(e){var t,n,o,i,u=e.size,l=e.fillPercentage,s=e.inKeyboardMode,p=e.isHighlighted,f=e.isSelected,h=e.onChange,d=e.onHover,m=Object(a.useState)(!1),g=Object(c.a)(m,2),v=g[0],C=g[1],b=Object(a.useState)((function(){return Math.random()})),y=Object(c.a)(b,1)[0];return t=s||p||l>0?"#F3A536":"white",n=(s||p)&&l>0?1:!s&&(p||l>0)?.35:0,o=f||v?"#0099E0":"#F3A536",i=v?1.8:1,r.a.createElement("div",{className:"aaronshaf-star-rating-star",style:{display:"inline-block"},onMouseOver:function(){return d()},onPointerMove:function(){return d()},onPointerOver:function(){return d()},onMouseDown:function(e){e.preventDefault(),C(!0)},onMouseUp:function(){h(),C(!1)},onPointerUp:function(){h(),C(!1)},onMouseLeave:function(){C(!1)},onPointerCancel:function(){C(!1)},onPointerLeave:function(){C(!1)},onTouchStart:function(){d(),C(!0)},onTouchMove:function(){d()},onPointerDown:function(){d(),C(!0)},onTouchEnd:function(){h(),C(!1)}},r.a.createElement("svg",{viewBox:"0 0 24 24",style:{width:u,height:u}},r.a.createElement("filter",{id:"blurfilter-".concat(y),width:"24",height:"24"},r.a.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0.3"})),r.a.createElement("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",fill:"transparent",stroke:"#0099E0",strokeWidth:"1",opacity:f||v?1:0,style:{filter:"url(#blurfilter-".concat(y,")"),transition:"opacity 0.1s ease-in-out"}}),r.a.createElement("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",fill:t,stroke:o,strokeWidth:i,fillOpacity:n,style:{transition:"stroke-width 0.1s ease-in-out"}})))},l={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"},s=function(e){var t=e.size,n=e.children,o=function(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){e.current=!1}),[]),e.current}(),i=r.a.Children.only(n),s=Object(a.useRef)(null),p=Object(a.useState)(i.props.value),f=Object(c.a)(p,2),h=f[0],d=f[1],m=Object(a.useState)(i.props.value),g=Object(c.a)(m,2),v=g[0],C=g[1],b=Object(a.useState)(!1),y=Object(c.a)(b,2),E=y[0],O=y[1],w=Object(a.useState)(!1),M=Object(c.a)(w,2),L=M[0],j=M[1],x=r.a.cloneElement(i,{value:h,ref:function(e){return e&&(s.current=e),e},inputMode:"none",style:l,onChange:function(e){e.target.value!==h&&d(e.target.value)},onFocus:function(){O(!0)},onBlur:function(){O(!1)},onKeyDown:function(e){e.keyCode>=37&&e.keyCode<=40&&j(!0),37===e.keyCode?function(){var e=parseFloat(i.props.step)||1,t=parseFloat(i.props.min),n=parseFloat(h)-e;"undefined"!==typeof i.props.min&&n<t&&(n=t),d(n)}():39===e.keyCode&&function(){var e=parseFloat(i.props.step)||1,t=parseFloat(i.props.max),n=parseFloat(h)+e;"undefined"!==typeof i.props.max&&n>t&&(n=t),d(n)}()}});Object(a.useEffect)((function(){if(!o){var e=new CustomEvent("change");s.current&&s.current.dispatchEvent(e),i.props.onChange&&i.props.onChange(e)}}),[h]);var S=Math.ceil(parseFloat(x.props.max)||5),k=Array(S).fill(null).map((function(e,t){return t+1})).map((function(e){var n=parseFloat(x.props.value)<e?0:100;return r.a.createElement(u,{size:t||"1rem",key:e,onChange:function(){d(e)},onHover:function(){return function(e){C(e),j(!1)}(e)},isSelected:E&&Math.floor(parseFloat(x.props.value))===e,fillPercentage:n,isHighlighted:v>=e,inKeyboardMode:L})}));return r.a.createElement("div",{className:"aaronshaf-star-rating",onMouseOut:function(){return j(!0)},onClick:function(e){e.target!==x&&(e.preventDefault(),s.current&&s.current.focus(),j(!1))},onDragStart:function(){return!1},"aria-hidden":!0},x,k)},p=(n(11),function(){return r.a.createElement("div",{style:{padding:"2rem"}},r.a.createElement(s,{size:"2rem"},r.a.createElement("input",{type:"number",onChange:function(e){console.log("value changed",e.target.value)},min:"1",max:"5",step:"1",value:"0"})),r.a.createElement("pre",{style:{fontSize:"1.3rem"}},'import React, { Component } from "react";\nimport StarRating from "@aaronshaf/star-rating";\n\nconst Example = () => {\n  return (\n    <StarRating size="2rem">\n      <input\n        type="number"\n        min="1"\n        max="5"\n        step="1"\n        value="0"\n      />\n    </StarRating>\n  );\n};'),r.a.createElement("a",{href:"https://github.com/aaronshaf/star-rating",className:"github-corner","aria-label":"View source on GitHub"},r.a.createElement("svg",{width:80,height:80,viewBox:"0 0 250 250",style:{fill:"#151513",color:"#fff",position:"absolute",top:0,border:0,right:0},"aria-hidden":"true"},r.a.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),r.a.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),r.a.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"}))))});i.a.render(r.a.createElement(p,null),document.getElementById("root"))}],[[3,1,2]]]);
//# sourceMappingURL=main.7dd24332.chunk.js.map