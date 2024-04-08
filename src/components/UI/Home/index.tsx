import { CategoriesTab } from "./CategoriesTab";
import { Store } from "../../store/Store";
import { Container } from "../../shared";
import tw from "twin.macro";
import styled from "styled-components";
export const Hero = () => {
  return (
    <>
      <div className="bg-hero  h-[400px]  bg-no-repeat bg-cover bg-center object-center">
        <h1 className="text-white font-poppins text-center flex items-center h-[50vh] lg:max-w-[40%] xl:max-w-[60%] mx-auto font-medium text-[30px] md:text-[47px] lg:text-[55px] xl:text-[46px]">
          Create the Environment where your Plants are Happiest
        </h1>
      </div>
      <div className="bg-[#fdf9f3]">
        <Container>
          <h1>Top Categories</h1>
        </Container>
        <Store />
      </div>
    </>
  );
};
