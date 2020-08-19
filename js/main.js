!function(c){var t={};function n(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return c[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=c,n.c=t,n.d=function(c,t,e){n.o(c,t)||Object.defineProperty(c,t,{enumerable:!0,get:e})},n.r=function(c){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},n.t=function(c,t){if(1&t&&(c=n(c)),8&t)return c;if(4&t&&"object"==typeof c&&c&&c.__esModule)return c;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:c}),2&t&&"string"!=typeof c)for(var r in c)n.d(e,r,function(t){return c[t]}.bind(null,r));return e},n.n=function(c){var t=c&&c.__esModule?function(){return c.default}:function(){return c};return n.d(t,"a",t),t},n.o=function(c,t){return Object.prototype.hasOwnProperty.call(c,t)},n.p="",n(n.s=0)}([function(module,exports){eval('const repoList = document.querySelector(`.projects__list--js`);\r\nconst baseURL = `https://api.github.com/users/JakHer/repos?sort=`;\r\nconst sort = `updated`;\r\n\r\nconst getRepo = async (sort) => {\r\n  try {\r\n    const response = await fetch(`${baseURL}${sort}`);\r\n    const data = await response.json();\r\n    var data2 = data.filter(function (item) {\r\n      return item.name !== `JakHer` && item.name !== `jakher.github.io`;\r\n    });\r\n    console.log(data2);\r\n    return data2;\r\n  } catch (error) {\r\n    console.log(error);\r\n  }\r\n};\r\n\r\ngetRepo(sort).then((data2) => {\r\n  for (let repo of data2) {\r\n    const { name, html_url, description, homepage } = repo;\r\n\r\n    const li = document.createElement(`li`);\r\n    li.classList.add(`projects__item`);\r\n\r\n    const div = document.createElement(`div`);\r\n    div.classList.add(`projects__container`);\r\n\r\n    const img = document.createElement(`img`);\r\n    img.classList.add(`projects__img`);\r\n    img.setAttribute(`src`, `../assets/img/githubIcon.svg`);\r\n    img.setAttribute(`alt`, `Github icon.`);\r\n\r\n    const h3 = document.createElement(`h3`);\r\n    h3.classList.add(`projects__heading`);\r\n    h3.textContent = `${name}`;\r\n\r\n    const p = document.createElement(`p`);\r\n    p.classList.add(`projects__paragraph`);\r\n    p.textContent = `${description}`;\r\n\r\n    const linkDiv = document.createElement(`div`);\r\n    linkDiv.classList.add(`projects__links`);\r\n\r\n    const demo = document.createElement(`a`);\r\n    demo.classList.add(`projects__button`, `projects__button--demo`);\r\n    demo.setAttribute(`href`, `${homepage}`);\r\n    demo.setAttribute(`target`, `_blank`);\r\n    demo.setAttribute(`rel`, `nofollow noreferrer`);\r\n    demo.textContent = `Demo`;\r\n\r\n    const github = document.createElement(`a`);\r\n    github.classList.add(`projects__button`, `projects__button--github`);\r\n    github.setAttribute(`href`, `${html_url}`);\r\n    github.setAttribute(`target`, `_blank`);\r\n    github.setAttribute(`rel`, `nofollow noreferrer`);\r\n    github.textContent = `Github`;\r\n\r\n    repoList.appendChild(li);\r\n    li.appendChild(div);\r\n    div.appendChild(img);\r\n    div.appendChild(h3);\r\n    li.appendChild(linkDiv);\r\n\r\n    description ? div.appendChild(p) : ``;\r\n\r\n    homepage ? linkDiv.appendChild(demo) : ``;\r\n    html_url ? linkDiv.appendChild(github) : ``;\r\n  }\r\n});\r\n\r\n// const repos = resp;\r\n// for (const repo of repos) {\r\n//   let { name, html_url, description, homepage } = repo;\r\n//   repoList.innerHTML += `<li class="projects__item">\r\n//         <div class="projects__container">\r\n//         <img class="projects__img" src="../assets/img/githubIcon.svg" alt="github icon.">\r\n//         <h3 class="projects__heading">${name}</h3>\r\n//           ${\r\n//             description\r\n//               ? ` <p class="projects__paragraph">${description}</p>`\r\n//               : ""\r\n//           }\r\n//         </div>\r\n//         <div class="projects__links">\r\n//     ${\r\n//       homepage\r\n//         ? `<a class="projects__button projects__button--demo" href="${homepage}" target="_blank" rel="nofollow noreferrer">Demo</a >`\r\n//         : ""\r\n//     }\r\n//     <a class="projects__button projects__button--github" href="${html_url}" target="_blank" rel="nofollow noreferrer" >GitHub</a >\r\n//         </div >\r\n//       </li > `;\r\n// }\r\n//\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DLFFBQVEsRUFBRSxLQUFLO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyx3Q0FBd0M7O0FBRW5EO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLEtBQUs7O0FBRTdCO0FBQ0E7QUFDQSx1QkFBdUIsWUFBWTs7QUFFbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLFNBQVM7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxVQUFVLHdDQUF3QztBQUNsRDtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsS0FBSztBQUNoRDtBQUNBO0FBQ0Esc0RBQXNELFlBQVk7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLFNBQVM7QUFDbEY7QUFDQTtBQUNBLG9FQUFvRSxTQUFTO0FBQzdFO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZXBvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0c19fbGlzdC0tanNgKTtcclxuY29uc3QgYmFzZVVSTCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL0pha0hlci9yZXBvcz9zb3J0PWA7XHJcbmNvbnN0IHNvcnQgPSBgdXBkYXRlZGA7XHJcblxyXG5jb25zdCBnZXRSZXBvID0gYXN5bmMgKHNvcnQpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfSR7c29ydH1gKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICB2YXIgZGF0YTIgPSBkYXRhLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICByZXR1cm4gaXRlbS5uYW1lICE9PSBgSmFrSGVyYCAmJiBpdGVtLm5hbWUgIT09IGBqYWtoZXIuZ2l0aHViLmlvYDtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coZGF0YTIpO1xyXG4gICAgcmV0dXJuIGRhdGEyO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuZ2V0UmVwbyhzb3J0KS50aGVuKChkYXRhMikgPT4ge1xyXG4gIGZvciAobGV0IHJlcG8gb2YgZGF0YTIpIHtcclxuICAgIGNvbnN0IHsgbmFtZSwgaHRtbF91cmwsIGRlc2NyaXB0aW9uLCBob21lcGFnZSB9ID0gcmVwbztcclxuXHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGxpYCk7XHJcbiAgICBsaS5jbGFzc0xpc3QuYWRkKGBwcm9qZWN0c19faXRlbWApO1xyXG5cclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoYHByb2plY3RzX19jb250YWluZXJgKTtcclxuXHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBpbWdgKTtcclxuICAgIGltZy5jbGFzc0xpc3QuYWRkKGBwcm9qZWN0c19faW1nYCk7XHJcbiAgICBpbWcuc2V0QXR0cmlidXRlKGBzcmNgLCBgLi4vYXNzZXRzL2ltZy9naXRodWJJY29uLnN2Z2ApO1xyXG4gICAgaW1nLnNldEF0dHJpYnV0ZShgYWx0YCwgYEdpdGh1YiBpY29uLmApO1xyXG5cclxuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaDNgKTtcclxuICAgIGgzLmNsYXNzTGlzdC5hZGQoYHByb2plY3RzX19oZWFkaW5nYCk7XHJcbiAgICBoMy50ZXh0Q29udGVudCA9IGAke25hbWV9YDtcclxuXHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgcGApO1xyXG4gICAgcC5jbGFzc0xpc3QuYWRkKGBwcm9qZWN0c19fcGFyYWdyYXBoYCk7XHJcbiAgICBwLnRleHRDb250ZW50ID0gYCR7ZGVzY3JpcHRpb259YDtcclxuXHJcbiAgICBjb25zdCBsaW5rRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XHJcbiAgICBsaW5rRGl2LmNsYXNzTGlzdC5hZGQoYHByb2plY3RzX19saW5rc2ApO1xyXG5cclxuICAgIGNvbnN0IGRlbW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBhYCk7XHJcbiAgICBkZW1vLmNsYXNzTGlzdC5hZGQoYHByb2plY3RzX19idXR0b25gLCBgcHJvamVjdHNfX2J1dHRvbi0tZGVtb2ApO1xyXG4gICAgZGVtby5zZXRBdHRyaWJ1dGUoYGhyZWZgLCBgJHtob21lcGFnZX1gKTtcclxuICAgIGRlbW8uc2V0QXR0cmlidXRlKGB0YXJnZXRgLCBgX2JsYW5rYCk7XHJcbiAgICBkZW1vLnNldEF0dHJpYnV0ZShgcmVsYCwgYG5vZm9sbG93IG5vcmVmZXJyZXJgKTtcclxuICAgIGRlbW8udGV4dENvbnRlbnQgPSBgRGVtb2A7XHJcblxyXG4gICAgY29uc3QgZ2l0aHViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgYWApO1xyXG4gICAgZ2l0aHViLmNsYXNzTGlzdC5hZGQoYHByb2plY3RzX19idXR0b25gLCBgcHJvamVjdHNfX2J1dHRvbi0tZ2l0aHViYCk7XHJcbiAgICBnaXRodWIuc2V0QXR0cmlidXRlKGBocmVmYCwgYCR7aHRtbF91cmx9YCk7XHJcbiAgICBnaXRodWIuc2V0QXR0cmlidXRlKGB0YXJnZXRgLCBgX2JsYW5rYCk7XHJcbiAgICBnaXRodWIuc2V0QXR0cmlidXRlKGByZWxgLCBgbm9mb2xsb3cgbm9yZWZlcnJlcmApO1xyXG4gICAgZ2l0aHViLnRleHRDb250ZW50ID0gYEdpdGh1YmA7XHJcblxyXG4gICAgcmVwb0xpc3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgbGkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGgzKTtcclxuICAgIGxpLmFwcGVuZENoaWxkKGxpbmtEaXYpO1xyXG5cclxuICAgIGRlc2NyaXB0aW9uID8gZGl2LmFwcGVuZENoaWxkKHApIDogYGA7XHJcblxyXG4gICAgaG9tZXBhZ2UgPyBsaW5rRGl2LmFwcGVuZENoaWxkKGRlbW8pIDogYGA7XHJcbiAgICBodG1sX3VybCA/IGxpbmtEaXYuYXBwZW5kQ2hpbGQoZ2l0aHViKSA6IGBgO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBjb25zdCByZXBvcyA9IHJlc3A7XHJcbi8vIGZvciAoY29uc3QgcmVwbyBvZiByZXBvcykge1xyXG4vLyAgIGxldCB7IG5hbWUsIGh0bWxfdXJsLCBkZXNjcmlwdGlvbiwgaG9tZXBhZ2UgfSA9IHJlcG87XHJcbi8vICAgcmVwb0xpc3QuaW5uZXJIVE1MICs9IGA8bGkgY2xhc3M9XCJwcm9qZWN0c19faXRlbVwiPlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0c19fY29udGFpbmVyXCI+XHJcbi8vICAgICAgICAgPGltZyBjbGFzcz1cInByb2plY3RzX19pbWdcIiBzcmM9XCIuLi9hc3NldHMvaW1nL2dpdGh1Ykljb24uc3ZnXCIgYWx0PVwiZ2l0aHViIGljb24uXCI+XHJcbi8vICAgICAgICAgPGgzIGNsYXNzPVwicHJvamVjdHNfX2hlYWRpbmdcIj4ke25hbWV9PC9oMz5cclxuLy8gICAgICAgICAgICR7XHJcbi8vICAgICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbi8vICAgICAgICAgICAgICAgPyBgIDxwIGNsYXNzPVwicHJvamVjdHNfX3BhcmFncmFwaFwiPiR7ZGVzY3JpcHRpb259PC9wPmBcclxuLy8gICAgICAgICAgICAgICA6IFwiXCJcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdHNfX2xpbmtzXCI+XHJcbi8vICAgICAke1xyXG4vLyAgICAgICBob21lcGFnZVxyXG4vLyAgICAgICAgID8gYDxhIGNsYXNzPVwicHJvamVjdHNfX2J1dHRvbiBwcm9qZWN0c19fYnV0dG9uLS1kZW1vXCIgaHJlZj1cIiR7aG9tZXBhZ2V9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9mb2xsb3cgbm9yZWZlcnJlclwiPkRlbW88L2EgPmBcclxuLy8gICAgICAgICA6IFwiXCJcclxuLy8gICAgIH1cclxuLy8gICAgIDxhIGNsYXNzPVwicHJvamVjdHNfX2J1dHRvbiBwcm9qZWN0c19fYnV0dG9uLS1naXRodWJcIiBocmVmPVwiJHtodG1sX3VybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub2ZvbGxvdyBub3JlZmVycmVyXCIgPkdpdEh1YjwvYSA+XHJcbi8vICAgICAgICAgPC9kaXYgPlxyXG4vLyAgICAgICA8L2xpID4gYDtcclxuLy8gfVxyXG4vL1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n')}]);