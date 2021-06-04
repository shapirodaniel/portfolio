(this["webpackJsonpdaniel-shapiro-software-engineer-portfolio"]=this["webpackJsonpdaniel-shapiro-software-engineer-portfolio"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),i=c(4),s=c.n(i),o=(c(9),c(10),c(11),c(0)),a=[{id:1,src:"/portfolio/octocat.svg",href:"https://github.com/shapirodaniel",alt:"github"},{id:2,src:"/portfolio/linked-in.svg",href:"https://linkedin.com/in/shapirodanieladam",alt:"linkedin"},{id:3,src:"/portfolio/medium.svg",href:"https://shapirodanieladam.medium.com",alt:"medium"}],l=function(){return Object(o.jsx)("div",{className:"icons",children:a.map((function(e){var t=e.id,c=e.src,r=e.href,n=e.alt;return Object(o.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{className:"linkIcon",src:c,alt:n})},t)}))})},d=(c(13),c(2)),j=n.a.createContext(),u=function(e){var t=e.children,c=Object(r.useState)(""),n=Object(d.a)(c,2),i=n[0],s={activeNodeId:i,setActiveNodeId:n[1]};return console.log(i),Object(o.jsx)(j.Provider,{value:s,children:t})},m=function(e){var t=Object(r.useRef)(null),c=Object(r.useContext)(j).setActiveNodeId,n=function(e){var t=Object(r.useState)(!1),c=Object(d.a)(t,2),n=c[0],i=c[1],s=new IntersectionObserver((function(e){var t=Object(d.a)(e,1)[0];return i(t.isIntersecting)}),{threshold:[.25,.5,.75]});return Object(r.useEffect)((function(){return s.observe(e.current),function(){s.disconnect()}})),n&&console.log("onScreen!"),n}(t);return Object(r.useEffect)((function(){n&&c(e)}),[n,c,e]),t},h=function(){var e=m("welcome");return Object(o.jsxs)("section",{ref:e,className:"welcomeContainer",children:[Object(o.jsxs)("h1",{children:["Hello, I'm ",Object(o.jsx)("span",{className:"myName",children:"Daniel Shapiro."}),Object(o.jsx)("br",{}),"I'm a full-stack software engineer."]}),Object(o.jsx)("div",{className:"linksAndViewBtn",children:Object(o.jsxs)("div",{className:"viewMyWork",onClick:function(){return document.querySelector(".aboutContainer").scrollIntoView({behavior:"smooth"})},children:[Object(o.jsx)("span",{children:"View my work"}),Object(o.jsx)("i",{className:"material-icons",children:"keyboard_arrow_right"})]})}),Object(o.jsx)(l,{})]})},b=(c(14),c(15),function(e){var t=e.children,c=e.closeModal;return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"modalBackdrop"}),Object(o.jsx)("div",{className:"transparentBlockContainer",onClick:c,children:Object(o.jsx)("div",{className:"centeredModalBlock",children:t})})]})}),p=(c(16),[{nodeId:"welcome",selector:".welcomeContainer"},{nodeId:"about",selector:".aboutContainer"},{nodeId:"portfolio",selector:".portfolioContainer"},{nodeId:"contact",selector:".contactContainer"}]),g=function(e){var t=e.nodeId,c=e.selector,n=e.closeModal,i=Object(r.useContext)(j),s=i.activeNodeId,a=i.setActiveNodeId;return Object(o.jsx)("span",{id:t,className:s===t?"activeClass":"",onClick:function(){var e;a(t),e=c,document.querySelector(e).scrollIntoView({behavior:"smooth"}),n()},children:t.charAt(0).toUpperCase()+t.slice(1)})},f=function(e){var t=e.setModalVisible;e.setModalComponent;return Object(o.jsx)("nav",{children:p.map((function(e,c){var r=e.nodeId,n=e.selector;return Object(o.jsx)(g,{nodeId:r,selector:n,closeModal:function(){return t(!1)}},c)}))})},x=(c(17),c(18),[{src:"https://i.imgur.com/I3h729Y.png",text:"JavaScript"},{src:"https://i.imgur.com/cvqE34m.png",text:"React"},{src:"https://i.imgur.com/HfEls2w.png",text:"Redux"},{src:"https://i.imgur.com/bSICAJ1.png",text:"HTML"},{src:"https://i.imgur.com/lS2CtBm.png",text:"CSS"},{src:"https://i.imgur.com/cZu3hlx.png",text:"Node.js"},{src:"https://i.imgur.com/T6UediO.png",text:"PostgreSQL"},{src:"https://i.imgur.com/5gpC9Q9.png",text:"Sequelize"},{src:"https://i.imgur.com/TyGAIFH.png",text:"Express"},{src:"https://i.imgur.com/0fax8zt.png",text:"Git"},{src:"https://i.imgur.com/9M20e1b.png",text:"Travis-CI"}]),O=[{src:"https://i.imgur.com/jkSzrTz.png",text:"TypeScript"},{src:"https://i.imgur.com/n2QpqrV.png",text:"GraphQL"},{src:"https://i.imgur.com/ed1G33y.png",text:"Python"},{src:"https://i.imgur.com/sm4i82J.png",text:"Rust"}],v=function(e){var t=e.src,c=e.text;return Object(o.jsxs)("div",{className:"fullLogoContainer",children:[Object(o.jsx)("div",{className:"round",children:Object(o.jsx)("div",{className:"logoAndText",children:Object(o.jsx)("img",{className:"techLogo",src:t,alt:"tech-logo"})})}),Object(o.jsx)("span",{className:"smol",children:c})]})},k=function(e){var t=e.label,c=e.logos;return Object(o.jsxs)("div",{className:"singleList",children:[Object(o.jsx)("label",{children:t}),Object(o.jsx)("div",{className:"singleListImgs",children:c.map((function(e,t){var c=e.src,r=e.text;return Object(o.jsx)(v,{src:c,text:r},t)}))})]})},N=function(){return Object(o.jsxs)("div",{className:"techLogoUrls",children:[Object(o.jsx)(k,{label:"Proficient",logos:x}),Object(o.jsx)(k,{label:"Learning",logos:O})]})},C=[{id:1,icon:"analytics",title:"Analyst",description:"Sifting piles of data in search of a root cause? I'm there."},{id:2,icon:"psychology",title:"Strategist",description:"I'm a proven project manager across multiple industries."},{id:3,icon:"check_circle_outline",title:"Deliverer",description:"Teammates trust me to ship features on-time, on-spec."},{id:4,icon:"track_changes",title:"Chameleon",description:"Design is always in flux\u2014let's discover and pivot together."}],I=function(e){var t=e.card,c=t.icon,r=t.title,n=t.description;return Object(o.jsxs)("div",{className:"aboutCardContainer",children:[Object(o.jsx)("span",{className:"iconContainer",children:Object(o.jsx)("i",{className:"material-icons",children:c})}),Object(o.jsx)("span",{className:"title",children:r}),Object(o.jsx)("p",{children:n})]})},S=function(){var e=m("about");return Object(o.jsxs)("section",{ref:e,className:"aboutContainer",children:[Object(o.jsx)("h3",{children:"ABOUT"}),Object(o.jsx)("div",{className:"aboutCardsList",children:C.map((function(e){return Object(o.jsx)(I,{card:e},e.id)}))}),Object(o.jsxs)("div",{className:"photoAndTech",children:[Object(o.jsxs)("div",{className:"myPhotoAndBlurb",children:[Object(o.jsx)("img",{className:"myPhoto",src:"https://i.imgur.com/FEcY5qC.jpg",alt:"daniel-headshot"}),Object(o.jsxs)("div",{className:"blurb",children:[Object(o.jsx)("img",{className:"funArrow",src:"/portfolio/fun-arrow.svg",alt:"fun-arrow"}),Object(o.jsx)("span",{children:"What I'm up to currently"}),Object(o.jsxs)("p",{children:["Building a"," ",Object(o.jsx)("a",{href:"https://github.com/shapirodaniel/stackathon-project",target:"_blank",rel:"noreferrer",children:"SaaS solution for bakeries"}),Object(o.jsx)("br",{}),"Writing a"," ",Object(o.jsx)("a",{href:"https://github.com/shapirodaniel/react-clone",target:"_blank",rel:"noreferrer",children:"React-like framework"}),Object(o.jsx)("br",{}),"Fellow-ing at"," ",Object(o.jsx)("a",{href:"https://www.fullstackacademy.com/software-engineering-immersive",target:"_blank",rel:"noreferrer",children:"Fullstack Academy"})]})]})]}),Object(o.jsx)(N,{})]})]})},w=(c(19),function(){return Object(o.jsx)("section",{className:"recruiterContainer",children:"hi im recruiter modal"})}),y=(c(20),function(e){var t=e.embedId;return Object(o.jsx)("div",{className:"video-responsive",children:Object(o.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})}),A=[{id:1,logoSrc:"/portfolio/connect-logo.svg",logoAltText:"connect-logo",description:"A project management suite that allows users to create and join organizations, invite teammates to collaborate on projects with Kanban-style boards, and stay in touch with realtime updates/communication support",techStack:[{"Back-end":["PostgresSQL + Sequelize","Express","socket.io"]},{"Front-end":["React + React Context API","React Beautiful DnD","socket.io-client","vanilla CSS"]}],siteHref:"https://connect-kanban.herokuapp.com",githubHref:"https://github.com/shapirodaniel/connect",embedId:"VbKLG30Nuo0"},{id:2,logoSrc:"/portfolio/sp-scrollable-logo.svg",logoAltText:"single-page-scrollable-site-navigation",name:"Single-Page Scrollable Site Navigation with React Custom Hooks",description:"Leveraging IntersectionObserver + useRef + useContext to build a responsive nav for a single-page scrollable site",techStack:[{"Front-end":["React + React Context API","React custom hooks"]}],siteHref:"https://medium.com/geekculture/scrollable-single-page-site-navigation-with-react-custom-hooks-4e7af716f6b1",gihubHref:"https://github.com/shapirodaniel/single-page-nav",linkedImgUrl:"/portfolio/sp-scrollable-medium-screencap.png",linkedImgUrlAltText:"use-nav-custom-hook"},{id:3,logoSrc:"/portfolio/breadbakersfriend-logo.png",logoAltText:"bread-bakers-friend-logo",name:"Bread Baker's Friend",description:"A web app designed for artisan bakery production floors, allowing dynamic recipe recalculation and alterations, export to dynamic spreadsheets, and recipe file storage + upload",techStack:[{"Back-end":["Node.js, Natural"]},{"Front-end":["HTML5, CSS3, JavaScript"]}],siteHref:"https://breadbakersfriend.com",githubHref:"https://github.com/shapirodaniel/breadbakersfriend",embedId:"gGb3Wp1s33w"},{id:4,logoSrc:"/portfolio/guessing-game-logo.png",logoAltText:"the-guessing-game-logo",name:"The Guessing Game",description:"A detailed look into refactoring an imperative code base to React, React Hooks, and state management via React's Context API",techStack:[{"Front-end":["React + React Context API"]}],siteHref:"https://medium.com/geekculture/rebuilding-an-imperatively-coded-game-from-scratch-in-react-9a082ad002c0",githubHref:"https://github.com/shapirodaniel/guessing-game-react",linkedImgUrl:"/portfolio/guessing-game-medium-screencap.png",linkedImgUrlAltText:"the-guessing-game"}],T=(c(21),function(e){var t=e.siteHref,c=e.linkedImgUrl,r=e.linkedImgUrlAltText;return Object(o.jsx)("div",{className:"leftPanelContainer",children:Object(o.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:c,alt:r})})})}),M=function(e){var t=e.card,c=t.embedId,r=t.linkedImgUrl,n=t.linkedImgUrlAltText,i=t.logoSrc,s=t.logoAltText,a=t.description,l=t.techStack,j=t.siteHref,u=t.githubHref;return Object(o.jsxs)("div",{className:"portfolioCardContainer",children:[c?Object(o.jsx)(y,{embedId:c}):Object(o.jsx)(T,{siteHref:j,linkedImgUrl:r,linkedImgUrlAltText:n}),Object(o.jsxs)("div",{className:"pc-rightPanel",children:[Object(o.jsx)("img",{src:i,alt:s}),Object(o.jsx)("p",{align:"center",children:a}),l.map((function(e,t){var c=Object(d.a)(Object.entries(e)[0],2),r=c[0],n=c[1];return Object(o.jsxs)("div",{className:"architecture",children:[Object(o.jsx)("span",{children:r}),Object(o.jsx)("ul",{style:{textAlign:"center"},children:n.map((function(e,t){return Object(o.jsx)("li",{children:e},t)}))})]},t)})),Object(o.jsxs)("div",{className:"btnsContainer",children:[Object(o.jsx)("a",{href:j,target:"_blank",rel:"noreferrer",children:Object(o.jsx)("div",{children:"Visit Site"})}),Object(o.jsx)("a",{href:u,target:"_blank",rel:"noreferrer",children:Object(o.jsx)("div",{children:"GitHub Repo"})})]})]})]})},R=function(){var e=m("portfolio");return Object(o.jsxs)("section",{ref:e,className:"portfolioContainer",children:[Object(o.jsx)("h3",{children:"PORTFOLIO"}),Object(o.jsx)("div",{className:"portfolioCards",children:A.map((function(e){return Object(o.jsx)(M,{card:e},e.id)}))})]})},H=(c(22),new Array(400).fill(null).map((function(e,t){return Object(o.jsx)("span",{className:"star",style:{fontSize:Math.ceil(20*Math.random())+"px",opacity:Math.random().toFixed(1),position:"absolute",bottom:Math.ceil(80*Math.random())+"%",left:Math.ceil(100*Math.random())-1+"%",color:Math.random()<=.02?"red":Math.random()<=.5?"gold":"white"},children:"."},t)}))),B=function(e){var t=e.children;return Object(o.jsxs)("section",{className:"skyContainer",children:[t,H,Object(o.jsx)("img",{className:"pinkMoon",src:"/portfolio/pink-moon.png",alt:"pink-moon"})]})},L=(c(23),function(){return Object(o.jsxs)("div",{className:"contactBarContainer",children:[Object(o.jsx)("div",{className:"copyright",children:"\xa9 2021 Daniel Shapiro"}),Object(o.jsx)("div",{className:"siteSpecs",children:"Site built with React"})]})}),P=(c(24),function(){var e=m("contact");return Object(o.jsxs)("section",{ref:e,className:"contactContainer",children:[Object(o.jsx)("h3",{children:"CONTACT"}),Object(o.jsx)(l,{}),Object(o.jsx)(L,{})]})}),U=(c(25),function(){return Object(o.jsx)("section",{className:"easterEggContainer",children:"hi im easter egg modal"})}),F=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),c=t[0],n=t[1],i=Object(r.useState)("recruiter"),s=Object(d.a)(i,2),a=s[0],l=s[1],u=Object(r.useContext)(j).setActiveNodeId;return Object(o.jsxs)("main",{children:[Object(o.jsx)(f,{setModalVisible:n,setModalComponent:l}),c&&Object(o.jsx)(b,{closeModal:function(){n(!1),u("")},children:"recruiter"===a?Object(o.jsx)(w,{}):Object(o.jsx)(U,{})}),Object(o.jsx)(S,{}),Object(o.jsxs)(B,{children:[Object(o.jsx)(R,{}),Object(o.jsx)(P,{})]})]})};var _=function(){return Object(o.jsx)(u,{children:Object(o.jsxs)("div",{className:"appContainer",children:[Object(o.jsx)(h,{}),Object(o.jsx)(F,{})]})})};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(_,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.a16f18b9.chunk.js.map