import React, { useState } from "react";
import AuthForm from "./AuthForm";
import mutation from "../mutations/Login";
import currentUser from "../queries/currentUser";
import { useMutation } from "@apollo/client";

function LoginForm() {
  const [login] = useMutation(mutation);
  const [errors, setErrors] = useState([]);
  const onSubmit = ({ email, password }) => {
    login({
      variables: {
        email,
        password,
      },
      refetchQueries: [{ query: currentUser }],
    }).catch((err) => {
      const errors = err.graphQLErrors.map((error) => error.message);
      setErrors(errors);
    });
  };
  return (
    <div>
      <h3>Login</h3>
      <AuthForm errors={errors} onSubmit={onSubmit} />{" "}
    </div>
  );
}

export default LoginForm;
