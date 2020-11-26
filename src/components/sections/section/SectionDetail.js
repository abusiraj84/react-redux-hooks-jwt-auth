import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PurchaseButton from "../../buttons/PurchaseButton";
import { useSelector } from "react-redux";

import {
  Caption,
  Caption2,
  H1,
  MediumText,
  SmallText,
} from "../../styles/TextStyles";

function SectionDetail(props) {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [theuser, setTheuser] = useState([]);
  useEffect(() => {
    if (currentUser) {
      fetchUsers();
    }
  }, []);

  const {
    logo,
    title,
    img,
    sections,
    hours,
    desc,
    name,
    instaimg,
    topics,
    imgcolor,
  } = props;

  ////////////////////////////////////////////////////////////////////////////////
  const token = currentUser ? currentUser.token : [];
  const fetchUsers = async () => {
    const users = await fetch(" http://192.168.1.116:8000/api/user", {
      method: "get",
      headers: new Headers({
        Authorization: "Bearer " + token,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    });

    const userdata = await users.json();

    const whatuser = userdata; //..some array

    const theuser = [];

    for (const [index, value] of whatuser.entries()) {
      // value.id == currentUser.user.id ? theuser.push(value.id) : "";
      if (value.id == currentUser.user.id) {
        theuser.push(value);
      }
      // console.log(theuser.push(value.id == currentUser.user.id));
    }
    setTheuser(theuser[0]);
  };
  ///////////////////////////////////////////////////////////////////////////////

  const isButtonvar = () => {
    if (theuser.role_id == 4) {
      return <PurchaseButton />;
    } else if (theuser.role_id === undefined) {
      return <PurchaseButton />;
    } else {
      return <div />;
    }
  };
  return (
    <Wrapper>
      <BoxImgWrapper imgcolor={imgcolor}>
        <BoxImg src={img || "images/ills/example1.svg"} />
      </BoxImgWrapper>
      <Logo src={logo || "images/icons/cubase.svg"} />
      <Title>{title}</Title>
      <Desc1>
        {sections || "0"} أقسام - {hours || "2"} ساعات من الفيديو
      </Desc1>
      <Desc2>
        {desc ||
          " In this course we will show you how to create a promo video using After Effects."}
      </Desc2>
      <InstracturWrapper>
        <InstracturImg
          src={
            instaimg ||
            "https://scontent.fsaw1-6.fna.fbcdn.net/v/t1.0-9/109947688_2536568519897212_8481853244792259908_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=8Hl_KYSqMNoAX8Xy2Mp&_nc_ht=scontent.fsaw1-6.fna&oh=d51e6ee9c25002df4182a8f11c8da66c&oe=5FB8804F"
          }
        />
        <InstracturName>مدرب الدورة {name || "Husam Nasrullah"}</InstracturName>
      </InstracturWrapper>
      {isButtonvar()}

      <Line />
      <TopicWrapper>
        <TopicTitle>{topics || "20"} درس</TopicTitle>
        <TopicDesc>
          جميع الخطوات مشروحة للمبتدئين بطريقة مبسطة وسهلة لذلك ستجد كل شيء في
          متناول يديك ولن يتصعّب علي شيء.
        </TopicDesc>
      </TopicWrapper>
    </Wrapper>
  );
}

export default SectionDetail;

const Wrapper = styled.div`
  max-width: 1234px;
  display: grid;
  box-sizing: border-box;
  grid-template-columns: auto;
  justify-items: center;
  padding: 50px 0px 0px;
  gap: 40px;
  margin: 0px 20px;
`;

const BoxImgWrapper = styled.div`
  width: 360px;
  height: 280px;

  background:${(props) =>
    props.imgcolor ||
    "linear-gradient(209.21deg, #9F7FE5 13.57%, #4E99E3 98.38%)"};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 20px,
    rgba(255, 255, 255, 0.25) 0px 0px 0px 0.5px inset;
  box-sizing: border-box;
  border-radius: 20px;
  display: grid;
  -webkit-box-pack: center;
  place-content: center;
  grid-template-columns: auto;
  justify-items: center;
  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
margin-top:25px;
  &:hover {
    transform: scale(1.1);
    filter: hue-rotate(-30deg);

    }
  }
  &:hover img {
    transform: scale(0.8);
  }
`;

const BoxImg = styled.img`
  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

const Title = styled(H1)`
  color: rgb(255, 255, 255);
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.3) 0px 20px 40px;
`;

const Desc1 = styled(MediumText)``;

const Desc2 = styled(MediumText)`
  text-align: center;
  padding: 20px;
`;

const InstracturWrapper = styled.div`
  display: grid;
  grid-template-columns: 50px 250px;
  -webkit-box-pack: center;
  place-content: center;
  justify-items: center;
  align-items: center;
  z-index: 10;
`;
const InstracturImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100px;
`;

const InstracturName = styled(Caption)``;

const Line = styled.div`
width: 280px;
    height: 0.5px;
    margin: 0px auto;
    background: rgba(255, 255, 255, 0.3);
}`;
const TopicWrapper = styled.div`
  padding: 0px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TopicTitle = styled(Caption2)`
  color: rgba(255, 255, 255, 0.7);
  font-size: 30px;
  margin-bottom: 20px;
`;
const TopicDesc = styled(SmallText)`
  color: rgba(255, 255, 255, 0.9);
  margin: 12px auto 0px;
  text-align: center;
  font-size: 18px;
`;
