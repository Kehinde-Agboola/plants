import Tabs from "../../Tabs/Tabs";
import Tab from "../../Tabs/Tab";
import { Gallary } from "./Gallary";
// import Swiper from "swiper";
// import styled from "styled-components";
// import tw from "twin.macro";

export const CategoriesTab = () => {
  return (
    <>
      <Tabs>
        <Tab title="Indoor-Plants">
          <Gallary />
        </Tab>
        <Tab title="Outdoor-Plants"> Outdoor plants works</Tab>
        <Tab title="Small-plants">Small plants works</Tab>
        <Tab title="Office-Plants">Office-plants-works</Tab>
        <Tab title="Accessories">Accessories works</Tab>
      </Tabs>
    </>
  );
};
