webpackJsonp([0x67ef26645b2a,60335399758886],{177:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Pinardy Yang"}}},layoutContext:{}}},322:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(2),i=o(r),l=n(326),u=o(l),s=n(177),c=o(s);t.default=function(e){return i.default.createElement(u.default,a({},e,c.default))},e.exports=t.default},33:function(e,t,n){e.exports={default:n(38),__esModule:!0}},34:function(e,t,n){e.exports={default:n(39),__esModule:!0}},36:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(33),r=o(a);t.default=r.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}},37:function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}},38:function(e,t,n){n(44),e.exports=n(9).Object.assign},39:function(e,t,n){n(45),e.exports=n(9).Object.keys},41:function(e,t,n){"use strict";var o=n(17),a=n(59),r=n(42),i=n(25),l=n(74),u=Object.assign;e.exports=!u||n(15)(function(){var e={},t={},n=Symbol(),o="abcdefghijklmnopqrst";return e[n]=7,o.split("").forEach(function(e){t[e]=e}),7!=u({},e)[n]||Object.keys(u({},t)).join("")!=o})?function(e,t){for(var n=i(e),u=arguments.length,s=1,c=a.f,d=r.f;u>s;)for(var f,p=l(arguments[s++]),m=c?o(p).concat(c(p)):o(p),v=m.length,y=0;v>y;)d.call(p,f=m[y++])&&(n[f]=p[f]);return n}:u},43:function(e,t,n){var o=n(14),a=n(9),r=n(15);e.exports=function(e,t){var n=(a.Object||{})[e]||Object[e],i={};i[e]=t(n),o(o.S+o.F*r(function(){n(1)}),"Object",i)}},44:function(e,t,n){var o=n(14);o(o.S+o.F,"Object",{assign:n(41)})},45:function(e,t,n){var o=n(25),a=n(17);n(43)("keys",function(){return function(e){return a(o(e))}})},46:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return r(w+e)}function r(e){return e.replace(/^\/\//g,"/")}function i(e,t){var n=(0,O.createLocation)(e,null,null,t.location);return n.pathname=a(n.pathname),n}t.__esModule=!0,t.navigateTo=void 0;var l=n(36),u=o(l),s=n(34),c=o(s),d=n(37),f=o(d),p=n(35),m=o(p),v=n(54),y=o(v),h=n(53),g=o(h);t.withPrefix=a;var x=n(2),_=o(x),b=n(50),k=n(7),j=o(k),O=n(86),w="/",E={activeClassName:j.default.string,activeStyle:j.default.object,exact:j.default.bool,strict:j.default.bool,isActive:j.default.func,location:j.default.object},M=function(e,t){var n=new window.IntersectionObserver(function(o){o.forEach(function(o){e===o.target&&(o.isIntersecting||o.intersectionRatio>0)&&(n.unobserve(e),n.disconnect(),t())})});n.observe(e)},C=function(e){function t(n,o){(0,m.default)(this,t);var a=(0,y.default)(this,e.call(this)),r=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0);var l=o.router.history,u=i(n.to,l);return a.state={path:(0,O.createPath)(u),to:u,IOSupported:r},a.handleRef=a.handleRef.bind(a),a}return(0,g.default)(t,e),t.prototype.componentWillReceiveProps=function(e){if(this.props.to!==e.to){var t=i(e.to,history);this.setState({path:(0,O.createPath)(t),to:t}),this.state.IOSupported||___loader.enqueue(this.state.path)}},t.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.path)},t.prototype.handleRef=function(e){var t=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&M(e,function(){___loader.enqueue(t.state.path)})},t.prototype.render=function(){var e=this,t=this.props,n=t.onClick,o=(0,f.default)(t,["onClick"]),a=void 0;return a=(0,c.default)(E).some(function(t){return e.props[t]})?b.NavLink:b.Link,_.default.createElement(a,(0,u.default)({onClick:function(t){if(n&&n(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var o=e.state.path;if(o.split("#").length>1&&(o=o.split("#").slice(0,-1).join("")),o===window.location.pathname){var a=e.state.path.split("#").slice(1).join("#"),r=document.getElementById(a);return null!==r?(r.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}t.preventDefault(),window.___navigateTo(e.state.path)}return!0}},o,{to:this.state.to,innerRef:this.handleRef}))},t}(_.default.Component);C.propTypes=(0,u.default)({},E,{innerRef:j.default.func,onClick:j.default.func,to:j.default.oneOfType([j.default.string,j.default.object]).isRequired}),C.contextTypes={router:j.default.object},t.default=C;t.navigateTo=function(e){window.___navigateTo(e)}},737:function(e,t,n){e.exports=n.p+"static/chinese_name.89622c9c.jpg"},741:function(e,t,n){e.exports=n.p+"static/logo.40ad3ee9.png"},426:function(e,t,n){e.exports=n.p+"static/favicon.40ad3ee9.ico"},326:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var a=n(2),r=o(a),i=n(46),l=o(i),u=n(52),s=(o(u),n(418)),c=o(s),d=n(426),f=o(d),p=n(737),m=o(p),v=n(741),y=o(v),h=function(e){return r.default.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},r.default.createElement(l.default,{to:e.to},e.children))};t.default=function(e){var t=e.children,n=e.data;return r.default.createElement("div",{style:{margin:"0 auto",maxWidth:850,padding:"1.25rem 1rem"}},r.default.createElement("link",{rel:"shortcut icon",href:f.default}),r.default.createElement("header",{style:{marginBottom:"1.5rem"}},r.default.createElement("div",{style:{display:"inline"}},r.default.createElement("img",{className:c.default.flashLogo,src:y.default,alt:"logo"}),r.default.createElement("div",{className:c.default.navLogo},r.default.createElement("h3",{style:{display:"inline"}}," ",n.site.siteMetadata.title," ")),r.default.createElement("img",{className:c.default.flashLogo,src:m.default,alt:"chineseName"})),r.default.createElement("ul",{style:{listStyle:"none",float:"right"}},r.default.createElement(h,{to:"/"},"Home"),r.default.createElement(h,{to:"/bio/"},"Bio"),r.default.createElement(h,{to:"/projects/"},"Projects"),r.default.createElement(h,{to:"/blog/"},"Blog"),r.default.createElement(h,{to:"/cv/"},"C.V."))),t())};t.query="** extracted graphql fragment **"},418:function(e,t){e.exports={btn:"src-layouts----index-module---btn---1shGD",menuBtn:"src-layouts----index-module---menuBtn---2ahMn",menuIcon:"src-layouts----index-module---menuIcon---357Ly",navItem:"src-layouts----index-module---navItem---3_1Wi",navDevider:"src-layouts----index-module---navDevider---3q_re",logoLink:"src-layouts----index-module---logoLink---mz3j6",flashLogo:"src-layouts----index-module---flashLogo---2lUMM",navLogo:"src-layouts----index-module---navLogo---3212N",signBlackContainer:"src-layouts----index-module---signBlackContainer---3dtHq",signBlack:"src-layouts----index-module---signBlack---fh_w0",expandMenu:"src-layouts----index-module---expandMenu---3Zlh-",navContainer:"src-layouts----index-module---navContainer---1C29s",navLink:"src-layouts----index-module---navLink---3ietL",inactive:"src-layouts----index-module---inactive---37JAD",active:"src-layouts----index-module---active---1YWgN",fixedHeader:"src-layouts----index-module---fixedHeader---2iEgm",fixedNavBar:"src-layouts----index-module---fixedNavBar---QSzu3",stickyBackground:"src-layouts----index-module---stickyBackground---1F6hv",appear:"src-layouts----index-module---appear---3qPnl",body:"src-layouts----index-module---body---37-tv",footerContainer:"src-layouts----index-module---footerContainer---2m9dN",footerContent:"src-layouts----index-module---footerContent---2Oygb",layout:"src-layouts----index-module---layout---cC6Gq"}}});
//# sourceMappingURL=component---src-layouts-index-js-3db9f2caf11ddb514761.js.map