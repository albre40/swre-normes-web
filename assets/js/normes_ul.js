(()=>{var t={9662:(t,e,r)=>{var n=r(614),o=r(6330),i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not a function")}},6077:(t,e,r)=>{var n=r(614),o=String,i=TypeError;t.exports=function(t){if("object"==typeof t||n(t))return t;throw i("Can't set "+o(t)+" as a prototype")}},1223:(t,e,r)=>{var n=r(5112),o=r(30),i=r(3070).f,a=n("unscopables"),u=Array.prototype;null==u[a]&&i(u,a,{configurable:!0,value:o(null)}),t.exports=function(t){u[a][t]=!0}},9670:(t,e,r)=>{var n=r(111),o=String,i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not an object")}},8533:(t,e,r)=>{"use strict";var n=r(2092).forEach,o=r(9341)("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},8457:(t,e,r)=>{"use strict";var n=r(9974),o=r(6916),i=r(7908),a=r(3411),u=r(7659),c=r(4411),s=r(6244),l=r(6135),f=r(4121),p=r(1246),v=Array;t.exports=function(t){var e=i(t),r=c(this),d=arguments.length,y=d>1?arguments[1]:void 0,g=void 0!==y;g&&(y=n(y,d>2?arguments[2]:void 0));var h,m,b,x,S,w,O=p(e),A=0;if(!O||this===v&&u(O))for(h=s(e),m=r?new this(h):v(h);h>A;A++)w=g?y(e[A],A):e[A],l(m,A,w);else for(S=(x=f(e,O)).next,m=r?new this:[];!(b=o(S,x)).done;A++)w=g?a(x,y,[b.value,A],!0):b.value,l(m,A,w);return m.length=A,m}},1318:(t,e,r)=>{var n=r(5656),o=r(1400),i=r(6244),a=function(t){return function(e,r,a){var u,c=n(e),s=i(c),l=o(a,s);if(t&&r!=r){for(;s>l;)if((u=c[l++])!=u)return!0}else for(;s>l;l++)if((t||l in c)&&c[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},2092:(t,e,r)=>{var n=r(9974),o=r(1702),i=r(8361),a=r(7908),u=r(6244),c=r(5417),s=o([].push),l=function(t){var e=1==t,r=2==t,o=3==t,l=4==t,f=6==t,p=7==t,v=5==t||f;return function(d,y,g,h){for(var m,b,x=a(d),S=i(x),w=n(y,g),O=u(S),A=0,E=h||c,j=e?E(d,O):r||p?E(d,0):void 0;O>A;A++)if((v||A in S)&&(b=w(m=S[A],A,x),t))if(e)j[A]=b;else if(b)switch(t){case 3:return!0;case 5:return m;case 6:return A;case 2:s(j,m)}else switch(t){case 4:return!1;case 7:s(j,m)}return f?-1:o||l?l:j}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},1194:(t,e,r)=>{var n=r(7293),o=r(5112),i=r(7392),a=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},9341:(t,e,r)=>{"use strict";var n=r(7293);t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){return 1},1)}))}},1589:(t,e,r)=>{var n=r(1400),o=r(6244),i=r(6135),a=Array,u=Math.max;t.exports=function(t,e,r){for(var c=o(t),s=n(e,c),l=n(void 0===r?c:r,c),f=a(u(l-s,0)),p=0;s<l;s++,p++)i(f,p,t[s]);return f.length=p,f}},206:(t,e,r)=>{var n=r(1702);t.exports=n([].slice)},7475:(t,e,r)=>{var n=r(3157),o=r(4411),i=r(111),a=r(5112)("species"),u=Array;t.exports=function(t){var e;return n(t)&&(e=t.constructor,(o(e)&&(e===u||n(e.prototype))||i(e)&&null===(e=e[a]))&&(e=void 0)),void 0===e?u:e}},5417:(t,e,r)=>{var n=r(7475);t.exports=function(t,e){return new(n(t))(0===e?0:e)}},3411:(t,e,r)=>{var n=r(9670),o=r(9212);t.exports=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(e){o(t,"throw",e)}}},7072:(t,e,r)=>{var n=r(5112)("iterator"),o=!1;try{var i=0,a={next:function(){return{done:!!i++}},return:function(){o=!0}};a[n]=function(){return this},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var r=!1;try{var i={};i[n]=function(){return{next:function(){return{done:r=!0}}}},t(i)}catch(t){}return r}},4326:(t,e,r)=>{var n=r(1702),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:(t,e,r)=>{var n=r(1694),o=r(614),i=r(4326),a=r(5112)("toStringTag"),u=Object,c="Arguments"==i(function(){return arguments}());t.exports=n?i:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=u(t),a))?r:c?i(e):"Object"==(n=i(e))&&o(e.callee)?"Arguments":n}},9920:(t,e,r)=>{var n=r(2597),o=r(3887),i=r(1236),a=r(3070);t.exports=function(t,e,r){for(var u=o(e),c=a.f,s=i.f,l=0;l<u.length;l++){var f=u[l];n(t,f)||r&&n(r,f)||c(t,f,s(e,f))}}},8544:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},6178:t=>{t.exports=function(t,e){return{value:t,done:e}}},8880:(t,e,r)=>{var n=r(9781),o=r(3070),i=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6135:(t,e,r)=>{"use strict";var n=r(4948),o=r(3070),i=r(9114);t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},7045:(t,e,r)=>{var n=r(6339),o=r(3070);t.exports=function(t,e,r){return r.get&&n(r.get,e,{getter:!0}),r.set&&n(r.set,e,{setter:!0}),o.f(t,e,r)}},8052:(t,e,r)=>{var n=r(614),o=r(3070),i=r(6339),a=r(3072);t.exports=function(t,e,r,u){u||(u={});var c=u.enumerable,s=void 0!==u.name?u.name:e;if(n(r)&&i(r,s,u),u.global)c?t[e]=r:a(e,r);else{try{u.unsafe?t[e]&&(c=!0):delete t[e]}catch(t){}c?t[e]=r:o.f(t,e,{value:r,enumerable:!1,configurable:!u.nonConfigurable,writable:!u.nonWritable})}return t}},3072:(t,e,r)=>{var n=r(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},9781:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:t=>{var e="object"==typeof document&&document.all,r=void 0===e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:r}},317:(t,e,r)=>{var n=r(7854),o=r(111),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:(t,e,r)=>{var n=r(317)("span").classList,o=n&&n.constructor&&n.constructor.prototype;t.exports=o===Object.prototype?void 0:o},8113:t=>{t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:(t,e,r)=>{var n,o,i=r(7854),a=r(8113),u=i.process,c=i.Deno,s=u&&u.versions||c&&c.version,l=s&&s.v8;l&&(o=(n=l.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,e,r)=>{var n=r(7854),o=r(1236).f,i=r(8880),a=r(8052),u=r(3072),c=r(9920),s=r(4705);t.exports=function(t,e){var r,l,f,p,v,d=t.target,y=t.global,g=t.stat;if(r=y?n:g?n[d]||u(d,{}):(n[d]||{}).prototype)for(l in e){if(p=e[l],f=t.dontCallGetSet?(v=o(r,l))&&v.value:r[l],!s(y?l:d+(g?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;c(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),a(r,l,p,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},2104:(t,e,r)=>{var n=r(4374),o=Function.prototype,i=o.apply,a=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(n?a.bind(i):function(){return a.apply(i,arguments)})},9974:(t,e,r)=>{var n=r(1470),o=r(9662),i=r(4374),a=n(n.bind);t.exports=function(t,e){return o(t),void 0===e?t:i?a(t,e):function(){return t.apply(e,arguments)}}},4374:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:(t,e,r)=>{var n=r(4374),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},6530:(t,e,r)=>{var n=r(9781),o=r(2597),i=Function.prototype,a=n&&Object.getOwnPropertyDescriptor,u=o(i,"name"),c=u&&"something"===function(){}.name,s=u&&(!n||n&&a(i,"name").configurable);t.exports={EXISTS:u,PROPER:c,CONFIGURABLE:s}},5668:(t,e,r)=>{var n=r(1702),o=r(9662);t.exports=function(t,e,r){try{return n(o(Object.getOwnPropertyDescriptor(t,e)[r]))}catch(t){}}},1470:(t,e,r)=>{var n=r(4326),o=r(1702);t.exports=function(t){if("Function"===n(t))return o(t)}},1702:(t,e,r)=>{var n=r(4374),o=Function.prototype,i=o.call,a=n&&o.bind.bind(i,i);t.exports=n?a:function(t){return function(){return i.apply(t,arguments)}}},5005:(t,e,r)=>{var n=r(7854),o=r(614);t.exports=function(t,e){return arguments.length<2?(r=n[t],o(r)?r:void 0):n[t]&&n[t][e];var r}},1246:(t,e,r)=>{var n=r(648),o=r(8173),i=r(8554),a=r(7497),u=r(5112)("iterator");t.exports=function(t){if(!i(t))return o(t,u)||o(t,"@@iterator")||a[n(t)]}},4121:(t,e,r)=>{var n=r(6916),o=r(9662),i=r(9670),a=r(6330),u=r(1246),c=TypeError;t.exports=function(t,e){var r=arguments.length<2?u(t):e;if(o(r))return i(n(r,t));throw c(a(t)+" is not iterable")}},8044:(t,e,r)=>{var n=r(1702),o=r(3157),i=r(614),a=r(4326),u=r(1340),c=n([].push);t.exports=function(t){if(i(t))return t;if(o(t)){for(var e=t.length,r=[],n=0;n<e;n++){var s=t[n];"string"==typeof s?c(r,s):"number"!=typeof s&&"Number"!=a(s)&&"String"!=a(s)||c(r,u(s))}var l=r.length,f=!0;return function(t,e){if(f)return f=!1,e;if(o(this))return e;for(var n=0;n<l;n++)if(r[n]===t)return e}}}},8173:(t,e,r)=>{var n=r(9662),o=r(8554);t.exports=function(t,e){var r=t[e];return o(r)?void 0:n(r)}},7854:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},2597:(t,e,r)=>{var n=r(1702),o=r(7908),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:t=>{t.exports={}},490:(t,e,r)=>{var n=r(5005);t.exports=n("document","documentElement")},4664:(t,e,r)=>{var n=r(9781),o=r(7293),i=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,r)=>{var n=r(1702),o=r(7293),i=r(4326),a=Object,u=n("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?u(t,""):a(t)}:a},2788:(t,e,r)=>{var n=r(1702),o=r(614),i=r(5465),a=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},9909:(t,e,r)=>{var n,o,i,a=r(4811),u=r(7854),c=r(111),s=r(8880),l=r(2597),f=r(5465),p=r(6200),v=r(3501),d="Object already initialized",y=u.TypeError,g=u.WeakMap;if(a||f.state){var h=f.state||(f.state=new g);h.get=h.get,h.has=h.has,h.set=h.set,n=function(t,e){if(h.has(t))throw y(d);return e.facade=t,h.set(t,e),e},o=function(t){return h.get(t)||{}},i=function(t){return h.has(t)}}else{var m=p("state");v[m]=!0,n=function(t,e){if(l(t,m))throw y(d);return e.facade=t,s(t,m,e),e},o=function(t){return l(t,m)?t[m]:{}},i=function(t){return l(t,m)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!c(e)||(r=o(e)).type!==t)throw y("Incompatible receiver, "+t+" required");return r}}}},7659:(t,e,r)=>{var n=r(5112),o=r(7497),i=n("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[i]===t)}},3157:(t,e,r)=>{var n=r(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},614:(t,e,r)=>{var n=r(4154),o=n.all;t.exports=n.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},4411:(t,e,r)=>{var n=r(1702),o=r(7293),i=r(614),a=r(648),u=r(5005),c=r(2788),s=function(){},l=[],f=u("Reflect","construct"),p=/^\s*(?:class|function)\b/,v=n(p.exec),d=!p.exec(s),y=function(t){if(!i(t))return!1;try{return f(s,l,t),!0}catch(t){return!1}},g=function(t){if(!i(t))return!1;switch(a(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return d||!!v(p,c(t))}catch(t){return!0}};g.sham=!0,t.exports=!f||o((function(){var t;return y(y.call)||!y(Object)||!y((function(){t=!0}))||t}))?g:y},4705:(t,e,r)=>{var n=r(7293),o=r(614),i=/#|\.prototype\./,a=function(t,e){var r=c[u(t)];return r==l||r!=s&&(o(e)?n(e):!!e)},u=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=a.data={},s=a.NATIVE="N",l=a.POLYFILL="P";t.exports=a},8554:t=>{t.exports=function(t){return null==t}},111:(t,e,r)=>{var n=r(614),o=r(4154),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:n(t)||t===i}:function(t){return"object"==typeof t?null!==t:n(t)}},1913:t=>{t.exports=!1},2190:(t,e,r)=>{var n=r(5005),o=r(614),i=r(7976),a=r(3307),u=Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=n("Symbol");return o(e)&&i(e.prototype,u(t))}},9212:(t,e,r)=>{var n=r(6916),o=r(9670),i=r(8173);t.exports=function(t,e,r){var a,u;o(t);try{if(!(a=i(t,"return"))){if("throw"===e)throw r;return r}a=n(a,t)}catch(t){u=!0,a=t}if("throw"===e)throw r;if(u)throw a;return o(a),r}},3061:(t,e,r)=>{"use strict";var n=r(3383).IteratorPrototype,o=r(30),i=r(9114),a=r(8003),u=r(7497),c=function(){return this};t.exports=function(t,e,r,s){var l=e+" Iterator";return t.prototype=o(n,{next:i(+!s,r)}),a(t,l,!1,!0),u[l]=c,t}},1656:(t,e,r)=>{"use strict";var n=r(2109),o=r(6916),i=r(1913),a=r(6530),u=r(614),c=r(3061),s=r(9518),l=r(7674),f=r(8003),p=r(8880),v=r(8052),d=r(5112),y=r(7497),g=r(3383),h=a.PROPER,m=a.CONFIGURABLE,b=g.IteratorPrototype,x=g.BUGGY_SAFARI_ITERATORS,S=d("iterator"),w="keys",O="values",A="entries",E=function(){return this};t.exports=function(t,e,r,a,d,g,j){c(r,e,a);var L,I,P,T=function(t){if(t===d&&C)return C;if(!x&&t in R)return R[t];switch(t){case w:case O:case A:return function(){return new r(this,t)}}return function(){return new r(this)}},k=e+" Iterator",F=!1,R=t.prototype,q=R[S]||R["@@iterator"]||d&&R[d],C=!x&&q||T(d),_="Array"==e&&R.entries||q;if(_&&(L=s(_.call(new t)))!==Object.prototype&&L.next&&(i||s(L)===b||(l?l(L,b):u(L[S])||v(L,S,E)),f(L,k,!0,!0),i&&(y[k]=E)),h&&d==O&&q&&q.name!==O&&(!i&&m?p(R,"name",O):(F=!0,C=function(){return o(q,this)})),d)if(I={values:T(O),keys:g?C:T(w),entries:T(A)},j)for(P in I)(x||F||!(P in R))&&v(R,P,I[P]);else n({target:e,proto:!0,forced:x||F},I);return i&&!j||R[S]===C||v(R,S,C,{name:d}),y[e]=C,I}},3383:(t,e,r)=>{"use strict";var n,o,i,a=r(7293),u=r(614),c=r(111),s=r(30),l=r(9518),f=r(8052),p=r(5112),v=r(1913),d=p("iterator"),y=!1;[].keys&&("next"in(i=[].keys())?(o=l(l(i)))!==Object.prototype&&(n=o):y=!0),!c(n)||a((function(){var t={};return n[d].call(t)!==t}))?n={}:v&&(n=s(n)),u(n[d])||f(n,d,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:y}},7497:t=>{t.exports={}},6244:(t,e,r)=>{var n=r(7466);t.exports=function(t){return n(t.length)}},6339:(t,e,r)=>{var n=r(1702),o=r(7293),i=r(614),a=r(2597),u=r(9781),c=r(6530).CONFIGURABLE,s=r(2788),l=r(9909),f=l.enforce,p=l.get,v=String,d=Object.defineProperty,y=n("".slice),g=n("".replace),h=n([].join),m=u&&!o((function(){return 8!==d((function(){}),"length",{value:8}).length})),b=String(String).split("String"),x=t.exports=function(t,e,r){"Symbol("===y(v(e),0,7)&&(e="["+g(v(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!a(t,"name")||c&&t.name!==e)&&(u?d(t,"name",{value:e,configurable:!0}):t.name=e),m&&r&&a(r,"arity")&&t.length!==r.arity&&d(t,"length",{value:r.arity});try{r&&a(r,"constructor")&&r.constructor?u&&d(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=f(t);return a(n,"source")||(n.source=h(b,"string"==typeof e?e:"")),t};Function.prototype.toString=x((function(){return i(this)&&p(this).source||s(this)}),"toString")},4758:t=>{var e=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?r:e)(n)}},30:(t,e,r)=>{var n,o=r(9670),i=r(6048),a=r(748),u=r(3501),c=r(490),s=r(317),l=r(6200),f="prototype",p="script",v=l("IE_PROTO"),d=function(){},y=function(t){return"<"+p+">"+t+"</"+p+">"},g=function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e},h=function(){try{n=new ActiveXObject("htmlfile")}catch(t){}var t,e,r;h="undefined"!=typeof document?document.domain&&n?g(n):(e=s("iframe"),r="java"+p+":",e.style.display="none",c.appendChild(e),e.src=String(r),(t=e.contentWindow.document).open(),t.write(y("document.F=Object")),t.close(),t.F):g(n);for(var o=a.length;o--;)delete h[f][a[o]];return h()};u[v]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(d[f]=o(t),r=new d,d[f]=null,r[v]=t):r=h(),void 0===e?r:i.f(r,e)}},6048:(t,e,r)=>{var n=r(9781),o=r(3353),i=r(3070),a=r(9670),u=r(5656),c=r(1956);e.f=n&&!o?Object.defineProperties:function(t,e){a(t);for(var r,n=u(e),o=c(e),s=o.length,l=0;s>l;)i.f(t,r=o[l++],n[r]);return t}},3070:(t,e,r)=>{var n=r(9781),o=r(4664),i=r(3353),a=r(9670),u=r(4948),c=TypeError,s=Object.defineProperty,l=Object.getOwnPropertyDescriptor,f="enumerable",p="configurable",v="writable";e.f=n?i?function(t,e,r){if(a(t),e=u(e),a(r),"function"==typeof t&&"prototype"===e&&"value"in r&&v in r&&!r[v]){var n=l(t,e);n&&n[v]&&(t[e]=r.value,r={configurable:p in r?r[p]:n[p],enumerable:f in r?r[f]:n[f],writable:!1})}return s(t,e,r)}:s:function(t,e,r){if(a(t),e=u(e),a(r),o)try{return s(t,e,r)}catch(t){}if("get"in r||"set"in r)throw c("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:(t,e,r)=>{var n=r(9781),o=r(6916),i=r(5296),a=r(9114),u=r(5656),c=r(4948),s=r(2597),l=r(4664),f=Object.getOwnPropertyDescriptor;e.f=n?f:function(t,e){if(t=u(t),e=c(e),l)try{return f(t,e)}catch(t){}if(s(t,e))return a(!o(i.f,t,e),t[e])}},1156:(t,e,r)=>{var n=r(4326),o=r(5656),i=r(8006).f,a=r(1589),u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"Window"==n(t)?function(t){try{return i(t)}catch(t){return a(u)}}(t):i(o(t))}},8006:(t,e,r)=>{var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},9518:(t,e,r)=>{var n=r(2597),o=r(614),i=r(7908),a=r(6200),u=r(8544),c=a("IE_PROTO"),s=Object,l=s.prototype;t.exports=u?s.getPrototypeOf:function(t){var e=i(t);if(n(e,c))return e[c];var r=e.constructor;return o(r)&&e instanceof r?r.prototype:e instanceof s?l:null}},7976:(t,e,r)=>{var n=r(1702);t.exports=n({}.isPrototypeOf)},6324:(t,e,r)=>{var n=r(1702),o=r(2597),i=r(5656),a=r(1318).indexOf,u=r(3501),c=n([].push);t.exports=function(t,e){var r,n=i(t),s=0,l=[];for(r in n)!o(u,r)&&o(n,r)&&c(l,r);for(;e.length>s;)o(n,r=e[s++])&&(~a(l,r)||c(l,r));return l}},1956:(t,e,r)=>{var n=r(6324),o=r(748);t.exports=Object.keys||function(t){return n(t,o)}},5296:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},7674:(t,e,r)=>{var n=r(5668),o=r(9670),i=r(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=n(Object.prototype,"__proto__","set"))(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return o(r),i(n),e?t(r,n):r.__proto__=n,r}}():void 0)},288:(t,e,r)=>{"use strict";var n=r(1694),o=r(648);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},2140:(t,e,r)=>{var n=r(6916),o=r(614),i=r(111),a=TypeError;t.exports=function(t,e){var r,u;if("string"===e&&o(r=t.toString)&&!i(u=n(r,t)))return u;if(o(r=t.valueOf)&&!i(u=n(r,t)))return u;if("string"!==e&&o(r=t.toString)&&!i(u=n(r,t)))return u;throw a("Can't convert object to primitive value")}},3887:(t,e,r)=>{var n=r(5005),o=r(1702),i=r(8006),a=r(5181),u=r(9670),c=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=i.f(u(t)),r=a.f;return r?c(e,r(t)):e}},857:(t,e,r)=>{var n=r(7854);t.exports=n},2261:(t,e,r)=>{"use strict";var n,o,i=r(6916),a=r(1702),u=r(1340),c=r(7066),s=r(2999),l=r(2309),f=r(30),p=r(9909).get,v=r(9441),d=r(7168),y=l("native-string-replace",String.prototype.replace),g=RegExp.prototype.exec,h=g,m=a("".charAt),b=a("".indexOf),x=a("".replace),S=a("".slice),w=(o=/b*/g,i(g,n=/a/,"a"),i(g,o,"a"),0!==n.lastIndex||0!==o.lastIndex),O=s.BROKEN_CARET,A=void 0!==/()??/.exec("")[1];(w||A||O||v||d)&&(h=function(t){var e,r,n,o,a,s,l,v=this,d=p(v),E=u(t),j=d.raw;if(j)return j.lastIndex=v.lastIndex,e=i(h,j,E),v.lastIndex=j.lastIndex,e;var L=d.groups,I=O&&v.sticky,P=i(c,v),T=v.source,k=0,F=E;if(I&&(P=x(P,"y",""),-1===b(P,"g")&&(P+="g"),F=S(E,v.lastIndex),v.lastIndex>0&&(!v.multiline||v.multiline&&"\n"!==m(E,v.lastIndex-1))&&(T="(?: "+T+")",F=" "+F,k++),r=new RegExp("^(?:"+T+")",P)),A&&(r=new RegExp("^"+T+"$(?!\\s)",P)),w&&(n=v.lastIndex),o=i(g,I?r:v,F),I?o?(o.input=S(o.input,k),o[0]=S(o[0],k),o.index=v.lastIndex,v.lastIndex+=o[0].length):v.lastIndex=0:w&&o&&(v.lastIndex=v.global?o.index+o[0].length:n),A&&o&&o.length>1&&i(y,o[0],r,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(o[a]=void 0)})),o&&L)for(o.groups=s=f(null),a=0;a<L.length;a++)s[(l=L[a])[0]]=o[l[1]];return o}),t.exports=h},7066:(t,e,r)=>{"use strict";var n=r(9670);t.exports=function(){var t=n(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},2999:(t,e,r)=>{var n=r(7293),o=r(7854).RegExp,i=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),a=i||n((function(){return!o("a","y").sticky})),u=i||n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:u,MISSED_STICKY:a,UNSUPPORTED_Y:i}},9441:(t,e,r)=>{var n=r(7293),o=r(7854).RegExp;t.exports=n((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},7168:(t,e,r)=>{var n=r(7293),o=r(7854).RegExp;t.exports=n((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},4488:(t,e,r)=>{var n=r(8554),o=TypeError;t.exports=function(t){if(n(t))throw o("Can't call method on "+t);return t}},8003:(t,e,r)=>{var n=r(3070).f,o=r(2597),i=r(5112)("toStringTag");t.exports=function(t,e,r){t&&!r&&(t=t.prototype),t&&!o(t,i)&&n(t,i,{configurable:!0,value:e})}},6200:(t,e,r)=>{var n=r(2309),o=r(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,e,r)=>{var n=r(7854),o=r(3072),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},2309:(t,e,r)=>{var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.29.0",mode:n?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.29.0/LICENSE",source:"https://github.com/zloirock/core-js"})},8710:(t,e,r)=>{var n=r(1702),o=r(9303),i=r(1340),a=r(4488),u=n("".charAt),c=n("".charCodeAt),s=n("".slice),l=function(t){return function(e,r){var n,l,f=i(a(e)),p=o(r),v=f.length;return p<0||p>=v?t?"":void 0:(n=c(f,p))<55296||n>56319||p+1===v||(l=c(f,p+1))<56320||l>57343?t?u(f,p):n:t?s(f,p,p+2):l-56320+(n-55296<<10)+65536}};t.exports={codeAt:l(!1),charAt:l(!0)}},6293:(t,e,r)=>{var n=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},6532:(t,e,r)=>{var n=r(6916),o=r(5005),i=r(5112),a=r(8052);t.exports=function(){var t=o("Symbol"),e=t&&t.prototype,r=e&&e.valueOf,u=i("toPrimitive");e&&!e[u]&&a(e,u,(function(t){return n(r,this)}),{arity:1})}},2015:(t,e,r)=>{var n=r(6293);t.exports=n&&!!Symbol.for&&!!Symbol.keyFor},1400:(t,e,r)=>{var n=r(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},5656:(t,e,r)=>{var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9303:(t,e,r)=>{var n=r(4758);t.exports=function(t){var e=+t;return e!=e||0===e?0:n(e)}},7466:(t,e,r)=>{var n=r(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,e,r)=>{var n=r(4488),o=Object;t.exports=function(t){return o(n(t))}},7593:(t,e,r)=>{var n=r(6916),o=r(111),i=r(2190),a=r(8173),u=r(2140),c=r(5112),s=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!o(t)||i(t))return t;var r,c=a(t,l);if(c){if(void 0===e&&(e="default"),r=n(c,t,e),!o(r)||i(r))return r;throw s("Can't convert object to primitive value")}return void 0===e&&(e="number"),u(t,e)}},4948:(t,e,r)=>{var n=r(7593),o=r(2190);t.exports=function(t){var e=n(t,"string");return o(e)?e:e+""}},1694:(t,e,r)=>{var n={};n[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},1340:(t,e,r)=>{var n=r(648),o=String;t.exports=function(t){if("Symbol"===n(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},6330:t=>{var e=String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},9711:(t,e,r)=>{var n=r(1702),o=0,i=Math.random(),a=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},3307:(t,e,r)=>{var n=r(6293);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:(t,e,r)=>{var n=r(9781),o=r(7293);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:(t,e,r)=>{var n=r(7854),o=r(614),i=n.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},6800:(t,e,r)=>{var n=r(857),o=r(2597),i=r(6061),a=r(3070).f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},6061:(t,e,r)=>{var n=r(5112);e.f=n},5112:(t,e,r)=>{var n=r(7854),o=r(2309),i=r(2597),a=r(9711),u=r(6293),c=r(3307),s=n.Symbol,l=o("wks"),f=c?s.for||s:s&&s.withoutSetter||a;t.exports=function(t){return i(l,t)||(l[t]=u&&i(s,t)?s[t]:f("Symbol."+t)),l[t]}},1038:(t,e,r)=>{var n=r(2109),o=r(8457);n({target:"Array",stat:!0,forced:!r(7072)((function(t){Array.from(t)}))},{from:o})},6992:(t,e,r)=>{"use strict";var n=r(5656),o=r(1223),i=r(7497),a=r(9909),u=r(3070).f,c=r(1656),s=r(6178),l=r(1913),f=r(9781),p="Array Iterator",v=a.set,d=a.getterFor(p);t.exports=c(Array,"Array",(function(t,e){v(this,{type:p,target:n(t),index:0,kind:e})}),(function(){var t=d(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,s(void 0,!0)):s("keys"==r?n:"values"==r?e[n]:[n,e[n]],!1)}),"values");var y=i.Arguments=i.Array;if(o("keys"),o("values"),o("entries"),!l&&f&&"values"!==y.name)try{u(y,"name",{value:"values"})}catch(t){}},7042:(t,e,r)=>{"use strict";var n=r(2109),o=r(3157),i=r(4411),a=r(111),u=r(1400),c=r(6244),s=r(5656),l=r(6135),f=r(5112),p=r(1194),v=r(206),d=p("slice"),y=f("species"),g=Array,h=Math.max;n({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var r,n,f,p=s(this),d=c(p),m=u(t,d),b=u(void 0===e?d:e,d);if(o(p)&&(r=p.constructor,(i(r)&&(r===g||o(r.prototype))||a(r)&&null===(r=r[y]))&&(r=void 0),r===g||void 0===r))return v(p,m,b);for(n=new(void 0===r?g:r)(h(b-m,0)),f=0;m<b;m++,f++)m in p&&l(n,f,p[m]);return n.length=f,n}})},8309:(t,e,r)=>{var n=r(9781),o=r(6530).EXISTS,i=r(1702),a=r(7045),u=Function.prototype,c=i(u.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=i(s.exec);n&&!o&&a(u,"name",{configurable:!0,get:function(){try{return l(s,c(this))[1]}catch(t){return""}}})},8862:(t,e,r)=>{var n=r(2109),o=r(5005),i=r(2104),a=r(6916),u=r(1702),c=r(7293),s=r(614),l=r(2190),f=r(206),p=r(8044),v=r(6293),d=String,y=o("JSON","stringify"),g=u(/./.exec),h=u("".charAt),m=u("".charCodeAt),b=u("".replace),x=u(1..toString),S=/[\uD800-\uDFFF]/g,w=/^[\uD800-\uDBFF]$/,O=/^[\uDC00-\uDFFF]$/,A=!v||c((function(){var t=o("Symbol")();return"[null]"!=y([t])||"{}"!=y({a:t})||"{}"!=y(Object(t))})),E=c((function(){return'"\\udf06\\ud834"'!==y("\udf06\ud834")||'"\\udead"'!==y("\udead")})),j=function(t,e){var r=f(arguments),n=p(e);if(s(n)||void 0!==t&&!l(t))return r[1]=function(t,e){if(s(n)&&(e=a(n,this,d(t),e)),!l(e))return e},i(y,null,r)},L=function(t,e,r){var n=h(r,e-1),o=h(r,e+1);return g(w,t)&&!g(O,o)||g(O,t)&&!g(w,n)?"\\u"+x(m(t,0),16):t};y&&n({target:"JSON",stat:!0,arity:3,forced:A||E},{stringify:function(t,e,r){var n=f(arguments),o=i(A?j:y,null,n);return E&&"string"==typeof o?b(o,S,L):o}})},9660:(t,e,r)=>{var n=r(2109),o=r(6293),i=r(7293),a=r(5181),u=r(7908);n({target:"Object",stat:!0,forced:!o||i((function(){a.f(1)}))},{getOwnPropertySymbols:function(t){var e=a.f;return e?e(u(t)):[]}})},1539:(t,e,r)=>{var n=r(1694),o=r(8052),i=r(288);n||o(Object.prototype,"toString",i,{unsafe:!0})},4916:(t,e,r)=>{"use strict";var n=r(2109),o=r(2261);n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},8783:(t,e,r)=>{"use strict";var n=r(8710).charAt,o=r(1340),i=r(9909),a=r(1656),u=r(6178),c="String Iterator",s=i.set,l=i.getterFor(c);a(String,"String",(function(t){s(this,{type:c,string:o(t),index:0})}),(function(){var t,e=l(this),r=e.string,o=e.index;return o>=r.length?u(void 0,!0):(t=n(r,o),e.index+=t.length,u(t,!1))}))},4032:(t,e,r)=>{"use strict";var n=r(2109),o=r(7854),i=r(6916),a=r(1702),u=r(1913),c=r(9781),s=r(6293),l=r(7293),f=r(2597),p=r(7976),v=r(9670),d=r(5656),y=r(4948),g=r(1340),h=r(9114),m=r(30),b=r(1956),x=r(8006),S=r(1156),w=r(5181),O=r(1236),A=r(3070),E=r(6048),j=r(5296),L=r(8052),I=r(7045),P=r(2309),T=r(6200),k=r(3501),F=r(9711),R=r(5112),q=r(6061),C=r(6800),_=r(6532),M=r(8003),D=r(9909),N=r(2092).forEach,B=T("hidden"),G="Symbol",U="prototype",z=D.set,V=D.getterFor(G),$=Object[U],H=o.Symbol,W=H&&H[U],Y=o.TypeError,K=o.QObject,X=O.f,J=A.f,Q=S.f,Z=j.f,tt=a([].push),et=P("symbols"),rt=P("op-symbols"),nt=P("wks"),ot=!K||!K[U]||!K[U].findChild,it=c&&l((function(){return 7!=m(J({},"a",{get:function(){return J(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=X($,e);n&&delete $[e],J(t,e,r),n&&t!==$&&J($,e,n)}:J,at=function(t,e){var r=et[t]=m(W);return z(r,{type:G,tag:t,description:e}),c||(r.description=e),r},ut=function(t,e,r){t===$&&ut(rt,e,r),v(t);var n=y(e);return v(r),f(et,n)?(r.enumerable?(f(t,B)&&t[B][n]&&(t[B][n]=!1),r=m(r,{enumerable:h(0,!1)})):(f(t,B)||J(t,B,h(1,{})),t[B][n]=!0),it(t,n,r)):J(t,n,r)},ct=function(t,e){v(t);var r=d(e),n=b(r).concat(pt(r));return N(n,(function(e){c&&!i(st,r,e)||ut(t,e,r[e])})),t},st=function(t){var e=y(t),r=i(Z,this,e);return!(this===$&&f(et,e)&&!f(rt,e))&&(!(r||!f(this,e)||!f(et,e)||f(this,B)&&this[B][e])||r)},lt=function(t,e){var r=d(t),n=y(e);if(r!==$||!f(et,n)||f(rt,n)){var o=X(r,n);return!o||!f(et,n)||f(r,B)&&r[B][n]||(o.enumerable=!0),o}},ft=function(t){var e=Q(d(t)),r=[];return N(e,(function(t){f(et,t)||f(k,t)||tt(r,t)})),r},pt=function(t){var e=t===$,r=Q(e?rt:d(t)),n=[];return N(r,(function(t){!f(et,t)||e&&!f($,t)||tt(n,et[t])})),n};s||(L(W=(H=function(){if(p(W,this))throw Y("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?g(arguments[0]):void 0,e=F(t),r=function(t){this===$&&i(r,rt,t),f(this,B)&&f(this[B],e)&&(this[B][e]=!1),it(this,e,h(1,t))};return c&&ot&&it($,e,{configurable:!0,set:r}),at(e,t)})[U],"toString",(function(){return V(this).tag})),L(H,"withoutSetter",(function(t){return at(F(t),t)})),j.f=st,A.f=ut,E.f=ct,O.f=lt,x.f=S.f=ft,w.f=pt,q.f=function(t){return at(R(t),t)},c&&(I(W,"description",{configurable:!0,get:function(){return V(this).description}}),u||L($,"propertyIsEnumerable",st,{unsafe:!0}))),n({global:!0,constructor:!0,wrap:!0,forced:!s,sham:!s},{Symbol:H}),N(b(nt),(function(t){C(t)})),n({target:G,stat:!0,forced:!s},{useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:function(t,e){return void 0===e?m(t):ct(m(t),e)},defineProperty:ut,defineProperties:ct,getOwnPropertyDescriptor:lt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:ft}),_(),M(H,G),k[B]=!0},1817:(t,e,r)=>{"use strict";var n=r(2109),o=r(9781),i=r(7854),a=r(1702),u=r(2597),c=r(614),s=r(7976),l=r(1340),f=r(7045),p=r(9920),v=i.Symbol,d=v&&v.prototype;if(o&&c(v)&&(!("description"in d)||void 0!==v().description)){var y={},g=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),e=s(d,this)?new v(t):void 0===t?v():v(t);return""===t&&(y[e]=!0),e};p(g,v),g.prototype=d,d.constructor=g;var h="Symbol(test)"==String(v("test")),m=a(d.valueOf),b=a(d.toString),x=/^Symbol\((.*)\)[^)]+$/,S=a("".replace),w=a("".slice);f(d,"description",{configurable:!0,get:function(){var t=m(this);if(u(y,t))return"";var e=b(t),r=h?w(e,7,-1):S(e,x,"$1");return""===r?void 0:r}}),n({global:!0,constructor:!0,forced:!0},{Symbol:g})}},763:(t,e,r)=>{var n=r(2109),o=r(5005),i=r(2597),a=r(1340),u=r(2309),c=r(2015),s=u("string-to-symbol-registry"),l=u("symbol-to-string-registry");n({target:"Symbol",stat:!0,forced:!c},{for:function(t){var e=a(t);if(i(s,e))return s[e];var r=o("Symbol")(e);return s[e]=r,l[r]=e,r}})},2165:(t,e,r)=>{r(6800)("iterator")},2526:(t,e,r)=>{r(4032),r(763),r(6620),r(8862),r(9660)},6620:(t,e,r)=>{var n=r(2109),o=r(2597),i=r(2190),a=r(6330),u=r(2309),c=r(2015),s=u("symbol-to-string-registry");n({target:"Symbol",stat:!0,forced:!c},{keyFor:function(t){if(!i(t))throw TypeError(a(t)+" is not a symbol");if(o(s,t))return s[t]}})},4747:(t,e,r)=>{var n=r(7854),o=r(8324),i=r(8509),a=r(8533),u=r(8880),c=function(t){if(t&&t.forEach!==a)try{u(t,"forEach",a)}catch(e){t.forEach=a}};for(var s in o)o[s]&&c(n[s]&&n[s].prototype);c(i)},3948:(t,e,r)=>{var n=r(7854),o=r(8324),i=r(8509),a=r(6992),u=r(8880),c=r(5112),s=c("iterator"),l=c("toStringTag"),f=a.values,p=function(t,e){if(t){if(t[s]!==f)try{u(t,s,f)}catch(e){t[s]=f}if(t[l]||u(t,l,e),o[e])for(var r in a)if(t[r]!==a[r])try{u(t,r,a[r])}catch(e){t[r]=a[r]}}};for(var v in o)p(n[v]&&n[v].prototype,v);p(i,"DOMTokenList")}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r(1539),r(4747),r(2526),r(1817),r(2165),r(6992),r(8783),r(3948),r(1038),r(7042),r(8309),r(4916);var n=function(){document.querySelector(".ulaval-header-mobile-menu").classList.remove("open"),document.querySelector(".ulaval-header-menu-trigger").querySelector("span.screen-reader-text").innerText="Ouvrir le menu principal",document.querySelector(".ulaval-header-menu-trigger").setAttribute("aria-expanded","false"),document.body.classList.remove("ulaval-nav-mobile-open")},o=function(){document.querySelector(".ulaval-header-search").classList.add("remove"),document.querySelector(".ulaval-header-search").classList.remove("open"),document.querySelector(".ulaval-header-search-trigger").setAttribute("aria-expanded","false")},i=function(){document.getElementById("ulaval-language-switcher-list").hidden=!0,document.querySelector(".ulaval-language-switcher-trigger").setAttribute("aria-expanded","false"),(currentlyFocusedLang=document.querySelector("#ulaval-language-switcher-list>li[aria-selected=true]"))&&currentlyFocusedLang.setAttribute("aria-selected","false"),document.removeEventListener("keyup",s),document.removeEventListener("keydown",c),document.removeEventListener("click",u),document.querySelectorAll("#ulaval-language-switcher-list>li a").forEach((function(t){t.removeEventListener("mouseover",a)}))};document.querySelector(".ulaval-header-menu-trigger").addEventListener("click",(function(){"false"==this.getAttribute("aria-expanded")?((searchBarButton=document.querySelector(".ulaval-header-search-trigger"))&&"true"==searchBarButton.getAttribute("aria-expanded")&&o(),document.querySelector(".ulaval-header-mobile-menu").classList.add("open"),this.querySelector("span.screen-reader-text").innerText="Fermer le menu principal",this.setAttribute("aria-expanded","true"),document.body.classList.add("ulaval-nav-mobile-open")):n()})),(searchBarButton=document.querySelector(".ulaval-header-search-trigger"))&&searchBarButton.addEventListener("click",(function(){"false"==this.getAttribute("aria-expanded")?("true"==document.querySelector(".ulaval-header-menu-trigger").getAttribute("aria-expanded")&&n(),document.querySelector(".ulaval-header-search").classList.add("open"),document.querySelector(".champ-recherche").focus(),this.setAttribute("aria-expanded","true")):o()})),(languageSwitcher=document.querySelector(".ulaval-language-switcher-trigger"))&&languageSwitcher.addEventListener("click",(function(){"false"==this.getAttribute("aria-expanded")?(document.getElementById("ulaval-language-switcher-list").hidden=!1,this.setAttribute("aria-expanded","true"),document.querySelector("#ulaval-language-switcher-list>li:first-child a").focus(),document.querySelector("#ulaval-language-switcher-list>li:first-child").setAttribute("aria-selected","true"),document.addEventListener("keyup",s),document.addEventListener("keydown",c),document.addEventListener("click",u),document.querySelectorAll("#ulaval-language-switcher-list>li a").forEach((function(t){t.addEventListener("mouseover",a)}))):i()}));var a=function(t){document.querySelectorAll("#ulaval-language-switcher-list>li a").forEach((function(t){t==document.activeElement&&t.blur()}))},u=function(t){document.querySelector(".ulaval-language-switcher").contains(t.target)||i()},c=function(t){38!=t.keyCode&&40!=t.keyCode||t.preventDefault()},s=function(e){var r=document.activeElement.parentElement,n=t(r.parentElement.children).indexOf(r);switch(e.keyCode){case 38:r.setAttribute("aria-selected","false"),0==n?(document.querySelector("#ulaval-language-switcher-list li:last-child a").focus(),document.querySelector("#ulaval-language-switcher-list li:last-child").setAttribute("aria-selected","true")):(r.previousElementSibling.querySelector("a").focus(),r.previousElementSibling.setAttribute("aria-selected","true"));break;case 40:r.setAttribute("aria-selected","false"),n==t(r.parentElement.children).length-1?(document.querySelector("#ulaval-language-switcher-list li:first-child a").focus(),document.querySelector("#ulaval-language-switcher-list li:first-child").setAttribute("aria-selected","true")):(r.nextElementSibling.querySelector("a").focus(),r.nextElementSibling.setAttribute("aria-selected","true"));break;case 27:case 9:i(),document.querySelector(".ulaval-language-switcher-trigger").focus()}};document.addEventListener("animationstart",(function(t){"ulaval-header-search-fadeIn"!==t.animationName&&"ulaval-header-mobile-fadeIn"!==t.animationName||t.target.classList.add("remove")})),document.addEventListener("animationend",(function(t){"ulaval-header-search-fadeOut"!==t.animationName&&"ulaval-header-mobile-fadeOut"!==t.animationName||t.target.classList.remove("remove")}))})()})();