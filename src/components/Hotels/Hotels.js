import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Subheader from "../Header/Subheader";

const HotelItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const HotelLink = styled(Link)`
  color: black;
  text-decorator: none;
`;

const Alert = styled.span`
  width: 100%;
  text-align: center;
`;

const Hotels = ({ history }) => {
  return (
    <>
      <Subheader title="Your reviews" />
      <HotelItemsWrapper>
        <h3>This is a hotel</h3>
      </HotelItemsWrapper>
    </>
  );
};

export default Hotels;
