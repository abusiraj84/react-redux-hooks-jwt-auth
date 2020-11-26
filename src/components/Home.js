import React from "react";
import styled from "styled-components";
import HeroSection from "./sections/HeroSection";
import CoursesCards from "./sections/section/CoursesCards";

const Home = () => {
  return (
    <Wrapper>
      <HeroSection />
      <CoursesCards />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 1254px;
  margin: auto auto;
  @media (max-width: 1085px) {
    width: 100%;
  }
`;
