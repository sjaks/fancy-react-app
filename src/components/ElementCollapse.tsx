import React from "react";
import { Collapse } from "antd";
import FoxImage from "./FoxImage";

const { Panel } = Collapse;

function ElementCollapse({ elementObj }) {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const elements = elementObj.map((el) => (
    <Panel header={el.title} key={el.id}>
      <FoxImage source={el.url} />
    </Panel>
  ));

  return <Collapse onChange={onChange}>{elements}</Collapse>;
}

export default ElementCollapse;
