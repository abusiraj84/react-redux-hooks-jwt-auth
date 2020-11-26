import React from "react";
import styled from "styled-components";
import PurchaseButton from "../../components/buttons/PurchaseButton";
import WaveBackground from "../backgrounds/WaveBackground";
// import bg from "../../../static/images/waves/hero-wave1.svg"
// import CardsTest from "./CardsTest"
import { H1, MediumText } from "../styles/TextStyles";
import CoursesCards from "./section/CoursesCards";

function HeroSection() {
  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <Title>انضمّ إلينا لتتعلم ما يجعلك المميز</Title>
            <Description>
              من خلالنا.. لن تتعلم أساسيات البرنامج فحسب لن نتركك وحيدا بلا خطة
              أو أهداف نحن نضع قدميك على الطريق واثقين من قدراتك، لتنطلق وتحقق
              ما تبحث عنه من طموحات.. الأفكار الاحترافية..
            </Description>

            <PurchaseButton
              title="اشترك الآن"
              subtitle="عشرات الدورات بانتظارك"
            />
          </TextWrapper>
          <ImgHero src="../images/backgrounds/herobg.svg" />
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

export default HeroSection;

const Wrapper = styled.div`
  width: 100%;
  padding-top: 200px;
  perspective: 1000;
`;
const ContentWrapper = styled.div`
  /* background-image: url("/images/waves/livestream-wave3.svg");
  background-repeat: no-repeat; */
  overflow: hidden;
  max-width: 1234px;
  padding: 8px 0px;
  margin: 0 auto;
  display: flex;
  gap: 60px;
  @media (max-width: 1270px) {
    padding: 10px 30px;
    gap: 50px;
    margin: 0px auto;
    width: 805px;
}
  }
  @media (max-width: 1000px) {
    padding: 10px 30px;
    gap: 50px;
    flex-direction: row;
  }
  @media (max-width: 640px) {
    padding: 10px 30px;
    gap: 50px;
  }
  @media (max-width: 770px) {
    margin: 0px auto;
    width: 500px;
  }
`;
const TextWrapper = styled.div`
  max-width: 500px;
  display: grid;
  @media (max-width: 1270px) {
    padding: 10px 30px;
    margin: 0px auto;
    width: 805px;
  }
`;
const Title = styled(H1)`
  color: white;
  margin-bottom: 28px;
  @media (max-width: 1270px) {
    text-align: center;
  }
`;
const Description = styled(MediumText)`
  font-weight: normal;
  font-size: 18px;
  line-height: 180%;
  text-align: justify;
  font-family: tahoma;
  margin-bottom: 7px;
  @media (max-width: 1270px) {
    text-align: center;
  }
`;

const ImgHero = styled.img`
  width: 675px;

  @media (max-width: 1270px) {
    padding: 10px 30px;
    gap: 50px;
    display: none;
  }
`;
