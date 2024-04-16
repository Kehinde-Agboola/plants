import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import { Product } from "../../atom/Product";
export const TabsComponent = () => {
  return (
    <div className="py-10">
      <Tabs isLazy position="relative" variant="end">
        <TabList className="px-10">
          <Tab>Top Categories</Tab>
          <Tab>Most Gifted</Tab>
          <Tab>Best Selling</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <Product />
          </TabPanel>
          <TabPanel>
            <Product />
          </TabPanel>
          <TabPanel>
            <Product />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};
