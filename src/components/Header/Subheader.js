import React from "react";
import styled from "styled-components";

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

const Subheader = ({ goBack, title, openForm = false }) => (
  <subHeaderWrapper>
    <h2>Subheader</h2>
  </subHeaderWrapper>
);

export default Subheader;
