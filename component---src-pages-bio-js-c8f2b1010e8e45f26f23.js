webpackJsonp([0x954c759a7f01],{33:function(e,t,n){e.exports={default:n(38),__esModule:!0}},34:function(e,t,n){e.exports={default:n(39),__esModule:!0}},36:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(33),i=a(o);t.default=i.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}},37:function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}},38:function(e,t,n){n(44),e.exports=n(9).Object.assign},39:function(e,t,n){n(45),e.exports=n(9).Object.keys},41:function(e,t,n){"use strict";var a=n(17),o=n(59),i=n(42),r=n(25),l=n(74),s=Object.assign;e.exports=!s||n(15)(function(){var e={},t={},n=Symbol(),a="abcdefghijklmnopqrst";return e[n]=7,a.split("").forEach(function(e){t[e]=e}),7!=s({},e)[n]||Object.keys(s({},t)).join("")!=a})?function(e,t){for(var n=r(e),s=arguments.length,u=1,c=o.f,f=i.f;s>u;)for(var d,p=l(arguments[u++]),h=c?a(p).concat(c(p)):a(p),m=h.length,y=0;m>y;)f.call(p,d=h[y++])&&(n[d]=p[d]);return n}:s},43:function(e,t,n){var a=n(14),o=n(9),i=n(15);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],r={};r[e]=t(n),a(a.S+a.F*i(function(){n(1)}),"Object",r)}},44:function(e,t,n){var a=n(14);a(a.S+a.F,"Object",{assign:n(41)})},45:function(e,t,n){var a=n(25),o=n(17);n(43)("keys",function(){return function(e){return o(a(e))}})},46:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return i(x+e)}function i(e){return e.replace(/^\/\//g,"/")}function r(e,t){var n=(0,k.createLocation)(e,null,null,t.location);return n.pathname=o(n.pathname),n}t.__esModule=!0,t.navigateTo=void 0;var l=n(36),s=a(l),u=n(34),c=a(u),f=n(37),d=a(f),p=n(35),h=a(p),m=n(54),y=a(m),g=n(53),v=a(g);t.withPrefix=o;var b=n(2),w=a(b),I=n(50),_=n(7),j=a(_),k=n(86),x="/",O={activeClassName:j.default.string,activeStyle:j.default.object,exact:j.default.bool,strict:j.default.bool,isActive:j.default.func,location:j.default.object},E=function(e,t){var n=new window.IntersectionObserver(function(a){a.forEach(function(a){e===a.target&&(a.isIntersecting||a.intersectionRatio>0)&&(n.unobserve(e),n.disconnect(),t())})});n.observe(e)},S=function(e){function t(n,a){(0,h.default)(this,t);var o=(0,y.default)(this,e.call(this)),i=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(i=!0);var l=a.router.history,s=r(n.to,l);return o.state={path:(0,k.createPath)(s),to:s,IOSupported:i},o.handleRef=o.handleRef.bind(o),o}return(0,v.default)(t,e),t.prototype.componentWillReceiveProps=function(e){if(this.props.to!==e.to){var t=r(e.to,history);this.setState({path:(0,k.createPath)(t),to:t}),this.state.IOSupported||___loader.enqueue(this.state.path)}},t.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.path)},t.prototype.handleRef=function(e){var t=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&E(e,function(){___loader.enqueue(t.state.path)})},t.prototype.render=function(){var e=this,t=this.props,n=t.onClick,a=(0,d.default)(t,["onClick"]),o=void 0;return o=(0,c.default)(O).some(function(t){return e.props[t]})?I.NavLink:I.Link,w.default.createElement(o,(0,s.default)({onClick:function(t){if(n&&n(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var a=e.state.path;if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a===window.location.pathname){var o=e.state.path.split("#").slice(1).join("#"),i=document.getElementById(o);return null!==i?(i.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}t.preventDefault(),window.___navigateTo(e.state.path)}return!0}},a,{to:this.state.to,innerRef:this.handleRef}))},t}(w.default.Component);S.propTypes=(0,s.default)({},O,{innerRef:j.default.func,onClick:j.default.func,to:j.default.oneOfType([j.default.string,j.default.object]).isRequired}),S.contextTypes={router:j.default.object},t.default=S;t.navigateTo=function(e){window.___navigateTo(e)}},327:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),i=a(o),r=n(79),l=(a(r),n(52)),s=a(l),u=(n(101),n(46));a(u);t.default=function(e){var t=e.data;return console.log(t),i.default.createElement(s.default,{x:{start:40,end:0,stiffness:70,damping:20}},i.default.createElement("div",null,i.default.createElement("h1",null," Bio "),i.default.createElement("p",null,"Based in Singapore, I am major in Information Systems Technology and Design in Singapore University of Technology and Design (SUTD)."),i.default.createElement("p",null,"I am an independent learner who is highly motivated to learn and try out new technologies."),i.default.createElement("h3",null," Technical Background "),i.default.createElement("p",null,"I started programming when I entered into university. Although it has only been two years, I have been exposed to many different fields such as data science, internet-of-things, app development, and more. I am always curious about the possibilities with technology. As I approach into my final year of studies at SUTD, I am focusing more on data science and web development."),i.default.createElement("h3",null," Musical Soul "),i.default.createElement("p",null,"I started learning the piano when I was around 8 years old. I continued learning the piano, and joined the chinese orchestra in my secondary school. I continued playing in the chinese orchestra in junior college, exposing myself to learn different instruments such as the yangqin, suona, sheng (pipes) and percussion instruments. In my own free time, I play the acoustic guitar as well."),i.default.createElement("h3",null," Sports "),i.default.createElement("p",null,"I enjoy playing badminton, and joined the badminton club in SUTD. I often aim to play badminton at least once a week as my way to keep myself fit and healthy."),i.default.createElement("h3",null," Gamer "),i.default.createElement("p",null,"I love playing games, as they actively challenge me to think and strategize."),i.default.createElement("p",null,"In games like Dota, I have to be able to maintain my composure and think of the best course of action under very tight situations, while keeping an eye on other elements of the game such as the enemy positions."),i.default.createElement("p",null,'In games like Hearthstone, I often have to change my perspective of thinking from "what can I do now" to "what can my opponent possibly do in the future". Games like these not only greatly entertain me, but keep my mind fit.')))},e.exports=t.default},79:function(e,t){e.exports={container:"src-pages----index-module---container---12Nu0",title:"src-pages----index-module---title---3IDB3",aboutContainer:"src-pages----index-module---aboutContainer---1dS-_",snList:"src-pages----index-module---snList---1fzH8",snIcon:"src-pages----index-module---snIcon---2S_Bb"}}});
//# sourceMappingURL=component---src-pages-bio-js-c8f2b1010e8e45f26f23.js.map