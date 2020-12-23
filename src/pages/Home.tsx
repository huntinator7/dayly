import React, { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";

interface Props extends RouteComponentProps {}

const Home: FunctionComponent<Props> = (_props) => {
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default Home;
