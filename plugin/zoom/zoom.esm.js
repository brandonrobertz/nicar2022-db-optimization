var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=function(t){return t&&t.Math==Math&&t},n=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||function(){return this}()||Function("return this")(),r={},o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),u=!o((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),c=u,a=Function.prototype.call,l=c?a.bind(a):function(){return a.apply(a,arguments)},f={},s={}.propertyIsEnumerable,d=Object.getOwnPropertyDescriptor,p=d&&!s.call({1:2},1);f.f=p?function(t){var e=d(this,t);return!!e&&e.enumerable}:s;var y,g,m=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},v=u,b=Function.prototype,h=b.bind,w=b.call,x=v&&h.bind(w,w),O=v?function(t){return t&&x(t)}:function(t){return t&&function(){return w.apply(t,arguments)}},S=O,j=S({}.toString),E=S("".slice),I=function(t){return E(j(t),8,-1)},P=O,T=o,C=I,R=n.Object,z=P("".split),L=T((function(){return!R("z").propertyIsEnumerable(0)}))?function(t){return"String"==C(t)?z(t,""):R(t)}:R,_=n.TypeError,k=function(t){if(null==t)throw _("Can't call method on "+t);return t},A=L,M=k,F=function(t){return A(M(t))},N=function(t){return"function"==typeof t},D=N,W=function(t){return"object"==typeof t?null!==t:D(t)},Y=n,K=N,X=function(t){return K(t)?t:void 0},B=function(t,e){return arguments.length<2?X(Y[t]):Y[t]&&Y[t][e]},H=O({}.isPrototypeOf),U=n,G=B("navigator","userAgent")||"",$=U.process,q=U.Deno,V=$&&$.versions||q&&q.version,J=V&&V.v8;J&&(g=(y=J.split("."))[0]>0&&y[0]<4?1:+(y[0]+y[1])),!g&&G&&(!(y=G.match(/Edge\/(\d+)/))||y[1]>=74)&&(y=G.match(/Chrome\/(\d+)/))&&(g=+y[1]);var Q=g,Z=o,tt=!!Object.getOwnPropertySymbols&&!Z((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&Q&&Q<41})),et=tt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,nt=B,rt=N,ot=H,it=et,ut=n.Object,ct=it?function(t){return"symbol"==typeof t}:function(t){var e=nt("Symbol");return rt(e)&&ot(e.prototype,ut(t))},at=n.String,lt=N,ft=function(t){try{return at(t)}catch(t){return"Object"}},st=n.TypeError,dt=function(t){if(lt(t))return t;throw st(ft(t)+" is not a function")},pt=l,yt=N,gt=W,mt=n.TypeError,vt={exports:{}},bt=n,ht=Object.defineProperty,wt=function(t,e){try{ht(bt,t,{value:e,configurable:!0,writable:!0})}catch(n){bt[t]=e}return e},xt=wt,Ot=n["__core-js_shared__"]||xt("__core-js_shared__",{}),St=Ot;(vt.exports=function(t,e){return St[t]||(St[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"});var jt=k,Et=n.Object,It=function(t){return Et(jt(t))},Pt=O({}.hasOwnProperty),Tt=Object.hasOwn||function(t,e){return Pt(It(t),e)},Ct=O,Rt=0,zt=Math.random(),Lt=Ct(1..toString),_t=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Lt(++Rt+zt,36)},kt=n,At=vt.exports,Mt=Tt,Ft=_t,Nt=tt,Dt=et,Wt=At("wks"),Yt=kt.Symbol,Kt=Yt&&Yt.for,Xt=Dt?Yt:Yt&&Yt.withoutSetter||Ft,Bt=function(t){if(!Mt(Wt,t)||!Nt&&"string"!=typeof Wt[t]){var e="Symbol."+t;Nt&&Mt(Yt,t)?Wt[t]=Yt[t]:Wt[t]=Dt&&Kt?Kt(e):Xt(e)}return Wt[t]},Ht=l,Ut=W,Gt=ct,$t=function(t,e){var n=t[e];return null==n?void 0:dt(n)},qt=function(t,e){var n,r;if("string"===e&&yt(n=t.toString)&&!gt(r=pt(n,t)))return r;if(yt(n=t.valueOf)&&!gt(r=pt(n,t)))return r;if("string"!==e&&yt(n=t.toString)&&!gt(r=pt(n,t)))return r;throw mt("Can't convert object to primitive value")},Vt=Bt,Jt=n.TypeError,Qt=Vt("toPrimitive"),Zt=function(t,e){if(!Ut(t)||Gt(t))return t;var n,r=$t(t,Qt);if(r){if(void 0===e&&(e="default"),n=Ht(r,t,e),!Ut(n)||Gt(n))return n;throw Jt("Can't convert object to primitive value")}return void 0===e&&(e="number"),qt(t,e)},te=ct,ee=function(t){var e=Zt(t,"string");return te(e)?e:e+""},ne=W,re=n.document,oe=ne(re)&&ne(re.createElement),ie=function(t){return oe?re.createElement(t):{}},ue=ie,ce=!i&&!o((function(){return 7!=Object.defineProperty(ue("div"),"a",{get:function(){return 7}}).a})),ae=i,le=l,fe=f,se=m,de=F,pe=ee,ye=Tt,ge=ce,me=Object.getOwnPropertyDescriptor;r.f=ae?me:function(t,e){if(t=de(t),e=pe(e),ge)try{return me(t,e)}catch(t){}if(ye(t,e))return se(!le(fe.f,t,e),t[e])};var ve={},be=i&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),he=n,we=W,xe=he.String,Oe=he.TypeError,Se=function(t){if(we(t))return t;throw Oe(xe(t)+" is not an object")},je=i,Ee=ce,Ie=be,Pe=Se,Te=ee,Ce=n.TypeError,Re=Object.defineProperty,ze=Object.getOwnPropertyDescriptor;ve.f=je?Ie?function(t,e,n){if(Pe(t),e=Te(e),Pe(n),"function"==typeof t&&"prototype"===e&&"value"in n&&"writable"in n&&!n.writable){var r=ze(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return Re(t,e,n)}:Re:function(t,e,n){if(Pe(t),e=Te(e),Pe(n),Ee)try{return Re(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Ce("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var Le=ve,_e=m,ke=i?function(t,e,n){return Le.f(t,e,_e(1,n))}:function(t,e,n){return t[e]=n,t},Ae={exports:{}},Me=N,Fe=Ot,Ne=O(Function.toString);Me(Fe.inspectSource)||(Fe.inspectSource=function(t){return Ne(t)});var De,We,Ye,Ke=Fe.inspectSource,Xe=N,Be=Ke,He=n.WeakMap,Ue=Xe(He)&&/native code/.test(Be(He)),Ge=vt.exports,$e=_t,qe=Ge("keys"),Ve=function(t){return qe[t]||(qe[t]=$e(t))},Je={},Qe=Ue,Ze=n,tn=O,en=W,nn=ke,rn=Tt,on=Ot,un=Ve,cn=Je,an=Ze.TypeError,ln=Ze.WeakMap;if(Qe||on.state){var fn=on.state||(on.state=new ln),sn=tn(fn.get),dn=tn(fn.has),pn=tn(fn.set);De=function(t,e){if(dn(fn,t))throw new an("Object already initialized");return e.facade=t,pn(fn,t,e),e},We=function(t){return sn(fn,t)||{}},Ye=function(t){return dn(fn,t)}}else{var yn=un("state");cn[yn]=!0,De=function(t,e){if(rn(t,yn))throw new an("Object already initialized");return e.facade=t,nn(t,yn,e),e},We=function(t){return rn(t,yn)?t[yn]:{}},Ye=function(t){return rn(t,yn)}}var gn={set:De,get:We,has:Ye,enforce:function(t){return Ye(t)?We(t):De(t,{})},getterFor:function(t){return function(e){var n;if(!en(e)||(n=We(e)).type!==t)throw an("Incompatible receiver, "+t+" required");return n}}},mn=i,vn=Tt,bn=Function.prototype,hn=mn&&Object.getOwnPropertyDescriptor,wn=vn(bn,"name"),xn=wn&&"something"===function(){}.name,On=wn&&(!mn||mn&&hn(bn,"name").configurable),Sn=n,jn=N,En=Tt,In=ke,Pn=wt,Tn=Ke,Cn={EXISTS:wn,PROPER:xn,CONFIGURABLE:On}.CONFIGURABLE,Rn=gn.get,zn=gn.enforce,Ln=String(String).split("String");(Ae.exports=function(t,e,n,r){var o,i=!!r&&!!r.unsafe,u=!!r&&!!r.enumerable,c=!!r&&!!r.noTargetGet,a=r&&void 0!==r.name?r.name:e;jn(n)&&("Symbol("===String(a).slice(0,7)&&(a="["+String(a).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!En(n,"name")||Cn&&n.name!==a)&&In(n,"name",a),(o=zn(n)).source||(o.source=Ln.join("string"==typeof a?a:""))),t!==Sn?(i?!c&&t[e]&&(u=!0):delete t[e],u?t[e]=n:In(t,e,n)):u?t[e]=n:Pn(e,n)})(Function.prototype,"toString",(function(){return jn(this)&&Rn(this).source||Tn(this)}));var _n={},kn=Math.ceil,An=Math.floor,Mn=function(t){var e=+t;return e!=e||0===e?0:(e>0?An:kn)(e)},Fn=Mn,Nn=Math.max,Dn=Math.min,Wn=Mn,Yn=Math.min,Kn=function(t){return t>0?Yn(Wn(t),9007199254740991):0},Xn=F,Bn=function(t,e){var n=Fn(t);return n<0?Nn(n+e,0):Dn(n,e)},Hn=function(t){return Kn(t.length)},Un=function(t){return function(e,n,r){var o,i=Xn(e),u=Hn(i),c=Bn(r,u);if(t&&n!=n){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===n)return t||c||0;return!t&&-1}},Gn={includes:Un(!0),indexOf:Un(!1)},$n=Tt,qn=F,Vn=Gn.indexOf,Jn=Je,Qn=O([].push),Zn=function(t,e){var n,r=qn(t),o=0,i=[];for(n in r)!$n(Jn,n)&&$n(r,n)&&Qn(i,n);for(;e.length>o;)$n(r,n=e[o++])&&(~Vn(i,n)||Qn(i,n));return i},tr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],er=Zn,nr=tr.concat("length","prototype");_n.f=Object.getOwnPropertyNames||function(t){return er(t,nr)};var rr={};rr.f=Object.getOwnPropertySymbols;var or=B,ir=_n,ur=rr,cr=Se,ar=O([].concat),lr=or("Reflect","ownKeys")||function(t){var e=ir.f(cr(t)),n=ur.f;return n?ar(e,n(t)):e},fr=Tt,sr=lr,dr=r,pr=ve,yr=o,gr=N,mr=/#|\.prototype\./,vr=function(t,e){var n=hr[br(t)];return n==xr||n!=wr&&(gr(e)?yr(e):!!e)},br=vr.normalize=function(t){return String(t).replace(mr,".").toLowerCase()},hr=vr.data={},wr=vr.NATIVE="N",xr=vr.POLYFILL="P",Or=vr,Sr=n,jr=r.f,Er=ke,Ir=Ae.exports,Pr=wt,Tr=function(t,e,n){for(var r=sr(e),o=pr.f,i=dr.f,u=0;u<r.length;u++){var c=r[u];fr(t,c)||n&&fr(n,c)||o(t,c,i(e,c))}},Cr=Or,Rr={};Rr[Bt("toStringTag")]="z";var zr=n,Lr="[object z]"===String(Rr),_r=N,kr=I,Ar=Bt("toStringTag"),Mr=zr.Object,Fr="Arguments"==kr(function(){return arguments}()),Nr=Lr?kr:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Mr(t),Ar))?n:Fr?kr(e):"Object"==(r=kr(e))&&_r(e.callee)?"Arguments":r},Dr=n.String,Wr=Se,Yr=o,Kr=n.RegExp,Xr=Yr((function(){var t=Kr("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),Br=Xr||Yr((function(){return!Kr("a","y").sticky})),Hr={BROKEN_CARET:Xr||Yr((function(){var t=Kr("^r","gy");return t.lastIndex=2,null!=t.exec("str")})),MISSED_STICKY:Br,UNSUPPORTED_Y:Xr},Ur={},Gr=Zn,$r=tr,qr=Object.keys||function(t){return Gr(t,$r)},Vr=i,Jr=be,Qr=ve,Zr=Se,to=F,eo=qr;Ur.f=Vr&&!Jr?Object.defineProperties:function(t,e){Zr(t);for(var n,r=to(e),o=eo(e),i=o.length,u=0;i>u;)Qr.f(t,n=o[u++],r[n]);return t};var no,ro=B("document","documentElement"),oo=Se,io=Ur,uo=tr,co=Je,ao=ro,lo=ie,fo=Ve("IE_PROTO"),so=function(){},po=function(t){return"<script>"+t+"<\/script>"},yo=function(t){t.write(po("")),t.close();var e=t.parentWindow.Object;return t=null,e},go=function(){try{no=new ActiveXObject("htmlfile")}catch(t){}var t,e;go="undefined"!=typeof document?document.domain&&no?yo(no):((e=lo("iframe")).style.display="none",ao.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(po("document.F=Object")),t.close(),t.F):yo(no);for(var n=uo.length;n--;)delete go.prototype[uo[n]];return go()};co[fo]=!0;var mo,vo,bo=Object.create||function(t,e){var n;return null!==t?(so.prototype=oo(t),n=new so,so.prototype=null,n[fo]=t):n=go(),void 0===e?n:io.f(n,e)},ho=o,wo=n.RegExp,xo=ho((function(){var t=wo(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)})),Oo=o,So=n.RegExp,jo=Oo((function(){var t=So("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")})),Eo=l,Io=O,Po=function(t){if("Symbol"===Nr(t))throw TypeError("Cannot convert a Symbol value to a string");return Dr(t)},To=function(){var t=Wr(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},Co=Hr,Ro=vt.exports,zo=bo,Lo=gn.get,_o=xo,ko=jo,Ao=Ro("native-string-replace",String.prototype.replace),Mo=RegExp.prototype.exec,Fo=Mo,No=Io("".charAt),Do=Io("".indexOf),Wo=Io("".replace),Yo=Io("".slice),Ko=(vo=/b*/g,Eo(Mo,mo=/a/,"a"),Eo(Mo,vo,"a"),0!==mo.lastIndex||0!==vo.lastIndex),Xo=Co.BROKEN_CARET,Bo=void 0!==/()??/.exec("")[1];(Ko||Bo||Xo||_o||ko)&&(Fo=function(t){var e,n,r,o,i,u,c,a=this,l=Lo(a),f=Po(t),s=l.raw;if(s)return s.lastIndex=a.lastIndex,e=Eo(Fo,s,f),a.lastIndex=s.lastIndex,e;var d=l.groups,p=Xo&&a.sticky,y=Eo(To,a),g=a.source,m=0,v=f;if(p&&(y=Wo(y,"y",""),-1===Do(y,"g")&&(y+="g"),v=Yo(f,a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==No(f,a.lastIndex-1))&&(g="(?: "+g+")",v=" "+v,m++),n=new RegExp("^(?:"+g+")",y)),Bo&&(n=new RegExp("^"+g+"$(?!\\s)",y)),Ko&&(r=a.lastIndex),o=Eo(Mo,p?n:a,v),p?o?(o.input=Yo(o.input,m),o[0]=Yo(o[0],m),o.index=a.lastIndex,a.lastIndex+=o[0].length):a.lastIndex=0:Ko&&o&&(a.lastIndex=a.global?o.index+o[0].length:r),Bo&&o&&o.length>1&&Eo(Ao,o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&d)for(o.groups=u=zo(null),i=0;i<d.length;i++)u[(c=d[i])[0]]=o[c[1]];return o});(function(t,e){var n,r,o,i,u,c=t.target,a=t.global,l=t.stat;if(n=a?Sr:l?Sr[c]||Pr(c,{}):(Sr[c]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(u=jr(n,r))&&u.value:n[r],!Cr(a?r:c+(l?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Tr(i,o)}(t.sham||o&&o.sham)&&Er(i,"sham",!0),Ir(n,r,i,t)}})({target:"RegExp",proto:!0,forced:/./.exec!==Fo},{exec:Fo});
/*!
 * reveal.js Zoom plugin
 */
var Ho={id:"zoom",init:function(t){t.getRevealElement().addEventListener("mousedown",(function(e){var n=/Linux/.test(window.navigator.platform)?"ctrl":"alt",r=(t.getConfig().zoomKey?t.getConfig().zoomKey:n)+"Key",o=t.getConfig().zoomLevel?t.getConfig().zoomLevel:2;e[r]&&!t.isOverview()&&(e.preventDefault(),Go.to({x:e.clientX,y:e.clientY,scale:o,pan:!1}))}))},destroy:function(){Go.reset()}},Uo=function(){return Ho},Go=function(){var t=1,e=0,n=0,r=-1,o=-1,i="transform"in document.body.style;function u(e,n){var r=a();if(e.width=e.width||1,e.height=e.height||1,e.x-=(window.innerWidth-e.width*n)/2,e.y-=(window.innerHeight-e.height*n)/2,i)if(1===n)document.body.style.transform="";else{var o=r.x+"px "+r.y+"px",u="translate("+-e.x+"px,"+-e.y+"px) scale("+n+")";document.body.style.transformOrigin=o,document.body.style.transform=u}else 1===n?(document.body.style.position="",document.body.style.left="",document.body.style.top="",document.body.style.width="",document.body.style.height="",document.body.style.zoom=""):(document.body.style.position="relative",document.body.style.left=-(r.x+e.x)/n+"px",document.body.style.top=-(r.y+e.y)/n+"px",document.body.style.width=100*n+"%",document.body.style.height=100*n+"%",document.body.style.zoom=n);t=n,document.documentElement.classList&&(1!==t?document.documentElement.classList.add("zoomed"):document.documentElement.classList.remove("zoomed"))}function c(){var r=.12*window.innerWidth,o=.12*window.innerHeight,i=a();n<o?window.scroll(i.x,i.y-14/t*(1-n/o)):n>window.innerHeight-o&&window.scroll(i.x,i.y+(1-(window.innerHeight-n)/o)*(14/t)),e<r?window.scroll(i.x-14/t*(1-e/r),i.y):e>window.innerWidth-r&&window.scroll(i.x+(1-(window.innerWidth-e)/r)*(14/t),i.y)}function a(){return{x:void 0!==window.scrollX?window.scrollX:window.pageXOffset,y:void 0!==window.scrollY?window.scrollY:window.pageYOffset}}return i&&(document.body.style.transition="transform 0.8s ease"),document.addEventListener("keyup",(function(e){1!==t&&27===e.keyCode&&Go.out()})),document.addEventListener("mousemove",(function(r){1!==t&&(e=r.clientX,n=r.clientY)})),{to:function(e){if(1!==t)Go.out();else{if(e.x=e.x||0,e.y=e.y||0,e.element){var n=e.element.getBoundingClientRect();e.x=n.left-20,e.y=n.top-20,e.width=n.width+40,e.height=n.height+40}void 0!==e.width&&void 0!==e.height&&(e.scale=Math.max(Math.min(window.innerWidth/e.width,window.innerHeight/e.height),1)),e.scale>1&&(e.x*=e.scale,e.y*=e.scale,u(e,e.scale),!1!==e.pan&&(r=setTimeout((function(){o=setInterval(c,1e3/60)}),800)))}},out:function(){clearTimeout(r),clearInterval(o),u({x:0,y:0},1),t=1},magnify:function(t){this.to(t)},reset:function(){this.out()},zoomLevel:function(){return t}}}();export{Uo as default};