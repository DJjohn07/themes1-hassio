/*! Fluvy v1.21.0 · a theme and card library for Home Assistant · SPDX-License-Identifier: GPL-3.0-only · https://github.com/acosta290/fluvy */
import{t}from"./rolldown-runtime-CvjMAzmL.js";import{Ac as e,Bs as s,Dc as i,Ec as a,Hc as o,Ic as n,Is as r,Jc as h,Kc as l,Mc as d,Oc as c,Pl as u,Vc as p,Wc as f,Xc as v,Yc as m,qc as g,ql as y}from"./core-CIFC0YYZ.js";import{C as b,_ as w,b as x,d as $,g as D,m as _,p as k,x as T}from"./shared-DlZQgqdD.js";var M=["floor_id","area_id","device_id","entity_id","label_id"],A=t=>void 0===t?[]:"string"==typeof t?[t]:[...t],E=t=>M.reduce((e,s)=>e+A(t[s]).length,0),S=t=>(t.types?.length?1:0)+(t.integrations?.length?1:0);function L(t,e,s,i=t=>Object.keys(t.states).filter(e=>!t.states[e]?.attributes.unit_of_measurement)){const a=E(e)>0;if(!a&&!S(s))return;const o=a?function(t,e){const s=new Set(A(e.entity_id)),i=new Set(A(e.device_id)),a=new Set(A(e.area_id)),o=new Set(A(e.floor_id)),n=new Set(A(e.label_id));if(o.size)for(const r of Object.values(t.areas??{}))r.floor_id&&o.has(r.floor_id)&&a.add(r.area_id);if(n.size){for(const e of Object.values(t.areas??{}))e.labels?.some(t=>n.has(t))&&a.add(e.area_id);for(const e of Object.values(t.devices??{}))e.labels?.some(t=>n.has(t))&&i.add(e.id)}for(const r of Object.values(t.entities??{})){const e=y(t,r.entity_id);(r.device_id&&i.has(r.device_id)||e&&a.has(e)||r.labels?.some(t=>n.has(t)))&&s.add(r.entity_id)}return s}(t,e):i(t);return o?function(t,e,s){const i=s.types??[],a=new Set(s.integrations??[]),o=[];for(const n of e){const e=u(n),s=t.states[n]?.attributes.device_class,r=!i.length||i.some(t=>t.includes("/")?t===`${e}/${String(s)}`:t===e),h=!a.size||a.has(t.entities?.[n]?.platform??"");r&&h&&o.push(n)}return o}(t,[...o],s).sort():void 0}function P(t){const e=new URLSearchParams(t),s={};for(const i of M){const t=e.get(i);t&&(s[i]=t.split(",").filter(Boolean))}return s}var O=g(".fv-page-bar{position:relative;z-index:3;display:flex;flex:0 0 auto;align-items:center;gap:4px;box-sizing:border-box;height:var(--fv-page-bar,calc(var(--header-height,56px) + var(--safe-area-inset-top,0px)));padding:var(--safe-area-inset-top,0px) calc(12px + var(--safe-area-inset-right,0px)) 0 24px;background:var(--app-header-background-color,var(--fluvy-card));color:var(--app-header-text-color,var(--fluvy-text));box-shadow:inset 0 -1px 0 var(--fluvy-border)}.fv-page-bar--menu{padding-left:calc(6px + var(--safe-area-inset-left,0px))}:host([narrow]) .fv-page-bar{padding-left:calc(4px + var(--safe-area-inset-left,0px))}.fv-page-bar__title{position:relative;flex:1 1 auto;min-width:0;height:24px;margin:0 0 0 4px;font-size:20px;line-height:24px;font-weight:600;letter-spacing:-0.01em}.fv-scrim{position:fixed;inset:0;z-index:5;background:rgb(0 0 0 / 0.28);animation:fv-layer-fade 220ms var(--fv-ease,ease) both}.fv-scrim--clear{background:transparent}.fv-popover{position:absolute;top:calc(100% + 8px);right:0;z-index:6;box-sizing:border-box;width:340px;padding:16px;border-radius:var(--fluvy-radius-lg);background:var(--fluvy-card);box-shadow:0 0 0 1px var(--fluvy-edge,var(--fluvy-border)),var(--fluvy-shadow-lift);outline:none;transform-origin:top right;animation:fv-layer-pop 240ms var(--fv-spring,var(--fv-ease-out,ease-out)) both}.fv-drawer{position:fixed;top:var(--fluvy-frame,0px);right:var(--fluvy-frame,0px);bottom:var(--fluvy-frame,0px);z-index:6;display:flex;flex-direction:column;width:min(400px,calc(100vw - 2 * var(--fluvy-frame,0px)));border-radius:0 var(--fluvy-frame-radius,0px) var(--fluvy-frame-radius,0px) 0;background:var(--fluvy-card);box-shadow:-1px 0 0 var(--fluvy-edge,var(--fluvy-border)),var(--fluvy-shadow-lift);overflow:hidden;animation:fv-layer-side 320ms var(--fv-ease-out,ease-out) both}:host([compact]) .fv-drawer{top:auto;left:0;right:0;bottom:0;width:auto;max-height:min(88vh,760px);border-radius:var(--fluvy-radius-xl) var(--fluvy-radius-xl) 0 0;box-shadow:var(--fluvy-shadow-lift);animation-name:fv-layer-rise}:host([compact]) .fv-drawer--tall{height:min(85vh,720px)}.fv-grabber{display:block;flex:0 0 auto;width:36px;height:4px;margin:8px auto 0;border-radius:2px;background:var(--fluvy-border-strong)}.fv-drawer__head{display:flex;flex:0 0 auto;align-items:center;gap:8px;height:64px;padding:0 8px 0 16px}:host([compact]) .fv-drawer__head{height:52px}.fv-drawer__title{flex:1 1 auto;margin:0;font-size:20px;line-height:24px;font-weight:600;letter-spacing:-0.01em}.fv-drawer__body{flex:1 1 auto;min-height:0;overflow-y:auto;padding:0 16px 16px;scrollbar-width:thin}.fv-drawer__body > .fv-empty-state{margin:0 16px}.fv-drawer--dates .fv-drawer__body{padding-bottom:calc(24px + var(--safe-area-inset-bottom,0px))}.fv-drawer__foot{display:grid;flex:0 0 auto;grid-template-columns:repeat(2,round(down,calc((100% - 8px) / 2 + 0.01px),1px));gap:8px;padding:12px 16px calc(16px + var(--safe-area-inset-bottom,0px));box-shadow:inset 0 1px 0 var(--fluvy-border)}.fv-popover.is-leaving{animation:fv-layer-pop-out 160ms var(--fv-ease-in,ease-in) both}.fv-drawer.is-leaving{animation:fv-layer-side-out 220ms var(--fv-ease-in,ease-in) both}:host([compact]) .fv-drawer.is-leaving{animation:fv-layer-sheet-out 240ms var(--fv-ease-in,ease-in) both}.fv-scrim.is-leaving{animation:fv-layer-fade-out 220ms var(--fv-ease,ease) both;pointer-events:none}@keyframes fv-layer-fade{from {opacity:0;}}@keyframes fv-layer-fade-out{to {opacity:0;}}@keyframes fv-layer-pop{from {opacity:0;transform:scale(0.96) translateY(-6px);}}@keyframes fv-layer-pop-out{to {opacity:0;transform:scale(0.96) translateY(-6px);}}@keyframes fv-layer-side{from {opacity:0;transform:translateX(32px);}}@keyframes fv-layer-side-out{to {opacity:0;transform:translateX(32px);}}@keyframes fv-layer-rise{from {transform:translateY(100%);}}@keyframes fv-layer-sheet-out{to {transform:translateY(100%);}}"),z=t=>f`<div
class="fv-scrim ${t.clear?"fv-scrim--clear":""} ${t.leaving?"is-leaving":""}"
@click=${t.onDismiss}
></div>`;function N(t){const e=t.leaving?"is-leaving":"";return f`${z({leaving:t.leaving,onDismiss:t.onDismiss})}
<div
class="fv-drawer ${t.tall?"fv-drawer--tall":""} ${t.variant??""} ${e}"
role="dialog"
aria-modal="true"
aria-label=${t.title}
@animationend=${t.onLeft}
>
${t.grabber?f`<span class="fv-grabber" aria-hidden="true"></span>`:o}
<header class="fv-drawer__head">
<h2 class="fv-drawer__title">${t.title}</h2>
<button
class="fv-round fv-round--bare"
aria-label=${t.close}
data-autofocus=${t.autofocus??o}
@click=${t.onDismiss}
>
${n("close")}
</button>
</header>
<div class="fv-drawer__body">${t.body}</div>
${t.foot??o}
</div>`}function H(t){return f`${z({leaving:t.leaving,clear:!0,onDismiss:t.onDismiss})}
<div
class="fv-popover ${t.leaving?"is-leaving":""}"
role="dialog"
aria-label=${t.label}
tabindex="-1"
data-autofocus=${t.autofocus??o}
@animationend=${t.onLeft}
>
${t.body}
</div>`}var R=864e5;function U(t){const e=new Date(t);e.setHours(0,0,0,0);const s=new Date(e);return s.setDate(s.getDate()+1),{start:e.getTime(),end:s.getTime()}}function q(t,e){const s=Math.max(1,Math.round((t.end-t.start)/R)),i=new Date(t.start);i.setDate(i.getDate()+e*s);const a=new Date(t.end);return a.setDate(a.getDate()+e*s),{start:i.getTime(),end:a.getTime()}}var j=(t,e)=>t.start===e.start&&t.end===e.end;function B(t,e,s,i=Date.now()){const a=new Date(e),o={day:"numeric",month:s};return a.getFullYear()!==new Date(i).getFullYear()&&(o.year="numeric"),m(t,o).format(a)}function C(t){const{start:e,end:s}=t.range,i=U(new Date(t.now)),a=(e,s)=>B(t.language,e,s,t.now);if(j(t.range,U(new Date(e)))){const s=a(e,"long"),n=m(t.language,{weekday:"long"}).format(e),h=e===i.start?t.words.today:e===q(i,-1).start?t.words.yesterday:"",l=`${h} · ${n}`,d=h?t.room?r([l,h],t.room,{size:13,weight:600,...t.family?{family:t.family}:{}}):l:(o=n).charAt(0).toUpperCase()+o.slice(1);return{eyebrow:t.named??d,title:s,short:a(e,"short"),range:!1}}var o;const n=s-1,h=Math.round((s-e)/R),l=0===new Date(e).getHours()&&0===new Date(s).getHours(),d=Math.abs(s-t.now)<=6e4;if(d&&Math.abs(s-e-864e5)<=6e4){const e=t.words.lastDay;return{eyebrow:t.named??t.words.period,title:e,short:e,range:!1}}const c=l?`${a(e,"short")} – ${a(n,"short")}`:d?t.words.since(`${a(e,"short")}, ${t.time(e)}`):`${a(e,"short")} ${t.time(e)} – ${a(n,"short")} ${t.time(s)}`,u=l&&s===i.end&&7===h?t.words.week:l?t.words.days(h):t.words.period;return{eyebrow:t.named??u,title:c,short:c,range:!l&&!d}}function F(t){const e=null==t?"":String(t),s=/^[=+\-@\t\r]/.test(e)?`'${e}`:e;return/[",\n]/.test(s)?`"${s.replace(/"/g,'""')}"`:s}function K(t,e,s){const i=[e.join(","),...s.map(t=>t.map(F).join(","))],a=URL.createObjectURL(new Blob([i.join("\n")],{type:"text/csv"})),o=document.createElement("a");o.href=a,o.download=t,o.click(),setTimeout(()=>URL.revokeObjectURL(a),1e3)}var Y=(t,e)=>t||"always_hidden"===e?.dockedSidebar,I=1440,W=t=>String(t).padStart(2,"0"),X=class extends p{static{this.styles=[...c,l`:host{display: block;min-width: 0;}.tf{gap: 0;padding: 0 8px;color: var(--fluvy-text);font: 500 15px/20px var(--fluvy-font-sans);font-variant-numeric: tabular-nums;}.tf__seg{width: 28px;height: 28px;box-sizing: border-box;padding: 0;border: 0;border-radius: 8px;outline: none;background: transparent;color: inherit;font: inherit;text-align: center;caret-color: transparent;transition: background-color 120ms var(--fv-ease, ease), color 120ms var(--fv-ease, ease);}.tf__seg::selection{background: transparent;}.tf__seg:focus{background: var(--fluvy-accent-fill);color: var(--fluvy-accent-on-fill);}.tf__colon{width: 8px;text-align: center;color: var(--fluvy-text-secondary);}.tf__period{width: 44px;margin-left: 4px;font-weight: 600;cursor: pointer;}`]}static{this.properties={value:{type:Number},step:{type:Number},hour12:{type:Boolean},endOfDay:{type:Boolean,attribute:"end-of-day"},label:{type:String},hoursLabel:{type:String,attribute:"hours-label"},minutesLabel:{type:String,attribute:"minutes-label"},periods:{attribute:!1},invalid:{type:Boolean,reflect:!0}}}constructor(){super(),this.typed="",this.onKey=t=>{const e=t.target,s=e.dataset.seg,i="ArrowUp"===t.key?1:"ArrowDown"===t.key?-1:0;i?(t.preventDefault(),this.typed="","h"===s?this.setHours(this.hours+i):"m"===s?this.setMinutes(this.steppedMinutes(i)):this.flip(),e.select()):"ArrowRight"===t.key||"ArrowLeft"===t.key?(t.preventDefault(),this.typed="",this.moveFocus(e,"ArrowRight"===t.key?1:-1)):"p"===s&&/^[ap]$/i.test(t.key)?(t.preventDefault(),"p"===t.key.toLowerCase()!=this.hours>=12&&this.flip()):"p"!==s||"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.flip())},this.onInput=t=>{const e=t.target,s=e.dataset.seg,i=e.value.replace(/\D/g,"").slice(-1);if(e.value="h"===s?this.hourText():W(this.minutes),!i)return;this.typed=(this.typed+i).slice(-2);const a=Number(this.typed);if("h"===s){const t=this.hour12?12:this.endOfDay?24:23,s=this.hour12?a%12+(this.hours>=12?12:0):a;if(a<=t&&this.setHours(s),2===this.typed.length||10*a>t)return this.typed="",void this.moveFocus(e,1)}else{if(a<60&&this.setMinutes(a),(2===this.typed.length||a>5)&&this.hour12)return this.typed="",void this.moveFocus(e,1);2===this.typed.length&&(this.typed="")}e.select()},new e(this),this.value=0,this.step=1,this.hour12=!1,this.endOfDay=!1,this.label="",this.hoursLabel="Hours",this.minutesLabel="Minutes",this.periods=["AM","PM"],this.invalid=!1}get hours(){return Math.floor(this.value/60)}get minutes(){return this.value%60}set(t){const e=Math.max(0,Math.min(this.endOfDay?I:1439,t));e!==this.value&&(this.value=e,this.dispatchEvent(new CustomEvent("fluvy-time",{detail:{value:e},bubbles:!0,composed:!0})))}setHours(t){const e=this.endOfDay?24:23,s=(t%(e+1)+e+1)%(e+1);this.set(60*s+(24===s?0:this.minutes))}setMinutes(t){24!==this.hours&&this.set(60*this.hours+(t%60+60)%60)}segments(){return[...this.renderRoot.querySelectorAll(".tf__seg")]}moveFocus(t,e){const s=this.segments();s[s.indexOf(t)+e]?.focus()}steppedMinutes(t){const e=Number.isInteger(this.step)&&this.step>0&&this.step<60?this.step:1,s=this.minutes;return t>0?Math.floor(s/e)*e+e:Math.ceil(s/e)*e-e}flip(){this.value!==I&&this.set((this.value+720)%I)}hourText(){if(!this.hour12)return W(this.hours);const t=this.hours%12||12;return W(t)}updated(t){if(t.has("value")||t.has("hour12"))for(const e of this.segments()){const t=e.dataset.seg;"h"===t?e.value=this.hourText():"m"===t&&(e.value=W(this.minutes))}}segment(t,e,s,i,a){return f`<input
class="tf__seg"
data-seg=${t}
inputmode="numeric"
autocomplete="off"
spellcheck="false"
maxlength="3"
role="spinbutton"
aria-label=${e}
aria-valuemin=${i}
aria-valuemax=${a}
aria-valuenow=${s}
.value=${"h"===t?this.hourText():W(this.minutes)}
@keydown=${this.onKey}
@input=${this.onInput}
@focus=${t=>{this.typed="",t.target.select()}}
@blur=${()=>{this.typed=""}}
/>`}render(){const[t,e]=this.periods;return f`<div
class="fv-field tf ${this.invalid?"is-invalid":""}"
role="group"
aria-label=${this.label}
@click=${t=>{t.target===t.currentTarget&&this.segments()[0]?.focus()}}
>
${this.segment("h",this.hoursLabel,this.hour12?this.hours%12||12:this.hours,this.hour12?1:0,this.hour12?12:this.endOfDay?24:23)}<span
class="tf__colon"
aria-hidden="true"
>:</span
>${this.segment("m",this.minutesLabel,this.minutes,0,59)}
${this.hour12?f`<button
class="tf__seg tf__period"
data-seg="p"
type="button"
aria-label=${this.hours>=12&&this.value!==I?e:t}
@keydown=${this.onKey}
@click=${()=>this.flip()}
>
${this.hours>=12&&this.value!==I?e:t}
</button>`:o}
</div>`}};customElements.get("fluvy-time-field")||customElements.define("fluvy-time-field",X);var V=/* @__PURE__ */t({}),J=1440,G=t=>{const e=new Date(t);return 60*e.getHours()+e.getMinutes()},Q=(t,e)=>{if(e>=J)return k(t,1).getTime();const s=new Date(t);return s.setHours(Math.floor(e/60),e%60,0,0),s.getTime()},Z=class extends p{static{this.styles=[...c,l`:host{display: flex;flex-direction: column;gap: 16px;}.ad-presets{display: flex;flex-direction: column;}.ad-row{display: grid;grid-template-columns: repeat( var(--n), round(down, calc((100% - (var(--n) - 1) * 8px) / var(--n) + 0.01px), 1px) );column-gap: 8px;}.ad-row .fv-chip{width: auto;min-width: 0;}.ad-row .fv-chip__pill{background: var(--fluvy-inset, var(--fluvy-page));}.ad-month{display: flex;align-items: center;gap: 8px;}.ad-month__name{flex: 1 1 auto;min-width: 0;margin: 0;font-size: 15px;line-height: 20px;font-weight: 600;text-align: center;}.ad-times{display: grid;grid-template-columns: repeat(2, round(down, calc((100% - 8px) / 2 + 0.01px), 1px));column-gap: 8px;}.ad-time{display: flex;flex-direction: column;gap: 4px;min-width: 0;font-size: 13px;line-height: 20px;font-weight: 500;color: var(--fluvy-text-secondary);}.ad-apply{display: flex;flex-direction: column;gap: 8px;}.ad-why{margin: 0;font-size: 13px;line-height: 20px;font-weight: 500;color: var(--fluvy-danger);text-align: center;}.fv-btn{width: 100%;}`]}static{this.properties={hass:{attribute:!1},range:{attribute:!1},now:{type:Number},language:{type:String},t:{attribute:!1},wholeDays:{type:Boolean,attribute:"whole-days"},noPresets:{type:Boolean,attribute:"no-presets"},month:{state:!0},from:{state:!0},to:{state:!0},fromTime:{state:!0},toTime:{state:!0},focusDay:{state:!0},turn:{state:!0}}}constructor(){super(),this.opened=!0,this.timesTouched=!1,this.range=U(/* @__PURE__ */new Date),this.now=Date.now(),this.language="en",this.t=t=>t,this.wholeDays=!1,this.noPresets=!1,this.month=/* @__PURE__ */new Date,this.from=/* @__PURE__ */new Date,this.to=/* @__PURE__ */new Date,this.fromTime=0,this.toTime=J,this.turn=0,this.focusDay=/* @__PURE__ */new Date}willUpdate(t){if(!t.has("range"))return;const{start:e,end:s}=this.range;this.from=b(new Date(e)),this.to=b(/* @__PURE__ */new Date(s-1)),this.fromTime=G(e);const i=0===new Date(s).getHours()&&0===new Date(s).getMinutes();this.toTime=i?this.dayEnd:G(s),this.month=new Date(this.to.getFullYear(),this.to.getMonth(),1),this.focusDay=this.to,this.opened=!0,this.timesTouched=!1}emit(t){this.dispatchEvent(new CustomEvent("fluvy-dates",{detail:{range:t},bubbles:!0,composed:!0}))}preset(t){const e=U(new Date(this.now));if("today"===t)this.emit(e);else if("yesterday"===t)this.emit(q(e,-1));else{const t=new Date(e.start);t.setDate(t.getDate()-6),this.emit({start:t.getTime(),end:e.end})}}pick(t){if(this.opened)return this.opened=!1,this.from=t,this.to=t,void(this.timesTouched||(this.fromTime=0,this.toTime=this.dayEnd));!x(this.from,this.to)||x(t,this.from)?(this.from=t,this.to=t):t<this.from?this.from=t:this.to=t}stepMonth(t){this.turn=t,this.month=_(this.month,t)}get dayEnd(){return h(this.hass)?1439:J}chosen(){const t=Q(this.from,this.wholeDays?0:this.fromTime),e=Q(this.to,this.wholeDays||this.toTime>=1439?J:this.toTime);return{start:t,end:Math.min(e,U(new Date(this.now)).end)}}apply(){const t=this.chosen();t.end>t.start&&this.emit(t)}moveFocus(t){const e=b(new Date(this.now)),s=t>e?e:t;T(s,this.month)||(this.turn=s>this.month?1:-1,this.month=new Date(s.getFullYear(),s.getMonth(),1)),this.focusDay=s}format(t,e){return m(this.language,t).format(e)}renderPresets(){const t=U(new Date(this.now)),e=new Date(t.start);e.setDate(e.getDate()-6);const s=(t,e,s)=>f`<button
class="fv-chip ${s?"is-active":""}"
aria-pressed=${String(s)}
@click=${()=>this.preset(t)}
>
<span class="fv-chip__pill">${this.t(e)}</span>
</button>`;return f`<div class="ad-presets">
<div class="ad-row fv-chips--fill" style="--n:2" data-fill-row>
${s("today","preset.today",j(this.range,t))}
${s("yesterday","preset.yesterday",j(this.range,q(t,-1)))}
</div>
<div class="ad-row fv-chips--fill" style="--n:1" data-fill-row>
${s("week","preset.week",this.range.start===e.getTime()&&this.range.end===t.end)}
</div>
</div>`}renderMonth(){const t=w(this.hass,void 0),e=b(new Date(this.now)),s=T(this.month,e),i=this.from<this.to?this.from:this.to,a=this.from<this.to?this.to:this.from,o=this.format({month:"long",year:"numeric"},this.month);return f`<div class="ad-month">
<button
class="fv-round fv-round--quiet"
aria-label=${this.t("month_prev")}
@click=${()=>this.stepMonth(-1)}
>
${n("chevronLeft")}
</button>
<p class="ad-month__name">${o}</p>
<button
class="fv-round fv-round--quiet"
aria-label=${this.t("month_next")}
?disabled=${s}
@click=${()=>this.stepMonth(1)}
>
${n("chevron")}
</button>
</div>
<div>
${$({month:this.month,first:t,focus:this.focusDay,label:o,weekday:t=>this.format({weekday:"narrow"},t),turn:this.turn,mode:"range",day:s=>{const o=s>=i&&s<=a,n=(s.getDay()-t+7)%7;return{selected:x(s,i)||x(s,a),...o?{band:{first:x(s,i)||0===n||1===s.getDate(),last:x(s,a)||6===n||s.getDate()===D(s)}}:{},today:x(s,e),disabled:s>e,label:this.format({weekday:"long",day:"numeric",month:"long"},s)}},onPick:t=>{this.focusDay=t,this.pick(t)},onMove:t=>this.moveFocus(t),host:this})}
</div>`}renderTimes(t){const e=(e,s,i)=>f`<div class="ad-time">
<span id="ad-${e}" aria-hidden="true">${this.t(e)}</span>
<fluvy-time-field
?reduced-motion=${this.hasAttribute("reduced-motion")}
.value=${s}
.hour12=${h(this.hass)}
.periods=${v(this.hass)}
.endOfDay=${"to"===e&&!h(this.hass)}
.label=${this.t(e)}
.hoursLabel=${this.t("hours")}
.minutesLabel=${this.t("minutes")}
.invalid=${"to"===e&&!t}
@fluvy-time=${t=>i(t.detail.value)}
></fluvy-time-field>
</div>`;return f`<div class="ad-times">
${e("from",this.fromTime,t=>{this.timesTouched=!0,this.fromTime=t})}
${e("to",this.toTime,t=>{this.timesTouched=!0,this.toTime=t})}
</div>`}render(){const t=this.chosen(),e=t.end>t.start;return f`${this.noPresets?o:this.renderPresets()} ${this.renderMonth()}
${this.wholeDays?o:this.renderTimes(e)}
<div class="ad-apply">
<button
class="fv-btn fv-btn--accent"
?disabled=${!e}
aria-describedby=${e?o:"ad-why"}
@click=${()=>this.apply()}
>
${this.t("apply")}
</button>
${e?o:f`<p class="ad-why" id="ad-why">${this.t("end_before_start")}</p>`}
</div>`}};customElements.get("fluvy-date-picker")||customElements.define("fluvy-date-picker",Z);var tt=class{constructor(t){this.host=t,this.open="",this.leaving="",this.opener=null,this.timer=0,this.onLeft=t=>{t.target===t.currentTarget&&this.leaving&&this.gone(this.leaving)},this.onKey=t=>{"Escape"===t.key&&this.open&&(this.dismiss(this.open),t.stopPropagation())},t.addController(this)}hostDisconnected(){clearTimeout(this.timer),this.timer=0}is(t){return this.open===t}show(t){this.open!==t&&(clearTimeout(this.timer),this.leaving="",this.open=t,this.host.requestUpdate(),this.host.updateComplete.then(()=>{const e=this.host.renderRoot,s=e instanceof ShadowRoot?e.activeElement:null;this.opener=s??null,e.querySelector(`[data-autofocus="${t}"]`)?.focus({preventScroll:!0})}))}dismiss(t=this.open){this.open===t&&this.leaving!==t&&(d()?this.gone(t):(this.leaving=t,this.host.requestUpdate(),clearTimeout(this.timer),this.timer=window.setTimeout(()=>this.gone(t),400)))}gone(t){this.open===t&&(this.open="",this.leaving="",this.host.requestUpdate(),this.opener?.focus({preventScroll:!0}),this.opener=null)}},et=/* @__PURE__ */t({}),st=t=>t.normalize("NFD").replace(/\p{M}/gu,"").toLowerCase(),it=class extends p{static{this.styles=[...c,l`:host{display: block;min-width: 0;}:host([anchored]){display: contents;}.fv-menu[data-align='end']{transform-origin: top right;}.fv-menu[data-align='end'][data-placement='above']{transform-origin: bottom right;}`]}static{this.properties={value:{type:String},options:{attribute:!1},label:{type:String},disabled:{type:Boolean,reflect:!0},onPage:{type:Boolean,attribute:"on-page"},open:{type:Boolean,reflect:!0},anchored:{type:Boolean,reflect:!0}}}constructor(){super(),this.active=-1,this.leaving=!1,this.placement="below",this.typed="",this.typedAt=0,this.pointerAt={x:NaN,y:NaN},this.leaveTimer=0,this.listening=!1,this.following=0,this.placed="",this.onKey=t=>{if(this.disabled||t.ctrlKey||t.metaKey||t.altKey)return;const{key:e}=t,s=1===e.length&&" "!==e;if(this.open)switch(e){case"ArrowDown":case"ArrowUp":return t.preventDefault(),void this.activate(this.step("ArrowDown"===e?1:-1));case"PageDown":case"PageUp":return t.preventDefault(),void this.activate(this.step("PageDown"===e?5:-5));case"Home":case"End":return t.preventDefault(),void this.activate("Home"===e?this.first:this.last);case"Enter":return t.preventDefault(),void this.choose(this.active);case" ":return t.preventDefault(),void(this.typed&&performance.now()-this.typedAt<500?this.typeAhead(" "):this.choose(this.active));case"Tab":return void this.choose(this.active);case"Escape":return t.preventDefault(),t.stopPropagation(),void this.hide();default:s&&(t.preventDefault(),this.typeAhead(e))}else["ArrowDown","ArrowUp","Enter"," "].includes(e)?(t.preventDefault(),this.show()):"Home"===e||"End"===e?(t.preventDefault(),this.show("Home"===e?this.first:this.last)):s&&(t.preventDefault(),this.show(),this.typeAhead(e))},this.onMenuKey=t=>{this.onKey(t),"Tab"!==t.key&&t.stopPropagation()},this.onRowMove=t=>{if(t.clientX===this.pointerAt.x&&t.clientY===this.pointerAt.y)return;this.pointerAt={x:t.clientX,y:t.clientY};const e=Number(t.currentTarget.dataset.index);Number.isNaN(e)||this.activate(e)},this.onOutside=t=>{if(!this.open)return;if("scroll"===t.type&&this.menu&&t.composedPath().includes(this.menu))return;const e=t.composedPath(),s=this.anchor;"pointerdown"===t.type&&(e.includes(this)||s&&e.includes(s))||this.hide()},this.value="",this.options=[],this.label="",this.disabled=!1,this.onPage=!1,this.open=!1,this.anchored=!1}get selected(){return this.options.findIndex(t=>t.value===this.value)}enabled(t,e){for(let s=t;s>=0&&s<this.options.length;s+=e)if(!this.options[s]?.disabled)return s;return-1}get first(){return this.enabled(0,1)}get last(){return this.enabled(this.options.length-1,-1)}step(t){const e=t<0?-1:1;let s=this.active<0?e>0?this.first:this.last:this.active;for(let i=Math.abs(t);i>0;i-=1){const t=this.enabled(s+e,e);if(t<0)break;s=t}return s}show(t=this.selected){this.disabled||this.open||(this.active=t>=0&&!this.options[t]?.disabled?t:this.first,this.open=!0)}choose(t){const e=this.options[t];e&&!e.disabled&&(e.value!==this.value&&(this.value=e.value,this.dispatchEvent(new CustomEvent("fluvy-change",{detail:{value:e.value},bubbles:!0,composed:!0})),i(this,"selection")),this.hide())}hide(){this.open=!1,this.anchored&&this.shadowRoot?.activeElement===this.menu&&this.anchor?.focus({preventScroll:!0})}left(){window.clearTimeout(this.leaveTimer),this.leaving&&(this.leaving=!1,this.active=-1,this.requestUpdate())}get menu(){return this.renderRoot.querySelector(".fv-menu")}get field(){return this.renderRoot.querySelector(".fv-select")}get anchor(){return this.anchored?this.previousElementSibling:null}place(t){const e=this.anchor??this.field;if(!e)return;const s=a(e),i=e.getBoundingClientRect(),o={top:i.top/s,bottom:i.bottom/s,left:i.left/s,right:i.right/s,width:i.width/s},n=window.innerWidth/s,r=window.innerHeight/s,h=8+((l=Math.max(1,this.options.length))<=9?44*l:376);var l;const d=r-16-(o.bottom+4),c=o.top-4-16,u=h<=d||d>=c?"below":"above",p=Math.max(52,Math.min(h,"below"===u?d:c)),f="below"===u?o.bottom+4:o.top-4-p,v=Math.max(192,Math.min(this.anchored?this.namesWidth():o.width,n-32)),m=this.anchored?e.parentElement?.getBoundingClientRect():void 0,g=void 0!==m&&m.right-i.right<i.left-m.left,y=g?o.right-v:o.left,b=[f,Math.max(16,Math.min(y,n-16-v)),v,p].map(t=>`${Math.round(t)}px`),w=`${u} ${g?"end":"start"} ${b.join(" ")}`;if(w===this.placed)return;this.placed=w,this.placement=u,t.dataset.placement=u,t.dataset.align=g?"end":"start";const[x,$,D,_]=b;t.style.setProperty("--fv-menu-top",x),t.style.setProperty("--fv-menu-left",$),t.style.setProperty("--fv-menu-w",D),t.style.setProperty("--fv-menu-h",_)}namesWidth(){const t=Math.max(0,...this.options.map(t=>s(t.label,{size:15,weight:500})));return Math.ceil(64+t)}follow(){this.following=requestAnimationFrame(()=>{const t=this.menu;this.open&&t&&(this.place(t),this.follow())})}typeAhead(t){const e=performance.now();e-this.typedAt>500&&(this.typed=""),this.typedAt=e,this.typed+=t.toLowerCase();const s=this.typed.length>1&&[...this.typed].every(t=>t===this.typed[0]),i=st(s?this.typed[0]:this.typed),a=this.options.length,o=s||1===this.typed.length?this.active+1:this.active;for(let n=0;n<a;n+=1){const t=(o+n+a)%a,e=this.options[t];if(e&&!e.disabled&&st(e.label).startsWith(i))return void this.activate(t)}}activate(t){t<0||t===this.active||(this.active=t,this.requestUpdate())}listen(t){if(t===this.listening)return;this.listening=t;const e=t?"addEventListener":"removeEventListener";document[e]("pointerdown",this.onOutside,!0),document[e]("scroll",this.onOutside,!0),window[e]("resize",this.onOutside),cancelAnimationFrame(this.following),t?this.follow():this.placed=""}willUpdate(t){t.has("open")&&(this.open?(window.clearTimeout(this.leaveTimer),this.leaving=!1,this.active<0&&(this.active=this.selected>=0?this.selected:this.first),this.toggleAttribute("reduced-motion",d())):t.get("open")&&(this.typed="",d()?(this.leaving=!1,this.active=-1):(this.leaving=!0,this.leaveTimer=window.setTimeout(()=>this.left(),200))))}updated(t){t.has("open")&&(this.listen(this.open),(void 0!==t.get("open")||this.open)&&this.anchor?.setAttribute("aria-expanded",String(this.open)));const e=this.menu;if(e)if(this.open){if(this.place(e),t.has("open")){this.pointerAt={x:NaN,y:NaN},e.classList.remove("is-leaving");try{e.showPopover&&!e.matches(":popover-open")&&e.showPopover()}catch{}this.anchored&&e.focus({preventScroll:!0})}e.querySelector(`[data-index="${this.active}"]`)?.scrollIntoView({block:"nearest"})}else t.has("open")&&(e.classList.add("is-leaving"),e.addEventListener("animationend",()=>this.left(),{once:!0}))}disconnectedCallback(){super.disconnectedCallback(),this.listen(!1),window.clearTimeout(this.leaveTimer),this.open=!1,this.leaving=!1}renderMenu(){const t=this.anchored;return f`<div
id="menu"
class="fv-menu"
tabindex="-1"
data-own-focus
role="listbox"
popover=${"function"==typeof HTMLElement.prototype.showPopover?"manual":o}
aria-label=${this.label}
aria-activedescendant=${t&&this.open&&this.active>=0?`opt-${this.active}`:o}
data-placement=${this.placement}
@keydown=${t?this.onMenuKey:o}
>
${this.options.map((t,e)=>{const s=t.value===this.value;return f`<div
id="opt-${e}"
class="fv-menu__item ${e===this.active?"is-active":""}"
role="option"
data-index=${e}
aria-selected=${s?"true":"false"}
aria-disabled=${t.disabled?"true":o}
aria-describedby=${t.hint?`hint-${e}`:o}
@pointermove=${this.onRowMove}
@click=${()=>this.choose(e)}
>
<span class="fv-menu__name">${t.label}</span>
${t.hint?f`<span id="hint-${e}" class="fv-menu__hint">${t.hint}</span>`:o}
${s?n("check"):o}
</div>`})}
</div>`}render(){const t=this.open||this.leaving?this.renderMenu():o;if(this.anchored)return f`${t}`;const e=this.options[this.selected];return f`<button
class="fv-field fv-select ${this.onPage?"fv-field--on-page":""}"
type="button"
role="combobox"
aria-haspopup="listbox"
aria-expanded=${this.open?"true":"false"}
aria-controls="menu"
aria-activedescendant=${this.open&&this.active>=0?`opt-${this.active}`:o}
aria-label=${this.label}
?disabled=${this.disabled}
@click=${()=>this.open?this.hide():this.show()}
@keydown=${this.onKey}
>
<span class="fv-field__input fv-select__value">${e?.label??this.value}</span>
${n("down")}
</button>
${t}`}};customElements.get("fluvy-select")||customElements.define("fluvy-select",it);export{L as _,K as a,R as c,q as d,N as f,E as g,S as h,Y as i,U as l,O as m,tt as n,B as o,H as p,V as r,C as s,et as t,j as u,P as v};