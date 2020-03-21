const SECOND = 1;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
export const MIN_OPENING_HOUR = 6;
export const HOURS_IN_DAY = 24;
export const DAY = HOURS_IN_DAY * HOUR;

export enum PeriodStartDate {
  HALF_DAY = 43200,
  ONE_DAY = 0,
  TWO_DAYS = 86400,
  TREE_DAYS = 172800,
  FOUR_DAYS = 259200,
  FIVE_DAYS = 345600,
  SIX_DAYS = 432000,
  SEVEN_DAYS = 518400,
  EIGHT_DAYS = 604800,
  MONTH = 2419200
}

