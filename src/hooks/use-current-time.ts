import dayjs from "dayjs";
import { useEffect, useState } from "react";

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
