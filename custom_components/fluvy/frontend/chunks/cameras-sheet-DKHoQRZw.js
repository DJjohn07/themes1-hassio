/*! Fluvy v1.21.0 · a theme and card library for Home Assistant · SPDX-License-Identifier: GPL-3.0-only · https://github.com/acosta290/fluvy */
import{t as e}from"./rolldown-runtime-CvjMAzmL.js";import{Hc as t,Ic as s,Kc as i,Oc as a,Vc as o,Wc as n,Xs as r,dl as c,fc as l,hl as h,ia as d,ic as v,kc as p,ml as m,ra as f,sc as u}from"./core-CIFC0YYZ.js";import{a as w,o as _}from"./shared-DlZQgqdD.js";import{i as g,n as b,r as y}from"./devices-BxOc7ML1.js";var $=/* @__PURE__ */e({}),x=h("cameras"),k=e=>{"Escape"===e.key&&e.stopPropagation()},R={handleEvent:e=>e.stopPropagation(),passive:!0},T=class extends o{static{this.styles=[...a,p.devices,b,i`:host(:not([docked])){display: contents;}dialog{position: fixed;inset: 0;width: 100%;height: 100%;max-width: none;max-height: none;flex-direction: column;justify-content: flex-end;align-items: center;overflow: hidden;padding: 0;border: 0;background: color-mix(in srgb, var(--fluvy-neutral-05) 48%, transparent);color: inherit;touch-action: none;overscroll-behavior: contain;animation: fv-fade 240ms var(--fv-ease) both;}dialog[open]{display: flex;}dialog::backdrop{background: none;}@keyframes cs-up{from{transform: translateY(100%);}to{transform: none;}}@keyframes cs-down{to{transform: translateY(100%);}}@keyframes cs-out{to{opacity: 0;}}dialog .fv-sheet{max-width: 392px;overflow-y: auto;touch-action: pan-y;overscroll-behavior: contain;animation: cs-up 320ms var(--fv-ease-out) both;}dialog.is-leaving{animation: cs-out 200ms var(--fv-ease) both;}dialog.is-leaving .fv-sheet{animation: cs-down 200ms var(--fv-ease) both;}.fv-sheet{position: relative;width: 100%;}.fv-sheet__head > .fv-card__titles{flex: 1 1 auto;min-width: 0;}.fv-sheet__title{overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}.cs-live{display: inline-flex;flex: none;align-items: center;gap: 12px;font-size: 14px;font-weight: 600;line-height: 20px;color: var(--fluvy-text-secondary);}.cs-switch, .cs-rows, .cs-empty{margin-top: 16px;}.cs-thumb{position: absolute;inset: 0;width: 100%;height: 100%;object-fit: cover;}.cm-row > .fv-tile__tap{z-index: 3;}.cm-row .fv-row__chevron{position: relative;pointer-events: none;}.cs-actions{display: grid;margin-top: 24px;}.cs-actions .fv-btn{width: 100%;}`,w]}static{this.properties={hass:{attribute:!1},card:{attribute:!1},docked:{type:Boolean,reflect:!0},open_:{state:!0},leaving_:{state:!0}}}constructor(){super(),this.ruler=new d(()=>this.renderRoot),this.openedAt=0,this.leaveTimer=0,this.docked=!1,this.open_=!1,this.leaving_=!1,new f(this,()=>{this.ruler.clear(),this.requestUpdate()}),new _(this,()=>this.renderRoot.querySelector(".fv-sheet"),()=>this.room)}open(e){clearTimeout(this.leaveTimer),this.leaveTimer=0,this.openedBy=e,this.leaving_=!1,this.open_=!0,this.openedAt=performance.now()}close(){!this.open_||this.leaving_||this.docked||(this.leaving_=!0,this.leaveTimer=window.setTimeout(()=>this.finishClose(),200))}connectedCallback(){super.connectedCallback(),this.renderRoot instanceof ShadowRoot&&this.card?.adopt(this.renderRoot)}disconnectedCallback(){super.disconnectedCallback(),this.finishClose()}finishClose(){clearTimeout(this.leaveTimer),this.leaveTimer=0;const e=this.open_,t=this.openedBy;this.openedBy=void 0,this.leaving_=!1,this.open_=!1;const s=this.renderRoot.querySelector("dialog");s?.open&&s.close(),e&&t?.isConnected&&t.focus()}willUpdate(e){e.has("card")&&this.renderRoot instanceof ShadowRoot&&this.card?.adopt(this.renderRoot)}updated(e){const t=this.renderRoot.querySelector("dialog");t&&!t.open&&this.open_&&!this.leaving_&&t.showModal(),e.has("open_")&&this.open_&&!this.docked&&requestAnimationFrame(()=>this.renderRoot.querySelector('.fv-sheet [role="switch"]')?.focus())}onDialogClick(e){e.target===e.currentTarget&&performance.now()-this.openedAt>=350&&this.close()}get room(){const e=this.renderRoot.querySelector(".fv-sheet")?.clientWidth??0;return e>0?e-32:360}details(e){this.close(),this.card?.open(e)}renderHead(e){const s=this.hass,i=c(s,"camera.live"),a=this.card?.title()??x(s,"title"),o=this.card?.liveable()??!1,r=this.ruler.width("fv-sheet__title",a)+12+this.ruler.width("cs-live",i)<=this.room-68,h=this.card?.live()??!1,d=e=>{this.card?.setLive(e),this.requestUpdate()};return n`<div class="fv-sheet__head">
<div class="fv-card__titles">
<h2 class="fv-sheet__title" id="cs-title">${a}</h2>
<p class="fv-card__sub">${m(s,"cameras.count",e)}</p>
</div>
${o&&r?n`<span class="cs-live"
><span aria-hidden="true">${i}</span>${l(h,"accent",d,x(s,"live_all"),0===e)}</span
>`:t}
</div>
${!o||r?t:n`<div class="cs-switch">
${v({icon:null,tone:"neutral",title:i,trailing:"switch",on:h,switchTone:"accent",readonly:0===e,onToggle:d})}
</div>`}`}renderRows(e){const i=t=>e.every(({name:e,line:s})=>t>=Math.min(96,this.ruler.width("fv-row__title",e))&&(!s||t>=this.ruler.width("fv-row__sub",s.short??s.text)+22)),a=i(this.room-92-56),o=a||i(this.room-92),r=y(e.map(({line:e})=>e?[e.short??e.text]:[]),this.room-(o?92:0)-(a?56:0),e=>this.ruler.width("fv-row__sub",e));return n`<div class="cs-rows">
${e.map(e=>n`<div class="fv-row fv-row--tap cm-row ${o?"":"fv-row--bare"}">
${o?n`<span class="cm-thumb ${e.usable&&e.frame?"":"is-off"}"
>${e.usable&&e.frame?n`<img class="cs-thumb" alt="" src=${e.frame} />${e.live?n`<i class="cm-thumb__live"></i>`:t}`:s("camera")}</span
>`:t}
<span class="fv-row__text"
><span class="fv-row__title" data-name>${e.name}</span>${e.line?g(e.line,r(e.line)):t}</span
>
${a?n`<span class="fv-row__chevron">${s("chevron")}</span>`:t}
${u([e.name,e.line?.text].filter(Boolean).join(" · "),()=>this.details(e.entity),void 0)}
</div>`)}
</div>`}renderSheet(){const e=this.card?.cameras()??[],t=this.hass;return n`<div class="fv-sheet cs-sheet" data-card>
<div class="fv-sheet__grabber"><span></span></div>
${this.renderHead(e.length)}
${e.length?this.renderRows(e):n`<div class="cs-empty">${r("camera",x(t,"empty"))}</div>`}
<div class="cs-actions">
<button class="fv-btn fv-btn--quiet" data-control data-target @click=${()=>this.close()}>
${c(t,"keypad.close")}
</button>
</div>
</div>`}render(){return this.open_?this.docked?this.renderSheet():n`<dialog
class=${this.leaving_?"is-leaving":""}
aria-labelledby="cs-title"
@cancel=${e=>{e.preventDefault(),this.close()}}
@close=${()=>this.finishClose()}
@click=${e=>this.onDialogClick(e)}
@keydown=${k}
@touchstart=${R}
>
${this.renderSheet()}
</dialog>`:t}};customElements.get("fluvy-cameras-sheet")||customElements.define("fluvy-cameras-sheet",T);export{$ as t};