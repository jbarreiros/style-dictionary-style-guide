import styled from "@emotion/styled";
import { getTokenGroup } from "../src/utils";
import tokens from "../dist/tokens";
import { Grid } from "../src/components/Grid";
import { Boxed, Value } from "../src/components/Token.style";

export default {
  title: "Shadow",
};

const ShadowSample = styled(Boxed)`
  box-shadow: ${(props) => props.token.value};
`;

export const Shadow = {
  render: () => (
    <Grid
      columns={2}
      tokens={getTokenGroup(tokens, "size.shadow", ["sm", "base", "lg"])}
      ValueFormat={({ token }) => <Value>{token.value}</Value>}
      SampleFormat={ShadowSample}
    />
  ),
};
