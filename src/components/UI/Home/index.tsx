import { Store } from "../../Store/Store";
import { Container } from "../../shared";
import tw from "twin.macro";
import styled from "styled-components";

const HeroBanner = styled.div`
  ${tw`bg-hero  h-[400px]  bg-no-repeat bg-cover bg-center object-center`}
`;
const HeroText = styled.h1`
  ${tw`text-white font-poppins text-center flex items-center h-[50vh] lg:max-w-[40%] xl:max-w-[60%] mx-auto font-medium text-[30px] md:text-[46px] lg:text-[55px] xl:text-[46px]`}
`;

export const Hero = () => {
  return (
    <>
      <HeroBanner>
        <HeroText>
          Create the Environment where your Plants are Happiest
        </HeroText>
      </HeroBanner>
      <div className="bg-[#fdf9f3]">
        <Container>
          <h1>Top Categories</h1>
        </Container>
        <Store />
      </div>
    </>
  );
};
