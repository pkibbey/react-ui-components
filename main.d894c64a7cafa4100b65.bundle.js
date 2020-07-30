(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),rebass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(14),_assets_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),ErrorText=function ErrorText(_ref){var error=_ref.error;return error.isError&&error.hasInteracted?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__.d,{sx:{fontSize:_assets_theme__WEBPACK_IMPORTED_MODULE_2__.a.fontSizes[0],fontFamily:'"Roboto", sans-serif',lineHeight:"20px",color:_assets_theme__WEBPACK_IMPORTED_MODULE_2__.a.colors.red,webkitFontSmoothing:"antialiased",maxWidth:["100%","100%",414]},mb:3},error.message):null};ErrorText.__docgenInfo={description:"",methods:[],displayName:"ErrorText"},__webpack_exports__.a=ErrorText,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ErrorText.js"]={name:"ErrorText",docgenInfo:ErrorText.__docgenInfo,path:"src/ErrorText.js"})},2:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={fontSizes:[".75rem",".875rem","1rem","1.25rem","1.5rem","2rem","2.5rem"],space:[0,".25rem",".5rem","1rem","1.5rem","2rem","2.5rem","4rem","8rem","11.875rem"],colors:{orange:"#ff6900",electricBlue:"#005EF4",electricBlueHover:"#003FA3",darkBlue:"#1B1E4D",navy:"#090C43",darkNavy:"#04051F",navyGray:"#2D2F52",darkGray:"#675D55",darkerGray:"#463E36",gray:"#847970",lightGray:"#D9D4D0",lighterGray:"#F8F5F3",lightGrey:"#A2A3B8",red:"#DF2A31",lightRed:"#FEECEC",lightBlue:"#5879DA",shadow:"#141358",aqua:"#5ED7FB",aquaHover:"#00a4d6"}}},311:function(module,exports,__webpack_require__){__webpack_require__(312),__webpack_require__(462),__webpack_require__(463),module.exports=__webpack_require__(643)},378:function(module,exports){},463:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(135),_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(306);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({decorators:[_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_1__.withA11y],backgrounds:[{name:"light",value:"#FFF",default:!0},{name:"dark navy",value:"#04051F"}]})},643:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(135);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(645)],module)}.call(this,__webpack_require__(644)(module))},645:function(module,exports,__webpack_require__){var map={"./0-Button.stories.js":669,"./1-InputField.stories.js":668,"./2-SelectField.stories.js":670,"./4-LoadingDots.stories.js":671,"./5-Loader.stories.js":667};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=645},667:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Light",(function(){return Light})),__webpack_require__.d(__webpack_exports__,"Dark",(function(){return Dark}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src_Loader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(85),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_src_assets_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2);__webpack_exports__.default={title:"Loader",component:_src_Loader__WEBPACK_IMPORTED_MODULE_1__.a,decorators:[_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs],parameters:{backgrounds:[{name:"light",value:"#FFF"},{name:"dark",value:_src_assets_theme__WEBPACK_IMPORTED_MODULE_3__.a.colors.darkNavy,default:!0}]}};var Light=function Light(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Loader__WEBPACK_IMPORTED_MODULE_1__.a,{size:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("size",["default","small","large"],"default"),variant:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("style",["light","dark"],"light")})},Dark=function Dark(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Loader__WEBPACK_IMPORTED_MODULE_1__.a,{size:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("size",["default","small","large"],"default"),variant:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("style",["light","dark"],"dark")})};Light.__docgenInfo={description:"",methods:[],displayName:"Light"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/5-Loader.stories.js"]={name:"Light",docgenInfo:Light.__docgenInfo,path:"stories/5-Loader.stories.js"}),Dark.__docgenInfo={description:"",methods:[],displayName:"Dark"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/5-Loader.stories.js"]={name:"Dark",docgenInfo:Dark.__docgenInfo,path:"stories/5-Loader.stories.js"})},668:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return _1_InputField_stories_Default})),__webpack_require__.d(__webpack_exports__,"DefaultWithErrors",(function(){return _1_InputField_stories_DefaultWithErrors}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),objectSpread2=__webpack_require__(56),slicedToArray=__webpack_require__(196),index_esm=__webpack_require__(14),dist_index_esm=__webpack_require__(84),ErrorText=__webpack_require__(137),theme=__webpack_require__(2),ErrorRequirements_getStyles=function getStyles(variant){switch(variant){case"errorText":return{fontSize:theme.a.fontSizes[0],fontFamily:'"Roboto", sans-serif',lineHeight:"20px",color:theme.a.colors.red,webkitFontSmoothing:"antialiased"};default:return{fontSize:theme.a.fontSizes[0],fontFamily:'"Roboto", sans-serif',lineHeight:"20px",color:theme.a.colors.navyGray,webkitFontSmoothing:"antialiased"}}},ErrorRequirements_ErrorRequirementsItem=function ErrorRequirementsItem(_ref){var items=_ref.items;return Object.keys(items).map((function(item){switch(item){case"data":return items.data.map((function(d){return react_default.a.createElement(index_esm.d,{key:d.name,sx:ErrorRequirements_getStyles(d.isError?"errorText":"errorInformation"),ml:d.shouldIndent?2:0},"".concat(d.name))}));case"name":return react_default.a.createElement(index_esm.d,{key:items.name,sx:ErrorRequirements_getStyles("errorInformation")},"".concat(items.name,":"));default:return null}}))},ErrorRequirements_ErrorRequirements=function ErrorRequirements(_ref2){var focused=_ref2.focused,error=_ref2.error;return(!0===error.isError||focused)&&error.requirements?react_default.a.createElement(index_esm.d,{"data-testid":"error-requirements",ml:6,mr:6,sx:Object(objectSpread2.a)(Object(objectSpread2.a)({},ErrorRequirements_getStyles("errorInformation")),{},{overflow:"visible",height:0,display:["none","block"]})},react_default.a.createElement(ErrorRequirements_ErrorRequirementsItem,{items:error.requirements})):null};ErrorRequirements_ErrorRequirements.__docgenInfo={description:"",methods:[],displayName:"ErrorRequirements"};var src_ErrorRequirements=ErrorRequirements_ErrorRequirements;function PasswordIcon(_ref){var variant=_ref.variant;return react_default.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},react_default.a.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"hide"===variant?"M16 8c0 3.314-3.582 6-8 6s-8-2.686-8-6 3.582-6 8-6 8 2.686 8 6zm-2 0c0 2.21-2.686 4-6 4s-6-1.79-6-4 2.686-4 6-4 6 1.79 6 4zm-6 2a2 2 0 100-4 2 2 0 000 4z":"M8 14c4.418 0 8-2.686 8-6s-3.582-6-8-6-8 2.686-8 6 3.582 6 8 6zm0-4a2 2 0 100-4 2 2 0 000 4z",clipRule:"evenodd"}))}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ErrorRequirements.js"]={name:"ErrorRequirements",docgenInfo:ErrorRequirements_ErrorRequirements.__docgenInfo,path:"src/ErrorRequirements.js"}),PasswordIcon.__docgenInfo={description:"",methods:[],displayName:"PasswordIcon"};var assets_PasswordIcon=PasswordIcon;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/assets/PasswordIcon.js"]={name:"PasswordIcon",docgenInfo:PasswordIcon.__docgenInfo,path:"src/assets/PasswordIcon.js"});var InputField_getStyles=function getStyles(variant){switch(variant){case"textInputError":return{fontSize:1,fontFamily:'"Roboto", sans-serif',color:theme.a.colors.navyGray,borderWidth:1,borderStyle:"solid",borderColor:theme.a.colors.red,backgroundColor:theme.a.colors.lightRed,borderRadius:8,lineHeight:"40px",paddingLeft:theme.a.space[3],paddingRight:theme.a.space[3],paddingTop:0,paddingBottom:0,letterSpacing:"0.01em",webkitFontSmoothing:"antialiased",boxShadow:"inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px ".concat(theme.a.colors.lightRed),"&::placeholder":{color:theme.a.colors.darkGray}};default:return{fontSize:1,fontFamily:'"Roboto", sans-serif',color:theme.a.colors.navyGray,borderWidth:1,borderStyle:"solid",borderColor:theme.a.colors.gray,borderRadius:8,lineHeight:"40px",paddingLeft:theme.a.space[3],paddingRight:theme.a.space[3],paddingTop:0,paddingBottom:0,letterSpacing:"0.01em",webkitFontSmoothing:"antialiased",boxShadow:"inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px white","&::placeholder":{color:theme.a.colors.darkGray}}}},InputField_InputField=function InputField(_ref){var name=_ref.name,type=_ref.type,placeholder=_ref.placeholder,value=_ref.value,handleChange=_ref.handleChange,handleBlur=_ref.handleBlur,error=_ref.error,shouldFocusOnLoad=_ref.shouldFocusOnLoad,isFullWidth=_ref.isFullWidth,_useState=Object(react.useState)(!1),_useState2=Object(slicedToArray.a)(_useState,2),isFocused=_useState2[0],setIsFocused=_useState2[1],_useState3=Object(react.useState)(!1),_useState4=Object(slicedToArray.a)(_useState3,2),isPasswordVisible=_useState4[0],setIsPasswordVisible=_useState4[1],inputRef=Object(react.useRef)(),isPassword="password"===type;Object(react.useEffect)((function(){shouldFocusOnLoad&&inputRef.current.focus()}),[shouldFocusOnLoad]);var VisibilityIcon=function VisibilityIcon(){return react_default.a.createElement(index_esm.c,{"data-testid":"password-icon",title:"toggle password visibility",alignItems:"center",onClick:function onClick(){return setIsPasswordVisible(!isPasswordVisible)},sx:{padding:"13px",position:"absolute",right:0,top:0,cursor:"pointer",color:theme.a.colors.gray,zIndex:1}},react_default.a.createElement(assets_PasswordIcon,{variant:isPasswordVisible?"show":"hide"}))};return react_default.a.createElement(index_esm.a,null,react_default.a.createElement(index_esm.a,{sx:{display:isFullWidth?"block":"grid",gridTemplateColumns:["auto","5fr 4fr"]}},react_default.a.createElement(index_esm.a,{sx:{position:"relative"}},react_default.a.createElement(dist_index_esm.b,{htmlFor:"input-field-".concat(name),style:{opacity:0,height:0,width:0,pointerEvents:"none"}},name),isPassword&&react_default.a.createElement(VisibilityIcon,null),react_default.a.createElement(dist_index_esm.a,{autoComplete:function getAutoCompleteType(){return Math.random().toString(36).substring(2,15)}(),"data-testid":"input-field-".concat(name),id:"input-field-".concat(name),ref:inputRef,type:isPassword&&!isPasswordVisible?"password":"text",placeholder:placeholder,mb:error.isError?2:4,value:value,onFocus:function onFocus(){return setIsFocused(!0)},onBlur:function onBlur(){setIsFocused(!1),handleBlur&&handleBlur(name,{hasInteracted:!0})},pr:isPassword&&!isPasswordVisible?6:3,onChange:function onChange(event){return handleChange&&handleChange(name,event.target.value)},sx:Object(objectSpread2.a)(Object(objectSpread2.a)({},InputField_getStyles(error.isError?"textInputError":"textInput")),{},{"&:focus, &:hover":{outlineColor:"navyGray",outlineWidth:2,outlineStyle:"auto"}})})),react_default.a.createElement(src_ErrorRequirements,{focused:isFocused,error:error})),error&&react_default.a.createElement(ErrorText.a,{error:error}))};InputField_InputField.__docgenInfo={description:"",methods:[],displayName:"InputField"};var src_InputField=InputField_InputField;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/InputField.js"]={name:"InputField",docgenInfo:InputField_InputField.__docgenInfo,path:"src/InputField.js"});var dist=__webpack_require__(23),addon_knobs_dist=__webpack_require__(4),INPUT_OPTIONS=(__webpack_exports__.default={title:"InputField",component:src_InputField,decorators:[addon_knobs_dist.withKnobs]},["default","password","email","firstName","lastName"]),_1_InputField_stories_Default=function Default(){return react_default.a.createElement(src_InputField,{shouldFocusOnLoad:Object(addon_knobs_dist.boolean)("shouldFocusOnLoad",!0),isFullWidth:Object(addon_knobs_dist.boolean)("isFullWidth",!0),name:"default",type:Object(addon_knobs_dist.select)("type",INPUT_OPTIONS,"default"),placeholder:Object(addon_knobs_dist.text)("placeholder","default input field"),value:Object(addon_knobs_dist.text)("value",""),handleChange:Object(dist.action)("handleChange"),error:{},handleClick:Object(dist.action)("handleClick")})},_1_InputField_stories_DefaultWithErrors=function DefaultWithErrors(){return react_default.a.createElement(src_InputField,{shouldFocusOnLoad:Object(addon_knobs_dist.boolean)("shouldFocusOnLoad",!1),isFullWidth:Object(addon_knobs_dist.boolean)("isFullWidth",!1),name:"input-with-errors",type:Object(addon_knobs_dist.select)("type",INPUT_OPTIONS,"default"),placeholder:Object(addon_knobs_dist.text)("placeholder","input field with error"),value:Object(addon_knobs_dist.text)("value",""),handleChange:Object(dist.action)("handleChange"),error:{isError:!0,hasInteracted:!0,message:"Invalid value",requirements:{name:"title",data:[{name:"item 1",isError:!0,shouldIndent:!0},{name:"item 2",isError:!1,shouldIndent:!0},{name:"item 3",isError:!0,shouldIndent:!0}]}},handleClick:Object(dist.action)("handleClick")})};_1_InputField_stories_Default.__docgenInfo={description:"",methods:[],displayName:"Default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/1-InputField.stories.js"]={name:"Default",docgenInfo:_1_InputField_stories_Default.__docgenInfo,path:"stories/1-InputField.stories.js"}),_1_InputField_stories_DefaultWithErrors.__docgenInfo={description:"",methods:[],displayName:"DefaultWithErrors"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/1-InputField.stories.js"]={name:"DefaultWithErrors",docgenInfo:_1_InputField_stories_DefaultWithErrors.__docgenInfo,path:"stories/1-InputField.stories.js"})},669:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return _0_Button_stories_Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return _0_Button_stories_Secondary}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),objectWithoutProperties=__webpack_require__(310),index_esm=__webpack_require__(14),Loader=__webpack_require__(85),theme=__webpack_require__(2),Button_getStyles=function getStyles(variant){switch(variant){case"secondary":return{fontSize:theme.a.fontSizes[0],fontFamily:'"Roboto", sans-serif',fontWeight:700,padding:"0 24px",height:"32px",borderRadius:32,cursor:"pointer",backgroundColor:theme.a.colors.lighterGray,color:"darkGray",webkitFontSmoothing:"antialiased",textDecoration:"none",transition:"all 2s","&:hover":{backgroundColor:theme.a.colors.lightGray,color:"darkerGray"}};default:return{fontSize:theme.a.fontSizes[2],fontFamily:'"Roboto", sans-serif',fontWeight:700,height:"62px",paddingTop:0,paddingBottom:0,borderRadius:32,letterSpacing:"0.008em",cursor:"pointer",backgroundColor:theme.a.colors.electricBlue,color:"white",webkitFontSmoothing:"antialiased",maxWidth:"100%",whiteSpace:"nowrap",width:"100%",transition:"all 2s","&:hover":{backgroundColor:theme.a.colors.electricBlueHover}}}},Button_Button=function Button(_ref){var isLoading=_ref.isLoading,handleClick=_ref.handleClick,label=_ref.label,variant=_ref.variant,otherProps=Object(objectWithoutProperties.a)(_ref,["isLoading","handleClick","label","variant"]);return react_default.a.createElement(index_esm.b,Object.assign({onClick:handleClick,sx:Button_getStyles(variant)},otherProps),isLoading?react_default.a.createElement(Loader.a,{size:"default"!==variant?"small":"default"}):label)};Button_Button.__docgenInfo={description:"",methods:[],displayName:"Button"};var src_Button=Button_Button;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Button.js"]={name:"Button",docgenInfo:Button_Button.__docgenInfo,path:"src/Button.js"});var dist=__webpack_require__(23),addon_knobs_dist=__webpack_require__(4),BUTTON_OPTIONS=(__webpack_exports__.default={title:"Button",component:src_Button,decorators:[addon_knobs_dist.withKnobs]},["primary","secondary"]),_0_Button_stories_Primary=function Primary(){return react_default.a.createElement(src_Button,{isLoading:Object(addon_knobs_dist.boolean)("isLoading",!1),handleClick:Object(dist.action)("handleClick"),label:Object(addon_knobs_dist.text)("label","button label"),variant:Object(addon_knobs_dist.select)("variant",BUTTON_OPTIONS,"primary")})},_0_Button_stories_Secondary=function Secondary(){return react_default.a.createElement(src_Button,{isLoading:Object(addon_knobs_dist.boolean)("isLoading",!1),handleClick:Object(dist.action)("handleClick"),label:Object(addon_knobs_dist.text)("label","button label"),variant:Object(addon_knobs_dist.select)("variant",BUTTON_OPTIONS,"secondary")})};_0_Button_stories_Primary.__docgenInfo={description:"",methods:[],displayName:"Primary"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/0-Button.stories.js"]={name:"Primary",docgenInfo:_0_Button_stories_Primary.__docgenInfo,path:"stories/0-Button.stories.js"}),_0_Button_stories_Secondary.__docgenInfo={description:"",methods:[],displayName:"Secondary"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/0-Button.stories.js"]={name:"Secondary",docgenInfo:_0_Button_stories_Secondary.__docgenInfo,path:"stories/0-Button.stories.js"})},670:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return _2_SelectField_stories_Default})),__webpack_require__.d(__webpack_exports__,"DefaultWithErrors",(function(){return _2_SelectField_stories_DefaultWithErrors}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),dist=__webpack_require__(23),objectSpread2=__webpack_require__(56),index_esm=__webpack_require__(14),dist_index_esm=__webpack_require__(84),ErrorText=__webpack_require__(137),theme=__webpack_require__(2),SelectField_getStyles=function getStyles(variant){switch(variant){case"textInputError":return{fontSize:1,fontFamily:'"Roboto", sans-serif',color:theme.a.colors.navyGray,borderWidth:1,borderStyle:"solid",borderColor:theme.a.colors.red,backgroundColor:theme.a.colors.lightRed,borderRadius:8,lineHeight:"40px",paddingLeft:theme.a.space[3],paddingRight:theme.a.space[3],paddingTop:0,paddingBottom:0,letterSpacing:"0.01em",webkitFontSmoothing:"antialiased",webkitBoxShadow:"inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px ".concat(theme.a.colors.lightRed),"&::placeholder":{color:theme.a.colors.darkGray}};case"textInputErrorDisabled":return{fontSize:1,fontFamily:'"Roboto", sans-serif',color:theme.a.colors.darkGray,borderWidth:1,borderStyle:"solid",borderColor:theme.a.colors.red,backgroundColor:theme.a.colors.lightRed,borderRadius:8,lineHeight:"40px",paddingLeft:theme.a.space[3],paddingRight:theme.a.space[3],paddingTop:0,paddingBottom:0,letterSpacing:"0.01em",webkitFontSmoothing:"antialiased",webkitBoxShadow:"inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px ".concat(theme.a.colors.lightRed),"&::placeholder":{color:theme.a.colors.darkGray}};case"textInputDisabled":return{fontSize:1,fontFamily:'"Roboto", sans-serif',color:theme.a.colors.darkGray,borderWidth:1,borderStyle:"solid",borderColor:theme.a.colors.gray,borderRadius:8,lineHeight:"40px",paddingLeft:theme.a.space[3],paddingRight:theme.a.space[3],paddingTop:0,paddingBottom:0,letterSpacing:"0.01em",webkitFontSmoothing:"antialiased",boxShadow:"inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px white","&::placeholder":{color:theme.a.colors.darkGray}};default:return{fontSize:1,fontFamily:'"Roboto", sans-serif',color:theme.a.colors.navyGray,borderWidth:1,borderStyle:"solid",borderColor:theme.a.colors.gray,borderRadius:8,lineHeight:"40px",paddingLeft:theme.a.space[3],paddingRight:theme.a.space[3],paddingTop:0,paddingBottom:0,letterSpacing:"0.01em",webkitFontSmoothing:"antialiased",boxShadow:"inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px white","&::placeholder":{color:theme.a.colors.darkGray}}}},SelectField_SelectField=function SelectField(_ref){var name=_ref.name,value=_ref.value,defaultValue=_ref.defaultValue,handleChange=_ref.handleChange,error=_ref.error,handleBlur=_ref.handleBlur,options=_ref.options;return react_default.a.createElement(index_esm.a,null,react_default.a.createElement(index_esm.a,{sx:{position:"relative",display:"grid",gridTemplateColumns:["auto","0 5fr 4fr"]}},react_default.a.createElement(dist_index_esm.b,{htmlFor:"select-field-".concat(name),style:{opacity:0,height:0,width:0,pointerEvents:"none"}},name),react_default.a.createElement(dist_index_esm.c,{"data-testid":"select-field-".concat(name),autoComplete:"off",defaultValue:defaultValue,onChange:function onChange(event){return handleChange&&handleChange(name,event.target.value)},onBlur:function onBlur(){return handleBlur&&handleBlur(name,{hasInteracted:!0})},name:"region",mb:(null==error?void 0:error.isError)?2:4,sx:Object(objectSpread2.a)(Object(objectSpread2.a)({},SelectField_getStyles(function getVariant(){return(null==error?void 0:error.isError)&&""===value?"textInputErrorDisabled":(null==error?void 0:error.isError)?"textInputError":""===value?"textInputDisabled":"textInput"}())),{},{"&:focus, &:hover":{outlineColor:"navyGray",outlineWidth:2,outlineStyle:"auto"}})},options.map((function(option){return react_default.a.createElement("option",{key:option.name,value:option.value,disabled:option.disabled},option.name)})))),error&&react_default.a.createElement(ErrorText.a,{error:error}))};SelectField_SelectField.__docgenInfo={description:"",methods:[],displayName:"SelectField"};var src_SelectField=SelectField_SelectField;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/SelectField.js"]={name:"SelectField",docgenInfo:SelectField_SelectField.__docgenInfo,path:"src/SelectField.js"});var addon_knobs_dist=__webpack_require__(4),_2_SelectField_stories_Default=(__webpack_exports__.default={title:"SelectField",component:src_SelectField,decorators:[addon_knobs_dist.withKnobs]},function Default(){return react_default.a.createElement(src_SelectField,{name:Object(addon_knobs_dist.text)("name","select-field"),defaultValue:"value 1",handleChange:Object(dist.action)("handleChange"),handleBlur:Object(dist.action)("handleBlur"),options:[{name:"option 1",value:"value 1"},{name:"option 2",value:"value 2"}]})}),_2_SelectField_stories_DefaultWithErrors=function DefaultWithErrors(){return react_default.a.createElement(src_SelectField,{name:Object(addon_knobs_dist.text)("name","select-field"),defaultValue:"value 1",handleChange:Object(dist.action)("handleChange"),error:{isError:!0,hasInteracted:!0,message:"Invalid value"},handleBlur:Object(dist.action)("handleBlur"),options:[{name:"option 1",value:"value 1"},{name:"option 2",value:"value 2"}]})};_2_SelectField_stories_Default.__docgenInfo={description:"",methods:[],displayName:"Default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/2-SelectField.stories.js"]={name:"Default",docgenInfo:_2_SelectField_stories_Default.__docgenInfo,path:"stories/2-SelectField.stories.js"}),_2_SelectField_stories_DefaultWithErrors.__docgenInfo={description:"",methods:[],displayName:"DefaultWithErrors"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/2-SelectField.stories.js"]={name:"DefaultWithErrors",docgenInfo:_2_SelectField_stories_DefaultWithErrors.__docgenInfo,path:"stories/2-SelectField.stories.js"})},671:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return _4_LoadingDots_stories_Default}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),taggedTemplateLiteral=__webpack_require__(309),index_esm=__webpack_require__(14),core_browser_esm=__webpack_require__(105);function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  from, 10%, 27%, 40%, to {\n    transform: translate3d(0,0,0);\n  }\n  20%, 22% {\n    transform: translate3d(0, -8px, 0);\n  }\n  35% {\n    transform: translate3d(0, -4px, 0);\n  }\n  45% {\n    transform: translate3d(0,-1px,0);\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var bounce=Object(core_browser_esm.b)(_templateObject()),LoadingDots_LoadingDot=function LoadingDot(_ref){var delay=_ref.delay;return react_default.a.createElement(index_esm.a,{as:"span",sx:{backgroundColor:"white",width:"3px",height:"3px",borderRadius:"50%",animationName:bounce,animationDuration:"1.5s",animationTimingFunction:"linear",animationIterationCount:"3",animationDelay:"".concat(delay,"s")}})},LoadingDots_LoadingDots=function LoadingDots(){return react_default.a.createElement(index_esm.a,{as:"span",style:{display:"inline-flex",alignItems:"center",justifyContent:"space-between",boxSizing:"border-box",width:"17px",height:"24px",marginLeft:"4px"}},react_default.a.createElement(LoadingDots_LoadingDot,{delay:0}),react_default.a.createElement(LoadingDots_LoadingDot,{delay:.15}),react_default.a.createElement(LoadingDots_LoadingDot,{delay:.3}))};LoadingDots_LoadingDots.__docgenInfo={description:"",methods:[],displayName:"LoadingDots"};var src_LoadingDots=LoadingDots_LoadingDots;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/LoadingDots.js"]={name:"LoadingDots",docgenInfo:LoadingDots_LoadingDots.__docgenInfo,path:"src/LoadingDots.js"});__webpack_exports__.default={title:"LoadingDots",component:src_LoadingDots,parameters:{backgrounds:[{name:"light",value:"#FFF"},{name:"dark navy",value:"#04051F",default:!0}]}};var _4_LoadingDots_stories_Default=function Default(){return react_default.a.createElement(src_LoadingDots,null)};_4_LoadingDots_stories_Default.__docgenInfo={description:"",methods:[],displayName:"Default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/4-LoadingDots.stories.js"]={name:"Default",docgenInfo:_4_LoadingDots_stories_Default.__docgenInfo,path:"stories/4-LoadingDots.stories.js"})},85:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),react_default=__webpack_require__.n(react),theme=__webpack_require__(2);function LoadingIcon(_ref){var variant=_ref.variant;return react_default.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"38",height:"38",stroke:"dark"===variant?theme.a.colors.darkGray:"white",viewBox:"0 0 38 38"},react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",strokeWidth:"2",transform:"translate(1 1)"},react_default.a.createElement("circle",{cx:"18",cy:"18",r:"18",strokeOpacity:"0.5"}),react_default.a.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18"},react_default.a.createElement("animateTransform",{attributeName:"transform",dur:"1s",from:"0 18 18",repeatCount:"indefinite",to:"360 18 18",type:"rotate"}))))}LoadingIcon.__docgenInfo={description:"",methods:[],displayName:"LoadingIcon"};var assets_LoadingIcon=LoadingIcon;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/assets/LoadingIcon.js"]={name:"LoadingIcon",docgenInfo:LoadingIcon.__docgenInfo,path:"src/assets/LoadingIcon.js"});var convertSizetoPx=function convertSizetoPx(size){switch(size){case"small":return 18;case"large":return 40;default:return 24}},Loader_Loader=function Loader(_ref){var size=_ref.size,variant=_ref.variant;return react_default.a.createElement(assets_LoadingIcon,{"data-testid":"loader",variant:variant,height:convertSizetoPx(size),width:convertSizetoPx(size)})};Loader_Loader.__docgenInfo={description:"",methods:[],displayName:"Loader"};__webpack_exports__.a=Loader_Loader;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Loader.js"]={name:"Loader",docgenInfo:Loader_Loader.__docgenInfo,path:"src/Loader.js"})}},[[311,1,2]]]);
//# sourceMappingURL=main.d894c64a7cafa4100b65.bundle.js.map