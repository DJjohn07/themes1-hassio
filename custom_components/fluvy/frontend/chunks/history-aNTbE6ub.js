/*! Fluvy v1.21.0 · a theme and card library for Home Assistant · SPDX-License-Identifier: GPL-3.0-only · https://github.com/acosta290/fluvy */
import{t}from"./rolldown-runtime-CvjMAzmL.js";import{$c as e,Bs as s,Ec as a,Es as i,Gc as n,Hc as r,Hl as o,Ic as l,Kc as h,Ls as c,Mc as d,Oc as u,Os as p,Qs as g,Us as m,Vc as f,Wc as v,Wi as y,Xs as b,Yc as w,cc as x,el as $,fl as _,hl as k,il as M,jc as S,ll as L,ml as C,ol as F,pl as I,ra as D,ul as E,vs as z,wl as O,xl as W,zs as j}from"./core-CIFC0YYZ.js";import{_ as N,a as A,f as T,g as R,h as B,i as K,l as G,m as P,n as U,o as q,p as H,s as J,u as X,v as Y}from"./pages-DLk23L9o.js";import{A as V,J as Q,O as Z,Q as tt,R as et,X as st,Y as at,Z as it,c as nt,et as rt,l as ot,o as lt,r as ht,s as ct}from"./chart-FC8dnVV-.js";function dt(t,e){if(0===t.length||e<t[0].t)return null;let s=0,a=t.length-1;for(;s<a;){const i=Math.ceil((s+a)/2);t[i].t<=e?s=i:a=i-1}return t[s].v}function ut(t,e){for(const s of t)if(e>=s.from&&e<=s.to)return s;return null}function pt(t,e,s,a){const i=t.points;if(0===i.length||a<=0)return[];const n=(s-e)/Math.max(1,a-1),r=[];let o=0,l=i[0].v;for(let h=0;h<a;h+=2){const t=e+Math.min(a-1,h+2)*n;let s=null,c=null,d=0,u=0;for(;o<i.length&&i[o].t<=t;){const t=i[o];l=t.v,(null===s||t.v<s)&&(s=t.v,d=t.t),(null===c||t.v>c)&&(c=t.v,u=t.t),o++}const p=null===s||null===c?[l,l]:d<=u?[s,c]:[c,s];r.push(p[0]),r.length<a&&r.push(p[1])}return r.slice(0,a)}L({history:{title:"History",search:"Search these sources",search_short:"Search",loading:"Reading the history",sources_count:"{n} sources",sources_count_one:"1 source",measures:"{n} measures",measures_one:"1 measure",states_count:"{n} states",states_count_one:"1 state",start:"Pick what to look at",start_hint:"A room, a device or an entity — its history is drawn here",not_yet:"This window has not happened yet",not_yet_hint:"Nothing is recorded ahead of now — move back to see what the house did",empty:"No history in this window",empty_hint:"Nothing was recorded for these sources between those times",nothing_found:"Nothing goes by that name",nothing_found_hint:"No measure and no state in this window matches what you typed",states:"States",more:"+{n} more",more_one:"+{n} more",min:"Min",max:"Max",average:"Average",summarised:"Hourly average",summarised_day:"Daily average",now:"now",csv:"Download the data",chart_read:"{measure} over the period. Use the arrow keys to read it.",chart_at:"At {time}: {value}",chart_last:"{value} now","class.temperature":"Temperature","class.humidity":"Humidity","class.power":"Power","class.energy":"Energy","class.battery":"Battery","class.pressure":"Pressure","class.illuminance":"Light","class.current":"Current","class.voltage":"Voltage","class.monetary":"Cost","class.gas":"Gas","class.water":"Water","class.speed":"Speed","class.precipitation":"Rain","class.precipitation_intensity":"Rain","class.signal_strength":"Signal","class.carbon_dioxide":"CO₂","class.pm25":"Fine dust","class.volume":"Volume","class.volume_flow_rate":"Flow","class.duration":"Duration","class.frequency":"Frequency","class.moisture":"Moisture","class.data_rate":"Data rate","class.wind_speed":"Wind","class.distance":"Distance","class.atmospheric_pressure":"Pressure"}});var gt=(t,e)=>e.changes-t.changes||t.name.localeCompare(e.name),mt=(t,e)=>e.max-e.min-(t.max-t.min)||t.name.localeCompare(e.name),ft=/* @__PURE__ */new Set(["climate","humidifier","water_heater","thermostat"]);function vt(t,e){if(!t?.length)return e??[];if(!e?.length)return t;const s=[...t,...e];return e[0].lu<t[t.length-1].lu?s.sort((t,e)=>t.lu-e.lu):s}var yt=864e5,bt=t=>{const e="number"==typeof t?t:Number(t);return Number.isFinite(e)?e:null};function wt(t,e,s){const a=o(t,e);return{unit:a.unit||("string"==typeof s?.unit_of_measurement?s.unit_of_measurement:""),deviceClass:a.deviceClass||("string"==typeof s?.device_class?s.device_class:""),name:a.name,domain:a.domain}}function xt(t,e){if(0===t.length)return{min:0,max:0,average:0,last:null};let s=1/0,a=-1/0,i=0,n=0;for(const[o,l]of t.entries()){l.v<s&&(s=l.v),l.v>a&&(a=l.v);const r=t[o+1]?.t??e,h=Math.max(0,r-l.t);i+=l.v*h,n+=h}const r=t[t.length-1]?.v??null;return{min:s,max:a,average:n>0?i/n:r??0,last:r}}function $t(t,e,s){const a=[];for(const i of t){const t=bt(i.s);if(null===t)continue;const n=Math.max(e,1e3*i.lu);if(n>s)break;a.length&&a[a.length-1].t===n&&a.pop(),a.push({t:n,v:t})}return a}function _t(t,e,s){const a=[];for(const i of t){const t=Math.max(e,1e3*i.lu);if(t>s)break;const n=a[a.length-1];n&&n.state===i.s||(n&&(a[a.length-1]={...n,to:t}),a.push({from:t,to:s,state:i.s}))}return a}function kt(t,e,s){const a=[];for(const i of t){const t=bt(i.mean??i.state);if(null===t)continue;const n=Math.max(e,i.start);if(n>s)break;a.push({t:n,v:t})}return a}function Mt(t,e,s){const a=[];for(const i of t){const t=bt(i.min),n=bt(i.max);if(null===t||null===n)continue;const r=Math.max(e,i.start);if(r>s)break;a.push({t:r,low:t,high:n})}return a}var St=t=>Math.max(240,t-40);function Lt(t,e){const s=t.tracks.reduce((t,e)=>t+Math.abs(e.average),0)/Math.max(1,t.tracks.length),a=M(s,t.unit),i=0===s?1:a.value/s,n=t.tracks.reduce((t,e)=>Math.max(t,Math.abs(e.min),Math.abs(e.max)),0)*i,r=1===i?t.tracks.map(t=>e?.entities?.[t.entityId]?.display_precision).find(t=>"number"==typeof t):void 0,o=t.tracks.every(t=>t.points.every(t=>Number.isInteger(t.v))),l=r??(o&&1===i||n>=100?0:n>=10?1:n>=1?2:3);return{unit:a.unit,factor:i,digits:l}}function Ct(t,s,a){return null===s?{text:"—",unit:a.unit}:{text:e(t.hass,s*a.factor,{digits:a.digits,minDigits:a.digits}),unit:a.unit}}var Ft=(t,e,s,a)=>Ct(t,dt(e.points,s),a);function It(t,e){return et({start:t.range.start,end:t.range.end,width:e,labelWidth:e=>t.labelWidth(e),time:e=>t.time(e),weekday:e=>t.weekday(e),day:e=>t.day(e),date:e=>t.date(e),dateYear:e=>t.dateYear(e)})}function Dt(t,e){const s=Lt(e,t.hass),a=e.tracks[0],i=a?Ft(t,a,t.at,s):{text:"—",unit:s.unit},n=`${i.text} ${i.unit}`.trim();return`${e.title}: ${t.scrubbed?t.t("chart_at",{time:t.moment(t.at),value:n}):t.t("chart_last",{value:n})}`}function Et(t,e,s,a){if(!a)return s||"—";const i=`component.sensor.entity_component.${a}.name`,n=t?.localize?.(i);if(n&&n!==i)return n;const r=e(`class.${a}`);return r&&!r.startsWith("class.")?r:s||"—"}function zt(t){let e=2166136261;for(let s=0;s<t.length;s++)e^=t.charCodeAt(s),e=Math.imul(e,16777619)>>>0;return e%12}function Ot(t){const e=[...t].sort((t,e)=>t.entityId.localeCompare(e.entityId)),s=/* @__PURE__ */new Set,a=/* @__PURE__ */new Map;for(const i of e){let t=zt(i.entityId);for(let e=0;e<12&&s.has(t);e++)t=(t+1)%12;s.add(t),a.set(i.entityId,t+1)}return a}var Wt=(t,e)=>!e||t.normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase().includes(e),jt=t=>t.trim().normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase();function Nt(t){return v`<fluvy-date-picker
?reduced-motion=${t.reduced}
.hass=${t.hass}
.range=${t.range}
.now=${t.now}
.language=${t.language}
.t=${t.t}
@fluvy-dates=${t.onDates}
></fluvy-date-picker>`}function At(t,e,s){const a=o(t.hass,e.entityId);return s?F(t.hass,{...a,state:s,stateObj:a.stateObj?{...a.stateObj,state:s}:void 0}):"—"}var Tt=t=>20+8*Math.max(0,String(t).length-1);function Rt(t){if(!t.entityIds.length)return v`<div class="hs-empty">
${b("chart",t.t("start"),t.t("start_hint"))}
<button
class="fv-btn fv-btn--accent hs-empty__action"
style="width:${t.button(t.t("sources"))}px"
@click=${()=>t.layers.show("sourcing")}
>
${t.t("sources")}
</button>
</div>`;if(t.loading&&!t.ready)return function(t){return v`<article class="fv-card hs-card hs-card--loading" aria-label=${t.t("loading")}>
<div class="fv-skeleton hs-skeleton"></div>
</article>`}(t);if(t.drawnEnd-t.range.start<6e4)return v`<div class="hs-empty">
${b("chart",t.t("not_yet"),t.t("not_yet_hint"))}
</div>`;const{charts:e,lines:s,hidden:a}=t.shown;return e.length||s.length?v`${e.map(e=>function(t,e){const s=St(t.mainWidth),a=t.compact?140:168,i=Math.max(8,Math.round(s/6)),{start:o,end:l}=t.range,h=t.drawnEnd,c=(h-o)/(l-o),d=Math.max(2,Math.round(i*c)),u=e.tracks.map(t=>pt(t,o,h,d)),p=e.tracks.map(t=>t.band?.length&&1===e.tracks.length?{low:pt({points:t.band.map(t=>({t:t.t,v:t.low}))},o,h,d),high:pt({points:t.band.map(t=>({t:t.t,v:t.high}))},o,h,d)}:null),f=Math.max(2,s*c),y={top:44,bottom:a-12},b=tt([...u,...p.flatMap(t=>t?[t.low,t.high]:[])]),w=t=>t.map((e,s)=>[s/Math.max(1,t.length-1)*f,rt(e,b,y)]),$=t.at,_=t.fraction($)*s,k=e.key.replace(/\W+/g,"-"),M=e.tracks[0],S=1===e.tracks.length,L=Lt(e,t.hass),F=M?Ft(t,M,$,L):{text:"—",unit:L.unit},I=Dt(t,e),D=[...u,...p.flatMap(t=>t?[t.low,t.high]:[])].flat(),E=D.reduce((t,e)=>Number.isFinite(e)?Math.max(t,e):t,-1/0),z=D.reduce((t,e)=>Number.isFinite(e)?Math.min(t,e):t,1/0),O=Number.isFinite(E)?E===z?[[E,!1]]:[[E,!1],[z,!0]]:[],W={band:p.some(Boolean),several:!S,axis:!1},j=Z(void 0,{},W),N="classic"===j.preset;return v`<article class="fv-card hs-card">
${g({icon:e.glyph,tone:"accent",title:e.title,sub:e.summarised?t.t("day"===t.period?"summarised_day":"summarised"):"",trailing:S?v`<span class="hs-card__read">
<span class="hs-card__value" data-measure="value"
>${F.text}<span class="fv-unit">${F.unit}</span></span
>
${t.scrubbed?v`<span class="hs-card__when">${t.moment($)}</span>`:r}
</span>`:v`<span class="hs-card__when">
${t.scrubbed?t.moment($):t.t("now")}
</span>`})}
<div
class="hs-plot"
style="height:${a}px"
data-measure="drawn"
tabindex="0"
aria-label=${t.t("chart_read",{measure:e.title})}
aria-describedby=${`hs-read-${k}`}
@keydown=${t.readKey}
@focusin=${()=>t.reads(e.key)}
@pointerdown=${()=>t.reads(e.key)}
${nt(t.scrubber)}
>
<svg width=${s} height=${a} viewBox="0 0 ${s} ${a}" aria-hidden="true">
${c<.999?n`<rect class="hs-future" x=${f} y="0" width=${Math.max(0,s-f)} height=${a} />
                <line class="hs-edge" x1=${f} y1="0" x2=${f} y2=${a} />`:r}
${O.map(([e,s])=>{const a=Ct(t,e,L),i=rt(e,b,y);return n`<line class="hs-rule" x1="0" y1=${i.toFixed(2)} x2=${f} y2=${i.toFixed(2)} />
            <text class="hs-rule__value" x="0" y=${(i+(s?12:-5)).toFixed(2)}>${`${a.text} ${a.unit}`.trim()}</text>`})}
${N?e.tracks.map((t,s)=>{const i=w(u[s]??[]),o=st(i,"smooth"),l=p[s];return n`<g class="hs-series" style="--series:${S?"var(--fluvy-accent)":`var(--fluvy-graph-${e.colours[s]??1})`};animation-delay:${60*s}ms">
            ${l?n`<path class="hs-band" d=${at(w(l.low),w(l.high))} />`:r}
            ${S?n`<linearGradient id=${`hs-fill-${k}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" class="hs-fill-a" />
                    <stop offset="1" class="hs-fill-b" />
                  </linearGradient>
                  <path class="hs-area" d=${Q(i,"smooth",a)} fill=${`url(#hs-fill-${k})`} />`:r}
            <path class="hs-line ${S?"hs-line--alone":""}" d=${o} pathLength="1" />
            ${(()=>{const e=it(i,"smooth",Math.min(_,f));return null===e||null===dt(t.points,$)?r:n`<circle class="hs-dot" cx=${_.toFixed(2)} cy=${e.toFixed(2)} r="4" />`})()}
          </g>`}):r}
${N?n`<line class="hs-cursor" x1=${_.toFixed(2)} y1=${36} x2=${_.toFixed(2)} y2=${a-12} />`:r}
</svg>
${N?t.scrubbed&&S?V({x:_,width:s,value:F.text,unit:F.unit,time:t.moment($),...t.family?{family:t.family}:{}}):r:ht({frame:{width:s,height:a,headroom:44,pad:12},series:e.tracks.map((t,s)=>({values:u[s]??[],colour:S?"accent":`var(--fluvy-graph-${e.colours[s]??1})`,...p[s]?{band:p[s]}:{}})),style:j,scale:b,extent:c,cursor:t.scrubbed?t.fraction($):null,id:`hs-${k}`},t.scrubbed&&S?{value:F.text,unit:F.unit,time:t.moment($)}:null,null,t.family)}
</div>
${m(It(t,s))}
<p id=${`hs-read-${k}`} class="fv-sr">${I}</p>
${S&&M?v`<div class="fv-cols hs-readouts">
${[["min",M.min],["max",M.max],["average",M.average]].map(([e,s])=>{const a=Ct(t,s,L);return x({label:t.t(e),value:a.text,unit:a.unit,size:"s"})})}
</div>`:v`<ul class="hs-legend">
${e.tracks.map((s,a)=>{const i=Ft(t,s,$,L);return v`<li class="hs-legend__row">
<i
class="hs-legend__dot"
style="--series:var(--fluvy-graph-${e.colours[a]??1})"
></i>
<span class="hs-legend__name" data-name>${s.name}</span>
<span class="hs-legend__value" data-measure="value"
>${i.text}<span class="fv-unit">${i.unit}</span></span
>
</li>`})}
${e.hidden?v`<li>
<button
class="fv-link hs-legend__more"
@click=${()=>t.expandChart(e.key)}
>
${C(t.hass,"history.more",e.hidden)}
</button>
</li>`:r}
</ul>`}
</article>`}(t,e))}
${s.length?function(t,e,s){const{start:a,end:i}=t.range,n=t.at,o=`${(100*t.fraction(n)).toFixed(3)}%`,l=100*t.fraction(t.drawnEnd);return v`<article class="fv-card hs-card hs-states">
${g({icon:"list",tone:"neutral",title:t.t("states"),sub:"",trailing:v`<span class="hs-card__count">${e.length+s}</span>`})}
<div
class="hs-lines"
tabindex="0"
aria-label=${t.t("chart_read",{measure:t.t("states")})}
@keydown=${t.readKey}
@focusin=${()=>t.reads("states")}
@pointerdown=${()=>t.reads("states")}
${nt(t.scrubber)}
>
${e.map(e=>{const s=ut(e.spans,n);return v`<div class="hs-line-row">
<span class="hs-line__name" data-name>${e.name}</span>
<span class="hs-line__state" data-measure="value"
>${At(t,e,s?.state??"")}</span
>
<span class="hs-line__bar" data-measure="drawn">
<span class="hs-line__track">
${e.spans.map(s=>{const n=((t,e,s)=>Math.max(0,(Math.min(t.to,s)-Math.max(t.from,e))/(s-e)*100))(s,a,i);return n<=0?r:v`<i
class="hs-span fv-stretch ${lt(e.domain,s.state)}"
style="width:${n.toFixed(3)}%"
title=${At(t,e,s.state)}
></i>`})}
</span>
${l<99.9?v`<i
class="hs-line__future"
style="left:${l.toFixed(3)}%"
aria-hidden="true"
></i>`:r}
<i class="hs-line__cursor" style="left:${o}" aria-hidden="true"></i>
</span>
</div>`})}
</div>
<div class="hs-lines__axis">${m(It(t,t.linesWidth))}</div>
${s?v`<button class="fv-link hs-more" @click=${()=>t.expandLines()}>
${C(t.hass,"history.more",s)}
</button>`:r}
</article>`}(t,s,a):r}`:v`<div class="hs-empty">
${b("chart",t.search?t.t("nothing_found"):t.t("empty"),t.search?t.t("nothing_found_hint"):t.t("empty_hint"))}
${t.search?v`<button
class="fv-btn fv-btn--on-page hs-empty__action"
style="width:${t.button(t.t("clear"))}px"
@click=${()=>{t.search=""}}
>
${t.t("clear")}
</button>`:v`<button
class="fv-btn fv-btn--on-page hs-empty__action"
style="width:${t.button(t.t("sources"))}px"
@click=${()=>t.layers.show("sourcing")}
>
${t.t("sources")}
</button>`}
</div>`}var Bt=h`:host{--hs-bar: calc(var(--header-height, 56px) + var(--safe-area-inset-top, 0px));--fv-page-bar: var(--hs-bar);--hs-pad: 24px;position: relative;display: flex;flex-direction: column;height: calc(100vh - var(--safe-area-inset-bottom, 0px));background: var(--primary-background-color, var(--fluvy-page));color: var(--fluvy-text);}:host([compact]){--hs-pad: 16px;}.hs-scroll{position: relative;flex: 1 1 auto;min-height: 0;overflow-y: auto;overscroll-behavior: contain;scrollbar-width: thin;}.hs-page{display: flex;justify-content: center;padding: var(--hs-pad);}.hs-main{display: flex;flex-direction: column;gap: 16px;width: 100%;max-width: 960px;min-width: 0;}.hs-head{display: grid;grid-template-columns: minmax(0, 1fr) auto;grid-template-areas: 'titles controls' 'tools tools';align-items: start;column-gap: 16px;row-gap: 16px;}:host([compact]) .hs-head{grid-template-columns: minmax(0, 1fr);grid-template-areas: 'titles' 'controls' 'tools';}.hs-head__titles{grid-area: titles;min-width: 0;}.hs-head__eyebrow{margin: 0;font-size: 13px;line-height: 20px;font-weight: 600;color: var(--fluvy-accent-text, var(--fluvy-accent));}.hs-head__title{margin: 0;font-size: 28px;line-height: 32px;font-weight: 600;letter-spacing: -0.02em;}:host([compact]) .hs-head__title{font-size: 24px;line-height: 28px;}.hs-head__sub{margin: 4px 0 0;font-size: 14px;line-height: 20px;font-weight: 500;color: var(--fluvy-text-secondary);}.hs-head__controls{position: relative;grid-area: controls;display: flex;align-items: center;gap: 8px;}:host([compact]) .hs-head__controls{justify-content: flex-end;}:host([phone]) .hs-head__controls{justify-content: flex-start;}:host([phone]) .hs-head__controls > .fv-btn--pill{flex: 1 1 auto;width: auto !important;}.hs-tools{grid-area: tools;display: flex;align-items: center;gap: 8px;}.hs-search{flex: 1 1 auto;min-width: 0;}.hs-sources{position: relative;}.hs-badge{position: absolute;top: -4px;right: -4px;min-width: 20px;height: 20px;box-sizing: border-box;padding: 0 6px;border-radius: 10px;background: var(--fluvy-primary, var(--fluvy-accent));color: var(--fluvy-on-primary, var(--fluvy-text-on-accent));font-size: 12px;line-height: 20px;font-weight: 600;text-align: center;font-variant-numeric: tabular-nums;}.hs-card{width: 100%;box-sizing: border-box;}.hs-card__read{display: flex;flex-direction: column;align-items: flex-end;}.hs-card__value{display: inline-flex;align-items: baseline;font-size: 20px;line-height: 24px;font-weight: 600;font-variant-numeric: tabular-nums;letter-spacing: -0.01em;}.hs-card__when{font-size: 14px;line-height: 20px;font-weight: 600;color: var(--fluvy-text-secondary);font-variant-numeric: tabular-nums;}.hs-card__count{font-size: 15px;line-height: 20px;font-weight: 600;color: var(--fluvy-text-secondary);font-variant-numeric: tabular-nums;}.hs-plot{position: relative;margin-top: 8px;touch-action: pan-y;}.hs-lines:focus-visible, .hs-plot:focus-visible{outline: 2px solid var(--fluvy-accent);outline-offset: 2px;border-radius: var(--fluvy-radius-control);}.hs-plot svg{display: block;width: 100%;overflow: visible;}.hs-plot > .fc-chart{position: absolute;top: 0;left: 0;}.hs-series{color: var(--series, var(--fluvy-accent));}.hs-line{fill: none;stroke: currentColor;stroke-width: 2;stroke-linecap: round;stroke-linejoin: round;animation: hs-draw 700ms var(--fv-ease-out, ease-out) both;}.hs-line--alone{stroke-width: 2.5;}.hs-area{stroke: none;animation: hs-fade 500ms var(--fv-ease, ease) both;}.hs-fill-a{stop-color: currentColor;stop-opacity: 0.26;}.hs-fill-b{stop-color: currentColor;stop-opacity: 0;}.hs-band{fill: currentColor;opacity: 0.14;stroke: none;}.hs-dot{fill: currentColor;stroke: var(--fluvy-card);stroke-width: 3;}.hs-future{fill: var(--fluvy-inset, var(--fluvy-page));opacity: 0.55;}.hs-edge{stroke: var(--fluvy-border-strong);stroke-width: 1;stroke-dasharray: 2 3;}.hs-rule{stroke: var(--fluvy-border);stroke-width: 1;}.hs-rule__value{fill: var(--fluvy-text-disabled);font-size: 11px;font-weight: 500;font-variant-numeric: tabular-nums;}.hs-cursor{stroke: var(--fluvy-border-strong);stroke-width: 1.5;stroke-dasharray: 3 4;}.hs-readouts{margin-top: 12px;}:host([phone]) .hs-readouts{gap: 8px;}.hs-legend{display: flex;flex-direction: column;margin: 8px 0 0;padding: 0;}.hs-legend__row{display: flex;align-items: center;gap: 8px;height: 32px;}.hs-legend__dot{flex: 0 0 auto;width: 8px;height: 8px;border-radius: 50%;background: var(--series, var(--fluvy-accent));}.hs-legend__name{flex: 1 1 auto;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-size: 14px;line-height: 20px;font-weight: 500;}.hs-legend__value{flex: 0 0 auto;font-size: 14px;line-height: 20px;font-weight: 600;font-variant-numeric: tabular-nums;}.hs-more, .hs-legend__more{align-self: flex-start;margin-left: -14px;}.hs-lines{position: relative;margin-top: 8px;touch-action: pan-y;}.hs-line-row{display: grid;grid-template-columns: minmax(0, 1fr) auto;grid-template-areas: 'name state' 'bar bar';align-items: center;column-gap: 12px;row-gap: 8px;padding: 8px 0;}.hs-line__name{grid-area: name;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-size: 14px;line-height: 20px;font-weight: 500;}.hs-line__bar{grid-area: bar;position: relative;min-width: 0;height: 20px;}.hs-line__track{display: flex;height: 100%;border-radius: var(--fluvy-radius-md, 8px);background: var(--fluvy-inset, var(--fluvy-page));overflow: hidden;}.hs-span{display: block;height: 100%;background: transparent;animation: hs-grow 420ms var(--fv-ease-out, ease-out) both;transform-origin: left center;}.hs-line__state{grid-area: state;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-size: 13px;line-height: 20px;font-weight: 600;color: var(--fluvy-text-secondary);text-align: right;}.hs-line__future{position: absolute;top: 0;right: 0;bottom: 0;border-left: 1px dashed var(--fluvy-border-strong);background: var(--fluvy-inset, var(--fluvy-page));opacity: 0.55;}.hs-line__cursor{position: absolute;top: -3px;bottom: -3px;width: 0;transform: translateX(-0.75px);border-left: 1.5px dashed var(--fluvy-border-strong);}.hs-empty{display: flex;flex-direction: column;align-items: center;gap: 16px;padding: 24px 0;}.hs-empty .fv-empty-state{align-self: stretch;background: var(--fluvy-page-alt);}.hs-card--loading{min-height: 240px;}.hs-skeleton{height: 200px;border-radius: var(--fluvy-radius-control);}@keyframes hs-draw{from{stroke-dasharray: 1;stroke-dashoffset: 1;}to{stroke-dasharray: 1;stroke-dashoffset: 0;}}@keyframes hs-fade{from{opacity: 0;}}@keyframes hs-grow{from{transform: scaleX(0);}}@media (prefers-reduced-motion: reduce){*, *::before, *::after{animation: none !important;transition: none !important;}}:host([reduced-motion]) *, :host([reduced-motion]) *::before, :host([reduced-motion]) *::after{animation: none !important;transition: none !important;}`,Kt=/* @__PURE__ */t({FluvyHistory:()=>Yt}),Gt=k("history","page"),Pt="historyPickedValue",Ut="historySourceFilters",qt=36e5,Ht=24*qt,Jt=(t=Date.now())=>({start:t-Ht,end:t}),Xt=qt,Yt=class extends f{static{this.styles=[...u,P,ot,Bt]}static{this.properties={hass:{attribute:!1},narrow:{type:Boolean,reflect:!0},compact:{type:Boolean,reflect:!0},phone:{type:Boolean,reflect:!0},range:{state:!0},states:{state:!0},statistics:{state:!0},loading:{state:!0},search:{state:!0},target:{state:!0},sourceFilters:{state:!0},entitySources:{state:!0},back:{state:!0},now:{state:!0},mainWidth:{state:!0},expanded:{state:!0},allLines:{state:!0},fontEpoch:{state:!0},following:{state:!0},reading:{state:!0},reduced:{type:Boolean,reflect:!0,attribute:"reduced-motion"}}}constructor(){super(),this.layers=new U(this),this.scrubber=new ct(this),this.readKey=t=>this.scrubber.key(t,void 0,this.fraction(this.drawnEnd)),this.subscribed="",this.statsKey="",this.tick=0,this.family="",this.t=(t,e)=>Gt({language:this.language},t,e),this.reads=t=>{t!==this.reading&&(this.reading=t)},this.onLocation=()=>{location.pathname.startsWith("/history")&&this.readAddress(!1)},this.onDates=t=>{this.layers.dismiss("picking"),this.goTo(t.detail.range)},new D(this,()=>{this.family="",c(),this.fontEpoch+=1}),this.narrow=!1,this.compact=!1,this.phone=!1,this.range=Jt(),this.states={},this.statistics=void 0,this.loading=!0,this.search="",this.target={},this.sourceFilters={},this.entitySources=void 0,this.back=!1,this.now=Date.now(),this.mainWidth=0,this.expanded=[],this.allLines=!1,this.fontEpoch=0,this.following=!0,this.reading="",this.reduced=d()}get language(){return E(this.hass)}time(t){return $(this.hass,new Date(t))}weekday(t){return w(this.language,{weekday:"short"}).format(t)}moment(t){const e=this.range.end-this.range.start;return e>8*Ht?this.date(t):e>2*Ht?`${this.day(t)}, ${this.time(t)}`:this.time(t)}day(t){return`${this.weekday(t)} ${w(this.language,{day:"numeric"}).format(t)}`}date(t){return q(this.language,t,"short",this.now)}dateYear(t){return w(this.language,{day:"numeric",month:"short",year:"numeric"}).format(t)}get period(){return function(t,e){const s=e-t;return s<=2*yt?"raw":s<=8*yt?"hour":"day"}(this.range.start,this.range.end)}get linesWidth(){return St(this.mainWidth)}get spoken(){if(!this.reading)return"";if("states"===this.reading)return function(t){const{lines:e}=t.shown,s=t.at,a=e.slice(0,3).map(e=>`${e.name} ${At(t,e,ut(e.spans,s)?.state??"")}`).join(", ");return`${t.t("states")}: ${t.scrubbed?t.t("chart_at",{time:t.moment(s),value:a}):t.t("chart_last",{value:a})}`}(this);const t=this.shown.charts.find(t=>t.key===this.reading);return t?Dt(this,t):""}expandChart(t){this.expanded.includes(t)||(this.expanded=[...this.expanded,t])}expandLines(){this.allLines=!0}connectedCallback(){super.connectedCallback(),z(),this.offWords=I(()=>this.requestUpdate()),this.readAddress(!0),this.resubscribe(),this.tick=window.setInterval(()=>this.beat(),3e4),window.addEventListener("location-changed",this.onLocation),window.addEventListener("popstate",this.onLocation),this.addEventListener("keydown",this.layers.onKey),this.readSources()}disconnectedCallback(){super.disconnectedCallback(),this.offWords?.(),this.offWords=void 0,this.stop?.(),this.stop=void 0,this.subscribed="",clearInterval(this.tick),this.resize?.disconnect(),this.resize=void 0,window.removeEventListener("location-changed",this.onLocation),window.removeEventListener("popstate",this.onLocation),this.removeEventListener("keydown",this.layers.onKey)}willUpdate(t){t.has("hass")&&this.hass&&(this.reduced="reduced"===S()||d(),this.entitySources||this.readSources()),_(this,this.hass?.language),(t.has("hass")||t.has("range")||t.has("target")||t.has("sourceFilters"))&&this.resubscribe()}updated(){const t=this.renderRoot.querySelector(".hs-main");t&&!this.resize&&(this.resize=new ResizeObserver(()=>this.measure(t)),this.resize.observe(t))}measure(t){const e=Math.round(t.getBoundingClientRect().width/a(t));e&&e!==this.mainWidth&&(this.mainWidth=e);const s=this.offsetWidth;s>0&&(this.compact=s<720,this.phone=s<480)}beat(){if(!document.hidden)if(this.now=Date.now(),this.following){const t=this.range.end-this.range.start;this.range={start:this.now-t,end:this.now}}else this.range.end>=this.now-qt&&this.requestUpdate()}readAddress(t){const e=new URLSearchParams(location.search),s=Y(location.search),a=W(Pt);if(R(s)){if(JSON.stringify(s)!==JSON.stringify(this.target)){const t=a&&JSON.stringify(a)===JSON.stringify(s);this.target=s,this.sourceFilters=t?W(Ut)??{}:{}}}else t&&(this.target=a??{},this.sourceFilters=W(Ut)??{});const i=e.get("start_date"),n=e.get("end_date");if(i||n){const t=i?Date.parse(i):this.range.start,e=n?Date.parse(n):Math.max(t+qt,Date.now());if(Number.isFinite(t)&&Number.isFinite(e)&&e>t){const s={start:t,end:e};X(s,this.range)||(this.following=!1,this.range=s)}}if(t&&"1"===e.get("back")&&history.length>1){this.back=!0,e.delete("back");const t=e.toString();p(`${location.pathname}${t?`?${t}`:""}`,!0)}t||this.resubscribe()}writeAddress(){const t=new URLSearchParams;for(const[s,a]of Object.entries(this.target)){const e="string"==typeof a?[a]:a;e?.length&&t.set(s,e.join(","))}this.following||(t.set("start_date",new Date(this.range.start).toISOString()),t.set("end_date",new Date(this.range.end).toISOString()));const e=t.toString();p("/history"+(e?`?${e}`:""),!0)}get entityIds(){const t=this.hass;return t?N(t,this.target,this.sourceFilters,()=>{})??[]:[]}get asked(){if(!this.following)return this.range;const t=this.range.end-this.range.start,e=Math.ceil(this.now/Xt)*Xt;return{start:e-t-Xt,end:e+Xt}}resubscribe(){const t=this.hass;if(!t||!this.isConnected)return;const e=this.entityIds,s=this.asked,a=`${s.start}|${s.end}|${e.join(",")}`;if(a!==this.subscribed){if(this.stop?.(),this.subscribed=a,this.expanded=[],this.allLines=!1,this.states={},this.statistics=void 0,this.windowMemo=void 0,!e.length)return this.loading=!1,void(this.stop=void 0);this.loading=!0,this.stop=function(t,e,s){let a,i={},n=!1,r=!0;const o=t=>{if(n)return;const e=t.states??{},a={...i};for(const s of Object.keys(e))a[s]=vt(i[s],e[s]);i=a,r=!1,s(i,r)},l=()=>{e.entityIds.length?a=t.connection.subscribeMessage(o,{type:"history/stream",entity_ids:[...e.entityIds],start_time:e.start.toISOString(),end_time:e.end.toISOString(),minimal_response:!0,no_attributes:!e.entityIds.some(t=>ft.has(t.slice(0,Math.max(0,t.indexOf(".")))))},{resubscribe:!1}).then(t=>t).catch(()=>(n||s(i,!1),()=>{})):s({},!1)},h=()=>{a?.then(t=>t()),i={},r=!0,s(i,!0),l()};return s(i,!0),l(),t.connection.addEventListener?.("ready",h),()=>{n=!0,t.connection.removeEventListener?.("ready",h),a?.then(t=>t())}}(t,{start:new Date(s.start),end:new Date(s.end),entityIds:e},(t,e)=>{this.states=t,this.loading=e,this.windowMemo=void 0}),this.readStatistics(e,a)}}async readStatistics(t,e){const s=this.period;if("raw"===s||!this.hass)return void(this.statistics=void 0);this.statsKey=e;const a=this.asked,i=await async function(t,e,s,a,i){if(!e.length)return{};const n=/* @__PURE__ */new Date(s.getTime()-("hour"===i?36e5:864e5));try{return await t.callWS({type:"recorder/statistics_during_period",start_time:n.toISOString(),end_time:a.toISOString(),statistic_ids:[...e],period:i,types:["mean","min","max","state"]})}catch{return{}}}(this.hass,t,new Date(a.start),new Date(a.end),s);this.statsKey===e&&(this.statistics=i,this.windowMemo=void 0)}async readSources(){const t=this.hass;if(t&&!this.entitySources)try{this.entitySources=await t.callWS({type:"entity/source"})}catch{this.entitySources={}}}get window(){const t=this.entityIds,e=`${this.subscribed}|${this.range.start}|${this.drawnEnd}|${Object.keys(this.states).length}|${this.statistics?"stats":""}|${this.loading}`;if(this.windowMemo?.key===e)return this.windowMemo.window;const s=function(t,e,s){const a=/* @__PURE__ */new Map,i=[],n=[];for(const r of s.entityIds){const o=e[r]??[],l=s.statistics?.[r]??[],{unit:h,deviceClass:c,name:d,domain:u}=wt(t,r,o[0]?.a),p=l.length>0,g=p?kt(l,s.start,s.end):$t(o,s.start,s.end);if(0===g.length&&0===o.length){n.push(r);continue}if(g.length>0){const t=p?Mt(l,s.start,s.end):void 0,e=xt(g,s.end),i=t&&t.length?{min:t.reduce((t,e)=>Math.min(t,e.low),e.min),max:t.reduce((t,e)=>Math.max(t,e.high),e.max)}:{},n={entityId:r,name:d,unit:h,deviceClass:c,points:g,...t&&t.length?{band:t}:{},...e,...i,summarised:p},o=`${h}|${c}`,u=a.get(o)??{unit:h,deviceClass:c,tracks:[]};u.tracks.push(n),a.set(o,u);continue}const m=_t(o,s.start,s.end);0!==m.length?i.push({entityId:r,name:d,domain:u,spans:m,changes:m.length-1}):n.push(r)}return{start:s.start,end:s.end,groups:[...a.values()].map(t=>({unit:t.unit,deviceClass:t.deviceClass,tracks:t.tracks,min:Math.min(...t.tracks.map(t=>t.min)),max:Math.max(...t.tracks.map(t=>t.max))})),lines:i,empty:n}}(this.hass,this.states,{start:this.range.start,end:this.drawnEnd,entityIds:t,...this.statistics?{statistics:this.statistics}:{}});return this.windowMemo={key:e,window:s},s}get shown(){const t=this.window,e=`${this.windowMemo?.key??""}|${this.search}|${this.expanded.join(",")}|${this.allLines}`;if(this.shownMemo?.key===e)return this.shownMemo.shown;const s=function(t,e,s,a={}){const i=function(t,e,s,a={}){const i=jt(a.search??""),n=a.limit??6,r=[];for(const o of s.groups){const s=o.tracks.filter(t=>Wt(t.name,i));if(!s.length)continue;const l=[...s].sort(mt),h=`${o.unit}|${o.deviceClass}`,c=a.expanded?.includes(h)?Math.min(l.length,12):n,d=l.slice(0,c),u=Ot(o.tracks);r.push({key:h,unit:o.unit,deviceClass:o.deviceClass,title:o.deviceClass||1!==d.length?Et(t,e,o.unit,o.deviceClass):d[0]?.name??o.unit,glyph:y("sensor",o.deviceClass),tracks:d,colours:d.map(t=>u.get(t.entityId)??1),hidden:Math.max(0,l.length-c),summarised:l.some(t=>t.summarised)})}return r}(t,e,s,a),{lines:n,hidden:r}=function(t,e={}){const s=jt(e.search??""),a=e.lineLimit??12,i=t.lines.filter(t=>Wt(t.name,s)).sort(gt);return{lines:i.slice(0,a),hidden:Math.max(0,i.length-a)}}(s,a);return{charts:i,lines:n,hidden:r,tracks:i.reduce((t,e)=>t+e.tracks.length+e.hidden,0)}}(this.hass,this.t,t,{search:this.search,expanded:this.expanded,...this.allLines?{lineLimit:Number.MAX_SAFE_INTEGER}:{}});return this.shownMemo={key:e,shown:s},s}goTo(t,e=!1){X(t,this.range)||(this.following=e,this.range=t,this.writeAddress(),this.resubscribe())}get canGoLater(){const t=this.range.end-this.range.start;return this.range.end+t<=Date.now()+6e4}shift(t){const e=this.range.end-this.range.start;if(1===t&&!this.canGoLater)return;const s=this.range.start+t*e;this.goTo({start:s,end:s+e})}today(){this.goTo(Jt(Date.now()),!0)}setTarget(t){this.target=t,O(Pt,t),this.writeAddress(),this.resubscribe()}setFilters(t){this.sourceFilters=t,O(Ut,t),this.resubscribe()}clearSources(){this.setFilters({}),this.setTarget({})}get scrubbed(){return null!==this.scrubber.value}get drawnEnd(){return Math.min(this.range.end,Math.max(this.now,this.range.start+1))}get at(){const t=this.scrubber.value,e=null===t?this.drawnEnd:((t,e,s)=>e+Math.min(1,Math.max(0,t))*(s-e))(t,this.range.start,this.range.end);return Math.min(e,this.drawnEnd)}fraction(t){return e=t,s=this.range.start,(a=this.range.end)>s?Math.min(1,Math.max(0,(e-s)/(a-s))):0;var e,s,a}get ready(){return Object.keys(this.states).length>0||!!this.statistics}pill(t){return this.family||=getComputedStyle(this).fontFamily||"Inter, sans-serif",j([t],{size:14,weight:600,family:this.family},36)}button(t){return this.family||=getComputedStyle(this).fontFamily||"Inter, sans-serif",j([t],{size:15,weight:600,family:this.family},40)}labelWidth(t){return this.family||=getComputedStyle(this).fontFamily||"Inter, sans-serif",s(t,{size:11,weight:500,tabular:!0,family:this.family})}pickDates(){this.layers.is("picking")?this.layers.dismiss("picking"):this.layers.show("picking")}download(){const t=this.window,e=[];for(const s of t.groups)for(const t of s.tracks)for(const s of t.points)e.push([new Date(s.t).toISOString(),t.entityId,s.v,t.unit]);for(const s of t.lines)for(const t of s.spans)e.push([new Date(t.from).toISOString(),s.entityId,t.state,""]);e.length&&(e.sort((t,e)=>String(t[0]).localeCompare(String(e[0]))),A("history.csv",["time","entity_id","state","unit"],e))}render(){return v`${function(t){const e=!t.back&&K(t.narrow,t.hass),s=t.back?v`<button
class="fv-round fv-round--bare"
aria-label=${t.t("back")}
@click=${()=>i()}
>
${l("chevronLeft")}
</button>`:e?v`<button
class="fv-round fv-round--bare"
aria-label=${t.t("menu")}
@click=${()=>t.dispatchEvent(new CustomEvent("hass-toggle-menu",{bubbles:!0,composed:!0}))}
>
${l("menu")}
</button>`:r;return v`<header class="fv-page-bar ${e?"fv-page-bar--menu":""}">
${s}
<h1 class="fv-page-bar__title">${t.t("title")}</h1>
<button
class="fv-round fv-round--bare"
aria-label=${t.t("csv")}
?disabled=${!t.entityIds.length}
@click=${()=>t.download()}
>
${l("download")}
</button>
</header>`}(this)}
<div class="hs-scroll">
<div class="hs-page">
<div class="hs-main">${function(t){const{eyebrow:e,title:s}=J({range:t.range,now:t.now,language:t.language,time:e=>t.time(e),words:{today:t.t("today"),yesterday:t.t("yesterday"),period:t.t("period"),week:t.t("preset.week"),lastDay:t.t("last_day"),days:e=>C({language:t.language},"page.days",e),since:e=>t.t("since",{when:e})}}),a=t.shown,i=R(t.target)+B(t.sourceFilters),n=t.following||X(t.range,G(new Date(t.now))),o=(e,s)=>C({language:t.language},`history.${e}`,s),h=[o("sources_count",i),...a.tracks?[o("measures",a.tracks)]:[],...a.lines.length?[o("states_count",a.lines.length+a.hidden)]:[]];return v`<header class="hs-head">
<div class="hs-head__titles">
<p class="hs-head__eyebrow">${e}</p>
<h2 class="hs-head__title">${s}</h2>
<p class="hs-head__sub">
${i&&t.entityIds.length?h.join(" · "):t.t("start_hint")}
</p>
</div>
<div class="hs-head__controls">
<button
class="fv-round fv-round--on-page"
aria-label=${t.t("previous")}
@click=${()=>t.shift(-1)}
>
${l("chevronLeft")}
</button>
<button
class="fv-btn fv-btn--pill fv-btn--on-page ${n?"":"is-on"}"
style="width:${t.pill(t.t("today"))}px"
?disabled=${n}
@click=${()=>t.today()}
>
${t.t("today")}
</button>
<button
class="fv-round fv-round--on-page"
aria-label=${t.t("next")}
?disabled=${!t.canGoLater}
@click=${()=>t.shift(1)}
>
${l("chevron")}
</button>
<button
class="fv-round fv-round--on-page hs-pick"
aria-label=${t.t("pick")}
aria-haspopup="dialog"
aria-expanded=${String(t.layers.is("picking"))}
@click=${()=>t.pickDates()}
>
${l("calendar")}
</button>
${t.layers.is("picking")&&!t.compact?(t=>H({label:t.t("dates"),leaving:"picking"===t.layers.leaving,autofocus:"picking",body:Nt(t),onDismiss:()=>t.layers.dismiss("picking"),onLeft:t.layers.onLeft}))(t):r}
</div>
<div class="hs-tools">
<label class="fv-field fv-field--on-page hs-search">
${l("search")}
<input
id="hs-search"
class="fv-field__input"
type="search"
autocomplete="off"
spellcheck="false"
placeholder=${t.t("search_short")}
aria-label=${t.t("search")}
.value=${t.search}
@input=${e=>{t.search=e.target.value}}
/>
${t.search?v`<button
class="fv-round fv-round--bare"
aria-label=${t.t("clear")}
@click=${()=>{t.search=""}}
>
${l("close")}
</button>`:r}
</label>
<button
class="fv-round fv-round--on-page hs-sources ${i?"is-on":""}"
aria-label=${t.t("sources")}
aria-haspopup="dialog"
@click=${()=>t.layers.show("sourcing")}
>
${l("sliders")}${i?v`<span class="hs-badge" style="width:${Tt(i)}px">${i}</span>`:r}
</button>
</div>
</header>`}(this)}${Rt(this)}</div>
</div>
</div>
<p class="fv-sr" aria-live="polite">${this.scrubbed?this.spoken:""}</p>
${this.layers.is("picking")&&this.compact?(t=this,T({title:t.t("dates"),close:t.t("close"),leaving:"picking"===t.layers.leaving,grabber:!0,variant:"fv-drawer--dates",autofocus:"picking",body:Nt(t),onDismiss:()=>t.layers.dismiss("picking"),onLeft:t.layers.onLeft})):r}
${this.layers.is("sourcing")?function(t){const e=customElements.get("ha-sources-picker"),s=t.hass,a=s.localize?.("ui.panel.history.no_targets"),i=R(t.target)+B(t.sourceFilters);return T({title:t.t("sources"),close:t.t("close"),leaving:"sourcing"===t.layers.leaving,grabber:t.compact,tall:!0,variant:"hs-sources-drawer",autofocus:"sourcing",onDismiss:()=>t.layers.dismiss("sourcing"),onLeft:t.layers.onLeft,body:e?v`<ha-sources-picker
.hass=${s}
.value=${t.target}
.filters=${t.sourceFilters}
.entitySources=${t.entitySources}
.description=${a&&"ui.panel.history.no_targets"!==a?a:""}
@value-changed=${e=>t.setTarget(e.detail.value??{})}
@source-filters-changed=${e=>t.setFilters(e.detail.value??{})}
></ha-sources-picker>`:b("sliders",t.t("sources_none")),foot:v`<footer class="fv-drawer__foot" data-fill-row>
<button
class="fv-btn fv-btn--quiet"
?disabled=${!i}
@click=${()=>t.clearSources()}
>
${t.t("sources_clear")}
</button>
<button class="fv-btn fv-btn--accent" @click=${()=>t.layers.dismiss("sourcing")}>
${t.t("done")}
</button>
</footer>`})}(this):r}`;var t}};customElements.get("fluvy-history")||customElements.define("fluvy-history",Yt);export{Kt as t};