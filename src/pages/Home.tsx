import tw from "twin.macro";
import styled from "styled-components";
const StyledApp = styled.div`
  ${tw`flex text-green-600 justify-center items-center h-screen`}
`;
export const Home = () => {
  return (
    <>
      <StyledApp>
        <div>
          <h1>Home works</h1>
        </div>
      </StyledApp>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        deleniti provident, culpa vero consectetur quis nemo ducimus sit nihil
        quas laborum sint impedit beatae eaque soluta aspernatur debitis
        necessitatibus nam modi iusto quos quam ullam suscipit maiores. Quaerat
        iusto ducimus voluptatem iste, quas reiciendis at. Commodi sunt error
        quam sit.
      </h1>
    </>
  );
};
