import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { getBookings } from "../../services/apiBookings";
import { PAGE_SIZE } from "../../utils/constant";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  //FILTER
  const filterValue = searchParams.get("status") || "all";
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  //SORT
  const sortByRaw = searchParams.get("sortBy") || "start_date-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  //PAGINATION
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  //Query
  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filterValue, field, direction, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  //PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  //Next page
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filterValue, field, direction, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });
  }

  //Previous page
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filterValue, field, direction, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });
  }

  return { isLoading, bookings, error, count };
}
