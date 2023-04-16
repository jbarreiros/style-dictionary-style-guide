import React, { useContext } from "react";
import TokensContext from "../tokens-context";
import { prefixTokenName } from "../utils";
import { Name, Comment } from "./Token.style";

const TokenName = ({ token }) => {
  const format = useContext(TokensContext);

  return (
    <>
      <Name>{prefixTokenName(format, token.name)}</Name>
      {token.comment && <Comment>{token.comment}</Comment>}
    </>
  );
};

export default TokenName;
