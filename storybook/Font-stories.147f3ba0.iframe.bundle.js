"use strict";(self.webpackChunkstyle_dictionary_storybook_style_guide=self.webpackChunkstyle_dictionary_storybook_style_guide||[]).push([[180],{"./stories/Font.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Family:()=>Family,LetterSpacing:()=>LetterSpacing,LineHeight:()=>LineHeight,Size:()=>Size,Weight:()=>Weight,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_src_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils.js"),_dist_tokens__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/tokens.json"),_src_components_Table__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Table.jsx"),_src_components_Grid__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Grid.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Font"},FontFamilySample=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  font-size: var(--size-font-lg);
  font-family: ${props=>props.token.value};
`,Family={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_components_Grid__WEBPACK_IMPORTED_MODULE_3__.r,{columns:1,tokens:(0,_src_utils__WEBPACK_IMPORTED_MODULE_5__.D)(_dist_tokens__WEBPACK_IMPORTED_MODULE_1__,"font.family"),SampleFormat:_ref=>{let{token}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(FontFamilySample,{token,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:"abcdefghijklmnopqrstuvwxyz"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:"0123456789"})]})}})},FontSizeSample=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  font-size: ${props=>props.token.value};
`,Size={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_components_Table__WEBPACK_IMPORTED_MODULE_2__.i,{tokens:(0,_src_utils__WEBPACK_IMPORTED_MODULE_5__.D)(_dist_tokens__WEBPACK_IMPORTED_MODULE_1__,"size.font",["sm","base","6","lg","5","4","3","2","1"]),SampleFormat:_ref2=>{let{token}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(FontSizeSample,{token,children:"Aa - The quick floofy fluffy kitty"})}})},FontWeightSample=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  font-weight: ${props=>props.token.value};
`,Weight={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_components_Table__WEBPACK_IMPORTED_MODULE_2__.i,{tokens:(0,_src_utils__WEBPACK_IMPORTED_MODULE_5__.D)(_dist_tokens__WEBPACK_IMPORTED_MODULE_1__,"font.weight"),SampleFormat:_ref3=>{let{token}=_ref3;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(FontWeightSample,{token,children:"Aa - The quick floofy fluffy kitty"})}})},FontLineHeightSample=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  line-height: ${props=>props.token.value};
  width: 16rem;
`,LineHeight={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_components_Table__WEBPACK_IMPORTED_MODULE_2__.i,{tokens:(0,_src_utils__WEBPACK_IMPORTED_MODULE_5__.D)(_dist_tokens__WEBPACK_IMPORTED_MODULE_1__,"font.line-height",["sm","base","lg"]),SampleFormat:_ref4=>{let{token}=_ref4;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(FontLineHeightSample,{token,children:"The quick floofy fluffy kitty jumps over the snoring sleeping doggo."})}})},FontLetterSpacingSample=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  letter-spacing: ${props=>props.token.value};
`,LetterSpacing={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_components_Table__WEBPACK_IMPORTED_MODULE_2__.i,{tokens:(0,_src_utils__WEBPACK_IMPORTED_MODULE_5__.D)(_dist_tokens__WEBPACK_IMPORTED_MODULE_1__,"size.letter-spacing"),SampleFormat:_ref5=>{let{token}=_ref5;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(FontLetterSpacingSample,{token,children:"The fluffy kitty is sleeping"})}})};Family.parameters={...Family.parameters,docs:{...Family.parameters?.docs,source:{originalSource:'{\n  render: () => <Grid columns={1} tokens={getTokenGroup(tokens, "font.family")} SampleFormat={({\n    token\n  }) => <FontFamilySample token={token}>\n          <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>\n          <div>abcdefghijklmnopqrstuvwxyz</div>\n          <div>0123456789</div>\n        </FontFamilySample>} />\n}',...Family.parameters?.docs?.source}}},Size.parameters={...Size.parameters,docs:{...Size.parameters?.docs,source:{originalSource:'{\n  render: () => <Table tokens={getTokenGroup(tokens, "size.font", ["sm", "base", "6", "lg", "5", "4", "3", "2", "1"])} SampleFormat={({\n    token\n  }) => <FontSizeSample token={token}>\n          Aa - The quick floofy fluffy kitty\n        </FontSizeSample>} />\n}',...Size.parameters?.docs?.source}}},Weight.parameters={...Weight.parameters,docs:{...Weight.parameters?.docs,source:{originalSource:'{\n  render: () => <Table tokens={getTokenGroup(tokens, "font.weight")} SampleFormat={({\n    token\n  }) => <FontWeightSample token={token}>\n          Aa - The quick floofy fluffy kitty\n        </FontWeightSample>} />\n}',...Weight.parameters?.docs?.source}}},LineHeight.parameters={...LineHeight.parameters,docs:{...LineHeight.parameters?.docs,source:{originalSource:'{\n  render: () => <Table tokens={getTokenGroup(tokens, "font.line-height", ["sm", "base", "lg"])} SampleFormat={({\n    token\n  }) => <FontLineHeightSample token={token}>\n          The quick floofy fluffy kitty jumps over the snoring sleeping doggo.\n        </FontLineHeightSample>} />\n}',...LineHeight.parameters?.docs?.source}}},LetterSpacing.parameters={...LetterSpacing.parameters,docs:{...LetterSpacing.parameters?.docs,source:{originalSource:'{\n  render: () => <Table tokens={getTokenGroup(tokens, "size.letter-spacing")} SampleFormat={({\n    token\n  }) => <FontLetterSpacingSample token={token}>\n          The fluffy kitty is sleeping\n        </FontLetterSpacingSample>} />\n}',...LetterSpacing.parameters?.docs?.source}}};const __namedExportsOrder=["Family","Size","Weight","LineHeight","LetterSpacing"]},"./src/components/Grid.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Grid});__webpack_require__("./node_modules/react/index.js");var TokenName=__webpack_require__("./src/components/TokenName.jsx"),TokenValue=__webpack_require__("./src/components/TokenValue.jsx"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");const StyledGrid=emotion_styled_browser_esm.Z.div`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Grid=_ref=>{let{columns,tokens,NameFormat=TokenName.Z,ValueFormat=TokenValue.Z,SampleFormat}=_ref;return(0,jsx_runtime.jsx)(StyledGrid,{columns,children:tokens.map((token=>(0,jsx_runtime.jsxs)(GridItem,{children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(NameFormat,{token})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(SampleFormat,{token})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(ValueFormat,{token})})]},token.name)))})};Grid.displayName="Grid",Grid.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{NameFormat:{defaultValue:{value:"TokenName",computed:!0},required:!1},ValueFormat:{defaultValue:{value:"TokenValue",computed:!0},required:!1}}}},"./src/components/Table.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Table});__webpack_require__("./node_modules/react/index.js");var TokenName=__webpack_require__("./src/components/TokenName.jsx"),TokenValue=__webpack_require__("./src/components/TokenValue.jsx");const StyledTable=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js").Z.table`
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
//# sourceMappingURL=Font-stories.147f3ba0.iframe.bundle.js.map