(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e6afbb2"],{"0d3d":function(e,t,a){e.exports=a.p+"img/info-alert.svg"},"16a4":function(e,t,a){},"40a1":function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("cky-modal",{ref:"CkyHeadsUpPopup",staticClass:"cky-headsup-popup",on:{close:e.clearHeadsUpPopup},scopedSlots:e._u([{key:"header",fn:function(){return[t("h4",[e._v(" "+e._s(e.header)+" ")])]},proxy:!0},{key:"body",fn:function(){return[t("p",{domProps:{innerHTML:e._s(e.body)}})]},proxy:!0},{key:"footer",fn:function(){return[t("div",{staticClass:"cky-app-modal-actions cky-justify-end"},[t("button",{staticClass:"cky-button cky-button-outline-secondary",on:{click:e.closePopup}},[e._v(" "+e._s(e.cancelBtn)+" ")]),t("cky-button",{staticClass:"cky-button-danger",nativeOn:{click:function(t){return e.confirmDelete.apply(null,arguments)}}},[e._v(" "+e._s(e.confirmBtn)+" ")])],1)]},proxy:!0}])})},n=[],i=a("8a80"),o={name:"CkyHeadsUpPopup",components:{CkyModal:i["a"]},props:{header:{type:String,required:!0},body:{type:String,required:!0},cancelBtn:{type:String,required:!0},confirmBtn:{type:String,required:!0}},methods:{clearHeadsUpPopup(){this.$emit("clear")},closePopup(){this.$refs.CkyHeadsUpPopup.close(),this.clearHeadsUpPopup()},confirmDelete(){this.$emit("deleteItem")},show(){this.$refs.CkyHeadsUpPopup.show()}}},c=o,l=a("2877"),r=Object(l["a"])(c,s,n,!1,null,null,null);t["a"]=r.exports},"72ca":function(e,t,a){"use strict";a("ab77")},"7cd5":function(e,t,a){e.exports=a.p+"img/crown.svg"},a655:function(e){e.exports=JSON.parse('{"notice":{"elements":{"title":"","description":"","privacyLink":"","buttons":{"elements":{"accept":"","reject":"","settings":"","readMore":"","donotSell":""}},"closeButton":""}},"categoryPreview":{"elements":{"buttons":{"elements":{"save":""}}}},"preferenceCenter":{"elements":{"title":"","description":"","showMore":"","showLess":"","category":{"elements":{"alwaysEnabled":"","enable":"","disable":""}},"buttons":{"elements":{"accept":"","save":"","reject":""}},"closeButton":""}},"optoutPopup":{"elements":{"title":"","description":"","optOption":{"elements":{"title":"","enable":"","disable":""}},"gpcOption":{"elements":{"description":""}},"showLess":"","showMore":"","buttons":{"elements":{"cancel":"","confirm":""}},"closeButton":""}},"revisitConsent":{"elements":{"title":""}},"auditTable":{"elements":{"headers":{"elements":{"id":"","duration":"","description":""}},"message":""}},"videoPlaceholder":{"elements":{"title":""}}}')},ab77:function(e,t,a){},ad98:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return e.$route.params.language?t("div",[t("transition",{attrs:{name:"fade"}},[t("router-view")],1)],1):t("div",{staticClass:"cky-section cky-zero--padding cky-zero--margin"},[t("div",{staticClass:"cky-section-header cky-align-center"},[t("div",{staticClass:"cky-section-title"},[t("h3",[e._v(e._s(e.$i18n.__("Languages","cookie-law-info")))])]),t("div",{staticClass:"cky-section-header-actions cky-align-center"},[t("button",{staticClass:"cky-button",attrs:{id:"cky-add-language-btn"},on:{click:function(t){return e.showUpgradeModal()}}},[t("img",{staticClass:"cky-crown-img",attrs:{src:a("7cd5")}}),e._v(" "+e._s(e.$i18n.__("Add Language","cookie-law-info"))+" ")])])]),t("div",{staticClass:"cky-section-content"},[t("div",{staticClass:"cky-row"},[t("div",{staticClass:"cky-col-12"},[t("div",{staticClass:"cky-consent-language-lists"},[t("table",{staticClass:"wp-list-table cky-table"},[t("thead",[t("tr",[t("th",[e._v(e._s(e.$i18n.__("Language List","cookie-law-info")))]),t("th",[e._v(e._s(e.$i18n.__("Language Code","cookie-law-info")))]),t("th"),t("th")])]),e.loading?t("tbody",[t("tr",[t("td",[t("p",{staticClass:"cky-loading-text"},[t("cky-loader"),e._v(" "+e._s(e.$i18n.__("Loading languages","cookie-law-info"))+" ")],1)])])]):t("tbody",e._l(e.selectedLanguages,(function(a){return t("tr",{key:a.code},[t("td",[e._v(e._s(a.name))]),t("td",{staticClass:"cky-language-table-col"},[e._v(" "+e._s(a.code)+" ")]),t("td",[e.defaultLanguage==a.code?t("div",{staticClass:"cky-align-center"},[t("cky-badge",{attrs:{title:e.$i18n.__("Default","cookie-law-info"),type:"info"}})],1):e._e()]),t("td",{staticClass:"cky-language-table-col-actions"},[t("div",{staticClass:"cky-row"},[t("div",{staticClass:"cky-col"},[t("div",{staticClass:"cky-justify-end"},[t("router-link",{attrs:{to:"languages/edit/"+a.code,custom:""},scopedSlots:e._u([{key:"default",fn:function({navigate:a}){return[t("a",{staticClass:"cky-button cky-button-secondary cky-button-small cky-button-icon",on:{click:a}},[t("cky-icon",{attrs:{icon:"editAlt",width:"13"}}),e._v(" "+e._s(e.$i18n.__("Edit Content","cookie-law-info"))+" ")],1)]}}],null,!0)}),t("div",{staticClass:"cky-languages-more-actions",attrs:{disabled:e.defaultLanguage==a.code}},[t("button",{staticClass:"cky-button cky-button-secondary",attrs:{"data-type":"icon"}},[e._v(" ... ")]),t("div",{staticClass:"cky-languages-more-actions-list"},[t("ul",[t("li",[e.defaultLanguage===a.code&&1===e.selectedLanguagesCount?t("a",{on:{click:e.openLanguageModal}},[e._v(e._s(e.$i18n.__("Change default language","cookie-law-info"))+" ")]):e.defaultLanguage===a.code&&e.selectedLanguagesCount>1?t("cky-popper",{attrs:{content:e.$i18n.__("You can't delete the default language.","cookie-law-info")}},[t("a",{class:{"cky-disabled":e.defaultLanguage==a.code},on:{click:function(t){return e.deleteLanguageConfirmation(a)}}},[e._v(e._s(e.$i18n.__("Delete","cookie-law-info"))+" ")])]):t("a",{on:{click:function(t){return e.deleteLanguageConfirmation(a)}}},[e._v(e._s(e.$i18n.__("Delete","cookie-law-info"))+" ")])],1),t("li",[e.defaultLanguage!==a.code?t("a",{class:{"cky-disabled":e.defaultLanguage==a.code},on:{click:function(t){return e.setDefault(a,"default")}}},[e._v(e._s(e.$i18n.__("Set as default","cookie-law-info")))]):e._e()])])])])],1)])])])])})),0)])])])])]),t("cky-language-selector",{ref:"ckyLanguageSelector"}),t("CkyHeadsUpPopup",{ref:"ckyHeadsUpPopup",attrs:{header:this.messages.header,body:this.bodyContent,cancelBtn:this.messages.cancelBtn,confirmBtn:this.messages.confirmBtn},on:{deleteItem:e.deleteLanguage,clear:e.clearHeadsUpPopup}}),t("cky-upgrade-modal",{ref:"ckyUpgradeModal",scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" "+e._s(e.$i18n.__("Upgrade to unlock multilingual banner and other advanced features","cookie-law-info"))+" ")]},proxy:!0}])})],1)},n=[],i=a("a655"),o=function(){var e=this,t=e._self._c;return t("cky-modal",{ref:"ckyLanguagesModal",staticClass:"cky-app-modal-languages",on:{close:e.closeLanguageModal},scopedSlots:e._u([{key:"header",fn:function(){return[t("h4",[e._v(e._s(e.$i18n.__("Change language","cookie-law-info")))])]},proxy:!0},{key:"body",fn:function(){return[t("div",{staticClass:"cky-row"},[t("div",{staticClass:"cky-col-12"},[t("cky-notice",{attrs:{type:"info"}},[t("div",{staticClass:"cky-align-top"},[t("img",{attrs:{src:a("0d3d"),alt:"alert-icon"}}),e._v(" "+e._s(e.$i18n.__("Any changes you've made to the current language will be discarded","cookie-law-info"))+" ")])])],1)]),t("div",{staticClass:"cky-row"},[t("div",{staticClass:"cky-col-12"},[t("cky-dropdown",{ref:"languageSelector",staticClass:"cky-dropdown-languages",attrs:{sticky:!0,text:e.$i18n.__("Select default language","cookie-law-info"),active:!0},on:{ckyToggleDropDown:e.toggleDropDown}},[t("div",{staticClass:"cky-dropdown-search-input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"}],ref:"ckySearchInput",staticClass:"cky-form-control",attrs:{type:"text",placeholder:e.$i18n.__("Search...","cookie-law-info")},domProps:{value:e.searchText},on:{input:function(t){t.target.composing||(e.searchText=t.target.value)}}})]),t("ul",[t("li",[t("div",{staticClass:"cky-form-group cky-center"},[t("input",{staticClass:"cky-disable-option",attrs:{type:"checkbox",id:"cky-checkbox-language-en",checked:"",disabled:""},domProps:{value:e.current}}),t("label",{class:{"cky-label":!0,"cky-disable-option":e.disableLabel(e.current)},attrs:{for:"cky-checkbox-language-"+e.current}},[e._v(e._s(e.getLanguageName(e.current))+" ("+e._s(e.current)+")")])]),t("span",{staticClass:"cky-notice-default"},[e._v(" "+e._s(e.$i18n.__("Default","cookie-law-info"))+" ")])]),e._l(e.filterLanguages,(function(s){return t("li",{key:s.code},[t("div",{staticClass:"cky-form-group cky-center"},[t("input",{class:{"cky-disable-option":e.disableLabel(s.code)},attrs:{type:"checkbox",id:"cky-checkbox-language-"+s.code,disabled:e.disableCheckBox(s.code)},domProps:{value:s.code,checked:e.defaultLanguage===s.code},on:{change:function(t){return e.handleSelection(s.code,t)}}}),t("label",{class:{"cky-label":!0,"cky-disable-option":e.disableLabel(s.code)},attrs:{for:"cky-checkbox-language-"+s.code}},[e._v(e._s(s.name)+" ("+e._s(s.code)+")")])]),!e.isTranslated(s.code)&&e.isAdded(s.code)?t("span",{staticClass:"cky-language-notice"},[t("img",{attrs:{src:a("d645"),alt:"alert-icon"}}),t("span",{staticClass:"cky-notice-inner"},[e._v(" "+e._s(e.$i18n.__("Translations not available","cookie-law-info"))+" ")])]):e._e()])}))],2)])],1)]),t("div",{staticClass:"cky-row"},[t("div",{staticClass:"cky-col-12"},[t("Transition",[!e.checkIfTranslated&&e.visible?t("cky-notice",{staticStyle:{"margin-top":"15px"},attrs:{type:"warning"}},[t("div",{staticClass:"cky-align-top"},[t("img",{attrs:{src:a("afb7"),alt:"alert-icon"}}),t("span",[e._v(" "+e._s(e.$i18n.__("Translations are not available for the language you have selected, so the banner content that has not been translated will be displayed in English.","cookie-law-info"))+" ")])])]):e.checkIfTranslated&&!e.disabled?t("cky-notice",{staticStyle:{"margin-top":"15px"},attrs:{type:"info"}},[t("div",{staticClass:"cky-align-top"},[t("img",{attrs:{src:a("0d3d"),alt:"alert-icon"}}),t("span",{domProps:{innerHTML:e._s(e.externalSourceWarning)}})])]):e._e()],1)],1)])]},proxy:!0},{key:"footer",fn:function(){return[t("div",{staticClass:"cky-app-modal-actions cky-justify-end"},[t("div",{staticClass:"cky-action-languages cky-actions-group cky-justify-end"},[t("button",{staticClass:"cky-button cky-button-secondary",on:{click:e.close}},[e._v(" Cancel ")]),t("cky-button",{ref:"ckyButtonChangeDefaultLanguage",staticClass:"cky-button-primary",attrs:{disabled:e.disabled},nativeOn:{click:function(t){return e.setDefault(e.defaultLanguage)}}},[e._v(" Change ")])],1)])]},proxy:!0}])})},c=[],l=a("8a80"),r=a("c2c9"),u=a("f61e"),d=a("c4aa"),g=a("462b"),p=a("2f62"),h={name:"CkyLanguageSelector",components:{CkyModal:l["a"],CkyDropdown:r["a"],CkyNotice:g["a"]},data(){return{searchText:"",tempSelectedLanguages:[],languages:{},currentTab:"layout",searchLanguages:[],filteredLanguages:[],visible:!0,externalSourceWarning:this.$i18n.__("By clicking <b>Change</b>, the translations for the selected language, sourced externally from the CookieYes web app, will be downloaded to the plugin.","cookie-law-info")}},methods:{showIcon(e){return!!e.icon},async open(){await this.$refs.ckyLanguagesModal.show(),this.$refs.ckySearchInput.focus(),this.searchText="",this.getConfiguredLanguages()},close(){this.$store.commit("languages/setDefault",this.current),this.$refs.ckyLanguagesModal.close()},closeLanguageModal(){this.$store.commit("languages/setDefault",this.current),this.tempSelectedLanguages=this.selectedLanguages},getAvailableLanguages(){this.languages=this.$store.state.languages.available},getConfiguredLanguages(){this.tempSelectedLanguages=this.selectedLanguages},setDefault:async function(e){this.$refs.ckyButtonChangeDefaultLanguage.startLoading();try{this.$store.dispatch("languages/setSelected",[e]),await this.$store.dispatch("languages/saveSelected"),await this.$store.dispatch("languages/setDefault",e),await this.$store.dispatch("languages/setCurrent",e),await this.$store.dispatch("languages/saveDefault");const t=await d["a"].getDefault();await d["a"].setCurrent(t),await d["a"].save(),await this.purgeCache(),await this.$store.dispatch("cookies/reInit"),this.close(),this.$root.$emit("triggerNotification",{type:"success",message:this.$i18n.__("Default language changed successfully!","cookie-law-info")})}catch(t){console.log(t),this.$root.$emit("triggerNotification",{type:"error",message:this.$i18n.__("Problem occurred while adding languages. Please try again later!","cookie-law-info")})}this.$refs.ckyButtonChangeDefaultLanguage.stopLoading()},isTranslated(e="en"){const t=u["a"].getTranslatedLanguages();return t.includes(e)},isAdded(e="en"){const t=this.defaultLanguage;return t.includes(e)},isExist(e="en"){const t=this.selectedLanguages;return t.includes(e)},disableCheckBox(e){const t=this.tempSelectedLanguages,a=this.selectedLanguages;return!!a.includes(e)||!(t.length<2||t.includes(e))},disableLabel(e){return this.tempSelectedLanguages.length>=2&&!this.tempSelectedLanguages.includes(e)&&!this.selectedLanguages.includes(e)},disableTooltip(e){return!(this.tempSelectedLanguages.length>=2&&!this.tempSelectedLanguages.includes(e))},toggleDropDown(){this.visible=!this.visible},handleSelection(e,t){t.target.checked?this.$store.commit("languages/setDefault",e):this.$store.commit("languages/setDefault",this.current)},getLanguageName(e){return u["a"].getName(e)}},computed:{...Object(p["d"])("languages",["default","current"]),currentTabComponent:function(){return"tab-"+this.currentTab.toLowerCase()},selectedLanguages:function(){return this.$store.state.languages.selected},filterLanguages(){if(this.languages.length>0){let e=[],t=[],a=[];return this.languages.forEach(a=>{this.selectedLanguages.includes(a.code)?e.push(a):t.push(a)}),a=e.concat(t),a.filter(e=>e.name.toLowerCase().includes(this.searchText.toLowerCase())&&e.code!==this.current)}return[]},disabled(){return this.current===this.default},checkIfTranslated(){return this.isTranslated(this.defaultLanguage)},defaultLanguage:{get(){return this.default},set(e){this.$store.commit("languages/setDefault",e)}}},watch:{},mounted(){this.getAvailableLanguages(),this.getConfiguredLanguages()}},f=h,y=(a("b016"),a("2877")),k=Object(y["a"])(f,o,c,!1,null,null,null),b=k.exports,m=a("1f3d"),_=function(){var e=this,t=e._self._c;return t("span",{class:e.badgeClass},[e._v(e._s(e.title))])},v=[],C={name:"CkyBadge",props:{type:{type:String,default:"success"},title:{type:String,default:""}},computed:{badgeClass(){return{"cky-badge":!0,"cky-badge-info":"info"===this.type,"cky-badge-error":"error"===this.type,"cky-badge-success":"success"===this.type,"cky-badge-warning":"warning"===this.type}}}},w=C,L=Object(y["a"])(w,_,v,!1,null,null,null),$=L.exports,x=a("9e47"),S=a("40a1"),D=a("0bd0"),T={name:"Languages",components:{CkyLanguageSelector:b,CkyIcon:m["a"],CkyBadge:$,CkyLoader:x["a"],CkyHeadsUpPopup:S["a"],CkyUpgradeModal:D["a"]},data(){return{tempSelectedLanguages:[],languages:{},languageName:!1,languageCode:!1,isLanguageModalVisible:!1,currentTab:"layout",loading:!0,defaultContent:i,messages:{header:this.$i18n.__("Delete language?","cookie-law-info"),cancelBtn:this.$i18n.__("Cancel","cookie-law-info"),confirmBtn:this.$i18n.__("Delete language","cookie-law-info")}}},methods:{showUpgradeModal(){this.$refs.ckyUpgradeModal.show()},loadBanner:async function(){try{await d["a"].getActiveBanner()}catch(e){console.error(e)}},showIcon(e){return!!e.icon},openLanguageModal(){this.$refs.ckyLanguageSelector.open()},loadEditPage:function(e){const t=this.$router.getRouteByName("edit");this.$router.push({name:t.name,query:{cky_lang:e.code}})},deleteLanguageConfirmation(e){e.code!==this.defaultLanguage&&(this.languageName=e.name,this.languageCode=e.code,this.$refs.ckyHeadsUpPopup.show())},deleteLanguage:async function(){if(this.languageCode){if(this.languageCode===this.defaultLanguage)return;let e=await u["a"].deleteLanguage(this.languageCode);await d["a"].save(),e?this.$root.$emit("triggerNotification",{type:"success",message:this.$i18n.__("Successfully deleted the language","cookie-law-info")}):this.$root.$emit("triggerNotification",{type:"error",message:this.$i18n.__("Failed","cookie-law-info")})}this.$refs.ckyHeadsUpPopup.closePopup()},setDefault:async function(e){await this.$store.dispatch("languages/setDefault",e.code),await this.$store.dispatch("languages/setCurrent",e.code),await this.$store.dispatch("languages/saveDefault")},clearHeadsUpPopup(){this.languageName=!1,this.languageCode=!1}},computed:{...Object(p["d"])("languages",["default","selected","available"]),currentTabComponent:function(){return"tab-"+this.currentTab.toLowerCase()},availableLanguages:function(){return this.available},selectedLanguages:function(){return u["a"].getLanguageDetails(this.available,this.selected)},selectedLanguagesCount:function(){return this.selectedLanguages.length},defaultLanguage:function(){return this.default},banner(){return this.$store.state.banners.current},bodyContent(){return this.$i18n.sprintf(this.$i18n.__("The <b>%s</b> language and any translations you’ve added in this language will be permanently deleted.","cookie-law-info"),this.languageName)}},async created(){this.loading=!0,await this.loadBanner(),this.loading=!1}},P=T,B=(a("e2ec"),Object(y["a"])(P,s,n,!1,null,null,null));t["default"]=B.exports},afb7:function(e,t,a){e.exports=a.p+"img/warning.svg"},b016:function(e,t,a){"use strict";a("f2f6")},c2c9:function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hide,expression:"hide"}],staticClass:"cky-dropdown",class:{open:e.visible}},[t("button",{staticClass:"cky-button-icon cky-dropdown-anchor",attrs:{disabled:e.disabled},domProps:{innerHTML:e._s(e.text)},on:{click:function(t){return e.toggle()}}}),t("div",{staticClass:"cky-dropdown-content",on:{click:function(t){return e.hide()}}},[e._t("default")],2)])},n=[],i={name:"CkyDropdown",props:{text:{type:String,default:""},disabled:{type:Boolean,default:!1},sticky:{type:Boolean,default:!1},active:{type:Boolean,default:!1}},data(){return{visible:!1}},methods:{toggle(){this.visible=!this.visible,this.$emit("ckyToggleDropDown")},hide(){this.sticky||(this.visible=!1)}},mounted(){this.visible=this.active}},o=i,c=(a("72ca"),a("2877")),l=Object(c["a"])(o,s,n,!1,null,null,null);t["a"]=l.exports},d645:function(e,t,a){e.exports=a.p+"img/action-alert.svg"},e2ec:function(e,t,a){"use strict";a("16a4")},f2f6:function(e,t,a){}}]);