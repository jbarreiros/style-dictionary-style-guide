import React from "react";
import TokenName from "./TokenName";
import TokenValue from "./TokenValue";
import { StyledGrid, GridItem } from "./Grid.style";

export const Grid = ({
  columns,
  tokens,
  NameFormat = TokenName,
  ValueFormat = TokenValue,
  SampleFormat,
}) => (
  <StyledGrid columns={columns}>
    {tokens.map((token) => (
      <GridItem key={token.name}>
        <div>
          <NameFormat token={token} />
        </div>
        <div>
          <SampleFormat token={token} />
        </div>
        <div>
          <ValueFormat token={token} />
        </div>
      </GridItem>
    ))}
  </StyledGrid>
);
