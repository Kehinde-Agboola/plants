import tw from "twin.macro";
import styled from "styled-components";
const StyledApp = styled.div`
  ${tw`flex text-green-600 justify-center items-center h-screen`}
`;

export const About = () => {
  return (
    <>
      <StyledApp>
        <div>
          <h1>About Works</h1>
        </div>
      </StyledApp>
    </>
  );
};
