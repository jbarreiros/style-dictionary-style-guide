import styled from "@emotion/styled";
import { getTokenGroup } from "../src/utils";
import tokens from "../dist/tokens";
import { Table } from "../src/components/Table";

export default {
  title: "Spacing",
};

const SizeSample = styled.div`
  background-color: currentColor;
  border-radius: var(--size-radius-base);
  height: ${(props) => props.token.value};
  width: ${(props) => props.token.value};
`;

export const Spacing = {
  render: () => (
    <Table
      tokens={getTokenGroup(tokens, "size.spacing")}
      SampleFormat={SizeSample}
    />
  ),
};
