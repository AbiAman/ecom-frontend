import React from "react";

function Container(props) {
  return (
    <section className={props.class1}>
      <div container-xxl>{props.children}</div>
    </section>
  );
}

export default Container;
