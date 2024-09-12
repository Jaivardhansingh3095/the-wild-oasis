import { useQuery } from "@tanstack/react-query";

import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActivity() {
  const { isLoading: isTodayStayLoading, data: todayStays } = useQuery({
    queryKey: ["today-act"],
    queryFn: getStaysTodayActivity,
  });

  return { isTodayStayLoading, todayStays };
}
