import{S as ge,i as _e,s as pe,e as m,t as u,k as E,c as b,a as g,h as v,d,m as I,b as y,g as k,J as i,E as D,F as nn,G as sn,H as rn,I as ln,q as T,o as C,_ as on,v as Jt,u as an,D as cn,j as bt,$ as dn,M as Lt,w as M,x as j,y as P,B as A,n as Kt,p as Qt,P as hn,K as fn,Q as un,a0 as Rt}from"../../chunks/index-c1ea72d5.js";import"../../chunks/codeblocks-e4ede99b.js";import{s as vn,a as mn,b as bn,S as Xt,N as Yt,P as Zt,e as gn,M as _n}from"../../chunks/appendSelect-273f0606.js";import{d as pn,c as wn}from"../../chunks/index-aea790f0.js";import{w as yn}from"../../chunks/index-613b4b1e.js";import{o as kn}from"../../chunks/noun-presentation-1320578-0041c878.js";import"../../chunks/paths-396f020f.js";function En(a){let e,n,t,s,l,f,c,o,r,h,_,w,p,L,x,F,O,G,q,re,H,ce,de,he,Q,Ve,nt=0+"",Me,U,fe,X,je,it=!0+"",we,Pe,Ae,ye,Be,ke,He,Ee,Ue,le,V,Y,Re,We,oe,z,st=.7+"",Ie,qe,Fe,Oe,Ge,Le,$e,Je,Ke,Qe,Se,Te,Xe,Ye,Z,ue,Ze,De,J,ae,ze,ee,et,$,R,ie,rt,W,se,lt,xe,ot,tt,at,ve,te,Ne,ct,dt,ht,me,ft,N,be,ut;return{c(){e=m("p"),n=u(`Using IntersectionObserver via the 
	`),t=m("a"),s=u("svlete-intersection-observer library"),l=u(`
	to lazy-load content once `),f=m("strong"),c=u("and"),o=u(` trigger changes to a content block when it comes into view 
	(intersects), while also passing intersecting element as prop to a sticky element on the page 
	via a Svelte store.`),r=E(),h=m("h3"),_=u("Main points"),w=E(),p=m("ul"),L=m("li"),x=m("span"),F=u("Use two separate intersection observers"),O=E(),G=m("li"),q=u(`We need two intersection observers if we want to do lazy loading and change 
		the element somehow after is has been lazy loaded. 
		If the elements don't need to lazy-load or if they don't need to 
		change in any way after they have first loaded, then we only need one 
		IntersectionObserver.`),re=E(),H=m("li"),ce=m("span"),de=u("The first (outer) intersection observer is for lazy loading."),he=u(`
		It observers each element and if the element enters the viewport (`),Q=m("code"),Ve=u('threshold="'),Me=u(nt),U=u('"'),fe=u(`), 
		we load the element. This happens only once (`),X=m("code"),je=u('once="'),we=u(it),Pe=u('"'),Ae=u(`), 
		which makes sense because we don't need to lazy-load more than once. 
		The lazy loading bit is achieved by adding the condition `),ye=m("code"),Be=u("if intersecting"),ke=u(`  
		as then we will only display the DOM element if it intersects the viewport.`),He=E(),Ee=m("li"),Ue=u(`In this particular example there is no need to use lazy loading actually, but if we were 
		loading really heavy chunks of content, e.g. HTML5 canvas elements with thousands of 
		shapes drawn in each of them, it would help performance to lazy-load each canvas as it comes into view,
		rather than trying to load all of them at once on page load/component mount.`),le=E(),V=m("li"),Y=m("span"),Re=u(`The second (inner) intersection observer is there to affect a change 
		to the already lazy-loaded element based on some different intersecting condition.`),We=u(`
		In this case, if the element becomes 70% visible (`),oe=m("code"),z=u('threshold="'),Ie=u(st),qe=u('"'),Fe=u(`), 
		it will change colour. 
		`),Oe=m("br"),Ge=u(`
		(See `),Le=m("code"),$e=u(".style('background', d => intersecting ? '#ee3e3e' : '#6b6065')"),Je=u(` in ContentElement.)
		`),Ke=m("br"),Qe=u(`
		Sidenote: The `),Se=m("code"),Te=u("threshold"),Xe=u(` prop of the IntersectionObserver here is 
		not the viewport threshold, but the proportion (0 to 1) of the intersecting element that 
		has to be visible in the viewport to trigger the intersecting prop to become true.`),Ye=E(),Z=m("li"),ue=m("span"),Ze=u("To update the content of the sticky element:"),De=E(),J=m("ul"),ae=m("li"),ze=u("- Initialise a "),ee=m("code"),et=u("currentElNum"),$=u(" variable as a svelte store."),R=E(),ie=m("li"),rt=u("- Set the value of "),W=m("code"),se=u("currentElNum"),lt=u(` to the id corresponding 
				to the data entry bound to that element each time the second IntersectionObserver's 
				intersection condition is satisfied. 
				In other words, when an element is 70% visible in the viewport, 
				`),xe=m("code"),ot=u("currentElNum"),tt=u(" gets updated with the id for the data entry bound to that element."),at=E(),ve=m("li"),te=u("- Then the StickyElement imports "),Ne=m("code"),ct=u("currentElNum"),dt=u(" and its content gets dynamically updated based on it."),ht=E(),me=m("li"),ft=u("Beware that this is buggy if the height of the intersecting elements is small enough that multiple of them fit into the viewport."),N=E(),be=m("h3"),ut=u("Code highlights"),this.h()},l(S){e=b(S,"P",{class:!0});var B=g(e);n=v(B,`Using IntersectionObserver via the 
	`),t=b(B,"A",{href:!0,target:!0,class:!0});var gt=g(t);s=v(gt,"svlete-intersection-observer library"),gt.forEach(d),l=v(B,`
	to lazy-load content once `),f=b(B,"STRONG",{});var _t=g(f);c=v(_t,"and"),_t.forEach(d),o=v(B,` trigger changes to a content block when it comes into view 
	(intersects), while also passing intersecting element as prop to a sticky element on the page 
	via a Svelte store.`),B.forEach(d),r=I(S),h=b(S,"H3",{class:!0});var pt=g(h);_=v(pt,"Main points"),pt.forEach(d),w=I(S),p=b(S,"UL",{class:!0});var K=g(p);L=b(K,"LI",{});var $t=g(L);x=b($t,"SPAN",{class:!0});var St=g(x);F=v(St,"Use two separate intersection observers"),St.forEach(d),$t.forEach(d),O=I(K),G=b(K,"LI",{});var Tt=g(G);q=v(Tt,`We need two intersection observers if we want to do lazy loading and change 
		the element somehow after is has been lazy loaded. 
		If the elements don't need to lazy-load or if they don't need to 
		change in any way after they have first loaded, then we only need one 
		IntersectionObserver.`),Tt.forEach(d),re=I(K),H=b(K,"LI",{});var Ce=g(H);ce=b(Ce,"SPAN",{class:!0});var Dt=g(ce);de=v(Dt,"The first (outer) intersection observer is for lazy loading."),Dt.forEach(d),he=v(Ce,`
		It observers each element and if the element enters the viewport (`),Q=b(Ce,"CODE",{});var wt=g(Q);Ve=v(wt,'threshold="'),Me=v(wt,nt),U=v(wt,'"'),wt.forEach(d),fe=v(Ce,`), 
		we load the element. This happens only once (`),X=b(Ce,"CODE",{});var yt=g(X);je=v(yt,'once="'),we=v(yt,it),Pe=v(yt,'"'),yt.forEach(d),Ae=v(Ce,`), 
		which makes sense because we don't need to lazy-load more than once. 
		The lazy loading bit is achieved by adding the condition `),ye=b(Ce,"CODE",{});var Ct=g(ye);Be=v(Ct,"if intersecting"),Ct.forEach(d),ke=v(Ce,`  
		as then we will only display the DOM element if it intersects the viewport.`),Ce.forEach(d),He=I(K),Ee=b(K,"LI",{});var zt=g(Ee);Ue=v(zt,`In this particular example there is no need to use lazy loading actually, but if we were 
		loading really heavy chunks of content, e.g. HTML5 canvas elements with thousands of 
		shapes drawn in each of them, it would help performance to lazy-load each canvas as it comes into view,
		rather than trying to load all of them at once on page load/component mount.`),zt.forEach(d),le=I(K),V=b(K,"LI",{});var ne=g(V);Y=b(ne,"SPAN",{class:!0});var xt=g(Y);Re=v(xt,`The second (inner) intersection observer is there to affect a change 
		to the already lazy-loaded element based on some different intersecting condition.`),xt.forEach(d),We=v(ne,`
		In this case, if the element becomes 70% visible (`),oe=b(ne,"CODE",{});var kt=g(oe);z=v(kt,'threshold="'),Ie=v(kt,st),qe=v(kt,'"'),kt.forEach(d),Fe=v(ne,`), 
		it will change colour. 
		`),Oe=b(ne,"BR",{}),Ge=v(ne,`
		(See `),Le=b(ne,"CODE",{});var Nt=g(Le);$e=v(Nt,".style('background', d => intersecting ? '#ee3e3e' : '#6b6065')"),Nt.forEach(d),Je=v(ne,` in ContentElement.)
		`),Ke=b(ne,"BR",{}),Qe=v(ne,`
		Sidenote: The `),Se=b(ne,"CODE",{});var Vt=g(Se);Te=v(Vt,"threshold"),Vt.forEach(d),Xe=v(ne,` prop of the IntersectionObserver here is 
		not the viewport threshold, but the proportion (0 to 1) of the intersecting element that 
		has to be visible in the viewport to trigger the intersecting prop to become true.`),ne.forEach(d),Ye=I(K),Z=b(K,"LI",{});var Et=g(Z);ue=b(Et,"SPAN",{class:!0});var Mt=g(ue);Ze=v(Mt,"To update the content of the sticky element:"),Mt.forEach(d),De=I(Et),J=b(Et,"UL",{class:!0});var vt=g(J);ae=b(vt,"LI",{});var It=g(ae);ze=v(It,"- Initialise a "),ee=b(It,"CODE",{});var jt=g(ee);et=v(jt,"currentElNum"),jt.forEach(d),$=v(It," variable as a svelte store."),It.forEach(d),R=I(vt),ie=b(vt,"LI",{});var mt=g(ie);rt=v(mt,"- Set the value of "),W=b(mt,"CODE",{});var Pt=g(W);se=v(Pt,"currentElNum"),Pt.forEach(d),lt=v(mt,` to the id corresponding 
				to the data entry bound to that element each time the second IntersectionObserver's 
				intersection condition is satisfied. 
				In other words, when an element is 70% visible in the viewport, 
				`),xe=b(mt,"CODE",{});var At=g(xe);ot=v(At,"currentElNum"),At.forEach(d),tt=v(mt," gets updated with the id for the data entry bound to that element."),mt.forEach(d),at=I(vt),ve=b(vt,"LI",{});var Ot=g(ve);te=v(Ot,"- Then the StickyElement imports "),Ne=b(Ot,"CODE",{});var Bt=g(Ne);ct=v(Bt,"currentElNum"),Bt.forEach(d),dt=v(Ot," and its content gets dynamically updated based on it."),Ot.forEach(d),vt.forEach(d),Et.forEach(d),ht=I(K),me=b(K,"LI",{});var Ht=g(me);ft=v(Ht,"Beware that this is buggy if the height of the intersecting elements is small enough that multiple of them fit into the viewport."),Ht.forEach(d),K.forEach(d),N=I(S),be=b(S,"H3",{class:!0});var Ut=g(be);ut=v(Ut,"Code highlights"),Ut.forEach(d),this.h()},h(){y(t,"href","https://github.com/metonym/svelte-intersection-observer"),y(t,"target","_blank"),y(t,"class","svelte-19j31zf"),y(e,"class","summary svelte-19j31zf"),y(h,"class","svelte-19j31zf"),y(x,"class","accent"),y(ce,"class","accent"),y(Y,"class","accent"),y(ue,"class","accent"),y(J,"class","svelte-19j31zf"),y(p,"class","svelte-19j31zf"),y(be,"class","svelte-19j31zf")},m(S,B){k(S,e,B),i(e,n),i(e,t),i(t,s),i(e,l),i(e,f),i(f,c),i(e,o),k(S,r,B),k(S,h,B),i(h,_),k(S,w,B),k(S,p,B),i(p,L),i(L,x),i(x,F),i(p,O),i(p,G),i(G,q),i(p,re),i(p,H),i(H,ce),i(ce,de),i(H,he),i(H,Q),i(Q,Ve),i(Q,Me),i(Q,U),i(H,fe),i(H,X),i(X,je),i(X,we),i(X,Pe),i(H,Ae),i(H,ye),i(ye,Be),i(H,ke),i(p,He),i(p,Ee),i(Ee,Ue),i(p,le),i(p,V),i(V,Y),i(Y,Re),i(V,We),i(V,oe),i(oe,z),i(oe,Ie),i(oe,qe),i(V,Fe),i(V,Oe),i(V,Ge),i(V,Le),i(Le,$e),i(V,Je),i(V,Ke),i(V,Qe),i(V,Se),i(Se,Te),i(V,Xe),i(p,Ye),i(p,Z),i(Z,ue),i(ue,Ze),i(Z,De),i(Z,J),i(J,ae),i(ae,ze),i(ae,ee),i(ee,et),i(ae,$),i(J,R),i(J,ie),i(ie,rt),i(ie,W),i(W,se),i(ie,lt),i(ie,xe),i(xe,ot),i(ie,tt),i(J,at),i(J,ve),i(ve,te),i(ve,Ne),i(Ne,ct),i(ve,dt),i(p,ht),i(p,me),i(me,ft),k(S,N,B),k(S,be,B),i(be,ut)},p:D,i:D,o:D,d(S){S&&d(e),S&&d(r),S&&d(h),S&&d(w),S&&d(p),S&&d(N),S&&d(be)}}}class In extends ge{constructor(e){super(),_e(this,e,null,En,pe,{})}}const On=a=>({intersecting:a&1,entry:a&2,observer:a&4}),Wt=a=>({intersecting:a[0],entry:a[1],observer:a[2]});function Ln(a){let e;const n=a[9].default,t=nn(n,a,a[8],Wt);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,l){t&&t.m(s,l),e=!0},p(s,[l]){t&&t.p&&(!e||l&263)&&sn(t,n,s,s[8],e?ln(n,s[8],l,On):rn(s[8]),Wt)},i(s){e||(T(t,s),e=!0)},o(s){C(t,s),e=!1},d(s){t&&t.d(s)}}}function $n(a,e,n){let{$$slots:t={},$$scope:s}=e,{element:l=null}=e,{once:f=!1}=e,{intersecting:c=!1}=e,{root:o=null}=e,{rootMargin:r="0px"}=e,{threshold:h=0}=e,{entry:_=null}=e,{observer:w=null}=e;const p=on();let L=null,x=null;const F=()=>{n(2,w=new IntersectionObserver(O=>{O.forEach(G=>{n(1,_=G),n(0,c=G.isIntersecting)})},{root:o,rootMargin:r,threshold:h}))};return Jt(()=>(F(),()=>{w&&(w.disconnect(),n(2,w=null))})),an(async()=>{_!==null&&(p("observe",_),_.isIntersecting&&(p("intersect",_),f&&w.unobserve(l))),await cn(),l!==null&&l!==x&&(w.observe(l),x!==null&&w.unobserve(x),x=l),L&&r!==L&&(w.disconnect(),x=null,F()),L=r}),a.$$set=O=>{"element"in O&&n(3,l=O.element),"once"in O&&n(4,f=O.once),"intersecting"in O&&n(0,c=O.intersecting),"root"in O&&n(5,o=O.root),"rootMargin"in O&&n(6,r=O.rootMargin),"threshold"in O&&n(7,h=O.threshold),"entry"in O&&n(1,_=O.entry),"observer"in O&&n(2,w=O.observer),"$$scope"in O&&n(8,s=O.$$scope)},[c,_,w,l,f,o,r,h,s,t]}class en extends ge{constructor(e){super(),_e(this,e,$n,Ln,pe,{element:3,once:4,intersecting:0,root:5,rootMargin:6,threshold:7,entry:1,observer:2})}}const tn=yn(-1);function Sn(a){let e,n,t,s;return{c(){e=m("div"),n=u(`I am a sticky element and I update based on the intersecting element, which is:
	`),t=m("h3"),s=u(a[0]),this.h()},l(l){e=b(l,"DIV",{id:!0,class:!0});var f=g(e);n=v(f,`I am a sticky element and I update based on the intersecting element, which is:
	`),t=b(f,"H3",{class:!0});var c=g(t);s=v(c,a[0]),c.forEach(d),f.forEach(d),this.h()},h(){y(t,"class","svelte-1t17e91"),y(e,"id","sticky-element"),y(e,"class","svelte-1t17e91")},m(l,f){k(l,e,f),i(e,n),i(e,t),i(t,s)},p(l,[f]){f&1&&bt(s,l[0])},i:D,o:D,d(l){l&&d(e)}}}function Tn(a,e,n){let t;return dn(a,tn,s=>n(0,t=s)),[t]}class Dn extends ge{constructor(e){super(),_e(this,e,Tn,Sn,pe,{})}}function Cn(a){let e,n,t,s,l,f,c,o,r,h,_;return{c(){e=m("div"),n=m("h1"),t=u("I am block #"),s=u(a[0]),l=u(" and my intersection status is: "),f=u(a[1]),c=E(),o=m("p"),r=u(a[2]),h=E(),_=m("div"),this.h()},l(w){e=b(w,"DIV",{class:!0});var p=g(e);n=b(p,"H1",{class:!0});var L=g(n);t=v(L,"I am block #"),s=v(L,a[0]),l=v(L," and my intersection status is: "),f=v(L,a[1]),L.forEach(d),c=I(p),o=b(p,"P",{class:!0});var x=g(o);r=v(x,a[2]),x.forEach(d),h=I(p),_=b(p,"DIV",{class:!0}),g(_).forEach(d),p.forEach(d),this.h()},h(){y(n,"class","svelte-16oryz2"),y(o,"class","svelte-16oryz2"),y(_,"class","container"),y(e,"class","content svelte-16oryz2")},m(w,p){k(w,e,p),i(e,n),i(n,t),i(n,s),i(n,l),i(n,f),i(e,c),i(e,o),i(o,r),i(e,h),i(e,_),a[5](_)},p(w,[p]){p&1&&bt(s,w[0]),p&2&&bt(f,w[1]),p&4&&bt(r,w[2])},i:D,o:D,d(w){w&&d(e),a[5](null)}}}function zn(a,e,n){vn.prototype.appendSelect=mn;let{id:t}=e,{intersecting:s}=e,{text:l}=e,f;function c(o){Lt[o?"unshift":"push"](()=>{f=o,n(3,f)})}return a.$$set=o=>{"id"in o&&n(0,t=o.id),"intersecting"in o&&n(1,s=o.intersecting),"text"in o&&n(2,l=o.text)},a.$$.update=()=>{a.$$.dirty&27&&f&&(bn(f).appendSelect("svg").attr("width","100%").attr("height","600px").transition().duration(500).style("background",r=>s?"#ee3e3e":"#6b6065"),s&&tn.set(t))},[t,s,l,f,pn,c]}class xn extends ge{constructor(e){super(),_e(this,e,zn,Cn,pe,{id:0,intersecting:1,text:2})}}const qt=[{id:0,text:"some content text"},{id:1,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{id:2,text:"Ut enim ad minim veniam, uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{id:3,text:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{id:4,text:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}];function Ft(a,e,n){const t=a.slice();return t[16]=e[n],t[17]=e,t[18]=n,t}function Nn(a){let e,n;return{c(){e=m("div"),n=u("loading..."),this.h()},l(t){e=b(t,"DIV",{class:!0});var s=g(e);n=v(s,"loading..."),s.forEach(d),this.h()},h(){y(e,"class","placeholder svelte-1wdlev2")},m(t,s){k(t,e,s),i(e,n)},p:D,i:D,o:D,d(t){t&&d(e)}}}function Vn(a){let e,n;return e=new en({props:{element:a[1][a[18]],threshold:.7,once:!1,$$slots:{default:[Mn,({intersecting:t})=>({3:t}),({intersecting:t})=>t?8:0]},$$scope:{ctx:a}}}),{c(){M(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){P(e,t,s),n=!0},p(t,s){const l={};s&2&&(l.element=t[1][t[18]]),s&524298&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function Mn(a){let e,n,t=a[18],s,l;n=new xn({props:{id:a[16].id,intersecting:a[3],text:a[16].text}});const f=()=>a[4](e,t),c=()=>a[4](null,t);return{c(){e=m("div"),M(n.$$.fragment)},l(o){e=b(o,"DIV",{});var r=g(e);j(n.$$.fragment,r),r.forEach(d)},m(o,r){k(o,e,r),P(n,e,null),f(),l=!0},p(o,r){a=o;const h={};r&8&&(h.intersecting=a[3]),n.$set(h),t!==a[18]&&(c(),t=a[18],f())},i(o){l||(T(n.$$.fragment,o),s||fn(()=>{s=un(e,wn,{duration:800}),s.start()}),l=!0)},o(o){C(n.$$.fragment,o),l=!1},d(o){o&&d(e),A(n),c()}}}function jn(a){let e,n,t,s=a[18],l,f;const c=[Vn,Nn],o=[];function r(w,p){return w[2]?0:1}n=r(a),t=o[n]=c[n](a);const h=()=>a[5](e,s),_=()=>a[5](null,s);return{c(){e=m("div"),t.c(),l=E()},l(w){e=b(w,"DIV",{});var p=g(e);t.l(p),p.forEach(d),l=I(w)},m(w,p){k(w,e,p),o[n].m(e,null),h(),k(w,l,p),f=!0},p(w,p){a=w;let L=n;n=r(a),n===L?o[n].p(a,p):(Kt(),C(o[L],1,1,()=>{o[L]=null}),Qt(),t=o[n],t?t.p(a,p):(t=o[n]=c[n](a),t.c()),T(t,1),t.m(e,null)),s!==a[18]&&(_(),s=a[18],h())},i(w){f||(T(t),f=!0)},o(w){C(t),f=!1},d(w){w&&d(e),o[n].d(),_(),w&&d(l)}}}function Gt(a){let e,n;return e=new en({props:{element:a[0][a[18]],threshold:0,once:!0,$$slots:{default:[jn,({intersecting:t})=>({2:t}),({intersecting:t})=>t?4:0]},$$scope:{ctx:a}}}),{c(){M(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){P(e,t,s),n=!0},p(t,s){const l={};s&1&&(l.element=t[0][t[18]]),s&524295&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function Pn(a){let e,n,t,s;n=new Dn({});let l=qt,f=[];for(let o=0;o<l.length;o+=1)f[o]=Gt(Ft(a,l,o));const c=o=>C(f[o],1,1,()=>{f[o]=null});return{c(){e=m("section"),M(n.$$.fragment),t=E();for(let o=0;o<f.length;o+=1)f[o].c()},l(o){e=b(o,"SECTION",{});var r=g(e);j(n.$$.fragment,r),t=I(r);for(let h=0;h<f.length;h+=1)f[h].l(r);r.forEach(d)},m(o,r){k(o,e,r),P(n,e,null),i(e,t);for(let h=0;h<f.length;h+=1)f[h].m(e,null);s=!0},p(o,[r]){if(r&15){l=qt;let h;for(h=0;h<l.length;h+=1){const _=Ft(o,l,h);f[h]?(f[h].p(_,r),T(f[h],1)):(f[h]=Gt(_),f[h].c(),T(f[h],1),f[h].m(e,null))}for(Kt(),h=l.length;h<f.length;h+=1)c(h);Qt()}},i(o){if(!s){T(n.$$.fragment,o);for(let r=0;r<l.length;r+=1)T(f[r]);s=!0}},o(o){C(n.$$.fragment,o),f=f.filter(Boolean);for(let r=0;r<f.length;r+=1)C(f[r]);s=!1},d(o){o&&d(e),A(n),hn(f,o)}}}function An(a,e,n){let t,s,l,f,c;const o=[t,s,l,f,c];let r,h,_,w,p;const L=[r,h,_,w,p];let x,F;function O(q,re){Lt[q?"unshift":"push"](()=>{L[re]=q,n(1,L)})}function G(q,re){Lt[q?"unshift":"push"](()=>{o[re]=q,n(0,o)})}return[o,L,x,F,O,G]}class Bn extends ge{constructor(e){super(),_e(this,e,An,Pn,pe,{})}}const Hn=`
	///////////////////////////////////////////////////////////////
	//////////// Intersection Observer (Scrolly.svelte) ///////////
	///////////////////////////////////////////////////////////////
	<script>
		import IntersectionObserver from 'svelte-intersection-observer'
		import StickyElement from './StickyElement.svelte'
		import ContentElement from './ContentElement.svelte'
		...

		// Need to initialise all the DOM element containers that the intersection observer 
		// uses in its 'element' prop; Need one for each data element: nodesLoad and nodes
		...

		let intersectingLazyLoad
		let intersecting
	<\/script>
	
	<section>
		<StickyElement />
		{#each data as datum, i}
			<IntersectionObserver element="{nodesLoad[i]}" let:intersecting={intersectingLazyLoad} threshold="{0}" once="{true}">
					<div bind:this="{nodesLoad[i]}">
						{#if intersectingLazyLoad}
							<IntersectionObserver element="{nodes[i]}" let:intersecting threshold="{0.7}" once="{false}">
								<div in:fade="{{ duration: 800 }}"  bind:this="{nodes[i]}">
									<ContentElement
										id="{datum.id}"
										intersecting="{intersecting}"
										text={datum.text}
									/>
								</div>
							</IntersectionObserver>	
						{:else}
							<div class="placeholder">loading...</div>
						{/if}
					</div>
			</IntersectionObserver>
		{/each}
  	</section>

	/////////////////////// stores.js ////////////////////////////
	import { writable } from 'svelte/store'
	export const currentElNum = writable(-1)

	///////////////////////////////////////////////////////////////
	//////////////////// ContentElement.svelte ////////////////////
	///////////////////////////////////////////////////////////////
	<script>
		import { currentElNum } from './stores.js';
		...

		export let id 
		export let intersecting
		
		let containerEl
		
		// Option 1: Wrap evertything in a reactive statement
		// Draw the 'chart', with its background color based on whether the container 
		// is intersecting (in the second IntersectionObserver) instance
		$: {
			if (containerEl) {
				const container = d3.select(containerEl);
				container.appendSelect('svg')
					.attr('width', '100%')
					.attr('height', '600px')
					.transition().duration(500)
						.style('background', d => intersecting ? '#ee3e3e' : '#6b6065')
				if (intersecting) {
					currentElNum.set(id)
				}
			}
		}
	<\/script>
	<div class='content'>
		<h1>I am block #{id} and my intersection status is: {intersecting}</h1>
		<div class="container" bind:this="{containerEl}"></div>
	</div>

	///////////////////////////////////////////////////////////////
	///////////////////// StickyElement.svelte ////////////////////
	///////////////////////////////////////////////////////////////
	<script>
		import { currentElNum } from './stores.js';
	<\/script>

	<div id='sticky-element'>
		I am a sticky element and I update based on the intersecting element, which is:
		<h3>{$currentElNum}</h3>
	</div>

	<style lang='scss'>
		...
		#sticky-element {
			position: -webkit-sticky;
			position: sticky;
			top: 0px;
			z-index: 10;
			margin: auto;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			...
		}	
		...
	</style>
`;function Un(a){let e;return{c(){e=m("div")},l(n){e=b(n,"DIV",{}),g(e).forEach(d)},m(n,t){k(n,e,t)},p:D,i:D,o:D,d(n){n&&d(e)}}}function Rn(a){let e,n;return e=new Zt({props:{language:"javascript",source:Hn,showCopyButton:!0}}),{c(){M(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){P(e,t,s),n=!0},p:D,i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function Wn(a){let e,n,t,s,l,f;e=new In({});const c=[Rn,Un],o=[];function r(h,_){return 0}return s=r(),l=o[s]=c[s](a),{c(){M(e.$$.fragment),n=E(),t=m("div"),l.c(),this.h()},l(h){j(e.$$.fragment,h),n=I(h),t=b(h,"DIV",{class:!0});var _=g(t);l.l(_),_.forEach(d),this.h()},h(){y(t,"class","codeblock svelte-knnyit")},m(h,_){P(e,h,_),k(h,n,_),k(h,t,_),o[s].m(t,null),f=!0},p(h,_){l.p(h,_)},i(h){f||(T(e.$$.fragment,h),T(l),f=!0)},o(h){C(e.$$.fragment,h),C(l),f=!1},d(h){A(e,h),h&&d(n),h&&d(t),o[s].d()}}}function qn(a){let e,n;return{c(){e=m("h2"),n=u(a[1]),this.h()},l(t){e=b(t,"H2",{slot:!0,class:!0});var s=g(e);n=v(s,a[1]),s.forEach(d),this.h()},h(){y(e,"slot","title"),y(e,"class","svelte-knnyit")},m(t,s){k(t,e,s),i(e,n)},p(t,s){s&2&&bt(n,t[1])},d(t){t&&d(e)}}}function Fn(a){let e;return{c(){e=m("div"),this.h()},l(n){e=b(n,"DIV",{slot:!0,class:!0});var t=g(e);t.forEach(d),this.h()},h(){y(e,"slot","external-link"),y(e,"class","external-link")},m(n,t){k(n,e,t)},p:D,d(n){n&&d(e)}}}function Gn(a){let e,n,t,s,l,f;return e=new Yt({props:{internalLink:a[2],date:a[3],$$slots:{"external-link":[Fn],title:[qn],default:[Wn]},$$scope:{ctx:a}}}),l=new Bn({}),{c(){M(e.$$.fragment),n=E(),t=m("br"),s=E(),M(l.$$.fragment)},l(c){j(e.$$.fragment,c),n=I(c),t=b(c,"BR",{}),s=I(c),j(l.$$.fragment,c)},m(c,o){P(e,c,o),k(c,n,o),k(c,t,o),k(c,s,o),P(l,c,o),f=!0},p(c,o){const r={};o&4&&(r.internalLink=c[2]),o&8&&(r.date=c[3]),o&66&&(r.$$scope={dirty:o,ctx:c}),e.$set(r)},i(c){f||(T(e.$$.fragment,c),T(l.$$.fragment,c),f=!0)},o(c){C(e.$$.fragment,c),C(l.$$.fragment,c),f=!1},d(c){A(e,c),c&&d(n),c&&d(t),c&&d(s),A(l,c)}}}function Jn(a){let e,n;return e=new Xt({props:{id:a[0],$$slots:{default:[Gn]},$$scope:{ctx:a}}}),{c(){M(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){P(e,t,s),n=!0},p(t,[s]){const l={};s&1&&(l.id=t[0]),s&78&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function Kn(a,e,n){let{id:t}=e,{sectionTitle:s}=e,{internalLink:l}=e,{externalLink:f}=e,{externalLinkTitle:c}=e,{date:o}=e;return a.$$set=r=>{"id"in r&&n(0,t=r.id),"sectionTitle"in r&&n(1,s=r.sectionTitle),"internalLink"in r&&n(2,l=r.internalLink),"externalLink"in r&&n(4,f=r.externalLink),"externalLinkTitle"in r&&n(5,c=r.externalLinkTitle),"date"in r&&n(3,o=r.date)},[t,s,l,o,f,c]}class Qn extends ge{constructor(e){super(),_e(this,e,Kn,Jn,pe,{id:0,sectionTitle:1,internalLink:2,externalLink:4,externalLinkTitle:5,date:3})}}function Xn(a){let e,n,t,s,l,f,c,o,r,h,_,w,p,L,x,F,O,G,q,re,H,ce,de,he,Q,Ve,nt,Me,U,fe,X,je,it,we,Pe,Ae,ye,Be,ke,He,Ee,Ue,le,V,Y,Re,We,oe,z,st,Ie,qe,Fe,Oe,Ge,Le,$e,Je,Ke,Qe,Se,Te,Xe,Ye,Z,ue,Ze,De,J,ae,ze,ee,et;return{c(){e=m("p"),n=u(`Using just the built-in 
	`),t=m("a"),s=u("Intersection Observer API"),l=u(`, 
	affecting a change in the DOM when an element intersects the viewport.`),f=E(),c=m("h3"),o=u("Main points"),r=E(),h=m("ul"),_=m("li"),w=u("The built-in "),p=m("code"),L=u("IntersectionObserver"),x=u(` class takes in two 
		parameters, an `),F=m("code"),O=u("observerCallback"),G=u(" and "),q=m("code"),re=u("observerOptions"),H=u("."),ce=E(),de=m("li"),he=m("span"),Q=m("code"),Ve=u("observerOptions"),nt=u(`
		are things like the threshold at which an element is 
		considered intersecting (as a proportion of the total height of the element). 
		These are static properties.`),Me=E(),U=m("li"),fe=m("span"),X=m("code"),je=u("observerCallback"),it=u(`
		 determines what happens when the intersection event occurs. 
		In our case, we define a `),we=m("code"),Pe=u("inView"),Ae=u(` variable, which keeps track if the element is in view
		and update it from that callback function. 
		`),ye=m("br"),Be=u(`
		*Note that if we then wanted to run any logic that depends on `),ke=m("code"),He=u("inView"),Ee=u(`, it would need to 
		be wrapped in a reactive declaration. For example, if we then wanted to draw a D3 graph, we'd need to 
		make the code reactive, just like in other examples here.`),Ue=E(),le=m("li"),V=u("Then we "),Y=m("span"),Re=u("instantiate the IntersectionObserver and start observing the desired element from onMount"),We=u(`. 
		This is to make sure that the element we are observing has been mounted.`),oe=E(),z=m("li"),st=u("Finally, we use a class of "),Ie=m("code"),qe=u("active"),Fe=u(" on the observed element, where "),Oe=m("code"),Ge=u("active"),Le=u(`
		is defined in CSS and determines how the appearance of the changes when `),$e=m("code"),Je=u("inView = true"),Ke=u(`.
		`),Qe=m("br"),Se=u(`
		*Note that the note above about `),Te=m("code"),Xe=u("inView"),Ye=u(` only being able to affect a change if it is 
		wrapped in a reactive statement doesn't apply in this case. This is because Svelte-native DOM changes 
		(e.g. DOM-events from Svelte like `),Z=m("code"),ue=u("on:click"),Ze=u(" or class conditions like "),De=m("code"),J=u("class:active"),ae=u(` etc.) 
		are reactive by design.`),ze=E(),ee=m("h3"),et=u("Code highlights"),this.h()},l($){e=b($,"P",{class:!0});var R=g(e);n=v(R,`Using just the built-in 
	`),t=b(R,"A",{href:!0,target:!0,class:!0});var ie=g(t);s=v(ie,"Intersection Observer API"),ie.forEach(d),l=v(R,`, 
	affecting a change in the DOM when an element intersects the viewport.`),R.forEach(d),f=I($),c=b($,"H3",{class:!0});var rt=g(c);o=v(rt,"Main points"),rt.forEach(d),r=I($),h=b($,"UL",{class:!0});var W=g(h);_=b(W,"LI",{});var se=g(_);w=v(se,"The built-in "),p=b(se,"CODE",{});var lt=g(p);L=v(lt,"IntersectionObserver"),lt.forEach(d),x=v(se,` class takes in two 
		parameters, an `),F=b(se,"CODE",{});var xe=g(F);O=v(xe,"observerCallback"),xe.forEach(d),G=v(se," and "),q=b(se,"CODE",{});var ot=g(q);re=v(ot,"observerOptions"),ot.forEach(d),H=v(se,"."),se.forEach(d),ce=I(W),de=b(W,"LI",{});var tt=g(de);he=b(tt,"SPAN",{class:!0});var at=g(he);Q=b(at,"CODE",{});var ve=g(Q);Ve=v(ve,"observerOptions"),ve.forEach(d),at.forEach(d),nt=v(tt,`
		are things like the threshold at which an element is 
		considered intersecting (as a proportion of the total height of the element). 
		These are static properties.`),tt.forEach(d),Me=I(W),U=b(W,"LI",{});var te=g(U);fe=b(te,"SPAN",{class:!0});var Ne=g(fe);X=b(Ne,"CODE",{});var ct=g(X);je=v(ct,"observerCallback"),ct.forEach(d),Ne.forEach(d),it=v(te,`
		 determines what happens when the intersection event occurs. 
		In our case, we define a `),we=b(te,"CODE",{});var dt=g(we);Pe=v(dt,"inView"),dt.forEach(d),Ae=v(te,` variable, which keeps track if the element is in view
		and update it from that callback function. 
		`),ye=b(te,"BR",{}),Be=v(te,`
		*Note that if we then wanted to run any logic that depends on `),ke=b(te,"CODE",{});var ht=g(ke);He=v(ht,"inView"),ht.forEach(d),Ee=v(te,`, it would need to 
		be wrapped in a reactive declaration. For example, if we then wanted to draw a D3 graph, we'd need to 
		make the code reactive, just like in other examples here.`),te.forEach(d),Ue=I(W),le=b(W,"LI",{});var me=g(le);V=v(me,"Then we "),Y=b(me,"SPAN",{class:!0});var ft=g(Y);Re=v(ft,"instantiate the IntersectionObserver and start observing the desired element from onMount"),ft.forEach(d),We=v(me,`. 
		This is to make sure that the element we are observing has been mounted.`),me.forEach(d),oe=I(W),z=b(W,"LI",{});var N=g(z);st=v(N,"Finally, we use a class of "),Ie=b(N,"CODE",{});var be=g(Ie);qe=v(be,"active"),be.forEach(d),Fe=v(N," on the observed element, where "),Oe=b(N,"CODE",{});var ut=g(Oe);Ge=v(ut,"active"),ut.forEach(d),Le=v(N,`
		is defined in CSS and determines how the appearance of the changes when `),$e=b(N,"CODE",{});var S=g($e);Je=v(S,"inView = true"),S.forEach(d),Ke=v(N,`.
		`),Qe=b(N,"BR",{}),Se=v(N,`
		*Note that the note above about `),Te=b(N,"CODE",{});var B=g(Te);Xe=v(B,"inView"),B.forEach(d),Ye=v(N,` only being able to affect a change if it is 
		wrapped in a reactive statement doesn't apply in this case. This is because Svelte-native DOM changes 
		(e.g. DOM-events from Svelte like `),Z=b(N,"CODE",{});var gt=g(Z);ue=v(gt,"on:click"),gt.forEach(d),Ze=v(N," or class conditions like "),De=b(N,"CODE",{});var _t=g(De);J=v(_t,"class:active"),_t.forEach(d),ae=v(N,` etc.) 
		are reactive by design.`),N.forEach(d),W.forEach(d),ze=I($),ee=b($,"H3",{class:!0});var pt=g(ee);et=v(pt,"Code highlights"),pt.forEach(d),this.h()},h(){y(t,"href","https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"),y(t,"target","_blank"),y(t,"class","svelte-19j31zf"),y(e,"class","summary svelte-19j31zf"),y(c,"class","svelte-19j31zf"),y(he,"class","accent"),y(fe,"class","accent"),y(Y,"class","accent"),y(h,"class","svelte-19j31zf"),y(ee,"class","svelte-19j31zf")},m($,R){k($,e,R),i(e,n),i(e,t),i(t,s),i(e,l),k($,f,R),k($,c,R),i(c,o),k($,r,R),k($,h,R),i(h,_),i(_,w),i(_,p),i(p,L),i(_,x),i(_,F),i(F,O),i(_,G),i(_,q),i(q,re),i(_,H),i(h,ce),i(h,de),i(de,he),i(he,Q),i(Q,Ve),i(de,nt),i(h,Me),i(h,U),i(U,fe),i(fe,X),i(X,je),i(U,it),i(U,we),i(we,Pe),i(U,Ae),i(U,ye),i(U,Be),i(U,ke),i(ke,He),i(U,Ee),i(h,Ue),i(h,le),i(le,V),i(le,Y),i(Y,Re),i(le,We),i(h,oe),i(h,z),i(z,st),i(z,Ie),i(Ie,qe),i(z,Fe),i(z,Oe),i(Oe,Ge),i(z,Le),i(z,$e),i($e,Je),i(z,Ke),i(z,Qe),i(z,Se),i(z,Te),i(Te,Xe),i(z,Ye),i(z,Z),i(Z,ue),i(z,Ze),i(z,De),i(De,J),i(z,ae),k($,ze,R),k($,ee,R),i(ee,et)},p:D,i:D,o:D,d($){$&&d(e),$&&d(f),$&&d(c),$&&d(r),$&&d(h),$&&d(ze),$&&d(ee)}}}class Yn extends ge{constructor(e){super(),_e(this,e,null,Xn,pe,{})}}function Zn(a){let e,n,t,s,l;return{c(){e=m("section"),n=m("h3"),t=u(`When 50% of the element below is into the viewport, it will change colour.
    Scroll up and down the page to see.`),s=E(),l=m("div"),this.h()},l(f){e=b(f,"SECTION",{class:!0});var c=g(e);n=b(c,"H3",{class:!0});var o=g(n);t=v(o,`When 50% of the element below is into the viewport, it will change colour.
    Scroll up and down the page to see.`),o.forEach(d),s=I(c),l=b(c,"DIV",{id:!0,class:!0}),g(l).forEach(d),c.forEach(d),this.h()},h(){y(n,"class","svelte-1ous08w"),y(l,"id","observed-element"),y(l,"class","content-to-scroll-over svelte-1ous08w"),Rt(l,"active",a[0]),y(e,"class","svelte-1ous08w")},m(f,c){k(f,e,c),i(e,n),i(n,t),i(e,s),i(e,l)},p(f,[c]){c&1&&Rt(l,"active",f[0])},i:D,o:D,d(f){f&&d(e)}}}function ei(a,e,n){const t={threshold:.5};let s=!1;const l=f=>{for(const c of f)c.isIntersecting&&!s?n(0,s=!0):!c.isIntersecting&&s&&n(0,s=!1)};return Jt(()=>{const f=document.getElementById("observed-element");new IntersectionObserver(l,t).observe(f)}),[s]}class ti extends ge{constructor(e){super(),_e(this,e,ei,Zn,pe,{})}}const ni=`
<script>
  import { onMount } from 'svelte';  

  const observerOptions = {
    threshold: 0.5,
  };
  let inView = false; // track if element is in view
  // Callback for the observer to change the inView prop
  const observerCallback = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting && !inView) {
        inView = true;
      } else if (!entry.isIntersecting && inView) {
        inView = false;
      }
    }
  };

  // Instantiate the IntersectionObserver and start observing the desired element from onMount
  onMount(() => {
    // Select the element that we want to observe for coming into view w/ intersectionObserver
    const elementToObserve = document.getElementById('observed-element');
    // Instantiate a new IntersectionObserver instance
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    // Start observing the element
    observer.observe(elementToObserve);
  });

<\/script>

<section>
  <h3>
    When element below is 50% into the viewport, it will change colour.
    Scroll up and down the page to see. 
  </h3>
  <div id='observed-element' class='content-to-scroll-over' class:active={inView}></div>
</section>
`;function ii(a){let e;return{c(){e=m("div")},l(n){e=b(n,"DIV",{}),g(e).forEach(d)},m(n,t){k(n,e,t)},p:D,i:D,o:D,d(n){n&&d(e)}}}function si(a){let e,n;return e=new Zt({props:{language:"javascript",source:ni,showCopyButton:!0}}),{c(){M(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){P(e,t,s),n=!0},p:D,i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function ri(a){let e,n,t,s,l,f;e=new Yn({});const c=[si,ii],o=[];function r(h,_){return 0}return s=r(),l=o[s]=c[s](a),{c(){M(e.$$.fragment),n=E(),t=m("div"),l.c(),this.h()},l(h){j(e.$$.fragment,h),n=I(h),t=b(h,"DIV",{class:!0});var _=g(t);l.l(_),_.forEach(d),this.h()},h(){y(t,"class","codeblock svelte-knnyit")},m(h,_){P(e,h,_),k(h,n,_),k(h,t,_),o[s].m(t,null),f=!0},p(h,_){l.p(h,_)},i(h){f||(T(e.$$.fragment,h),T(l),f=!0)},o(h){C(e.$$.fragment,h),C(l),f=!1},d(h){A(e,h),h&&d(n),h&&d(t),o[s].d()}}}function li(a){let e,n;return{c(){e=m("h2"),n=u(a[1]),this.h()},l(t){e=b(t,"H2",{slot:!0,class:!0});var s=g(e);n=v(s,a[1]),s.forEach(d),this.h()},h(){y(e,"slot","title"),y(e,"class","svelte-knnyit")},m(t,s){k(t,e,s),i(e,n)},p(t,s){s&2&&bt(n,t[1])},d(t){t&&d(e)}}}function oi(a){let e;return{c(){e=m("div"),this.h()},l(n){e=b(n,"DIV",{slot:!0,class:!0});var t=g(e);t.forEach(d),this.h()},h(){y(e,"slot","external-link"),y(e,"class","external-link")},m(n,t){k(n,e,t)},p:D,d(n){n&&d(e)}}}function ai(a){let e,n,t,s,l,f;return e=new Yt({props:{internalLink:a[2],date:a[3],$$slots:{"external-link":[oi],title:[li],default:[ri]},$$scope:{ctx:a}}}),l=new ti({}),{c(){M(e.$$.fragment),n=E(),t=m("br"),s=E(),M(l.$$.fragment)},l(c){j(e.$$.fragment,c),n=I(c),t=b(c,"BR",{}),s=I(c),j(l.$$.fragment,c)},m(c,o){P(e,c,o),k(c,n,o),k(c,t,o),k(c,s,o),P(l,c,o),f=!0},p(c,o){const r={};o&4&&(r.internalLink=c[2]),o&8&&(r.date=c[3]),o&66&&(r.$$scope={dirty:o,ctx:c}),e.$set(r)},i(c){f||(T(e.$$.fragment,c),T(l.$$.fragment,c),f=!0)},o(c){C(e.$$.fragment,c),C(l.$$.fragment,c),f=!1},d(c){A(e,c),c&&d(n),c&&d(t),c&&d(s),A(l,c)}}}function ci(a){let e,n;return e=new Xt({props:{id:a[0],$$slots:{default:[ai]},$$scope:{ctx:a}}}),{c(){M(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){P(e,t,s),n=!0},p(t,[s]){const l={};s&1&&(l.id=t[0]),s&78&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function di(a,e,n){let{id:t}=e,{sectionTitle:s}=e,{internalLink:l}=e,{externalLink:f}=e,{externalLinkTitle:c}=e,{date:o}=e;return a.$$set=r=>{"id"in r&&n(0,t=r.id),"sectionTitle"in r&&n(1,s=r.sectionTitle),"internalLink"in r&&n(2,l=r.internalLink),"externalLink"in r&&n(4,f=r.externalLink),"externalLinkTitle"in r&&n(5,c=r.externalLinkTitle),"date"in r&&n(3,o=r.date)},[t,s,l,o,f,c]}class hi extends ge{constructor(e){super(),_e(this,e,di,ci,pe,{id:0,sectionTitle:1,internalLink:2,externalLink:4,externalLinkTitle:5,date:3})}}const fi=[{anchor:"#svelte-intersection-observer-lazy-loading",title:"Svelte Intersection Observer + lazy loading"},{anchor:"#vanilla-intersection-observer",title:"Vanilla Intersection Observer"}];function ui(a){let e,n;return{c(){e=m("h1"),n=u("Intersection Observer"),this.h()},l(t){e=b(t,"H1",{slot:!0});var s=g(e);n=v(s,"Intersection Observer"),s.forEach(d),this.h()},h(){y(e,"slot","title")},m(t,s){k(t,e,s),i(e,n)},p:D,d(t){t&&d(e)}}}function vi(a){let e,n,t,s,l,f,c,o;return e=new gn({props:{icon:kn,$$slots:{title:[ui]},$$scope:{ctx:a}}}),t=new _n({props:{menuItems:fi}}),l=new Qn({props:{id:"svelte-intersection-observer-lazy-loading",sectionTitle:"Svelte Intersection Observer lazy loading",externalLink:"https://svelte.dev/repl/310510e6e6c3464f9518c55b6ad50f25?version=3.48.0",externalLinkTitle:"Svelte repl",internalLink:"https://github.com/reuters-graphics/example_svelte-graph-patterns/tree/main/src/lib/components/observer/SvelteIntersectionObserverLazyLoading",date:"April 2022"}}),c=new hi({props:{id:"vanilla-intersection-observer",sectionTitle:"Vanilla Intersection Observer",externalLink:"https://svelte.dev/repl/d9bc0f84d467495991518091456fa01f?version=3.48.0",externalLinkTitle:"Svelte repl",internalLink:"https://github.com/reuters-graphics/example_svelte-graph-patterns/tree/main/src/lib/components/observer/VanillaIntersectionObserver",date:"April 2022"}}),{c(){M(e.$$.fragment),n=E(),M(t.$$.fragment),s=E(),M(l.$$.fragment),f=E(),M(c.$$.fragment)},l(r){j(e.$$.fragment,r),n=I(r),j(t.$$.fragment,r),s=I(r),j(l.$$.fragment,r),f=I(r),j(c.$$.fragment,r)},m(r,h){P(e,r,h),k(r,n,h),P(t,r,h),k(r,s,h),P(l,r,h),k(r,f,h),P(c,r,h),o=!0},p(r,[h]){const _={};h&1&&(_.$$scope={dirty:h,ctx:r}),e.$set(_)},i(r){o||(T(e.$$.fragment,r),T(t.$$.fragment,r),T(l.$$.fragment,r),T(c.$$.fragment,r),o=!0)},o(r){C(e.$$.fragment,r),C(t.$$.fragment,r),C(l.$$.fragment,r),C(c.$$.fragment,r),o=!1},d(r){A(e,r),r&&d(n),A(t,r),r&&d(s),A(l,r),r&&d(f),A(c,r)}}}class ki extends ge{constructor(e){super(),_e(this,e,null,vi,pe,{})}}export{ki as default};
