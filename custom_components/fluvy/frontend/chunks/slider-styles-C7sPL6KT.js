/*! Fluvy v1.21.0 · a theme and card library for Home Assistant · SPDX-License-Identifier: GPL-3.0-only · https://github.com/acosta290/fluvy */
import{t as a}from"./rolldown-runtime-CvjMAzmL.js";import{Gc as t,Hc as i,Wc as e}from"./core-CIFC0YYZ.js";var r=/* @__PURE__ */a({drawBar:()=>d,drawFill:()=>c,drawLiquid:()=>f,sliderStylesSheet:()=>n}),n=new CSSStyleSheet;n.replaceSync(".sb-bar{position:absolute;inset:auto 0 0;border-radius:var(--fluvy-radius-control,12px);background:var(--fluvy-inset,var(--fluvy-page))}.sb-bar__fill{position:absolute;left:0;top:0;bottom:0;border-radius:inherit;background:var(--tone-ink)}.sb-bar--vertical .sb-bar__fill{top:auto;right:0}.sb-bar__handle{position:absolute;border-radius:2px;background:var(--fv-solid-card,var(--fluvy-card));box-shadow:0 1px 2px rgb(0 0 0 / calc(0.12 * var(--fluvy-shade,1)));transition:height var(--fv-fast) var(--fv-ease),top var(--fv-fast) var(--fv-ease)}.sb-bar--vertical .sb-bar__handle{transition:width var(--fv-fast) var(--fv-ease),left var(--fv-fast) var(--fv-ease)}.sb-bar--warm-cool{background:linear-gradient(var(--sb-angle,90deg),color-mix(in oklab,var(--fluvy-tint-warm,var(--fv-tint-warm,#d1a24c)) 72%,var(--fluvy-inset,var(--fluvy-page))),color-mix(in oklab,var(--fluvy-tint-cool,var(--fv-tint-cool,#a9bdd0)) 72%,var(--fluvy-inset,var(--fluvy-page))))}.sb-bar--hue{--sb-wash:color-mix(in srgb,var(--fluvy-inset,var(--fluvy-page)) 28%,transparent);background:linear-gradient(var(--sb-wash),var(--sb-wash)),linear-gradient(var(--sb-angle,90deg),hsl(0 100% 50%),hsl(60 100% 50%),hsl(120 100% 50%),hsl(180 100% 50%),hsl(240 100% 50%),hsl(300 100% 50%),hsl(360 100% 50%))}.sb-bar--vertical{--sb-angle:0deg}.sb-liq{position:absolute;inset:auto 0 0;border-radius:var(--fluvy-radius-control,12px);background:var(--fluvy-inset,var(--fluvy-page));overflow:hidden}.sb-liq svg{display:block}.sb-liq path{fill:var(--tone-ink)}.sb-liq .lq-a{opacity:0.62}.sb-liq .lq-b{opacity:0.34}.lq-y20{animation:lq-y20 9s linear infinite}.lq-y26{animation:lq-y26 14s linear infinite}.lq-x20{animation:lq-x20 9s linear infinite}.lq-x26{animation:lq-x26 14s linear infinite}@keyframes lq-y20{to {transform:translateY(-20px);}}@keyframes lq-y26{to {transform:translateY(-26px);}}@keyframes lq-x20{to {transform:translateX(-20px);}}@keyframes lq-x26{to {transform:translateX(-26px);}}:host([still]) .sb-liq path{animation:none}:host([reduced-motion]) .sb-liq path{animation:none}@media (prefers-reduced-motion: reduce){.sb-liq path{animation:none}}.sb-bar.is-disabled,.sb-liq.is-disabled{opacity:0.55}.sb-fill{position:absolute;left:0;top:0;bottom:0;background:var(--tone-fill)}.sb-fill__edge{position:absolute;left:0;top:0;bottom:0;width:2px;background:var(--tone-border)}.is-dragging .sb-fill__edge{background:var(--tone-ink)}.sb-fill__edge.is-waiting::after{content:'';position:absolute;inset:0;background:var(--tone-ink);animation:sb-wait var(--fv-wait) linear both}@keyframes sb-wait{from {scale:1 0;}}");var s=20,l=28,o=a=>`${a.vertical?" sb-bar--vertical":""}${a.disabled?" is-disabled":""}`;function b(a,t,i){const r=Math.round(a.fraction*a.len),n=Math.min(Math.max(i?r-2:r-8-4,8),a.len-8-4),s=(a.band-t)/2;return e`<span
class="sb-bar__handle"
data-measure="value"
style=${a.vertical?`left:${s}px;top:${a.len-4-n}px;width:${t}px;height:4px`:`left:${n}px;top:${s}px;width:4px;height:${t}px`}
></span>`}function d(a){const t=Math.round(a.fraction*a.len),r=a.tint||a.inactive?i:e`<span
class="sb-bar__fill"
data-measure="value"
style=${a.vertical?`height:${t}px`:`width:${t}px`}
></span>`;return e`<span
class="sb-bar${a.tint?` sb-bar--${a.tint}`:""}${o(a)}"
style="height:${a.vertical?a.len:a.band}px"
>${r}${a.inactive?i:b(a,a.wait?l:s,!!a.tint)}</span
>`}function v(a,t,i,e){const r=a.band+2*i;let n="";for(let s=-i;s<=r;s+=2){const r=Math.sin((s+e)/i*Math.PI*2)*t;n+=`${n?"L":"M"}${a.vertical?`${s} ${(-r).toFixed(1)}`:`${r.toFixed(1)} ${s}`}`}return n}function f(a){const r=a.vertical?a.band:a.len,n=a.vertical?a.len:a.band,l=a.vertical?Math.round((1-a.fraction)*n):Math.round(a.fraction*r),o=(i,e,s,o)=>a.vertical?t`<g style="transform:translate(0px,${l}px)"><path class="${o} lq-x${e}" d="${v(a,i,e,s)} L${r+e} ${n+40} L${-e} ${n+40} Z" /></g>`:t`<g style="transform:translate(${l}px,0px)"><path class="${o} lq-y${e}" d="${v(a,i,e,s)} L${-r-40} ${n+e} L${-r-40} ${-e} Z" /></g>`;return e`<span
class="sb-liq${a.disabled?" is-disabled":""}"
style="height:${n}px${a.tint?`;--tone-ink:${a.dot}`:""}"
>
<svg width=${r} height=${n} viewBox="0 0 ${r} ${n}" aria-hidden="true">
${a.inactive?i:[o(3,26,0,"lq-b"),o(2.5,20,7,"lq-a")]}
</svg>
${a.held&&!a.inactive?b(a,s,!1):i}
</span>`}function c(a){if(a.inactive)return i;const t=Math.round(a.fraction*a.len);return e`<span class="sb-fill" data-measure="value" style="width:${t}px"></span
><span
class="sb-fill__edge${a.wait?" is-waiting":""}"
data-measure="value"
style="translate:${t-1}px 0${a.wait?`;--fv-wait:${a.wait}ms`:""}"
></span>`}export{r as t};