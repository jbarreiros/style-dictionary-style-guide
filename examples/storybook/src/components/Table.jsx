import React from 'react';
import TokenName from './TokenName';
import TokenValue from './TokenValue';
import { StyledTable } from './Table.style';

export const Table = ({
  tokens,
  NameFormat = TokenName,
  ValueFormat = TokenValue,
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
