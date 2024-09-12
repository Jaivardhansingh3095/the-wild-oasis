/* eslint-disable react/prop-types */

import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  const numBookings = bookings.length;

  const totalSales = bookings.reduce(
    (acc, booking) => acc + booking.total_price,
    0
  );

  const checkins = confirmedStays.length;

  const occupation =
    confirmedStays.reduce((acc, stay) => acc + stay.num_nights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="Booking"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(totalSales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + " %"}
      />
    </>
  );
}

export default Stats;
