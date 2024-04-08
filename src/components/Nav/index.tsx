import { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BsBag } from "react-icons/bs";
// import { LiaUser } from "react-icons/lia";
import { MdFavoriteBorder } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link as RouterLink } from "react-router-dom";
import { Link, animateScroll } from "react-scroll";
import Enable from "../../assets/los.png";
import { Button } from "../atom/button";
import { useClickContextProvider } from "../hooks/use-click";
import { Container } from "../shared";
import { navigationLinks } from "../constants/index";

const Nav = styled.nav`
  ${tw`sticky top-0 z-20`}
`;
const NavHeader = styled.header<{ scrollNavbar?: boolean }>`
  ${tw` bg-[#fcf9f6] font-poppins transition-all ease-in-out duration-500`}
  ${({ scrollNavbar }) => scrollNavbar && tw`blur-[0px]`}
`;

const NavContent = styled.div`
  ${tw`flex items-center flex-row-reverse md:flex-row  justify-between lg:px-0 py-5`}
`;
const Logo = styled.img`
  ${tw`cursor-pointer`}
  width:50px;
`;
const NavMenu = styled.ul`
  ${tw`list-none  text-black gap-10 hidden lg:flex`}
`;
const NavLinks = styled.li``;
const ButtonContainer = styled.div`
  ${tw`flex items-center gap-8`}
`;

const MobileMenu = styled.ul`
  ${tw`list-none flex flex-col gap-8 text-lg`}
`;

const MobileMenuItem = styled.li<{ click?: boolean }>`
  opacity: 0;
  &:hover {
    transition: all ease-in-out 700ms;
  }
  animation: ${({ click }) =>
    click === true
      ? "fade 6s normal forwards ease-in-out"
      : "fadeout 6s normal forwards ease-in-out"};

  @keyframes fade {
    0% {
      opacity: 0;
    }

    25% {
      oapcity: 0.3;
    }
    50% {
      opacity: 0.7;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes fadeout {
    100% {
      opacity: 1;
    }

    50% {
      oapcity: 0.5;
    }
    25% {
      opacity: 0.1;
    }

    0% {
      opacity: 10;
    }
  }
`;

export const MobileIcon = styled.div`
  ${tw`lg:hidden cursor-pointer text-2xl`};
`;

export const MobileContainer = styled.div<{
  click?: boolean;
}>`
  ${tw`flex flex-col items-center justify-center gap-8 lg:hidden  w-full md:w-1/2  transition-all ease-in-out duration-500 shadow-2xl text-black bg-white absolute h-screen overflow-y-hidden`};
  left: ${({ click }) => (click ? "0" : "-100%")};
`;

export const Navigation = () => {
  const { click, handleClick } = useClickContextProvider();
  const [scrollNavbar] = useState(true);
  const toggleHome = (): void => {
    animateScroll.scrollToTop();
  };

  return (
    <Nav>
      <NavHeader scrollNavbar={scrollNavbar}>
        <Container>
          <>
            <NavContent>
              {/* <NavContentFirstContainer> */}
              <RouterLink to="/">
                <Logo src={Enable} alt="logo" onClick={toggleHome} />
              </RouterLink>
              <NavMenu>
                {navigationLinks?.map(
                  ({ pathname, title, scrollOffset }, index) => {
                    return (
                      <NavLinks key={index}>
                        <Link
                          to={title}
                          spy={true}
                          smooth={true}
                          offset={scrollOffset}
                          duration={1500}
                        >
                          <NavLink to={{ pathname }} onClick={toggleHome}>
                            {title}
                          </NavLink>
                        </Link>
                      </NavLinks>
                    );
                  }
                )}
              </NavMenu>
              {/* </NavContentFirstContainer> */}

              <ButtonContainer>
                <div className="relative cursor-pointer">
                  <BsBag size={30} />
                  <div
                    className="flex justify-center items-center rounded-xl"
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      transform: "translate(-10%, 3%)",
                    }}
                  >
                    3
                  </div>
                </div>
                <div className="cursor-pointer">
                  <MdFavoriteBorder size={30} />
                </div>
                {/* <div className="cursor-pointer">
                  <LiaUser size={30} />
                </div> */}
              </ButtonContainer>

              <MobileIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </MobileIcon>
            </NavContent>
          </>
        </Container>

        <MobileContainer click={click}>
          <MobileMenu>
            {navigationLinks?.map(
              ({ pathname, title, scrollOffset }, index) => {
                return (
                  <MobileMenuItem key={index} click={click}>
                    <Link
                      to={title}
                      spy={true}
                      smooth={true}
                      offset={scrollOffset}
                      duration={1500}
                    >
                      <NavLink to={{ pathname }}>{title}</NavLink>
                    </Link>
                  </MobileMenuItem>
                );
              }
            )}
          </MobileMenu>

          <Button
            children="Get A loan"
            className="bg-purple text-green text-sm px-5 py-4 w-[45%] hover:opacity-70"
          />
        </MobileContainer>
      </NavHeader>
    </Nav>
  );
};
