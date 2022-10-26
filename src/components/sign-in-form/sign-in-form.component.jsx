import React from "react";
import "./sign-in-form.style.scss";
import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signinWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFirlds = () => {
    setFormFields(defaultFormFields);
  };

  const handelSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFirlds();
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("User not found");
      } else if (error.code === "auth/wrong-password") {
        alert("Incorrect password for email");
      } else {
        console.log("User creation encountered an error", error);
      }
    }
  };

  const logGoogleUser = async () => {
    await signinWithGooglePopup();
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handelSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button onClick={logGoogleUser} buttonType="google" type="button">
            Sign in with google{" "}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
