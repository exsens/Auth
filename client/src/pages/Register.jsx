import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { REGISTER_USER } from "../apollo/mutation/login.js";

export const Register = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const [registerUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, { data: { registerUser: userData } }) {
      context.login(userData);
      navigate("/");
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors);
    },
    variables: {
      registerInput: {  email, username, password },
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser()
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
      <input
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        placeholder="Login"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPass(e.target.value)}
        type="text"
        placeholder="Password"
      />

      <button type="submit">Register</button>
    </form>
  );
};
