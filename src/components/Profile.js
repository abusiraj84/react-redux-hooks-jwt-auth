import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <Wrapper>
      {currentUser.user.firstname + " " + currentUser.user.lastname}
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  padding-top: 240px;
  width: 1234px;
  margin: auto auto;
  direction: rtl;
  text-align: right;
`;
