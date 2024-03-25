import tw from "twin.macro";
import styled from "styled-components";
const StyledApp = styled.div`
  ${tw`flex text-green-600 justify-center items-center h-screen`}
`;

export const Contact = () => {
  return (
    <>
      <StyledApp>
        <div>
          <h1>Contact Works</h1>
        </div>
      </StyledApp>
    </>
  );
};
