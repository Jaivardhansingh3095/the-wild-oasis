import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading: isLogging } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (loginData) => {
      queryClient.setQueriesData(["user"], loginData.user);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => toast.error("Credentials are invalid"),
  });

  return { login, isLogging };
}
