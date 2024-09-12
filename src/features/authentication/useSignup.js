import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
  const { mutate: signup, isLoading: isSigningup } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signupApi({ fullName, email, password }),
    onSuccess: (user) => {
      toast.success(
        `Account successfully created. Please verify the email: ${user.user.email} from the mail received.`
      );
    },
  });

  return { signup, isSigningup };
}
