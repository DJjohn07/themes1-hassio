/*! Fluvy v1.21.0 · a theme and card library for Home Assistant · SPDX-License-Identifier: GPL-3.0-only · https://github.com/acosta290/fluvy */
import{t as e}from"./rolldown-runtime-CvjMAzmL.js";import{$n as r,Bs as t,Hc as n,Kc as o,Wc as a,nc as i,nr as c,rc as l,uc as s}from"./core-CIFC0YYZ.js";var u=["warm","cool","red","orange","yellow","green","blue","purple","pink","picker"],d="custom",f=[255,152,0],p=["warm","cool","red","orange","green","blue"],h=["red","orange","green","blue","purple","pink"],b=e=>e.includes("color_temp")?p:h,g=e=>Math.max(0,Math.min(255,Math.round(e)));function m(e){const r=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e.trim());if(!r)return;const t=r[1]??"",n=3===t.length?[...t].map(e=>e+e).join(""):t;return[0,2,4].map(e=>Number.parseInt(n.slice(e,e+2),16))}function w(e){if(!Array.isArray(e))return;const r=e.slice(0,3);return r.length<3||r.some(e=>"number"!=typeof e||!Number.isFinite(e))?void 0:r.map(g)}var v=e=>"string"==typeof e&&e.trim()?e.trim():void 0;function k(e){if("string"==typeof e){const r=e.trim().toLowerCase();if(!r)return null;const t=m(r);return t?{color:d,rgb:t}:{color:r}}if(Array.isArray(e)){const r=w(e);return r?{color:d,rgb:r}:null}if("object"!=typeof e||null===e)return null;const{color:r,name:t}=e,n="string"==typeof r||Array.isArray(r)?k(r):null,o=v(t);return n&&o?{...n,name:o}:n}function y(e){const r=v(e.color)?.toLowerCase();if(!r)return null;const t="custom"===r?w(e.rgb)??f:m(r),n=t?c(t):r,o=v(e.name);return o?{color:n,name:o}:n}var $=/* @__PURE__ */e({BULB_COLORS:()=>x,activeSwatch:()=>R,adopt:()=>P,bulbOf:()=>q,colourControls:()=>G,hsToRgb:()=>W,hueOf:()=>B,inkOn:()=>z,kelvinRgb:()=>L,near:()=>H,reported:()=>U,resolveSwatch:()=>F,shownOf:()=>E,styles:()=>J,swatchWord:()=>I,whiteHex:()=>T}),x={red:"#f44336",pink:"#e91e63",purple:"#926bc7","deep-purple":"#6e41ab",indigo:"#3f51b5",blue:"#2196f3","light-blue":"#03a9f4",cyan:"#00bcd4",teal:"#009688",green:"#4caf50","light-green":"#8bc34a",lime:"#cddc39",yellow:"#ffeb3b",amber:"#ffc107",orange:"#ff9800","deep-orange":"#ff5722",brown:"#795548","light-grey":"#bdbdbd",grey:"#9e9e9e","dark-grey":"#606060","blue-grey":"#607d8b",white:"#ffffff"},_=/* @__PURE__ */new Set(["red","orange","yellow","green","blue","purple","pink"]),M=e=>{const r=e.replace(/-/g," ");return r.charAt(0).toLocaleUpperCase()+r.slice(1)},S=12,A=.15,C="#ff9800",j=250,O=/* @__PURE__ */new WeakMap;function L(e){const r=e/100,t=r<=66?255:329.698727446*(r-60)**-.1332047592,n=r<=66?99.4708025861*Math.log(r)-161.1195681661:288.1221695283*(r-60)**-.0755148492,o=r>=66?255:r<=19?0:138.5177312231*Math.log(r-10)-305.0447927307;return[g(t),g(n),g(o)]}var K=L(4e3);function T(e){const r=L(e).map((e,r)=>e/(K[r]||1)),t=Math.max(...r);return c(r.map(e=>e/t*255))}function W(e,r){const t=r/100,n=r=>{const n=(r+e/60)%6;return g(255*(1-t*Math.max(0,Math.min(n,4-n,1))))};return[n(5),n(3),n(1)]}function B([e,r,t]){const n=Math.max(e,r,t),o=n-Math.min(e,r,t);if(0===o)return 0;const a=n===e?(r-t)/o%6:n===r?(t-e)/o+2:(e-r)/o+4;return Math.round(60*a+360)%360}function F(e,r,t){if(Array.isArray(e)){const r=w(e);return r?{kind:"colour",name:c(r),rgb:r,hex:c(r)}:void 0}if("object"==typeof e&&null!==e&&"color"in e){const n=F(e.color,r,t),o="string"==typeof e.name?e.name.trim():"";return n&&o?{...n,label:o}:n}if("string"!=typeof e)return;const n=e.trim().toLowerCase();if("picker"===n)return{kind:"picker",hex:""};if("warm"===n||"cool"===n){const e=Math.max(r,Math.min(t,"warm"===n?2700:5e3));return{kind:"white",word:n,kelvin:e,hex:T(e)}}const o=Object.hasOwn(x,n),a=m(o?x[n]??"":n);return a?{kind:"colour",name:o?n:c(a),rgb:a,hex:c(a)}:void 0}function I(e,r){return e.label?e.label:"white"===e.kind?r(`light.${e.word}`):"picker"===e.kind?r("option.picker"):_.has(e.name)?r(`option.${e.name}`):e.name.startsWith("#")?e.name:M(e.name)}function N(e,r,t){if(e.rgb&&r.rgb){const t=e.rgb.map((e,t)=>Math.abs(e-(r.rgb?.[t]??0)));return Math.max(...t)<=S?t.reduce((e,r)=>e+r,0):1/0}if(void 0!==e.kelvin&&void 0!==r.kelvin){const n=Math.abs(e.kelvin-r.kelvin);return n<=A*t?n:1/0}return 1/0}function R(e,r,t){let n=-1,o=1/0;return e.forEach((e,a)=>{const i="picker"===e.kind?1/0:N(e,r,t);i<o&&(o=i,n=a)}),-1===n&&r.rgb?e.findIndex(e=>"picker"===e.kind):n}function E(e,t,n){if(n)return n;if(!t)return{};const o=e.attr("color_mode")??"",a=e.attr("rgb_color"),i=e.attr("color_temp_kelvin");return r.has(o)&&Array.isArray(a)&&a.length>=3?{rgb:[a[0]??0,a[1]??0,a[2]??0]}:"color_temp"===o&&"number"==typeof i?{kelvin:i}:{}}var H=(e,r,t)=>N(e,r,t)<1/0,U=(e,r,t)=>H(r,E(e,!0,null),t);function q(e,r,t){const n=E(e,r,t),o=e.attr("hs_color");return{shown:n,hue:t&&"rgb"in t?t.hue:o?.[0]??(n.rgb?B(n.rgb):0),saturation:o?.[1]||100,modes:e.attr("supported_color_modes")??[]}}function z(e){const r=Number.parseInt(e.slice(1),16),t=e=>{const r=e/255;return r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4)},n=.2126*t(r>>16&255)+.7152*t(r>>8&255)+.0722*t(255&r);return(n+.05)/.05>1.05/(n+.05)?"#111111":"#ffffff"}var D=52;function G(e){const{shown:r,hue:o,saturation:u,modes:d}=e.bulb,f=e.maxK-e.minK,p=(e.colors??b(d)).flatMap(r=>F(r,e.minK,e.maxK)??[]),h=Math.max(1,Math.floor((e.width+8)/D)),g=p.find(e=>"picker"===e.kind),w=!e.row||p.length<=h?p:g?[...p.filter(e=>e!==g).slice(0,h-1),g]:p.slice(0,h),v=R(w,r,f),k=r=>I(r,e.t),y=r=>{const t=r.currentTarget;clearTimeout(O.get(t)),O.set(t,window.setTimeout(()=>{const r=m(t.value);r&&e.pick({rgb:r,hue:B(r)},{rgb_color:[...r]})},j))},$=e.wheel?e.wheel(o,u):a`<fluvy-ruler
.value=${o}
.min=${0}
.max=${360}
.step=${1}
.length=${e.width}
tone="accent"
.minor=${1/12}
.major=${.25}
?inactive=${!e.on}
?disabled=${e.disabled}
?on-fill=${e.onFill}
.look=${e.look}
?still=${e.still}
tint="hue"
.label=${`${e.name} · ${e.t("light.color")}`}
.format=${r=>`${e.format(r)}°`}
@fluvy-change=${r=>{const t=r.detail.value;e.pick({rgb:W(t,u),hue:t},{hs_color:[t,u]})}}
></fluvy-ruler>
${s(e.words(function(e){const[r,n,o]=[e.t("option.red"),e.t("option.green"),e.t("option.blue")],a=`500 11px ${getComputedStyle(e.host).fontFamily}`,[i,c,l]=[t(r,a),t(n,a),t(o,a)],s=e.width/3;return i+c/2+8<=s&&(c+l)/2+8<=s?[[0,r],[1/3,n],[2/3,o]]:i+l/2+8<=2*s?[[0,r],[2/3,o]]:[]}(e)))}`,x=r.rgb||!e.temperature?a`${l(e.t("light.color"))} ${$}`:e.temperature();return w.length?a`${e.row?n:x}
<div class="lc-swatches">
${w.map((t,o)=>{const l=o===v;if("picker"===t.kind){const o=l&&r.rgb?c(r.rgb):C;return a`<label
class="lc-swatch lc-swatch--picker ${l?"is-active":""}"
data-target
style="--swatch:${o};--swatch-ink:${z(o)}"
title=${k(t)}
aria-label=${k(t)}
>
${l?i("check"):n}
<input
class="lc-swatch__input"
type="color"
data-measure="skip"
?disabled=${e.disabled}
.value=${o}
aria-label=${k(t)}
@input=${y}
@change=${y}
/>
</label>`}return a`<button
class="lc-swatch ${l?"is-active":""}"
data-target
style="--swatch:${t.hex};--swatch-ink:${z(t.hex)}"
title=${k(t)}
aria-label=${k(t)}
aria-pressed=${l?"true":"false"}
?disabled=${e.disabled}
@click=${()=>(r=>{"white"===r.kind?e.pick({kelvin:r.kelvin},{color_temp_kelvin:r.kelvin}):"colour"===r.kind&&e.pick({rgb:r.rgb,hue:B(r.rgb)},{rgb_color:[...r.rgb]})})(t)}
>
${l?i("check"):n}
</button>`})}
</div>`:e.row?a``:a`${x}`}var J=o`.lc-swatches{display: flex;flex-wrap: wrap;gap: 8px;margin-top: 16px;}.is-lit .lc-swatch{border-color: color-mix(in srgb, var(--tone-on) 40%, var(--tone-fill));}.is-glow .lc-swatch{border-color: color-mix(in srgb, var(--fluvy-text) 40%, var(--fluvy-card));}.lc-swatch--picker:has(.lc-swatch__input:disabled){opacity: 0.4;pointer-events: none;}.lc-swatch{display: inline-flex;align-items: center;justify-content: center;width: 44px;height: 44px;padding: 0;border: 1px solid color-mix(in oklab, var(--swatch) 86%, var(--fluvy-text));border-radius: 50%;background: var(--swatch);color: var(--swatch-ink);cursor: pointer;}.lc-swatch svg{width: 20px;height: 20px;}.lc-swatch--picker{position: relative;overflow: hidden;border-color: color-mix(in oklab, var(--fluvy-text) 24%, transparent);background: conic-gradient( from 90deg, #f44336, #ffeb3b, #4caf50, #00bcd4, #2196f3, #926bc7, #f44336 );}.lc-swatch--picker.is-active{border: 3px solid transparent;background: linear-gradient(var(--swatch), var(--swatch)) padding-box, conic-gradient(from 90deg, #f44336, #ffeb3b, #4caf50, #00bcd4, #2196f3, #926bc7, #f44336) border-box;}.lc-swatch__input{position: absolute;inset: 0;width: 100%;height: 100%;margin: 0;padding: 0;border: 0;opacity: 0;cursor: pointer;}.lc-swatch--picker:has(.lc-swatch__input:focus-visible){outline: 2px solid var(--fluvy-accent);outline-offset: 2px;}`;function P(e){const r=J.styleSheet;if(r)e.adoptedStyleSheets.includes(r)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,r]);else if(!e.querySelector("style[data-fluvy-colour]")){const r=document.createElement("style");r.dataset.fluvyColour="",r.textContent=J.cssText,e.prepend(r)}}export{w as _,B as a,H as c,d,u as f,k as g,y as h,W as i,U as l,b as m,G as n,z as o,g as p,$ as r,L as s,q as t,J as u};