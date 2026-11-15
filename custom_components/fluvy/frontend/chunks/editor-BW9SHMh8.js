/*! Fluvy v1.21.0 · a theme and card library for Home Assistant · SPDX-License-Identifier: GPL-3.0-only · https://github.com/acosta290/fluvy */
import{t as e}from"./rolldown-runtime-CvjMAzmL.js";import{Ga as t,Hc as s,Kc as i,Qi as a,Ts as r,Vc as o,Wc as n,Za as c,dl as l,nc as h,wi as d}from"./core-CIFC0YYZ.js";import{$ as p,Ct as m,D as u,O as f,S as y,_ as g,_t as b,bt as v,lt as w,n as x,r as k,t as $}from"./fields-NnvUH807.js";var _=/* @__PURE__ */e({FluvyRowsEditor:()=>G,compact:()=>J,editorDefaults:()=>X,ensureEditorElements:()=>j,entryOf:()=>P,formEditor:()=>ee,idKeyOf:()=>C,isSection:()=>N,itemHelpers:()=>L,itemLabels:()=>V,itemOf:()=>W,itemsOf:()=>z,listsEditor:()=>Y,moved:()=>Z,rowsEditor:()=>Q,toItem:()=>A,withChoices:()=>H,withEntities:()=>O,withList:()=>D,withoutLists:()=>T,withoutUntouchedDefaults:()=>B});function H(e,t){return e.map(e=>{if(e.schema)return{...e,schema:H(e.schema,t)};const s=e.selector?.select,i=t[e.name];return s&&i?{...e,selector:{...e.selector,select:{...s,options:[...i]}}}:e})}function O(e,t){return t?e.map(e=>{if(e.schema)return{...e,schema:O(e.schema,t)};const s=e.selector?.entity;return s?{...e,selector:{...e.selector,entity:{...s,include_entities:[...t]}}}:e}):e}var M=e=>e.flatMap(e=>e.schema?M(e.schema):void 0!==e.selector?.entity?[e.name]:[]),S=e=>e?[...e.schema,...Object.values(e.heads??{}).flat()]:[],V=f({color:"editor.color",sub:"editor.sub",secondary:"editor.secondary",low:"editor.low",high:"editor.high",plain:"editor.plain",highlight:"editor.highlight",label:"editor.label",path:"editor.path",meta:"editor.meta",readouts:"editor.readouts",presets:"editor.presets"}).computeLabel,E=e=>e.helper?y(e.helper):void 0,L=e=>E(e)??("secondary"===e.name?y(e.selector?.select?"editor.secondary_helper":"editor.template_helper"):void 0);async function j(){if(!customElements.get("ha-form")||!customElements.get("ha-sortable")){try{await((((await(window.loadCardHelpers?.()))?.createCardElement?.({type:"entities",entities:[]}))?.constructor)?.getConfigElement?.())}catch{}await customElements.whenDefined("ha-form")}}var C=e=>e.idKey??"entity",A=(e,t,s=[])=>{if("string"==typeof e)return e?{[t]:e}:null;if("object"!=typeof e||null===e)return null;const i=e;return"string"==typeof i[t]||s.some(e=>{return"string"==typeof(t=i[e])&&""!==t||Array.isArray(t)&&t.some(e=>"string"==typeof e&&""!==e);var t})?i:null},I=(e,t)=>"auto"===t&&e in x,J=(e,t)=>{const s=Object.keys(e).filter(t=>void 0!==e[t]&&""!==e[t]&&null!==e[t]&&!I(t,e[t]));return 1===s.length&&s[0]===t&&"entity"===t?e[t]:Object.fromEntries(s.map(t=>[t,e[t]]))},N=(e,t)=>Boolean(t.sections)&&"string"!=typeof e[C(t)]&&("section"===e.type||"divider"===e.type),W=(e,t)=>t.read?t.read(e):A(e,C(t),t.also)??(t.sections?(e=>{const t=d(e);return t?"divider"===e.type?{type:"divider"}:{type:"section",label:t.label,line:t.line}:null})(e):null),P=(e,t)=>t.write?t.write(e):N(e,t)?{type:e.type,...e.label?{label:e.label}:{},...!0===e.line?{line:!0}:{}}:J(e,C(t)),z=(e,t,s)=>{const i=e?.[t.key],a=Array.isArray(i)&&i.length?i:t.alias?e?.[t.alias]:i,r=void 0===i&&(!t.alias||void 0===e?.[t.alias]);return(Array.isArray(a)?a:r?s??[]:[]).map(e=>W(e,t)).filter(e=>null!==e)},D=(e,t,s)=>{const i={...e,[t.key]:[...s]};return t.alias&&t.alias!==t.key&&delete i[t.alias],i},F=e=>new Map(e.flatMap(e=>{if(e.schema)return[...F(e.schema)];const t=e.selector?.select;return t?[[e.name,(t.options??[]).map(e=>e?.value??e)]]:[]})),U=(e,t)=>t&&"number"==typeof e||"boolean"==typeof e&&t?.includes(String(e))?String(e):t?.includes("auto")&&t.includes("none")&&"boolean"==typeof e?e?"auto":"none":e,q=(e,t)=>Object.fromEntries(Object.entries(e).map(([e,s])=>[e,U(s,t.get(e))])),K=(e,t,s)=>Object.fromEntries(Object.entries(e).map(([e,i])=>{const a=s.get(e);return[e,"boolean"==typeof t[e]&&i===U(t[e],a)?t[e]:"true"!==i&&"false"!==i||!a?.includes(i)?i:"true"===i]})),B=(e,t,s)=>Object.fromEntries(Object.entries(e).filter(([e,i])=>!(I(e,i)||!(e in t)&&e in s&&((e,t)=>e===t||JSON.stringify(e)===JSON.stringify(t))(i,s[e])))),Z=(e,t,s)=>{const i=[...e],[a]=i.splice(t,1);return void 0!==a&&i.splice(s,0,a),i},G=class extends o{static{this.properties={hass:{attribute:!1},config:{state:!0},spec:{attribute:!1},ready:{state:!0}}}static{this.styles=i`:host{display: block;}.list{margin-top: 24px;}.list__title{margin: 0 0 8px;font-size: 14px;font-weight: 500;color: var(--secondary-text-color);}.list__helper{margin: -4px 0 8px;font-size: 12px;line-height: 16px;color: var(--secondary-text-color);}.list__fields{display: block;margin-bottom: 8px;}.item{display: flex;align-items: flex-start;gap: 4px;padding: 12px 12px 12px 0;margin-bottom: 8px;border-radius: var(--fluvy-radius-lg);background: var(--card-background-color);box-shadow: inset 0 0 0 1px var(--divider-color);}.item ha-form{flex: 1 1 auto;min-width: 0;}.item ha-icon-button{flex: 0 0 auto;margin-top: 4px;color: var(--secondary-text-color);}.item__icon{flex: 0 0 auto;display: inline-flex;align-items: center;justify-content: center;width: 44px;height: 44px;margin: 6px 4px 0 0;border-radius: 50%;background: var(--secondary-background-color);color: var(--primary-text-color);}.item__icon svg{width: 20px;height: 20px;}.handle{flex: 0 0 auto;display: grid;place-items: center;width: 40px;height: 48px;margin-top: 4px;color: var(--secondary-text-color);cursor: grab;touch-action: none;}.handle:active{cursor: grabbing;}.item--entity .handle, .item--entity > ha-icon-button{margin-top: 28px;}.add{margin-top: 8px;}.item__divider{flex: 1 1 auto;display: flex;align-items: center;gap: 12px;height: 56px;font-size: 14px;color: var(--secondary-text-color);}.item__divider::after{content: '';flex: 1 1 auto;height: 1px;background: var(--divider-color);}.more{display: flex;flex-wrap: wrap;gap: 8px;margin-top: 8px;}.more button{height: 36px;padding: 0 16px;border: 1px solid var(--divider-color);border-radius: 18px;background: none;color: var(--primary-color);font: inherit;font-size: 14px;font-weight: 500;cursor: pointer;}.wait{height: 44px;border-radius: var(--fluvy-radius-control);background: var(--divider-color);opacity: 0.4;}`}constructor(){super(),this.pickers=/* @__PURE__ */new WeakMap,this.ownSwitches=/* @__PURE__ */new WeakMap,this.everywhere=/* @__PURE__ */new Set,this.readied=/* @__PURE__ */new Set,this.labelers=/* @__PURE__ */new WeakMap,this.drawn=/* @__PURE__ */new WeakMap,this.itemForms=/* @__PURE__ */new WeakMap,this.ownLabel=e=>{const t=this.spec?.lists.find(t=>t.key===e.name)?.own;return t?this.t(t.label):void 0},this.addLabel=()=>this.t("editor.add"),this.ready=!1}setConfig(e){this.config=a(e,...this.spec?.aliases??[])}connectedCallback(){super.connectedCallback(),j().then(()=>{this.ready=!0})}t(e){return l(this.hass,e)}fallback(e){const t=this.defaults()[e.key];return Array.isArray(t)?t:void 0}items(e){return z(this.config,e,this.fallback(e))}written(e){return this.items(e).map(t=>P(t,e)).filter(e=>null!==e)}commit(e){this.config=e,r(this,"config-changed",{config:e})}defaults(){return this.config&&this.spec?.defaults?this.spec.defaults(this.config,this.hass):{}}schema(e,t,s){const i=v(e.schema,t,this.hass),a=w(i,t,this.hass),r=JSON.stringify([s,i,a]);return this.chosen?.key!==r&&(this.chosen={key:r,schema:m(H(i,s),a)}),this.chosen.schema}head(e,t){const s=v(this.spec?.heads?.[e.key]??[],t,this.hass),i=w(s,t,this.hass),a=JSON.stringify([s,i]),r=this.drawn.get(e);if(r?.key===a)return r.schema;const o=m(s,i);return this.drawn.set(e,{key:a,schema:o}),o}itemSchema(e,t,s,i,a,r){const o=e.schemaOf?.(t,s)??e.schema,n=e.choices?.(t,this.hass),c=w(o,t,this.hass,s),l=`${n?JSON.stringify(n):a}${r?JSON.stringify(r):""}${JSON.stringify(c)}`,h=this.itemForms.get(o)??/* @__PURE__ */new Map;this.itemForms.set(o,h);const d=h.get(l);if(d)return d;const p=O(m(H(o,n??i),c),r);return h.set(l,p),p}scope(e,t,s){if(!s.length||this.everywhere.has(e.key))return;const i=M(e.schema),a=t.flatMap(e=>i.map(t=>e[t]).filter(e=>"string"==typeof e));return[.../* @__PURE__ */new Set([...s,...a])]}onCard(e){e.stopPropagation();const t=this.config;if(!t)return;const s=Object.fromEntries((this.spec?.lists??[]).flatMap(e=>[e.key,e.alias]).filter(e=>Boolean(e)&&void 0!==t[e]).map(e=>[e,t[e]])),i=S(this.spec),a=B(K(u(e.detail.value,t,g(i)),t,F(i)),t,this.defaults());this.commit({...a,...s,type:t.type})}onItem(e,t,s){if(s.stopPropagation(),!this.config)return;const i=this.written(e),a=this.items(e)[t]??{},r=P(u(K(s.detail.value,a,F(e.schema)),a,N(a,e)?[]:g(e.schema),this.config),e);null===r?i.splice(t,1):i[t]=r,this.commit(D(this.config,e,i))}onAdd(e,t){t.stopPropagation();const s=C(e),i=t.detail.value[s];if(!this.config||"string"!=typeof i||!i)return;const a=P({[s]:i},e);null!==a&&(this.commit(D(this.config,e,[...this.written(e),a])),this.requestUpdate())}onMove(e,t){t.stopPropagation(),this.config&&this.commit(D(this.config,e,Z(this.written(e),t.detail.oldIndex,t.detail.newIndex)))}removeItem(e,t){this.config&&this.commit(D(this.config,e,this.written(e).filter((e,s)=>s!==t)))}picker(e,t,s,i){const a=`${s}${i?JSON.stringify(i):""}`,r=this.pickers.get(e);if(r?.key===a)return r.schema;const o=C(e),n=e.domains??(e.schema[0]?.selector)?.entity?.domain,c=O(H([e.picker??("entity"===o?{name:"entity",selector:{entity:n?{domain:[...n]}:{}}}:{name:o,selector:{text:{}}})],t),i);return this.pickers.set(e,{key:a,schema:c}),c}ownSwitch(e){let t=this.ownSwitches.get(e);return t||(t=[{name:e.key,selector:{boolean:{}}}],this.ownSwitches.set(e,t)),t}onOwn(e,t){t.stopPropagation(),!1===t.detail.value[e.key]?this.everywhere.add(e.key):this.everywhere.delete(e.key),this.requestUpdate()}addSection(e,t){this.config&&this.commit(D(this.config,e,[...this.written(e),{type:t}]))}labeler(e){let t=this.labelers.get(e);if(!t){const s=this.spec?.computeLabel;t=(t,i)=>e.computeLabel?.(t,i)??s?.(t,i)??V(t,i),this.labelers.set(e,t)}return t}helper(e,t){const s=this.spec?.computeHelper;return(i,a)=>e.computeHelper?.(i,a,t,this.hass)??s?.(i,a)??L(i,a)}renderList(e,t,i,a){const r=this.items(e),o=this.head(e,a.asked),c=e.own&&this.config?e.own.entities(this.config,this.hass):[],l=this.scope(e,r,c);return e.ready&&!this.readied.has(e.key)&&(this.readied.add(e.key),e.ready().then(()=>this.requestUpdate())),n`<div class="list">
<p class="list__title">${this.t(e.title)}</p>
${e.helper?n`<p class="list__helper">${this.t(e.helper)}</p>`:s}
${o.length?n`<ha-form
class="list__fields"
.hass=${this.hass}
.data=${a.data}
.schema=${o}
.computeLabel=${this.spec?.computeLabel}
.computeHelper=${a.helper}
@value-changed=${this.onCard}
></ha-form>`:s}
${c.length?n`<ha-form
class="list__fields"
.hass=${this.hass}
.data=${{[e.key]:!this.everywhere.has(e.key)}}
.schema=${this.ownSwitch(e)}
.computeLabel=${this.ownLabel}
@value-changed=${t=>this.onOwn(e,t)}
></ha-form>`:s}
<ha-sortable
handle-selector=".handle"
@item-moved=${t=>this.onMove(e,t)}
>
<div class="items">
${r.map((r,o)=>{const c=N(r,e),d=c&&"divider"===r.type,m=c?"labels"===e.sections?$:k:this.itemSchema(e,r,a.asked,t,i,l);return n`<div class="item ${(e=>void 0!==(e.schema[0]?.selector)?.entity)(e)&&!c?"item--entity":""}">
<div class="handle" aria-hidden="true">
<ha-svg-icon .path=${"M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"}></ha-svg-icon>
</div>
${e.rowIcon&&!c?n`<span class="item__icon" aria-hidden="true">${h(e.rowIcon(r),"grid")}</span>`:s}
${d?n`<span class="item__divider">${this.t("editor.divider")}</span>`:n`<ha-form
.hass=${this.hass}
.data=${q(b(r,c?[]:g(e.schema),a.asked),F(m))}
.schema=${m}
.computeLabel=${c?p.computeLabel:this.labeler(e)}
.computeHelper=${this.helper(e,r)}
@value-changed=${t=>this.onItem(e,o,t)}
></ha-form>`}
<ha-icon-button
.label=${this.t("editor.remove")}
@click=${()=>this.removeItem(e,o)}
><ha-icon icon="mdi:close"></ha-icon
></ha-icon-button>
</div>`})}
</div>
</ha-sortable>
<div class="add">
<ha-form
.hass=${this.hass}
.data=${{}}
.schema=${this.picker(e,t,i,l)}
.computeLabel=${this.addLabel}
@value-changed=${t=>this.onAdd(e,t)}
></ha-form>
</div>
${e.sections?n`<div class="more">
<button type="button" @click=${()=>this.addSection(e,"section")}>
${this.t("editor.add_section")}
</button>
${"labels"===e.sections?s:n`<button type="button" @click=${()=>this.addSection(e,"divider")}>
${this.t("editor.add_divider")}
</button>`}
</div>`:s}
</div>`}render(){const e=this.spec;if(!e||!this.config)return s;if(!this.ready)return n`<div class="wait"></div>`;const t=t=>Object.fromEntries(Object.entries(t).filter(([t])=>!e.lists.some(e=>e.key===t||e.alias===t))),i=this.defaults(),a=S(e),r=b(q({...t(i),...t(this.config)},F(a)),g(a)),o={...i,...this.config},c=e.choices?.(this.config,this.hass)??{},l=JSON.stringify(c),h=e.computeHelper,d=(e,t)=>h?.(e,t,r,this.hass)??E(e);return n`
<ha-form
.hass=${this.hass}
.data=${r}
.schema=${this.schema(e,o,c)}
.computeLabel=${e.computeLabel}
.computeHelper=${d}
@value-changed=${this.onCard}
></ha-form>
${e.lists.filter(e=>e.when?.(o,this.hass)??!0).map(e=>this.renderList(e,c,l,{data:r,asked:o,helper:d}))}
`}};function Q(e){const t=document.createElement("fluvy-rows-editor");return t.spec=e,t}var R=(e,t)=>e.flatMap(e=>e.schema?R(e.schema,t):t.has(e.name)?[e]:[]);function T(e,t){return e.flatMap(e=>{if(t.has(e.name))return[];if(e.schema){const s=T(e.schema,t);return s.length?[{...e,schema:s}]:[]}return[e]})}function X(e,s){const i=(t,s=e.schema)=>s.some(e=>e.name===t||i(t,e.schema??[])),a={...i("show_icon")?{show_icon:"auto"}:{},...i("hide_empty")?{hide_empty:!1}:{}},r=i("card_opacity"),o=i("unavailable"),n=i("slider_style");return Object.keys(a).length||r||o||n?(e,i)=>({...a,...r?{card_opacity:t().opacity,card_border:t().border}:{},...o?{unavailable:t().unavailable}:{},...n?{slider_style:"house",slider_words:c().words}:{},...s?.(e,i)}):s}function Y(e,t,s,i,a){const r=new Set(t.flatMap(e=>[e.key,...e.alias?[e.alias]:[]])),o=t.filter(e=>e.fields?.length),n=X(e,s);return Q({schema:T(e.schema,/* @__PURE__ */new Set([...r,...o.flatMap(e=>e.fields??[])])),lists:t,...o.length?{heads:Object.fromEntries(o.map(t=>[t.key,R(e.schema,new Set(t.fields))]))}:{},computeLabel:(t,s)=>e.computeLabel?.(t,s),...e.computeHelper?{computeHelper:e.computeHelper}:{},...n?{defaults:n}:{},...i?.length?{aliases:i}:{},...a?{choices:a}:{}})}function ee(e,t){return Y(e,[],t)}customElements.get("fluvy-rows-editor")||customElements.define("fluvy-rows-editor",G);export{_ as n,G as t};