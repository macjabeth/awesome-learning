(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{186:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(195),l=t(198),s=t(201),c=t(200),o=t(1),m=t.n(o),u=t(56),d=t(193),h=t.n(d),p=(t(166),function(e){var a=h()("SectionTitle",{"SectionTitle--body":"xl"===e.fontSize,"SectionTitle--uppercase":!0===e.textTransform}),t=""+e.headingLevel;return r.a.createElement(s.a,{mb:e.mb},r.a.createElement(t,{className:a}," ",e.children," "))});p.propTypes={children:m.a.string.isRequired,headingLevel:m.a.oneOf(["h2","h3","h4"]),fontSize:m.a.oneOf(["body","large","xl"]),textTransform:m.a.bool,mb:m.a.string},p.defaultProps={headingLevel:"h2",fontSize:"large",textTransform:!1,mb:"0px"};var g=p,E=(t(167),function(e){var a=h()("Text",{"Text--large":"large"===e.fontSize,"Text--xl":"xl"===e.fontSize});return r.a.createElement("p",{className:a},e.children)});E.propTypes={children:m.a.node.isRequired,fontSize:m.a.oneOf(["body","large","xl"])},E.defaultProps={fontSize:"body"};var v=E,f=t(192),b=(t(168),function(e){return r.a.createElement(u.Link,{className:"TrackCard",to:e.path},r.a.createElement("div",{className:"TrackCard-iconWrap"},r.a.createElement(f.a,{icon:e.icon,cssClasses:"TrackCard-icon"})),r.a.createElement(g,{textTransform:!0,headingLevel:"h3",mb:"8px"},e.title),r.a.createElement(v,null,e.subTitle))});b.propTypes={title:m.a.string.isRequired,subTitle:m.a.string.isRequired,path:m.a.string},b.defaultProps={path:"/"};var y=b,L=t(191),T=(t(169),function(){return r.a.createElement("div",{className:"Landing"},r.a.createElement("div",{className:"Landing-heroWrapper"},r.a.createElement("div",{className:"Landing-titleWrapper"},r.a.createElement(g,{mb:"16px"},"Learn JavaScript and Front-End Fundamentals."),r.a.createElement(v,{fontSize:"xl"},"At your own pace.")),r.a.createElement("div",{className:"Landing-courseWrapper"},r.a.createElement(y,{title:"Array Methods",icon:Object(L.a)("array"),subTitle:"Learn functional array methods like filter, map, and reduce!",path:"/courses/Array-Methods/"}),r.a.createElement(y,{title:"Data Types",icon:Object(L.a)("data"),subTitle:"Deep dive into types, equality, coercion, immutability and more.",path:"/courses/Data-Types/"}),r.a.createElement(y,{title:"Promises",icon:Object(L.a)("async"),subTitle:"Learn the Promise API inside and out.",path:"/courses/Promises/"}),r.a.createElement(y,{title:"Testing",icon:Object(L.a)("testing"),subTitle:"Learn frontend testing with Jest and Enzyme.",path:"/courses/Testing/"}))),r.a.createElement("div",{className:"Landing-callOut"},r.a.createElement("p",null,"Awesome Learning is Frontend focused learning platform built around"," ",r.a.createElement("b",null,"deliberate practice"),"."),r.a.createElement("p",null,"We designed the courses to be perfect for ",r.a.createElement("b",null,"group programming"),".")),r.a.createElement(c.a,{className:"Landing-description",title:"What's Deliberate Practice?",isLight:!0},r.a.createElement("p",null,"Deliberate practice involves more than just repetition; it requires activities that are designed to improve performance, challenge the learner, and provide feedback."),r.a.createElement(l.a,{variation:"secondary",path:"https://pwp.gatech.edu/bmeac/2016/02/18/deliberate-practice-and-why-you-should-do-it/",isExternal:!0},"Learn More")),r.a.createElement(c.a,{className:"Landing-description",title:"How Do We Apply Deliberate Practice?",isLight:!0},r.a.createElement(s.a,{is:"p",mb:"16px"},"Each course and lesson are designed to incrementally challenge the learner while providing immediate feedback in the form of quizzes, provided solutions, and guiding comments."),r.a.createElement(s.a,{is:"p",mb:"16px"},r.a.createElement("b",null,"Each course")," is comprised of multiple lessons that each build on learnings from the previous lesson, always challenging the learner to reach for new understanding."),r.a.createElement("p",null,r.a.createElement("b",null,"Each lesson")," features exercises designed to incrementally increase in complexity to further challenge the user.")),r.a.createElement(c.a,{className:"Landing-description",title:"Group Focused",isLight:!0},r.a.createElement(s.a,{is:"p",mb:"16px"},'We believe one of the major separators between "junior" and "senior" developers is technical communication. That\'s why we strongly suggest running these sessions with a small group, either in person or over a chat client.'),r.a.createElement("p",null,"Over the hundreds of sessions we've run, those who tackle these courses as a group learn faster and become stronger technical communicators, all while building key technical skills.")),r.a.createElement(c.a,{title:"How it Works",isLight:!0},r.a.createElement("ol",{className:"Landing-list"},r.a.createElement("li",{className:"Landing-listItem"},r.a.createElement("h3",null,"Gather a Team"),r.a.createElement("p",{className:"Landing-listItemText"},"We recommend groups of no more than"," ",r.a.createElement(l.a,{variation:"secondary",path:"https://en.wikipedia.org/wiki/Ringelmann_effect",isExternal:!0},"five or six people"),". Try to build groups with relatively similar abilities across members to keep everyone interested and engaged.")),r.a.createElement("li",{className:"Landing-listItem"},r.a.createElement("h3",null,"Pick a Course"),r.a.createElement("p",{className:"Landing-listItemText"},"Start with one of our pre-built courses like array methods, testing, etc. Later you can use the same learning method with other materials and contribute your own course!")),r.a.createElement("li",{className:"Landing-listItem"},r.a.createElement("h3",null,"Pick a Time"),r.a.createElement("p",{className:"Landing-listItemText"},"We recommend setting aside an hour to an hour and a half per session, at a cadence of once per week until you complete your course.")),r.a.createElement("li",{className:"Landing-listItem"},r.a.createElement("h3",null,"Pick a Place"),r.a.createElement("p",{className:"Landing-listItemText"},"Ideally, each of you has a laptop in a quiet space. Otherwise, find the best way to get your group together at the scheduled time whether in person or remotely.")))),r.a.createElement(c.a,{className:"Landing-description",title:"Who is This For?",isLight:!0},r.a.createElement(s.a,{is:"p",mb:"16px"},"This material is currently used by full time software engineers within Wayfair. We believe beginners, experts, and everyone in between can learn something here."),r.a.createElement("p",null,"In general, we find that a group of folks motivated to learn and improve both their soft skills and Frontend knowledge will do well here. If there are explicit pre-requisites for a course, they will be clearly stated.")),r.a.createElement(c.a,{title:"Ready to Get Started?",isLight:!0},r.a.createElement(s.a,{mb:"16px"},r.a.createElement(l.a,{variation:"secondary",path:"/courses"},"See Our Courses")),r.a.createElement(l.a,{variation:"secondary",path:"/howTo"},"Read the Session How-To Guide")))});t.d(a,"query",function(){return w});var w="1304127272";a.default=function(e){var a=e.data,t=a.site.siteMetadata,n=t.title,l=t.subtitle,s=a.allMarkdownRemark.edges;return r.a.createElement(i.a,{title:n,description:l,isFullBleed:!0},r.a.createElement(T,{courseEdges:s}))}},191:function(e,a,t){"use strict";var n=t(1),r=t.n(n),i=t(194),l={name:r.a.string.isRequired},s=function(e){var a,t={name:e};switch(r.a.checkPropTypes(l,t,"prop","getIcon"),e){case"twitter":a=i.a.TWITTER;break;case"github":a=i.a.GITHUB;break;case"vkontakte":a=i.a.VKONTAKTE;break;case"telegram":a=i.a.TELEGRAM;break;case"email":a=i.a.EMAIL;break;case"rss":a=i.a.RSS;break;case"logo":a=i.a.LOGO;break;case"menu":a=i.a.MENU;break;case"functions":a=i.a.FUNCTIONS;break;case"array":a=i.a.ARRAY;break;case"async":a=i.a.ASYNC;break;case"data":a=i.a.DATA;break;case"testing":a=i.a.TESTING;break;default:a={}}return a};r.a.string.isRequired,r.a.string.isRequired;t.d(a,"a",function(){return s})},192:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=(t(155),function(e){var a=e.icon,t=e.cssClasses,n=void 0===t?"":t;return r.a.createElement("svg",{className:"Icon "+n,viewBox:a.viewBox},r.a.createElement("path",{d:a.path}))});t.d(a,"a",function(){return i})},194:function(e,a,t){"use strict";var n={TWITTER:{path:"M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z",viewBox:"0 0 26 28"},FACEBOOK:{path:"M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z",viewBox:"0 0 16 28"},TELEGRAM:{path:"M27.563 0.172c0.328 0.234 0.484 0.609 0.422 1l-4 24c-0.047 0.297-0.234 0.547-0.5 0.703-0.141 0.078-0.313 0.125-0.484 0.125-0.125 0-0.25-0.031-0.375-0.078l-7.078-2.891-3.781 4.609c-0.187 0.234-0.469 0.359-0.766 0.359-0.109 0-0.234-0.016-0.344-0.063-0.391-0.141-0.656-0.516-0.656-0.938v-5.453l13.5-16.547-16.703 14.453-6.172-2.531c-0.359-0.141-0.594-0.469-0.625-0.859-0.016-0.375 0.172-0.734 0.5-0.922l26-15c0.156-0.094 0.328-0.141 0.5-0.141 0.203 0 0.406 0.063 0.562 0.172z",viewBox:"0 0 28 28"},VKONTAKTE:{path:"M29.953 8.125c0.234 0.641-0.5 2.141-2.344 4.594-3.031 4.031-3.359 3.656-0.859 5.984 2.406 2.234 2.906 3.313 2.984 3.453 0 0 1 1.75-1.109 1.766l-4 0.063c-0.859 0.172-2-0.609-2-0.609-1.5-1.031-2.906-3.703-4-3.359 0 0-1.125 0.359-1.094 2.766 0.016 0.516-0.234 0.797-0.234 0.797s-0.281 0.297-0.828 0.344h-1.797c-3.953 0.25-7.438-3.391-7.438-3.391s-3.813-3.938-7.156-11.797c-0.219-0.516 0.016-0.766 0.016-0.766s0.234-0.297 0.891-0.297l4.281-0.031c0.406 0.063 0.688 0.281 0.688 0.281s0.25 0.172 0.375 0.5c0.703 1.75 1.609 3.344 1.609 3.344 1.563 3.219 2.625 3.766 3.234 3.437 0 0 0.797-0.484 0.625-4.375-0.063-1.406-0.453-2.047-0.453-2.047-0.359-0.484-1.031-0.625-1.328-0.672-0.234-0.031 0.156-0.594 0.672-0.844 0.766-0.375 2.125-0.391 3.734-0.375 1.266 0.016 1.625 0.094 2.109 0.203 1.484 0.359 0.984 1.734 0.984 5.047 0 1.062-0.203 2.547 0.562 3.031 0.328 0.219 1.141 0.031 3.141-3.375 0 0 0.938-1.625 1.672-3.516 0.125-0.344 0.391-0.484 0.391-0.484s0.25-0.141 0.594-0.094l4.5-0.031c1.359-0.172 1.578 0.453 1.578 0.453z",viewBox:"0 0 31 28"},GITHUB:{path:"M12 0a12.15 12.15 0 0 1 12 12.3A12.29 12.29 0 0 1 15.79 24c-.6.11-.82-.27-.82-.59v-2.1c3.34.75 4-1.65 4-1.65a3.27 3.27 0 0 1 1.33-1.8c1.09-.76-.08-.74-.08-.74a2.53 2.53 0 0 0-1.84 1.26 2.52 2.52 0 0 1-3.49 1 2.68 2.68 0 0 0-.76-1.65c2.66-.31 5.47-1.36 5.47-6.08a4.82 4.82 0 0 0-1.24-3.3 4.52 4.52 0 0 0-.06-3.25s-1-.33-3.3 1.26a11.18 11.18 0 0 0-6 0C6.7 4.77 5.7 5.1 5.7 5.1a4.52 4.52 0 0 0-.12 3.26 4.81 4.81 0 0 0-1.23 3.3c0 4.73 2.8 5.77 5.47 6.07A3 3 0 0 0 9 20v3.38c0 .38-.21.71-.82.59A12.29 12.29 0 0 1 0 12.3 12.15 12.15 0 0 1 12 0z",viewBox:"0 0 24 24"},EMAIL:{path:"M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z",viewBox:"0 0 28 28"},RSS:{path:"M6 21c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM14 22.922c0.016 0.281-0.078 0.547-0.266 0.75-0.187 0.219-0.453 0.328-0.734 0.328h-2.109c-0.516 0-0.938-0.391-0.984-0.906-0.453-4.766-4.234-8.547-9-9-0.516-0.047-0.906-0.469-0.906-0.984v-2.109c0-0.281 0.109-0.547 0.328-0.734 0.172-0.172 0.422-0.266 0.672-0.266h0.078c3.328 0.266 6.469 1.719 8.828 4.094 2.375 2.359 3.828 5.5 4.094 8.828zM22 22.953c0.016 0.266-0.078 0.531-0.281 0.734-0.187 0.203-0.438 0.313-0.719 0.313h-2.234c-0.531 0-0.969-0.406-1-0.938-0.516-9.078-7.75-16.312-16.828-16.844-0.531-0.031-0.938-0.469-0.938-0.984v-2.234c0-0.281 0.109-0.531 0.313-0.719 0.187-0.187 0.438-0.281 0.688-0.281h0.047c5.469 0.281 10.609 2.578 14.484 6.469 3.891 3.875 6.188 9.016 6.469 14.484z",viewBox:"0 0 22 28"},LOGO:{path:"M24 7.65l-1.52-5.72a.59.59 0 0 0-.39-.38L16.35 0a.55.55 0 0 0-.53.15L12 4l8 8 3.82-3.82a.55.55 0 0 0 .18-.53m-24 8.7l1.51 5.72a.55.55 0 0 0 .39.38L7.65 24a.55.55 0 0 0 .53-.15L12 20l-8-8-3.81 3.82a.53.53 0 0 0-.16.53M7.65 0L1.93 1.55a.56.56 0 0 0-.38.38L0 7.65a.55.55 0 0 0 .15.53L4 12l8-8L8.18.19A.49.49 0 0 0 7.65 0M23.8 15.77L20 12l-8 8 3.75 3.77a.74.74 0 0 0 .68.18L22 22.49a.66.66 0 0 0 .49-.49L24 16.47a.67.67 0 0 0-.16-.66",viewBox:"0 0 24 24"},MENU:{path:"M7,9h14c0.6,0,1-0.4,1-1s-0.4-1-1-1H7C6.4,7,6,7.4,6,8S6.4,9,7,9z M21,13H7c-0.6,0-1,0.4-1,1s0.4,1,1,1h14c0.6,0,1-0.4,1-1S21.6,13,21,13z M21,19H7c-0.6,0-1,0.4-1,1s0.4,1,1,1h14c0.6,0,1-0.4,1-1S21.6,19,21,19z",viewBox:"0 0 28 28"},FUNCTIONS:{path:"M5 2C2.33 5.32 1 9.49 1 14.5S2.33 23.68 5 27M21 2c2.67 3.32 4 7.49 4 12.5s-1.33 9.18-4 12.5",viewBox:"0 0 26 29"},ARRAY:{path:"M0 24h7.67v-2H1.83V2h5.92V0H0M24 0h-7.67v2h5.8v20h-5.92v2H24",viewBox:"0 0 24 24"},ASYNC:{path:"M15.1.49A12.88 12.88 0 0 0 1.31 5.08 1.006 1.006 0 0 0 3 6.17a10.94 10.94 0 0 1 11.6-3.78 10.06 10.06 0 0 1 7.4 9.26l-3-2.19a1 1 0 0 0-1.4.2 1 1 0 0 0 .2 1.39l4.5 3.29.6.2h.4a1 1 0 0 0 .6-.8A12.07 12.07 0 0 0 15.1.49zM21 17.72a11 11 0 0 1-11.6 3.79A10.06 10.06 0 0 1 2 12.25l3 2.19a1 1 0 1 0 1.2-1.6L1.71 9.56a1 1 0 0 0-1.4.19 1 1 0 0 0-.2.5A12.06 12.06 0 0 0 8.8 23.5a13.39 13.39 0 0 0 3.5.5 12.63 12.63 0 0 0 10.29-5.08 1 1 0 0 0-.2-1.39 1 1 0 0 0-1.39.19z",viewBox:"0 0 24 24"},DATA:{path:"M22.62 11.76H19.7l1.07-3.57a2.41 2.41 0 0 0 .08-.6 1.57 1.57 0 0 0-1.37-1.71h-2.14l1.07-3.57a2.35 2.35 0 0 0 .08-.6A1.57 1.57 0 0 0 17.12 0H4.55a1.43 1.43 0 0 0-1.23 1L.12 9.83a2.06 2.06 0 0 0-.12.7 1.93 1.93 0 0 0 .4 1.21 1.23 1.23 0 0 0 1 .5h2.34l-1.26 3.47a2 2 0 0 0-.12.69 2 2 0 0 0 .4 1.22 1.26 1.26 0 0 0 1 .5h3.12l-1.25 3.46a2.1 2.1 0 0 0-.12.7 1.91 1.91 0 0 0 .4 1.21 1.23 1.23 0 0 0 1 .51H20a1.44 1.44 0 0 0 1.29-1.11l2.64-8.82a2 2 0 0 0 .09-.61 1.57 1.57 0 0 0-1.4-1.7zm-21.24-1a.18.18 0 0 1-.14-.08.25.25 0 0 1-.06-.17.36.36 0 0 1 0-.1l3.22-8.8a.2.2 0 0 1 .18-.14h12.54c.11 0 .19.11.18.33l-1.22 4.08H6.91a1.41 1.41 0 0 0-1.23 1l-1.41 3.9zm2.36 5.87a.16.16 0 0 1-.14-.07.27.27 0 0 1-.06-.17.3.3 0 0 1 0-.1L5 12.24l1.76-4.75a.2.2 0 0 1 .18-.14h12.54c.11 0 .19.11.18.33l-1.22 4.08L17 16.49a.2.2 0 0 1-.19.16H3.74zm16.42 5.72a.19.19 0 0 1-.18.16H6.88a.17.17 0 0 1-.14-.07.32.32 0 0 1 0-.18.28.28 0 0 1 0-.09l1.48-4.07h8.65a1.31 1.31 0 0 0 1.09-.66 2 2 0 0 0 .2-.45l1.14-3.79h3.36c.11 0 .2.11.19.33z",viewBox:"0 0 24 24"},TESTING:{path:"M16 2.75a9.39 9.39 0 1 0-1.29 14.34 2.05 2.05 0 0 0 .54 1l5.33 5.33a2 2 0 0 0 2.81-2.81l-5.33-5.33a2.05 2.05 0 0 0-1-.54A9.39 9.39 0 0 0 16 2.75zm-1.66 11.59a7 7 0 1 1 0-9.91 7 7 0 0 1 0 9.91z",viewBox:"0 0 24 24"}},r={PREV_PAGE:"← PREV",NEXT_PAGE:"→ NEXT"};t.d(a,"a",function(){return n}),t.d(a,"b",function(){return r})},195:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(199),l=t.n(i),s=t(193),c=t.n(s),o=(t(26),t(196)),m=t(56),u=t(192),d=t(191),h=(t(156),function(e){var a=e.menu;return r.a.createElement("div",{className:"Menu"},r.a.createElement(u.a,{icon:Object(d.a)("menu"),cssClasses:"Menu-icon"}),r.a.createElement("ul",{className:"Menu-list"},a.map(function(e){return r.a.createElement("li",{key:e.label,className:"Menu-item"},r.a.createElement(m.Link,{to:e.path}," ",e.label," "))})))}),p=(t(157),function(e){var a=e.data.site.siteMetadata,t=a.title,n=a.menu;return r.a.createElement("header",{className:"Header"},r.a.createElement(m.Link,{to:"/",className:"Header-logo"},r.a.createElement(u.a,{icon:Object(d.a)("logo"),cssClasses:"Header-icon Header-icon--logo"}),r.a.createElement("h1",{className:"Header-title"},t)),r.a.createElement("nav",{className:"Header-nav"},r.a.createElement("div",{className:"Header-menu Header-menu--icon"},r.a.createElement(h,{menu:n})),r.a.createElement("ul",{className:"Header-list"},n.map(function(e){return r.a.createElement("li",{key:e.label,className:"Header-menu"},r.a.createElement(m.Link,{className:"Header-link",to:e.path},e.label))}),r.a.createElement("li",{className:"Header-menu"},r.a.createElement("a",{href:"https://github.com/wayfair/awesome-learning",className:"Header-link",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(u.a,{icon:Object(d.a)("github")}))))))}),g=function(e){return r.a.createElement(m.StaticQuery,{query:"2674749273",render:function(a){return r.a.createElement(p,Object.assign({},e,{data:a}))},data:o})},E=(t(158),function(e){var a=e.children,t=e.title,n=e.description,i=e.isFullBleed,s=c()("Layout",{"Layout--fullBleed":i});return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("title",null,t),r.a.createElement("meta",{name:"description",content:n}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Raleway:200,400",rel:"stylesheet"})),r.a.createElement(g,null),r.a.createElement("div",{className:s},a))});E.defaultProps={isFullBleed:!1};var v=E;t.d(a,"a",function(){return v})},196:function(e){e.exports={data:{site:{siteMetadata:{title:"Awesome Learning",menu:[{label:"Courses",path:"/courses"},{label:"How to Use",path:"/howTo"}]}}}}},198:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(1),l=t.n(i),s=t(56),c=t(193),o=t.n(c),m=(t(160),function(e){var a,t=e.children,n=e.variation,i=e.path,l=e.isBlock,c=e.isButton,m=e.isActive,u=e.isExternal,d=o()("Link",((a={"is-button":c,"is-block":l})["Link--"+n]=n&&!c,a));return u?r.a.createElement("a",{className:d,href:i,target:"_blank"},t):r.a.createElement(s.Link,{className:d,to:i,activeClassName:m?"is-active":""},t)});m.propTypes={variation:l.a.oneOf(["primary","secondary","tertiary","tertiaryAlt","tertiaryAltInverse","pill"]),path:l.a.string.isRequired,isButton:l.a.bool,isActive:l.a.bool,isExternal:l.a.bool},m.defaultProps={variation:null,isButton:!1,isActive:!1,isExternal:!1};var u=m;t.d(a,"a",function(){return u})},200:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(1),l=t.n(i),s=t(193),c=t.n(s),o=(t(161),function(e){var a=e.className,t=e.children,n=e.title,i=e.subTitle,l=e.isLight,s=e.contentAlignment,o=e.titleAlignment,m=c()("ContentSection-title",{"ContentSection-title--alignCenter":"center"===o,"ContentSection-title--alignLeft":"left"===o,"ContentSection-title--textLight":l}),u=c()("ContentSection-content "+a,{"ContentSection-content--alignCenter":"center"===s,"ContentSection-content--alignLeft":"left"===s});return r.a.createElement("div",{className:"ContentSection"},n&&r.a.createElement("header",{className:m},r.a.createElement("h1",null,n),i&&r.a.createElement("h2",null,i)),r.a.createElement("div",{className:u},t))});o.propTypes={className:l.a.string,title:l.a.string,subTitle:l.a.string,children:l.a.node.isRequired,isLight:l.a.bool,contentAlignment:l.a.oneOf(["left","center"]),textAlignment:l.a.oneOf(["left","center"])},o.defaultProps={className:"",title:null,subTitle:null,contentAlignment:"left",textAlignment:"left",isLight:!1};var m=o;t.d(a,"a",function(){return m})},201:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(1),l="Block-RenderedElement",s=function(e){var a=e.is,t=e.children,n=e.mt,i=e.mb,s=e.ml,c=e.mr,o=a;return r.a.createElement(o,{style:{marginTop:""+n,marginRight:""+c,marginBottom:""+i,marginLeft:""+s},"data-enzyme-id":l},t)};s.propTypes={is:t.n(i).a.string},s.defaultProps={is:"div",mb:"0px",mr:"0px",mt:"0px",ml:"0px"};var c=s;t.d(a,"a",function(){return c})}}]);
//# sourceMappingURL=component---src-templates-index-template-js-cebf3c9419a4123b0e29.js.map