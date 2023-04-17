"use strict";(self.webpackChunkstyle_dictionary_storybook_style_guide=self.webpackChunkstyle_dictionary_storybook_style_guide||[]).push([[163],{"./stories/Color.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Grey:()=>Grey,Primary:()=>Primary,Static:()=>Static,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_src_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils.js"),_dist_tokens__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/tokens.json"),_src_components_Table__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Table.jsx"),_src_components_Token_style__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Token.style.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Color"},SwatchSample=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z)(_src_components_Token_style__WEBPACK_IMPORTED_MODULE_3__.Nm)`
  background-color: ${props=>props.token.value};
`,Primary={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_components_Table__WEBPACK_IMPORTED_MODULE_2__.i,{tokens:(0,_src_utils__WEBPACK_IMPORTED_MODULE_5__.D)(_dist_tokens__WEBPACK_IMPORTED_MODULE_1__,"color.primary"),SampleFormat:SwatchSample})},Grey={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_components_Table__WEBPACK_IMPORTED_MODULE_2__.i,{tokens:(0,_src_utils__WEBPACK_IMPORTED_MODULE_5__.D)(_dist_tokens__WEBPACK_IMPORTED_MODULE_1__,"color.grey"),SampleFormat:SwatchSample})},Static={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_components_Table__WEBPACK_IMPORTED_MODULE_2__.i,{tokens:(0,_src_utils__WEBPACK_IMPORTED_MODULE_5__.D)(_dist_tokens__WEBPACK_IMPORTED_MODULE_1__,"color.static",["black","white"]),SampleFormat:SwatchSample})};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  render: () => <Table tokens={getTokenGroup(tokens, "color.primary")} SampleFormat={SwatchSample} />\n}',...Primary.parameters?.docs?.source}}},Grey.parameters={...Grey.parameters,docs:{...Grey.parameters?.docs,source:{originalSource:'{\n  render: () => <Table tokens={getTokenGroup(tokens, "color.grey")} SampleFormat={SwatchSample} />\n}',...Grey.parameters?.docs?.source}}},Static.parameters={...Static.parameters,docs:{...Static.parameters?.docs,source:{originalSource:'{\n  render: () => <Table tokens={getTokenGroup(tokens, "color.static", ["black", "white"])} SampleFormat={SwatchSample} />\n}',...Static.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Grey","Static"]},"./src/components/Table.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Table});__webpack_require__("./node_modules/react/index.js");var TokenName=__webpack_require__("./src/components/TokenName.jsx"),TokenValue=__webpack_require__("./src/components/TokenValue.jsx");const StyledTable=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js").Z.table`
  border-collapse: collapse;
  min-width: 100%;

  & :is(th, td) {
    border-bottom: var(--size-border-1) solid var(--color-grey-300);
    text-align: left;
    padding-top: var(--size-spacing-2);
    padding-bottom: var(--size-spacing-2);

    &:nth-of-type(2) {
      padding-left: var(--size-spacing-3);
      padding-right: var(--size-spacing-3);
    }
  }

  th {
    font-size: var(--size-font-sm);

    &:nth-of-type(1) {
      width: 40%;
    }

    &:nth-of-type(2) {
      width: 20%;
    }
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Table=_ref=>{let{tokens,NameFormat=TokenName.Z,ValueFormat=TokenValue.Z,SampleFormat}=_ref;return(0,jsx_runtime.jsxs)(StyledTable,{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{children:"Name"}),(0,jsx_runtime.jsx)("th",{children:"Value"}),(0,jsx_runtime.jsx)("th",{children:"Example"})]})}),(0,jsx_runtime.jsx)("tbody",{children:tokens.map((token=>(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(NameFormat,{token})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(ValueFormat,{token})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(SampleFormat,{token})})]},token.name)))})]})};Table.displayName="Table",Table.__docgenInfo={description:"",methods:[],displayName:"Table",props:{NameFormat:{defaultValue:{value:"TokenName",computed:!0},required:!1},ValueFormat:{defaultValue:{value:"TokenValue",computed:!0},required:!1}}}}}]);