import styled from '@emotion/styled';

export const StyledTable = styled.table`
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
`;
