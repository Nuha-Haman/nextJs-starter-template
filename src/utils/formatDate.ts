export const formatDate = (date: Date): string => {
  const ymd = date.toISOString().split("T")[0].split("-");
  const format = `${ymd[0]}-${ymd[1]}-${ymd[2]}`;

  return format;
};
