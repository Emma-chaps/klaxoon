import { useCallback, useEffect, useState } from "react";

export function useCurrentTimer(addedDate: Date): [addedTime: string] {
  const [addedTime, setAddedTime] = useState(`quelques secondes`);

  const updateAddedTime = useCallback((addedDate: Date) => {
    const currentDate = new Date();

    const daysDelay = currentDate.getDate() - addedDate.getDate();
    if (daysDelay > 0)
      return setAddedTime(`${daysDelay} jour${daysDelay === 1 ? "" : "s"}`);

    const hoursDelay = currentDate.getHours() - addedDate.getHours();
    if (hoursDelay > 0)
      return setAddedTime(`${hoursDelay} heure${hoursDelay === 1 ? "" : "s"}`);

    const minutesDelay = currentDate.getMinutes() - addedDate.getMinutes();
    setAddedTime(`${minutesDelay} minute${minutesDelay === 1 ? "" : "s"}`);
  }, []);

  useEffect(() => {
    const intervalCounter = setInterval(() => {
      updateAddedTime(addedDate);
    }, 60000);
    return () => clearInterval(intervalCounter);
  }, [updateAddedTime, addedDate]);

  return [addedTime];
}
