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

      <StyledApp>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non rerum
          praesentium sint voluptatum cum laboriosam, vel nemo ullam fugiat
          soluta debitis atque consequatur nam dolores alias reiciendis deserunt
          mollitia porro.
        </p>
      </StyledApp>
    </>
  );
};
