/*! Fluvy v1.21.0 · a theme and card library for Home Assistant · SPDX-License-Identifier: GPL-3.0-only · https://github.com/acosta290/fluvy */
import{t}from"./rolldown-runtime-CvjMAzmL.js";import{$a as e,$c as s,$n as i,Ar as o,Bl as a,Cc as n,Ds as r,Ec as l,F as h,Gi as d,Hc as c,Ic as u,Ir as p,Jn as m,Kc as v,Ln as f,Mr as g,Nr as $,Oa as y,Os as _,Pl as w,Qa as b,Rr as k,Sc as x,Tr as C,Ul as S,Us as E,Vn as T,Wc as M,Zn as O,_r as L,ar as H,bc as D,dc as A,dl as j,dr as z,el as q,fa as R,fr as B,gr as F,hl as U,hr as W,ia as I,ic as N,jr as P,ki as V,kr as K,lc as Y,ll as G,mc as J,mr as Q,nc as X,nr as Z,oa as tt,ol as et,pr as st,ra as it,rc as ot,sc as at,sr as nt,tc as rt,tr as lt,uc as ht,wn as dt,zl as ct}from"./core-CIFC0YYZ.js";import{c as ut,d as pt,f as mt,i as vt,l as ft,p as gt,r as $t,s as yt,u as _t}from"./climate-iRfT41aG.js";import{L as wt,k as bt,l as kt,n as xt,ot as Ct}from"./chart-FC8dnVV-.js";import{a as St,o as Et}from"./shared-DlZQgqdD.js";import{l as Tt,n as Mt,t as Ot,u as Lt}from"./light-colour-Cqw4ImAf.js";import{a as Ht,c as Dt,i as At,l as jt,n as zt,o as qt,r as Rt,s as Bt}from"./media-iQGKV_KI.js";var Ft={[-1]:t=>x(t,-1),1:t=>x(t,1)},Ut=t=>e=>{0===e.detail&&e.currentTarget.fvStep?.(t)},Wt={[-1]:Ut(-1),1:Ut(1)};function It(t,e,s,i=()=>{}){return t.length?M`<div
class="fv-actions dt-keys"
data-fill-row
style="gap:${g(e,t.length).gap}px;grid-template-columns:repeat(${t.length}, minmax(0, 1fr))"
>
${t.map(t=>t.step?M`<button
class="fv-action"
data-control
data-target
data-key=${t.key}
aria-label=${t.label}
title=${t.label}
?disabled=${t.disabled??!1}
.fvStep=${i}
@pointerdown=${Ft[t.step]}
@pointerup=${D}
@pointerleave=${n}
@pointercancel=${n}
@click=${Wt[t.step]}
>
${X(t.glyph)}
</button>`:M`<button
class="fv-action ${t.on?`is-on fv-tone--${t.tone??"accent"}`:""}"
data-control
data-target
data-key=${t.key}
aria-label=${t.label}
aria-pressed=${void 0===t.on?c:String(t.on)}
title=${t.label}
?disabled=${t.disabled??!1}
@click=${()=>s(t.key)}
>
${X(t.glyph)}
</button>`)}
</div>`:c}var Nt=t=>t.chosen?t.word(t.chosen):"—",Pt=t=>"choice"===t.kind?z(t.title,Nt(t)):"switch"===t.kind?{name:t.title,end:56}:"tap"===t.kind?{name:t.title,sub:t.sub,end:44}:{name:t.title,end:t.end};function Vt(t,e,s,i){const o=Pt(i);return e-(s?12:68)-(o.end??Math.min(B(t,o.button??"",!0),L(e,s)))>=t.width("fv-row__title",i.title)}function Kt(t,e,s){return M`${st("link",e,`${t.title} · ${e}`,t=>{const e=t.currentTarget;import("./pages-DLk23L9o.js").then(t=>t.t).then(()=>{const t=e.nextElementSibling;t&&(t.open=!t.open)})},t.disabled,!0,!0,s)}<fluvy-select
anchored
.label=${t.title}
.value=${t.chosen??""}
.options=${t.options.map(e=>({value:e,label:t.word(e)}))}
?disabled=${t.disabled}
@fluvy-change=${e=>t.choose(e.detail.value)}
></fluvy-select>`}function Yt(t,e,s){if(!s.length)return c;const i=F(t,e,s.map(Pt))&&s.every(s=>Vt(t,e,!1,s));return M`<div class="dt-rows">
${s.map(s=>{const o={icon:i?s.icon:null,title:s.title,unavailable:s.disabled};if("switch"===s.kind)return N({...o,tone:s.disabled?"off":s.on?s.tone:"neutral",trailing:"switch",on:s.on,switchTone:s.tone,onToggle:s.toggle});const a=s.disabled?"off":"neutral";if("tap"===s.kind)return N({...o,tone:a,sub:s.sub,trailing:"chevron",onTap:s.disabled?void 0:s.tap});if("control"===s.kind)return N({...o,tone:a,trailing:s.control});const n=Nt(s),r=W(t,e,Pt(s))||!Vt(t,e,!0,s);return N({...o,tone:a,stack:r,trailing:Kt(s,n,!r||B(t,n,!0)<=e)})})}
</div>`}var Gt=t=>Array.isArray(t)?t.filter(t=>"string"==typeof t):[];G({sheets:{more:"More in Home Assistant",power:"Power",effect:"Effect",swing:"Swing",swing_horizontal:"Horizontal swing",sound_mode:"Sound mode",history:"Last 24 hours",history_open:"Open in History",history_none:"No history",valve:"Valve",window:"Window",door:"Door",battery:"Battery"}});var Jt=864e5,Qt={time:!0,axis:!1},Xt=class{constructor(t){this.host=t,this.key="",this.end=0}read({hass:t,entityId:e,spec:s}){const i=`${e}|${s.kind}`;if(i===this.key||!t)return this.readings;this.key=i,this.readings=void 0,this.end=Date.now();const o="state"===s.kind;t.callWS({type:"history/history_during_period",start_time:/* @__PURE__ */new Date(this.end-Jt).toISOString(),end_time:new Date(this.end).toISOString(),entity_ids:[e],minimal_response:o,no_attributes:o,significant_changes_only:!1}).then(t=>t?.[e]??[],()=>[]).then(t=>{if(this.key!==i)return;const e=t.flatMap(t=>{const e=function(t,e){if("state"===t.kind)return t.active(e.s)?1:0;const s=e.a?.[t.attribute];return"number"==typeof s&&Number.isFinite(s)?s:null}(s,t);return null===e?[]:[{t:1e3*t.lu,v:e}]});this.readings=e.length?e:null,this.host.requestUpdate()})}say(t,e){if(void 0===e)return[""];if(!e)return[j(t.hass,"sheets.history_none")];if("state"===t.spec.kind){const s=R(t.hass,function(t,e,s){let i=0;return t.forEach(({t:o,v:a},n)=>{const r=Math.max(e,o),l=Math.min(s,t[n+1]?.t??s);a>0&&l>r&&(i+=l-r)}),i/1e3}(e,this.end-Jt,this.end));return[`${t.spec.word} · ${s}`,s]}const{unit:i,digits:o}=t.spec,a=e=>s(t.hass,e,{digits:o,minDigits:o}),n=e.map(t=>t.v);return[`${a(Math.min(...n))} – ${a(Math.max(...n))} ${i}`.trim()]}draw(t,e){const s=Ct({readings:e,start:this.end-Jt,end:this.end,width:t.width,style:bt(void 0,Qt),hass:t.hass}),i={values:null===t.live?s.values:[...s.values.slice(0,-1),t.live],at:s.at,colour:t.tone,...t.accent?{accent:t.accent}:{}};return xt({frame:{width:t.width,height:48,headroom:8},series:[i],style:s.style,..."state"===t.spec.kind?{scale:{min:0,max:1}}:{},id:"fv"})}render(t){const e=this.read(t),s=j(t.hass,"sheets.history"),i=this.say(t,e),o=t.ruler.width("dt-day__label",s),a=e=>t.ruler.width("dt-day__say",e)+20,n=o+12+a(i[0]??"")>t.width,r=i.find(e=>a(e)<=t.width)??i[i.length-1]??"",l=wt({hours:24,now:this.end,time:e=>q(t.hass,new Date(e)),daysAgo:()=>"",nowWord:j(t.hass,"common.now"),holds:e=>m(t.ruler,t.width,e)});return M`<div class="dt-day">
<div class="dt-day__head ${n?"is-stacked":""}">
<span class="dt-day__label">${s}</span>
<span class="dt-day__say">${r}${u("chevron")}</span>
</div>
<div class="dt-day__plot fv-tone--${t.tone}">
${e&&t.width>0?this.draw(t,e):c}
</div>
${E(l)}
${at(`${t.name} · ${s}${r?` · ${r}`:""} · ${j(t.hass,"sheets.history_open")}`,t.open,void 0)}
</div>`}},Zt=v`:host(:not([docked])){display: contents;}dialog{position: fixed;inset: 0;width: 100%;height: 100%;max-width: none;max-height: none;flex-direction: column;justify-content: flex-end;align-items: center;overflow: hidden;padding: 0;border: 0;background: color-mix(in srgb, var(--fluvy-neutral-05) 48%, transparent);color: inherit;touch-action: none;overscroll-behavior: contain;animation: fv-fade 240ms var(--fv-ease) both;}dialog[open]{display: flex;}dialog::backdrop{background: none;}@keyframes dt-up{from{transform: translateY(100%);}to{transform: none;}}@keyframes dt-down{to{transform: translateY(100%);}}@keyframes dt-rise{from{opacity: 0;transform: translateY(12px) scale(0.98);}to{opacity: 1;transform: none;}}@keyframes dt-sink{to{opacity: 0;transform: translateY(12px) scale(0.98);}}@keyframes dt-out{to{opacity: 0;}}dialog .fv-sheet{max-width: 392px;overflow-y: auto;touch-action: pan-y;overscroll-behavior: contain;zoom: var(--fv-zoom, 1);animation: dt-up 320ms var(--fv-ease-out) both;}dialog.is-leaving{animation: dt-out 200ms var(--fv-ease) both;}dialog.is-leaving .fv-sheet{animation: dt-down 200ms var(--fv-ease) both;}.fv-sheet{position: relative;width: 100%;}:host([wide]) dialog{box-sizing: border-box;justify-content: center;padding-block: var(--safe-area-inset-top, env(safe-area-inset-top, 0px)) var(--safe-area-inset-bottom, env(safe-area-inset-bottom, 0px));}:host([wide]) .fv-sheet{border-radius: var(--fluvy-radius-xl);box-shadow: 0 0 0 1px var(--fluvy-edge, var(--fluvy-border)), 0 24px 64px -24px rgb(0 0 0 / calc(0.4 * var(--fluvy-shade, 1)));}:host([wide]) dialog .fv-sheet{max-height: calc(100% - 48px);padding-bottom: 16px;animation: dt-rise 240ms var(--fv-ease-out) both;}:host([wide]) dialog.is-leaving .fv-sheet{animation: dt-sink 200ms var(--fv-ease) both;}:host([wide]) .fv-sheet__grabber{height: 16px;}:host([wide]) .fv-sheet__grabber span{display: none;}@media (prefers-reduced-motion: reduce){dialog, dialog .fv-sheet{animation: none !important;}}:host([reduced-motion]) :is(dialog, dialog .fv-sheet){animation: none !important;}.fv-sheet__head > .fv-card__titles{flex: 1 1 auto;min-width: 0;}.fv-sheet__title, .fv-sheet__head .fv-card__sub{overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}.dt-pic{flex: 0 0 44px;width: 44px;height: 44px;overflow: hidden;border-radius: 50%;background: var(--fluvy-inset, var(--fluvy-page));}.dt-pic img{display: block;width: 100%;height: 100%;object-fit: cover;}.dt-rounds{display: flex;flex: none;gap: 8px;}.fv-sheet__head.is-stacked{flex-wrap: wrap;row-gap: 8px;height: auto;}.fv-sheet__head.is-stacked > .fv-card__titles{order: 1;flex-basis: 100%;}.dt-hero{display: flex;justify-content: center;margin-top: 16px;}.dt-keys .fv-action.is-on{background: var(--tone-fill);box-shadow: inset 0 0 0 1px var(--tone-border);color: var(--tone-on);}.dt-rows{margin-top: 8px;}.dt-day{position: relative;margin-top: 16px;padding-top: 12px;border-radius: var(--fluvy-radius-control);}.dt-day::before{content: '';position: absolute;top: 0;right: 0;left: 0;height: 1px;background: var(--fluvy-border);}.dt-day__head{display: flex;align-items: center;justify-content: space-between;gap: 12px;height: 20px;}.dt-day__head.is-stacked{flex-direction: column;align-items: flex-start;gap: 0;height: 40px;}.dt-day__label{font-size: 11px;font-weight: 600;line-height: 20px;letter-spacing: 0.06em;text-transform: uppercase;white-space: nowrap;color: var(--fluvy-text-secondary);}.dt-day__say{display: inline-flex;align-items: center;gap: 4px;min-width: 0;font-size: 13px;font-weight: 500;line-height: 20px;font-variant-numeric: tabular-nums;white-space: nowrap;color: var(--fluvy-text-secondary);}.dt-day__say svg{width: 16px;height: 16px;}.dt-day__plot{position: relative;height: 48px;margin-top: 8px;}.dt-day__plot .fv-curve{overflow: visible;}.dt-day .fv-axis{margin-top: 4px;}.dt-body.is-unavailable .is-unavailable{opacity: 1;}`,te=t=>{"Escape"===t.key&&t.stopPropagation()},ee={handleEvent:t=>t.stopPropagation(),passive:!0},se=class extends V{static{this.styles=[...V.styles,Q,kt,Zt,St]}static{this.properties={...V.properties,open_:{state:!0},leaving_:{state:!0},wide_:{state:!0},broken_:{state:!0}}}constructor(){super(),this.ruler=new I(()=>this.renderRoot),this.day=new Xt(this),this.zoom=1,this.openedAt=0,this.leaveTimer=0,this.frame=0,this.follow=()=>{const t=(this.source?.isConnected?this.source.rawHass:void 0)??y();t&&t!==this.rawHass&&(this.hass=t),this.frame=requestAnimationFrame(this.follow)},this.leave=()=>{this.docked||this.finishClose()},this.onScreen=()=>{this.docked||(this.wide_=this.screen?.matches??!1),this.mark()},this.open_=!1,this.leaving_=!1,this.wide_=!1,this.broken_="",new it(this,()=>{this.ruler.clear(),this.requestUpdate()}),new Et(this,()=>this.renderRoot.querySelector(".fv-sheet"),()=>this.room)}get docked(){return Boolean(this.config?._docked)}get surface(){return!1}setConfig(t){super.setConfig(t),this.docked&&(this.open_=!0,this.wide_="wide"===t._docked),this.mark()}mark(){this.toggleAttribute("docked",this.docked),this.toggleAttribute("wide",this.wide_)}open(t,e,s=1){clearTimeout(this.leaveTimer),this.leaveTimer=0,this.openedBy=t,this.source=e,this.zoom=s,this.style.setProperty("--fv-zoom",String(s)),this.isConnected&&this.watchScreen(),this.leaving_=!1,this.open_=!0,this.openedAt=performance.now(),cancelAnimationFrame(this.frame),this.frame=requestAnimationFrame(this.follow)}close(){!this.open_||this.leaving_||this.docked||(this.leaving_=!0,this.leaveTimer=window.setTimeout(()=>this.finishClose(),200))}watchScreen(){this.screen?.removeEventListener("change",this.onScreen),this.screen="function"==typeof matchMedia?matchMedia((t=>{const e=Math.round(600*t);return`(min-width: ${e}px) and (min-height: ${e}px)`})(this.zoom)):void 0,this.screen?.addEventListener("change",this.onScreen),this.onScreen()}connectedCallback(){super.connectedCallback(),this.watchScreen(),window.addEventListener("location-changed",this.leave),window.addEventListener("popstate",this.leave)}disconnectedCallback(){super.disconnectedCallback(),this.screen?.removeEventListener("change",this.onScreen),window.removeEventListener("location-changed",this.leave),window.removeEventListener("popstate",this.leave),this.finishClose()}finishClose(){clearTimeout(this.leaveTimer),this.leaveTimer=0,cancelAnimationFrame(this.frame);const t=this.open_&&!this.docked,e=this.openedBy;if(this.openedBy=void 0,this.source=void 0,!t)return;this.leaving_=!1,this.open_=!1;const s=this.renderRoot.querySelector("dialog");s?.open&&s.close(),e?.isConnected&&e.focus(),this.dispatchEvent(new CustomEvent("fluvy-closed"))}updated(t){super.updated(t),this.mark();const e=this.renderRoot.querySelector("dialog");e&&!e.open&&this.open_&&!this.leaving_&&e.showModal(),t.has("open_")&&this.open_&&!this.docked&&requestAnimationFrame(()=>this.renderRoot.querySelector(".dt-close")?.focus())}onDialogClick(t){t.target===t.currentTarget&&performance.now()-this.openedAt>=350&&this.close()}get room(){const t=this.renderRoot.querySelector(".fv-sheet")?.clientWidth??0;return t>0?t-32:360}get ring(){return Math.min(96,Math.max(56,4*Math.floor(this.room/8)-28))}get large(){return this.ring>=80}dialWords(t){const e=8*Math.floor((this.ring-10)/4);return this.ruler.width("fv-dial__sub",t)<=e-16?t:""}more(){const t=this.config?.entity,e=this.source?.isConnected?this.source:document.querySelector("home-assistant")??this;this.finishClose(),t&&r(e,t)}history(){const t=this.config?.entity;if(!t)return;const e=/* @__PURE__ */new Date(Date.now()-864e5).toISOString();this.finishClose(),_(`/history?entity_id=${encodeURIComponent(t)}&start_date=${encodeURIComponent(e)}&back=1`)}renderHead(t,e,s){const i=s?"off":this.active(t)?this.tone(t):"neutral",o=s?"":this.picture?.(t)??"",a=o&&o!==this.broken_?o:"",n=s?{parts:[et(this.hass,t)]}:this.status(t),r=t=>this.ruler.width("fv-card__sub",t),[l="",...h]=n.parts.filter(Boolean),u=this.room-56-108,p=Math.min(96,this.ruler.width("fv-sheet__title",e)),m=n.name?Math.min(96,r(l)):r(l),v=u<Math.max(p,m),f=tt([{text:t.areaName===e?"":t.areaName,optional:!0},{text:l},...h.map(t=>({text:t,optional:!0}))],v?this.room:u,r);return M`<div class="fv-sheet__head ${v?"is-stacked":""}">
${a?M`<span class="dt-pic" data-icon
><img
src=${a}
alt=""
draggable="false"
@error=${()=>{this.broken_=a}}
/></span>`:rt(d(t),i)}
<div class="fv-card__titles">
<h2 class="fv-sheet__title" id="dt-title" data-name>${e}</h2>
<p class="fv-card__sub" data-name=${n.name?"":c}>${f}</p>
</div>
<div class="dt-rounds">
${Y("dots","quiet",this.t("sheets.more"),()=>this.more(),!1,"dt-more")}
${Y("close","quiet",this.t("keypad.close"),()=>this.close(),!1,"dt-close")}
</div>
</div>`}renderDay(t,e,s){return this.day.render({hass:this.hass,entityId:t.id,spec:this.daySpec(t),width:this.room,tone:s?"neutral":this.tone(t),accent:s?void 0:this.accent?.(t),live:s?null:this.dayLevel(t),ruler:this.ruler,name:e,open:()=>this.history()})}renderSheet(){const t=this.entity(),e=this.nameFor(t,void 0),s=!ct(t);return M`<div
class="fv-sheet dt-sheet"
data-card
data-accent=${(s?void 0:this.accent?.(t))??c}
>
<div class="fv-sheet__grabber"><span></span></div>
${this.renderHead(t,e,s)}
<div class="dt-body ${s?"is-unavailable":""}">
${this.renderBody(t,s)}
</div>
${this.renderDay(t,e,s)}
</div>`}renderCard(){return this.open_?this.docked?this.renderSheet():M`<dialog
class=${this.leaving_?"is-leaving":""}
aria-labelledby="dt-title"
@cancel=${t=>{t.preventDefault(),this.close()}}
@close=${()=>this.finishClose()}
@click=${t=>this.onDialogClick(t)}
@keydown=${te}
@touchstart=${ee}
>
${this.renderSheet()}
</dialog>`:c}},ie=[{title:"climate.preset",icon:"sliders",list:"preset_modes",attribute:"preset_mode",service:"set_preset_mode"},{title:"climate.fan",icon:"fan",list:"fan_modes",attribute:"fan_mode",service:"set_fan_mode"},{title:"sheets.swing",icon:"swing",list:"swing_modes",attribute:"swing_mode",service:"set_swing_mode"},{title:"sheets.swing_horizontal",icon:"swap",list:"swing_horizontal_modes",attribute:"swing_horizontal_mode",service:"set_swing_horizontal_mode"}],oe=(t,e)=>t?.value===e?.value&&t?.low===e?.low&&t?.high===e?.high;customElements.get("fluvy-details-climate")||customElements.define("fluvy-details-climate",class extends se{constructor(...t){super(...t),this.stepped=new o(this),this.burst=new K,this.chosen=/* @__PURE__ */new Map,this.rangeEnd=null,this.ask={}}disconnectedCallback(){super.disconnectedCallback(),this.burst.flush(),this.stepped.clear();for(const t of this.chosen.values())t.clear()}setConfig(t){super.setConfig(t),this.ask=t}open(t,e,s){this.ask=function(t,e){const s=t?.config;return s?String(s.type).endsWith("fluvy-thermostat-card")?s:!0===((Array.isArray(s.tiles)?s.tiles:[]).find(t=>"object"==typeof t&&null!==t&&"entity"in t&&t.entity===e)?.show_action??s.show_action)?{show_window:!0}:{}:{}}(e,this.config?.entity),super.open(t,e,s)}model(t){return this.read?.view!==t&&(this.read={view:t,model:ft({hass:this.hass,rawHass:this.rawHass,state:t=>this.stateOf(t),ask:this.ask},t)}),this.read.model}percent(t){return`${s(this.hass,t,{digits:0})} %`}tone(t){return this.model(t).tone}active(t){return!this.model(t).off}status(t){const e=mt(this.hass,t,this.ask),s=pt(this.hass,t,this.ask);return this.follows(this.ask.state_entity),this.follows(s?.entity),{parts:[this.model(t).doing.text,e?this.percent(e.value):"",s?`${this.percent(s.value)} RH`:""]}}readings(t,e){const s=mt(this.hass,t,this.ask),i=gt(this.hass,t,this.ask),o=_t(this.hass,t,this.ask);for(const n of[s,i,o])this.follows(n?.entity);const a=(t,s,i,o="")=>({kind:"control",icon:t,title:s,disabled:e,control:M`<span class="fv-row__value ${o}">${i}</span>`,end:this.ruler.width("fv-row__value",i)});return[...s?[a("drop",this.t("sheets.valve"),this.percent(s.value))]:[],...i?[a(i.door?i.open?"doorOpen":"door":i.open?"windowOpen":"window",this.t(i.door?"sheets.door":"sheets.window"),this.t(i.open?"common.open":"common.closed"),i.open?"fv-row__value--warning":"fv-row__value--quiet")]:[],...o?[a("battery",this.t("sheets.battery"),this.percent(o.value),o.value<=20?"fv-row__value--warning":"")]:[]]}daySpec(t){const e=this.model(t);return{kind:"value",attribute:"humidifier"===e.kind?"current_humidity":"current_temperature",unit:e.unit,digits:"%"===e.unit?0:1}}dayLevel(t){return this.model(t).current??null}setTarget(t,e,s){const i=ut(e,s);i&&this.call(e.kind,i[0],i[1],t.id)}target(t){const e=void 0!==t.low&&void 0!==t.high?{low:t.low,high:t.high}:void 0!==t.target?{value:t.target}:null;return this.stepped.read(e,oe)}step(t,e){const s=this.model(t),i=this.target(s);if(!i||s.off)return;const o=yt(i,e,s,this.rangeEnd??("cooling"===s.action?1:0));this.stepped.set(o),this.burst.push(()=>this.setTarget(t,s,o))}dialled(t,e){void 0!==e.low&&void 0!==e.high&&(this.rangeEnd=e.high!==t?.high?1:0),this.stepped.clear()}rows(t,e){return ie.flatMap(s=>{const i=Gt(t.attr(s.list));if(!i.length)return[];let a=this.chosen.get(s.attribute);a||this.chosen.set(s.attribute,a=new o(this));const n=a;return[{kind:"choice",icon:s.icon,title:this.t(s.title),chosen:n.read(t.attr(s.attribute)??null),options:i,word:e=>O(this.rawHass,t,s.attribute,e),disabled:e,choose:e=>{n.set(e),this.call("climate",s.service,{[s.attribute]:e},t.id)}}]})}renderBody(t,e){const i=this.nameFor(t,void 0),o=this.model(t),a="%"===o.unit,n=o.step<1?1:0,r=t=>`${s(this.hass,t,{digits:0})}${a?" %":"°"}`,l=void 0===o.current?"":this.t("climate.current",{value:a?`${s(this.hass,o.current,{digits:0})} %`:`${s(this.hass,o.current,{digits:1})}°`}),h=this.target(o),d=e||o.off||!h,u=this.t("climate.target"),p=vt("climate"===o.kind,o.modes);return M`<div class="dt-hero">
<fluvy-dial
.radius=${this.ring}
.large=${this.large}
.stepper=${!1}
.tone=${d?"neutral":o.tone}
.min=${o.min}
.max=${o.max}
.step=${o.step}
.arc=${o.arc}
.value=${h?.value}
.low=${h?.low}
.high=${h?.high}
.current=${o.current}
.unit=${o.unit}
.sub=${this.dialWords(l)}
.text=${e?"—":o.off?this.t("climate.mode.off"):h?void 0:"—"}
.name=${`${i} · ${u}`}
min-label=${r(o.min)}
max-label=${r(o.max)}
?disabled=${d}
.format=${t=>s(this.hass,t,{digits:n,minDigits:n})}
@fluvy-input=${t=>this.dialled(h,t.detail)}
@fluvy-change=${e=>{this.dialled(h,e.detail),this.setTarget(t,o,e.detail)}}
></fluvy-dial>
</div>
${It([{key:"down",glyph:"minus",label:`${i} · ${u} · ${this.t("common.decrease")}`,step:-1,disabled:d},{key:"up",glyph:"plus",label:`${i} · ${u} · ${this.t("common.increase")}`,step:1,disabled:d}],this.room,()=>{},e=>this.step(t,e))}
${p.length?M`${ot(this.t("climate.mode"))}${C(p.map(t=>({key:t.key,label:t.label,active:t.active??!1,unavailable:e,...t.glyph?{glyph:t.glyph}:{},...t.tone?{tone:t.tone}:{}})),e=>{this.stepped.clear(),$t(this.controlHost,t,o,e)},"full",{ruler:this.ruler,width:this.room})}`:c}
${Yt(this.ruler,this.room,[...this.readings(t,e),..."climate"===o.kind?this.rows(t,e):[]])}`}});var ae=(t,e)=>null!==t&&null!==e&&Math.abs(t-e)<=1,ne=(t,e)=>{const s=a(t,e);return null===s?null:J(Math.round(s),0,100)};customElements.get("fluvy-details-cover")||customElements.define("fluvy-details-cover",class extends se{constructor(...t){super(...t),this.travelling=!1,this.target=new o(this,()=>this.travelling),this.tilt=new o(this),this.tiltSteps=new P(this)}disconnectedCallback(){super.disconnectedCallback(),p(this.renderRoot),this.target.clear(),this.tilt.clear()}motion(t){const e=ne(t,"current_position"),s=null!==e?e>=100:"open"===t.state,i=null!==e?e<=0:"closed"===t.state,o=this.stateOf(t),a="opening"===o&&s||"closing"===o&&i?t.state:o;return{reported:e,fullyOpen:s,fullyClosed:i,shown:a,moving:"opening"===a||"closing"===a}}commands(t,e,s,i){const o=!0===t.attr("assumed_state"),a=(t,e,o,a)=>({key:t,glyph:e,label:`${s} · ${o}`,disabled:i||a});return[...t.supports(1)?[a("open","up",this.t("cover.open"),!o&&(e.fullyOpen||"opening"===e.shown))]:[],...t.supports(8)?[a("stop","stop",this.t("cover.stop"),!1)]:[],...t.supports(2)?[a("close","down",this.t("cover.close"),!o&&(e.fullyClosed||"closing"===e.shown))]:[]]}command(t,e){const s="valve"===t.domain;if("stop"===e)return this.target.clear(),this.expect(t.id,t.state),void this.call(t.domain,s?"stop_valve":"stop_cover");const i="open"===e;t.supports(4)&&null!==ne(t,"current_position")&&this.target.set(i?100:0),this.expect(t.id,i?"opening":"closing"),this.call(t.domain,s?i?"open_valve":"close_valve":i?"open_cover":"close_cover")}moveTo(t,e){const s=J(Math.round(e),0,100);this.target.set(s),this.expect(t.id,t.state),this.call(t.domain,"valve"===t.domain?"set_valve_position":"set_cover_position",{position:s})}position(t){return null===t.reported?null:this.target.read(t.reported,ae)}percent(t){return s(this.hass,t,{digits:0})}tone(t){return"valve"===t.domain?"water":"accent"}active(t){const e=this.motion(t),s=this.position(e);return e.moving||(null!==s?s>0:"closed"!==e.shown)}status(t){const e=this.motion(t),s=this.position(e),i=k(this.hass,t,e.shown);return{parts:null!==s&&s>0&&s<100?[i,`${this.percent(s)} %`]:[i]}}daySpec(t){return{kind:"state",active:t=>"open"===t||"opening"===t||"closing"===t,word:k(this.hass,t,"open")}}dayLevel(t){return this.active(t)?1:0}renderTilt(t,s,i){const o=this.t("cover.tilt");if(!t.supports(128))return M`${Yt(this.ruler,this.room,[{kind:"control",icon:"tilt",title:o,disabled:i,end:96,control:this.tiltSteps.get(`${s}|${o}|${i}`,()=>A(t=>this.call("cover",t>0?"open_cover_tilt":"close_cover_tilt"),{disabled:i,decrease:`${s} · ${o} · ${this.t("cover.close")}`,increase:`${s} · ${o} · ${this.t("cover.open")}`}))}])}`;const a=this.tilt.read(ne(t,"current_tilt_position"),ae);return M`${ot(o)}
<fluvy-ruler
.value=${a??0}
.min=${0}
.max=${100}
.step=${1}
.length=${this.room}
.tone=${this.tone(t)}
?inactive=${null===a}
?disabled=${i}
.look=${e(void 0)}
?still=${b()}
unit="%"
.label=${`${s} · ${o}`}
.format=${t=>this.percent(t)}
@fluvy-change=${t=>{const e=Math.round(t.detail.value);this.tilt.set(e),this.call("cover","set_cover_tilt_position",{tilt_position:e})}}
></fluvy-ruler>
${ht([[0,this.percent(0)],[.5,this.percent(50)],[1,this.percent(100)]])}`}renderBody(t,e){const s=this.nameFor(t,void 0),i=this.motion(t);this.travelling=i.moving;const o=this.position(i),a=!e&&this.active(t),n=t.supports(4),r="cover"===t.domain&&(t.supports(128)||t.supports(16)||t.supports(32)),l=this.t("cover.position");return M`<div class="dt-hero">
<fluvy-dial
.radius=${this.ring}
.large=${this.large}
.stepper=${!1}
.tone=${a?this.tone(t):"neutral"}
.min=${0}
.max=${100}
.step=${1}
.value=${n?o??void 0:void 0}
.gauge=${!n}
.fill=${n?void 0:a?1:0}
.unit=${"%"}
.sub=${n?this.dialWords(l):""}
.text=${e||n&&null===o?"—":n?void 0:k(this.hass,t,i.shown)}
.name=${`${s} · ${l}`}
min-label=${n?this.percent(0):""}
max-label=${n?this.percent(100):""}
?disabled=${e||n&&null===o}
.format=${t=>this.percent(t)}
@fluvy-change=${e=>this.moveTo(t,e.detail.value??0)}
></fluvy-dial>
</div>
${It(this.commands(t,i,s,e),this.room,e=>this.command(t,e))}
${r?this.renderTilt(t,s,e):c}`}});var re=U("fan"),le=class extends se{static{this.properties={...se.properties,dragged:{state:!0}}}constructor(){super(),this.speed=new o(this),this.burst=new K,this.oscillating=new o(this),this.direction=new o(this),this.preset=new o(this),this.dragged=null}disconnectedCallback(){super.disconnectedCallback(),this.burst.flush();for(const t of[this.speed,this.oscillating,this.direction,this.preset])t.clear()}speedOf(t,e){const s=a(t,"percentage"),i="ok"!==t.status?null:e?null===s?null:J(s,0,100):0,o=50/f(t);return this.speed.read(i,(t,e)=>null!==t&&null!==e&&Math.abs(t-e)<=o)}setSpeed(t,e,s){const i=T(e);this.speed.set(i),this.expect(t.id,i>0?"on":"off");const o=()=>this.call("fan","set_percentage",{percentage:i});s?this.burst.push(o):(this.burst.flush(),o())}stepSpeed(t,e){const s=f(t),i=this.speedOf(t,this.on(t))??0,o=J(Math.round(i*s/100)+e,0,s);this.setSpeed(t,100*o/s,!0)}power(t,e){this.burst.flush(),this.speed.clear(),this.expect(t.id,e?"on":"off"),this.call("fan",e?"turn_on":"turn_off")}on(t){return"on"===this.stateOf(t)}percent(t){return s(this.hass,t,{digits:0})}tone(){return"fan"}active(t){return this.on(t)}status(t){const e=this.on(t),s=k(this.hass,t,this.stateOf(t)),i=t.supports(1)?this.speedOf(t,e):null;return{parts:e&&null!==i?[s,`${this.percent(i)} %`]:[s]}}daySpec(t){return{kind:"state",active:t=>"on"===t,word:k(this.hass,t,"on")}}dayLevel(t){return this.on(t)?1:0}rows(t,e){const s=[];if(t.supports(2)&&s.push({kind:"switch",icon:"swing",title:this.t("fan.oscillate"),on:this.oscillating.read(!0===t.attr("oscillating")),tone:"fan",disabled:e,toggle:t=>{this.oscillating.set(t),this.call("fan","oscillate",{oscillating:t})}}),t.supports(4)){const i=t.attr("direction"),o=this.direction.read("forward"===i||"reverse"===i?i:null),a="reverse"===o?"forward":"reverse";s.push({kind:"tap",icon:"auto",title:this.t("fan.direction"),sub:o?re(this.hass,o):"",disabled:e,tap:()=>{this.direction.set(a),this.call("fan","set_direction",{direction:a})}})}const i=t.supports(8)?Gt(t.attr("preset_modes")):[];return i.length&&s.push({kind:"choice",icon:"sliders",title:this.t("fan.preset"),chosen:this.preset.read(t.attr("preset_mode")??null),options:i,word:e=>O(this.rawHass,t,"preset_mode",e),disabled:e,choose:e=>{this.preset.set(e),this.expect(t.id,"on"),this.call("fan","set_preset_mode",{preset_mode:e})}}),s}renderBody(t,e){const s=this.nameFor(t,void 0),i=!e&&this.on(t),o=t.supports(1),a=o?this.speedOf(t,i):null,n=i||null!==this.dragged,r=this.t("fan.speed"),l=(t,i,o)=>({key:i,glyph:i,label:`${s} · ${r} · ${o}`,step:t,disabled:e}),h=[...o?[l(-1,"minus",this.t("common.decrease"))]:[],{key:"power",glyph:"power",label:`${s} · ${this.t("sheets.power")}`,on:i,tone:"fan",disabled:e},...o?[l(1,"plus",this.t("common.increase"))]:[]];return M`<div class="dt-hero">
<fluvy-dial
.radius=${this.ring}
.large=${this.large}
.stepper=${!1}
.tone=${n?"fan":"neutral"}
.min=${0}
.max=${100}
.step=${100/f(t)}
.value=${o?a??void 0:void 0}
.gauge=${!o}
.fill=${o?void 0:i?1:0}
.unit=${"%"}
.sub=${o?this.dialWords(r):""}
.text=${e||o&&i&&null===a?"—":o&&n?void 0:k(this.hass,t,i?"on":"off")}
.name=${`${s} · ${r}`}
min-label=${o?this.percent(0):""}
max-label=${o?this.percent(100):""}
?disabled=${e||o&&null===a}
.format=${t=>this.percent(t)}
@fluvy-input=${t=>{this.dragged=t.detail.value??null}}
@fluvy-change=${e=>{this.dragged=null,this.setSpeed(t,e.detail.value??0,!1)}}
></fluvy-dial>
</div>
${It(h,this.room,()=>this.power(t,!i),e=>this.stepSpeed(t,e))}
${Yt(this.ruler,this.room,this.rows(t,e))}`}};customElements.get("fluvy-details-fan")||customElements.define("fluvy-details-fan",le);var he=class extends se{constructor(...t){super(...t),this.level=new dt(this,t=>this.send(t)),this.heldColour=null,this.colourTimer=0,this.effect=new o(this)}static{this.styles=[...se.styles,Lt]}watched(){return nt(super.watched(),this.hass)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.colourTimer),this.effect.clear()}send(t){t<=0?this.call("light","turn_off"):this.call("light","turn_on",{brightness_pct:t})}on(t){return"on"===this.stateOf(t)||(this.level.chosen??0)>0}reported(t){const e=t.attr("brightness");return this.on(t)&&"number"==typeof e?Math.max(1,Math.round(e/255*100)):0}percent(t){return s(this.hass,t,{digits:0})}tone(){return"light"}active(t){return this.on(t)}accent(t){const e=this.heldColour?.choice,s=e&&"rgb"in e?Z(e.rgb):H(t,this.on(t),void 0,this.hass);return s?this.accents.item(s):void 0}status(t){const e=this.on(t),s=k(this.hass,t,e?"on":this.stateOf(t)),i=this.level.preview??this.level.read(this.reported(t));return{parts:e&&lt(Gt(t.attr("supported_color_modes")))&&i>0?[s,`${this.percent(i)} %`]:[s]}}daySpec(t){return{kind:"state",active:t=>"on"===t,word:k(this.hass,t,"on")}}dayLevel(t){return this.on(t)?1:0}pickColour(t,e,s){this.heldColour={choice:e,expires:Date.now()+5e3},clearTimeout(this.colourTimer),this.colourTimer=window.setTimeout(()=>{this.heldColour=null,this.requestUpdate()},5e3),this.expect(t.id,"on"),this.call("light","turn_on",s)}renderTemperature(t,s,i,o,a,n){const r=this.t("light.temperature");return M`${ot(this.ruler.width("fv-label",r)<=this.room?r:this.t("light.temperature_short"))}
<fluvy-ruler
.value=${i}
.min=${o}
.max=${a}
.step=${50}
.length=${this.room}
tone="accent"
.minor=${.1}
.major=${.5}
?inactive=${!s}
?disabled=${n}
.look=${e(void 0)}
?still=${b()}
tint="warm-cool"
unit="K"
.label=${`${t} · ${r}`}
.format=${t=>this.percent(t)}
@fluvy-change=${t=>this.call("light","turn_on",{color_temp_kelvin:t.detail.value})}
></fluvy-ruler>
${ht([[0,this.t("light.warm")],[1,this.t("light.cool")]])}`}renderColour(t,s,o,a,n){const r=t.attr("color_temp_kelvin"),l=t.attr("min_color_temp_kelvin")??2e3,h=t.attr("max_color_temp_kelvin")??6500;this.heldColour&&(Date.now()>this.heldColour.expires||Tt(t,this.heldColour.choice,h-l))&&(this.heldColour=null);const d=a.includes("color_temp")?()=>this.renderTemperature(s,o,r??l,l,h,n):void 0;return a.some(t=>i.has(t))?Mt({bulb:Ot(t,o,this.heldColour?.choice??null),t:t=>this.t(t),name:s,width:this.room,on:o,colors:void 0,minK:l,maxK:h,format:t=>this.percent(t),temperature:d,disabled:n,look:e(void 0),still:b(),words:t=>t,host:this,pick:(e,s)=>this.pickColour(t,e,s)}):d?.()??c}renderBody(t,e){const s=this.nameFor(t,void 0),i=!e&&this.on(t),o=Gt(t.attr("supported_color_modes")),a=lt(o),n=this.level.read(this.reported(t)),r=i||null!==this.level.preview,l=e||!r?"neutral":"light",h=this.t("light.brightness"),d=[...a?[{key:"down",glyph:"minus",label:`${s} · ${this.t("common.decrease")}`,step:-1,disabled:e}]:[],{key:"power",glyph:"power",label:`${s} · ${this.t("sheets.power")}`,on:i,tone:"light",disabled:e},...a?[{key:"up",glyph:"plus",label:`${s} · ${this.t("common.increase")}`,step:1,disabled:e}]:[]],u=t.supports(4)?Gt(t.attr("effect_list")):[],p=this.effect.read(t.attr("effect")??null);return M`<div class="dt-hero">
<fluvy-dial
.radius=${this.ring}
.large=${this.large}
.stepper=${!1}
.tone=${l}
.min=${0}
.max=${100}
.step=${1}
.value=${a?n:void 0}
.gauge=${!a}
.fill=${a?void 0:i?1:0}
.unit=${"%"}
.sub=${a?this.dialWords(h):""}
.text=${e?"—":a&&r?void 0:k(this.hass,t,i?"on":"off")}
.name=${`${s} · ${h}`}
min-label=${a?this.percent(0):""}
max-label=${a?this.percent(100):""}
?disabled=${e}
.format=${t=>this.percent(t)}
@fluvy-input=${t=>this.level.input(t.detail.value??0,!1)}
@fluvy-change=${t=>this.level.set(t.detail.value??0)}
></fluvy-dial>
</div>
${It(d,this.room,()=>{this.expect(t.id,i?"off":"on"),this.call("light",i?"turn_off":"turn_on")},t=>this.level.step(J(this.level.current+t,0,100)))}
${a?this.renderColour(t,s,i,o,e):c}
${Yt(this.ruler,this.room,u.length?[{kind:"choice",icon:"sparkle",title:this.t("sheets.effect"),chosen:p,options:u,word:e=>O(this.rawHass,t,"effect",e),disabled:e,choose:e=>{this.effect.set(e),this.expect(t.id,"on"),this.call("light","turn_on",{effect:e})}}]:[])}`}};customElements.get("fluvy-details-light")||customElements.define("fluvy-details-light",he);var de=t=>!At(t)&&!["idle","unavailable","unknown",""].includes(t);customElements.get("fluvy-details-media")||customElements.define("fluvy-details-media",class extends se{constructor(...t){super(...t),this.volume=new o(this),this.input=new o(this),this.sound=new o(this)}disconnectedCallback(){super.disconnectedCallback();for(const t of[this.volume,this.input,this.sound])t.clear()}tone(){return"media"}active(t){return Ht(this.stateOf(t))}status(t){const e=this.stateOf(t),s=At(e)?"":S(t,"media_title");return s?{parts:[s,S(t,"media_artist")],name:!0}:{parts:[k(this.hass,t,e)]}}picture(t){return At(this.stateOf(t))?"":qt(this.hass,t)}daySpec(t){return{kind:"state",active:de,word:k(this.hass,t,"on")}}dayLevel(t){return de(this.stateOf(t))?1:0}keysOf(t,e,s,i){const o=At(s),a=!0===t.attr("is_volume_muted"),n=Ht(s),r=(t,s,o)=>({glyph:t,label:`${e} · ${s}`,disabled:i||o}),l={...jt(t,s)?{power:{...r("power",this.t(o?"media.power_on":"media.power_off"),!1),on:!o,tone:"media"}}:{},...t.supports(zt.PREVIOUS)?{previous:r("prev",this.t("media.previous"),o)}:{},...Dt(t)?{play:r(n?"pause":"play",this.t(n?"media.pause":"media.play"),!1)}:{},...t.supports(zt.NEXT)?{next:r("next",this.t("media.next"),o)}:{},...t.supports(zt.VOLUME_MUTE)?{volume:{...r(a?"volumeOff":"volume",this.t(a?"media.unmute":"media.mute"),o),on:a,tone:"media"}}:{}};return Rt(h.filter(t=>l[t]),$(this.room)).map(t=>({key:t,...l[t]}))}press(t,e){const s=this.stateOf(t);if("power"===e){const e=jt(t,s);if(!e)return;this.expect(t.id,e.expect),this.call("media_player",e.service)}else if("play"===e){const e=Bt(t,s);this.expect(t.id,e.expect),this.call("media_player",e.service)}else"volume"===e?this.call("media_player","volume_mute",{is_volume_muted:!0!==t.attr("is_volume_muted")}):this.call("media_player","next"===e?"media_next_track":"media_previous_track")}rows(t,e){const s=t.supports(zt.SELECT_SOURCE)?Gt(t.attr("source_list")):[],i=t.supports(65536)?Gt(t.attr("sound_mode_list")):[];return[...s.length?[{kind:"choice",icon:"tv",title:this.t("media.source"),chosen:this.input.read(S(t,"source")||null),options:s,word:t=>t,disabled:e,choose:t=>{this.input.set(t),this.call("media_player","select_source",{source:t})}}]:[],...i.length?[{kind:"choice",icon:"speaker",title:this.t("sheets.sound_mode"),chosen:this.sound.read(S(t,"sound_mode")||null),options:i,word:e=>O(this.rawHass,t,"sound_mode",e),disabled:e,choose:t=>{this.sound.set(t),this.call("media_player","select_sound_mode",{sound_mode:t})}}]:[]]}renderBody(t,e){const i=this.nameFor(t,void 0),o=this.stateOf(t),n=t.supports(zt.VOLUME_SET),r=!0===t.attr("is_volume_muted"),l=a(t,"volume_level"),h=this.volume.read(null===l?null:Math.round(100*J(l,0,1))),d=!e&&!At(o)&&!r,c=this.t("media.volume"),u=t=>s(this.hass,t,{digits:0});return M`<div class="dt-hero">
<fluvy-dial
.radius=${this.ring}
.large=${this.large}
.stepper=${!1}
.tone=${d?"media":"neutral"}
.min=${0}
.max=${100}
.step=${1}
.value=${n?h??void 0:void 0}
.gauge=${!n}
.fill=${n?void 0:this.active(t)&&!e?1:0}
.unit=${"%"}
.sub=${n?this.dialWords(r?this.t("common.muted"):c):""}
.text=${e||n&&null===h?"—":n?void 0:k(this.hass,t,o)}
.name=${`${i} · ${c}`}
min-label=${n?u(0):""}
max-label=${n?u(100):""}
?disabled=${e||n&&null===h}
.format=${u}
@fluvy-change=${t=>{const e=Math.round(t.detail.value??0);this.volume.set(e),this.call("media_player","volume_set",{volume_level:e/100})}}
></fluvy-dial>
</div>
${It(this.keysOf(t,i,o,e),this.room,e=>this.press(t,e))}
${Yt(this.ruler,this.room,this.rows(t,e))}`}});var ce,ue=/* @__PURE__ */t({openDetails:()=>me}),pe={light:"fluvy-details-light",climate:"fluvy-details-climate",water_heater:"fluvy-details-climate",humidifier:"fluvy-details-climate",cover:"fluvy-details-cover",valve:"fluvy-details-cover",media_player:"fluvy-details-media",fan:"fluvy-details-fan"};function me(t,e,s){const i=pe[w(s)];if(!i)return;const o=t.shadowRoot?.activeElement;ce?.remove();const a=t,n=document.createElement(i);n.setConfig({type:`custom:${i}`,entity:s}),n.hass=a.rawHass??e,n.addEventListener("fluvy-closed",()=>{n.remove(),ce===n&&(ce=void 0)},{once:!0}),document.body.append(n),ce=n,n.open(o instanceof HTMLElement?o:t,"rawHass"in a?a:void 0,Math.round(100*l(t))/100)}export{ue as t};