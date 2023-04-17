import styled from "@emotion/styled";
import { getTokenGroup } from "../src/utils";
import tokens from "../dist/tokens";
import { Grid } from "../src/components/Grid";
import { Boxed } from "../src/components/Token.style";

export default {
  title: "Border",
};

const BorderSample = styled(Boxed)`
  border-width: ${(props) => props.token.value};
  border-style: solid;
`;

export const Width = {
  render: () => (
    <Grid
      tokens={getTokenGroup(tokens, "size.border")}
      SampleFormat={BorderSample}
    />
  ),
};

const RadiusSample = styled(Boxed)`
  border-width: var(--size-border-1);
  border-style: solid;
  border-radius: ${(props) => props.token.value};
`;

export const Radius = {
  render: () => (
    <Grid
      tokens={getTokenGroup(tokens, "size.radius")}
      SampleFormat={RadiusSample}
    />
  ),
};
