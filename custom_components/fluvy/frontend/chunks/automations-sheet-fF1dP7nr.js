/*! Fluvy v1.21.0 · a theme and card library for Home Assistant · SPDX-License-Identifier: GPL-3.0-only · https://github.com/acosta290/fluvy */
import{t}from"./rolldown-runtime-CvjMAzmL.js";import{$c as e,Dc as s,Dn as i,Gi as a,Hc as n,Hl as r,Ic as o,Jc as l,Kc as d,Oc as h,On as c,Or as u,Os as v,Tr as f,Vc as p,Wc as m,Xc as g,Zs as _,ac as y,cl as b,dc as w,dl as k,dn as $,el as x,fc as q,ga as T,hl as M,ia as C,ic as O,jl as S,kc as D,kn as E,lc as R,ln as F,oc as L,ol as P,ql as j,ra as W,rc as A,ru as I,tl as B,tu as z,un as N,va as V,zl as U}from"./core-CIFC0YYZ.js";import{_ as H,a as Y,o as G}from"./shared-DlZQgqdD.js";import{_ as J,a as K,b as X,c as Z,f as Q,g as tt,h as et,i as st,m as it,n as at,o as nt,p as rt,r as ot,s as lt,u as dt,v as ht,x as ct,y as ut}from"./automations-Dv-5eqcC.js";import"./pages-DLk23L9o.js";var vt={mon:"option.monday",tue:"option.tuesday",wed:"option.wednesday",thu:"option.thursday",fri:"option.friday",sat:"option.saturday",sun:"option.sunday"};var ft=M("automations"),pt=t=>{const[e=0,s=0]=t.split(":").map(Number);return 60*e+s},mt=t=>{const e=Math.min(1439,Math.max(0,Math.round(t)));return`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`};function gt(t,e){if("time"===t.kind)return{kind:"time",at:mt((pt(t.at)+e)%1440)};const s=Math.max(-180,Math.min(180,t.offset+e));return{...t,offset:s}}var _t=(t,e)=>"time"===t.kind?"time"===e.kind&&t.at===e.at:"sun"===e.kind&&t.event===e.event&&t.offset===e.offset,yt=[15,30,60,120];var bt=M("automations"),wt=(t,e)=>!t.length||ct(ht([...t,e])).length>0;function kt(t,e,s,i=e=>r(t,e).name){return e.length?m`<div class="fv-chips ss-chosen">
${e.map(e=>{const a=i(e);return m`<button
class="fv-chip"
data-target
data-fit="28"
aria-label=${`${k(t,"editor.remove")} · ${a}`}
title=${a}
@click=${()=>s(e)}
>
<span class="fv-chip__pill" data-control
><span class="fv-chip__name" data-name>${a}</span>${o("close")}</span
>
</button>`})}
</div>`:n}var $t=/* @__PURE__ */t({}),xt=M("automations"),qt=t=>"run"in t,Tt={targets:[],verb:void 0,level:void 0,temperature:void 0,days:{kind:"every"},custom:tt,start:{kind:"time",at:"08:00"},hasEnd:!1,end:{kind:"time",at:"09:00"},endTouched:!1,span:void 0,startClock:"08:00",endClock:"09:00",after:void 0,alias:"",query:""};function Mt(t){return"time"===t.kind?{kind:"time",at:mt(pt(t.at)+60)}:{kind:"sun",event:"sunrise"===t.event?"sunset":"sunrise",offset:0}}var Ct=(t,e)=>({[t]:e,..."time"===e.kind?{[`${t}Clock`]:e.at}:{}}),Ot={on:"power",off:"power",open:"up",close:"down",run:"play"},St=["every","workdays","weekend","custom"],Dt={every:"calendar",workdays:"check",weekend:"sun",custom:"sliders"},Et={every:"every_day",workdays:"workdays",weekend:"weekend",custom:"custom"},Rt=t=>{"Escape"===t.key&&t.stopPropagation()},Ft={handleEvent:t=>t.stopPropagation(),passive:!0},Lt=class extends p{static{this.styles=[...h,D.devices,D.inputs,d`:host(:not([docked])){display: contents;}dialog{position: fixed;inset: 0;width: 100%;height: 100%;max-width: none;max-height: none;flex-direction: column;justify-content: flex-end;align-items: center;overflow: hidden;padding: 0;border: 0;background: color-mix(in srgb, var(--fluvy-neutral-05) 48%, transparent);color: inherit;touch-action: none;overscroll-behavior: contain;animation: fv-fade 240ms var(--fv-ease) both;}dialog[open]{display: flex;}dialog::backdrop{background: none;}@keyframes ss-up{from{transform: translateY(100%);}to{transform: none;}}@keyframes ss-down{to{transform: translateY(100%);}}@keyframes ss-out{to{opacity: 0;}}dialog .fv-sheet{max-width: 392px;overflow-y: auto;touch-action: pan-y;overscroll-behavior: contain;animation: ss-up 320ms var(--fv-ease-out) both;}dialog.is-leaving{animation: ss-out 200ms var(--fv-ease) both;}dialog.is-leaving .fv-sheet{animation: ss-down 200ms var(--fv-ease) both;}.fv-sheet{position: relative;width: 100%;}.fv-sheet__head{height: auto;min-height: 44px;}.ss-title--s{font-size: 16px;line-height: 20px;}.fv-sheet__title[data-name]{overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}.ss-field--stack .in-field{flex-wrap: wrap;height: auto;row-gap: 8px;}.ss-field--stack .in-field__text{flex: 1 0 100%;}.ss-field--stack .in-field > :not(.in-field__text){margin-left: auto;}.ss-section{margin-top: 24px;}.ss-block{margin-top: 16px;}.ss-section > .fv-label, .ss-block > .fv-label{margin: 0 0 8px;}.ss-section > .fv-label + .fv-options, .ss-section > .fv-label + .fv-chips, .ss-block > .fv-label + .fv-chips, .ss-block > .fv-label + .fv-options, .ss-section > .fv-label + .in-text{margin-top: 0;}.ss-block > .fv-chips + .ss-time, .ss-block > .fv-chips + .in-field{margin-top: 8px;}.ss-targets > .fv-chips, .ss-spans > .fv-chips{margin-top: 0;}.ss-chosen{flex-wrap: wrap;height: auto;row-gap: 8px;}.ss-chosen .fv-chip__pill{padding-inline: 14px 10px;}.ss-chosen .fv-chip__pill svg{width: 16px;height: 16px;}.ss-candidates{margin-top: 4px;}.ss-group{margin: 12px 0 0;}.ss-more{height: 20px;margin: 8px 0 0;font-size: 13px;font-weight: 500;line-height: 20px;color: var(--fluvy-text-secondary);}.ss-do .fv-option__value, .ss-when .fv-option__value{white-space: nowrap;}.ss-dim{opacity: 0.4;pointer-events: none;}.ss-links{margin-top: 16px;}.ss-links .fv-row{height: auto;min-height: 60px;padding: 8px 0;}.ss-links .fv-row__title{display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;white-space: normal;}.ss-footer{margin-top: 24px;}.ss-delete{width: 100%;}.ss-delete.fv-btn--quiet{color: var(--fluvy-danger);}.ss-delete + .dv-actions{margin-top: 16px;}.dv-actions{grid-template-columns: repeat(2, minmax(0, var(--ss-pair, 172px)));}.dv-actions--stacked{grid-template-columns: minmax(0, var(--ss-pair, 172px));}.dv-actions .fv-btn{width: 100%;min-width: 0;padding-inline: 8px;white-space: nowrap;}.ss-error{margin: 12px 0 0;font-size: 13px;font-weight: 500;line-height: 20px;text-align: center;color: var(--fluvy-danger);}.ss-swap{display: inline-block;}.is-busy .ss-body, .is-busy .ss-delete{opacity: 0.4;pointer-events: none;}`,Y]}static{this.properties={hass:{attribute:!1},docked:{type:Boolean,reflect:!0},request_:{state:!0},draft_:{state:!0},busy_:{state:!0},error_:{state:!0},armed_:{state:!0},leaving_:{state:!0},done_:{state:!0},nameFocused_:{state:!0},pendingOn_:{state:!0}}}constructor(){super(),this.ruler=new C(()=>this.renderRoot),this.openedAt=0,this.leaveTimer=0,this.armTimer=0,this.doneTimer=0,this.pendingTimer=0,this.docked=!1,this.request_=null,this.draft_=Tt,this.busy_=!1,this.error_="",this.armed_=!1,this.leaving_=!1,this.done_=!1,this.nameFocused_=!1,this.pendingOn_=void 0,new W(this,()=>{this.ruler.clear(),_(this.renderRoot,!0),this.requestUpdate()}),new G(this,()=>this.renderRoot.querySelector(".fv-sheet"),()=>this.fit.width)}get isOpen(){return null!==this.request_&&!this.leaving_}open(t,e){clearTimeout(this.leaveTimer),this.leaveTimer=0,this.openedBy=e,this.newId=void 0,this.request_=t,this.draft_=qt(t)?Tt:t.schedule?function(t){const e="time"===t.start.kind?t.start.at:Tt.startClock,s=t.end??Mt(t.start);return{targets:t.targets,verb:t.then.verb,level:t.then.level,temperature:t.then.temperature,days:t.days,custom:"custom"===t.days.kind?t.days.days:tt,start:t.start,hasEnd:void 0!==t.end,end:s,endTouched:void 0!==t.end,span:void 0,startClock:e,endClock:"time"===s.kind?s.at:mt(pt(e)+60),after:t.after?.verb,alias:t.alias,query:""}}(t.schedule):function(t,e){const s=60*t.getHours()+t.getMinutes(),i=mt(Math.min(1380,60*Math.ceil((s+1)/60))),a={kind:"time",at:i},n={...Tt,start:a,end:Mt(a),startClock:i,endClock:mt(pt(i)+60)},r=1===e?.length?e[0]:void 0;if(!r)return n;const o=r.verb??ct(ht([r.id]))[0];return{...n,targets:[r.id],verb:o,level:"on"===o?r.level:void 0,temperature:"on"===o?r.temperature:void 0}}(this.now(),t.only),this.busy_=!1,this.error_="",this.disarm(),this.leaving_=!1,this.done_=!1,this.nameFocused_=!1,this.settlePending(void 0),this.openedAt=performance.now()}close(){if(this.disarm(),this.request_&&!this.leaving_){if(this.docked)return this.busy_=!1,void(this.error_="");this.leaving_=!0,this.leaveTimer=window.setTimeout(()=>this.finishClose(),200)}}disconnectedCallback(){super.disconnectedCallback(),this.finishClose(),clearTimeout(this.doneTimer),this.doneTimer=0}finishClose(){clearTimeout(this.leaveTimer),this.leaveTimer=0,this.disarm(),this.settlePending(void 0);const t=null!==this.request_,e=this.openedBy;this.openedBy=void 0,this.leaving_=!1,this.busy_=!1,this.request_=null;const s=this.renderRoot.querySelector("dialog");s?.open&&s.close(),t&&e?.isConnected&&e.focus()}updated(t){const e=this.renderRoot.querySelector("dialog");e&&!e.open&&this.request_&&!this.leaving_&&e.showModal(),t.has("request_")&&this.request_&&requestAnimationFrame(()=>this.focusFirst()),this.fitPair(),_(this.renderRoot)}willUpdate(t){t.has("hass")&&void 0!==this.pendingOn_&&this.liveOn()===this.pendingOn_&&this.settlePending(void 0)}focusFirst(){const t=this.request_;if(!t||this.docked)return;const e=this.renderRoot,s=(...t)=>{for(const s of t){const t=e.querySelector(s);if(t)return t}return null};(qt(t)?s(".dv-actions .fv-btn--accent"):this.draft_.verb?s(".ss-do .is-active",".ss-do .fv-option, .ss-do .fv-chip"):s(".ss-search input",".ss-what .fv-chip:not([disabled])"))?.focus()}now(){return this.request_?.now?.()??/* @__PURE__ */new Date}nameOf(t){return S(this.hass,r(this.hass,t),this.request?.only?.find(e=>e.id===t)?.name)}fitPair(){const t=this.renderRoot.querySelector(".dv-actions");if(!t)return;let e=0;for(const a of t.querySelectorAll(".fv-btn")){const t=a.style.width;a.style.width="max-content",e=Math.max(e,a.offsetWidth+16),a.style.width=t}const{pair:s,stacked:i}=function(t,e,s=172){const i=4*Math.floor((e-16)/2/4),a=(n=Math.max(t,Math.min(s,i)),4*Math.ceil(n/4));var n;return{pair:a,stacked:2*a+16>e}}(e,t.clientWidth);t.style.setProperty("--ss-pair",`${s}px`),t.classList.toggle("dv-actions--stacked",i)}held(t,e,s,i=!1){const a="fv-option > fv-option__value"+(i?" fv-option__value--word":"");return((t,e,s)=>s(t)?t:e&&s(e)?e:"")(t,e,t=>this.ruler.width(a,t)<=s)}get fit(){const t=this.renderRoot.querySelector(".fv-sheet")?.clientWidth??0;return{ruler:this.ruler,width:t>0?t-32:360}}fieldRow(t,e,s,i){const a=this.ruler.width("fv-row__title",t)>this.fit.width-i-12;return m`<div class="ss-field ${a?"ss-field--stack":""}">
${E(t,e,s,!1)}
</div>`}liveOn(){const t=this.request_,e=t&&(qt(t),t.entity);return!!e&&"on"===this.hass?.states[e]?.state}settlePending(t){clearTimeout(this.pendingTimer),this.pendingTimer=0,this.pendingOn_=t,void 0!==t&&(this.pendingTimer=window.setTimeout(()=>{this.pendingOn_=void 0},3e3))}flip(t){const e=this.request_;if(!e)return;const s=qt(e)?e.toggle.bind(e):e.toggle?.bind(e);s&&(this.settlePending(t),s(t))}patch(t){this.draft_={...this.draft_,...t},this.error_=""}get request(){return this.request_&&!qt(this.request_)?this.request_:void 0}verbs(){const t=this.request;if(!t)return[];const e=this.draft_;return e.targets.length?ct(ht(e.targets)):(s=t.only?ht(t.only.map(t=>t.id)):t.domains,it.filter(t=>s.some(e=>rt[e]?.[t])));var s}suggestion(t){const e=t.targets.map(t=>this.nameOf(t));return lt(this.hass,e,t.days,t.start,t.hasEnd&&"run"!==t.verb?t.end:void 0)}schedule(t){const e=this.request;if(!e||!t.verb||!t.targets.length)return;const s=ht(t.targets),i={verb:t.verb};"on"===t.verb&&s.includes("light")&&void 0!==t.level&&(i.level=t.level),"on"===t.verb&&s.includes("climate")&&void 0!==t.temperature&&(i.temperature=t.temperature);const a=t.hasEnd&&"run"!==t.verb,n=t.after&&t.after!==Q[t.verb]?t.after:void 0,r=X(t.alias),o={id:e.schedule?.id??(this.newId??=ut()),alias:r||this.suggestion(t),...e.schedule?.description?{description:e.schedule.description}:{},targets:t.targets,days:t.days,start:t.start,...a?{end:t.end,...n?{after:{verb:n}}:{}}:{},then:i};return J(o)?void 0:o}setTargets(t,e={}){const s=ct(ht(t)),i=this.draft_.verb&&s.includes(this.draft_.verb)?this.draft_.verb:void 0;this.patch({targets:t,verb:i,after:void 0,...e})}pick(t){s(this,"selection"),this.setTargets([...this.draft_.targets,t],{query:""})}drop(t){s(this,"light"),this.setTargets(this.draft_.targets.filter(e=>e!==t))}toggleTarget(t){const e=this.draft_.targets;if(e.includes(t))return void this.drop(t);s(this,"selection");const i=(this.request?.only??[]).map(t=>t.id);this.setTargets([...i.filter(s=>s===t||e.includes(s)),...e.filter(t=>!i.includes(t))])}chooseVerb(t){s(this,"selection"),this.patch({verb:t,after:void 0})}stepLevel(t){const e=Math.min(100,Math.max(0,(this.draft_.level??0)+5*t));this.patch({level:0===e?void 0:e})}get fahrenheit(){return"°F"===this.hass?.config?.unit_system?.temperature}stepTemperature(t){const[e,s,i,a]=this.fahrenheit?[41,95,1,70]:[5,35,.5,21],n=this.draft_.temperature,r=void 0===n?a:Math.round(10*(n+t*i))/10;this.patch({temperature:r<e?void 0:Math.min(s,r)})}chooseDays(t){s(this,"selection");const e=this.draft_.custom,i="every"===t?{kind:t}:"custom"===t?{kind:t,days:e}:{kind:t};this.patch({days:i})}toggleDay(t){s(this,"selection");const e="custom"===this.draft_.days.kind?this.draft_.days.days:this.draft_.custom,i=e.includes(t)?e.filter(e=>e!==t):et.filter(s=>s===t||e.includes(s));this.patch({custom:i,days:{kind:"custom",days:i}})}setMoment(t,e){const s=this.draft_;if("end"===t)return void this.patch({...Ct("end",e),endTouched:!0,span:void 0});const i=s.endTouched?void 0:void 0===s.span?Mt(e):gt(e,s.span);this.patch({...Ct("start",e),...i?Ct("end",i):{}})}setMode(t,e){s(this,"selection");const i=this.draft_,a="start"===t?i.start:i.end;this.setMoment(t,function(t,e,s="08:00"){return"time"===t?"time"===e.kind?e:{kind:"time",at:s}:{kind:"sun",event:t,offset:"sun"===e.kind?e.offset:0}}(e,a,"start"===t?i.startClock:i.endClock))}stepOffset(t,e){const s="start"===t?this.draft_.start:this.draft_.end;if("sun"!==s.kind)return;const i=this.request?.timeStep??5,a=Math.max(-180,Math.min(180,s.offset+e*i));this.setMoment(t,{...s,offset:a})}chooseSpan(t){s(this,"selection"),this.patch({...Ct("end",gt(this.draft_.start,t)),endTouched:!1,span:t})}setEnd(t){s(this,"selection"),this.patch({hasEnd:t})}async save(){const t=this.request,e=this.schedule(this.draft_);if(t&&e&&!this.busy_&&!this.leaving_&&!(performance.now()-this.openedAt<350)){this.busy_=!0,this.error_="";try{await t.save(e)}catch(i){if(this.request_!==t)return;return this.busy_=!1,this.error_=dt(i)||xt(this.hass,"failed"),void s(this,"failure")}this.request_===t&&(this.busy_=!1,s(this,"success"),this.close())}}disarm(){clearTimeout(this.armTimer),this.armTimer=0,this.armed_&&(this.armed_=!1)}async deleteSchedule(){const t=this.request;if(t?.remove&&!this.busy_&&!this.leaving_){if(!this.armed_)return s(this,"light"),this.armed_=!0,void(this.armTimer=window.setTimeout(()=>this.disarm(),4e3));this.disarm(),this.busy_=!0,this.error_="";try{await t.remove()}catch(e){if(this.request_!==t)return;return this.busy_=!1,this.error_=dt(e)||xt(this.hass,"failed"),void s(this,"failure")}this.request_===t&&(this.busy_=!1,s(this,"success"),this.close())}}run(){const t=this.request_;t&&qt(t)&&!this.done_&&(performance.now()-this.openedAt<350||(s(this,"light"),t.run(),this.done_=!0,clearTimeout(this.doneTimer),this.doneTimer=window.setTimeout(()=>{this.doneTimer=0,this.done_=!1},1200)))}go(t){v(t),this.close()}onDialogClick(t){t.target===t.currentTarget&&performance.now()-this.openedAt>=350&&this.close()}section(t,e,s=""){return m`<section class="ss-section ${s}">${A(t)}${e}</section>`}renderWhat(t,e){const s=this.hass,i=t.only,l=i?.map(t=>t.id),[d]=i??[],h=t=>this.nameOf(t);let u;const v=1===e.targets.length&&e.targets[0]===d?.id;if(1===i?.length&&d&&v)u=function(t,e,s){const i=r(t,e.id);return m`<div class="ss-fixed">
${O({icon:a(i,e.icon),tone:"neutral",title:s,name:!0,sub:[i.areaName,P(t,i)].filter(Boolean).join(" · "),trailing:"none",unavailable:!U(i)})}
</div>`}(s,d,h(d.id));else if(i&&l&&i.length<=6)u=m`${function(t,e,s,i,n,o){const l=e.map(e=>{const n=s.includes(e.id);return{key:e.id,label:i(e.id),name:!0,glyph:a(r(t,e.id),e.icon),active:n,disabled:!n&&!wt(s,e.id)}});return m`<div class="ss-targets">${f(l,n,"full",o)}</div>`}(s,i,e.targets,h,t=>this.toggleTarget(t),this.fit)}
${kt(s,e.targets.filter(t=>!l.includes(t)),t=>this.drop(t),h)}`;else{const i=s?function(t,e,s,i){const a=s.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean),n="only"in e?void 0:e,o=[];for(const c of"only"in e?e.only:Object.keys(t.states)){if(n&&!n.domains.includes(c.slice(0,c.indexOf("."))))continue;if(i.includes(c)||!wt(i,c))continue;if(n&&!z(t,c))continue;const e=j(t,c);if(n?.area&&e!==n.area)continue;const s=r(t,c),l=`${s.name} ${c}`.toLocaleLowerCase();a.every(t=>l.includes(t))&&o.push({id:c,view:s,area:e&&I(t.areas[e]?.name)||""})}const l=t.language;o.sort((t,e)=>t.area!==e.area?t.area?e.area?t.area.localeCompare(e.area,l):-1:1:t.view.name.localeCompare(e.view.name,l));const d=o.slice(0,6),h=[];for(const r of d){const t=h[h.length-1];t&&t.area===r.area?t.items.push(r):h.push({area:r.area,items:[r]})}return{groups:h,more:o.length-d.length}}(s,l?{only:l}:{domains:t.domains,area:t.area},e.query,e.targets):{groups:[],more:0};u=m`${p={value:e.query,label:xt(s,"search"),onInput:t=>this.patch({query:t})},m`<div class="fv-field ss-search" data-control>
<input
class="fv-field__input"
type="search"
data-field="search"
.value=${c(p.value)}
aria-label=${p.label}
placeholder=${p.label}
autocomplete="off"
autocapitalize="off"
spellcheck="false"
enterkeyhint="search"
@input=${t=>p.onInput(t.currentTarget.value)}
@keydown=${t=>t.stopPropagation()}
/>
${o("search")}
</div>`}
${kt(s,e.targets,t=>this.drop(t),h)}
${function(t,e,s){return e.groups.length?m`<div class="ss-candidates">
${e.groups.map(e=>m`<p class="ss-group">${e.area||bt(t,"no_area")}</p>
<div class="ss-group__rows">
${e.items.map(t=>O({icon:a(t.view),tone:"neutral",title:t.view.name,name:!0,compact:!0,trailing:"none",onTap:()=>s(t.id)}))}
</div>`)}
${e.more?m`<p class="ss-more">${bt(t,"more_matches",{count:e.more})}</p>`:n}
</div>`:n}(s,i,t=>this.pick(t))}`}var p;return this.section(xt(s,"what"),u,"ss-what")}renderDo(t){const s=this.hass,i=this.verbs(),a=ht(t.targets),r=this.fit,o=this.fahrenheit?"°F":"°C",l=void 0===t.level?xt(s,"as_is"):`${e(s,t.level,{digits:0})} %`,d=void 0===t.temperature?xt(s,"as_is"):`${e(s,t.temperature,{digits:1})} ${o}`,h=e=>e!==t.verb||"on"!==e?"":a.includes("light")&&void 0!==t.level?l:a.includes("climate")&&void 0!==t.temperature?d:"",c=i.map(t=>xt(s,`verb_${t}`)),u=t=>this.ruler.width("fv-option > fv-option__label",t),v=F(r.width,4,N(c,r.width,4,u)),p=i.map((e,s)=>({key:e,label:c[s]??"",glyph:Ot[e],value:this.held(h(e),"",v),active:e===t.verb})),g=$(c,r.width,4,u)?L(p,t=>this.chooseVerb(t),4):f(p.map(t=>({key:t.key,label:t.label,active:t.active??!1})),t=>this.chooseVerb(t),"full",r),_="on"===t.verb&&a.includes("light"),y="on"===t.verb&&a.includes("climate");return this.section(xt(s,"do"),m`${g}
${_?this.fieldRow(k(s,"light.brightness"),l,w(t=>this.stepLevel(t),{decrease:k(s,"common.decrease"),increase:k(s,"common.increase")}),96):n}
${y?this.fieldRow(k(s,"climate.target"),d,w(t=>this.stepTemperature(t),{decrease:k(s,"common.decrease"),increase:k(s,"common.increase")}),96):n}`,"ss-do "+(t.targets.length?"":"ss-dim"))}renderMoment(t,e,s,i){const a=this.hass,r=this.fit;return m`<div class="ss-block ss-${t}">
${"start"===t?A(i):n}
${"end"===t?function(t,e,s,i,a){const n=yt.map(i=>({key:String(i),label:i<60?T(i,k(t,"time.unit_min")):T(i/60,k(t,"time.unit_h")),active:_t(s,gt(e,i)),disabled:"sun"===e.kind&&e.offset+i>180}));return m`<div class="ss-spans">
${f(n,t=>i(Number(t)),"full",a)}
</div>`}(a,this.draft_.start,e,t=>this.chooseSpan(t),r):n}
${function(t,e,s,i){const a=(t=>"time"===t.kind?"time":t.event)(e),n=[{key:"time",label:ft(t,"at_time"),active:"time"===a},{key:"sunrise",label:ft(t,"sunrise"),active:"sunrise"===a},{key:"sunset",label:ft(t,"sunset"),active:"sunset"===a}];return f(n,t=>s(t),"full",i)}(a,e,e=>this.setMode(t,e),r)}
${"time"===e.kind?function(t,e,s,i,a){return m`<fluvy-time-field
class="ss-time"
.value=${pt(e)}
.step=${s}
.hour12=${l(t)}
.periods=${g(t)}
.label=${i}
.hoursLabel=${k(t,"page.hours")}
.minutesLabel=${k(t,"page.minutes")}
@fluvy-time=${t=>a(mt(t.detail.value))}
></fluvy-time-field>`}(a,e.at,s.timeStep,i,e=>this.setMoment(t,{kind:"time",at:e})):this.fieldRow(xt(a,"offset"),function(t,e,s,i){const a=function(t,e){if("sun"!==t.kind||!e)return;const s="sunrise"===t.event?e.rising:e.setting;return new Date(s.getTime()+6e4*t.offset)}(e,s),n=K(t,e);return a?`${n} · ${function(t,e,s){const i=B(t),a=b(s,i),n=b(e,i),r=x(t,e);if(a.year===n.year&&a.month===n.month&&a.day===n.day)return ft(t,"today_at",{time:r});const o=new Date(Date.UTC(n.year,n.month-1,n.day)).getUTCDay();return`${Z(t,et[(o+6)%7])} ${r}`}(t,a,i)}`:n}(a,e,s.sun,this.now()),w(e=>this.stepOffset(t,e),{decrease:k(a,"common.decrease"),increase:k(a,"common.increase")}),96)}
</div>`}renderWhen(t,e){const s=this.hass,i=this.fit,a=e.days.kind,r=F(i.width,4,2),o=t.workday?this.held(xt(s,"workday_sensor"),xt(s,"sensor"),r,!0):this.held(xt(s,"weekdays_only"),"",r,!0),l="custom"===a?this.held(ot(s,e.days),at(s,e.days),r,!0):"",d=St.map(t=>({key:t,label:xt(s,Et[t]),glyph:Dt[t],value:"workdays"===t?o:"custom"===t?l:"",word:!0,active:t===a})),h=$(d.map(t=>t.label),i.width,4,t=>this.ruler.width("fv-option > fv-option__label",t))?L(d,t=>this.chooseDays(t),4,84,2):f(d.map(t=>({key:t.key,label:t.label,active:t.active??!1})),t=>this.chooseDays(t),"full",i),c=this.verbs(),v="run"!==e.verb,p=e.after??(e.verb?Q[e.verb]:void 0),g=c.filter(t=>"run"!==t).map(t=>({key:t,label:xt(s,`verb_${t}`),active:t===p}));return this.section(xt(s,"when"),m`${h}
${"custom"===a?function(t,e,s,i){const a=function(t){const e=(H(t,void 0)+6)%7;return et.map((t,s)=>et[(e+s)%7])}(t),r=a.map(e=>({key:e,label:Z(t,e)})),o=y(a.length,u(r,i,[7,4]));return m`<div
class="fv-chips fv-chips--fill ss-days"
role="group"
style="grid-template-columns:repeat(${o.tracks}, minmax(0, 1fr))"
>
${a.map((i,a)=>{const r=e.includes(i);return m`<button
class="fv-chip ${r?"is-active":""}"
data-target
aria-pressed=${r?"true":"false"}
aria-label=${k(t,vt[i])}
style=${1===o.spans[a]?n:`grid-column:span ${o.spans[a]}`}
@click=${()=>s(i)}
>
<span class="fv-chip__pill" data-control>${Z(t,i)}</span>
</button>`})}
</div>`}(s,e.days.days,t=>this.toggleDay(t),i):n}
${this.renderMoment("start",e.start,t,xt(s,"start"))}
${v?m`<div class="ss-block ss-until">
${this.fieldRow(xt(s,"until"),e.hasEnd?nt(s,e.start,e.end):"",q(e.hasEnd,"accent",t=>this.setEnd(t),xt(s,"until")),56)}
</div>
${e.hasEnd?m`${this.renderMoment("end",e.end,t,xt(s,"until"))}
${g.length>=2?m`<div class="ss-block ss-after">
${A(xt(s,"after"))}
${$(g.map(t=>t.label),i.width,4,t=>this.ruler.width("fv-option > fv-option__label",t))?L(g,t=>this.patch({after:t}),4,64,g.length,!0):f(g.map(t=>({key:t.key,label:t.label,active:t.active??!1})),t=>this.patch({after:t}),"full",i)}
</div>`:n}`:n}`:n}`,"ss-when")}renderName(t){const e=this.hass,s=this.suggestion(t);return this.section(xt(e,"name"),m`<div
class="ss-name"
@focusin=${t=>{this.nameFocused_=!0,t.target.scrollIntoView({block:"nearest"})}}
>
${i({id:"alias",value:t.alias||s,label:xt(e,"name"),maxLength:100,glyph:"pencil",editing:this.nameFocused_,commitOn:"leave",onCommit:t=>{const e=X(t);this.patch({alias:e===s?"":e})},onLeave:()=>{this.nameFocused_=!1}})}
</div>`,"ss-name-section")}renderEditor(t,e){const s=this.hass,i=void 0!==t.schedule,a=void 0!==this.schedule(e),r=i&&t.entity&&t.toggle?q(this.pendingOn_??this.liveOn(),"accent",t=>this.flip(t),t.schedule?.alias??""):R("close","quiet",k(s,"keypad.close"),()=>this.close()),o=this.fit.width-(i&&t.entity&&t.toggle?56:44)-12,l=(t,e)=>t.split(" ").every(t=>this.ruler.width(e,t)<=o),d=xt(s,i?"schedule":"new"),h=i&&!l(d,"fv-sheet__title ss-title--s")?xt(s,"schedule_short"):d,c=!l(h,"fv-sheet__title");return m`<div class="fv-sheet__head">
<div class="fv-card__titles">
<h2 class="fv-sheet__title ${c?"ss-title--s":""}" id="ss-title">${h}</h2>
${i?m`<p class="fv-card__sub" data-name>${t.schedule?.alias}</p>`:n}
</div>
${r}
</div>
<div class="ss-body">
${this.renderWhat(t,e)} ${this.renderDo(e)}
${this.renderWhen(t,e)} ${this.renderName(e)}
</div>
<div class="ss-footer">
${i&&t.remove?m`<button
class="fv-btn ${this.armed_?"fv-btn--armed":"fv-btn--quiet"} ss-delete"
data-control
data-target
aria-live="polite"
@click=${()=>{this.deleteSchedule()}}
>
${this.armed_?xt(s,"delete_confirm"):xt(s,"delete")}
</button>`:n}
<div class="dv-actions">
<button
class="fv-btn fv-btn--quiet"
data-control
data-target
@click=${()=>this.close()}
>
${k(s,"keypad.cancel")}
</button>
<button
class="fv-btn fv-btn--accent"
data-control
data-target
?disabled=${!a||this.busy_}
@click=${()=>{this.save()}}
>
${xt(s,"save")}
</button>
</div>
${this.error_?m`<p class="ss-error" role="alert">${this.error_}</p>`:n}
</div>`}renderDetails(t){const e=this.hass,s=r(e,t.entity),i=this.pendingOn_??this.liveOn(),a=s.attr("last_triggered"),o="string"==typeof a&&a?new Date(a):void 0,l=st(e,o,this.now()),d=`${l} · ${k(e,i?"common.on":"common.off")}`,h=this.ruler.width("fv-card__sub",d)<=this.fit.width-56-12?d:l,c=t.configId,u=k(e,"common.trace"),v=[xt(e,"open_in_ha"),u].every(t=>this.ruler.width("fv-row__title",t)<=this.fit.width-56-12-44),f=[xt(e,"open_in_ha"),this.ruler.width("fv-row__title",u)<=this.fit.width-12-44?u:k(e,"common.trace_short")];return m`<div class="fv-sheet__head">
<div class="fv-card__titles">
<h2 class="fv-sheet__title" id="ss-title" data-name>${t.alias}</h2>
<p class="fv-card__sub">${h}</p>
</div>
${q(i,"accent",t=>this.flip(t),t.alias)}
</div>
${c?m`<div class="ss-links">
${O({icon:v?"ha":null,tone:"neutral",title:f[0]??"",trailing:"chevron",onTap:()=>this.go(`/config/automation/edit/${c}`)})}
${O({icon:v?"list":null,tone:"neutral",title:f[1]??"",trailing:"chevron",onTap:()=>this.go(`/config/automation/trace/${c}`)})}
</div>`:n}
<div class="dv-actions">
<button class="fv-btn fv-btn--quiet" data-control data-target @click=${()=>this.close()}>
${k(e,"keypad.close")}
</button>
<button class="fv-btn fv-btn--accent" data-control data-target @click=${()=>this.run()}>
${V(this.done_,m`<span class="ss-swap fv-swap">${this.done_?k(e,"actions.done"):xt(e,"run")}</span>`)}
</button>
</div>`}renderSheet(t){return m`<div class="fv-sheet ss-sheet ${this.busy_?"is-busy":""}" data-card>
<div class="fv-sheet__grabber"><span></span></div>
${qt(t)?this.renderDetails(t):this.renderEditor(t,this.draft_)}
</div>`}render(){const t=this.request_;return t?this.docked?this.renderSheet(t):m`<dialog
class=${this.leaving_?"is-leaving":""}
aria-labelledby="ss-title"
@cancel=${t=>{t.preventDefault(),this.close()}}
@close=${()=>this.finishClose()}
@click=${t=>this.onDialogClick(t)}
@keydown=${Rt}
@touchstart=${Ft}
>
${this.renderSheet(t)}
</dialog>`:n}};customElements.get("fluvy-schedule-sheet")||customElements.define("fluvy-schedule-sheet",Lt);export{$t as t};