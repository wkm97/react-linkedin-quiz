(this["webpackJsonpreact-linkedin-quiz"]=this["webpackJsonpreact-linkedin-quiz"]||[]).push([[0],{503:function(e,t,n){"use strict";n.r(t);var c,s=n(0),a=n.n(s),r=n(124),i=n.n(r),l=(n(69),n(10)),o=n(2),d=n(28),u=n(42),j=n(1),b=function(e){var t=e.assessmentInfo.title.replace(/\[|\]/g,""),n=e.assessmentInfo.url;return Object(j.jsx)(u.b,{to:"/practice/".concat(btoa(n)),children:Object(j.jsx)("div",{className:"p-2 m-1 bg-secondary-500 dark:bg-gray-800 font-bold text-gray-100 rounded-sm shadow text-sm flex justify-between",children:Object(j.jsx)("span",{children:t})})})},m=function(e){var t,n=Object(s.useState)(),c=Object(l.a)(n,2),a=c[0],r=c[1],i=Object(s.useState)(),o=Object(l.a)(i,2),u=o[0],m=o[1];Object(s.useEffect)((function(){d.githubLinkedinSource.getAssessmentInfos().then((function(e){r(e)}))}),[]);return Object(j.jsxs)("div",{className:"flex flex-col justify-center ".concat(e.className),children:[Object(j.jsx)("div",{id:"searchbar-for-linkedin",className:"w-full h-10 pl-3 pr-2 bg-gray-50 dark:bg-gray-800 border-2 rounded-full flex justify-between items-center relative",children:Object(j.jsx)("input",{type:"search",name:"filter-assessment",id:"filter-assessment",placeholder:"Filter LinkedIn Assessment",className:"bg-gray-50 dark:bg-gray-800 w-full outline-none focus:outline-none active:outline-none",onChange:function(e){return function(e){m(e.target.value)}(e)}})}),Object(j.jsx)("div",{id:"linkedin-assessment-lists",className:"mt-4",children:null===(t=null===a||void 0===a?void 0:a.filter((function(e){return e.title.toLowerCase().includes(u||"")})))||void 0===t?void 0:t.map((function(e,t){return Object(j.jsx)(b,{assessmentInfo:e},t)}))})]})},x=n.p+"static/media/questionnaire.da1f0384.svg",f=function(){var e=Object(o.e)(),t=Object(s.useState)(),n=Object(l.a)(t,2),c=n[0],a=n[1];return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"flex justify-between md:px-20",children:[Object(j.jsxs)("button",{className:"m-2 p-2 text-lg uppercase font-bold focus:outline-none",children:[Object(j.jsx)("span",{className:"text-primary-500",children:"MD2"}),"Practice"]}),Object(j.jsxs)("div",{className:"m-2 p-2 text-md",children:[Object(j.jsx)("button",{})," Dark Theme"]})]}),Object(j.jsx)("section",{children:Object(j.jsxs)("div",{className:"flex justify-around px-10",children:[Object(j.jsxs)("div",{className:"flex flex-col w-1/2 justify-center justify-items-center text-center",children:[Object(j.jsx)("span",{className:"text-md md:text-lg font-bold",children:"Simple Practice Test Engine"}),Object(j.jsx)("span",{className:"text-xs md:text-lg fond-semibold text-gray-400",children:"Convert MD File to Q&A for Practice"})]}),Object(j.jsx)("div",{className:"flex justify-center justify-items-center text-center",children:Object(j.jsx)("img",{className:"w-full h-full",src:x,alt:"questionnaire-logo"})})]})}),Object(j.jsx)("section",{children:Object(j.jsxs)("div",{className:"flex flex-col mx-10 my-20 justify-center justify-items-center",children:[Object(j.jsxs)("div",{className:"w-full h-10 pl-3 pr-2 bg-gray-50 dark:bg-gray-800 border-2 rounded-full flex justify-between items-center relative",children:[Object(j.jsx)("input",{onChange:function(e){return a(e.target.value)},type:"search",name:"md-url",id:"md-url-submit",placeholder:"URL for MD File",className:"bg-gray-50 dark:bg-gray-800 w-full outline-none focus:outline-none active:outline-none"}),Object(j.jsx)("button",{onClick:function(){e.push("/practice/".concat(btoa(c||"")))},type:"submit",className:"ml-1 outline-none focus:outline-none active:outline-none",children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"})})})]}),Object(j.jsx)("div",{className:"text-lg uppercase text-center my-2",children:"OR"}),Object(j.jsx)("div",{className:"border border-b-2 shadow-md border-primary-700"}),Object(j.jsxs)("div",{className:"mt-4 font-bold flex justify-center",children:[Object(j.jsx)("span",{children:"LinkedIn Assessment Practice"}),Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"animate-bounce ml-2 h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{fillRule:"evenodd",d:"M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z",clipRule:"evenodd"})})]}),Object(j.jsx)(m,{className:"mt-4"})]})})]})},g=n(45),h=n(68),O=n(127),p=n(128),v=n.n(p),y=n(507),N=n(506),w={code:function(e){var t=e.inline,n=e.className,c=e.children,s=Object(O.a)(e,["inline","className","children"]),a=/language-(\w+)/.exec(n||"");return!t&&a?Object(j.jsx)(y.a,Object(h.a)({className:"".concat(n," pointer-events-auto"),style:N.a,language:a[1],PreTag:"div",children:String(c).replace(/\n$/,"")},s)):Object(j.jsx)("code",Object(h.a)({className:"".concat(n),children:c},s))}},k=function(e){return Object(j.jsx)(v.a,{components:w,children:e.content})},C=n(133);!function(e){e[e.IDLE=0]="IDLE",e[e.CORRECT=1]="CORRECT",e[e.WRONG=2]="WRONG"}(c||(c={}));var E=function(e){var t=e.explain,n=e.expand;return Object(j.jsx)(C.a,{show:n,enter:"transition ease-out duration-500 transform",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75 transform",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(j.jsx)("div",{className:"border-t-2 p-4 mt-4 select-text ".concat(n?"block":"overflow-hidden hidden"),children:Object(j.jsx)("p",{className:"break-words text-gray-700 dark:text-gray-50 text-opacity-80",children:t})})})},I=function(e){var t=e.challenge,n=e.status,r=Object(s.useState)(-9),i=Object(l.a)(r,2),o=i[0],d=i[1],u=t.getChoices(),b=function(e){return n!==c.IDLE&&t.getAnswers().includes(e)?"bg-gradient-to-r from-green-500 pointer-events-none":n===c.WRONG&&e===o?"bg-gradient-to-r from-red-500 pointer-events-none":n!==c.IDLE?"pointer-events-none":""};return Object(j.jsx)(a.a.Fragment,{children:Object(j.jsx)(g.c,{initialValues:{selected:""},onSubmit:function(t){e.onSelectedChange([parseInt(t.selected)]),d(parseInt(t.selected))},children:function(e){var t=e.values,s=e.setValues;return Object(j.jsxs)(g.b,{children:[Object(j.jsx)("div",{className:"flex-col my-5",role:"group","aria-labelledby":"single-choices-group",children:u.map((function(e,a){var r=String(a);return Object(j.jsxs)("div",{className:"flex items-center p-2 rounded-l-lg ".concat(b(a)),children:[Object(j.jsx)(g.a,{type:"radio",name:"selected",checked:r===t.selected,value:r}),Object(j.jsx)("span",{className:"w-11/12 mx-2 overflow-x-auto text-gray-800 dark:text-gray-100",onClick:function(){n===c.IDLE&&s({selected:String(a)})},children:Object(j.jsx)(k,{content:e})})]},a)}))}),Object(j.jsx)("button",{className:"block p-2 font-bold uppercase transition duration-200 ease-in-out ".concat(n===c.CORRECT?"bg-green-400 pointer-events-none":n===c.WRONG?"bg-red-400 pointer-events-none":"bg-primary-400"," text-gray-100 rounded-lg m-1 transform hover:-translate-y-1 hover:scale-110 hover:bg-primary-600 focus:outline-none"),type:"submit",children:"Check"})]})}})})},L=function(e){var t="Q"+e.index+". "+e.question;return Object(j.jsx)("div",{className:"border-primary-400 border-b-2 p-2 pb-4 overflow-x-auto",children:Object(j.jsx)(k,{content:t})})},S=function(e){var t=e.challenge,n=Object(s.useState)(c.IDLE),a=Object(l.a)(n,2),r=a[0],i=a[1],o=Object(s.useState)(),d=Object(l.a)(o,2),u=d[0],b=d[1],m=t.getExplanation();return Object(s.useEffect)((function(){void 0!==u&&t.getAnswers().includes(u[0])?i(c.CORRECT):void 0!==u?i(c.WRONG):void 0===u&&i(c.IDLE)}),[u,t]),Object(j.jsxs)("div",{className:"block p-2 text-xs mx-10 my-4 md:text-base border rounded-lg shadow dark:bg-gray-800",children:[Object(j.jsx)(L,{question:t.getQuestion(),index:t.getIndex()}),Object(j.jsx)(I,{challenge:t,status:r,onSelectedChange:function(e){return b(e)}}),m?Object(j.jsx)(E,{explain:m,expand:r!==c.IDLE}):null]})},R=function(){var e=Object(s.useState)(),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){fetch("https://raw.githubusercontent.com/Ebazhanov/linkedin-skill-assessments-quizzes/master/css/css-quiz.md").then((function(e){return e.text()})).then((function(e){var t=new d.MdFileProcessor(e).getQuiz();console.log(t),c(t)}))}),[]),Object(j.jsx)("div",{className:"flex-col justify-items-center pt-10 font-mono select-none bg-gray-100 dark:bg-gray-900 dark:text-gray-100",children:n?n.getChallenges().map((function(e,t){return Object(j.jsx)(S,{challenge:e},t)})):null})},D=function(){var e=Object(o.f)().encodedUrl,t=atob(e);console.log(t);var n=Object(s.useState)(),c=Object(l.a)(n,2),a=c[0],r=c[1];return Object(s.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){var t=new d.MdFileProcessor(e).getQuiz();r(t)}))}),[]),Object(j.jsx)("div",{className:"flex-col justify-items-center pt-10 font-mono select-none dark:text-gray-100",children:a?a.getChallenges().map((function(e,t){return Object(j.jsx)(S,{challenge:e},t)})):null})};var F=function(){return Object(j.jsxs)(u.a,{basename:"/",children:[Object(j.jsx)(o.a,{exact:!0,path:"/",component:f}),Object(j.jsx)(o.a,{exact:!0,path:"/example",component:R}),Object(j.jsx)(o.a,{path:"/practice/:encodedUrl",component:D})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,508)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root")),z()},69:function(e,t,n){}},[[503,1,2]]]);
//# sourceMappingURL=main.e8d6402e.chunk.js.map