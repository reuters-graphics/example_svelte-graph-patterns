import{S as ge,i as _e,s as pe,e as m,t as u,k,c as b,a as g,h as v,d as c,m as I,b as w,g as E,J as i,E as C,F as nn,G as sn,H as rn,I as ln,q as T,o as D,_ as on,v as Jt,u as an,D as cn,j as Ve,$ as dn,M as Lt,w as M,x as j,y as A,B as P,n as Kt,p as Qt,P as hn,K as fn,Q as un,a0 as Rt}from"../../chunks/index-c1ea72d5.js";import"../../chunks/codeblocks-e4ede99b.js";import{s as vn,a as mn,b as bn,S as Xt,N as Yt,P as Zt,e as gn,M as _n}from"../../chunks/appendSelect-664fcfb9.js";import{d as pn,c as wn}from"../../chunks/index-0efaa515.js";import{w as yn}from"../../chunks/index-613b4b1e.js";import{o as En}from"../../chunks/noun-presentation-1320578-0041c878.js";import"../../chunks/paths-396f020f.js";function kn(l){let e,n,t,s,r,h,d,a,o,f,_,y,p,L,x,F,O,G,q,re,H,ce,de,he,Q,Me,it=0+"",je,U,fe,X,Ae,st=!0+"",we,Pe,Be,ye,He,Ee,Ue,ke,Re,le,V,Y,We,qe,oe,z,rt=.7+"",Ie,Fe,Ge,Oe,Je,Le,$e,Ke,Qe,Xe,Se,Te,Ye,Ze,Z,ue,et,De,J,ae,ze,ee,tt,$,R,ie,lt,W,se,ot,xe,at,nt,ct,ve,te,Ne,dt,ht,ft,me,ut,N,be,vt;return{c(){e=m("p"),n=u(`Using IntersectionObserver via the 
	`),t=m("a"),s=u("svlete-intersection-observer library"),r=u(`
	to lazy-load content once `),h=m("strong"),d=u("and"),a=u(` trigger changes to a content block when it comes into view 
	(intersects), while also passing intersecting element as prop to a sticky element on the page 
	via a Svelte store.`),o=k(),f=m("h3"),_=u("Main points"),y=k(),p=m("ul"),L=m("li"),x=m("span"),F=u("Use two separate intersection observers"),O=k(),G=m("li"),q=u(`We need two intersection observers if we want to do lazy loading and change 
		the element somehow after is has been lazy loaded. 
		If the elements don't need to lazy-load or if they don't need to 
		change in any way after they have first loaded, then we only need one 
		IntersectionObserver.`),re=k(),H=m("li"),ce=m("span"),de=u("The first (outer) intersection observer is for lazy loading."),he=u(`
		It observers each element and if the element enters the viewport (`),Q=m("code"),Me=u('threshold="'),je=u(it),U=u('"'),fe=u(`), 
		we load the element. This happens only once (`),X=m("code"),Ae=u('once="'),we=u(st),Pe=u('"'),Be=u(`), 
		which makes sense because we don't need to lazy-load more than once. 
		The lazy loading bit is achieved by adding the condition `),ye=m("code"),He=u("if intersecting"),Ee=u(`  
		as then we will only display the DOM element if it intersects the viewport.`),Ue=k(),ke=m("li"),Re=u(`In this particular example there is no need to use lazy loading actually, but if we were 
		loading really heavy chunks of content, e.g. HTML5 canvas elements with thousands of 
		shapes drawn in each of them, it would help performance to lazy-load each canvas as it comes into view,
		rather than trying to load all of them at once on page load/component mount.`),le=k(),V=m("li"),Y=m("span"),We=u(`The second (inner) intersection observer is there to affect a change 
		to the already lazy-loaded element based on some different intersecting condition.`),qe=u(`
		In this case, if the element becomes 70% visible (`),oe=m("code"),z=u('threshold="'),Ie=u(rt),Fe=u('"'),Ge=u(`), 
		it will change colour. 
		`),Oe=m("br"),Je=u(`
		(See `),Le=m("code"),$e=u(".style('background', d => intersecting ? '#ee3e3e' : '#6b6065')"),Ke=u(` in ContentElement.)
		`),Qe=m("br"),Xe=u(`
		Sidenote: The `),Se=m("code"),Te=u("threshold"),Ye=u(` prop of the IntersectionObserver here is 
		not the viewport threshold, but the proportion (0 to 1) of the intersecting element that 
		has to be visible in the viewport to trigger the intersecting prop to become true.`),Ze=k(),Z=m("li"),ue=m("span"),et=u("To update the content of the sticky element:"),De=k(),J=m("ul"),ae=m("li"),ze=u("- Initialise a "),ee=m("code"),tt=u("currentElNum"),$=u(" variable as a svelte store."),R=k(),ie=m("li"),lt=u("- Set the value of "),W=m("code"),se=u("currentElNum"),ot=u(` to the id corresponding 
				to the data entry bound to that element each time the second IntersectionObserver's 
				intersection condition is satisfied. 
				In other words, when an element is 70% visible in the viewport, 
				`),xe=m("code"),at=u("currentElNum"),nt=u(" gets updated with the id for the data entry bound to that element."),ct=k(),ve=m("li"),te=u("- Then the StickyElement imports "),Ne=m("code"),dt=u("currentElNum"),ht=u(" and its content gets dynamically updated based on it."),ft=k(),me=m("li"),ut=u("Beware that this is buggy if the height of the intersecting elements is small enough that multiple of them fit into the viewport."),N=k(),be=m("h3"),vt=u("Code highlights"),this.h()},l(S){e=b(S,"P",{class:!0});var B=g(e);n=v(B,`Using IntersectionObserver via the 
	`),t=b(B,"A",{href:!0,target:!0,class:!0});var gt=g(t);s=v(gt,"svlete-intersection-observer library"),gt.forEach(c),r=v(B,`
	to lazy-load content once `),h=b(B,"STRONG",{});var _t=g(h);d=v(_t,"and"),_t.forEach(c),a=v(B,` trigger changes to a content block when it comes into view 
	(intersects), while also passing intersecting element as prop to a sticky element on the page 
	via a Svelte store.`),B.forEach(c),o=I(S),f=b(S,"H3",{class:!0});var pt=g(f);_=v(pt,"Main points"),pt.forEach(c),y=I(S),p=b(S,"UL",{class:!0});var K=g(p);L=b(K,"LI",{});var $t=g(L);x=b($t,"SPAN",{class:!0});var St=g(x);F=v(St,"Use two separate intersection observers"),St.forEach(c),$t.forEach(c),O=I(K),G=b(K,"LI",{});var Tt=g(G);q=v(Tt,`We need two intersection observers if we want to do lazy loading and change 
		the element somehow after is has been lazy loaded. 
		If the elements don't need to lazy-load or if they don't need to 
		change in any way after they have first loaded, then we only need one 
		IntersectionObserver.`),Tt.forEach(c),re=I(K),H=b(K,"LI",{});var Ce=g(H);ce=b(Ce,"SPAN",{class:!0});var Dt=g(ce);de=v(Dt,"The first (outer) intersection observer is for lazy loading."),Dt.forEach(c),he=v(Ce,`
		It observers each element and if the element enters the viewport (`),Q=b(Ce,"CODE",{});var wt=g(Q);Me=v(wt,'threshold="'),je=v(wt,it),U=v(wt,'"'),wt.forEach(c),fe=v(Ce,`), 
		we load the element. This happens only once (`),X=b(Ce,"CODE",{});var yt=g(X);Ae=v(yt,'once="'),we=v(yt,st),Pe=v(yt,'"'),yt.forEach(c),Be=v(Ce,`), 
		which makes sense because we don't need to lazy-load more than once. 
		The lazy loading bit is achieved by adding the condition `),ye=b(Ce,"CODE",{});var Ct=g(ye);He=v(Ct,"if intersecting"),Ct.forEach(c),Ee=v(Ce,`  
		as then we will only display the DOM element if it intersects the viewport.`),Ce.forEach(c),Ue=I(K),ke=b(K,"LI",{});var zt=g(ke);Re=v(zt,`In this particular example there is no need to use lazy loading actually, but if we were 
		loading really heavy chunks of content, e.g. HTML5 canvas elements with thousands of 
		shapes drawn in each of them, it would help performance to lazy-load each canvas as it comes into view,
		rather than trying to load all of them at once on page load/component mount.`),zt.forEach(c),le=I(K),V=b(K,"LI",{});var ne=g(V);Y=b(ne,"SPAN",{class:!0});var xt=g(Y);We=v(xt,`The second (inner) intersection observer is there to affect a change 
		to the already lazy-loaded element based on some different intersecting condition.`),xt.forEach(c),qe=v(ne,`
		In this case, if the element becomes 70% visible (`),oe=b(ne,"CODE",{});var Et=g(oe);z=v(Et,'threshold="'),Ie=v(Et,rt),Fe=v(Et,'"'),Et.forEach(c),Ge=v(ne,`), 
		it will change colour. 
		`),Oe=b(ne,"BR",{}),Je=v(ne,`
		(See `),Le=b(ne,"CODE",{});var Nt=g(Le);$e=v(Nt,".style('background', d => intersecting ? '#ee3e3e' : '#6b6065')"),Nt.forEach(c),Ke=v(ne,` in ContentElement.)
		`),Qe=b(ne,"BR",{}),Xe=v(ne,`
		Sidenote: The `),Se=b(ne,"CODE",{});var Vt=g(Se);Te=v(Vt,"threshold"),Vt.forEach(c),Ye=v(ne,` prop of the IntersectionObserver here is 
		not the viewport threshold, but the proportion (0 to 1) of the intersecting element that 
		has to be visible in the viewport to trigger the intersecting prop to become true.`),ne.forEach(c),Ze=I(K),Z=b(K,"LI",{});var kt=g(Z);ue=b(kt,"SPAN",{class:!0});var Mt=g(ue);et=v(Mt,"To update the content of the sticky element:"),Mt.forEach(c),De=I(kt),J=b(kt,"UL",{class:!0});var mt=g(J);ae=b(mt,"LI",{});var It=g(ae);ze=v(It,"- Initialise a "),ee=b(It,"CODE",{});var jt=g(ee);tt=v(jt,"currentElNum"),jt.forEach(c),$=v(It," variable as a svelte store."),It.forEach(c),R=I(mt),ie=b(mt,"LI",{});var bt=g(ie);lt=v(bt,"- Set the value of "),W=b(bt,"CODE",{});var At=g(W);se=v(At,"currentElNum"),At.forEach(c),ot=v(bt,` to the id corresponding 
				to the data entry bound to that element each time the second IntersectionObserver's 
				intersection condition is satisfied. 
				In other words, when an element is 70% visible in the viewport, 
				`),xe=b(bt,"CODE",{});var Pt=g(xe);at=v(Pt,"currentElNum"),Pt.forEach(c),nt=v(bt," gets updated with the id for the data entry bound to that element."),bt.forEach(c),ct=I(mt),ve=b(mt,"LI",{});var Ot=g(ve);te=v(Ot,"- Then the StickyElement imports "),Ne=b(Ot,"CODE",{});var Bt=g(Ne);dt=v(Bt,"currentElNum"),Bt.forEach(c),ht=v(Ot," and its content gets dynamically updated based on it."),Ot.forEach(c),mt.forEach(c),kt.forEach(c),ft=I(K),me=b(K,"LI",{});var Ht=g(me);ut=v(Ht,"Beware that this is buggy if the height of the intersecting elements is small enough that multiple of them fit into the viewport."),Ht.forEach(c),K.forEach(c),N=I(S),be=b(S,"H3",{class:!0});var Ut=g(be);vt=v(Ut,"Code highlights"),Ut.forEach(c),this.h()},h(){w(t,"href","https://github.com/metonym/svelte-intersection-observer"),w(t,"target","_blank"),w(t,"class","svelte-19j31zf"),w(e,"class","summary svelte-19j31zf"),w(f,"class","svelte-19j31zf"),w(x,"class","accent"),w(ce,"class","accent"),w(Y,"class","accent"),w(ue,"class","accent"),w(J,"class","svelte-19j31zf"),w(p,"class","svelte-19j31zf"),w(be,"class","svelte-19j31zf")},m(S,B){E(S,e,B),i(e,n),i(e,t),i(t,s),i(e,r),i(e,h),i(h,d),i(e,a),E(S,o,B),E(S,f,B),i(f,_),E(S,y,B),E(S,p,B),i(p,L),i(L,x),i(x,F),i(p,O),i(p,G),i(G,q),i(p,re),i(p,H),i(H,ce),i(ce,de),i(H,he),i(H,Q),i(Q,Me),i(Q,je),i(Q,U),i(H,fe),i(H,X),i(X,Ae),i(X,we),i(X,Pe),i(H,Be),i(H,ye),i(ye,He),i(H,Ee),i(p,Ue),i(p,ke),i(ke,Re),i(p,le),i(p,V),i(V,Y),i(Y,We),i(V,qe),i(V,oe),i(oe,z),i(oe,Ie),i(oe,Fe),i(V,Ge),i(V,Oe),i(V,Je),i(V,Le),i(Le,$e),i(V,Ke),i(V,Qe),i(V,Xe),i(V,Se),i(Se,Te),i(V,Ye),i(p,Ze),i(p,Z),i(Z,ue),i(ue,et),i(Z,De),i(Z,J),i(J,ae),i(ae,ze),i(ae,ee),i(ee,tt),i(ae,$),i(J,R),i(J,ie),i(ie,lt),i(ie,W),i(W,se),i(ie,ot),i(ie,xe),i(xe,at),i(ie,nt),i(J,ct),i(J,ve),i(ve,te),i(ve,Ne),i(Ne,dt),i(ve,ht),i(p,ft),i(p,me),i(me,ut),E(S,N,B),E(S,be,B),i(be,vt)},p:C,i:C,o:C,d(S){S&&c(e),S&&c(o),S&&c(f),S&&c(y),S&&c(p),S&&c(N),S&&c(be)}}}class In extends ge{constructor(e){super(),_e(this,e,null,kn,pe,{})}}const On=l=>({intersecting:l&1,entry:l&2,observer:l&4}),Wt=l=>({intersecting:l[0],entry:l[1],observer:l[2]});function Ln(l){let e;const n=l[9].default,t=nn(n,l,l[8],Wt);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,r){t&&t.m(s,r),e=!0},p(s,[r]){t&&t.p&&(!e||r&263)&&sn(t,n,s,s[8],e?ln(n,s[8],r,On):rn(s[8]),Wt)},i(s){e||(T(t,s),e=!0)},o(s){D(t,s),e=!1},d(s){t&&t.d(s)}}}function $n(l,e,n){let{$$slots:t={},$$scope:s}=e,{element:r=null}=e,{once:h=!1}=e,{intersecting:d=!1}=e,{root:a=null}=e,{rootMargin:o="0px"}=e,{threshold:f=0}=e,{entry:_=null}=e,{observer:y=null}=e;const p=on();let L=null,x=null;const F=()=>{n(2,y=new IntersectionObserver(O=>{O.forEach(G=>{n(1,_=G),n(0,d=G.isIntersecting)})},{root:a,rootMargin:o,threshold:f}))};return Jt(()=>(F(),()=>{y&&(y.disconnect(),n(2,y=null))})),an(async()=>{_!==null&&(p("observe",_),_.isIntersecting&&(p("intersect",_),h&&y.unobserve(r))),await cn(),r!==null&&r!==x&&(y.observe(r),x!==null&&y.unobserve(x),x=r),L&&o!==L&&(y.disconnect(),x=null,F()),L=o}),l.$$set=O=>{"element"in O&&n(3,r=O.element),"once"in O&&n(4,h=O.once),"intersecting"in O&&n(0,d=O.intersecting),"root"in O&&n(5,a=O.root),"rootMargin"in O&&n(6,o=O.rootMargin),"threshold"in O&&n(7,f=O.threshold),"entry"in O&&n(1,_=O.entry),"observer"in O&&n(2,y=O.observer),"$$scope"in O&&n(8,s=O.$$scope)},[d,_,y,r,h,a,o,f,s,t]}class en extends ge{constructor(e){super(),_e(this,e,$n,Ln,pe,{element:3,once:4,intersecting:0,root:5,rootMargin:6,threshold:7,entry:1,observer:2})}}const tn=yn(-1);function Sn(l){let e,n,t,s;return{c(){e=m("div"),n=u(`I am a sticky element and I update based on the intersecting element, which is:
	`),t=m("h3"),s=u(l[0]),this.h()},l(r){e=b(r,"DIV",{id:!0,class:!0});var h=g(e);n=v(h,`I am a sticky element and I update based on the intersecting element, which is:
	`),t=b(h,"H3",{class:!0});var d=g(t);s=v(d,l[0]),d.forEach(c),h.forEach(c),this.h()},h(){w(t,"class","svelte-1t17e91"),w(e,"id","sticky-element"),w(e,"class","svelte-1t17e91")},m(r,h){E(r,e,h),i(e,n),i(e,t),i(t,s)},p(r,[h]){h&1&&Ve(s,r[0])},i:C,o:C,d(r){r&&c(e)}}}function Tn(l,e,n){let t;return dn(l,tn,s=>n(0,t=s)),[t]}class Dn extends ge{constructor(e){super(),_e(this,e,Tn,Sn,pe,{})}}function Cn(l){let e,n,t,s,r,h,d,a,o,f,_;return{c(){e=m("div"),n=m("h1"),t=u("I am block #"),s=u(l[0]),r=u(" and my intersection status is: "),h=u(l[1]),d=k(),a=m("p"),o=u(l[2]),f=k(),_=m("div"),this.h()},l(y){e=b(y,"DIV",{class:!0});var p=g(e);n=b(p,"H1",{class:!0});var L=g(n);t=v(L,"I am block #"),s=v(L,l[0]),r=v(L," and my intersection status is: "),h=v(L,l[1]),L.forEach(c),d=I(p),a=b(p,"P",{class:!0});var x=g(a);o=v(x,l[2]),x.forEach(c),f=I(p),_=b(p,"DIV",{class:!0}),g(_).forEach(c),p.forEach(c),this.h()},h(){w(n,"class","svelte-16oryz2"),w(a,"class","svelte-16oryz2"),w(_,"class","container"),w(e,"class","content svelte-16oryz2")},m(y,p){E(y,e,p),i(e,n),i(n,t),i(n,s),i(n,r),i(n,h),i(e,d),i(e,a),i(a,o),i(e,f),i(e,_),l[5](_)},p(y,[p]){p&1&&Ve(s,y[0]),p&2&&Ve(h,y[1]),p&4&&Ve(o,y[2])},i:C,o:C,d(y){y&&c(e),l[5](null)}}}function zn(l,e,n){vn.prototype.appendSelect=mn;let{id:t}=e,{intersecting:s}=e,{text:r}=e,h;function d(a){Lt[a?"unshift":"push"](()=>{h=a,n(3,h)})}return l.$$set=a=>{"id"in a&&n(0,t=a.id),"intersecting"in a&&n(1,s=a.intersecting),"text"in a&&n(2,r=a.text)},l.$$.update=()=>{l.$$.dirty&27&&h&&(bn(h).appendSelect("svg").attr("width","100%").attr("height","600px").transition().duration(500).style("background",o=>s?"#ee3e3e":"#6b6065"),s&&tn.set(t))},[t,s,r,h,pn,d]}class xn extends ge{constructor(e){super(),_e(this,e,zn,Cn,pe,{id:0,intersecting:1,text:2})}}const qt=[{id:0,text:"some content text"},{id:1,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{id:2,text:"Ut enim ad minim veniam, uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{id:3,text:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{id:4,text:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}];function Ft(l,e,n){const t=l.slice();return t[16]=e[n],t[17]=e,t[18]=n,t}function Nn(l){let e,n;return{c(){e=m("div"),n=u("loading..."),this.h()},l(t){e=b(t,"DIV",{class:!0});var s=g(e);n=v(s,"loading..."),s.forEach(c),this.h()},h(){w(e,"class","placeholder svelte-1wdlev2")},m(t,s){E(t,e,s),i(e,n)},p:C,i:C,o:C,d(t){t&&c(e)}}}function Vn(l){let e,n;return e=new en({props:{element:l[1][l[18]],threshold:.7,once:!1,$$slots:{default:[Mn,({intersecting:t})=>({3:t}),({intersecting:t})=>t?8:0]},$$scope:{ctx:l}}}),{c(){M(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){A(e,t,s),n=!0},p(t,s){const r={};s&2&&(r.element=t[1][t[18]]),s&524298&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function Mn(l){let e,n,t=l[18],s,r;n=new xn({props:{id:l[16].id,intersecting:l[3],text:l[16].text}});const h=()=>l[4](e,t),d=()=>l[4](null,t);return{c(){e=m("div"),M(n.$$.fragment)},l(a){e=b(a,"DIV",{});var o=g(e);j(n.$$.fragment,o),o.forEach(c)},m(a,o){E(a,e,o),A(n,e,null),h(),r=!0},p(a,o){l=a;const f={};o&8&&(f.intersecting=l[3]),n.$set(f),t!==l[18]&&(d(),t=l[18],h())},i(a){r||(T(n.$$.fragment,a),s||fn(()=>{s=un(e,wn,{duration:800}),s.start()}),r=!0)},o(a){D(n.$$.fragment,a),r=!1},d(a){a&&c(e),P(n),d()}}}function jn(l){let e,n,t,s=l[18],r,h;const d=[Vn,Nn],a=[];function o(y,p){return y[2]?0:1}n=o(l),t=a[n]=d[n](l);const f=()=>l[5](e,s),_=()=>l[5](null,s);return{c(){e=m("div"),t.c(),r=k()},l(y){e=b(y,"DIV",{});var p=g(e);t.l(p),p.forEach(c),r=I(y)},m(y,p){E(y,e,p),a[n].m(e,null),f(),E(y,r,p),h=!0},p(y,p){l=y;let L=n;n=o(l),n===L?a[n].p(l,p):(Kt(),D(a[L],1,1,()=>{a[L]=null}),Qt(),t=a[n],t?t.p(l,p):(t=a[n]=d[n](l),t.c()),T(t,1),t.m(e,null)),s!==l[18]&&(_(),s=l[18],f())},i(y){h||(T(t),h=!0)},o(y){D(t),h=!1},d(y){y&&c(e),a[n].d(),_(),y&&c(r)}}}function Gt(l){let e,n;return e=new en({props:{element:l[0][l[18]],threshold:0,once:!0,$$slots:{default:[jn,({intersecting:t})=>({2:t}),({intersecting:t})=>t?4:0]},$$scope:{ctx:l}}}),{c(){M(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){A(e,t,s),n=!0},p(t,s){const r={};s&1&&(r.element=t[0][t[18]]),s&524295&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function An(l){let e,n,t,s;n=new Dn({});let r=qt,h=[];for(let a=0;a<r.length;a+=1)h[a]=Gt(Ft(l,r,a));const d=a=>D(h[a],1,1,()=>{h[a]=null});return{c(){e=m("section"),M(n.$$.fragment),t=k();for(let a=0;a<h.length;a+=1)h[a].c()},l(a){e=b(a,"SECTION",{});var o=g(e);j(n.$$.fragment,o),t=I(o);for(let f=0;f<h.length;f+=1)h[f].l(o);o.forEach(c)},m(a,o){E(a,e,o),A(n,e,null),i(e,t);for(let f=0;f<h.length;f+=1)h[f].m(e,null);s=!0},p(a,[o]){if(o&15){r=qt;let f;for(f=0;f<r.length;f+=1){const _=Ft(a,r,f);h[f]?(h[f].p(_,o),T(h[f],1)):(h[f]=Gt(_),h[f].c(),T(h[f],1),h[f].m(e,null))}for(Kt(),f=r.length;f<h.length;f+=1)d(f);Qt()}},i(a){if(!s){T(n.$$.fragment,a);for(let o=0;o<r.length;o+=1)T(h[o]);s=!0}},o(a){D(n.$$.fragment,a),h=h.filter(Boolean);for(let o=0;o<h.length;o+=1)D(h[o]);s=!1},d(a){a&&c(e),P(n),hn(h,a)}}}function Pn(l,e,n){let t,s,r,h,d;const a=[t,s,r,h,d];let o,f,_,y,p;const L=[o,f,_,y,p];let x,F;function O(q,re){Lt[q?"unshift":"push"](()=>{L[re]=q,n(1,L)})}function G(q,re){Lt[q?"unshift":"push"](()=>{a[re]=q,n(0,a)})}return[a,L,x,F,O,G]}class Bn extends ge{constructor(e){super(),_e(this,e,Pn,An,pe,{})}}const Hn=`
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
`;function Un(l){let e;return{c(){e=m("div")},l(n){e=b(n,"DIV",{}),g(e).forEach(c)},m(n,t){E(n,e,t)},p:C,i:C,o:C,d(n){n&&c(e)}}}function Rn(l){let e,n;return e=new Zt({props:{language:"javascript",source:Hn,showCopyButton:!0}}),{c(){M(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){A(e,t,s),n=!0},p:C,i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function Wn(l){let e,n,t,s,r,h;e=new In({});const d=[Rn,Un],a=[];function o(f,_){return 0}return s=o(),r=a[s]=d[s](l),{c(){M(e.$$.fragment),n=k(),t=m("div"),r.c(),this.h()},l(f){j(e.$$.fragment,f),n=I(f),t=b(f,"DIV",{class:!0});var _=g(t);r.l(_),_.forEach(c),this.h()},h(){w(t,"class","codeblock svelte-knnyit")},m(f,_){A(e,f,_),E(f,n,_),E(f,t,_),a[s].m(t,null),h=!0},p(f,_){r.p(f,_)},i(f){h||(T(e.$$.fragment,f),T(r),h=!0)},o(f){D(e.$$.fragment,f),D(r),h=!1},d(f){P(e,f),f&&c(n),f&&c(t),a[s].d()}}}function qn(l){let e,n;return{c(){e=m("h2"),n=u(l[1]),this.h()},l(t){e=b(t,"H2",{slot:!0,class:!0});var s=g(e);n=v(s,l[1]),s.forEach(c),this.h()},h(){w(e,"slot","title"),w(e,"class","svelte-knnyit")},m(t,s){E(t,e,s),i(e,n)},p(t,s){s&2&&Ve(n,t[1])},d(t){t&&c(e)}}}function Fn(l){let e,n,t;return{c(){e=m("div"),n=m("a"),t=u(l[4]),this.h()},l(s){e=b(s,"DIV",{slot:!0,class:!0});var r=g(e);n=b(r,"A",{href:!0});var h=g(n);t=v(h,l[4]),h.forEach(c),r.forEach(c),this.h()},h(){w(n,"href",l[3]),w(e,"slot","external-link"),w(e,"class","external-link")},m(s,r){E(s,e,r),i(e,n),i(n,t)},p(s,r){r&16&&Ve(t,s[4]),r&8&&w(n,"href",s[3])},d(s){s&&c(e)}}}function Gn(l){let e,n,t,s,r,h;return e=new Yt({props:{internalLink:l[2],date:l[5],$$slots:{"external-link":[Fn],title:[qn],default:[Wn]},$$scope:{ctx:l}}}),r=new Bn({}),{c(){M(e.$$.fragment),n=k(),t=m("br"),s=k(),M(r.$$.fragment)},l(d){j(e.$$.fragment,d),n=I(d),t=b(d,"BR",{}),s=I(d),j(r.$$.fragment,d)},m(d,a){A(e,d,a),E(d,n,a),E(d,t,a),E(d,s,a),A(r,d,a),h=!0},p(d,a){const o={};a&4&&(o.internalLink=d[2]),a&32&&(o.date=d[5]),a&90&&(o.$$scope={dirty:a,ctx:d}),e.$set(o)},i(d){h||(T(e.$$.fragment,d),T(r.$$.fragment,d),h=!0)},o(d){D(e.$$.fragment,d),D(r.$$.fragment,d),h=!1},d(d){P(e,d),d&&c(n),d&&c(t),d&&c(s),P(r,d)}}}function Jn(l){let e,n;return e=new Xt({props:{id:l[0],$$slots:{default:[Gn]},$$scope:{ctx:l}}}),{c(){M(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){A(e,t,s),n=!0},p(t,[s]){const r={};s&1&&(r.id=t[0]),s&126&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function Kn(l,e,n){let{id:t}=e,{sectionTitle:s}=e,{internalLink:r}=e,{externalLink:h}=e,{externalLinkTitle:d}=e,{date:a}=e;return l.$$set=o=>{"id"in o&&n(0,t=o.id),"sectionTitle"in o&&n(1,s=o.sectionTitle),"internalLink"in o&&n(2,r=o.internalLink),"externalLink"in o&&n(3,h=o.externalLink),"externalLinkTitle"in o&&n(4,d=o.externalLinkTitle),"date"in o&&n(5,a=o.date)},[t,s,r,h,d,a]}class Qn extends ge{constructor(e){super(),_e(this,e,Kn,Jn,pe,{id:0,sectionTitle:1,internalLink:2,externalLink:3,externalLinkTitle:4,date:5})}}function Xn(l){let e,n,t,s,r,h,d,a,o,f,_,y,p,L,x,F,O,G,q,re,H,ce,de,he,Q,Me,it,je,U,fe,X,Ae,st,we,Pe,Be,ye,He,Ee,Ue,ke,Re,le,V,Y,We,qe,oe,z,rt,Ie,Fe,Ge,Oe,Je,Le,$e,Ke,Qe,Xe,Se,Te,Ye,Ze,Z,ue,et,De,J,ae,ze,ee,tt;return{c(){e=m("p"),n=u(`Using just the built-in 
	`),t=m("a"),s=u("Intersection Observer API"),r=u(`, 
	affecting a change in the DOM when an element intersects the viewport.`),h=k(),d=m("h3"),a=u("Main points"),o=k(),f=m("ul"),_=m("li"),y=u("The built-in "),p=m("code"),L=u("IntersectionObserver"),x=u(` class takes in two 
		parameters, an `),F=m("code"),O=u("observerCallback"),G=u(" and "),q=m("code"),re=u("observerOptions"),H=u("."),ce=k(),de=m("li"),he=m("span"),Q=m("code"),Me=u("observerOptions"),it=u(`
		are things like the threshold at which an element is 
		considered intersecting (as a proportion of the total height of the element). 
		These are static properties.`),je=k(),U=m("li"),fe=m("span"),X=m("code"),Ae=u("observerCallback"),st=u(`
		 determines what happens when the intersection event occurs. 
		In our case, we define a `),we=m("code"),Pe=u("inView"),Be=u(` variable, which keeps track if the element is in view
		and update it from that callback function. 
		`),ye=m("br"),He=u(`
		*Note that if we then wanted to run any logic that depends on `),Ee=m("code"),Ue=u("inView"),ke=u(`, it would need to 
		be wrapped in a reactive declaration. For example, if we then wanted to draw a D3 graph, we'd need to 
		make the code reactive, just like in other examples here.`),Re=k(),le=m("li"),V=u("Then we "),Y=m("span"),We=u("instantiate the IntersectionObserver and start observing the desired element from onMount"),qe=u(`. 
		This is to make sure that the element we are observing has been mounted.`),oe=k(),z=m("li"),rt=u("Finally, we use a class of "),Ie=m("code"),Fe=u("active"),Ge=u(" on the observed element, where "),Oe=m("code"),Je=u("active"),Le=u(`
		is defined in CSS and determines how the appearance of the changes when `),$e=m("code"),Ke=u("inView = true"),Qe=u(`.
		`),Xe=m("br"),Se=u(`
		*Note that the note above about `),Te=m("code"),Ye=u("inView"),Ze=u(` only being able to affect a change if it is 
		wrapped in a reactive statement doesn't apply in this case. This is because Svelte-native DOM changes 
		(e.g. DOM-events from Svelte like `),Z=m("code"),ue=u("on:click"),et=u(" or class conditions like "),De=m("code"),J=u("class:active"),ae=u(` etc.) 
		are reactive by design.`),ze=k(),ee=m("h3"),tt=u("Code highlights"),this.h()},l($){e=b($,"P",{class:!0});var R=g(e);n=v(R,`Using just the built-in 
	`),t=b(R,"A",{href:!0,target:!0,class:!0});var ie=g(t);s=v(ie,"Intersection Observer API"),ie.forEach(c),r=v(R,`, 
	affecting a change in the DOM when an element intersects the viewport.`),R.forEach(c),h=I($),d=b($,"H3",{class:!0});var lt=g(d);a=v(lt,"Main points"),lt.forEach(c),o=I($),f=b($,"UL",{class:!0});var W=g(f);_=b(W,"LI",{});var se=g(_);y=v(se,"The built-in "),p=b(se,"CODE",{});var ot=g(p);L=v(ot,"IntersectionObserver"),ot.forEach(c),x=v(se,` class takes in two 
		parameters, an `),F=b(se,"CODE",{});var xe=g(F);O=v(xe,"observerCallback"),xe.forEach(c),G=v(se," and "),q=b(se,"CODE",{});var at=g(q);re=v(at,"observerOptions"),at.forEach(c),H=v(se,"."),se.forEach(c),ce=I(W),de=b(W,"LI",{});var nt=g(de);he=b(nt,"SPAN",{class:!0});var ct=g(he);Q=b(ct,"CODE",{});var ve=g(Q);Me=v(ve,"observerOptions"),ve.forEach(c),ct.forEach(c),it=v(nt,`
		are things like the threshold at which an element is 
		considered intersecting (as a proportion of the total height of the element). 
		These are static properties.`),nt.forEach(c),je=I(W),U=b(W,"LI",{});var te=g(U);fe=b(te,"SPAN",{class:!0});var Ne=g(fe);X=b(Ne,"CODE",{});var dt=g(X);Ae=v(dt,"observerCallback"),dt.forEach(c),Ne.forEach(c),st=v(te,`
		 determines what happens when the intersection event occurs. 
		In our case, we define a `),we=b(te,"CODE",{});var ht=g(we);Pe=v(ht,"inView"),ht.forEach(c),Be=v(te,` variable, which keeps track if the element is in view
		and update it from that callback function. 
		`),ye=b(te,"BR",{}),He=v(te,`
		*Note that if we then wanted to run any logic that depends on `),Ee=b(te,"CODE",{});var ft=g(Ee);Ue=v(ft,"inView"),ft.forEach(c),ke=v(te,`, it would need to 
		be wrapped in a reactive declaration. For example, if we then wanted to draw a D3 graph, we'd need to 
		make the code reactive, just like in other examples here.`),te.forEach(c),Re=I(W),le=b(W,"LI",{});var me=g(le);V=v(me,"Then we "),Y=b(me,"SPAN",{class:!0});var ut=g(Y);We=v(ut,"instantiate the IntersectionObserver and start observing the desired element from onMount"),ut.forEach(c),qe=v(me,`. 
		This is to make sure that the element we are observing has been mounted.`),me.forEach(c),oe=I(W),z=b(W,"LI",{});var N=g(z);rt=v(N,"Finally, we use a class of "),Ie=b(N,"CODE",{});var be=g(Ie);Fe=v(be,"active"),be.forEach(c),Ge=v(N," on the observed element, where "),Oe=b(N,"CODE",{});var vt=g(Oe);Je=v(vt,"active"),vt.forEach(c),Le=v(N,`
		is defined in CSS and determines how the appearance of the changes when `),$e=b(N,"CODE",{});var S=g($e);Ke=v(S,"inView = true"),S.forEach(c),Qe=v(N,`.
		`),Xe=b(N,"BR",{}),Se=v(N,`
		*Note that the note above about `),Te=b(N,"CODE",{});var B=g(Te);Ye=v(B,"inView"),B.forEach(c),Ze=v(N,` only being able to affect a change if it is 
		wrapped in a reactive statement doesn't apply in this case. This is because Svelte-native DOM changes 
		(e.g. DOM-events from Svelte like `),Z=b(N,"CODE",{});var gt=g(Z);ue=v(gt,"on:click"),gt.forEach(c),et=v(N," or class conditions like "),De=b(N,"CODE",{});var _t=g(De);J=v(_t,"class:active"),_t.forEach(c),ae=v(N,` etc.) 
		are reactive by design.`),N.forEach(c),W.forEach(c),ze=I($),ee=b($,"H3",{class:!0});var pt=g(ee);tt=v(pt,"Code highlights"),pt.forEach(c),this.h()},h(){w(t,"href","https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"),w(t,"target","_blank"),w(t,"class","svelte-19j31zf"),w(e,"class","summary svelte-19j31zf"),w(d,"class","svelte-19j31zf"),w(he,"class","accent"),w(fe,"class","accent"),w(Y,"class","accent"),w(f,"class","svelte-19j31zf"),w(ee,"class","svelte-19j31zf")},m($,R){E($,e,R),i(e,n),i(e,t),i(t,s),i(e,r),E($,h,R),E($,d,R),i(d,a),E($,o,R),E($,f,R),i(f,_),i(_,y),i(_,p),i(p,L),i(_,x),i(_,F),i(F,O),i(_,G),i(_,q),i(q,re),i(_,H),i(f,ce),i(f,de),i(de,he),i(he,Q),i(Q,Me),i(de,it),i(f,je),i(f,U),i(U,fe),i(fe,X),i(X,Ae),i(U,st),i(U,we),i(we,Pe),i(U,Be),i(U,ye),i(U,He),i(U,Ee),i(Ee,Ue),i(U,ke),i(f,Re),i(f,le),i(le,V),i(le,Y),i(Y,We),i(le,qe),i(f,oe),i(f,z),i(z,rt),i(z,Ie),i(Ie,Fe),i(z,Ge),i(z,Oe),i(Oe,Je),i(z,Le),i(z,$e),i($e,Ke),i(z,Qe),i(z,Xe),i(z,Se),i(z,Te),i(Te,Ye),i(z,Ze),i(z,Z),i(Z,ue),i(z,et),i(z,De),i(De,J),i(z,ae),E($,ze,R),E($,ee,R),i(ee,tt)},p:C,i:C,o:C,d($){$&&c(e),$&&c(h),$&&c(d),$&&c(o),$&&c(f),$&&c(ze),$&&c(ee)}}}class Yn extends ge{constructor(e){super(),_e(this,e,null,Xn,pe,{})}}function Zn(l){let e,n,t,s,r;return{c(){e=m("section"),n=m("h3"),t=u(`When 50% of the element below is into the viewport, it will change colour.
    Scroll up and down the page to see.`),s=k(),r=m("div"),this.h()},l(h){e=b(h,"SECTION",{class:!0});var d=g(e);n=b(d,"H3",{class:!0});var a=g(n);t=v(a,`When 50% of the element below is into the viewport, it will change colour.
    Scroll up and down the page to see.`),a.forEach(c),s=I(d),r=b(d,"DIV",{id:!0,class:!0}),g(r).forEach(c),d.forEach(c),this.h()},h(){w(n,"class","svelte-1ous08w"),w(r,"id","observed-element"),w(r,"class","content-to-scroll-over svelte-1ous08w"),Rt(r,"active",l[0]),w(e,"class","svelte-1ous08w")},m(h,d){E(h,e,d),i(e,n),i(n,t),i(e,s),i(e,r)},p(h,[d]){d&1&&Rt(r,"active",h[0])},i:C,o:C,d(h){h&&c(e)}}}function ei(l,e,n){const t={threshold:.5};let s=!1;const r=h=>{for(const d of h)d.isIntersecting&&!s?n(0,s=!0):!d.isIntersecting&&s&&n(0,s=!1)};return Jt(()=>{const h=document.getElementById("observed-element");new IntersectionObserver(r,t).observe(h)}),[s]}class ti extends ge{constructor(e){super(),_e(this,e,ei,Zn,pe,{})}}const ni=`
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
`;function ii(l){let e;return{c(){e=m("div")},l(n){e=b(n,"DIV",{}),g(e).forEach(c)},m(n,t){E(n,e,t)},p:C,i:C,o:C,d(n){n&&c(e)}}}function si(l){let e,n;return e=new Zt({props:{language:"javascript",source:ni,showCopyButton:!0}}),{c(){M(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){A(e,t,s),n=!0},p:C,i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function ri(l){let e,n,t,s,r,h;e=new Yn({});const d=[si,ii],a=[];function o(f,_){return 0}return s=o(),r=a[s]=d[s](l),{c(){M(e.$$.fragment),n=k(),t=m("div"),r.c(),this.h()},l(f){j(e.$$.fragment,f),n=I(f),t=b(f,"DIV",{class:!0});var _=g(t);r.l(_),_.forEach(c),this.h()},h(){w(t,"class","codeblock svelte-knnyit")},m(f,_){A(e,f,_),E(f,n,_),E(f,t,_),a[s].m(t,null),h=!0},p(f,_){r.p(f,_)},i(f){h||(T(e.$$.fragment,f),T(r),h=!0)},o(f){D(e.$$.fragment,f),D(r),h=!1},d(f){P(e,f),f&&c(n),f&&c(t),a[s].d()}}}function li(l){let e,n;return{c(){e=m("h2"),n=u(l[1]),this.h()},l(t){e=b(t,"H2",{slot:!0,class:!0});var s=g(e);n=v(s,l[1]),s.forEach(c),this.h()},h(){w(e,"slot","title"),w(e,"class","svelte-knnyit")},m(t,s){E(t,e,s),i(e,n)},p(t,s){s&2&&Ve(n,t[1])},d(t){t&&c(e)}}}function oi(l){let e,n,t;return{c(){e=m("div"),n=m("a"),t=u(l[4]),this.h()},l(s){e=b(s,"DIV",{slot:!0,class:!0});var r=g(e);n=b(r,"A",{href:!0});var h=g(n);t=v(h,l[4]),h.forEach(c),r.forEach(c),this.h()},h(){w(n,"href",l[3]),w(e,"slot","external-link"),w(e,"class","external-link")},m(s,r){E(s,e,r),i(e,n),i(n,t)},p(s,r){r&16&&Ve(t,s[4]),r&8&&w(n,"href",s[3])},d(s){s&&c(e)}}}function ai(l){let e,n,t,s,r,h;return e=new Yt({props:{internalLink:l[2],date:l[5],$$slots:{"external-link":[oi],title:[li],default:[ri]},$$scope:{ctx:l}}}),r=new ti({}),{c(){M(e.$$.fragment),n=k(),t=m("br"),s=k(),M(r.$$.fragment)},l(d){j(e.$$.fragment,d),n=I(d),t=b(d,"BR",{}),s=I(d),j(r.$$.fragment,d)},m(d,a){A(e,d,a),E(d,n,a),E(d,t,a),E(d,s,a),A(r,d,a),h=!0},p(d,a){const o={};a&4&&(o.internalLink=d[2]),a&32&&(o.date=d[5]),a&90&&(o.$$scope={dirty:a,ctx:d}),e.$set(o)},i(d){h||(T(e.$$.fragment,d),T(r.$$.fragment,d),h=!0)},o(d){D(e.$$.fragment,d),D(r.$$.fragment,d),h=!1},d(d){P(e,d),d&&c(n),d&&c(t),d&&c(s),P(r,d)}}}function ci(l){let e,n;return e=new Xt({props:{id:l[0],$$slots:{default:[ai]},$$scope:{ctx:l}}}),{c(){M(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){A(e,t,s),n=!0},p(t,[s]){const r={};s&1&&(r.id=t[0]),s&126&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function di(l,e,n){let{id:t}=e,{sectionTitle:s}=e,{internalLink:r}=e,{externalLink:h}=e,{externalLinkTitle:d}=e,{date:a}=e;return l.$$set=o=>{"id"in o&&n(0,t=o.id),"sectionTitle"in o&&n(1,s=o.sectionTitle),"internalLink"in o&&n(2,r=o.internalLink),"externalLink"in o&&n(3,h=o.externalLink),"externalLinkTitle"in o&&n(4,d=o.externalLinkTitle),"date"in o&&n(5,a=o.date)},[t,s,r,h,d,a]}class hi extends ge{constructor(e){super(),_e(this,e,di,ci,pe,{id:0,sectionTitle:1,internalLink:2,externalLink:3,externalLinkTitle:4,date:5})}}const fi=[{anchor:"#svelte-intersection-observer-lazy-loading",title:"Svelte Intersection Observer + lazy loading"},{anchor:"#vanilla-intersection-observer",title:"Vanilla Intersection Observer"}];function ui(l){let e,n;return{c(){e=m("h1"),n=u("Intersection Observer"),this.h()},l(t){e=b(t,"H1",{slot:!0});var s=g(e);n=v(s,"Intersection Observer"),s.forEach(c),this.h()},h(){w(e,"slot","title")},m(t,s){E(t,e,s),i(e,n)},p:C,d(t){t&&c(e)}}}function vi(l){let e,n,t,s,r,h,d,a;return e=new gn({props:{icon:En,$$slots:{title:[ui]},$$scope:{ctx:l}}}),t=new _n({props:{menuItems:fi}}),r=new Qn({props:{id:"svelte-intersection-observer-lazy-loading",sectionTitle:"Svelte Intersection Observer lazy loading",externalLink:"https://svelte.dev/repl/310510e6e6c3464f9518c55b6ad50f25?version=3.48.0",externalLinkTitle:"Svelte repl",internalLink:"https://github.com/reuters-graphics/example_svelte-graph-patterns/tree/main/src/lib/components/observer/SvelteIntersectionObserverLazyLoading",date:"April 2022"}}),d=new hi({props:{id:"vanilla-intersection-observer",sectionTitle:"Vanilla Intersection Observer",externalLink:"https://svelte.dev/repl/d9bc0f84d467495991518091456fa01f?version=3.48.0",externalLinkTitle:"Svelte repl",internalLink:"https://github.com/reuters-graphics/example_svelte-graph-patterns/tree/main/src/lib/components/observer/VanillaIntersectionObserver",date:"April 2022"}}),{c(){M(e.$$.fragment),n=k(),M(t.$$.fragment),s=k(),M(r.$$.fragment),h=k(),M(d.$$.fragment)},l(o){j(e.$$.fragment,o),n=I(o),j(t.$$.fragment,o),s=I(o),j(r.$$.fragment,o),h=I(o),j(d.$$.fragment,o)},m(o,f){A(e,o,f),E(o,n,f),A(t,o,f),E(o,s,f),A(r,o,f),E(o,h,f),A(d,o,f),a=!0},p(o,[f]){const _={};f&1&&(_.$$scope={dirty:f,ctx:o}),e.$set(_)},i(o){a||(T(e.$$.fragment,o),T(t.$$.fragment,o),T(r.$$.fragment,o),T(d.$$.fragment,o),a=!0)},o(o){D(e.$$.fragment,o),D(t.$$.fragment,o),D(r.$$.fragment,o),D(d.$$.fragment,o),a=!1},d(o){P(e,o),o&&c(n),P(t,o),o&&c(s),P(r,o),o&&c(h),P(d,o)}}}class Ei extends ge{constructor(e){super(),_e(this,e,null,vi,pe,{})}}export{Ei as default};
