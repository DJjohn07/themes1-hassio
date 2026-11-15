/*! Fluvy v1.21.0 · a theme and card library for Home Assistant · SPDX-License-Identifier: GPL-3.0-only · https://github.com/acosta290/fluvy */
import{t}from"./rolldown-runtime-CvjMAzmL.js";import{$a as e,$c as s,$s as a,Ai as i,B as r,Bl as n,F as o,Gi as l,Hc as d,Hl as h,I as p,Ic as c,Kc as u,L as m,Pi as _,Qa as f,Qc as v,R as g,Tr as w,Ul as y,Wc as x,Zi as $,_c as b,_s as k,el as E,hc as S,hl as T,kc as R,ki as O,lc as U,ll as M,mc as P,na as L,nc as C,oa as A,ol as N,qc as F,rc as q,rl as j,tc as H,va as V,xc as W,yc as D,z as I,zl as B}from"./core-CIFC0YYZ.js";import{B as z,E as K,J as X,O as Q,S as G,T as Y,W as J,ct as Z,d as tt,et,ft as st,g as at,h as it,o as rt,q as nt}from"./fields-NnvUH807.js";import{i as ot,n as lt,r as dt}from"./shared-DlZQgqdD.js";M({media:{volume:"Volume",mute:"Mute",source:"Source",play:"Play",pause:"Pause",previous:"Previous",next:"Next",shuffle:"Shuffle",repeat:"Repeat",nothing:"Nothing playing",unmute:"Unmute",power:"Power",power_on:"Turn on",power_off:"Turn off",position:"Position",last_played:"last played {time}",since:"since {time}",repeat_off:"Repeat off",repeat_all:"Repeat all",repeat_single:"Repeat one",artwork:"Album art",editor_image_mode:"Own picture shown",o_fallback:"Without artwork"},"now-playing":{progress:"{position} of {duration}",muted:"muted"}});var ht={PAUSE:1,SEEK:2,VOLUME_SET:4,VOLUME_MUTE:8,PREVIOUS:16,NEXT:32,TURN_ON:128,TURN_OFF:256,VOLUME_STEP:1024,SELECT_SOURCE:2048,STOP:4096,PLAY:16384,SHUFFLE:32768,REPEAT:262144},pt=t=>"playing"===t||"buffering"===t,ct=t=>pt(t)||"paused"===t,ut=t=>"off"===t||"standby"===t,mt=t=>t.supports(ht.PLAY)||t.supports(ht.PAUSE)||t.supports(ht.TURN_ON),_t=t=>t.supports(ht.TURN_ON)||t.supports(ht.TURN_OFF),ft=t=>t.supports(ht.VOLUME_SET)||t.supports(ht.VOLUME_MUTE)||t.supports(ht.VOLUME_STEP);function vt(t,e){if(null===e||e<=0)return null;const s=n(t,"media_position");if(null===s)return null;const a=Date.parse(y(t,"media_position_updated_at")),i="playing"===t.state&&Number.isFinite(a)?Math.max(0,(Date.now()-a)/1e3):0;return Math.min(e,Math.max(0,s+i))}function gt(t,e){return ut(e)&&t.supports(ht.TURN_ON)?{service:"turn_on",expect:"idle"}:{service:"media_play_pause",expect:pt(e)?"paused":"playing"}}function wt(t,e){return ut(e)?t.supports(ht.TURN_ON)?{service:"turn_on",expect:"idle"}:null:t.supports(ht.TURN_OFF)?{service:"turn_off",expect:"off"}:null}var yt=["next","previous","volume","power"];function xt(t,e){const s=[...t];for(const a of yt){if(s.length<=e)break;const t=s.indexOf(a);t>=0&&s.splice(t,1)}return s.slice(0,Math.max(0,Math.min(s.length,e)))}var $t={power:"media.power",previous:"media.previous",play:"media.play",next:"media.next",volume:"media.volume"},bt=()=>nt("controls",o.map(t=>({value:t,label:G($t[t])})));function kt(t,e){const s=y(e,"entity_picture")||y(e,"entity_picture_local");return s?/^(https?:|data:|blob:|\/\/)/.test(s)?s:t?.hassUrl(s)??s:""}var Et=F(".md-card{}.md-art--l{border-radius:var(--fluvy-radius-card);box-shadow:0 24px 48px -20px rgb(0 0 0 / calc(0.45 * var(--fluvy-shade,1))),inset 0 0 0 1px rgb(0 0 0 / 0.08)}.md-now{display:flex;align-items:center;gap:16px;height:80px}.md-now > .fv-round{width:48px;height:48px}.md-now > .fv-round svg{width:24px;height:24px}.md-now__text{flex:1 1 auto;min-width:0}.md-title{font-size:16px;line-height:24px}.md-source{display:flex;align-items:center;gap:6px}.md-source svg{width:20px;height:20px}.md-seek{margin-top:20px}.md-progress{position:relative;height:44px}.md-progress::before{content:'';position:absolute;left:0;right:0;top:20px;height:4px;border-radius:2px;background:var(--fluvy-page-alt)}.md-progress__fill{position:absolute;left:0;top:20px;height:4px;border-radius:2px;background:var(--fluvy-accent)}.md-times{display:flex;justify-content:space-between;height:16px;font-size:12px;font-weight:500;line-height:16px;color:var(--fluvy-text-secondary);font-variant-numeric:tabular-nums}.md-controls{display:flex;justify-content:space-between;align-items:center;height:48px;margin-top:16px}.md-controls .fv-round{width:48px;height:48px}.md-controls .fv-round svg{width:24px;height:24px}.md-controls--56{height:56px;margin-top:24px}.md-controls--56 .fv-round{width:56px;height:56px}.md-controls--56 .fv-round svg{width:32px;height:32px}.md-controls--44{height:44px}.md-controls--44 .fv-round{width:44px;height:44px}.md-controls--44 .fv-round svg{width:20px;height:20px}.md-volume{display:flex;align-items:center;gap:20px;height:44px;margin-top:8px}.md-rows{margin-top:16px}.md-mini{}.md-mini__card{padding:16px}:host:has(> .md-mini__card){--fv-pad:16px}.md-mini__card + .md-mini__card{margin-top:16px}.md-mini__row{display:flex;align-items:center;gap:12px;height:44px}.md-mini__off{margin-top:16px}.md-hero{position:relative;display:flex;justify-content:center;margin-top:24px}.md-hero__power{position:absolute;top:0;right:0;width:48px;height:48px}.md-hero__power svg{width:24px;height:24px}.md-hero__text{margin-top:24px;text-align:center}.md-hero__title{font-size:22px;font-weight:600;line-height:28px;letter-spacing:-0.015em}.md-seek--sheet{margin-top:16px}.md-empty{margin-top:16px}"),St=T("media"),Tt={handleEvent:S,capture:!0},Rt=["full","mini","hero"],Ot=["play","next"],Ut=class extends O{static layoutHeight(t){return I(t)}static{this.styles=[...O.styles,Et,u`.md-card, .md-mini{width: auto;}.md-art--s svg{width: 20px;height: 20px;}.md-art--l svg{width: 32px;height: 32px;}.md-art--l.fv-art--idle{box-shadow: inset 0 0 0 1px var(--fluvy-border);}.fv-art__img--own{background-size: contain;background-repeat: no-repeat;}.is-unavailable .fv-art__img--own{filter: grayscale(1);}.is-unavailable .fv-art__img--own.is-on{opacity: 0.5;}.md-hero__head{display: block;}.fv-card__head--tap .fv-art{transition: scale var(--fv-fast) var(--fv-ease);}.fv-card__head--tap :is(.md-now__text, .md-hero__text, .fv-row__text){transition: opacity var(--fv-base) var(--fv-ease);}.fv-card__head--tap:has(.fv-card__tap:active) .fv-art{scale: 0.94;}.fv-card__head--tap:has(.fv-card__tap:active) :is(.md-now__text, .md-hero__text, .fv-row__text){opacity: 0.7;}@media (hover: hover){.fv-card__head--tap:has(.fv-card__tap:hover:not(:active)) .fv-art{scale: 1.06;}}.md-source__text{min-width: 0;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}.md-hero__title{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}.md-hero__text{min-height: calc(28px + 2 * 20px);}.md-card--hero .md-source{justify-content: center;}.md-progress{max-width: 100%;touch-action: pan-y;}.md-progress[role='slider']{cursor: pointer;}.md-progress .fv-knob{left: 0;top: 0;}.md-progress__fill{width: 100%;transform-origin: left center;}.is-playing .md-progress__fill{transition: transform 1s linear;}.is-playing .md-progress .fv-knob{transition: translate 1s linear;}.is-scrubbing .md-progress__fill, .is-scrubbing .md-progress .fv-knob{transition: none;}.md-controls{justify-content: center;}.md-swap{display: flex;animation: md-swap 200ms var(--fv-ease-out) both;}@keyframes md-swap{from{opacity: 0;transform: scale(0.72);}to{opacity: 1;transform: none;}}.md-volume fluvy-ruler{flex: 0 0 auto;}`]}static{this.properties={...O.properties,tick_:{state:!0},scrub_:{state:!0}}}constructor(){super(),this.timer=0,this.head=new L(this),this.layers=["",""],this.front=0,this.onSeekDown=t=>{if(!this.entity().supports(ht.SEEK))return;if("mouse"===t.pointerType&&0!==t.button)return;const e=t.currentTarget;try{e.setPointerCapture(t.pointerId)}catch{}this.scrub_=this.fractionAt(t)},this.onSeekMove=t=>{null!==this.scrub_&&(this.scrub_=this.fractionAt(t))},this.onSeekUp=t=>{if(null===this.scrub_)return;const e=this.fractionAt(t);this.scrub_=null;const s=n(this.entity(),"media_duration");null!==s&&this.seek(e*s)},this.onSeekCancel=()=>{this.scrub_=null},this.onSeekKey=t=>{const e=this.entity();if(!e.supports(ht.SEEK))return;const s=n(e,"media_duration");if(null===s)return;const a=vt(e,s)??0;let i;switch(t.key){case"ArrowRight":case"ArrowUp":i=a+10;break;case"ArrowLeft":case"ArrowDown":i=a-10;break;case"Home":i=0;break;case"End":i=s;break;default:return}t.preventDefault(),this.seek(P(i,0,s))},this.tick_=0,this.scrub_=null}static{this.base=[...i,..._]}static{this.keys=$()(["variant","source_style","show_source","show_volume","show_power","controls","image","image_mode","secondary"])}static getConfigForm(){return{schema:[Y(["media_player"]),z(),X("secondary"),K(st("image"),J(t=>Boolean(t.image),it("image_mode",[["fallback","media.o_fallback"],["always","option.always"]]))),K(et("variant",Rt),et("source_style",["full","chips"])),K(tt("show_source"),tt("show_volume")),tt("show_power"),bt(),...Z().map(t=>J(({show_volume:t,variant:e})=>!1!==t&&"mini"!==e,t)),...at(),rt()],...Q({image_mode:"media.editor_image_mode"})}}static{this.defaults=(t,e)=>{const s=h(e,"string"==typeof t.entity?t.entity:"");return{variant:"full",source_style:"full",show_source:!0,show_volume:!0,show_power:!s.stateObj||_t(s),controls:[...Ot],image_mode:"fallback"}}}static getStubConfig(t,e){return{type:"custom:fluvy-media-card",entity:e.find(t=>t.startsWith("media_player."))??""}}prepare(t){if(!t.entity)throw new Error('fluvy-media-card: "entity" is required');const e=t.variant&&Rt.includes(t.variant)?t.variant:"full";return{...t,variant:e}}get variant(){return this.config?.variant??"full"}getCardSize(){return"mini"===this.variant?2:"hero"===this.variant?12:7}getGridOptions(){return{columns:12,rows:"auto",min_columns:"hero"===this.variant?8:6}}watched(){const t=lt(this.config?.image);return t?[...super.watched(),t]:super.watched()}updated(t){super.updated(t),this.syncTimer()}disconnectedCallback(){super.disconnectedCallback(),this.stopTimer()}stopTimer(){this.timer&&(clearInterval(this.timer),this.timer=0)}syncTimer(){const t=this.entity(),e=this.isConnected&&"ok"===t.status&&this.isPlaying(t)&&null!==n(t,"media_duration");e&&!this.timer?this.timer=window.setInterval(()=>{this.tick_=Date.now()},1e3):e||this.stopTimer()}isPlaying(t){return pt(this.stateOf(t))}isActive(t){return ct(this.stateOf(t))}secondary(t){const e=[y(t,"media_series_title"),y(t,"media_artist"),y(t,"media_album_name")].filter(Boolean);return e.length?e.join(" · "):y(t,"app_name")}ownLine(){const t=this.config?.secondary;return""===t?void 0:this.ownText(t)?.text}watching(t,e){if("tv"===t.deviceClass&&!ut(t.state)&&"idle"!==t.state)return y(t,"app_name")||y(t,"source")||e}sourceLine(t,e,s){const a=y(t,"source");return a&&a!==e&&!s.split(" · ").includes(a)?`${e} · ${a}`:e}idleLine(t,e=""){const s=N(this.hass,t);if(!ut(t.state)&&"idle"!==t.state){const a=[y(t,"source"),y(t,"app_name")].find(t=>t&&t!==e);return a?`${s} · ${a}`:s}const a=t.stateObj?.last_changed;if(!a)return s;const i=new Date(a);return Number.isNaN(i.getTime())?s:`${s} · ${St(this.hass,"last_played",{time:j(this.hass,i)})}`}unavailableLine(t){const e=N(this.hass,t),s=t.stateObj?.last_changed;if(!s)return e;const a=new Date(s);return Number.isNaN(a.getTime())?e:`${e} · ${a.toDateString()===/* @__PURE__ */(new Date).toDateString()?St(this.hass,"since",{time:E(this.hass,a)}):j(this.hass,a)}`}playPause(t){const{service:e,expect:s}=gt(t,this.stateOf(t));this.expect(t.id,s),this.call("media_player",e)}seek(t){this.call("media_player","media_seek",{seek_position:Math.round(t)})}power(t){return!1===this.config?.show_power?null:"missing"===t.status?{service:"turn_off",expect:"off"}:wt(t,this.stateOf(t))}picture(t,e){const s=dt(this.hass,this.config?.image),a=e?"":kt(this.hass,t);return!s||"always"!==this.config?.image_mode&&a?{url:a,own:!1}:{url:s,own:!0}}art(t,e,s="",a="speaker"){this.layers[this.front]!==e&&(this.front=0===this.front?1:0,this.layers[this.front]=e);const i=dt(this.hass,this.config?.image);return x`<span
class="fv-art ${s}"
data-measure="skip"
style="width:${t}px;height:${t}px"
>
${this.layers.map((t,e)=>x`<span
class="fv-art__img ${t&&e===this.front?"is-on":""} ${t&&t===i?"fv-art__img--own":""}"
style=${t?`background-image:url("${(t=>[...t].filter(t=>'"'!==t&&"\\"!==t&&!ot(t)).join(""))(t)}")`:d}
></span>`)}
${e?d:C(a)}
</span>`}transportRound(t,e,s,a,i=!1){return x`<button
class="fv-round ${e?"is-on":"fv-round--quiet"}"
data-control
data-target
aria-label=${s}
title=${s}
aria-pressed=${e?"true":"false"}
?disabled=${i}
@click=${a}
>
${C(t)}
</button>`}playRound(t,e=!1){const s=this.isPlaying(t),a=this.isActive(t),i=s?"pause":"play",r=s?this.t("media.pause"):this.t("media.play");return x`<button
class="fv-round ${a?"fv-round--accent":"fv-round--quiet"}"
data-control
data-target
aria-label=${r}
title=${r}
?disabled=${e}
@click=${()=>this.playPause(t)}
>
${V(i,x`<span class="md-swap">${c(i)}</span>`)}
</button>`}powerRound(t,e,s=""){const a="turn_on"===e.service;return U("power",a?"accent":"quiet",St(this.hass,a?"power_on":"power_off"),()=>{this.expect(t.id,e.expect),this.call("media_player",e.service)},!B(t),s)}volumeRound(t){const e=!0===t.attr("is_volume_muted"),s=!B(t);return t.supports(ht.VOLUME_MUTE)?U(e?"volumeOff":"volume","quiet",e?St(this.hass,"unmute"):this.t("media.mute"),()=>this.call("media_player","volume_mute",{is_volume_muted:!e}),s):U("volume","quiet",this.t("media.volume"),()=>this.tap(t.id,{action:"more-info"}),s)}repeatRound(t,e=!1){const s=y(t,"repeat")||"off",a="off"===s?"all":"all"===s?"one":"off",i=St(this.hass,"one"===s?"repeat_single":"all"===s?"repeat_all":"repeat_off");return this.transportRound("one"===s?"repeatOne":"repeat","off"!==s,i,()=>this.call("media_player","repeat_set",{repeat:a}),e)}renderTransport(t,e,s){const a=!B(t),i="missing"===t.status,r=e=>i||t.supports(e),n=a||this.isActive(t),o=a?i||mt(t):mt(t)&&!(s&&ut(this.stateOf(t))),l=[];if(n&&r(ht.SHUFFLE)){const e=!0===t.attr("shuffle");l.push({round:this.transportRound("shuffle",e,this.t("media.shuffle"),()=>this.call("media_player","shuffle_set",{shuffle:!e}),a),mode:!0})}if(n&&r(ht.PREVIOUS)&&l.push({round:U("prev","quiet",this.t("media.previous"),()=>this.call("media_player","media_previous_track"),a)}),o&&l.push({round:this.playRound(t,a)}),n&&r(ht.NEXT)&&l.push({round:U("next","quiet",this.t("media.next"),()=>this.call("media_player","media_next_track"),a)}),n&&r(ht.REPEAT)&&l.push({round:this.repeatRound(t,a),mode:!0}),!l.length)return d;const h=this.contentWidth,p=(t,e)=>t*e+8*(t-1);let c=e?56:48;const u=p(l.length,c)<=h?l:l.filter(t=>!t.mode);p(u.length,c)>h&&(c=44);const m=u.length>1?`min(20px, calc((100% - ${u.length*c}px) / ${u.length-1}))`:"0px";return x`<div
class="md-controls ${48===c?"":`md-controls--${c}`}"
style="gap:${m}"
>
${u.map(t=>t.round)}
</div>`}restingSeek(t){return x`<div class="md-seek ${t?"md-seek--sheet":""}" aria-hidden="true">
<div class="md-progress" style="width:${this.contentWidth}px"></div>
<div class="md-times"><span>—</span><span>—</span></div>
</div>`}renderSeek(t,e){const s=n(t,"media_duration"),a=vt(t,s);if(null===s||null===a)return this.restingSeek(e);const i=this.contentWidth,r=this.scrub_??a/s,o=null===this.scrub_?a:this.scrub_*s,l=t.supports(ht.SEEK),h=this.isPlaying(t)&&null===this.scrub_,p=P(r*i-14,-4,i-24),c=`${this.nameFor(t,this.config?.name)} · ${St(this.hass,"position")}`;return x`<div class="md-seek ${e?"md-seek--sheet":""}">
<div
class="md-progress"
data-control
data-target
style="width:${i}px"
role=${l?"slider":d}
tabindex=${l?0:d}
aria-label=${l?c:d}
aria-valuemin=${l?0:d}
aria-valuemax=${l?Math.round(s):d}
aria-valuenow=${l?Math.round(o):d}
aria-valuetext=${l?v(o):d}
@pointerdown=${this.onSeekDown}
@pointermove=${this.onSeekMove}
@pointerup=${this.onSeekUp}
@pointercancel=${this.onSeekCancel}
@keydown=${this.onSeekKey}
>
<span
class="md-progress__fill"
data-measure="value"
style="transform:scaleX(${r.toFixed(5)})"
></span>
<span
class="fv-knob fv-knob--accent"
data-measure="value"
style="width:28px;height:28px;translate:${h?p.toFixed(2):Math.round(p)}px 8px"
></span>
</div>
<div class="md-times">
<span>${v(o)}</span><span>${v(s)}</span>
</div>
</div>`}renderVolume(t){if(!1===this.config?.show_volume)return d;const a=!B(t),i="missing"===t.status,r=i||t.supports(ht.VOLUME_SET),o=i||t.supports(ht.VOLUME_MUTE);if(!r&&!o)return d;const l=!0===t.attr("is_volume_muted"),h=n(t,"volume_level"),p=null===h?0:Math.round(100*P(h,0,1)),c=this.nameFor(t,this.config?.name),u=this.contentWidth-(o?64:0);return x`${q(this.t("media.volume"))}
<div class="md-volume">
${r?x`<fluvy-ruler
.value=${p}
.min=${0}
.max=${100}
.step=${1}
.length=${u}
.tone=${l||a?"neutral":"accent"}
?inactive=${a}
?inert=${a}
.look=${e(this.config)}
?still=${f()}
unit="%"
.label=${`${c} · ${this.t("media.volume")}`}
.format=${t=>s(this.hass,t,{digits:0})}
@fluvy-change=${t=>this.call("media_player","volume_set",{volume_level:t.detail.value/100})}
></fluvy-ruler>`:d}
${o?this.volumeRound(t):d}
</div>`}renderSources(t){if(!1===this.config?.show_source)return d;const e=t.attr("source_list");if(!Array.isArray(e)||!e.length||!t.supports(ht.SELECT_SOURCE))return d;const s=y(t,"source"),a=e.map(t=>"string"==typeof t?t.trim():"").filter(Boolean).slice(0,6);if(s&&!a.includes(s)&&(a.pop(),a.unshift(s)),!a.length)return d;const i=a.map(t=>({key:t,label:t,active:t===s})),r={ruler:this.head.ruler,width:this.contentWidth};return x`${q(this.t("media.source"))}${w(i,t=>this.call("media_player","select_source",{source:t}),this.config?.source_style,r)}`}fractionAt(t){const e=t.currentTarget.getBoundingClientRect();return P((t.clientX-e.left)/Math.max(1,e.width),0,1)}renderPlayer(t,e,s){const i=!B(t),r=!i&&this.isActive(t),{url:n,own:o}=this.picture(t,i),l=o||!r&&!n?"fv-art--idle":"",h=r?y(t,"media_title")||y(t,"app_name")||e:i?e:this.watching(t,e)??this.t("media.nothing"),p=i?void 0:this.ownLine();let u=p??(r?this.secondary(t):i?this.unavailableLine(t):this.idleLine(t,h));void 0!==p||!r||u!==h&&u||(u=N(this.hass,t));const m=this.sourceLine(t,e,`${h} · ${u}`),_=m!==h,f=i&&!this.looksQuiet?"ban":"speaker",v=`fv-card md-card ${s?"md-card--hero":""} ${i?"is-off is-unavailable":""} ${this.isPlaying(t)?"is-playing":""} ${null===this.scrub_?"":"is-scrubbing"}`,g=this.contentWidth>=312,w=this.power(t),$=x` ${this.renderSeek(t,s)}
${this.renderTransport(t,s&&g,null!==w)} ${this.renderVolume(t)}
${this.renderSources(t)}`,{onTap:b,onHold:k}=this.headActions(t.id),E=b??k,S=`${b?"fv-card__head--tap":""} ${k?"fv-card__head--hold":""}`,T=(t,s)=>{const i=b?a(t,{onTap:b,onHold:k,label:e,name:!0}):t;return x`<h3 class=${s} data-name>${i}</h3>`};if(s){const e=w?120:0,s=Math.min(200,4*Math.floor((this.contentWidth-e)/4));return x`<article class=${v} data-card>
<div
class="md-hero__head ${S}"
.fvHold=${k}
@pointerdown=${E?W:d}
@contextmenu=${k?D:d}
@click=${E?Tt:d}
>
<div class="md-hero">
${this.art(s,n,`md-art--l ${l}`,f)}
${w?this.powerRound(t,w,"md-hero__power"):d}
</div>
<div class="md-hero__text" data-align="center">
${T(h,"md-hero__title")}
${u?x`<p class="fv-card__sub" data-name=${void 0===p?d:""}>${u}</p>`:d}
${_?x`<p class="fv-card__sub md-source">${c("speaker")}<span class="md-source__text">${m}</span></p>`:d}
</div>
</div>
${$}
</article>`}const R=this.contentWidth-96-16-48>=96,O=this.contentWidth-(R?96:0)-16-48,M="missing"===t.status?A(u.split(" · ").map((t,e)=>e?{text:t,optional:!0}:{text:t,short:this.t("state.not_found")}),O,t=>this.head.ruler.width("fv-card__sub",t)):this.head.fitSub(u,O),P=this.head.fitSub(m,O-26);return x`<article class=${v} data-card>
<div
class="md-now ${S}"
.fvHold=${k}
@pointerdown=${E?W:d}
@contextmenu=${k?D:d}
@click=${E?Tt:d}
>
${R?this.art(80,n,l,f):d}
<div class="md-now__text">
${T(h,"fv-card__title md-title")}
${M?x`<p class="fv-card__sub" data-name=${void 0===p?d:""}>${M}</p>`:d}
${_?x`<p class="fv-card__sub md-source">${c("speaker")}<span class="md-source__text">${P}</span></p>`:d}
</div>
${w?this.powerRound(t,w):U("dots","quiet",this.t("common.more"),()=>this.tap(t.id,{action:"more-info"}),i)}
</div>
${$}
</article>`}miniRounds(t,e){const s=this.stateOf(t),a=!B(t),i="missing"===t.status,r=e=>i||t.supports(e),n=a||ct(s),o=this.power(t),l=g(this.config?.controls,Ot).filter(e=>{switch(e){case"power":return null!==o;case"previous":return n&&r(ht.PREVIOUS);case"play":return a?i||mt(t):mt(t)&&!(o&&ut(s));case"next":return n&&r(ht.NEXT);case"volume":return!1!==this.config?.show_volume&&(i||ft(t))}}),d=Math.max(0,Math.floor((e-56-96)/56)),h=d>0||!l.length;return{art:h,rounds:xt(l,h?d:1).map(e=>{switch(e){case"power":return this.powerRound(t,o);case"previous":return U("prev","quiet",this.t("media.previous"),()=>this.call("media_player","media_previous_track"),a);case"play":return this.playRound(t,a);case"next":return U("next","quiet",this.t("media.next"),()=>this.call("media_player","media_next_track"),a);case"volume":return this.volumeRound(t)}})}}renderMini(t,e){const s=!B(t),i=!s&&this.isActive(t),{url:r,own:o}=this.picture(t,s),h=vt(t,n(t,"media_duration")),p=i&&(y(t,"media_title")||y(t,"app_name"))||e,c=this.width-32,{art:u,rounds:m}=this.miniRounds(t,c),_=s?void 0:this.ownLine(),f=void 0!==_?_.split(" · "):i?[e,null===h?this.secondary(t):v(h)].filter(Boolean):(s?this.unavailableLine(t):this.idleLine(t)).split(" · "),g=A(f.map((t,e)=>({text:t,optional:e>0})),c-(u?56:0)-56*m.length,t=>this.head.ruler.width("fv-row__sub",t.replace(/\d/g,"0"))),{onTap:w,onHold:$}=this.headActions(t.id),b=w??$;return x`<article
class="fv-card md-mini__card ${s?"is-off is-unavailable":""} ${this.isPlaying(t)?"is-playing":""}"
data-card
>
<div
class="md-mini__row ${w?"fv-card__head--tap":""} ${$?"fv-card__head--hold":""}"
.fvHold=${$}
@pointerdown=${b?W:d}
@contextmenu=${$?D:d}
@click=${b?Tt:d}
>
${u?!s||o||this.looksQuiet?r?this.art(44,r,"md-art--s "+(o?"fv-art--idle":"")):H(l(t,this.config?.icon),i?"media":"neutral"):H("ban","off"):d}
<div class="fv-row__text">
<span class="fv-row__title" data-name
>${w?a(p,{onTap:w,onHold:$,label:e,name:!0}):p}</span
><span class="fv-row__sub" data-name>${g}</span>
</div>
${m}
</div>
</article>`}renderCard(){const t=this.entity(),e=this.nameFor(t,this.config?.name),s=this.variant;return"mini"===s?this.renderMini(t,e):this.renderPlayer(t,e,"hero"===s)}},Mt=T("now-playing"),Pt={handleEvent:S,capture:!0},Lt=m,Ct={power:-1,previous:0,play:0,next:0,volume:1},At=class extends O{static layoutHeight(t){return r(t)}static{this.styles=[...O.styles,R.home,u`.hm-media{grid-template-columns: 64px minmax(0, 1fr);}.hm-media__tap{position: relative;z-index: 1;grid-row: 1;grid-column: 1 / -1;margin: 0;padding: 0;border: 0;border-radius: var(--fluvy-radius-control);background: none;cursor: pointer;-webkit-touch-callout: none;}.hm-media__tap:active{transform: none;}.hm-media > .hm-art{grid-row: 1;grid-column: 1;transition: scale var(--fv-fast) var(--fv-ease);}.hm-media > .hm-media__titles{grid-row: 1;grid-column: 2;transition: opacity var(--fv-base) var(--fv-ease);}.hm-media:has(> .hm-media__tap:active) > .hm-art{scale: 0.94;}.hm-media:has(> .hm-media__tap:active) > .hm-media__titles{opacity: 0.7;}.hm-media__why{white-space: normal;}.hm-media__line{display: flex;}.hm-media__line > span{flex: none;white-space: pre;}.hm-media__line > [data-name]{flex: 0 1 auto;min-width: 0;overflow: hidden;text-overflow: ellipsis;}@media (hover: hover){.hm-media:has(> .hm-media__tap:hover:not(:active)) > .hm-art{scale: 1.06;}}.hm-progress{overflow: hidden;}.hm-progress__fill{width: 100%;transform: translateX(calc((var(--played, 0) - 1) * 100%));}.is-playing .hm-progress__fill{transition: transform 1s linear;}.hm-transport{display: flex;align-items: center;justify-content: center;gap: 16px;}.hm-transport > .hm-transport__btn{position: static;flex: 0 0 48px;}.hm-transport > .hm-transport__volume{position: absolute;top: 0;right: 0;left: auto;}.hm-transport > .hm-transport__power{position: absolute;top: 0;left: 0;right: auto;}.hm-transport--spread{justify-content: space-between;gap: 0;}.hm-transport--spread > .hm-transport__volume, .hm-transport--spread > .hm-transport__power{position: static;}.hm-transport--spread > .hm-transport__btn{flex-basis: 44px;width: 44px;height: 44px;}.hm-transport--spread .hm-transport__btn svg{width: 20px;height: 20px;}.hm-transport__btn > .fv-swap{display: flex;}`]}static{this.properties={...O.properties,tick_:{state:!0}}}constructor(){super(),this.tick_=0}static{this.keys=$()(["show_volume","show_power","controls"])}static getConfigForm(){return{schema:[Y(["media_player"]),z(),K(tt("show_volume"),tt("show_power")),bt(),...at(),rt()],...Q({})}}static{this.defaults=(t,e)=>{const s=h(e,"string"==typeof t.entity?t.entity:"");return{show_volume:!0,show_power:!s.stateObj||_t(s),controls:[...Lt]}}}static getStubConfig(t,e){return{type:"custom:fluvy-now-playing-card",entity:e.find(t=>t.startsWith("media_player."))??""}}prepare(t){if(!t.entity)throw new Error('fluvy-now-playing-card: "entity" is required');return t}getCardSize(){return 4}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),this.stopClock()}updated(t){super.updated(t);const e=this.entity();this.isConnected&&this.isPlaying(e)&&null!==n(e,"media_duration")?this.clock??=window.setInterval(()=>{this.tick_+=1},1e3):this.stopClock()}stopClock(){clearInterval(this.clock),this.clock=void 0}isPlaying(t){return"ok"===t.status&&pt(this.stateOf(t))}playPause(t){const{service:e,expect:s}=gt(t,this.stateOf(t));this.expect(t.id,s),this.call("media_player",e)}art(t,e){const s=e?kt(this.hass,t):"";return x`<span class="fv-art hm-art ${e?"":"fv-art--idle"}">
${B(t)||this.looksQuiet?C(this.config?.icon,"speaker"):c("ban")}
${s?V(s,x`<img class="fv-art__img" src=${s} alt="" draggable="false" @load=${t=>t.currentTarget.classList.add("is-on")} />`):d}
</span>`}progress(t,e){const s=n(t,"media_duration"),a=null!==s&&s>0?vt(t,s):null;if(null===s||null===a)return x`<div class="hm-progress" aria-hidden="true"></div>
<div class="hm-times"><span>—</span><span>—</span></div>`;const i=Mt(this.hass,"progress",{position:v(a),duration:v(s)});return x`<div
class="hm-progress"
role="progressbar"
aria-label=${i}
aria-valuemin="0"
aria-valuemax=${Math.round(s)}
aria-valuenow=${Math.round(a)}
>
${V(e,x`<span class="hm-progress__fill" data-measure="value" style="--played:${(a/s).toFixed(4)}"></span>`)}
</div>
<div class="hm-times">
<span>${v(a)}</span><span>${v(s)}</span>
</div>`}transport(t,e){const s=this.stateOf(t),a="missing"===t.status,i=!1===this.config?.show_power?null:a?{service:"turn_off",expect:"off"}:wt(t,s),r=g(this.config?.controls,Lt).filter(e=>"power"===e?null!==i:"volume"===e?!1!==this.config?.show_volume&&(a||ft(t)):!(i&&ut(s))),n=this.contentWidth,o=n<304,l=[...xt(r,o?Math.floor((n+8)/52):1/0)].sort((t,e)=>Ct[t]-Ct[e]);return l.length?x`<div class="hm-transport ${o?"hm-transport--spread":""}">
${l.map(s=>this.round(s,t,e,i))}
</div>`:d}round(t,e,s,a){switch(t){case"power":return this.powerRound(e,a);case"previous":return U("prev","quiet",this.t("media.previous"),()=>this.call("media_player","media_previous_track"),!(s&&e.supports(ht.PREVIOUS)&&B(e)),"hm-transport__btn");case"play":return this.playRound(e,s);case"next":return U("next","quiet",this.t("media.next"),()=>this.call("media_player","media_next_track"),!(s&&e.supports(ht.NEXT)&&B(e)),"hm-transport__btn");case"volume":return this.volumeRound(e)}}powerRound(t,e){const s="turn_on"===e.service;return U("power",s?"accent":"quiet",this.t(s?"media.power_on":"media.power_off"),()=>{this.expect(t.id,e.expect),this.call("media_player",e.service)},!B(t),"hm-transport__btn hm-transport__power")}playRound(t,e){const s=this.isPlaying(t),a=mt(t),i=s?this.t("media.pause"):this.t("media.play");return x`<button
class="fv-round ${e?"fv-round--accent":"fv-round--quiet"} hm-transport__btn"
data-control
data-target
aria-label=${i}
title=${i}
?disabled=${!a||!B(t)}
@click=${()=>this.playPause(t)}
>
${V(s,x`<span class="fv-swap">${c(s?"pause":"play")}</span>`)}
</button>`}volumeRound(t){const e=n(t,"volume_level"),a=!0===t.attr("is_volume_muted"),i=[this.t("media.volume"),a?Mt(this.hass,"muted"):null===e?"":`${s(this.hass,Math.round(100*e),{digits:0})} %`].filter(Boolean).join(" · ");return U(a?"volumeOff":"volume","quiet",i,()=>this.tap(t.id,{action:"more-info"}),!B(t),"hm-transport__btn hm-transport__volume")}renderCard(){const t=this.entity(),e=this.nameFor(t,this.config?.name),{onTap:s,onHold:a}=this.headActions(t.id),i=s?x`<button
class="hm-media__tap"
aria-label=${e}
@click=${s}
@keydown=${b(a)}
></button>`:d;if(!B(t))return x`<article class="fv-card hm-media is-off is-unavailable" data-card>
${this.art(t,!1)}
<div class="hm-media__titles">
<h3 class="fv-card__title hm-media__title" data-name>${e}</h3>
<p class="fv-card__sub hm-media__why">${N(this.hass,t)}</p>
</div>
${i} ${this.progress(t,e)} ${this.transport(t,!1)}
</article>`;const r=this.stateOf(t),n=this.isPlaying(t),o=n||"paused"===r,l=o?y(t,"media_title")||y(t,"app_name")||e:this.t("media.nothing"),h=o?y(t,"media_artist")||y(t,"media_series_title"):"",[p="",c=""]=o?[h,e===l?"":e].filter(Boolean):[e,N(this.hass,t).toLocaleLowerCase()];return x`<article
class="fv-card hm-media fv-card__head--hold ${n?"is-playing":""}"
data-card
.fvHold=${a}
@pointerdown=${W}
@contextmenu=${a?D:d}
@click=${Pt}
>
${this.art(t,o)}
<div class="hm-media__titles">
<h3 class="fv-card__title hm-media__title" data-name>${l}</h3>
${p?x`<p class="fv-card__sub hm-media__line">
<span data-name>${p}</span>${c?x`<span data-name=${o||d}> · ${c}</span>`:d}
</p>`:x`<p class="fv-card__sub">${N(this.hass,t)}</p>`}
</div>
${i} ${this.progress(t,l)} ${this.transport(t,o)}
</article>`}},Nt=/* @__PURE__ */t({CARDS:()=>qt}),Ft={"fluvy-media-card":Ut,"fluvy-now-playing-card":At},qt=p.map(([t,e,s])=>[t,Ft[t],e,s]);for(const[jt,Ht,Vt,Wt]of qt)k({tag:jt,name:Vt,description:Wt},Ht);export{pt as a,mt as c,ut as i,wt as l,ht as n,kt as o,xt as r,gt as s,Nt as t};