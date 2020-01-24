export const parseDate = (dateString: string): Date => {
  // 28/10/2018
  const dateParts = dateString
    .split('/')
    .map((value: string): number => parseInt(value, 10));

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};