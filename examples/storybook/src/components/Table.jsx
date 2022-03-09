import React, { useContext } from 'react';
import styled from '@emotion/styled';
import TokensContext from '../tokens-context';
import { prefixTokenName } from '../utils';
import { Name, Comment, Value } from './Token';

const StyledTable = styled.table`
  border-collapse: collapse;
  min-width: 100%;

  & :is(th, td) {
    border-bottom: var(--size-border-1) solid var(--color-grey-300);
    text-align: left;
    padding-top: var(--size-spacing-2);
    padding-bottom: var(--size-spacing-2);

    &:nth-child(2) {
      padding-left: var(--size-spacing-3);
      padding-right: var(--size-spacing-3);
    }
  }

  th {
    font-size: var(--size-font-sm);

    &:nth-child(1) {
      width: 40%;
    }

    &:nth-child(2) {
      width: 20%;
    }
  }
`;

const NameCell = ({ token }) => {
  const format = useContext(TokensContext);

  return (
    <>
      <Name>{prefixTokenName(format, token.name)}</Name>
      {token.comment && <Comment>{token.comment}</Comment>}
    </>
  );
};

const ValueCell = ({ token }) => (
  <>
    <Value>{token.value}</Value>
    {token.value !== token.original.value && (
      <Value>{token.original.value}</Value>
    )}
  </>
);

export const Table = ({
  tokens,
  NameFormat = NameCell,
  ValueFormat = ValueCell,
  SampleFormat
}) => (
  <StyledTable>
    <thead>
      <tr>
        <th>Name</th>
        <th>Value</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      {tokens.map((token) => (
        <tr key={token.name}>
          <td>
            <NameFormat token={token} />
          </td>
          <td>
            <ValueFormat token={token} />
          </td>
          <td>
            <SampleFormat token={token} />
          </td>
        </tr>
      ))}
    </tbody>
  </StyledTable>
);
