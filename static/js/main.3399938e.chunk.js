(this["webpackJsonptic-tac-toe-ai"]=this["webpackJsonptic-tac-toe-ai"]||[]).push([[0],{10:function(x,o,r){},21:function(x,o,r){},26:function(x,o,r){"use strict";r.r(o);var e,t,n=r(0),i=r.n(n),u=r(11),f=r.n(u),a=(r(21),r(10),r(2)),c=r(3),l=r(1);var s,p,h=function(){return Object(l.jsx)(d,{children:Object(l.jsx)(A,{children:"Tic Tac Toe Unbeatable AI"})})},d=c.a.div(e||(e=Object(a.a)(["\n    \n    text-align:center;\n    background: linear-gradient(90deg, #FFF, #ffdddd, #FFF);\n    min-height: 10vh;\n    display:flex;\n    justify-content:center;\n    align-items:center; \n    flex-wrap:no-wrap;\n\n"]))),A=c.a.div(t||(t=Object(a.a)(["\n\n    color: #383b3e;\n    font-family: 'Indie Flower', cursive;\n    font-size:28px;\n    padding: 3px;\n    white-space:nowrap;\n    text-shadow: -1.5px 3px 0 #FFF;\n\n"])));var j=function(){return Object(l.jsxs)(b,{children:[Object(l.jsx)(g,{href:"https://github.com/AntonioGMMelo",target:"_blank",children:Object(l.jsx)("img",{src:"./GitHub-Mark-Light-32px.png",alt:"GitHub Logo"})}),Object(l.jsx)(g,{href:"https://www.linkedin.com/in/antoniogmmelo/",target:"_blank",children:Object(l.jsx)("img",{src:"./LI-In-Bug.png",width:"32px",height:"32px",alt:"LinkedIn Logo"})}),Object(l.jsx)(g,{href:"https://antoniogmmelo.github.io/MyWeb",title:"Personal Website",target:"_blank",children:Object(l.jsx)("img",{src:"./home.png",width:"32px",height:"32px",alt:"House Icon"})})]})},b=c.a.div(s||(s=Object(a.a)(["\n    \n        background: #000021;\n        min-height:10vh;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n\n    "]))),g=c.a.a(p||(p=Object(a.a)(["\n    \n        margin: 0 20px 0 0;\n\n    "]))),v=r(7),m=r.n(v),O=r(15),w=r(16);var y,S,F,k=function(x){var o=x.val,r=x.chooseSquare;return Object(l.jsx)("div",{val:o,className:"Square",onClick:r})},q=r(8),I=r.n(q);var L=function(){var x=Object(n.useState)([".",".",".",".",".",".",".",".","."]),o=Object(w.a)(x,2),r=o[0],e=o[1],t=function(x){for(var o=!1,t=[],n=0;n<r.length;n++)n===x&&"."===r[n]?(t.push("x"),o=!0,document.getElementsByClassName("Square")[n].classList.add("X")):t.push(r[n]);e(t),o&&(i(t),o=!1)},i=function(){var x=Object(O.a)(m.a.mark((function x(o){var r,t,n,i;return m.a.wrap((function(x){for(;;)switch(x.prev=x.next){case 0:for(r=o[0]+o[1]+o[2]+o[3]+o[4]+o[5]+o[6]+o[7]+o[8],t=I.a.move(r),n=0;n<t.length;n++)"o"===t[n]&&document.getElementsByClassName("Square")[n].classList.add("O");return i=[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]],e(i),x.next=7,new Promise((function(x){return setTimeout(x,100)}));case 7:u(t);case 8:case"end":return x.stop()}}),x)})));return function(o){return x.apply(this,arguments)}}(),u=function(x){I.a.hasWon(x)?alert("The AI Is Victourious Once More!"):f(x)&&alert("You Have Tied, An Impressive Feat It Is Not to Be Defeated.")},f=function(x){for(var o=0;o<x.length;o++)if("."===x[o])return!1;return!0};return Object(l.jsxs)(B,{children:[Object(l.jsxs)(N,{children:[Object(l.jsx)(k,{val:r[0],chooseSquare:function(){t(0)}}),Object(l.jsx)(k,{val:r[1],chooseSquare:function(){t(1)}}),Object(l.jsx)(k,{val:r[2],chooseSquare:function(){t(2)}}),Object(l.jsx)(k,{val:r[3],chooseSquare:function(){t(3)}}),Object(l.jsx)(k,{val:r[4],chooseSquare:function(){t(4)}}),Object(l.jsx)(k,{val:r[5],chooseSquare:function(){t(5)}}),Object(l.jsx)(k,{val:r[6],chooseSquare:function(){t(6)}}),Object(l.jsx)(k,{val:r[7],chooseSquare:function(){t(7)}}),Object(l.jsx)(k,{val:r[8],chooseSquare:function(){t(8)}})]}),Object(l.jsx)(C,{type:"button",onClick:function(){e([".",".",".",".",".",".",".",".","."]);for(var x=0;x<r.length;x++)document.getElementsByClassName("Square")[x].classList.remove("O"),document.getElementsByClassName("Square")[x].classList.remove("X")},children:"Reset"})]})},B=c.a.div(y||(y=Object(a.a)(["\n    \n        background: #555555;\n        min-height:80vh;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        flex-direction: column;\n\n    "]))),N=c.a.div(S||(S=Object(a.a)(["\n        \n        height:60vh;\n        width:60vh;\n        background:#FFF;\n        border: 5px solid #000;\n        display:grid;\n        grid-template-columns: auto auto auto;\n        grid-template rows: auto auto auto;\n        border-radius:10px;\n        margin: 10px;\n\n        @media(max-width: 800px){\n         \n            height:50vh;\n            width:50vh;\n\n        }\n\n        @media(max-width: 700px){\n         \n            height:40vh;\n            width:40vh;\n\n        }\n\n        @media(max-width: 600px){\n         \n            height:30vh;\n            width:30vh;\n\n        }\n\n    "]))),C=c.a.button(F||(F=Object(a.a)(["\n    \n        background: green;\n        color: #FFF;\n        margin-top: 20px;\n        width:200px;\n        height: 100px;\n        border: none;\n        border-radius: 200px;\n        font-size: 32px;\n        cursor: pointer;\n    \n        &:focus{\n            outline:none;\n            color: #000;\n            opacity:.7;\n        }\n\n        &:hover{\n\n            color: #000;\n            opacity:.7;\n        \n        }\n\n    "])));var M=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(h,{}),Object(l.jsx)(L,{}),Object(l.jsx)(j,{})]})};f.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(M,{})}),document.getElementById("root"))},8:function(x,o){function r(x){var o=x;return 9!==o.length||"."!==o[0]&&"x"!==o[0]&&"o"!==o[0]||"."!==o[1]&&"x"!==o[1]&&"o"!==o[1]||"."!==o[2]&&"x"!==o[2]&&"o"!==o[2]||"."!==o[3]&&"x"!==o[3]&&"o"!==o[3]||"."!==o[4]&&"x"!==o[4]&&"o"!==o[4]||"."!==o[5]&&"x"!==o[5]&&"o"!==o[5]||"."!==o[6]&&"x"!==o[6]&&"o"!==o[6]||"."!==o[7]&&"x"!==o[7]&&"o"!==o[7]||"."!==o[8]&&"x"!==o[8]&&"o"!==o[8]}String.prototype.replaceAt=function(x,o){return this.substr(0,x)+o+this.substr(x+o.length)},x.exports={hasWon:function(x){var o=x;if(r(o))throw"Invalid Input2";return o[0]===o[1]&&o[0]===o[2]&&"."!==o[0]||o[3]===o[4]&&o[3]===o[5]&&"."!==o[3]||o[6]===o[7]&&o[6]===o[8]&&"."!==o[6]||o[0]===o[3]&&o[0]===o[6]&&"."!==o[0]||o[1]===o[4]&&o[1]===o[7]&&"."!==o[1]||o[2]===o[5]&&o[2]===o[8]&&"."!==o[2]||o[0]===o[4]&&o[0]===o[8]&&"."!==o[0]||o[2]===o[4]&&o[2]===o[6]&&"."!==o[2]},move:function(x){var o=x;if(r(o))throw"Illegal Argument";for(var e=0,t=0;t<o.length;t++)"."===o[t]&&e++;return 8===e?function(x){var o=x;return"....x...."===o?"o...x....":o.replaceAt(4,"o")}(o):6===e?function(x){var o=x;if("ox..x...."===o)return"ox..x..o.";if("o.x.x...."===o)return"o.x.x.o..";if("o..xx...."===o)return"o..xxo...";if("o...xx..."===o)return"o..oxx...";if("o...x.x.."===o)return"o.o.x.x..";if("o...x..x."===o)return"oo..x..x.";if("o...x...x"===o)return"o...x.o.x";if("xx..o...."===o)return"xxo.o....";if("x.x.o...."===o)return"xox.o....";if("x..xo...."===o)return"x..xo.o..";if("x...ox..."===o)return"x.o.ox...";if("x...o.x.."===o)return"x..oo.x..";if("x...o..x."===o)return"x...o.ox.";if("x...o...x"===o)return"x..oo...x";if(".xx.o...."===o)return"oxx.o....";if(".x.xo...."===o)return"ox.xo....";if(".x..ox..."===o)return".xo.ox...";if(".x..o.x.."===o)return"ox..o.x..";if(".x..o..x."===o)return"ox..o..x.";if(".x..o...x"===o)return".xo.o...x";if("..xxo...."===o)return"o.xxo....";if("..x.ox..."===o)return"..x.ox..o";if("..x.o.x.."===o)return".ox.o.x..";if("..x.o..x."===o)return"..x.o..xo";if("..x.o...x"===o)return"..x.oo..x";if("...xox..."===o)return"...xoxo..";if("...xo.x.."===o)return"o..xo.x..";if("...xo..x."===o)return"...xo.ox.";if("...xo...x"===o)return"...xo.o.x";if("....oxx.."===o)return"....oxx.o";if("....ox.x."===o)return"....ox.xo";if("....ox..x"===o)return"..o.ox..x";if("....o.xx."===o)return"....o.xxo";if("....o.x.x"===o)return"....o.xox";if("....o..xx"===o)return"....o.oxx"}(o):4===e?function(x){var o=x;if("oxx.x..o."===o)return"oxx.x.oo.";if("ox.xx..o."===o)return"ox.xxo.o.";if("ox..xx.o."===o)return"ox.oxx.o.";if("ox..x.xo."===o)return"oxo.x.xo.";if("ox..x..ox"===o)return"ox..xo.ox";if("oxx.x.o.."===o||"o.x.xxo.."===o||"o.x.x.ox."===o||"o.x.x.o.x"===o)return o.replaceAt(3,"o");if("o.xxx.o.."===o)return"o.xxxoo..";if("ox.xxo..."===o)return"ox.xxo.o.";if("o.xxxo..."===o)return"o.xxxoo..";if("o..xxox.."===o)return"o.oxxox..";if("o..xxo.x."===o)return"oo.xxo.x.";if("o..xxo..x"===o)return"o..xxoo.x";if("oxo.x.x.."===o)return"oxo.x.xo.";if("o.oxx.x.."===o||"o.o.xxx.."===o||"o.o.x.xx."===o||"o.o.x.x.x"===o)return o.replaceAt(1,"o");if("o..oxxx.."===o)return"o.ooxxx..";if("ox.oxx..."===o||"o.xoxx..."===o||"o..oxx.x."===o||"o..oxx..x"===o)return o.replaceAt(5,"o");if("oox.x..x."===o)return"oox.x.ox.";if("oo.xx..x."===o||"oo..xx.x."===o||"oo..x.xx."===o||"oo..x..xx"===o)return o.replaceAt(2,"o");if("o..xx.o.x"===o)return"o..xxoo.x";if("ox..x.o.x"===o||"o.x.x.o.x"===o||"o...xxo.x"===o||"o...x.oxx"===o)return o.replaceAt(4,"o");if("xxo.o.x.."===o)return"xxooo.x..";if("xxoxo...."===o||"xxo.ox..."===o||"xxo.o..x."===o||"xxo.o...x"===o)return o.replaceAt(6,"o");if("xox.o..x."===o)return"xoxoo..x.";if("xoxxo...."===o||"xox.ox..."===o||"xox.o.x.."===o||"xox.o...x"===o)return o.replaceAt(7,"o");if("x.xxo.o.."===o)return"xoxxo.o..";if("xx.xo.o.."===o||"x..xoxo.."===o||"x..xo.ox."===o||"x..xo.o.x"===o)return o.replaceAt(2,"o");if("x.o.oxx.."===o)return"x.oooxx..";if("xxo.ox..."===o||"x.oxox..."===o||"x.o.ox.x."===o||"x.o.ox..x"===o)return o.replaceAt(6,"o");if("x..ooxx.."===o)return"xo.ooxx..";if("xx.oo.x.."===o||"x.xoo.x.."===o||"x..oo.xx."===o||"x..oo.x.x"===o)return o.replaceAt(5,"o");if("x.x.o.ox."===o)return"xox.o.ox.";if("xx..o.ox."===o||"x..xo.ox."===o||"x...oxox."===o||"x...o.oxx"===o)return o.replaceAt(2,"o");if("x..oox..x"===o)return"x.ooox..x";if("xx.oo...x"===o||"x.xoo...x"===o||"x..oo.x.x"===o||"x..oo..xx"===o)return o.replaceAt(5,"o");if("oxx.o...x"===o)return"oxx.oo..x";if("oxxxo...."===o||"oxx.ox..."===o||"oxx.o.x.."===o||"oxx.o..x."===o)return o.replaceAt(8,"o");if("ox.xo...x"===o)return"oxoxo...x";if("oxxxo...."===o||"ox.xox..."===o||"ox.xo.x.."===o||"ox.xo..x."===o)return o.replaceAt(8,"o");if(".xo.oxx.."===o)return".xo.oxx.o";if("xxo.ox..."===o||".xoxox..."===o||".xo.ox.x."===o||".xo.ox..x"===o)return o.replaceAt(6,"o");if("ox..o.x.x"===o)return"ox..o.xox";if("oxx.o.x.."===o||"ox.xo.x.."===o||"ox..oxx.."===o||"ox..o.xx."===o)return o.replaceAt(8,"o");if("ox..o..xx"===o)return"ox..o.oxx";if("oxx.o..x."===o||"ox.xo..x."===o||"ox..ox.x."===o||"ox..o.xx."===o)return o.replaceAt(8,"o");if(".xo.o.x.x"===o)return".xo.o.xox";if("xxo.o...x"===o||".xoxo...x"===o||".xo.ox..x"===o||".xo.o..xx"===o)return o.replaceAt(6,"o");if("o.xxo...x"===o)return"o.xxoo..x";if("oxxxo...."===o||"o.xxox..."===o||"o.xxo.x.."===o||"o.xxo..x."===o)return o.replaceAt(8,"o");if("x.x.ox..o"===o)return"xox.ox..o";if(".xx.ox..o"===o||"..xxox..o"===o||"..x.oxx.o"===o||"..x.ox.xo"===o)return o.replaceAt(0,"o");if(".ox.o.xx."===o)return".ox.o.xxo";if("xox.o.x.."===o||".oxxo.x.."===o||".ox.oxx.."===o||".ox.o.x.x"===o)return o.replaceAt(7,"o");if("x.x.o..xo"===o)return"xox.o..xo";if(".xx.o..xo"===o||"..xxo..xo"===o||"..x.ox.xo"===o||"..x.o.xxo"===o)return o.replaceAt(0,"o");if("..xxoo..x"===o)return".oxxoo..x";if("x.x.oo..x"===o||".xx.oo..x"===o||"..x.oox.x"===o||"..x.oo.xx"===o)return o.replaceAt(3,"o");if("..xxoxo.."===o)return"..xxoxo.o";if("x..xoxo.."===o||".x.xoxo.."===o||"...xoxox."===o||"...xoxo.x"===o)return o.replaceAt(2,"o");if("o..xo.x.x"===o)return"o..xo.xox";if("ox.xo.x.."===o||"o.xxo.x.."===o||"o..xoxx.."===o||"o..xo.xx."===o)return o.replaceAt(8,"o");if("..xxo.ox."===o)return"..xxo.oxo";if("x..xo.ox."===o||".x.xo.ox."===o||"...xoxox."===o||"...xo.oxx"===o)return o.replaceAt(2,"o");if("..xxo.o.x"===o)return"..xxooo.x";if("x..xo.o.x"===o||".x.xo.o.x"===o||"...xoxo.x"===o||"...xo.oxx"===o)return o.replaceAt(2,"o");if("x...oxx.o"===o)return"x..ooxx.o";if(".x..oxx.o"===o||"..x.oxx.o"===o||"...xoxx.o"===o||"....oxxxo"===o)return o.replaceAt(0,"o");if("x...oxx.o"===o)return"x.o.ox.xo";if(".x..ox.xo"===o||"..x.ox.xo"===o||"...xox.xo"===o||"....oxxxo"===o)return o.replaceAt(0,"o");if("..o.oxx.x"===o)return"..o.oxxox";if("x.o.ox..x"===o||".xo.ox..x"===o||"..oxox..x"===o||"..o.ox.xx"===o)return o.replaceAt(6,"o");if("x...o.xxo"===o)return"x..oo.xxo";if(".x..o.xxo"===o||"..x.o.xxo"===o||"...xo.xxo"===o||"....oxxxo"===o)return o.replaceAt(0,"o");if(".x..o.xox"===o)return".x.oo.xox";if("x...o.xox"===o||"..x.o.xox"===o||"...xo.xox"===o||"....oxxox"===o)return o.replaceAt(1,"o");if("..x.o.oxx"===o)return"..x.oooxx";if("x...o.oxx"===o||".x..o.oxx"===o||"...xo.oxx"===o||"....oxoxx"===o)return o.replaceAt(2,"o")}(o):2===e?function(x){var o=x;if("oxooxxx.."===o)return"oxooxxxo.";if("o.ooxxx."===o||"o.ooxxx.x"===o)return o.replaceAt(1,"o");if("oxxxx.oo."===o)return"oxxxx.ooo";if("oxx.xxoo."===o)return"oxxoxxoo.";if("oxx.x.oox"===o)return"oxxox.oox";if("oxxxxo.o."===o)return"oxxxxooo.";if("ox.xxoxo."===o)return"oxoxxoxo.";if("ox.xxo.ox"===o)return"oxoxxo.ox";if("ox.oxxxo."===o)return"oxooxxxo.";if("oxooxx.o."===o||"ox.oxx.ox"===o)return o.replaceAt(6,"o");if("oxoxx.xo."===o)return"oxoxxoxo.";if("oxo.xxxo."===o)return"oxooxxxo.";if("oxo.x.xox"===o)return"oxoox.xox";if("oxx.xo.ox"===o)return"oxx.xooox";if("ox..xo.ox"===o)return"oxoxxo.ox";if("ox..xoxox"===o)return"oxo.xoxox";if("o.xxxoo.."===o)return"oxxxxooo.";if("o.xxxoox."===o)return"ooxxxoox.";if("o.xxxoo.x"===o)return"o.xxxooox";if("oxxxxo.o."===o)return"oxxxxooo.";if("ox.xxoxo."===o)return"oxoxxoxo.";if("ox.xxo.ox"===o)return"oxoxxo.ox";if("oxxxxoo.."===o)return"oxxxxooo.";if("o.xxxoox."===o)return"ooxxxoox.";if("o.xxxoo.x"===o)return"ooxxxoo.x";if("oxoxxox.."===o)return"oxoxxox.o";if("o.oxxoxx."===o||"o.oxxox.x"===o)return o.replaceAt(1,"o");if("ooxxxo.x."===o)return"ooxxxoox.";if("oo.xxoxx."===o)return"oooxxoxx.";if("oo.xxo.xx"===o)return"oooxxo.xx";if("ox.xxoo.x"===o)return"ox.xxooox";if("o.xxxoo.x"===o||"o..xxooxx"===o)return o.replaceAt(1,"o");if("oxoxx.xo"===o)return"oxoxxoxo.";if("oxo.xxxo."===o||"oxo.x.xox"===o)return o.replaceAt(3,"o");if("ooxxx.ox."===o)return"ooxxxoox.";if("oox.xxox."===o||"oox.x.oxx"===o)return o.replaceAt(3,"o");if("ox.xxoo.x"===o)return"ox.xxooox";if("o.xxxoo.x"===o||"o..xxooxx"===o)return o.replaceAt(1,"o");if("xxoooxx.."===o)return"xxoooxxo.";if("xxooo.xx."===o||"xxooo.x.x"===o)return o.replaceAt(5,"o");if("xoxoox.x."===o)return"xoxoox.xo";if("xoxoo.xx."===o||"xoxoo..xx"===o)return o.replaceAt(5,"o");if("xoxxo.ox."===o)return"xoxxooox.";if("xoxxoxo.."===o||"xoxxo.o.x"===o)return o.replaceAt(7,"o");if("x.oooxxx."===o)return"xooooxxx.";if("xxoooxx.."===o||"x.oooxx.x"===o)return o.replaceAt(7,"o");if("xo.ooxxx."===o)return"xo.ooxxxo";if("xoxooxx.."===o||"xo.ooxx.x"===o)return o.replaceAt(7,"o");if("xox.oxox."===o)return"xox.oxoxo";if("xoxxo.ox."===o||"xox.o.oxx"===o)return o.replaceAt(5,"o");if("x.ooox.xx"===o)return"x.oooxoxx";if("xxooox..x"===o||"x.oooxx.x"===o)return o.replaceAt(7,"o");if("oxxxoo..x"===o)return"oxxxooo.x";if("oxx.oox.x"===o||"oxx.oo.xx"===o)return o.replaceAt(3,"o");if("oxoxo.x.x"===o)return"oxoxo.xox";if("oxoxox..x"===o||"oxoxo..xx"===o)return o.replaceAt(6,"o");if("xxo.oxx.o"===o)return"xxoooxx.o";if(".xoxoxx.o"===o||".xo.oxxxo"===o)return o.replaceAt(0,"o");if("ox..oxxox"===o)return"oxo.oxxox";if("oxx.o.xox"===o||"ox.xo.xox"===o)return o.replaceAt(5,"o");if("ox.xo.oxx"===o)return"oxoxo.oxx";if("oxx.o.oxx"===o||"ox..oxoxx"===o)return o.replaceAt(3,"o");if(".xoxo.xox"===o)return"oxoxo.xox";if("xxo.o.xox"===o||".xo.oxxox"===o)return o.replaceAt(3,"o");if("o.xxoo.xx"===o)return"o.xxooooxx";if("oxxxoo..x"===o||"o.xxoox.x"===o)return o.replaceAt(7,"o");if("xox.ox.xo"===o)return"xox.oxoxo";if("xoxxox..o"===o||"xox.oxx.o"===o)return o.replaceAt(7,"o");if("xox.o.xxo"===o)return"xoxoo.xxo";if(".oxxo.xxo"===o||".ox.oxxxo"===o)return o.replaceAt(0,"o");if("xoxxo..xo"===o)return"xoxxo.oxo";if("xox.ox.xo"===o||"xox.o.xxo"===o)return o.replaceAt(3,"o");if(".oxxoo.xx"===o)return".oxxoooxx";if("xoxxoo..x"===o||".oxxoox.x"===o)return o.replaceAt(7,"o");if("x.xxoxo.o"===o)return"x.xxoxooo";if(".xxxoxo.o"===o||"..xxoxoxo"===o)return o.replaceAt(0,"o");if("ox.xo.xox"===o)return"oxoxo.xox";if("o.xxo.xox"===o||"o..xoxxox"===o)return o.replaceAt(1,"o");if("x.xxo.oxo"===o)return"xoxxo.oxo";if(".xxxo.oxo"===o||"..xxoxoxo"===o)return o.replaceAt(0,"o");if(".xxxooo.x"===o)return"oxxxooo.x";if("x.xxooo.x"===o||"..xxoooxx"===o)return o.replaceAt(1,"o");if("xx.ooxx.o"===o)return"xxoooxx.o";if("x.xooxx.o"===o||"x..ooxxxo"===o)return o.replaceAt(1,"o");if("x.o.oxxxo"===o)return"x.oooxxxo";if("xxo.ox.xo"===o||"x.oxox.xo"===o)return o.replaceAt(6,"o");if(".xo.oxxox"===o)return"oxo.oxxox";if("x.o.oxxox"===o||"..oxoxxox"===o)return o.replaceAt(1,"o");if("x..ooxxxo"===o)return"x.oooxxxo";if("xx.oo.xxo"===o||"x.xoo.xxo"===o)return o.replaceAt(5,"o");if(".x.ooxxox"===o)return".xoooxxox";if("xx.oo.xox"===o||".xxoo.xox"===o)return o.replaceAt(5,"o");if("..xxoooxx"===o)return"o.xxoooxx";if("x.x.oooxx"===o||".xx.oooxx"===o)return o.replaceAt(3,"o")}(o):0===e?o:void 0}}}},[[26,1,2]]]);
//# sourceMappingURL=main.3399938e.chunk.js.map