import React, { useState } from "react";

function AuthForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({ email, password });
  };

  return (
    <div className="row">
      <form className="col s6" onSubmit={onSubmit}>
        <div className="input-field">
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-field">
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="errors">
          {props.errors.map((error) => (
            <div key={error}>{error}</div>
          ))}
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default AuthForm;
