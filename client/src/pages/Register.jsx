import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { REGISTER_USER } from "../apollo/mutation/login.js";


export const Register = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);


  const [registerUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, { data: { registerUser: userData } }) {
      context.login(userData);
      navigate("/");
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors);
    },
    variables: {
      registerInput: values,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "300px",
        gap: "20px",
      }}
    >
      <input type="text" placeholder="Login" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Password" />
    </form>
  );
};
