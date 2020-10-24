import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const SubHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space_between;
  background: cornflowerBlue;
`;

export const Title = styled.h2`
  text-align: center;
  flex-basis: 60%;

  &:first-child {
    margin-left: 20%;
  }

  &:last-child {
    margin-right: 20%;
  }
`;

export const SubheaderButton = styled(Button)`
  margin: 10px 5%;
`;

const Subheader = ({ goBack, title, openForm = false }) => (
  <SubHeaderWrapper>
    {goBack && (
      <SubheaderButton onClick={goBack}>{`< Go Back`}</SubheaderButton>
    )}
    <Title>{title}</Title>
    {openForm && (
      <SubheaderButton onClick={openForm}>{`+ Add Review`}</SubheaderButton>
    )}
  </SubHeaderWrapper>
);

export default Subheader;
