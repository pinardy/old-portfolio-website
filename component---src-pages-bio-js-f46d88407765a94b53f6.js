webpackJsonp([0x954c759a7f01],{34:function(e,t,n){e.exports={default:n(39),__esModule:!0}},35:function(e,t,n){e.exports={default:n(40),__esModule:!0}},37:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(34),i=a(o);t.default=i.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}},38:function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}},39:function(e,t,n){n(45),e.exports=n(9).Object.assign},40:function(e,t,n){n(46),e.exports=n(9).Object.keys},42:function(e,t,n){"use strict";var a=n(17),o=n(58),i=n(43),r=n(25),l=n(69),u=Object.assign;e.exports=!u||n(15)(function(){var e={},t={},n=Symbol(),a="abcdefghijklmnopqrst";return e[n]=7,a.split("").forEach(function(e){t[e]=e}),7!=u({},e)[n]||Object.keys(u({},t)).join("")!=a})?function(e,t){for(var n=r(e),u=arguments.length,s=1,c=o.f,f=i.f;u>s;)for(var d,p=l(arguments[s++]),h=c?a(p).concat(c(p)):a(p),m=h.length,y=0;m>y;)f.call(p,d=h[y++])&&(n[d]=p[d]);return n}:u},44:function(e,t,n){var a=n(14),o=n(9),i=n(15);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],r={};r[e]=t(n),a(a.S+a.F*i(function(){n(1)}),"Object",r)}},45:function(e,t,n){var a=n(14);a(a.S+a.F,"Object",{assign:n(42)})},46:function(e,t,n){var a=n(25),o=n(17);n(44)("keys",function(){return function(e){return o(a(e))}})},47:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return i(O+e)}function i(e){return e.replace(/^\/\//g,"/")}function r(e,t){var n=(0,k.createLocation)(e,null,null,t.location);return n.pathname=o(n.pathname),n}t.__esModule=!0,t.navigateTo=void 0;var l=n(37),u=a(l),s=n(35),c=a(s),f=n(38),d=a(f),p=n(36),h=a(p),m=n(53),y=a(m),g=n(52),v=a(g);t.withPrefix=o;var b=n(2),w=a(b),_=n(50),I=n(6),j=a(I),k=n(83),O="/",E={activeClassName:j.default.string,activeStyle:j.default.object,exact:j.default.bool,strict:j.default.bool,isActive:j.default.func,location:j.default.object},S=function(e,t){var n=new window.IntersectionObserver(function(a){a.forEach(function(a){e===a.target&&(a.isIntersecting||a.intersectionRatio>0)&&(n.unobserve(e),n.disconnect(),t())})});n.observe(e)},x=function(e){function t(n,a){(0,h.default)(this,t);var o=(0,y.default)(this,e.call(this)),i=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(i=!0);var l=a.router.history,u=r(n.to,l);return o.state={path:(0,k.createPath)(u),to:u,IOSupported:i},o.handleRef=o.handleRef.bind(o),o}return(0,v.default)(t,e),t.prototype.componentWillReceiveProps=function(e){if(this.props.to!==e.to){var t=r(e.to,history);this.setState({path:(0,k.createPath)(t),to:t}),this.state.IOSupported||___loader.enqueue(this.state.path)}},t.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.path)},t.prototype.handleRef=function(e){var t=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&S(e,function(){___loader.enqueue(t.state.path)})},t.prototype.render=function(){var e=this,t=this.props,n=t.onClick,a=(0,d.default)(t,["onClick"]),o=void 0;return o=(0,c.default)(E).some(function(t){return e.props[t]})?_.NavLink:_.Link,w.default.createElement(o,(0,u.default)({onClick:function(t){if(n&&n(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var a=e.state.path;if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a===window.location.pathname){var o=e.state.path.split("#").slice(1).join("#"),i=document.getElementById(o);return null!==i?(i.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}t.preventDefault(),window.___navigateTo(e.state.path)}return!0}},a,{to:this.state.to,innerRef:this.handleRef}))},t}(w.default.Component);x.propTypes=(0,u.default)({},E,{innerRef:j.default.func,onClick:j.default.func,to:j.default.oneOfType([j.default.string,j.default.object]).isRequired}),x.contextTypes={router:j.default.object},t.default=x;t.navigateTo=function(e){window.___navigateTo(e)}},287:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),i=a(o),r=n(113),l=(a(r),n(51)),u=a(l),s=(n(67),n(47));a(s);t.default=function(e){var t=e.data;return console.log(t),i.default.createElement(u.default,{x:{start:40,end:0,stiffness:70,damping:20}},i.default.createElement("div",null,i.default.createElement("h1",null," Bio "),i.default.createElement("p",null,"Based in Singapore, I am major in Information Systems Technology and Design in Singapore University of Technology and Design (SUTD)."),i.default.createElement("p",null,"I am an independent learner who is highly motivated to learn and try out new technologies."),i.default.createElement("h3",null," Technical Background "),i.default.createElement("p",null,"I started programming when I entered into university. Although it has only been two years, I have been exposed to many different fields such as web development, data science, internet-of-things and more. I am always curious about the possibilities with technology."),i.default.createElement("h3",null," Musical Soul "),i.default.createElement("p",null,"I started learning the piano when I was around 8 years old. I continued learning the piano, and joined the chinese orchestra in my secondary school. I continued playing in the chinese orchestra in junior college, exposing myself to learn different instruments such as the yangqin, suona, sheng (pipes) and percussion instruments. In my own free time, I play the acoustic guitar as well."),i.default.createElement("h3",null," Sports "),i.default.createElement("p",null,"I enjoy playing badminton, and joined the badminton club in SUTD. I often aim to play badminton at least once a week as my way to keep myself fit and healthy."),i.default.createElement("h3",null," Gamer "),i.default.createElement("p",null,"I love playing games, as they actively challenge me to think and strategize."),i.default.createElement("p",null,"In games like Dota, I have to be able to maintain my composure and think of the best course of action under very tight situations, while keeping an eye on other elements of the game such as the enemy positions."),i.default.createElement("p",null,'In games like Hearthstone, I often have to change my perspective of thinking from "what can I do now" to "what can my opponent possibly do in the future". Games like these not only greatly entertain me, but keep my mind fit.')))},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-bio-js-f46d88407765a94b53f6.js.map