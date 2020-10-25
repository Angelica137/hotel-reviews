import React from "react";
import styled from "styled-components";
import { ReviewsContext } from "../../context/ReviewsContextProvider";
import Subheader from "../Header/Subheader";
import FormInput from "./FormInput";
import Button from "../Button/Button";

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const SubmitButton = styled(Button)`
  background: blue;
  margin: 2% 0;
`;

const Form = ({ match, history }) => {
  const { addReviewRequest } = React.useContext(ReviewsContext);
  const [title, setTitle] = React.useState("");
  const [rating, setRating] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleOnChange = (e) => {
    e.preventDefault();
    addReviewRequest({
      title,
      rating,
      description,
      id: Math.floor(Math.random() * 100),
      hotelId: parseInt(match.params.id),
    });
    history.goBack();
  };
};
