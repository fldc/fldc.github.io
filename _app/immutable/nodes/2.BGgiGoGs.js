import{C as e,D as t,I as n,M as r,N as i,O as a,P as o,T as s,a as c,b as l,c as u,d,g as f,i as p,k as m,n as h,r as g,u as _,v,w as y}from"../chunks/BQZtUf3Z.js";o();function b(e){let t=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`show`),t.unobserve(e.target))})},{rootMargin:`0px 0px 50px 0px`});return t.observe(e),setTimeout(()=>{e.offsetTop<window.scrollY&&(e.classList.add(`show`,`show-no-animation`),t.disconnect())},50),{destroy(){t.disconnect()}}}var x=v(`<section class="slide svelte-7a8mnf"><div class="wrapper svelte-7a8mnf"><!></div></section>`);function S(t,r){var i=x(),a=y(i),o=y(a);d(o,()=>r.children),n(a),c(a,e=>b?.(e)),n(i),e(()=>p(i,`id`,r.id)),f(t,i)}var C=v(`<div class="markdown-body"><h3>Hello! My name is</h3> <h1>Fredrik Storm</h1> <p>and I’m an systems developer.</p></div>`);function w(e){var t=C();f(e,t)}var T=`
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
`,E=class{#e=null;#t;#n;#r;#i;#a=!1;#o=!1;#s;#c;#l;#u;#d=Date.now();#f;#p;constructor(e){this.#t=e,this.#u=this.#x(e),this.#u&&(this.#h(),e.classList.add(`intro-ready`),this.#i=window.matchMedia(`(prefers-reduced-motion: reduce)`),this.#i.addEventListener(`change`,this.#y),this.#f=this.#v(e))}destroy(){this.#o=!0,this.#m(),this.#f?.disconnect(),this.#i?.removeEventListener(`change`,this.#y),this.#t.classList.remove(`intro-ready`),this.#u?.canvas.remove(),this.#u&&(this.#n.style.backgroundImage=``,this.#r.style.backgroundImage=``)}#m(){this.#e!==null&&(window.cancelAnimationFrame(this.#e),this.#e=null)}#h(){this.#u.clearRect(0,0,this.#u.canvas.width,this.#u.canvas.height),this.#u.fillStyle=this.#s,this.#u.fillRect(0,0,this.#u.canvas.width,this.#u.canvas.height),this.#p.forEach((e,t)=>{e.split(``).forEach((e,n)=>{if(e!==` `){let r=n*this.#c,i=(t+1)*this.#l;this.#u.fillStyle=this.#g(n,t),this.#u.fillText(e,r,i)}})}),this.#n.style.backgroundImage=this.#_(0,this.#n.textContent.trim().length),this.#r.style.backgroundImage=this.#_(this.#p.length,this.#r.textContent.trim().length)}#g(e,t){return`hsl(${Math.floor((this.#d/50+e+t)%360/12)*12}, 100%, 50%)`}#_(e,t){let n=this.#g(0,e),r=this.#g(t/2,e);return`linear-gradient(to left, ${this.#g(t,e)}, ${r}, ${n})`}#v(e){let t=new IntersectionObserver(e=>{e.forEach(e=>{this.#a=e.isIntersecting,this.#y()})},{rootMargin:`100% 0px 100% 0px`,threshold:[.01,.99]});return t.observe(e),t}#y=()=>{this.#o||!this.#a||this.#i.matches?this.#m():this.#e===null&&this.#b()};#b(){Date.now()-this.#d>60&&(this.#h(),this.#d=Date.now()),this.#e=window.requestAnimationFrame(()=>this.#b())}#x(e){let t=e.querySelector(`h1`);this.#n=t.previousElementSibling,this.#r=t.nextElementSibling,this.#p=T.split(`
`);let n=document.createElement(`canvas`);n.setAttribute(`aria-hidden`,`true`);let r=n.getContext(`2d`);if(!r)return null;let i;if(`computedStyleMap`in e){let t=e.computedStyleMap();i=[`font-weight`,`font-size`,`font-family`].map(e=>t.get(e)),this.#s=t.get(`background-color`)}else{let t=window.getComputedStyle(e);i=[`font-weight`,`font-size`,`font-family`].map(e=>t.getPropertyValue(e)),this.#s=t.getPropertyValue(`background-color`)}i=i.join(` `),r.font=i,this.#c=Math.floor(r.measureText(`0`).width-.5),this.#l=Math.floor(this.#c*1.4);let a=Math.max(...this.#p.map(e=>e.length)),o=this.#p.length;return n.width=a*this.#c,n.height=o*this.#l,r.font=i,r.imageSmoothingEnabled=!1,t.after(n),r}},D=v(`<header class="svelte-10cvnim"><div class="wrapper svelte-10cvnim"><!></div></header>`);function O(e,t){i(t,!1);let o=a();_(()=>{let e=new E(l(o));return()=>e.destroy()}),h();var s=D(),c=y(s);w(y(c),{}),n(c),n(s),g(s,e=>m(o,e),()=>l(o)),f(e,s),r()}var k=v(`<div class="markdown-body"><h2>About me</h2> <p>I’m currently studying at <strong>Chas Academy</strong> to become a systems developer with a focus on C/C++, and currently doing an internship at <strong>Elivra</strong>.
Building a solid foundation in programming and system design, with a strong interest in embedded systems and hardware development. I have a versatile background and a passion for learning new things.</p> <p>Geek and father in love with coding.</p> <ul><li><a href="mailto:fredrik.storm@elivra.se">fredrik.storm@elivra.se</a></li> <li><a href="https://fldc.se">fldc.se</a></li> <li><a href="mailto:fredrik@fldc.se">fredrik@fldc.se</a></li> <li><a href="mailto:fredrik.storm@chasacademy.se">fredrik.storm@chasacademy.se</a></li></ul> <h3>Follow</h3> <ul><li><a href="https://github.com/fldc">github.com/fldc</a></li> <li><a href="https://linkedin.com/in/fstrm">/in/fstrm</a></li></ul></div>`);function A(e){var t=k();f(e,t)}var j=v(`<div class="markdown-body"><h2>Experience</h2> <ul><li><h5>October 2025 – Present</h5> <h3>Elivra AB (Linköping, Sweden)</h3> <h4>System developer</h4> <ul><li>Python development for backend services.</li> <li>C development for telecommunications systems.</li> <li>DevOps tasks including CI/CD pipeline management and cloud infrastructure.</li> <li>Collaborating with cross-functional teams to design and implement scalable solutions.</li> <li>AI and machine learning model integration.</li></ul> <blockquote><p><em>Python</em> <em>C</em> <em>Docker</em> <em>CI/CD</em> <em>Telecommunications</em> <em>Cloud</em></p></blockquote></li> <li><h5>2016 – 2017</h5> <h3>Lecora AB (Vadstena, Sweden)</h3> <h4>Food production worker</h4> <p><strong>Lecora AB</strong> is a company in Vadstena, Sweden that produces and packages food products.</p> <ul><li>Assembling, preparing, and packaging ready-made food products for retail and catering markets.</li></ul></li> <li><h5>November 2012 – Oktober 2015</h5> <h3>Tronity Inc. (Remote)</h3> <h4>Android developer</h4> <p><strong>Tronity Inc.</strong> was a company based in Seattle, WA, specializing in Android development consulting.</p> <ul><li>Developed custom firmware for <strong>Android</strong> devices.</li> <li>Developed <strong>Android</strong> applications in Java.</li></ul> <blockquote><p><em>Java</em> <em>Android</em> <em>Gradle</em> <em>Git</em></p></blockquote></li> <li><h5>May 2005 – July 2009</h5> <h3>Dometic (Motala, Sweden)</h3> <h4>Technician</h4> <p><strong>Dometic</strong> was a company based in Sweden, specializing in <strong>refrigeration systems</strong> for the <strong>marine</strong> and <strong>automotive</strong> industries.</p> <ul><li>Assembled and tested <strong>refrigeration systems</strong>.</li></ul></li> <li><h5>1998 - 2000</h5> <h3>Wasadata Systems AB (Vadstena, Sweden)</h3> <h4>System development and administration</h4> <p><strong>Wasadata Systems AB</strong> was a company based in Sweden, specializing in <strong>telecommunication systems</strong> and IT consulting.</p> <blockquote><p><em>Linux</em> <em>Apache</em> <em>MySQL</em> <em>PHP</em> <em>Bash</em> <em>Python</em> <em>DNS</em> <em>Postfix</em> <em>Firewalls</em> <em>Networking</em> <em>Security</em></p></blockquote></li> <li><h5>October 24th, 1982</h5> <h3>Born</h3></li></ul> <style lang="scss">#experience .markdown-body > ul {
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
}</style></div>`);function M(e){var t=j();f(e,t)}var N=v(`<div class="markdown-body"><h2>Skills</h2> <h3>Technologies and Methodologies</h3> <ul><li><strong>Linux</strong> operating system and its internals,</li> <li>Unix-like operating systems (<strong>macOS</strong>, <strong>FreeBSD</strong>, <strong>OpenBSD</strong>),</li> <li><strong>RTOS</strong> (Real-Time Operating Systems),</li> <li>Virtualization and containerization technologies (<strong>Docker</strong>),</li> <li>Version Control Systems (<strong>Git</strong>, GitHub, GitLab),</li> <li><strong>Agile</strong> methodologies (Scrum, Kanban),</li> <li><strong>CI/CD</strong> (Continuous Integration and Continuous Deployment),</li> <li><strong>Android</strong> development</li> <li><strong>Embedded Systems</strong> development,</li> <li><strong>IoT</strong> (Internet of Things) technologies,</li> <li><strong>AI</strong> (Artificial Intelligence) and <strong>Machine Learning</strong> basics,</li> <li><strong>3D printing</strong> technologies and workflows</li></ul> <h3>Programming Languages</h3> <ul><li><strong>C/C++</strong> programming languages,</li> <li><strong>Python</strong> programming language,</li> <li><strong>Rust</strong> programming language,</li> <li><strong>SQL</strong> databases (MySQL, PostgreSQL, SQLite),</li> <li><strong>CNC</strong> programming and operation of CNC machines,</li></ul> <h3>Additional skills</h3> <ul><li><strong>reliable</strong> and <strong>focused</strong>,</li> <li><strong>fast learner</strong> and always willing to <strong>learn more</strong>,</li> <li>can <strong>exit vim</strong> in at least 8 different ways ;).</li></ul> <h3>Languages</h3> <ul><li>Swedish (native),</li> <li>English (fluent),</li></ul></div>`);function P(e){var t=N();f(e,t)}var F=v(`<div class="markdown-body"><h2>Education</h2> <h3>System Developer (C/C++), Embedded Systems</h3> <h4>Chas Academy, 2024 - present</h4> <blockquote><p>System Developer with a focus on C/C++, hardware and embedded systems.</p></blockquote> <p>Learning the principles of system development, focusing on C/C++ programming, hardware integration, and embedded systems design. Gaining hands-on experience with various tools and technologies used in the industry.</p> <p>Chas Challenge here</p> <blockquote><p><em>#C</em> <em>#C++</em> <em>#EmbeddedSystems</em> <em>#Agile</em> <em>#Scrum</em> <em>#Kanban</em> <em>#Git</em> <em>#SQL</em> <em>#RTOS</em></p></blockquote> <h3>Adult Education</h3> <h4>Mjölby Vuxenutbildning, Aug 2022 - Jun 2023</h4> <blockquote><p>Adult education program.</p></blockquote> <p>Adult education program focusing on various subjects, including mathematics, Swedish, English and computer science.</p> <h3>CNC Technician</h3> <h4>Yrkesakademien, 2010 - 2012</h4> <blockquote><p>CNC programming and operation of CNC machines, including lathes and milling machines.</p></blockquote> <p>Learning the principles of CNC programming and operation of CNC machines, including lathes and milling machines, and understanding the intricacies of tool selection and machining processes.</p> <blockquote><p><em>#CNC</em> <em>#CAD</em> <em>#CAM</em> <em>#Milling</em> <em>#Turning</em></p></blockquote> <h3>Upper secondary school</h3> <h4>Information &amp; kommunikationsteknik, 2000 - 2003</h4> <blockquote><p>Computer science, business economics, marketing, and entrepreneurship.</p></blockquote></div>`);function I(e){var t=F();f(e,t)}var L=v(`<div class="markdown-body"><h2>After Hours</h2> <h3>Training</h3> <p>I am a big fan of training and I try to do it as much as I can. I love to lift weights.</p> <h3>Coding</h3> <p>I love to code and I am always looking for new projects to work on. I have a lot of fun with it and I am always looking for new challenges.</p> <h3>Gaming</h3> <p>I’m intermittently gaming, but I love to play games.</p> <h3>Electronics</h3> <p>One always needs to build something new.</p></div>`);function R(e){var t=L();f(e,t)}var z=v(`<div class="markdown-body"><p>Built with <strong>Svelte</strong>.</p></div>`);function B(e){var t=z();f(e,t)}var V=v(`<!> <main><!> <picture><source type="image/avif"/><source type="image/webp"/><source type="image/jpeg"/><img id="me" alt="Me" width="2316" height="3088" class="svelte-1uha8ag"/></picture></main> <footer id="footer" class="svelte-1uha8ag"><!></footer>`,1);function H(e){let r=[{id:`hello`,component:A},{id:`experience`,component:M},{id:`skills`,component:P},{id:`education`,component:I},{id:`hobby`,component:R}];var i=V(),a=s(i);O(a,{});var o=t(a,2),c=y(o);u(c,1,()=>r,e=>e.id,(e,t)=>{S(e,{get id(){return l(t).id},children:(e,n)=>{l(t).component(e,{})},$$slots:{default:!0}})});var d=t(c,2),m=y(d);p(m,`srcset`,``+new URL(`../assets/me.VGbFab5a.avif`,import.meta.url).href+` 1x, `+new URL(`../assets/me.B92pZbNz.avif`,import.meta.url).href+` 2x`);var h=t(m);p(h,`srcset`,``+new URL(`../assets/me.CLY_6Ly9.webp`,import.meta.url).href+` 1x, `+new URL(`../assets/me.CJNXFem9.webp`,import.meta.url).href+` 2x`);var g=t(h);p(g,`srcset`,``+new URL(`../assets/me.D8C8e-yL.jpg`,import.meta.url).href+` 1x, `+new URL(`../assets/me.C-xEwsbA.jpg`,import.meta.url).href+` 2x`);var _=t(g);p(_,`src`,``+new URL(`../assets/me.C-xEwsbA.jpg`,import.meta.url).href),n(d),n(o);var v=t(o,2);B(y(v),{}),n(v),f(e,i)}export{H as component};