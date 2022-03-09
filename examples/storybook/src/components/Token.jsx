import React from 'react';
import styled from '@emotion/styled';

const Code = styled.code`
  font-family: "Courier New", Courier, monospace;
  font-size: var(--size-font-sm);
`;

// "Name" components ----------------------------------

export const Name = styled(Code)``;

export const Comment = styled.div`
  font-size: var(--size-font-sm);
  font-style: italic;
`;

// "Value" components ---------------------------------

export const Value = styled(Code)`
  display: block;
`;

export const IconValue = styled(Code)`
  display: block;
  text-align: center;
`;

// "Sample" components --------------------------------

const Boxed = styled.div`
  height: 40px;
  width: 100%;
  border-radius: var(--size-radius-base);
`;

export const BorderSample = styled(Boxed)`
  border-width: ${props => props.token.value};
  border-style: solid;
`;

const FontFamilySampleWrapper = styled.div`
  font-size: var(--size-font-lg);
  font-family: ${props => props.token.value};
`;

export const FontFamilySample = ({ token }) => (
  <FontFamilySampleWrapper token={token}>
    <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
    <div>abcdefghijklmnopqrstuvwxyz</div>
    <div>0123456789</div>
  </FontFamilySampleWrapper>
);

const FontLetterSpacingSampleWrapper = styled.div`
  letter-spacing: ${props => props.token.value};
`;

export const FontLetterSpacingSample = ({ token }) => (
  <FontLetterSpacingSample token={token}>
    The fluffy kitty is sleeping
  </FontLetterSpacingSample>
);

const FontLineHeightSampleWrapper = styled.div`
  line-height: ${props => props.token.value};
`;

export const FontLineHeightSample = ({ token }) => (
  <FontLineHeightSampleWrapper token={token}>
    The quick floofy fluffy kitty jumps over the snoring sleeping doggo.
  </FontLineHeightSampleWrapper>
);

const FontSizeSampleWrapper = styled.div`
  font-size: ${props => props.token.value};
`;

export const FontSizeSample = ({ token }) => (
  <FontSizeSampleWrapper token={token}>
    Aa - The quick floofy fluffy kitty
  </FontSizeSampleWrapper>
)

const FontWeightSampleWrapper = styled.div`
  font-weight: ${props => props.token.value};
`;

export const FontWeightSample = ({ token }) => (
  <FontWeightSampleWrapper token={token}>
    Aa - The quick floofy fluffy kitty
  </FontWeightSampleWrapper>
);

//src="dist/assets/icons/<%= token.value %>"
export const IconSample = styled.img`
  display: block;
  margin-top: calc(-1 * var(--size-spacing-3));
  margin-bottom: calc(-1 * var(--size-spacing-3));
  margin-left: auto;
  margin-right: auto;
`;

export const RadiusSample = styled(Boxed)`
  border-width: var(--size-border-1);
  border-style: solid;
  border-radius: ${props => props.token.value};
`;

export const ShadowSample = styled(Boxed)`
  box-shadow: ${props => props.token.value};
`;

export const SizeSample = styled.div`
  background-color: currentColor;
  border-radius: var(--size-radius-base);
  height: ${props => props.token.value};
  width: ${props => props.token.value};
`;

export const SwatchSample = styled(Boxed)`
  background-color: ${props => props.token.value};
`;

const TextColorSampleWrapper = styled.div`
  color: ${props => props.token.value};
`;

export const TextColorSample = ({ token }) => (
  <TextColorSampleWrapper token={token}>
    Aa
  </TextColorSampleWrapper>
)
