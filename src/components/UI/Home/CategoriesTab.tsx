import Tabs from "../../Tabs/Tabs";
import Tab from "../../Tabs/Tab";

export const CategoriesTab = () => {
  return (
    <>
      <Tabs>
        <Tab title="Indoor-Plants">
          <p>Indoor Plants Works</p>
        </Tab>
        <Tab title="Outdoor-Plants">
          <p>Outdoor Plants Works</p>
        </Tab>
        <Tab title="Small-plants">
          <p>Small Plants Works</p>
        </Tab>
        <Tab title="Office-Plants">
          <p>Office plants works</p>
        </Tab>
        <Tab title="Accessories">
          <p>Accessories Works</p>
        </Tab>
      </Tabs>
    </>
  );
};
