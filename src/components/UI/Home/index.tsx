import { CategoriesTab } from "./CategoriesTab";
export const Hero = () => {
  return (
    <>
      <div className="bg-hero  h-[400px]  bg-no-repeat bg-cover bg-center object-center">
        <h1 className="text-white font-poppins text-center flex items-center h-[50vh] lg:max-w-[40%] xl:max-w-[60%] mx-auto font-medium text-[30px] md:text-[47px] lg:text-[55px] xl:text-[46px]">
          Create the Environment where your Plants are Happiest
        </h1>
      </div>
      <div className="bg-[#fdf9f3]">
        <CategoriesTab />
      </div>
    </>
  );
};
