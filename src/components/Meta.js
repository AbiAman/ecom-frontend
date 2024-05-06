import React from "react";
import { Helmet } from "react-helmet";

function Meta(props) {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <title>{props.title}</title>
    </Helmet>
  );
}

export default Meta;
