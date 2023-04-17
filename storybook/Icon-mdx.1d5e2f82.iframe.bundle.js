"use strict";(self.webpackChunkstyle_dictionary_storybook_style_guide=self.webpackChunkstyle_dictionary_storybook_style_guide||[]).push([[763,674],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/Icon.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Icon:()=>Icon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_src_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils.js"),_dist_tokens__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/tokens.json"),_src_components_Grid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Grid.jsx"),_src_components_Token_style__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Token.style.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Icon"},IconValue=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z)(_src_components_Token_style__WEBPACK_IMPORTED_MODULE_3__.EK)`
  display: block;
  text-align: center;
`,IconSample=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.img`
  display: block;
  margin-top: calc(-1 * var(--size-spacing-3));
  margin-bottom: calc(-1 * var(--size-spacing-3));
  margin-left: auto;
  margin-right: auto;
`,Icon={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_components_Grid__WEBPACK_IMPORTED_MODULE_2__.r,{tokens:(0,_src_utils__WEBPACK_IMPORTED_MODULE_5__.D)(_dist_tokens__WEBPACK_IMPORTED_MODULE_1__,"asset.icon"),NameFormat:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{}),ValueFormat:_ref=>{let{token}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(IconValue,{children:token.path.at(-1)})},SampleFormat:_ref2=>{let{token}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(IconSample,{src:`assets/icons/${token.value}`})}})};Icon.parameters={...Icon.parameters,docs:{...Icon.parameters?.docs,source:{originalSource:'{\n  render: () => <Grid tokens={getTokenGroup(tokens, "asset.icon")} NameFormat={() => <></>} ValueFormat={({\n    token\n  }) => <IconValue>{token.path.at(-1)}</IconValue>} SampleFormat={({\n    token\n  }) => <IconSample src={`assets/icons/${token.value}`} />} />\n}',...Icon.parameters?.docs?.source}}};const __namedExportsOrder=["Icon"]},"./src/components/Grid.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Grid});__webpack_require__("./node_modules/react/index.js");var TokenName=__webpack_require__("./src/components/TokenName.jsx"),TokenValue=__webpack_require__("./src/components/TokenValue.jsx"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");const StyledGrid=emotion_styled_browser_esm.Z.div`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Grid=_ref=>{let{columns,tokens,NameFormat=TokenName.Z,ValueFormat=TokenValue.Z,SampleFormat}=_ref;return(0,jsx_runtime.jsx)(StyledGrid,{columns,children:tokens.map((token=>(0,jsx_runtime.jsxs)(GridItem,{children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(NameFormat,{token})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(SampleFormat,{token})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(ValueFormat,{token})})]},token.name)))})};Grid.displayName="Grid",Grid.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{NameFormat:{defaultValue:{value:"TokenName",computed:!0},required:!1},ValueFormat:{defaultValue:{value:"TokenValue",computed:!0},required:!1}}}},"./stories/Icon.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Icon_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/Icon.stories.jsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Icon_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"icon",children:"Icon"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_Icon_stories__WEBPACK_IMPORTED_MODULE_2__.Icon})]})}}}}]);
//# sourceMappingURL=Icon-mdx.1d5e2f82.iframe.bundle.js.map