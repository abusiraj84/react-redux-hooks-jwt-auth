import React from "react";
import styled from "styled-components";
import { Caption2, SmallText } from "../styles/TextStyles";
import { Link } from "react-router-dom";

export default function PurchaseButton(props) {
  const { title, subtitle } = props;

  return (
    <Link to="/page-2">
      <Wrapper>
        <IconWrapper>
          <Icon src="/images/icons/credit.svg" />
          <Ring src="/images/icons/icon-ring.svg" />
        </IconWrapper>
        <TextWrapper>
          <Title>{title || "Get Pro Access"}</Title>

          <Subtitle>{subtitle || "$19 per month"}</Subtitle>
        </TextWrapper>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.div`
  margin: 20px 0;
  background: linear-gradient(rgb(255, 255, 255) 0%, rgb(217, 223, 255) 100%);
  border: none;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset,
    rgba(23, 0, 102, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.1) 0px 1px 3px;
  backdrop-filter: blur(30px);
  border-radius: 20px;
  cursor: pointer;
  position: relative;
  width: 280px;
  height: 77px;
  display: grid;
  grid-template-columns: 55px auto;
  padding: 12px;
  justify-items: start;
  gap: 20px;
  align-items: center;
  @media (max-width: 1270px) {
    margin: 0px auto;
  }
`;

const Title = styled(Caption2)``;

const Subtitle = styled(SmallText)`
  color: black;
  opacity: 0.7;
`;
const Icon = styled.img`
  width: 29px;
  height: 29px;
`;
const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`;
const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;
`;
const Ring = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;
`;
