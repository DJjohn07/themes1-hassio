/*! Fluvy v1.21.0 · a theme and card library for Home Assistant · SPDX-License-Identifier: GPL-3.0-only · https://github.com/acosta290/fluvy */
import{t}from"./rolldown-runtime-CvjMAzmL.js";import{$c as e,$n as i,Gc as s,Hc as o,Ic as a,Kc as n,Oc as r,Tc as l,Vc as h,Wc as c,dl as d,ec as u,fc as v,ml as p,nr as g,ra as m,vc as f,wc as b}from"./core-CIFC0YYZ.js";import{_ as w,a as y,c as $,i as k,n as _,o as x,p as M,s as T,u as C}from"./light-colour-Cqw4ImAf.js";import{a as S,o as q}from"./shared-DlZQgqdD.js";var R=t=>t*Math.PI/180,K=(t,e,i)=>[t/2+i*Math.cos(R(e)),t/2+i*Math.sin(R(e))],E=class extends h{static{this.styles=[...r,n`:host{display: block;}.hr{position: relative;margin: 0 auto;touch-action: var(--fv-pan, none);}.hr svg{display: block;overflow: visible;}.hr line{stroke-width: 2;stroke-linecap: round;opacity: 0.85;}.hr__disc{fill: var(--fluvy-inset, var(--fluvy-page));}.hr .fv-knob{top: 0;left: 0;cursor: grab;}.hr.is-dragging .fv-knob{cursor: grabbing;}.hr__colour{position: absolute;pointer-events: none;}`]}static{this.properties={value:{type:Number},size:{type:Number},color:{type:String},ink:{type:String},label:{type:String},disabled:{type:Boolean},inactive:{type:Boolean},format:{attribute:!1},dragging:{state:!0},waiting:{state:!0}}}constructor(){super(),this.value=0,this.size=216,this.color="",this.ink="",this.label="",this.disabled=!1,this.inactive=!1,this.dragging=!1,this.waiting=0}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>this.track())}disconnectedCallback(){super.disconnectedCallback(),this.untrack?.(),this.untrack=void 0}track(){const t=this.renderRoot.querySelector(".hr");if(!t||this.untrack)return;const e=e=>{const{x:i,y:s}=l(t,e);return function(t,e,i=216){const s=180*Math.atan2(e-i/2,t-i/2)/Math.PI;return Math.round(s+360)%360}(i,s,this.size)};let i=0;this.untrack=b(t,{start:()=>!this.disabled&&(i=this.value,!0),wait:t=>{this.waiting=t},arm:t=>{this.waiting=0,this.dragging=!0,this.turn(e(t.event),"fluvy-input")},move:t=>this.turn(e(t.event),"fluvy-input"),end:t=>{this.waiting=0,this.dragging&&(this.dragging=!1,this.turn(e(t.event),"fluvy-change"))},cancel:()=>{this.waiting=0,this.dragging=!1,this.value=i}})}turn(t,e){this.value=(t%360+360)%360,this.dispatchEvent(new CustomEvent(e,{detail:{value:this.value},bubbles:!0,composed:!0}))}onKey(t){if(this.disabled)return;const e=f(t,this.value,-1,361,1);void 0!==e&&(t.preventDefault(),this.turn(-1===e?359:361===e?1:e,"fluvy-change"))}render(){const t=this.size,e=(t=>t/2-24)(t),i=!this.inactive||this.dragging||this.waiting>0,[n,r]=K(t,this.value,e),l=[];for(let o=0;o<360;o+=5){const[a,h]=K(t,o,e);if(i&&Math.hypot(a-n,h-r)<25)continue;const c=o%30==0?10:5,[d,u]=K(t,o,e-c),[v,p]=K(t,o,e+c);l.push(s`<line x1=${d.toFixed(1)} y1=${u.toFixed(1)} x2=${v.toFixed(1)} y2=${p.toFixed(1)} stroke="hsl(${o} 100% 50%)" />`)}const h=`${this.format?this.format(this.value):String(this.value)}°`,d=(t-64)/2;return c`<div
class="hr fv-tone--accent ${this.dragging?"is-dragging":""}"
style="width:${t}px;height:${t}px"
aria-disabled=${this.disabled?"true":o}
>
<svg width=${t} height=${t} viewBox="0 0 ${t} ${t}" aria-hidden="true">
<circle class="hr__disc" cx=${t/2} cy=${t/2} r=${e-18} />
${l}
</svg>
<span
class="fv-ico fv-ico--hero hr__colour ${this.color?"":"fv-ico--neutral"}"
style="left:${d}px;top:${d}px${this.color?`;background:${this.color};color:${this.ink}`:""}"
>${a("bulb")}</span
>
${i?c`<span
class="fv-knob fv-knob--accent fv-knob--tinted"
data-measure="value"
role="slider"
tabindex=${this.disabled?-1:0}
aria-label=${this.label||o}
aria-valuemin="0"
aria-valuemax="360"
aria-valuenow=${this.value}
aria-valuetext=${h}
aria-disabled=${this.disabled?"true":o}
style="translate:${Math.round(n-18)}px ${Math.round(r-18)}px;width:${36}px;height:${36}px;--knob-dot:hsl(${this.value} 100% 50%)"
@keydown=${this.onKey}
>
${this.waiting?u(36,this.waiting):o}
</span>`:o}
</div>`}};customElements.get("fluvy-hue-ring")||customElements.define("fluvy-hue-ring",E);var j=/* @__PURE__ */t({}),B=t=>t.attr("color_mode")??"",z=t=>"number"==typeof t;function D(t,e){const i=[];let s=0;for(const o of t){const t=e(o);if(!t)continue;const a=o.attr("brightness")||255;t.forEach((t,e)=>{i[e]=(i[e]??0)+t*a}),s+=a}return s?i.map(t=>t/s):void 0}function F(t,e){const s=t.filter(t=>t.usable).map(t=>t.view),o=t.filter(t=>t.on).map(t=>t.view),a=s.map(t=>t.attr("min_color_temp_kelvin")).filter(z),n=s.map(t=>t.attr("max_color_temp_kelvin")).filter(z),r=D(o,t=>i.has(B(t))?w(t.attr("rgb_color")):void 0),l=r?r.map(M):void 0,h=D(o,t=>i.has(B(t))?t.attr("hs_color")?.slice(1,2)??void 0:void 0),c=D(o,t=>{const e=t.attr("color_temp_kelvin");return"color_temp"===B(t)&&z(e)?[e]:void 0}),d=l?{rgb:l}:c?{kelvin:Math.round(c[0]??0)}:{};return{shown:e??d,hue:e&&"rgb"in e?e.hue:l?y(l):0,saturation:Math.round(h?.[0]??0)||100,modes:[...new Set(s.flatMap(t=>t.attr("supported_color_modes")??[]))],minK:a.length?Math.min(...a):2e3,maxK:n.length?Math.max(...n):6500}}function U(t,e){try{return new Intl.ListFormat(t?.language??"en",{type:"conjunction"}).format(e)}catch{return e.join(", ")}}var A=t=>{"Escape"===t.key&&t.stopPropagation()},I={handleEvent:t=>t.stopPropagation(),passive:!0},P=class extends h{static{this.styles=[...r,C,n`:host(:not([docked])){display: contents;}dialog{position: fixed;inset: 0;width: 100%;height: 100%;max-width: none;max-height: none;flex-direction: column;justify-content: flex-end;align-items: center;overflow: hidden;padding: 0;border: 0;background: color-mix(in srgb, var(--fluvy-neutral-05) 48%, transparent);color: inherit;touch-action: none;overscroll-behavior: contain;animation: fv-fade 240ms var(--fv-ease) both;}dialog[open]{display: flex;}dialog::backdrop{background: none;}@keyframes ls-up{from{transform: translateY(100%);}to{transform: none;}}@keyframes ls-down{to{transform: translateY(100%);}}@keyframes ls-out{to{opacity: 0;}}dialog .fv-sheet{max-width: 392px;overflow-y: auto;touch-action: pan-y;overscroll-behavior: contain;animation: ls-up 320ms var(--fv-ease-out) both;}dialog.is-leaving{animation: ls-out 200ms var(--fv-ease) both;}dialog.is-leaving .fv-sheet{animation: ls-down 200ms var(--fv-ease) both;}.fv-sheet{position: relative;width: 100%;}.fv-sheet__head > .fv-card__titles{flex: 1 1 auto;min-width: 0;}.fv-sheet__title{overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}fluvy-hue-ring{margin-top: 16px;}.ls-hint{margin: 12px 0 0;font-size: 13px;font-weight: 500;line-height: 20px;color: var(--fluvy-text-secondary);}.ls-actions{display: grid;margin-top: 24px;}.ls-actions .fv-btn{width: 100%;}`,S]}static{this.properties={hass:{attribute:!1},card:{attribute:!1},docked:{type:Boolean,reflect:!0},open_:{state:!0},leaving_:{state:!0}}}constructor(){super(),this.held=null,this.holdTimer=0,this.openedAt=0,this.leaveTimer=0,this.docked=!1,this.open_=!1,this.leaving_=!1,new m(this,()=>this.requestUpdate()),new q(this,()=>this.renderRoot.querySelector(".fv-sheet"),()=>this.room)}open(t){clearTimeout(this.leaveTimer),this.leaveTimer=0,this.openedBy=t,this.leaving_=!1,this.open_=!0,this.openedAt=performance.now()}close(){!this.open_||this.leaving_||this.docked||(this.leaving_=!0,this.leaveTimer=window.setTimeout(()=>this.finishClose(),200))}connectedCallback(){super.connectedCallback(),this.renderRoot instanceof ShadowRoot&&this.card?.adopt(this.renderRoot)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.holdTimer),this.finishClose()}finishClose(){clearTimeout(this.leaveTimer),this.leaveTimer=0;const t=this.open_,e=this.openedBy;this.openedBy=void 0,this.leaving_=!1,this.open_=!1;const i=this.renderRoot.querySelector("dialog");i?.open&&i.close(),t&&e?.isConnected&&e.focus()}willUpdate(t){t.has("card")&&this.renderRoot instanceof ShadowRoot&&this.card?.adopt(this.renderRoot)}updated(t){const e=this.renderRoot.querySelector("dialog");e&&!e.open&&this.open_&&!this.leaving_&&e.showModal(),t.has("open_")&&this.open_&&!this.docked&&requestAnimationFrame(()=>this.renderRoot.querySelector('.fv-sheet [role="switch"]')?.focus())}onDialogClick(t){t.target===t.currentTarget&&performance.now()-this.openedAt>=350&&this.close()}get room(){const t=this.renderRoot.querySelector(".fv-sheet")?.clientWidth??0;return t>0?t-32:360}pick(t,e){this.held={choice:t,expires:Date.now()+5e3},clearTimeout(this.holdTimer),this.holdTimer=window.setTimeout(()=>{this.held=null,this.requestUpdate()},5e3),this.card?.pick(e),this.requestUpdate()}renderSheet(){const t=this.hass,i=this.card,s=e=>d(t,e),a=i?.lamps()??[],n=a.some(t=>t.usable),r=a.some(t=>t.on),l=i?.title()??"",h=`${l} · ${s("light.color")}`,u=F(a,null);this.held&&(Date.now()>this.held.expires||$(this.held.choice,u.shown,u.maxK-u.minK))&&(this.held=null);const m=this.held?F(a,this.held.choice):u,f=m.shown.rgb?g(m.shown.rgb):m.shown.kelvin?g(T(m.shown.kelvin)):"",b=i=>e(t,i,{digits:0}),w=a.filter(t=>t.usable&&!t.colours).map(t=>t.name);return c`<div class="fv-sheet ls-sheet" data-card>
<div class="fv-sheet__grabber"><span></span></div>
<div class="fv-sheet__head">
<div class="fv-card__titles">
<h2 class="fv-sheet__title" id="ls-title">${l}</h2>
<p class="fv-card__sub">${i?.line(this.room)??""}</p>
</div>
${v(r,i?.tone()??"light",()=>{i?.flip(),this.requestUpdate()},l,!n)}
</div>
${_({bulb:m,t:s,name:l,width:this.room,on:r,colors:i?.colors(),minK:m.minK,maxK:m.maxK,format:b,temperature:void 0,disabled:!n,look:i?.look()??"ruler",still:i?.still()??!0,words:t=>i?.words(t)??t,host:this,pick:(t,e)=>this.pick(t,e),wheel:"wheel"===i?.control()?(t,e)=>{return c`<fluvy-hue-ring
.value=${t}
.size=${i=this.room,Math.max(160,Math.min(216,4*Math.floor(i/4)))}
.color=${f}
.ink=${f?x(f):""}
.label=${h}
?inactive=${!r}
?disabled=${!n}
.format=${b}
@fluvy-change=${t=>{const i=t.detail.value;this.pick({rgb:k(i,e),hue:i},{hs_color:[i,e]})}}
></fluvy-hue-ring>`;var i}:void 0})}
${w.length?c`<p class="ls-hint">
${p(t,"lights.no_colour",w.length,{names:U(t,w)})}
</p>`:o}
<div class="ls-actions">
<button class="fv-btn fv-btn--quiet" data-control data-target @click=${()=>this.close()}>
${s("keypad.close")}
</button>
</div>
</div>`}render(){return this.open_?this.docked?this.renderSheet():c`<dialog
class=${this.leaving_?"is-leaving":""}
aria-labelledby="ls-title"
@cancel=${t=>{t.preventDefault(),this.close()}}
@close=${()=>this.finishClose()}
@click=${t=>this.onDialogClick(t)}
@keydown=${A}
@touchstart=${I}
>
${this.renderSheet()}
</dialog>`:o}};customElements.get("fluvy-lights-colour-sheet")||customElements.define("fluvy-lights-colour-sheet",P);export{j as t};