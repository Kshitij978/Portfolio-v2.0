import { useEffect, useState } from "react";
import dayjs from "dayjs";

export const useCurrentTime = () => {
  const [time, setTime] = useState(dayjs().format("hh:mm A"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs().format("hh:mm A"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
};
