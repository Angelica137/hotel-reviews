import React from "react";
import Hotels from "../components/Hotels/Hotels";
import HotelsContextProvider, { HotelsContext } from "./HotelsContextProvider";

const GlobalContext = ({ children }) => {
  return (
    <HotelsContextProvider>
      <h2>Reviews live here</h2>
    </HotelsContextProvider>
  );
};

export default GlobalContext;
