(this["webpackJsonpreact-openpoetry-example"]=this["webpackJsonpreact-openpoetry-example"]||[]).push([[0],[,,function(e,t,a){e.exports=a(11)},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);a(3);var n=a(0),o=a.n(n),r=a(1),p=a.n(r),c={reactopenpoetrymargin2:"_2uP_H",reactopenpoetryh1:"_1P3rQ",reactopenpoetryslogan:"_6wVyv",reactopenpoetryplaypoemverse:"_3oumh",reactopenpoetrywrapper:"_1PgmW",reactopenpoetryaddpoeminputwrapper:"_1gNCR",reactopenpoetryaddpoeminput:"_sZT6O",reactopenpoetrybtn:"_2wz4h",reactopenpoetryplaypoemhint:"_ReXqT",reactopenpoetrygreencorrect:"_3uf5C"},i=function(e){var t=Object(n.useState)(""),a=t[0],r=t[1],p=Object(n.useState)(!0),i=p[0],l=p[1],m=function(e){l(e)};return o.a.createElement("div",{className:c.reactopenpoetryaddpoem},o.a.createElement("h3",null,"1. ",e.heading?e.heading1:"Add the poem you are about to learn/practice."),o.a.createElement("p",{className:c.reactopenpoetryslogan},e.helper?e.helper:"Try to split the poem for each verse."),o.a.createElement("div",{className:c.reactopenpoetryaddpoeminputwrapper+" "+c.reactopenpoetrymargin2},o.a.createElement("textarea",{type:"text",className:c.reactopenpoetryaddpoeminput,value:a,onChange:function(t){r(t.target.value),e.onChangePoem(t.target.value),""!=t.target.value?m(!1):m(!0)}})),o.a.createElement("button",{className:c.reactopenpoetrybtn,onClick:function(){e.onSetSection(1)},disabled:i},e.nextButton?e.nextButton:"Next"))},l=function(e){var t=Object(n.useState)(""),a=t[0],r=t[1],p=Object(n.useState)([]),i=p[0],l=p[1],m=Object(n.useState)(!0),s=m[0],u=m[1];return Object(n.useEffect)((function(){var t=e.poemTextPass.split(""),a=e.showHint;l(t),u(a)}),[e.poemTextPass,e.showHint]),o.a.createElement("div",{className:c.reactopenpoetryplaypoem},o.a.createElement("h3",null,"2. ",e.heading2?e.heading2:"Practice to write it down."),o.a.createElement("div",{className:c.reactopenpoetryplaypoemhint+" "+c.reactopenpoetrymargin2,style:{display:s?"block":"none"}},o.a.createElement("p",{className:c.reactopenpoetryplaypoemverse},e.hintText?e.hintText:"Poem hint"),o.a.createElement("div",{className:c.reactopenpoetryplaypoemhintrover},i?i.map((function(e,t){return o.a.createElement("span",{id:t,className:e.toLowerCase()==(a[t]?a[t].toLowerCase():a[t])?c.reactopenpoetrygreencorrect:"react-openpoetry-green-none"},e)})):o.a.createElement("p",null))),o.a.createElement("button",{className:c.reactopenpoetrybtn,onClick:function(){u(!s)}},e.hintButton?e.hintButton:"Show/hide hint"),o.a.createElement("div",{className:c.reactopenpoetryaddpoeminputwrapper+" "+c.reactopenpoetrymargin2},o.a.createElement("textarea",{type:"text",className:c.reactopenpoetryaddpoeminput,value:a,onChange:function(e){r(e.target.value)}})))},m=function(e){var t=Object(n.useState)(""),a=t[0],r=t[1],p=Object(n.useState)(0),m=p[0],s=p[1];return o.a.createElement("div",{className:c.reactopenpoetrywrapper},o.a.createElement("h1",{className:c.reactopenpoetryh1},e.name?e.name:"OpenPoetry"),o.a.createElement("p",{className:c.reactopenpoetryslogan},e.slogan?e.slogan:"Write down the poem to memorize easier."),0==m?o.a.createElement(i,{onChangePoem:function(e){r(e)},onSetSection:function(e){s(e)},heading1:e.heading1,helper:e.helper,nextButton:e.nextButton}):o.a.createElement(l,{poemTextPass:a,heading2:e.heading2,hintButton:e.hintButton,hintText:e.hintText,showHint:e.showHintOnStart}))},s=(a(10),function(){return o.a.createElement(m,{name:"OpenPoetry",slogan:"Write down the poem to memorize easier.",heading1:"Add the poem you are about to learn/practice.",helper:"Try to split the poem for each verse.",nextButton:"Next",heading2:"Practice to write it down.",hintText:"Poem hint",hintButton:"Show/hide hint",showHintOnStart:!0})});p.a.render(o.a.createElement(s,null),document.getElementById("root"))}],[[2,1,2]]]);
//# sourceMappingURL=main.8e3c6388.chunk.js.map