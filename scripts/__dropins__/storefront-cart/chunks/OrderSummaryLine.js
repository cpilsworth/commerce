/*! Copyright 2025 Adobe
All Rights Reserved. */
import{jsxs as _,jsx as n}from"@dropins/tools/preact-jsx-runtime.js";import{classes as c,VComponent as y}from"@dropins/tools/lib.js";import"@dropins/tools/components.js";/* empty css                 */import"@dropins/tools/preact-compat.js";const u=({label:e,price:a,classSuffixes:s=[],labelClassSuffix:r,testId:m,children:o,...t})=>{const d="cart-order-summary__label",p="cart-order-summary__price";return _("div",{...t,...m?{"data-testid":m}:{},className:c(["cart-order-summary__entry",...s.map(i=>"cart-order-summary__"+i)]),children:[n("span",{className:c([d,...r?[d+"--"+r]:[]]),children:e}),n(y,{node:a,className:c([p,...r?[p+"--"+r]:[]])}),o]})},L=({label:e,price:a,classSuffixes:s=[],labelClassSuffix:r,testId:m,children:o,...t})=>n(u,{...t,label:e,price:a,classSuffixes:s,labelClassSuffix:r,testId:m,children:o});export{L as O};
