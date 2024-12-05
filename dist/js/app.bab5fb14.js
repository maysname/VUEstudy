(function(){"use strict";var e={1431:function(e,t,o){var n=o(5130),i=o(6768),d=o(4232);const l={id:"app"},a={"aria-labelledby":"list-summary",class:"stack-large"},s={key:0},r={key:1};function u(e,t,o,n,u,c){const m=(0,i.g2)("el-button"),b=(0,i.g2)("to-do-form"),f=(0,i.g2)("to-do-item"),h=(0,i.g2)("to-do-item-edit-form");return(0,i.uX)(),(0,i.CE)("div",l,[t[1]||(t[1]=(0,i.Lk)("h1",null,"My To-Do List",-1)),(0,i.bF)(b,{onTodoAdded:c.addToDo},{default:(0,i.k6)((()=>[(0,i.bF)(m,{type:"primary",onClick:c.addToDo},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Add")]))),_:1},8,["onClick"])])),_:1},8,["onTodoAdded"]),(0,i.Lk)("h2",{id:"list-summary",ref:"listSummary",tabindex:"-1"},(0,d.v_)(c.listSummary),513),(0,i.Lk)("ul",a,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(u.ToDoItems,(e=>((0,i.uX)(),(0,i.CE)("li",{key:e.id},[e.isEditing?((0,i.uX)(),(0,i.CE)("div",r,[(0,i.bF)(h,{id:e.id,label:e.label,onItemEdited:t=>c.editToDo(e.id,t),onEditCancelled:t=>c.cancelEdit(e.id)},null,8,["id","label","onItemEdited","onEditCancelled"])])):((0,i.uX)(),(0,i.CE)("div",s,[(0,i.bF)(f,{label:e.label,done:e.done,id:e.id,onCheckboxChanged:t=>c.updateDoneStatus(e.id),onItemDeleted:t=>c.deleteToDo(e.id),onItemEdited:t=>c.editToDo(e.id,t)},null,8,["label","done","id","onCheckboxChanged","onItemDeleted","onItemEdited"])]))])))),128))]),t[2]||(t[2]=(0,i.Lk)("div",{id:"chart"},null,-1))])}o(4114),o(8992),o(4520),o(2577);const c={key:0,class:"stack-small"},m={class:"custom-checkbox"},b=["id","checked"],f=["for"],h={class:"btn-group"},p={class:"visually-hidden"},v={class:"visually-hidden"};function k(e,t,o,n,l,a){const s=(0,i.g2)("to-do-item-edit-form");return l.isEditing?((0,i.uX)(),(0,i.Wv)(s,{key:1,id:o.id,label:o.label,onItemEdited:a.itemEdited,onEditCancelled:a.editCancelled},null,8,["id","label","onItemEdited","onEditCancelled"])):((0,i.uX)(),(0,i.CE)("div",c,[(0,i.Lk)("div",m,[(0,i.Lk)("input",{type:"checkbox",class:"checkbox",id:o.id,checked:a.isDone,onChange:t[0]||(t[0]=t=>e.$emit("checkbox-changed"))},null,40,b),(0,i.Lk)("label",{for:o.id,class:"checkbox-label"},(0,d.v_)(o.label),9,f)]),(0,i.Lk)("div",h,[(0,i.Lk)("button",{type:"button",class:"btn",ref:"editButton",onClick:t[1]||(t[1]=(...e)=>a.toggleToItemEditForm&&a.toggleToItemEditForm(...e))},[t[3]||(t[3]=(0,i.eW)(" Edit ")),(0,i.Lk)("span",p,(0,d.v_)(o.label),1)],512),(0,i.Lk)("button",{type:"button",class:"btn btn__danger",onClick:t[2]||(t[2]=(...e)=>a.deleteToDo&&a.deleteToDo(...e))},[t[4]||(t[4]=(0,i.eW)(" Delete ")),(0,i.Lk)("span",v,(0,d.v_)(o.label),1)])])]))}const y={class:"edit-label"},g=["id"],E={class:"btn-group"},T={class:"visually-hidden"},C={type:"submit",class:"btn btn__primary"},D={class:"visually-hidden"};function I(e,t,o,l,a,s){return(0,i.uX)(),(0,i.CE)("form",{class:"stack-small",onSubmit:t[2]||(t[2]=(0,n.D$)(((...e)=>s.onSubmit&&s.onSubmit(...e)),["prevent"]))},[(0,i.Lk)("div",null,[(0,i.Lk)("label",y,'Edit Name for "'+(0,d.v_)(o.label)+'"',1),(0,i.bo)((0,i.Lk)("input",{id:o.id,ref:"labelInput",type:"text",autocomplete:"off","onUpdate:modelValue":t[0]||(t[0]=e=>a.newLabel=e)},null,8,g),[[n.Jo,a.newLabel,void 0,{lazy:!0,trim:!0}]])]),(0,i.Lk)("div",E,[(0,i.Lk)("button",{type:"button",class:"btn",onClick:t[1]||(t[1]=(...e)=>s.onCancel&&s.onCancel(...e))},[t[3]||(t[3]=(0,i.eW)(" Cancel ")),(0,i.Lk)("span",T,"editing "+(0,d.v_)(o.label),1)]),(0,i.Lk)("button",C,[t[4]||(t[4]=(0,i.eW)(" Save ")),(0,i.Lk)("span",D,"edit for "+(0,d.v_)(o.label),1)])])],32)}var L={props:{label:{type:String,required:!0},id:{type:String,required:!0}},data(){return{newLabel:this.label}},methods:{onSubmit(){this.newLabel&&this.newLabel!==this.label?this.$emit("item-edited",this.newLabel):this.onCancel()},onCancel(){this.$emit("edit-cancelled")}},mounted(){const e=this.$refs.labelInput;e.focus()}},_=o(1241);const S=(0,_.A)(L,[["render",I],["__scopeId","data-v-0911d38c"]]);var w=S;const x=(e,t)=>{window.confirm(e)&&t()};var O={props:{label:{required:!0,type:String},done:{default:!1,type:Boolean},id:{required:!0,type:String}},components:{ToDoItemEditForm:w},data(){return{isEditing:!1}},methods:{deleteToDo(){x(`是否确认删除待办事项 "${this.label}"？`,(()=>{this.$emit("item-deleted")}))},toggleToItemEditForm(){console.log(this.$refs.editButton),this.isEditing=!0},itemEdited(e){this.$emit("item-edited",e),this.isEditing=!1,this.focusOnEditButton()},editCancelled(){this.isEditing=!1,this.focusOnEditButton()},focusOnEditButton(){this.$nextTick((()=>{const e=this.$refs.editButton;e?e.focus():console.error("无法获取编辑按钮元素，焦点设置失败")}))}},computed:{isDone(){return this.done}}};const $=(0,_.A)(O,[["render",k],["__scopeId","data-v-f711b59a"]]);var A=$;function F(e,t,o,d,l,a){return(0,i.uX)(),(0,i.CE)("form",{onSubmit:t[1]||(t[1]=(0,n.D$)(((...e)=>a.onSubmit&&a.onSubmit(...e)),["prevent"]))},[t[2]||(t[2]=(0,i.Lk)("h2",{class:"label-wrapper"},[(0,i.Lk)("label",{for:"new-todo-input",class:"label__lg"}," What needs to be done? ")],-1)),(0,i.bo)((0,i.Lk)("input",{type:"text",id:"new-todo-input",name:"new-todo",autocomplete:"off","onUpdate:modelValue":t[0]||(t[0]=e=>l.label=e),class:"input__lg"},null,512),[[n.Jo,l.label,void 0,{lazy:!0,trim:!0}]]),t[3]||(t[3]=(0,i.Lk)("button",{type:"submit",class:"btn btn__primary btn__lg"},"Add",-1))],32)}var j={methods:{onSubmit(){""!==this.label&&(this.$emit("todo-added",this.label),this.label="")}},data(){return{label:""}}};const B=(0,_.A)(j,[["render",F]]);var X=B,W=o(47),q=o(9671),z=o(5588),M={name:"app",components:{ToDoItem:A,ElButton:W.S2,ToDoForm:X},data(){return{ToDoItems:[{id:"todo-"+(0,z.Ak)(),label:"Learn Vue",done:!1},{id:"todo-"+(0,z.Ak)(),label:"Create a Vue project with the CLI",done:!0},{id:"todo-"+(0,z.Ak)(),label:"Have fun",done:!0},{id:"todo-"+(0,z.Ak)(),label:"Create a to-do list",done:!1}]}},methods:{addToDo(e){this.ToDoItems.push({id:"todo-"+(0,z.Ak)(),label:e,done:!1})},updateDoneStatus(e){const t=this.ToDoItems.find((t=>t.id===e));t.done=!t.done},deleteToDo(e){const t=this.ToDoItems.findIndex((t=>t.id===e));this.ToDoItems.splice(t,1),this.$refs.listSummary.focus()},editToDo(e,t){const o=this.ToDoItems.find((t=>t.id===e));o.label=t},cancelEdit(e){const t=this.ToDoItems.find((t=>t.id===e));t.isEditing=!1},initChart(){const e=document.getElementById("chart"),t=q.Ts(e),o=this.ToDoItems.filter((e=>e.done)).length,n=this.ToDoItems.length,i={title:{text:"待办事项完成情况"},series:[{name:"完成情况",type:"pie",data:[{value:o,name:"已完成"},{value:n-o,name:"未完成"}]}],dataZoom:[{type:"inside",start:0,end:100}]};t.setOption(i)}},computed:{listSummary(){const e=this.ToDoItems.filter((e=>e.done)).length;return`${e} out of ${this.ToDoItems.length} items completed`}},mounted(){this.initChart(),this.$watch("ToDoItems",(()=>{this.initChart()}),{deep:!0})}};const P=(0,_.A)(M,[["render",u]]);var V=P,J=o(7813);o(4188);const U=(0,n.Ef)(V);U.use(J.A),U.mount("#app")}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var d=t[n]={exports:{}};return e[n].call(d.exports,d,d.exports,o),d.exports}o.m=e,function(){var e=[];o.O=function(t,n,i,d){if(!n){var l=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],d=e[u][2];for(var a=!0,s=0;s<n.length;s++)(!1&d||l>=d)&&Object.keys(o.O).every((function(e){return o.O[e](n[s])}))?n.splice(s--,1):(a=!1,d<l&&(l=d));if(a){e.splice(u--,1);var r=i();void 0!==r&&(t=r)}}return t}d=d||0;for(var u=e.length;u>0&&e[u-1][2]>d;u--)e[u]=e[u-1];e[u]=[n,i,d]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,d,l=n[0],a=n[1],s=n[2],r=0;if(l.some((function(t){return 0!==e[t]}))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(s)var u=s(o)}for(t&&t(n);r<l.length;r++)d=l[r],o.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return o.O(u)},n=self["webpackChunkmoz_todo_vue"]=self["webpackChunkmoz_todo_vue"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(1431)}));n=o.O(n)})();
//# sourceMappingURL=app.bab5fb14.js.map