(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["layout"],{"057f":function(t,e,n){var r=n("fc6a"),o=n("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?c(t):o(r(t))}},"0966":function(t,e,n){"use strict";n("b185")},"159b":function(t,e,n){var r=n("da84"),o=n("fdbc"),i=n("17c2"),a=n("9112");for(var c in o){var u=r[c],s=u&&u.prototype;if(s&&s.forEach!==i)try{a(s,"forEach",i)}catch(f){s.forEach=i}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,o=n("a640"),i=n("ae40"),a=o("forEach"),c=i("forEach");t.exports=a&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),i=n("2d00"),a=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"25d6":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"eshop-home"},[n("a-layout",{staticClass:"eshop-home-container",staticStyle:{"min-height":"100vh"}},[n("a-layout-sider",{attrs:{trigger:null,collapsible:""},model:{value:t.collapsed,callback:function(e){t.collapsed=e},expression:"collapsed"}},[n("SiderMenu",{attrs:{collapsed:t.collapsed}})],1),n("a-layout",[n("a-layout-header",{staticStyle:{background:"#fff",padding:"0"}},[n("a-icon",{staticClass:"trigger",attrs:{type:t.collapsed?"menu-unfold":"menu-fold"},on:{click:function(e){t.collapsed=!t.collapsed}}}),n("Header")],1),n("a-layout-content",{style:{margin:"24px 16px",padding:"24px",background:"#fff"}},[n("router-view")],1),n("a-layout-footer",{staticStyle:{"text-align":"center"}},[n("Footer")],1)],1)],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",[n("a-icon",{attrs:{type:"user"}}),n("a-dropdown",[n("a",{staticClass:"ant-dropdown-link",on:{click:function(t){return t.preventDefault()}}},[n("span",[t._v("Admin")]),n("a-icon",{attrs:{type:"down"}})],1),n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[n("a-menu-item",[n("a",{attrs:{href:"javascript:;"}},[t._v("1st menu item")])]),n("a-menu-item",[n("a",{attrs:{href:"javascript:;"}},[t._v("2nd menu item")])]),n("a-menu-item",[n("a",{attrs:{href:"javascript:;"}},[t._v("3rd menu item")])])],1)],1)],1)])},a=[],c={},u=c,s=(n("d5ce"),n("2877")),f=Object(s["a"])(u,i,a,!1,null,null,null),l=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("Eshop Manage ©2020 Created by ...")])},p=[],h={},b=h,v=Object(s["a"])(b,d,p,!1,null,null,null),y=v.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"auto"}},[n("a-menu",{attrs:{selectedKeys:t.selectedKeys,openKeys:t.openKeys,mode:"inline",theme:"dark"},on:{"update:openKeys":function(e){t.openKeys=e},"update:open-keys":function(e){t.openKeys=e}}},[t._l(t.menuData,(function(e){return[e.children?n("sub-menu",{key:e.path,attrs:{"menu-info":e}}):n("a-menu-item",{key:e.path,on:{click:function(n){return t.$router.push({path:e.path})}}},[e.meta.icon?n("a-icon",{attrs:{type:e.meta.icon}}):t._e(),n("span",[t._v(t._s(e.meta.title))])],1)]}))],2)],1)},g=[];n("99af"),n("4160"),n("b0c0"),n("159b");function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function O(t){if(Array.isArray(t))return S(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");function w(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("fb6a"),n("25f0");function x(t,e){if(t){if("string"===typeof t)return S(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(t,e):void 0}}function j(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function A(t){return O(t)||w(t)||x(t)||j()}n("4de4"),n("e439"),n("dbb4"),n("b64b");function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(Object(n),!0).forEach((function(e){E(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var L=function(t,e){var n=e._c;return n("a-sub-menu",{key:e.props.menuInfo.path},[n("span",{attrs:{slot:"title"},slot:"title"},[e.props.menuInfo.meta.icon?n("a-icon",{attrs:{type:e.props.menuInfo.meta.icon}}):e._e(),n("span",[e._v(e._s(e.props.menuInfo.meta.title))])],1),e._l(e.props.menuInfo.children,(function(t){return[t.children?n("sub-menu",{key:t.path,attrs:{"menu-info":t}}):n("a-menu-item",{key:t.path,on:{click:function(n){return e.parent.$router.push({path:t.path})}}},[n("span",[e._v(e._s(t.meta.title))])])]}))],2)},_=[],P={props:["menuInfo"]},k=P,K=Object(s["a"])(k,L,_,!0,null,null,null),D=K.exports,T={props:{collapsed:{type:Boolean,default:!1}},components:{"sub-menu":D},watch:{"$route.path":function(t){this.selectedKeys=this.selectedKeysMap[t],this.openKeys=this.collapsed?[]:this.openKeysMap[t]},collapsed:function(t){t?(this.cacheOpenKeys=this.openKeys,this.openKeys=[]):this.openKeys=this.cacheOpenKeys}},data:function(){this.selectedKeysMap={},this.openKeysMap={};var t=this.getMenuData(this.$router.options.routes);return{menuData:t,selectedKeys:this.selectedKeysMap[this.$route.path],openKeys:this.collapsed?[]:this.openKeysMap[this.$route.path]}},methods:{toggleCollapsed:function(){this.collapsed=!this.collapsed},getMenuData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0,o=[];return e.forEach((function(e){if(e.name&&!e.hideInMenu){t.openKeysMap[e.path]=n,t.selectedKeysMap[e.path]=[r||e.path];var i=C({},e);delete i.children,e.children&&!e.hideChildrenInMenu?i.children=t.getMenuData(e.children,[].concat(A(n),[e.path])):t.getMenuData(e.children,r?n:[].concat(A(n),[e.path]),r||e.path),o.push(i)}else e.hideInMenu||e.hideChildrenInMenu||!e.children||o.push.apply(o,A(t.getMenuData(e.children,[].concat(A(n),[e.path]))))})),o}}},I=T,N=Object(s["a"])(I,m,g,!1,null,null,null),$=N.exports,R={data:function(){return{collapsed:!1,routes:[{path:"index",breadcrumbName:"home"},{path:"first",breadcrumbName:"first",children:[{path:"/general",breadcrumbName:"General"},{path:"/layout",breadcrumbName:"Layout"},{path:"/navigation",breadcrumbName:"Navigation"}]},{path:"second",breadcrumbName:"second"}]}},components:{Header:l,Footer:y,SiderMenu:$}},F=R,V=(n("0966"),Object(s["a"])(F,r,o,!1,null,"2cc00f10",null));e["default"]=V.exports},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),o=n("825a"),i=n("d039"),a=n("ad6d"),c="toString",u=RegExp.prototype,s=u[c],f=i((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),l=s.name!=c;(f||l)&&r(RegExp.prototype,c,(function(){var t=o(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in u)?a.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,o=n("69f3"),i=n("7dd0"),a="String Iterator",c=o.set,u=o.getterFor(a);i(String,"String",(function(t){c(this,{type:a,string:String(t),index:0})}),(function(){var t,e=u(this),n=e.string,o=e.index;return o>=n.length?{value:void 0,done:!0}:(t=r(n,o),e.index+=t.length,{value:t,done:!1})}))},4160:function(t,e,n){"use strict";var r=n("23e7"),o=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},4632:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"desc"},[t._v("Ant Design Vue")]),n("router-view")],1)},o=[],i={},a=i,c=n("2877"),u=Object(c["a"])(a,r,o,!1,null,null,null);e["default"]=u.exports},"4de4":function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").filter,i=n("1dde"),a=n("ae40"),c=i("filter"),u=a("filter");r({target:"Array",proto:!0,forced:!c||!u},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,n){"use strict";var r=n("0366"),o=n("7b0b"),i=n("9bdd"),a=n("e95a"),c=n("50c4"),u=n("8418"),s=n("35a1");t.exports=function(t){var e,n,f,l,d,p,h=o(t),b="function"==typeof this?this:Array,v=arguments.length,y=v>1?arguments[1]:void 0,m=void 0!==y,g=s(h),S=0;if(m&&(y=r(y,v>2?arguments[2]:void 0,2)),void 0==g||b==Array&&a(g))for(e=c(h.length),n=new b(e);e>S;S++)p=m?y(h[S],S):h[S],u(n,S,p);else for(l=g.call(h),d=l.next,n=new b;!(f=d.call(l)).done;S++)p=m?i(l,y,[f.value,S],!0):f.value,u(n,S,p);return n.length=S,n}},6537:function(t,e,n){},6547:function(t,e,n){var r=n("a691"),o=n("1d80"),i=function(t){return function(e,n){var i,a,c=String(o(e)),u=r(n),s=c.length;return u<0||u>=s?t?"":void 0:(i=c.charCodeAt(u),i<55296||i>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):i:t?c.slice(u,u+2):a-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"65f0":function(t,e,n){var r=n("861d"),o=n("e8b5"),i=n("b622"),a=i("species");t.exports=function(t,e){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"746f":function(t,e,n){var r=n("428f"),o=n("5135"),i=n("e5383"),a=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},8418:function(t,e,n){"use strict";var r=n("c04e"),o=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var a=r(e);a in t?o.f(t,a,i(0,n)):t[a]=n}},"99af":function(t,e,n){"use strict";var r=n("23e7"),o=n("d039"),i=n("e8b5"),a=n("861d"),c=n("7b0b"),u=n("50c4"),s=n("8418"),f=n("65f0"),l=n("1dde"),d=n("b622"),p=n("2d00"),h=d("isConcatSpreadable"),b=9007199254740991,v="Maximum allowed index exceeded",y=p>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),m=l("concat"),g=function(t){if(!a(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)},S=!y||!m;r({target:"Array",proto:!0,forced:S},{concat:function(t){var e,n,r,o,i,a=c(this),l=f(a,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?a:arguments[e],g(i)){if(o=u(i.length),d+o>b)throw TypeError(v);for(n=0;n<o;n++,d++)n in i&&s(l,d,i[n])}else{if(d>=b)throw TypeError(v);s(l,d++,i)}return l.length=d,l}})},"9bdd":function(t,e,n){var r=n("825a"),o=n("2a62");t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(a){throw o(t),a}}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),i=n("d066"),a=n("c430"),c=n("83ab"),u=n("4930"),s=n("fdbf"),f=n("d039"),l=n("5135"),d=n("e8b5"),p=n("861d"),h=n("825a"),b=n("7b0b"),v=n("fc6a"),y=n("c04e"),m=n("5c6c"),g=n("7c73"),S=n("df75"),O=n("241c"),w=n("057f"),x=n("7418"),j=n("06cf"),A=n("9bf2"),E=n("d1e7"),M=n("9112"),C=n("6eeb"),L=n("5692"),_=n("f772"),P=n("d012"),k=n("90e3"),K=n("b622"),D=n("e5383"),T=n("746f"),I=n("d44e"),N=n("69f3"),$=n("b727").forEach,R=_("hidden"),F="Symbol",V="prototype",G=K("toPrimitive"),H=N.set,J=N.getterFor(F),B=Object[V],q=o.Symbol,Q=i("JSON","stringify"),U=j.f,W=A.f,z=w.f,X=E.f,Y=L("symbols"),Z=L("op-symbols"),tt=L("string-to-symbol-registry"),et=L("symbol-to-string-registry"),nt=L("wks"),rt=o.QObject,ot=!rt||!rt[V]||!rt[V].findChild,it=c&&f((function(){return 7!=g(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=U(B,e);r&&delete B[e],W(t,e,n),r&&t!==B&&W(B,e,r)}:W,at=function(t,e){var n=Y[t]=g(q[V]);return H(n,{type:F,tag:t,description:e}),c||(n.description=e),n},ct=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},ut=function(t,e,n){t===B&&ut(Z,e,n),h(t);var r=y(e,!0);return h(n),l(Y,r)?(n.enumerable?(l(t,R)&&t[R][r]&&(t[R][r]=!1),n=g(n,{enumerable:m(0,!1)})):(l(t,R)||W(t,R,m(1,{})),t[R][r]=!0),it(t,r,n)):W(t,r,n)},st=function(t,e){h(t);var n=v(e),r=S(n).concat(ht(n));return $(r,(function(e){c&&!lt.call(n,e)||ut(t,e,n[e])})),t},ft=function(t,e){return void 0===e?g(t):st(g(t),e)},lt=function(t){var e=y(t,!0),n=X.call(this,e);return!(this===B&&l(Y,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(Y,e)||l(this,R)&&this[R][e])||n)},dt=function(t,e){var n=v(t),r=y(e,!0);if(n!==B||!l(Y,r)||l(Z,r)){var o=U(n,r);return!o||!l(Y,r)||l(n,R)&&n[R][r]||(o.enumerable=!0),o}},pt=function(t){var e=z(v(t)),n=[];return $(e,(function(t){l(Y,t)||l(P,t)||n.push(t)})),n},ht=function(t){var e=t===B,n=z(e?Z:v(t)),r=[];return $(n,(function(t){!l(Y,t)||e&&!l(B,t)||r.push(Y[t])})),r};if(u||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=k(t),n=function(t){this===B&&n.call(Z,t),l(this,R)&&l(this[R],e)&&(this[R][e]=!1),it(this,e,m(1,t))};return c&&ot&&it(B,e,{configurable:!0,set:n}),at(e,t)},C(q[V],"toString",(function(){return J(this).tag})),C(q,"withoutSetter",(function(t){return at(k(t),t)})),E.f=lt,A.f=ut,j.f=dt,O.f=w.f=pt,x.f=ht,D.f=function(t){return at(K(t),t)},c&&(W(q[V],"description",{configurable:!0,get:function(){return J(this).description}}),a||C(B,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:q}),$(S(nt),(function(t){T(t)})),r({target:F,stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=q(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!c},{create:ft,defineProperty:ut,defineProperties:st,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:pt,getOwnPropertySymbols:ht}),r({target:"Object",stat:!0,forced:f((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(b(t))}}),Q){var bt=!u||f((function(){var t=q();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));r({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,n){var r,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(r=e,(p(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ct(e))return e}),o[1]=e,Q.apply(null,o)}})}q[V][G]||M(q[V],G,q[V].valueOf),I(q,F),P[R]=!0},a630:function(t,e,n){var r=n("23e7"),o=n("4df4"),i=n("1c7e"),a=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:a},{from:o})},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,n){var r=n("83ab"),o=n("d039"),i=n("5135"),a=Object.defineProperty,c={},u=function(t){throw t};t.exports=function(t,e){if(i(c,t))return c[t];e||(e={});var n=[][t],s=!!i(e,"ACCESSORS")&&e.ACCESSORS,f=i(e,0)?e[0]:u,l=i(e,1)?e[1]:void 0;return c[t]=!!n&&!o((function(){if(s&&!r)return!0;var t={length:-1};s?a(t,1,{enumerable:!0,get:u}):t[1]=1,n.call(t,f,l)}))}},b0c0:function(t,e,n){var r=n("83ab"),o=n("9bf2").f,i=Function.prototype,a=i.toString,c=/^\s*function ([^ (]*)/,u="name";r&&!(u in i)&&o(i,u,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},b185:function(t,e,n){},b64b:function(t,e,n){var r=n("23e7"),o=n("7b0b"),i=n("df75"),a=n("d039"),c=a((function(){i(1)}));r({target:"Object",stat:!0,forced:c},{keys:function(t){return i(o(t))}})},b727:function(t,e,n){var r=n("0366"),o=n("44ad"),i=n("7b0b"),a=n("50c4"),c=n("65f0"),u=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,f=4==t,l=6==t,d=7==t,p=5==t||l;return function(h,b,v,y){for(var m,g,S=i(h),O=o(S),w=r(b,v,3),x=a(O.length),j=0,A=y||c,E=e?A(h,x):n||d?A(h,0):void 0;x>j;j++)if((p||j in O)&&(m=O[j],g=w(m,j,S),t))if(e)E[j]=g;else if(g)switch(t){case 3:return!0;case 5:return m;case 6:return j;case 2:u.call(E,m)}else switch(t){case 4:return!1;case 7:u.call(E,m)}return l?-1:s||f?f:E}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},d28b:function(t,e,n){var r=n("746f");r("iterator")},d5ce:function(t,e,n){"use strict";n("6537")},dbb4:function(t,e,n){var r=n("23e7"),o=n("83ab"),i=n("56ef"),a=n("fc6a"),c=n("06cf"),u=n("8418");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,n,r=a(t),o=c.f,s=i(r),f={},l=0;while(s.length>l)n=o(r,e=s[l++]),void 0!==n&&u(f,e,n);return f}})},ddb0:function(t,e,n){var r=n("da84"),o=n("fdbc"),i=n("e260"),a=n("9112"),c=n("b622"),u=c("iterator"),s=c("toStringTag"),f=i.values;for(var l in o){var d=r[l],p=d&&d.prototype;if(p){if(p[u]!==f)try{a(p,u,f)}catch(b){p[u]=f}if(p[s]||a(p,s,l),o[l])for(var h in i)if(p[h]!==i[h])try{a(p,h,i[h])}catch(b){p[h]=i[h]}}}},e01a:function(t,e,n){"use strict";var r=n("23e7"),o=n("83ab"),i=n("da84"),a=n("5135"),c=n("861d"),u=n("9bf2").f,s=n("e893"),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};s(d,f);var p=d.prototype=f.prototype;p.constructor=d;var h=p.toString,b="Symbol(test)"==String(f("test")),v=/^Symbol\((.*)\)[^)]+$/;u(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=h.call(t);if(a(l,t))return"";var n=b?e.slice(7,-1):e.replace(v,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},e439:function(t,e,n){var r=n("23e7"),o=n("d039"),i=n("fc6a"),a=n("06cf").f,c=n("83ab"),u=o((function(){a(1)})),s=!c||u;r({target:"Object",stat:!0,forced:s,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(i(t),e)}})},e5383:function(t,e,n){var r=n("b622");e.f=r},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fb6a:function(t,e,n){"use strict";var r=n("23e7"),o=n("861d"),i=n("e8b5"),a=n("23cb"),c=n("50c4"),u=n("fc6a"),s=n("8418"),f=n("b622"),l=n("1dde"),d=n("ae40"),p=l("slice"),h=d("slice",{ACCESSORS:!0,0:0,1:2}),b=f("species"),v=[].slice,y=Math.max;r({target:"Array",proto:!0,forced:!p||!h},{slice:function(t,e){var n,r,f,l=u(this),d=c(l.length),p=a(t,d),h=a(void 0===e?d:e,d);if(i(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?o(n)&&(n=n[b],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return v.call(l,p,h);for(r=new(void 0===n?Array:n)(y(h-p,0)),f=0;p<h;p++,f++)p in l&&s(r,f,l[p]);return r.length=f,r}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=layout.d013cbe7.js.map