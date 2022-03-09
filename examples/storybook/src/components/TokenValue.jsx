import React from 'react';
import { Value } from './Token.style';

const TokenValue = ({ token }) => (
  <>
    <Value>{token.value}</Value>
    {token.value !== token.original.value && (
      <Value>{token.original.value}</Value>
    )}
  </>
);

export default TokenValue;
