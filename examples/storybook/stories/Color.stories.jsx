import styled from "@emotion/styled";
import { getTokenGroup } from "../src/utils";
import tokens from "../dist/tokens";
import { Table } from "../src/components/Table";
import { Boxed } from "../src/components/Token.style";

export default {
  title: "Color",
};

const SwatchSample = styled(Boxed)`
  background-color: ${(props) => props.token.value};
`;

export const Primary = {
  render: () => (
    <Table
      tokens={getTokenGroup(tokens, "color.primary")}
      SampleFormat={SwatchSample}
    />
  ),
};

export const Grey = {
  render: () => (
    <Table
      tokens={getTokenGroup(tokens, "color.grey")}
      SampleFormat={SwatchSample}
    />
  ),
};

export const Static = {
  render: () => (
    <Table
      tokens={getTokenGroup(tokens, "color.static", ["black", "white"])}
      SampleFormat={SwatchSample}
    />
  ),
};
