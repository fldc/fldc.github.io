import{A as e,C as t,D as n,E as r,I as i,L as a,V as o,_ as s,a as c,c as l,d as u,f as d,h as f,j as p,k as m,n as h,o as g,s as _,u as v,y,z as b}from"../chunks/CecBSrtY.js";import"../chunks/xihTtKlq.js";b();function x(e){let t=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`show`),t.unobserve(e.target))})},{rootMargin:`0px 0px 50px 0px`});return t.observe(e),setTimeout(()=>{e.offsetTop<window.scrollY&&(e.classList.add(`show`,`show-no-animation`),t.disconnect())},50),{destroy(){t.disconnect()}}}var S=s(`<section class="slide svelte-7a8mnf"><div class="wrapper svelte-7a8mnf"><!></div></section>`);function C(e,n){var i=S(),a=r(i),s=r(a);u(s,()=>n.children),o(a),l(a,e=>x?.(e)),o(i),t(()=>_(i,`id`,n.id)),f(e,i)}var w=s(`<div class="markdown-body"><h3>Hello! My name is</h3> <h1>Fredrik Storm</h1> <p>and I’m an systems developer.</p></div>`);function T(e){var t=w();f(e,t)}var E=`
███████╗██████╗ ███████╗██████╗ ██████╗ ██╗██╗  ██╗
██╔════╝██╔══██╗██╔════╝██╔══██╗██╔══██╗██║██║ ██╔╝
█████╗  ██████╔╝█████╗  ██║  ██║██████╔╝██║█████╔╝ 
██╔══╝  ██╔══██╗██╔══╝  ██║  ██║██╔══██╗██║██╔═██╗ 
██║     ██║  ██║███████╗██████╔╝██║  ██║██║██║  ██╗
╚═╝     ╚═╝  ╚═╝╚══════╝╚═════╝ ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝

███████╗████████╗ ██████╗ ██████╗ ███╗   ███╗      
██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗████╗ ████║      
███████╗   ██║   ██║   ██║██████╔╝██╔████╔██║      
╚════██║   ██║   ██║   ██║██╔══██╗██║╚██╔╝██║      
███████║   ██║   ╚██████╔╝██║  ██║██║ ╚═╝ ██║      
╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝      
`,D=s(`<header class="svelte-10cvnim"><div class="wrapper svelte-10cvnim"><!></div></header>`);function O(t,n){a(n,!1);let s=e();class l{#e;#t;#n;#r;#i;#a=Date.now();#o;#s;constructor(e){this.#i=this.#m(e),this.#o=this.#f(e)}destroy(){this.#c(),this.#o.disconnect()}#c(){this.#e&&=(window.cancelAnimationFrame(this.#e),null)}#l(){this.#i.clearRect(0,0,this.#i.canvas.width,this.#i.canvas.height),this.#i.fillStyle=this.#t,this.#i.fillRect(0,0,this.#i.canvas.width,this.#i.canvas.height),this.#s.forEach((e,t)=>{e.split(``).forEach((e,n)=>{if(e!==` `){let r=n*this.#n,i=(t+1)*this.#r;this.#i.fillStyle=this.#u(n,t),this.#i.fillText(e,r,i)}})}),this.#i.canvas.previousElementSibling.style.backgroundImage=this.#d(0,this.#i.canvas.previousElementSibling.textContent.trim().length),this.#i.canvas.nextElementSibling.style.backgroundImage=this.#d(this.#s.length,this.#i.canvas.nextElementSibling.textContent.trim().length)}#u(e,t){return`hsl(${Math.floor((this.#a/50+e+t)%360/12)*12}, 100%, 50%)`}#d(e,t){let n=this.#u(0,e),r=this.#u(t/2,e);return`linear-gradient(to left, ${this.#u(t,e)}, ${r}, ${n})`}#f(e){let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?this.#p():this.#c()})},{rootMargin:`100% 0px 100% 0px`,threshold:[.01,.99]});return t.observe(e),t}#p(){Date.now()-this.#a>60&&(this.#l(),this.#a=Date.now()),this.#e=window.requestAnimationFrame(()=>this.#p())}#m(e){let t=e.querySelector(`h1`),n=t.textContent.trim();this.#s=E.split(`
`);let r=document.createElement(`canvas`);r.setAttribute(`aria-label`,n),r.setAttribute(`role`,`img`);let i=r.getContext(`2d`),a;if(`computedStyleMap`in e){let t=e.computedStyleMap();a=[`font-weight`,`font-size`,`font-family`].map(e=>t.get(e)),this.#t=t.get(`background-color`)}else{let t=window.getComputedStyle(e);a=[`font-weight`,`font-size`,`font-family`].map(e=>t.getPropertyValue(e)),this.#t=t.getPropertyValue(`background-color`)}a=a.join(` `),i.font=a,this.#n=Math.floor(i.measureText(`0`).width-.5),this.#r=Math.floor(this.#n*1.4);let o=Math.max(...this.#s.map(e=>e.length)),s=this.#s.length;return r.width=o*this.#n,r.height=s*this.#r,i.font=a,i.imageSmoothingEnabled=!1,t.replaceWith(r),i}}h(()=>{let e=new l(y(s));return()=>e.destroy()}),c();var u=D(),d=r(u),m=r(d);v(m,()=>T,(e,t)=>{t(e,{})}),o(d),o(u),g(u,e=>p(s,e),()=>y(s)),f(t,u),i()}var k=s(`<div class="markdown-body"><h2>About me</h2> <p>I’m currently studying at <strong>Chas Academy</strong> to become a systems developer with a focus on C/C++, and currently doing an internship at <strong>Elivra</strong>.
Building a solid foundation in programming and system design, with a strong interest in embedded systems and hardware development. I have a versatile background and a passion for learning new things.</p> <p>Geek and father in love with coding.</p> <ul><li><a href="mailto:fredrik.storm@elivra.se">fredrik.storm@elivra.se</a></li> <li><a href="https://fldc.se">fldc.se</a></li> <li><a href="mailto:fredrik@fldc.se">fredrik@fldc.se</a></li> <li><a href="mailto:fredrik.storm@chasacademy.se">fredrik.storm@chasacademy.se</a></li></ul> <h3>Follow</h3> <ul><li><a href="https://github.com/fldc">github.com/fldc</a></li> <li><a href="https://linkedin.com/in/fstrm">/in/fstrm</a></li></ul></div>`);function A(e){var t=k();f(e,t)}var j=s(`<div class="markdown-body"><h2>Experience</h2> <ul><li><h5>October 2025 – Present</h5> <h3>Elivra AB (Linköping, Sweden)</h3> <h4>System developer</h4> <ul><li>Python development for backend services.</li> <li>C development for telecommunications systems.</li> <li>DevOps tasks including CI/CD pipeline management and cloud infrastructure.</li> <li>Collaborating with cross-functional teams to design and implement scalable solutions.</li> <li>AI and machine learning model integration.</li></ul> <blockquote><p><em>Python</em> <em>C</em> <em>Docker</em> <em>CI/CD</em> <em>Telecommunications</em> <em>Cloud</em></p></blockquote></li> <li><h5>2016 – 2017</h5> <h3>Lecora AB (Vadstena, Sweden)</h3> <h4>Food production worker</h4> <p><strong>Lecora AB</strong> is a company in Vadstena, Sweden that produces and packages food products.</p> <ul><li>Assembling, preparing, and packaging ready-made food products for retail and catering markets.</li></ul></li> <li><h5>November 2012 – Oktober 2015</h5> <h3>Tronity Inc. (Remote)</h3> <h4>Android developer</h4> <p><strong>Tronity Inc.</strong> was a company based in Seattle, WA, specializing in Android development consulting.</p> <ul><li>Developed custom firmware for <strong>Android</strong> devices.</li> <li>Developed <strong>Android</strong> applications in Java.</li></ul> <blockquote><p><em>Java</em> <em>Android</em> <em>Gradle</em> <em>Git</em></p></blockquote></li> <li><h5>May 2005 – July 2009</h5> <h3>Dometic (Motala, Sweden)</h3> <h4>Technician</h4> <p><strong>Dometic</strong> was a company based in Sweden, specializing in <strong>refrigeration systems</strong> for the <strong>marine</strong> and <strong>automotive</strong> industries.</p> <ul><li>Assembled and tested <strong>refrigeration systems</strong>.</li></ul></li> <li><h5>1998 - 2000</h5> <h3>Wasadata Systems AB (Vadstena, Sweden)</h3> <h4>System development and administration</h4> <p><strong>Wasadata Systems AB</strong> was a company based in Sweden, specializing in <strong>telecommunication systems</strong> and IT consulting.</p> <blockquote><p><em>Linux</em> <em>Apache</em> <em>MySQL</em> <em>PHP</em> <em>Bash</em> <em>Python</em> <em>DNS</em> <em>Postfix</em> <em>Firewalls</em> <em>Networking</em> <em>Security</em></p></blockquote></li> <li><h5>October 24th, 1982</h5> <h3>Born</h3></li></ul> <style lang="scss">#experience .markdown-body > ul {
  position: relative;
}
#experience .markdown-body > ul::before {
  background-color: rgb(14.2585784314%, 14.8069852941%, 20.8394607843%);
  bottom: 0;
  content: " ";
  left: 20%;
  margin-left: -1px;
  position: absolute;
  top: 0;
  width: 2px;
}
#experience .markdown-body > ul > li {
  margin: 0 0 0 20%;
  max-width: 66em;
  padding-left: 2em;
  position: relative;
  width: 80%;
}
#experience .markdown-body > ul > li + li {
  margin-top: 3em;
}
#experience .markdown-body > ul > li > h3 {
  line-height: 1.1;
}
#experience .markdown-body > ul > li > h5 {
  background: rgb(85.2307692308%, 24.1025641026%, 35.5897435897%);
  border-radius: 18px;
  padding: 2px 14px;
  position: absolute;
  right: 104%;
  text-shadow: 0 1px rgb(44.6455505279%, 8.6877828054%, 15.4449472097%);
  white-space: nowrap;
}
#experience .markdown-body > ul > li::before {
  left: 0;
  margin: 0;
  position: absolute;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
}
@media screen and (max-width: 1022px) {
  #experience .markdown-body > ul::before {
    left: -1.2em;
  }
  #experience .markdown-body > ul > li {
    margin-left: 0;
    max-width: 100%;
    padding-left: 0.5em;
    width: 100%;
  }
  #experience .markdown-body > ul > li > h5 {
    display: inline-block;
    margin-bottom: 1.2em;
    position: static;
    right: auto;
  }
  #experience .markdown-body > ul > li::before {
    -webkit-transform: translateX(-1.5em);
            transform: translateX(-1.5em);
  }
}</style></div>`);function M(e){var t=j();f(e,t)}var N=s(`<div class="markdown-body"><h2>Skills</h2> <h3>Technologies and Methodologies</h3> <ul><li><strong>Linux</strong> operating system and its internals,</li> <li>Unix-like operating systems (<strong>macOS</strong>, <strong>FreeBSD</strong>, <strong>OpenBSD</strong>),</li> <li><strong>RTOS</strong> (Real-Time Operating Systems),</li> <li>Virtualization and containerization technologies (<strong>Docker</strong>),</li> <li>Version Control Systems (<strong>Git</strong>, GitHub, GitLab),</li> <li><strong>Agile</strong> methodologies (Scrum, Kanban),</li> <li><strong>CI/CD</strong> (Continuous Integration and Continuous Deployment),</li> <li><strong>Android</strong> development</li> <li><strong>Embedded Systems</strong> development,</li> <li><strong>IoT</strong> (Internet of Things) technologies,</li> <li><strong>AI</strong> (Artificial Intelligence) and <strong>Machine Learning</strong> basics,</li> <li><strong>3D printing</strong> technologies and workflows</li></ul> <h3>Programming Languages</h3> <ul><li><strong>C/C++</strong> programming languages,</li> <li><strong>Python</strong> programming language,</li> <li><strong>Rust</strong> programming language,</li> <li><strong>SQL</strong> databases (MySQL, PostgreSQL, SQLite),</li> <li><strong>CNC</strong> programming and operation of CNC machines,</li></ul> <h3>Additional skills</h3> <ul><li><strong>reliable</strong> and <strong>focused</strong>,</li> <li><strong>fast learner</strong> and always willing to <strong>learn more</strong>,</li> <li>can <strong>exit vim</strong> in at least 8 different ways ;).</li></ul> <h3>Languages</h3> <ul><li>Swedish (native),</li> <li>English (fluent),</li></ul></div>`);function P(e){var t=N();f(e,t)}var F=s(`<div class="markdown-body"><h2>Education</h2> <h3>System Developer (C/C++), Embedded Systems</h3> <h4>Chas Academy, 2024 - present</h4> <blockquote><p>System Developer with a focus on C/C++, hardware and embedded systems.</p></blockquote> <p>Learning the principles of system development, focusing on C/C++ programming, hardware integration, and embedded systems design. Gaining hands-on experience with various tools and technologies used in the industry.</p> <p>Chas Challenge here</p> <blockquote><p><em>#C</em> <em>#C++</em> <em>#EmbeddedSystems</em> <em>#Agile</em> <em>#Scrum</em> <em>#Kanban</em> <em>#Git</em> <em>#SQL</em> <em>#RTOS</em></p></blockquote> <h3>Adult Education</h3> <h4>Mjölby Vuxenutbildning, Aug 2022 - Jun 2023</h4> <blockquote><p>Adult education program.</p></blockquote> <p>Adult education program focusing on various subjects, including mathematics, Swedish, English and computer science.</p> <h3>CNC Technician</h3> <h4>Yrkesakademien, 2010 - 2012</h4> <blockquote><p>CNC programming and operation of CNC machines, including lathes and milling machines.</p></blockquote> <p>Learning the principles of CNC programming and operation of CNC machines, including lathes and milling machines, and understanding the intricacies of tool selection and machining processes.</p> <blockquote><p><em>#CNC</em> <em>#CAD</em> <em>#CAM</em> <em>#Milling</em> <em>#Turning</em></p></blockquote> <h3>Upper secondary school</h3> <h4>Information &amp; kommunikationsteknik, 2000 - 2003</h4> <blockquote><p>Computer science, business economics, marketing, and entrepreneurship.</p></blockquote></div>`);function I(e){var t=F();f(e,t)}var L=s(`<div class="markdown-body"><h2>After Hours</h2> <h3>Training</h3> <p>I am a big fan of training and I try to do it as much as I can. I love to lift weights.</p> <h3>Coding</h3> <p>I love to code and I am always looking for new projects to work on. I have a lot of fun with it and I am always looking for new challenges.</p> <h3>Gaming</h3> <p>I’m intermittently gaming, but I love to play games.</p> <h3>Electronics</h3> <p>One always needs to build something new.</p></div>`);function R(e){var t=L();f(e,t)}var z=s(`<div class="markdown-body"><p>Built with <strong>Svelte</strong>.</p></div>`);function B(e){var t=z();f(e,t)}var V=s(`<!> <main><!> <picture><source type="image/avif"/><source type="image/webp"/><source type="image/jpeg"/><img id="me" alt="Me" width="2316" height="3088" class="svelte-1uha8ag"/></picture></main> <footer id="footer" class="svelte-1uha8ag"><!></footer>`,1);function H(e){let t=[{id:`hello`,component:A},{id:`experience`,component:M},{id:`skills`,component:P},{id:`education`,component:I},{id:`hobby`,component:R}];var i=V(),a=n(i);O(a,{});var s=m(a,2),c=r(s);d(c,1,()=>t,e=>e.id,(e,t)=>{C(e,{get id(){return y(t).id},children:(e,n)=>{y(t).component(e,{})},$$slots:{default:!0}})});var l=m(c,2),u=r(l);_(u,`srcset`,``+new URL(`../assets/me.DNF_cXrL.avif`,import.meta.url).href+` 1158w, `+new URL(`../assets/me.D7aEeooF.avif`,import.meta.url).href+` 2316w`);var p=m(u);_(p,`srcset`,``+new URL(`../assets/me.CLY_6Ly9.webp`,import.meta.url).href+` 1158w, `+new URL(`../assets/me.CJNXFem9.webp`,import.meta.url).href+` 2316w`);var h=m(p);_(h,`srcset`,``+new URL(`../assets/me.D8C8e-yL.jpeg`,import.meta.url).href+` 1158w, `+new URL(`../assets/me.C-xEwsbA.jpeg`,import.meta.url).href+` 2316w`);var g=m(h);_(g,`src`,``+new URL(`../assets/me.C-xEwsbA.jpeg`,import.meta.url).href),o(l),o(s);var v=m(s,2);B(r(v),{}),o(v),f(e,i)}export{H as component};