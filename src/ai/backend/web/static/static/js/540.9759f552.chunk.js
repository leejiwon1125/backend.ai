"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[540,502],{61502:function(e,n,t){t.r(n),t.d(n,{default:function(){return K},useShadowRoot:function(){return U},useWebComponentInfo:function(){return $}});var o=t(29439),r=t(74165),i=t(15861),a=t(24530),l=t(24717),s=t(61724);function c(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0,o=(0,a.Qc)(e),r=(0,l.Vn)(o,{Field:{enter:function(e){var o;if(null!==e&&void 0!==e&&null!==(o=e.directives)&&void 0!==o&&o.find((function(e){var o,r,i,a,l=e.name.value,s=null===(o=e.arguments)||void 0===o?void 0:o[0].name.value,c=null===(r=e.arguments)||void 0===r||null===(i=r[0].value)||void 0===i?void 0:i.value,u=null===(a=e.arguments)||void 0===a?void 0:a[0];if("since"===l&&"version"===s){if(t(c))return!0}else if("deprecatedSince"===l&&"version"===s){var d="StringValue"===(null===u||void 0===u?void 0:u.value.kind)?null===u||void 0===u?void 0:u.value.value:n[null===u||void 0===u?void 0:u.value.name.value];if(!t(d))return!0}else if("skipOnClient"===l&&"if"===s){if("BooleanValue"===(null===u||void 0===u?void 0:u.value.kind)&&u.value.value)return!0;if("Variable"===(null===u||void 0===u?void 0:u.value.kind)&&n[u.value.name.value])return!0}return!1})))return null},leave:function(e){var n;if(e.selectionSet&&"SelectionSet"===e.selectionSet.kind&&0===(null===(n=e.selectionSet.selections)||void 0===n?void 0:n.length))return null}},Directive:{leave:function(e){var n=e.name.value;if(["since","deprecatedSince","skipOnClient"].includes(n))return null}}}),i={};return(0,l.Vn)(r,{Variable:function(e){i[e.name.value]=(i[e.name.value]||0)+1}}),r=(0,l.Vn)(r,{VariableDefinition:{enter:function(e){if(i[e.variable.name.value]<=1)return null}}}),(0,s.S)(r)}var u=t(41011);u.RelayFeatureFlags.ENABLE_RELAY_RESOLVERS=!0;var d=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var o,i,a,l,s,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==globalThis.backendaiclient){e.next=3;break}return e.next=3,new Promise((function(e){document.addEventListener("backend-ai-connected",(function n(){document.removeEventListener("backend-ai-connected",n),e(void 0)}))}));case 3:return a=c(n.text||"",t,(function(e){var n;return!(null!==(n=globalThis.backendaiclient)&&void 0!==n&&n.isManagerVersionCompatibleWith(e))})),l={query:a,variables:t},s=null===(o=globalThis.backendaiclient)||void 0===o?void 0:o.newSignedRequest("POST","/admin/gql",l),e.next=8,null===(i=globalThis.backendaiclient)||void 0===i?void 0:i._wrapWithPromise(s,!1,null,1e4,0).catch((function(e){}));case 8:if(e.t0=e.sent,e.t0){e.next=11;break}e.t0={};case 11:return u=e.t0,e.abrupt("return",u);case 13:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();var f,v=new u.Environment({network:u.Network.create(d,void 0),store:new u.Store(new u.RecordSource)}),p=t(80382),m=t(27340),g=t(41239),b=t(47226),h=t(49883),w=t(66670),x=t(99517),y=t.n(x),C=(t(24989),t(79354)),Z=t.n(C),P=t(79748),k=t.n(P),E=t(51714),j=t.n(E),O=t(63540),S=t.n(O),M=t(18272),z=t.n(M),L=t(9666),N=t.n(L),T=t(64447),_=t(13881),R=t(4519),V=t(81748),F=t(87112),B=t(16980),I=t(51843),A=t(12674),D=t(55144),q=t(73181),Q=t(2556);y().extend(N()),y().extend(Z()),y().extend(k()),y().extend(j()),y().extend(z()),y().extend(S());var W=R.createContext(null),Y=R.createContext(null),U=function(){return R.useContext(Y)},$=function(){return R.useContext(W)},G=new F.QueryClient({defaultOptions:{queries:{suspense:!0,refetchOnWindowFocus:!1,retry:!1}}});T.ZP.use(V.Db).use(_.Z).init({backend:{loadPath:"/resources/i18n/{{lng}}.json"},lng:(null===globalThis||void 0===globalThis||null===(f=globalThis.backendaioptions)||void 0===f?void 0:f.get("current_language"))||"en",fallbackLng:"en",interpolation:{escapeValue:!1},react:{transSupportBasicHtmlNodes:!0,transKeepBasicHtmlNodesFor:["br","strong","span","code","p"]}});var H=function(){var e=(0,A.s0)();return(0,R.useLayoutEffect)((function(){var n=function(n){var t=n.detail;e(t,{replace:!0})};return document.addEventListener("react-navigate",n),function(){document.removeEventListener("react-navigate",n)}}),[e]),null},K=function(e){var n=e.children,t=e.value,r=e.styles,i=e.shadowRoot,a=e.dispatchEvent,l=(0,R.useMemo)((function(){return(0,m.Df)()}),[]),s=function(){var e,n=(0,R.useState)(null===globalThis||void 0===globalThis||null===(e=globalThis.backendaioptions)||void 0===e?void 0:e.get("current_language")),t=(0,o.Z)(n,2),r=t[0],i=t[1],a=(0,V.$G)().i18n;return(0,R.useEffect)((function(){setTimeout((function(){return null===a||void 0===a?void 0:a.changeLanguage(r)}),0),y().locale(r)}),[]),(0,R.useEffect)((function(){var e=function(e){var n,t;i(null===e||void 0===e||null===(n=e.detail)||void 0===n?void 0:n.lang);var o=(null===e||void 0===e||null===(t=e.detail)||void 0===t?void 0:t.lang)||"en";null===a||void 0===a||a.changeLanguage(o),y().locale(o)};return window.addEventListener("langChanged",e),function(){return window.removeEventListener("langChanged",e)}}),[a]),[r]}(),c=(0,o.Z)(s,1)[0],u=(0,p.x)(),d=(0,R.useMemo)((function(){return{value:t,dispatchEvent:a,moveTo:function(e,n){a("moveTo",{path:e,params:n})}}}),[t,a]);return(0,Q.jsx)(Q.Fragment,{children:v&&(0,Q.jsx)(B.RelayEnvironmentProvider,{environment:v,children:(0,Q.jsxs)(R.StrictMode,{children:[(0,Q.jsxs)("style",{children:[r,".anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n/* fix: fixed column shadow display outside of a table wrapper */\n.ant-table-wrapper {\n  border-radius: 8px 8px 0 0;\n  overflow: hidden;\n}\n\n/* fix: the tooltip does not appear in the `<Form.Item tooltip={'something'}` when the popup container is a parent node of the trigger node. */\n.ant-form-item-label {\n  overflow: unset !important;\n}\n"]}),(0,Q.jsx)(F.QueryClientProvider,{client:G,children:(0,Q.jsx)(Y.Provider,{value:i,children:(0,Q.jsx)(W.Provider,{value:d,children:(0,Q.jsx)(g.ZP,{getPopupContainer:function(e){return(null===e||void 0===e?void 0:e.parentNode)||i},locale:"ko"===c?w.Z:h.Z,theme:u,children:(0,Q.jsx)(b.Z,{children:(0,Q.jsx)(m.V9,{container:i,cache:l,children:(0,Q.jsx)(R.Suspense,{fallback:"",children:(0,Q.jsx)(I.VK,{children:(0,Q.jsxs)(D.QueryParamProvider,{adapter:q.Q,options:{},children:[(0,Q.jsx)(H,{}),n]})})})})})})})})})]})})})}},38540:function(e,n,t){t.r(n),t.d(n,{passwordPattern:function(){return w}});var o=t(29439),r=t(43255),i=t(87760),a=t(50164),l=t(61502),s=t(99277),c=t(69080),u=t(44036),d=t(57054),f=t(65113),v=t(28499),p=t(38818),m=t(92171),g=t(4519),b=t(81748),h=t(2556),w=/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[_\W]).{8,}$/;n.default=function(){var e,n=(0,l.useWebComponentInfo)(),t=n.value,x=n.dispatchEvent;try{e=JSON.parse(t||"")}catch(N){e={open:!1,currentPassword:"",username:"",api_endpoint:""}}var y=e,C=y.open,Z=y.currentPassword,P=y.username,k=y.api_endpoint,E=u.Z.useToken().token,j=d.Z.useForm(),O=(0,o.Z)(j,1)[0],S=(0,b.$G)().t;(0,g.useEffect)((function(){C&&O.resetFields()}),[C,O]);var M=(0,i.M)({api_endpoint:k}),z=(0,a.Y)({mutationFn:function(e){return(0,r.Lc)({method:"POST",url:"/server/update-password-no-auth",body:e,client:M})}}),L=function(){O.validateFields().then((function(e){z.mutate({username:P,current_password:Z,new_password:e.newPassword},{onSuccess:function(e,n,t){x("ok",null)},onError:function(e,n,t){}})}))};return(0,h.jsx)(f.Z,{open:C,centered:!0,mask:!1,onCancel:function(){x("cancel",null)},keyboard:!1,maskClosable:!1,footer:null,width:450,destroyOnClose:!0,forceRender:!0,children:(0,h.jsxs)(s.Z,{direction:"column",justify:"start",align:"stretch",gap:"md",style:{alignSelf:"stretch",paddingTop:E.paddingMD,paddingBottom:E.paddingMD},children:[(0,h.jsxs)(v.Z.Title,{level:3,style:{margin:0},children:[(0,h.jsx)(c.Z,{twoToneColor:E.colorWarning})," ",S("webui.menu.PleaseChangeYourPassword")]}),S("webui.menu.YouMushChangeYourPassword"),(0,h.jsxs)(d.Z,{form:O,layout:"vertical",initialValues:{currentPassword:Z},disabled:z.isLoading,children:[(0,h.jsx)(d.Z.Item,{name:"newPassword",label:S("webui.menu.NewPassword"),rules:[{required:!0},{pattern:w,message:S("webui.menu.InvalidPasswordMessage").toString()},function(){return{validator:function(e,n){return Z===n?Promise.reject(new Error(S("webui.menu.NewPasswordCannotBeSame").toString())):Promise.resolve()}}}],hasFeedback:!0,children:(0,h.jsx)(p.Z.Password,{})}),(0,h.jsx)(d.Z.Item,{name:"confirm",label:S("webui.menu.NewPasswordAgain"),dependencies:["newPassword"],hasFeedback:!0,rules:[{required:!0},function(e){var n=e.getFieldValue;return{validator:function(e,t){return t&&n("newPassword")!==t?Promise.reject(new Error(S("environment.PasswordsDoNotMatch").toString())):Promise.resolve()}}}],children:(0,h.jsx)(p.Z.Password,{onPressEnter:L})})]}),(0,h.jsx)(m.ZP,{type:"primary",onClick:L,loading:z.isLoading,children:S("webui.menu.Update")})]})})}},69080:function(e,n,t){t.d(n,{Z:function(){return s}});var o=t(87462),r=t(4519),i={icon:function(e,n){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z",fill:e}},{tag:"path",attrs:{d:"M172.2 828.1h679.6L512 239.9 172.2 828.1zM560 720a48.01 48.01 0 01-96 0 48.01 48.01 0 0196 0zm-16-304v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8z",fill:n}},{tag:"path",attrs:{d:"M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8z",fill:e}}]}},name:"warning",theme:"twotone"},a=t(9491),l=function(e,n){return r.createElement(a.Z,(0,o.Z)({},e,{ref:n,icon:i}))};var s=r.forwardRef(l)},38818:function(e,n,t){t.d(n,{Z:function(){return V}});var o=t(4942),r=t(29439),i=t(4519),a=t(43270),l=t.n(a),s=t(48698),c=t(44412),u=t(68944),d=function(e){var n,t=(0,i.useContext)(s.E_),a=t.getPrefixCls,d=t.direction,f=e.prefixCls,v=e.className,p=a("input-group",f),m=a("input"),g=(0,u.ZP)(m),b=(0,r.Z)(g,2),h=b[0],w=b[1],x=l()(p,(n={},(0,o.Z)(n,"".concat(p,"-lg"),"large"===e.size),(0,o.Z)(n,"".concat(p,"-sm"),"small"===e.size),(0,o.Z)(n,"".concat(p,"-compact"),e.compact),(0,o.Z)(n,"".concat(p,"-rtl"),"rtl"===d),n),w,v),y=(0,i.useContext)(c.aM),C=(0,i.useMemo)((function(){return Object.assign(Object.assign({},y),{isFormItemInput:!1})}),[y]);return h(i.createElement("span",{className:x,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},i.createElement(c.aM.Provider,{value:C},e.children)))},f=t(90907),v=t(87462),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},m=t(9491),g=function(e,n){return i.createElement(m.Z,(0,v.Z)({},e,{ref:n,icon:p}))};var b=i.forwardRef(g),h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},w=function(e,n){return i.createElement(m.Z,(0,v.Z)({},e,{ref:n,icon:h}))};var x=i.forwardRef(w),y=t(34325),C=t(20742),Z=t(80405),P=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t},k=function(e){return e?i.createElement(x,null):i.createElement(b,null)},E={click:"onClick",hover:"onMouseOver"};var j=i.forwardRef((function(e,n){var t=e.visibilityToggle,a=void 0===t||t,c="object"===typeof a&&void 0!==a.visible,u=(0,i.useState)((function(){return!!c&&a.visible})),d=(0,r.Z)(u,2),v=d[0],p=d[1],m=(0,i.useRef)(null);i.useEffect((function(){c&&p(a.visible)}),[c,a]);var g=(0,Z.Z)(m),b=function(){e.disabled||(v&&g(),p((function(e){var n,t=!e;return"object"===typeof a&&(null===(n=a.onVisibleChange)||void 0===n||n.call(a,t)),t})))},h=e.className,w=e.prefixCls,x=e.inputPrefixCls,j=e.size,O=P(e,["className","prefixCls","inputPrefixCls","size"]),S=i.useContext(s.E_).getPrefixCls,M=S("input",x),z=S("input-password",w),L=a&&function(n){var t,r=e.action,a=void 0===r?"click":r,l=e.iconRender,s=E[a]||"",c=(void 0===l?k:l)(v),u=(t={},(0,o.Z)(t,s,b),(0,o.Z)(t,"className","".concat(n,"-icon")),(0,o.Z)(t,"key","passwordIcon"),(0,o.Z)(t,"onMouseDown",(function(e){e.preventDefault()})),(0,o.Z)(t,"onMouseUp",(function(e){e.preventDefault()})),t);return i.cloneElement(i.isValidElement(c)?c:i.createElement("span",null,c),u)}(z),N=l()(z,h,(0,o.Z)({},"".concat(z,"-").concat(j),!!j)),T=Object.assign(Object.assign({},(0,y.Z)(O,["suffix","iconRender","visibilityToggle"])),{type:v?"text":"password",className:N,prefixCls:M,suffix:L});return j&&(T.size=j),i.createElement(f.Z,Object.assign({ref:(0,C.sQ)(n,m)},T))})),O=t(7517),S=t(90690),M=t(92171),z=t(76569),L=t(42746),N=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t};var T=i.forwardRef((function(e,n){var t,r,a=e.prefixCls,c=e.inputPrefixCls,u=e.className,d=e.size,v=e.suffix,p=e.enterButton,m=void 0!==p&&p,g=e.addonAfter,b=e.loading,h=e.disabled,w=e.onSearch,x=e.onChange,y=e.onCompositionStart,Z=e.onCompositionEnd,P=N(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),k=i.useContext(s.E_),E=k.getPrefixCls,j=k.direction,T=i.useRef(!1),_=E("input-search",a),R=E("input",c),V=(0,L.ri)(_,j).compactSize,F=(0,z.Z)((function(e){var n;return null!==(n=null!==d&&void 0!==d?d:V)&&void 0!==n?n:e})),B=i.useRef(null),I=function(e){var n;document.activeElement===(null===(n=B.current)||void 0===n?void 0:n.input)&&e.preventDefault()},A=function(e){var n,t;w&&w(null===(t=null===(n=B.current)||void 0===n?void 0:n.input)||void 0===t?void 0:t.value,e,{source:"input"})},D="boolean"===typeof m?i.createElement(O.Z,null):null,q="".concat(_,"-button"),Q=m||{},W=Q.type&&!0===Q.type.__ANT_BUTTON;r=W||"button"===Q.type?(0,S.Tm)(Q,Object.assign({onMouseDown:I,onClick:function(e){var n,t;null===(t=null===(n=null===Q||void 0===Q?void 0:Q.props)||void 0===n?void 0:n.onClick)||void 0===t||t.call(n,e),A(e)},key:"enterButton"},W?{className:q,size:F}:{})):i.createElement(M.ZP,{className:q,type:m?"primary":void 0,size:F,disabled:h,key:"enterButton",onMouseDown:I,onClick:A,loading:b,icon:D},m),g&&(r=[r,(0,S.Tm)(g,{key:"addonAfter"})]);var Y=l()(_,(t={},(0,o.Z)(t,"".concat(_,"-rtl"),"rtl"===j),(0,o.Z)(t,"".concat(_,"-").concat(F),!!F),(0,o.Z)(t,"".concat(_,"-with-button"),!!m),t),u);return i.createElement(f.Z,Object.assign({ref:(0,C.sQ)(B,n),onPressEnter:function(e){T.current||b||A(e)}},P,{size:F,onCompositionStart:function(e){T.current=!0,null===y||void 0===y||y(e)},onCompositionEnd:function(e){T.current=!1,null===Z||void 0===Z||Z(e)},prefixCls:R,addonAfter:r,suffix:v,onChange:function(e){e&&e.target&&"click"===e.type&&w&&w(e.target.value,e,{source:"clear"}),x&&x(e)},className:Y,disabled:h}))})),_=t(50130),R=f.Z;R.Group=d,R.Search=T,R.TextArea=_.Z,R.Password=j;var V=R},65113:function(e,n,t){t.d(n,{Z:function(){return y}});var o=t(52197),r=t(6851),i=t(10203),a=t(29439),l=t(4519),s=t(43270),c=t.n(s),u=t(49182),d=t(30516),f=t(48698),v=t(69381),p=t(53927),m=t(94382),g=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t},b=(0,d.i)((function(e){var n=e.prefixCls,t=e.className,o=e.closeIcon,r=e.closable,i=e.type,s=e.title,d=e.children,b=g(e,["prefixCls","className","closeIcon","closable","type","title","children"]),h=l.useContext(f.E_).getPrefixCls,w=h(),x=n||h("modal"),y=(0,m.ZP)(x),C=(0,a.Z)(y,2)[1],Z="".concat(x,"-confirm"),P={};return P=i?{closable:null!==r&&void 0!==r&&r,title:"",footer:"",children:l.createElement(v.O,Object.assign({},e,{prefixCls:x,confirmPrefixCls:Z,rootPrefixCls:w,content:d}))}:{closable:null===r||void 0===r||r,title:s,footer:void 0===e.footer?l.createElement(p.$,Object.assign({},e)):e.footer,children:d},l.createElement(u.s,Object.assign({prefixCls:x,className:c()(C,"".concat(x,"-pure-panel"),i&&Z,i&&"".concat(Z,"-").concat(i),t)},b,{closeIcon:(0,p.b)(x,o),closable:r},P))})),h=t(85591);function w(e){return(0,o.ZP)((0,o.uW)(e))}var x=i.Z;x.useModal=h.Z,x.info=function(e){return(0,o.ZP)((0,o.cw)(e))},x.success=function(e){return(0,o.ZP)((0,o.vq)(e))},x.error=function(e){return(0,o.ZP)((0,o.AQ)(e))},x.warning=w,x.warn=w,x.confirm=function(e){return(0,o.ZP)((0,o.Au)(e))},x.destroyAll=function(){for(;r.Z.length;){var e=r.Z.pop();e&&e()}},x.config=o.ai,x._InternalPanelDoNotUseOrYouWillBeFired=b;var y=x}}]);
//# sourceMappingURL=540.9759f552.chunk.js.map