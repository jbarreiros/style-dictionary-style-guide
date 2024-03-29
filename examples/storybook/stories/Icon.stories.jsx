import styled from "@emotion/styled";
import { getTokenGroup } from "../src/utils";
import tokens from "../dist/tokens";
import { Grid } from "../src/components/Grid";
import { Code } from "../src/components/Token.style";

export default {
  title: "Icon",
};

const IconValue = styled(Code)`
  display: block;
  text-align: center;
`;

const IconSample = styled.img`
  display: block;
  margin-top: calc(-1 * var(--size-spacing-3));
  margin-bottom: calc(-1 * var(--size-spacing-3));
  margin-left: auto;
  margin-right: auto;
`;

export const Icon = {
  render: () => (
    <Grid
      tokens={getTokenGroup(tokens, "asset.icon")}
      NameFormat={() => <></>}
      ValueFormat={({ token }) => <IconValue>{token.path.at(-1)}</IconValue>}
      SampleFormat={({ token }) => (
        <IconSample src={`assets/icons/${token.value}`} />
      )}
    />
  ),
};
