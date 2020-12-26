export const OBJECT_TYPE = {
  USER: 1,
  ROOM: 2,
};

export const USER_ROLE = {
  NORMAL_USER: 1,
  HOUSE_OWNER: 2,
  ADMIN: 10,
};

export const USER_STATUS = {
  ACTIVE: 1,
  BLOCKED: 10,
};

export const ATTRIBUTE_VALUE_TYPE = {
  TEXT: 1,
  INTEGER: 2,
};

export const ROOM_TYPE = {
  BOARDING_HOUSE: 1,
  FULL_HOUSE: 2,
  FULL_APARTMENT: 3,
  MINI_APARTMENT: 4
};

export const ROOM_STATUS = {
  AVAILABLE: 0,
  NOT_AVAILABLE: 1,
};

export const ROOM_APPROVED_STATUS = {
  NOT_APPROVED: 0,
  APPROVED: 1,
};

export const ROOM_TERM = {
  WEEK: 1,
  MONTH: 2,
  QUARTER: 3,
  YEAR: 4,
};

export const PRICES = [
  {
    term: ROOM_TERM.WEEK,
    price: 300000,
  },
  {
    term: ROOM_TERM.MONTH,
    price: 1000000,
  },
  {
    term: ROOM_TERM.QUARTER,
    price: 2800000,
  },
  {
    term: ROOM_TERM.YEAR,
    price: 10000000,
  },
];

export const INVOICE_STATUS = {
  WAIT_FOR_APPROVE: 1,
  WAIT_FOR_PAY: 2,
  PAID: 3,
  CANCELLED: 4,
};

export const IMAGE_USED_TYPE = {
  AVATAR: 'avatar',
  COVER: 'cover',
  SLIDE: 'slide',
  OTHERS: 'others',
};