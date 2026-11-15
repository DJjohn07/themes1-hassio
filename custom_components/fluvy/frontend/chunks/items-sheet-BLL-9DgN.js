/*! Fluvy v1.21.0 · a theme and card library for Home Assistant · SPDX-License-Identifier: GPL-3.0-only · https://github.com/acosta290/fluvy */
import{t as e}from"./rolldown-runtime-CvjMAzmL.js";import{Hc as t,Kc as i,Oc as s,Vc as o,Wc as a,dl as n,hl as r,ia as l,kc as d,lc as h,ra as c,tc as p}from"./core-CIFC0YYZ.js";import{a as v,o as f}from"./shared-DlZQgqdD.js";import{n as u}from"./items-B04cjTUd.js";var m=/* @__PURE__ */e({}),_=r("items"),g=e=>{"Escape"===e.key&&e.stopPropagation()},b={handleEvent:e=>e.stopPropagation(),passive:!0},w=class extends o{static{this.styles=[...s,d.devices,i`:host(:not([docked])){display: contents;}dialog{position: fixed;inset: 0;width: 100%;height: 100%;max-width: none;max-height: none;flex-direction: column;justify-content: flex-end;align-items: center;overflow: hidden;padding: 0;border: 0;background: color-mix(in srgb, var(--fluvy-neutral-05) 48%, transparent);color: inherit;touch-action: none;overscroll-behavior: contain;animation: fv-fade 240ms var(--fv-ease) both;}dialog[open]{display: flex;}dialog::backdrop{background: none;}@keyframes is-up{from{transform: translateY(100%);}to{transform: none;}}@keyframes is-down{to{transform: translateY(100%);}}@keyframes is-out{to{opacity: 0;}}dialog .fv-sheet{max-width: 392px;overflow-y: auto;touch-action: pan-y;overscroll-behavior: contain;animation: is-up 320ms var(--fv-ease-out) both;}dialog.is-leaving{animation: is-out 200ms var(--fv-ease) both;}dialog.is-leaving .fv-sheet{animation: is-down 200ms var(--fv-ease) both;}.fv-sheet{position: relative;width: 100%;}.fv-sheet__head{gap: 12px;}.fv-sheet__head > .fv-card__titles{flex: 1 1 auto;min-width: 0;}.fv-sheet__title, .fv-sheet__head .fv-card__sub{overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}.is-pic{position: relative;flex: 0 0 44px;width: 44px;height: 44px;overflow: hidden;border-radius: 50%;background: var(--fluvy-inset, var(--fluvy-page));}.is-pic img{display: block;width: 100%;height: 100%;object-fit: cover;}.is-fields{margin-top: 8px;}.is-field{position: relative;display: flex;flex-direction: column;gap: 4px;padding: 12px 0;}.is-field + .is-field::before{content: '';position: absolute;top: 0;right: 0;left: 0;height: 1px;background: var(--fluvy-border);}.is-field__label{font-size: 13px;font-weight: 500;line-height: 16px;color: var(--fluvy-text-secondary);}.is-field__value{font-size: 15px;font-weight: 600;line-height: 20px;font-variant-numeric: tabular-nums;overflow-wrap: break-word;}.is-actions{display: grid;gap: 8px;margin-top: 24px;}.is-actions .fv-btn{width: 100%;}`,v]}static{this.properties={hass:{attribute:!1},card:{attribute:!1},docked:{type:Boolean,reflect:!0},open_:{state:!0},leaving_:{state:!0},broken_:{state:!0}}}constructor(){super(),this.ruler=new l(()=>this.renderRoot),this.openedAt=0,this.leaveTimer=0,this.docked=!1,this.open_=!1,this.leaving_=!1,this.broken_="",new c(this,()=>{this.ruler.clear(),this.requestUpdate()}),new f(this,()=>this.renderRoot.querySelector(".fv-sheet"),()=>this.room)}open(e){clearTimeout(this.leaveTimer),this.leaveTimer=0,this.openedBy=e,this.leaving_=!1,this.open_=!0,this.openedAt=performance.now()}close(){!this.open_||this.leaving_||this.docked||(this.leaving_=!0,this.leaveTimer=window.setTimeout(()=>this.finishClose(),200))}connectedCallback(){super.connectedCallback(),this.renderRoot instanceof ShadowRoot&&this.card?.adopt(this.renderRoot)}disconnectedCallback(){super.disconnectedCallback(),this.finishClose()}finishClose(){clearTimeout(this.leaveTimer),this.leaveTimer=0;const e=this.open_,t=this.openedBy;this.openedBy=void 0,this.leaving_=!1,this.open_=!1;const i=this.renderRoot.querySelector("dialog");i?.open&&i.close(),e&&t?.isConnected&&t.focus()}willUpdate(e){e.has("card")&&this.renderRoot instanceof ShadowRoot&&this.card?.adopt(this.renderRoot)}updated(e){const t=this.renderRoot.querySelector("dialog");t&&!t.open&&this.open_&&!this.leaving_&&t.showModal(),e.has("open_")&&this.open_&&!this.docked&&requestAnimationFrame(()=>this.renderRoot.querySelector(".is-actions .fv-btn:last-child")?.focus({preventScroll:!0}))}onDialogClick(e){e.target===e.currentTarget&&performance.now()-this.openedAt>=350&&this.close()}get room(){const e=this.renderRoot.querySelector(".fv-sheet")?.clientWidth??0;return e>0?e-32:360}follow(e){window.open(e,"_blank","noopener")}buttonWord({label:e,short:t}){return t&&this.ruler.width("fv-btn",e)+32>this.room?t:e}linkInHead(e){if(!e.link)return!1;const t=e.secondary.split(" · ")[0]??"";return Math.max(this.ruler.width("fv-sheet__title",e.name),this.ruler.width("fv-card__sub",t))<=this.room-56-56}renderHead(e,i){const s=e.picture&&e.picture!==this.broken_?e.picture:"",o=this.room-56-(i?56:0),n=u(this.ruler,"fv-card__sub",e.secondary,o);return a`<div class="fv-sheet__head">
${s?a`<span class="is-pic" data-icon
><img
src=${s}
alt=""
draggable="false"
@error=${()=>{this.broken_=s}}
/></span>`:p(e.icon,e.tone)}
<div class="fv-card__titles">
<h2 class="fv-sheet__title" id="is-title" data-name>${e.name}</h2>
${n?a`<p class="fv-card__sub">${n}</p>`:t}
</div>
${i&&e.link?h("globe","quiet",e.link.label,()=>this.follow(e.link?.url??"")):t}
</div>`}renderFields(e){return a`<div class="is-fields">
${e.map(({label:e,value:t})=>a`<div class="is-field">
<span class="is-field__label">${e}</span
><span class="is-field__value">${t}</span>
</div>`)}
</div>`}renderSheet(){const e=this.hass,i=this.card?.item(),s=!!i&&this.linkInHead(i);return a`<div class="fv-sheet is-sheet" data-card>
<div class="fv-sheet__grabber"><span></span></div>
${i?a`${this.renderHead(i,s)}${i.rows.length?this.renderFields(i.rows):t}`:a`<div class="fv-sheet__head">
<div class="fv-card__titles">
<h2 class="fv-sheet__title" id="is-title">
${this.card?.title()??_(e,"title")}
</h2>
<p class="fv-card__sub">${_(e,"gone")}</p>
</div>
</div>`}
<div class="is-actions">
${i?.link&&!s?a`<button
class="fv-btn fv-btn--quiet"
data-control
data-target
@click=${()=>this.follow(i.link?.url??"")}
>
${this.buttonWord(i.link)}
</button>`:t}
<button class="fv-btn fv-btn--quiet" data-control data-target @click=${()=>this.close()}>
${n(e,"keypad.close")}
</button>
</div>
</div>`}render(){return this.open_?this.docked?this.renderSheet():a`<dialog
class=${this.leaving_?"is-leaving":""}
aria-labelledby="is-title"
@cancel=${e=>{e.preventDefault(),this.close()}}
@close=${()=>this.finishClose()}
@click=${e=>this.onDialogClick(e)}
@keydown=${g}
@touchstart=${b}
>
${this.renderSheet()}
</dialog>`:t}};customElements.get("fluvy-items-sheet")||customElements.define("fluvy-items-sheet",w);export{m as t};