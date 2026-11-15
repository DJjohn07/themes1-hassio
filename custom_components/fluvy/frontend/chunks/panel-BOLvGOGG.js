/*! Fluvy v1.21.0 · a theme and card library for Home Assistant · SPDX-License-Identifier: GPL-3.0-only · https://github.com/acosta290/fluvy */
import{t as e}from"./rolldown-runtime-CvjMAzmL.js";import{$c as t,$o as s,Ao as a,Do as i,Ea as r,Eo as o,Er as n,Fa as l,Fl as c,Gc as d,Hc as p,Ic as h,Ja as u,Jc as v,Jo as m,Js as b,Kc as f,Ma as g,Mc as w,Mo as _,Ms as y,Na as $,No as k,Oc as x,Oo as S,Or as E,Os as T,Pa as A,Qo as O,Qs as j,Ss as C,To as D,Ts as P,Vc as H,Wc as z,Wl as W,Xc as N,Xo as L,Yo as M,Zo as R,Zs as I,_l as B,_o as F,ao as q,as as U,bo as Y,co as J,cs as G,dl as Z,do as V,es as K,eu as Q,fl as X,fo as ee,fs as te,go as se,gs as ae,hl as ie,ho as re,hs as oe,ia as ne,ic as le,io as ce,iu as de,jc as pe,jo as he,ka as ue,lc as ve,ll as me,lo as be,ml as fe,mo as ge,ms as we,nc as _e,no as ye,ns as $e,oc as ke,oo as xe,os as Se,pl as Ee,po as Te,ps as Ae,qc as Oe,ql as je,qo as Ce,qs as De,ro as Pe,rs as He,ru as ze,so as We,tc as Ne,to as Le,ts as Me,uc as Re,uo as Ie,va as Be,vl as Fe,vo as qe,vr as Ue,vs as Ye,wo as Je,xo as Ge,yl as Ze,yo as Ve,za as Ke}from"./core-CIFC0YYZ.js";import"./shared-DlZQgqdD.js";import{r as Qe}from"./wall-AkD9i7pj.js";import{i as Xe}from"./pages-DLk23L9o.js";import{C as et,D as tt,E as st,O as at,S as it,_ as rt,a as ot,b as nt,g as lt,h as ct,l as dt,m as pt,n as ht,p as ut,r as vt,rt as mt,st as bt,x as ft,y as gt}from"./chart-FC8dnVV-.js";import{a as wt,c as _t,d as yt,f as $t,i as kt,l as xt,o as St,r as Et,s as Tt,u as At}from"./strategy-VyNW_MAC.js";import{i as Ot,r as jt,t as Ct}from"./background-ChsXGSWb.js";var Dt=[{fluvy_palette:1,name:"citrus",title:"Citrus",author:"Fluvy",description:"Electric orange, solid fills, a blue highlight for you and today.",palette:{character:"vivid",base:"neutral",accent:"#ff8a00",fill:"solid",highlight:"#2f6df6"}},{fluvy_palette:1,name:"e-ink",title:"E-ink",author:"maxhayim",description:"Black ink on white paper, each card closed by its edge and no shadow: for e-paper panels and walls that should read like a page.",palette:{character:"soft",base:"neutral",accent:"#1f1f1f",surface:"line"}},{fluvy_palette:1,name:"moss",title:"Moss",author:"Fluvy",description:"A soft moss green over warm paper: the first palette shared with the house.",palette:{character:"soft",base:"warm",accent:"#4f7a4a"}},{fluvy_palette:1,name:"plum",title:"Plum",author:"Fluvy",description:"A quiet plum over cool grey, for rooms that read at night.",palette:{character:"soft",base:"cool",accent:"#7a4f8a"}}];function Pt(e){const t="vivid"!==e.character||e.fill?e:{...e,fill:"tint"};return Me(K(t)??t)}function Ht(e,t){if("string"==typeof e)return;const s=Pt(e);return t.find(e=>Pt(e.palette)===s)}var zt=e=>[...e,...Dt.filter(t=>!e.some(e=>e.name===t.name))];function Wt(e,t="palette"){const s=e.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,40).replace(/-+$/g,"");return s.length>=2?s:t}var Nt=(e,t)=>[...e.filter(e=>e.name!==t.name),t],Lt=(e,t)=>e.filter(e=>e.name!==t);function Mt(e,t){const s=Wt(e,"set"),a=e=>"palette"===e||t.some(t=>t.id===e);let i=s;for(let r=2;a(i);r++)i=`${s}-${r}`;return i}var Rt=(e,t)=>e.some(e=>e.id===t)||e.length<12,It=(e,t)=>e.some(e=>e.id===t.id)?e.map(e=>e.id===t.id?t:e):[...e,t],Bt=(e,t)=>e.filter(e=>e.id!==t),Ft=(e,t)=>"palette"===t?void 0:e.find(e=>e.id===t),qt=(e,t)=>s=>s.t(e,t),Ut=e=>t=>Z(t.hass,`option.${e}`),Yt=e=>qt("charts.px",{n:e}),Jt=e=>qt("wall.percent",{count:Math.round(100*e)});function Gt(e,t,s,a,i){return{acts:e,label:t,choices:Object.entries(s).map(([e,t])=>({key:e,word:t})),chosen:e=>String(a(e)),patch:(e,t)=>{return i(e,(s=t,Number.isNaN(Number(s))?s:Number(s)));var s}}}var Zt=[Gt("line","charts.line",{thin:Ut("thin"),regular:Ut("regular"),bold:Ut("bold")},e=>e.line,(e,t)=>({line:t})),Gt("glow","charts.glow",{3:Yt(3),5:Yt(5),7:Yt(7)},e=>e.glow.offset,(e,t)=>({glow:{...e.glow,offset:t}})),Gt("glow","charts.glow_opacity",{.25:Jt(.25),.35:Jt(.35),.45:Jt(.45)},e=>e.glow.opacity,(e,t)=>({glow:{...e.glow,opacity:t}})),Gt("fill","charts.fill",{12:Jt(.12),18:Jt(.18),24:Jt(.24)},e=>e.fill,(e,t)=>({fill:t})),Gt("grid","charts.grid",{hairline:qt("charts.grid_hairline"),dashed:qt("charts.grid_dashed"),none:qt("charts.grid_none")},e=>e.grid,(e,t)=>({grid:t})),Gt("endpoint","charts.endpoint",{knob:qt("charts.knob"),dot:qt("charts.dot")},e=>e.endpoint,(e,t)=>({endpoint:t})),Gt("now","charts.now",{knob:qt("charts.knob"),line:qt("charts.now_line")},e=>e.now,(e,t)=>({now:t})),Gt("caps","charts.caps",{top:qt("charts.caps_top"),both:qt("charts.caps_both")},e=>e.caps,(e,t)=>({caps:t})),Gt("bubble","charts.bubble",{dark:qt("charts.bubble_dark"),tone:qt("charts.bubble_tone")},e=>e.bubble,(e,t)=>({bubble:t})),Gt("wave","charts.wave",{low:qt("charts.wave_low"),mid:qt("charts.wave_mid"),high:qt("charts.wave_high")},e=>e.wave,(e,t)=>({wave:t}))],Vt=(e,t)=>Object.fromEntries(e.map(e=>[e,s=>t(s,e)])),Kt=[Gt("time","charts.window",Vt(qe,(e,t)=>bt(e.hass,t)),e=>e.window,(e,t)=>({window:t})),Gt("time","charts.points",Vt(Y,(e,t)=>mt(e.hass,t)),e=>e.points,(e,t)=>({points:t}))];var Qt=["appearance","charts","scope","dashboard","wall","preferences"],Xt={ruler:"option.ruler",bar:"option.bar",liquid:"option.liquid",fill:"option.tile_fill"},es=(e,t)=>"plain"===t?e.t("wall.plain"):"gradient"===t?Z(e.hass,"option.gradient"):e.t(`background.${t}`),ts="fluvy_sidebar",ss=[{key:"soft",names:Ae.filter(e=>"vivid"!==Ce.find(t=>t.name===e)?.character).sort((e,t)=>Number(t===te)-Number(e===te))},{key:"vivid",names:Ae.filter(e=>"vivid"===Ce.find(t=>t.name===e)?.character)}],as={soft:["#f9b9d0","#febab6","#f9c09e","#efd99e","#c2d79e","#a0debc","#8ddfde","#97d8f8","#b0d0ff","#c7c8ff","#dcc0f7","#efbbe4"],vivid:["#ff2d7a","#e5243b","#ff4a1a","#ffb000","#c6ff00","#00b377","#00a3a3","#00b4e6","#2f5bff","#5a4fff","#8a3ffc","#d63bff"]};function is(e,t){const s=("soft"===t?as.vivid:as.soft).indexOf(e);return s<0?e:as[t][s]??e}var rs=["#e2ff3d","#5ce1ff","#ffe14d","#ffb3d1","#d4c2ff"],os={character:"vivid",base:"cool",accent:"#2f5bff",fill:"tint"},ns=e=>"string"!=typeof e,ls=(e,t)=>JSON.stringify(e)===JSON.stringify(t),cs=e=>JSON.stringify(e,(e,t)=>t&&"object"==typeof t&&!Array.isArray(t)?Object.fromEntries(Object.entries(t).sort(([e],[t])=>e<t?-1:e>t?1:0)):t),ds=(e,t)=>cs(e)===cs(t);function ps(e,t){const s={};for(const[a,i]of Object.entries(e))ls(i,t[a])||(s[a]=i);return s}function hs(e,t){const s=(e,t)=>{const s=e?.[t];return"object"==typeof s&&null!==s?s:{}};let a=0;for(const i of["views","cards","entities"]){const[r,o]=[s(e,i),s(t,i)];for(const e of/* @__PURE__ */new Set([...Object.keys(r),...Object.keys(o)]))ls(r[e],o[e])||a++}return Math.max(1,a)}var us=(e,t)=>({...e?.rest,strategy:t});function vs(e,t){const s={...e,...t};for(const[a,i]of Object.entries(t))void 0===i&&delete s[a];return s}var ms=(e,t)=>D(e)===D(t)&&k(S(e),S(t))&&_(Je(e),Je(t)),bs=(e,t,s=Dt)=>ns(e)?Ht(e,s)?.title??t("palette.custom"):Ce.find(t=>t.name===e)?.title??e,fs=(e,t)=>t(`shape.${e.shape}`),gs=(e,t,s=Dt)=>`${bs(e.palette,t,s)} · ${fs(e,t)}`,ws=(e,t)=>t(`pills.${e.pills}`),_s=["#e03131","#dc630b","#fab005","#2f9e44","#1c7ed6","#7048e8"],ys={warning:"#dc630b",danger:"#e03131",success:"#2f9e44",notice:"#1c7ed6"},$s=(e,t)=>"notice"===t?e.notice:e.semantic[t],ks=[["dashboards","wall.dashboards"],["after","wall.after"],["clock","wall.clock"],["dim","wall.dim"],["wakeEntity","wall.wake"],["theme","wall.day_night"],["from","wall.day_night"],["to","wall.day_night"],["nightDim","wall.night_dim"],["background","wall.background"],["exit","wall.exit"],["subview","wall.subview"]];function xs(e){const{t:t,shown:s}=e,a=e=>t(e?"change.on":"change.off"),i=[];e.dirty&&i.push(function(e,t,s,a=Dt){const i=[];Me(e.palette)!==Me(t.palette)&&i.push(`${bs(e.palette,s,a)} → ${bs(t.palette,s,a)}`),e.shape!==t.shape&&i.push(`${fs(e,s)} → ${fs(t,s)}`),e.pills!==t.pills&&i.push(`${ws(e,s)} → ${ws(t,s)}`);const[r,o]=[S(e),S(t)];return r.style!==o.style?i.push(`${s("tabs.title")} · ${s(`tabs.${r.style}`)} → ${s(`tabs.${o.style}`)}`):k(r,o)||i.push(s("tabs.title")),_(Je(e),Je(t))||i.push(s("chrome.title")),i.join(" · ")}(e.settings.look,e.draft,t,zt(e.saved)));const r=e.houseEdit;if(r.cards){const{opacity:s,blur:o,border:n,unavailable:l}=r.cards;s!==e.settings.cards.opacity&&i.push(`${t("cards.title")} · ${t("cards.opacity")} · ${t("wall.percent",{count:s})}`),o!==e.settings.cards.blur&&i.push(`${t("cards.title")} · ${t("cards.blur")} · ${a(o)}`),n!==e.settings.cards.border&&i.push(`${t("cards.title")} · ${t("cards.border")} · ${a(n)}`),l!==e.settings.cards.unavailable&&i.push(`${t("cards.title")} · ${t("cards.unavailable")} · ${Z(e.hass,`option.${l}`)}`)}if(r.sheets&&i.push(`${t("cards.title")} · ${t("cards.sheets")} · ${a("fluvy"===r.sheets)}`),r.sliders){const{style:s,words:a}=r.sliders;s!==e.settings.sliders.style&&i.push(`${t("sliders.title")} · ${t("sliders.style")} · ${Z(e.hass,Xt[s])}`),a!==e.settings.sliders.words&&i.push(`${t("sliders.title")} · ${t("sliders.words")} · ${Z(e.hass,`option.${a}`)}`)}if(r.background){const s=e.settings.background,{type:o,colors:n,image:l,dim:c,blur:d}=r.background,p=t("wall.background");o!==s.type&&i.push(`${p} · ${es(e,o)}`),n.join()!==s.colors.join()&&i.push(`${p} · ${t("background.color")} · ${n.join(" → ")}`),l!==s.image&&i.push(`${p} · ${t("background.picture")}`),c!==s.dim&&i.push(`${p} · ${t("background.dim")} · ${t("wall.percent",{count:c})}`),d!==s.blur&&i.push(`${p} · ${t("background.blur")} · ${a(d)}`)}if(r.lightTint&&i.push(`${t("lights.title")} · ${t("lights.tint")} · ${Z(e.hass,`option.${"off"===r.lightTint?"never":r.lightTint}`)}`),void 0!==r.lightColors&&i.push(`${t("lights.title")} · ${t("lights.colors")} · ${a(r.lightColors)}`),r.statuses)for(const l of m)r.statuses[l]!==e.settings.statuses[l]&&i.push(`${t("statuses.title")} · ${t(`statuses.${l}`)} · ${r.statuses[l]??t("statuses.auto")}`);if(i.push(...function(e){const t=e.houseEdit.charts;if(!t)return[];const s=e.settings.charts,a=(t,s)=>`${e.t("tab.charts")} · ${e.t(t)} · ${s}`,i=[];t.style!==s.style&&i.push(a("charts.style",Z(e.hass,`option.${t.style}`))),t.gauge!==s.gauge&&i.push(a("charts.gauge",Z(e.hass,`option.${t.gauge}`)));for(const r of[...Zt,...Kt]){const o=r.chosen(t);o!==r.chosen(s)&&i.push(a(r.label,r.choices.find(e=>e.key===o)?.word(e)??o))}return t.series!==s.series&&i.push(a("charts.series",((e,t,s)=>Ft(s,t)?.name??e.t("charts.palette"))(e,t.series,e.settings.chartSets))),t.animate!==s.animate&&i.push(a("charts.motion",e.t(t.animate?"change.on":"change.off"))),i}(e)),r.scope&&i.push(t("everywhere"===r.scope?"change.everywhere":"change.dashboards")),r.dashboards&&i.push(`${t("scope.list")} · ${s.dashboards.length}`),void 0!==r.frame&&i.push(`${t("scope.frame")} · ${a(r.frame)}`),r.icons)for(const l of ye)r.icons[l]!==e.settings.icons[l]&&i.push(`${t(`scope.icons_${l}`)} · ${a(r.icons[l])}`);void 0!==r.activity&&i.push(`${t("scope.activity")} · ${a(r.activity)}`),void 0!==r.history&&i.push(`${t("scope.history")} · ${a(r.history)}`),void 0!==r.details&&i.push(`${t("scope.details")} · ${a(r.details)}`);const o=e.deviceEdit;if(void 0!==o.wall&&i.push(`${t("tab.wall")} · ${t("wall.use")} · ${a(o.wall)}`),void 0!==o.zoom&&i.push(`${t("pref.size")} · ${t("wall.percent",{count:o.zoom})}`),o.performance&&i.push(`${t("pref.performance")} · ${t(`pref.performance_${o.performance}`)}`),void 0!==o.dock&&i.push(`${t("pref.dock")} · ${a(o.dock)}`),void 0!==o.screensaverZoom&&i.push(`${t("tab.wall")} · ${t("wall.saver_size")} · ${a(o.screensaverZoom)}`),void 0!==o.hideSidebars&&i.push(`${t("pref.sidebars")} · ${a(o.hideSidebars)}`),r.wall)for(const[l,c]of ks)JSON.stringify(r.wall[l])!==JSON.stringify(e.settings.wall[l])&&i.push(`${t("tab.wall")} · ${t(c)}`);r.rooms&&i.push(`${t("rooms.title")} · ${t(r.rooms.order.length?"rooms.own":`rooms.${r.rooms.sort}`)}`);for(const[l,c]of Object.entries(e.strategyEdits)){const s=e.dashboards.find(e=>e.urlPath===l);for(const e of Object.keys(c)){const a=s?.template?.options.find(t=>t.key===e)?.label,r="edit"===e?hs(s?.strategy?.edit,c[e]):1;for(let o=0;o<r;o++)i.push(`${s?.title??l} · ${t("edit"===e?"dashboard.customise":a??"dashboard.cards")}`)}}for(const l of Object.keys(e.sideEdits))i.push(`${e.dashboards.find(e=>e.urlPath===l)?.title??l} · ${t("dashboard.side")}`);const n=e.personalEdit;return n.language&&i.push(`${t("pref.language")} · ${"auto"===n.language?t("pref.auto"):B[n.language].name}`),n.motion&&i.push(`${t("pref.reduce")} · ${a("reduced"===n.motion)}`),void 0!==n.holdToSlide&&i.push(`${t("pref.hold")} · ${a(n.holdToSlide)}`),void 0!==n.haptics&&i.push(`${t("pref.haptics")} · ${a(n.haptics)}`),void 0!==n.activityCard&&i.push(`${t("pref.activity_card")} · ${a(n.activityCard)}`),i}async function Ss(e){try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(e),!0}catch{}const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.setAttribute("aria-hidden","true"),t.style.cssText="position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none",document.body.append(t);const s=document.activeElement;try{return t.select(),t.setSelectionRange(0,e.length),document.execCommand("copy")}catch{return!1}finally{t.remove(),s?.focus?.()}}var Es=e=>e.wide?12:8;function Ts(e,t,s,a){const i=a??De(t.map(e=>e.label));return b(t,s??(()=>{}),s?"":"pn-chips--static",!0,e.fit?E(t,{...e.fit,gap:Es(e)},n(t.length).filter(e=>e<=i)):a)}var As={phone:{w:76,h:56,on:44},wide:{w:184,h:80,on:104},row:{w:80,h:40,on:48}};function Os(e,t,s){if(!e)return z`<span class="pn-art pn-art--new">${_e("plus")}</span>`;const a=function(e,t){const s=i(e)[t],a="solid"===s.fillStyle;return{page:s.surface.page,card:s.surface.card,border:s.line?.edge??s.surface.border,accent:s.accent.ink,fill:s.accent.fill,tick:a?s.accent.onFill:s.accent.ink,highlight:s.mark?.fill}}(e,t.mode),{w:r,h:o,on:n}=As[s],l=r-n-4,c=a.highlight?o-12:o,h=[0,1,2,3].map(e=>10+6*e);return z`<span
class="pn-art"
style="--sw-page:${a.page};--sw-card:${a.card};--sw-border:${a.border};--sw-accent:${a.accent};--sw-fill:${a.fill};--sw-tick:${a.tick}${a.highlight?`;--sw-hl:${a.highlight}`:""}"
><svg viewBox="0 0 ${r} ${o}" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
<rect class="pn-art__on" width=${n} height=${o} rx="6" />
<circle class="pn-art__disc" cx="14" cy="14" r="6" />
<circle class="pn-art__glyph" cx="14" cy="14" r="3" />
${h.map(e=>d`<line class="pn-art__tick" x1=${e} x2=${e} y1=${o-18} y2=${o-10} />`)}
<rect
class="pn-art__off"
x=${n+4.5}
y="0.5"
width=${l-1}
height=${c-1}
rx="5.5"
/>
${a.highlight?d`<rect class="pn-art__hl" x=${n+4} y=${o-8} width=${l} height="8" rx="4" />`:p}
</svg></span
>`}function js(e,t,s,a,i){return z`<button
class="pn-swatch ${t?"is-active":""}"
data-target
aria-pressed=${t?"true":"false"}
@click=${a}
>
${Os(e,s,s.wide?"wide":"phone")}
<span class="pn-swatch__name"
><span class="pn-swatch__label">${i?.title??bs(e,s.t)}</span
>${t?_e("check"):p}</span
>
${i?.author?z`<span class="pn-swatch__by">${s.t("palette.by",{author:i.author})}</span>`:p}
</button>`}function Cs(e,t,s,a){const i=(e=>"string"==typeof e?e:Pt(e))(e.draft.palette);return z`<p class="fv-label pn-line">${e.t(t)}</p>
<div class="pn-gallery" data-fill-row>
${(e=>e.map(e=>({file:e,key:Pt(e.palette)})))(s).map(t=>js(t.file.palette,t.key===i,e,()=>e.setDraft({palette:t.file.palette}),t.file))}
</div>
${a??p}`}function Ds(e){const t=Number.parseInt(e.slice(1),16),s=e=>{const t=e/255;return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)},a=.2126*s(t>>16&255)+.7152*s(t>>8&255)+.0722*s(255&t);return(a+.05)/.05>1.05/(a+.05)?"#111111":"#ffffff"}function Ps(e,t,s,a=!1){return z`<div class="pn-dots ${a?"pn-dots--six":""} ${s?"":"pn-dots--static"}">
${e.map(e=>{const a=e.key===t;return z`<button
class="pn-dot ${e.paint?"":"pn-dot--none"} ${a?"is-active":""}"
data-target
style=${e.paint?`--dot:${e.paint};--dot-ink:${e.ink}`:p}
aria-label=${e.label}
title=${e.label}
aria-pressed=${a?"true":"false"}
tabindex=${s?p:"-1"}
@click=${()=>s?.(e.key)}
>
${a?_e("check"):e.paint?p:_e("ban")}
</button>`})}
</div>`}function Hs(e,t,s,a,i=!1){return Ps(e.map(e=>e?{key:e,label:e,paint:e,ink:Ds(e)}:{key:"",label:s.t("custom.none")}),t??"",a&&(e=>a(e||void 0)),i)}function zs(e){const t=/^#?([0-9a-f]{6})$/i.exec(e.trim());return t?`#${(t[1]??"").toLowerCase()}`:void 0}function Ws(e,t,s,a=t.t("custom.hex")){return z`<div class="fv-field pn-hex">
<input
class="fv-field__input pn-hex__input"
type="text"
spellcheck="false"
autocomplete="off"
maxlength="7"
aria-label=${a}
?readonly=${!s}
.value=${e}
@change=${t=>{const a=t.target,i=zs(a.value);i&&s?s(i):a.value=e}}
/>
<label class="pn-hex__well" style="--dot:${e}" title=${t.t("custom.pick")}>
<input
type="color"
.value=${e}
aria-label=${t.t("custom.pick")}
?disabled=${!s}
@change=${e=>{const t=zs(e.target.value);t&&s?.(t)}}
/>
</label>
</div>`}var Ns={soft:"shapeSoft",round:"shapeRound",crisp:"shapeCrisp"},Ls={soft:"20 · 16 · 12",round:"28 · 22 · 16",crisp:"14 · 12 · 8"},Ms={round:"pillRound",soft:"pillSoft",crisp:"pillCrisp"},Rs={fluvy:"tabsText",pills:"tabsPills",ha:"ha",hidden:"tabsNone"},Is=e=>"menu"===e.actions?z`${_e("dots")}`:z`${["plus","search","chat","pencil"].map(e=>_e(e))}`;var Bs={plain:"shapeSoft",gradient:"gradient",color:"palette",image:"image"},Fs=[0,20,40,60,80],qs=/* @__PURE__ */new WeakMap;function Us(e,t){return{input:({currentTarget:s,detail:a})=>{s&&!qs.has(s)&&qs.set(s,e),t(a.value)},change:({currentTarget:e,detail:s})=>{e&&qs.delete(e),t(s.value)},cancel:({currentTarget:e})=>{const s=e?qs.get(e):void 0;void 0!==s&&(qs.delete(e),t(s))}}}function Ys(e,t,s){const a=e.fit?.width??0,[i,r]=t.colors,o=Us(t.dim,e=>s?.({dim:e})),n="color"===t.type?z`<p class="fv-label pn-label">${e.t("background.color")}</p>
${Ws(i,e,s&&(e=>s({colors:r?[e,r]:[e]})),e.t("background.color"))}
<div class="pn-rows">
${le({icon:"gradient",title:e.t("background.two"),sub:e.t("background.two_sub"),trailing:"switch",on:void 0!==r,readonly:!s,onToggle:e=>s?.({colors:e?[i,"#a9c2a4"]:[i]})})}
</div>
${r?z`<p class="fv-label pn-label">${e.t("background.second")}</p>
${Ws(r,e,s&&(e=>s({colors:[i,e]})),e.t("background.second"))}`:p}`:"image"===t.type?z`<p class="fv-label pn-label">${e.t("background.picture")}</p>
<label class="fv-field pn-picture"
><input
class="fv-field__input"
type="text"
inputmode="url"
spellcheck="false"
autocomplete="off"
placeholder="/local/backgrounds/garden.jpg"
aria-label=${e.t("background.picture")}
?readonly=${!s}
.value=${t.image}
@input=${t=>{const s=t.target;s.setCustomValidity(s.value.trim()&&!Te(s.value)?e.t("background.refused"):"")}}
@change=${e=>{const t=e.target.value,a=Te(t);void 0===a&&t.trim()||s?.({image:a??""})}}
/></label>
<div class="pn-rows">
${le({icon:"sun",title:e.t("background.dim"),sub:e.t("background.dim_sub"),trailing:"value",value:e.t("wall.percent",{count:t.dim})})}
</div>
${a?z`<fluvy-ruler
class="pn-ruler"
.value=${t.dim}
.min=${0}
.max=${80}
.step=${5}
.length=${a}
tone="accent"
.minor=${5/80}
.major=${.25}
unit="%"
.label=${e.t("background.dim")}
?readonly=${!s}
@fluvy-input=${o.input}
@fluvy-change=${o.change}
@fluvy-cancel=${o.cancel}
></fluvy-ruler>
${Re(Fs.map(e=>[e/80,String(e)]))}`:p}
<div class="pn-rows">
${le({icon:"eye",title:e.t("background.blur"),sub:e.t("background.blur_sub"),trailing:"switch",on:t.blur,readonly:!s,onToggle:e=>s?.({blur:e})})}
</div>`:p;return z`${ke(V.map(s=>({key:s,glyph:Bs[s],label:e.t("wall.background"),value:es(e,s),active:t.type===s})),s&&(e=>s({type:e})),Es(e))}
${n}`}var Js=[0,25,50,75,100],Gs={ruler:"sliders",bar:"pillRound",liquid:"drop",fill:"shapeSoft"};function Zs(e,t,s){return z`<section class="fv-card pn-card pn-card--preview">
${j({icon:"eye",title:e.t("preview.title"),sub:e.t("dashboard.preview_of",{dashboard:s})})}
${t}
</section>`}function Vs(e,t){const{settings:r}=e,o=e.draft.palette;return z`<section class="fv-card pn-card">
${j({icon:"palette",title:e.t("palette.title"),sub:r.personalLook?e.t("palette.own"):e.t("palette.house")})}
${function(e){const t=e.draft.palette,s=Dt.filter(t=>!e.saved.some(e=>e.name===t.name)),a=e.showAllCommunity?s:s.slice(0,6);return z`${ss.map(s=>z`<p class="fv-label pn-line">
${e.t("soft"===s.key?"palette.pastel":"palette.electric")}
</p>
<div class="pn-gallery" data-fill-row>
${s.names.map(s=>js(s,t===s,e,()=>e.setDraft({palette:s})))}
</div>`)}
${e.saved.length?Cs(e,"palette.yours",e.saved):p}
${Cs(e,"palette.community",a,s.length>a.length?b([{key:"more",label:e.t("palette.more",{n:s.length}),active:!1}],()=>e.setShowAllCommunity(!0)):void 0)}
${function(e){const t=e.draft.palette,s=e.settings.look.palette,a=ns(t)?t:ns(s)?s:null,i=ns(t)&&!Ht(t,zt(e.saved));return z`<button
class="pn-custom ${i?"is-active":""}"
data-target
aria-pressed=${i?"true":"false"}
@click=${()=>e.setDraft({palette:a??os})}
>
${Os(a,e,"row")}
<span class="pn-custom__text">
<span class="pn-custom__title">${e.t("palette.custom")}</span>
<span class="pn-custom__sub">${e.t("palette.custom_sub")}</span>
</span>
<span class="pn-custom__tail">${_e(i?"check":"chevron")}</span>
</button>`}(e)}`}(e)}
</section>
${ns(o)?function(e,t){const a=s=>{const a=J({...e,...s});a&&t.setDraft({palette:a})},i="vivid"===e.character;return z`<section class="fv-card pn-card">
${j({icon:"drop",title:t.t("custom.title"),sub:t.t("custom.sub")})}
<p class="fv-label pn-label">${t.t("custom.character")}</p>
${Ts(t,[{key:"soft",label:t.t("custom.soft"),active:!i},{key:"vivid",label:t.t("custom.vivid"),active:i}],t=>{const s=t;a({character:s,accent:is(e.accent,s)})})}
<p class="fv-label pn-label">${t.t("custom.base")}</p>
${Ts(t,s.map(s=>({key:s,label:t.t(`custom.${s}`),active:e.base===s})),e=>a({base:e}))}
<p class="fv-label pn-label">${t.t("custom.surface")}</p>
<p class="pn-hint">${t.t("custom.surface_sub")}</p>
${Ts(t,Se.map(s=>({key:s,label:t.t(`custom.surface_${s}`),active:(e.surface??"fill")===s})),e=>a({surface:e}))}
${i?z`<p class="fv-label pn-label">${t.t("custom.fill")}</p>
${Ts(t,[{key:"tint",label:t.t("custom.tint"),active:"tint"===(e.fill??"tint")},{key:"solid",label:t.t("custom.solid"),active:"solid"===e.fill}],e=>a({fill:e}))}`:p}
<p class="fv-label pn-label">${t.t("custom.accent")}</p>
${Hs(as[e.character],e.accent,t,e=>e&&a({accent:e}))}
${Ws(e.accent,t,e=>a({accent:e}))}
${i?z`<p class="fv-label pn-label">${t.t("custom.highlight")}</p>
<p class="pn-hint">${t.t("custom.highlight_sub")}</p>
${Hs([null,...rs],e.highlight,t,s=>{const a={character:e.character,base:e.base,accent:e.accent,...e.fill?{fill:e.fill}:{},...s?{highlight:s}:{},...e.surface?{surface:e.surface}:{}};t.setDraft({palette:a})})}`:p}
</section>`}(o,e):p}
${ns(o)?function(e,t,s){const{share:a,admin:i,saved:r}=t,o=function(e,t,s){const a=Wt(t);return O({fluvy_palette:1,name:a,title:t.trim(),...s.trim()?{author:s.trim()}:{},palette:e})}(e,a.title,a.author),n=Ht(e,r),l=(e,s,i)=>z`<label class="pn-text">
<span class="fv-label pn-label">${t.t(s)}</span>
<span class="fv-field"
><input
class="fv-field__input"
type="text"
maxlength=${i}
.value=${a[e]}
@input=${s=>t.setShare({[e]:s.target.value})}
/></span>
</label>`;return z`<section class="fv-card pn-card">
${j({icon:"upload",title:t.t("share.title"),sub:t.t("share.sub")})}
<div class="pn-pair pn-fields">
${l("title","share.name",32)}${l("author","share.author",40)}
</div>
<div class="pn-pair pn-pair--words" data-fill-row>
<button
class="fv-btn fv-btn--quiet"
data-target
?disabled=${!o}
@click=${()=>o&&s.exportPalette(o)}
>
${t.t("share.export")}
</button>
<label class="fv-btn fv-btn--quiet pn-file" data-target
>${t.t("share.import")}
<input
type="file"
accept="application/json,.json"
@change=${e=>{const t=e.target,a=t.files?.[0];a&&s.importPalette(a),t.value=""}}
/></label>
</div>
${i?n?z`<div class="pn-rows">
${le({icon:"trash",title:t.t("share.remove"),sub:n.title,trailing:"none",onTap:()=>s.removePalette(n.name)})}
</div>`:o&&((e,t)=>e.some(e=>e.name===t)||e.length<12)(r,o.name)?z`<div class="pn-rows">
${le({icon:"download",tone:"accent",title:t.t("share.save"),sub:t.t("share.save_sub"),trailing:"none",onTap:()=>s.savePalette(o)})}
</div>`:o?z`<p class="pn-hint">${t.t("share.full")}</p>`:p:p}
</section>`}(o,e,t):p}
<section class="fv-card pn-card">
${j({icon:Ns[e.draft.shape],title:e.t("shape.title"),sub:e.t("shape.sub")})}
${ke(He.map(t=>({key:t,glyph:Ns[t],label:Ls[t],value:e.t(`shape.${t}`),active:e.draft.shape===t})),t=>e.setDraft({shape:t}),Es(e))}
</section>
<section class="fv-card pn-card">
${j({icon:Ms[e.draft.pills],title:e.t("pills.title"),sub:e.t("pills.sub")})}
${ke($e.map(t=>({key:t,glyph:Ms[t],label:e.t(`pills.size_${t}`),value:e.t(`pills.${t}`),active:e.draft.pills===t})),t=>e.setDraft({pills:t}),Es(e))}
</section>
${function(e){const t=S(e.draft),s=s=>e.setDraft({tabs:{...t,...s}}),i="fluvy"===t.style||"pills"===t.style;return z`<section class="fv-card pn-card">
${j({icon:Rs[t.style],title:e.t("tabs.title"),sub:e.t("tabs.sub")})}
${function(e,t,s){const a="ha"===t.style,i=!a&&"icons"!==t.content,r=a||"names"!==t.content,o=t.title;return z`<div class="pn-tabsmock pn-tabsmock--${t.style}" aria-hidden="true">
${o?z`<span class="pn-tabsmock__title" data-name
>${e.hass.config?.location_name||"Home"}</span
>`:p}
${"hidden"===t.style?p:z`<span class="pn-tabsmock__tabs" data-scroll-row
>${[["strategy.home","home"],["strategy.rooms","rooms"],["room.lights","bulb"]].map(([t,s],a)=>z`<span class="pn-tabsmock__tab ${0===a?"is-active":""}"
>${r?_e(s):p}${i?z`<span>${Z(e.hass,t)}</span>`:p}</span
>`)}</span
>`}
${"hidden"===t.style?z`<span class="pn-tabsmock__actions">${Is(s)}</span>`:p}
</div>`}(e,t,Je(e.draft))}
${ke(he.map(s=>({key:s,glyph:Rs[s],label:e.t(`tabs.${s}_sub`),value:e.t(`tabs.${s}`),active:t.style===s})),e=>s({style:e}),Es(e))}
${i?b(a.map(s=>({key:s,label:e.t(`tabs.content_${s}`),active:t.content===s})),e=>s({content:e}),"pn-tabs-content",!0):p}
<div class="pn-rows">
${le({icon:"text",title:e.t("tabs.name"),sub:e.t("tabs.name_sub"),trailing:"switch",on:t.title,onToggle:e=>s({title:e})})}
</div>
${i?p:z`<p class="pn-hint">
${e.t("hidden"===t.style?"tabs.hidden_hint":"tabs.ha_hint")}
</p>`}
</section>`}(e)} ${function(e){const t=Je(e.draft),s=s=>e.setDraft({chrome:{...t,...s}});return z`<section class="fv-card pn-card">
${j({icon:"frame",title:e.t("chrome.title"),sub:e.t("chrome.sub")})}
${function(e,t){return z`<div
class="pn-corner ${e.dividers?"has-lines":""} ${"page"===e.header?"is-page":""}"
aria-hidden="true"
>
<span class="pn-corner__side">
<span class="pn-corner__row">
${e.logo?z`<span class="pn-corner__logo" style="background-image:${Ke}"></span>`:z`<span class="pn-corner__menu">${_e("menu")}</span>`}
<span class="pn-corner__name">Home Assistant</span>
</span>
</span>
<span class="pn-corner__head">
<span class="pn-corner__row pn-corner__actions">
<span class="pn-corner__title" data-name>${t}</span>
${Is(e)}
</span>
</span>
</div>`}(t,String(e.hass.config?.location_name||"Home"))}
<div class="pn-rows">
${le({icon:"home",title:e.t("chrome.logo"),sub:e.t("chrome.logo_sub"),trailing:"switch",on:t.logo,onToggle:e=>s({logo:e})})}
${le({icon:"minus",title:e.t("chrome.dividers"),sub:e.t("chrome.dividers_sub"),trailing:"switch",on:t.dividers,onToggle:e=>s({dividers:e})})}
${le({icon:"palette",title:e.t("chrome.page"),sub:e.t("chrome.page_sub"),trailing:"switch",on:"page"===t.header,onToggle:e=>s({header:e?"page":"bar"})})}
${le({icon:"dots",title:e.t("chrome.actions"),sub:e.t("chrome.actions_sub"),trailing:"switch",on:"menu"===t.actions,onToggle:e=>s({actions:e?"menu":"buttons"})})}
</div>
${"everywhere"===e.shown.scope?p:z`<p class="pn-hint">
${e.t("chrome.hint",{scope:e.t("tab.scope"),everywhere:e.t("scope.everywhere")})}
</p>`}
</section>`}(e)} ${function(e){if("everywhere"!==e.shown.scope)return p;const t=Je(e.draft);return z`<section class="fv-card pn-card">
${j({icon:"minus",title:e.t("chrome.separators"),sub:e.t("chrome.separators_sub")})}
<div class="pn-rows">
${function(e,t){const s=t=>{const s=e.localize(t);return s&&s!==t?s:void 0},a=Object.values(e.panels??{}).flatMap(e=>{const a="lovelace"===e.url_path;if(!e.title&&!a||!1===e.show_in_sidebar)return[];if("config"===e.url_path||"profile"===e.url_path)return[];const i=a?s("panel.states")??t:s(`panel.${e.title}`)??e.title;return[{path:e.url_path,title:i,...e.icon?{icon:e.icon}:{}}]}),i=t=>"lovelace"===t.path?0:"lovelace"===e.panels?.[t.path]?.component_name?1:2;return a.sort((e,t)=>i(e)-i(t)||e.title.localeCompare(t.title))}(e.hass,e.t("scope.overview")).map(s=>le({icon:s.icon??("lovelace"===s.path?"home":"grid"),title:s.title,sub:`/${s.path}`,trailing:"switch",on:t.separators.includes(s.path),onToggle:a=>((s,a)=>e.setDraft({chrome:{...t,separators:a?[.../* @__PURE__ */new Set([...t.separators,s])]:t.separators.filter(e=>e!==s)}}))(s.path,a)}))}
</div>
</section>`}(e)} ${function(e){const{shown:t,admin:s}=e;return z`<section class="fv-card pn-card">
${j({icon:Bs[t.background.type],title:e.t("wall.background"),sub:e.t(s?"background.sub":"scope.admin_only")})}
${Ys(e,t.background,s?e.editBackground:null)}
</section>`}(e)}
${function(e){const{shown:t,admin:s}=e,{opacity:a}=t.cards,i=e.fit?.width??0,r=Us(a,s=>e.editHouse({cards:{...t.cards,opacity:s}}));return z`<section class="fv-card pn-card">
${j({icon:"grid",title:e.t("cards.title"),sub:e.t(s?"cards.sub":"scope.admin_only")})}
<div class="pn-rows">
${le({icon:"drop",title:e.t("cards.opacity"),sub:e.t("cards.opacity_sub"),trailing:"value",value:e.t("wall.percent",{count:a})})}
</div>
${i?z`<fluvy-ruler
class="pn-ruler"
.value=${a}
.min=${0}
.max=${100}
.step=${5}
.length=${i}
tone="accent"
.minor=${.05}
.major=${.25}
unit="%"
.label=${e.t("cards.opacity")}
?readonly=${!s}
@fluvy-input=${r.input}
@fluvy-change=${r.change}
@fluvy-cancel=${r.cancel}
></fluvy-ruler>
${Re(Js.map(e=>[e/100,String(e)]))}`:p}
<div class="pn-rows">
${le({icon:"eye",title:e.t("cards.blur"),sub:e.t("cards.blur_sub"),trailing:"switch",on:t.cards.blur,readonly:!s,onToggle:s=>e.editHouse({cards:{...t.cards,blur:s}})})}
${le({icon:"shapeSoft",title:e.t("cards.border"),sub:e.t("cards.border_sub"),trailing:"switch",on:t.cards.border,readonly:!s,onToggle:s=>e.editHouse({cards:{...t.cards,border:s}})})}
${le({icon:"dots",title:e.t("cards.sheets"),sub:e.t("cards.sheets_sub"),trailing:"switch",on:"fluvy"===t.sheets,readonly:!s,onToggle:t=>e.editHouse({sheets:t?"fluvy":"home-assistant"})})}
</div>
<p class="fv-label pn-label">${e.t("cards.unavailable")}</p>
${Ts(e,ce.map(s=>({key:s,label:Z(e.hass,`option.${s}`),active:t.cards.unavailable===s})),s?s=>e.editHouse({cards:{...t.cards,unavailable:s}}):null)}
</section>`}(e)} ${function(e){const{shown:t,admin:s}=e,a=t.sliders,i=t=>e.editHouse({sliders:{...a,...t}});return z`<section class="fv-card pn-card">
${j({icon:Gs[a.style],title:e.t("sliders.title"),sub:e.t(s?"cards.sub":"scope.admin_only")})}
${ke(re.map(t=>({key:t,glyph:Gs[t],label:e.t("sliders.style"),value:Z(e.hass,Xt[t]),active:a.style===t})),s?e=>i({style:e}):null,Es(e))}
<p class="pn-hint pn-hint--after">${e.t("sliders.fill_note")}</p>
${"bar"===a.style||"liquid"===a.style?z`<p class="fv-label pn-label">${e.t("sliders.words")}</p>
${Ts(e,se.map(t=>({key:t,label:Z(e.hass,`option.${t}`),active:a.words===t})),s?e=>i({words:e}):null)}`:p}
</section>`}(e)} ${function(e){const{shown:t,admin:s}=e;return z`<section class="fv-card pn-card">
${j({icon:"bulb",title:e.t("lights.title"),sub:e.t(s?"lights.sub":"scope.admin_only")})}
<p class="fv-label pn-label">${e.t("lights.tint")}</p>
${Ts(e,Pe.map(s=>({key:s,label:Z(e.hass,`option.${"off"===s?"never":s}`),active:t.lightTint===s})),s?t=>e.editHouse({lightTint:t}):null)}
<div class="pn-rows">
${le({icon:"palette",title:e.t("lights.colors"),sub:e.t("lights.colors_sub"),trailing:"switch",on:t.lightColors,readonly:!s,onToggle:t=>e.editHouse({lightColors:t})})}
</div>
</section>`}(e)} ${function(e){const{shown:t,admin:s}=e,a=function(e,t){const s=i(e,t),a={};for(const i of m){const e=m.find(e=>t[i]&&e!==i&&["light","dark"].some(t=>{const[a,r]=[$s(s[t],i),$s(s[t],e)];return G(a.fill,r.fill)<U.fillSeparation||G(a.ink,r.ink)<U.fillSeparation}));e&&(a[i]=e)}return a}(e.draft.palette,t.statuses),r=(s,a)=>e.editHouse({statuses:M({...t.statuses,[s]:a})});return z`<section class="fv-card pn-card">
${j({icon:"warn",title:e.t("statuses.title"),sub:e.t(s?"statuses.sub":"scope.admin_only")})}
${m.map(i=>{const o=t.statuses[i],n=a[i];return z`<p class="fv-label pn-label">${e.t(`statuses.${i}`)}</p>
${Ts(e,[{key:"auto",label:e.t("statuses.auto"),active:!o},{key:"own",label:e.t("statuses.own"),active:!!o}],s?e=>{"auto"===e?r(i,void 0):o||r(i,ys[i])}:null)}
${o?z`${Hs(_s,o,e,s?e=>e&&r(i,e):null,!0)}
${Ws(o,e,s?e=>r(i,e):null)}`:p}
${n?z`<p class="pn-hint pn-hint--after">
${e.t("statuses.close",{status:e.t(`statuses.${n}`)})}
</p>`:p}`})}
</section>`}(e)}
${r.personalLook?z`<section class="fv-card pn-card pn-rows">
${le({icon:"home",title:e.t("apply.back"),sub:e.t("apply.back_sub"),trailing:"none",onTap:()=>e.run(()=>e.handle.store.savePersonal({palette:void 0,shape:void 0,pills:void 0,tabs:void 0,chrome:void 0}))})}
</section>`:p}`}var Ks={sidebar:"menu",settings:"sliders"};var Qs={entity:{multiple:!0}};function Xs(e,t,s,a=!1){const i=!a&&void 0!==e.sidebarOf(t.urlPath);return le({icon:"sidePanel",tone:i?"accent":"neutral",title:e.t(a?"dashboard.side_others":"dashboard.side"),sub:e.t(a?"dashboard.side_others_sub":i?"dashboard.side_on":"dashboard.side_sub"),onTap:()=>s.sidebar(t.urlPath)})}function ea(e){const t=Q(e.hass,e.shown.rooms);return Object.values(e.hass.areas??{}).map(de).sort((e,s)=>t(e.area_id)-t(s.area_id)||e.name.localeCompare(s.name))}var ta={[-1]:"pn-room__up",1:"pn-room__down"};var sa=e=>{const[t=0,s=0]=e.split(":").map(Number);return 60*t+s},aa=e=>`${String(Math.floor(e/60)%24).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`;function ia(e){const t=e.deviceEdit.zoom??e.device.zoom;return z`<p class="fv-label pn-label">${e.t("pref.size")}</p>
${Ts(e,$.map(s=>({key:String(s),label:e.t("wall.percent",{count:s}),active:s===t})),t=>e.editDevice({zoom:Number(t)}),e.wide?5:3)}`}function ra(e,t,s=/* @__PURE__ */new Date){const a={},i=t.data??{},r=s.toISOString(),o=(t,s,i={})=>{const o=a[t]??e[t];o&&(a[t]={...o,state:s??o.state,attributes:{...o.attributes,...i},last_changed:void 0!==s&&s!==o.state?r:o.last_changed,last_updated:r})};for(const n of function(e){const t=e.target?.entity_id??e.data?.entity_id;return void 0===t?[]:[].concat(t)}(t)){const s=e[n];if(!s)continue;const a=s.attributes;switch(`${t.domain}.${t.service}`){case"homeassistant.turn_on":case"switch.turn_on":case"input_boolean.turn_on":case"fan.turn_on":case"humidifier.turn_on":case"remote.turn_on":case"automation.turn_on":o(n,"on");break;case"homeassistant.turn_off":case"switch.turn_off":case"input_boolean.turn_off":case"fan.turn_off":case"light.turn_off":case"humidifier.turn_off":case"media_player.turn_off":case"remote.turn_off":case"automation.turn_off":o(n,"off");break;case"homeassistant.toggle":case"switch.toggle":case"input_boolean.toggle":case"light.toggle":case"fan.toggle":case"automation.toggle":o(n,"on"===s.state?"off":"on");break;case"light.turn_on":o(n,"on",{...void 0!==i.brightness_pct?{brightness:Math.round(Number(i.brightness_pct)/100*255)}:a.brightness?{}:{brightness:178},...void 0!==i.color_temp_kelvin?{color_temp_kelvin:i.color_temp_kelvin}:{}});break;case"cover.open_cover":o(n,"open",{current_position:100});break;case"cover.close_cover":o(n,"closed",{current_position:0});break;case"cover.stop_cover":break;case"cover.set_cover_position":case"valve.set_valve_position":o(n,Number(i.position)>0?"open":"closed",{current_position:i.position});break;case"cover.set_cover_tilt_position":o(n,void 0,{current_tilt_position:i.tilt_position});break;case"cover.open_cover_tilt":o(n,void 0,{current_tilt_position:100});break;case"cover.close_cover_tilt":o(n,void 0,{current_tilt_position:0});break;case"fan.set_percentage":o(n,Number(i.percentage)>0?"on":"off",{percentage:i.percentage});break;case"fan.oscillate":o(n,void 0,{oscillating:i.oscillating});break;case"fan.set_preset_mode":case"climate.set_preset_mode":o(n,void 0,{preset_mode:i.preset_mode});break;case"fan.set_direction":o(n,void 0,{direction:i.direction});break;case"climate.set_temperature":o(n,void 0,{...void 0!==i.temperature?{temperature:i.temperature}:{},...void 0!==i.target_temp_low?{target_temp_low:i.target_temp_low,target_temp_high:i.target_temp_high}:{}});break;case"climate.set_hvac_mode":o(n,String(i.hvac_mode),{hvac_action:"off"===i.hvac_mode?"off":"cool"===i.hvac_mode?"cooling":"heat"===i.hvac_mode?"heating":"idle"});break;case"climate.set_fan_mode":o(n,void 0,{fan_mode:i.fan_mode});break;case"water_heater.set_temperature":o(n,void 0,{temperature:i.temperature});break;case"water_heater.set_operation_mode":o(n,String(i.operation_mode));break;case"humidifier.set_humidity":o(n,void 0,{humidity:i.humidity});break;case"media_player.media_play_pause":o(n,"playing"===s.state?"paused":"playing");break;case"media_player.media_play":o(n,"playing");break;case"media_player.media_pause":case"vacuum.pause":case"lawn_mower.pause":case"timer.pause":o(n,"paused");break;case"media_player.volume_set":o(n,void 0,{volume_level:i.volume_level});break;case"media_player.volume_mute":o(n,void 0,{is_volume_muted:i.is_volume_muted});break;case"media_player.select_source":o(n,void 0,{source:i.source});break;case"media_player.shuffle_set":o(n,void 0,{shuffle:i.shuffle});break;case"media_player.repeat_set":o(n,void 0,{repeat:i.repeat});break;case"media_player.media_next_track":case"media_player.media_previous_track":o(n,void 0,{media_position:0,media_position_updated_at:r});break;case"media_player.media_seek":o(n,void 0,{media_position:Number(i.seek_position),media_position_updated_at:r});break;case"media_player.turn_on":case"media_player.media_stop":case"vacuum.stop":case"timer.cancel":o(n,"idle");break;case"media_player.volume_up":case"media_player.volume_down":o(n,void 0,{volume_level:Math.min(1,Math.max(0,Number(a.volume_level??0)+("volume_up"===t.service?.05:-.05)))});break;case"remote.send_command":o(n,void 0,{last_command:[].concat(i.command).map(String).join(" ")});break;case"vacuum.start":o(n,"cleaning");break;case"vacuum.return_to_base":o(n,"returning");break;case"vacuum.set_fan_speed":o(n,void 0,{fan_speed:i.fan_speed});break;case"lawn_mower.start_mowing":o(n,"mowing");break;case"lawn_mower.dock":o(n,"docked");break;case"lock.lock":o(n,"locked");break;case"lock.unlock":o(n,"unlocked");break;case"lock.open":case"valve.open_valve":o(n,"open");break;case"alarm_control_panel.alarm_disarm":o(n,"disarmed");break;case"alarm_control_panel.alarm_arm_home":o(n,"armed_home");break;case"alarm_control_panel.alarm_arm_away":o(n,"armed_away");break;case"alarm_control_panel.alarm_arm_night":o(n,"armed_night");break;case"alarm_control_panel.alarm_arm_vacation":o(n,"armed_vacation");break;case"alarm_control_panel.alarm_arm_custom_bypass":o(n,"armed_custom_bypass");break;case"input_number.set_value":case"number.set_value":case"input_text.set_value":case"text.set_value":o(n,String(i.value));break;case"input_select.select_option":case"select.select_option":o(n,String(i.option));break;case"timer.start":o(n,"active");break;case"scene.turn_on":case"script.turn_on":case"button.press":case"input_button.press":o(n,r);break;case"timer.finish":o(n,"idle",{remaining:"0:00:00"});break;case"counter.increment":o(n,String(Number(s.state||0)+Number(a.step??1)));break;case"counter.decrement":o(n,String(Number(s.state||0)-Number(a.step??1)));break;case"counter.reset":o(n,String(Number(a.initial??0)));break;case"automation.trigger":o(n,void 0,{last_triggered:r});break;case"update.install":o(n,void 0,{in_progress:!0,update_percentage:0});break;case"todo.add_item":o(n,String(Number(s.state||0)+1));break;case"todo.update_item":o(n,String(Math.max(0,Number(s.state||0)+("completed"===i.status?-1:1))));break;case"todo.remove_item":o(n,void 0);break;case"valve.close_valve":o(n,"closed");break;case"input_datetime.set_datetime":case"time.set_value":void 0!==i.time&&o(n,String(i.time))}}return a}function oa(e,t,s){return{[e]:{entity_id:e,state:String(s),attributes:{friendly_name:t,device_class:"power",unit_of_measurement:"W",state_class:"measurement"},last_changed:/* @__PURE__ */(new Date).toISOString(),last_updated:/* @__PURE__ */(new Date).toISOString(),context:{id:"fluvy-preview",user_id:null,parent_id:null}}}}me({panel:/*#__PURE__*/JSON.parse('{"title":"Fluvy","subtitle":"Theme and cards","menu":"Open the menu","tab.appearance":"Appearance","tab.charts":"Charts","tab.scope":"Scope","tab.dashboard":"Dashboards","tab.preferences":"Preferences","palette.title":"Palette","palette.house":"The house’s look","palette.own":"Your own look","palette.pastel":"Pastel","palette.electric":"Electric","palette.custom":"Custom","palette.custom_sub":"Your own accent","custom.title":"Your palette","custom.sub":"Pick an accent; the rest follows","custom.character":"Style","custom.soft":"Pastel","custom.vivid":"Electric","custom.base":"Ground","custom.warm":"Warm","custom.neutral":"Neutral","custom.cool":"Cool","custom.surface":"Cards","custom.surface_fill":"Filled","custom.surface_line":"Outlined","custom.surface_ink":"Ink","custom.surface_sub":"Outlined puts the cards on a page of their own colour, each closed by a line, with no shadows: made for e-paper. Ink draws that line in the text’s colour.","custom.fill":"When on","custom.tint":"Tint","custom.solid":"Solid","custom.accent":"Accent","custom.hex":"Any colour","custom.pick":"Pick a colour","custom.highlight":"Highlight","custom.none":"None","custom.highlight_sub":"A second colour for you and for now: your avatar, today in the calendar, the open tab","shape.title":"Shape","shape.sub":"The corners of cards, tiles and buttons","shape.soft":"Soft","shape.round":"Round","shape.crisp":"Crisp","pills.title":"Buttons","pills.sub":"Chips, tabs and badges","pills.round":"Pill","pills.soft":"Soft","pills.crisp":"Crisp","pills.size_round":"Full","pills.size_soft":"12","pills.size_crisp":"6","tabs.title":"Dashboard tabs","tabs.sub":"The views in each dashboard\'s header","tabs.fluvy":"Fluvy","tabs.fluvy_sub":"Underlined","tabs.pills":"Pills","tabs.pills_sub":"Filled","tabs.ha":"Original","tabs.ha_sub":"Home Assistant\'s","tabs.hidden":"Hidden","tabs.hidden_sub":"No tabs","tabs.content_names":"Names","tabs.content_icons":"Icons","tabs.content_both":"Both","tabs.name":"Dashboard name","tabs.name_sub":"On wide screens","tabs.hidden_hint":"With the tabs hidden, an automatic dashboard can show its views as chips under the greeting (the Dashboard tab).","tabs.ha_hint":"Home Assistant draws its own: icons, and the name where a view has none.","chrome.title":"Sidebar and header","chrome.sub":"The corner of every page","chrome.logo":"Home Assistant logo","chrome.logo_sub":"In place of the menu icon","chrome.dividers":"Dividers","chrome.dividers_sub":"A line under each","chrome.page":"Header on the page","chrome.page_sub":"On the page\'s colour","chrome.actions":"Actions in one menu","chrome.actions_sub":"Add, search, Assist, edit","chrome.hint":"The sidebar takes these where Fluvy styles all of Home Assistant ({scope} → {everywhere}).","chrome.separators":"Lines in the sidebar","chrome.separators_sub":"A line after each one switched on","preview.title":"Preview","preview.sub":"Your cards with this look","preview.living":"Living room","preview.kitchen":"Kitchen","preview.bedroom":"Bedroom","preview.blinds":"Blinds","preview.temperature":"Temperature","preview.solar":"Solar","preview.grid":"Grid","preview.battery":"Battery","preview.app":"Try it on the whole app","preview.app_sub":"Until you apply or leave","apply.house":"Apply to the house","apply.me":"Only for me","apply.mine":"Apply for me","apply.discard":"Discard","apply.region":"Changes not saved yet","apply.save":"Save","apply.changes_other":"{n} changes","apply.trying":"On the whole app","apply.stop":"Stop","apply.back":"Use the house’s look","apply.back_sub":"You are using your own palette","scope.title":"Where the look applies","scope.only":"Only","scope.dashboards":"Dashboards","scope.everywhere":"Everywhere","scope.ha":"Home Assistant","scope.list":"Dashboards that wear it","scope.list_auto":"Automatic: those whose address starts with fluvy","scope.list_chosen":"{n} chosen","scope.overview":"Overview","scope.frame":"Floating frame","scope.frame_sub":"The app floats on wide screens","scope.icons_sidebar":"Our icons in the sidebar","scope.icons_sidebar_sub":"Its pages, apps and notifications; off keeps Home Assistant’s","scope.icons_settings":"Our icons in Settings","scope.icons_settings_sub":"Its lists, and the buttons and menus of every page; off keeps Home Assistant’s","scope.activity":"Our Activity view","scope.activity_sub":"A day at a glance, with a time rail; off keeps Home Assistant’s","scope.history":"Our History view","scope.history_sub":"Curves you can read by hand, with the states under them; off keeps Home Assistant’s","scope.details":"Our chart in the details dialog","scope.details_sub":"An entity’s history as Fluvy draws it, in Home Assistant’s dialog; off keeps Home Assistant’s","scope.admin_only":"Only an administrator can change this","scope.theme_profile":"Your profile uses the {theme} theme","scope.theme_profile_sub":"So Home Assistant wears it on every page. With the default theme, only these dashboards do.","scope.theme_house":"Home Assistant’s default theme is {theme}","scope.theme_house_sub":"So every page wears it, for everyone. With Home Assistant’s theme, only these dashboards do.","scope.theme_house_guest":"So every page wears it. An administrator can change the default theme.","scope.theme_use":"Use the default theme","scope.theme_use_ha":"Use Home Assistant’s theme","scope.theme_another":"Home Assistant wears another theme","scope.theme_another_sub":"Your theme is {theme}, so Home Assistant keeps it and Fluvy stays on its dashboards. With the Fluvy theme, it reaches every page.","scope.theme_use_fluvy":"Use the Fluvy theme","scope.summary_dashboards":"only on dashboards","scope.summary_everywhere":"everywhere","dashboard.title":"Dashboards","dashboard.sub":"Built from your house, one for each purpose","dashboard.missing":"Not created yet","dashboard.create":"Create","dashboard.creating":"Creating it…","dashboard.sidebar":"Show in the sidebar","dashboard.customise":"Customise","dashboard.customise_sub":"Hide, move and tune its views and cards","dashboard.customised":"Customised: some of it is yours","dashboard.customise_admin":"An administrator can hide, move and tune its views and cards","dashboard.views":"Views","dashboard.always":"Always","dashboard.cards":"Cards","dashboard.thermostat":"Thermostats","dashboard.dial":"Dial","dashboard.compact":"Compact","dashboard.ruler":"Ruler","dashboard.tiles":"Lights","dashboard.large":"Large","dashboard.rows":"Rows","dashboard.tile_switch":"Tile switches","dashboard.switch_show":"Shown","dashboard.switch_hide":"Hidden","dashboard.switch_value":"Value","dashboard.switch_rocker":"Wall rockers","dashboard.flow":"Energy flow","dashboard.rail":"Rail","dashboard.legs":"Lines","pref.title":"Just for you","pref.sub":"These follow you on every device","pref.language":"Language","pref.auto":"Automatic","pref.reduce":"Reduce motion","pref.reduce_sub":"Whatever the device asks","pref.hold":"Hold to slide","pref.hold_sub":"On a touch screen, a slider waits for a short hold","pref.haptics":"Haptics","pref.haptics_sub":"A tap you can feel","pref.activity_card":"Activity on a card","pref.activity_card_sub":"The timeline in a card","pref.translate":"Translations","pref.translate_sub":"Fluvy’s words, on GitHub","pref.device":"This device","pref.device_sub":"Remembered by this screen alone","pref.size":"Size","pref.size_sub":"The dashboards, to read from across the room","pref.performance":"Performance","pref.performance_auto":"Auto","pref.performance_full":"Full","pref.performance_lite":"Lite","pref.performance_sub":"Lite: no blur behind see-through cards, no entrance, gauges and liquids at rest","pref.dock":"Sidebar beside the page","pref.dock_sub":"On a wide screen, hidden until the menu opens it","pref.sidebars":"Hide dashboard sidebars","pref.sidebars_sub":"A dashboard’s own sidebar is not drawn on this screen","about.title":"Fluvy","about.version":"Version {version}","about.look":"Look in use","about.shell":"Home Assistant pages","about.shell_value":"{styled} of {total} styled","about.shell_off":"Not styled on this screen","about.file":"Settings file","about.file_sub":"Move this setup to another house","about.export":"Export","about.import":"Import","about.reset":"House settings","about.reset_sub":"Back to {look}","about.reset_btn":"Reset","about.reset_armed":"Tap again","about.reset_cancels":"Cancels in 4 seconds","about.reset_done":"House settings reset","about.imported":"Settings imported","about.invalid":"That file holds no Fluvy settings","change.on":"On","change.off":"Off","change.dashboards":"Only on dashboards","change.everywhere":"On all of Home Assistant","saved":"Saved","dashboard.rooms":"Rooms","dashboard.photo":"Photo","dashboard.tile":"Tile","dashboard.row":"Row","dashboard.room_name":"Name on a room’s photo","dashboard.bottom":"Bottom","dashboard.top":"Top","dashboard.room_readouts":"Room readouts","dashboard.one_row":"One row","dashboard.several_rows":"Several rows","dashboard.room_labels":"Readout labels","dashboard.auto":"Auto","dashboard.words":"Words","dashboard.icons":"Icons","dashboard.none":"None","dashboard.recreate":"Start over","dashboard.recreate_sub":"Back to its defaults","dashboard.recreate_btn":"Recreate","dashboard.recreate_armed":"Tap again","dashboard.recreated":"Dashboard recreated","dashboard.areas":"Rooms shown","dashboard.refresh":"Camera stills","dashboard.seconds":"{count} s","dashboard.scenes":"Scenes","dashboard.count":"{count}","dashboard.preview_of":"As {dashboard} will draw them","template.home":"Home","template.home_sub":"Rooms, lights, climate, energy and more","template.rooms":"Rooms","template.rooms_sub":"A card a room, floor by floor","template.energy":"Energy","template.energy_sub":"The flow, the sun, the devices and every meter","template.security":"Security","template.security_sub":"The alarm, the locks, the cameras and what is open","template.wall":"Wall","template.wall_sub":"Two columns for a tablet on the wall","preview.alarm":"Alarm","preview.door":"Front door","tab.wall":"Wall","wall.device":"This device","wall.device_sub":"Whether this screen is a wall","wall.use":"Wall panel","wall.use_on":"On in this browser","wall.use_off":"Off in this browser","wall.use_hint":"Turn it on and this browser shows the wall dashboards with no sidebar and no header, and rests on the screensaver. It is kept in this browser alone: turn it on at the tablet itself.","wall.address":"Address","wall.address_sub":"Open it once on the tablet: it remembers","wall.copy":"Copy the address","wall.copied":"Address copied","wall.copy_failed":"Could not copy: select the address and copy it","wall.dashboards":"Wall dashboards","wall.dashboards_sub":"Which dashboards are walls","wall.dashboards_auto":"Automatic: any that wears the look","wall.screen":"Screen","wall.after":"Screensaver after","wall.never":"Never","wall.minutes":"{count} min","wall.clock":"Screensaver clock","wall.clock_sub":"Time and weather while asleep","wall.dim":"Dim to black","wall.dim_sub":"Black instead of the page","wall.wake":"Wake on motion","wall.wake_none":"None","wall.try":"See the screensaver","wall.try_sub":"Over the page until a tap","wall.try_btn":"Show","wall.day_night":"Day and night","wall.theme_dark":"Dark","wall.theme_dark_sub":"Always","wall.theme_follow":"Follow","wall.theme_follow_sub":"Home Assistant","wall.theme_sun":"Sun","wall.theme_sun_sub":"After sunset","wall.theme_hours":"Hours","wall.theme_hours_sub":"Between times","wall.from":"Night from","wall.to":"Until","wall.night_dim":"Darken at night","wall.off":"Off","wall.percent":"{count} %","wall.background":"Background","wall.background_sub":"Behind the cards on the wall","wall.plain":"Plain","wall.mesh":"Wall","wall.as_dashboard":"As the dashboard","wall.preview_sub":"The background and the day or night, as the wall would be now","wall.exit":"Way out","wall.exit_sub":"In the top corner: a × that leaves, or a hidden hold that pauses","wall.exit_button":"Button","wall.exit_hold":"Long press","palette.yours":"Yours","palette.community":"Community","palette.more":"Show all ({n})","palette.by":"by {author}","share.title":"Share","share.sub":"A palette as a file, for another house or for everyone","share.name":"Title","share.author":"Author","share.export":"Share this palette","share.import":"Import a palette","share.save":"Save to the house’s palettes","share.save_sub":"Kept with the house, under Yours","share.remove":"Remove from the house’s palettes","share.full":"The house keeps twelve palettes; remove one to save another","share.invalid":"That file holds no Fluvy palette","share.imported":"Palette imported","share.saved":"Palette saved","share.removed":"Palette removed","dashboard.stream":"Stream","dashboard.greeting_tabs":"Views under the greeting","dashboard.header_only":"Header only","dashboard.under_greeting":"As chips too","dashboard.background_house":"As the house","dashboard.background_own":"Its own","dashboard.caps":"Long lists","dashboard.shortened":"Shortened","dashboard.in_full":"In full","dashboard.exclude":"Entities left out","dashboard.exclude_sub":"Shown on no view and counted nowhere, as if the house had none","dashboard.side":"Sidebar","dashboard.side_sub":"A clock, its pages and your cards beside its views","dashboard.side_on":"Beside its views, on every one","dashboard.side_others":"Other dashboards","dashboard.side_others_sub":"Give one of your own a sidebar","dashboard.group_by":"Lights and scenes","dashboard.together":"Together","dashboard.by_room":"By room","dashboard.scenes_style":"Scenes as","dashboard.scene_tiles":"Tiles","dashboard.scene_chips":"Chips","rooms.title":"Rooms in order","rooms.sub":"For every list by room, on every dashboard","rooms.auto":"Automatic","rooms.home_assistant":"As in Home Assistant","rooms.name":"A to Z","rooms.own":"Your own","rooms.hint":"Drag a room by its circle, or use its arrows. A room added later follows these.","rooms.up":"Move {room} up","rooms.down":"Move {room} down","wall.subview":"Back from a subview","wall.subview_sub":"A wall has no header: a button with the view’s name, or Home Assistant’s header in subviews","wall.subview_button":"Back button","wall.subview_header":"Header","wall.saver_size":"Screensaver too","wall.saver_size_sub":"Its clock at this size","lights.title":"Lights","lights.sub":"Where a card says nothing of its own","lights.tint":"Show their colour","lights.colors":"In their bulb’s colour","lights.colors_sub":"On tiles, rows and rooms","background.sub":"Behind the cards of every dashboard","background.color":"Colour","background.image":"Image","background.picture":"Picture","background.refused":"A path such as /local/garden.jpg or a web address, with no spaces, quotes or brackets","background.dim":"Dim","background.dim_sub":"So the words on the page read","background.blur":"Blur","background.blur_sub":"The picture out of focus","background.two":"Two colours","background.two_sub":"From the first at the top to the second","background.second":"Second colour","cards.title":"Cards","cards.sub":"Where a card says nothing of its own","cards.opacity":"Opacity","cards.opacity_sub":"Under 100 %, the background shows through","cards.blur":"Blur what shows through","cards.blur_sub":"On every see-through card, the house’s or its own","cards.border":"Border","cards.border_sub":"The hairline round every card and tile","cards.sheets":"Fluvy’s details sheets","cards.sheets_sub":"For a light, a thermostat, a cover, a player or a fan; off opens Home Assistant’s dialog","cards.unavailable":"When unavailable","sliders.title":"Sliders","sliders.style":"Style","sliders.words":"Words under a bar or a liquid","sliders.fill_note":"Fill acts on tiles; a card draws the ruler.","statuses.title":"Status colours","statuses.sub":"The palette’s own, or yours, fitted to read on every card","statuses.warning":"Warning","statuses.danger":"Danger","statuses.success":"Success","statuses.notice":"Notice","statuses.auto":"Auto","statuses.own":"Custom","statuses.close":"Close to {status}: the two may be mistaken for each other","charts.style":"Style","charts.style_sub":"Every chart, unless a card names its own","charts.gauge":"Gauges","charts.gauge_sub":"Every gauge, unless a card names its own","charts.details":"Details","charts.details_sub":"What the style lets you tune","charts.classic_hint":"Classic is the chart as Fluvy has always drawn it: choose another style to tune it","charts.line":"Line","charts.glow":"Soft shadow","charts.glow_opacity":"Shadow strength","charts.px":"{n} px","charts.fill":"Fill","charts.grid":"Gridlines","charts.grid_hairline":"Hairline","charts.grid_dashed":"Dashed","charts.grid_none":"None","charts.endpoint":"Line’s end","charts.knob":"Knob","charts.dot":"Dot","charts.now":"Now","charts.now_line":"Line","charts.caps":"Bars’ ends","charts.caps_top":"Top","charts.caps_both":"Both","charts.bubble":"Bubble","charts.bubble_dark":"Dark","charts.bubble_tone":"In colour","charts.wave":"Waves","charts.wave_low":"Low","charts.wave_mid":"Medium","charts.wave_high":"High","charts.motion":"Motion","charts.motion_sub":"Charts draw themselves in; off, they appear at rest","charts.time":"Time","charts.time_sub":"Every chart of the past, unless a card says its own","charts.window":"Time shown","charts.points":"A point every","charts.points_hint":"Automatic draws a calm line for each card’s width; a fixed interval draws Home Assistant’s reading at each of its times","charts.series":"Series colours","charts.series_sub":"When a chart draws several lines","charts.palette":"From the palette","charts.palette_sub":"Six made to tell apart","charts.new":"New set…","charts.new_sub":"Six colours of your own","charts.edit":"Edit this set","charts.full":"The house keeps twelve sets; remove one to save another","charts.editor_new":"New set","charts.editor_edit":"Your set","charts.editor_sub":"Checked on a light and a dark card","charts.name":"Name","charts.colours":"Colours","charts.colour":"Colour {n}","charts.series_n":"Series {n}","charts.follows":"Follows the palette","charts.fixed":"Fixed","charts.group_series":"Series","charts.group_tones":"Tones","charts.group_energy":"Energy","charts.custom":"Custom","charts.close":"{a} and {b} are too close to tell apart","charts.close_light":"{a} and {b} are too close to tell apart on a light card","charts.close_dark":"{a} and {b} are too close to tell apart on a dark card","charts.check_ok":"Every colour stands apart and reads on either card","charts.cancel":"Cancel","charts.save":"Save set","charts.delete":"Delete this set","charts.saved":"Set saved","charts.deleted":"Set deleted","charts.light":"Light","charts.dark":"Dark","charts.preview_sub":"Your charts with these settings","dashboard.thermostat_state":"Thermostat state","dashboard.brief":"Brief","dashboard.detailed":"Detailed"}')});var na={"light.fluvy_preview_living":"fluvy_preview_living","sensor.fluvy_preview_temperature":"fluvy_preview_living","switch.fluvy_preview_kitchen":"fluvy_preview_kitchen"},la={sources:[{type:"solar",power:"sensor.fluvy_preview_solar"},{type:"grid",power:"sensor.fluvy_preview_grid"},{type:"battery",power:"sensor.fluvy_preview_battery",level:"sensor.fluvy_preview_battery_level"}]},ca={living:"light.fluvy_preview_living",kitchen:"switch.fluvy_preview_kitchen",blinds:"cover.fluvy_preview_blinds",temperature:"sensor.fluvy_preview_temperature",bedroom:"climate.fluvy_preview_bedroom",alarm:"alarm_control_panel.fluvy_preview_alarm",door:"lock.fluvy_preview_door"},da=class{constructor(e){this.made=/* @__PURE__ */new Map,this.statesOf=C((e,t)=>({...e,...t})),this.entitiesOf=C(e=>{const t={...e};for(const[s,a]of Object.entries(na))t[s]={...t[s]??{entity_id:s},area_id:a};return t}),this.areasOf=C((e,t)=>({...e,...t})),this.themesOf=C((e,t)=>void 0===t?e:{...e,darkMode:t}),this.previewOf=C((e,t,s,a,i)=>({...e,states:t,entities:s,areas:a,themes:i,callService:this.answer})),this.answer=async(e,t,s,a)=>{const i={domain:e,service:t,data:s??{},target:a};window.setTimeout(()=>{this.states={...this.states,...ra(this.states,i)},this.real&&this.update(this.real)},120)},this.states=(e=>({"light.fluvy_preview_living":{entity_id:"light.fluvy_preview_living",state:"on",attributes:{friendly_name:e.living,brightness:178,supported_color_modes:["brightness"],color_mode:"brightness"},last_changed:/* @__PURE__ */(new Date).toISOString(),last_updated:/* @__PURE__ */(new Date).toISOString(),context:{id:"fluvy-preview",user_id:null,parent_id:null}},"switch.fluvy_preview_kitchen":{entity_id:"switch.fluvy_preview_kitchen",state:"off",attributes:{friendly_name:e.kitchen},last_changed:/* @__PURE__ */(new Date).toISOString(),last_updated:/* @__PURE__ */(new Date).toISOString(),context:{id:"fluvy-preview",user_id:null,parent_id:null}},"cover.fluvy_preview_blinds":{entity_id:"cover.fluvy_preview_blinds",state:"open",attributes:{friendly_name:e.blinds,current_position:40,device_class:"blind",supported_features:15},last_changed:/* @__PURE__ */(new Date).toISOString(),last_updated:/* @__PURE__ */(new Date).toISOString(),context:{id:"fluvy-preview",user_id:null,parent_id:null}},"sensor.fluvy_preview_temperature":{entity_id:"sensor.fluvy_preview_temperature",state:"21.4",attributes:{friendly_name:e.temperature,device_class:"temperature",unit_of_measurement:"°C",state_class:"measurement"},last_changed:/* @__PURE__ */(new Date).toISOString(),last_updated:/* @__PURE__ */(new Date).toISOString(),context:{id:"fluvy-preview",user_id:null,parent_id:null}},...oa("sensor.fluvy_preview_solar",e.solar,2140),...oa("sensor.fluvy_preview_grid",e.grid,380),...oa("sensor.fluvy_preview_battery",e.battery,-620),"sensor.fluvy_preview_battery_level":{entity_id:"sensor.fluvy_preview_battery_level",state:"64",attributes:{friendly_name:e.battery,device_class:"battery",unit_of_measurement:"%",state_class:"measurement"},last_changed:/* @__PURE__ */(new Date).toISOString(),last_updated:/* @__PURE__ */(new Date).toISOString(),context:{id:"fluvy-preview",user_id:null,parent_id:null}},"alarm_control_panel.fluvy_preview_alarm":{entity_id:"alarm_control_panel.fluvy_preview_alarm",state:"disarmed",attributes:{friendly_name:e.alarm,supported_features:3,code_arm_required:!1},last_changed:/* @__PURE__ */(new Date).toISOString(),last_updated:/* @__PURE__ */(new Date).toISOString(),context:{id:"fluvy-preview",user_id:null,parent_id:null}},"lock.fluvy_preview_door":{entity_id:"lock.fluvy_preview_door",state:"locked",attributes:{friendly_name:e.door},last_changed:/* @__PURE__ */(new Date).toISOString(),last_updated:/* @__PURE__ */(new Date).toISOString(),context:{id:"fluvy-preview",user_id:null,parent_id:null}},"climate.fluvy_preview_bedroom":{entity_id:"climate.fluvy_preview_bedroom",state:"heat",attributes:{friendly_name:e.bedroom,hvac_modes:["off","heat","cool","auto"],hvac_action:"heating",temperature:21.5,current_temperature:20.8,min_temp:7,max_temp:35,target_temp_step:.5,supported_features:1,valve_position:42},last_changed:/* @__PURE__ */(new Date).toISOString(),last_updated:/* @__PURE__ */(new Date).toISOString(),context:{id:"fluvy-preview",user_id:null,parent_id:null}}}))(e),this.areas=(e=>({fluvy_preview_living:{area_id:"fluvy_preview_living",name:e.living,icon:"mdi:sofa"},fluvy_preview_kitchen:{area_id:"fluvy_preview_kitchen",name:e.kitchen,icon:"mdi:stove"}}))(e)}card(e){const t=JSON.stringify(e);let s=this.made.get(t);if(!s){const a=String(e.type).replace(/^custom:/,""),i=document.createElement(a);s=i,customElements.get(a)?i.setConfig(e):customElements.whenDefined(a).then(()=>{customElements.upgrade(i),"function"==typeof i.setConfig&&i.setConfig(e)}),s.setAttribute("preview",""),s.setAttribute("still",""),this.preview&&(s.hass=this.preview),this.made.set(t,s)}return s}tile(e,t="large",s){return this.card({type:"custom:fluvy-tile-card",entity:ca[e],..."compact"===t?{size:t}:{},...yt(s),grid_options:{columns:6}})}thermostat(e,t=!1){return this.card({type:"custom:fluvy-thermostat-card",entity:ca.bedroom,variant:e,...t?{show_valve:!0}:{}})}energy(e,t){return this.card({type:"custom:fluvy-energy-flow-card",...t??la,..."stream"===e||"ribbons"===e?{}:{flow_style:e}})}hello(){return this.card({type:"custom:fluvy-hello-card"})}room(e,t,s={}){return this.card({type:"custom:fluvy-room-card",area:`fluvy_preview_${e}`,variant:t,...s,grid_options:{columns:6}})}alarm(){return this.card({type:"custom:fluvy-alarm-card",entity:ca.alarm,variant:"compact"})}lock(){return this.card({type:"custom:fluvy-lock-card",entity:ca.door,variant:"compact",grid_options:{columns:6}})}clock(){return this.card({type:"custom:fluvy-clock-card",variant:"side"})}setDark(e){e!==this.dark&&(this.dark=e,this.real&&this.update(this.real))}update(e){this.real=e,this.preview=this.previewOf(e,this.statesOf(e.states,this.states),this.entitiesOf(e.entities),this.areasOf(e.areas,this.areas),this.themesOf(e.themes,this.dark));for(const t of this.made.values())t.hass=this.preview}},pa=f`:host{display: block;min-height: 100%;container: pn / inline-size;background: var(--fluvy-page);color: var(--fluvy-text);font-family: var(--fluvy-font-sans);}.pn{--pn-inset-top: var(--safe-area-inset-top, env(safe-area-inset-top, 0px));--pn-inset-bottom: var(--safe-area-inset-bottom, env(safe-area-inset-bottom, 0px));--pn-gap: 8px;display: flex;gap: 24px;max-width: 760px;min-height: calc(100dvh - var(--pn-inset-top) - var(--pn-inset-bottom));margin: 0 auto;padding: 12px 16px 16px;box-sizing: border-box;}@container pn (min-width: 648px){.pn{--pn-gap: 12px;padding: 24px;}}.pn-col{display: flex;flex: 1 1 auto;flex-direction: column;gap: 16px;min-width: 0;}.pn.is-side{display: grid;grid-template-columns: minmax(0, 1fr) 400px;grid-template-rows: auto auto 1fr auto;grid-template-areas: 'top .' 'tabs .' 'body aside' 'dock aside';column-gap: 24px;row-gap: 16px;max-width: 1184px;}.pn.is-side > .pn-col{display: contents;}.pn.is-side .pn-top{grid-area: top;}.pn.is-side .pn-tabs{grid-area: tabs;}.pn.is-side .pn-body{grid-area: body;}.pn.is-side .pn-dock{grid-area: dock;}.pn-aside{grid-area: aside;position: sticky;top: calc(24px + var(--pn-inset-top));align-self: start;max-height: calc(100dvh - 48px - var(--pn-inset-top) - var(--pn-inset-bottom));overflow-y: auto;overscroll-behavior: contain;scrollbar-width: thin;scrollbar-color: var(--fluvy-border-strong) transparent;border-radius: var(--fluvy-radius-card);}.pn-gallery, .pn :is(.fv-options, .fv-chips--fill)[style*='repeat(3,']:has(> :nth-child(3):last-child){grid-template-columns: repeat( 3, round(down, calc((100% - 2 * var(--pn-gap)) / 3 + 0.01px), 1px) ) !important;column-gap: var(--pn-gap) !important;justify-content: start;}.pn :is(.fv-options, .fv-chips--fill)[style*='repeat(2,']:has(> :nth-child(2):last-child), .pn :is(.fv-options, .fv-chips--fill)[style*='repeat(2,']:has(> :nth-child(3):last-child){grid-template-columns: repeat( 2, round(down, calc((100% - var(--pn-gap)) / 2 + 0.01px), 1px) ) !important;column-gap: var(--pn-gap) !important;justify-content: start;}.pn-top{display: flex;align-items: center;gap: 12px;min-height: 44px;}.pn-top .fv-ico{background: none;color: var(--fluvy-text);}.pn-titles{min-width: 0;}.pn-title{margin: 0;font-size: 24px;font-weight: 600;line-height: 32px;letter-spacing: -0.01em;}.pn-sub{margin: 0;font-size: 14px;line-height: 20px;color: var(--fluvy-text-secondary);}.pn-tabs{margin: 0 -16px;}.pn-tabs__row{display: flex;gap: 8px;padding: 0 16px;overflow-x: auto;scrollbar-width: none;-webkit-mask-image: linear-gradient( 90deg, var(--pn-fade-start, transparent), #000 24px, #000 calc(100% - 24px), var(--pn-fade-end, transparent) );mask-image: linear-gradient( 90deg, var(--pn-fade-start, transparent), #000 24px, #000 calc(100% - 24px), var(--pn-fade-end, transparent) );}.pn-tabs__row.is-start{--pn-fade-start: #000;}.pn-tabs__row.is-end{--pn-fade-end: #000;}.pn-tabs__row::-webkit-scrollbar{display: none;}.pn-tabs .fv-chip{flex: 0 0 auto;}.pn-tabs .fv-chip__pill{background: var(--fluvy-card);box-shadow: inset 0 0 0 1px var(--fluvy-edge, var(--fluvy-border));color: var(--fluvy-text-secondary);font-size: 14px;}.pn-tabs .fv-chip.is-active .fv-chip__pill{background: var(--fluvy-selected, var(--fluvy-text));color: var(--fluvy-on-selected, var(--fluvy-page));box-shadow: none;}.pn-tabs.is-wide{margin: 0;}.pn-tabs.is-wide .pn-tabs__row{display: grid;grid-template-columns: repeat(6, minmax(max-content, 1fr));column-gap: 8px;justify-content: start;padding: 0;overflow: visible;-webkit-mask-image: none;mask-image: none;}.pn-tabs.is-wide .fv-chip__pill{padding-inline: 8px;}.pn-body{display: flex;flex-direction: column;gap: 16px;}.pn-body.is-new{animation: fv-fade 160ms var(--fv-ease-out) both;}.pn-card{display: flex;flex-direction: column;gap: 12px;}.pn-card.pn-rows{padding-block: 12px;}.pn-line, .pn-label{margin: 4px 0 -4px;}.pn-hint{margin: -8px 0 -4px;font-size: 13px;font-weight: 500;line-height: 20px;color: var(--fluvy-text-secondary);text-wrap: pretty;}.pn-status{display: grid;grid-template-columns: minmax(0, 1fr);gap: 4px;margin-top: 12px;padding: 16px;border-radius: var(--fluvy-radius-control);text-wrap: pretty;}.pn-status--warning{background: var(--fluvy-warning-fill);box-shadow: inset 0 0 0 1px var(--fluvy-warning-fill-border);color: var(--fluvy-warning-on-fill);}.pn-status__title{font-size: 14px;font-weight: 600;line-height: 20px;}.pn-status__text{font-size: 13px;font-weight: 500;line-height: 20px;}.pn-status__btn{justify-self: start;margin-top: 4px;}.pn-status > .pn-status__btn{max-width: 100%;height: auto;min-height: 48px;padding-block: 14px;line-height: 20px;white-space: normal;text-align: center;text-wrap: balance;text-box: normal;}.pn-rows--lead{margin-bottom: 0;}.pn-hint--after{margin: -4px 0 0;}.pn-card .fv-chips{margin-top: -4px;}.pn-label + fluvy-select, .pn-label + .pn-pair{margin-top: -4px;}.pn-card .fv-chips--fill{column-gap: 8px;}@container pn (min-width: 648px){.pn-card .fv-chips--fill{column-gap: 12px;}}.pn .fv-card__head{height: auto;min-height: 44px;}.pn .fv-card__sub, .pn .fv-row__title, .pn .fv-row__sub{white-space: normal;}.pn .fv-row{height: auto;min-height: 60px;padding-block: 8px;box-sizing: border-box;}.pn-card.is-armed .fv-row__title, .pn-reset.is-armed .fv-row__title{color: var(--fluvy-warning);}.pn-chips--static .fv-chip{pointer-events: none;}.pn-swatch__by{display: block;font-size: 11px;font-weight: 500;line-height: 16px;color: var(--fluvy-text-secondary);}.pn-swatch.is-active .pn-swatch__by{color: inherit;opacity: 0.8;}.pn-text{display: block;}.pn-text .pn-label{display: block;margin: 0;}.pn-text .fv-field{display: flex;margin-top: 8px;}.pn-fields{margin-top: 4px;}.pn-preview--wall{position: relative;overflow: hidden;padding: 16px;border-radius: var(--fluvy-radius-lg);background: var(--fluvy-page);}.pn-preview__veil{position: absolute;inset: 0;background: #000;pointer-events: none;}.pn-hint + fluvy-select, .pn-hint + ha-selector{margin-top: 12px;}ha-selector{display: block;}.pn-address{display: grid;gap: 8px;margin-top: -4px;}.pn-address .fv-btn{justify-self: start;}.pn-address__url{display: block;min-height: 44px;padding: 12px 16px;border-radius: var(--fluvy-radius-control);background: var(--fluvy-inset, var(--fluvy-page));box-shadow: inset 0 0 0 1px var(--fluvy-border);font-size: 14px;font-weight: 500;line-height: 20px;overflow-wrap: anywhere;user-select: all;-webkit-user-select: all;}@container pn (min-width: 648px){.pn-address{grid-template-columns: minmax(0, 1fr) auto;align-items: start;}}.pn-preview--wall fluvy-clock-card{display: block;margin-bottom: 16px;}.pn-times{margin-top: 12px;}.pn-rows{display: flex;flex-direction: column;}.pn-room{position: relative;}.pn-room + .pn-room::before{content: '';position: absolute;left: 56px;right: 0;top: 0;height: 1px;background: var(--fluvy-border);}.pn-room .fv-ico{cursor: grab;touch-action: none;}.pn-room__moves{display: flex;flex: 0 0 auto;color: var(--fluvy-text-secondary);}.pn-room.sortable-drag{border-radius: var(--fluvy-radius-control);background: var(--fluvy-card);box-shadow: 0 0 0 1px var(--fluvy-edge, var(--fluvy-border)), var(--fluvy-shadow-lift);}.pn-room.sortable-drag::before{content: none;}.pn-room.sortable-ghost{opacity: 0.4;}.pn-room.sortable-fallback{display: none !important;}.pn-tabsmock{display: flex;align-items: center;gap: 12px;height: 56px;padding-inline: 16px 0;overflow: hidden;border-radius: var(--fluvy-radius-control);background: var(--fluvy-card);box-shadow: inset 0 0 0 1px var(--fluvy-border);}.pn-tabsmock--hidden .pn-tabsmock__title{flex: 1 1 auto;max-width: none;}.pn-tabsmock__actions{display: flex;flex: 0 0 auto;align-items: center;gap: 8px;margin-inline-start: auto;padding-inline-end: 16px;color: var(--fluvy-text);}.pn-tabsmock__actions svg{width: 20px;height: 20px;}.pn-tabsmock__title{flex: 0 0 auto;min-width: 0;max-width: 40%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-size: 20px;font-weight: 600;letter-spacing: -0.01em;line-height: 24px;color: var(--fluvy-text);}.pn-tabsmock__tabs{display: flex;flex: 1 1 auto;align-items: center;align-self: stretch;min-width: 0;overflow: hidden;-webkit-mask-image: linear-gradient(90deg, #000 calc(100% - 24px), transparent);mask-image: linear-gradient(90deg, #000 calc(100% - 24px), transparent);}.pn-tabsmock__tab{position: relative;display: inline-flex;align-items: center;gap: 8px;padding-inline: 12px;align-self: stretch;font-size: 14px;font-weight: 600;line-height: 20px;white-space: nowrap;color: var(--fluvy-text-secondary);}.pn-tabsmock__tab svg{width: 20px;height: 20px;}.pn-tabsmock__tab.is-active{color: var(--fluvy-text);}.pn-tabsmock--fluvy .pn-tabsmock__tab.is-active::after, .pn-tabsmock--ha .pn-tabsmock__tab.is-active::after{content: '';position: absolute;inset: auto 12px 0;height: 2px;background: var(--fluvy-accent);}.pn-tabsmock--ha:not(:has(.pn-tabsmock__title)){padding-inline-start: 0;}.pn-tabsmock--ha .pn-tabsmock__tab{padding-inline: 16px;color: var(--fluvy-text);opacity: 0.8;}.pn-tabsmock--ha .pn-tabsmock__tab svg{width: 24px;height: 24px;}.pn-tabsmock--ha .pn-tabsmock__tab.is-active{opacity: 1;}.pn-tabsmock--ha .pn-tabsmock__tab.is-active::after{inset-inline: 0;background: var(--fluvy-text);}.pn-tabsmock--pills .pn-tabsmock__tabs{gap: 8px;}.pn-tabsmock--pills .pn-tabsmock__tab{align-self: center;height: 36px;padding-inline: 16px;border-radius: var(--fluvy-radius-pill, 9999px);background: var(--fluvy-card);box-shadow: inset 0 0 0 1px var(--fluvy-edge, var(--fluvy-border));}.pn-tabsmock--pills .pn-tabsmock__tab.is-active{background: var(--fluvy-selected, var(--fluvy-text));color: var(--fluvy-on-selected, var(--fluvy-page));box-shadow: none;}.pn-corner{position: relative;display: grid;grid-template-columns: minmax(0, 256px) minmax(min-content, 1fr);height: 72px;overflow: hidden;border-radius: var(--fluvy-radius-control);box-shadow: inset 0 0 0 1px var(--fluvy-border);}.pn-corner::after{content: '';position: absolute;inset: 0;border-radius: inherit;box-shadow: inset 0 0 0 1px var(--fluvy-border);pointer-events: none;}.pn-corner__side{min-width: 0;background: var(--fluvy-card);}.pn-corner__head{min-width: 0;background: var(--fluvy-page);}.pn-corner__row{display: flex;align-items: center;gap: 8px;height: 56px;padding-inline: 12px;box-sizing: border-box;}.pn-corner__head .pn-corner__row{background: var(--fluvy-card);}.pn-corner.is-page .pn-corner__head .pn-corner__row{background: transparent;}.pn-corner__actions{justify-content: flex-end;gap: 8px;padding-inline: 12px 16px;color: var(--fluvy-text);}.pn-corner__actions svg{width: 20px;height: 20px;flex: 0 0 auto;}.pn-corner__title{flex: 1 1 auto;min-width: 0;contain: inline-size;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-size: 20px;font-weight: 600;letter-spacing: -0.01em;line-height: 24px;color: var(--fluvy-text);}@container pn (max-width: 523px){.pn-corner__title{display: none;}}@container pn (max-width: 380px){.pn-corner__actions{gap: 4px;padding-inline: 8px;}}.pn-corner.has-lines .pn-corner__row{box-shadow: inset 0 -1px 0 var(--fluvy-border);}.pn-corner__logo{flex: 0 0 24px;height: 24px;background: center / 24px 24px no-repeat;}.pn-corner__menu{display: inline-flex;flex: 0 0 24px;color: var(--fluvy-text-secondary);}.pn-corner__menu svg{width: 24px;height: 24px;}.pn-corner__name{min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-size: 15px;font-weight: 600;line-height: 24px;color: var(--fluvy-text);}.pn-card .pn-tabs-content{margin-top: 0;}.pn-pair{display: grid;grid-template-columns: minmax(0, 1fr);column-gap: 8px;}.pn-pair:has(> :nth-child(2)){grid-template-columns: repeat(2, round(down, calc((100% - 8px) / 2), 1px));justify-content: space-between;}@container pn (min-width: 648px){.pn-pair:has(> :nth-child(2)){grid-template-columns: repeat(2, round(down, calc((100% - 12px) / 2), 1px));}}@container pn (max-width: 431px){.pn-pair--words:has(> :nth-child(2)){grid-template-columns: minmax(0, 1fr);row-gap: 8px;}}.pn-file{position: relative;overflow: hidden;cursor: pointer;}.pn-file input{position: absolute;inset: 0;opacity: 0;cursor: pointer;}.pn-gallery{display: grid;row-gap: var(--pn-gap);}.pn-swatch{display: flex;flex-direction: column;gap: 8px;padding: 8px 8px 12px;border: 0;border-radius: var(--fluvy-radius-control);background: var(--fluvy-inset, var(--fluvy-page));color: var(--fluvy-text);font: inherit;text-align: left;cursor: pointer;}.pn-swatch.is-active{background: var(--fluvy-accent-fill);color: var(--fluvy-accent-on-fill);}.pn-swatch__name{display: flex;align-items: center;justify-content: space-between;gap: 4px;height: 16px;font-size: 13px;font-weight: 600;line-height: 16px;}.pn-swatch__label{min-width: 0;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}.pn-swatch__name svg{flex: 0 0 16px;width: 16px;height: 16px;}.pn-art{display: block;height: 72px;padding: 8px;box-sizing: border-box;border-radius: var(--fluvy-radius-md);background: var(--sw-page);box-shadow: inset 0 0 0 1px var(--sw-border);}@container pn (min-width: 648px){.pn-gallery .pn-art{height: 96px;}}.pn-art > svg{display: block;width: 100%;height: 100%;}.pn-art__on{fill: var(--sw-fill);}.pn-art__disc{fill: var(--sw-card);}.pn-art__glyph{fill: var(--sw-accent);}.pn-art__tick{stroke: var(--sw-tick);stroke-width: 2;stroke-linecap: round;}.pn-art__off{fill: var(--sw-card);stroke: var(--sw-border);}.pn-art__hl{fill: var(--sw-hl);}.pn-art--new{display: flex;align-items: center;justify-content: center;background: var(--fluvy-card);box-shadow: inset 0 0 0 1px var(--fluvy-border);color: var(--fluvy-text-secondary);}.pn-art--new svg{width: 20px;height: 20px;}.pn-custom{display: flex;align-items: center;gap: 12px;padding: 8px 12px 8px 8px;border: 0;border-radius: var(--fluvy-radius-control);background: var(--fluvy-inset, var(--fluvy-page));color: var(--fluvy-text);font: inherit;text-align: left;cursor: pointer;}.pn-custom .pn-art{flex: 0 0 96px;height: 56px;}.pn-custom__text{display: flex;flex: 1 1 auto;flex-direction: column;min-width: 0;}.pn-custom__title{font-size: 15px;font-weight: 600;line-height: 20px;}.pn-custom__sub{font-size: 13px;font-weight: 500;line-height: 16px;color: var(--fluvy-text-secondary);}.pn-custom__tail{display: inline-flex;color: var(--fluvy-text-secondary);}.pn-custom__tail svg{width: 20px;height: 20px;}.pn-custom.is-active{background: var(--fluvy-accent-fill);color: var(--fluvy-accent-on-fill);}.pn-custom.is-active :is(.pn-custom__sub, .pn-custom__tail){color: var(--fluvy-accent-on-fill);}.pn-custom.is-active .pn-custom__sub{opacity: 0.72;}.pn-dots{--n: 6;--basis: 8px;--cell: clamp( 44px, round(down, calc((100% - (var(--n) - 1) * var(--basis)) / var(--n)), 2px), 56px );display: grid;grid-template-columns: repeat(var(--n), var(--cell));column-gap: round(down, calc((100% - var(--n) * var(--cell)) / (var(--n) - 1)), 1px);row-gap: 8px;justify-items: center;}@container pn (min-width: 704px){.pn-dots:not(.pn-dots--six){--n: 12;}}@container pn (max-width: 355px){.pn-dots{--n: 3;}}.pn-dots--static .pn-dot{pointer-events: none;}.pn-dot{display: inline-flex;align-items: center;justify-content: center;width: 44px;height: 44px;padding: 0;border: 1px solid color-mix(in oklab, var(--dot, var(--fluvy-inset, var(--fluvy-page))) 86%, var(--fluvy-text));border-radius: 50%;background: var(--dot, var(--fluvy-inset, var(--fluvy-page)));color: var(--dot-ink, var(--fluvy-text-secondary));cursor: pointer;}.pn-dot svg{width: 20px;height: 20px;}.pn-hex{padding-right: 0;}.pn-hex__input{font-variant-numeric: tabular-nums;}.pn-hex__well{position: relative;display: inline-flex;flex: 0 0 44px;align-items: center;justify-content: center;height: 44px;cursor: pointer;}.pn-hex__well::before{content: '';width: 24px;height: 24px;border: 1px solid color-mix(in oklab, var(--dot) 86%, var(--fluvy-text));border-radius: 50%;background: var(--dot);}.pn-hex__well input{position: absolute;inset: 0;width: 100%;height: 100%;opacity: 0;cursor: pointer;}.pn-tiles{display: grid;gap: var(--pn-gap);}.pn-tiles__row{display: grid;grid-template-columns: repeat( var(--n), round(down, calc((100% - (var(--n) - 1) * var(--pn-gap)) / var(--n) + 0.01px), 1px) );gap: var(--pn-gap);justify-content: start;}.pn-modes{display: grid;grid-template-columns: repeat(2, round(down, calc((100% - var(--pn-gap)) / 2 + 0.01px), 1px));gap: var(--pn-gap);justify-content: start;}.pn-tiles--static .pn-tile, .pn-sets--static .pn-set{pointer-events: none;}.pn-art--chart{--sw-page: var(--fluvy-card);--sw-border: var(--fluvy-border);--knob-halo: var(--fluvy-card);}@container pn (min-width: 648px){.pn-art--style{height: 96px;}}.pn-art--gauge{display: flex;align-items: center;justify-content: center;height: 116px;}.pn-note{margin: 0;font-size: 13px;font-weight: 500;line-height: 20px;color: var(--fluvy-text-secondary);text-wrap: pretty;}.pn-sets{display: grid;grid-template-columns: minmax(0, 1fr);gap: var(--pn-gap);}.pn-set .pn-custom__title{display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;text-overflow: ellipsis;}.pn-set .pn-art{padding: 8px 12px;}.pn-slot{position: relative;display: inline-flex;align-items: center;justify-content: center;width: 44px;height: 44px;padding: 0;border: 0;border-radius: 50%;background: none;color: var(--dot-ink);cursor: pointer;}.pn-slot::before{content: '';position: absolute;inset: 4px;border: 1px solid color-mix(in oklab, var(--dot) 86%, var(--fluvy-text));border-radius: 50%;background: var(--dot);}.pn-slot svg{position: relative;width: 16px;height: 16px;}.pn-slot.is-active{box-shadow: inset 0 0 0 2px var(--fluvy-accent);}.pn-slot-head{display: flex;flex-wrap: wrap;align-items: center;justify-content: space-between;gap: 4px 8px;}.pn-slot-head__title{font-size: 15px;font-weight: 600;line-height: 20px;}.pn-mark{gap: 4px;}.pn-mark svg{width: 16px;height: 16px;}.pn-check.pn-status{margin-top: 0;}.pn-mode{--knob-halo: var(--fluvy-card);display: grid;align-content: start;gap: 8px;min-width: 0;padding: 12px;border-radius: var(--fluvy-radius-control);background: var(--fluvy-card);box-shadow: inset 0 0 0 1px var(--fluvy-edge, var(--fluvy-border));color: var(--fluvy-text);}.pn-mode__name{margin: 0;}.fc-preview{display: grid;gap: 12px;}.fc-preview__gauge{display: flex;justify-content: center;}:host .pn-day .fc-chart{--fc-boost: 0;}.fc-preview .fc-chart:not(.is-still) ~ .fv-bubble{animation: fv-fade 500ms var(--fv-ease) both;animation-delay: 620ms;}.pn-card--preview{container: pv / inline-size;}.pn-preview{display: grid;grid-template-columns: minmax(0, 1fr);gap: 8px;padding: 12px;border-radius: var(--fluvy-radius-card);background: var(--fluvy-page);color: var(--fluvy-text);}.pn-preview--glass{background: radial-gradient( 60% 40% at 12% 8%, color-mix(in srgb, #ff8a5c 70%, var(--fluvy-page)), transparent 70% ), radial-gradient( 55% 40% at 92% 30%, color-mix(in srgb, #ffd166 70%, var(--fluvy-page)), transparent 70% ), radial-gradient( 60% 45% at 20% 92%, color-mix(in srgb, #2ec4b6 70%, var(--fluvy-page)), transparent 70% ), linear-gradient( 160deg, color-mix(in srgb, #2f5fb3 60%, var(--fluvy-page)), color-mix(in srgb, #6c8ed4 60%, var(--fluvy-page)) );}.pn-preview__tiles{display: grid;grid-template-columns: repeat(2, round(down, calc((100% - 8px) / 2 + 0.01px), 1px));justify-content: space-between;gap: 8px;align-content: start;}.pn-preview__extra{display: none;}.pn-preview__hello{grid-column: 1 / -1;min-width: 0;}@container pv (max-width: 311px){.pn-preview__tiles{grid-template-columns: minmax(0, 1fr);}}@container pv (min-width: 672px){.pn-preview{grid-template-columns: minmax(0, 312px) minmax(0, 312px);justify-content: center;gap: 16px;padding: 16px;}.pn-preview__tiles{grid-template-columns: repeat(2, minmax(0, 152px));}.pn-preview__extra{display: block;}.pn-preview--dash{grid-template-rows: auto 1fr;align-items: start;}.pn-preview__side{grid-column: 2;grid-row: 1 / span 2;}}.pn-dock{position: sticky;bottom: calc(16px + var(--pn-inset-bottom));z-index: 2;display: flex;flex-direction: column;gap: 8px;margin-top: auto;}.pn-dock:empty{display: none;}@container pn (min-width: 648px){.pn-dock{bottom: calc(24px + var(--pn-inset-bottom));}}.pn-foot, .pn-notice{animation: pn-rise 220ms var(--fv-ease-out) both;}.pn-foot.is-leaving{animation: pn-sink 160ms var(--fv-ease) both;}@keyframes pn-rise{from{opacity: 0;transform: translateY(12px);}}@keyframes pn-sink{to{opacity: 0;transform: translateY(12px);}}:host([reduced-motion]) :is(.pn-foot, .pn-notice, .pn-body){animation: none;}@media (prefers-reduced-motion: reduce){:is(.pn-foot, .pn-notice, .pn-body){animation: none;}}.pn-notice{align-self: center;display: inline-flex;align-items: center;height: 44px;border-radius: var(--fluvy-radius-pill, 9999px);white-space: nowrap;background: var(--fluvy-text);color: var(--fluvy-page);font-size: 14px;font-weight: 600;box-shadow: var(--fluvy-shadow-lift);}.pn-bar{display: grid;grid-template-columns: minmax(0, 1fr) auto;grid-template-areas: 'text discard' 'pair pair';align-items: center;gap: 8px;padding: 12px;border-radius: var(--fluvy-radius-card);background: var(--fluvy-card-elevated);box-shadow: var(--fluvy-shadow-lift), inset 0 0 0 1px var(--fluvy-edge, var(--fluvy-border));}.pn-bar--trial{grid-template-areas: 'text discard';}.pn-bar__text{grid-area: text;padding-left: 0;font-size: 15px;font-weight: 600;line-height: 20px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;}.pn-bar__discard{grid-area: discard;}.pn-bar__pair{grid-area: pair;display: grid;grid-template-columns: minmax(0, 1fr);}.pn-bar__pair:has(> :nth-child(2)){grid-template-columns: repeat(2, round(down, calc((100% - 8px) / 2), 1px));justify-content: space-between;}.pn-bar__pair.pn-bar__pair--stack{grid-template-columns: minmax(0, 1fr);gap: 8px;}@container pn (min-width: 760px){.pn-bar{grid-template-columns: minmax(0, 1fr) auto 352px;grid-template-areas: 'text discard pair';}.pn-bar--single{grid-template-columns: minmax(0, 1fr) auto 172px;}.pn-bar--trial{grid-template-columns: minmax(0, 1fr) auto;grid-template-areas: 'text discard';}}`,ha=[f`.pn-preview[fluvy-bg]{position: relative;isolation: isolate;overflow: hidden;}.pn-preview__bg{position: absolute;inset: 0;z-index: -1;overflow: hidden;border-radius: inherit;}`,Oe(jt(e=>`.pn-preview${e} > .pn-preview__bg`))],ua=Array.from({length:24},(e,t)=>{const s=t/23;return Math.round(10*(17.8+6.9*Math.exp(-((s-.62)**2)/.07)-1.4*s))/10}),va={low:ua.map((e,t)=>Math.round(10*(e-1.4-.4*Math.sin(t/3)))/10),high:ua.map((e,t)=>Math.round(10*(e+1.1+.4*Math.cos(t/4)))/10)},ma=Array.from({length:12},(e,t)=>Math.round(100*(.6+3.2*Math.exp(-((t-6)**2)/2)+1.8*Math.exp(-((t-10)**2)/2)))/100),ba=2/3,fa={now:!0,bars:!0,band:!0},ga=e=>({...F,...e}),wa=e=>st(e)?{values:ma}:{values:ua,band:va},_a=(e,t,s)=>z`<div class="fc-plot" style="position:relative;width:${e}px;height:${t}px">
${s}
</div>`,ya={thermo:{value:21.5,unit:"°C",reads:{deviceClass:"temperature",unit:"°C"}},tank:{value:620,max:1e3,unit:"L",rise:240,reads:{deviceClass:"water",unit:"L"}},battery:{rise:18,reads:{deviceClass:"battery",unit:"%"}},pulse:{value:1.8,max:8,unit:"kW",reads:{deviceClass:"power",unit:"kW"}},air:{value:18,max:60,unit:"km/h",reads:{deviceClass:"wind_speed",unit:"km/h"}},sun:{value:2.6,max:6,unit:"kW",reads:{deviceClass:"power",unit:"kW"}}};function $a(e,t,s){const a=tt(e,{},ga(t));return nt({style:a,size:s.size,min:0,max:100,value:62,format:s.format,unit:"%",tone:a.tone??"accent",small:s.small,hass:s.hass,...ya[a.preset]})}var ka=e=>s=>t(e.hass,s),xa=e=>void 0!==e&&e>=72?e:void 0,Sa=Object.keys(ft),Ea=Object.keys(it);function Ta(e,t,s,a){return z`<div class="pn-tiles ${s?"":"pn-tiles--static"}">
${function(e,t){const s=e.wide?4:2,a=[];for(let i=0;i<t.length;i+=s)a.push(t.slice(i,i+s));return a}(e,t).map(t=>{const i=function(e,t){if(e.fit)return xa(Math.floor((e.fit.width-(t-1)*Es(e))/t+.01)-32)}(e,t.length);return z`<div class="pn-tiles__row" style="--n:${t.length}" data-fill-row>
${t.map(e=>z`<button
class="pn-swatch pn-tile ${e.active?"is-active":""}"
data-target
aria-pressed=${e.active?"true":"false"}
tabindex=${s?p:"-1"}
@click=${()=>s?.(e.key)}
>
<span class="pn-art pn-art--chart pn-art--${a} fv-tone--accent"
>${i?e.art(i):p}</span
>
<span class="pn-swatch__name"
><span class="pn-swatch__label">${e.label}</span>${e.active?_e("check"):p}</span
>
</button>`)}
</div>`})}
</div>`}function Aa(e,t){const s=e.shown.charts;return z`<p class="fv-label pn-label">${e.t(t.label)}</p>
${Ts(e,t.choices.map(a=>({key:a.key,label:a.word(e),active:t.chosen(s)===a.key})),e.admin?a=>e.editCharts(t.patch(s,a)):null)}`}var Oa=ut.series.slice(0,6),ja=Oa.map(lt),Ca=(e,t)=>pt(t,e.draft.palette,e.shown.statuses),Da=e=>i(e.draft.palette,e.shown.statuses)[e.mode];function Pa(e,t){return Ge(t)?t.startsWith("graph-")?e.t("charts.series_n",{n:t.slice(6)}):"ok"===t?e.t("statuses.success"):"warning"===t||"danger"===t||"notice"===t?e.t(`statuses.${t}`):Z(e.hass,`tone.${"home"===t?"house":t}`):t}var Ha=[24,34,18,30,22,36];function za(e,t,s,a,i){return z`<button
class="pn-custom pn-set ${s?"is-active":""}"
data-target
aria-pressed=${s?"true":"false"}
tabindex=${a?p:"-1"}
@click=${()=>a?.()}
>
${(e=>z`<span class="pn-art pn-art--chart pn-art--series"
><svg viewBox="0 0 80 40" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
${e.map((e,t)=>d`<rect x=${14*t} y=${40-(Ha[t]??24)} width="10" height=${Ha[t]??24} rx="3" style=${`fill:${e}`} />`)}
</svg></span
>`)(t)}
<span class="pn-custom__text">
<span class="pn-custom__title" ?data-name=${!i}>${e}</span>
${i?z`<span class="pn-custom__sub">${i}</span>`:p}
</span>
${s?z`<span class="pn-custom__tail">${_e("check")}</span>`:p}
</button>`}function Wa(e,t,s){const a=xa(t&&Math.floor((t-Es(e))/2+.01)-24);return z`<div class="pn-modes" data-fill-row>
${["light","dark"].map(t=>z`<div
class="pn-mode ${"dark"===t?"pn-night":"pn-day"} fv-tone--accent"
data-mode=${t}
>
<p class="fv-label pn-mode__name">${e.t(`charts.${t}`)}</p>
${a?s(t,a):p}
</div>`)}
</div>`}function Na(e,t,s){const a=s=>e.setSeriesDraft({...t,...s}),i=Rt(e.settings.chartSets,t.id),r=""!==t.name.trim()&&i,o=Ca(e,t.colours),n=function(e,t,s){return rt(s).map(({a:s,b:a,mode:i})=>e.t(i?`charts.close_${i}`:"charts.close",{a:Pa(e,t[s]??""),b:Pa(e,t[a]??"")}))}(e,t.colours,o),l=t.slot??0,c=t.id;return z`<section class="fv-card pn-card pn-editor">
${j({icon:"palette",title:e.t(c?"charts.editor_edit":"charts.editor_new"),sub:e.t("charts.editor_sub")})}
<label class="pn-text">
<span class="fv-label pn-label">${e.t("charts.name")}</span>
<span class="fv-field"
><input
class="fv-field__input"
type="text"
maxlength=${24}
.value=${t.name}
@input=${e=>a({name:e.target.value})}
/></span>
</label>
<p class="fv-label pn-label">${e.t("charts.colours")}</p>
${function(e,t){const s=Da(e),i=t.slot??0;return z`<div class="pn-dots">
${t.colours.map((t,r)=>{const o=Ge(t);return z`<button
class="pn-slot ${r===i?"is-active":""}"
data-target
style=${`--dot:${o?lt(t):t};--dot-ink:${Ds(o?ct(t,s):t)}`}
aria-label=${`${e.t("charts.colour",{n:r+1})}: ${Pa(e,t)} · ${e.t(o?"charts.follows":"charts.fixed")}`}
aria-pressed=${r===i?"true":"false"}
@click=${()=>a({slot:r})}
>
${_e(o?"palette":"lock")}
</button>`})}
</div>`}(e,t)}
${function(e,t,s){const a=Da(e),i=t.slot??0,r=t.colours[i]??"",o=Ge(r),n=(t,i)=>z`<p class="fv-label pn-label">${e.t(t)}</p>
${Ps(i.map(t=>({key:t,label:Pa(e,t),paint:lt(t),ink:Ds(ct(t,a))})),r,s)}`;return z`<div class="pn-slot-head">
<span class="pn-slot-head__title">${e.t("charts.colour",{n:i+1})}</span>
<span class="fv-badge pn-mark fv-tone--${o?"accent":"neutral"}" data-fit="28"
>${_e(o?"palette":"lock")}${e.t(o?"charts.follows":"charts.fixed")}</span
>
</div>
${n("charts.group_series",ut.series)}
${n("charts.group_tones",ut.tones)}
${n("charts.group_energy",ut.energy)}
<p class="fv-label pn-label">${e.t("charts.custom")}</p>
${Ws(o?ct(r,a):r,e,s,e.t("charts.colour",{n:i+1}))}`}(e,t,e=>a({colours:t.colours.map((t,s)=>s===l?e:t)}))}
${n.length?z`<div class="pn-status pn-status--warning pn-check" role="status">
${n.map(e=>z`<p class="pn-status__text">${e}</p>`)}
</div>`:z`<p class="pn-hint pn-hint--after pn-check">${e.t("charts.check_ok")}</p>`}
${Wa(e,e.fit?.width,(s,a)=>{return i=gt(t.colours,o,s),r=e.shown.charts,_a((n={mode:s,width:a,height:64}).width,n.height,ht({frame:{width:n.width,height:n.height,headroom:4,pad:4},series:i.map((e,t)=>({values:ua.map((e,s)=>e+4.5*t+1.2*Math.sin(s/3+t)),colour:e})),style:at("soft",{fill:"none",glow:!1,show_grid:!1,show_points:"none"},{several:!0},ga(r)),id:`fc-series-${n.mode}`}));var i,r,n})}
${i?p:z`<p class="pn-hint pn-hint--after">${e.t("charts.full")}</p>`}
<div class="pn-pair" data-fill-row>
<button
class="fv-btn fv-btn--quiet"
data-target
@click=${()=>e.setSeriesDraft(void 0)}
>
${e.t("charts.cancel")}
</button>
<button
class="fv-btn fv-btn--accent"
data-target
?disabled=${!r}
@click=${()=>r&&s.saveSet(t)}
>
${e.t("charts.save")}
</button>
</div>
${c?z`<div class="pn-rows">
${le({icon:"trash",title:e.t("charts.delete"),sub:t.name,subName:!0,trailing:"none",onTap:()=>s.removeSet(c)})}
</div>`:p}
</section>`}function La(e,t){return z`${function(e){const t=e.shown.charts,s=e.wide?80:56;return z`<section class="fv-card pn-card">
${j({icon:"chart",title:e.t("charts.style"),sub:e.t(e.admin?"charts.style_sub":"scope.admin_only")})}
${Ta(e,Sa.map(a=>({key:a,label:Z(e.hass,`option.${a}`),active:t.style===a,art:e=>function(e,t,s,a){return _a(s,a,ht({frame:{width:s,height:a,headroom:12,pad:4},series:[wa(e)],style:at(e,{},fa,ga(t)),now:ba,id:`fc-tile-${e}`}))}(a,t,e,s)})),e.admin?t=>e.editCharts({style:t}):null,"style")}
</section>`}(e)} ${function(e){const t=e.shown.charts;return z`<section class="fv-card pn-card">
${j({icon:"thermo",title:e.t("charts.gauge"),sub:e.t(e.admin?"charts.gauge_sub":"scope.admin_only")})}
${Ta(e,Ea.map(s=>({key:s,label:Z(e.hass,`option.${s}`),active:t.gauge===s,art:a=>$a(s,t,{size:"ruler"===s?a:Math.min(a,96),format:ka(e),small:!0,hass:e.hass})})),e.admin?t=>e.editCharts({gauge:t}):null,"gauge")}
</section>`}(e)} ${function(e){const{admin:t}=e,s=e.shown.charts,a=et[s.style],i=Zt.filter(e=>"wave"===e.acts?it[s.gauge].motion:a.includes(e.acts));return z`<section class="fv-card pn-card">
${j({icon:"sliders",title:e.t("charts.details"),sub:e.t(t?"charts.details_sub":"scope.admin_only")})}
${a.length?p:z`<p class="pn-note">${e.t("charts.classic_hint")}</p>`}
${i.map(t=>Aa(e,t))}
<div class="pn-rows">
${le({icon:"motion",title:e.t("charts.motion"),sub:e.t("charts.motion_sub"),trailing:"switch",on:s.animate,readonly:!t,onToggle:t=>e.editCharts({animate:t})})}
</div>
</section>`}(e)} ${function(e){return z`<section class="fv-card pn-card">
${j({icon:"clock",title:e.t("charts.time"),sub:e.t(e.admin?"charts.time_sub":"scope.admin_only")})}
${Kt.map(t=>Aa(e,t))}
<p class="pn-hint pn-hint--after">${e.t("charts.points_hint")}</p>
</section>`}(e)}
${function(e){const{admin:t}=e,s=e.settings.chartSets,a=Ft(s,e.shown.charts.series),i=s=>t?()=>e.editCharts({series:s}):null,r=void 0!==e.seriesDraft,o=Rt(s);return z`<section class="fv-card pn-card">
${j({icon:"palette",title:e.t("charts.series"),sub:e.t(t?"charts.series_sub":"scope.admin_only")})}
<div class="pn-sets ${t?"":"pn-sets--static"}">
${za(e.t("charts.palette"),ja,!a,i(Ve),e.t("charts.palette_sub"))}
${s.map(t=>za(t.name,gt(t.colours,Ca(e,t.colours),e.mode),a?.id===t.id,i(t.id)))}
</div>
${t&&!r?z`<div class="pn-rows">
${a?le({icon:"pencil",title:e.t("charts.edit"),sub:a.name,subName:!0,onTap:()=>e.setSeriesDraft({id:a.id,name:a.name,colours:a.colours})}):p}
${o?le({icon:"plus",tone:"accent",title:e.t("charts.new"),sub:e.t("charts.new_sub"),onTap:()=>e.setSeriesDraft({name:"",colours:Oa})}):p}
</div>
${o?p:z`<p class="pn-hint pn-hint--after">${e.t("charts.full")}</p>`}`:p}
</section>`}(e)} ${e.seriesDraft?Na(e,e.seriesDraft,t):p}`}function Ma(e){const t=new Blob([`${JSON.stringify(e,null,2)}\n`],{type:"application/json"}),s=document.createElement("a");s.href=URL.createObjectURL(t),s.download=R(e),s.click(),setTimeout(()=>URL.revokeObjectURL(s.href),1e3)}function Ra(){const e=window.__fluvy,t=e?.shell?.report();return{version:e?.version??"",shell:t?.active?{styled:t.sheets.filter(e=>e.attached).length,total:t.sheets.length}:null}}var Ia=ie("panel"),Ba=class extends H{static{this.properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},handle:{attribute:!1},tab:{state:!0},draft:{state:!0},houseEdit:{state:!0},personalEdit:{state:!0},strategyEdits:{state:!0},sideEdits:{state:!0},deviceEdit:{state:!0},share:{state:!0},seriesDraft:{state:!0},showAllCommunity:{state:!0},tryOnApp:{state:!0},dashboards:{state:!0},notice:{state:!0},resetArmed:{state:!0},recreateArmed:{state:!0},wide:{state:!0},side:{state:!0},content:{state:!0},meters:{state:!0},leaving:{state:!0},creating:{state:!0},customising:{state:!0},siding:{state:!0},dark:{type:Boolean,reflect:!0},noTheme:{type:Boolean,reflect:!0,attribute:"no-theme"}}}static{this.styles=[...x,dt,pa,...ha]}constructor(){super(),this.beside=!1,this.device=A(),this.previewLanguage="",this.previewing=!1,this.lookSheet=new CSSStyleSheet,this.worn="",this.noticeTimer=0,this.resetTimer=0,this.recreateTimer=0,this.lastEdited="",this.barTimer=0,this.stillTimer=0,this.fontTimer=0,this.loaded=!1,this.ruler=new ne(()=>this.renderRoot),this.barShown=!1,this.centred="",this.entered=!1,this.fading=!1,this.refit=()=>{this.isConnected&&(this.fit(!0),this.ruler.clear(),this.requestUpdate(),this.strip&&this.strip.scrollWidth!==this.stripWidth&&this.centre(this.strip,!0))},this.stripWidth=0,this.t=(e,t)=>Ia(this.hass,e,t),this.run=(e,t)=>{e().then(()=>this.show(this.t(t??"saved")),e=>this.show(e instanceof Error?e.message:String(e)))},this.narrow=!1,this.tab="appearance",this.houseEdit={},this.personalEdit={},this.deviceEdit={},this.strategyEdits={},this.sideEdits={},this.tryOnApp=!1,this.dashboards=[],this.notice="",this.resetArmed=!1,this.recreateArmed="",this.share={title:"",author:""},this.seriesDraft=void 0,this.showAllCommunity=!1,this.wide=!1,this.side=!1,this.content=0,this.leaving=!1,this.creating="",this.customising="",this.siding="",this.dark=!1,this.noTheme=!1}get look(){return this.handle??ue()}connectedCallback(){super.connectedCallback(),Ye(),this.offWords=Ee(()=>this.requestUpdate()),this.resize=new ResizeObserver(e=>{for(const{target:t,contentRect:s}of e)t===this?(this.wide=s.width>=648,this.side=s.width>=1184,this.beside=s.width>=760):this.content=Math.max(0,Math.floor(s.width)-40)}),this.resize.observe(this),this.toggleAttribute("reduced-motion","reduced"===pe()),this.attach()}attach(){const e=this.look;e&&!this.off&&(this.settings=e.settings(),this.draft=this.settings.look,this.off=e.onChange(e=>{const t=this.draft&&this.settings&&!ms(this.draft,this.settings.look);this.settings=e,t||(this.draft=e.look),this.houseEdit=ps(this.houseEdit,e),this.personalEdit=ps(this.personalEdit,e),this.toggleAttribute("reduced-motion","reduced"===pe()),this.requestUpdate()}))}disconnectedCallback(){super.disconnectedCallback(),this.closeSaver?.(),this.customiser?.dispose(),this.sideEditor?.dispose(),this.offWords?.(),this.offWords=void 0,this.off?.(),this.off=void 0,this.resize?.disconnect(),this.resize=void 0,this.column=void 0,this.previewing&&this.look?.preview(null),this.previewing=!1,this.tryOnApp=!1;for(const e of[this.noticeTimer,this.resetTimer,this.recreateTimer,this.barTimer,this.stillTimer,this.fontTimer])clearTimeout(e);document.fonts?.removeEventListener("loadingdone",this.refit),this.stopStrip?.(),this.stopStrip=void 0,this.strip=void 0,this.centred=""}firstUpdated(){const e=this.renderRoot;e.adoptedStyleSheets=[...e.adoptedStyleSheets,this.lookSheet];const t=document.fonts;t?.addEventListener("loadingdone",this.refit),t?.ready.then(this.refit),this.fontTimer=window.setTimeout(this.refit,1200)}willUpdate(e){if(e.has("route")&&this.route){const e=this.route.path.split("/")[1],t="about"===e?"preferences":e;t&&Qt.includes(t)&&(this.tab=t);const[,,s="",a]=this.route.path.split("/"),i="dashboard"===t&&"sidebar"===a;this.customising="dashboard"!==t||i?"":s,this.siding=i?s:""}if(this.customising&&this.hass?.user?.is_admin&&this.loadCustomiser(),this.siding&&this.hass?.user?.is_admin&&this.loadSidebarEditor(),e.has("hass")&&this.hass){this.off||this.attach(),this.dark=this.hass.themes?.darkMode??!1,this.noTheme=""===getComputedStyle(this).getPropertyValue(oe).trim();const t=this.hass.panels;this.loaded&&t===e.get("hass")?.panels||(this.loaded=!0,this.loadDashboards()),this.previewHouse().update(this.hass)}const t=this.houseEdit.statuses??this.settings?.statuses??{},s=`${L(t)}|${this.dark}`;(e.has("draft")||s!==this.worn)&&this.draft&&(this.worn=s,this.lookSheet.replaceSync(o(this.draft,this.dark?"dark":"light",":host",!1,t)+o(this.draft,"dark",".pn-night",!1,t)+o(this.draft,"light",".pn-day",!1,t)),u()),(e.has("tryOnApp")||e.has("houseEdit")||e.has("personalEdit")||e.has("draft")&&this.tryOnApp)&&this.showEdits(),X(this,this.hass?.language);const a=this.pending();this.barShown&&!a&&(this.leaving=!w(),clearTimeout(this.barTimer),this.barTimer=window.setTimeout(()=>this.leaving=!1,160)),a&&(this.leaving=!1),this.barShown=a}fit(e=!1){const t=this.strip,s=t?.scrollLeft??0;I(this.renderRoot,e),t&&t.scrollLeft!==s&&(t.scrollLeft=s)}updated(){this.fit();const e=this.renderRoot.querySelector(".pn-body")??void 0;e!==this.column&&(this.column&&this.resize?.unobserve(this.column),this.column=e,e&&this.resize?.observe(e)),!this.entered&&this.renderRoot.querySelector(".pn-body .fv-card")&&(this.entered=!0,this.stillTimer=window.setTimeout(()=>this.setAttribute("still",""),700)),this.customising&&this.customiser?.updated(this.renderRoot),this.siding&&this.sideEditor?.updated();const t=this.renderRoot.querySelector(".pn-tabs__row");t!==this.strip&&(this.stopStrip?.(),this.strip=t??void 0,this.stopStrip=t?y(t):void 0,this.centred=""),t&&this.centred!==this.tab?this.centre(t,""===this.centred):t&&t.scrollWidth!==this.stripWidth&&this.centre(t,!0)}centre(e,t){this.centred=this.tab,this.stripWidth=e.scrollWidth;const s=e.querySelector(".fv-chip.is-active");if(!s||e.scrollWidth<=e.clientWidth)return this.onStrip(e);const a=e.scrollWidth-e.clientWidth,i=s.offsetLeft-(e.clientWidth-s.offsetWidth)/2,r=i<24?0:a-i<24?a:i;e.scrollTo({left:r,behavior:t||w()?"instant":"smooth"}),t&&this.onStrip(e)}onStrip(e){e.classList.toggle("is-start",e.scrollLeft<=1),e.classList.toggle("is-end",e.scrollLeft>=e.scrollWidth-e.clientWidth-1)}previewHouse(){const e=this.t("preview.living");return this.preview&&this.previewLanguage===e||(this.previewLanguage=e,this.preview=new da({living:this.t("preview.living"),kitchen:this.t("preview.kitchen"),bedroom:this.t("preview.bedroom"),blinds:this.t("preview.blinds"),temperature:this.t("preview.temperature"),solar:this.t("preview.solar"),grid:this.t("preview.grid"),battery:this.t("preview.battery"),alarm:this.t("preview.alarm"),door:this.t("preview.door")}),this.hass&&this.preview.update(this.hass)),this.preview}pending(){return this.tryOnApp||!!this.draft&&!!this.settings&&!ms(this.draft,this.settings.look)||Object.keys(this.houseEdit).length>0||Object.keys(this.personalEdit).length>0||Object.keys(this.strategyEdits).length>0||Object.keys(this.sideEdits).length>0||Object.keys(this.deviceEdit).length>0}showEdits(){const e={...this.tryOnApp&&this.draft?{look:this.draft}:{},...this.houseEdit,...this.personalEdit},t=Object.keys(e).length>0;(t||this.previewing)&&(this.previewing=t,this.look?.preview(t?e:null),this.toggleAttribute("reduced-motion","reduced"===pe()))}show(e){this.notice=e,clearTimeout(this.noticeTimer),this.noticeTimer=window.setTimeout(()=>this.notice="",2400)}async loadDashboards(){const e=this.hass;if(!e)return;const t=Object.values(e.panels??{}).filter(e=>"lovelace"===e.component_name&&e.url_path),s=()=>{const t=e.localize?.("panel.states");return t&&"panel.states"!==t?t:this.t("scope.overview")},a=e.user?.is_admin?await e.callWS({type:"lovelace/dashboards/list"}).catch(()=>[]):[],i=new Map((Array.isArray(a)?a:[]).map(e=>[e.url_path,e]));this.dashboards=await Promise.all(t.map(async t=>{const a=i.get(t.url_path),r=t.icon??a?.icon??void 0,o={urlPath:t.url_path,title:t.title||a?.title||("lovelace"===t.url_path?s():t.url_path),...r?{icon:r}:{},...a?{id:a.id,inSidebar:a.show_in_sidebar}:{},..."yaml"===t.config?.mode?{yaml:!0}:{}},n=await e.callWS({type:"lovelace/config",url_path:"lovelace"===t.url_path?null:t.url_path}).catch(()=>{}),{strategy:l,...c}=n??{},d=Tt(l?.type),p=c[ts],h={...o,...n?{stored:!0}:{},...void 0===p?{}:{sidebar:p}};return l&&d?{...h,strategy:l,template:d,rest:c}:h}));const r={};for(const o of this.dashboards){const e=this.strategyEdits[o.urlPath];if(!e||!o.strategy)continue;const t=this.unsavedStrategy(e,o.strategy);Object.keys(t).length&&(r[o.urlPath]=t)}this.strategyEdits=r,this.sideEdits=Object.fromEntries(Object.entries(this.sideEdits).filter(([e,t])=>{const s=this.dashboards.find(t=>t.urlPath===e);return s&&!ds(s.sidebar??null,t)}))}sidebar(e){this.siding=e,this.customising="",this.route&&T(`${this.route.prefix}/dashboard${e?`/${e}/sidebar`:""}`,!0)}loadSidebarEditor(){this.sideEditorLoading??=import("./sidebar-editor-CzP9TCbx.js").then(e=>e.t).then(({SidebarEditor:e,sidebarEditorStyles:t})=>{const s=this.renderRoot;t.styleSheet&&(s.adoptedStyleSheets=[...s.adoptedStyleSheets,t.styleSheet]),this.sideEditor=new e(this),this.requestUpdate()},e=>{this.sideEditorLoading=void 0,this.siding="",this.show(e instanceof Error?e.message:String(e))})}customise(e){this.customising=e,this.siding="",this.route&&T(`${this.route.prefix}/dashboard${e?`/${e}`:""}`,!0)}loadCustomiser(){this.customiserLoading??=import("./customise-hiqNR0Lq.js").then(e=>e.t).then(({Customiser:e,customiseStyles:t})=>{const s=this.renderRoot;t.styleSheet&&(s.adoptedStyleSheets=[...s.adoptedStyleSheets,t.styleSheet]),this.customiser=new e(this),this.requestUpdate()},e=>{this.customiserLoading=void 0,this.customising="",this.show(e instanceof Error?e.message:String(e))})}previewed(){const e=this.dashboards.filter(e=>e.template);return e.find(e=>e.urlPath===this.lastEdited)??e[0]}async loadMeters(){const e=this.hass;if(!e||void 0!==this.meters)return;this.meters=null;const t=await _t(e).catch(()=>{});if(!t||!At(t))return;const s=xt(t);this.meters={...s.length?{sources:s}:{},...t.homePower?{home:t.homePower}:{}}}unsavedStrategy(e,t){return Object.fromEntries(Object.entries(ps(e,t)).filter(([e,s])=>void 0!==s||e in t))}context(){const e=this.look,t=this.hass,s=this.settings;if(!(e&&t&&s&&this.draft))return;const a=this.draft,i=e=>this.dashboards.find(t=>t.urlPath===e)?.strategy;return{hass:t,t:this.t,admin:t.user?.is_admin??!1,mode:this.dark?"dark":"light",wide:this.wide,fit:this.content>0?{ruler:this.ruler,width:this.content}:void 0,handle:e,settings:s,shown:{...s,...this.houseEdit,...this.personalEdit},draft:a,dirty:!ms(a,s.look),houseEdit:this.houseEdit,personalEdit:this.personalEdit,strategyEdits:this.strategyEdits,sideEdits:this.sideEdits,device:this.device,deviceEdit:this.deviceEdit,saved:e.store.house.palettes,share:this.share,showAllCommunity:this.showAllCommunity,tryOnApp:this.tryOnApp,dashboards:this.dashboards,strategyOf:e=>{const t=i(e);return t&&vs(t,this.strategyEdits[e]??{})},setDraft:t=>{if(this.draft={...this.draft??a,...t},void 0!==t.palette){const s=Ht(t.palette,zt(e.store.house.palettes));s&&(this.share={title:s.title,author:s.author??""})}},editHouse:e=>{this.settings&&(this.houseEdit=ps({...this.houseEdit,...e},this.settings))},editWall:e=>{if(!this.settings)return;const t={...this.houseEdit.wall??this.settings.wall,...e};this.houseEdit=ps({...this.houseEdit,wall:t},this.settings)},editCharts:e=>{if(!this.settings)return;const t={...this.houseEdit.charts??this.settings.charts,...e};this.houseEdit=ps({...this.houseEdit,charts:t},this.settings)},editBackground:e=>{if(!this.settings)return;const t=this.houseEdit.background??this.settings.background,s=ge({...t,...e});this.houseEdit=ps({...this.houseEdit,background:s},this.settings)},seriesDraft:this.seriesDraft,setSeriesDraft:e=>{this.seriesDraft=e},editPersonal:e=>{this.settings&&(this.personalEdit=ps({...this.personalEdit,...e},this.settings))},editStrategy:(e,t)=>{const s=i(e);if(!s)return;const a=this.unsavedStrategy({...this.strategyEdits[e]??{},...t},s),r={...this.strategyEdits};Object.keys(a).length?r[e]=a:delete r[e],this.strategyEdits=r,this.lastEdited=e},sidebarOf:e=>e in this.sideEdits?this.sideEdits[e]??void 0:this.dashboards.find(t=>t.urlPath===e)?.sidebar,editSidebar:(e,t)=>{const s=this.dashboards.find(t=>t.urlPath===e);if(!s?.stored||s.yaml)return;const a={...this.sideEdits};ds(t??null,s.sidebar??null)?delete a[e]:a[e]=t??null,this.sideEdits=a},editDevice:e=>{this.deviceEdit=ps({...this.deviceEdit,...e},this.device)},previewScreensaver:()=>this.previewScreensaver(),setTryOnApp:e=>{this.tryOnApp=e},notify:e=>this.show(this.t(e)),setShare:e=>{this.share={...this.share,...e}},setShowAllCommunity:e=>{this.showAllCommunity=e},apply:e=>this.run(()=>this.save(e)),discard:()=>{this.draft=this.settings?.look,this.houseEdit={},this.personalEdit={},this.strategyEdits={},this.sideEdits={},this.deviceEdit={},this.tryOnApp=!1},run:(e,t)=>this.run(e,t)}}async save(e){const t=this.look,s=this.settings;if(!t||!s||!this.draft)return;const{store:a}=t;if(!ms(this.draft,s.look)){const{palette:t,shape:i,pills:r}=this.draft,o=S(this.draft),n=Je(this.draft);"house"===e?(await a.saveHouse({palette:t,shape:i,pills:r,tabs:o,chrome:n}),s.personalLook&&await a.savePersonal({palette:void 0,shape:void 0,pills:void 0,tabs:void 0,chrome:void 0})):await a.savePersonal({palette:t,shape:i,pills:r,tabs:o,chrome:n})}Object.keys(this.houseEdit).length&&await a.saveHouse(this.houseEdit),Object.keys(this.personalEdit).length&&await a.savePersonal(this.personalEdit);let i=!1;for(const r of/* @__PURE__ */new Set([...Object.keys(this.strategyEdits),...Object.keys(this.sideEdits)])){const e=this.dashboards.find(e=>e.urlPath===r),t=e&&await this.configOf(e);t&&(await(this.hass?.callWS({type:"lovelace/config/save",url_path:"lovelace"===r?null:r,config:t})),i=!0)}if(i&&await this.loadDashboards(),Object.keys(this.deviceEdit).length){const e=this.deviceEdit;this.device=l(e),this.deviceEdit={},void 0!==e.wall&&window.__fluvy?.wall?.refresh?.(),void 0!==e.zoom&&r(this.device.zoom),void 0===e.performance&&void 0===e.dock||t.wearDevice()}this.tryOnApp=!1}async configOf(e){const{urlPath:t,strategy:s}=e,a=this.strategyEdits[t]??{},i=t in this.sideEdits;if(!(i||s&&Object.keys(a).length))return;const r=await(this.hass?.callWS({type:"lovelace/config",url_path:"lovelace"===t?null:t,force:!0}).catch(()=>{})),o=s?this.automatic(e,s,a,r):r;return o&&i?function(e,t){const s=Object.fromEntries(Object.entries(e).filter(([e])=>e!==ts));return null==t?s:{...s,[ts]:t}}(o,this.sideEdits[t]):o}automatic(e,t,s,a){const{strategy:i,...r}=a??{},o="object"!=typeof i||null===i||Array.isArray(i)?void 0:i;return o&&Tt(o.type)?{...r,strategy:vs(o,s)}:us(e,vs(t,s))}themeSource(){const e=this.hass;if(ae(e?.selectedTheme?.theme))return"profile";const t=e?.themes?.theme;return t?ae(t)?"house":"other":null}themeName(){const e=this.hass?.themes?.theme??"";return"default"===e?"Home Assistant":e}leaveTheme(e){const t=this.hass;if(!t)return;const s=e=>this.dispatchEvent(new CustomEvent("settheme",{detail:{theme:e},bubbles:!0,composed:!0}));"other"===e?s(we):"profile"===e?s(""):this.run(async()=>{await t.callService("frontend","set_theme",{name:"default"}),ae(t.themes.default_dark_theme)&&await t.callService("frontend","set_theme",{name:"none",mode:"dark"})})}select(e){this.entered&&(this.fading=!0),this.tab=e,this.route&&T(`${this.route.prefix}/${e}`,!0)}onTabKey(e){const t=Qt.indexOf(this.tab),s="ArrowRight"===e.key?Qt[(t+1)%Qt.length]:"ArrowLeft"===e.key?Qt[(t-1+Qt.length)%Qt.length]:"Home"===e.key?Qt[0]:"End"===e.key?Qt[Qt.length-1]:void 0;s&&(e.preventDefault(),this.select(s),this.updateComplete.then(()=>this.renderRoot.querySelector(`#pn-tab-${s}`)?.focus()))}body(e){switch(this.tab){case"appearance":return Vs(e,{exportPalette:Ma,importPalette:t=>function(e,t,s){e.run(async()=>{const a=O(JSON.parse(await s.text()));if(!a)throw new Error(e.t("share.invalid"));t.setDraft({palette:a.palette}),t.setShare({title:a.title,author:a.author??""})},"share.imported")}(this,e,t),savePalette:t=>function(e,t,s){e.run(()=>t.handle.store.saveHouse({palettes:Nt(t.saved,s)}),"share.saved")}(this,e,t),removePalette:t=>function(e,t,s){e.run(()=>t.handle.store.saveHouse({palettes:Lt(t.saved,s)}),"share.removed")}(this,e,t)});case"charts":return La(e,{saveSet:t=>function(e,t,s){const a=t.settings.chartSets,i=((e,t)=>We({chartSets:[{...e,id:e.id??Mt(e.name,t)}]}).chartSets[0])(s,a);i&&e.run(async()=>{await t.handle.store.saveHouse({chartSets:It(a,i)}),t.setSeriesDraft(void 0),t.editCharts({series:i.id})},"charts.saved")}(this,e,t),removeSet:t=>function(e,t,s){const{charts:a,chartSets:i}=t.settings;e.run(async()=>{await t.handle.store.saveHouse({chartSets:Bt(i,s),...a.series===s?{charts:{...a,series:Ve}}:{}}),t.setSeriesDraft(void 0),t.shown.charts.series===s&&t.editCharts({series:Ve})},"charts.deleted")}(this,e,t)});case"scope":{const t=this.themeSource();return function(e,t){const{shown:s,admin:a}=e,i=a?t=>e.editHouse({scope:t}):null,r=e.dashboards,o=e=>Ie(s,e);return z`<section class="fv-card pn-card">
${j({icon:"globe",title:e.t("scope.title"),...a?{}:{sub:e.t("scope.admin_only")}})}
${ke([{key:"dashboards",glyph:"grid",label:e.t("scope.only"),value:e.t("scope.dashboards"),active:"dashboards"===s.scope},{key:"everywhere",glyph:"ha",label:e.t("scope.everywhere"),value:e.t("scope.ha"),active:"everywhere"===s.scope}],i,Es(e))}
${"everywhere"===s.scope?z`<div class="pn-rows">
${le({icon:"frame",title:e.t("scope.frame"),sub:e.t("scope.frame_sub"),trailing:"switch",on:s.frame,readonly:!a,onToggle:t=>e.editHouse({frame:t})})}
${ye.map(t=>le({icon:Ks[t],title:e.t(`scope.icons_${t}`),sub:e.t(`scope.icons_${t}_sub`),trailing:"switch",on:s.icons[t],readonly:!a,onToggle:a=>e.editHouse({icons:{...s.icons,[t]:a}})}))}
${le({icon:"clock",title:e.t("scope.activity"),sub:e.t("scope.activity_sub"),trailing:"switch",on:s.activity,readonly:!a,onToggle:t=>e.editHouse({activity:t})})}
${le({icon:"chart",title:e.t("scope.history"),sub:e.t("scope.history_sub"),trailing:"switch",on:s.history,readonly:!a,onToggle:t=>e.editHouse({history:t})})}
${le({icon:"info",title:e.t("scope.details"),sub:e.t("scope.details_sub"),trailing:"switch",on:s.details,readonly:!a,onToggle:t=>e.editHouse({details:t})})}
</div>`:p}
${t&&"other"===t.source==("everywhere"===s.scope)?function(e,t){const s="other"===t.source,a="profile"===t.source,i=s||a||e.admin,r=s?"scope.theme_another":a?"scope.theme_profile":"scope.theme_house",o=s?e.t("scope.theme_another_sub",{theme:t.name}):e.t(a?"scope.theme_profile_sub":e.admin?"scope.theme_house_sub":"scope.theme_house_guest");return z`<div class="pn-status pn-status--warning" role="status">
<p class="pn-status__title">${e.t(r,{theme:t.name})}</p>
<p class="pn-status__text">${o}</p>
${i?z`<button
class="fv-btn fv-btn--quiet pn-status__btn"
data-fit="32"
data-target
@click=${t.leave}
>
${e.t(s?"scope.theme_use_fluvy":a?"scope.theme_use":"scope.theme_use_ha")}
</button>`:p}
</div>`}(e,t):p}
</section>
${"dashboards"===s.scope?z`<section class="fv-card pn-card">
${j({icon:"grid",title:e.t("scope.list"),sub:s.dashboards.length?e.t("scope.list_chosen",{n:s.dashboards.length}):e.t("scope.list_auto")})}
<div class="pn-rows">
${r.map(t=>le({icon:t.icon??"grid",title:t.title,sub:`/${t.urlPath}`,trailing:"switch",on:o(t.urlPath),readonly:!a,onToggle:a=>((t,a)=>{const i=s.dashboards.length?s.dashboards:r.map(e=>e.urlPath).filter(e=>o(e)),n=a?[.../* @__PURE__ */new Set([...i,t])]:i.filter(e=>e!==t);e.editHouse({dashboards:n})})(t.urlPath,a)}))}
</div>
</section>`:p}`}(e,t?{source:t,name:this.themeName(),leave:()=>this.leaveTheme(t)}:null)}case"dashboard":return this.pickers??=import("./editor-BW9SHMh8.js").then(e=>e.n).then(e=>e.ensureEditorElements()),this.customising&&e.admin?this.customiser?.render(e,this.customising)??z``:this.siding&&e.admin?this.sideEditor?.render(e,this.siding)??z``:function(e,t){const[s]=e.admin?e.dashboards.filter(e=>!e.template&&e.stored):[];return z`<section class="fv-card pn-card">
${j({icon:"grid",title:e.t("dashboard.title"),sub:e.t("dashboard.sub")})}
<div class="pn-rows">
${kt.map(s=>{const a=e.dashboards.find(e=>e.template?.id===s.id);if(a)return le({icon:a.icon??s.icon,tone:"accent",title:a.title,sub:`/${a.urlPath}`,trailing:"chevron",onTap:()=>t.open(a.urlPath)});const i=t.creating===s.url;return le({icon:s.icon,title:e.t(s.title),sub:e.t(i?"dashboard.creating":e.admin?s.description:"dashboard.missing"),...e.admin?{trailing:"button",button:e.t("dashboard.create"),onTap:i?void 0:()=>t.create(s)}:{trailing:"none"}})})}
${s?Xs(e,s,t,!0):p}
</div>
</section>
${function(e){const t=ea(e);if(t.length<2)return p;const{shown:s,admin:a}=e,{sort:i}=s.rooms,r=s.rooms.order.length>0,o=t=>e.editHouse({rooms:t}),n=t.map(e=>e.area_id),l=(e,t)=>{const s=[...n];s.splice(t,0,...s.splice(e,1)),o({sort:i,order:s})},c=t=>ze(e.hass.floors?.[t.floor_id??""]?.name);return z`<section class="fv-card pn-card">
${j({icon:"rooms",title:e.t("rooms.title"),sub:e.t(a?"rooms.sub":"scope.admin_only")})}
${Ts(e,[...W.map(t=>({key:t,label:e.t(`rooms.${t}`),active:!r&&i===t})),{key:"own",label:e.t("rooms.own"),active:r}],a?e=>o("own"===e?{sort:i,order:n}:{sort:e,order:[]}):null)}
${r?z`${a?z`<p class="pn-hint pn-hint--after">${e.t("rooms.hint")}</p>`:p}
<ha-sortable
no-style
draggable-selector=".pn-room"
handle-selector=".fv-ico"
?disabled=${!a}
@item-moved=${e=>l(e.detail.oldIndex,e.detail.newIndex)}
>
<div class="pn-rows">
${Ue(t,e=>e.area_id,(s,i)=>z`<div class="pn-room" data-room=${s.area_id}>
${le({icon:a?"updown":s.icon??"home",title:s.name,name:!0,...c(s)?{sub:c(s),subName:!0}:{},trailing:a?z`<span class="pn-room__moves">
${[-1,1].map(a=>ve(a<0?"up":"down","bare",e.t(a<0?"rooms.up":"rooms.down",{room:s.name}),e=>((e,t,s)=>{const a=e.currentTarget.getRootNode(),i=`.pn-room[data-room="${CSS.escape(n[t]??"")}"]`;l(t,t+s),requestAnimationFrame(()=>(a.querySelector(`${i} .${ta[s]}:not([disabled])`)??a.querySelector(`${i} .fv-round:not([disabled])`))?.focus())})(e,i,a),i+a<0||i+a>=t.length,ta[a]))}
</span>`:"none"})}
</div>`)}
</div>
</ha-sortable>`:p}
</section>`}(e)}
${e.dashboards.filter(e=>e.template).map(s=>function(e,t,s){const a=t.template,i=e.strategyOf(t.urlPath)??{},r=new Set(Array.isArray(i.hide)?i.hide:[]),o=s.recreateArmed===t.urlPath,[n]="function"==typeof a.views?[]:a.views;return z`<section class="fv-card pn-card ${o?"is-armed":""}">
${j({icon:a.icon,title:t.title,...e.admin?{}:{sub:e.t("scope.admin_only")}})}
<div class="pn-rows pn-rows--lead">
${le({icon:"sliders",tone:void 0===i.edit?"neutral":"accent",title:e.t("dashboard.customise"),sub:e.t(e.admin?void 0===i.edit?"dashboard.customise_sub":"dashboard.customised":"dashboard.customise_admin"),...e.admin?{onTap:()=>s.customise(t.urlPath)}:{trailing:"none"}})}
${e.admin?Xs(e,t,s):p}
</div>
${a.options.map(s=>"areas"!==s.kind||Object.keys(e.hass.areas??{}).length?"choice"===s.kind&&!1===s.when?.(i)?p:"views"===s.kind?z`<p class="fv-label pn-label">${e.t(s.label)}</p>
<div class="pn-rows">
${n?le({icon:n.icon,title:Z(e.hass,n.title),trailing:"value",value:e.t("dashboard.always"),quiet:!0}):p}
${wt(a).map(s=>le({icon:s.icon,title:Z(e.hass,s.title),trailing:"switch",on:!r.has(s.key),readonly:!e.admin,onToggle:a=>{const i=a?[...r].filter(e=>e!==s.key):[...r,s.key];e.editStrategy(t.urlPath,{hide:i.length?i:void 0})}}))}
</div>`:z`<p class="fv-label pn-label">${e.t(s.label)}</p>
${"areas"===s.kind?function(e,t,s){const a=ea(e),i=Array.isArray(s)?new Set(s):null;return Ts(e,a.map(e=>({key:e.area_id,label:e.name,active:!i||i.has(e.area_id)})),e.admin?s=>{const r=new Set(i??a.map(e=>e.area_id));r.has(s)?r.delete(s):r.add(s);const o=0===r.size||a.every(e=>r.has(e.area_id));e.editStrategy(t,{areas:o?void 0:a.map(e=>e.area_id).filter(e=>r.has(e))})}:null)}(e,t.urlPath,i.areas):"caps"===s.kind?function(e,t,s){const a="none"===s;return Ts(e,[{key:"shortened",label:e.t("dashboard.shortened"),active:!a},{key:"none",label:e.t("dashboard.in_full"),active:a}],e.admin?s=>{"none"===s!==a&&e.editStrategy(t,{caps:"none"===s?"none":void 0})}:null)}(e,t.urlPath,i.caps):"entities"===s.kind?function(e,t,s){const a=e=>Array.isArray(e)?e.filter(e=>"string"==typeof e&&""!==e):[];return z`<p class="pn-hint">${e.t("dashboard.exclude_sub")}</p>
<ha-selector
.hass=${e.hass}
.selector=${Qs}
.value=${a(s)}
.disabled=${!e.admin}
@value-changed=${s=>{const i=a(s.detail.value);e.editStrategy(t,{exclude:i.length?i:void 0})}}
></ha-selector>`}(e,t.urlPath,i.exclude):"background"===s.kind?function(e,t,s){const a="object"==typeof s&&null!==s&&!Array.isArray(s),i=s=>e.editStrategy(t,{background:s});return z`${Ts(e,[{key:"house",label:e.t("dashboard.background_house"),active:!a},{key:"own",label:e.t("dashboard.background_own"),active:a}],e.admin?t=>{"own"===t!==a&&i("own"===t?e.shown.background:void 0)}:null)}
${a?Ys(e,ge(s),e.admin?s=>i(ge({...ge(e.strategyOf(t)?.background),...s})):null):p}`}(e,t.urlPath,i.background):function(e,t,s,a){const[i]=s.values,r=s.values.some(e=>e.value===a)?a:i?.value;return Ts(e,s.values.map(t=>({key:String(t.value),label:e.t(t.label,"number"==typeof t.value?{count:t.value}:void 0),active:r===t.value})),e.admin?a=>{const r=s.values.find(e=>String(e.value)===a)?.value;e.editStrategy(t,{[s.key]:r===i?.value?void 0:r})}:null)}(e,t.urlPath,s,i[s.key])}`:p)}
${e.admin?z`<div class="pn-rows">
${t.id?le({icon:"menu",title:e.t("dashboard.sidebar"),trailing:"switch",on:t.inSidebar??!1,onToggle:e=>s.showInSidebar(t.urlPath,e)}):p}
${le({icon:"auto",tone:o?"warning":"neutral",title:e.t(o?"dashboard.recreate_armed":"dashboard.recreate"),sub:e.t(o?"about.reset_cancels":"dashboard.recreate_sub"),trailing:"button",button:e.t("dashboard.recreate_btn"),onTap:()=>s.recreate(t.urlPath)})}
</div>`:p}
</section>`}(e,s,t))}`}(e,{create:t=>function(e,t,s){e.creating||(e.creating=s.url,t.run(async()=>{try{await t.hass.callWS({type:"lovelace/dashboards/create",url_path:s.url,title:`Fluvy · ${t.t(s.title)}`,icon:s.icon,show_in_sidebar:!0,require_admin:!1,mode:"storage"}),await t.hass.callWS({type:"lovelace/config/save",url_path:s.url,config:{strategy:{type:s.type}}}),await e.loadDashboards()}finally{e.creating=""}}))}(this,e,t),recreate:t=>function(e,t,s){const a=e.dashboards.find(e=>e.urlPath===s);if(!a?.template)return;if(e.recreateArmed!==s)return e.recreateArmed=s,clearTimeout(e.recreateTimer),void(e.recreateTimer=window.setTimeout(()=>e.recreateArmed="",4e3));clearTimeout(e.recreateTimer),e.recreateArmed="";const{type:i}=a.template,r=a.strategy?.edit;e.run(async()=>{await t.hass.callWS({type:"lovelace/config/save",url_path:s,config:us(a,{type:i,...void 0===r?{}:{edit:r}})}),await e.loadDashboards()},"dashboard.recreated")}(this,e,t),open:e=>T(`/${e}`),customise:e=>this.customise(e),sidebar:e=>this.sidebar(e),showInSidebar:(t,s)=>function(e,t,s,a){const i=e.dashboards.find(e=>e.urlPath===s)?.id;i&&t.run(async()=>{await t.hass.callWS({type:"lovelace/dashboards/update",dashboard_id:i,show_in_sidebar:a}),await e.loadDashboards()})}(this,e,t,s),creating:this.creating,recreateArmed:this.recreateArmed});case"wall":return function(e){const{shown:t,admin:s,hass:a}=e,i=t.wall,r=t=>e.editWall(t),o=e.deviceEdit.wall??e.device.wall,n=i.dashboards[0]??e.dashboards.find(e=>e.template)?.urlPath??"fluvy-auto",l=`${location.origin}/${n}?kiosk`,c=e.dashboards.filter(e=>"fluvy"!==e.urlPath),d=e=>i.dashboards.length?i.dashboards.includes(e):Ie(t,e),h=function(e){return Object.values(e.states).filter(e=>e.entity_id.startsWith("binary_sensor.")&&["motion","occupancy","presence"].includes(String(e.attributes.device_class??""))).map(t=>({id:t.entity_id,name:String(t.attributes.friendly_name??t.entity_id),area:ze(e.areas?.[je(e,t.entity_id)??""]?.name)})).sort((e,t)=>e.name.localeCompare(t.name))}(a),u=(e,t,s)=>({key:t,label:e,active:s});return z`<section class="fv-card pn-card">
${j({icon:"frame",title:e.t("wall.device"),sub:e.t("wall.device_sub")})}
<div class="pn-rows">
${le({icon:"frame",tone:o?"accent":"neutral",title:e.t("wall.use"),sub:e.t(o?"wall.use_on":"wall.use_off"),trailing:"switch",on:o,onToggle:t=>e.editDevice({wall:t})})}
</div>
${o?p:z`<p class="pn-hint pn-hint--after">${e.t("wall.use_hint")}</p>`}
${ia(e)} ${function(e){return 100===(e.deviceEdit.zoom??e.device.zoom)?p:z`<div class="pn-rows">
${le({icon:"clock",title:e.t("wall.saver_size"),sub:e.t("wall.saver_size_sub"),trailing:"switch",on:e.deviceEdit.screensaverZoom??e.device.screensaverZoom,onToggle:t=>e.editDevice({screensaverZoom:t})})}
</div>`}(e)}
<p class="fv-label pn-label">${e.t("wall.address")}</p>
<div class="pn-address">
<span class="pn-address__url" data-name>${l}</span>
<button
class="fv-btn fv-btn--quiet"
data-fit="32"
data-target
@click=${()=>e.run(async()=>{if(!(await Ss(l)))throw new Error(e.t("wall.copy_failed"))},"wall.copied")}
>
${e.t("wall.copy")}
</button>
</div>
<p class="pn-hint pn-hint--after">${e.t("wall.address_sub")}</p>
</section>
<section class="fv-card pn-card">
${j({icon:"grid",title:e.t("wall.dashboards"),sub:i.dashboards.length?e.t("scope.list_chosen",{n:i.dashboards.length}):e.t("wall.dashboards_auto")})}
<div class="pn-rows">
${c.map(e=>le({icon:e.icon??"grid",title:e.title,sub:`/${e.urlPath}`,trailing:"switch",on:d(e.urlPath),readonly:!s,onToggle:t=>((e,t)=>{const s=i.dashboards.length?i.dashboards:c.map(e=>e.urlPath).filter(e=>d(e));r({dashboards:t?[.../* @__PURE__ */new Set([...s,e])]:s.filter(t=>t!==e)})})(e.urlPath,t)}))}
</div>
</section>
<section class="fv-card pn-card">
${j({icon:"clock",title:e.t("wall.screen"),...s?{}:{sub:e.t("scope.admin_only")}})}
<p class="fv-label pn-label">${e.t("wall.after")}</p>
${Ts(e,q.map(t=>u(0===t?e.t("wall.never"):e.t("wall.minutes",{count:t}),String(t),i.after===t)),s?e=>r({after:Number(e)}):null,e.wide?5:3)}
<div class="pn-rows">
${le({icon:"clock",title:e.t("wall.clock"),sub:e.t("wall.clock_sub"),trailing:"switch",on:i.clock,readonly:!s,onToggle:e=>r({clock:e})})}
${le({icon:"moon",title:e.t("wall.dim"),sub:e.t("wall.dim_sub"),trailing:"switch",on:i.dim,readonly:!s,onToggle:e=>r({dim:e})})}
${le({icon:"eye",title:e.t("wall.try"),sub:e.t("wall.try_sub"),trailing:"button",button:e.t("wall.try_btn"),onTap:()=>e.previewScreensaver()})}
</div>
${h.length?z`<p class="fv-label pn-label">${e.t("wall.wake")}</p>
<fluvy-select
.label=${e.t("wall.wake")}
.value=${i.wakeEntity}
.options=${[{value:"",label:e.t("wall.wake_none")},...h.map(e=>({value:e.id,label:e.name,...e.area?{hint:e.area}:{}}))]}
.disabled=${!s}
@fluvy-change=${e=>r({wakeEntity:e.detail.value})}
></fluvy-select>`:p}
<p class="fv-label pn-label">${e.t("wall.exit")}</p>
<p class="pn-hint">${e.t("wall.exit_sub")}</p>
${Ts(e,[u(e.t("wall.exit_button"),"button","button"===i.exit),u(e.t("wall.exit_hold"),"hold","hold"===i.exit)],s?e=>r({exit:e}):null)}
<p class="fv-label pn-label">${e.t("wall.subview")}</p>
<p class="pn-hint">${e.t("wall.subview_sub")}</p>
${Ts(e,[u(e.t("wall.subview_button"),"button","button"===i.subview),u(e.t("wall.subview_header"),"header","header"===i.subview)],s?e=>r({subview:e}):null)}
</section>
<section class="fv-card pn-card">
${j({icon:"sun",title:e.t("wall.day_night"),...s?{}:{sub:e.t("scope.admin_only")}})}
${ke(["dark","follow","sun","hours"].map(t=>({key:t,glyph:"dark"===t?"moon":"follow"===t?"ha":"sun"===t?"sun":"clock",label:e.t(`wall.theme_${t}`),value:e.t(`wall.theme_${t}_sub`),active:i.theme===t})),s?e=>r({theme:e}):null,Es(e))}
${"hours"===i.theme?z`<div class="pn-pair pn-times">
<fluvy-time-field
.value=${sa(i.from)}
.hour12=${v(a)}
.periods=${N(a)}
.label=${e.t("wall.from")}
.disabled=${!s}
@fluvy-time=${e=>r({from:aa(e.detail.value)})}
></fluvy-time-field>
<fluvy-time-field
.value=${sa(i.to)}
.hour12=${v(a)}
.periods=${N(a)}
.label=${e.t("wall.to")}
.disabled=${!s}
@fluvy-time=${e=>r({to:aa(e.detail.value)})}
></fluvy-time-field>
</div>`:p}
<p class="fv-label pn-label">${e.t("wall.night_dim")}</p>
${Ts(e,xe.map(t=>u(0===t?e.t("wall.off"):e.t("wall.percent",{count:t}),String(t),i.nightDim===t)),s?e=>r({nightDim:Number(e)}):null)}
</section>
<section class="fv-card pn-card">
${j({icon:"palette",title:e.t("wall.background"),sub:e.t(s?"wall.background_sub":"scope.admin_only")})}
${Ts(e,[u(e.t("wall.plain"),"plain","plain"===i.background),u(e.t("wall.mesh"),"wall","wall"===i.background),u(e.t("wall.as_dashboard"),"dashboard","dashboard"===i.background)],s?e=>r({background:e}):null)}
</section>`}(e);case"preferences":return z`${function(e){const{shown:t}=e;return z`<section class="fv-card pn-card">
${j({icon:"person",title:e.t("pref.title"),sub:e.t("pref.sub")})}
<p class="fv-label pn-label">${e.t("pref.language")}</p>
<fluvy-select
.label=${e.t("pref.language")}
.value=${t.language}
.options=${function(e){const t=B[Ze(e.hass.language)];return[{value:"auto",label:e.t("pref.auto"),hint:t.name},...Fe().map(e=>({value:e.code,label:e.name,...e.english!==e.name?{hint:e.english}:{}}))]}(e)}
@fluvy-change=${t=>e.editPersonal({language:t.detail.value})}
></fluvy-select>
<div class="pn-rows">
${le({icon:"motion",title:e.t("pref.reduce"),sub:e.t("pref.reduce_sub"),trailing:"switch",on:"reduced"===t.motion,onToggle:t=>e.editPersonal({motion:t?"reduced":"system"})})}
${le({icon:"hold",title:e.t("pref.hold"),sub:e.t("pref.hold_sub"),trailing:"switch",on:t.holdToSlide,onToggle:t=>e.editPersonal({holdToSlide:t})})}
${le({icon:"haptic",title:e.t("pref.haptics"),sub:e.t("pref.haptics_sub"),trailing:"switch",on:t.haptics,onToggle:t=>e.editPersonal({haptics:t})})}
${le({icon:"clock",title:e.t("pref.activity_card"),sub:e.t("pref.activity_card_sub"),trailing:"switch",on:t.activityCard,onToggle:t=>e.editPersonal({activityCard:t})})}
${le({icon:"globe",title:e.t("pref.translate"),sub:e.t("pref.translate_sub"),onTap:()=>window.open("https://github.com/acosta290/fluvy/blob/main/docs/translating.md","_blank","noopener")})}
</div>
</section>
<section class="fv-card pn-card">
${j({icon:"frame",title:e.t("pref.device"),sub:e.t("pref.device_sub")})}
<div class="pn-rows">
${le({icon:"menu",title:e.t("pref.dock"),sub:e.t("pref.dock_sub"),trailing:"switch",on:e.deviceEdit.dock??e.device.dock,onToggle:t=>e.editDevice({dock:t})})}
${le({icon:"eye",title:e.t("pref.sidebars"),sub:e.t("pref.sidebars_sub"),trailing:"switch",on:e.deviceEdit.hideSidebars??e.device.hideSidebars,onToggle:t=>e.editDevice({hideSidebars:t})})}
</div>
${ia(e)}
<p class="pn-hint pn-hint--after">${e.t("pref.size_sub")}</p>
${function(e){const t=e.deviceEdit.performance??e.device.performance;return z`<p class="fv-label pn-label">${e.t("pref.performance")}</p>
${Ts(e,g.map(s=>({key:s,label:e.t(`pref.performance_${s}`),active:s===t})),t=>e.editDevice({performance:t}),3)}
<p class="pn-hint pn-hint--after">${e.t("pref.performance_sub")}</p>`}(e)}
</section>`}(e)}
${function(e,t,s){const a=gs({palette:Le.palette,shape:Le.shape,pills:Le.pills},e.t),i=s.resetArmed;return z`<section class="fv-card pn-card">
${j({icon:"info",title:e.t("about.title"),sub:e.t("about.version",{version:t.version||"—"})})}
<div class="pn-rows">
${le({icon:"palette",title:e.t("about.look"),trailing:"value",value:gs(e.settings.look,e.t,zt(e.saved))})}
${le({icon:"ha",title:e.t("about.shell"),sub:t.shell?e.t("about.shell_value",{styled:t.shell.styled,total:t.shell.total}):e.t("about.shell_off"),trailing:"none"})}
</div>
<p class="fv-label pn-label">${e.t("about.file")}</p>
<div class="pn-pair pn-pair--words" data-fill-row>
<button class="fv-btn fv-btn--quiet" data-target @click=${s.exportSettings}>
${e.t("about.export")}
</button>
${e.admin?z`<label class="fv-btn fv-btn--quiet pn-file" data-target>
${e.t("about.import")}
<input
type="file"
accept="application/json"
@change=${e=>{const t=e.target,a=t.files?.[0];a&&s.importSettings(a),t.value=""}}
/>
</label>`:p}
</div>
<p class="pn-hint pn-hint--after">${e.t("about.file_sub")}</p>
${e.admin?z`<div class="pn-rows pn-reset ${i?"is-armed":""}">
${le({icon:"auto",tone:i?"warning":"neutral",title:i?e.t("about.reset_armed"):e.t("about.reset"),sub:i?e.t("about.reset_cancels"):e.t("about.reset_sub",{look:a}),trailing:"button",button:e.t("about.reset_btn"),onTap:s.reset})}
</div>`:p}
</section>`}(e,Ra(),{exportSettings:()=>function(e,t){const{house:s,personal:a}=t.handle.store,i=function(e){const t={};for(const s of e.dashboards)s.strategy&&s.template&&(t[s.urlPath]=St(s.strategy,s.template));return t}(e),r={fluvy:1,version:Ra().version,exported:/* @__PURE__ */(new Date).toISOString(),house:s,personal:a,...Object.keys(i).length?{dashboards:i}:{}},o=new Blob([`${JSON.stringify(r,null,2)}\n`],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(o),n.download="fluvy-settings.json",n.click(),setTimeout(()=>URL.revokeObjectURL(n.href),1e3)}(this,e),importSettings:e=>function(e,t){const s=e.look;s&&e.run(async()=>{const a=JSON.parse(await t.text());if(1!==a.fluvy)throw new Error(e.t("about.invalid"));await s.store.saveHouse(We(a.house)),await s.store.savePersonal(be(a.personal));const i="object"==typeof a.dashboards&&null!==a.dashboards?a.dashboards:{},r=e.dashboards.find(e=>e.template?.id===Et.id);r&&void 0!==a.dashboard&&void 0===i[r.urlPath]&&(i[r.urlPath]=a.dashboard);let o=!1;for(const[t,s]of Object.entries(i)){const a=e.dashboards.find(e=>e.urlPath===t),i=a?.template;if(!i)continue;const r=a.strategy?.edit;await(e.hass?.callWS({type:"lovelace/config/save",url_path:t,config:us(a,{type:i.type,...St(s,i),...void 0===r?{}:{edit:r}})})),o=!0}o&&await e.loadDashboards()},"about.imported")}(this,e),reset:()=>function(e){if(!e.resetArmed)return e.resetArmed=!0,clearTimeout(e.resetTimer),void(e.resetTimer=window.setTimeout(()=>e.resetArmed=!1,4e3));clearTimeout(e.resetTimer),e.resetArmed=!1;const t=e.look;t&&e.run(()=>t.store.saveHouse(Le),"about.reset_done")}(this),resetArmed:this.resetArmed})}`}}previewCard(e){const t=this.previewHouse();if("dashboard"===this.tab&&this.customising&&e.admin){const t=e.strategyOf(this.customising),s=this.side?this.customiser?.preview(e,this.customising):void 0,a=this.dashboards.find(e=>e.urlPath===this.customising);return s&&a?Zs(e,this.page("pn-preview",this.pageBackground(e,t),this.dark,s),a.title):void 0}if("dashboard"===this.tab&&this.siding&&e.admin)return;if("dashboard"===this.tab){const t=this.previewed();if(!t)return;this.loadMeters();const s=e.strategyOf(t.urlPath)??{};return Zs(e,this.templatePreview(t.template??Et,s,this.pageBackground(e,s)),t.title)}if("wall"===this.tab){const s=e.shown.wall,a=this.wallNight(s);t.setDark(a);const i=["pn-preview pn-preview--wall","wall"===s.background?"fv-bg--wall":"",a?"pn-night":""].join(" "),r=this.dashboards.find(e=>"wall"===e.template?.id),o="dashboard"===s.background?this.pageBackground(e,r?e.strategyOf(r.urlPath):void 0):void 0;return function(e,t){return z`<section class="fv-card pn-card pn-card--preview">
${j({icon:"eye",title:e.t("preview.title"),sub:e.t("wall.preview_sub")})}
${t}
</section>`}(e,this.page(i,o,a,z`${t.clock()}
<div class="pn-preview__tiles">${t.tile("living")}${t.tile("kitchen")}</div>
${a&&s.nightDim>0?z`<div class="pn-preview__veil" style="opacity:${s.nightDim/100}"></div>`:p}`))}if(t.setDark(void 0),"charts"===this.tab)return function(e,t){return z`<section class="fv-card pn-card pn-card--preview">
${j({icon:"eye",title:e.t("preview.title"),sub:e.t("charts.preview_sub")})}
${Wa(e,t,(t,s)=>function(e,t){const s=ga(e),a={frame:{width:t.width,height:120,headroom:44},series:[{values:ua,band:va}],style:at(void 0,{},{now:!0,band:!0},s),now:ba,id:`fc-preview-${t.mode}-line`},i={value:t.format(ua[ot(a,null).index]),unit:"°C"},r=at(void 0,{},fa,s),o=tt(void 0,{},s).preset;return z`<div class="fc-preview" data-mode=${t.mode}>
${_a(t.width,120,vt(a,null,i,t.family))}
${_a(t.width,64,ht({frame:{width:t.width,height:64,headroom:8,pad:0},series:[{values:ma}],style:r,kind:"bars",now:ba,id:`fc-preview-${t.mode}-bars`}))}
<div class="fc-preview__gauge">
${$a(void 0,e,{size:"ruler"===o?t.width:Math.min(112,t.width),format:t.format,small:!0,hass:t.hass})}
</div>
</div>`}(e.shown.charts,{mode:t,width:s,format:ka(e),hass:e.hass}))}
</section>`}(e,this.side?360:this.content||void 0);if("appearance"!==this.tab&&!this.side)return;const s=e.shown.background,a=e.shown.cards.opacity<100&&ee(s);return function(e,t){return z`<section class="fv-card pn-card pn-card--preview">
${j({icon:"eye",title:e.t("preview.title"),sub:e.t("preview.sub")})}
<div class="pn-rows pn-rows--lead">
${le({icon:"expand",title:e.t("preview.app"),sub:e.t("preview.app_sub"),trailing:"switch",on:e.tryOnApp,onToggle:t=>e.setTryOnApp(t)})}
</div>
${t}
</section>`}(e,this.page("pn-preview "+(a?"pn-preview--glass":""),s,this.dark,z`<div class="pn-preview__hello">${t.hello()}</div>
<div class="pn-preview__tiles">
${t.tile("living")}${t.tile("kitchen")}
<div class="pn-preview__extra">${t.tile("blinds")}</div>
<div class="pn-preview__extra">${t.tile("temperature")}</div>
</div>
${t.thermostat("compact")}`))}pageBackground(e,t){const s=t?.background;return"object"==typeof s&&null!==s?ge(s):e.shown.background}page(e,t,s,a){const i=t&&this.draft?Ct(t,this.draft,s):void 0;return z`<div
class=${e}
fluvy-bg=${i?.type??p}
?fluvy-bg-blur=${i?.blur??!1}
style=${i?Ot(i):p}
>
${i?z`<div class="pn-preview__bg"></div>`:p}${a}
</div>`}wallNight(e){const t=this.hass?.states["sun.sun"];return Qe(e,/* @__PURE__ */new Date,t)??this.dark}previewScreensaver(){this.closeSaver?.();const e={...this.settings?.wall,...this.houseEdit.wall},t=this.hass;if(!t||!this.settings)return;const s=this.wallNight(e),a=document.createElement("div");a.className=s?"pn-night":"",this.renderRoot.append(a);const i=()=>this.hass&&{...this.hass,themes:{...this.hass.themes,darkMode:s}};import("./wall-AkD9i7pj.js").then(e=>e.n).then(({sleep:s})=>{if(!a.isConnected)return;const r=s({clock:e.clock,dim:e.dim,weather:c(t),hass:i,host:a,preview:!0,onWake:()=>this.closeSaver?.(),device:{...this.device,...this.deviceEdit}});this.closeSaver=()=>{this.closeSaver=void 0,r(),a.remove()}})}templatePreview(e,t,s){const a=this.previewHouse(),i=(e,s)=>"string"==typeof t[e]?t[e]:s,r="compact"===i("tile_size","large")?"compact":"large",o=i("tile_switch","show"),n=i("thermostat_variant","dial"),l="detailed"===i("thermostat_state","brief"),c=i("flow_style","stream"),d=i("room_variant","tile"),p=$t(t,"room_"),h=e=>this.page("pn-preview pn-preview--dash",s,this.dark,e);switch(e.id){case"rooms":return h(z`<div class="pn-preview__tiles">
${a.room("living",d,p)}${a.room("kitchen",d,p)}
</div>
<div class="pn-preview__side">${a.thermostat(n,l)}</div>
${a.tile("living",r,o)}`);case"energy":return this.page("pn-preview",s,this.dark,a.energy(c,this.meters??null));case"security":return h(z`<div class="pn-preview__tiles">${a.tile("blinds")}${a.lock()}</div>
<div class="pn-preview__side">${a.alarm()}</div>`);case"wall":return h(z`<div class="pn-preview__tiles">
${a.room("living","tile")}${a.room("kitchen","tile")}
</div>
<div class="pn-preview__side">${a.thermostat(n,l)}</div>
${a.clock()}`);default:return h(z`<div class="pn-preview__tiles">
${a.tile("living",r,o)}${a.tile("kitchen",r,o)}
</div>
<div class="pn-preview__side">${a.thermostat(n,l)}</div>
${a.energy(c,this.meters??null)}`)}}bar(e){const t=xs(e);if(!t.length&&!e.tryOnApp)return;const s=1===t.length?t[0]:t.length?fe(e.hass,"panel.apply.changes",t.length):e.t("apply.trying"),a=e.dirty&&e.admin,i=((this.beside?352:this.content+40-24)-8)/2,r=a&&this.content>0&&[e.t("apply.me"),e.t("apply.house")].some(e=>this.ruler.width("fv-btn",e)+32>i);return z`<div
class="pn-bar ${a?"":"pn-bar--single"} ${t.length?"":"pn-bar--trial"}"
role="region"
aria-label=${e.t("apply.region")}
>
<span class="pn-bar__text">${s}</span>
<button
class="fv-btn fv-btn--quiet pn-bar__discard"
data-target
data-fit="32"
@click=${e.discard}
>
${e.t(t.length?"apply.discard":"apply.stop")}
</button>
${t.length?a?z`<div
class="pn-bar__pair ${r?"pn-bar__pair--stack":""}"
data-fill-row=${r?p:""}
>
<button class="fv-btn fv-btn--quiet" data-target @click=${()=>e.apply("me")}>
${e.t("apply.me")}
</button>
<button
class="fv-btn fv-btn--accent"
data-target
@click=${()=>e.apply("house")}
>
${e.t("apply.house")}
</button>
</div>`:z`<div class="pn-bar__pair" data-fill-row>
<button class="fv-btn fv-btn--accent" data-target @click=${()=>e.apply("me")}>
${e.t(e.dirty?"apply.mine":"apply.save")}
</button>
</div>`:p}
</div>`}tabs(){const e=this.wide,t=z`<div
class="pn-tabs__row ${e?"fv-chips--fill":""}"
role="tablist"
data-scroll-row
@scroll=${e=>this.onStrip(e.currentTarget)}
@keydown=${e=>this.onTabKey(e)}
>
${Qt.map(t=>z`<button
class="fv-chip ${this.tab===t?"is-active":""}"
id="pn-tab-${t}"
role="tab"
aria-selected=${this.tab===t?"true":"false"}
aria-controls="pn-body"
tabindex=${this.tab===t?0:-1}
data-target
data-fit=${e?p:"32"}
@click=${()=>this.select(t)}
>
<span class="fv-chip__pill" data-control>${this.t(`tab.${t}`)}</span>
</button>`)}
</div>`;return z`<nav class="pn-tabs ${e?"is-wide":""}">${Be(e,t)}</nav>`}render(){const e=this.context();if(!e)return z`<div class="pn"></div>`;const t=this.bar(e);t&&(this.lastBar=t);const s=t?z`<div class="pn-foot">${t}</div>`:this.leaving&&this.lastBar?z`<div class="pn-foot is-leaving">${this.lastBar}</div>`:p,a=this.notice?z`<div class="pn-notice" role="status" data-fit="40" data-align="center">
${this.notice}
</div>`:p,i=this.previewCard(e);return z`<div class="pn ${this.wide?"is-wide":""} ${this.side?"is-side":""}">
<div class="pn-col">
<header class="pn-top">
${Xe(this.narrow,this.hass)?Ne("menu","neutral",{label:this.t("menu"),onTap:()=>this.dispatchEvent(new CustomEvent("hass-toggle-menu",{bubbles:!0,composed:!0}))}):p}
<div class="pn-titles">
<h1 class="pn-title">${this.t("title")}</h1>
<p class="pn-sub">${this.t("subtitle")}</p>
</div>
</header>
${this.tabs()}
${Be(this.tab,z`<div
class="pn-body ${this.fading?"is-new":""}"
id="pn-body"
role="tabpanel"
aria-labelledby="pn-tab-${this.tab}"
>
${this.body(e)} ${this.side?p:i??p}
</div>`)}
<div class="pn-dock">${s}${a}</div>
</div>
${this.side&&i?z`<aside class="pn-aside">${i}</aside>`:p}
</div>`}},Fa=/* @__PURE__ */e({FluvyPanel:()=>Ba});customElements.get("fluvy-panel")||customElements.define("fluvy-panel",Ba);var qa=/* @__PURE__ */e({strategyForm:()=>Za}),Ua=ie("panel"),Ya="views";function Ja(e,t){const s=wt(e).length?e.options.filter(e=>"views"===e.kind):[],a=e.options.filter(e=>"choice"===e.kind&&!1!==e.when?.(t));return[...s,...a].slice(0,4)}var Ga=class extends H{constructor(...e){super(...e),this.label=e=>{const t=this.template().options.find(t=>t.key===e.name||"views"===t.kind&&e.name===Ya);return t?Ua(this.hass,t.label):""},this.changed=e=>{e.stopPropagation();const t=this.config;if(!t)return;const{value:s}=e.detail,a=this.template(),i={...t};for(const r of Ja(a,t))if("views"===r.kind){const e=s[Ya],r=new Set(Array.isArray(e)?e:[]),o=wt(a).map(e=>e.key),n=[...(Array.isArray(t.hide)?t.hide:[]).filter(e=>!o.includes(e)),...o.filter(e=>!r.has(e))];n.length?i.hide=n:delete i.hide}else{const[e]=r.values,t=r.values.find(e=>String(e.value)===s[r.key]);t&&t!==e?i[r.key]=t.value:delete i[r.key]}this.config=i,P(this,"config-changed",{config:i})}}static{this.properties={hass:{attribute:!1},config:{state:!0}}}static{this.styles=f`:host{display: block;}a{display: flex;align-items: center;gap: 16px;box-sizing: border-box;min-height: 64px;margin-bottom: 24px;padding: 8px 16px;border: 1px solid var(--divider-color, var(--fluvy-border));border-radius: var(--ha-card-border-radius, var(--fluvy-radius-card, 12px));color: var(--primary-text-color, var(--fluvy-text));text-decoration: none;}a:hover{border-color: var(--primary-color, var(--fluvy-accent));}a:focus-visible{outline: 2px solid var(--primary-color, var(--fluvy-accent));outline-offset: 2px;}svg{flex: 0 0 auto;width: 24px;height: 24px;color: var(--secondary-text-color, var(--fluvy-text-secondary));}.words{display: grid;flex: 1 1 auto;min-width: 0;}.title{font-size: 16px;font-weight: 500;line-height: 24px;}.sub{color: var(--secondary-text-color, var(--fluvy-text-secondary));font-size: 14px;line-height: 20px;}`}setConfig(e){this.config=e}connectedCallback(){super.connectedCallback(),import("./editor-BW9SHMh8.js").then(e=>e.n).then(e=>e.ensureEditorElements()).then(()=>this.requestUpdate())}template(){return Tt(this.config?.type)??Et}schema(e){const t=this.template();return Ja(t,e).map(e=>"views"===e.kind?{name:Ya,selector:{select:{multiple:!0,options:wt(t).map(e=>({value:e.key,label:Z(this.hass,e.title)}))}}}:{name:e.key,selector:{select:{mode:"dropdown",options:e.values.map(e=>({value:String(e.value),label:Ua(this.hass,e.label,"number"==typeof e.value?{count:e.value}:void 0)}))}}})}data(e){const t=this.template(),s=new Set(Array.isArray(e.hide)?e.hide:[]);return Object.fromEntries(Ja(t,e).map(a=>"views"===a.kind?[Ya,wt(t).map(e=>e.key).filter(e=>!s.has(e))]:[a.key,String((a.values.find(t=>t.value===e[a.key])??a.values[0])?.value)]))}render(){const{hass:e,config:t}=this;if(!e||!t)return p;const s=e.panelUrl?`/${encodeURIComponent(e.panelUrl)}`:"";return z`<a href="/fluvy/dashboard${s}">
${h("sliders")}
<span class="words"
><span class="title">${Ua(e,"dashboard.customise")}</span
><span class="sub">${Ua(e,"dashboard.customise_sub")}</span></span
>
${h("chevron")}
</a>
${customElements.get("ha-form")?z`<ha-form
.hass=${e}
.data=${this.data(t)}
.schema=${this.schema(t)}
.computeLabel=${this.label}
@value-changed=${this.changed}
></ha-form>`:p}`}};customElements.get("fluvy-strategy-form")||customElements.define("fluvy-strategy-form",Ga);var Za=()=>document.createElement("fluvy-strategy-form");export{Ss as a,Es as i,Fa as n,ts as o,Ts as r,qa as t};