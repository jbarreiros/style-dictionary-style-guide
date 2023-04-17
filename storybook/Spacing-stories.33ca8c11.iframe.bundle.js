"use strict";(self.webpackChunkstyle_dictionary_storybook_style_guide=self.webpackChunkstyle_dictionary_storybook_style_guide||[]).push([[74],{"./stories/Spacing.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Spacing:()=>Spacing,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_src_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils.js"),_dist_tokens__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/tokens.json"),_src_components_Table__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Table.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Spacing"},SizeSample=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  background-color: currentColor;
  border-radius: var(--size-radius-base);
  height: ${props=>props.token.value};
  width: ${props=>props.token.value};
`,Spacing={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src_components_Table__WEBPACK_IMPORTED_MODULE_2__.i,{tokens:(0,_src_utils__WEBPACK_IMPORTED_MODULE_4__.D)(_dist_tokens__WEBPACK_IMPORTED_MODULE_1__,"size.spacing"),SampleFormat:SizeSample})};Spacing.parameters={...Spacing.parameters,docs:{...Spacing.parameters?.docs,source:{originalSource:'{\n  render: () => <Table tokens={getTokenGroup(tokens, "size.spacing")} SampleFormat={SizeSample} />\n}',...Spacing.parameters?.docs?.source}}};const __namedExportsOrder=["Spacing"]},"./src/components/Table.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Table});__webpack_require__("./node_modules/react/index.js");var TokenName=__webpack_require__("./src/components/TokenName.jsx"),TokenValue=__webpack_require__("./src/components/TokenValue.jsx");const StyledTable=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js").Z.table`
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