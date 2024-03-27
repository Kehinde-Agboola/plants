import React, { ReactElement, useState } from "react";
import TabTitle from "./TabTitle";
import { Container } from "../shared";
// import styled from "styled-components";
// import tw from "twin.macro";
type Props = {
  children: ReactElement[];
};

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Container>
      <h1 className="text-2xl py-10">Top Categories:</h1>
      <ul className="container  text-white">
        {children.map((item, index) => (
          <div className="item">
            <TabTitle
              key={index}
              index={index}
              title={item.props.title}
              setSelectedTab={setSelectedTab}
            />
          </div>
        ))}
      </ul>
      {children[selectedTab]}
    </Container>
  );
};

export default Tabs;
