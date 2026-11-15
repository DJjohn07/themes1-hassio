/*! Fluvy v1.21.0 · a theme and card library for Home Assistant · SPDX-License-Identifier: GPL-3.0-only · https://github.com/acosta290/fluvy */
import{Gc as a,Hc as r,Kc as e,Wc as i,nc as t}from"./core-CIFC0YYZ.js";var n=a=>Math.min(64,Math.max(44,a-112));function o({size:e,middle:n=64,arrows:o,lit:l,centre:s}){const d=e/2,v=n/2+4,f=d-28,c=a=>a*Math.PI/180,u=(a,r)=>[d+a*Math.cos(c(r)),d+a*Math.sin(c(r))],g=a=>90*a-90,p=o.findIndex(a=>a.key===l);return i`<svg
class="fv-ring__plate"
width=${e}
height=${e}
viewBox="0 0 ${e} ${e}"
aria-hidden="true"
>
<circle class="fv-ring__disc" cx=${d} cy=${d} r=${d-.5} />
${p<0?r:a`<path class="fv-ring__wedge" d=${(a=>{const[r,e]=u(d-1,a-45),[i,t]=u(d-1,a+45),[n,o]=u(v,a+45),[l,s]=u(v,a-45);return`M${r.toFixed(1)} ${e.toFixed(1)} A${d-1} ${d-1} 0 0 1 ${i.toFixed(1)} ${t.toFixed(1)} L${n.toFixed(1)} ${o.toFixed(1)} A${v} ${v} 0 0 0 ${l.toFixed(1)} ${s.toFixed(1)} Z`})(g(p))} />`}
</svg>
${o.map((a,e)=>{const[n,o]=u(f,g(e)),l=a.up??r;return i`<button
class="fv-ring__arrow ${e===p?"is-pressed":""}"
style="left:${Math.round(n-22)}px;top:${Math.round(o-22)}px"
data-control
data-target
aria-label=${a.label}
title=${a.label}
?disabled=${a.still??!1}
@pointerdown=${a.down??r}
@pointerup=${l}
@pointerleave=${l}
@pointercancel=${l}
@click=${a.click}
>
${t(a.glyph)}
</button>`})}
<button
class="fv-ring__mid"
style="left:${d-n/2}px;top:${d-n/2}px;width:${n}px;height:${n}px"
data-target
aria-label=${s.label}
title=${s.label}
?disabled=${s.still??!1}
@click=${s.click}
>
${s.content}
</button>`}var l=e`.fv-ring__plate{display: block;}.fv-ring__disc{fill: var(--fluvy-inset, var(--fluvy-page));}.fv-ring__wedge{fill: var(--fluvy-accent-fill);}.fv-ring__arrow, .fv-ring__mid{position: absolute;display: inline-flex;align-items: center;justify-content: center;margin: 0;padding: 0;border: 0;border-radius: 50%;background: none;font: inherit;color: var(--fluvy-text);cursor: pointer;transition: transform var(--fv-fast) var(--fv-ease), color var(--fv-base) var(--fv-ease), background-color var(--fv-base) var(--fv-ease);user-select: none;-webkit-user-select: none;touch-action: manipulation;}.fv-ring__arrow{width: 44px;height: 44px;}.fv-ring__arrow svg, .fv-ring__mid svg{width: 20px;height: 20px;}.fv-ring__arrow.is-pressed{color: var(--fluvy-accent-on-fill);}.fv-ring__mid{background: var(--fv-solid-card, var(--fluvy-card));box-shadow: inset 0 0 0 1px var(--fluvy-border), 0 1px 2px rgb(0 0 0 / calc(0.06 * var(--fluvy-shade, 1)));font-size: 13px;font-weight: 600;letter-spacing: 0.02em;}.fv-ring__mid:active{transform: scale(0.94);background: var(--fluvy-page-alt);}.fv-ring__arrow[disabled], .fv-ring__mid[disabled]{opacity: 0.4;pointer-events: none;}.is-off:where(:not([data-unavailable='quiet'])) .fv-ring__mid{background: transparent;outline: 1px dashed var(--fluvy-unavailable-border);outline-offset: -1px;box-shadow: none;color: var(--fluvy-unavailable);}.is-off:where(:not([data-unavailable='quiet'])) .fv-ring__disc{fill: transparent;stroke: var(--fluvy-unavailable-border);stroke-dasharray: 3 3;}.is-off:where(:not([data-unavailable='quiet'])) .fv-ring__arrow{color: var(--fluvy-unavailable);}.is-off .fv-ring__arrow[disabled], .is-off .fv-ring__mid[disabled]{opacity: 1;}`;export{n,l as r,o as t};