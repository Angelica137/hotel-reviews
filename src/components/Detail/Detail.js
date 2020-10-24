import React from "react";
import styled from "styled-components";
import { HotelsContext } from "../../context/HotelsContextProvider";
import { ReviewsContext } from "../../context/ReviewsContextProvider";
import Subheader from "../Header/Subheader";
import ReviewItem from "./ReviewItem";

const ReviewsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const Alert = styled.span`
  width: 100%;
  text-align: center;
`;

const Detail = ({ match, history }) => {
  const { hotel, getHotelRequest } = React.useContext(HotelsContext);
  const { loading, error, reviews, getReviewsRequest } = React.useContext(
    ReviewsContext
  );
};
