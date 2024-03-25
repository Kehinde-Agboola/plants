import tw from "twin.macro";
import styled from "styled-components";
import { Hero } from "../components/UI/Home";
const StyledApp = styled.div`
  ${tw`flex text-green-600 justify-center items-center h-screen`}
`;
export const Home = () => {
  return (
    <>
      <Hero />
    </>
  );
};
