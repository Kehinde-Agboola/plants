import Tabs from "../../Tabs/Tabs";
import Tab from "../../Tabs/Tab";
import { Gallary } from "./Gallary";

export const CategoriesTab = () => {
  return (
    <>
      <Tabs>
        <Tab title="Indoor-Plants">
          <p>Indoor Plants Works</p>
          <Gallary />
        </Tab>
        <Tab title="Outdoor-Plants">
          <p>Outdoor Plants Works</p>
          <Gallary />
        </Tab>
        <Tab title="Small-plants">
          <p>Small Plants Works</p>
          <Gallary />
        </Tab>
        <Tab title="Office-Plants">
          <p>Office plants works</p>
          <Gallary />
        </Tab>
        <Tab title="Accessories">
          <p>Accessories Works</p>
          <Gallary />
        </Tab>
      </Tabs>
    </>
  );
};
