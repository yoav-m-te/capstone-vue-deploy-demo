(function(e){function t(t){for(var r,i,o=t[0],u=t[1],l=t[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(m.length)m.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],r=!0,o=1;o<s.length;o++){var u=s[o];0!==a[u]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=s[0]))}return e}var r={},a={app:0},n=[];function i(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=r,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(s,r,function(t){return e[t]}.bind(null,r));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/capstone-vue-deploy-demo/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=u;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0f04":function(e,t,s){e.exports=s.p+"img/Fight_for_the_net.2c938721.gif"},1700:function(e,t,s){"use strict";s("3a43")},"18ed":function(e,t,s){},2078:function(e,t,s){},2318:function(e,t,s){"use strict";s("bd85")},"238b":function(e,t,s){"use strict";s("9ef3")},"2cfd":function(e,t,s){"use strict";s("e314")},"3a43":function(e,t,s){},"43bc":function(e,t,s){},"48a1":function(e,t,s){"use strict";s("43bc")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"container"}},[s("div",{attrs:{id:"app"}},[s("div",{staticClass:"header"},[s("div",{staticClass:"heading"},[e._v("My Businesses")]),e.userProfile?s("nav",[s("span",{on:{click:e.clearSearch}},[s("router-link",{staticClass:"nav-item",attrs:{to:{name:"home"}}},[e._v(" New Search ")])],1),e._v("   |   "),s("router-link",{staticClass:"nav-item",attrs:{to:{name:"user-favorites"}}},[e._v("Favorites")])],1):e._e()]),null!=e.userProfile?s("div",{attrs:{id:"nav"}},[e._v(" Welcome "),s("router-link",{attrs:{to:{name:"setup"}}},[s("span",{staticClass:"header-info-link"},[e._v(e._s(e.userProfile.firstName)+" ")])]),e._v("!   You are searching in "),s("router-link",{attrs:{to:{name:"setup",query:{editzip:!0}}}},[s("span",{staticClass:"header-info-link"},[e._v(e._s(e.userProfile.searchZip))])]),s("button",{on:{click:e.logout}},[e._v("Logout")])],1):e._e(),s("div",{staticClass:"dividing-line"},[e._v(" ")]),s("router-view",{staticClass:"section"}),s("footer")],1)])},n=[],i=(s("b0c0"),{computed:{userProfile:function(){return this.$store.state.userProfile}},methods:{logout:function(){this.$router.push({name:"logout"})},clearSearch:function(){"home"==this.$route.name&&this.$store.commit("CLEAR_ALL")}}}),o=i,u=(s("1700"),s("2877")),l=Object(u["a"])(o,a,n,!1,null,"254b30e6",null),c=l.exports,d=(s("d3b7"),s("8c4f")),m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"text-center",attrs:{id:"login"}},[s("form",{staticClass:"form-signin",on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[s("div",{attrs:{id:"login-section"}},[s("span",{staticClass:"login-prompt login-field"},[e._v("Please Sign In")]),e.invalidCredentials?s("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" Invalid username and password! ")]):e._e(),this.$route.query.registration?s("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[e._v(" Thank you for registering, please sign in. ")]):e._e(),s("span",{staticClass:"login-field"},[s("label",{staticClass:"sr-only",attrs:{for:"username"}},[e._v("Username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:"Username",required:"",autofocus:""},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),s("span",{staticClass:"login-field"},[s("label",{staticClass:"sr-only",attrs:{for:"password"}},[e._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password",required:""},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),s("span",{staticClass:"login-field login-link",attrs:{id:"login-link-section"}},[s("router-link",{attrs:{to:{name:"register"}}},[s("span",{staticClass:"link-type"},[e._v("Need an account?")])])],1),s("button",{attrs:{type:"submit"}},[e._v("Sign in")])])])])},f=[],p=s("bc3a"),h=s.n(p),v={login:function(e){return h.a.post("/login",e)},register:function(e){return h.a.post("/register",e)}},g={name:"login",components:{},data:function(){return{user:{username:"",password:""},invalidCredentials:!1}},methods:{login:function(){var e=this;v.login(this.user).then((function(t){200==t.status&&(e.$store.commit("SET_AUTH_TOKEN",t.data.token),e.$store.commit("SET_USER",t.data.user),e.$store.commit("SET_USER_PROFILE",null),e.$router.push({name:"search"}))})).catch((function(t){var s=t.response;401===s.status&&(e.invalidCredentials=!0)}))}}},_=g,b=(s("8237"),Object(u["a"])(_,m,f,!1,null,"f3ac26e6",null)),E=b.exports,S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h1",[e._v("Logout")])},C=[],k={created:function(){this.$store.commit("LOGOUT"),this.$router.push("/login")}},$=k,T=Object(u["a"])($,S,C,!1,null,null,null),y=T.exports,w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"text-center",attrs:{id:"register"}},[s("form",{staticClass:"form-register",on:{submit:function(t){return t.preventDefault(),e.register.apply(null,arguments)}}},[s("div",{attrs:{id:"register-section"}},[s("span",{staticClass:"register-prompt register-field"},[e._v("Create Account")]),e.registrationErrors?s("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" "+e._s(e.registrationErrorMsg)+" ")]):e._e(),s("span",{staticClass:"register-field"},[s("label",{staticClass:"sr-only",attrs:{for:"username"}},[e._v("Username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:"Username",required:"",autofocus:""},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),s("span",{staticClass:"register-field"},[s("label",{staticClass:"sr-only",attrs:{for:"password"}},[e._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password",required:""},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),s("span",{staticClass:"register-field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.confirmPassword,expression:"user.confirmPassword"}],staticClass:"form-control",attrs:{type:"password",id:"confirmPassword",placeholder:"Confirm Password",required:""},domProps:{value:e.user.confirmPassword},on:{input:function(t){t.target.composing||e.$set(e.user,"confirmPassword",t.target.value)}}})]),s("span",{staticClass:"register-field"},[s("span",{staticClass:"register-field register-link",attrs:{id:"register-link-section"}},[s("router-link",{attrs:{to:{name:"login"}}},[s("span",{staticClass:"link-type"},[e._v("Have an account?")])])],1),s("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[e._v(" Create Account ")])])])])])},R=[],P={name:"register",data:function(){return{user:{username:"",password:"",confirmPassword:"",role:"user"},registrationErrors:!1,registrationErrorMsg:"There were problems registering this user."}},methods:{register:function(){var e=this;this.user.password!=this.user.confirmPassword?(this.registrationErrors=!0,this.registrationErrorMsg="Password & Confirm Password do not match."):v.register(this.user).then((function(t){201==t.status&&(v.login(e.user).then((function(t){200==t.status&&(e.$store.commit("SET_AUTH_TOKEN",t.data.token),e.$store.commit("SET_USER",t.data.user),e.$store.commit("SET_USER_PROFILE",null),e.$router.push({name:"home"}))})).catch((function(t){var s=t.response;401===s.status&&(e.invalidCredentials=!0)})),e.$router.push({name:"home"}))})).catch((function(t){var s=t.response;e.registrationErrors=!0,400===s.status&&(e.registrationErrorMsg="Bad Request: Validation Errors")}))},clearErrors:function(){this.registrationErrors=!1,this.registrationErrorMsg="There were problems registering this user."}}},O=P,x=(s("2cfd"),Object(u["a"])(O,w,R,!1,null,null,null)),A=x.exports,I=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("business-search")],1)},L=[],N=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"search-pane"}},[s("div",{staticClass:"search-area-grid"},[s("label",{staticClass:"search-prompt search-field",attrs:{for:"search"}},[e._v("Search For: ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"}],staticClass:"search-field search-input",attrs:{id:"search",type:"text",required:""},domProps:{value:e.searchText},on:{keyup:function(t){return e.keyPressed(t)},input:function(t){t.target.composing||(e.searchText=t.target.value)}}}),s("button",{staticClass:"search-field search-button",on:{click:e.search}},[e._v("Search")])]),null!=e.hasStatusMessage?s("div",[s("message-pane")],1):e._e(),s("div",{directives:[{name:"show",rawName:"v-show",value:null==e.hasStatusMessage,expression:"hasStatusMessage == null"}],attrs:{id:"result-section"}},[e.isLoading||null==e.businesses||e.notFound?e._e():s("businesses-list",{attrs:{businesses:e.businesses}}),e.isLoading?s("waiting-indicator",{staticClass:"search-waiting"}):e._e()],1)])},M=[],F=(s("ac1f"),s("841c"),s("99af"),{timeout:3e3}),B={search:function(e,t){return h.a.get("/businesses/find/all?searchTerm=".concat(e,"&searchZip=").concat(t),F)},getBusinessDetails:function(e){return h.a.get("/businesses/".concat(e),F)},getReviews:function(e){return h.a.get("/businesses/".concat(e,"/reviews"),F)}},U={getFavorites:function(e,t){var s={headers:{Authorization:"Bearer "+t}};return h.a.get("/users/".concat(e,"/favorites"),s)},saveProfile:function(e,t,s){var r={headers:{Authorization:"Bearer "+s}};return t?h.a.put("/users/".concat(e.userId,"/profile"),e,r):h.a.post("/users/".concat(e.userId,"/profile"),e,r)},getProfile:function(e,t){var s={headers:{Authorization:"Bearer "+t}};return h.a.get("/users/".concat(e,"/profile"),s)},updateFavorite:function(e,t,s,r,a){var n={headers:{Authorization:"Bearer "+a}};if(r){var i={userId:e,yelpId:t,businessName:s};return h.a.post("/users/".concat(e,"/favorites"),i,n)}return h.a.delete("/users/".concat(e,"/favorites/").concat(t),n)},userHasFavorite:function(e,t,s){var r={headers:{Authorization:"Bearer "+s}};return h.a.get("/users/".concat(e,"/favorites/").concat(t,"/exists"),r)}},j=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},G=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"img-container"}},[r("img",{attrs:{src:s("0f04")}})])}],q={name:"waiting-indicstor"},z=q,Z=(s("48a1"),Object(u["a"])(z,j,G,!1,null,null,null)),D=Z.exports,H=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"list-section"},e._l(e.businesses,(function(t,r){return s("div",{key:r,staticClass:"list-item"},[s("router-link",{staticClass:"item-link",attrs:{to:{name:"business-details",params:{businessId:t.id}}}},[e._v(e._s(t.name)+" "+e._s(t.location.address1))])],1)})),0)},J=[],Y={name:"businesses-list",props:["businesses"]},K=Y,V=(s("d868"),Object(u["a"])(K,H,J,!1,null,null,null)),W=V.exports,Q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:{error:"ERROR"==e.msgType,success:"ERROR"!=e.msgType},attrs:{id:"msgPane"}},[e._v(" "+e._s(e.msg)+" ")])},X=[],ee={name:"message-pane",computed:{msgType:function(){return this.$store.state.statusType},msg:function(){return this.$store.state.statusMsg}}},te=ee,se=(s("bec6"),Object(u["a"])(te,Q,X,!1,null,null,null)),re=se.exports,ae={components:{BusinessesList:W,WaitingIndicator:D,MessagePane:re},name:"business-search",data:function(){return{searchText:this.$store.state.lastSearchTerm,businessInfo:null,notFound:!1,isLoading:!1}},watch:{searchTerm:function(e,t){e!=t&&(this.searchText=e)}},computed:{businesses:function(){return this.$store.state.lastSearchResults},searchTerm:function(){return this.$store.state.lastSearchTerm},hasStatusMessage:function(){return this.$store.state.statusMsg}},methods:{search:function(){var e=this;if(this.searchText&&""!=this.searchText){this.$store.commit("CLEAR_MSGS"),this.isLoading=!0,this.notFound=!1;var t=this.searchText;B.search(this.searchText,this.$store.state.userProfile.searchZip).then((function(s){e.isLoading=!1,e.$store.commit("SET_LAST_SEARCH",{searchTerm:t,searchResults:s.data})})).catch((function(t){t.response&&404===t.response.status?(e.notFound=!0,e.isLoading=!1,e.$store.commit("SET_ERROR_MSG","Business not found."),e.$store.commit("SET_MESSAGE_INFO",{message:"Business not found.",type:"ERROR"})):t.code&&"ECONNABORTED"===t.code&&e.$store.commit("SET_MESSAGE_INFO",{message:"Unable to connect to data server.",type:"ERROR"})}))}else this.$store.commit("SET_MESSAGE_INFO",{message:"You must enter a search term.",type:"ERROR"})},keyPressed:function(e){"Enter"===e.key&&this.search()}},created:function(){var e=this;null!=this.$store.state.userProfile&&""!=this.$store.state.userProfile||U.getProfile(this.$store.state.user.id,this.$store.state.token).then((function(t){t.data?e.$store.commit("SET_USER_PROFILE",t.data):e.$router.push({name:"setup",params:{userId:e.$store.state.user.id}})}))}},ne=ae,ie=(s("bc1b"),Object(u["a"])(ne,N,M,!1,null,null,null)),oe=ie.exports,ue={name:"home",components:{BusinessSearch:oe},created:function(){this.$store.commit("CLEAR_MSGS"),this.$store.commit("CLEAR_LAST_SEARCH")}},le=ue,ce=Object(u["a"])(le,I,L,!1,null,null,null),de=ce.exports,me=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("user-profile-form")],1)},fe=[],pe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",[e._v(e._s(e.headerText))]),s("div",[s("form",{on:{submit:function(t){return t.preventDefault(),e.save.apply(null,arguments)}}},[s("div",{staticClass:"form-element"},[s("label",{attrs:{for:"first_name"}},[e._v("First Name: ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.firstName,expression:"profile.firstName"}],attrs:{id:"first_name",type:"text",disabled:e.isEditZip},domProps:{value:e.profile.firstName},on:{input:function(t){t.target.composing||e.$set(e.profile,"firstName",t.target.value)}}})]),s("div",{staticClass:"form-element"},[s("label",{attrs:{for:"last_name"}},[e._v("Last Name:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.lastName,expression:"profile.lastName"}],attrs:{id:"last_name",type:"text",disabled:e.isEditZip},domProps:{value:e.profile.lastName},on:{input:function(t){t.target.composing||e.$set(e.profile,"lastName",t.target.value)}}})]),s("div",{staticClass:"form-element"},[s("label",{attrs:{for:"email"}},[e._v("Email Address")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.email,expression:"profile.email"}],attrs:{id:"email",type:"email",disabled:e.isEditZip},domProps:{value:e.profile.email},on:{input:function(t){t.target.composing||e.$set(e.profile,"email",t.target.value)}}})]),s("div",{staticClass:"form-element"},[s("label",{attrs:{for:"zip_code"}},[e._v("Search Zip Code: ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.searchZip,expression:"profile.searchZip"}],attrs:{id:"zip_code",type:"text"},domProps:{value:e.profile.searchZip},on:{input:function(t){t.target.composing||e.$set(e.profile,"searchZip",t.target.value)}}})]),s("div",{staticClass:"form-element"},[s("button",[e._v(e._s(e.saveUpdateBtnText))]),s("button",{on:{click:function(t){return t.preventDefault(),e.cancel.apply(null,arguments)}}},[e._v("Cancel")])])])])])},he=[],ve={name:"user-profile-form",data:function(){return{profile:{}}},created:function(){this.$store.state.userProfile&&(this.profile=this.$store.state.userProfile)},computed:{isEdit:function(){return this.$store.state.userProfile},isEditZip:function(){return!(!this.$route.query||!this.$route.query.editzip)},saveUpdateBtnText:function(){return this.isEdit?"Update":"Save"},headerText:function(){return this.isEdit?"Update Profile:":"Pleasse Create Your Profile:"}},methods:{save:function(){var e=this;this.profile.userId=this.$store.state.user.id;var t=this.profile;U.saveProfile(t,this.isEdit,this.$store.state.token).then((function(t){e.$store.commit("SET_USER_PROFILE",t.data),e.$store.commit("CLEAR_LAST_SEARCH"),e.$router.push({name:"search"})}))},cancel:function(){this.isEdit?this.$router.push({name:"search"}):this.$router.push({name:"logout"})}}},ge=ve,_e=Object(u["a"])(ge,pe,he,!1,null,null,null),be=_e.exports,Ee={components:{UserProfileForm:be}},Se=Ee,Ce=Object(u["a"])(Se,me,fe,!1,null,null,null),ke=Ce.exports,$e=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("business-search")],1)},Te=[],ye={name:"search",components:{BusinessSearch:oe},created:function(){this.$store.commit("CLEAR_MSGS")}},we=ye,Re=Object(u["a"])(we,$e,Te,!1,null,null,null),Pe=Re.exports,Oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("nav",{attrs:{id:"link-section"}},[r("router-link",{attrs:{to:{name:"search"}}},[r("span",{staticClass:"main-link"},[e._v("Back to Search")])])],1),e.hasStatusMsg?r("div",[r("message-pane")],1):e._e(),e.isLoading?r("div",[r("img",{attrs:{src:s("0f04")}})]):e._e(),e.isLoading?e._e():r("business-details",{attrs:{businessInfo:e.businessInfo}})],1)},xe=[],Ae=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"info-section",style:e.cssVars},[s("div",{staticClass:"detail-section"},[s("div",{staticClass:"info-field bold",attrs:{id:"name-info"}},[s("div",{attrs:{id:"name-text"}},[e._v(" "+e._s(e.businessInfo.name)+" ")]),e._v(" "),s("div",{staticClass:"bookmark",attrs:{id:"mark-icon"},on:{click:e.toggleBookmark}},[s("span",{directives:[{name:"show",rawName:"v-show",value:!e.isBookmarked,expression:"!isBookmarked"}]},[s("i",{staticClass:"fa-regular fa-bookmark"})]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.isBookmarked,expression:"isBookmarked"}],staticClass:"green"},[s("i",{staticClass:"fa-solid fa-bookmark"})])])]),s("div",{staticClass:"info-field",attrs:{id:"address-info"}},[e._v(" "+e._s(e.businessInfo.location.address1)+" ")]),s("div",{staticClass:"info-field",attrs:{id:"city-zip-info"}},[e._v(" "+e._s(e.businessInfo.location.city)+", "+e._s(e.businessInfo.location.state)+" "+e._s(e.businessInfo.location.zipCode)+" ")]),e.businessInfo.phone?s("div",{staticClass:"info-field",attrs:{id:"phone-info"}},[e._v(" "+e._s(e.formatttedPhone)+" ")]):e._e(),e.businessInfo.is_closed?s("div",{staticClass:"info-field info-is-closed bold",attrs:{id:"not-found"}},[e._v(" BUSINESS IS PERMANETLY CLOSED ")]):e._e()])])])},Ie=[],Le={name:"business-details",props:["businessInfo"],components:{},data:function(){return{bookmarked:!1}},computed:{formatttedPhone:function(){var e=this.businessInfo.phone;if(null!=e){var t=e.substring(2,5),s=e.substring(5,8),r=e.substring(8);return"("+t+") "+s+"-"+r}return null},isBookmarked:function(){return!!this.bookmarked},cssVars:function(){return{"--background-image":"url(".concat(this.businessInfo.image_url,")")}}},methods:{toggleBookmark:function(){var e=this;this.bookmarked=!this.bookmarked,U.updateFavorite(this.$store.state.user.id,this.businessInfo.id,this.businessInfo.name+" "+this.businessInfo.location.address1,this.bookmarked,this.$store.state.token).then((function(t){200===t.status?e.$store.commit("SET_MESSAGE_INFO",{message:"Favorite updated.",type:"SUCCESS"}):(alert("Unable to update Favorite.."),e.bookmarked=!e.bookmarked)})).catch((function(){e.$store.commit("SET_MESSAGE_INFO",{message:"Favorite Unable to update Favorite.",type:"ERROR"}),e.bookmarked=!e.bookmarked}))}},created:function(){var e=this;this.$store.commit("CLEAR_MSGS"),U.userHasFavorite(this.$store.state.user.id,this.businessInfo.id,this.$store.state.token).then((function(t){e.bookmarked=t.data}))}},Ne=Le,Me=(s("a12a"),Object(u["a"])(Ne,Ae,Ie,!1,null,"147ebc89",null)),Fe=Me.exports,Be={components:{BusinessDetails:Fe,MessagePane:re},data:function(){return{businessInfo:null,isLoading:!0}},computed:{hasStatusMsg:function(){return this.$store.state.statusMsg}},created:function(){var e=this;B.getBusinessDetails(this.$route.params.businessId).then((function(t){e.businessInfo=t.data,e.isLoading=!1})).catch((function(t){t.response&&404===t.response.status?(e.notFound=!0,e.isLoading=!1,e.$store.commit("SET_ERROR_MSG","Business not found."),e.$store.commit("SET_MESSAGE_INFO",{message:"Business not found.",type:"ERROR"})):t.code&&"ECONNABORTED"===t.code&&(e.$store.commit("SET_MESSAGE_INFO",{message:"Unable to connect to data server.",type:"ERROR"}),e.isLoading=!1)}))}},Ue=Be,je=(s("2318"),Object(u["a"])(Ue,Oe,xe,!1,null,null,null)),Ge=je.exports,qe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("nav",{attrs:{id:"link-section"}},[s("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.backToSearch.apply(null,arguments)}}},[e._v("Back to Search")])]),s("user-favorites-list")],1)},ze=[],Ze=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"list-section"},[e.isLoading?r("div",[r("img",{attrs:{src:s("0f04")}})]):e._e(),e.isLoading?e._e():r("div",e._l(e.favorites,(function(t,s){return r("div",{key:s,staticClass:"list-item"},[r("router-link",{staticClass:"item-link",attrs:{to:{name:"business-details",params:{businessId:t.yelpId}}}},[e._v(e._s(t.businessName))])],1)})),0)])},De=[],He={name:"user-favorites-list",data:function(){return{favorites:[],isLoading:!0}},created:function(){var e=this;this.$store.commit("CLEAR_MSGS"),U.getFavorites(this.$store.state.user.id,this.$store.state.token).then((function(t){e.favorites=t.data,e.isLoading=!1}))}},Je=He,Ye=(s("cc5c"),Object(u["a"])(Je,Ze,De,!1,null,null,null)),Ke=Ye.exports,Ve={components:{UserFavoritesList:Ke},created:function(){this.$store.commit("CLEAR_SUCCESS_MSG")},methods:{backToSearch:function(){this.$store.commit("CLEAr_MSGS"),this.$router.push({name:"search"})}}},We=Ve,Qe=(s("238b"),Object(u["a"])(We,qe,ze,!1,null,null,null)),Xe=Qe.exports,et=(s("e9c4"),s("2f62"));r["a"].use(et["a"]);var tt=localStorage.getItem("token"),st=JSON.parse(localStorage.getItem("user"));null!=tt&&(h.a.defaults.headers.common["Authorization"]="Bearer ".concat(tt));var rt=new et["a"].Store({state:{token:tt||"",user:st||{},userProfile:null,lastSearchTerm:null,lastSearchResults:null,statusMsg:null,statusType:null},mutations:{SET_AUTH_TOKEN:function(e,t){e.token=t,localStorage.setItem("token",t),h.a.defaults.headers.common["Authorization"]="Bearer ".concat(t)},SET_USER:function(e,t){e.user=t,localStorage.setItem("user",JSON.stringify(t))},SET_USER_PROFILE:function(e,t){e.userProfile=t},SET_LAST_SEARCH:function(e,t){e.lastSearchTerm=t.searchTerm,e.lastSearchResults=t.searchResults},CLEAR_LAST_SEARCH:function(e){e.lastSearchTerm=null,e.lastSearchResults=null},SET_MESSAGE_INFO:function(e,t){this.state.statusMsg=t.message,this.state.statusType=t.type},CLEAR_MSGS:function(e){e.statusMsg=null,e.statusType=null},CLEAR_ALL:function(e){e.statusMsg=null,e.statusType=null,e.lastSearchTerm=null,e.lastSearchResults=null},LOGOUT:function(e){localStorage.removeItem("token"),localStorage.removeItem("user"),e.token="",e.user={},e.userProfile=null,e.lastSearchTerm=null,e.lastSearchResults=null,h.a.defaults.headers.common={}}}});r["a"].use(d["a"]);var at=new d["a"]({mode:"history",base:"/capstone-vue-deploy-demo/",routes:[{path:"/",name:"home",component:de,meta:{requiresAuth:!0}},{path:"/",name:"search",component:Pe,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:E,meta:{requiresAuth:!1}},{path:"/logout",name:"logout",component:y,meta:{requiresAuth:!1}},{path:"/register",name:"register",component:A,meta:{requiresAuth:!1}},{path:"/setup-profile",name:"setup",component:ke},{path:"/user-favorites",name:"user-favorites",component:Xe,meta:{requiresAuth:!0}},{path:"/business-details/:businessId",name:"business-details",component:Ge,meta:{requiresAuth:!0}}]});at.beforeEach((function(e,t,s){var r=e.matched.some((function(e){return e.meta.requiresAuth}));r&&""===rt.state.token?s("/login"):s()}));var nt=at;s("15f5"),s("7051");r["a"].config.productionTip=!1,h.a.defaults.baseURL="https://my-businesses.fly.dev/",new r["a"]({router:nt,store:rt,render:function(e){return e(c)}}).$mount("#app")},8237:function(e,t,s){"use strict";s("c34c")},9557:function(e,t,s){},"9ef3":function(e,t,s){},a12a:function(e,t,s){"use strict";s("18ed")},bc1b:function(e,t,s){"use strict";s("2078")},bd85:function(e,t,s){},bec6:function(e,t,s){"use strict";s("9557")},c34c:function(e,t,s){},cc5c:function(e,t,s){"use strict";s("e84b")},cd06:function(e,t,s){},d868:function(e,t,s){"use strict";s("cd06")},e314:function(e,t,s){},e84b:function(e,t,s){}});
//# sourceMappingURL=app.af8efa63.js.map