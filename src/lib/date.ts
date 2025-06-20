const months = {
  "01": "ENE",
  "02": "FEB",
  "03": "MAR",
  "04": "ABR",
  "05": "MAY",
  "06": "JUN",
  "07": "JUL",
  "08": "AGO",
  "09": "SET",
  "10": "OCT",
  "11": "NOV",
  "12": "DIC",
} as const;

export type MonthKey = keyof typeof months;

export const monthDate = (month: MonthKey) => {
  return months[month];
};
