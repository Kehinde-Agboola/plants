import React, { ReactElement, useState } from "react";
import TabTitle from "./TabTitle";
import { Container } from "../shared";
type Props = {
  children: ReactElement[];
};

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Container>
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
