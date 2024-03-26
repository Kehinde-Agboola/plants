import tw from "twin.macro";
import styled from "styled-components";
import { Hero } from "../components/UI/Home";
const StyledApp = styled.div`
  ${tw`text-2xl`}
`;
export const Home = () => {
  return (
    <>
      <Hero />

      <StyledApp>tabs</StyledApp>
    </>
  );
};
