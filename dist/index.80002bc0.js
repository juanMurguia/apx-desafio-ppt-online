let e,t,n,i,r,s,o,a,l,h,c,u,d,p;var m,f,_,g,y,v,w,C=globalThis,b={},S={},I=C.parcelRequire9acc;null==I&&((I=function(e){if(e in b)return b[e].exports;if(e in S){var t=S[e];delete S[e];var n={id:e,exports:{}};return b[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){S[e]=t},C.parcelRequire9acc=I);var E=I.register;E("kpDdw",function(e,t){e.exports=new URL("piedrar.e0a05001.png",import.meta.url).toString()}),E("7dQ4O",function(e,t){e.exports=new URL("papelr.4375f7e5.png",import.meta.url).toString()}),E("63stw",function(e,t){e.exports=new URL("tijerasr.3156a6e4.png",import.meta.url).toString()}),E("9ekeg",function(e,t){e.exports=new URL("thisone.c74618e2.png",import.meta.url).toString()});class T extends HTMLElement{shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render();let e=document.createElement("style");e.innerHTML=`
      .button-container{
          display: flex;
          justify-content: center;
          align-items: center;
      }
      button{
          margin-top: 10px;
          font-size: 45px;
          width: 311px;
          height: 87px;
          background: #ededed;
          color: #5A5A5A;
          border: 0.2rem solid #fff;
          border-radius: 2rem;
      }
      @keyframes flicker {
    
        0%, 18%, 22%, 25%, 53%, 57%, 100% {
      
            text-shadow:
            0 0 4px #fff,
            0 0 11px #fff,
            0 0 19px #fff,
            0 0 40px #C724B1,
            0 0 80px #C724B1,
            0 0 90px #C724B1,
            0 0 100px #C724B1,
            0 0 150px #C724B1;
        
        }
        
        20%, 24%, 55% {        
            text-shadow: none;
        }    
      }
    `,this.shadow.appendChild(e)}render(){let e=document.createElement("div"),t=document.createElement("button");return(t.setAttribute("class","home"),e.setAttribute("class","button-container"),e.appendChild(t),this.shadow.appendChild(e),t.textContent=" ","/home"==location.pathname&&"join-game"==this.className)?t.textContent="Unirse":"/home"==location.pathname&&"new-game-home"==this.className?t.textContent="Nuevo juego":"/new-game"==location.pathname&&"new-game"==this.className?t.textContent="Empezar":"/join-game"==location.pathname&&"join-game"==this.className?t.textContent="Unirse":"/instructions"==location.pathname&&"instructions"==this.className?t.textContent="Jugar":"/result"==location.pathname&&"result"==this.className?t.textContent="Jugar otra vez":void 0}}customElements.define("custom-button",T);class k extends HTMLElement{shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render();let e=document.createElement("style");document.querySelector(".custom-container"),e.innerHTML=`
        .custom-container {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            margin-top: 15vh;
            min-width: 370px;
        }
        .custom-button{
            margin: auto 8vw;
            width: 115px;
            height: 170px;
            background: transparent;
            color: #fff;
            border: 0.3rem solid #fff;
            border-radius: 2rem;
            box-shadow: 0 0 1rem #fff,
            0 0 .1rem #fff,
            0 0 .05rem #fff,
            0 0 0.8rem #C724B1,
            0 0 2.8rem #C724B1,
            inset 0 0 1.3rem #C724B1;
        }
        @media(max-width: 421px ){
          .custom-button{
            margin: 0 5px;
          }
        }
      `,this.shadow.appendChild(e)}render(){let e=I("kpDdw"),t=I("7dQ4O"),n=I("63stw"),i=document.createElement("div");i.setAttribute("class","custom-container");let r=document.createElement("button");r.setAttribute("id","piedra"),r.setAttribute("class","custom-button");let s=document.createElement("img");s.setAttribute("src",e),r.appendChild(s);let o=document.createElement("button");o.setAttribute("class","custom-button"),o.setAttribute("id","papel");let a=document.createElement("img");a.setAttribute("src",t),o.appendChild(a);let l=document.createElement("button");l.setAttribute("class","custom-button"),l.setAttribute("id","tijera");let h=document.createElement("img");h.setAttribute("src",n),l.appendChild(h),i.appendChild(r),i.appendChild(o),i.appendChild(l),this.shadow.appendChild(i),r.addEventListener("click",e=>{let t=new CustomEvent("clicked",{detail:{play:""==e.path[1].id?e.path[0].id:e.path[1].id}});this.dispatchEvent(t),this.shadow.querySelector("#tijera").remove(),this.shadow.querySelector("#papel").remove()}),o.addEventListener("click",e=>{let t=new CustomEvent("clicked",{detail:{play:""==e.path[1].id?e.path[0].id:e.path[1].id}});this.dispatchEvent(t),this.shadow.querySelector("#piedra").remove(),this.shadow.querySelector("#tijera").remove()}),l.addEventListener("click",e=>{let t=new CustomEvent("clicked",{detail:{play:""==e.path[1].id?e.path[0].id:e.path[1].id}});this.dispatchEvent(t),this.shadow.querySelector("#piedra").remove(),this.shadow.querySelector("#papel").remove()})}}customElements.define("custom-hands",k);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x={},N=x={};function P(){throw Error("setTimeout has not been defined")}function R(){throw Error("clearTimeout has not been defined")}function A(e){if(_===setTimeout)return setTimeout(e,0);if((_===P||!_)&&setTimeout)return _=setTimeout,setTimeout(e,0);try{return _(e,0)}catch(t){try{return _.call(null,e,0)}catch(t){return _.call(this,e,0)}}}!function(){try{_="function"==typeof setTimeout?setTimeout:P}catch(e){_=P}try{g="function"==typeof clearTimeout?clearTimeout:R}catch(e){g=R}}();var D=[],O=!1,L=-1;function M(){O&&y&&(O=!1,y.length?D=y.concat(D):L=-1,D.length&&F())}function F(){if(!O){var e=A(M);O=!0;for(var t=D.length;t;){for(y=D,D=[];++L<t;)y&&y[L].run();L=-1,t=D.length}y=null,O=!1,function(e){if(g===clearTimeout)return clearTimeout(e);if((g===R||!g)&&clearTimeout)return g=clearTimeout,clearTimeout(e);try{g(e)}catch(t){try{return g.call(null,e)}catch(t){return g.call(this,e)}}}(e)}}function q(e,t){this.fun=e,this.array=t}function j(){}N.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];D.push(new q(e,t)),1!==D.length||O||A(F)},q.prototype.run=function(){this.fun.apply(null,this.array)},N.title="browser",N.browser=!0,N.env={},N.argv=[],N.version="",N.versions={},N.on=j,N.addListener=j,N.once=j,N.off=j,N.removeListener=j,N.removeAllListeners=j,N.emit=j,N.prependListener=j,N.prependOnceListener=j,N.listeners=function(e){return[]},N.binding=function(e){throw Error("process.binding is not supported")},N.cwd=function(){return"/"},N.chdir=function(e){throw Error("process.chdir is not supported")},N.umask=function(){return 0};const H={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},U=function(e,t){if(!e)throw W(t)},W=function(e){return Error("Firebase Database ("+H.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},B=function(e){let t=[],n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:(r<2048?t[n++]=r>>6|192:((64512&r)==55296&&i+1<e.length&&(64512&e.charCodeAt(i+1))==56320?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128):t[n++]=r>>12|224,t[n++]=r>>6&63|128),t[n++]=63&r|128)}return t},z=function(e){let t=[],n=0,i=0;for(;n<e.length;){let r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){let s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){let s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{let s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},$={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){let r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,h=r>>2,c=(3&r)<<4|o>>4,u=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(u=64)),i.push(n[h],n[c],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(B(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):z(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){let r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0,o=++t<e.length?n[e.charAt(t)]:64,a=++t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw new V;let l=r<<2|s>>4;if(i.push(l),64!==o){let e=s<<4&240|o>>2;if(i.push(e),64!==a){let e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class V extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const G=function(e){let t=B(e);return $.encodeByteArray(t,!0)},Y=function(e){return G(e).replace(/\./g,"")},K=function(e){try{return $.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},Q=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==C)return C;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,J=()=>{if(void 0===x||void 0===x.env)return;let e=void 0;if(e)return JSON.parse(e)},X=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&K(e[1]);return t&&JSON.parse(t)},Z=()=>{try{return Q()||J()||X()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ee=e=>{var t,n;return null===(n=null===(t=Z())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},et=e=>{let t=ee(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},en=()=>{var e;return null===(e=Z())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}function er(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")}function es(){return!0===H.NODE_CLIENT||!0===H.NODE_ADMIN}class eo extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,eo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ea.prototype.create)}}class ea{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?r.replace(el,(e,t)=>{let i=n[t];return null!=i?String(i):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new eo(i,o,n)}}const el=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(e){return JSON.parse(e)}function ec(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu=function(e){let t={},n={},i={},r="";try{let s=e.split(".");t=eh(K(s[0])||""),n=eh(K(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},ed=function(e){let t=eu(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},ep=function(e){let t=eu(e).claims;return"object"==typeof t&&!0===t.admin};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ef(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function e_(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function eg(e,t,n){let i={};for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function ey(e,t){if(e===t)return!0;let n=Object.keys(e),i=Object.keys(t);for(let r of n){if(!i.includes(r))return!1;let n=e[r],s=t[r];if(ev(n)&&ev(s)){if(!ey(n,s))return!1}else if(n!==s)return!1}for(let e of i)if(!n.includes(e))return!1;return!0}function ev(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){let n,i;t||(t=0);let r=this.W_;if("string"==typeof e)for(let n=0;n<16;n++)r[n]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let n=0;n<16;n++)r[n]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){let t=r[e-3]^r[e-8]^r[e-14]^r[e-16];r[e]=(t<<1|t>>>31)&4294967295}let s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(n=l^o&(a^l),i=1518500249):(n=o^a^l,i=1859775393):e<60?(n=o&a|l&(o|a),i=2400959708):(n=o^a^l,i=3395469782);let t=(s<<5|s>>>27)+n+h+i+r[e]&4294967295;h=l,l=a,a=(o<<30|o>>>2)&4294967295,o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);let n=t-this.blockSize,i=0,r=this.buf_,s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){let e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}function eC(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=function(e){let t=[],n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){let t=r-55296;U(++i<e.length,"Surrogate pair missing trail surrogate."),r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:(r<2048?t[n++]=r>>6|192:(r<65536?t[n++]=r>>12|224:(t[n++]=r>>18|240,t[n++]=r>>12&63|128),t[n++]=r>>6&63|128),t[n++]=63&r|128)}return t},eS=function(e){let t=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(e){return e&&e._delegate?e._delegate:e}class eE{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new ei;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:eT})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=eT){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=eT){return this.instances.has(e)}getOptions(e=eT){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(i);return i}onInit(e,t){var n;let i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);let s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===eT?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=eT){return this.component?this.component.multipleInstances?e:eT:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new ek(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=[];(m=v||(v={}))[m.DEBUG=0]="DEBUG",m[m.VERBOSE=1]="VERBOSE",m[m.INFO=2]="INFO",m[m.WARN=3]="WARN",m[m.ERROR=4]="ERROR",m[m.SILENT=5]="SILENT";const eP={debug:v.DEBUG,verbose:v.VERBOSE,info:v.INFO,warn:v.WARN,error:v.ERROR,silent:v.SILENT},eR=v.INFO,eA={[v.DEBUG]:"log",[v.VERBOSE]:"log",[v.INFO]:"info",[v.WARN]:"warn",[v.ERROR]:"error"},eD=(e,t,...n)=>{if(t<e.logLevel)return;let i=new Date().toISOString(),r=eA[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class eO{constructor(e){this.name=e,this._logLevel=eR,this._logHandler=eD,this._userLogHandler=null,eN.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in v))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?eP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,v.DEBUG,...e),this._logHandler(this,v.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,v.VERBOSE,...e),this._logHandler(this,v.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,v.INFO,...e),this._logHandler(this,v.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,v.WARN,...e),this._logHandler(this,v.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,v.ERROR,...e),this._logHandler(this,v.ERROR,...e)}}const eL=(e,t)=>t.some(t=>e instanceof t),eM=new WeakMap,eF=new WeakMap,eq=new WeakMap,ej=new WeakMap,eH=new WeakMap;let eU={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return eF.get(e);if("objectStoreNames"===t)return e.objectStoreNames||eq.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return eW(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function eW(n){var i;if(n instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(eW(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&eM.set(t,e)}).catch(()=>{}),eH.set(t,e),t}(n);if(ej.has(n))return ej.get(n);let r="function"==typeof(i=n)?i!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(i)?function(...e){return i.apply(eB(this),e),eW(eM.get(this))}:function(...e){return eW(i.apply(eB(this),e))}:function(e,...t){let n=i.call(eB(this),e,...t);return eq.set(n,e.sort?e.sort():[e]),eW(n)}:(i instanceof IDBTransaction&&function(e){if(eF.has(e))return;let t=new Promise((t,n)=>{let i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});eF.set(e,t)}(i),eL(i,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(i,eU):i;return r!==n&&(ej.set(n,r),eH.set(r,n)),r}const eB=e=>eH.get(e),ez=["get","getKey","getAll","getAllKeys","count"],e$=["put","add","delete","clear"],eV=new Map;function eG(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(eV.get(t))return eV.get(t);let n=t.replace(/FromIndex$/,""),i=t!==n,r=e$.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||ez.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,r?"readwrite":"readonly"),o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return eV.set(t,s),s}eU={...p=eU,get:(e,t,n)=>eG(e,t)||p.get(e,t,n),has:(e,t)=>!!eG(e,t)||p.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eY{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const eK="@firebase/app",eQ="0.10.10",eJ=new eO("@firebase/app"),eX="[DEFAULT]",eZ={[eK]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai-preview":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},e0=new Map,e1=new Map,e2=new Map;function e5(e,t){try{e.container.addComponent(t)}catch(n){eJ.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function e4(e){let t=e.name;if(e2.has(t))return eJ.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(e2.set(t,e),e0.values()))e5(n,e);for(let t of e1.values())e5(t,e);return!0}const e3=new ea("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new eE("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw e3.create("app-deleted",{appName:this._name})}}function e8(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});let i=Object.assign({name:eX,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw e3.create("bad-app-name",{appName:String(r)});if(n||(n=en()),!n)throw e3.create("no-options");let s=e0.get(r);if(s){if(ey(n,s.options)&&ey(i,s.config))return s;throw e3.create("duplicate-app",{appName:r})}let o=new ex(r);for(let e of e2.values())o.addComponent(e);let a=new e6(n,i,o);return e0.set(r,a),a}function e9(e,t,n){var i;let r=null!==(i=eZ[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);let s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${r}" with version "${t}":`];s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),eJ.warn(e.join(" "));return}e4(new eE(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}const e7="firebase-heartbeat-store";let te=null;function tt(){return te||(te=(function(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){let o=indexedDB.open(e,1),a=eW(o);return i&&o.addEventListener("upgradeneeded",e=>{i(eW(o.result),e.oldVersion,e.newVersion,eW(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),r&&e.addEventListener("versionchange",e=>r(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(e7)}catch(e){console.warn(e)}}}).catch(e=>{throw e3.create("idb-open",{originalErrorMessage:e.message})})),te}async function tn(e){try{let t=(await tt()).transaction(e7),n=await t.objectStore(e7).get(tr(e));return await t.done,n}catch(e){if(e instanceof eo)eJ.warn(e.message);else{let t=e3.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});eJ.warn(t.message)}}}async function ti(e,t){try{let n=(await tt()).transaction(e7,"readwrite"),i=n.objectStore(e7);await i.put(t,tr(e)),await n.done}catch(e){if(e instanceof eo)eJ.warn(e.message);else{let t=e3.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});eJ.warn(t.message)}}}function tr(e){return`${e.name}!${e.options.appId}`}class ts{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new ta(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=to();if((null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(e=>e.date===i))return;return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}catch(e){eJ.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=to(),{heartbeatsToSend:n,unsentEntries:i}=function(e,t=1024){let n=[],i=e.slice();for(let r of e){let e=n.find(e=>e.agent===r.agent);if(e){if(e.dates.push(r.date),tl(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),tl(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),r=Y(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return eJ.warn(e),""}}}function to(){return new Date().toISOString().substring(0,10)}class ta{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let n=!0,i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await tn(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return ti(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return ti(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function tl(e){return Y(JSON.stringify({version:2,heartbeats:e})).length}e4(new eE("platform-logger",e=>new eY(e),"PRIVATE")),e4(new eE("heartbeat",e=>new ts(e),"PRIVATE")),e9(eK,eQ,""),e9(eK,eQ,"esm2017"),e9("fire-js",""),e9("firebase","10.13.1","app");const th="@firebase/database",tc="1.0.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tu="";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ec(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:eh(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return em(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){let t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new td(t)}}catch(e){}return new tp},tf=tm("localStorage"),t_=tm("sessionStorage"),tg=new eO("@firebase/database"),ty=(d=1,function(){return d++}),tv=function(e){let t=eb(e),n=new ew;n.update(t);let i=n.digest();return $.encodeByteArray(i)},tw=function(...e){let t="";for(let n=0;n<e.length;n++){let i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=tw.apply(null,i):"object"==typeof i?t+=ec(i):t+=i,t+=" "}return t};let tC=null,tb=!0;const tS=function(e,t){U(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(tg.logLevel=v.VERBOSE,tC=tg.log.bind(tg),t&&t_.set("logging_enabled",!0)):"function"==typeof e?tC=e:(tC=null,t_.remove("logging_enabled"))},tI=function(...e){if(!0===tb&&(tb=!1,null===tC&&!0===t_.get("logging_enabled")&&tS(!0)),tC){let t=tw.apply(null,e);tC(t)}},tE=function(e){return function(...t){tI(e,...t)}},tT=function(...e){let t="FIREBASE INTERNAL ERROR: "+tw(...e);tg.error(t)},tk=function(...e){let t=`FIREBASE FATAL ERROR: ${tw(...e)}`;throw tg.error(t),Error(t)},tx=function(...e){let t="FIREBASE WARNING: "+tw(...e);tg.warn(t)},tN=function(){"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&tx("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},tP=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},tR=function(e){if(es()||"complete"===document.readyState)e();else{let t=!1,n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},tA="[MIN_NAME]",tD="[MAX_NAME]",tO=function(e,t){if(e===t)return 0;{if(e===tA||t===tD)return -1;if(t===tA||e===tD)return 1;let n=tW(e),i=tW(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},tL=function(e,t){return e===t?0:e<t?-1:1},tM=function(e,t){if(t&&e in t)return t[e];throw Error("Missing required key ("+e+") in object: "+ec(t))},tF=function(e){if("object"!=typeof e||null===e)return ec(e);let t=[];for(let n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=ec(t[i])+":"+tF(e[t[i]]);return n+"}"},tq=function(e,t){let n=e.length;if(n<=t)return[e];let i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function tj(e,t){for(let n in e)e.hasOwnProperty(n)&&t(n,e[n])}const tH=function(e){let t,n,i,r,s;U(!tP(e),"Invalid JSON number"),0===e?(n=0,i=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=22250738585072014e-324?(n=(r=Math.min(Math.floor(Math.log(e)/Math.LN2),1023))+1023,i=Math.round(e*Math.pow(2,52-r)-4503599627370496)):(n=0,i=Math.round(e/5e-324)));let o=[];for(s=52;s;s-=1)o.push(i%2?1:0),i=Math.floor(i/2);for(s=11;s;s-=1)o.push(n%2?1:0),n=Math.floor(n/2);o.push(t?1:0),o.reverse();let a=o.join(""),l="";for(s=0;s<64;s+=8){let e=parseInt(a.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()},tU=RegExp("^-?(0*)\\d{1,10}$"),tW=function(e){if(tU.test(e)){let t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},tB=function(e){try{e()}catch(e){setTimeout(()=>{throw tx("Exception was thrown by user callback.",e.stack||""),e},Math.floor(0))}},tz=function(e,t){let n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t${constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){tx(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(tI("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',tx(e)}}class tG{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}tG.OWNER="owner";const tY=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,tK="websocket",tQ="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tJ{constructor(e,t,n,i,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=tf.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&tf.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function tX(e,t,n){let i;if(U("string"==typeof t,"typeof type must == string"),U("object"==typeof n,"typeof params must == object"),t===tK)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===tQ)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw Error("Unknown connection type: "+t);(e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams)&&(n.ns=e.namespace);let r=[];return tj(n,(e,t)=>{r.push(e+"="+t)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tZ{constructor(){this.counters_={}}incrementCounter(e,t=1){em(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return function e(t,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return n}for(let i in n)n.hasOwnProperty(i)&&"__proto__"!==i&&(t[i]=e(t[i],n[i]));return t}(void 0,this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0={},t1={};function t2(e){let t=e.toString();return t0[t]||(t0[t]=new tZ),t0[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&tB(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t4="start";class t3{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=tE(e),this.stats_=t2(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),tX(t,tQ,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new t5(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(3e4)),tR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new t6((...e)=>{let[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder){if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===t4)this.id=n,this.password=i;else if("close"===t)n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_();else throw Error("Unrecognized command received: "+t)}},(...e)=>{let[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);let e={};e[t4]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&tY.test(location.hostname)&&(e.r="f");let t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){t3.forceAllow_=!0}static forceDisallow(){t3.forceDisallow_=!0}static isAvailable(){return!es()&&(!!t3.forceAllow_||!t3.forceDisallow_&&"undefined"!=typeof document&&null!=document.createElement&&!("object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){!this.isClosed_&&(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){let t=ec(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=tq(G(t),1840);for(let e=0;e<n.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,n.length,n[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(es())return;this.myDisconnFrame=document.createElement("iframe");let n={};n.dframe="t",n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=ec(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class t6{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,es())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=ty(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=t6.createIFrame_();let n="";this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)&&(n='<script>document.domain="'+document.domain+'";</script>');let i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){tI("frame writing exception"),e.stack&&tI(e.stack),tI(e)}}}static createIFrame_(){let e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||tI("No IE domain setting required")}catch(n){let t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(!this.alive||!this.sendNewPolls||!(this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)))return!1;{this.currentSerial++;let e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;)if(this.pendingSegs[0].d.length+30+n.length<=1870){let e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}else break;return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,()=>{clearTimeout(i),n()})}addTag(e,t){es()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){let e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{tI("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}},Math.floor(1))}}let t8=null;"undefined"!=typeof MozWebSocket?t8=MozWebSocket:"undefined"!=typeof WebSocket&&(t8=WebSocket);class t9{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=tE(this.connId),this.stats_=t2(t),this.connURL=t9.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){let s={};return s.v="5",!es()&&"undefined"!=typeof location&&location.hostname&&tY.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s.ac=i),r&&(s.p=r),tX(e,tK,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,tf.set("previous_websocket_failure",!0);try{let e;if(es()){let t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${tu}/${x.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);let n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new t8(this.connURL,[],e)}catch(t){this.log_("Error instantiating WebSocket.");let e=t.message||t.data;e&&this.log_(e),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");let t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){t9.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){let t=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);t&&t.length>1&&4.4>parseFloat(t[1])&&(e=!0)}return!e&&null!==t8&&!t9.forceDisallow_}static previouslyFailed(){return tf.isInMemoryStorage||!0===tf.get("previous_websocket_failure")}markConnectionHealthy(){tf.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let e=this.frames.join("");this.frames=null;let t=eh(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(U(null===this.frames,"We already have a frame buffer"),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{let e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();let t=ec(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=tq(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){!this.isClosed_&&(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}t9.responsesRequiredToBeHealthy=2,t9.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t7{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[t3,t9]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){let t=t9&&t9.isAvailable(),n=t&&!t9.previouslyFailed();if(e.webSocketOnly&&(t||tx("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[t9];else{let e=this.transports_=[];for(let t of t7.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);t7.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}t7.globalTransportInitialized_=!1;class ne{constructor(e,t,n,i,r,s,o,a,l,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=tE("c:"+this.id+":"),this.transportManager_=new t7(t),this.log_("Connection created"),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));let i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=tz(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){this.sendData_({t:"d",d:e})}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){let t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=tM("t",e),n=tM("d",e);if("c"===t)this.onSecondaryControl_(n);else if("d"===t)this.pendingDataMessages.push(n);else throw Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=tM("t",e),n=tM("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){!this.isHealthy_&&(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=tM("t",e);if("d"in e){let n=e.d;if("h"===t){let e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?tT("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):tT("Unknown control packet command: "+t)}}onHandshake_(e){let t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&tx("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),tz(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):tz(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(tf.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.allowedEvents_=e,this.listeners_={},U(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});let i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);let i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context)){i.splice(e,1);return}}validateEventType_(e){U(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends nn{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||er()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ni}getInitialEvent(e){return U("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}class nr{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ns(){return new nr("")}function no(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function na(e){return e.pieces_.length-e.pieceNum_}function nl(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new nr(e.pieces_,t)}function nh(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function nc(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function nu(e){if(e.pieceNum_>=e.pieces_.length)return null;let t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new nr(t,0)}function nd(e,t){let n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof nr)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{let e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new nr(n,0)}function np(e){return e.pieceNum_>=e.pieces_.length}function nm(e,t){let n=no(e),i=no(t);if(null===n)return t;if(n===i)return nm(nl(e),nl(t));throw Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function nf(e,t){if(na(e)!==na(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function n_(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(na(e)>na(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class ng{constructor(e,t){this.errorPrefix_=t,this.parts_=nc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=eS(this.parts_[e]);ny(this)}}function ny(e){if(e.byteLength_>768)throw Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+nv(e))}function nv(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw extends nn{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{let t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new nw}getInitialEvent(e){return U("visible"===e,"Unknown event type: "+e),[this.visible_]}}class nC extends nt{constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=nC.nextPersistentConnectionId_++,this.log_=tE("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!es())throw Error("Auth override specified in options, but not supported on non Node.js platforms");nw.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&ni.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){let i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(ec(r)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();let t=new ei,n={p:e._path.toString(),q:e._queryObject};this.outstandingGets_.push({action:"g",request:n,onComplete:e=>{let n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}}),this.outstandingGetCount_++;let i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();let r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");let o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){let t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);let r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,r=>{let s=r.d,o=r.s;nC.warnOnListenWarnings_(s,t),(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&em(e,"w")){let n=ef(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){let e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();tx(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||ep(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=ed(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,t=>{let n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){let n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);let r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){let r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,e=>{i&&setTimeout(()=>{i(e.s,e.d)},Math.floor(0))})}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();let s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;let o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{if("ok"!==e.s){let t=e.d;this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ec(e));let t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else if("error"in e)throw"A server-side error has occurred: "+e.error;else"a"in e&&this.onDataPush_(e.a,e.b)}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):tT("Unrecognized action received from server: "+ec(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){!e||this.visible_||this.reconnectDelay_!==this.maxReconnectDelay_||(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());let e=new Date().getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+nC.nextConnectionId_++,r=this.lastSessionId,s=!1,o=null,a=function(){o?o.close():(s=!0,n())};this.realtime_={close:a,sendRequest:function(e){U(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)}};let l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[a,h]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?tI("getToken() completed but was canceled"):(tI("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=h&&h.token,o=new ne(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{tx(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")},r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&tx(e),a())}}}interrupt(e){tI("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){tI("Resuming connection for reason: "+e),delete this.interruptReasons_[e],e_(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>tF(e)).join("$"):"default";let i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){let n;let i=new nr(e).toString();if(this.listens.has(i)){let e=this.listens.get(i);n=e.get(t),e.delete(t),0===e.size&&this.listens.delete(i)}else n=void 0;return n}onAuthRevoked_(e,t){tI("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),("invalid_token"===e||"permission_denied"===e)&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){tI("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,("invalid_token"===e||"permission_denied"===e)&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){for(let e of(this.tryAuth(),this.tryAppCheck(),this.listens.values()))for(let t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){let e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){let e={},t="js";es()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+tu.replace(/\./g,"-")]=1,er()?e["framework.cordova"]=1:"object"==typeof navigator&&"ReactNative"===navigator.product&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=ni.getInstance().currentlyOnline();return e_(this.interruptReasons_)&&e}}nC.nextPersistentConnectionId_=0,nC.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new nb(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let n=new nb(tA,e),i=new nb(tA,t);return 0!==this.compare(n,i)}minPost(){return nb.MIN}}class nI extends nS{static get __EMPTY_NODE(){return n}static set __EMPTY_NODE(e){n=e}compare(e,t){return tO(e.name,t.name)}isDefinedOn(e){throw W("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return nb.MIN}maxPost(){return new nb(tD,n)}makePost(e,t){return U("string"==typeof e,"KeyIndex indexValue must always be a string."),new nb(e,n)}toString(){return".key"}}const nE=new nI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else if(0===s){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}getNext(){let e;if(0===this.nodeStack_.length)return null;let t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class nk{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:nk.RED,this.left=null!=i?i:nx.EMPTY_NODE,this.right=null!=r?r:nx.EMPTY_NODE}copy(e,t,n,i,r){return new nk(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this,r=n(e,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n))).fixUp_()}removeMin_(){if(this.left.isEmpty())return nx.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}remove(e,t){let n,i;if(n=this,0>t(e,n.key))n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return nx.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}rotateLeft_(){let e=this.copy(null,null,nk.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){let e=this.copy(null,null,nk.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){return Math.pow(2,this.check_())<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e===this.right.check_())return e+(this.isRed_()?0:1);throw Error("Black depths differ")}}nk.RED=!0,nk.BLACK=!1;class nx{constructor(e,t=nx.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new nx(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,nk.BLACK,null,null))}remove(e){return new nx(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,nk.BLACK,null,null))}get(e){let t;let n=this.root_;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty()){if(i)return i.key;return null}for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new nT(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new nT(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new nT(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new nT(this.root_,null,this.comparator_,!0,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nN(e,t){return tO(e.name,t.name)}function nP(e,t){return tO(e,t)}nx.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new nk(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const nR=function(e){return"number"==typeof e?"number:"+tH(e):"string:"+e},nA=function(e){if(e.isLeafNode()){let t=e.val();U("string"==typeof t||"number"==typeof t||"object"==typeof t&&em(t,".sv"),"Priority must be a string or number.")}else U(e===i||e.isEmpty(),"priority of unexpected type.");U(e===i||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};class nD{constructor(e,t=nD.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,U(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),nA(this.priorityNode_)}static set __childrenNodeConstructor(e){r=e}static get __childrenNodeConstructor(){return r}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nD(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:nD.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return np(e)?this:".priority"===no(e)?this.priorityNode_:nD.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:nD.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){let n=no(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(U(".priority"!==n||1===na(e),".priority must be the last token in a path"),this.updateImmediateChild(n,nD.__childrenNodeConstructor.EMPTY_NODE.updateChild(nl(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+nR(this.priorityNode_.val())+":");let t=typeof this.value_;e+=t+":","number"===t?e+=tH(this.value_):e+=this.value_,this.lazyHash_=tv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nD.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nD.__childrenNodeConstructor?-1:(U(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){let t=typeof e.value_,n=typeof this.value_,i=nD.VALUE_TYPE_ORDER.indexOf(t),r=nD.VALUE_TYPE_ORDER.indexOf(n);return(U(i>=0,"Unknown leaf type: "+t),U(r>=0,"Unknown leaf type: "+n),i!==r)?r-i:"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1}withIndex(){return this}isIndexed(){return!0}equals(e){return e===this||!!e.isLeafNode()&&this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}}nD.VALUE_TYPE_ORDER=["object","boolean","number","string"];const nO=new class extends nS{compare(e,t){let n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?tO(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return nb.MIN}maxPost(){return new nb(tD,new nD("[PRIORITY-POST]",o))}makePost(e,t){return new nb(t,new nD("[PRIORITY-POST]",s(e)))}toString(){return".priority"}},nL=Math.log(2);class nM{constructor(e){this.count=parseInt(Math.log(e+1)/nL,10),this.current_=this.count-1;let t=parseInt(Array(this.count+1).join("1"),2);this.bits_=e+1&t}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}}const nF=function(e,t,n,i){e.sort(t);let r=function(t,i){let s;let o=i-t;if(0===o)return null;if(1===o)return s=e[t],new nk(n?n(s):s,s.node,nk.BLACK,null,null);{let a=parseInt(o/2,10)+t,l=r(t,a),h=r(a+1,i);return s=e[a],new nk(n?n(s):s,s.node,nk.BLACK,l,h)}};return new nx(i||t,function(t){let i=null,s=null,o=e.length,a=function(t,i){let s=o-t,a=o;o-=t;let h=r(s+1,a),c=e[s];l(new nk(n?n(c):c,c.node,i,null,h))},l=function(e){i?i.left=e:s=e,i=e};for(let e=0;e<t.count;++e){let n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,nk.BLACK):(a(i,nk.BLACK),a(i,nk.RED))}return s}(new nM(e.length)))},nq={};class nj{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return U(nq&&nO,"ChildrenNode.ts has not been loaded"),a=a||new nj({".priority":nq},{".priority":nO})}get(e){let t=ef(this.indexes_,e);if(!t)throw Error("No index defined for "+e);return t instanceof nx?t:null}hasIndex(e){return em(this.indexSet_,e.toString())}addIndex(e,t){let n;U(e!==nE,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let i=[],r=!1,s=t.getIterator(nb.Wrap),o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();n=r?nF(i,e.getCompare()):nq;let a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;let h=Object.assign({},this.indexes_);return h[a]=n,new nj(h,l)}addToIndexes(e,t){return new nj(eg(this.indexes_,(n,i)=>{let r=ef(this.indexSet_,i);if(U(r,"Missing index implementation for "+i),n===nq){if(!r.isDefinedOn(e.node))return nq;{let n=[],i=t.getIterator(nb.Wrap),s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),nF(n,r.getCompare())}}{let i=t.get(e.name),r=n;return i&&(r=r.remove(new nb(e.name,i))),r.insert(e,e.node)}}),this.indexSet_)}removeFromIndexes(e,t){return new nj(eg(this.indexes_,n=>{if(n===nq)return n;{let i=t.get(e.name);return i?n.remove(new nb(e.name,i)):n}}),this.indexSet_)}}class nH{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&nA(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return l||(l=new nH(new nx(nP),null,nj.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||l}updatePriority(e){return this.children_.isEmpty()?this:new nH(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{let t=this.children_.get(e);return null===t?l:t}}getChild(e){let t=no(e);return null===t?this:this.getImmediateChild(t).getChild(nl(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(U(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{let n,i;let r=new nb(e,t);t.isEmpty()?(n=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(n=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(r,this.children_));let s=n.isEmpty()?l:this.priorityNode_;return new nH(n,s,i)}}updateChild(e,t){let n=no(e);if(null===n)return t;{U(".priority"!==no(e)||1===na(e),".priority must be the last token in a path");let i=this.getImmediateChild(n).updateChild(nl(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;let t={},n=0,i=0,r=!0;if(this.forEachChild(nO,(s,o)=>{t[s]=o.val(e),n++,r&&nH.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1}),e||!r||!(i<2*n))return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t;{let e=[];for(let n in t)e[n]=t[n];return e}}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+nR(this.getPriority().val())+":"),this.forEachChild(nO,(t,n)=>{let i=n.hash();""!==i&&(e+=":"+t+":"+i)}),this.lazyHash_=""===e?"":tv(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){let i=this.resolveIndex_(n);if(!i)return this.children_.getPredecessorKey(e);{let n=i.getPredecessorKey(new nb(e,t));return n?n.name:null}}getFirstChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.minKey();{let e=t.minKey();return e&&e.name}}getFirstChild(e){let t=this.getFirstChildName(e);return t?new nb(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.maxKey();{let e=t.maxKey();return e&&e.name}}getLastChild(e){let t=this.getLastChildName(e);return t?new nb(t,this.children_.get(t)):null}forEachChild(e,t){let n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{let n=this.children_.getIteratorFrom(e.name,nb.Wrap),i=n.peek();for(;null!=i&&0>t.compare(i,e);)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{let n=this.children_.getReverseIteratorFrom(e.name,nb.Wrap),i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===nU?-1:0}withIndex(e){if(e===nE||this.indexMap_.hasIndex(e))return this;{let t=this.indexMap_.addIndex(e,this.children_);return new nH(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===nE||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode()||!this.getPriority().equals(e.getPriority())||this.children_.count()!==e.children_.count())return!1;{let t=this.getIterator(nO),n=e.getIterator(nO),i=t.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=t.getNext(),r=n.getNext()}return null===i&&null===r}}resolveIndex_(e){return e===nE?null:this.indexMap_.get(e.toString())}}nH.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const nU=new class extends nH{constructor(){super(new nx(nP),nH.EMPTY_NODE,nj.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return nH.EMPTY_NODE}isEmpty(){return!1}};function nW(e,t=null){if(null===e)return nH.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),U(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e)return new nD(e,nW(t));if(e instanceof Array){let n=nH.EMPTY_NODE;return tj(e,(t,i)=>{if(em(e,t)&&"."!==t.substring(0,1)){let e=nW(i);(e.isLeafNode()||!e.isEmpty())&&(n=n.updateImmediateChild(t,e))}}),n.updatePriority(nW(t))}{let n=[],i=!1;if(tj(e,(e,t)=>{if("."!==e.substring(0,1)){let r=nW(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new nb(e,r)))}}),0===n.length)return nH.EMPTY_NODE;let r=nF(n,nN,e=>e.name,nP);if(!i)return new nH(r,nW(t),nj.Default);{let e=nF(n,nO.getCompare());return new nH(r,nW(t),new nj({".priority":e},{".priority":nO}))}}}Object.defineProperties(nb,{MIN:{value:new nb(tA,nH.EMPTY_NODE)},MAX:{value:new nb(tD,nU)}}),nI.__EMPTY_NODE=nH.EMPTY_NODE,nD.__childrenNodeConstructor=nH,i=nU,o=nU,s=nW;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nB extends nS{constructor(e){super(),this.indexPath_=e,U(!np(e)&&".priority"!==no(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?tO(e.name,t.name):r}makePost(e,t){let n=nW(e);return new nb(t,nH.EMPTY_NODE.updateChild(this.indexPath_,n))}maxPost(){return new nb(tD,nH.EMPTY_NODE.updateChild(this.indexPath_,nU))}toString(){return nc(this.indexPath_,0).join("/")}}const nz=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class extends nS{compare(e,t){let n=e.node.compareTo(t.node);return 0===n?tO(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return nb.MIN}maxPost(){return nb.MAX}makePost(e,t){return new nb(t,nW(e))}toString(){return".value"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n$(e){return{type:"value",snapshotNode:e}}function nV(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function nG(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function nY(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nK{constructor(e){this.index_=e}updateChild(e,t,n,i,r,s){U(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");let o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(nG(t,o)):U(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(nV(t,n)):s.trackChildChange(nY(t,n,o))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(e,t,n){return null==n||(e.isLeafNode()||e.forEachChild(nO,(e,i)=>{t.hasChild(e)||n.trackChildChange(nG(e,i))}),t.isLeafNode()||t.forEachChild(nO,(t,i)=>{if(e.hasChild(t)){let r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(nY(t,i,r))}else n.trackChildChange(nV(t,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?nH.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nQ{constructor(e){this.indexedFilter_=new nK(e.getIndex()),this.index_=e.getIndex(),this.startPost_=nQ.getStartPost_(e),this.endPost_=nQ.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){let t=this.startIsInclusive_?0>=this.index_.compare(this.getStartPost(),e):0>this.index_.compare(this.getStartPost(),e),n=this.endIsInclusive_?0>=this.index_.compare(e,this.getEndPost()):0>this.index_.compare(e,this.getEndPost());return t&&n}updateChild(e,t,n,i,r,s){return this.matches(new nb(t,n))||(n=nH.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=nH.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(nH.EMPTY_NODE);let r=this;return t.forEachChild(nO,(e,t)=>{r.matches(new nb(e,t))||(i=i.updateImmediateChild(e,nH.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(!e.hasStart())return e.getIndex().minPost();{let t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}}static getEndPost_(e){if(!e.hasEnd())return e.getIndex().maxPost();{let t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nJ{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{let t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{let t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new nQ(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,r,s){return(this.rangedFilter_.matches(new nb(t,n))||(n=nH.EMPTY_NODE),e.getImmediateChild(t).equals(n))?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=nH.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=nH.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){let t=e.getNext();if(this.withinDirectionalStart(t)){if(this.withinDirectionalEnd(t))i=i.updateImmediateChild(t.name,t.node),n++;else break}}}else{let e;i=(i=t.withIndex(this.index_)).updatePriority(nH.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){let t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,nH.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let s;if(this.reverse_){let e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();U(e.numChildren()===this.limit_,"");let o=new nb(t,n),a=this.reverse_?e.getFirstChild(this.index_):e.getLastChild(this.index_),l=this.rangedFilter_.matches(o);if(e.hasChild(t)){let h=e.getImmediateChild(t),c=i.getChildAfterChild(this.index_,a,this.reverse_);for(;null!=c&&(c.name===t||e.hasChild(c.name));)c=i.getChildAfterChild(this.index_,c,this.reverse_);let u=null==c?1:s(c,o);if(l&&!n.isEmpty()&&u>=0)return null!=r&&r.trackChildChange(nY(t,n,h)),e.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(nG(t,h));let n=e.updateImmediateChild(t,nH.EMPTY_NODE);return null!=c&&this.rangedFilter_.matches(c)?(null!=r&&r.trackChildChange(nV(c.name,c.node)),n.updateImmediateChild(c.name,c.node)):n}}return n.isEmpty()?e:l&&s(a,o)>=0?(null!=r&&(r.trackChildChange(nG(a.name,a.node)),r.trackChildChange(nV(t,n))),e.updateImmediateChild(t,n).updateImmediateChild(a.name,nH.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nX{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=nO}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(U(this.startSet_,"Only valid if start has been set"),this.startNameSet_)?this.indexStartName_:tA}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(U(this.endSet_,"Only valid if end has been set"),this.endNameSet_)?this.indexEndName_:tD}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===nO}copy(){let e=new nX;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function nZ(e){let t;let n={};if(e.isDefault())return n;if(e.index_===nO?t="$priority":e.index_===nz?t="$value":e.index_===nE?t="$key":(U(e.index_ instanceof nB,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=ec(t),e.startSet_){let t=e.startAfterSet_?"startAfter":"startAt";n[t]=ec(e.indexStartValue_),e.startNameSet_&&(n[t]+=","+ec(e.indexStartName_))}if(e.endSet_){let t=e.endBeforeSet_?"endBefore":"endAt";n[t]=ec(e.indexEndValue_),e.endNameSet_&&(n[t]+=","+ec(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_),n}function n0(e){let t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==nO&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1 extends nt{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=tE("p:rest:"),this.listens_={}}reportStats(e){throw Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(U(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){let r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);let s=n1.getListenId_(e,n),o={};this.listens_[s]=o;let a=nZ(e._queryParams);this.restRequest_(r+".json",a,(e,t)=>{let a=t;404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),ef(this.listens_,s)===o&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)})}unlisten(e,t){let n=n1.getListenId_(e,t);delete this.listens_[n]}get(e){let t=nZ(e._queryParams),n=e._path.toString(),i=new ei;return this.restRequest_(n+".json",t,(e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(Error(r))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);let s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t=[];for(let[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}(t);this.log_("Sending REST request for "+s);let o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=eh(o.responseText)}catch(e){tx("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&tx("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(){this.rootNode_=nH.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n5(){return{value:null,children:new Map}}function n4(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((e,n)=>{t(n,e)})}(e,(e,i)=>{n4(i,new nr(t.toString()+"/"+e),n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n3{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t=Object.assign({},e);return this.last_&&tj(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}class n6{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new n3(e);let n=1e4+2e4*Math.random();tz(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){let e=this.statsListener_.get(),t={},n=!1;tj(e,(e,i)=>{i>0&&em(this.statsToReport_,e)&&(t[e]=i,n=!0)}),n&&this.server_.reportStats(t),tz(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}function n8(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function n9(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function n7(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}(f=w||(w={}))[f.OVERWRITE=0]="OVERWRITE",f[f.MERGE=1]="MERGE",f[f.ACK_USER_WRITE=2]="ACK_USER_WRITE",f[f.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=w.ACK_USER_WRITE,this.source=n8()}operationForChild(e){if(!np(this.path))return U(no(this.path)===e,"operationForChild called for unrelated child."),new ie(nl(this.path),this.affectedTree,this.revert);if(null!=this.affectedTree.value)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let t=this.affectedTree.subtree(new nr(e));return new ie(ns(),t,this.revert)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t){this.source=e,this.path=t,this.type=w.LISTEN_COMPLETE}operationForChild(e){return np(this.path)?new it(this.source,ns()):new it(this.source,nl(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=w.OVERWRITE}operationForChild(e){return np(this.path)?new ii(this.source,ns(),this.snap.getImmediateChild(e)):new ii(this.source,nl(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=w.MERGE}operationForChild(e){if(!np(this.path))return U(no(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ir(this.source,nl(this.path),this.children);{let t=this.children.subtree(new nr(e));return t.isEmpty()?null:t.value?new ii(this.source,ns(),t.value):new ir(this.source,ns(),t)}}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(np(e))return this.isFullyInitialized()&&!this.filtered_;let t=no(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ia(e,t,n,i,r,s){let o=i.filter(e=>e.type===n);o.sort((t,n)=>(function(e,t,n){if(null==t.childName||null==n.childName)throw W("Should only compare child_ events.");let i=new nb(t.childName,t.snapshotNode),r=new nb(n.childName,n.snapshotNode);return e.index_.compare(i,r)})(e,t,n)),o.forEach(n=>{let i=("value"===n.type||"child_removed"===n.type||(n.prevName=s.getPredecessorChildName(n.childName,n.snapshotNode,e.index_)),n);r.forEach(r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))})})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(e,t){return{eventCache:e,serverCache:t}}function ih(e,t,n,i){return il(new is(t,n,i),e.serverCache)}function ic(e,t,n,i){return il(e.eventCache,new is(t,n,i))}function iu(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function id(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}const ip=()=>(h||(h=new nx(tL)),h);class im{constructor(e,t=ip()){this.value=e,this.children=t}static fromObject(e){let t=new im(null);return tj(e,(e,n)=>{t=t.set(new nr(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ns(),value:this.value};if(np(e))return null;{let n=no(e),i=this.children.get(n);if(null===i)return null;{let r=i.findRootMostMatchingPathAndValue(nl(e),t);return null!=r?{path:nd(new nr(n),r.path),value:r.value}:null}}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(np(e))return this;{let t=no(e),n=this.children.get(t);return null!==n?n.subtree(nl(e)):new im(null)}}set(e,t){if(np(e))return new im(t,this.children);{let n=no(e),i=(this.children.get(n)||new im(null)).set(nl(e),t),r=this.children.insert(n,i);return new im(this.value,r)}}remove(e){if(np(e))return this.children.isEmpty()?new im(null):new im(null,this.children);{let t=no(e),n=this.children.get(t);if(!n)return this;{let i;let r=n.remove(nl(e));return(i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty())?new im(null):new im(this.value,i)}}}get(e){if(np(e))return this.value;{let t=no(e),n=this.children.get(t);return n?n.get(nl(e)):null}}setTree(e,t){if(np(e))return t;{let n;let i=no(e),r=(this.children.get(i)||new im(null)).setTree(nl(e),t);return n=r.isEmpty()?this.children.remove(i):this.children.insert(i,r),new im(this.value,n)}}fold(e){return this.fold_(ns(),e)}fold_(e,t){let n={};return this.children.inorderTraversal((i,r)=>{n[i]=r.fold_(nd(e,i),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ns(),t)}findOnPath_(e,t,n){let i=!!this.value&&n(t,this.value);if(i)return i;if(np(e))return null;{let i=no(e),r=this.children.get(i);return r?r.findOnPath_(nl(e),nd(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ns(),t)}foreachOnPath_(e,t,n){if(np(e))return this;{this.value&&n(t,this.value);let i=no(e),r=this.children.get(i);return r?r.foreachOnPath_(nl(e),nd(t,i),n):new im(null)}}foreach(e){this.foreach_(ns(),e)}foreach_(e,t){this.children.inorderTraversal((n,i)=>{i.foreach_(nd(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e){this.writeTree_=e}static empty(){return new i_(new im(null))}}function ig(e,t,n){if(np(t))return new i_(new im(n));{let i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){let r=i.path,s=i.value,o=nm(r,t);return s=s.updateChild(o,n),new i_(e.writeTree_.set(r,s))}{let i=new im(n);return new i_(e.writeTree_.setTree(t,i))}}}function iy(e,t,n){let i=e;return tj(n,(e,n)=>{i=ig(i,nd(t,e),n)}),i}function iv(e,t){return np(t)?i_.empty():new i_(e.writeTree_.setTree(t,new im(null)))}function iw(e,t){return null!=iC(e,t)}function iC(e,t){let n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(nm(n.path,t)):null}function ib(e){let t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(nO,(e,n)=>{t.push(new nb(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new nb(e,n.value))}),t}function iS(e,t){if(np(t))return e;{let n=iC(e,t);return new i_(null!=n?new im(n):e.writeTree_.subtree(t))}}function iI(e){return e.writeTree_.isEmpty()}function iE(e,t){return function e(t,n,i){if(null!=n.value)return i.updateChild(t,n.value);{let r=null;return n.children.inorderTraversal((n,s)=>{".priority"===n?(U(null!==s.value,"Priority writes must always be leaf nodes"),r=s.value):i=e(nd(t,n),s,i)}),i.getChild(t).isEmpty()||null===r||(i=i.updateChild(nd(t,".priority"),r)),i}}(ns(),e.writeTree_,t)}function iT(e){return e.visible}function ik(e,t,n){let i=i_.empty();for(let r=0;r<e.length;++r){let s=e[r];if(t(s)){let e;let t=s.path;if(s.snap)n_(n,t)?i=ig(i,e=nm(n,t),s.snap):n_(t,n)&&(e=nm(t,n),i=ig(i,ns(),s.snap.getChild(e)));else if(s.children){if(n_(n,t))i=iy(i,e=nm(n,t),s.children);else if(n_(t,n)){if(np(e=nm(t,n)))i=iy(i,ns(),s.children);else{let t=ef(s.children,no(e));if(t){let n=t.getChild(nl(e));i=ig(i,ns(),n)}}}}else throw W("WriteRecord should have .snap or .children")}}return i}function ix(e,t,n,i,r){if(i||r){let s=iS(e.visibleWrites,t);return!r&&iI(s)?n:r||null!=n||iw(s,ns())?iE(ik(e.allWrites,function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(n_(e.path,t)||n_(t,e.path))},t),n||nH.EMPTY_NODE):null}{let i=iC(e.visibleWrites,t);if(null!=i)return i;{let i=iS(e.visibleWrites,t);return iI(i)?n:null!=n||iw(i,ns())?iE(i,n||nH.EMPTY_NODE):null}}}function iN(e,t,n,i){return ix(e.writeTree,e.treePath,t,n,i)}function iP(e,t){return function(e,t,n){let i=nH.EMPTY_NODE,r=iC(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(nO,(e,t)=>{i=i.updateImmediateChild(e,t)}),i;if(!n)return ib(iS(e.visibleWrites,t)).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i;{let r=iS(e.visibleWrites,t);return n.forEachChild(nO,(e,t)=>{let n=iE(iS(r,new nr(e)),t);i=i.updateImmediateChild(e,n)}),ib(r).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}}(e.writeTree,e.treePath,t)}function iR(e,t,n,i){return function(e,t,n,i,r){U(i||r,"Either existingEventSnap or existingServerSnap must exist");let s=nd(t,n);if(iw(e.visibleWrites,s))return null;{let t=iS(e.visibleWrites,s);return iI(t)?r.getChild(n):iE(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function iA(e,t){var n,i;return n=e.writeTree,i=nd(e.treePath,t),iC(n.visibleWrites,i)}function iD(e,t,n){return function(e,t,n,i){let r=nd(t,n),s=iC(e.visibleWrites,r);return null!=s?s:i.isCompleteForChild(n)?iE(iS(e.visibleWrites,r),i.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function iO(e,t){return iL(nd(e.treePath,t),e.writeTree)}function iL(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,n=e.childName;U("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),U(".priority"!==n,"Only non-priority child changes can be tracked.");let i=this.changeMap.get(n);if(i){let r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,nY(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,nG(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,nV(n,e.snapshotNode));else if("child_changed"===t&&"child_changed"===r)this.changeMap.set(n,nY(n,e.snapshotNode,i.oldSnap));else throw W("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}const iF=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class iq{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let t=null!=this.optCompleteServerCache_?new is(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return iD(this.writes_,e,t)}}getChildAfterChild(e,t,n){var i;let r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:id(this.viewCache_),s=function(e,t,n,i,r,s,o){let a;let l=iS(e.visibleWrites,t),h=iC(l,ns());if(null!=h)a=h;else{if(null==n)return[];a=iE(l,n)}if((a=a.withIndex(o)).isEmpty()||a.isLeafNode())return[];{let e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o),r=n.getNext();for(;r&&e.length<1;)0!==t(r,i)&&e.push(r),r=n.getNext();return e}}((i=this.writes_).writeTree,i.treePath,r,t,0,n,e);return 0===s.length?null:s[0]}}function ij(e,t,n,i,r,s){let o=t.eventCache;if(null!=iA(i,n))return t;{let a,l;if(np(n)){if(U(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){let n=id(t),r=iP(i,n instanceof nH?n:nH.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{let n=iN(i,id(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}}else{let h=no(n);if(".priority"===h){U(1===na(n),"Can't have a priority with additional path components");let r=o.getNode(),s=iR(i,n,r,l=t.serverCache.getNode());a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{let c;let u=nl(n);if(o.isCompleteForChild(h)){l=t.serverCache.getNode();let e=iR(i,n,o.getNode(),l);c=null!=e?o.getNode().getImmediateChild(h).updateChild(u,e):o.getNode().getImmediateChild(h)}else c=iD(i,h,t.serverCache);a=null!=c?e.filter.updateChild(o.getNode(),h,c,u,r,s):o.getNode()}}return ih(t,a,o.isFullyInitialized()||np(n),e.filter.filtersNodes())}}function iH(e,t,n,i,r,s,o,a){let l;let h=t.serverCache,c=o?e.filter:e.filter.getIndexedFilter();if(np(n))l=c.updateFullNode(h.getNode(),i,null);else if(c.filtersNodes()&&!h.isFiltered()){let e=h.getNode().updateChild(n,i);l=c.updateFullNode(h.getNode(),e,null)}else{let e=no(n);if(!h.isCompleteForPath(n)&&na(n)>1)return t;let r=nl(n),s=h.getNode().getImmediateChild(e).updateChild(r,i);l=".priority"===e?c.updatePriority(h.getNode(),s):c.updateChild(h.getNode(),e,s,r,iF,null)}let u=ic(t,l,h.isFullyInitialized()||np(n),c.filtersNodes()),d=new iq(r,u,s);return ij(e,u,n,r,d,a)}function iU(e,t,n,i,r,s,o){let a,l;let h=t.eventCache,c=new iq(r,t,s);if(np(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),a=ih(t,l,!0,e.filter.filtersNodes());else{let r=no(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),a=ih(t,l,h.isFullyInitialized(),h.isFiltered());else{let s;let l=nl(n),u=h.getNode().getImmediateChild(r);if(np(l))s=i;else{let e=c.getCompleteChild(r);s=null!=e?".priority"===nh(l)&&e.getChild(nu(l)).isEmpty()?e:e.updateChild(l,i):nH.EMPTY_NODE}a=u.equals(s)?t:ih(t,e.filter.updateChild(h.getNode(),r,s,l,c,o),h.isFullyInitialized(),e.filter.filtersNodes())}}return a}function iW(e,t){return e.eventCache.isCompleteForChild(t)}function iB(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function iz(e,t,n,i,r,s,o,a){let l;if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let h=t;l=np(n)?i:new im(null).setTree(n,i);let c=t.serverCache.getNode();return l.children.inorderTraversal((n,i)=>{if(c.hasChild(n)){let l=iB(e,t.serverCache.getNode().getImmediateChild(n),i);h=iH(e,h,new nr(n),l,r,s,o,a)}}),l.children.inorderTraversal((n,i)=>{let l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!c.hasChild(n)&&!l){let l=iB(e,t.serverCache.getNode().getImmediateChild(n),i);h=iH(e,h,new nr(n),l,r,s,o,a)}}),h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i${constructor(e,t){this.query_=e,this.eventRegistrations_=[];let n=this.query_._queryParams,i=new nK(n.getIndex()),r=n.loadsAllData()?new nK(n.getIndex()):n.hasLimit()?new nJ(n):new nQ(n);this.processor_={filter:r};let s=t.serverCache,o=t.eventCache,a=i.updateFullNode(nH.EMPTY_NODE,s.getNode(),null),l=r.updateFullNode(nH.EMPTY_NODE,o.getNode(),null),h=new is(a,s.isFullyInitialized(),i.filtersNodes()),c=new is(l,o.isFullyInitialized(),r.filtersNodes());this.viewCache_=il(c,h),this.eventGenerator_=new io(this.query_)}get query(){return this.query_}}function iV(e){return 0===e.eventRegistrations_.length}function iG(e,t,n){let i=[];if(n){U(null==t,"A cancel should cancel all event registrations.");let r=e.query._path;e.eventRegistrations_.forEach(e=>{let t=e.createCancelEvent(n,r);t&&i.push(t)})}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){let r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function iY(e,t,n,i){var r,s;t.type===w.MERGE&&null!==t.source.queryId&&(U(id(e.viewCache_),"We should always have a full cache before handling merges"),U(iu(e.viewCache_),"Missing event cache, even though we have a server cache"));let o=e.viewCache_,a=function(e,t,n,i,r){let s,o;let a=new iM;if(n.type===w.OVERWRITE)n.source.fromUser?s=iU(e,t,n.path,n.snap,i,r,a):(U(n.source.fromServer,"Unknown source."),o=n.source.tagged||t.serverCache.isFiltered()&&!np(n.path),s=iH(e,t,n.path,n.snap,i,r,o,a));else if(n.type===w.MERGE){var l,h;let c;n.source.fromUser?(l=n.path,h=n.children,c=t,h.foreach((n,s)=>{let o=nd(l,n);iW(t,no(o))&&(c=iU(e,c,o,s,i,r,a))}),h.foreach((n,s)=>{let o=nd(l,n);iW(t,no(o))||(c=iU(e,c,o,s,i,r,a))}),s=c):(U(n.source.fromServer,"Unknown source."),o=n.source.tagged||t.serverCache.isFiltered(),s=iz(e,t,n.path,n.children,i,r,o,a))}else if(n.type===w.ACK_USER_WRITE)s=n.revert?function(e,t,n,i,r,s){let o;if(null!=iA(i,n))return t;{let a;let l=new iq(i,t,r),h=t.eventCache.getNode();if(np(n)||".priority"===no(n)){let n;if(t.serverCache.isFullyInitialized())n=iN(i,id(t));else{let e=t.serverCache.getNode();U(e instanceof nH,"serverChildren would be complete if leaf node"),n=iP(i,e)}a=e.filter.updateFullNode(h,n,s)}else{let r=no(n),c=iD(i,r,t.serverCache);null==c&&t.serverCache.isCompleteForChild(r)&&(c=h.getImmediateChild(r)),(a=null!=c?e.filter.updateChild(h,r,c,nl(n),l,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(h,r,nH.EMPTY_NODE,nl(n),l,s):h).isEmpty()&&t.serverCache.isFullyInitialized()&&(o=iN(i,id(t))).isLeafNode()&&(a=e.filter.updateFullNode(a,o,s))}return o=t.serverCache.isFullyInitialized()||null!=iA(i,ns()),ih(t,a,o,e.filter.filtersNodes())}}(e,t,n.path,i,r,a):function(e,t,n,i,r,s,o){if(null!=iA(r,n))return t;let a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(np(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return iH(e,t,n,l.getNode().getChild(n),r,s,a,o);if(!np(n))return t;{let i=new im(null);return l.getNode().forEachChild(nE,(e,t)=>{i=i.set(new nr(e),t)}),iz(e,t,n,i,r,s,a,o)}}{let h=new im(null);return i.foreach((e,t)=>{let i=nd(n,e);l.isCompleteForPath(i)&&(h=h.set(e,l.getNode().getChild(i)))}),iz(e,t,n,h,r,s,a,o)}}(e,t,n.path,n.affectedTree,i,r,a);else if(n.type===w.LISTEN_COMPLETE)s=function(e,t,n,i,r){let s=t.serverCache;return ij(e,ic(t,s.getNode(),s.isFullyInitialized()||np(n),s.isFiltered()),n,i,iF,r)}(e,t,n.path,i,a);else throw W("Unknown operation type: "+n.type);let c=a.getChanges();return function(e,t,n){let i=t.eventCache;if(i.isFullyInitialized()){let r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=iu(e);!(n.length>0)&&e.eventCache.isFullyInitialized()&&(!r||i.getNode().equals(s))&&i.getNode().getPriority().equals(s.getPriority())||n.push(n$(iu(t)))}}(t,s,c),{viewCache:s,changes:c}}(e.processor_,o,t,n,i);return r=e.processor_,U((s=a.viewCache).eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),U(s.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed"),U(a.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=a.viewCache,iK(e,a.changes,a.viewCache.eventCache.getNode(),null)}function iK(e,t,n,i){let r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){let r=[],s=[];return t.forEach(t=>{if("child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)){var n;s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))}}),ia(e,r,"child_removed",t,i,n),ia(e,r,"child_added",t,i,n),ia(e,r,"child_moved",s,i,n),ia(e,r,"child_changed",t,i,n),ia(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}class iQ{constructor(){this.views=new Map}}function iJ(e,t,n,i){let r=t.source.queryId;if(null!==r){let s=e.views.get(r);return U(null!=s,"SyncTree gave us an op for an invalid query."),iY(s,t,n,i)}{let r=[];for(let s of e.views.values())r=r.concat(iY(s,t,n,i));return r}}function iX(e){let t=[];for(let n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function iZ(e,t){let n=null;for(let i of e.views.values())n=n||function(e,t){let n=id(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!np(t)&&!n.getImmediateChild(no(t)).isEmpty())?n.getChild(t):null}(i,t);return n}function i0(e,t){if(t._queryParams.loadsAllData())return i2(e);{let n=t._queryIdentifier;return e.views.get(n)}}function i1(e){return null!=i2(e)}function i2(e){for(let t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}let i5=1;class i4{constructor(e){this.listenProvider_=e,this.syncPointTree_=new im(null),this.pendingWriteTree_={visibleWrites:i_.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function i3(e,t,n=!1){let i=function(e,t){for(let n=0;n<e.allWrites.length;n++){let i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(!function(e,t){let n=e.allWrites.findIndex(e=>e.writeId===t);U(n>=0,"removeWrite called with nonexistent writeId.");let i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){let t=e.allWrites[o];t.visible&&(o>=n&&function(e,t){if(e.snap)return n_(e.path,t);for(let n in e.children)if(e.children.hasOwnProperty(n)&&n_(nd(e.path,n),t))return!0;return!1}(t,i.path)?r=!1:n_(i.path,t.path)&&(s=!0)),o--}return!!r&&(s?(e.visibleWrites=ik(e.allWrites,iT,ns()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1):i.snap?e.visibleWrites=iv(e.visibleWrites,i.path):tj(i.children,t=>{e.visibleWrites=iv(e.visibleWrites,nd(i.path,t))}),!0)}(e.pendingWriteTree_,t))return[];{let t=new im(null);return null!=i.snap?t=t.set(ns(),!0):tj(i.children,e=>{t=t.set(new nr(e),!0)}),re(e,new ie(i.path,t,n))}}function i6(e,t,n){return re(e,new ii(n9(),t,n))}function i8(e,t,n,i,r=!1){let s=t._path,o=e.syncPointTree_.get(s),a=[];if(o&&("default"===t._queryIdentifier||null!=i0(o,t))){let l=function(e,t,n,i){let r=t._queryIdentifier,s=[],o=[],a=i1(e);if("default"===r)for(let[t,r]of e.views.entries())o=o.concat(iG(r,n,i)),iV(r)&&(e.views.delete(t),r.query._queryParams.loadsAllData()||s.push(r.query));else{let t=e.views.get(r);t&&(o=o.concat(iG(t,n,i)),iV(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!i1(e)&&s.push(new(U(c,"Reference.ts has not been loaded"),c)(t._repo,t._path)),{removed:s,events:o}}(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));let h=l.removed;if(a=l.events,!r){let n=-1!==h.findIndex(e=>e._queryParams.loadsAllData()),r=e.syncPointTree_.findOnPath(s,(e,t)=>i1(t));if(n&&!r){let t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){let n=t.fold((e,t,n)=>{if(t&&i1(t))return[i2(t)];{let e=[];return t&&(e=iX(t)),tj(n,(t,n)=>{e=e.concat(n)}),e}});for(let t=0;t<n.length;++t){let i=n[t],r=i.query,s=rt(e,i);e.listenProvider_.startListening(ra(r),rn(e,r),s.hashFn,s.onComplete)}}}r||!(h.length>0)||i||(n?e.listenProvider_.stopListening(ra(t),null):h.forEach(t=>{let n=e.queryToTagMap.get(ri(t));e.listenProvider_.stopListening(ra(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){let i=t[n];if(!i._queryParams.loadsAllData()){let t=ri(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,h)}return a}function i9(e,t,n,i=!1){let r;let s=t._path,o=null,a=!1;e.syncPointTree_.foreachOnPath(s,(e,t)=>{let n=nm(e,s);o=o||iZ(t,n),a=a||i1(t)});let l=e.syncPointTree_.get(s);l?(a=a||i1(l),o=o||iZ(l,ns())):(l=new iQ,e.syncPointTree_=e.syncPointTree_.set(s,l)),null!=o?r=!0:(r=!1,o=nH.EMPTY_NODE,e.syncPointTree_.subtree(s).foreachChild((e,t)=>{let n=iZ(t,ns());n&&(o=o.updateImmediateChild(e,n))}));let h=null!=i0(l,t);if(!h&&!t._queryParams.loadsAllData()){let n=ri(t);U(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");let i=i5++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let c=function(e,t,n,i,r,s){let o=function(e,t,n,i,r){let s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=iN(n,r?i:null),s=!1;return e?s=!0:(e=i instanceof nH?iP(n,i):nH.EMPTY_NODE,s=!1),new i$(t,il(new is(e,s,!1),new is(i,r,!1)))}return o}(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),!function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){let n=e.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(nO,(e,t)=>{i.push(nV(e,t))}),n.isFullyInitialized()&&i.push(n$(n.getNode())),iK(e,i,n.getNode(),t)}(o,n)}(l,t,n,iL(s,e.pendingWriteTree_),o,r);if(!h&&!a&&!i){let n=i0(l,t);c=c.concat(function(e,t,n){let i=t._path,r=rn(e,t),s=rt(e,n),o=e.listenProvider_.startListening(ra(t),r,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(i);if(r)U(!i1(a.value),"If we're adding a query, it shouldn't be shadowed");else{let t=a.fold((e,t,n)=>{if(!np(e)&&t&&i1(t))return[i2(t).query];{let e=[];return t&&(e=e.concat(iX(t).map(e=>e.query))),tj(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){let i=t[n];e.listenProvider_.stopListening(ra(i),rn(e,i))}}return o}(e,t,n))}return c}function i7(e,t,n){let i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,(e,n)=>{let i=iZ(n,nm(e,t));if(i)return i});return ix(i,t,r,n,!0)}function re(e,t){var n;return function e(t,n,i,r){if(np(t.path))return function e(t,n,i,r){let s=n.get(ns());null==i&&null!=s&&(i=iZ(s,ns()));let o=[];return n.children.inorderTraversal((n,s)=>{let a=i?i.getImmediateChild(n):null,l=iO(r,n),h=t.operationForChild(n);h&&(o=o.concat(e(h,s,a,l)))}),s&&(o=o.concat(iJ(s,t,r,i))),o}(t,n,i,r);{let s=n.get(ns());null==i&&null!=s&&(i=iZ(s,ns()));let o=[],a=no(t.path),l=t.operationForChild(a),h=n.children.get(a);if(h&&l){let t=i?i.getImmediateChild(a):null,n=iO(r,a);o=o.concat(e(l,h,t,n))}return s&&(o=o.concat(iJ(s,t,r,i))),o}}(t,e.syncPointTree_,null,(n=e.pendingWriteTree_,iL(ns(),n)))}function rt(e,t){let n=t.query,i=rn(e,n);return{hashFn:()=>(t.viewCache_.serverCache.getNode()||nH.EMPTY_NODE).hash(),onComplete:t=>{if("ok"===t){var r;return i?function(e,t,n){let i=rr(e,n);if(!i)return[];{let n=rs(i),r=n.path,s=n.queryId,o=nm(r,t);return ro(e,r,new it(n7(s),o))}}(e,n._path,i):(r=n._path,re(e,new it(n9(),r)))}{let i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");let i=Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return i8(e,n,null,i)}}}}function rn(e,t){let n=ri(t);return e.queryToTagMap.get(n)}function ri(e){return e._path.toString()+"$"+e._queryIdentifier}function rr(e,t){return e.tagToQueryMap.get(t)}function rs(e){let t=e.indexOf("$");return U(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new nr(e.substr(0,t))}}function ro(e,t,n){let i=e.syncPointTree_.get(t);return U(i,"Missing sync point for query tag that we're tracking"),iJ(i,n,iL(t,e.pendingWriteTree_),null)}function ra(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(U(u,"Reference.ts has not been loaded"),u)(e._repo,e._path):e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e){this.node_=e}getImmediateChild(e){return new rl(this.node_.getImmediateChild(e))}node(){return this.node_}}class rh{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){let t=nd(this.path_,e);return new rh(this.syncTree_,t)}node(){return i7(this.syncTree_,this.path_)}}const rc=function(e,t,n){return e&&"object"==typeof e?(U(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"])?ru(e[".sv"],t,n):"object"==typeof e[".sv"]?rd(e[".sv"],t):void U(!1,"Unexpected server value: "+JSON.stringify(e,null,2)):e},ru=function(e,t,n){if("timestamp"===e)return n.timestamp;U(!1,"Unexpected server value: "+e)},rd=function(e,t,n){e.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(e,null,2));let i=e.increment;"number"!=typeof i&&U(!1,"Unexpected increment value: "+i);let r=t.node();if(U(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;let s=r.getValue();return"number"!=typeof s?i:s+i};function rp(e,t,n){let i;let r=rc(e.getPriority().val(),t.getImmediateChild(".priority"),n);if(!e.isLeafNode())return i=e,r!==e.getPriority().val()&&(i=i.updatePriority(new nD(r))),e.forEachChild(nO,(e,r)=>{let s=rp(r,t.getImmediateChild(e),n);s!==r&&(i=i.updateImmediateChild(e,s))}),i;{let i=rc(e.getValue(),t,n);return i!==e.getValue()||r!==e.getPriority().val()?new nD(i,nW(r)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function rf(e,t){let n=t instanceof nr?t:new nr(t),i=e,r=no(n);for(;null!==r;){let e=ef(i.node.children,r)||{children:{},childCount:0};i=new rm(r,i,e),r=no(n=nl(n))}return i}function r_(e){return e.node.value}function rg(e,t){e.node.value=t,function e(t){null!==t.parent&&function(t,n,i){let r=void 0===r_(i)&&!ry(i),s=em(t.node.children,n);r&&s?(delete t.node.children[n],t.node.childCount--,e(t)):r||s||(t.node.children[n]=i.node,t.node.childCount++,e(t))}(t.parent,t.name,t)}(e)}function ry(e){return e.node.childCount>0}function rv(e,t){tj(e.node.children,(n,i)=>{t(new rm(n,e,i))})}function rw(e){return new nr(null===e.parent?e.name:rw(e.parent)+"/"+e.name)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=/[\[\].#$\/\u0000-\u001F\u007F]/,rb=/[\[\].#$\u0000-\u001F\u007F]/,rS=function(e){return"string"==typeof e&&0!==e.length&&!rC.test(e)},rI=function(e){return"string"==typeof e&&0!==e.length&&!rb.test(e)},rE=function(e,t,n){let i=n instanceof nr?new ng(n,e):n;if(void 0===t)throw Error(e+"contains undefined "+nv(i));if("function"==typeof t)throw Error(e+"contains a function "+nv(i)+" with contents = "+t.toString());if(tP(t))throw Error(e+"contains "+t.toString()+" "+nv(i));if("string"==typeof t&&t.length>10485760/3&&eS(t)>10485760)throw Error(e+"contains a string greater than 10485760 utf8 bytes "+nv(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(tj(t,(t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!rS(t)))throw Error(e+" contains an invalid key ("+t+") "+nv(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(t),i.byteLength_+=eS(t),ny(i),rE(e,s,i),function(e){let t=e.parts_.pop();e.byteLength_-=eS(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)}),n&&r)throw Error(e+' contains ".value" child '+nv(i)+" in addition to actual children.")}},rT=function(e,t,n,i){if((!i||void 0!==n)&&!rI(n))throw Error(eC(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},rk=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),rT(e,t,n,i)},rx=function(e,t){var n;let i=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!rS(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==i.length&&((n=i)&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),!rI(n)))throw Error(eC(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function rP(e,t){let n=null;for(let i=0;i<t.length;i++){let r=t[i],s=r.getPath();null===n||nf(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function rR(e,t,n){rP(e,n),rD(e,e=>nf(e,t))}function rA(e,t,n){rP(e,n),rD(e,e=>n_(e,t)||n_(t,e))}function rD(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){let r=e.eventLists_[i];r&&(t(r.path)?(function(e){for(let t=0;t<e.events.length;t++){let n=e.events[t];if(null!==n){e.events[t]=null;let i=n.getEventRunner();tC&&tI("event: "+n.toString()),tB(i)}}}(e.eventLists_[i]),e.eventLists_[i]=null):n=!1)}n&&(e.eventLists_=[]),e.recursionDepth_--}class rO{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new rN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=n5(),this.transactionQueueTree_=new rm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rL(e){var t;return(t=t={timestamp:function(e){let t=e.infoData_.getNode(new nr(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}(e)}).timestamp=t.timestamp||new Date().getTime(),t}function rM(e,t,n,i,r){e.dataUpdateCount++;let s=new nr(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r){if(i){let t=eg(n,e=>nW(e));o=function(e,t,n,i){let r=rr(e,i);if(!r)return[];{let i=rs(r),s=i.path,o=i.queryId,a=nm(s,t),l=im.fromObject(n);return ro(e,s,new ir(n7(o),a,l))}}(e.serverSyncTree_,s,t,r)}else{let t=nW(n);o=function(e,t,n,i){let r=rr(e,i);if(null==r)return[];{let i=rs(r),s=i.path,o=i.queryId,a=nm(s,t);return ro(e,s,new ii(n7(o),a,n))}}(e.serverSyncTree_,s,t,r)}}else if(i){let t=eg(n,e=>nW(e));o=function(e,t,n){let i=im.fromObject(n);return re(e,new ir(n9(),t,i))}(e.serverSyncTree_,s,t)}else{let t=nW(n);o=i6(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=rW(e,s)),rA(e.eventQueue_,a,o)}function rF(e,t){rq(e,"connected",t),!1===t&&function(e){rH(e,"onDisconnectEvents");let t=rL(e),n=n5();n4(e.onDisconnect_,ns(),(i,r)=>{let s=rp(r,new rh(e.serverSyncTree_,i),t);!function e(t,n,i){if(np(n))t.value=i,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(n,i);else{let r=no(n);t.children.has(r)||t.children.set(r,n5()),e(t.children.get(r),n=nl(n),i)}}(n,i,s)});let i=[];n4(n,ns(),(t,n)=>{i=i.concat(i6(e.serverSyncTree_,t,n));let r=function(e,t){let n=rw(rB(e,t)),i=rf(e.transactionQueueTree_,t);return function(e,t,n){let i=e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,t=>{rV(e,t)}),rV(e,i),function e(t,n,i,r){i&&!r&&n(t),rv(t,t=>{e(t,n,!0,r)}),i&&r&&n(t)}(i,t=>{rV(e,t)}),n}(e,t);rW(e,r)}),e.onDisconnect_=n5(),rA(e.eventQueue_,ns(),i)}(e)}function rq(e,t,n){let i=new nr("/.info/"+t),r=nW(n);e.infoData_.updateSnapshot(i,r);let s=i6(e.infoSyncTree_,i,r);rA(e.eventQueue_,i,s)}function rj(e,t,n){let i;i=".info"===no(t._path)?i8(e.infoSyncTree_,t,n):i8(e.serverSyncTree_,t,n),rR(e.eventQueue_,t._path,i)}function rH(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),tI(n,...t)}function rU(e,t,n){return i7(e.serverSyncTree_,t,n)||nH.EMPTY_NODE}function rW(e,t){let n=rB(e,t),i=rw(n),r=rz(e,n);return function(e,t,n){if(0===t.length)return;let i=[],r=[],s=t.filter(e=>0===e.status).map(e=>e.currentWriteId);for(let o=0;o<t.length;o++){let a=t[o],l=nm(n,a.path),h=!1,c;if(U(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===a.status)h=!0,c=a.abortReason,r=r.concat(i3(e.serverSyncTree_,a.currentWriteId,!0));else if(0===a.status){if(a.retryCount>=25)h=!0,c="maxretry",r=r.concat(i3(e.serverSyncTree_,a.currentWriteId,!0));else{let n=rU(e,a.path,s);a.currentInputSnapshot=n;let i=t[o].update(n.val());if(void 0!==i){rE("transaction failed: Data returned ",i,a.path);let t=nW(i);"object"==typeof i&&null!=i&&em(i,".priority")||(t=t.updatePriority(n.getPriority()));let o=a.currentWriteId,l=rL(e),h=rp(t,new rl(n),l);a.currentOutputSnapshotRaw=t,a.currentOutputSnapshotResolved=h,a.currentWriteId=e.nextWriteId_++,s.splice(s.indexOf(o),1),r=(r=r.concat(function(e,t,n,i,r){var s,o;return(s=e.pendingWriteTree_,o=r,U(i>s.lastWriteId,"Stacking an older write on top of newer ones"),void 0===o&&(o=!0),s.allWrites.push({path:t,snap:n,writeId:i,visible:o}),o&&(s.visibleWrites=ig(s.visibleWrites,t,n)),s.lastWriteId=i,r)?re(e,new ii(n8(),t,n)):[]}(e.serverSyncTree_,a.path,h,a.currentWriteId,a.applyLocally))).concat(i3(e.serverSyncTree_,o,!0))}else h=!0,c="nodata",r=r.concat(i3(e.serverSyncTree_,a.currentWriteId,!0))}}rA(e.eventQueue_,n,r),r=[],h&&(t[o].status=2,setTimeout(t[o].unwatcher,Math.floor(0)),t[o].onComplete&&("nodata"===c?i.push(()=>t[o].onComplete(null,!1,t[o].currentInputSnapshot)):i.push(()=>t[o].onComplete(Error(c),!1,null))))}r$(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)tB(i[e]);(function e(t,n=t.transactionQueueTree_){if(n||r$(t,n),r_(n)){let i=rz(t,n);U(i.length>0,"Sending zero length transaction queue"),i.every(e=>0===e.status)&&function(t,n,i){let r=rU(t,n,i.map(e=>e.currentWriteId)),s=r,o=r.hash();for(let e=0;e<i.length;e++){let t=i[e];U(0===t.status,"tryToSendTransactionQueue_: items in queue should all be run."),t.status=1,t.retryCount++;let r=nm(n,t.path);s=s.updateChild(r,t.currentOutputSnapshotRaw)}let a=s.val(!0);t.server_.put(n.toString(),a,r=>{rH(t,"transaction put response",{path:n.toString(),status:r});let s=[];if("ok"===r){let r=[];for(let e=0;e<i.length;e++)i[e].status=2,s=s.concat(i3(t.serverSyncTree_,i[e].currentWriteId)),i[e].onComplete&&r.push(()=>i[e].onComplete(null,!0,i[e].currentOutputSnapshotResolved)),i[e].unwatcher();r$(t,rf(t.transactionQueueTree_,n)),e(t,t.transactionQueueTree_),rA(t.eventQueue_,n,s);for(let e=0;e<r.length;e++)tB(r[e])}else{if("datastale"===r)for(let e=0;e<i.length;e++)3===i[e].status?i[e].status=4:i[e].status=0;else{tx("transaction at "+n.toString()+" failed: "+r);for(let e=0;e<i.length;e++)i[e].status=4,i[e].abortReason=r}rW(t,n)}},o)}(t,rw(n),i)}else ry(n)&&rv(n,n=>{e(t,n)})})(e,e.transactionQueueTree_)}(e,r,i),i}function rB(e,t){let n;let i=e.transactionQueueTree_;for(n=no(t);null!==n&&void 0===r_(i);)i=rf(i,n),n=no(t=nl(t));return i}function rz(e,t){let n=[];return function e(t,n,i){let r=r_(n);if(r)for(let e=0;e<r.length;e++)i.push(r[e]);rv(n,n=>{e(t,n,i)})}(e,t,n),n.sort((e,t)=>e.order-t.order),n}function r$(e,t){let n=r_(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,rg(t,n.length>0?n:void 0)}rv(t,t=>{r$(e,t)})}function rV(e,t){let n=r_(t);if(n){let i=[],r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(U(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(U(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(i3(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,Error("set"),!1,null))));-1===s?rg(t,void 0):n.length=s+1,rA(e.eventQueue_,rw(t),r);for(let e=0;e<i.length;e++)tB(i[e])}}const rG=function(e,t){let n=rY(e),i=n.namespace;"firebase.com"===n.domain&&tk(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||tk("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||tN();let r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new tJ(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new nr(n.pathString)}},rY=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"==typeof e){let h=e.indexOf("//");h>=0&&(a=e.substring(0,h-1),e=e.substring(h+2));let c=e.indexOf("/");-1===c&&(c=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(c,u)),c<u&&(r=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="",n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(c,u)));let d=function(e){let t={};for(let n of("?"===e.charAt(0)&&(e=e.substring(1)),e.split("&"))){if(0===n.length)continue;let i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):tx(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));(h=t.indexOf(":"))>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(h+1),10)):h=t.length;let p=t.slice(0,h);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{let e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rK{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){let e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ec(this.snapshot.exportVal())}}class rQ{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rJ{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return U(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rX{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return np(this._path)?null:nh(this._path)}get ref(){return new rZ(this._repo,this._path)}get _queryIdentifier(){let e=tF(n0(this._queryParams));return"{}"===e?"default":e}get _queryObject(){return n0(this._queryParams)}isEqual(e){if(!((e=eI(e))instanceof rX))return!1;let t=this._repo===e._repo,n=nf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class rZ extends rX{constructor(e,t){super(e,t,new nX,!1)}get parent(){let e=nu(this._path);return null===e?null:new rZ(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class r0{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){let t=new nr(e),n=r2(this.ref,e);return new r0(this._node.getChild(t),n,nO)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return!this._node.isLeafNode()&&!!this._node.forEachChild(this._index,(t,n)=>e(new r0(n,r2(this.ref,t),nO)))}hasChild(e){let t=new nr(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function r1(e,t){return(e=eI(e))._checkNotDeleted("ref"),void 0!==t?r2(e._root,t):e._root}function r2(e,t){return null===no((e=eI(e))._path)?rk("child","path",t,!1):rT("child","path",t,!1),new rZ(e._repo,nd(e._path,t))}class r5{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){let n=t._queryParams.getIndex();return new rK("value",this,new r0(e.snapshotNode,new rZ(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new rQ(this,e,t):null}matches(e){return e instanceof r5&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class r4{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new rQ(this,e,t):null}createEvent(e,t){U(null!=e.childName,"Child events should have a childName.");let n=r2(new rZ(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new rK(e.type,this,new r0(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof r4&&this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext))}hasAnyCallback(){return!!this.callbackContext}}function r3(e,t,n,i){return function(e,t,n,i,r){var s;let o,a;if("object"==typeof i&&(o=void 0,r=i),"function"==typeof i&&(o=i),r&&r.onlyOnce){let t=n,i=(n,i)=>{rj(e._repo,e,h),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}let l=new rJ(n,o||void 0),h="value"===t?new r5(l):new r4(t,l);return s=e._repo,a=".info"===no(e._path)?i9(s.infoSyncTree_,e,h):i9(s.serverSyncTree_,e,h),rR(s.eventQueue_,e._path,a),()=>rj(e._repo,e,h)}(e,"value",t,n,i)}U(!c,"__referenceConstructor has already been defined"),c=rZ,U(!u,"__referenceConstructor has already been defined"),u=rZ;const r6={};class r8{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(function(e,t,n){if(e.stats_=t2(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new n1(e.repoInfo_,(t,n,i,r)=>{rM(e,t,n,i,r)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>rF(e,!0),0);else{if(null!=n){if("object"!=typeof n)throw Error("Only objects are supported for option databaseAuthVariableOverride");try{ec(n)}catch(e){throw Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new nC(e.repoInfo_,t,(t,n,i,r)=>{rM(e,t,n,i,r)},t=>{rF(e,t)},t=>{tj(t,(t,n)=>{rq(e,t,n)})},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=function(e,t){let n=e.toString();return t1[n]||(t1[n]=t()),t1[n]}(e.repoInfo_,()=>new n6(e.stats_,e.server_)),e.infoData_=new n2,e.infoSyncTree_=new i4({startListening:(t,n,i,r)=>{let s=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=i6(e.infoSyncTree_,t._path,o),setTimeout(()=>{r("ok")},0)),s},stopListening:()=>{}}),rq(e,"connected",!1),e.serverSyncTree_=new i4({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,(n,i)=>{let s=r(n,i);rA(e.eventQueue_,t._path,s)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new rZ(this._repo,ns())),this._rootInternal}_delete(){return null!==this._rootInternal&&(function(e,t){let n=r6[t];n&&n[e.key]===e||tk(`Database ${t}(${e.repoInfo_}) has already been deleted.`),e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt"),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&tk("Cannot call "+e+" on a deleted database.")}}function r9(e=function(e=eX){let t=e0.get(e);if(!t&&e===eX&&en())return e8();if(!t)throw e3.create("no-app",{appName:e});return t}(),t){let n=(function(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)})(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){let e=et("database");e&&function(e,t,n,i={}){var r;let s;(e=eI(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&tk("Cannot call useEmulator() after instance has already been initialized.");let o=e._repoInternal;o.repoInfo_.nodeAdmin?(i.mockUserToken&&tk('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new tG(tG.OWNER)):i.mockUserToken&&(s=new tG("string"==typeof i.mockUserToken?i.mockUserToken:/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Y(JSON.stringify({alg:"none",type:"JWT"})),Y(JSON.stringify(s)),""].join(".")}(i.mockUserToken,e.app.options.projectId))),r=s,o.repoInfo_=new tJ(`${t}:${n}`,!1,o.repoInfo_.namespace,o.repoInfo_.webSocketOnly,o.repoInfo_.nodeAdmin,o.repoInfo_.persistenceKey,o.repoInfo_.includeNamespaceInQueryParams,!0),r&&(o.authTokenProvider_=r)}(n,...e)}return n}nC.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},nC.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},tu="10.13.1",e4(new eE("database",(e,{instanceIdentifier:t})=>(function(e,t,n,i,r){var s,o;let a,l,h,c,u=i||e.options.databaseURL;void 0===u&&(e.options.projectId||tk("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),tI("Using default host for project ",e.options.projectId),u=`${e.options.projectId}-default-rtdb.firebaseio.com`);let d=rG(u,void 0),p=d.repoInfo;void 0!==x&&x.env&&(h=x.env.FIREBASE_DATABASE_EMULATOR_HOST),h?(c=!0,p=(d=rG(u=`http://${h}?ns=${p.namespace}`,void 0)).repoInfo):c=!d.repoInfo.secure;let m=new tV(e.name,e.options,t);return rx("Invalid Firebase Database URL",d),np(d.path)||tk("Database URL must point to the root of a Firebase Database (not including a child path)."),new r8((s=p,o=new t$(e.name,n),(a=r6[e.name])||(a={},r6[e.name]=a),(l=a[s.toURLString()])&&tk("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new rO(s,!1,m,o),a[s.toURLString()]=l,l),e)})(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t),"PUBLIC").setMultipleInstances(!0)),e9(th,tc,void 0),e9(th,tc,"esm2017");const r7="https://api-ppt-online.onrender.com",se=e8({apiKey:"AIzaSyA-o1L6Oc_oB3ZGxsiWXMpYf-U9EEu-c14",databaseURL:"https://desafio-nivel2-final-default-rtdb.firebaseio.com",projectId:"desafio-nivel2-final",authDomain:"desafio-nivel2-final.firebaseapp.com"}),st={data:{gameState:{currentPage:null,name:"mock",play:null,usrId:"",online:!1,ready:!1,owner:!0,publicId:"",privateId:"",opponentName:"",opponentPlay:null,lastGameOwnerResult:null,lastGameGuestResult:null},gameReady:!1,playersReady:!1,scoreboard:{owner:0,guest:0}},init(){let e=localStorage.getItem("localState");null!=e?(this.data=JSON.parse(e),so(this.data.gameState.currentPage)):null==e&&(localStorage.setItem("localState",JSON.stringify(this.data)),so(this.data.gameState.currentPage))},async saveScoreboard(){let e=await this.getState();await fetch(`${r7}/history/${e.gameState.publicId}`)},getState(){return this.data},async setSessionStatus(e){let{gameState:t}=await this.getState();if(!0===e||!1===e)return t.online=e},async setName(e){let{gameState:t}=await this.getState();t.name=e},async signIn(){let e=await this.getState();await this.setSessionStatus(!0);let t=await fetch(`${r7}/auth`,{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify(e)}),n=await t.json(),i=await n.usrId;await this.setUserId(i)},async setUserId(e){let{gameState:t}=await this.getState();t.usrId=e},async askNewRoom(){let{gameState:e}=await this.getState(),t=await fetch(`${r7}/rooms`,{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({gameState:e})}),n=await t.json(),{roomId:i,privateRoomId:r}=await n;await this.setPublicId(i),await this.setPrivateId(r)},async setPublicId(e){let{gameState:t}=await this.getState();t.publicId=e},async setPrivateId(e){let{gameState:t}=await this.getState();t.privateId=e},async getExistingRoomId(e){let{gameState:t}=await this.getState();await this.setPublicId(e);let n=await fetch(`${r7}/room/${e}`,{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({gameState:t})}),i=await n.json(),r=await i.privateId;await this.setPrivateId(r)},async joinRoom(){let e=await this.getState(),t=e.gameState;e.gameState.owner=!1,e.gameReady=!0,fetch(`${r7}/room/${e.gameState.publicId}/join`,{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({gameState:t})}),await this.checkForOpponent()},async checkForOpponent(){let{gameState:e}=await this.getState();r3(r1(r9(se),`rooms/${await e.privateId}`),t=>{let n=t.val();2===Object.keys(n).length&&(this.setGameReadyStatus(!0),e.name===n.owner.name&&(e.opponentName=n.guest.name),e.name===n.guest.name&&(e.opponentName=n.owner.name))})},async setGameReadyStatus(e){let t=await this.getState();if(!0===e){if(t.gameReady=e,"/waiting-for-opponent"!==location.pathname)return;"/waiting-for-opponent"===location.pathname&&so("/instructions")}if(!1===e)return t.gameReady=e},async setPlayerReadyStatus(e){let{gameState:t}=await this.getState();t.ready=e,fetch(`${r7}/room/${t.publicId}/play`,{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({gameState:t})})},async checkIfBothAreReady(){let{gameState:e}=await this.getState();r3(r1(r9(se),`rooms/${await e.privateId}`),t=>{let n=t.val();if(!1!=n.owner.ready||!1!=n.guest.ready){if(!1==n.owner.ready&&!0==n.guest.ready)return this.waitingForOpponent(n.owner.name,!1);if(!0==n.owner.ready&&!1==n.guest.ready)return this.waitingForOpponent(n.guest.name,!1);if(!0==n.owner.ready&&!0==n.guest.ready)return this.waitingForOpponent("ready",!0);2===Object.keys(n).length&&(e.name===n.owner.name&&(e.opponentName=n.guest.name),e.name===n.guest.name&&(e.opponentName=n.owner.name))}})},async waitingForOpponent(e,t){let n=await this.getState();if(!0===t){if(n.playersReady=t,"/wfro"!==location.pathname)return;"/wfro"===location.pathname&&so("/game")}else!1===t&&(n.gameState.opponentName=e)},async setGame(e){let{gameState:t}=await this.getState();t.play=e,fetch(`${r7}/room/${t.publicId}/play`,{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({gameState:t})})},async getMovesFromRtdb(){let{gameState:e}=await this.getState();r3(r1(r9(se),`rooms/${await e.privateId}`),e=>{let t=e.val();if(null!=t.owner.play&&null!=t.guest.play)return this.setMoves(t.owner.play,t.guest.play)})},async setMoves(e,t){let{gameState:n}=await this.getState();return n.owner?n.opponentPlay=t:!1==n.owner?n.opponentPlay=e:void 0},whoWins(e,t){let n="perdiste";for(let i of[{ownerPlay:"piedra",guestPlay:"tijera"},{ownerPlay:"tijera",guestPlay:"papel"},{ownerPlay:"papel",guestPlay:"piedra"}])i.ownerPlay==e&&i.guestPlay==t?n="ganaste":e==t&&(n="empate");let i="";"perdiste"==n?i="ganaste":"ganaste"==n?i="perdiste":"empate"==n&&(i="empate"),this.setWinner(n,i)},setWinner(e,t){let n=this.getState();if("empate"==e){n.gameState.lastGameOwnerResult=e,n.gameState.lastGameGuestResult=t;return}return"ganaste"==e?(n.scoreboard.owner++,n.gameState.lastGameOwnerResult=e,n.gameState.lastGameGuestResult=t,this.saveHistory(n.scoreboard)):"perdiste"==e?(n.scoreboard.guest++,n.gameState.lastGameOwnerResult=e,n.gameState.lastGameGuestResult=t,this.saveHistory(n.scoreboard)):void 0},saveHistory(e){let t=this.getState();t.scoreboard=e,localStorage.setItem("localState",JSON.stringify(t)),fetch(`${r7}/history/save/${t.gameState.publicId}`,{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify(t.scoreboard)})}};async function sn(e){let t=document.createElement("div");t.setAttribute("class","container");let n=document.createElement("style");n.setAttribute("class","style"),n.innerHTML=`
    .container{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 30px;
    }
    .counter-off{
      color: rgba(255, 255, 255, 0.541);
      margin: 0px;
      padding-left: 0px;
      font-size: 4.5rem;
    }
  
    .counter {
      margin: 0px;
      padding-left: 40px;
      color: #fff;
      font-size: 4.5rem;
      color:#909090;
    }
    `;let i=document.createElement("h2");i.setAttribute("class","counter-off"),i.innerText="3";let r=document.createElement("h2");r.setAttribute("class","counter-off"),r.innerText="2";let s=document.createElement("h2");s.setAttribute("class","counter-off"),s.innerText="1",t.appendChild(i),t.appendChild(r),t.appendChild(s);let o=document.createElement("custom-hands");e.appendChild(t),t.appendChild(o),e.appendChild(n);let{gameState:a}=await st.getState();o.addEventListener("clicked",async e=>{let t=e.detail.play;await st.setGame(t),await st.getMovesFromRtdb()}),setTimeout(async()=>{if(null==a.play&&null==a.play){let e=["piedra","papel","tijera"][Math.floor(3*Math.random())];await st.setGame(e),await st.getMovesFromRtdb()}},4e3),setTimeout(()=>{"/game"==location.pathname&&"/game"==location.pathname&&so("/show-moves")},5e3),function(e){for(let t of e)setTimeout(()=>{"3"==t.innerText&&t.setAttribute("class","counter")},1e3),setTimeout(()=>{"3"==t.innerText&&t.setAttribute("class","counter-off"),"2"==t.innerText&&t.setAttribute("class","counter")},2e3),setTimeout(()=>{"2"==t.innerText&&t.setAttribute("class","counter-off"),"1"==t.innerText&&t.setAttribute("class","counter")},3e3),setTimeout(()=>{"1"==t.innerText&&t.setAttribute("class","counter-off")},4e3)}(document.querySelectorAll(".counter-off"))}async function si(e){var t,n;let i=document.createElement("div");i.setAttribute("class","container");let r=document.createElement("style");r.setAttribute("class","style"),r.innerHTML=`
  .container {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
  .empate, .ganaste, .perdiste{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 4rem;
    margin-bottom: 40px;
  }
  @media (max-width: 767px) {
    .empate, .ganaste, .perdiste{
        font-size: 2rem;
      }
  }
  .empate > h1 {
    margin-top: 10px;
    color: #5A5A5A;
    
  }
  
  .ganaste > h1 {
    margin-top: 10px;
    color: #5A5A5A;

  }
  
  .perdiste > h1 {
    margin-top: 10px;
    color: #5A5A5A;
}

  .score-container {
      width: 50vw;
      width: 450px;
      height: 280px;
      background-color: transparent;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      border: 0.2rem solid #5A5A5A;
      border-radius: 2rem;
  }
  @media(max-width: 450px){
    .score-container{
      max-width: 350px;
    }
  }
  .score-container > h3{
    align-self: center;
  }
  .score-container > h3, h4{
    margin: 20px;
    color: #5A5A5A;
    font-size: 2rem;

  }
  .score-container > h4{
      margin-right: 5%;
  }


  custom-button {
    margin-top: 15%;
  }
  `,await st.setPlayerReadyStatus(!1);let s=st.getState(),o=document.createElement("div");if(!0===s.gameState.owner){let e=JSON.parse(localStorage.getItem("localState"));o.innerHTML=`
      <h1>${e.gameState.lastGameOwnerResult}!</h1>
      <div class="score-container">
      <h3>Score</h3>
      <h4>${e.gameState.name}   ${e.scoreboard.owner}</h4>
      <h4>${e.gameState.opponentName}   ${e.scoreboard.guest}</h4>
      </div>
      `,"ganaste"==(t=e.gameState.lastGameOwnerResult)?o.setAttribute("class","ganaste"):"perdiste"==t?o.setAttribute("class","perdiste"):"empate"==t&&o.setAttribute("class","empate")}if(!1===s.gameState.owner){let e=JSON.parse(localStorage.getItem("localState"));o.innerHTML=`
        <h1>${e.gameState.lastGameGuestResult}!</h1>
        <div class="score-container">
        <h3>Score</h3>
        <h4>${e.gameState.name}   ${e.scoreboard.guest}</h4>
        <h4>${e.gameState.opponentName}   ${e.scoreboard.owner}</h4>
        </div>
        `,"ganaste"==(n=e.gameState.lastGameGuestResult)?o.setAttribute("class","ganaste"):"perdiste"==n?o.setAttribute("class","perdiste"):"empate"==n&&o.setAttribute("class","empate")}let a=e.querySelectorAll(".container"),l=e.querySelectorAll(".style");window.addEventListener("load",()=>{a.length>0&&(a[0].remove(),l[0].remove())});let h=document.createElement("custom-button");h.setAttribute("class","result"),o.appendChild(h),st.saveScoreboard(),h.addEventListener("click",async()=>{await st.setPlayerReadyStatus(!0),so("/wfro")}),e.appendChild(r),i.appendChild(o),e.appendChild(i)}async function sr(e){let t=document.createElement("div");t.setAttribute("class","container");let n=document.createElement("style");n.setAttribute("class","style"),n.innerHTML=`
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main-title {
    padding-left: 40px;
    color: #5A5A5A;
  }  

  .main-title {

    font-size: 2.5rem;

}

  `;let{gameState:i}=await st.getState();t.innerHTML=`
  <h2 class="main-title">Invita a tu oponente con este codigo</h2>
  <h1 class="main-title">${await i.publicId}</h1>
  <h2 class="main-title">Good luck, have fun!</h2>
  `,await st.checkForOpponent(),e.appendChild(t),e.appendChild(n);let r=e.querySelectorAll(".container"),s=e.querySelectorAll(".style");window.addEventListener("load",()=>{r.length>0&&(r[0].remove(),s[0].remove())})}async function ss(e){let t=document.createElement("div");t.setAttribute("class","container");let n=document.createElement("style");n.setAttribute("class","style"),n.innerHTML=`
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main-title {
    padding-left: 40px;
    color: #5A5A5A;
  }  

  .main-title {

    font-size: 2.5rem;

}
  `;let{gameState:i}=await st.getState();t.innerHTML=`
  <h2 class="main-title">Esperando a que </h2>
  <h1 class="main-title">${await i.opponentName}</h1>
  <h2 class="main-title">presione <br> Play!...</h2>
  `,await st.checkIfBothAreReady(),e.appendChild(t),e.appendChild(n)}async function so(e){let t=document.querySelector(".root");history.pushState({},"",e),function(e,t){let n=[{path:/\/home/,handler:e=>{!function(e){let t=document.createElement("div");t.setAttribute("class","container");let n=document.createElement("style");n.setAttribute("class","style"),n.innerHTML=`
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main-title {
    padding-left: 40px;
    color: #5A5A5A;
    text-align: center;
  }  

  .main-title {

    font-size: 4rem;

}
  .v2{
    font-size: 2rem;
    margin: 0px;
  }

  `,t.innerHTML=`
  <h1 class="main-title">\xa1Piedra, Papel o Tijera! 
   </h1>
  `,e.appendChild(t);let i=document.createElement("custom-button");i.setAttribute("class","new-game-home");let r=document.createElement("custom-button");r.setAttribute("class","join-game"),t.appendChild(i),t.appendChild(r),i.addEventListener("click",()=>{so("/new-game")}),r.addEventListener("click",()=>{so("/join-game")}),e.appendChild(n)}(e)}},{path:/\/new-game/,handler:e=>{!function(e){let t=document.createElement("div");t.setAttribute("class","container");let n=document.createElement("style");n.setAttribute("class","style"),n.innerHTML=`
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main-title {
    padding-left: 40px;
    color: #5A5A5A;
  }  

  .main-title {

    font-size: 3.2rem;
    ;
}

.form{
  display: flex;
  flex-direction: column;
  align-items: center;
  }
  .bttn{
    background: gray;
    border: 1px solid #5A5A5A;
  }
  .input{
    text-align: center;
    margin-top: 10px;
    margin-bottom: 15px;
    font-size: 40px;
    width: 311px;
    height: 87px;
    background: transparent;
    color: gray;
    border: 0.2rem solid #5A5A5A;
    border-radius: 2rem;

  }
  `,t.innerHTML=`
    <h1 class="main-title">Piedra ,<br> Papel o <br> Tijera</h1>
    <form class="form" for="formulario">
      <input type="text" class="input" id="formulario" placeholder="ingresa tu nombre">
      <button class="bttn">
      <custom-button class="new-game"></custom-button>
      </button>
    </form>
  `,e.appendChild(t);let i=document.querySelector("form");i.addEventListener("submit",async function(t){t.preventDefault();let n=document.querySelector(".input");if(""==n.value)return window.alert("Please enter your name");i.removeChild(i.querySelector(".bttn")),e.appendChild(document.createElement("custom-button")),st.setName(n.value.toString()),await st.signIn(),await st.askNewRoom(),e.querySelector("custom-button").remove(),so("/waiting-for-opponent")}),e.appendChild(n)}(e)}},{path:/\/join-game/,handler:e=>{!function(e){let t=document.createElement("div");t.setAttribute("class","container");let n=document.createElement("style");n.setAttribute("class","style"),n.innerHTML=`
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main-title {
    padding-left: 40px;
    color: #5A5A5A;
  }  

  .main-title {

    font-size: 4rem;

}
  .form{
  display: flex;
  flex-direction: column;
  align-items: center;
  }
  .bttn{
    background: gray;
    border: 1px solid #5A5A5A;
  }
  .input, .name-input{
    text-align: center;
    margin-top: 10px;
    margin-bottom: 15px;
    font-size: 40px;
    width: 311px;
    height: 87px;
    background: gray;
    color: #5A5A5A;
    animation: flicker 8s infinite alternate;
    border: 0.2rem solid #fff;
    border-radius: 2rem;
  }
`,t.innerHTML=`
    <h1 class="main-title">Piedra ,<br> Papel o <br> Tijera</h1>
    <form class="form" for="formulario">
      <input type="text" class="input" id="formulario" placeholder="ingresa tu nombre">
      <input type="number" class="name-input" id="formulario" placeholder="room id">
      <button class="bttn">
      <custom-button class="join-game"></custom-button>
      </button>
    </form>
  `,e.appendChild(t);let i=document.querySelector("form");i?.addEventListener("submit",async t=>{t.preventDefault();let n=document.querySelector(".input"),r=document.querySelector(".name-input");return""==n.value?window.alert("Please enter your name"):""==r.value?window.alert("Please enter the room ID"):void(i.removeChild(document.querySelector(".bttn")),e.appendChild(document.createElement("custom-button")),st.setName(n.value.toString()),await st.signIn(),await st.getExistingRoomId(r.value.toString()),await st.joinRoom(),e.querySelector("custom-button").remove(),so("/instructions"))}),e.appendChild(n)}(e)}},{path:/\/waiting-for-opponent/,handler:e=>{sr(e)}},{path:/\/instructions/,handler:e=>{!function(e){let t=document.createElement("div");t.setAttribute("class","container");let n=document.createElement("style");n.setAttribute("class","style"),n.innerHTML=`
    .container{
      display: flex;
      flex-direction: column;
      align-items: center;
    } 
    .main-title {
      color: #5A5A5A;
      padding-left: 10px;
      font-size: 2.1rem;
      text-align: center;
  }
  

  .bttn{
    background: transparent;
    border: 1px solid black;
  }
    `,t.innerHTML=`
    <h1 class="main-title">
      Presion\xe1 jugar y eleg\xed <br> 
 <br>
      PIEDRA, <br> 
 <br>
      PAPEL o <br> 
 <br>
      TIJERA <br> 
 <br>
      antes de que pasen los 3 segundos.
    </h1>
    <button class="bttn">
      <custom-button class="instructions"></custom-button>
    </button>
    `,e.appendChild(t);let i=document.querySelector(".bttn");i?.addEventListener("click",async()=>{await st.setPlayerReadyStatus(!0),so("/wfro")}),e.appendChild(n)}(e)}},{path:/\/wfro/,handler:e=>{ss(e)}},{path:/\/game/,handler:e=>{sn(e)}},{path:/\/show-moves/,handler:e=>{!function(e){let t=document.createElement("div");t.setAttribute("class","container");let n=document.createElement("style");n.setAttribute("class","style"),n.innerHTML=`
    .container{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    div.machine-container{
        width: 200px;
        height: 200px;
        transform: rotate(180deg);
    }
    div.player-container{
        width: 200px;
        height: 300px;
    }
    .main-title {
      color: #5A5A5A;
      padding-left: 10px;

      font-size: 2.1rem;
      text-align: center;
  }
  
  
  `;let i=I("kpDdw"),r=I("7dQ4O"),s=I("63stw"),{gameState:o}=st.getState(),a=e=>"piedra"==e?i:"papel"==e?r:"tijera"==e?s:void 0,l=e=>"piedra"==e?i:"papel"==e?r:"tijera"==e?s:void 0;!0==o.owner&&(st.whoWins(o.play,o.opponentPlay),t.innerHTML=`
    <div class="machine-container">
    <img width="200px" height="250px" src=${l(o.opponentPlay)}>
    </div>
    <div class="player-container">
    <img width="200px" height="250px" src="${a(o.play)}">
    <h1 class="main-title">Tu jugada</h1>
    </div>
    `),!1==o.owner&&(st.whoWins(o.opponentPlay,o.play),t.innerHTML=`
    <div class="machine-container">
    <img width="200px" height="250px" src=${a(o.opponentPlay)}>
    </div>
    <div class="player-container">
    <img width="200px" height="250px" src="${l(o.play)}">
    <h1 class="main-title">Tu jugada</h1>
    </div>
    `),e.appendChild(n),e.appendChild(t),setTimeout(()=>{so("/result")},2800)}(e)}},{path:/\/result/,handler:e=>{si(e)}}],i=t.querySelectorAll(".container"),r=t.querySelectorAll(".style");for(let s of(i.length>0&&(i[0].remove(),r[0].remove()),n))s.path.test(e)&&s.handler(t)}(e,t);let n=st.getState();n.gameState.currentPage=e,localStorage.setItem("localState",JSON.stringify(n))}async function sa(){let{gameState:e}=await st.getState();null==e.currentPage?so("/home"):so(e.currentPage)}!function(){st.init();let e=document.createElement("style");document.body.appendChild(e),I("9ekeg"),e.innerHTML=`
  body{ 
    center fixed;
    background-size: cover;
    position: relative;
  }
  .container{
    margin-top: 30px;
  }
  .go-home-container{
  display:flex;
  justify-content:center;
  align-items:center;
    margin-top: -27px;
    font-size: 25px;
    width: 120px;
    height: 47px;
    padding:16px 32px;
    background: #ededed;
    color: #5A5A5A;
    animation: flick 8s infinite alternate;
    border: 1px solid #5A5A5A;
    border-radius: 2rem;
    position: absolute
}
 
  `,sa();let t=document?.querySelector(".root");if(t){t.innerHTML=`
      <button class="go-home-container">Restart</button>
    `;let e=t.querySelector(".go-home-container");e&&e.addEventListener("click",()=>{localStorage.removeItem("localState"),window.location.reload()})}else console.error("Elemento con la clase '.root' no encontrado.")}();
//# sourceMappingURL=index.80002bc0.js.map
