"use strict";(self.webpackChunkstyle_dictionary_storybook_style_guide=self.webpackChunkstyle_dictionary_storybook_style_guide||[]).push([[250],{"./stories/Border.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Radius:()=>Radius,Width:()=>Width,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_src_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils.js"),_dist_tokens__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/tokens.json"),_src_components_Grid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Grid.jsx"),_src_components_Token_style__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Token.style.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Border"},BorderSample=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z)(_src_components_Token_style__WEBPACK_IMPORTED_MODULE_3__.Nm)`
  border-width: ${props=>props.token.value};
  border-style: solid;
`,Width={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_components_Grid__WEBPACK_IMPORTED_MODULE_2__.r,{tokens:(0,_src_utils__WEBPACK_IMPORTED_MODULE_5__.D)(_dist_tokens__WEBPACK_IMPORTED_MODULE_1__,"size.border"),SampleFormat:BorderSample})},RadiusSample=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z)(_src_components_Token_style__WEBPACK_IMPORTED_MODULE_3__.Nm)`
  border-width: var(--size-border-1);
  border-style: solid;
  border-radius: ${props=>props.token.value};
`,Radius={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_components_Grid__WEBPACK_IMPORTED_MODULE_2__.r,{tokens:(0,_src_utils__WEBPACK_IMPORTED_MODULE_5__.D)(_dist_tokens__WEBPACK_IMPORTED_MODULE_1__,"size.radius"),SampleFormat:RadiusSample})};Width.parameters={...Width.parameters,docs:{...Width.parameters?.docs,source:{originalSource:'{\n  render: () => <Grid tokens={getTokenGroup(tokens, "size.border")} SampleFormat={BorderSample} />\n}',...Width.parameters?.docs?.source}}},Radius.parameters={...Radius.parameters,docs:{...Radius.parameters?.docs,source:{originalSource:'{\n  render: () => <Grid tokens={getTokenGroup(tokens, "size.radius")} SampleFormat={RadiusSample} />\n}',...Radius.parameters?.docs?.source}}};const __namedExportsOrder=["Width","Radius"]},"./src/components/Grid.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Grid});__webpack_require__("./node_modules/react/index.js");var TokenName=__webpack_require__("./src/components/TokenName.jsx"),TokenValue=__webpack_require__("./src/components/TokenValue.jsx"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");const StyledGrid=emotion_styled_browser_esm.Z.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: var(--size-spacing-3);
  column-gap: var(--size-spacing-3);

  ${props=>props.columns&&`\n    grid-template-columns: repeat(${props.columns}, 1fr);\n  `}
`,GridItem=emotion_styled_browser_esm.Z.div`
  display: grid;
  border: var(--size-border-1) solid var(--color-grey-300);
  border-radius: var(--size-radius-base);
  padding: var(--size-spacing-2);

  > div:nth-of-type(2) {
    margin-top: var(--size-spacing-3);
    margin-bottom: var(--size-spacing-3);
  }

  > div:empty {
    display: none;
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Grid=_ref=>{let{columns,tokens,NameFormat=TokenName.Z,ValueFormat=TokenValue.Z,SampleFormat}=_ref;return(0,jsx_runtime.jsx)(StyledGrid,{columns,children:tokens.map((token=>(0,jsx_runtime.jsxs)(GridItem,{children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(NameFormat,{token})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(SampleFormat,{token})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(ValueFormat,{token})})]},token.name)))})};Grid.displayName="Grid",Grid.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{NameFormat:{defaultValue:{value:"TokenName",computed:!0},required:!1},ValueFormat:{defaultValue:{value:"TokenValue",computed:!0},required:!1}}}}}]);
//# sourceMappingURL=Border-stories.e7321707.iframe.bundle.js.map