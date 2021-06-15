import React, { useState } from "react";
import AuthForm from "./AuthForm";
import { useMutation } from "@apollo/client";
import mutation from "../mutations/Signup";
import currentUser from "../queries/currentUser";

function SignupForm() {
  const [signUp] = useMutation(mutation);
  const [errors, setErrors] = useState([]);

  const onSubmit = ({ email, password }) => {
    signUp({
      variables: { email, password },
      refetchQueries: [{ query: currentUser }],
    }).catch((err) => {
      const errors = err.graphQLErrors.map((error) => error.message);
      setErrors(errors);
    });
  };
  return (
    <div>
      <h3>Sign Up</h3>
      <AuthForm onSubmit={onSubmit} errors={errors} />
    </div>
  );
}

export default SignupForm;
