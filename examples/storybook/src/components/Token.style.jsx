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
  margin-top: var(--size-spacing-2);
  color: var(--color-grey-500);
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

export const Boxed = styled.div`
  height: 40px;
  width: 100%;
  border-radius: var(--size-radius-base);
`;

export const FontFamilySample = styled.div`
  font-size: var(--size-font-lg);
  font-family: ${props => props.token.value};
`;

export const FontLetterSpacingSample = styled.div`
  letter-spacing: ${props => props.token.value};
`;

export const FontLineHeightSample = styled.div`
  line-height: ${props => props.token.value};
  width: 16rem;
`;

export const FontSizeSample = styled.div`
  font-size: ${props => props.token.value};
`;

export const FontWeightSample = styled.div`
  font-weight: ${props => props.token.value};
`;

export const IconSample = styled.img`
  display: block;
  margin-top: calc(-1 * var(--size-spacing-3));
  margin-bottom: calc(-1 * var(--size-spacing-3));
  margin-left: auto;
  margin-right: auto;
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
