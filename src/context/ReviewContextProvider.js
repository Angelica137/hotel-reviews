import React from "react";
import Api from "../api";

export const ReviewsContext = React.createContext();

const initialValue = {
  reviews: [],
  loading: true,
  error: "",
};

const reducer = (value, action) => {
  switch (action.type) {
    case "GET_REVIEWS_SUCCESS":
      return {
        ...value,
        reviews: action.payload,
        loading: false,
      };
    case "GET_REVIEWS_ERROR":
      return {
        ...value,
        reviews: [],
        loading: false,
        error: action.payload,
      };
    case "ADD_REVIEW_SUCCESS":
      console.log(action);
      return {
        ...value,
        reviews: [...value.reviews, action.payload],
        loading: false,
      };
    case "ADD_REVIEW_ERROR":
      return {
        ...value,
        leading: false,
        error: "Something went wrong...",
      };
    default:
      return value;
  }
};
