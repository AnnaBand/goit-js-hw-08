!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var i,o,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,f=setTimeout(w,t),s?b(e):u}function T(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function w(){var e=p();if(T(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function O(e){return f=void 0,m&&i?b(e):(i=o=void 0,u)}function S(){var e=p(),n=T(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(w,t),b(l)}return void 0===f&&(f=setTimeout(w,t)),u}return t=h(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(h(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},S.flush=function(){return void 0===f?u:O(p())},S}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};var j=document.querySelector(".feedback-form"),T="feedback-form-state",w=document.createElement("div");w.className="form-message",w.style.color="red",j.append(w);var O=[],S=JSON.parse(localStorage.getItem(T))||{email:"",message:""};j.elements.email.value=S.email,j.elements.message.value=S.message,j.addEventListener("input",e(t)((function(e){var t,n=e.target;S[(t=n).name]=t.value,localStorage.setItem(T,JSON.stringify(S))}),500)),j.addEventListener("submit",(function(e){e.preventDefault(),O=[],["email","message"].forEach((function(e){0===S[e].trim().length&&O.push("Please fill in the '".concat(e.charAt(0).toUpperCase()+e.slice(1),"' field!"))})),0===O.length?(console.log(S),localStorage.removeItem(T),j.reset(),w.innerHTML=""):w.innerHTML="<h4>Please correct the following errors before submitting:</h4>\n        <ul>\n            ".concat(O.map((function(e){return"<li>".concat(e,"</li>")})).join(""),"\n        </ul>")}))}();
//# sourceMappingURL=03-feedback.1b281959.js.map
