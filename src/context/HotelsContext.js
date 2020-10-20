import React from "react";
import Api from "../api";

export const HotelsContext = React.createContext();

const initialValue = {
  hotels: [],
  hotel: {},
  loading: true,
  error: "",
};

const reducer = (value, action) => {
  switch (action.type) {
    case "GET_HOTELS_SUCCESS":
      return {
        ...value,
        hotels: action.payload,
        loading: false,
      };
    case "GET_HOTELS_ERROR":
      return {
        ...value,
        hotels: action.payload,
        loading: false,
      };
    case "GET_HOTEL_SUCCESS":
      return {
        ...value,
        hotel: action.payload,
        loading: false,
      };
    case "GET_HOTEL_ERROR":
      return {
        ...value,
        hotel: {},
        loading: false,
        error: action.payload,
      };
  }
};

const HotelContextProvider = ({ children }) => {
  const [value, dispatch] = React.useReducer(reducer, initialValue);

  const getHotelsRequest = async () => {
    const result = await Api.fetchData(
      "https://my-json-server.typicode.com/pranayfpackt/-React-Projects/hotels"
    );

    if (result.data && result.data.length) {
      dispatch({ type: "GET_HOTELS_SUCCESS", payload: result.data });
    } else {
      dispatch({ type: "GET_HOTELS_ERROR", payload: result.error });
    }
  };
};
