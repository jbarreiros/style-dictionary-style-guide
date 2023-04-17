import styled from "@emotion/styled";
import { getTokenGroup } from "../src/utils";
import tokens from "../dist/tokens";
import { Table } from "../src/components/Table";
import { Grid } from "../src/components/Grid";

export default {
  title: "Font",
};

const FontFamilySample = styled.div`
  font-size: var(--size-font-lg);
  font-family: ${(props) => props.token.value};
`;

export const Family = {
  render: () => (
    <Grid
      columns={1}
      tokens={getTokenGroup(tokens, "font.family")}
      SampleFormat={({ token }) => (
        <FontFamilySample token={token}>
          <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
          <div>abcdefghijklmnopqrstuvwxyz</div>
          <div>0123456789</div>
        </FontFamilySample>
      )}
    />
  ),
};

const FontSizeSample = styled.div`
  font-size: ${(props) => props.token.value};
`;

export const Size = {
  render: () => (
    <Table
      tokens={getTokenGroup(tokens, "size.font", [
        "sm",
        "base",
        "6",
        "lg",
        "5",
        "4",
        "3",
        "2",
        "1",
      ])}
      SampleFormat={({ token }) => (
        <FontSizeSample token={token}>
          Aa - The quick floofy fluffy kitty
        </FontSizeSample>
      )}
    />
  ),
};

const FontWeightSample = styled.div`
  font-weight: ${(props) => props.token.value};
`;

export const Weight = {
  render: () => (
    <Table
      tokens={getTokenGroup(tokens, "font.weight")}
      SampleFormat={({ token }) => (
        <FontWeightSample token={token}>
          Aa - The quick floofy fluffy kitty
        </FontWeightSample>
      )}
    />
  ),
};

const FontLineHeightSample = styled.div`
  line-height: ${(props) => props.token.value};
  width: 16rem;
`;

export const LineHeight = {
  render: () => (
    <Table
      tokens={getTokenGroup(tokens, "font.line-height", ["sm", "base", "lg"])}
      SampleFormat={({ token }) => (
        <FontLineHeightSample token={token}>
          The quick floofy fluffy kitty jumps over the snoring sleeping doggo.
        </FontLineHeightSample>
      )}
    />
  ),
};

const FontLetterSpacingSample = styled.div`
  letter-spacing: ${(props) => props.token.value};
`;

export const LetterSpacing = {
  render: () => (
    <Table
      tokens={getTokenGroup(tokens, "size.letter-spacing")}
      SampleFormat={({ token }) => (
        <FontLetterSpacingSample token={token}>
          The fluffy kitty is sleeping
        </FontLetterSpacingSample>
      )}
    />
  ),
};
