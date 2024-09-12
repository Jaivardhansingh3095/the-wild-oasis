import { useForm } from "react-hook-form";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const { signup, isSigningup } = useSignup();

  function onSubmit({ email, password, fullName }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", {
            required: "This field is required",
          })}
          disabled={isSigningup}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Enter valid email address",
            },
          })}
          disabled={isSigningup}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          {...register("password", {
            minLength: {
              value: 8,
              message: "Password minimum length should be 8 charaters",
            },
          })}
          disabled={isSigningup}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            validate: (value) =>
              value === getValues().password || "Passwords do not match ",
          })}
          disabled={isSigningup}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          disabled={isSigningup}
          onClick={reset}
        >
          Cancel
        </Button>
        <Button disabled={isSigningup}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
