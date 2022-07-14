import { formatDistance } from "date-fns";

export const timeConverter = (string) => {

  const year = string.substring(0, 4);

  const month = string.slice(5, 7);

  const day = string.slice(8, 10);
  const time = formatDistance(
    new Date(year, month, day),
    new Date(2022, 0, 1),
    { addSuffix: true }
  );
  return time;
};
