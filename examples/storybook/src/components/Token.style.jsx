import styled from "@emotion/styled";

export const Code = styled.code`
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

// "Sample" components --------------------------------

export const Boxed = styled.div`
  height: 40px;
  width: 100%;
  border-radius: var(--size-radius-base);
`;
