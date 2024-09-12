import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useChecking() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        is_paid: true,
        status: "checked-in",
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} has been successfully checked in.`);
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },
    onError: () => toast.error(`There was an error while checking in`),
  });

  return { checkin, isCheckingIn };
}
