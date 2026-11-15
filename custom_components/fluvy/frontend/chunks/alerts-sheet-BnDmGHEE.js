/*! Fluvy v1.21.0 · a theme and card library for Home Assistant · SPDX-License-Identifier: GPL-3.0-only · https://github.com/acosta290/fluvy */
import{t}from"./rolldown-runtime-CvjMAzmL.js";import{Hc as e,Kc as s,Oc as a,Tr as i,Vc as o,Wc as n,Xs as r,Zc as l,Zs as h,dl as c,el as d,hl as v,ia as u,kc as p,lc as f,ml as m,nc as w,oa as _,ra as g,rc as $,sc as b}from"./core-CIFC0YYZ.js";import{a as k,o as y}from"./shared-DlZQgqdD.js";import{_ as x,a as z,c as T,d as R,f as q,g as B,h as S,i as C,l as j,m as A,n as D,o as U,p as E,r as O,s as F,u as I}from"./alerts-BDyoxsiS.js";var M=/* @__PURE__ */t({}),V=v("alerts"),H=56,P=t=>{"Escape"===t.key&&t.stopPropagation()},W={handleEvent:t=>t.stopPropagation(),passive:!0};function Y(t,e){const s=t.confirmation;return!(!s||"object"==typeof s&&s.exemptions?.some(t=>t.user===e?.user?.id))}var Z=class extends o{static{this.styles=[...a,p.devices,s`:host(:not([docked])){display: contents;}dialog{position: fixed;inset: 0;width: 100%;height: 100%;max-width: none;max-height: none;flex-direction: column;justify-content: flex-end;align-items: center;overflow: hidden;padding: 0;border: 0;background: color-mix(in srgb, var(--fluvy-neutral-05) 48%, transparent);color: inherit;touch-action: none;overscroll-behavior: contain;animation: fv-fade 240ms var(--fv-ease) both;}dialog[open]{display: flex;}dialog::backdrop{background: none;}@keyframes as-up{from{transform: translateY(100%);}to{transform: none;}}@keyframes as-down{to{transform: translateY(100%);}}@keyframes as-out{to{opacity: 0;}}dialog .fv-sheet{max-width: 392px;overflow-y: auto;touch-action: pan-y;overscroll-behavior: contain;animation: as-up 320ms var(--fv-ease-out) both;}dialog.is-leaving{animation: as-out 200ms var(--fv-ease) both;}dialog.is-leaving .fv-sheet{animation: as-down 200ms var(--fv-ease) both;}.fv-sheet{position: relative;width: 100%;}.fv-sheet__head{height: auto;min-height: 44px;}.fv-sheet__head > .fv-card__titles{flex: 1 1 auto;min-width: 0;}.fv-sheet__head .fv-card__sub, .as-rows .fv-row__sub:not([data-name]){white-space: normal;}.as-rows .fv-row:has(> .fv-row__text > .as-message){height: auto;min-height: 60px;padding-block: 10px;}.as-message{color: var(--fluvy-text);overflow-wrap: anywhere;}.fv-sheet__title{overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}.as-rows, .as-empty{margin-top: 16px;}.as-hit{all: unset;position: relative;z-index: 1;display: inline-flex;flex: 0 0 auto;align-items: center;height: 44px;cursor: pointer;}.as-hit > .fv-btn{height: 36px;font-size: 14px;}.as-hit:focus-visible{outline: none;}.as-hit:focus-visible > .fv-btn{outline: 2px solid var(--fluvy-accent);outline-offset: 2px;}.as-value{color: var(--tone-ink);}.as-snooze{margin-top: 24px;}.as-snooze > .fv-label{margin: 0 0 8px;}.as-snooze > .fv-chips{margin-top: 0;}.as-note{margin: 16px 0 0;font-size: 13px;font-weight: 500;line-height: 20px;text-align: center;color: var(--fluvy-text-secondary);}.as-actions{display: grid;grid-template-columns: repeat(2, minmax(0, 1fr));gap: 16px;margin-top: 24px;}.as-actions--one{grid-template-columns: minmax(0, 1fr);}.as-actions .fv-btn{width: 100%;min-width: 0;padding-inline: 8px;white-space: nowrap;}.as-actions > .as-wide{grid-column: 1 / -1;}`,k]}static{this.properties={hass:{attribute:!1},state:{attribute:!1},words:{attribute:!1},card:{attribute:!1},docked:{type:Boolean,reflect:!0},key_:{state:!0},from_:{state:!0},snoozing_:{state:!0},armed_:{state:!0},leaving_:{state:!0},error_:{state:!0},tick_:{state:!0}}}constructor(){super(),this.ruler=new u(()=>this.renderRoot),this.openedAt=0,this.leaveTimer=0,this.armTimer=0,this.clock=0,this.docked=!1,this.key_=null,this.from_=!1,this.snoozing_=!1,this.armed_="",this.leaving_=!1,this.error_="",this.tick_=0,new g(this,()=>{this.ruler.clear(),h(this.renderRoot,!0),this.requestUpdate()}),new y(this,()=>this.renderRoot.querySelector(".fv-sheet"),()=>this.room)}get isOpen(){return null!==this.key_&&!this.leaving_}open(t,e){clearTimeout(this.leaveTimer),this.leaveTimer=0,this.openedBy=e,this.key_=t??"",this.from_=!1,this.snoozing_=!1,this.error_="",this.disarm(),this.leaving_=!1,this.openedAt=performance.now(),clearInterval(this.clock),this.clock=window.setInterval(()=>{this.tick_+=1},6e4)}close(){this.disarm(),null===this.key_||this.leaving_||(this.docked?this.snoozing_=!1:(this.leaving_=!0,this.leaveTimer=window.setTimeout(()=>this.finishClose(),200)))}connectedCallback(){super.connectedCallback(),this.renderRoot instanceof ShadowRoot&&this.card?.adopt(this.renderRoot)}disconnectedCallback(){super.disconnectedCallback(),this.finishClose()}finishClose(){clearTimeout(this.leaveTimer),this.leaveTimer=0,clearInterval(this.clock),this.clock=0,this.disarm();const t=null!==this.key_,e=this.openedBy;this.openedBy=void 0,this.leaving_=!1,this.snoozing_=!1,this.key_=null;const s=this.renderRoot.querySelector("dialog");s?.open&&s.close(),t&&(this.card?.closed(),e?.isConnected&&e.focus())}willUpdate(t){t.has("card")&&this.renderRoot instanceof ShadowRoot&&this.card?.adopt(this.renderRoot)}updated(t){const e=this.renderRoot.querySelector("dialog");!e||e.open||null===this.key_||this.leaving_||e.showModal(),t.has("key_")&&null!==this.key_&&!this.docked&&requestAnimationFrame(()=>this.renderRoot.querySelector(".fv-sheet__head button")?.focus()),h(this.renderRoot)}onDialogClick(t){t.target===t.currentTarget&&performance.now()-this.openedAt>=350&&this.close()}disarm(){clearTimeout(this.armTimer),this.armTimer=0,this.armed_=""}get room(){const t=this.renderRoot.querySelector(".fv-sheet")?.clientWidth??0;return t>0?t-32:360}context(){const t=this.card?.context();return{hass:this.hass,repairs:t?.repairs,now:t?.now??Date.now(),words:this.words}}run(t,e){(t=>["more-info","navigate","url","assist","fire-dom-event"].includes(t.action)||Boolean(t.confirmation))(t)&&this.close(),this.card?.run(t,e)}press(t,e,s,a){const i=e.tap_action;if(Y(i,this.hass)&&this.armed_!==t)return this.disarm(),this.armed_=t,void(this.armTimer=window.setTimeout(()=>this.disarm(),4e3));this.disarm();const o=this.hass,n=s.rows.map(t=>t.id).filter(t=>t in(o?.states??{})),r=B(i,{matched:n,...a?{row:a}:{}});r&&this.run({...r,confirmation:!1},a??n[0])}rowTap(t,e,s,a=(s?t.definition.rowHoldAction:t.definition.rowAction)){const i=!0===this.hass?.user?.is_admin&&e.device&&(s||e.rows.length>1)?{action:"navigate",navigation_path:`/config/devices/device/${e.device}`}:void 0,o=a??i??(e.lead.state?{action:"more-info"}:void 0);if(!o)return;const n=B(o,{matched:e.rows.map(t=>t.id),row:e.lead.id});n&&this.run(n,e.lead.state?e.lead.id:void 0)}tapped(t,e){const s=t.definition.rowDoubleTapAction;return this.card?.tapper(s,`row_${e.lead.id}`,()=>this.rowTap(t,e,!1),s&&(()=>this.rowTap(t,e,!1,s)))}async snooze(t,e){const s=this.card?.memory();if(s&&this.hass)try{await C(s,this.hass,t,e),this.close()}catch(a){this.error_=a?.message??V(this.hass,"not_saved")}}async wake(t){try{await(this.card?.memory().wake(t))}catch(e){this.error_=e?.message??V(this.hass,"not_saved")}}rowButton(t,e,s=!1){return n`<button class="as-hit" data-target aria-label=${t} @click=${e}>
<span class="fv-btn ${s?"fv-btn--armed":"fv-btn--quiet"}" data-control data-fit="28"
>${t}</span
>
</button>`}circle(t,s,a){return n`<span
class="fv-ico fv-ico--${a?"accent":s}"
data-icon
data-accent=${a??e}
>${w(t)}</span
>`}head(t,s,a){const i=this.hass;return n`<div class="fv-sheet__head">
${a}
<div class="fv-card__titles">
<h2 class="fv-sheet__title" id="as-title" data-name>${t}</h2>
${s?n`<p class="fv-card__sub">${s}</p>`:e}
</div>
${f("close","quiet",c(i,"keypad.close"),()=>this.close())}
</div>`}renderRows(t,e,s){const a=e.map(e=>this.rowView(t,e)),i=a.every(({group:t,name:e,state:s,button:a,under:i,end:o})=>this.room-H-o>=Math.min(96,this.ruler.width("fv-row__title",e))&&this.room-H-o>=this.ruler.width("fv-row__sub",(a||i)&&s?s:t.rows.length>1?m(this.hass,"alerts.entities",t.rows.length):""));return a.map(e=>this.renderRow(t,e,s,i))}rowView(t,e){const s=this.context(),a=this.hass,i=e.lead,o=A(s,i),n=t.definition.rowButton,r=n&&a&&1===e.rows.length&&x(n,a,i.id)?n:void 0,l=`row:${e.id}`,h=this.armed_===l,d=r?h?V(a,"confirm"):r.name??(r.words?c(a,r.words):""):"",v=e.rows.length>1?m(a,"alerts.entities",e.rows.length):"",u=Boolean(!r&&o&&v&&this.ruler.width("fv-row__sub",v)>this.room-12-this.ruler.width("fv-row__value",o)),p=r||u?"":o,f=r?12+this.ruler.pill("fv-btn",d,28):0,w=Boolean(r?.icon&&o&&this.ruler.width("fv-row__sub",o)>this.room-f);return{group:e,name:E(s,t,e),state:o,button:r,id:l,armed:h,words:d,glyph:w,under:u,value:p,end:(w?56:f)+(p?12+this.ruler.width("fv-row__value",p):0)}}renderRow(t,s,a,i){const o=this.context(),r=this.hass,{group:l,name:h,state:c,button:d,id:v,armed:u,words:p,glyph:w,under:g,value:$,end:k}=s,y=l.lead,x="unavailable"===y.state?.state||"unknown"===y.state?.state,z=R(o,y),T=j(o,y.since),B=I(o,t,l.rows.length>1?void 0:y.id),C=y.ok?"ok":y.severity?S[y.severity]:void 0,A=C??a,D=void 0!==t.definition.tone||a!==t.tone,U=x?"off":y.state&&C&&!D?C:a,E=_([...(d||g)&&c?[{text:c}]:[],...l.rows.length>1?[{text:m(r,"alerts.entities",l.rows.length)}]:[],...z?[{text:z,optional:!0}]:[],...T?[{text:V(r,"for",{time:T}),optional:!0}]:[]],this.room-(i?H:0)-k,t=>this.ruler.width("fv-row__sub",t));return n`<div class="fv-row fv-row--tap ${i?"":"fv-row--bare"}">
${i?this.circle(q(o,t,y),U):e}
<span class="fv-row__text"
><span class="fv-row__title" data-name>${h}</span>${B?n`<span class="fv-row__sub as-message">${B}</span>`:e}${E?n`<span class="fv-row__sub">${E}</span>`:e}</span
>
${$?n`<span class="fv-row__value as-value fv-tone--${A}">${$}</span>`:e}
${b([h,B,E||c].filter(Boolean).join(" · "),this.tapped(t,l),()=>this.rowTap(t,l,!0))}
${d&&w?n`<span class="as-hit"
>${f(d.icon??"dots",u?"accent":"quiet",p,()=>this.press(v,d,t,y.id))}</span
>`:d?this.rowButton(p,()=>this.press(v,d,t,y.id),u):e}
</div>`}renderFooter(t){const s=this.hass,a=c(s,"keypad.close");if(!t||!t.rows.length)return n`<div class="as-actions as-actions--one">
<button class="fv-btn fv-btn--quiet" data-control data-target @click=${()=>this.close()}>
${a}
</button>
</div>`;const i=this.card?.memory(),o=Boolean(i?.writable&&t.definition.snooze),r=t.definition.actions.filter(t=>s&&x(t,s)),l=[...o?[{text:V(s,"snooze"),accent:!1,armed:!1,tap:()=>{this.snoozing_=!0}}]:[],...r.map((e,a)=>{const i=`action:${a}`,o=this.armed_===i;return{text:o?V(s,"confirm"):e.name??(e.words?c(s,e.words):""),accent:0===a,armed:o,tap:()=>this.press(i,e,t)}})];l.length<2&&l.push({text:a,accent:!1,armed:!1,tap:()=>this.close()});const h=(this.room-16)/2-16,d=[...l.map(({text:t})=>t),...r.some(t=>Y(t.tap_action,s))?[V(s,"confirm")]:[]].some(t=>this.ruler.width("fv-btn",t)>h),v=r.map((t,e)=>this.armed_===`action:${e}`?(t=>{const e=t.confirmation;return"object"==typeof e&&e&&"string"==typeof e.text?e.text:""})(t.tap_action):"").find(Boolean);return n`${v?n`<p class="as-note" role="status">${v}</p>`:e}
<div class="as-actions ${d?"as-actions--one":""}">
${l.map(({text:t,accent:s,armed:a,tap:i},o)=>n`<button
class="fv-btn ${a?"fv-btn--armed":s?"fv-btn--accent":"fv-btn--quiet"} ${!d&&o===l.length-1&&l.length%2?"as-wide":""}"
data-control
data-target
aria-live=${a?"polite":e}
@click=${i}
>
${t}
</button>`)}
</div>`}renderSnooze(t){const e=this.hass,s=D.filter(e=>"changes"!==e||t.rows.some(t=>t.state));return n`<div class="as-snooze">
${$(V(e,"snooze_for"))}
${i(s.map(t=>{const[s,a]=O[t];return{key:t,label:c(e,s,a)}}),e=>{this.snooze(t,e)},"full",{ruler:this.ruler,width:this.room})}
<div class="as-actions as-actions--one">
<button
class="fv-btn fv-btn--quiet"
data-control
data-target
@click=${()=>{this.snoozing_=!1}}
>
${c(e,"keypad.cancel")}
</button>
</div>
</div>`}renderAlert(t){const s=this.hass,a=this.context(),i=this.state?.alerts.find(e=>e.key===t),o=i?this.card?.look(i):void 0,l=!i||!i.rows.length,h=i&&!l?T(i):[],c=o?.tone??"neutral",d=void 0===i?.oldest?"":j(a,i.oldest),v=l?"":z(a,i),u=!this.from_&&this.ruler.width("fv-card__sub",v)>this.room-H-H,p=l?V(s,"all_clear"):_([{text:v},...d?[{text:V(s,h.length>1?"oldest":"for",{time:d}),optional:!0}]:[]],this.room-H-(u?0:H),t=>this.ruler.width("fv-card__sub",t)),m=this.from_?f("chevronLeft","quiet",V(s,"all_alerts"),()=>{this.key_="",this.from_=!1,this.snoozing_=!1,this.disarm()}):l?this.circle("check","neutral"):u?e:this.circle(o?.glyph??"bell",c,o?.accent);return n`${this.head(o?.name??V(s,"all_clear"),p,m)}
${l?n`<div class="as-empty">
${r("check",V(s,"all_clear"),V(s,"nothing"))}
</div>`:n`<div class="as-rows">${this.renderRows(i,h,c)}</div>`}
${i&&!l&&this.snoozing_?this.renderSnooze(i):e}
${this.error_?n`<p class="as-note" role="alert">${this.error_}</p>`:e}
${this.snoozing_?e:this.renderFooter(i)}`}until(t){const e=this.hass,s=new Date(t),a=new Date(this.context().now),i=t=>l(e,t,"short");return i(s)===i(a)?d(e,s):`${l(e,s,"weekday")} ${d(e,s)}`}renderOverview(){const t=this.hass,s=this.context(),a=(this.state?.alerts??[]).filter(t=>t.applies).map(e=>{const s=void 0!==e.snoozedUntil||!e.rows.length&&e.acknowledged.length>0?"snoozed":e.shown?"shown":"clear",a="shown"===s?String(e.count):"clear"===s?V(t,"clear"):"",i="snoozed"!==s?"":void 0!==e.snoozedUntil?V(t,"snoozed_until",{time:this.until(e.snoozedUntil)}):V(t,"snoozed_changes"),o=12+this.ruler.pill("fv-btn",V(t,"wake"),28),n=this.ruler.width("fv-row__sub",i)>1.8*(this.room-o),r="snoozed"===s?n?56:o:12+this.ruler.width("fv-row__value",a)+("shown"===s?56:0);return{result:e,look:this.card?.look(e),kind:s,value:a,line:i,glyph:n,end:r}}),i=a.every(({look:t,result:e,line:s,end:a})=>this.room-H-a>=Math.min(96,this.ruler.width("fv-row__title",t?.name??e.key))&&this.room-H-a>=this.ruler.width("fv-row__sub",s)),o=a.filter(({kind:t})=>"shown"===t).length,r=a.filter(({kind:t})=>"snoozed"===t).length,l=[o?m(t,"alerts.need",o):V(t,"all_clear"),...r?[m(t,"alerts.snoozed",r)]:[]].join(" · "),h=i?"":"fv-row--bare";return n`${this.head(this.card?.title()??V(t,"title"),l,e)}
<div class="as-rows">
${a.map(({result:a,look:o,kind:r,value:l,line:c,glyph:d,end:v})=>{const u=o?.name??a.key,p=(t,s)=>i?this.circle(o?.glyph??"bell",t,s):e;if("snoozed"===r)return n`<div class="fv-row ${h}">
${p("neutral")}
<span class="fv-row__text"
><span class="fv-row__title" data-name>${u}</span
><span class="fv-row__sub">${c}</span></span
>
${d?n`<span class="as-hit"
>${f("bell","quiet",V(t,"wake"),()=>{this.wake(a.key)})}</span
>`:this.rowButton(V(t,"wake"),()=>{this.wake(a.key)})}
</div>`;if("clear"===r)return n`<div class="fv-row ${h}">
${p("neutral")}
<span class="fv-row__text"><span class="fv-row__title" data-name>${u}</span></span>
<span class="fv-row__value fv-row__value--quiet">${l}</span>
</div>`;const m=a.entity?[]:F(s,a),_=m.map(t=>U(s,t)),[g]=m,$=this.room-(i?H:0)-v,k=_.map((t,e)=>_.slice(0,_.length-e).join(", ")).find(t=>this.ruler.width("fv-row__sub",t)<=$)??(1===g?.n?g.name:""),y=o?.tone??"neutral";return n`<div class="fv-row fv-row--tap ${h}">
${p(y,o?.accent)}
<span class="fv-row__text"
><span class="fv-row__title" data-name>${u}</span>${k?n`<span class="fv-row__sub" data-name>${k}</span>`:e}</span
>
<span class="fv-row__value as-value fv-tone--${y}">${l}</span>
<span class="fv-row__chevron">${w("chevron")}</span>
${b(`${u} · ${z(s,a)}`,()=>{this.key_=a.key,this.from_=!0},void 0)}
</div>`})}
</div>
${this.error_?n`<p class="as-note" role="alert">${this.error_}</p>`:e}
<div class="as-actions as-actions--one">
<button class="fv-btn fv-btn--quiet" data-control data-target @click=${()=>this.close()}>
${c(t,"keypad.close")}
</button>
</div>`}renderSheet(t){return n`<div class="fv-sheet as-sheet" data-card>
<div class="fv-sheet__grabber"><span></span></div>
${t?this.renderAlert(t):this.renderOverview()}
</div>`}render(){const t=this.key_;return null===t?e:this.docked?this.renderSheet(t):n`<dialog
class=${this.leaving_?"is-leaving":""}
aria-labelledby="as-title"
@cancel=${t=>{t.preventDefault(),this.close()}}
@close=${()=>this.finishClose()}
@click=${t=>this.onDialogClick(t)}
@keydown=${P}
@touchstart=${W}
>
${this.renderSheet(t)}
</dialog>`}};customElements.get("fluvy-alerts-sheet")||customElements.define("fluvy-alerts-sheet",Z);export{M as t};